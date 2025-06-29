"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/home3/ui/button"
import { Input } from "@/components/ui/input"
import { Container } from "@/components/home3/ui/container"

export function Footer() {
  return (
    <footer className="border-t border-grey-200 bg-grey-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
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
            <div className="flex space-x-3">
              <Link
                href="#"
                className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="rounded-full bg-grey-200 p-2 text-grey-600 transition-colors hover:bg-mhtc-primary hover:text-white"
                aria-label="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
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
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-grey-900">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0" />
                <span className="text-grey-600">
                  Level 31, Menara MHTC, Jalan Ampang, 50450 Kuala Lumpur, Malaysia
                </span>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0" />
                <span className="text-grey-600">+603 2726 8688</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-mhtc-primary flex-shrink-0" />
                <span className="text-grey-600">callcentre@mhtc.org.my</span>
              </li>
            </ul>
          </div>

          <div>
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
              <Button className="bg-mhtc-primary hover:bg-[#A50E25] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <div className="border-t border-grey-200 bg-white py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-grey-600 md:flex-row md:text-left">
            <p>&copy; {new Date().getFullYear()} Malaysia Healthcare Travel Council. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="hover:text-mhtc-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-mhtc-primary transition-colors">
                Terms of Use
              </Link>
              <Link href="/sitemap" className="hover:text-mhtc-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

