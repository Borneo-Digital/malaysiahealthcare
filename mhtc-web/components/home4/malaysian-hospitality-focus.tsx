"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Heart, 
  Globe, 
  Users, 
  Star, 
  MessageCircle,
  Phone,
  Shield,
  Smile,
  Award
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

const hospitalityFeatures = [
  {
    id: "cultural",
    title: "Cultural Sensitivity",
    description: "Our team understands and respects diverse cultural backgrounds, ensuring comfort for international patients.",
    icon: Globe,
    color: "text-blue-600",
    benefits: ["Multi-cultural awareness", "Respectful service approach", "Customized interactions", "Cultural comfort"]
  },
  {
    id: "multilingual",
    title: "Multilingual Support",
    description: "Communicate effortlessly with our team fluent in multiple languages and dialects.",
    icon: MessageCircle,
    color: "text-green-600",
    benefits: ["10+ languages supported", "Native speakers available", "Medical terminology expertise", "Clear communication"]
  },
  {
    id: "personalized",
    title: "Personalized Care",
    description: "Every interaction is tailored to your individual needs, preferences, and comfort level.",
    icon: Heart,
    color: "text-red-600",
    benefits: ["Individual attention", "Customized service", "Personal preferences noted", "Ongoing relationship"]
  },
  {
    id: "professional",
    title: "Professional Excellence",
    description: "Highly trained staff delivering world-class service with warmth and competence.",
    icon: Award,
    color: "text-purple-600",
    benefits: ["Professional training", "International standards", "Continuous improvement", "Quality assurance"]
  }
]

const testimonialsPreview = [
  {
    text: "The warm welcome and genuine care made me feel at home despite being thousands of miles away.",
    author: "Sarah M., Singapore",
    flag: "🇸🇬"
  },
  {
    text: "The staff spoke my language and understood my cultural needs perfectly. Exceptional service!",
    author: "Ahmed K., UAE",
    flag: "🇦🇪"
  },
  {
    text: "From arrival to departure, every moment was handled with grace and professionalism.",
    author: "Yuki T., Japan",
    flag: "🇯🇵"
  }
]

export function MalaysianHospitalityFocus() {
  const [activeFeature, setActiveFeature] = useState<string>("cultural")
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const selectedFeature = hospitalityFeatures.find(f => f.id === activeFeature)

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Heart className="h-4 w-4 mr-2" />
          Malaysian Hospitality
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          The Malaysian Hospitality Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Experience the legendary warmth of Malaysian hospitality combined with professional excellence, 
          creating a stress-free and welcoming environment for your healthcare journey.
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* Interactive Features */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What Makes Us Different</h3>
          
          {/* Feature Navigation */}
          <div className="grid grid-cols-2 gap-4">
            {hospitalityFeatures.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature.id)}
                className={`text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                  activeFeature === feature.id
                    ? 'border-[#BE1E2D] bg-[#BE1E2D]/5'
                    : 'border-gray-200 hover:border-[#BE1E2D]/30 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <feature.icon className={`h-5 w-5 ${
                    activeFeature === feature.id ? 'text-[#BE1E2D]' : feature.color
                  }`} />
                  <h4 className={`font-semibold ${
                    activeFeature === feature.id ? 'text-[#BE1E2D]' : 'text-gray-900'
                  }`}>
                    {feature.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {feature.description}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Feature Details */}
          {selectedFeature && (
            <Card className="border-2 border-[#BE1E2D]/20 bg-[#BE1E2D]/5">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#BE1E2D]/10 rounded-xl">
                    <selectedFeature.icon className="h-6 w-6 text-[#BE1E2D]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{selectedFeature.title}</h4>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {selectedFeature.description}
                </p>

                <div className="space-y-2">
                  <h5 className="font-semibold text-gray-900 text-sm">Key Benefits:</h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedFeature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="h-3 w-3 text-[#BE1E2D] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Visual & Testimonials */}
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/home3/man1.jpg"
              alt="Malaysian Hospitality"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Floating Stats */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <div className="text-center">
                <div className="text-xl font-bold text-[#BE1E2D]">4.9/5</div>
                <div className="text-xs text-gray-600">Service Rating</div>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-blue-500" />
                <div className="text-sm font-medium text-gray-800">50+ Countries Served</div>
              </div>
            </div>
          </div>

          {/* Testimonial Carousel */}
          <Card className="border-2 border-gray-200">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">Patient Experiences</h4>
                  <div className="flex gap-1">
                    {testimonialsPreview.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentTestimonial(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentTestimonial === idx ? 'bg-[#BE1E2D]' : 'bg-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="min-h-[120px]">
                  <blockquote className="text-gray-700 italic leading-relaxed mb-3">
                    &quot;{testimonialsPreview[currentTestimonial].text}&quot;
                  </blockquote>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-lg">{testimonialsPreview[currentTestimonial].flag}</span>
                    <span className="font-medium text-gray-900">
                      {testimonialsPreview[currentTestimonial].author}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-[#BE1E2D] hover:bg-[#A01825] flex-1"
            >
              <Phone className="mr-2 h-5 w-5" />
              Talk to Our Team
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D]/5 flex-1"
            >
              <Users className="mr-2 h-5 w-5" />
              Meet Our Staff
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <Shield className="h-8 w-8 text-[#BE1E2D] mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Trusted & Secure</h4>
          <p className="text-sm text-gray-600">Your privacy and security are our top priorities</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <Smile className="h-8 w-8 text-[#BE1E2D] mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Stress-Free Experience</h4>
          <p className="text-sm text-gray-600">We handle the details so you can focus on your health</p>
        </div>
        
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <Heart className="h-8 w-8 text-[#BE1E2D] mx-auto mb-3" />
          <h4 className="font-semibold text-gray-900 mb-2">Genuine Care</h4>
          <p className="text-sm text-gray-600">Every interaction is infused with authentic Malaysian warmth</p>
        </div>
      </div>
    </section>
  )
} 