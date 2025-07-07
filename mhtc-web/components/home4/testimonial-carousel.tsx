"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { FadeIn } from "@/components/home4/animations/fade-in"

interface Testimonial {
  id: string
  name: string
  country: string
  treatment: string
  rating: number
  content: string
  image?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoPlay?: boolean
  interval?: number
  className?: string
}

export function TestimonialCarousel({
  testimonials,
  autoPlay = true,
  interval = 5000,
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  if (testimonials.length === 0) return null

  const currentTestimonial = testimonials[currentIndex]

  return (
    <div className={`testimonial-carousel ${className}`}>
      <div className="relative bg-white rounded-lg shadow-lg p-8">
        <FadeIn key={currentTestimonial.id} direction="up">
          {/* Stars */}
          <div className="flex items-center gap-1 mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${i < currentTestimonial.rating ? "text-yellow-500 fill-current" : "text-gray-300"}`}
              />
            ))}
          </div>

          {/* Content */}
          <blockquote className="text-lg text-gray-700 mb-6 italic">
            &ldquo;{currentTestimonial.content}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            {currentTestimonial.image && (
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            )}
            <div>
              <h4 className="font-semibold text-gray-900">{currentTestimonial.name}</h4>
              <p className="text-sm text-gray-600">{currentTestimonial.country}</p>
              <p className="text-sm text-primary">{currentTestimonial.treatment}</p>
            </div>
          </div>
        </FadeIn>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            size="sm"
            onClick={prevTestimonial}
            disabled={testimonials.length <= 1}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {/* Indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={nextTestimonial}
            disabled={testimonials.length <= 1}
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
} 