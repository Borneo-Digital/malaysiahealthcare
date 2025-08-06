"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Play, ExternalLink } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"
import { HomepageTestimonialsTranslations } from "@/types/translations"

export default function Testimonials() {
  const { t } = useTranslation<HomepageTestimonialsTranslations>("homepage/testimonials")

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t.title || "Patient Stories"}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {t.subtitle || "Real #experienceMalaysiaHealthcare stories from international patients who received premier medical care and Malaysian hospitality."}
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {(t.patients || []).map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-[#BE1E2D]/20">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-[#BE1E2D] opacity-60" />
                </div>

                {/* Experience Type */}
                <div className="mb-4">
                  <span className="inline-block bg-[#BE1E2D]/10 text-[#BE1E2D] px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.experience}
                  </span>
                </div>

                {/* Patient Info */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-1">
                    <span className="font-medium">{t.labels?.from || "From:"}:</span> {testimonial.country}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-medium">{t.labels?.condition || "Condition:"}:</span> {testimonial.condition}
                  </p>
                </div>

                {/* YouTube Video Link */}
                <div className="mt-4">
                  <a
                    href={testimonial.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#BE1E2D] text-white px-4 py-2 rounded-lg hover:bg-[#BE1E2D]/90 transition-colors"
                  >
                    <Play className="h-4 w-4" />
                    {t.watchVideo || "Watch Video Testimonial"}
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
      
      </motion.div>
    </div>
  )
} 