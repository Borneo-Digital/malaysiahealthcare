"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Al-Farsi",
    country: "United Arab Emirates",
    image: "/images/home3/man1.jpg",
    quote:
      "The pre-arrival support from MHTC was exceptional. They helped me choose the right hospital for my cardiac procedure and guided me through every step of the visa process. Their team was always available to answer my questions.",
    treatment: "Cardiac Surgery",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    country: "Australia",
    image: "/images/home3/woman1.jpg",
    quote:
      "As someone traveling alone for medical treatment, I was initially anxious. The MHTC team arranged everything from hospital appointments to accommodation near the hospital. Their detailed pre-arrival guide made me feel prepared and confident.",
    treatment: "Orthopedic Surgery",
  },
  {
    id: 3,
    name: "Liu Wei",
    country: "China",
    image: "/images/home3/man2.jpg.avif",
    quote:
      "The virtual consultation with my Malaysian doctor before arrival was incredibly helpful. I was able to discuss my treatment plan and ask questions, which made me feel more comfortable about traveling for my procedure.",
    treatment: "Fertility Treatment",
  },
  {
    id: 4,
    name: "Priya Sharma",
    country: "India",
    image: "/images/home3/woman1.jpg.avif",
    quote:
      "MHTC's assistance with cost estimation was transparent and accurate. There were no surprise costs, and they helped me understand payment options before I arrived. The pre-arrival checklist they provided ensured I had all necessary documents.",
    treatment: "Cancer Treatment",
  },
]

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const handlePrevious = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((current) => (current + 1) % testimonials.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-[1fr_2fr]">
                    <div className="relative flex h-full min-h-[200px] items-center justify-center bg-[#C8102E]/10 p-6 md:min-h-[300px]">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-white shadow-md">
                        <Image
                          src={testimonial.image || "/images/home3/man1.jpg" || "/images/home3/woman1.jpg" || "/images/home3/man2.jpg.avif" || "/images/home3/woman1.jpg.avif"}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <Quote className="absolute bottom-4 right-4 h-16 w-16 text-[#C8102E]/20" />
                    </div>
                    <div className="flex flex-col justify-center p-6 md:p-8">
                      <div className="mb-4">
                        <Quote className="h-8 w-8 text-[#C8102E]/30" />
                      </div>
                      <p className="mb-6 italic text-muted-foreground">{testimonial.quote}</p>
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                        <div className="mt-2">
                          <span className="rounded-full bg-[#C8102E]/10 px-3 py-1 text-xs font-medium text-[#C8102E]">
                            {testimonial.treatment}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handlePrevious}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-1">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full transition-all",
                activeIndex === index ? "bg-[#C8102E] w-4" : "bg-[#C8102E]/30",
              )}
              onClick={() => {
                setAutoplay(false)
                setActiveIndex(index)
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full"
          onClick={handleNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

