import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-[10px] border border-grey-300 bg-white px-3 py-2 text-base shadow-sm placeholder:text-grey-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-mhtc-primary focus-visible:border-mhtc-primary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-disabled disabled:border-disabled md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
