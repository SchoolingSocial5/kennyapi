import mongoose, { Schema, Document } from 'mongoose';

export interface IService extends Document {
  title: string;
  picture: string;
  youtubeUrl?: string;
  description: string;
  minPrice: number;
  maxPrice: number;
  maxDuration: string;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema: Schema = new Schema({
  title: { type: String, required: true },
  picture: { type: String, required: true },
  youtubeUrl: { type: String },
  description: { type: String, required: true },
  minPrice: { type: Number, required: true },
  maxPrice: { type: Number, required: true },
  maxDuration: { type: String, required: true },
}, { timestamps: true });

export default mongoose.model<IService>('Service', ServiceSchema);
