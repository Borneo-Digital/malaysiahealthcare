"use client"

import { Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { motion } from "framer-motion"

export function CTAPreArrival() {
  return (
    <section className="space-y-8">
            <div className="text-center pt-8">
        <Card className="bg-gradient-to-r from-[#BE1E2D] to-[#A01825] border-none text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <Heart className="h-32 w-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Ready for Your Journey?</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our team is here to help you every step of the way. Let us handle the details while you focus on your health.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white">
            Contact MHTC
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" variant="outline" className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white">
              Download Complete Guide
            </Button>
          </motion.div>
        </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
} 