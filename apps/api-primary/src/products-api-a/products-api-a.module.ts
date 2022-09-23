import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsApiAService } from './products-api-a.service';
import { ProductsApiAController } from './products-api-a.controller';
import { CreateProductAction } from './actions/create-product.action';
import { ProductsApiA, ProductApiASchema } from '../schemas/products-api-a';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';
import { RmqModule } from '@app/common';
import { PRODUCT_SERVICE } from '../constants/services';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductsApiA.name, schema: ProductApiASchema },
    ]),
    RmqModule.register({
      name: PRODUCT_SERVICE,
    }),
  ],
  controllers: [ProductsApiAController],
  providers: [
    ProductsApiAService,
    CreateProductAction,
    CheckIfProductAlreadyExistsAction,
  ],
})
export class ProductsApiAModule {}
