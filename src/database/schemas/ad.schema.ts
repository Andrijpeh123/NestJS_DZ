import { Schema, Document } from 'mongoose';

export interface IAd extends Document {
  title: string;
  description: string;
  price: number;
}

export const AdSchema = new Schema<IAd>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});
