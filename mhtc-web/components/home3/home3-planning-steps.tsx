"use client"

import { useState } from "react"
import { 
  FileText, 
  Hospital, 
  Plane, 
  DollarSign, 
  ChevronDown, 
  ChevronRight,
  Download,
  ExternalLink 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Badge } from "@/components/ui/badge"

const planningSteps = [
  {
    id: "research-prepare",
    title: "Research & Preparation",
    icon: FileText,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    description: "Gather information about Malaysian healthcare options and prepare your documentation.",
    details: [
      "Research accredited hospitals and facilities",
      "Compile medical history and records",
      "Check passport validity and visa requirements",
      "Contact healthcare providers for preliminary consultations"
    ]
  },
  {
    id: "hospital-selection",
    title: "Hospital & Specialist Information",
    icon: Hospital,
    color: "bg-green-50 border-green-200 text-green-700", 
    description: "Learn about Malaysia's healthcare facilities and available medical specialties.",
    details: [
      "Review internationally accredited hospitals",
      "Information on specialist qualifications",
      "Compare treatment options and approaches",
      "Understand facility certifications and standards"
    ]
  },
  {
    id: "travel-logistics",
    title: "Travel & Accommodation",
    icon: Plane,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    description: "Plan your travel arrangements and accommodation options in Malaysia.",
    details: [
      "Research flight options and travel routes",
      "Explore accommodation near healthcare facilities",
      "Consider transportation within Malaysia", 
      "Plan for extended stay if needed"
    ]
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    icon: DollarSign,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    description: "Understand costs and payment options for your healthcare journey.",
    details: [
      "Review treatment cost estimates",
      "Understand payment methods accepted",
      "Check insurance coverage and requirements",
      "Plan for additional expenses and contingencies"
    ]
  }
]

export function Home3PlanningSteps() {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  const toggleStep = (stepId: string) => {
    setActiveStep(activeStep === stepId ? null : stepId)
  }

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <FileText className="h-4 w-4 mr-2" />
          Planning Guide
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Healthcare Journey Planning
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Essential information and steps to help you prepare for your medical travel to Malaysia.
        </p>
      </div>

      {/* Planning Steps */}
      <div className="space-y-6">
        {planningSteps.map((step, index) => (
          <Card 
            key={step.id}
            className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
              activeStep === step.id ? 'border-[#BE1E2D] shadow-lg' : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleStep(step.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Step Number & Icon */}
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl ${step.color.replace('text-', 'bg-').split(' ')[0]} flex items-center justify-center`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#BE1E2D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Expand Icon */}
                <div className="ml-4">
                  {activeStep === step.id ? (
                    <ChevronDown className="h-6 w-6 text-[#BE1E2D]" />
                  ) : (
                    <ChevronRight className="h-6 w-6 text-gray-400" />
                  )}
                </div>
              </div>

              {/* Expanded Content */}
              {activeStep === step.id && (
                <div className="mt-6 pt-6 border-t border-gray-200 animate-in slide-in-from-top duration-300">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Information Areas:</h4>
                      <div className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                            <div className="w-2 h-2 rounded-full bg-[#BE1E2D] mt-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900 text-lg">Resources:</h4>
                      <div className="space-y-3">
                        <Button 
                          variant="outline" 
                          className="w-full justify-start border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D]/5"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          Download Planning Guide
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start border-gray-300 text-gray-700 hover:bg-gray-50"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Healthcare Facilities
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Need Planning Assistance?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Get comprehensive information and support for planning your healthcare journey to Malaysia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825]">
            Contact MHTC
          </Button>
          <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            Download Complete Guide
          </Button>
        </div>
      </div>
    </section>
  )
} 