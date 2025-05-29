"use client"

import { FileText, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function ResourcesSection() {
  return (
    <Tabs defaultValue="checklists" className="w-full">
      <TabsList className="mb-6 grid w-full grid-cols-3 gap-2">
        <TabsTrigger value="checklists" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          Checklists
        </TabsTrigger>
        <TabsTrigger value="faqs" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          FAQs
        </TabsTrigger>
        <TabsTrigger value="links" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          Helpful Links
        </TabsTrigger>
      </TabsList>

      <TabsContent value="checklists" className="animate-fade-in">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Pre-Arrival Checklist",
              description: "Essential items to prepare before your journey to Malaysia",
              icon: FileText,
            },
            {
              title: "Medical Records Guide",
              description: "List of medical records to bring for your treatment",
              icon: FileText,
            },
            {
              title: "Travel Document Checklist",
              description: "Passport, visa, and other travel documents you'll need",
              icon: FileText,
            },
            {
              title: "Hospital Appointment Guide",
              description: "How to schedule and prepare for your hospital appointments",
              icon: FileText,
            },
            {
              title: "Accommodation Checklist",
              description: "Tips for selecting and booking your accommodation",
              icon: FileText,
            },
            {
              title: "Payment Preparation Guide",
              description: "Understanding payment options and financial preparation",
              icon: FileText,
            },
          ].map((checklist, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <checklist.icon className="h-8 w-8 text-[#C8102E]" />
                <CardTitle className="text-lg">{checklist.title}</CardTitle>
                <CardDescription>{checklist.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="faqs" className="animate-fade-in">
        <Card>
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do I need a special visa to receive medical treatment in Malaysia?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    While Malaysia offers visa-free entry for many countries for short stays, medical travelers can
                    apply for an eVISA specifically designed for healthcare purposes. This can be extended if required
                    for medical reasons. MHTC can assist with the visa application process.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How far in advance should I plan my medical journey?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    We recommend planning your medical journey at least 4-6 weeks in advance. This allows sufficient
                    time for hospital selection, appointment scheduling, visa processing, and travel arrangements. For
                    complex procedures, earlier planning is advisable.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Can I get a cost estimate before arriving in Malaysia?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, MHTC member hospitals can provide cost estimates based on your medical reports and treatment
                    requirements. These estimates typically include hospital stay, physician fees, and procedure costs.
                    However, final costs may vary based on your specific medical condition.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do I need to bring my medical records?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, it&apos;s essential to bring all relevant medical records, including test results, imaging reports,
                    and previous treatment history. Having these translated to English is recommended if they&apos;re in
                    another language. This helps Malaysian healthcare providers understand your medical history.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I have a virtual consultation before traveling?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, many MHTC member hospitals offer virtual consultations with specialists before your arrival.
                    This allows you to discuss your condition, understand treatment options, and establish a
                    relationship with your doctor before traveling to Malaysia.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>What payment methods are accepted by hospitals?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    MHTC member hospitals typically accept various payment methods including credit cards, bank
                    transfers, and cash. Many hospitals require a deposit before confirming treatment. It&apos;s advisable to
                    check with your specific hospital about their payment policies.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger>Should I arrange accommodation before arrival?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Yes, we recommend arranging accommodation before your arrival. Many hospitals have partnerships with
                    nearby hotels offering special rates for patients. Some hospitals also provide on-site
                    accommodations or serviced apartments for longer stays. MHTC can assist with accommodation
                    arrangements.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="links" className="animate-fade-in">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Malaysia Immigration Department",
              description: "Official website for visa information and requirements",
              url: "https://www.imi.gov.my/",
            },
            {
              title: "Ministry of Health Malaysia",
              description: "Information about healthcare services and facilities",
              url: "https://www.moh.gov.my/",
            },
            {
              title: "Tourism Malaysia",
              description: "Travel information and attractions in Malaysia",
              url: "https://www.malaysia.travel/",
            },
            {
              title: "Malaysian Medical Association",
              description: "Information about medical practitioners in Malaysia",
              url: "https://www.mma.org.my/",
            },
            {
              title: "Malaysian Airlines",
              description: "National carrier with special assistance for medical travelers",
              url: "https://www.malaysiaairlines.com/",
            },
            {
              title: "Currency Converter",
              description: "Convert your currency to Malaysian Ringgit (MYR)",
              url: "https://www.xe.com/",
            },
          ].map((link, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">{link.title}</CardTitle>
                <CardDescription>{link.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button variant="outline" className="w-full" onClick={() => window.open(link.url, "_blank")}>
                  Visit Website
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}

