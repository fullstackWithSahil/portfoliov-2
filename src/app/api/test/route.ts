import { connectMongo } from "@/db";
import User from "@/db/modles/User";
import { kv } from "@vercel/kv";
import { NextRequest } from "next/server";

// export async function POST(req:NextRequest){
//     try {
//         const {email} =await req.json();
//         const res =await kv.del(email);
//         return new Response(JSON.stringify(res));
//     } catch (error) {
//         return  new Response(JSON.stringify(error));
//     }
// }

// export async function GET(req:NextRequest){
//     try {
//         const {email} =await req.json();
//         const res =await kv.del(email);
//         return new Response(JSON.stringify(res));
//     } catch (error) {
//         return  new Response(JSON.stringify(error));
//     }
// }

export async function GET(req:NextRequest){
    try {
        await connectMongo();
        const data = await User.find();
        return new Response(JSON.stringify(data));
    } catch (error) {
        return new Response(JSON.stringify(error));
    }
}