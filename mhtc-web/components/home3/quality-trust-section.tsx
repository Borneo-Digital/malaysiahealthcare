"use client"

import { Award, Shield, Globe, Users, Star, CheckCircle, Heart, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const accreditations = [
  {
    name: "JCI Accreditation",
    description: "Joint Commission International - The global standard for healthcare quality and patient safety",
    logo: "🏆",
    category: "International",
    color: "bg-blue-50 border-blue-200"
  },
  {
    name: "ISO 9001:2015",
    description: "International standard for quality management systems ensuring consistent service delivery",
    logo: "📋",
    category: "Quality",
    color: "bg-green-50 border-green-200"
  },
  {
    name: "MSQH Accreditation",
    description: "Malaysian Society for Quality in Health - National healthcare quality certification",
    logo: "🇲🇾",
    category: "National",
    color: "bg-red-50 border-red-200"
  },
  {
    name: "COHSASA Certification",
    description: "Council for Health Service Accreditation - African healthcare excellence standards",
    logo: "🌍",
    category: "Regional",
    color: "bg-purple-50 border-purple-200"
  }
]

const trustFactors = [
  {
    icon: Users,
    title: "International Expertise",
    description: "Board-certified specialists trained in leading medical institutions worldwide",
    stats: "200+ Specialists"
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "Following international protocols and best practices for optimal patient care",
    stats: "5 Star Rating"
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Comprehensive safety protocols and infection control measures exceeding global standards",
    stats: "99.8% Safety Score"
  },
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description: "Personalized treatment plans focused on individual patient needs and preferences",
    stats: "4.9/5 Patient Rating"
  }
]

const outcomes = [
  { metric: "Patient Satisfaction", value: "98.5%", change: "+2.3%" },
  { metric: "Treatment Success Rate", value: "96.8%", change: "+1.5%" },
  { metric: "Complication Rate", value: "0.8%", change: "-0.4%" },
  { metric: "Readmission Rate", value: "2.1%", change: "-0.7%" }
]

export function QualityTrustSection() {
  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Shield className="h-4 w-4 mr-2" />
          Quality & Trust
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Accredited Excellence
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our commitment to quality is validated through international accreditations, 
          rigorous standards, and proven outcomes that you can trust.
        </p>
      </div>

      {/* Accreditations Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">International Accreditations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accreditations.map((accreditation, index) => (
            <Card 
              key={index}
              className={`${accreditation.color} border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 group`}
            >
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  {/* Logo */}
                  <div className="text-4xl mb-3">{accreditation.logo}</div>
                  
                  {/* Category Badge */}
                  <Badge variant="secondary" className="mb-2">
                    {accreditation.category}
                  </Badge>
                  
                  {/* Name */}
                  <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                    {accreditation.name}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {accreditation.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust Factors */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Why Patients Trust Us</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {trustFactors.map((factor, index) => (
            <Card 
              key={index}
              className="border-2 border-gray-200 hover:border-[#BE1E2D]/30 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="p-3 bg-[#BE1E2D]/10 rounded-xl group-hover:bg-[#BE1E2D]/20 transition-colors">
                    <factor.icon className="h-6 w-6 text-[#BE1E2D]" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                        {factor.title}
                      </h4>
                      <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D]">
                        {factor.stats}
                      </Badge>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Outcomes Dashboard */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-900 text-center">Quality Outcomes</h3>
        <Card className="border-2 border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <CardContent className="p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-3xl font-bold text-[#BE1E2D]">{outcome.value}</div>
                  <div className="text-sm font-medium text-gray-900">{outcome.metric}</div>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${
                    outcome.change.startsWith('+') 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {outcome.change.startsWith('+') ? '↗' : '↘'} {outcome.change}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Certifications Summary */}
      <Card className="bg-gradient-to-r from-[#BE1E2D] to-[#A01825] border-none text-white overflow-hidden">
        <CardContent className="p-8 relative">
          <div className="absolute top-0 right-0 opacity-10">
            <Award className="h-32 w-32" />
          </div>
          <div className="relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Globally Recognized Excellence</h3>
                <p className="text-white/90 leading-relaxed">
                  Our multiple international accreditations represent years of dedication to maintaining 
                  the highest standards of medical care, patient safety, and service excellence.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Building className="h-3 w-3 mr-1" />
                    50+ Centers
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Star className="h-3 w-3 mr-1" />
                    5-Star Rating
                  </Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    JCI Accredited
                  </Badge>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">100K+</div>
                  <div className="text-sm text-white/80">Patients Treated</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-sm text-white/80">Countries Served</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm text-white/80">Specialists</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
} 