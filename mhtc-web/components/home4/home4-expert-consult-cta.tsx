"use client"

import { Calendar, Phone, MessageCircle, Video, ArrowRight, User, CheckCircle } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const consultOptions = [
  {
    type: "immediate",
    title: "Immediate Consultation",
    description: "Speak with our medical advisors right now about your treatment options",
    icon: Phone,
    color: "bg-success/10 border-success/20 text-success",
    action: "Call Now",
    availability: "24/7 Available",
    duration: "15-30 min"
  },
  {
    type: "video",
    title: "Video Consultation",
    description: "Face-to-face consultation with our specialists via secure video call",
    icon: Video,
    color: "bg-info/10 border-info/20 text-info",
    action: "Book Video Call",
    availability: "Next Available: Today",
    duration: "45-60 min"
  },
  {
    type: "scheduled",
    title: "Scheduled Consultation",
    description: "In-depth discussion about your treatment plan at your preferred time",
    icon: Calendar,
    color: "bg-warning/10 border-warning/20 text-warning",
    action: "Schedule Appointment",
    availability: "Flexible Timing",
    duration: "60-90 min"
  }
]

const expertiseAreas = [
  "Treatment Planning",
  "Second Opinions", 
  "Cost Estimation",
  "Insurance Guidance",
  "Travel Coordination",
  "Recovery Planning"
]

export function Home4ExpertConsultCTA() {
  return (
    <section className="text-white">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-white/20 text-white border-white/30 px-4 py-2">
            <User className="h-4 w-4 mr-2" />
            Expert Consultation
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold">
            Consult Our Medical Experts
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Get personalized treatment guidance from our internationally trained specialists. 
            Every consultation is complimentary and designed to help you make informed decisions.
          </p>
        </div>

        {/* Consultation Options */}
        <div className="grid md:grid-cols-3 gap-6">
          {consultOptions.map((option) => (
            <Card 
              key={option.type}
              className={`${option.color} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 group overflow-hidden`}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <option.icon className="h-6 w-6 text-mhtc-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-grey-900 group-hover:text-mhtc-primary transition-colors">
                        {option.title}
                      </h3>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-grey-600">Availability:</span>
                      <span className="font-medium text-grey-800">{option.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-grey-600">Duration:</span>
                      <span className="font-medium text-grey-800">{option.duration}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-grey-700 text-sm leading-relaxed">
                    {option.description}
                  </p>

                  {/* Action */}
                  <Button 
                    size="lg"
                    className="w-full bg-mhtc-primary hover:bg-[#A50E25] group-hover:scale-105 transition-all"
                  >
                    {option.action}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expertise Areas */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20">
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">What Our Experts Can Help With</h3>
                <p className="text-white/80 leading-relaxed">
                  Our medical advisors provide comprehensive guidance across all aspects of your healthcare journey, 
                  from initial planning to post-treatment care coordination.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {expertiseAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 bg-white/10 rounded-lg border border-white/20"
                  >
                    <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                    <span className="text-white text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-white">5000+</div>
            <div className="text-white/80 text-sm">Consultations</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-white">98%</div>
            <div className="text-white/80 text-sm">Satisfaction Rate</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-white">15min</div>
            <div className="text-white/80 text-sm">Avg Response Time</div>
          </div>
          <div className="text-center p-6 bg-white/10 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-white">FREE</div>
            <div className="text-white/80 text-sm">No Cost Consultation</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-4">
          <div className="space-y-4">
            <p className="text-white/90 text-lg">
              <strong>Ready to start your healing journey?</strong> Our experts are standing by to provide personalized guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-mhtc-primary hover:bg-white/90 hover:scale-105 transition-all px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Expert Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover:scale-105 transition-all px-8"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start Live Chat
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 