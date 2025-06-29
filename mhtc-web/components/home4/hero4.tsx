"use client"

import { useState } from "react"
import Image from "next/image"
import { Search, MapPin, Clock, DollarSign, Heart, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const quickPaths = [
  {
    title: "Find Hospitals",
    description: "Browse 100+ accredited healthcare facilities",
    icon: MapPin,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    href: "/hospitals"
  },
  {
    title: "Healthcare Guide", 
    description: "Comprehensive travel guide for medical tourism",
    icon: Clock,
    color: "bg-green-50 border-green-200 text-green-700",
    href: "/healthcare-travel-guide"
  },
  {
    title: "Member Hospitals",
    description: "Explore our network of accredited facilities",
    icon: Heart,
    color: "bg-rose-50 border-rose-200 text-rose-700",
    href: "/member-hospital"
  },
  {
    title: "Contact MHTC",
    description: "Get assistance from our healthcare travel team",
    icon: DollarSign,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    href: "/contact"
  }
]

export default function Hero4() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
      style={{
        backgroundImage: "url('/home4/flowers.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/30 pointer-events-none"></div>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Left Side - Interactive Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              {/* <div className="inline-flex items-center gap-2 bg-[#BE1E2D]/10 text-[#BE1E2D] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden sm:inline">Malaysia Healthcare Travel Council</span>
                <span className="sm:hidden">MHTC</span>
              </div> */}
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Healthcare
                <span className="block text-[#BE1E2D]">Journey Starts Here</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover world-class healthcare with Malaysian hospitality. Quality care for your peace of mind.
              </p>
            </div>

            {/* Search Interface */}
            <Card className="border-2 border-gray-200 shadow-lg">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-col gap-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 sm:h-5 sm:w-5" />
                      <Input
                        placeholder="Search hospitals, specialties, or healthcare information..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9 sm:pl-10 h-10 sm:h-12 text-sm sm:text-base border-gray-300 focus:border-[#BE1E2D] focus:ring-[#BE1E2D]"
                      />
                    </div>
                    <Button variant="default" size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825] h-10 sm:h-12 px-6 sm:px-8 w-full sm:w-auto">
                      Search
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs sm:text-sm text-gray-500">Popular:</span>
                    {["Heart Surgery", "Cancer Care", "Fertility Treatment", "Orthopedics"].map((term) => (
                      <Badge key={term} variant="secondary" className="cursor-pointer hover:bg-[#BE1E2D] hover:text-white transition-colors text-xs">
                        {term}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Action Paths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {quickPaths.map((path) => (
                <Card key={path.title} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`rounded-lg p-2 sm:p-3 ${path.color} flex-shrink-0`}>
                        <path.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                          {path.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{path.description}</p>
                      </div>
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-[#BE1E2D] group-hover:translate-x-1 transition-all flex-shrink-0" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative h-64 sm:h-80 lg:h-[70vh] xl:h-[80vh] rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              <Image
                src="/images/home3/hero-home3.jpg"
                alt="Malaysia Healthcare Excellence"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Floating Stats Cards - Mobile Optimized */}
              <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-[#BE1E2D]">100+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Hospitals</div>
                </div>
              </div>
              
              <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-[#BE1E2D]">50+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Countries</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-3 sm:left-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                <div className="text-center">
                  <div className="text-lg sm:text-2xl font-bold text-[#BE1E2D]">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-[#BE1E2D]/10 rounded-full blur-xl sm:blur-2xl"></div>
            <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-200/30 rounded-full blur-xl sm:blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
} 