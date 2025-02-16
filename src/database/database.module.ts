import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MyDbProvider } from './db.provider';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DATABASE_URL!, { dbName: 'pekh' }), // Додано
  ],
  providers: [MyDbProvider],
  exports: [MyDbProvider, MongooseModule], // Додано MongooseModule в exports
})
export class DatabaseModule {}
