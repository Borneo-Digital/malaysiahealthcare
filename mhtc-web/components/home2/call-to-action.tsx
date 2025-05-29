"use client"

import { Button } from "@/components/ui/button"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight, Phone, Mail, Calendar } from "lucide-react"

export default function CallToAction() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section className="relative bg-gradient-to-br from-[#BE1E2D] via-[#B01020] to-[#A50E25] overflow-hidden" ref={sectionRef}>
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        {/* Large circle */}
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full"></div>
        {/* Small circles */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-32 right-64 w-16 h-16 bg-white/8 rounded-full"></div>
        {/* Diagonal lines */}
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-white/20 to-transparent transform -skew-x-12"></div>
        <div className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-white/15 to-transparent transform skew-x-12"></div>
      </div>

      <div className="relative z-10 py-20 md:py-28">
        <div className="container mx-auto max-w-[1200px] px-4">
          {/* Official Brand Tagline */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="headline-primary text-2xl md:text-3xl text-white/90 mb-4 tracking-wider">
              QUALITY CARE FOR YOUR PEACE OF MIND
            </div>
            <div className="w-24 h-1 bg-white/60 mx-auto"></div>
          </motion.div>

          {/* Main CTA Content */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm text-medium mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Calendar className="h-4 w-4" />
              Start Your Journey Today
            </motion.div>

            <motion.h2
              className="headline-primary text-4xl md:text-5xl lg:text-[56px] text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              READY TO EXPLORE
              <span className="block text-white/90">MALAYSIA HEALTHCARE?</span>
            </motion.h2>

            <motion.p
              className="body-text text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Let us guide you to Malaysia&apos;s leading healthcare providers and discover why patients from around the world choose Malaysia for their medical journey
            </motion.p>

            <motion.div
              className="flex flex-col lg:flex-row gap-6 justify-center items-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                size="lg"
                className="w-full lg:w-auto bg-white text-[#BE1E2D] hover:bg-gray-50 px-10 py-7 h-auto text-lg text-bold shadow-xl transition-all duration-300 hover:scale-105 group min-w-[260px]"
              >
                <Phone className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                <span>CONNECT WITH SPECIALISTS</span>
                <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="w-full lg:w-auto border-2 border-white text-white hover:bg-white hover:text-[#BE1E2D] px-10 py-7 h-auto text-lg text-bold transition-all duration-300 hover:scale-105 backdrop-blur-sm group min-w-[260px]"
              >
                <Mail className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>REQUEST INFORMATION</span>
              </Button>
            </motion.div>
          </div>

          {/* Stats/Trust Indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-bold text-white mb-2">40+</div>
              <div className="text-white/80 text-medium">JCI Accredited Hospitals</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-bold text-white mb-2">500K+</div>
              <div className="text-white/80 text-medium">Patients Guided Annually</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl text-bold text-white mb-2">95%</div>
              <div className="text-white/80 text-medium">Patient Satisfaction</div>
            </div>
          </motion.div>

          {/* Quick Contact Options */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-12 pt-8 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Government-Backed Support</span>
            </div>
            <div className="hidden sm:block text-white/40">•</div>
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <Phone className="h-4 w-4" />
              <span>+603 2726 8688</span>
            </div>
            <div className="hidden sm:block text-white/40">•</div>
            <div className="flex items-center justify-center gap-2 text-white/90 text-sm">
              <Mail className="h-4 w-4" />
              <span>callcentre@mhtc.org.my</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 