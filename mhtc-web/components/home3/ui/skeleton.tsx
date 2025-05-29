"use client"

import type { HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/components/home3/hooks/use-reduced-motion"

interface SkeletonProps extends HTMLMotionProps<"div"> {
  animated?: boolean
}

export function Skeleton({ className, animated = true, ...props }: SkeletonProps) {
  const prefersReducedMotion = useReducedMotion()

 if (!animated || prefersReducedMotion) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { style: _style, animate: _animate, initial: _initial, exit: _exit, transition: _transition, variants: _variants, onDrag: _onDrag, onDragEnd: _onDragEnd, onDragStart: _onDragStart, onAnimationStart: _onAnimationStart, children, ...divProps } = props
    return <div className={cn("rounded-md bg-muted/60", className)} {...divProps}>{children as React.ReactNode}</div>
  }

  return (
    <motion.div
      className={cn("rounded-md bg-muted/60", className)}
      {...props}
      initial={{ opacity: 0.5 }}
      animate={{
        opacity: [0.5, 0.8, 0.5],
        transition: {
          repeat: Number.POSITIVE_INFINITY,
          duration: 2,
          ease: [0.25, 0.1, 0.25, 1],
        },
      }}
    />
  )
}

