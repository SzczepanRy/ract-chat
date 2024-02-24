import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
@Injectable()
export class MessageService {
  async addMessage(login: string, message: string, groupname: string) {}
}
