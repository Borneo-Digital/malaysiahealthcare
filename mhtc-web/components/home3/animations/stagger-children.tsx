"use client"

import { motion, useInView } from "framer-motion"
import { type ReactNode, useRef } from "react"
import { useReducedMotion } from "@/components/home3/hooks/use-reduced-motion"
import { staggerContainer, springTransition } from "./motion-variants"

interface StaggerChildrenProps {
  children: ReactNode
  className?: string
  delayIncrement?: number
  initialY?: number
  threshold?: number
  once?: boolean
}

export function StaggerChildren({
  children,
  className,
  delayIncrement = 0.1,
  initialY = 20,
  threshold = 0.2,
  once = true,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once,
    margin: "-10% 0px -10% 0px",
    amount: threshold,
  })

  const item = {
    hidden: {
      opacity: 0,
      y: initialY,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ...springTransition,
      },
    },
  }

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={{
        ...staggerContainer,
        show: {
          ...staggerContainer.show,
          transition: {
            ...staggerContainer.show.transition,
            staggerChildren: delayIncrement,
          },
        },
      }}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={item}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
} 