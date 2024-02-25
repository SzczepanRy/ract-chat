import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class GroupService {
  async addGroup(groupname: string) {
    try {
      const newGroup = await prisma.group.create({
        data: {
          groupname: groupname,
        },
      });
      console.log(newGroup);

      return newGroup;
    } catch (err) {
      return { message: err };
    }
  }
  async findGroupsByUser(login: string) {
    try {
      const groups = await prisma.group.findMany({
        where: {
          users: {
            some: {
              user: {
                login: login,
              },
            },
          },
        },
      });
      return groups;
    } catch (err) {
      return { message: err };
    }
  }
}
