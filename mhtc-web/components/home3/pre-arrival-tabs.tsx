"use client"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/home3/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, FileText, Globe, Mail, MapPin, Phone } from "lucide-react"

export function PreArrivalTabs() {
  return (
    <Tabs defaultValue="visa" className="w-full">
      <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 md:grid-cols-4">
        <TabsTrigger value="visa" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          Visa Requirements
        </TabsTrigger>
        <TabsTrigger value="hospitals" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          MHTC Member Hospitals
        </TabsTrigger>
        <TabsTrigger value="planning" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          Treatment Planning
        </TabsTrigger>
        <TabsTrigger value="contact" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
          Contact Assistance
        </TabsTrigger>
      </TabsList>

      {/* Visa Requirements Tab */}
      <TabsContent value="visa" className="animate-fade-in">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Medical Travel Visa Information</h3>
            <p className="mb-6 text-muted-foreground">
              Malaysia offers special visa considerations for medical travelers. The requirements vary based on your
              country of origin and the duration of your stay.
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">eVISA for Medical Tourism</h4>
                <p className="text-sm text-muted-foreground">
                  For stays up to 30 days, medical travelers can apply for an eVISA specifically designed for healthcare
                  purposes. This can be extended if required for medical reasons.
                </p>
                <div className="mt-3 flex items-center text-sm text-[#C8102E]">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span>Processing time: 3-5 working days</span>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">Medical Attendant Visa</h4>
                <p className="text-sm text-muted-foreground">
                  Family members or companions accompanying a medical traveler can apply for a Medical Attendant Visa,
                  allowing them to stay with the patient during treatment.
                </p>
                <div className="mt-3 flex items-center text-sm text-[#C8102E]">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  <span>Up to 2 companions per patient</span>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-4 shadow-sm">
                <h4 className="mb-2 font-semibold">Visa-Free Entry</h4>
                <p className="text-sm text-muted-foreground">
                  Citizens of many countries enjoy visa-free entry to Malaysia for short stays. Check if your country
                  qualifies for visa-free entry for medical purposes.
                </p>
                <div className="mt-3 flex items-center text-sm text-[#C8102E]">
                  <Globe className="mr-2 h-4 w-4" />
                  <span>Available for citizens of over 60 countries</span>
                </div>
              </div>
            </div>

            <Button className="bg-[#C8102E] hover:bg-[#A00F26]">Check Visa Requirements for Your Country</Button>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Required Documents</h4>
              <ul className="space-y-3">
                {[
                  "Valid passport with at least 6 months validity",
                  "Completed visa application form",
                  "Recent passport-sized photographs",
                  "Confirmation letter from MHTC member hospital",
                  "Proof of sufficient funds for treatment and stay",
                  "Return flight ticket",
                  "Travel insurance (recommended)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-[#C8102E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Visa+Process"
                alt="Malaysia medical visa application process"
                width={600}
                height={300}
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Visa Application Guide
                </Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Need Assistance?</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Our MHTC Concierge team can help facilitate your visa application process and provide guidance specific
                to your country of origin.
              </p>
              <Button variant="outline" className="w-full">
                Contact Visa Assistance Team
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* MHTC Member Hospitals Tab */}
      <TabsContent value="hospitals" className="animate-fade-in">
        <div className="mb-8">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold">MHTC Member Hospitals</h3>
              <p className="text-muted-foreground">
                Browse our network of internationally accredited healthcare providers
              </p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Specialty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Specialties</SelectItem>
                  <SelectItem value="cardiology">Cardiology</SelectItem>
                  <SelectItem value="oncology">Oncology</SelectItem>
                  <SelectItem value="orthopedics">Orthopedics</SelectItem>
                  <SelectItem value="fertility">Fertility</SelectItem>
                  <SelectItem value="neurology">Neurology</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
                  <SelectItem value="penang">Penang</SelectItem>
                  <SelectItem value="melaka">Melaka</SelectItem>
                  <SelectItem value="johor">Johor</SelectItem>
                  <SelectItem value="sabah">Sabah</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((hospital) => (
              <Card key={hospital} className="overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-48">
                  <Image
                    src={`/placeholder.svg?height=300&width=600&text=Hospital+${hospital}`}
                    alt={`Hospital ${hospital}`}
                    fill
                    className="object-cover"
                  />
                  {hospital <= 3 && (
                    <div className="absolute left-4 top-4 rounded-full bg-[#C8102E] px-3 py-1 text-xs font-medium text-white">
                      Elite Partner
                    </div>
                  )}
                </div>
                <CardHeader className="pb-2">
                  <CardTitle>Hospital Name {hospital}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="mr-1 h-3 w-3" />
                    {["Kuala Lumpur", "Penang", "Melaka", "Johor", "Selangor", "Sabah"][hospital % 6]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="mb-3 flex flex-wrap gap-1">
                    {["Cardiology", "Oncology", "Orthopedics", "Neurology", "Fertility"]
                      .slice(0, (hospital % 3) + 2)
                      .map((specialty, index) => (
                        <span key={index} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
                          {specialty}
                        </span>
                      ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Internationally accredited hospital offering specialized care with state-of-the-art facilities and
                    multilingual staff.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    View Hospital Profile
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Button>View All Hospitals</Button>
          </div>
        </div>
      </TabsContent>

      {/* Treatment Planning Tab */}
      <TabsContent value="planning" className="animate-fade-in">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Planning Your Treatment</h3>
            <p className="mb-6 text-muted-foreground">
              Proper preparation is essential for a successful healthcare journey. Follow these steps to ensure you're
              ready for your medical treatment in Malaysia.
            </p>

            <div className="mb-6 space-y-6">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold">Before You Travel</h4>
                <ul className="space-y-4">
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      1
                    </span>
                    <div>
                      <h5 className="font-medium">Medical Records</h5>
                      <p className="text-sm text-muted-foreground">
                        Gather all relevant medical records, test results, and imaging reports. Have them translated to
                        English if necessary.
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      2
                    </span>
                    <div>
                      <h5 className="font-medium">Physician Consultation</h5>
                      <p className="text-sm text-muted-foreground">
                        Schedule a virtual consultation with your Malaysian healthcare provider to discuss your
                        treatment plan and any pre-treatment requirements.
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      3
                    </span>
                    <div>
                      <h5 className="font-medium">Cost Estimation</h5>
                      <p className="text-sm text-muted-foreground">
                        Request a detailed cost estimate for your treatment, including hospital stay, physician fees,
                        and potential additional expenses.
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      4
                    </span>
                    <div>
                      <h5 className="font-medium">Payment Arrangements</h5>
                      <p className="text-sm text-muted-foreground">
                        Understand payment options and make necessary arrangements. Many hospitals require a deposit
                        before confirming treatment.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="mb-3 text-xl font-semibold">Travel Preparations</h4>
                <ul className="space-y-4">
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      1
                    </span>
                    <div>
                      <h5 className="font-medium">Accommodation</h5>
                      <p className="text-sm text-muted-foreground">
                        Book accommodation near your hospital. Many MHTC member hospitals offer special rates at nearby
                        hotels or have on-site accommodations.
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      2
                    </span>
                    <div>
                      <h5 className="font-medium">Travel Insurance</h5>
                      <p className="text-sm text-muted-foreground">
                        Purchase comprehensive travel insurance that covers medical emergencies and trip cancellations.
                      </p>
                    </div>
                  </li>
                  <li className="grid grid-cols-[24px_1fr] gap-4">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                      3
                    </span>
                    <div>
                      <h5 className="font-medium">Local Currency</h5>
                      <p className="text-sm text-muted-foreground">
                        Arrange to have Malaysian Ringgit (MYR) for incidental expenses during your stay.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Treatment Cost Estimator</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Get a general estimate for common procedures. Please note that actual costs may vary based on individual
                medical needs.
              </p>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="treatment-type">Treatment Type</Label>
                  <Select defaultValue="select">
                    <SelectTrigger id="treatment-type">
                      <SelectValue placeholder="Select treatment" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="select">Select treatment</SelectItem>
                      <SelectItem value="heart-bypass">Coronary Artery Bypass</SelectItem>
                      <SelectItem value="knee-replacement">Total Knee Replacement</SelectItem>
                      <SelectItem value="hip-replacement">Hip Replacement</SelectItem>
                      <SelectItem value="ivf">IVF Treatment</SelectItem>
                      <SelectItem value="health-screening">Comprehensive Health Screening</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="hospital-tier">Hospital Tier</Label>
                  <Select defaultValue="select">
                    <SelectTrigger id="hospital-tier">
                      <SelectValue placeholder="Select hospital tier" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="select">Select hospital tier</SelectItem>
                      <SelectItem value="elite">Elite Partner Hospital</SelectItem>
                      <SelectItem value="standard">Standard Partner Hospital</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full bg-[#C8102E] hover:bg-[#A00F26]">Get Cost Estimate</Button>
              </div>
            </div>

            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Pre-Treatment Checklist</h4>
              <ul className="space-y-3">
                {[
                  "Confirm your appointment dates with the hospital",
                  "Arrange for a companion if necessary",
                  "Pack all necessary medications in original packaging",
                  "Bring comfortable clothing suitable for your treatment",
                  "Prepare a list of questions for your doctor",
                  "Arrange for post-treatment care if required",
                  "Download useful apps (translation, maps, etc.)",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="mr-2 mt-0.5 h-4 w-4 text-[#C8102E]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Download Complete Checklist
                </Button>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=300&width=600&text=Treatment+Planning"
                alt="Treatment planning guide"
                width={600}
                height={300}
                className="w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Watch Treatment Planning Guide
                </Button>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>

      {/* Contact Assistance Tab */}
      <TabsContent value="contact" className="animate-fade-in">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Contact Assistance</h3>
            <p className="mb-6 text-muted-foreground">
              Our dedicated team is ready to assist you with any questions or concerns about your healthcare journey to
              Malaysia. Reach out to us through any of the following channels.
            </p>

            <div className="mb-6 space-y-4">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="mb-4 text-xl font-semibold">MHTC Concierge</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">Call Center</h5>
                      <p className="text-sm text-muted-foreground">+603 2726 8688</p>
                      <p className="text-xs text-muted-foreground">
                        Operating hours: 9:00 AM - 6:00 PM (GMT+8), Monday to Friday
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">Email</h5>
                      <p className="text-sm text-muted-foreground">callcentre@mhtc.org.my</p>
                      <p className="text-xs text-muted-foreground">Response time: Within 24 hours on business days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">Headquarters</h5>
                      <p className="text-sm text-muted-foreground">
                        Level 31, Menara MHTC, Jalan Ampang, 50450 Kuala Lumpur, Malaysia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h4 className="mb-4 text-xl font-semibold">International Offices</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">Indonesia Office</h5>
                      <p className="text-sm text-muted-foreground">Wisma GKBI, Jl. Jend. Sudirman No.28, Jakarta</p>
                      <p className="text-sm text-muted-foreground">Phone: +62 21 5785 3454</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">Bangladesh Office</h5>
                      <p className="text-sm text-muted-foreground">
                        House 55, Road 8, Block D, Niketan, Gulshan, Dhaka
                      </p>
                      <p className="text-sm text-muted-foreground">Phone: +880 1841 464646</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Globe className="mr-3 h-5 w-5 text-[#C8102E]" />
                    <div>
                      <h5 className="font-medium">China Office</h5>
                      <p className="text-sm text-muted-foreground">
                        Room 1601, Tower 1, Bright China Chang An Building, Beijing
                      </p>
                      <p className="text-sm text-muted-foreground">Phone: +86 10 6410 4114</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Send Us a Message</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country of Residence</Label>
                  <Select>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="indonesia">Indonesia</SelectItem>
                      <SelectItem value="china">China</SelectItem>
                      <SelectItem value="india">India</SelectItem>
                      <SelectItem value="bangladesh">Bangladesh</SelectItem>
                      <SelectItem value="australia">Australia</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="usa">United States</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="inquiry-type">Type of Inquiry</Label>
                  <Select>
                    <SelectTrigger id="inquiry-type">
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="treatment">Treatment Information</SelectItem>
                      <SelectItem value="hospital">Hospital Selection</SelectItem>
                      <SelectItem value="visa">Visa Assistance</SelectItem>
                      <SelectItem value="cost">Cost Estimation</SelectItem>
                      <SelectItem value="travel">Travel Arrangements</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry"
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#C8102E] hover:bg-[#A00F26]">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            <div className="mt-6 rounded-lg border bg-card p-6 shadow-sm">
              <h4 className="mb-4 text-xl font-semibold">Connect with a Referral Agent</h4>
              <p className="mb-4 text-sm text-muted-foreground">
                MHTC works with authorized referral agents in various countries who can provide personalized assistance
                in your local language.
              </p>
              <Button variant="outline" className="w-full">
                Find a Referral Agent in Your Country
              </Button>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}

