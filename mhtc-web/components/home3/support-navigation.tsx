"use client"

import Link from "next/link"
import { Info, FileText, PlayCircle, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const supportItems = [
  {
    title: "About MHTC",
    description: "Learn about Malaysia Healthcare Travel Council and our mission to promote quality healthcare.",
    icon: Info,
    href: "/about",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "News & Articles",
    description: "Stay updated with the latest healthcare travel news, insights, and developments.",
    icon: FileText,
    href: "/news",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Videos",
    description: "Watch informative videos about healthcare services and patient stories in Malaysia.",
    icon: PlayCircle,
    href: "/videos",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Events Calendar",
    description: "Discover upcoming healthcare events, webinars, and awareness campaigns.",
    icon: Calendar,
    href: "/events",
    color: "bg-amber-50 text-amber-600",
  },
]

export function SupportNavigation() {
  return (
    <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {supportItems.map((item) => (
        <Link key={item.title} href={item.href} className="group transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]">
          <Card className="h-full overflow-hidden border-2 transition-all duration-300 hover:border-[#BE1E2D]/30 hover:shadow-lg">
            <CardContent className="flex h-full flex-col p-6 sm:p-8">
              <div className={cn("mb-4 sm:mb-6 rounded-full p-3 sm:p-4", item.color)}>
                <item.icon className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl font-semibold transition-colors duration-300 group-hover:text-[#BE1E2D]">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
