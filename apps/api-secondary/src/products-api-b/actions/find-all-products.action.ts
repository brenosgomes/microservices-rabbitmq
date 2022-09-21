import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ProductsApiB,
  ProductsApiBDocument,
} from '../../schemas/products-api-b';

export class FindAllProductsAction {
  constructor(
    @InjectModel(ProductsApiB.name)
    private productModel: Model<ProductsApiBDocument>,
  ) {}

  async do(page = 1, limit = 10) {
    const [results, count] = await Promise.all([
      this.productModel
        .find()
        .skip(page - 1)
        .limit(limit),
      this.productModel.count(),
    ]);
    return { results, count };
  }
}
