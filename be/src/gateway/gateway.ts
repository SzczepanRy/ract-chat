import { OnModuleInit } from '@nestjs/common';
import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'dgram';

import { Server } from 'socket.io';
import { MessageService } from 'src/message/message.service';

@WebSocketGateway({ cors: true })
export class SocketGateway implements OnModuleInit {
  constructor(private messageService: MessageService) {}

  @WebSocketServer()
  server: Server;

  onModuleInit() {
    this.server.on('connection', async (socket: any) => {
      console.log('connected');
      console.log(socket.id);
    });
  }

  @SubscribeMessage('loadChat')
  async loadChat(
    @MessageBody() groupname: string,
    @ConnectedSocket() client: Socket,
  ) {
    // let { groupname } = data;
    console.log(groupname + 'SOCKETTTTT');

    let res = await this.messageService.findMessageByGroup(groupname);
    console.log(res);

    client.emit('resChat', res);
  }

  @SubscribeMessage('newMessage')
  async onNewMessage(@MessageBody() messageString: string) {
    console.log(messageString);
    let messageJson = JSON.parse(messageString);
    messageJson = JSON.parse(JSON.stringify(messageJson));
    console.log(messageJson);
    let { loginId, message, groupname } = messageJson;
    console.log(loginId, message, groupname);

    await this.messageService.addMessage(loginId, message, groupname);
    let res = await this.messageService.findMessageByGroup(groupname);

    this.server.emit('resChat', res);
  }
}
