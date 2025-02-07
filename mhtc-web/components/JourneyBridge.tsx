"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { ArrowRight, X } from "lucide-react";
import { cn } from "@/lib/utils";
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
      "costEstimation",
    ],
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
      "conciergeServices",
    ],
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
      "companionActivities",
    ],
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
      "returnPlanning",
    ],
  },
];

export default function JourneyBridge() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { t } = useTranslation("en");

  // Close modal when pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveStep(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4">
      {/* Bridge Background Image */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative h-[200px] sm:h-[300px] mb-8 rounded-lg overflow-hidden"
      >
        <Image
          src="/images/journey-bridge.webp"
          alt="Journey bridge visualization"
          layout="fill"
          objectFit="cover"
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
            >
              <div className="text-center flex flex-col flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-semibold text-lg">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-primary font-bold text-lg mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {t(step.descriptionKey)}
                </p>
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
              >
                <button
                  onClick={() => setActiveStep(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-50"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>

                <div className="p-6 sm:p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-6 pr-8">
                    {t(journeySteps[activeStep - 1].titleKey)}
                  </h4>

                  <ul className="space-y-4 mb-8">
                    {journeySteps[activeStep - 1].details.map(
                      (detail, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="text-gray-600 flex items-start text-base"
                        >
                          <span className="mr-3 text-primary text-lg">•</span>
                          <span>{t(detail)}</span>
                        </motion.li>
                      )
                    )}
                  </ul>

                  <Link
                    href={journeySteps[activeStep - 1].link}
                    className="inline-flex w-full items-center justify-center px-6 py-4 
                              bg-primary text-white text-lg font-semibold rounded-xl 
                              hover:bg-primary/90 transition-colors group mb-4"
                  >
                    {t("learnMore")}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Add connecting lines between journey steps for better visual flow */}
      <div className="hidden lg:block absolute top-1/2 left-[25%] right-[25%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 z-0" />
    </div>
  );
}
