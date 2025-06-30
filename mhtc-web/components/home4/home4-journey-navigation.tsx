"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const journeyStages = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival",
    description: "Planning your healthcare journey",
    href: "/home4-pre-arrival",
    icon: "📋",
  },
  {
    id: "arrival",
    title: "Arrival",
    description: "Your welcome to Malaysia",
    href: "/home4-arrival",
    icon: "✈️",
  },
  {
    id: "treatment",
    title: "Treatment",
    description: "Your healthcare experience",
    href: "/home4-treatment",
    icon: "🏥",
  },
  {
    id: "post-treatment",
    title: "Post-Treatment",
    description: "Recovery and follow-up",
    href: "/home4-post-treatment",
    icon: "🌿",
  },
]

interface Home4JourneyNavigationProps {
  activeStage: string
}

export function Home4JourneyNavigation({ activeStage }: Home4JourneyNavigationProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
        {journeyStages.map((stage, index) => (
          <div key={stage.id} className="flex items-center">
            <Link
              href={stage.href}
              className={cn(
                "group relative flex flex-col items-center rounded-lg border-2 px-3 py-3 transition-all md:px-4 md:py-4 w-full",
                activeStage === stage.id
                  ? "border-mhtc-primary bg-mhtc-primary/5 text-mhtc-primary"
                  : "border-transparent hover:border-mhtc-primary/30 hover:bg-mhtc-primary/5 hover:text-mhtc-primary",
              )}
            >
              <span className="text-lg md:text-xl" aria-hidden="true">
                {stage.icon}
              </span>
              <span className="mt-1 text-xs font-medium md:text-sm">{stage.title}</span>
              <span className="text-xs text-grey-500 hidden md:block">{stage.description}</span>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 transform rounded-full transition-all",
                  activeStage === stage.id ? "bg-mhtc-primary" : "bg-transparent group-hover:bg-mhtc-primary/30",
                )}
                aria-hidden="true"
              />
            </Link>
            {index < journeyStages.length - 1 && (
              <ChevronRight className="mx-1 h-4 w-4 text-grey-400 hidden md:block" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 