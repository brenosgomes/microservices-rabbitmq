import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductsApiB,
  ProductsApiBDocument,
} from '../../schemas/products-api-b';

export class CheckIfProductAlreadyExistsAction {
  constructor(
    @InjectModel(ProductsApiB.name)
    private productModel: Model<ProductsApiBDocument>,
  ) {}

  async do(name: string) {
    try {
      return await this.productModel.findOne({ name });
    } catch (err) {
      throw new BadRequestException('Erro ao buscar produto');
    }
  }
}
