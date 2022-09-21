import { Controller, Post, Body } from '@nestjs/common';
import { ProductsApiAService } from './products-api-a.service';
import { CreateProductsApiADto } from './dto/create-products-api-a.dto';

@Controller('products-a')
export class ProductsApiAController {
  constructor(private readonly productsApiAService: ProductsApiAService) {}

  @Post()
  create(@Body() createProductsApiADto: CreateProductsApiADto) {
    return this.productsApiAService.create(createProductsApiADto);
  }
}
