"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Users, MessageSquare, Camera, Star, ArrowRight, Share2, Award, CheckCircle, Globe } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Badge } from "@/components/ui/badge"

const engagementOptions = [
  {
    type: "alumni-network",
    title: "Join Our Alumni Network", 
    description: "Connect with fellow patients and share your recovery journey",
    icon: Users,
    color: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    benefits: ["Peer support community", "Success story sharing", "Recovery tips exchange", "Cultural connections"],
    cta: "Join Network",
    featured: true
  },
  {
    type: "share-story",
    title: "Share Your Healthcare Story",
    description: "Inspire others by sharing your transformation journey",
    icon: MessageSquare,
    color: "bg-green-50 border-green-200 hover:bg-green-100", 
    benefits: ["Inspire future patients", "Get featured recognition", "Help others decide", "Build global connections"],
    cta: "Share Story",
    featured: false
  },
  {
    type: "ambassador-program",
    title: "Become a Patient Ambassador",
    description: "Help guide new patients through their healthcare journey",
    icon: Award,
    color: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    benefits: ["Mentor role opportunities", "Exclusive events access", "Ambassador recognition", "Healthcare advocacy"],
    cta: "Apply Now",
    featured: false
  },
  {
    type: "photo-gallery",
    title: "Share Recovery Moments",
    description: "Contribute to our patient gallery showcasing healing journeys",
    icon: Camera,
    color: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    benefits: ["Photo gallery features", "Recovery milestones", "Progress documentation", "Celebration moments"],
    cta: "Upload Photos",
    featured: false
  }
]

const communityStats = [
  { value: "8,500+", label: "Alumni Members", icon: Users },
  { value: "2,100+", label: "Success Stories", icon: MessageSquare },
  { value: "450+", label: "Patient Ambassadors", icon: Award },
  { value: "65", label: "Countries Represented", icon: Globe }
]

const testimonials = [
  {
    quote: "Being part of the MHTC alumni network has been incredible. The connections I&apos;ve made and support I&apos;ve received have been life-changing.",
    author: "Maria Rodriguez",
    location: "Mexico",
    treatment: "Cardiac Surgery",
    avatar: "/images/home3/woman1.jpg"
  },
  {
    quote: "Sharing my story helped me process my journey and has inspired so many others to take the leap toward better health.",
    author: "David Kim", 
    location: "South Korea",
    treatment: "Orthopedic Care",
    avatar: "/images/home3/man2.jpg"
  },
  {
    quote: "As a patient ambassador, I&apos;ve had the privilege of helping others navigate their healthcare decisions with confidence.",
    author: "Fatima Al-Zahra",
    location: "UAE", 
    treatment: "Fertility Treatment",
    avatar: "/images/home3/woman2.jpg"
  }
]

export function Home3ContinuedSupportCTA() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <section className="text-white space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <Badge className="bg-white/20 text-white px-4 py-2 backdrop-blur-sm">
          <Heart className="h-4 w-4 mr-2" />
          Continue Your Story with MHTC
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold">
          Your Journey Inspires Others
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
          Join our global community of healthcare success stories. Your experience can light the way 
          for others seeking their own path to wellness and transformation.
        </p>
      </div>

      {/* Engagement Options Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {engagementOptions.map((option) => (
          <Card 
            key={option.type}
            className={`${option.color} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 group relative overflow-hidden ${
              option.featured ? 'ring-2 ring-white/50' : ''
            }`}
          >
            {option.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-[#BE1E2D] text-white">
                  <Star className="h-3 w-3 mr-1" />
                  Popular
                </Badge>
              </div>
            )}
            
            <CardContent className="p-6 text-gray-900">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                  <option.icon className="h-6 w-6 text-[#BE1E2D]" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-2">{option.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {option.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 bg-white/50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full group-hover:scale-105 transition-all duration-300 ${
                  option.featured 
                    ? 'bg-[#BE1E2D] hover:bg-[#A01825] text-white' 
                    : 'bg-gray-900 hover:bg-gray-800 text-white'
                }`}
              >
                {option.cta}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Community Statistics */}
      <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-3">Our Growing Global Community</h3>
          <p className="text-white/90">
            Join thousands of patients who have chosen to stay connected and make a difference
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {communityStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-block p-4 bg-white/20 rounded-xl mb-3">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Stories Carousel */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Stories That Inspire</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Real experiences from our alumni community members who continue to inspire and support others
          </p>
        </div>

        <div className="relative">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-lg italic leading-relaxed">
                      &quot;{testimonials[activeTestimonial].quote}&quot;
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Image 
                      src={testimonials[activeTestimonial].avatar}
                      alt={testimonials[activeTestimonial].author}
                      width={48}
                      height={48}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonials[activeTestimonial].author}</div>
                      <div className="text-white/70 text-sm">
                        {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].treatment}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="lg:col-span-1 flex lg:flex-col gap-4 justify-center">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === activeTestimonial 
                          ? 'bg-white scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Final Call to Action */}
      <div className="text-center space-y-6 pt-8 border-t border-white/20">
        <div>
          <h3 className="text-2xl font-bold mb-3">Ready to Continue Your Story?</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Your healthcare journey with MHTC doesn&apos;t end with treatment. It evolves into a 
            lifelong connection with a community that cares about your continued wellness.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg"
            className="bg-white text-[#BE1E2D] hover:bg-white/90 px-8 py-6 h-auto text-lg font-medium hover:scale-105 transition-all duration-300"
          >
            <Users className="w-6 h-6 mr-3" />
            JOIN MHTC ALUMNI
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] bg-transparent px-8 py-6 h-auto text-lg font-medium hover:scale-105 transition-all duration-300"
          >
            <Share2 className="w-6 h-6 mr-3" />
            SHARE YOUR STORY
          </Button>
        </div>

        <div className="text-white/70 text-sm">
          Join thousands of patients who have made MHTC their healthcare home for life
        </div>
      </div>
    </section>
  )
} 