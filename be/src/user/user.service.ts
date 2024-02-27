import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { create } from 'domain';
const prisma = new PrismaClient();
@Injectable()
export class UserService {
  async addUser(
    login: string,
    password: string,
    groupname: string,
    // groupId: number,
  ) {
    try {
      const newUser = await prisma.user.create({
        data: {
          login: login,
          password: password,

          groups: {
            create: [
              {
                group: {
                  connect: {
                    groupname: groupname,
                  },
                },
              },
            ],
          },
        },
      });
      console.log(newUser);

      return newUser;
    } catch (err) {
      return { message: err };
    }
  }
  async findUserByGroup(groupname: string) {
    try {
      const users = await prisma.user.findMany({
        where: {
          groups: {
            some: {
              group: {
                groupname: groupname,
              },
            },
          },
        },
      });
      let modUsers = users.map((user) => {
        return { id: user.id, login: user.login };
      });
      return modUsers;
    } catch (err) {
      return { message: err };
    }
  }
  async findUser(login: string, password: string) {
    try {
      const users = await prisma.user.findFirst({
        where: {
          login: login,
          password: password,
        },
      });
      return { id: users.id, login: users.login };
    } catch (err) {
      return { message: 'not a valid password' };
    }
  }
}
