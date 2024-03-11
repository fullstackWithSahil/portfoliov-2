import { connectMongo } from "@/db";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request:NextRequest){
    try {
        await connectMongo();
        const req = await request.json();
        const encryptedcookie = request.cookies.get('token')||{value:"sahil"};
        const tokenData = jwt.verify(encryptedcookie.value,process.env.SECRET_KEY!)
    } catch (error) {
        return new NextResponse(JSON.stringify(error));
    }
}