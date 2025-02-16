import { Controller, Post, Body, Get, Delete, Param, Put, Patch } from '@nestjs/common';
import { UserService } from '../user/user.service';
@Controller('chat')
export class ChatController {
  constructor(private readonly userService: UserService) {}

  @Post('message')
  async createMessage(@Body() messageData: { userId: string; text: string }) {
    const user = await this.userService.findById(messageData.userId);
    if (!user) {
      throw new Error('User not found');
    }
    return { message: 'Message sent successfully', data: messageData };
  }

  @Get('test')
  test() {
    return { message: 'Chat works!' };
  }

  @Put('message/:id')
  async updateMessage(@Param('id') id: string, @Body() updateData: { text: string }) {
    return { message: 'Message updated successfully', data: { id, ...updateData } };
  }

  @Patch('message/:id')
  async partialUpdateMessage(@Param('id') id: string, @Body() partialData: { text?: string }) {
    return { message: 'Message partially updated successfully', data: { id, ...partialData } };
  }

  @Delete('message/:id')
  async deleteMessage(@Param('id') id: string) {
    return { message: 'Message deleted successfully', data: { id } };
  }
}
