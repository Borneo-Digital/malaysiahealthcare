"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "default" | "gradient" | "minimal"
  className?: string
}

export default function SectionDivider({ variant = "default", className = "" }: SectionDividerProps) {
  const baseClasses = "w-full flex justify-center items-center"
  
  if (variant === "gradient") {
    return (
      <div className={`${baseClasses} py-8 ${className}`}>
        <motion.div
          className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#C8102E] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
      </div>
    )
  }
  
  if (variant === "minimal") {
    return (
      <div className={`${baseClasses} py-4 ${className}`}>
        <motion.div
          className="h-[2px] w-16 bg-[#C8102E] rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        />
      </div>
    )
  }
  
  return (
    <div className={`${baseClasses} py-12 ${className}`}>
      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-gray-300" />
        <div className="w-2 h-2 bg-[#C8102E] rounded-full" />
        <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-gray-300" />
      </motion.div>
    </div>
  )
} 