"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const journeySteps = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival",
    description:
      "Plan your healthcare journey with our assistance in hospital selection, appointment scheduling, and travel arrangements.",
    icon: "📋",
    image: "/images/home2/medical-tourism.jpg",
  },
  {
    id: "arrival",
    title: "Arrival",
    description:
      "Experience a smooth arrival with airport reception, transportation to your accommodation, and orientation services.",
    icon: "✈️",
    image: "/images/home2/medical-tourism.jpg",
  },
  {
    id: "treatment",
    title: "Treatment",
    description: "Receive world-class medical care from internationally accredited hospitals and specialists.",
    icon: "🏥",
    image: "/images/home2/cancer.jpg.webp",
  },
  {
    id: "post-treatment",
    title: "Post-Treatment",
    description:
      "Enjoy comprehensive aftercare services, follow-up consultations, and assistance with your return journey.",
    icon: "🌿",
    image: "/images/home2/medical-tourism.jpg",
  },
]

export function HealingJourney() {
  const [activeStep, setActiveStep] = useState("pre-arrival")

  return (
    <div className="mx-auto max-w-5xl">
      {/* Journey Steps Navigation */}
      <div className="mb-12 flex flex-wrap justify-center gap-4 md:gap-6">
        {journeySteps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            <Button
              variant="outline"
              size="lg"
              className={cn(
                "group relative h-auto border-2 px-6 py-8 transition-all duration-200",
                activeStep === step.id
                  ? "border-[#C8102E] bg-[#C8102E]/5 text-[#C8102E]"
                  : "hover:border-[#C8102E]/50 hover:text-[#C8102E]",
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex flex-col items-center space-y-2">
                <span className="text-2xl" aria-hidden="true">
                  {step.icon}
                </span>
                <span className="text-base font-medium">{step.title}</span>
              </div>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 transform rounded-full transition-all duration-200",
                  activeStep === step.id ? "bg-[#C8102E]" : "bg-transparent",
                )}
                aria-hidden="true"
              />
            </Button>
            {index < journeySteps.length - 1 && (
              <ChevronRight className="mx-1 hidden h-5 w-5 text-muted-foreground md:block" />
            )}
          </div>
        ))}
      </div>

      {/* Journey Step Content */}
      <div className="relative overflow-hidden rounded-xl border bg-card shadow-sm">
        {journeySteps.map((step) => (
          <div
            key={step.id}
            className={cn(
              "transition-opacity duration-300",
              activeStep === step.id ? "block opacity-100" : "hidden opacity-0",
            )}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div className="relative h-64 overflow-hidden md:h-auto">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex flex-col justify-center p-6">
                <h3 className="mb-4 text-2xl font-bold text-[#C8102E]">{step.title}</h3>
                <p className="mb-6 text-muted-foreground">{step.description}</p>
                <ul className="mb-6 space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <ChevronRight className="mr-2 h-5 w-5 text-[#C8102E]" />
                      <span>Key benefit or service {item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-auto self-start bg-[#C8102E] hover:bg-[#A00F26]">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
