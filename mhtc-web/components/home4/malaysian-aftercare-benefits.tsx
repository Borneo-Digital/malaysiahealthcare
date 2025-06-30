"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, DollarSign, Globe, Clock, Star, CheckCircle, Users, Sparkles, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

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

const recoveryEnvironments = [
  {
    title: "Luxury Recovery Resorts",
    image: "/images/home3/woman1.jpg",
    description: "Resort-style facilities combining medical supervision with vacation amenities",
    features: ["Spa treatments", "Pool therapy", "Gourmet healthy cuisine", "Cultural excursions"]
  },
  {
    title: "Urban Wellness Centers", 
    image: "/images/home3/man1.jpg",
    description: "Modern city facilities with comprehensive rehabilitation programs",
    features: ["Advanced equipment", "City conveniences", "Shopping therapy", "Cultural attractions"]
  },
  {
    title: "Tropical Healing Retreats",
    image: "/images/home3/woman2.jpg", 
    description: "Nature-based recovery in Malaysia&apos;s pristine tropical settings",
    features: ["Beach therapy", "Nature walks", "Meditation spaces", "Traditional healing"]
  }
]

const testimonialStats = [
  { value: "4.9/5", label: "Recovery Experience Rating", icon: Star },
  { value: "94%", label: "Would Choose Malaysia Again", icon: Heart },
  { value: "85%", label: "Faster Recovery vs Home", icon: Clock },
  { value: "12K+", label: "International Patients Annually", icon: Users }
]

export function MalaysianAftercareBenefits() {
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
          The Malaysian Advantage
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover why Malaysia stands out as the premier destination for post-treatment care, 
          offering unique advantages that accelerate recovery and enhance your wellness journey.
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
                    <h3 className="text-lg font-bold text-gray-900">{benefit.category}</h3>
                    <Badge variant="outline" className="text-xs">
                      {benefit.comparison}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold text-[#BE1E2D] mb-2">
                    {benefit.primaryBenefit}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
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

      {/* Recovery Environments Showcase */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Recovery Environments
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from diverse recovery settings designed to match your preferences and medical needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recoveryEnvironments.map((environment, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={environment.image} 
                  alt={environment.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-bold text-lg mb-1">{environment.title}</h4>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {environment.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2">
                  {environment.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#BE1E2D]"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonial Statistics */}
      <div className="bg-gradient-to-r from-[#BE1E2D] to-[#A01825] rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
          <Star className="w-32 h-32" />
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold mb-3">
              Patient Satisfaction Speaks Volumes
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              Join thousands of international patients who have discovered the Malaysian advantage 
              in post-treatment care and recovery excellence.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {testimonialStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-block p-3 bg-white/20 rounded-xl mb-3">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/90 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <blockquote className="text-lg italic text-white/95 mb-6 max-w-3xl mx-auto">
              &quot;My recovery in Malaysia exceeded all expectations. The combination of excellent medical care, 
              affordable luxury, and the warm hospitality made my healing journey truly transformative.&quot;
            </blockquote>
            <div className="text-white/80 text-sm">
              — Sarah Chen, Singapore • Orthopedic Recovery Patient
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Experience the Malaysian Difference
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Discover why Malaysia is becoming the top choice for international patients seeking 
          exceptional post-treatment care in a welcoming, multicultural environment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825]">
            Plan My Recovery
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button> */}
          {/* <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            View Recovery Options
          </Button> */}
        </div>
      </div>
    </section>
  )
} 