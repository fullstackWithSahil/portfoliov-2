"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { discount } from "@/actions/discount";
import PaymentButton from "@/components/Paymentbutton";


export default function Purchase({id,website}:{id:number,website:any}) {
    const [promoCode,setpromoCode] = useState('');
    const [response,setresponse] = useState('');
    
    async function handleApply(e:any){
        e.preventDefault();
        const data = await discount(id,promoCode);
        const set = data.toString();
        setresponse(set)
    }

    let Discount=null;
    if(response){
        if(response!="invalid promo code"){
            Discount= response.toString();
        }
    }

  return (
    <>
      <div className="text-2xl my-3 px-3 flex justify-between">
        <span className={`${Discount ? "line-through text-gray-500" : ""}`}>
          {website.cost}&#8377;
        </span>
        {Discount && <span>{Discount}&#8377;</span>}
      </div>
      <form className="flex flex-col">
        {response == "invalid promo code" && (
          <p className="text-red-600 text-sm">{response}</p>
        )}
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setpromoCode(e.target.value)}
          className="px-3 bg-transparent border-2 border-white rounded-xl"
        />{" "}
        <br />
        <Button onClick={(e) => handleApply(e)}>Apply</Button>
      </form>
      <PaymentButton productId={id} promoCode={promoCode}/>
    </>
  );
}
