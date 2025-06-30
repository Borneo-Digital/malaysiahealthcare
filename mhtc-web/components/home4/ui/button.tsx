import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-mhtc-primary text-white hover:bg-[#A50E25] shadow-md",
        destructive: "bg-error text-white hover:bg-[#DC2626] shadow-md",
        outline: "border border-grey-300 bg-white text-grey-700 hover:bg-grey-50 hover:border-mhtc-primary hover:text-mhtc-primary",
        secondary: "bg-grey-100 text-grey-700 hover:bg-grey-200 shadow-sm",
        ghost: "text-grey-700 hover:bg-grey-100 hover:text-mhtc-primary",
        link: "text-mhtc-primary underline-offset-4 hover:underline hover:text-[#A50E25]",
        disabled: "bg-disabled text-disabled border-disabled cursor-not-allowed opacity-60",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-[10px] px-3 text-xs",
        lg: "h-11 rounded-[10px] px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
    // Automatically apply disabled variant when disabled prop is true
    const finalVariant = disabled ? "disabled" : variant
    
    return (
      <Comp 
        className={cn(buttonVariants({ variant: finalVariant, size, className }))} 
        ref={ref} 
        disabled={disabled}
        {...props} 
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }
