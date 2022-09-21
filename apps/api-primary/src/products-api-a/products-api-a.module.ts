import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsApiAService } from './products-api-a.service';
import { ProductsApiAController } from './products-api-a.controller';
import { CreateProductAction } from './actions/create-product.action';
import { ProductsApiA, ProductApiASchema } from '../schemas/products-api-a';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductsApiA.name, schema: ProductApiASchema },
    ]),
  ],
  controllers: [ProductsApiAController],
  providers: [
    ProductsApiAService,
    CreateProductAction,
    CheckIfProductAlreadyExistsAction,
  ],
})
export class ProductsApiAModule {}
