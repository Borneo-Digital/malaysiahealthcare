"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook,  Instagram, Youtube, Mail, Phone, MapPin, Clock, MessageCircle, Linkedin } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/home4/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-grey-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
          <div className="w-full max-w-sm">
            <Link href="/" className="mb-4 inline-block">
              <div className="relative h-10 w-40">
                <Image
                  src="/images/mhtc-logo.png"
                  alt="Malaysia Healthcare Travel Council"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="mb-4 text-sm text-grey-600">
              Malaysia Healthcare Travel Council (MHTC) is an agency under the Ministry of Health Malaysia that has been
              entrusted to facilitate and promote the healthcare travel industry in Malaysia.
            </p>
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-grey-900">Follow Us</h4>
              <div className="flex flex-wrap gap-2">
                <Link
                  href="https://www.linkedin.com/company/malaysia-healthcare-travel-council"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.facebook.com/mhtcmalaysia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="https://www.instagram.com/malaysiahealthcare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
                
                <Link
                  href="https://www.threads.com/@malaysiahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="Threads"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.002V0h3.75v12.002c0 2.834.5 5.076 1.5 6.726 1.001 1.65 2.4 2.775 4.2 3.375 1.8.6 3.9.9 6.3.9 2.4 0 4.5-.3 6.3-.9 1.8-.6 3.199-1.725 4.2-3.375 1-1.65 1.5-3.892 1.5-6.726V0h3.75v12.002c0 3.584-.85 6.438-2.55 8.489-1.85 2.304-4.603 3.485-8.184 3.509h-.007z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.tiktok.com/@malaysiahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="TikTok"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </Link>
                <Link
                  href="https://www.youtube.com/@MalaysiaHealthcareOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                  aria-label="YouTube"
                >
                  <Youtube className="h-4 w-4" />
                </Link>
                
              </div>
            </div>
          </div>

          {/* <div>
            <h3 className="mb-4 text-lg font-semibold text-grey-900">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/plan" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div> */}

          <div className="w-full max-w-sm">
            <h3 className="mb-4 text-lg font-semibold text-grey-900">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                <span className="text-grey-600">
                  Unit 13A-1, Level 13A, Block 2A, Plaza Sentral, 5 Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur, Malaysia
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                <div className="text-grey-600">
                  <div>+603 2785 1814</div>
                  <div className="text-xs text-grey-500 mt-1">Main Office</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                <span className="text-grey-600">callcentre@mhtc.org.my</span>
              </li>
            </ul>
          </div>

          <div className="w-full max-w-sm">
            <h3 className="mb-4 text-lg font-semibold text-grey-900">Newsletter</h3>
            <p className="mb-4 text-sm text-grey-600">
              Subscribe to our newsletter for the latest updates on healthcare travel in Malaysia.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white border-grey-300 focus:border-mhtc-primary focus:ring-mhtc-primary" 
              />
              <Button className="bg-mhtc-primary hover:bg-mhtc-primary-hover text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Additional Contact Information */}
        <div className="border-t border-grey-200 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
            {/* MH Concierge and Lounge */}
            <div className="w-full max-w-xs text-center">
              <h4 className="font-semibold text-grey-900 mb-3 flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2 text-mhtc-primary" />
                MH Concierge & Lounge
              </h4>
              <div className="space-y-2 text-sm text-grey-600">
                <div>+603 8776 6168 (KLIA)</div>
                <div>+604 643 1626 (PIA)</div>
              </div>
            </div>

            {/* Call Centre */}
            <div className="w-full max-w-xs text-center">
              <h4 className="font-semibold text-grey-900 mb-3 flex items-center justify-center">
                <Phone className="h-4 w-4 mr-2 text-mhtc-primary" />
                Call Centre
              </h4>
              <div className="space-y-2 text-sm text-grey-600">
                <div>+603 8776 6168</div>
                <div className="flex items-center justify-center text-xs text-grey-500">
                  <Clock className="h-3 w-3 mr-1" />
                  Mon – Sunday (9.00am – 6.00pm)
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="w-full max-w-xs text-center">
              <h4 className="font-semibold text-grey-900 mb-3 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 mr-2 text-mhtc-primary" />
                WhatsApp
              </h4>
              <div className="space-y-2 text-sm text-grey-600">
                <div>+6018 870 0100</div>
                <div className="flex items-center justify-center text-xs text-grey-500">
                  <Clock className="h-3 w-3 mr-1" />
                  Mon – Sunday (9.00am – 6.00pm)
                </div>
              </div>
            </div>

            {/* MHRO Indonesia */}
            <div className="w-full max-w-xs text-center">
              <h4 className="font-semibold text-grey-900 mb-3 flex items-center justify-center">
                <MapPin className="h-4 w-4 mr-2 text-mhtc-primary" />
                MHRO Indonesia
              </h4>
              <div className="space-y-2 text-sm text-grey-600">
                <div>+62 21 5010 9636</div>
                <div>callcentre.IDN@mhtc.org.my</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-grey-200 bg-white py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-grey-600 md:flex-row md:text-left">
            <p>&copy; {new Date().getFullYear()} Malaysia Healthcare Travel Council. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy-policy" className="hover:text-mhtc-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/corporate-governance" className="hover:text-mhtc-primary transition-colors">
                Corporate Governance
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

