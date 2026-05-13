import mongoose, { Document } from 'mongoose';
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
declare const _default: mongoose.Model<IService, {}, {}, {}, mongoose.Document<unknown, {}, IService, {}, mongoose.DefaultSchemaOptions> & IService & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IService>;
export default _default;
