"use client";
import React from 'react'
import { motion } from "framer-motion";

const words = ["Welcome", "to", "Eloom"];

export default function Words() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2 }}
    className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full"
  >
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold mb-8 tracking-tighter flex items-center justify-center h-full flex-col md:flex-row py-5">
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="md:inline-block mr-4 last:mr-0 flex">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 dark:from-white dark:to-white/80"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
   
  </motion.div>

  )
}
