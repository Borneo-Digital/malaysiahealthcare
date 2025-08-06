"use client"

import { useState, useEffect } from "react"
import { Heart, Users, Home, CheckCircle } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import LocaleLink from "@/components/LocaleLink"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


interface HeroTranslations {
  badge: string;
  title: string;
  description: string;
  cta: {
    primary: string;
    secondary: string;
  };
}

interface Home4PostTreatmentHeroProps {
  heroTranslations: HeroTranslations;
}

export function Home4PostTreatmentHero({ heroTranslations }: Home4PostTreatmentHeroProps) {
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
  }, [recoverySupport.length])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-50 via-white to-grey-50/30 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-mhtc-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-info/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-mhtc-primary/10 text-mhtc-primary px-4 py-2 mb-6">
                <Heart className="h-4 w-4 mr-2" />
                {heroTranslations.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-grey-900 leading-tight mb-6">
                {heroTranslations.title}
              </h1>
              
              <p className="text-xl text-grey-600 leading-relaxed mb-8 max-w-2xl">
                {heroTranslations.description}
              </p>
            </div>

            {/* Support Options */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {supportOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-grey-200 shadow-sm">
                  <div className="p-2 bg-mhtc-primary/10 rounded-lg">
                    <option.icon className="h-5 w-5 text-mhtc-primary" />
                  </div>
                  <span className="text-sm font-medium text-grey-700">{option.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LocaleLink href="/contact">
                <Button size="lg" className="bg-mhtc-primary hover:bg-[#A50E25] px-8 py-6">
                  {heroTranslations.cta.primary}
                </Button>
              </LocaleLink>
              {/* <Button size="lg" variant="outline" className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white px-8 py-6">
                {heroTranslations.cta.secondary}
              </Button> */}
            </div>
          </div>

          {/* Interactive Support Guide */}
          <div className="lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-grey-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-mhtc-primary/10 rounded-full mb-4">
                    <Users className="h-8 w-8 text-mhtc-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 mb-2">
                    Support Resources
                  </h3>
                  <p className="text-grey-600">
                    Information and guidance for your recovery
                  </p>
                </div>

                <div className="space-y-4">
                  {recoverySupport.map((support, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                        acknowledgedSupport.includes(index) 
                          ? 'bg-success/10 border border-success/20' 
                          : currentSupport === index 
                            ? 'bg-mhtc-primary/5 border border-mhtc-primary/20' 
                            : 'bg-grey-50 border border-grey-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        acknowledgedSupport.includes(index)
                          ? 'bg-success border-success text-white'
                          : currentSupport === index
                            ? 'border-mhtc-primary bg-mhtc-primary/10 text-mhtc-primary'
                            : 'border-grey-300 text-grey-400'
                      }`}>
                        {acknowledgedSupport.includes(index) ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        acknowledgedSupport.includes(index) || currentSupport === index
                          ? 'text-grey-900'
                          : 'text-grey-600'
                      }`}>
                        {support}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-grey-200 text-center">
                  <p className="text-sm text-grey-600 mb-4">
                    Learn about ongoing support options
                  </p>
                  <Button className="w-full bg-mhtc-primary hover:bg-[#A50E25]">
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