import { NestFactory } from '@nestjs/core';
import { ApiSecondaryModule } from './api-secondary.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiSecondaryModule);
  await app.listen(3000);
}
bootstrap();
