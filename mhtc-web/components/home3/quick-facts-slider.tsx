"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Plane, Globe, Award, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Badge } from "@/components/ui/badge"

const quickFacts = [
  {
    id: "visa-friendly",
    title: "Visa-Friendly Entry",
    description: "Visa-free or visa-on-arrival access for many countries visiting Malaysia",
    icon: Plane,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    detail: "Easy access",
    highlight: "Multiple countries eligible"
  },
  {
    id: "english-spoken",
    title: "English Widely Spoken", 
    description: "English is commonly used in Malaysian healthcare facilities",
    icon: Globe,
    color: "bg-green-50 border-green-200 text-green-700",
    detail: "Communication",
    highlight: "Language accessibility"
  },
  {
    id: "quality-healthcare",
    title: "Quality Healthcare Standards",
    description: "Internationally accredited hospitals and certified healthcare professionals",
    icon: Award,
    color: "bg-purple-50 border-purple-200 text-purple-700", 
    detail: "Accreditation",
    highlight: "International standards"
  },
  {
    id: "warm-hospitality",
    title: "Malaysian Hospitality",
    description: "Experience Malaysia's renowned warm hospitality and multicultural environment",
    icon: Heart,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    detail: "Culture",
    highlight: "Truly Asia experience"
  }
]

export function QuickFactsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % quickFacts.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % quickFacts.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + quickFacts.length) % quickFacts.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const currentFact = quickFacts[currentIndex]

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Globe className="h-4 w-4 mr-2" />
          Malaysia Quick Facts
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Why Choose Malaysia
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the advantages that make Malaysia an attractive healthcare destination.
        </p>
      </div>

      {/* Main Slider */}
      <div className="relative">
        <Card className={`${currentFact.color} border-2 min-h-[400px] overflow-hidden`}>
          <CardContent className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content Side */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <currentFact.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">{currentFact.detail}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {currentFact.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {currentFact.description}
                  </p>

                  <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
                    <div className="w-2 h-2 rounded-full bg-[#BE1E2D]" />
                    <span className="text-sm font-medium text-gray-800">{currentFact.highlight}</span>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="w-48 h-48 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <currentFact.icon className="h-24 w-24 text-white/80" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full animate-pulse" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-4">
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="bg-white/90 backdrop-blur-sm border-white/20 hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2">
        {quickFacts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-[#BE1E2D] scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Facts Grid - Mobile Alternative */}
      <div className="md:hidden grid grid-cols-2 gap-4">
        {quickFacts.map((fact, index) => (
          <Card 
            key={fact.id}
            className={`border-2 cursor-pointer transition-all duration-300 ${
              index === currentIndex ? 'border-[#BE1E2D] shadow-lg' : 'border-gray-200'
            }`}
            onClick={() => goToSlide(index)}
          >
            <CardContent className="p-4 text-center">
              <div className="p-3 bg-[#BE1E2D]/10 rounded-xl w-fit mx-auto mb-3">
                <fact.icon className="h-6 w-6 text-[#BE1E2D]" />
              </div>
              <h4 className="font-semibold text-gray-900 text-sm">{fact.title}</h4>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Footer */}
      <div className="text-center pt-8 border-t border-gray-200">
        <p className="text-gray-600 mb-4">
          Learn more about Malaysia as a healthcare destination
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            Explore Malaysia Healthcare
          </Button>
          <Button variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            View Destination Guide
          </Button>
        </div>
      </div>
    </section>
  )
} 