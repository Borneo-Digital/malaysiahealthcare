"use client"

import { useState, useEffect } from "react"
import { MapPin, Compass, Globe, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/home3/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const preparationTasks = [
  "Research Malaysian healthcare facilities",
  "Prepare medical documentation", 
  "Plan travel arrangements",
  "Review cultural information"
]

const malaysiaHighlights = [
  { icon: Globe, text: "Multi-cultural environment" },
  { icon: MapPin, text: "Southeast Asia hub location" },
  { icon: CheckCircle, text: "English widely spoken" }
]

export function Home3PreArrivalHero() {
  const [currentTask, setCurrentTask] = useState(0)
  const [completedTasks, setCompletedTasks] = useState<number[]>([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTask((prev) => {
        const next = (prev + 1) % preparationTasks.length
        if (next === 0) {
          setCompletedTasks([])
        } else {
          setCompletedTasks(prevCompleted => [...prevCompleted, prev])
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-green-50/30 flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-32 h-32 bg-[#BE1E2D]/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/5 rounded-full animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2 mb-6">
                <Compass className="h-4 w-4 mr-2" />
                PRE-ARRIVAL PLANNING
              </Badge>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Plan Your
                <span className="block text-[#BE1E2D]">Healthcare Journey</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                Start your medical travel preparation with comprehensive guidance on Malaysia&apos;s 
                healthcare destinations, facilities, and support services.
              </p>
            </div>

            {/* Malaysia Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {malaysiaHighlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                  <div className="p-2 bg-[#BE1E2D]/10 rounded-lg">
                    <highlight.icon className="h-5 w-5 text-[#BE1E2D]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825] px-8 py-6">
                Start Planning
                <ArrowRight className="h-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D] px-8 py-6">
                Download Guide
              </Button>
            </div>
          </div>

          {/* Interactive Checklist Side */}
          <div className="lg:pl-8">
            <Card className="bg-white/80 backdrop-blur-sm border-2 border-gray-100 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="inline-block p-4 bg-[#BE1E2D]/10 rounded-full mb-4">
                    <CheckCircle className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Preparation Checklist
                  </h3>
                  <p className="text-gray-600">
                    Essential steps for your healthcare journey
                  </p>
                </div>

                <div className="space-y-4">
                  {preparationTasks.map((task, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-500 ${
                        completedTasks.includes(index) 
                          ? 'bg-green-50 border border-green-200' 
                          : currentTask === index 
                            ? 'bg-[#BE1E2D]/5 border border-[#BE1E2D]/20' 
                            : 'bg-gray-50 border border-gray-100'
                      }`}
                    >
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        completedTasks.includes(index)
                          ? 'bg-green-500 border-green-500'
                          : currentTask === index
                            ? 'border-[#BE1E2D] bg-[#BE1E2D]/10'
                            : 'border-gray-300'
                      }`}>
                        {completedTasks.includes(index) && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                      <span className={`text-sm font-medium transition-colors ${
                        completedTasks.includes(index) || currentTask === index
                          ? 'text-gray-900'
                          : 'text-gray-600'
                      }`}>
                        {task}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">
                    Get comprehensive planning assistance
                  </p>
                  <Button className="w-full bg-[#BE1E2D] hover:bg-[#A01825]">
                    Contact Planning Support
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