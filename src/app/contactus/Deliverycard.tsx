"use client";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";

type Deliverycardtype = {
    title: string;
    desc: string;
    cost: number;
    image: any
}


export default function Deliverycard(props:Deliverycardtype) {
  return (
    <div>
      <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-zinc-900">
        <Image
          src={props.image}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
          {props.title}
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {props.desc}
        </p>
        <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            INR {props.cost}
          </span>
        </button>
      </BackgroundGradient>
    </div>
  );
}
