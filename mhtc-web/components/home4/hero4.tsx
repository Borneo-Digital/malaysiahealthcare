"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BookOpen, Hospital, LifeBuoy } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const quickPaths = [
  {
    title: "Healthcare Guide",
    description: "Your complete guide to medical travel in Malaysia.",
    icon: BookOpen,
    color: "bg-green-50 border-green-200 text-green-700",
    href: "/healthcare-travel-guide",
  },
  {
    title: "Member Hospitals",
    description: "Access our network of world-class facilities.",
    icon: Hospital,
    color: "bg-rose-50 border-rose-200 text-rose-700",
    href: "/member-hospital",
  },
  {
    title: "Dedicated Support",
    description: "Our team is here to assist you 24/7.",
    icon: LifeBuoy,
    color: "bg-amber-50 border-amber-200 text-amber-700",
    href: "/contact",
  },
]

export default function Hero4() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50/30"
      style={{
        backgroundImage: "url('/home4/flowers.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      {/* Bunga Raya Traditional Malaysian Background Pattern */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Full hero background pattern - large screens */}
        <div className="absolute inset-0 hidden lg:block opacity-30">
          <Image
            src="/images/Bunga Raya Asset-01.png"
            alt="Bunga Raya - Traditional Malaysian hibiscus background"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Medium screens - covers most of hero */}
        <div className="absolute inset-0 lg:hidden md:block hidden opacity-25">
          <Image
            src="/images/Bunga Raya Asset-01.png"
            alt="Bunga Raya background pattern"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Mobile - subtle full background */}
        <div className="absolute inset-0 md:hidden opacity-20">
          <Image
            src="/images/Bunga Raya Asset-01.png"
            alt="Bunga Raya background pattern"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
      
      {/* Enhanced overlay for content readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/30 to-white/20 pointer-events-none z-10"></div>
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-0 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh] lg:min-h-[80vh]">
          
          {/* Left Side - Content */}
          <div className="space-y-6 lg:space-y-8 lg:pr-8 order-2 lg:order-1">
            {/* Main Heading */}
            <div className="space-y-4 lg:space-y-6 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Your Healthcare
                <span className="block text-[#BE1E2D]">Journey Starts Here</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Discover world-class healthcare with Malaysian hospitality. Quality care for your peace of mind.
              </p>
            </div>

            {/* Quick Action Paths */}
            <div className="pt-8">
              <div className="flex flex-col gap-4">
                {quickPaths.map((path) => (
                  <Link href={path.href} key={path.title} className="block group">
                    <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 group-hover:border-[#BE1E2D]">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <div className={`rounded-lg p-3 ${path.color} flex-shrink-0`}>
                            <path.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-base text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                              {path.title}
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">{path.description}</p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-[#BE1E2D] group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Visual Content */}
          <div className="relative order-1 lg:order-2">
            {/* Main Image */}
            <div className="relative h-80 sm:h-96 lg:h-[80vh] xl:h-[90vh]">
              <Image
                src="/images/home4/home4.png"
                alt="Malaysian Healthcare Professionals - Quality Medical Care"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 70vw"
              />
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