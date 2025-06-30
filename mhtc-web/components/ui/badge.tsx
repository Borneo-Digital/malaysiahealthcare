import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-[10px] border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-mhtc-primary text-white shadow hover:bg-[#A50E25]",
        secondary:
          "border-transparent bg-grey-100 text-grey-700 hover:bg-grey-200",
        destructive:
          "border-transparent bg-error text-white shadow hover:bg-[#DC2626]",
        outline: "border-grey-300 text-grey-700 bg-white",
        success: "border-transparent bg-success text-white shadow hover:bg-[#059669]",
        warning: "border-transparent bg-warning text-white shadow hover:bg-[#D97706]",
        info: "border-transparent bg-info text-white shadow hover:bg-[#2563EB]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
