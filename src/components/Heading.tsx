"use client";
import { motion } from "framer-motion";

export default function Heading({ content }: { content: string }) {
  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, x: 25, y: 15 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 1 }}
        className="text-white font-serif text-3xl py-4 "
      >
        {content}
      </motion.h2>
    </div>
  );
}