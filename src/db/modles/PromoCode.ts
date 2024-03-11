import mongoose, { Document, Model } from "mongoose";

interface IPromoCode extends Document {
    userDiscount: number;
    hisCut: number;
    mobileNumber: string;
    promoCode: string;
    upiId: string;
    email: string;
}

const schema = new mongoose.Schema<IPromoCode>({
    userDiscount: { type: Number, required: true },
    hisCut: { type: Number, required: true },
    mobileNumber: { type: String, required: true },
    promoCode: { type: String, required: true },
    upiId: { type: String, required: true },
    email: { type: String, required: true },
});

const PromoCode =mongoose.models.promoCode|| mongoose.model<IPromoCode>('promocodes', schema);

export default PromoCode;