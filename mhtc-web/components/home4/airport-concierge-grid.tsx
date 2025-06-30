"use client"

import { Users, Briefcase, Zap, Building, Star, ArrowRight, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

const conciergeServices = [
  {
    id: "welcome",
    title: "Personalized Welcome",
    description: "Dedicated concierge greets you by name with a warm, professional welcome tailored to your needs.",
    icon: Users,
    color: "bg-blue-50 border-blue-200",
    features: ["Name recognition", "Cultural greeting", "Immediate assistance", "Welcome amenities"],
    availability: "Every arrival"
  },
  {
    id: "luggage",
    title: "Luggage Assistance", 
    description: "Professional handling of your luggage from carousel to vehicle, ensuring safe transport of medical equipment.",
    icon: Briefcase,
    color: "bg-green-50 border-green-200",
    features: ["Baggage collection", "Medical equipment care", "Porter services", "Secure handling"],
    availability: "On request"
  },
  {
    id: "fasttrack",
    title: "Fast-Track Services",
    description: "Priority processing through immigration and customs with dedicated lanes and expedited clearance.",
    icon: Zap,
    color: "bg-purple-50 border-purple-200", 
    features: ["Priority lanes", "Document assistance", "Quick processing", "VIP treatment"],
    availability: "Premium service"
  },
  {
    id: "lounge",
    title: "Lounge Access",
    description: "Exclusive access to Malaysia Healthcare Lounge with premium amenities and comfortable environment.",
    icon: Building,
    color: "bg-orange-50 border-orange-200",
    features: ["Premium seating", "Refreshments", "Wi-Fi access", "Quiet environment"],
    availability: "Included"
  }
]

export function AirportConciergeGrid() {
  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Airport Concierge Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Premium airport services designed to make your arrival smooth, comfortable, and stress-free.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {conciergeServices.map((service) => (
          <Card 
            key={service.id} 
            className={`${service.color} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden`}
          >
            <CardContent className="p-8">
              <div className="relative">
                {/* Background Icon */}
                <div className="absolute top-0 right-0 opacity-10">
                  <service.icon className="h-20 w-20 text-gray-600" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6 text-[#BE1E2D]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                          {service.title}
                        </h3>
                        <Badge variant="secondary" className="mt-1 text-xs">
                          {service.availability}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Star className="h-3 w-3 text-[#BE1E2D] flex-shrink-0" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action */}
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="w-full border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white group-hover:scale-105 transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center pt-8">
        <Card className="bg-gradient-to-r from-[#BE1E2D] to-[#A01825] border-none text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <Heart className="h-32 w-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Ready for Your Arrival?</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our concierge team is standing by to ensure your arrival experience exceeds expectations. 
                Let us handle the details while you focus on your health.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#BE1E2D] hover:bg-white/90 hover:scale-105 transition-all"
              >
                Book Arrival Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 