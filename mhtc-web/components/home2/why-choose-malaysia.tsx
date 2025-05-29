"use client"

import { useState, useRef } from "react"
import { Award, DollarSign, Route, ChevronDown, ChevronUp } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function WhyChooseMalaysia() {
  const [expandedPoint, setExpandedPoint] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const advantages = [
    {
      number: 1,
      icon: Award,
      title: "JCI-Accredited Facilities",
      description:
        "Malaysia's hospitals meet the highest international standards for quality and patient safety, with numerous JCI and other international accreditations across the country.",
      stat: "40+ internationally accredited hospitals",
    },
    {
      number: 2,
      icon: DollarSign,
      title: "World-Class Care at Competitive Rates",
      description:
        "Experience premium healthcare services at a fraction of the cost compared to Western countries, without compromising on quality or clinical outcomes.",
      stat: "Up to 70% savings compared to US healthcare costs",
    },
    {
      number: 3,
      icon: Route,
      title: "Seamless Healthcare Journey",
      description:
        "From pre-arrival planning to post-treatment care, Malaysia's healthcare ecosystem ensures a smooth experience with dedicated support services at every step.",
      stat: "95% patient satisfaction rating",
    },
  ]

  const toggleExpand = (index: number) => {
    if (expandedPoint === index) {
      setExpandedPoint(null)
    } else {
      setExpandedPoint(index)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto max-w-[1200px] px-4">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-6 text-[#C8102E]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          WHY CHOOSE MALAYSIA HEALTHCARE?
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-20 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Experience world-class healthcare that combines clinical excellence with exceptional value and warm hospitality
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.number}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-full bg-[#C8102E] flex items-center justify-center text-white text-2xl font-bold">
                  {advantage.number}
                </div>
                <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md">
                  <advantage.icon className="h-5 w-5 text-[#C8102E]" />
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>

              {/* Condensed description that expands on click */}
              <div className="relative">
                <p className="text-gray-600 mb-2">
                  {expandedPoint === index ? advantage.description : `${advantage.description.substring(0, 60)}...`}
                </p>

                {/* Animated stat that counts up */}
                {expandedPoint === index && (
                  <motion.div
                    className="text-[#C8102E] font-bold my-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {advantage.stat}
                  </motion.div>
                )}

                <button
                  onClick={() => toggleExpand(index)}
                  className="text-[#C8102E] flex items-center justify-center w-full mt-2 text-sm font-medium"
                >
                  {expandedPoint === index ? (
                    <>
                      Read Less <ChevronUp className="h-4 w-4 ml-1" />
                    </>
                  ) : (
                    <>
                      Read More <ChevronDown className="h-4 w-4 ml-1" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/*<div className="flex justify-center mt-12">
          <Button className="bg-[#C8102E] hover:bg-[#A50E25] text-white px-8 py-6 h-auto text-lg transition-all duration-300 hover:scale-105 shadow-md">
            Our Advantages
          </Button>
        </div>*/}
      </div>
    </section>
  )
} 