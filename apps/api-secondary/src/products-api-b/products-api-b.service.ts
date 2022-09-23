import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';
import { CreateProductAction } from './actions/create-product.action';
import { FindAllProductsAction } from './actions/find-all-products.action';
import { CreateProductsApiBDto } from './dto/create-products-api-b.dto';
import { UpdateProductsApiBDto } from './dto/update-products-api-b.dto';

@Injectable()
export class ProductsApiBService {
  constructor(
    private readonly createProductAction: CreateProductAction,
    private readonly checkIfProductAlreadyExistsAction: CheckIfProductAlreadyExistsAction,
    private readonly findAllProductsAction: FindAllProductsAction,
  ) {}

  findAll(page = 1, limit = 10) {
    return this.findAllProductsAction.do(page, limit);
  }

  async create(createProductsApiBDto: CreateProductsApiBDto) {
    const verifyProduct = await this.checkIfProductAlreadyExistsAction.do(
      createProductsApiBDto.name,
    );

    if (!verifyProduct) {
      this.createProductAction.do(createProductsApiBDto);
    }
  }
}
