"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState, ChangeEvent,MouseEvent } from "react";
import Adder from "./Adder";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"; 

export default function page() {
  const [userDiscount, setUserDiscount] = useState(0);
  const [hisCut, setHisCut] = useState(20);
  function increseUserDiscount() {
    if (userDiscount == 20) {
      return;
    } else {
      setUserDiscount((prev) => prev + 1);
      setHisCut((prev) => prev - 1);
    }
  }

  function decreaseUserDiscount() {
    if (userDiscount == 0) {
      return;
    } else {
      setUserDiscount((prev) => prev - 1);
      setHisCut((prev) => prev + 1);
    }
  }

  const [formData, setformData] = useState({
    userDiscount,
    hisCut,
    mobileNumber: "+091 ",
    promoCode: "",
    upiId: "",
  });

  function phoneNumber(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    //more than 10 numbers not allowed
    if (e.target.value.length == 16) return;

    //only numbers allowed
    const numbers = "1 2 3 4 5 6 7 8 9 0".split(" ");
    numbers.push(" ");
    const letter = e.target.value.charAt(e.target.value.length - 1);
    if (!numbers.includes(letter)) {
      return;
    }

    //update the phone number
    setformData((prev) => ({ ...prev, mobileNumber: e.target.value }));
  }

  async function handleClick() {
    try {
      const { data } = await axios.post("/api/getPromoCode", formData);
      toast({
        title: "Promo Code registered",
        description: data.message,
        action:<ToastAction altText="jjkjkjkjkjkj">okay</ToastAction>
      })
    } catch (error:any) {
      toast({
        title: "something went wrong",
        description: error.message,
        action: <ToastAction altText="Goto schedule to undo">okay</ToastAction>,
      });
    }
  }

  return (
    <main className="flex justify-center items-center h-screen text-white">
      <BackgroundGradient className="rounded-[22px] max-w-3xl px-4 pt-4 sm:p-10 bg-zinc-900">
        <p>
          Create your cupon code and decide the discount you want to give your
          users and the cut you want to keep yourself
        </p>

        <Adder
          userDiscount={userDiscount}
          increseUserDiscount={increseUserDiscount}
          decreaseUserDiscount={decreaseUserDiscount}
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
              onChange={(e) => phoneNumber(e)}
            />
            <br />
          </div>
        </form>
        <div className="flex mt-2">
          <Button className="flex-1" onClick={handleClick}>
            Apply
          </Button>
        </div>
      </BackgroundGradient>
    </main>
  );
}
