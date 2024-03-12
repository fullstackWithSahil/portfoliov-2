import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Dispatch, ChangeEvent, SetStateAction } from "react";

type formDatatype = {
  userDiscount: number;
  hisCut: number;
  mobileNumber: string;
  promoCode: string;
  upiId: string;
};

export async function handleClick(formData: formDatatype) {
  console.log(formData)
  if (!formData.userDiscount) {
    toast({
      title: "User discount is required",
      description: "Please enter your user discount",
      action: <ToastAction altText="okay">Okay</ToastAction>,
    });
    return;
  }
  if (!formData.hisCut) {
    toast({
      title: "His cut is required",
      description: "Please enter his cut",
      action: <ToastAction altText="okay">Okay</ToastAction>,
    });
    return;
  }
  if (formData.mobileNumber.length<15) {
    toast({
      title: "invalid mobile number",
      description: "Please enter a valid mobile number",
      action: <ToastAction altText="okay">Okay</ToastAction>,
    });
    return;
  }
  if (!formData.promoCode) {
    toast({
      title: "Promo code is required",
      description: "Please enter the promo code",
      action: <ToastAction altText="okay">Okay</ToastAction>,
    });
    return;
  }
  if (!formData.upiId) {
    toast({
      title: "UPI ID is required",
      description: "Please enter the UPI ID",
      action: <ToastAction altText="okay">Okay</ToastAction>,
    });
    return;
  }

  try {
    const { data } = await axios.post("/api/getPromoCode", formData);
    toast({
      title: data.title,
      description: data.message,
      action: <ToastAction altText="jjkjkjkjkjkj">okay</ToastAction>,
    });
  } catch (error: any) {
    toast({
      title: "something went wrong",
      description: error.message,
      action: <ToastAction altText="Goto schedule to undo">okay</ToastAction>,
    });
  }
}

export function phoneNumber(
  e: ChangeEvent<HTMLInputElement>,
  setformData: Dispatch<SetStateAction<formDatatype>>
) {
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

export function increseUserDiscount(
  userDiscount: number,
  setUserDiscount: Dispatch<SetStateAction<number>>,
  setHisCut: Dispatch<SetStateAction<number>>
) {
  if (userDiscount == 20) {
    return;
  } else {
    setUserDiscount((prev) => prev + 1);
    setHisCut((prev) => prev - 1);
  }
}

export function decreaseUserDiscount(
  userDiscount: number,
  setUserDiscount: Dispatch<SetStateAction<number>>,
  setHisCut: Dispatch<SetStateAction<number>>
) {
  if (userDiscount == 0) {
    return;
  } else {
    setUserDiscount((prev) => prev - 1);
    setHisCut((prev) => prev + 1);
  }
}