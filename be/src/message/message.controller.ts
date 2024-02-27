import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from 'src/dto/message.dto';

interface messageI {
  id: number;
  createdAt: Date;
  author: string;
  groupId: number;
  message: string;
}

@Controller('message')
export class MessageController {
  constructor(private messageService: MessageService) {}

  @Post('add')
  add(
    @Body()
    {
      loginId,
      message,
      groupname,
    }: {
      loginId: number;
      message: string;
      groupname: string;
    },
  ): Promise<MessageDto | { message: string }> {
    return this.messageService.addMessage(loginId, message, groupname);
  }
  @Post('findMessageByGroup')
  findMessageByGroup(
    @Body() { groupname }: { groupname: string },
  ): Promise<messageI[] | { message: string }> {
    console.log(groupname + 'AAAAAAAAAAA');

    return this.messageService.findMessageByGroup(groupname);
  }
}
