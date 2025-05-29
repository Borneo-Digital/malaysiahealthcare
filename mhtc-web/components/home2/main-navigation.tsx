"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Menu, X, ChevronDown, Phone, Mail } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const navLinks = [
    { name: "ABOUT US", href: "/home2#why-choose" },
    { name: "TREATMENTS", href: "/home2#treatments" },
    { name: "HOSPITALS", href: "/home2#hospitals" },
    { name: "PATIENT GUIDE", href: "/home2#healing-journey" },
    { name: "CONTACT", href: "#footer" },
  ]

  const languages = [
    { name: "English", code: "en", flag: "\uD83C\uDDEC\uD83C\uDDE7" },
    { name: "Bahasa Malaysia", code: "my", flag: "\uD83C\uDDF2\uD83C\uDDFE" },
    { name: "Bahasa Indonesia", code: "id", flag: "\uD83C\uDDEE\uD83C\uDDE9" },
    { name: "Mandarin", code: "zh", flag: "\uD83C\uDDE8\uD83C\uDDF3" },
    { name: "Arabic", code: "ar", flag: "\uD83C\uDDF8\uD83C\uDDE6" },
  ]

  return (
    <header className="bg-white h-[80px] shadow-md sticky top-0 z-50">
      <div className="container mx-auto h-full max-w-[1200px] px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/home2" className="flex-shrink-0">
          <Image
            src="/images/mhtc-logo.png"
            alt="MHTC Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="subheading text-gray-800 text-medium hover:text-[#BE1E2D] transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center text-sm text-medium text-gray-700 hover:text-[#BE1E2D] transition-colors">
              <span className="mr-1">EN</span>
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem key={lang.code} className="cursor-pointer">
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Search */}
          <button
            className="text-gray-700 hover:text-[#BE1E2D] transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-[#BE1E2D] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg absolute w-full">
          <div className="container mx-auto max-w-[1200px] px-4 py-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block subheading text-gray-800 text-medium hover:text-[#BE1E2D] transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <Phone className="h-4 w-4 text-gray-600" />
                <span className="text-sm body-text text-gray-600">+603 2726 8688</span>
              </div>
              <div className="flex items-center space-x-4 mt-2">
                <Mail className="h-4 w-4 text-gray-600" />
                <span className="text-sm body-text text-gray-600">callcentre@mhtc.org.my</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white shadow-lg p-4">
          <div className="container mx-auto max-w-[1200px]">
            <div className="relative">
              <input
                type="search"
                placeholder="Search..."
                className="w-full p-3 border border-gray-300 rounded-md pr-10 body-text"
                autoFocus
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#BE1E2D]"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 