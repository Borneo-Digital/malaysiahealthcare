"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, GraduationCap, Briefcase, Home, Users } from "lucide-react"


export default function MHWellnessEvents() {
  const wellnessEvents = [
    {
      id: 1,
      quarter: "Q1 2025",
      target: "International School Students",
      icon: GraduationCap,
      color: "bg-blue-50 border-blue-200 text-blue-700",
    },
    {
      id: 2,
      quarter: "Q2 2025", 
      target: "Private University Students",
      icon: Users,
      color: "bg-green-50 border-green-200 text-green-700",
    },
    {
      id: 3,
      quarter: "Q3 2025",
      target: "Working Expats & Families",
      icon: Briefcase,
      color: "bg-purple-50 border-purple-200 text-purple-700",
    },
    {
      id: 4,
      quarter: "Q4 2025",
      target: "MM2H/Retirees/50+ years old",
      icon: Home,
      color: "bg-amber-50 border-amber-200 text-amber-700",
    }
  ]

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <div className="inline-flex items-center gap-2 bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Heart className="h-4 w-4" />
          MH Wellness Events 2025
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Wellness Programs for <span className="text-[#BE1E2D]">Expat Communities</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Specially designed wellness events throughout 2025, targeting different expat communities in Malaysia with comprehensive healthcare programs and preventive care initiatives.
        </p>
      </motion.div>

      {/* Events Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {wellnessEvents.map((event, index) => (
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-2 group hover:border-[#BE1E2D]">
              <CardContent className="p-6 text-center">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${event.color}`}>
                  <event.icon className="h-8 w-8" />
                </div>

                {/* Quarter */}
                <span className="inline-block bg-[#BE1E2D] text-white px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {event.quarter}
                </span>

                {/* Target Audience */}
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                  {event.target}
                </h3>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>


    </div>
  )
} 