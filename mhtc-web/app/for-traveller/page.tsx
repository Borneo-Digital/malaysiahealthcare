import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plane, Hotel, Car, CreditCard, Stethoscope, Users, Calendar, HelpCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'For Travellers | Malaysia Healthcare Travel Council',
  description: 'Plan your healthcare journey to Malaysia with essential information and resources for medical travellers.',
}

const quickLinks = [
  { icon: Plane, title: 'Visa Information', description: 'Entry requirements and visa processes' },
  { icon: Hotel, title: 'Accommodation', description: 'Find suitable places to stay' },
  { icon: Car, title: 'Local Transportation', description: 'Getting around in Malaysia' },
  { icon: CreditCard, title: 'Financial Planning', description: 'Costs and payment information' },
]

const journeyStages = [
  { title: 'Pre-Arrival', description: 'Prepare for your trip', icon: Calendar },
  { title: 'Arrival', description: 'Your welcome to Malaysia', icon: Plane },
  { title: 'Treatment', description: 'World-class healthcare', icon: Stethoscope },
  { title: 'Post-Treatment', description: 'Recovery and beyond', icon: Users },
]

const faqs = [
  {
    question: 'What medical procedures are available in Malaysia?',
    answer: 'Malaysia offers a wide range of medical procedures including cardiology, oncology, orthopedics, fertility treatments, and more. Our hospitals are equipped with state-of-the-art technology and staffed by internationally trained medical professionals.'
  },
  {
    question: 'How do I choose a healthcare provider?',
    answer: 'You can browse our Medical Directory to find accredited hospitals and specialists. We recommend considering factors such as the hospital\'s specialties, accreditations, patient reviews, and location. Our team can also assist you in finding the right healthcare provider for your needs.'
  },
  {
    question: 'What are the visa requirements for medical travel?',
    answer: 'Most visitors can enter Malaysia without a visa for stays up to 90 days. If you require a longer stay for medical treatment, you may need to apply for a medical visa. We can assist you with the visa application process and provide necessary documentation from your chosen hospital.'
  },
  {
    question: 'Are there English-speaking staff at hospitals?',
    answer: 'Yes, most hospitals in Malaysia that cater to international patients have English-speaking staff. Many medical professionals in Malaysia are trained internationally and are fluent in English. Some hospitals also offer translation services for other languages.'
  },
]

export default function ForTraveller() {
  return (
    <div className="container mx-auto px-4 py-8 sm:py-16 mt-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6" tabIndex={0}>For Travellers</h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-3xl" tabIndex={0}>
        Plan your healthcare journey to Malaysia with confidence. We're here to guide you through every step of your medical travel experience.
      </p>

      {/* Quick Links Section */}
      <section className="mb-8 sm:mb-16" aria-labelledby="quick-links-title">
        <h2 id="quick-links-title" className="text-2xl font-semibold mb-4 sm:mb-6" tabIndex={0}>Essential Travel Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {quickLinks.map((link, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <link.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" aria-hidden="true" />
                <CardTitle>{link.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{link.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <span className="sr-only">Learn more about {link.title}</span>
                  Learn More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Healthcare Journey Section */}
      <section className="mb-8 sm:mb-16" aria-labelledby="journey-title">
        <h2 id="journey-title" className="text-2xl font-semibold mb-4 sm:mb-6" tabIndex={0}>Your Healthcare Journey</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {journeyStages.map((stage, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <stage.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2" aria-hidden="true" />
                <CardTitle>{stage.title}</CardTitle>
                <CardDescription>{stage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">Learn about what to expect and how to prepare for this stage of your journey.</p>
              </CardContent>
              <CardFooter>
                <Link href={`/journey/${stage.title.toLowerCase()}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    <span className="sr-only">Explore {stage.title} stage</span>
                    Explore Stage
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mb-8 sm:mb-16" aria-labelledby="faq-title">
        <h2 id="faq-title" className="text-2xl font-semibold mb-4 sm:mb-6" tabIndex={0}>Frequently Asked Questions</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <HelpCircle className="h-5 w-5 sm:h-6 sm:w-6 mr-2 text-primary" aria-hidden="true" />
              Common Questions About Healthcare Travel
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <span className="sr-only">View all frequently asked questions</span>
              View All FAQs
            </Button>
          </CardFooter>
        </Card>
      </section>

      {/* Testimonials Section */}
      <section className="mb-8 sm:mb-16" aria-labelledby="testimonials-title">
        <h2 id="testimonials-title" className="text-2xl font-semibold mb-4 sm:mb-6" tabIndex={0}>Patient Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[1, 2, 3].map((testimonial) => (
            <Card key={testimonial} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <Image
                    src={`/placeholder.svg?height=50&width=50&text=Patient+${testimonial}`}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <CardTitle className="text-lg">Patient Name</CardTitle>
                    <CardDescription>Treatment Type</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/testimonials" className="text-primary hover:underline">
                  <span className="sr-only">Read full story of Patient {testimonial}</span>
                  Read Full Story →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section aria-labelledby="cta-title">
        <Card className="bg-primary text-white">
          <CardHeader>
            <CardTitle id="cta-title" className="text-xl sm:text-2xl" tabIndex={0}>Ready to Start Your Healthcare Journey?</CardTitle>
            <CardDescription className="text-white/80">
              Our team is here to assist you every step of the way.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4" tabIndex={0}>
              Get personalized support for your medical travel to Malaysia. We're here to answer your questions and help you plan your journey.
            </p>
          </CardContent>
          <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Button variant="secondary" className="w-full sm:w-auto">
              <span className="sr-only">Contact us for assistance</span>
              Contact Us
            </Button>
            <Button variant="outline" className="w-full sm:w-auto bg-transparent text-white hover:bg-white hover:text-primary">
              <span className="sr-only">Download our travel guide</span>
              Download Travel Guide
            </Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

