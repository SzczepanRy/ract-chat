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

    if (newUser) {
      return newUser;
    } else {
      return { message: 'User not created' };
    }
  }
  async findUserBy(login: string) {
    const users = await prisma.user.findMany({
      where: {
        groups: {
          some: {
            user: {
              login: login,
            },
          },
        },
      },
    });
    if (users) {
      return users;
    } else {
      return { message: 'did not find any users' };
    }
  }
}
