import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#C8102E] text-white">
      <div className="container mx-auto max-w-[1200px] px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">ABOUT MHTC</h3>
            <p className="text-white/90 mb-4">
              Malaysia Healthcare Travel Council (MHTC) is an agency under the Ministry of Health tasked to facilitate
              and promote the healthcare travel industry in Malaysia.
            </p>
            <Link href="/about" className="text-white underline hover:text-white/80">
              Read More
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/90 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-white/90 hover:text-white">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/hospitals" className="text-white/90 hover:text-white">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/patient-guide" className="text-white/90 hover:text-white">
                  Patient Guide
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/90 hover:text-white">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-white/90 mr-2 flex-shrink-0 mt-1" />
                <span className="text-white/90">
                  Level 12, Menara 1 Sentrum, 201, Jalan Tun Sambanthan, 50470 Kuala Lumpur
                </span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-white/90 mr-2 flex-shrink-0" />
                <span className="text-white/90">+603 2726 8688</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-white/90 mr-2 flex-shrink-0" />
                <span className="text-white/90">callcentre@mhtc.org.my</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
            <p className="text-white/90 mb-4">
              Subscribe to our newsletter for the latest updates on healthcare travel in Malaysia.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-white text-[#C8102E] hover:bg-white/90">Subscribe</Button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-[#A50E25] py-4">
        <div className="container mx-auto max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image
              src="/images/mhtc-logo.png"
              alt="Ministry of Health Malaysia"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <p className="text-white/90 text-sm mb-2 md:mb-0 md:mr-6">
              © {new Date().getFullYear()} Malaysia Healthcare Travel Council. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-white/90 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/90 hover:text-white text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 