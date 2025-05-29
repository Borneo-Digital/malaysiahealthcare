"use client"

import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function MonthlyTheme() {
  return (
    <Card className="overflow-hidden shadow-lg border-0">
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative h-64 sm:h-80 md:h-auto overflow-hidden">
          <div className="absolute left-4 top-4 sm:left-6 sm:top-6 z-10 rounded-full bg-[#BE1E2D] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg">
            Monthly Theme
          </div>
          <Image
            src="/images/home2/breast-cancer-reduce-risk.jpg.avif"
            alt="Pinktober - Breast Cancer Awareness Month"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <CardContent className="flex flex-col justify-center p-6 sm:p-8 md:p-10">
          <div className="mb-3 sm:mb-4 flex items-center text-xs sm:text-sm text-muted-foreground">
            <Calendar className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
            <span>October 2024</span>
          </div>
          <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl font-bold text-[#BE1E2D]">Pinktober: Breast Cancer Awareness Month</h3>
          <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground">
            Join us in raising awareness about breast cancer this October. Malaysia Healthcare offers comprehensive
            screening, diagnosis, and treatment options with world-class oncology specialists.
          </p>
          <div className="mb-6 sm:mb-8 rounded-lg bg-slate-50 p-4 sm:p-6">
            <h4 className="mb-3 sm:mb-4 text-sm sm:text-base font-semibold text-gray-900">Special Initiatives:</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0 rounded-full bg-[#BE1E2D]"></span>
                <span>Discounted screening packages at partner hospitals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0 rounded-full bg-[#BE1E2D]"></span>
                <span>Educational webinars with leading oncologists</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 sm:mr-3 mt-1 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-shrink-0 rounded-full bg-[#BE1E2D]"></span>
                <span>Survivor stories and support resources</span>
              </li>
            </ul>
          </div>
          <Button className="self-start bg-[#BE1E2D] hover:bg-[#A01825] transition-colors duration-200 text-sm sm:text-base">Learn More</Button>
        </CardContent>
      </div>
    </Card>
  )
}
