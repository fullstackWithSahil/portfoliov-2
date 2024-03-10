"use client"
import { useState } from "react"
import {Button} from "@/components/ui/button"
import { handleEnquiry } from "@/actions/cotactUs";

export default function Enquiry() {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [aditional, setaditional] = useState('')
    const [email, setemail] = useState('')
    const text = `some body requested an enquiry
    phone number: ${phoneNumber}
    email: ${email}
    additional information:${aditional}`
    
    return (
        <div className="text-white font-serif">
            <h1 className="text-2xl text-center capitalize my-4">
                if you have any questions regarding the purchase or promocode apply for an enquiry
            </h1>
            <form className="border-2 border-white p-4 flex flex-col">
                <label htmlFor="phoneNumber" className="text-md capitalize">
                    phoneNumber
                </label>
                <input
                    type="tel"
                    name="phone"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                    className="text-black p-2 rounded-2xl my-2"
                    required
                />
                <label htmlFor="email" className="text-md capitalize">
                    email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="text-black p-2 rounded-2xl my-2"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                />

                <label htmlFor="additional" className="text-md capitalize">
                    any aditional information
                </label>
                <input
                    type="text"
                    value={aditional}
                    className="text-black p-2 rounded-2xl my-2"
                    onChange={e => setaditional(e.target.value)}
                />
                <Button onClick={()=>handleEnquiry(text)}>Submit</Button>
            </form>
        </div>
    )
}