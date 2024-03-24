
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./button";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    img:any;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [open, setopen] = useState(false);
  const handleOpen = () => setopen(true);
  const handleClose = () => setopen(false)
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <span
          key={idx}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card handleClick={handleOpen}>
            <Image src={item.img} alt={item.title}/>
            <CardTitle>{item.title}</CardTitle>
            <Model 
              open={open} 
              handleClose={handleClose} 
              description={item.description} 
              title={item.title}
            />
          </Card>
        </span>
      ))}
    </div>
  );
};

const Card = ({
  className,
  children,
  handleClick
}: {
  className?: string;
  children: React.ReactNode;
  handleClick:()=>void;
}) => {
  return (
    <div
      onClick={handleClick}
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-blue-950 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 text-2xl capitalize font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

function Model({
  description,
  title,
  open,
  handleClose
}:{
  description:string;
  title:string;
  open:boolean;
  handleClose:()=>void
}){
  if (!open) {
    return null; // Don't render the modal if open is false
  }
  return(
    <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: open ? 1 : 0 ,opacity:1}}
        transition={{ duration: 0.3 }}
        className="text-xl fixed top-0 left-0 h-screen w-full bg-[rgba(0,0,0,0.8)] z-10 flex
         items-center justify-center"
        onClick={e => {
          e.stopPropagation()
          handleClose();
        }}
      >
        <div
          className="w-full md:w-1/2 h-1/2 bg-blue-400 flex flex-col justify-center items-center px-5
            rounded-3xl"
          onClick={e => { e.stopPropagation() }}
        >
          <h1
            className="text-white text-3xl font-bold capitalize my-5"
          >
            {title}
          </h1>
          <p>
            {description}
          </p>
          <Button
            onClick={handleClose}
          >
            close modal
          </Button>
        </div>
      </motion.div>
  )
}