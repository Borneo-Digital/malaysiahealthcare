"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Container } from "@/components/home4/ui/container"
import Link from "next/link"
import { useParams } from "next/navigation"
import { HomepageFinalCTATranslations } from "@/types/translations"
import { useTranslation } from "@/hooks/useTranslation"

export default function FinalCTA() {
  const { t } = useTranslation<HomepageFinalCTATranslations>("homepage-final-cta")
  const params = useParams()
  const currentLocale = (params?.locale as string) || "en"

  return (
    <section 
      className="relative overflow-hidden bg-[#BE1E2D] py-16 md:py-24 text-white"
      style={{
        backgroundImage: "url('/home4/motif.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-[#BE1E2D]/80"></div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {t.title || "Ready to Begin Your Healthcare Journey?"}
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.description || "Experience world-class medical care with authentic Malaysian hospitality. Our dedicated concierge team ensures your peace of mind throughout your journey."}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button 
                size="lg"
                className="group relative overflow-hidden bg-white text-[#BE1E2D] hover:bg-white/95 hover:scale-105 transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-semibold shadow-lg hover:shadow-xl"
                asChild
              >
                <Link href={`/${currentLocale}/contact`}>
                  <span className="relative z-10 flex items-center gap-2">
                    {t.buttons?.contactTeam || "Contact Our Team"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#BE1E2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="group relative overflow-hidden border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#BE1E2D] hover:border-white transition-all duration-300 text-base md:text-lg px-8 md:px-10 py-4 md:py-5 font-semibold hover:scale-105"
                asChild
              >
                <a 
                  href="https://wa.me/60327268688" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" />
                    {t.buttons?.whatsapp || "WhatsApp Us"}
                  </span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
