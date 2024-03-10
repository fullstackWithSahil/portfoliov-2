import User from "@/db/modles/User";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { connectMongo } from "@/db";

export async function POST(req:NextRequest){
    try {
        await connectMongo();
        const {email,password} =await req.json();
        const user = await User.findOne({email});  
        const valid = await bcrypt.compare(password,user.password);
        
        if(!valid){
            return new Response("invalid password")
        }

        //create token data
        const tokenData ={
            id:user._id,
            username:user.username,
            middlename:user.middlename,
            lastname:user.lastname,
            email:user.email
        }
        //create token
        const token = jwt.sign(tokenData,process.env.SECRET_KEY!,{expiresIn:"1d"});

        const response = NextResponse.json({
            message:"Login successful",
            success:true
        });

        response.cookies.set("token",token,{httpOnly:true});
        return response;
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}