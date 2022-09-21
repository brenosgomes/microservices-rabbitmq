import { IsString, IsOptional } from 'class-validator';

export class CreateProductsApiADto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  value: number;
}
