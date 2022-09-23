import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CheckIfProductAlreadyExistsAction } from './actions/check-if-product-already-exists.action';
import { CreateProductAction } from './actions/create-product.action';
import { CreateProductsApiADto } from './dto/create-products-api-a.dto';
import { ClientProxy } from '@nestjs/microservices';
import { PRODUCT_SERVICE } from '../constants/services';

@Injectable()
export class ProductsApiAService {
  constructor(
    private readonly createProductAction: CreateProductAction,
    private readonly checkIfProductAlreadyExistsAction: CheckIfProductAlreadyExistsAction,
    @Inject(PRODUCT_SERVICE) private productClient: ClientProxy,
  ) {}

  async create(createProductsApiADto: CreateProductsApiADto) {
    const verifyProduct = await this.checkIfProductAlreadyExistsAction.do(
      createProductsApiADto.name,
    );

    if (!verifyProduct) {
      this.productClient.emit('product_created', createProductsApiADto);
      return this.createProductAction.do(createProductsApiADto);
    } else {
      throw new BadRequestException('Produto já existe');
    }
  }
}
