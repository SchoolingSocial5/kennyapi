import mongoose, { Document } from 'mongoose';
export interface IFaq extends Document {
    category: string;
    question: string;
    answer: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<IFaq, {}, {}, {}, mongoose.Document<unknown, {}, IFaq, {}, mongoose.DefaultSchemaOptions> & IFaq & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IFaq>;
export default _default;
