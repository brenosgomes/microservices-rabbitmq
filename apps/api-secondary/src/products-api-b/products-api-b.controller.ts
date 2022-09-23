import { Controller, Get, Query } from '@nestjs/common';
import { ProductsApiBService } from './products-api-b.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateProductsApiBDto } from './dto/create-products-api-b.dto';

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

  @EventPattern('product_created')
  async handleProductCreated(@Payload() data: CreateProductsApiBDto) {
    this.productsApiBService.create(data);
  }
}
