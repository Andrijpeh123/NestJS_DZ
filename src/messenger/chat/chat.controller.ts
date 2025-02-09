import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ChatService } from '../user/user.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  getMessages() {
    return this.chatService.getMessages();
  }

  @Get(':id')
  getMessageById(@Param('id') id: string) {
    return this.chatService.getMessageById(Number(id));
  }

  @Post()
  createMessage(@Body('content') content: string) {
    return this.chatService.createMessage(content);
  }

  @Put(':id')
  updateMessage(@Param('id') id: string, @Body('content') content: string) {
    return this.chatService.updateMessage(Number(id), content);
  }

  @Delete(':id')
  deleteMessage(@Param('id') id: string) {
    return this.chatService.deleteMessage(Number(id));
  }
}




// import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
// import { AdPlacementService, Ad } from '../user/user.service';

// @Controller('ads')
// export class AdsController {
//     constructor(
//         private readonly adsPlacementService: AdPlacementService
//     ) {}

//     @Post() 
//     createUser(@Body() user: Omit<Ad, 'id'>) {
//         return this.adsPlacementService.createAd(user);
//     }

//     @Get('/:id') 
//     getUser(@Param('id') userId: number) {
//         return this.adsPlacementService.getAd(userId);
//     }

//     @Get() 
//     getUsers() {
//         return this.adsPlacementService.getAds();
//     }
// }
