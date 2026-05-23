import mongoose, { Document } from 'mongoose';
export interface IService extends Document {
    image: string;
    icon: string;
    title: string;
    subtitle: string;
    content: string;
    videoUrl?: string;
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
