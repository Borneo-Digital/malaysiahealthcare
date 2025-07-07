import { Metadata } from 'next'
import { Header } from '@/components/home4/header'
import { Footer } from '@/components/home4/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/home4/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/home4/ui/container'
import { Search, HelpCircle, Plane, Hospital, DollarSign, Users, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Malaysia Healthcare Travel Council',
  description: 'Find answers to common questions about healthcare travel to Malaysia, including visa requirements, treatment options, costs, and more.',
}

const faqCategories = [
  {
    id: 'general',
    title: 'General Information',
    icon: HelpCircle,
    description: 'Basic questions about healthcare travel to Malaysia',
    color: 'bg-info/10 border-info/20 text-info',
    questions: [
      {
        question: 'What is Malaysia Healthcare Travel Council (MHTC)?',
        answer: 'MHTC is an agency under the Ministry of Health Malaysia that facilitates and promotes the healthcare travel industry in Malaysia. We connect international patients with accredited healthcare facilities and provide comprehensive support throughout their medical journey.'
      },
      {
        question: 'Why should I choose Malaysia for healthcare?',
        answer: 'Malaysia offers world-class healthcare at competitive prices, internationally accredited facilities, English-speaking medical professionals, modern infrastructure, and a multicultural environment. Our healthcare system combines advanced medical technology with warm Malaysian hospitality.'
      },
      {
        question: 'What languages are spoken in Malaysian hospitals?',
        answer: 'English is widely spoken in all Malaysian healthcare facilities. Many hospitals also have staff who speak Arabic, Mandarin, Bahasa Malaysia, and other languages to accommodate international patients.'
      },
      {
        question: 'Is Malaysia safe for medical tourists?',
        answer: 'Yes, Malaysia is one of the safest countries in Asia for medical tourism. Our hospitals maintain strict safety protocols, and the country has a low crime rate. All MHTC-accredited facilities follow international safety standards.'
      }
    ]
  },
  {
    id: 'visa-travel',
    title: 'Visa & Travel',
    icon: Plane,
    description: 'Information about visas, travel arrangements, and entry requirements',
    color: 'bg-success/10 border-success/20 text-success',
    questions: [
      {
        question: 'Do I need a visa to visit Malaysia for medical treatment?',
        answer: 'Most visitors can enter Malaysia without a visa for stays up to 90 days. If you require a longer stay for medical treatment, you may need to apply for a medical visa. MHTC can assist with visa applications and provide necessary documentation.'
      },
      {
        question: 'How far in advance should I plan my medical journey?',
        answer: 'We recommend planning your medical journey at least 4-6 weeks in advance. This allows sufficient time for hospital selection, appointment scheduling, visa processing, and travel arrangements. For complex procedures, earlier planning is advisable.'
      },
      {
        question: 'Can MHTC help with travel arrangements?',
        answer: 'Yes, MHTC provides comprehensive travel support including flight bookings, airport transfers, accommodation arrangements, and local transportation. We can also assist with special medical travel requirements.'
      },
      {
        question: 'What should I bring with me to Malaysia?',
        answer: 'Essential items include your passport, medical records, prescription medications, comfortable clothing, and any medical devices you use. We recommend bringing copies of all medical documents and having them translated to English if necessary.'
      }
    ]
  },
  {
    id: 'medical-treatment',
    title: 'Medical Treatment',
    icon: Hospital,
    description: 'Questions about medical procedures, hospitals, and treatment options',
    color: 'bg-mhtc-primary/10 border-mhtc-primary/20 text-mhtc-primary',
    questions: [
      {
        question: 'What medical procedures are available in Malaysia?',
        answer: 'Malaysia offers a comprehensive range of medical procedures including cardiology, oncology, orthopedics, fertility treatments, cosmetic surgery, dental care, and more. Our hospitals are equipped with state-of-the-art technology and staffed by internationally trained specialists.'
      },
      {
        question: 'How do I choose the right hospital and doctor?',
        answer: 'MHTC can help you find the right healthcare provider based on your medical needs, budget, and preferences. We consider factors such as hospital accreditations, specialist expertise, patient reviews, and location. Virtual consultations are available before your arrival.'
      },
      {
        question: 'Are Malaysian doctors qualified and experienced?',
        answer: 'Yes, Malaysian doctors are highly qualified with international training and certifications. Many specialists have trained in leading medical institutions worldwide and maintain active memberships in international medical associations.'
      },
      {
        question: 'Can I have a consultation before traveling to Malaysia?',
        answer: 'Yes, many MHTC member hospitals offer virtual consultations with specialists before your arrival. This allows you to discuss your condition, understand treatment options, and establish a relationship with your doctor before traveling.'
      },
      {
        question: 'What medical records should I bring?',
        answer: 'Bring all relevant medical records including test results, imaging reports, previous treatment history, and current medications. Having these translated to English is recommended if they\'re in another language.'
      }
    ]
  },
  {
    id: 'costs-payment',
    title: 'Costs & Payment',
    icon: DollarSign,
    description: 'Information about treatment costs, payment methods, and insurance',
    color: 'bg-warning/10 border-warning/20 text-warning',
    questions: [
      {
        question: 'How much do medical treatments cost in Malaysia?',
        answer: 'Medical costs in Malaysia are typically 30-70% lower than in Western countries while maintaining the same quality standards. Exact costs depend on the procedure, hospital, and individual medical requirements.'
      },
      {
        question: 'Can I get a cost estimate before arriving in Malaysia?',
        answer: 'Yes, MHTC member hospitals can provide detailed cost estimates based on your medical reports and treatment requirements. These estimates typically include hospital stay, physician fees, and procedure costs.'
      },
      {
        question: 'What payment methods are accepted by hospitals?',
        answer: 'MHTC member hospitals accept various payment methods including credit cards, bank transfers, and cash. Many hospitals require a deposit before confirming treatment. We recommend checking with your specific hospital about their payment policies.'
      },
      {
        question: 'Does my health insurance cover treatment in Malaysia?',
        answer: 'Coverage depends on your insurance provider and policy. Many international insurance companies have partnerships with Malaysian hospitals. MHTC can help verify your insurance coverage and assist with claims processing.'
      },
      {
        question: 'Are there any hidden costs I should be aware of?',
        answer: 'MHTC ensures transparency in pricing. All costs are clearly communicated upfront, including accommodation, transportation, and follow-up care. We provide comprehensive cost breakdowns to avoid any surprises.'
      }
    ]
  },
  {
    id: 'accommodation-support',
    title: 'Accommodation & Support',
    icon: Users,
    description: 'Questions about accommodation, patient support, and services',
    color: 'bg-error/10 border-error/20 text-error',
    questions: [
      {
        question: 'Where should I stay during my treatment?',
        answer: 'Many hospitals have partnerships with nearby hotels offering special rates for patients. Some hospitals provide on-site accommodations or serviced apartments. MHTC can assist with accommodation arrangements based on your needs and budget.'
      },
      {
        question: 'What support services are available for international patients?',
        answer: 'MHTC provides comprehensive support including airport pickup, translation services, cultural assistance, travel coordination, and 24/7 patient support. We also offer family accommodation and local area guidance.'
      },
      {
        question: 'Can family members accompany me during treatment?',
        answer: 'Yes, family members are welcome to accompany you. Many hospitals provide family accommodation options, and MHTC can assist with arrangements for family members including visa applications and local support.'
      },
      {
        question: 'Is there language support available?',
        answer: 'Yes, most hospitals provide translation services and have multilingual staff. MHTC can arrange for interpreters if needed, and many hospitals have dedicated international patient coordinators who speak multiple languages.'
      }
    ]
  },
  {
    id: 'post-treatment',
    title: 'Post-Treatment Care',
    icon: Shield,
    description: 'Information about follow-up care, recovery, and aftercare services',
    color: 'bg-info/10 border-info/20 text-info',
    questions: [
      {
        question: 'How long should I stay for post-treatment care?',
        answer: 'The recommended stay duration varies depending on your procedure and recovery needs. Your healthcare team will provide specific guidance based on your treatment plan and progress. MHTC can help arrange extended stays if needed.'
      },
      {
        question: 'Can I continue my follow-up care in my home country?',
        answer: 'Yes, we can coordinate with healthcare providers in your home country and provide remote consultation services to ensure continuity of care after your return. Many hospitals offer telemedicine follow-up appointments.'
      },
      {
        question: 'What aftercare services are available?',
        answer: 'Post-treatment services include rehabilitation programs, medication management, wound care, physical therapy, and regular follow-up consultations. MHTC coordinates all aftercare services to ensure optimal recovery.'
      },
      {
        question: 'How do I maintain contact with my Malaysian healthcare team?',
        answer: 'Your healthcare team remains available for consultations and support after your return home. We provide secure communication channels, telemedicine appointments, and regular check-ins to monitor your recovery progress.'
      }
    ]
  }
]

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-grey-50">
      <Header />
      
      <main className="pt-20 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-mhtc-primary to-mhtc-primary-hover py-16">
          <Container>
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="bg-white text-mhtc-primary border-white mb-6">
                <HelpCircle className="h-4 w-4 mr-2" />
                Support & Information
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-grey-900">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-grey-700 mb-8">
                Find answers to common questions about healthcare travel to Malaysia. 
                Can&apos;t find what you&apos;re looking for? Contact our support team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grey-500 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search FAQs..."
                    className="w-full pl-10 pr-4 py-3 rounded-lg border-0 text-grey-900 placeholder-grey-500 focus:ring-2 focus:ring-white/50 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Categories */}
        <section className="py-16">
          <Container>
            <div className="space-y-12">
              {faqCategories.map((category) => (
                <Card key={category.id} className="border-0 shadow-lg">
                  <CardHeader className="pb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-grey-900">
                          {category.title}
                        </CardTitle>
                        <p className="text-grey-600 mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) => (
                        <AccordionItem key={index} value={`${category.id}-${index}`}>
                          <AccordionTrigger className="text-left hover:no-underline text-grey-900 font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-grey-700 leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Support Section */}
        <section className="bg-grey-50 py-16 border-t border-grey-200">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-grey-900 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-lg text-grey-600 mb-8">
                Our healthcare travel coordinators are here to help you plan your medical journey to Malaysia. 
                Get personalized assistance and answers to all your questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-mhtc-primary hover:bg-mhtc-primary-hover text-white"
                  asChild
                >
                  <a href="/contact">Contact Our Team</a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-mhtc-primary text-mhtc-primary hover:bg-mhtc-primary hover:text-white"
                  asChild
                >
                  <a href="/plan">Plan Your Visit</a>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  )
} 