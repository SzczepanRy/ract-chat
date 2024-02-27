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
  async findMessageByGroup(groupname: string) {
    try {
      let messages = await prisma.post.findMany({
        where: {
          group: {
            groupname: groupname,
          },
        },
      });
      // console.log(messages);
      const users = await prisma.user.findMany({
        where: {},
      });
      // console.log(users);

      let modMessages = messages.map(
        ({ id, message, createdAt, authorId, groupId }) => {
          let login = [];
          users.map((el) => {
            if (authorId == el.id) {
              login.push(el.login);
            }
          });
          return { id, createdAt, message, author: login[0], groupId };
        },
      );

      // console.log(modMessages);

      return modMessages;
    } catch (err) {
      return { message: err };
    }
  }
}
