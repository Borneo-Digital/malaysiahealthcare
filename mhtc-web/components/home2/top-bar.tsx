import Link from "next/link"
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export default function TopBar() {
  return (
    <div className="bg-[#C8102E] h-[60px] text-white">
      <div className="container mx-auto h-full max-w-[1200px] px-4 flex items-center justify-between">
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center text-sm">
            <Phone className="h-4 w-4 mr-2" />
            <span>+603 2726 8688</span>
          </div>
          <div className="flex items-center text-sm">
            <Mail className="h-4 w-4 mr-2" />
            <span>callcentre@mhtc.org.my</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 ml-auto">
          <Link href="https://facebook.com" className="hover:opacity-80 transition-opacity">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="https://twitter.com" className="hover:opacity-80 transition-opacity">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="https://instagram.com" className="hover:opacity-80 transition-opacity">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link href="https://youtube.com" className="hover:opacity-80 transition-opacity">
            <Youtube className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
} 