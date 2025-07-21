"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Plane, Hospital, Heart } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function HealingJourney() {
  const [hoveredStep, setHoveredStep] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const journeySteps = [
    {
      id: "pre-arrival",
      title: "PLANNING YOUR VISIT",
      description: "Everything you need to prepare for your healthcare journey",
      icon: FileText,
      story: "Sarah from Australia found all the visa and medical information she needed before her trip.",
    },
    {
      id: "arrival",
      title: "WELCOME TO MALAYSIA",
      description: "Arrival information and support services",
      icon: Plane,
      story: "Ahmed from UAE was greeted at the airport and transported directly to his accommodation.",
    },
    {
      id: "treatment",
      title: "DURING TREATMENT",
      description: "What to expect during your medical care",
      icon: Hospital,
      story: "Liu Wei from China received comprehensive care with translators available throughout.",
    },
    {
      id: "post-treatment",
      title: "AFTER CARE",
      description: "Recovery services and follow-up care",
      icon: Heart,
      story: "John from the UK enjoyed his recovery period at a beachside resort with regular check-ups.",
    },
  ]

  return (
    <section
      className="py-24 md:py-32 bg-white relative min-h-[60vh]"
      ref={sectionRef}
      style={{
        backgroundImage: "url('/home4/flowers.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'bottom center',
      }}
    >
      <div className="container mx-auto max-w-[1200px] px-4 relative z-10">
      <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-grey-900 mb-4 text-center"
        >
          THE HEALING JOURNEY
        </motion.h2>

        <motion.p
          className="body-text text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We guide you through every stage of your healthcare journey in Malaysia for a seamless experience.
        </motion.p>

        <div className="relative">
          {/* Red circle indicator */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-4 h-4 bg-[#BE1E2D] rounded-full hidden md:block"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          ></motion.div>

          {/* Connecting line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 hidden md:block"
            initial={{ scaleX: 0, originX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
          ></motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                <Link
                  href={`/${step.id}`}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  className="block h-full"
                >
                  <Card
                    className={`h-full transition-all duration-300 hover:shadow-lg border ${
                      hoveredStep === step.id ? "bg-[#FFF5F5] border-[#BE1E2D] scale-105" : "bg-white"
                    }`}
                  >
                    <CardContent className="p-6 flex flex-col items-center text-center h-full">
                      {/* Journey step number indicator */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-4 ${
                          hoveredStep === step.id ? "bg-[#BE1E2D]" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`text-sm text-bold ${hoveredStep === step.id ? "text-white" : "text-gray-600"}`}
                        >
                          {index + 1}
                        </span>
                      </div>

                      <div className="w-[60px] h-[60px] flex items-center justify-center mb-4">
                        <step.icon
                          className={`h-10 w-10 ${
                            hoveredStep === step.id ? "text-[#BE1E2D]" : "text-gray-700"
                          } transition-all duration-300 ${hoveredStep === step.id ? "animate-pulse" : ""}`}
                        />
                      </div>

                      <h3 className="subheading text-[18px] text-bold mb-2">{step.title}</h3>
                      <p className="body-text text-gray-600 text-[16px] mb-4">{step.description}</p>

                      {/* Success story that appears on hover */}
                      <div
                        className={`bg-white/80 rounded p-2 text-sm italic text-gray-600 mb-4 transition-all duration-300 ${
                          hoveredStep === step.id ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"
                        }`}
                      >
                        &quot;{step.story}&quot;
                      </div>

                      {/* <div className="mt-auto flex items-center text-[#BE1E2D] text-medium">
                        <span>Learn More</span>
                        <ArrowRight
                          className={`h-4 w-4 ml-1 transition-transform duration-300 ${
                            hoveredStep === step.id ? "translate-x-1" : ""
                          }`}
                        />
                      </div> */}
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 