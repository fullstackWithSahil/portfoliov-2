import { NextRequest } from "next/server";
import { kv } from "@vercel/kv";
import sendMail from "@/utils/mail";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    await kv.del(email);

    //generating otp sending email and saving it in reddis database
    const num = Math.floor(Math.random() * 10000);
    const otp = num.toString();
    console.log("otp is", otp);

    await sendMail({
      text: `otp sent successfully ${otp}`,
      to: email,
      subject: "OTP",
    });

    await kv.set(email, otp);
    return new Response("otp sent successfully");
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}
