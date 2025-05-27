import { ReactNode } from "react"

interface ScrollAreaProps {
  className?: string
  children: ReactNode
}

export function ScrollArea({ className = "", children }: ScrollAreaProps) {
  return (
    <div className={`overflow-auto w-full h-full ${className}`}>
      {children}
    </div>
  )
} 