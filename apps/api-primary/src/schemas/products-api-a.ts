import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsApiADocument = ProductsApiA & Document;

@Schema({
  collection: 'Products_Api_A',
})
export class ProductsApiA {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: true, type: Number })
  value: number;
}

export const ProductApiASchema = SchemaFactory.createForClass(ProductsApiA);
