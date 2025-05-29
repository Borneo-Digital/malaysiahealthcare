"use client"

import { useState } from "react"
import { 
  Plane, 
  UserCheck, 
  Car, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Info,
  ArrowRight,
  Phone
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Badge } from "@/components/ui/badge"

const timelineSteps = [
  {
    id: "landing",
    title: "Arrival at Airport",
    description: "Land at Kuala Lumpur International Airport (KLIA) or other major Malaysian airports",
    icon: Plane,
    duration: "Upon arrival",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    details: [
      "International flights arrive at KLIA or KLIA2",
      "Immigration and customs procedures",
      "Currency exchange and SIM card services available",
      "Airport information desks for assistance"
    ],
    tips: [
      "Keep important documents readily accessible",
      "Follow airport signage for immigration",
      "Check for any health screening requirements"
    ]
  },
  {
    id: "immigration",
    title: "Immigration & Entry",
    description: "Complete immigration procedures and entry into Malaysia",
    icon: UserCheck,
    duration: "15-30 minutes",
    color: "bg-green-50 border-green-200 text-green-700",
    details: [
      "Present passport and entry documents",
      "Health declaration (if required)",
      "Immigration officer verification",
      "Entry stamp and welcome to Malaysia"
    ],
    tips: [
      "Have medical documentation ready if requested",
      "Ensure passport validity of 6+ months",
      "Declare any medications as required"
    ]
  },
  {
    id: "transportation",
    title: "Transportation Options",
    description: "Various transport options available from the airport",
    icon: Car,
    duration: "Variable",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    details: [
      "Airport taxi services and ride-hailing apps",
      "KLIA Express train to city center",
      "Airport bus services to various destinations",
      "Private transfer services (can be pre-arranged)"
    ],
    tips: [
      "Compare transport options for your destination",
      "Consider traffic conditions and journey time",
      "Pre-arranged transfers can provide convenience"
    ]
  },
  {
    id: "destination",
    title: "Reach Your Destination",
    description: "Arrive at your accommodation or healthcare facility",
    icon: MapPin,
    duration: "30 minutes - 2 hours",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    details: [
      "Check-in to your accommodation",
      "Familiarize yourself with the local area",
      "Confirm healthcare appointments",
      "Contact healthcare facility for any immediate needs"
    ],
    tips: [
      "Keep healthcare facility contact information handy",
      "Note local emergency contacts and services",
      "Confirm appointment times and locations"
    ]
  }
]

export function InteractiveArrivalTimeline() {
  const [activeStep, setActiveStep] = useState<string>("landing")
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const handleStepClick = (stepId: string) => {
    setActiveStep(stepId)
  }

  const markStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }
  }

  const currentStep = timelineSteps.find(step => step.id === activeStep)

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Clock className="h-4 w-4 mr-2" />
          Arrival Process
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Your Arrival Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding the arrival process helps you prepare for a smooth entry into Malaysia 
          for your healthcare journey.
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="grid md:grid-cols-4 gap-4">
        {timelineSteps.map((step, index) => (
          <Card 
            key={step.id}
            className={`cursor-pointer transition-all duration-300 ${
              activeStep === step.id 
                ? `${step.color} border-2 shadow-lg scale-105` 
                : completedSteps.includes(step.id)
                  ? 'border-2 border-green-200 bg-green-50'
                  : 'border border-gray-200 hover:border-gray-300 hover:shadow-md'
            }`}
            onClick={() => handleStepClick(step.id)}
          >
            <CardContent className="p-4 text-center">
              <div className="space-y-3">
                {/* Step Number & Icon */}
                <div className="relative inline-block">
                  <div className={`w-12 h-12 rounded-full ${
                    activeStep === step.id ? 'bg-white' : 'bg-gray-100'
                  } flex items-center justify-center`}>
                    {completedSteps.includes(step.id) ? (
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    ) : (
                      <step.icon className={`h-6 w-6 ${
                        activeStep === step.id ? 'text-[#BE1E2D]' : 'text-gray-600'
                      }`} />
                    )}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#BE1E2D] text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Title & Duration */}
                <div>
                  <h3 className={`text-sm font-semibold ${
                    activeStep === step.id ? 'text-gray-900' : 'text-gray-600'
                  }`}>
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">{step.duration}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Step Details */}
      {currentStep && (
        <Card className={`${currentStep.color} border-2`}>
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Content Side */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white rounded-xl shadow-sm">
                      <currentStep.icon className="h-8 w-8 text-[#BE1E2D]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {currentStep.title}
                      </h3>
                      <p className="text-gray-600">{currentStep.duration}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {currentStep.description}
                  </p>
                </div>

                {/* Process Details */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">What to Expect:</h4>
                  <div className="space-y-2">
                    {currentStep.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-[#BE1E2D] mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tips Side */}
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Helpful Tips:</h4>
                  <div className="space-y-3">
                    {currentStep.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white/70 rounded-lg border border-white/50">
                        <Info className="h-4 w-4 text-[#BE1E2D] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={() => markStepComplete(currentStep.id)}
                    className={`w-full ${
                      completedSteps.includes(currentStep.id)
                        ? 'bg-green-600 hover:bg-green-700'
                        : 'bg-[#BE1E2D] hover:bg-[#A01825]'
                    }`}
                    disabled={completedSteps.includes(currentStep.id)}
                  >
                    {completedSteps.includes(currentStep.id) ? (
                      <>
                        <CheckCircle className="h-4 w-4 mr-2" />
                        Step Completed
                      </>
                    ) : (
                      <>
                        Mark as Understood
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </>
                    )}
                  </Button>
                  
                  <Button variant="outline" className="w-full border-[#BE1E2D] text-[#BE1E2D]">
                    <Phone className="h-4 w-4 mr-2" />
                    Get More Information
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Progress Summary */}
      <div className="text-center pt-8 border-t border-gray-200">
        <div className="inline-flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-[#BE1E2D]">
              {completedSteps.length}/{timelineSteps.length}
            </div>
            <div className="text-sm text-gray-600">Steps Reviewed</div>
          </div>
          <div className="w-px h-12 bg-gray-300" />
          <div className="text-left">
            <p className="text-sm text-gray-600 mb-2">
              Review each step to better understand the arrival process
            </p>
            <Button size="sm" className="bg-[#BE1E2D] hover:bg-[#A01825]">
              Download Arrival Guide
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 