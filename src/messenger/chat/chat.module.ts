import { Module } from '@nestjs/common';
import { ChatController } from './chat.controller';
import { UserModule } from '../user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ChatController],
})
export class ChatModule {}
