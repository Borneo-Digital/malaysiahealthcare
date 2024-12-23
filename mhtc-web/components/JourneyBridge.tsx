'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from '@/lib/i18n'
import { cn } from "@/lib/utils"

const journeySteps = [
  {
    id: 1,
    titleKey: "preArrival",
    descriptionKey: "planYourJourney",
    link: "/pre-arrival",
    details: [
      "visaRequirements",
      "hospitalSelection",
      "treatmentPlanning",
      "costEstimation"
    ]
  },
  {
    id: 2,
    titleKey: "arrival",
    descriptionKey: "welcomeToMalaysia",
    link: "/arrival",
    details: [
      "meetAndGreet",
      "immigrationAssistance",
      "transportation",
      "conciergeServices"
    ]
  },
  {
    id: 3,
    titleKey: "treatment",
    descriptionKey: "worldClassHealthcare",
    link: "/treatment",
    details: [
      "medicalProcedures",
      "specialistConsultation",
      "patientCare",
      "companionActivities"
    ]
  },
  {
    id: 4,
    titleKey: "postTreatment",
    descriptionKey: "recoveryAndBeyond",
    link: "/post-treatment",
    details: [
      "followUpCare",
      "rehabilitation",
      "tourismActivities",
      "returnPlanning"
    ]
  }
]

export default function JourneyBridge() {
  const [activeStep, setActiveStep] = useState<number | null>(null)
  const { t } = useTranslation('en')

  const handleStepInteraction = (stepId: number) => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      // On mobile, toggle the active step
      setActiveStep(stepId === activeStep ? null : stepId)
    }
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Bridge Background */}
      <div className="relative h-[200px] sm:h-[300px] mb-8 bg-[#F8E6E6] rounded-lg overflow-hidden">
        {/* Central Pattern */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
            <div className="absolute inset-[15%] border-2 border-primary/20 rounded-full" />
            <div className="absolute inset-[30%] border-2 border-primary/20 rounded-full" />
          </div>
        </div>
        {/* Horizontal Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-primary/20 transform -translate-y-1/2" />
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-primary/20" />
        <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-primary/20" />
      </div>

      {/* Journey Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative -mt-16 sm:-mt-32">
        {journeySteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={cn(
              "relative",
              activeStep === step.id ? "z-20" : "z-10"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div
              className="relative"
              onMouseEnter={() => window.innerWidth > 768 && setActiveStep(step.id)}
              onMouseLeave={() => window.innerWidth > 768 && setActiveStep(null)}
              onClick={() => handleStepInteraction(step.id)}
            >
              <motion.div
                className={cn(
                  "bg-white rounded-lg p-6 transition-all duration-300",
                  activeStep === step.id ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md",
                  "touch-manipulation" // Better touch handling
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#FDF2F2] flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary font-medium text-sm sm:text-base">{step.id}</span>
                  </div>
                  <h3 className="text-primary font-bold text-base sm:text-lg mb-2">{t(step.titleKey)}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 sm:line-clamp-none">{t(step.descriptionKey)}</p>
                </div>
              </motion.div>

              {/* Expanded Details */}
              <AnimatePresence>
                {activeStep === step.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: 10, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "absolute left-0 right-0 bg-white rounded-lg shadow-lg overflow-hidden",
                      "sm:w-[calc(100%+2rem)] sm:-mx-4",
                      "lg:w-[calc(100%+4rem)] lg:-mx-8",
                      "z-10"
                    )}
                    style={{ top: '100%', marginTop: '0.5rem' }}
                  >
                    <div className="p-4 sm:p-6">
                      <ul className="space-y-2 mb-4">
                        {step.details.map((detail, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="mr-2 text-primary">•</span>
                            <span>{t(detail)}</span>
                          </li>
                        ))}
                      </ul>
                      <Link 
                        href={step.link}
                        className={cn(
                          "inline-flex w-full justify-center items-center px-4 py-2",
                          "bg-primary text-white rounded-md",
                          "hover:bg-primary/90 transition-colors",
                          "text-sm sm:text-base",
                          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        )}
                      >
                        {t('learnMore')}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

