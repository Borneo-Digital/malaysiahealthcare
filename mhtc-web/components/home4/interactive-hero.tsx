"use client"

import { useState } from "react"
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Container } from "@/components/home4/ui/container"
import { FadeIn } from "@/components/home4/animations/fade-in"

interface InteractiveHeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaHref?: string
  features?: {
    icon: React.ReactNode
    title: string
    description: string
  }[]
}

export function InteractiveHero({
  title,
  subtitle,
  backgroundImage,
  ctaText = "Get Started",
  ctaHref = "#",
  features = [],
}: InteractiveHeroProps) {
  const [isHovered, setIsHovered] = useState(false)

  const defaultFeatures = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Care",
      description: "World-class medical professionals",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Premium Locations",
      description: "Top-rated hospitals across Malaysia",
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Flexible Scheduling",
      description: "Convenient appointment booking",
    },
  ]

  const displayFeatures = features.length > 0 ? features : defaultFeatures

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white py-20">
        <FadeIn direction="up" delay={0.1}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
            {subtitle}
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.5}>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.location.href = ctaHref}
          >
            {ctaText}
            <ArrowRight className={`w-5 h-5 ml-2 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`} />
          </Button>
        </FadeIn>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {displayFeatures.map((feature, index) => (
            <FadeIn key={index} direction="up" delay={0.7 + index * 0.1}>
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-colors duration-300">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Scroll indicator */}
        <FadeIn direction="up" delay={1.2}>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
} 