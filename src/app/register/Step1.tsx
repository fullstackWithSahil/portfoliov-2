"use client"
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useState } from 'react';

type page1Types ={
    username:string;
    middlename:string;
    lastname:string;
    handleChange:(key:string,value:string)=>void;
    nextStep:()=>void;
}

export default function Step1({username,middlename,lastname,handleChange,nextStep}:page1Types) {
  const [err,setError] =useState("");

  function handleClick(){
    if(!username){
      setError("username is required")
    }else if(!middlename){
      setError("middlename is required")
    }else if(!lastname){
      setError("lastname is required")
    }else{
      nextStep();
    }
  }
  
  return (
    <div>
        <h1 className='text-2-xl capitalize'>
            step1:user details
        </h1>
        <form className="flex flex-col">
            <Input name='username' onChange={handleChange} type="text" value={username}/>
            {err==="username is required"&&<p
              className='text-red-400 text-small'
            >
              {err}
            </p>}
            <Input name="middlename" onChange={handleChange} type="text" value={middlename}/>
            {err==="middlename is required"&&<p
              className='text-red-400 text-small'
            >{err}</p>}
            <Input name="lastname" onChange={handleChange} type="text" value={lastname}/>
            {err==="lastname is required"&&<p
              className='text-red-400 text-small'
            >{err}</p>}
        </form>
        <div className='flex justify-center'>
          <Button 
              className='text-white capitalize flex-1 text-center'
              onClick={handleClick}
          >
              next
          </Button>
        </div>
        <p className='text-md text-blue-400 dark:text-gray-200'>
          already have an account ? <Link href={"/login"}>Login</Link>
        </p>
    </div>
  )
}