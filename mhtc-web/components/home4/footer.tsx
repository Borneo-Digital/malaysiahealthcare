"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook,  Instagram, Youtube, Mail, Phone, MapPin, Clock, MessageCircle, Linkedin } from "lucide-react"
import { Button } from "@/components/home4/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/home4/ui/container"

export function Footer() {
  return (
    <footer className="z-10 border-t border-grey-200">
      <div className="bg-grey-50 relative overflow-hidden">
        {/* Bunga Raya Decorative Pattern - Traditional Malaysian Floral Design */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Main decorative pattern - visible on larger screens */}
          <div className="absolute top-0 right-0 w-2/5 h-full hidden lg:block opacity-25">
            <Image
              src="/images/Bunga Raya Asset-01.png"
              alt="Bunga Raya - Malaysian hibiscus floral pattern"
              fill
              className="object-cover object-right-top"
              sizes="(max-width: 1024px) 0vw, 40vw"
            />
          </div>
          {/* Subtle corner accent for medium screens */}
          <div className="absolute bottom-0 right-0 w-64 h-64 lg:hidden md:block hidden opacity-20">
            <Image
              src="/images/Bunga Raya Asset-01.png"
              alt="Bunga Raya decorative accent"
              fill
              className="object-cover object-bottom-right"
              sizes="256px"
            />
          </div>
          {/* Mobile subtle accent */}
          <div className="absolute bottom-0 right-0 w-32 h-32 md:hidden opacity-15">
            <Image
              src="/images/Bunga Raya Asset-01.png"
              alt="Bunga Raya decorative accent"
              fill
              className="object-cover object-bottom-right"
              sizes="128px"
            />
          </div>
        </div>
        <div className="relative z-10">
          <Container>
            <div className="grid gap-8 py-12 md:grid-cols-2 xl:grid-cols-4">
              <div className="space-y-6">
                <Link href="/" className="inline-block">
                  <div className="relative h-12 w-48">
                    <Image
                      src="/images/mhtc-logo.png"
                      alt="Malaysia Healthcare Travel Council"
                      fill
                      className="object-contain object-left"
                    />
                  </div>
                </Link>
                <p className="text-sm text-grey-600 leading-relaxed max-w-md">
                  Malaysia Healthcare Travel Council (MHTC) is an agency under the Ministry of Health Malaysia that has been
                  entrusted to facilitate and promote the healthcare travel industry in Malaysia.
                </p>
                <div className="space-y-4">
                  <h4 className="text-sm font-semibold text-grey-900">Follow Us</h4>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="https://www.linkedin.com/company/malaysia-healthcare-travel-council"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/mhtcmalaysia/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/malaysiahealthcare/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-4 w-4" />
                    </Link>
                    <Link
                      href="https://www.threads.com/@malaysiahealthcare"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
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
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
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
                      className="rounded-full bg-grey-200 p-2.5 text-grey-600 transition-all duration-200 hover:bg-mhtc-primary hover:text-white hover:scale-105"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-grey-900">Quick Links</h3>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://www.mhtc.org.my"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-grey-600 hover:text-mhtc-primary transition-colors inline-flex items-center gap-1"
                    >
                      Malaysia Healthcare Travel Council
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <Link href="/member-hospital" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                      Member Hospital
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-grey-600 hover:text-mhtc-primary transition-colors">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-grey-900">Contact Information</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                    <span className="text-grey-600 leading-relaxed">
                      Unit 13A-1, Level 13A, Block 2A, Plaza Sentral, 5 Jalan Stesen Sentral 5, KL Sentral, 50470 Kuala Lumpur, Malaysia
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                    <div className="text-grey-600">
                      <div className="font-medium">+603 2785 1814</div>
                      <div className="text-xs text-grey-500 mt-1">Main Office</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-mhtc-primary flex-shrink-0 mt-0.5" />
                    <span className="text-grey-600">callcentre@mhtc.org.my</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 md:col-span-2 xl:col-span-1">
                <h3 className="text-lg font-semibold text-grey-900">Newsletter</h3>
                <p className="text-sm text-grey-600 leading-relaxed">
                  Subscribe to our newsletter for the latest updates on healthcare travel in Malaysia.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 bg-white border-grey-300 focus:border-mhtc-primary focus:ring-mhtc-primary" 
                  />
                  <Button className="bg-mhtc-primary hover:bg-mhtc-primary-hover text-white px-6 whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            <div className="border-t border-grey-200 py-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-grey-900 mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <Phone className="h-4 w-4 text-mhtc-primary" />
                    MH Concierge & Lounge
                  </h4>
                  <div className="space-y-2 text-sm text-grey-600">
                    <div className="font-medium">+603 8776 6168 <span className="font-normal text-xs text-grey-500">(KLIA)</span></div>
                    <div className="font-medium">+604 643 1626 <span className="font-normal text-xs text-grey-500">(PIA)</span></div>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-grey-900 mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <Phone className="h-4 w-4 text-mhtc-primary" />
                    Call Centre
                  </h4>
                  <div className="space-y-2 text-sm text-grey-600">
                    <div className="font-medium">+603 8776 6168</div>
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-grey-500">
                      <Clock className="h-3 w-3" />
                      Mon – Sunday (9.00am – 6.00pm)
                    </div>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-grey-900 mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <MessageCircle className="h-4 w-4 text-mhtc-primary" />
                    WhatsApp
                  </h4>
                  <div className="space-y-2 text-sm text-grey-600">
                    <div className="font-medium">+6018 870 0100</div>
                    <div className="flex items-center justify-center sm:justify-start gap-1 text-xs text-grey-500">
                      <Clock className="h-3 w-3" />
                      Mon – Sunday (9.00am – 6.00pm)
                    </div>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-grey-900 mb-4 flex items-center justify-center sm:justify-start gap-2">
                    <MapPin className="h-4 w-4 text-mhtc-primary" />
                    MHRO Indonesia
                  </h4>
                  <div className="space-y-2 text-sm text-grey-600">
                    <div className="font-medium">+62 21 5010 9636</div>
                    <div className="text-xs">callcentre.IDN@mhtc.org.my</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <div className="border-t border-grey-200 bg-white py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-grey-600 md:flex-row md:text-left">
            <p>&copy; {new Date().getFullYear()} Malaysia Healthcare Travel Council. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 justify-center md:justify-end">
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

