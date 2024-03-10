"use client"
import img1 from "@/assets/feedback.jpg"
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { handleFeedback } from "@/actions/cotactUs";


export default function Feedback() {
    const [feedback,setfeedback] =useState('');
    const text =`
        this is the feed back send from the portfolio website

        ${feedback}
    `
  return (
    <div className="w-full flex flex-wrap">
        <Image src={img1} alt="feedback" className=" w-full md:w-1/2" />
        <div className="w-full md:w-1/2 p-2 flex flex-col items-center">
          <h2 className="text-2xl text-white capitalize font-serif">
            your feedback is highly appreciated help us to make this a better platform
          </h2>
          <input 
            type="text" 
            className="w-4/5 h-1/4 my-4"
            value={feedback}
            onChange={(e:any) =>setfeedback(e.target.value)} 
          />
          <Button onClick={()=>handleFeedback(text)}>
            Submit
          </Button>
        </div>
      </div>
  )
}