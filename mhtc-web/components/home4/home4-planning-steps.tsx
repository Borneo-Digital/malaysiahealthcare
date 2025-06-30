"use client"

import { useState } from "react"
import { 
  FileText, 
  Hospital, 
  Plane, 
  DollarSign, 
  ChevronDown, 
  Download,
  ExternalLink 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"

const planningSteps = [
  {
    id: "research-prepare",
    title: "Research & Preparation",
    icon: FileText,
    color: "bg-info/10 border-info/20 text-info",
    description: "Gather information about Malaysian healthcare options and prepare your documentation.",
    details: [
      "Research accredited hospitals and facilities",
      "Compile medical history and records",
      "Check passport validity and visa requirements",
      "Contact healthcare providers for preliminary consultations"
    ]
  },
  {
    id: "hospital-selection",
    title: "Hospital & Specialist Information",
    icon: Hospital,
    color: "bg-success/10 border-success/20 text-success", 
    description: "Learn about Malaysia's healthcare facilities and available medical specialties.",
    details: [
      "Review internationally accredited hospitals",
      "Information on specialist qualifications",
      "Compare treatment options and approaches",
      "Understand facility certifications and standards"
    ]
  },
  {
    id: "travel-logistics",
    title: "Travel & Accommodation",
    icon: Plane,
    color: "bg-warning/10 border-warning/20 text-warning",
    description: "Plan your travel arrangements and accommodation options in Malaysia.",
    details: [
      "Research flight options and travel routes",
      "Explore accommodation near healthcare facilities",
      "Consider transportation within Malaysia", 
      "Plan for extended stay if needed"
    ]
  },
  {
    id: "financial-planning",
    title: "Financial Planning",
    icon: DollarSign,
    color: "bg-error/10 border-error/20 text-error",
    description: "Understand costs and payment options for your healthcare journey.",
    details: [
      "Review treatment cost estimates",
      "Understand payment methods accepted",
      "Check insurance coverage and requirements",
      "Plan for additional expenses and contingencies"
    ]
  }
]

export function Home4PlanningSteps() {
  const [activeStep, setActiveStep] = useState<string | null>(null)

  const toggleStep = (stepId: string) => {
    setActiveStep(activeStep === stepId ? null : stepId)
  }

  return (
    <section className="space-y-12">
      {/* Section Header */}
      <motion.div 
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Badge className="bg-mhtc-primary/10 text-mhtc-primary px-4 py-2">
          <FileText className="h-4 w-4 mr-2" />
          Planning Guide
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-grey-900">
          Healthcare Journey Planning
        </h2>
        <p className="text-lg text-grey-600 max-w-3xl mx-auto">
          Essential information and steps to help you prepare for your medical travel to Malaysia.
        </p>
      </motion.div>

      {/* Planning Steps */}
      <div className="space-y-6">
        {planningSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card 
              className={`border-2 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02] ${
                activeStep === step.id ? 'border-mhtc-primary shadow-lg scale-[1.02]' : 'border-grey-200 hover:border-grey-300'
              }`}
              onClick={() => toggleStep(step.id)}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Step Number & Icon */}
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`w-12 h-12 rounded-xl ${step.color.split(' ')[0]} flex items-center justify-center`}>
                        <step.icon className="h-6 w-6 text-white" />
                      </div>
                      <motion.div 
                        className="absolute -top-2 -right-2 w-6 h-6 bg-mhtc-primary text-white rounded-full flex items-center justify-center text-sm font-bold"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        {index + 1}
                      </motion.div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-grey-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-grey-600">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <motion.div 
                    className="ml-4"
                    animate={{ rotate: activeStep === step.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-mhtc-primary" />
                  </motion.div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {activeStep === step.id && (
                    <motion.div 
                      className="mt-6 pt-6 border-t border-grey-200"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <motion.div 
                        className="grid md:grid-cols-2 gap-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                      >
                        <div className="space-y-4">
                          <h4 className="font-semibold text-grey-900 text-lg">Information Areas:</h4>
                          <div className="space-y-3">
                            {step.details.map((detail, idx) => (
                              <motion.div 
                                key={idx} 
                                className="flex items-start gap-3 p-3 bg-grey-50 rounded-lg hover:bg-grey-100 transition-colors duration-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: 0.2 + idx * 0.1 }}
                              >
                                <motion.div 
                                  className="w-2 h-2 rounded-full bg-mhtc-primary mt-2 flex-shrink-0"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                                />
                                <span className="text-grey-700 text-sm">{detail}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <h4 className="font-semibold text-grey-900 text-lg">Resources:</h4>
                          <div className="space-y-3">
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.4 }}
                            >
                              <Button 
                                variant="outline" 
                                className="w-full justify-start border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary/5 hover:scale-105 transition-all duration-200"
                              >
                                <Download className="h-4 w-4 mr-2" />
                                Download Planning Guide
                              </Button>
                            </motion.div>
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.5 }}
                            >
                              <Button 
                                variant="outline" 
                                className="w-full justify-start border-grey-300 text-grey-700 hover:bg-grey-50 hover:scale-105 transition-all duration-200"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                View Healthcare Facilities
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Call to Action
      <motion.div 
        className="text-center pt-8 border-t border-grey-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold text-grey-900 mb-3">
          Need Planning Assistance?
        </h3>
        <p className="text-grey-600 mb-6 max-w-2xl mx-auto">
          Get comprehensive information and support for planning your healthcare journey to Malaysia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="bg-mhtc-primary hover:bg-[#A50E25]">
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
      </motion.div> */}
    </section>
  )
} 