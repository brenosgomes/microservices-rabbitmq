import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductsApiB,
  ProductsApiBDocument,
} from '../../schemas/products-api-b';
import { CreateProductsApiBDto } from '../dto/create-products-api-b.dto';

export class CreateProductAction {
  constructor(
    @InjectModel(ProductsApiB.name)
    private productModel: Model<ProductsApiBDocument>,
  ) {}

  do(createProductsApiBDto: CreateProductsApiBDto) {
    try {
      return this.productModel.create(createProductsApiBDto);
    } catch (err) {
      throw new BadRequestException('Não foi possivel criar o produto');
    }
  }
}
