import { Injectable } from '@nestjs/common';
import { FindAllProductsAction } from './actions/find-all-products.action';
import { CreateProductsApiBDto } from './dto/create-products-api-b.dto';
import { UpdateProductsApiBDto } from './dto/update-products-api-b.dto';

@Injectable()
export class ProductsApiBService {
  constructor(private readonly findAllProductsAction: FindAllProductsAction) {}

  findAll(page = 1, limit = 10) {
    return this.findAllProductsAction.do(page, limit);
  }
}
