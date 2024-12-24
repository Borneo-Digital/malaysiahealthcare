'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

// Mock data for the monthly theme
const mockMonthlyTheme = {
  title: "[Placeholder] Wellness & Prevention Month",
  description: "[Placeholder] Discover comprehensive wellness programs and preventive healthcare services available in Malaysia. Learn about health screening packages, lifestyle consultations, and more.",
  imageUrl: "/images/mock-image-theme.webp",
  altText: "Monthly Health Theme Illustration"
}

export default function MonthlyThemeBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <div className="md:flex items-center">
        <div className="md:w-2/5 relative">
          <Image
            src={mockMonthlyTheme.imageUrl}
            alt={mockMonthlyTheme.altText}
            width={600}
            height={400}
            className="h-64 w-full md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
        </div>
        <div className="p-8 md:p-12 md:w-3/5">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {new Date().toLocaleString('default', { month: 'long' })}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {mockMonthlyTheme.title}
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            {mockMonthlyTheme.description}
          </p>
          <Button className="group">
            Explore Theme
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

