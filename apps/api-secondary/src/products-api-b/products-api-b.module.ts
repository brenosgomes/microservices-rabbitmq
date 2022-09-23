import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsApiBService } from './products-api-b.service';
import { ProductsApiBController } from './products-api-b.controller';
import { FindAllProductsAction } from './actions/find-all-products.action';
import { ProductApiBSchema, ProductsApiB } from '../schemas/products-api-b';
import { RmqModule } from '@app/common';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';
import { CreateProductAction } from './actions/create-product.action';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProductsApiB.name, schema: ProductApiBSchema },
    ]),
  ],
  controllers: [ProductsApiBController],
  providers: [
    ProductsApiBService,
    FindAllProductsAction,
    CreateProductAction,
    CheckIfProductAlreadyExistsAction,
  ],
})
export class ProductsApiBModule {}
