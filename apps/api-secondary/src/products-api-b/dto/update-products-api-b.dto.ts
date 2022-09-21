import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsApiBDto } from './create-products-api-b.dto';

export class UpdateProductsApiBDto extends PartialType(CreateProductsApiBDto) {}
