"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

type boxTypes = {
  className: string;
  delay: number,
  varient: "red" | "green" | "blue"
}

function Box(props: boxTypes) {
  const varient = {
    red: ["bg-red-300", "bg-red-400", "bg-red-500", "bg-red-600"],
    blue: ["bg-blue-300", "bg-blue-400", "bg-blue-500", "bg-blue-600"],
    green: ["bg-green-300", "bg-green-400", "bg-green-500", "bg-green-600"]
  }
  const colors = varient[props.varient];
  const [i, setI] = useState(0);
  const [bgColor, setBgColor] = useState(colors[i]);

  useEffect(() => {
    const interval = setInterval(() => {
      setI(prev => (prev + 1) % colors.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgColor(colors[i]);
    }, props.delay);

    return () => clearTimeout(timeout);
  }, [i, props.delay]);

  return (
    <motion.div className={cn(bgColor, props.className)}></motion.div>
  );
}

function Loading({ varient="blue" }: { varient?: "red" | "green" | "blue" }) {
  const styles = "rounded-xl absolute"
  return (
    <div className='flex justify-center items-center absolute inset-0 bg-gray-300 bg-opacity-70'>
      <div className='relative flex gap-2 w-[50vh] h-[50vh]'>
        <Box
          varient={varient}
          delay={50}
          className={`${styles} h-1/3 w-[calc(25%-30px)] top-1 left-[43%]`}
        />
        <Box
          varient={varient}
          delay={150}
          className={`${styles} h-[calc(25%-30px)] w-1/3 top-[11%] right-3 rotate-[-45deg]`}
        />
        <Box
          varient={varient}
          delay={250}
          className={`${styles} h-[calc(25%-30px)] w-1/3 top-[42%] right-1`}
        />
        <Box
          varient={varient}
          delay={350}
          className={`${styles} h-[calc(25%-30px)] w-1/3 bottom-[11%] right-3 rotate-45`}
        />
        <Box
          varient={varient}
          delay={450}
          className={`${styles} h-1/3 w-[calc(25%-30px)] bottom-1 left-[43%]`}
        />
        <Box
          varient={varient}
          delay={550}
          className={`${styles} h-[calc(25%-30px)] w-1/3 bottom-[11%] left-3 rotate-[-45deg]`}
        />
        <Box
          varient={varient}
          delay={650}
          className={`${styles} h-[calc(25%-30px)] w-1/3 top-[42%] left-1`}
        />
        <Box
          varient={varient}
          delay={750}
          className={`${styles} h-[calc(25%-30px)] w-1/3 top-[11%] left-3 rotate-[45deg]`}
        />
      </div>
    </div>
  )
}

export default function Page(){
    return(
        <Loading/>
    )
}