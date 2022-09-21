import { Controller, Get, Query } from '@nestjs/common';
import { ProductsApiBService } from './products-api-b.service';

@Controller('products-b')
export class ProductsApiBController {
  constructor(private readonly productsApiBService: ProductsApiBService) {}

  @Get()
  findAll(@Query() query) {
    return this.productsApiBService.findAll(
      query?.page ?? 1,
      query?.limit ?? 10,
    );
  }
}
