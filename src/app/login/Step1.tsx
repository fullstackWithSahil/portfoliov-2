"use client"
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import { useState } from 'react';

type Step1type ={
    email:string;
    onChange:(key:string,value:string)=>void;
    nextStep:()=>void;
}

export default function Step1({email,onChange,nextStep}:Step1type) {
    const [err,setErr] = useState("");
    async function handleClick(e:any){
        try {
            e.preventDefault();
            const {data} = await axios.post("/api/login/email",{email});
            if(data==="invalid email"){
                setErr(data);
            }
            nextStep();
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <h1 className='text-2-xl capitalize'>
            step1: email
        </h1>
        <form className='flex flex-col'>
            <Input type="text" name='email' value={email} onChange={onChange}/>
            {err&&<p className='text-sm text-red-500'>
                {err}
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
