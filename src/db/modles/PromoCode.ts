import mongoose from "mongoose";

const schema = new mongoose.Schema({
    userDiscount: { type: Number, required: true },
    hisCut: { type: Number, required: true },
    mobileNumber: { type: String, required: true },
    promoCode: { type: String, required: true },
    upiId: { type: String, required: true },
    email: { type: String, required: true },
});
// monngoose.models.users||monngoose.model('users', Userschema);

const PromoCode = mongoose.models.promocode || mongoose.model('promocode',schema)

export default PromoCode;