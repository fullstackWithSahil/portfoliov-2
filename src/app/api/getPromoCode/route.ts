import { connectMongo } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import PromoCode from "@/db/modles/PromoCode";
import sendMail from "@/utils/mail";

export async function POST(request:NextRequest){
    try {
        await connectMongo();
        const req = await request.json();
        const {userDiscount,hisCut,mobileNumber,promoCode,upiId} = req

        const encryptedcookie = request.cookies.get('token')||{value:"sahil"};
        const tokenData = jwt.verify(encryptedcookie.value,process.env.SECRET_KEY!)

        const code = new PromoCode({
            userDiscount,
            hisCut,
            mobileNumber,
            promoCode,
            upiId,
            email:(tokenData as { email: string }).email,
        });

        const text = `your promocode has been registered now everyone using code ${promoCode} will get a discount of ${userDiscount}% and you will get a cut of ${hisCut}% these are your details.

        email:${(tokenData as { email: string }).email}
        yourCut:${hisCut}
        discount:${userDiscount}
        phoneNumber:${mobileNumber}
        upiId:${upiId}

        if you have any queries or problems related to these credecials you can reply to this email or register an enquiry on the website`

        await code.save();
        // await sendMail({
        //     to:(tokenData as { email: string }).email,
        //     subject:"confirmation for your promotion code",
        //     text
        // })
        return new NextResponse(JSON.stringify({message:"promo code saved check your mail"}))
    } catch (error) {
        return new NextResponse(JSON.stringify(error));
    }
}