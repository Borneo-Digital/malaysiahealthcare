"use client"

import { useState, useEffect } from "react"
import { Heart, Users, Home, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/home3/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const recoverySupport = [
  "Follow-up care information",
  "Recovery guidance resources",
  "Support network connections",
  "Travel assistance information"
]

const supportOptions = [
  { icon: Heart, text: "Recovery resources" },
  { icon: Users, text: "Support networks" },
  { icon: Home, text: "Aftercare information" }
]

export function Home3PostTreatmentHero() {
  const [currentSupport, setCurrentSupport] = useState(0)
  const [acknowledgedSupport, setAcknowledgedSupport] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSupport((prev) => {
        const next = (prev + 1) % recoverySupport.length
        if (next === 0) {
          setAcknowledgedSupport([])
        } else {
          setAcknowledgedSupport(prevAcknowledged => [...prevAcknowledged, prev])
        }
        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-white to-pink-50/30 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#BE1E2D]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-purple-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2 mb-6">
                <Heart className="h-4 w-4 mr-2" />
                POST-TREATMENT SUPPORT
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Continue Your
                <span className="block text-[#BE1E2D]">Recovery Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Access information about post-treatment support, recovery resources, 
                and continued connections with Malaysia&apos;s healthcare community.
              </p>
            </div>

            {/* Support Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {supportOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-[#BE1E2D]/10 rounded-lg">
                    <option.icon className="h-5 w-5 text-[#BE1E2D]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{option.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825] px-8 py-6">
                Explore Support Options
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D] px-8 py-6">
                Recovery Resources
              </Button>
            </div>
          </div>

          {/* Interactive Support Guide */}
          <div className="lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-[#BE1E2D]/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Support Resources
                  </h3>
                  <p className="text-gray-600">
                    Information and guidance for your recovery
                  </p>
                </div>

                <div className="space-y-4">
                  {recoverySupport.map((support, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                        acknowledgedSupport.includes(index) 
                          ? 'bg-green-50 border border-green-200' 
                          : currentSupport === index 
                            ? 'bg-[#BE1E2D]/5 border border-[#BE1E2D]/20' 
                            : 'bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        acknowledgedSupport.includes(index)
                          ? 'bg-green-500 border-green-500 text-white'
                          : currentSupport === index
                            ? 'border-[#BE1E2D] bg-[#BE1E2D]/10 text-[#BE1E2D]'
                            : 'border-gray-300 text-gray-400'
                      }`}>
                        {acknowledgedSupport.includes(index) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        acknowledgedSupport.includes(index) || currentSupport === index
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}>
                        {support}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Learn about ongoing support options
                  </p>
                  <Button className="w-full bg-[#BE1E2D] hover:bg-[#A01825]">
                    View Support Guide
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