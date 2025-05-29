"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function MonthlyTheme() {
  return (
    <Card className="overflow-hidden">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="relative h-64 overflow-hidden md:h-auto">
          <div className="absolute left-4 top-4 z-10 rounded-full bg-[#C8102E] px-4 py-1 text-sm font-medium text-white">
            Monthly Theme
          </div>
          <Image
            src="/images/home2/breast-cancer-reduce-risk.jpg.avif"
            alt="Pinktober - Breast Cancer Awareness Month"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <CardContent className="flex flex-col justify-center p-6">
          <div className="mb-4 flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4" />
            <span>October 2023</span>
          </div>
          <h3 className="mb-2 text-2xl font-bold text-[#C8102E]">Pinktober: Breast Cancer Awareness Month</h3>
          <p className="mb-6 text-muted-foreground">
            Join us in raising awareness about breast cancer this October. Malaysia Healthcare offers comprehensive
            screening, diagnosis, and treatment options with world-class oncology specialists.
          </p>
          <div className="mb-6 rounded-lg bg-slate-100 p-4">
            <h4 className="mb-2 font-medium">Special Initiatives:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="mr-2 text-[#C8102E]">•</span>
                <span>Discounted screening packages at partner hospitals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#C8102E]">•</span>
                <span>Educational webinars with leading oncologists</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-[#C8102E]">•</span>
                <span>Survivor stories and support resources</span>
              </li>
            </ul>
          </div>
          <Button className="mt-auto self-start bg-[#C8102E] hover:bg-[#A00F26]">Learn More</Button>
        </CardContent>
      </div>
    </Card>
  )
}
