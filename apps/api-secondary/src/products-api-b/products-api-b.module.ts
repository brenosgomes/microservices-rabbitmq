import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsApiBService } from './products-api-b.service';
import { ProductsApiBController } from './products-api-b.controller';
import { FindAllProductsAction } from './actions/find-all-products.action';
import { ProductApiBSchema, ProductsApiB } from '../schemas/products-api-b';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductsApiB.name, schema: ProductApiBSchema },
    ]),
  ],
  controllers: [ProductsApiBController],
  providers: [ProductsApiBService, FindAllProductsAction],
})
export class ProductsApiBModule {}
