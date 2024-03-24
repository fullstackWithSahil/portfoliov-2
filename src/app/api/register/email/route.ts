import { connectMongo } from "@/db";
import User from "@/db/modles/User";
import sendMail from "@/utils/mail";
import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest){
    try {
        await connectMongo();
        const req = await request.json();
        const {email} =req;
        const Existing = await User.findOne({ email});
        if(Existing){
            return new Response("email already exists")
        }else{
            //generating otp sending email and saving it in reddis database
            const num = Math.floor(Math.random()*10000);
            const otp = num.toString();
            console.log("otp is", otp);
            await sendMail({
                text:`otp sent successfully ${otp}`,
                to:email,
                subject:"OTP"
            });
            await kv.set(email,otp);
            return new Response("otp sent successfully")
        }
    } catch (error:any) {
        return new Response(error.message)
    }
}