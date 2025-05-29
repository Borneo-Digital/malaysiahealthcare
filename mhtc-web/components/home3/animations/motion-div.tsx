"use client"

import { motion, type MotionProps } from "framer-motion"
import type { HTMLAttributes, ReactNode } from "react"
import { useReducedMotion } from "@/components/home3/hooks/use-reduced-motion"

interface MotionDivProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function MotionDiv({ children, ...props }: MotionDivProps) {
  const prefersReducedMotion = useReducedMotion()

  // If user prefers reduced motion, remove animations
  const safeProps = prefersReducedMotion
    ? { ...props, animate: undefined, initial: undefined, exit: undefined, transition: undefined }
    : props

  return <motion.div {...(safeProps as MotionProps)}>{children}</motion.div>
} 