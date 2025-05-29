"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const journeyStages = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival",
    description: "Planning your healthcare journey",
    href: "/home3-pre-arrival",
    icon: "📋",
  },
  {
    id: "arrival",
    title: "Arrival",
    description: "Your welcome to Malaysia",
    href: "/home3-arrival",
    icon: "✈️",
  },
  {
    id: "treatment",
    title: "Treatment",
    description: "Your healthcare experience",
    href: "/home3-treatment",
    icon: "🏥",
  },
  {
    id: "post-treatment",
    title: "Post-Treatment",
    description: "Recovery and follow-up",
    href: "/home3-post-treatment",
    icon: "🌿",
  },
]

interface Home3JourneyNavigationProps {
  activeStage: string
}

export function Home3JourneyNavigation({ activeStage }: Home3JourneyNavigationProps) {
  return (
    <div className="overflow-auto">
      <div className="flex min-w-max justify-center gap-2 md:gap-4">
        {journeyStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <Link
              href={stage.href}
              className={cn(
                "group relative flex flex-col items-center rounded-lg border-2 px-4 py-3 transition-all md:px-6 md:py-4",
                activeStage === stage.id
                  ? "border-[#BE1E2D] bg-[#BE1E2D]/5 text-[#BE1E2D]"
                  : "border-transparent hover:border-[#BE1E2D]/30 hover:bg-[#BE1E2D]/5 hover:text-[#BE1E2D]",
              )}
            >
              <span className="text-xl md:text-2xl" aria-hidden="true">
                {stage.icon}
              </span>
              <span className="mt-1 text-sm font-medium md:text-base">{stage.title}</span>
              <span className="text-xs text-muted-foreground md:text-sm">{stage.description}</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 transform rounded-full transition-all",
                  activeStage === stage.id ? "bg-[#BE1E2D]" : "bg-transparent group-hover:bg-[#BE1E2D]/30",
                )}
                aria-hidden="true"
              />
            </Link>
            {index < journeyStages.length - 1 && (
              <ChevronRight className="mx-1 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 