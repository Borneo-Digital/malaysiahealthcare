"use client"

import Link from "next/link"
import { ArrowRight, MapPin, Stethoscope, Heart, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const journeySteps = [
  {
    id: "pre-arrival",
    title: "Pre-Arrival",
    subtitle: "Planning & Preparation",
    description: "Start your healthcare journey with guidance on hospital selection, travel planning, and preparation for your medical care in Malaysia.",
    icon: MapPin,
    href: "/home3-pre-arrival",
    highlights: [
      "Information on accredited hospitals and specialists",
      "Travel planning and documentation guidance", 
      "Medical tourism preparation resources"
    ]
  },
  {
    id: "arrival",
    title: "Arrival",
    subtitle: "Welcome to Malaysia",
    description: "Discover Malaysia's warm hospitality and comprehensive arrival support services designed for international healthcare travelers.",
    icon: Users,
    href: "/home3-arrival",
    highlights: [
      "Airport assistance and concierge services",
      "Transportation and accommodation information",
      "Cultural orientation and local support"
    ]
  },
  {
    id: "treatment",
    title: "Treatment",
    subtitle: "Quality Healthcare",
    description: "Access information about Malaysia's internationally accredited hospitals, certified specialists, and modern medical facilities.",
    icon: Stethoscope,
    href: "/home3-treatment",
    highlights: [
      "Internationally accredited healthcare facilities",
      "Information on medical specialties available",
      "Quality standards and certifications"
    ]
  },
  {
    id: "post-treatment",
    title: "Post-Treatment",
    subtitle: "Recovery & Aftercare",
    description: "Learn about recovery support services, follow-up care options, and aftercare resources for your healing journey.",
    icon: Heart,
    href: "/home3-post-treatment",
    highlights: [
      "Recovery and rehabilitation information",
      "Follow-up care coordination",
      "Aftercare support resources"
    ]
  },
]

export function HealingJourney() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Journey Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {journeySteps.map((step, index) => (
          <Card key={step.id} className="group border-2 border-gray-200 hover:border-[#BE1E2D] hover:shadow-lg transition-all duration-300">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                {/* Step Number & Icon */}
                <div className="relative">
                  <div className="w-16 h-16 mx-auto bg-[#BE1E2D]/5 rounded-full flex items-center justify-center group-hover:bg-[#BE1E2D]/10 transition-colors">
                    <step.icon className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#BE1E2D] text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-[#BE1E2D] font-medium mb-3">{step.subtitle}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="space-y-2">
                  {step.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start text-left">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BE1E2D] mt-2 mr-2 flex-shrink-0" />
                      <span className="text-xs text-gray-600">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={step.href}>
                  <Button className="w-full bg-[#BE1E2D] hover:bg-[#A01825] group-hover:scale-105 transition-all duration-300">
                    Explore {step.title}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Banner */}
      <div className="rounded-xl bg-gradient-to-r from-[#BE1E2D]/5 to-[#BE1E2D]/10 p-6 md:p-8 text-center">
        <h4 className="mb-3 text-xl font-bold text-[#BE1E2D]">
          Experience Malaysia Healthcare
        </h4>
        <p className="mx-auto max-w-3xl text-gray-700 mb-4">
          The Malaysia Healthcare Travel Council promotes Malaysia as a leading healthcare destination, 
          connecting you with quality medical services, warm hospitality, and comprehensive support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            Learn About Malaysia Healthcare
          </Button>
          <Button variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            Download Healthcare Guide
          </Button>
        </div>
      </div>
    </div>
  )
}
