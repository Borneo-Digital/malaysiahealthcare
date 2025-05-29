"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface TestimonialsSectionProps {
  isRTL?: boolean;
}

export default function TestimonialsSection({ isRTL = false }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "A. Rahman",
      country: "Middle East",
      flag: "🌍",
      treatment: "Cardiac Care",
      rating: 5,
      quote: "MHTC helped coordinate my healthcare journey in Malaysia. They connected me with appropriate medical facilities and provided support throughout the process.",
      hospital: "Cardiac Specialty Center",
    },
    {
      id: 2,
      name: "L. Chen",
      country: "East Asia",
      flag: "🌏",
      treatment: "Orthopedic Surgery",
      rating: 5,
      quote: "The medical technology was modern and the doctors were experienced. The coordination services made the entire process smooth.",
      hospital: "Private Medical Center",
    },
    {
      id: 3,
      name: "S. Williams",
      country: "Oceania",
      flag: "🌏",
      treatment: "Fertility Treatment",
      rating: 5,
      quote: "The fertility specialists were professional and supportive. We appreciated the comprehensive care and attention to detail.",
      hospital: "Specialty Medical Centre",
    },
    {
      id: 4,
      name: "J. Thompson",
      country: "Europe",
      flag: "🌍",
      treatment: "Oncology",
      rating: 5,
      quote: "The medical team provided quality treatment with modern facilities. The support services helped make our stay comfortable.",
      hospital: "Medical Centre",
    },
    {
      id: 5,
      name: "F. Ahmed",
      country: "Africa",
      flag: "🌍",
      treatment: "General Surgery",
      rating: 5,
      quote: "The surgical team was skilled and the recovery facilities were well-equipped. I felt well-cared for throughout my treatment.",
      hospital: "Medical Centre",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Patient Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Healthcare travelers share their experiences with Malaysia&apos;s medical facilities
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Main Testimonial Display */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <Card className="overflow-hidden shadow-lg border-gray-200">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section - Using placeholder */}
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-400" />
                      <p className="text-gray-600">Patient Photo</p>
                    </div>
                  </div>
                  
                  {/* Country Flag */}
                  <div className="absolute bottom-4 left-4 flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-2">
                    <span className="text-xl mr-2">{currentTestimonial.flag}</span>
                    <span className="font-medium text-sm">{currentTestimonial.country}</span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      &ldquo;{currentTestimonial.quote}&rdquo;
                    </blockquote>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {currentTestimonial.treatment} • {currentTestimonial.hospital}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full w-10 h-10 border-gray-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full w-10 h-10 border-gray-300"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            These experiences represent individual patient journeys. Results may vary based on specific medical conditions and treatments.
          </p>
        </motion.div>
      </div>
    </div>
  );
} 