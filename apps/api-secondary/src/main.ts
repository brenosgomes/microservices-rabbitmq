import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { ApiSecondaryModule } from './api-secondary.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiSecondaryModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('PRODUCT'));
  await app.startAllMicroservices();
  await app.listen(3001);
}
bootstrap();
