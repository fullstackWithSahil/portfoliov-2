import mongoose, { Document, Model } from "mongoose";

export interface IPromoCode extends Document {
    userDiscount: number;
    hisCut: number;
    mobileNumber: string;
    promoCode: string;
    upiId: string;
}

const schema = new mongoose.Schema<IPromoCode>({
    userDiscount: { type: Number, required: true },
    hisCut: { type: Number, required: true },
    mobileNumber: { type: String, required: true },
    promoCode: { type: String, required: true },
    upiId: { type: String, required: true },
});

const PromoCode: Model<IPromoCode> = mongoose.models.PromoCode || mongoose.model<IPromoCode>('users', schema);

export default PromoCode;