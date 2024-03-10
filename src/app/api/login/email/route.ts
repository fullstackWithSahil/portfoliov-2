import { connectMongo } from "@/db";
import User from "@/db/modles/User";
import { NextRequest } from "next/server";

export async function POST(req:NextRequest){
    try {
        await connectMongo();
        const {email} =await req.json();
        const user = await User.findOne({email});
        if (!user){
            return new Response("invalid email")
        }else{
            return new Response("email is valid")
        }        
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}