import { Module } from '@nestjs/common';
import { MessageModule } from 'src/message/message.module';
import { MessageService } from 'src/message/message.service';
import { SocketGateway } from './gateway';

@Module({
  imports: [MessageModule],
  providers: [MessageService, SocketGateway],
})
export class GatewayModule {
  constructor(private messageService: MessageService) {}
}
