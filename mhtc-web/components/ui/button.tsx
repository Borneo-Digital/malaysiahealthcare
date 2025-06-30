import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[10px] text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-mhtc-primary text-white shadow hover:bg-[#A50E25]",
        destructive: "bg-error text-white shadow-sm hover:bg-[#DC2626]",
        outline: "border border-grey-300 bg-white text-grey-700 hover:bg-grey-50 hover:border-mhtc-primary hover:text-mhtc-primary",
        secondary: "bg-grey-100 text-grey-700 shadow-sm hover:bg-grey-200",
        ghost: "text-grey-700 hover:bg-grey-100 hover:text-mhtc-primary",
        link: "text-mhtc-primary underline-offset-4 hover:underline hover:text-[#A50E25]",
        disabled: "bg-disabled text-disabled border-disabled cursor-not-allowed opacity-60",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-[10px] px-3 text-xs",
        lg: "h-10 rounded-[10px] px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
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
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
