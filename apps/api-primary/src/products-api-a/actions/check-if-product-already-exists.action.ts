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

  async do(name: string) {
    try {
      return await this.productModel.findOne({ name });
    } catch (err) {
      throw new BadRequestException('Erro ao buscar produto');
    }
  }
}
