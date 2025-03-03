"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Extract this interface for reuse across the application
export interface JourneyTranslations {
  title: string;
  description: string;
  learnMore: string;
  preArrival: string;
  arrival: string;
  treatment: string;
  postTreatment: string;
  planYourJourney: string;
  welcomeToMalaysia: string;
  worldClassHealthcare: string;
  recoveryAndBeyond: string;
  visaRequirements: string;
  hospitalSelection: string;
  treatmentPlanning: string;
  costEstimation: string;
  meetAndGreet: string;
  immigrationAssistance: string;
  transportation: string;
  conciergeServices: string;
  medicalProcedures: string;
  specialistConsultation: string;
  patientCare: string;
  companionActivities: string;
  followUpCare: string;
  rehabilitation: string;
  tourismActivities: string;
  returnPlanning: string;
}

interface JourneyBridgeProps {
  translations: JourneyTranslations;
  isRTL?: boolean;
}

export default function JourneyBridge({
  translations,
  isRTL = false,
}: JourneyBridgeProps) {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Define the journey steps using the translations - memoized to prevent recalculation
  const journeySteps = useMemo(
    () => [
      {
        id: 1,
        title: translations.preArrival,
        description: translations.planYourJourney,
        link: "/pre-arrival",
        details: [
          translations.visaRequirements,
          translations.hospitalSelection,
          translations.treatmentPlanning,
          translations.costEstimation,
        ],
      },
      {
        id: 2,
        title: translations.arrival,
        description: translations.welcomeToMalaysia,
        link: "/arrival",
        details: [
          translations.meetAndGreet,
          translations.immigrationAssistance,
          translations.transportation,
          translations.conciergeServices,
        ],
      },
      {
        id: 3,
        title: translations.treatment,
        description: translations.worldClassHealthcare,
        link: "/treatment",
        details: [
          translations.medicalProcedures,
          translations.specialistConsultation,
          translations.patientCare,
          translations.companionActivities,
        ],
      },
      {
        id: 4,
        title: translations.postTreatment,
        description: translations.recoveryAndBeyond,
        link: "/post-treatment",
        details: [
          translations.followUpCare,
          translations.rehabilitation,
          translations.tourismActivities,
          translations.returnPlanning,
        ],
      },
    ],
    [translations]
  );

  // Helper function to safely get the selected step
  const getSelectedStep = () => {
    if (
      activeStep === null ||
      activeStep < 1 ||
      activeStep > journeySteps.length
    ) {
      return null;
    }
    return journeySteps[activeStep - 1];
  };

  // Close modal when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveStep(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      className={`relative w-full max-w-6xl mx-auto px-4 ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Bridge Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[200px] sm:h-[500px] mb-8 rounded-lg overflow-hidden"
      >
        <Image
          src="/images/journey-bridge.png"
          fill={true}
          alt="Journey Bridge"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-white/70" />
      </motion.div>

      {/* Journey Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative -mt-16 sm:-mt-32">
        {journeySteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={cn(
                "bg-white rounded-xl p-6 transition-all duration-300 h-full flex flex-col cursor-pointer",
                activeStep === step.id
                  ? "ring-2 ring-primary shadow-lg"
                  : "hover:shadow-md hover:scale-[1.02]",
                "touch-manipulation"
              )}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveStep(step.id)}
              role="button"
              aria-expanded={activeStep === step.id}
              aria-controls={`journey-step-details-${step.id}`}
            >
              <div className="text-center flex flex-col flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-semibold text-lg">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-primary font-bold text-lg mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">{step.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {activeStep !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center 
                       hover:bg-black/65 transition-colors cursor-pointer"
              onClick={() => setActiveStep(null)}
              aria-hidden="true"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="relative w-[calc(100%-2rem)] sm:w-[90%] max-w-lg 
                         bg-white shadow-xl rounded-2xl z-50 m-4 cursor-default"
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`journey-step-title-${activeStep}`}
                id={`journey-step-details-${activeStep}`}
              >
                <button
                  onClick={() => setActiveStep(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                <div className="p-6 sm:p-8">
                  <h4
                    id={`journey-step-title-${activeStep}`}
                    className="text-2xl font-bold text-gray-900 mb-6 pr-8"
                  >
                    {getSelectedStep()?.title || ""}
                  </h4>

                  <ul className="space-y-4 mb-8">
                    {getSelectedStep()?.details.map((detail, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-gray-600 flex items-start text-base"
                      >
                        <span className="mr-3 text-primary text-lg">•</span>
                        <span>{detail}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href={getSelectedStep()?.link || "#"}
                    className="inline-flex w-full items-center justify-center px-6 py-4 
                              bg-primary text-white text-lg font-semibold rounded-xl 
                              hover:bg-primary/90 transition-colors group mb-4"
                  >
                    {translations.learnMore}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
