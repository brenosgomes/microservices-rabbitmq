import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsApiADto } from './create-products-api-a.dto';

export class UpdateProductsApiADto extends PartialType(CreateProductsApiADto) {}
