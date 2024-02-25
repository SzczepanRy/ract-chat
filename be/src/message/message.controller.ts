import { Body, Controller, Post } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageDto } from 'src/dto/message.dto';

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
  ): Promise<MessageDto[] | { message: string }> {
    return this.messageService.finMessageByGroup(groupname);
  }
}
