import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class MessageService {
  async addMessage(loginId: number, message: string, groupname: string) {
    try {
      const newMessage = await prisma.post.create({
        data: {
          createdAt: new Date(),
          message: message,
          author: {
            connect: {
              id: loginId,
              // login: login,
            },
          },
          group: {
            connect: {
              groupname: groupname,
            },
          },
        },
      });
      console.log(newMessage);
      return newMessage;
    } catch (err) {
      return { message: err };
    }
  }
  async finMessageByGroup(groupname: string) {
    try {
      const messages = await prisma.post.findMany({
        where: {
          group: {
            groupname: groupname,
          },
        },
      });
      console.log(messages);

      return messages;
    } catch (err) {
      return { message: err };
    }
  }
}
