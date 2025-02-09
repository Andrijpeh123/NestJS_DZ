import { Module } from '@nestjs/common';
import { ChatController } from './messenger/chat/chat.controller';
import { ChatService } from './messenger/user/user.service'; // Використовуємо сервіс користувачів напряму

@Module({
  controllers: [ChatController],
  providers: [ChatService], // Реєструємо сервіс напряму
})
export class AppModule {}
