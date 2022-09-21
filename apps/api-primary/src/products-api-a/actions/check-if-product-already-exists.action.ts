import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductsApiA,
  ProductsApiADocument,
} from '../../schemas/products-api-a';

export class CheckIfProductAlreadyExistsAction {
  constructor(
    @InjectModel(ProductsApiA.name)
    private productModel: Model<ProductsApiADocument>,
  ) {}

  do(name: string) {
    try {
      if (this.productModel.find({ name })) {
        return false;
      } else {
        return true;
      }
    } catch (err) {
      throw new BadRequestException('Erro ao buscar produto');
    }
  }
}
