"use client"
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';
import { ToastAction } from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

type Step3type ={
    email:string;
    onChange:(key:string,value:string)=>void;
    nextStep:()=>void;
}

export default function Step3({email,onChange,nextStep}:Step3type) {
    const { toast } = useToast();
    const [response,setResponse] =useState("")
    async function handleClick(e:any){
        e.preventDefault();
        const {data} = await axios.post("/api/register/email",{email});
        if(data==="email already exists"){
            setResponse(data);
        }else{
            toast({
                title: "Otp sent successfully",
                description: "otp has been sent successfully check your mail to proceed",
                action: (
                  <ToastAction altText="Goto schedule to undo">okay</ToastAction>
                ),
              })
            nextStep();
        }
    }
  return (
    <div>
        <h1 className='text-2-xl capitalize'>
            step3: email
        </h1>
        <form className='flex flex-col'>
            <Input type="text" name='email' value={email} onChange={onChange}/>
            {response&&<p className='text-red-500 text-sm'>
                {response}
            </p>}
            <Button 
                className='text-white capitalize text-center'
                onClick={(e)=>handleClick(e)}
            >
                next
            </Button>
        </form>
    </div>
  )
}
