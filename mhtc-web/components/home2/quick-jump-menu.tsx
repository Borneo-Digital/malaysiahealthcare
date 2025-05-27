"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Menu, X } from "lucide-react"

export default function QuickJumpMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const sections = [
    { id: "hero", label: "Home" },
    { id: "healing-journey", label: "Healing Journey" },
    { id: "treatments", label: "Treatments" },
    { id: "why-choose", label: "Why Choose" },
    { id: "hospitals", label: "Hospitals" },
    { id: "stories", label: "Patient Stories" },
    { id: "news", label: "News & Events" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 bottom-20 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-[#C8102E] hover:bg-gray-100"
            onClick={scrollToTop}
          >
            <ChevronUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <button
        className="w-12 h-12 rounded-full bg-[#C8102E] shadow-lg flex items-center justify-center text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg overflow-hidden w-48"
          >
            <ul className="py-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700 hover:text-[#C8102E] transition-colors"
                    onClick={() => scrollToSection(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 