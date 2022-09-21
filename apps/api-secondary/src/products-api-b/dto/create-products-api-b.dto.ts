import { IsString, IsOptional } from 'class-validator';

export class CreateProductsApiBDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  value: number;
}
