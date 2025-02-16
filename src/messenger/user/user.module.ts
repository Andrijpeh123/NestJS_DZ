import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserSchema } from '../../database/schemas/user.schema';
import { DatabaseModule } from '../../database/database.module'; // Додано

@Module({
  imports: [
    DatabaseModule, // Додано
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
