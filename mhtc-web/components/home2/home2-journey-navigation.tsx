"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

const journeySteps = [
  {
    id: "pre-arrival",
    title: "PRE-ARRIVAL",
    subtitle: "Planning Your Journey",
    href: "/home2-pre-arrival",
    number: 1
  },
  {
    id: "arrival", 
    title: "ARRIVAL",
    subtitle: "Welcome to Malaysia",
    href: "/home2-arrival",
    number: 2
  },
  {
    id: "treatment",
    title: "TREATMENT", 
    subtitle: "Your Medical Care",
    href: "/home2-treatment",
    number: 3
  },
  {
    id: "post-treatment",
    title: "POST-TREATMENT",
    subtitle: "Recovery & Follow-up",
    href: "/home2-post-treatment", 
    number: 4
  }
]

interface Home2JourneyNavigationProps {
  currentStep: string
}

export default function Home2JourneyNavigation({ currentStep }: Home2JourneyNavigationProps) {
  const currentIndex = journeySteps.findIndex(step => step.id === currentStep)
  const previousStep = currentIndex > 0 ? journeySteps[currentIndex - 1] : null
  const nextStep = currentIndex < journeySteps.length - 1 ? journeySteps[currentIndex + 1] : null

  return (
    <div className="relative">
      {/* Step Progress Indicator */}
      <section className="py-16 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 left-4 w-32 h-32 border border-white/30 rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-24 h-24 border border-white/30 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-white/20 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
          {/* Current Step Display */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#BE1E2D] font-bold text-lg">{currentIndex + 1}</span>
              </div>
              <div className="text-white">
                <div className="font-light text-sm opacity-90">STEP {currentIndex + 1} OF 4</div>
                <div className="font-medium text-lg uppercase tracking-wide">
                  {journeySteps[currentIndex]?.title}
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="flex justify-between items-center">
              {journeySteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center flex-1">
                  {/* Step Circle */}
                  <Link href={step.href} className="group">
                    <div className={`relative w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white border-white shadow-xl scale-110' 
                        : index < currentIndex 
                          ? 'bg-green-400 border-green-400' 
                          : 'bg-white/20 border-white/40 hover:bg-white/30'
                    }`}>
                      {index < currentIndex ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : (
                        <span className={`font-bold text-lg ${
                          index === currentIndex ? 'text-[#BE1E2D]' : 'text-white'
                        }`}>
                          {step.number}
                        </span>
                      )}
                      
                      {/* Connecting Line */}
                      {index < journeySteps.length - 1 && (
                        <div className={`absolute left-full top-1/2 w-full h-1 -translate-y-1/2 ${
                          index < currentIndex ? 'bg-green-400' : 'bg-white/30'
                        }`} style={{ width: 'calc(100vw / 4 - 4rem)' }}></div>
                      )}
                    </div>
                  </Link>
                  
                  {/* Step Label */}
                  <div className="mt-4 text-center hidden md:block">
                    <div className={`font-medium text-sm uppercase tracking-wide ${
                      index === currentIndex ? 'text-white' : 'text-white/70'
                    }`}>
                      {step.title}
                    </div>
                    <div className="text-white/60 text-xs mt-1">{step.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {previousStep ? (
              <Link href={previousStep.href}>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-8 py-4 font-medium"
                >
                  <ArrowLeft className="w-5 h-5 mr-3" />
                  PREVIOUS: {previousStep.title}
                </Button>
              </Link>
            ) : (
              <div></div>
            )}

            {nextStep ? (
              <Link href={nextStep.href}>
                <Button 
                  size="lg"
                  className="bg-white text-[#BE1E2D] hover:bg-white/90 px-8 py-4 font-medium shadow-xl"
                >
                  NEXT: {nextStep.title}
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            ) : (
              <Link href="/home2">
                <Button 
                  size="lg"
                  className="bg-white text-[#BE1E2D] hover:bg-white/90 px-8 py-4 font-medium shadow-xl"
                >
                  BACK TO HOME
                  <ArrowRight className="w-5 h-5 ml-3" />
                </Button>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
} 