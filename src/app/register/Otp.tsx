"use client"
import axios from "axios";
import { useState ,ChangeEvent,useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type inputType ={
  id:number;
}

type propType ={
  username: string;
  middlename:string;
  lastname:string;
  email:string;
  password: string;
}
//const { username, middlename, lastname, email, password, otp } = req;

export default function Otp(props:propType) {
  const { toast } = useToast();
  const [current,setCurrent] = useState(0);
  const [pin,setPin] = useState("");
  const router = useRouter();
  
  useEffect(() => {
      if (current === 4) {
        const datatosend = {
          ...props,
          otp: +pin
        };
  
        axios
          .post("/api/register", datatosend)
          .then(response => {
            if (response.data === "invalid otp") {
              setPin("");
              setCurrent(0);
              toast({
                title: "invalid Otp",
                description: "make sure you check your email and enter the correct OTP",
                action: <ToastAction altText="Goto schedule to undo">okay</ToastAction>
              });
            } else {
              router.push("/login");
            }
          })
          .catch(error => {
            setPin("");
            toast({
              title: "something went wrong",
              description: error.message,
              action: <ToastAction altText="Goto schedule to undo">okay</ToastAction>
            });
          });
      }
  }, [current]);

  function handleChange(e:ChangeEvent<HTMLInputElement>){
    const valid = "1234567890"
    if (!valid.includes(e.target.value)){
      return
    }
    setCurrent(prev=>prev+1)
    setPin(prev=>prev+e.target.value)
  }
  
  function Input(props:inputType){
    return(
      <input 
        type="text"
        id={props.id.toString()} 
        className="block h-10 w-10 text-center dark:border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 border-2" 
        data-hs-pin-input-item 
        autoFocus={props.id===current}
        onChange={(e)=>handleChange(e)} 
        value={pin[props.id]}
      />
    )
  }
  
  async function resendOtp(){
    try {
      const {data} = await axios.post("/api/register/resendotp",{email:props.email});
      toast({
        title: "Otp sent successfully",
        description: "otp has been sent successfully check your mail to proceed",
        action: (
          <ToastAction altText="Goto schedule to undo">okay</ToastAction>
        ),
      })      
    } catch (error:any) {
      toast({
        title: "something went wrong",
        description: error.message,
        action: (
          <ToastAction altText="Goto schedule to undo">okay</ToastAction>
        ),
      })
    }
  }
  return (
    <div>
    <h1 className="dark:text-white text-center my-5 capitalize">
      fill in your OTP
    </h1>
    <div className="flex justify-center space-x-3" data-hs-pin-input>
      {Array(4).fill("1").map((iteam:string,i:number)=><Input
        key={i}
        id={i}
        />)}
    </div>
    <Button onClick={resendOtp} className="text-white w-full mt-5 dark:bg-black">
      Resend OTP
    </Button>
    </div>
  )
}