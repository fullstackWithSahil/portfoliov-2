import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link';

export default function page() {
  return (
    <main className='text-white flex justify-center items-center h-screen'>
        <div className='border-2 border-white w-4/5 p-4 rounded-2xl'>
            <p>
                If you want to create your own cupon code you need to be logged in to your account
            </p>
            <div className='flex flex-col items-center mt-3 capitalize'>
                <p>dont have an account?</p>
                <Link href={"/register"}>
                    <Button>Register</Button>
                </Link>
                <p>not logged in ?</p>
                <Link href={"/login"}>
                    <Button>Login</Button>
                </Link>
            </div>
        </div>
    </main>
  )
}