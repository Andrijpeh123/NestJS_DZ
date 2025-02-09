import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('hello/:name')
//   getHello(
//     @Param('name') name:string,
//     @Query('name') LastName:string,

//   ): string {
//     return this.appService.getHello(name + ' ' + LastName);
//   }


    
//   @Post('Andrij')
//   sayHello(@Body() body: any): string {
//     return 
//   }
// }


