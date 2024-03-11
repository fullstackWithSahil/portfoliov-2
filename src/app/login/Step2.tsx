"use client"
import Input from '@/components/Input';
import { Button } from '@/components/ui/button';
import { checkvalidity } from '@/utils/validation';
import { TextIcon } from '@radix-ui/react-icons';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

type Step2type = {
    password: string;
    onChange: (key: string, value: string) => void;
    email: string;
}


export default function Step2({ password,email, onChange}: Step2type) {
    const router = useRouter();
    
    const [err,setErr] = useState("");
    async function handleClick(e:any){
        e.preventDefault();
        try {
            const {data}=await axios.post("/api/login", { password,email});
            if(data ==="invalid password"){
                setErr(data)
            }else{
                router.push("/")
            }
        } catch (error) {
            console.log(error);
        }
    }
    function Box({ children ,type }: { children: ReactNode ; type:"text"|"char"|"number"}) {
        return (
            <div className={`${checkvalidity(password,type) ? "bg-cyan-300 text-blue-900 dark:bg-gray-700 dark:text-white" : "text-black dark:text-white"} flex 
            flex-col items-center border-2 border-black dark:border-white px-4 py-2 
            rounded-lg w-1/4 justify-center`}>
                {children}
            </div>
        )
    }
    return (
        <div>
            <h1 className='text-2-xl capitalize'>
                step2: password
            </h1>
            <form className='flex flex-col'>
                <Input type="password" name='password' value={password} onChange={onChange} />
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
            <div className='flex justify-around'>
                <Box type='text'>
                    <TextIcon />
                    <p>Text</p>
                </Box>
                <Box type='number'>
                    <TextIcon />
                    <p>Number</p>
                </Box>
                <Box type='char'>
                    <TextIcon />
                    <p className='mx-1 truncate'>Character</p>
                </Box>
            </div>
        </div>
    )
}
