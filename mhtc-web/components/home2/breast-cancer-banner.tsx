"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Calendar, ArrowRight } from "lucide-react"

export default function BreastCancerBanner() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-pink-50/80 to-white py-16 md:py-20 overflow-hidden" ref={sectionRef}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZGIyNzc3Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2RvdHMpIi8+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge/Tag */}
            <motion.div
              className="inline-flex items-center gap-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Calendar className="h-4 w-4" />
              October Special Campaign
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl md:text-4xl lg:text-[40px] font-bold text-[#C8102E] leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              BREAST CANCER 
              <span className="block text-pink-600">AWARENESS MONTH</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-700 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Join us this October as we raise awareness about breast cancer prevention, early detection, and 
              advanced treatment options available in Malaysia. Our member hospitals offer comprehensive 
              screening and treatment programs with world-class oncology specialists.
            </motion.p>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Early Detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Advanced Treatment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Expert Specialists</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button 
                size="lg"
                className="bg-[#C8102E] hover:bg-[#A50E25] text-white px-8 py-6 h-auto text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-pink-400 text-pink-700 hover:bg-pink-50 px-8 py-6 h-auto text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                <Heart className="h-5 w-5 mr-2" />
                SCREENING PROGRAMS
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative aspect-square max-w-[450px] mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full opacity-20"></div>
              
              {/* Main image */}
              <div className="relative w-full h-full p-8">
                <Image
                  src="/images/home2/breast-cancer-reduce-risk.jpg.avif"
                  alt="Breast Cancer Awareness"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-8 right-8 bg-white rounded-full p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="h-6 w-6 text-pink-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-12 left-8 bg-pink-100 rounded-lg p-3 shadow-md"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <span className="text-pink-700 font-semibold text-sm">Early Detection Saves Lives</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 