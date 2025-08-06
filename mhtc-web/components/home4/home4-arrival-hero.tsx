"use client"

import { useState, useEffect } from "react"
import { Plane, MapPin, Clock, CheckCircle, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LocaleLink from "@/components/LocaleLink"


interface HeroTranslations {
  badge: string;
  title: string;
  description: string;
  arrivalMilestones: string[];
  malaysiaWelcome: Array<{
    text: string;
  }>;
  cta: {
    primary: string;
    secondary: string;
  };
}

interface Home4ArrivalHeroProps {
  heroTranslations: HeroTranslations;
}

export function Home4ArrivalHero({ heroTranslations }: Home4ArrivalHeroProps) {
  const arrivalMilestones = heroTranslations.arrivalMilestones
  const malaysiaWelcome = [
    { icon: Plane, text: heroTranslations.malaysiaWelcome[0]?.text || "International airport access" },
    { icon: MapPin, text: heroTranslations.malaysiaWelcome[1]?.text || "Strategic location" },
    { icon: Users, text: heroTranslations.malaysiaWelcome[2]?.text || "24/7 support available" }
  ]
  const [currentMilestone, setCurrentMilestone] = useState(0)
  const [completedMilestones, setCompletedMilestones] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMilestone((prev) => {
        const next = (prev + 1) % arrivalMilestones.length
        if (next === 0) {
          setCompletedMilestones([])
        } else {
          setCompletedMilestones(prevCompleted => [...prevCompleted, prev])
        }
        return next
      })
    }, 2500)

    return () => clearInterval(interval)
  }, [arrivalMilestones.length])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-grey-50 via-white to-blue-50/30 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-40 h-40 bg-mhtc-primary/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-success/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-mhtc-primary/10 text-mhtc-primary px-4 py-2 mb-6">
                <Plane className="h-4 w-4 mr-2" />
                {heroTranslations.badge}
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-grey-900 leading-tight mb-6">
                {heroTranslations.title}
              </h1>
              
              <p className="text-xl text-grey-600 leading-relaxed mb-8 max-w-2xl">
                {heroTranslations.description}
              </p>
            </div>

            {/* Malaysia Welcome Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {malaysiaWelcome.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-grey-200 shadow-sm">
                  <div className="p-2 bg-mhtc-primary/10 rounded-lg">
                    <feature.icon className="h-5 w-5 text-mhtc-primary" />
                  </div>
                  <span className="text-sm font-medium text-grey-700">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <LocaleLink href="/treatment">
                <Button size="lg" className="bg-mhtc-primary hover:bg-[#A50E25] px-8 py-6">
                  {heroTranslations.cta.primary}
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </LocaleLink>
              {/* <Button size="lg" variant="outline" className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white px-8 py-6">
                {heroTranslations.cta.secondary}
              </Button> */}
            </div>
          </div>

          {/* Interactive Arrival Timeline */}
          <div className="lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-grey-200 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-mhtc-primary/10 rounded-full mb-4">
                    <Clock className="h-8 w-8 text-mhtc-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-grey-900 mb-2">
                    Arrival Process
                  </h3>
                  <p className="text-grey-600">
                    Step-by-step arrival experience
                  </p>
                </div>

                <div className="space-y-4">
                  {arrivalMilestones.map((milestone, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                        completedMilestones.includes(index) 
                          ? 'bg-success/10 border border-success/20' 
                          : currentMilestone === index 
                            ? 'bg-mhtc-primary/5 border border-mhtc-primary/20' 
                            : 'bg-grey-50 border border-grey-200'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                        completedMilestones.includes(index)
                          ? 'bg-success border-success text-white'
                          : currentMilestone === index
                            ? 'border-mhtc-primary bg-mhtc-primary/10 text-mhtc-primary'
                            : 'border-grey-300 text-grey-400'
                      }`}>
                        {completedMilestones.includes(index) ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        completedMilestones.includes(index) || currentMilestone === index
                          ? 'text-grey-900'
                          : 'text-grey-600'
                      }`}>
                        {milestone}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-grey-200 text-center">
                  <p className="text-sm text-grey-600 mb-4">
                    Learn about arrival support options
                  </p>
                  <Button className="w-full bg-mhtc-primary hover:bg-[#A50E25]">
                    View Arrival Services
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