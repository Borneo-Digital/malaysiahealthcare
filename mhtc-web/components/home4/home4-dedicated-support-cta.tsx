"use client"

import { Phone, MessageCircle, Calendar, Mail, ArrowRight, Users, Heart, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

const supportOptions = [
  {
    type: "information",
    title: "Healthcare Information",
    description: "Get comprehensive information about Malaysia&apos;s healthcare facilities and services",
    icon: Phone,
    action: "Contact MHTC",
    availability: "Business Hours",
    contactInfo: "+60 3-2726 8688",
    color: "bg-info/10 border-info/20 hover:bg-info/20"
  },
  {
    type: "guidance",
    title: "Planning Guidance",
    description: "Receive guidance on planning your healthcare journey to Malaysia",
    icon: MessageCircle,
    action: "Get Guidance",
    availability: "Online Support",
    contactInfo: "info@mhtc.org.my",
    color: "bg-success/10 border-success/20 hover:bg-success/20"
  },
  {
    type: "consultation",
    title: "Information Session",
    description: "Schedule an information session about Malaysian healthcare options",
    icon: Calendar,
    action: "Schedule Session",
    availability: "By Appointment",
    contactInfo: "Book consultation",
    color: "bg-warning/10 border-warning/20 hover:bg-warning/20"
  }
]

const supportFeatures = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Healthcare tourism specialists with extensive knowledge of Malaysia&apos;s medical sector"
  },
  {
    icon: Heart,
    title: "Personalized Support",
    description: "Tailored information and guidance based on your specific healthcare needs"
  },
  {
    icon: Clock,
    title: "Ongoing Assistance",
    description: "Continuous support throughout your healthcare journey planning process"
  }
]

export function Home4DedicatedSupportCTA() {
  return (
    <section className="space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-mhtc-primary/10 text-mhtc-primary px-4 py-2">
          <Heart className="h-4 w-4 mr-2" />
          MHTC Support
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-grey-900">
          We&apos;re Here to Help
        </h2>
        <p className="text-lg text-grey-600 max-w-3xl mx-auto">
          MHTC provides comprehensive information and guidance to help you make informed decisions 
          about your healthcare journey to Malaysia.
        </p>
      </div>

      {/* Support Options Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {supportOptions.map((option) => (
          <Card key={option.type} className={`${option.color} border-2 transition-all duration-300 group hover:shadow-lg`}>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="inline-block p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all duration-300">
                  <option.icon className="h-8 w-8 text-mhtc-primary" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-grey-900">
                    {option.title}
                  </h3>
                  <p className="text-grey-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Availability Badge */}
                <Badge variant="outline" className="border-grey-300 text-grey-600">
                  <Clock className="h-3 w-3 mr-1" />
                  {option.availability}
                </Badge>

                {/* Contact Info */}
                <div className="pt-2 border-t border-grey-200">
                  <p className="text-sm font-medium text-grey-800 mb-3">
                    {option.contactInfo}
                  </p>
                  <Button className="w-full bg-mhtc-primary hover:bg-[#A50E25] text-white">
                    {option.action}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Support Features */}
      <div className="bg-grey-50 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-grey-900 mb-3">
            Why Choose MHTC for Information & Guidance
          </h3>
          <p className="text-grey-600 max-w-2xl mx-auto">
            As Malaysia&apos;s official healthcare tourism promotion agency, we provide 
            reliable information and professional guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportFeatures.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-block p-4 bg-mhtc-primary/10 rounded-full">
                <feature.icon className="h-8 w-8 text-mhtc-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-grey-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-grey-600 text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-6">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-grey-900">
            Ready to Learn More?
          </h3>
          <p className="text-grey-600 max-w-2xl mx-auto">
            Contact MHTC today for comprehensive information about Malaysia&apos;s healthcare 
            destinations and start planning your medical journey with confidence.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-mhtc-primary hover:bg-[#A50E25] px-8">
            <Phone className="h-5 w-5 mr-2" />
            Call MHTC Now
          </Button>
          <Button size="lg" variant="outline" className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white px-8">
            <Mail className="h-5 w-5 mr-2" />
            Send Inquiry
          </Button>
        </div>

        {/* Contact Details */}
        <div className="pt-6 border-t border-grey-200">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-grey-600">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+60 3-2726 8688</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>info@mhtc.org.my</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Mon-Fri, 9:00 AM - 6:00 PM (GMT+8)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 