import { connectMongo } from "@/db";
import User from "@/db/modles/User";
import bcrypt from "bcryptjs";
import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectMongo(); // Ensure MongoDB connection is established

        const req = await request.json();
        const { username, middlename, lastname, email, password, otp } = req;

        // Validate the OTP and clear the database
        const realOtp = await kv.get(email);
        if (realOtp !== otp) {
            return new Response("Invalid OTP", { status: 400 });
        }
        await kv.del(email);

        // Encrypting the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Creating user in the database
        const newUser = new User({
            username,
            middlename, // Corrected to match schema
            lastname,
            password: hashedPassword,
            email,
        });
        
        await newUser.save();
        
        // Return the newly created user
        return new Response(JSON.stringify(newUser), { status: 201 });
        
    } catch (error) {
        console.error("Error processing POST request:", error);
        // return new Response(JSON.stringify({ error: "Internal Server Error" }), { status: 500 });
        return new Response(JSON.stringify({ error}));
    }
}
