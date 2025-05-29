"use client"

import { Skeleton } from "@/components/home3/ui/skeleton"
import { FadeIn } from "@/components/home3/animations/fade-in"

export function HeroSkeleton() {
  return (
    <div className="w-full">
      <Skeleton className="h-[500px] w-full" />
    </div>
  )
}

export function JourneySkeleton() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="mx-auto h-10 w-1/3" />
          <Skeleton className="mx-auto h-4 w-1/2" />
        </div>
        <div className="flex justify-center space-x-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-24 w-24" />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Skeleton className="h-64" />
          <div className="space-y-4">
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>
            <Skeleton className="h-10 w-1/3" />
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

export function ThemeSkeleton() {
  return (
    <FadeIn>
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-64" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-1/4" />
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-10 w-1/3" />
        </div>
      </div>
    </FadeIn>
  )
}

export function TestimonialsSkeleton() {
  return (
    <FadeIn>
      <div className="space-y-8">
        <div className="space-y-2">
          <Skeleton className="mx-auto h-10 w-1/3" />
          <Skeleton className="mx-auto h-4 w-1/2" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center space-x-2">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-16" />
                </div>
              </div>
              <Skeleton className="h-24 w-full" />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
} 