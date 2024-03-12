"use server"
import { connectMongo } from "@/db";
import PromoCode from "@/db/modles/PromoCode";
import { websites } from "@/utils/constants";

export async function discount(id:number,code:string){
    await connectMongo();
    const CODE = await PromoCode.findOne({promoCode:code});
    if (!CODE) return "invalid promo code";
    
    const website = websites.find(website => website.id === id)||websites[0];
    
    const cost = website.cost;
    const discount = CODE.userDiscount
    
    // Calculate the discount amount
    const discountAmount = cost * (discount / 100)
    const newCost = cost - discountAmount;
    return newCost;
}