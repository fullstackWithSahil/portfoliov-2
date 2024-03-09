"use client"
import { motion } from "framer-motion";

export default function Para({ content }: { content: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, x: 25, y: 15 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white font-serif mt-2 text-justify text-xl"
    >
      {content}
    </motion.p>
  );
}