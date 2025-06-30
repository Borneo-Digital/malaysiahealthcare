"use client"

import { useState } from "react"
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  // ArrowRight,
  Heart,
  Activity,
  Users,
  Home,
  Phone,
  FileText,
  Zap,
  Star
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

const recoveryPhases = [
  {
    id: "immediate",
    title: "Immediate Recovery",
    subtitle: "First 24-48 hours",
    icon: Activity,
    color: "bg-red-50 border-red-200 text-red-700",
    duration: "1-2 days",
    description: "Critical monitoring period with round-the-clock medical supervision and comfort care.",
    activities: [
      "Vital signs monitoring",
      "Pain management",
      "Medication administration",
      "Initial mobility assessment"
    ],
    milestones: ["Stable vital signs", "Pain under control", "Alert and responsive"],
    support: "24/7 Medical Team"
  },
  {
    id: "early",
    title: "Early Recovery",
    subtitle: "Days 2-7",
    icon: Heart,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    duration: "5-6 days",
    description: "Gradual improvement with increased activity and preparation for discharge planning.",
    activities: [
      "Physical therapy initiation",
      "Wound care management",
      "Nutritional support",
      "Family education sessions"
    ],
    milestones: ["Improved mobility", "Eating well", "Ready for discharge"],
    support: "Recovery Team + Family"
  },
  {
    id: "transition",
    title: "Transition Phase",
    subtitle: "Weeks 1-4",
    icon: Home,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    duration: "3-4 weeks",
    description: "Home-based recovery with regular check-ins and progressive activity increases.",
    activities: [
      "Home care coordination",
      "Regular follow-up calls",
      "Activity progression",
      "Medication management"
    ],
    milestones: ["Independent daily activities", "No complications", "Strength returning"],
    support: "Remote Monitoring Team"
  },
  {
    id: "longterm",
    title: "Long-term Recovery",
    subtitle: "Months 1-6+",
    icon: Zap,
    color: "bg-green-50 border-green-200 text-green-700",
    duration: "3-6 months",
    description: "Complete healing and return to normal activities with ongoing support as needed.",
    activities: [
      "Periodic medical reviews",
      "Lifestyle counseling",
      "Preventive care planning",
      "Quality of life assessment"
    ],
    milestones: ["Full functionality restored", "Excellent quality of life", "Prevention protocols active"],
    support: "Wellness Team"
  }
]

const recoveryServices = [
  { icon: Phone, label: "24/7 Helpline", description: "Round-the-clock support for any concerns" },
  { icon: Users, label: "Care Coordination", description: "Seamless transitions between care teams" },
  { icon: FileText, label: "Progress Tracking", description: "Detailed recovery monitoring and reporting" },
  { icon: Heart, label: "Emotional Support", description: "Psychological care for patients and families" }
]

export function RecoveryTimelineView() {
  const [activePhase, setActivePhase] = useState<string>("immediate")

  const activePhaseData = recoveryPhases.find(phase => phase.id === activePhase)

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Calendar className="h-4 w-4 mr-2" />
          Recovery Timeline
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          Your Healing Journey Timeline
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Every recovery is unique, but we&apos;ve outlined the typical phases of healing to help you 
          understand what to expect and how we&apos;ll support you every step of the way.
        </p>
      </div>

      {/* Timeline Navigation */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-300 hidden lg:block"></div>
        
        <div className="grid lg:grid-cols-4 gap-4">
          {recoveryPhases.map((phase, index) => (
            <div key={phase.id} className="relative">
              <Card 
                className={`transition-all duration-300 cursor-pointer ${
                  activePhase === phase.id 
                    ? `${phase.color} border-2 shadow-lg scale-105` 
                    : 'border-2 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
                onClick={() => setActivePhase(phase.id)}
              >
                <CardContent className="p-4 text-center">
                  {/* Icon */}
                  <div className={`mx-auto mb-3 p-3 rounded-xl transition-all duration-300 ${
                    activePhase === phase.id 
                      ? 'bg-white shadow-md scale-110' 
                      : 'bg-gray-100'
                  }`}>
                    <phase.icon className={`h-6 w-6 ${
                      activePhase === phase.id ? 'text-[#BE1E2D]' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  {/* Content */}
                  <h3 className={`font-bold mb-1 transition-colors ${
                    activePhase === phase.id ? 'text-[#BE1E2D]' : 'text-gray-900'
                  }`}>
                    {phase.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{phase.subtitle}</p>
                  <Badge variant="outline" className="text-xs">
                    <Clock className="h-3 w-3 mr-1" />
                    {phase.duration}
                  </Badge>
                </CardContent>
              </Card>

              {/* Step Number */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold ${
                activePhase === phase.id ? 'bg-[#BE1E2D] text-white' : 'bg-gray-300 text-gray-600'
              }`}>
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phase Details */}
      {activePhaseData && (
        <Card className={`${activePhaseData.color} border-2 shadow-lg`}>
          <CardContent className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              
              {/* Left Column */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-white rounded-xl shadow-md">
                    <activePhaseData.icon className="h-8 w-8 text-[#BE1E2D]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{activePhaseData.title}</h3>
                    <p className="text-gray-600">{activePhaseData.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {activePhaseData.description}
                </p>

                {/* Support */}
                <div className="p-4 bg-white/80 rounded-lg border border-white">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-[#BE1E2D]" />
                    <h5 className="font-semibold text-gray-900">Support Team:</h5>
                  </div>
                  <p className="text-sm text-gray-700">{activePhaseData.support}</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Activities */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Activities:</h4>
                  <div className="grid gap-2">
                    {activePhaseData.activities.map((activity, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Key Milestones:</h4>
                  <div className="grid gap-2">
                    {activePhaseData.milestones.map((milestone, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-[#BE1E2D] flex-shrink-0" />
                        <span className="text-sm text-gray-600">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              {/* <Button 
                size="lg" 
                className="w-full bg-[#BE1E2D] hover:bg-[#A01825]"
              >
                Get Detailed {activePhaseData.title} Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button> */}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recovery Services */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
        {recoveryServices.map((service, index) => (
          <Card key={index} className="border-2 border-gray-200 hover:border-[#BE1E2D]/30 transition-all duration-300 hover:shadow-lg group">
            <CardContent className="p-6 text-center">
              <div className="mb-4">
                <service.icon className="h-8 w-8 text-[#BE1E2D] mx-auto group-hover:scale-110 transition-transform" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 group-hover:text-[#BE1E2D] transition-colors">
                {service.label}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
} 