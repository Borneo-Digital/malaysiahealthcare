"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[700px] md:h-[800px] lg:h-[850px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Enhanced video background */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <video autoPlay muted loop playsInline className="absolute w-full h-full object-cover">
          <source src="/images/home2/hero-video.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/images/home2/medical-tourism.jpg"
            alt="Malaysia Healthcare Facilities"
            fill
            className="object-cover"
            priority
          />
        </video>
        {/* Sophisticated gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20"></div>
        {/* Subtle radial overlay for focus */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20 z-25"></div>
      </div>

      <div className="relative z-30 container mx-auto max-w-[1200px] px-4 h-full flex flex-col justify-center">
        <div className="max-w-5xl mx-auto text-center">
          {/* Government badge with animation */}
          <motion.div
            className="inline-flex items-center gap-2 bg-[#BE1E2D]/90 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            Official Government Healthcare Portal
          </motion.div>

          {/* Powerful headline with staggered animation */}
          <motion.h1
            className="headline-primary text-4xl md:text-5xl lg:text-6xl xl:text-[64px] text-white leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="block">MALAYSIA&apos;S</span>
            <span className="block text-[#BE1E2D] text-shadow-lg">HEALTHCARE GATEWAY</span>
          </motion.h1>

          {/* Compelling value proposition */}
          <motion.p
            className="body-text text-xl md:text-2xl lg:text-3xl text-white/95 max-w-4xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Your trusted gateway to <span className="text-bold text-white">world-class healthcare</span> and 
            comprehensive <span className="text-bold text-white">medical travel support</span>
          </motion.p>

          {/* Enhanced CTAs with more impact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link href="#healing-journey">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#BE1E2D] hover:bg-[#A50E25] text-white px-12 py-7 h-auto text-xl text-bold rounded-xl transition-all duration-300 hover:scale-110 shadow-2xl group relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  START YOUR JOURNEY
                  <ArrowRight className="h-6 w-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#BE1E2D] to-[#A50E25] opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
            </Link>
            
            <Link href="#hospitals">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/20 backdrop-blur-md border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] px-12 py-7 h-auto text-xl text-bold rounded-xl transition-all duration-300 hover:scale-110 shadow-2xl"
              >
                EXPLORE HOSPITALS
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Enhanced scroll indicator - Now truly centered on full screen */}
      <div className="absolute bottom-12 left-0 right-0 z-30 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <motion.div
            className="flex flex-col items-center text-white/80 cursor-pointer hover:text-white transition-colors group"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            onClick={() => {
              document.getElementById('healing-journey')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-sm mb-2 text-medium">Explore Healthcare Options</span>
            <div className="w-8 h-8 border-2 border-white/60 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
              <ChevronDown className="h-4 w-4" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 