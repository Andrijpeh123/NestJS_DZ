// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();  
async function bootstrap() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
