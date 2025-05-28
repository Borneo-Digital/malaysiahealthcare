import { ReactNode } from "react"

export function TooltipProvider({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function Tooltip({ children }: { children: ReactNode }) {
  return <>{children}</>
}

export function TooltipTrigger({ children }: { children: ReactNode }) {
  return <span>{children}</span>
}

export function TooltipContent({ children }: { children: ReactNode }) {
  // This is a very basic implementation. For a real app, use a library or custom logic.
  return (
    <span style={{
      position: 'absolute',
      background: 'rgba(0,0,0,0.8)',
      color: 'white',
      padding: '4px 8px',
      borderRadius: '4px',
      fontSize: '12px',
      zIndex: 1000,
      pointerEvents: 'none',
    }}>{children}</span>
  )
} 