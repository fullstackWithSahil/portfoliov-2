import { websites } from "@/utils/constants";
import {connectMongo} from "@/db";
import PromoCode  from "@/db/modles/PromoCode";
import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const secret = process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY : "sahil"
const stripe = new Stripe(secret);
const host = process.env.NEXT_PUBLIC_HOST;

export async function POST(request: NextRequest){
  const req = await request.json();
  const {productId,promoCode} = req
  const product = websites.find(website => website.id === productId)||websites[0];
  try {
    const newCost = await calculateCost(promoCode, product.cost)
    //stripe payment session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'inr', // Change to your currency
            product_data: {
              name: product.title,
              description: product.desc,
            },
            unit_amount: newCost * 100, // Stripe uses smallest currency unit (e.g., cents)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${host}/purchase/success`, // Redirect URL after successful payment
      cancel_url: `${host}/purchase/cancel`, // Redirect URL after cancelled payment
    });

    return new NextResponse(JSON.stringify({ url: session.url }));
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({error: 'Something went wrong'}));
  }
}

async function calculateCost(promoCode: string,cost: number): Promise<number>{
  try{
    await connectMongo();
    const CODE = await PromoCode.findOne({promoCode});
    if (!CODE) return cost;
    
    const discount = CODE.userDiscount
    
    const discountAmount = cost * (discount / 100)
    const newCost = cost - discountAmount;
    return newCost;
  }catch(error){
    console.log(error)
    return 1000
  }
}