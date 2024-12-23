import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Malaysia Healthcare Travel Council</p>
            <p>Level 12, Surian Tower, No. 1 Jalan PJU 7/3</p>
            <p>Mutiara Damansara, 47810 Petaling Jaya</p>
            <p>Selangor Darul Ehsan, Malaysia</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About MHTC</Link></li>
              <li><Link href="/news">News & Articles</Link></li>
              <li><Link href="/videos">Videos</Link></li>
              <li><Link href="/calendar">Calendar</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/MHTCMalaysia" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com/MHTCMalaysia" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/malaysia-healthcare-travel-council" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/malaysiahealthcare" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Malaysia Healthcare Travel Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

