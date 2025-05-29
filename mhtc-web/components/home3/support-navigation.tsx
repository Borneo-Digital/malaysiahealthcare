"use client"

import Link from "next/link"
import { Info, FileText, PlayCircle, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const supportItems = [
  {
    title: "About MHTC",
    description: "Learn about Malaysia Healthcare Travel Council and our mission.",
    icon: Info,
    href: "/about",
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "News & Articles",
    description: "Stay updated with the latest healthcare travel news and insights.",
    icon: FileText,
    href: "/news",
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Videos",
    description: "Watch informative videos about healthcare services in Malaysia.",
    icon: PlayCircle,
    href: "/videos",
    color: "bg-purple-50 text-purple-600",
  },
  {
    title: "Events Calendar",
    description: "Discover upcoming healthcare events and webinars.",
    icon: Calendar,
    href: "/events",
    color: "bg-amber-50 text-amber-600",
  },
]

export function SupportNavigation() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {supportItems.map((item) => (
        <Link key={item.title} href={item.href} className="group transition-transform duration-200 hover:scale-[1.02]">
          <Card className="h-full overflow-hidden border-2 transition-colors duration-200 hover:border-[#C8102E]/20">
            <CardContent className="flex h-full flex-col p-6">
              <div className={cn("mb-4 rounded-full p-3", item.color)}>
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold transition-colors duration-200 group-hover:text-[#C8102E]">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
