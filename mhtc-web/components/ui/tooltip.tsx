import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function Tooltip({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <span>{children}</span>
}

export function TooltipContent({ 
  children, 
  className 
}: { 
  children: ReactNode
  className?: string 
}) {
  return (
    <span 
      className={cn(
        "absolute bg-grey-900 text-white px-2 py-1 rounded-[6px] text-xs z-[1000] pointer-events-none shadow-lg border border-grey-800",
        className
      )}
      style={{
        position: 'absolute',
        pointerEvents: 'none',
      }}
    >
      {children}
    </span>
  )
} 