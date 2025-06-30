import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  Plane, 
  Hospital, 
  Clipboard, 
  Calculator,  
  CheckCircle,
  Users,
  Download 
} from 'lucide-react'
import { JourneyNavigation } from '@/components/JourneyNavigation'

export const metadata: Metadata = {
  title: 'Pre-Arrival Information | Malaysia Healthcare Travel Council',
  description: 'Plan your healthcare journey to Malaysia with essential pre-arrival information including visa requirements, hospital selection, treatment planning, and cost estimation.',
}

const preArrivalSteps = [
  {
    title: "Visa Requirements",
    icon: Plane,
    content: "Most visitors can enter Malaysia without a visa for stays up to 90 days.",
    link: "#visa-requirements",
    features: [
      "Check visa eligibility",
      "Prepare required documents",
      "Apply if necessary"
    ],
    details: {
      description: "Understanding entry requirements is crucial for your healthcare journey.",
      faqs: [
        {
          question: "Do I need a visa for medical treatment?",
          answer: "Most visitors can enter Malaysia without a visa for stays up to 90 days. However, some nationalities may require a medical visa for longer stays."
        },
        {
          question: "What documents should I prepare?",
          answer: "You&apos;ll need a valid passport, medical documents from your current healthcare provider, and proof of sufficient funds."
        }
      ]
    }
  },
  {
    title: "Hospital Selection",
    icon: Hospital,
    content: "Choose from our network of internationally accredited hospitals.",
    link: "#hospital-selection",
    features: [
      "Compare facilities and specialties",
      "Review accreditations",
      "Check specialist availability"
    ],
    details: {
      description: "Select from Malaysia's finest healthcare facilities.",
      faqs: [
        {
          question: "How do I select the right hospital?",
          answer: "Consider factors like specialization, location, and patient reviews. Our healthcare advisors can guide your decision."
        }
      ]
    }
  },
  {
    title: "Treatment Planning",
    icon: Clipboard,
    content: "Plan your medical journey with our expert healthcare team.",
    link: "#treatment-planning",
    features: [
      "Schedule consultations",
      "Review treatment options",
      "Plan your timeline"
    ],
    details: {
      description: "Comprehensive treatment planning for peace of mind.",
      faqs: [
        {
          question: "How do I start planning?",
          answer: "Begin with an online consultation to discuss your needs and receive preliminary advice."
        }
      ]
    }
  },
  {
    title: "Cost Estimation",
    icon: Calculator,
    content: "Get transparent cost estimates and payment options.",
    link: "#cost-estimation",
    features: [
      "Receive detailed quotations",
      "Explore insurance coverage",
      "Understand payment methods"
    ],
    details: {
      description: "Clear and transparent healthcare costs.",
      faqs: [
        {
          question: "How can I get a cost estimate?",
          answer: "Submit your medical reports for a comprehensive cost breakdown from our team."
        }
      ]
    }
  }
]

export default function PreArrival() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Pre-Arrival Information
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Begin your healthcare journey to Malaysia with confidence. Here&apos;s everything you need to know 
            about planning your visit for world-class medical care.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-0 right-0 h-0.5 bg-gray-200 top-1/2 -translate-y-1/2 z-0 hidden md:block" />
            <div className="flex flex-col md:flex-row justify-between relative z-10">
              {['Pre-Arrival', 'Arrival', 'Treatment', 'Post-Treatment'].map((step, i) => (
                <div key={i} className="flex md:flex-col items-center mb-4 md:mb-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    i === 0 ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200'
                  }`}>
                    {i === 0 ? <CheckCircle className="w-5 h-5" /> : (i + 1)}
                  </div>
                  <span className={`ml-3 md:ml-0 md:mt-2 font-medium ${
                    i === 0 ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {preArrivalSteps.map((step, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="space-y-1 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{step.content}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {step.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Accordion type="single" collapsible>
                    {step.details.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`item-${i}`}>
                        <AccordionTrigger className="text-sm hover:no-underline">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-gray-600">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Journey Navigation Here*/}
          <JourneyNavigation currentStep="pre-arrival" />

          {/* CTA Section */}
          <div className="mt-12">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Ready to Start Your Healthcare Journey?</h2>
                    <p className="text-white/90">Our care team is ready to assist with your pre-arrival planning.</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <Button 
                      variant="secondary"
                      className="w-full sm:w-auto bg-white text-primary hover:bg-white/90"
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Contact Care Team
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}