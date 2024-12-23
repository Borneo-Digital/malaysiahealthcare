import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Plane, Hospital, Clipboard, Calculator } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pre-Arrival Information | Malaysia Healthcare Travel Council',
  description: 'Plan your healthcare journey to Malaysia with essential pre-arrival information including visa requirements, hospital selection, treatment planning, and cost estimation.',
}

const preArrivalSteps = [
  {
    title: "Visa Requirements",
    icon: Plane,
    content: "Learn about the visa requirements for medical travel to Malaysia. Most visitors can enter Malaysia without a visa for stays up to 90 days.",
    link: "#visa-requirements"
  },
  {
    title: "Hospital Selection",
    icon: Hospital,
    content: "Browse our curated list of world-class hospitals and healthcare facilities across Malaysia.",
    link: "#hospital-selection"
  },
  {
    title: "Treatment Planning",
    icon: Clipboard,
    content: "Understand the process of planning your treatment, from initial consultations to scheduling procedures.",
    link: "#treatment-planning"
  },
  {
    title: "Cost Estimation",
    icon: Calculator,
    content: "Get an overview of healthcare costs in Malaysia and learn how to obtain detailed estimates for your treatment.",
    link: "#cost-estimation"
  }
]

export default function PreArrival() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-6">Pre-Arrival Information</h1>
      <p className="text-xl text-gray-600 mb-12">
        Planning your healthcare journey to Malaysia is an important step towards receiving world-class medical care. Here's everything you need to know before you arrive.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {preArrivalSteps.map((step, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <step.icon className="mr-2 h-6 w-6 text-primary" />
                {step.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{step.content}</p>
              <Link href={step.link}>
                <Button variant="outline">Learn More</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <section id="visa-requirements" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visa Requirements</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do I need a visa to enter Malaysia for medical treatment?</AccordionTrigger>
            <AccordionContent>
              Most visitors can enter Malaysia without a visa for stays up to 90 days. However, if you plan to stay longer or are from a country that requires a visa, you may need to apply for a medical visa. We recommend checking with the Malaysian embassy or consulate in your country for the most up-to-date information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How do I apply for a medical visa?</AccordionTrigger>
            <AccordionContent>
              To apply for a medical visa, you'll need to provide:
              <ul className="list-disc pl-5 mt-2">
                <li>A valid passport</li>
                <li>Completed visa application form</li>
                <li>Recent passport-sized photographs</li>
                <li>Letter from the hospital in Malaysia confirming your treatment</li>
                <li>Proof of sufficient funds for your stay</li>
                <li>Return ticket</li>
              </ul>
              Contact your nearest Malaysian embassy or consulate for detailed application procedures.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section id="hospital-selection" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Hospital Selection</h2>
        <p className="mb-4">
          Malaysia offers a wide range of internationally accredited hospitals and medical facilities. Our healthcare providers are known for their state-of-the-art technology, skilled medical professionals, and high standards of care.
        </p>
        <Link href="/medical-directory">
          <Button>Browse Medical Directory</Button>
        </Link>
      </section>

      <section id="treatment-planning" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Treatment Planning</h2>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Research and choose your preferred hospital or healthcare provider</li>
          <li>Contact the hospital's international patient center</li>
          <li>Provide your medical records and receive an initial assessment</li>
          <li>Discuss treatment options and receive a treatment plan</li>
          <li>Schedule your appointment or procedure</li>
          <li>Make travel arrangements</li>
        </ol>
      </section>

      <section id="cost-estimation" className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Cost Estimation</h2>
        <p className="mb-4">
          Healthcare costs in Malaysia are generally lower compared to many Western countries, without compromising on quality. To get an accurate cost estimate:
        </p>
        <ul className="list-disc pl-5 mb-4">
          <li>Contact your chosen hospital's international patient center</li>
          <li>Provide detailed information about your condition and required treatment</li>
          <li>Request a detailed breakdown of estimated costs</li>
          <li>Inquire about payment methods and any available packages</li>
        </ul>
        <p>
          Remember to factor in additional costs such as accommodation, meals, and transportation when budgeting for your medical trip.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Need Assistance?</CardTitle>
          <CardDescription>Our team is here to help you plan your healthcare journey to Malaysia.</CardDescription>
        </CardHeader>
        <CardContent>
          <Button>Contact Us</Button>
        </CardContent>
      </Card>
    </div>
  )
}

