"use client"

import { motion, useInView } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { useReducedMotion } from "@/components/home4/hooks/use-reduced-motion"
import { fadeInUp, slideInLeft, slideInRight, springTransition } from "@/components/home4/animations/motion-variants"

interface FadeInProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  delay?: number
  threshold?: number
  once?: boolean
}

export function FadeIn({
  children,
  className,
  direction = "up",
  delay = 0,
  threshold = 0.2,
  once = true,
}: FadeInProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: "-10% 0px -10% 0px",
    amount: threshold,
  })

  const getVariants = () => {
    switch (direction) {
      case "up":
        return fadeInUp
      case "left":
        return slideInLeft
      case "right":
        return slideInRight
      case "none":
        return {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              ...springTransition,
              delay,
            },
          },
        }
      default:
        return fadeInUp
    }
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      transition={{
        ...springTransition,
        delay,
      }}
    >
      {children}
    </motion.div>
  )
} 