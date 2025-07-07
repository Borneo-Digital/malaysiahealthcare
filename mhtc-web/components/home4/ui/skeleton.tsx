import * as React from "react"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`animate-pulse bg-gray-300 rounded ${className}`}
      {...props}
    />
  )
)
Skeleton.displayName = "Skeleton" 