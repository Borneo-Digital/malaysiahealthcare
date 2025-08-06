"use client"

import { useState } from "react"
// import Image from "next/image"
import { MapPin, DollarSign, Globe, CheckCircle, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

interface BenefitsTranslations {
  title: string;
  subtitle: string;
  benefits: Array<{
    title: string;
    description: string;
  }>;
}

interface MalaysianAftercareBenefitsProps {
  benefitsTranslations: BenefitsTranslations;
}

export function MalaysianAftercareBenefits({ benefitsTranslations }: MalaysianAftercareBenefitsProps) {
  const aftercareBenefits = [
  {
    category: "COST ADVANTAGE",
    icon: DollarSign,
    color: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    primaryBenefit: "Up to 80% Cost Savings",
    description: "Exceptional value for extended recovery and rehabilitation services",
    benefits: [
      "Affordable luxury recovery resorts",
      "Cost-effective physiotherapy programs", 
      "Budget-friendly extended stays",
      "Transparent pricing with no hidden costs"
    ],
    comparison: "vs Western Countries"
  },
  {
    category: "CULTURAL HARMONY",
    icon: Globe,
    color: "bg-gradient-to-br from-blue-50 to-cyan-50", 
    borderColor: "border-blue-200",
    primaryBenefit: "Multicultural Environment",
    description: "Seamless cultural integration supporting diverse recovery needs",
    benefits: [
      "Multi-language healthcare staff",
      "Culturally sensitive care approaches",
      "Diverse dietary accommodations",
      "Familiar cultural practices respected"
    ],
    comparison: "Truly Asia Experience"
  },
  {
    category: "TROPICAL WELLNESS",
    icon: Sparkles,
    color: "bg-gradient-to-br from-orange-50 to-amber-50",
    borderColor: "border-orange-200", 
    primaryBenefit: "Year-Round Wellness Climate",
    description: "Optimal tropical conditions accelerating natural healing processes",
    benefits: [
      "Consistent warm weather for recovery",
      "Natural vitamin D from sunshine",
      "Stress-reducing tropical environment",
      "Outdoor rehabilitation opportunities"
    ],
    comparison: "365 Days Perfect Weather"
  },
  {
    category: "ACCESSIBILITY",
    icon: MapPin,
    color: "bg-gradient-to-br from-purple-50 to-violet-50",
    borderColor: "border-purple-200",
    primaryBenefit: "Strategic Global Location",
    description: "Convenient access from Asia-Pacific with excellent connectivity",
    benefits: [
      "Hub location for easy travel",
      "Visa-free/on-arrival for 160+ countries",
      "Direct flights from major cities",
      "Time zone advantages for families"
    ],
    comparison: "Gateway to Asia"
  }
]

// const recoveryEnvironments = [
//   {
//     title: "Luxury Recovery Resorts",
//     image: "/images/home3/woman1.jpg",
//     description: "Resort-style facilities combining medical supervision with vacation amenities",
//     features: ["Spa treatments", "Pool therapy", "Gourmet healthy cuisine", "Cultural excursions"]
//   },
//   {
//     title: "Urban Wellness Centers", 
//     image: "/images/home3/man1.jpg",
//     description: "Modern city facilities with comprehensive rehabilitation programs",
//     features: ["Advanced equipment", "City conveniences", "Shopping therapy", "Cultural attractions"]
//   },
//   {
//     title: "Tropical Healing Retreats",
//     image: "/images/home3/woman2.jpg", 
//     description: "Nature-based recovery in Malaysia&apos;s pristine tropical settings",
//     features: ["Beach therapy", "Nature walks", "Meditation spaces", "Traditional healing"]
//   }
// ]

// const testimonialStats = [
//   { value: "4.9/5", label: "Recovery Experience Rating", icon: Star },
//   { value: "94%", label: "Would Choose Malaysia Again", icon: Heart },
//   { value: "85%", label: "Faster Recovery vs Home", icon: Clock },
//   { value: "12K+", label: "International Patients Annually", icon: Users }
// ]

  const [activeBenefit, setActiveBenefit] = useState(0)

  return (
    <section className="space-y-16">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <MapPin className="h-4 w-4 mr-2" />
          Why Malaysia for Aftercare
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {benefitsTranslations.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {benefitsTranslations.subtitle}
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {aftercareBenefits.map((benefit, index) => (
          <Card 
            key={index}
            className={`${benefit.color} ${benefit.borderColor} border-2 hover:shadow-xl transition-all duration-300 cursor-pointer ${
              activeBenefit === index ? 'ring-2 ring-[#BE1E2D] ring-opacity-50' : ''
            }`}
            onClick={() => setActiveBenefit(index)}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-4 bg-white rounded-xl shadow-sm">
                  <benefit.icon className="h-8 w-8 text-[#BE1E2D]" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{benefitsTranslations.benefits[index]?.title || benefit.category}</h3>
                    <Badge variant="outline" className="text-xs">
                      {benefit.comparison}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#BE1E2D] mb-2">
                    {benefit.primaryBenefit}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefitsTranslations.benefits[index]?.description || benefit.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {benefit.benefits.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white/70 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 