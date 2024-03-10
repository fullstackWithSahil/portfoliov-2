import { connectMongo } from "@/db";
import User from "@/db/modles/User";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs"
import { kv } from "@vercel/kv";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        await connectMongo();
        const { username, middlename, lastname, email, password, otp } = req;
        
        //validate the otp and clear the database
        const realOtp = await kv.get(email);
        if (realOtp!=otp) {
            return new Response("invalid otp")
        }
        await kv.del(email);
        
        //encrypting the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //creating user in database
        const newUser = new User({
            username,
            middlename, // Corrected to match schema
            lastname,
            password:hashedPassword,
            email,
        });
        await newUser.save();
        return new Response(JSON.stringify(newUser));
        
    } catch (error) {
        console.log(error);
    }
}
