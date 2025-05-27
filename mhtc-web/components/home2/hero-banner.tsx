"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroBanner() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Cinemagraph effect with video background */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-20"></div>
      </div>

      <div className="relative z-30 container mx-auto max-w-[1200px] px-4 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-[48px] font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your Healing Journey Begins in Malaysia
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-xl mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            World-class healthcare with the warmth of Malaysian hospitality
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative"
          >
            <Button
              size="lg"
              className="w-[200px] h-[60px] bg-[#C8102E] hover:bg-[#A50E25] text-white text-lg rounded-md transition-all duration-300 hover:scale-105 shadow-lg relative z-10"
            >
              EXPLORE TREATMENTS
            </Button>
            {/* Pulse animation for CTA button 
            <span className="absolute inset-0 rounded-md bg-[#C8102E] animate-pulse opacity-30 z-0"></span>*/}
          </motion.div>
        </div>
      </div>
    </section>
  )
} 