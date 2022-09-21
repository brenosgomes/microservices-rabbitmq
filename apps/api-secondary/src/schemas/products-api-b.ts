import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductsApiBDocument = ProductsApiB & Document;

@Schema({
  collection: 'Products_Api_B',
})
export class ProductsApiB {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: false, type: String })
  description: string;

  @Prop({ required: true, type: Number })
  value: number;
}

export const ProductApiBSchema = SchemaFactory.createForClass(ProductsApiB);
