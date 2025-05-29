"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function PatientStories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Farsi",
      country: "United Arab Emirates",
      flag: "🇦🇪",
      quote:
        "The care I received in Malaysia was exceptional. The doctors were highly skilled and the staff made me feel at home despite being far from my country.",
      image: "/placeholder.svg",
      treatment: "Cardiac Surgery",
      rating: 5,
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      id: 2,
      name: "Liu Wei",
      country: "China",
      flag: "🇨🇳",
      quote:
        "I chose Malaysia for my treatment because of the quality healthcare and the cultural familiarity. The results exceeded my expectations.",
      image: "/placeholder.svg",
      treatment: "Orthopedic Surgery",
      rating: 5,
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      country: "Australia",
      flag: "🇦🇺",
      quote:
        "The combination of world-class medical care and the opportunity to recover in such a beautiful country made my health journey truly healing.",
      image: "/placeholder.svg",
      treatment: "Fertility Treatment",
      rating: 5,
      beforeImage: "/placeholder.svg",
      afterImage: "/placeholder.svg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-[#E8F4F8]" ref={sectionRef}>
      <div className="container mx-auto max-w-[1200px] px-4">
        <motion.h2
          className="text-[36px] font-bold text-center text-[#C8102E] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          PATIENT STORIES
        </motion.h2>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-[#C8102E] opacity-20 hidden lg:block">
            <Quote className="h-32 w-32" />
          </div>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white shadow-lg overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
                    <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-[#C8102E]">
                      <Image
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Before/After Images */}
                    <div className="flex justify-center mt-4 space-x-2">
                      <div className="relative">
                        <div className="absolute -top-2 -left-2 bg-white text-[10px] px-1 rounded text-gray-600 font-bold z-10">
                          Before
                        </div>
                        <div className="relative w-[50px] h-[50px] rounded-md overflow-hidden border border-gray-200">
                          <Image
                            src={currentTestimonial.beforeImage || "/placeholder.svg"}
                            alt="Before treatment"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute -top-2 -left-2 bg-white text-[10px] px-1 rounded text-gray-600 font-bold z-10">
                          After
                        </div>
                        <div className="relative w-[50px] h-[50px] rounded-md overflow-hidden border border-gray-200">
                          <Image
                            src={currentTestimonial.afterImage || "/placeholder.svg"}
                            alt="After treatment"
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-lg md:text-xl italic mb-6">{currentTestimonial.quote}</p>
                    <div>
                      <div className="flex items-center">
                        <p className="font-bold text-lg">{currentTestimonial.name}</p>
                        <span className="ml-2 text-2xl">{currentTestimonial.flag}</span>
                      </div>
                      <p className="text-gray-600">
                        {currentTestimonial.country} • {currentTestimonial.treatment}
                      </p>
                      <div className="flex mt-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${i < currentTestimonial.rating ? "text-yellow-400" : "text-gray-300"}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="h-6 w-6 text-[#C8102E]" />
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[#C8102E] scale-125" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
            <button
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
              onClick={nextTestimonial}
            >
              <ChevronRight className="h-6 w-6 text-[#C8102E]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 