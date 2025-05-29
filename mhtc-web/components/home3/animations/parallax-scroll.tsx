"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useReducedMotion } from "@/components/home3/hooks/use-reduced-motion"

interface ParallaxScrollProps {
  children: ReactNode
  className?: string
  speed?: number
}

export function ParallaxScroll({ children, className, speed = 0.5 }: ParallaxScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1 + speed * 0.1])

  if (prefersReducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <div ref={ref} className={`${className} overflow-hidden`}>
      <motion.div style={{ y, scale }}>{children}</motion.div>
    </div>
  )
} 