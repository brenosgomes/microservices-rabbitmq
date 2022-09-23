import { IsString, IsOptional, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductsApiBDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;
}
