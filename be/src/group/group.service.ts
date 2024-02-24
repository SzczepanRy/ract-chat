import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class GroupService {
  async addGroup(groupname: string) {
    const newGroup = await prisma.group.create({
      data: {
        groupname: groupname,
      },
    });
    console.log(newGroup);

    if (newGroup) {
      return newGroup;
    } else {
      return { message: 'group not created' };
    }
  }
  async findGroupsByUser(login: string) {
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
    if (groups) {
      return groups;
    } else {
      return { message: 'did not find any users' };
    }
  }
}
