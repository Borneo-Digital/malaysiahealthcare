"use client"

import { useState, useEffect } from "react"
import { Stethoscope, Shield, Users, Award, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/home3/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const treatmentFocus = [
  "Quality healthcare facilities",
  "International standards", 
  "Skilled medical professionals",
  "Advanced medical technology"
]

const malaysiaStrengths = [
  { icon: Shield, text: "Accredited hospitals" },
  { icon: Users, text: "Multilingual care teams" },
  { icon: Award, text: "International recognition" }
]

export function Home3TreatmentHero() {
  const [currentFocus, setCurrentFocus] = useState(0)
  const [highlightedFocus, setHighlightedFocus] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFocus((prev) => {
        const next = (prev + 1) % treatmentFocus.length
        if (next === 0) {
          setHighlightedFocus([])
        } else {
          setHighlightedFocus(prevHighlighted => [...prevHighlighted, prev])
        }
        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-emerald-50 via-white to-blue-50/30 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-36 h-36 bg-[#BE1E2D]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-emerald-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2 mb-6">
                <Stethoscope className="h-4 w-4 mr-2" />
                TREATMENT EXCELLENCE
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Experience
                <span className="block text-[#BE1E2D]">Quality Healthcare</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Discover Malaysia&apos;s healthcare excellence with internationally accredited 
                hospitals, skilled specialists, and comprehensive medical services.
              </p>
            </div>

            {/* Malaysia Healthcare Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {malaysiaStrengths.map((strength, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-[#BE1E2D]/10 rounded-lg">
                    <strength.icon className="h-5 w-5 text-[#BE1E2D]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{strength.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825] px-8 py-6">
                Explore Specialties
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D] px-8 py-6">
                View Hospitals
              </Button>
            </div>
          </div>

          {/* Interactive Treatment Focus */}
          <div className="lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-[#BE1E2D]/10 rounded-full mb-4">
                    <Heart className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Healthcare Excellence
                  </h3>
                  <p className="text-gray-600">
                    Malaysia&apos;s healthcare advantages
                  </p>
                </div>

                <div className="space-y-4">
                  {treatmentFocus.map((focus, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                        highlightedFocus.includes(index) 
                          ? 'bg-green-50 border border-green-200' 
                          : currentFocus === index 
                            ? 'bg-[#BE1E2D]/5 border border-[#BE1E2D]/20' 
                            : 'bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        highlightedFocus.includes(index)
                          ? 'bg-green-500 border-green-500 text-white'
                          : currentFocus === index
                            ? 'border-[#BE1E2D] bg-[#BE1E2D]/10 text-[#BE1E2D]'
                            : 'border-gray-300 text-gray-400'
                      }`}>
                        {highlightedFocus.includes(index) ? (
                          <Award className="h-4 w-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        highlightedFocus.includes(index) || currentFocus === index
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}>
                        {focus}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Learn about Malaysia&apos;s healthcare services
                  </p>
                  <Button className="w-full bg-[#BE1E2D] hover:bg-[#A01825]">
                    View Healthcare Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
} 