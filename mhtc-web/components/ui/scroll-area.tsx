import { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAreaProps {
  className?: string
  children: ReactNode
}

export function ScrollArea({ className = "", children }: ScrollAreaProps) {
  return (
    <div className={cn("overflow-auto w-full h-full scrollbar-thin scrollbar-thumb-grey-300 scrollbar-track-grey-100", className)}>
      {children}
    </div>
  )
} 