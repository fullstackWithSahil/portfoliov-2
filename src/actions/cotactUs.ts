'use server';
import sendMail from "@/utils/mail";

export async function handleEnquiry(text: string){
    await sendMail({
        text:text,
        subject:"somebody requested an enquiry",
    })
}

export async function handleFeedback(text: string){
    await sendMail({
        subject:"somebody sent a feedback",
        text:text,
    });
}