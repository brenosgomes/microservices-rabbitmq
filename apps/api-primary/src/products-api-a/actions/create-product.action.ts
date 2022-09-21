import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductsApiA,
  ProductsApiADocument,
} from '../../schemas/products-api-a';
import { CreateProductsApiADto } from '../dto/create-products-api-a.dto';

export class CreateProductAction {
  constructor(
    @InjectModel(ProductsApiA.name)
    private productModel: Model<ProductsApiADocument>,
  ) {}

  do(createProductsApiADto: CreateProductsApiADto) {
    try {
      return this.productModel.create(createProductsApiADto);
    } catch (err) {
      throw new BadRequestException('Não foi possivel criar o produto');
    }
  }
}
