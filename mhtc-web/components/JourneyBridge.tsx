"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  X, 
  FileText, 
  Plane, 
  Stethoscope, 
  Home,
  CheckCircle,
  Calendar,
  MapPin,
  Users
} from "lucide-react";
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
        icon: FileText,
        title: translations.preArrival,
        subtitle: "Planning Phase",
        description: translations.planYourJourney,
        link: "/pre-arrival",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        details: [
          {
            icon: CheckCircle,
            text: translations.visaRequirements,
            description: "Documentation and entry requirements"
          },
          {
            icon: MapPin,
            text: translations.hospitalSelection,
            description: "Matching you with suitable facilities"
          },
          {
            icon: Calendar,
            text: translations.treatmentPlanning,
            description: "Scheduling and preparation"
          },
          {
            icon: FileText,
            text: translations.costEstimation,
            description: "Transparent pricing information"
          },
        ],
      },
      {
        id: 2,
        icon: Plane,
        title: translations.arrival,
        subtitle: "Welcome Services",
        description: translations.welcomeToMalaysia,
        link: "/arrival",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        details: [
          {
            icon: Users,
            text: translations.meetAndGreet,
            description: "Personal assistance upon arrival"
          },
          {
            icon: CheckCircle,
            text: translations.immigrationAssistance,
            description: "Smooth entry process"
          },
          {
            icon: MapPin,
            text: translations.transportation,
            description: "Arranged transfers"
          },
          {
            icon: Users,
            text: translations.conciergeServices,
            description: "24/7 support services"
          },
        ],
      },
      {
        id: 3,
        icon: Stethoscope,
        title: translations.treatment,
        subtitle: "Medical Care",
        description: translations.worldClassHealthcare,
        link: "/treatment",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        details: [
          {
            icon: Stethoscope,
            text: translations.medicalProcedures,
            description: "Professional medical services"
          },
          {
            icon: Users,
            text: translations.specialistConsultation,
            description: "Expert medical opinions"
          },
          {
            icon: CheckCircle,
            text: translations.patientCare,
            description: "Comprehensive care support"
          },
          {
            icon: MapPin,
            text: translations.companionActivities,
            description: "Support for accompanying persons"
          },
        ],
      },
      {
        id: 4,
        icon: Home,
        title: translations.postTreatment,
        subtitle: "Recovery Phase",
        description: translations.recoveryAndBeyond,
        link: "/post-treatment",
        iconBg: "bg-primary/10",
        iconColor: "text-primary",
        details: [
          {
            icon: CheckCircle,
            text: translations.followUpCare,
            description: "Continued medical support"
          },
          {
            icon: Stethoscope,
            text: translations.rehabilitation,
            description: "Recovery programs"
          },
          {
            icon: MapPin,
            text: translations.tourismActivities,
            description: "Optional leisure activities"
          },
          {
            icon: Plane,
            text: translations.returnPlanning,
            description: "Departure arrangements"
          },
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
      className={`relative w-full max-w-7xl mx-auto ${
        isRTL ? "rtl" : "ltr"
      }`}
    >
      {/* Journey Steps - Card Based Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {journeySteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={cn(
                  "bg-white rounded-xl p-6 transition-all duration-300 h-full flex flex-col cursor-pointer border",
                  activeStep === step.id
                    ? "border-primary shadow-lg scale-[1.02]"
                    : "border-gray-200 hover:border-gray-300 hover:shadow-md",
                  "group"
                )}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveStep(step.id)}
                role="button"
                aria-expanded={activeStep === step.id}
                aria-controls={`journey-step-details-${step.id}`}
              >
                <div className="flex flex-col h-full">
                  {/* Icon and Step Number */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${step.iconBg} group-hover:bg-primary/20 transition-all`}>
                      <Icon className={`w-5 h-5 ${step.iconColor}`} />
                    </div>
                    <span className="text-xs font-medium text-gray-400">
                      Step {step.id}
                    </span>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="font-semibold text-lg text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">{step.subtitle}</p>

                  {/* Description */}
                  <p className="text-sm text-gray-600 flex-grow mb-4 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-1 transition-transform">
                    <span>View Details</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Timeline Connector - Visual Journey Path */}
      <div className="hidden lg:block absolute top-[84px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20" />
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
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center"
              onClick={() => setActiveStep(null)}
              aria-hidden="true"
            >
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="relative w-[calc(100%-2rem)] sm:w-[90%] max-w-2xl 
                         bg-white shadow-2xl rounded-2xl z-50 m-4"
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
                  <X className="w-5 h-5 text-gray-500" />
                </button>

                <div className="p-6 sm:p-8">
                  {/* Modal Header */}
                  <div className="flex items-start mb-6">
                    <div className={`p-3 rounded-lg ${getSelectedStep()?.iconBg} mr-4`}>
                      {getSelectedStep() && (() => {
                        const StepIcon = getSelectedStep()!.icon;
                        return <StepIcon className={`w-5 h-5 ${getSelectedStep()!.iconColor}`} />;
                      })()}
                    </div>
                    <div>
                      <h4
                        id={`journey-step-title-${activeStep}`}
                        className="text-2xl font-bold text-gray-900"
                      >
                        {getSelectedStep()?.title || ""}
                      </h4>
                      <p className="text-gray-500 mt-1">{getSelectedStep()?.subtitle}</p>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {getSelectedStep()?.details.map((detail, index) => {
                      const DetailIcon = detail.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-gray-50 rounded-lg p-4"
                        >
                          <div className="flex items-start">
                            <DetailIcon className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                            <div>
                              <h5 className="font-medium text-gray-900 text-sm mb-1">
                                {detail.text}
                              </h5>
                              <p className="text-xs text-gray-600">
                                {detail.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Action Button */}
                  <Link
                    href={getSelectedStep()?.link || "#"}
                    className="inline-flex w-full items-center justify-center px-6 py-3 
                              bg-primary text-white font-medium rounded-xl 
                              hover:bg-primary-dark transition-colors group"
                  >
                    {translations.learnMore}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
