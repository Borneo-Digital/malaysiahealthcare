"use client"

import { useState } from "react"
import { Video, Pill, Plane, Users, FileText, Clock, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Badge } from "@/components/ui/badge"

const supportServiceTypes = [
  {
    id: "telemedicine",
    title: "Telemedicine Services",
    description: "Information about virtual consultation options with Malaysian healthcare providers",
    icon: Video,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    features: ["Video consultation platforms", "Remote monitoring systems", "Digital prescription services", "Follow-up scheduling"],
    availability: "Available Options"
  },
  {
    id: "medication",
    title: "Medication Support", 
    description: "Guidance on prescription management and international medication access",
    icon: Pill,
    color: "bg-green-50 border-green-200 text-green-700",
    features: ["Prescription guidance", "International pharmacy services", "Medication delivery options", "Dosage information"],
    availability: "Support Options"
  },
  {
    id: "travel",
    title: "Travel Assistance",
    description: "Information about travel support services for medical tourism",
    icon: Plane,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    features: ["Medical travel clearance", "Transport arrangements", "Airport assistance services", "Travel insurance guidance"],
    availability: "Service Providers"
  },
  {
    id: "community",
    title: "Patient Networks",
    description: "Connect with patient communities and support groups",
    icon: Users,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    features: ["Patient support groups", "Experience sharing platforms", "Recovery communities", "Cultural connection"],
    availability: "Community Options"
  },
  {
    id: "records",
    title: "Medical Records",
    description: "Information about digital health record management systems",
    icon: FileText,
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    features: ["Digital record systems", "Secure data sharing", "Medical history access", "Provider communication"],
    availability: "Digital Solutions"
  }
]

const serviceCategories = [
  { category: "Healthcare Services", count: "500+", icon: CheckCircle },
  { category: "Support Options", count: "Multiple", icon: Clock },
  { category: "Service Providers", count: "Various", icon: Plane },
  { category: "Information Resources", count: "Comprehensive", icon: Users }
]

export function ContinuumOfCareInteractive() {
  const [activeService, setActiveService] = useState<string | null>("telemedicine")
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  const currentService = supportServiceTypes.find(service => service.id === activeService)

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Users className="h-4 w-4 mr-2" />
          Support Services Information
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Post-Treatment Support Options
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Learn about the various support services available in Malaysia&apos;s healthcare ecosystem 
          for continued care and assistance after your treatment.
        </p>
      </div>

      {/* Interactive Service Explorer */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Service Network */}
        <div className="lg:col-span-2">
          <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border-2 border-gray-100">
            {/* Central Information Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-20 h-20 bg-[#BE1E2D] rounded-full flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <div className="text-xs font-bold">SUPPORT</div>
                  <div className="text-xs">INFO</div>
                </div>
              </div>
            </div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
              {supportServiceTypes.map((service, index) => {
                const angle = (index * 72) - 90 // 360/5 = 72 degrees apart
                const radius = 120
                const centerX = 50 // percentage
                const centerY = 50 // percentage
                const serviceX = centerX + (radius * Math.cos(angle * Math.PI / 180)) / 4
                const serviceY = centerY + (radius * Math.sin(angle * Math.PI / 180)) / 4
                
                const isActive = activeService === service.id || hoveredService === service.id
                
                return (
                  <line
                    key={`line-${service.id}`}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${serviceX}%`}
                    y2={`${serviceY}%`}
                    stroke={isActive ? "#BE1E2D" : "#D1D5DB"}
                    strokeWidth={isActive ? "3" : "2"}
                    strokeDasharray={isActive ? "0" : "5,5"}
                    className="transition-all duration-300"
                  />
                )
              })}
            </svg>

            {/* Service Nodes */}
            {supportServiceTypes.map((service, index) => {
              const angle = (index * 72) - 90
              const radius = 120
              const serviceX = 50 + (radius * Math.cos(angle * Math.PI / 180)) / 4
              const serviceY = 50 + (radius * Math.sin(angle * Math.PI / 180)) / 4
              
              const isActive = activeService === service.id
              const isHovered = hoveredService === service.id
              
              return (
                <div
                  key={service.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-20"
                  style={{ 
                    left: `${serviceX}%`, 
                    top: `${serviceY}%` 
                  }}
                  onClick={() => setActiveService(service.id)}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  <div className={`w-16 h-16 rounded-xl border-2 flex items-center justify-center transition-all duration-300 ${
                    isActive || isHovered 
                      ? 'bg-[#BE1E2D] border-[#BE1E2D] scale-110 shadow-xl' 
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-md'
                  }`}>
                    <service.icon className={`w-8 h-8 ${
                      isActive || isHovered ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  {/* Service Label */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-center">
                    <div className={`text-xs font-medium whitespace-nowrap ${
                      isActive ? 'text-[#BE1E2D]' : 'text-gray-600'
                    }`}>
                      {service.title}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Active Service Details */}
        <div className="lg:col-span-1">
          {currentService && (
            <Card className={`${currentService.color} border-2 h-full`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-sm">
                    <currentService.icon className="h-6 w-6 text-[#BE1E2D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{currentService.title}</h3>
                    <Badge variant="outline" className="text-xs mt-1">
                      {currentService.availability}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {currentService.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm">Available Services:</h4>
                  {currentService.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="w-full bg-[#BE1E2D] hover:bg-[#A01825]">
                  Get Information
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Service Categories */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {serviceCategories.map((category, index) => (
          <Card key={index} className="border-none bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-all">
            <CardContent className="p-6 text-center">
              <div className="inline-block p-3 bg-[#BE1E2D]/10 rounded-xl mb-3">
                <category.icon className="h-6 w-6 text-[#BE1E2D]" />
              </div>
              <div className="text-lg font-bold text-gray-900 mb-1">{category.count}</div>
              <div className="text-sm text-gray-600">{category.category}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Information Call to Action */}
      <div className="text-center pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          Learn More About Support Services
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          MHTC provides comprehensive information about support services available 
          in Malaysia&apos;s healthcare ecosystem to help you access continued care.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#BE1E2D] hover:bg-[#A01825]">
            Contact MHTC for Information
          </Button>
          <Button size="lg" variant="outline" className="border-[#BE1E2D] text-[#BE1E2D]">
            Download Service Directory
          </Button>
        </div>
      </div>
    </section>
  )
} 