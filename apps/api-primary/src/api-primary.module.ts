import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiPrimaryController } from './api-primary.controller';
import { ApiPrimaryService } from './api-primary.service';
import { ProductsApiAModule } from './products-api-a/products-api-a.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-primary/.env',
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
    ProductsApiAModule,
  ],
  controllers: [ApiPrimaryController],
  providers: [ApiPrimaryService],
})
export class ApiPrimaryModule {}
