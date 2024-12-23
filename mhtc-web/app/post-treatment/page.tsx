import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Calendar, Plane, PhoneCall } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Post-Treatment Care | Malaysia Healthcare Travel Council',
  description: 'Learn about post-treatment care, follow-up services, and support available after your medical treatment in Malaysia.',
}

const postTreatmentServices = [
  {
    title: "Follow-Up Care",
    icon: CheckCircle,
    content: "Receive comprehensive follow-up care and monitoring to ensure your continued recovery and well-being.",
    link: "#follow-up-care"
  },
  {
    title: "Rehabilitation Services",
    icon: Calendar,
    content: "Access specialized rehabilitation programs tailored to your specific needs and recovery goals.",
    link: "#rehabilitation"
  },
  {
    title: "Travel Arrangements",
    icon: Plane,
    content: "Get assistance with planning your return journey, including any necessary travel accommodations.",
    link: "#travel-arrangements"
  },
  {
    title: "Remote Consultation",
    icon: PhoneCall,
    content: "Stay connected with your healthcare team through telemedicine and remote consultation services.",
    link: "#remote-consultation"
  }
]

export default function PostTreatment() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Post-Treatment Care</h1>
      <p className="text-xl text-gray-600 mb-12">
        Your journey to health doesn't end with your treatment. We're committed to supporting your full recovery and ensuring your smooth transition back home.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {postTreatmentServices.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <service.icon className="mr-2 h-6 w-6 text-primary" />
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{service.content}</p>
              <Link href={service.link}>
                <Button variant="outline">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <section id="follow-up-care" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Follow-Up Care</h2>
        <p className="mb-4">
          Our commitment to your health extends beyond your initial treatment. We provide comprehensive follow-up care to monitor your progress and address any concerns.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Scheduled post-treatment check-ups</li>
          <li>Ongoing monitoring of your recovery</li>
          <li>Adjustments to your treatment plan as needed</li>
          <li>Access to your medical team for questions and concerns</li>
        </ul>
        <p className="mb-4">
          Your healthcare provider will create a personalized follow-up care plan tailored to your specific needs and treatment.
        </p>
      </section>

      <section id="rehabilitation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Rehabilitation Services</h2>
        <div className="mb-6">
          <Image
            src="/placeholder.svg?height=300&width=600&text=Rehabilitation+Facility"
            alt="State-of-the-art rehabilitation facility"
            width={600}
            height={300}
            className="rounded-lg"
          />
        </div>
        <p className="mb-4">
          Our rehabilitation services are designed to help you regain strength, mobility, and independence following your treatment.
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Personalized rehabilitation programs</li>
          <li>Physical therapy and occupational therapy</li>
          <li>Speech and language therapy (if applicable)</li>
          <li>Nutritional counseling</li>
          <li>Mental health support</li>
        </ul>
        <p className="mb-4">
          Our team of rehabilitation specialists will work closely with you to set achievable goals and track your progress throughout your recovery journey.
        </p>
      </section>

      <section id="travel-arrangements" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Travel Arrangements</h2>
        <p className="mb-4">
          We understand that planning your return journey can be challenging, especially after a medical procedure. Our team is here to assist you with all aspects of your travel arrangements.
        </p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What travel assistance is available?</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5">
                <li>Booking or rescheduling flights</li>
                <li>Arranging special accommodations (e.g., wheelchair assistance, oxygen supply)</li>
                <li>Coordinating ground transportation</li>
                <li>Assistance with travel insurance claims</li>
                <li>Guidance on necessary travel documents for your return journey</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>When should I plan my return journey?</AccordionTrigger>
            <AccordionContent>
              The timing of your return journey will depend on your specific treatment and recovery progress. Your healthcare team will advise you on the appropriate time to travel and any necessary precautions. Generally, we recommend allowing sufficient time for initial recovery and any immediate follow-up appointments before planning your departure.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="remote-consultation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Remote Consultation Services</h2>
        <p className="mb-4">
          To ensure continuity of care after you return home, we offer remote consultation services that allow you to stay connected with your healthcare team in Malaysia.
        </p>
        <Card>
          <CardHeader>
            <CardTitle>Telemedicine Services</CardTitle>
            <CardDescription>Stay connected with your healthcare providers from anywhere in the world.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 mb-4">
              <li>Video consultations with your specialists</li>
              <li>Secure messaging system for non-urgent inquiries</li>
              <li>Remote monitoring of vital signs and symptoms (where applicable)</li>
              <li>Digital access to your medical records and treatment plans</li>
            </ul>
            <p>
              Our telemedicine platform is user-friendly and secure, ensuring that you can easily access the care you need, no matter where you are.
            </p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6">Continuing Your Healthcare Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Medication Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Receive guidance on managing your medications after returning home, including:
              </p>
              <ul className="list-disc pl-5">
                <li>Detailed medication schedules</li>
                <li>Information on potential side effects</li>
                <li>Assistance with obtaining necessary prescriptions</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lifestyle Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Get personalized advice on maintaining your health post-treatment:
              </p>
              <ul className="list-disc pl-5">
                <li>Dietary guidelines</li>
                <li>Exercise recommendations</li>
                <li>Stress management techniques</li>
                <li>Tips for a healthy lifestyle</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Need Assistance with Your Post-Treatment Care?</CardTitle>
          <CardDescription>Our team is here to support you throughout your recovery journey.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Contact Our Post-Treatment Support Team</Button>
        </CardContent>
      </Card>
    </div>
  )
}

