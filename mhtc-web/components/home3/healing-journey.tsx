"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronRight, MapPin, Stethoscope, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const journeySteps = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival",
    subtitle: "Planning & Preparation",
    description:
      "Begin your healthcare journey with comprehensive planning assistance. We help you select the right hospital, schedule appointments, arrange medical evaluations, and coordinate travel logistics.",
    icon: MapPin,
    image: "/images/home2/medical-tourism.jpg",
    highlights: [
      "Hospital selection and consultation scheduling",
      "Medical record evaluation and second opinions",
      "Travel coordination and accommodation assistance"
    ]
  },
  {
    id: "arrival",
    title: "Arrival",
    subtitle: "Warm Malaysian Welcome",
    description:
      "Experience our world-famous Malaysian hospitality from the moment you arrive. Our dedicated team ensures smooth airport reception, seamless transportation, and comprehensive orientation.",
    icon: Users,
    image: "/images/home2/medical-tourism.jpg",
    highlights: [
      "Airport meet & greet with dedicated concierge",
      "Transportation to accommodation and hospitals",
      "Cultural orientation and local assistance"
    ]
  },
  {
    id: "treatment",
    title: "Treatment",
    subtitle: "World-Class Healthcare",
    description: "Receive exceptional medical care from internationally accredited hospitals with fellowship-certified doctors, cutting-edge technologies, and proven medical outcomes.",
    icon: Stethoscope,
    image: "/images/home2/cancer.jpg.webp",
    highlights: [
      "Fellowship-certified specialists and expert care",
      "Leading-edge medical technologies and protocols",
      "JCI-accredited hospitals with international standards"
    ]
  },
  {
    id: "post-treatment",
    title: "Post-Treatment",
    subtitle: "Continuing Care",
    description:
      "Enjoy comprehensive aftercare services, recovery support, follow-up consultations, and assistance with your return journey. We ensure continuity of care beyond your stay.",
    icon: Heart,
    image: "/images/home2/medical-tourism.jpg",
    highlights: [
      "Comprehensive aftercare and recovery support",
      "Follow-up consultations and medical reports",
      "Return journey assistance and care coordination"
    ]
  },
]

export function HealingJourney() {
  const [activeStep, setActiveStep] = useState("pre-arrival")

  return (
    <div className="mx-auto max-w-7xl">
      {/* Journey Steps Navigation */}
      <div className="mb-12 lg:mb-16">
        {/* Mobile: 2x2 Grid Layout */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {journeySteps.map((step) => (
            <Button
              key={step.id}
              variant="outline"
              className={cn(
                "group relative h-auto border-2 p-4 transition-all duration-300",
                activeStep === step.id
                  ? "border-[#BE1E2D] bg-[#BE1E2D]/5 text-[#BE1E2D] shadow-lg"
                  : "border-gray-200 hover:border-[#BE1E2D]/50 hover:text-[#BE1E2D] hover:shadow-md",
              )}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex flex-col items-center space-y-2">
                <div className={cn(
                  "rounded-full p-2 transition-colors duration-300",
                  activeStep === step.id ? "bg-[#BE1E2D]/10" : "bg-gray-50"
                )}>
                  <step.icon className={cn(
                    "h-5 w-5 transition-colors duration-300",
                    activeStep === step.id ? "text-[#BE1E2D]" : "text-gray-600"
                  )} />
                </div>
                <div className="text-center">
                  <span className="block text-sm font-semibold leading-tight">{step.title}</span>
                </div>
              </div>
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 translate-y-1/2 transform rounded-full transition-all duration-300",
                  activeStep === step.id ? "bg-[#BE1E2D]" : "bg-transparent",
                )}
                aria-hidden="true"
              />
            </Button>
          ))}
        </div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:flex justify-center items-center gap-4 lg:gap-6">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <Button
                variant="outline"
                size="lg"
                className={cn(
                  "group relative h-auto min-w-[160px] border-2 px-6 py-8 transition-all duration-300",
                  activeStep === step.id
                    ? "border-[#BE1E2D] bg-[#BE1E2D]/5 text-[#BE1E2D] shadow-lg"
                    : "border-gray-200 hover:border-[#BE1E2D]/50 hover:text-[#BE1E2D] hover:shadow-md",
                )}
                onClick={() => setActiveStep(step.id)}
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className={cn(
                    "rounded-full p-2 transition-colors duration-300",
                    activeStep === step.id ? "bg-[#BE1E2D]/10" : "bg-gray-50"
                  )}>
                    <step.icon className={cn(
                      "h-6 w-6 transition-colors duration-300",
                      activeStep === step.id ? "text-[#BE1E2D]" : "text-gray-600"
                    )} />
                  </div>
                  <div className="text-center">
                    <span className="block text-sm font-semibold leading-tight">{step.title}</span>
                    <span className="block text-xs text-muted-foreground">{step.subtitle}</span>
                  </div>
                </div>
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 transform rounded-full transition-all duration-300",
                    activeStep === step.id ? "bg-[#BE1E2D]" : "bg-transparent",
                  )}
                  aria-hidden="true"
                />
              </Button>
              {index < journeySteps.length - 1 && (
                <ChevronRight className="mx-2 h-5 w-5 text-muted-foreground" />
              )}
            </div>
          ))}
        </div>

        {/* Progress Indicator for Mobile */}
        <div className="mt-4 flex justify-center space-x-2 md:hidden">
          {journeySteps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={cn(
                "h-2 w-8 rounded-full transition-all duration-300",
                activeStep === step.id ? "bg-[#BE1E2D]" : "bg-gray-300"
              )}
              aria-label={`Go to ${step.title}`}
            />
          ))}
        </div>
      </div>

      {/* Journey Step Content */}
      <div className="relative overflow-hidden rounded-xl lg:rounded-2xl border border-gray-200 bg-white shadow-lg lg:shadow-xl">
        {journeySteps.map((step) => (
          <div
            key={step.id}
            className={cn(
              "transition-opacity duration-500",
              activeStep === step.id ? "block opacity-100" : "hidden opacity-0",
            )}
          >
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden">
                <div className="absolute left-4 top-4 sm:left-6 sm:top-6 z-10 rounded-full bg-[#BE1E2D] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white shadow-lg">
                  {step.subtitle}
                </div>
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                <div className="mb-4 sm:mb-6">
                  <h3 className="mb-2 sm:mb-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#BE1E2D]">{step.title}</h3>
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700">{step.description}</p>
                </div>
                
                <div className="mb-6 sm:mb-8">
                  <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold text-gray-900">Key Services:</h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {step.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="mr-2 sm:mr-3 mt-0.5 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-[#BE1E2D]" />
                        <span className="text-sm sm:text-base text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Button className="bg-[#BE1E2D] text-white hover:bg-[#A01825] transition-colors duration-200 text-sm sm:text-base">
                    Learn More
                  </Button>
                  <Button variant="outline" className="border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D]/5 text-sm sm:text-base">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quality Assurance Banner */}
      <div className="mt-8 sm:mt-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-[#BE1E2D]/5 to-[#BE1E2D]/10 p-4 sm:p-6 md:p-8 text-center">
        <h4 className="mb-2 text-lg sm:text-xl font-bold text-[#BE1E2D]">Quality Care for Your Peace of Mind</h4>
        <p className="mx-auto max-w-3xl text-sm sm:text-base text-gray-700">
          Every step of your healing journey is supported by Malaysia&apos;s commitment to quality healthcare, 
          with internationally accredited hospitals, fellowship-certified doctors, and world-class infrastructure.
        </p>
      </div>
    </div>
  )
}
