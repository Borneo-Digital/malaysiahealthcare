import { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { 
  CheckCircle, 
  Calendar, 
  Plane, 
  PhoneCall, 
  Users, 
  Download,
  Hospital,
  Star,
  MessageCircle,
  FileText 
} from 'lucide-react'
import { JourneyNavigation } from '@/components/JourneyNavigation'

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Malaysia Healthcare Travel Council',
  description: 'Learn about post-treatment care, follow-up services, and support available after your medical treatment in Malaysia.',
}

const postTreatmentServices = [
  {
    title: "Follow-Up Care",
    icon: CheckCircle,
    description: "Comprehensive follow-up care and monitoring",
    content: "Receive comprehensive follow-up care and monitoring to ensure your continued recovery and well-being.",
    features: [
      "Scheduled post-treatment check-ups",
      "Ongoing monitoring of your recovery",
      "Adjustments to your treatment plan",
      "Access to your medical team"
    ]
  },
  {
    title: "Rehabilitation Services",
    icon: Calendar,
    description: "Specialized rehabilitation programs",
    content: "Access specialized rehabilitation programs tailored to your specific needs and recovery goals.",
    features: [
      "Personalized rehabilitation programs",
      "Physical therapy sessions",
      "Occupational therapy",
      "Mental health support"
    ]
  },
  {
    title: "Travel Arrangements",
    icon: Plane,
    description: "Assistance with return journey",
    content: "Get assistance with planning your return journey, including any necessary travel accommodations.",
    features: [
      "Flight booking assistance",
      "Special travel arrangements",
      "Ground transportation",
      "Travel documentation support"
    ]
  },
  {
    title: "Remote Consultation",
    icon: PhoneCall,
    description: "Ongoing virtual care support",
    content: "Stay connected with your healthcare team through telemedicine and remote consultation services.",
    features: [
      "Video consultations",
      "Secure messaging system",
      "Remote monitoring",
      "Digital medical records access"
    ]
  }
]

const nextSteps = [
  {
    title: "Join Our Community",
    icon: Users,
    description: "Connect with other healthcare travelers and share your experiences.",
    link: "/community",
    buttonText: "Join Community",
    features: [
      "Connect with fellow patients",
      "Share recovery tips",
      "Access support groups",
      "Join virtual events"
    ]
  },
  {
    title: "Medical Directory",
    icon: Hospital,
    description: "Explore other healthcare services and specialists for future care.",
    link: "/medical-directory",
    buttonText: "Browse Directory",
    features: [
      "Find specialists",
      "Compare facilities",
      "Read patient reviews",
      "Book consultations"
    ]
  },
  {
    title: "Share Your Story",
    icon: Star,
    description: "Help others by sharing your healthcare travel experience.",
    link: "/testimonials/share",
    buttonText: "Share Experience",
    features: [
      "Write testimonials",
      "Upload photos",
      "Rate services",
      "Provide feedback"
    ]
  }
]

const additionalResources = [
  {
    title: "Support Forum",
    icon: MessageCircle,
    description: "Join discussions about recovery and wellness",
    link: "/forum"
  },
  {
    title: "Recovery Guidelines",
    icon: FileText,
    description: "Access detailed recovery and lifestyle guides",
    link: "/resources/recovery"
  }
]

export default function PostTreatment() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-28 pb-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Post-Treatment Care
          </h1>
          <p className="text-lg text-gray-600 mb-12">
            Your journey to health doesn&apos;t end with your treatment. We&apos;re committed to supporting 
            your full recovery and ensuring your smooth transition back home.
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
                    i === 3 ? 'bg-primary text-white' : 'bg-white border-2 border-gray-200'
                  }`}>
                    {i === 3 ? <CheckCircle className="w-5 h-5" /> : (i + 1)}
                  </div>
                  <span className={`ml-3 md:ml-0 md:mt-2 font-medium ${
                    i === 3 ? 'text-primary' : 'text-gray-500'
                  }`}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {postTreatmentServices.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                <CardHeader className="space-y-1 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <service.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-gray-600">{service.content}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-primary/60" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQs Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <Accordion type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How long should I stay for post-treatment care?</AccordionTrigger>
                    <AccordionContent>
                      The recommended stay duration varies depending on your procedure and recovery needs. 
                      Your healthcare team will provide specific guidance based on your treatment plan and progress.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I continue my follow-up care in my home country?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we can coordinate with healthcare providers in your home country and provide 
                      remote consultation services to ensure continuity of care after your return.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What support is available for international patients?</AccordionTrigger>
                    <AccordionContent>
                      We offer comprehensive support including travel arrangements, translation services, 
                      accommodation assistance, and coordination with your home healthcare providers.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </section>

          {/* Next Steps Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Continue Your Healthcare Journey</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextSteps.map((step, index) => (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all">
                  <CardHeader className="space-y-1">
                    <div className="p-2 rounded-lg bg-primary/10 w-fit">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                    <ul className="space-y-2 mb-6">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-primary/60" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href={step.link}>
                      <Button variant="outline" className="w-full">
                        {step.buttonText}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Additional Resources */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {additionalResources.map((resource, index) => (
                <Link href={resource.link} key={index}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <resource.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{resource.title}</h3>
                          <p className="text-sm text-gray-600">{resource.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>

          {/* Journey Navigation */}
          <JourneyNavigation currentStep="post-treatment" />

          {/* CTA Section */}
          <div className="mt-12">
            <Card className="bg-primary text-white border-none">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Need Support with Your Recovery?</h2>
                    <p className="text-white/90">Our post-treatment care team is here to assist you every step of the way.</p>
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

