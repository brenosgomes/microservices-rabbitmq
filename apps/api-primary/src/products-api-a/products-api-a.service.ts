import { BadRequestException, Injectable } from '@nestjs/common';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';
import { CreateProductAction } from './actions/create-product.action';
import { CreateProductsApiADto } from './dto/create-products-api-a.dto';

@Injectable()
export class ProductsApiAService {
  constructor(
    private readonly createProductAction: CreateProductAction,
    private readonly checkIfProductAlreadyExistsAction: CheckIfProductAlreadyExistsAction,
  ) {}

  async create(createProductsApiADto: CreateProductsApiADto) {
    const verifyProduct = await this.checkIfProductAlreadyExistsAction.do(
      createProductsApiADto.name,
    );

    if (!verifyProduct) {
      return this.createProductAction.do(createProductsApiADto);
    } else {
      throw new BadRequestException('Produto já existe');
    }
  }
}
