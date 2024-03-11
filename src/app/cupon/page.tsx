"use client"
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";


export default function page() {
    const [userDiscount,setUserDiscount] = useState(0);
    const [hisCut,setHisCut] = useState(20);
    function increseUserDiscount(){
        if (userDiscount==20){
            return
        }else{
            setUserDiscount(prev=>prev+1)
            setHisCut(prev=>prev-1)
        }
    }

    function decreaseUserDiscount(){
        if (userDiscount==0){
            return
        }else{
            setUserDiscount(prev=>prev-1)
            setHisCut(prev=>prev+1)
        }
    }
    const [formData,setformData] = useState({
        userDiscount,
        hisCut,
        mobileNumber:'',
        promoCode:'',
        upiId:""
    });

    async function handleClick(){
        const {data} = await axios.post('/api/getPromoCode',formData)
    }
  return (
    <main className="flex justify-center items-center h-screen text-white">
        <BackgroundGradient className="rounded-[22px] max-w-3xl px-4 pt-4 sm:p-10 bg-zinc-900">
            <div>
                <p>
                    Create your cupon code and decide the discount you want to give your users and the cut you want to keep yourself
                </p>
            </div>
            <div className="flex justify-around mt-4">
                <div>
                    <Button className="font-bold text-lg" onClick={increseUserDiscount}>
                        +
                    </Button>
                    <span className="mx-4">{userDiscount}</span>
                    <Button className="font-bold text-lg" onClick={decreaseUserDiscount}>
                        -
                    </Button>
                </div>
                <div>
                    <Button className="font-bold text-lg" onClick={decreaseUserDiscount}>
                        +
                    </Button>
                    <span className="mx-4">{hisCut}</span>
                    <Button className="font-bold text-lg" onClick={increseUserDiscount}>
                        -
                    </Button>
                </div>
            </div>
        
            <form className="flex flex-col items-center capitalize mt-3">
                <div>
                    <label htmlFor="promoCode">enter your promocode</label><br />
                    <input 
                        type="text" 
                        id="promoCode" 
                        className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
                        value={formData.promoCode}
                        onChange={e=>setformData(prev=>({...prev,promoCode:e.target.value}))}
                    /><br />
                </div>
                <div>
                    <label htmlFor="upiId">enter your upiId</label><br />
                    <input 
                        type="text" 
                        id="upiId" 
                        className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
                        value={formData.upiId}
                        onChange={e=>setformData(prev=>({...prev,upiId:e.target.value}))}
                    /><br />
                </div>
                <div>
                    <label htmlFor="mobile">enter your mobile number</label> <br />
                    <input 
                        type="tel" 
                        id="upiId" 
                        className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
                        value={formData.mobileNumber}
                        onChange={e=>setformData(prev=>({...prev,mobileNumber:e.target.value}))}
                    /><br />
                    <div className="flex mt-2">
                        <Button className="flex-1" onClick={handleClick}>
                            Apply
                        </Button>
                    </div>
                </div>
            </form>
        </BackgroundGradient>
    </main>
  )
}