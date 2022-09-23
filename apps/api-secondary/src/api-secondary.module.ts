import { RmqModule } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import * as Joi from 'joi';
import { ApiSecondaryController } from './api-secondary.controller';
import { ApiSecondaryService } from './api-secondary.service';
import { ProductsApiBModule } from './products-api-b/products-api-b.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-secondary/.env',
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_PRODUCT_QUEUE: Joi.string().required(),
      }),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DATABASE_URL'),
        user: configService.get('DATABASE_USER'),
        pass: configService.get('DATABASE_PASS'),
        dbName: configService.get('DATABASE_NAME'),
        retryWrites: false,
        useUnifiedTopology: false,
        useNewUrlParser: true,
        retryAttempts: 2,
      }),
    }),
    ProductsApiBModule,
    RmqModule,
  ],
  controllers: [ApiSecondaryController],
  providers: [ApiSecondaryService],
})
export class ApiSecondaryModule {}
