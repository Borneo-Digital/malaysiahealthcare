"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Container } from "@/components/home3/ui/container"
import { cn } from "@/lib/utils"

const mainNavItems = [
  {
    title: "About",
    href: "/about",
    children: [
      { title: "About MHTC", href: "/about/mhtc" },
      { title: "Our Services", href: "/about/services" },
      { title: "Malaysia Healthcare", href: "/about/healthcare" },
    ],
  },
  {
    title: "Treatments",
    href: "/treatments",
    children: [
      { title: "Medical Specialties", href: "/treatments/specialties" },
      { title: "Wellness & Lifestyle", href: "/treatments/wellness" },
      { title: "Fertility & Reproductive Health", href: "/treatments/fertility" },
    ],
  },
  {
    title: "Hospitals",
    href: "/hospitals",
  },
  {
    title: "Plan Your Visit",
    href: "/plan",
    children: [
      { title: "Getting Started", href: "/plan/getting-started" },
      { title: "Visa Information", href: "/plan/visa" },
      { title: "Accommodations", href: "/plan/accommodations" },
    ],
  },
  {
    title: "Resources",
    href: "/resources",
    children: [
      { title: "News & Articles", href: "/resources/news" },
      { title: "Events", href: "/resources/events" },
      { title: "FAQs", href: "/resources/faqs" },
    ],
  },
]

const languages = [
  { code: "en", name: "English" },
  { code: "ms", name: "Bahasa Malaysia" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <div className="flex items-center">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <div className="relative h-10 w-40">
              <Image
              src="/images/mhtc-logo.png"
              alt="MHTC Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
              />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center md:flex">
            <ul className="flex space-x-1">
              {mainNavItems.map((item) => (
                <li key={item.href} className="relative">
                  {item.children ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className={cn(
                            "flex items-center space-x-1 text-base transition-colors duration-150",
                            pathname.startsWith(item.href) ? "text-[#C8102E]" : "text-foreground",
                          )}
                        >
                          <span>{item.title}</span>
                          <ChevronDown className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-48">
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.href} asChild>
                            <Link
                              href={child.href}
                              className={cn(
                                "transition-colors duration-150",
                                pathname === child.href ? "bg-accent text-accent-foreground" : "",
                              )}
                            >
                              {child.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Button
                      asChild
                      variant="ghost"
                      className={cn(
                        "text-base transition-colors duration-150",
                        pathname === item.href ? "text-[#C8102E]" : "text-foreground",
                      )}
                    >
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 transition-colors duration-150"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline-block">English</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    <button
                      className="w-full text-left transition-colors duration-150"
                      onClick={() => console.log(`Switch to ${lang.name}`)}
                    >
                      {lang.name}
                    </button>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Contact Button */}
            <Button
              size="sm"
              className="hidden bg-[#C8102E] text-white transition-colors duration-150 hover:bg-[#A00F26] sm:inline-flex"
            >
              Contact Us
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </Container>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 bg-white md:hidden">
          <Container className="h-full overflow-auto pb-16 pt-4">
            <nav className="flex flex-col space-y-4">
              {mainNavItems.map((item) => (
                <div key={item.href} className="border-b border-gray-100 pb-4">
                  {item.children ? (
                    <>
                      <div className="mb-2 font-medium">{item.title}</div>
                      <ul className="ml-4 space-y-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={cn(
                                "block text-sm transition-colors duration-150",
                                pathname === child.href ? "text-[#C8102E]" : "text-muted-foreground",
                              )}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "block font-medium transition-colors duration-150",
                        pathname === item.href ? "text-[#C8102E]" : "text-foreground",
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="mt-4 w-full bg-[#C8102E] text-white transition-colors duration-150 hover:bg-[#A00F26]">
                Contact Us
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
