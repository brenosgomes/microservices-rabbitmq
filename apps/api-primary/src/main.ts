import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiPrimaryModule } from './api-primary.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiPrimaryModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
