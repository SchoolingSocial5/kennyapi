import mongoose, { Document } from 'mongoose';
export interface ICompany extends Document {
    name: string;
    domain: string;
    email: string;
    phoneNumber: string;
    address: string;
    bankName: string;
    accountName: string;
    accountNumber: string;
    createdAt: Date;
    updatedAt: Date;
}
declare const _default: mongoose.Model<ICompany, {}, {}, {}, mongoose.Document<unknown, {}, ICompany, {}, mongoose.DefaultSchemaOptions> & ICompany & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, ICompany>;
export default _default;
