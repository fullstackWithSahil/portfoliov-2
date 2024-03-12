"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { useEffect, useState} from "react";
import Adder from "./Adder";
import { decreaseUserDiscount, handleClick, increseUserDiscount, phoneNumber } from "./functions";

export default function page() {
  const [userDiscount, setUserDiscount] = useState(0);
  const [hisCut, setHisCut] = useState(20);

  const [formData, setformData] = useState({
    userDiscount,
    hisCut,
    mobileNumber: "+091 ",
    promoCode: "",
    upiId: "",
  });
  useEffect(()=>{
    setformData(prev=>({
      ...prev,
      userDiscount,
      hisCut
    }));
  },[userDiscount,hisCut])

  
  return (
    <main className="flex justify-center items-center h-screen text-white">
      <BackgroundGradient className="rounded-[22px] max-w-3xl px-4 pt-4 sm:p-10 bg-zinc-900">
        <p>
          Create your cupon code and decide the discount you want to give your
          users and the cut you want to keep yourself
        </p>

        <Adder
          userDiscount={userDiscount}
          increseUserDiscount={()=>increseUserDiscount(userDiscount,setUserDiscount,setHisCut)}
          decreaseUserDiscount={()=>decreaseUserDiscount(userDiscount,setUserDiscount,setHisCut)}
          hisCut={hisCut}
        />

        <form className="flex flex-col items-center capitalize mt-3">
          <div>
            <label htmlFor="promoCode">enter your promocode</label>
            <br />
            <input
              type="text"
              id="promoCode"
              className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
              value={formData.promoCode}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, promoCode: e.target.value }))
              }
            />
            <br />
          </div>
          <div>
            <label htmlFor="upiId">enter your upiId</label>
            <br />
            <input
              type="text"
              id="upiId"
              className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
              value={formData.upiId}
              onChange={(e) =>
                setformData((prev) => ({ ...prev, upiId: e.target.value }))
              }
            />
            <br />
          </div>
          <div>
            <label htmlFor="mobile">enter your mobile number</label> <br />
            <input
              type="tel"
              id="upiId"
              className="text-white bg-transparent border-2 border-white focus:border-2 px-2 py-1 rounded-full"
              value={formData.mobileNumber}
              onChange={(e) => phoneNumber(e,setformData)}
            />
            <br />
          </div>
        </form>
        <div className="flex mt-2">
          <Button className="flex-1" onClick={()=>handleClick(formData)}>
            Apply
          </Button>
        </div>
      </BackgroundGradient>
    </main>
  );
}