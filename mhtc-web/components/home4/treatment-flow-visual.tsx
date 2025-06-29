"use client"

import { useState } from "react"
import { 
  FileText, 
  Stethoscope, 
  Activity,
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Heart,
  Shield
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

const treatmentSteps = [
  {
    id: "consultation",
    title: "Initial Consultation",
    subtitle: "Comprehensive health assessment",
    icon: FileText,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    duration: "1-2 hours",
    description: "Detailed medical history review, physical examination, and treatment planning with our specialists.",
    activities: [
      "Medical history review",
      "Physical examination", 
      "Diagnostic assessment",
      "Treatment plan discussion"
    ],
    outcome: "Personalized treatment roadmap"
  },
  {
    id: "preparation",
    title: "Pre-Treatment Preparation",
    subtitle: "Optimizing your health for treatment",
    icon: Stethoscope,
    color: "bg-green-50 border-green-200 text-green-700",
    duration: "1-3 days",
    description: "Pre-operative tests, medication adjustments, and preparation protocols to ensure optimal treatment outcomes.",
    activities: [
      "Laboratory tests",
      "Imaging studies",
      "Medication review",
      "Pre-operative planning"
    ],
    outcome: "Ready for treatment"
  },
  {
    id: "treatment",
    title: "Treatment Delivery",
    subtitle: "Expert care with advanced technology",
    icon: Activity,
    color: "bg-red-50 border-red-200 text-red-700",
    duration: "Varies",
    description: "State-of-the-art treatment delivery by internationally trained specialists using advanced medical technology.",
    activities: [
      "Anesthesia management",
      "Surgical/medical intervention",
      "Real-time monitoring",
      "Quality assurance"
    ],
    outcome: "Successful treatment completion"
  },
  {
    id: "recovery",
    title: "Recovery & Monitoring",
    subtitle: "Comprehensive post-treatment care",
    icon: Heart,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    duration: "1-7 days",
    description: "Careful monitoring, pain management, and recovery support to ensure optimal healing and comfort.",
    activities: [
      "Vital signs monitoring",
      "Pain management",
      "Mobility assistance",
      "Progress evaluation"
    ],
    outcome: "Stable recovery achieved"
  }
]

const qualityMetrics = [
  { label: "Treatment Success Rate", value: "96.5%", icon: CheckCircle },
  { label: "Patient Satisfaction", value: "4.8/5", icon: Heart },
  { label: "Safety Standards", value: "JCI Accredited", icon: Shield },
  { label: "Average Length of Stay", value: "3.2 days", icon: Clock }
]

export function TreatmentFlowVisual() {
  const [activeStep, setActiveStep] = useState<string>("consultation")

  const activeStepData = treatmentSteps.find(step => step.id === activeStep)

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Activity className="h-4 w-4 mr-2" />
          Treatment Process
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Your Treatment Journey
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Every step of your treatment is carefully planned and executed by our expert team, 
          ensuring the highest standards of care and optimal outcomes.
        </p>
      </div>

      {/* Treatment Flow */}
      <div className="grid lg:grid-cols-2 gap-8 items-start">
        
        {/* Step Navigation */}
        <div className="space-y-4">
          {treatmentSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index < treatmentSteps.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-12 bg-gray-300 z-0"></div>
              )}
              
              <Card 
                className={`transition-all duration-300 cursor-pointer ${
                  activeStep === step.id 
                    ? `${step.color} border-2 shadow-lg scale-105` 
                    : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActiveStep(step.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      activeStep === step.id 
                        ? 'bg-white shadow-md scale-110' 
                        : 'bg-gray-100'
                    }`}>
                      <step.icon className={`h-6 w-6 ${
                        activeStep === step.id ? 'text-[#BE1E2D]' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className={`text-lg font-bold transition-colors ${
                          activeStep === step.id ? 'text-[#BE1E2D]' : 'text-gray-900'
                        }`}>
                          {step.title}
                        </h3>
                        <Badge variant="outline" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{step.subtitle}</p>
                      
                      {activeStep === step.id && (
                        <div className="mt-3 pt-3 border-t border-gray-200">
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Step Details */}
        {activeStepData && (
          <Card className={`${activeStepData.color} border-2 shadow-lg sticky top-8`}>
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <activeStepData.icon className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activeStepData.title}</h3>
                    <p className="text-gray-600">{activeStepData.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {activeStepData.description}
                </p>

                {/* Activities */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                  <div className="grid gap-2">
                    {activeStepData.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome */}
                <div className="p-4 bg-white/80 rounded-lg border border-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-[#BE1E2D]" />
                    <h5 className="font-semibold text-gray-900">Expected Outcome:</h5>
                  </div>
                  <p className="text-sm text-gray-700">{activeStepData.outcome}</p>
                </div>

                {/* Action */}
                <Button 
                  size="lg" 
                  className="w-full bg-[#BE1E2D] hover:bg-[#A01825]"
                >
                  Learn More About This Step
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Quality Metrics
      <div className="pt-8 border-t border-gray-200">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Treatment Quality Metrics</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {qualityMetrics.map((metric, index) => (
            <Card key={index} className="border-2 border-gray-200 hover:border-[#BE1E2D]/30 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="mb-3">
                  <metric.icon className="h-8 w-8 text-[#BE1E2D] mx-auto" />
                </div>
                <div className="text-2xl font-bold text-[#BE1E2D] mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div> */}
    </section>
  )
} 