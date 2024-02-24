import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MessageController } from './message/message.controller';
import { MessageModule } from './message/message.module';
import { GroupController } from './group/group.controller';
import { GroupModule } from './group/group.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [MessageModule, GroupModule, UserModule],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
