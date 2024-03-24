"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavey-background";
import { Boxes } from "@/components/ui/Boxes";
import { HoverEffect } from "@/components/ui/Card-hover";
import { Technologies } from "@/utils/constants";

export default function WavyBackgroundDemo() {
  return (
    <main>
      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Fullstackwithsahil
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Get your ideas on the web today
        </p>
      </WavyBackground>
      <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className="md:text-4xl text-xl text-white relative z-20">
          Awesome animation and great user experience
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20 max-w-[75%]">
          We garuntee you amazing of great user experience with awsome animation
          with a secure backend and full database integration
        </p>
      </div>

      <h1 className="text-white font-bold text-3xl text-center capitalize ">
        Technologies i use to create my websites
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={Technologies} />
      </div>
    </main>
  );
}