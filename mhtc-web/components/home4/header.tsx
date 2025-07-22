"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Container } from "@/components/home4/ui/container"
import { cn } from "@/lib/utils"

interface NavItem {
  title: string
  href: string
  external?: boolean
}

const mainNavItems: NavItem[] = [
  {
    title: "Member Hospital",
    href: "/member-hospital",
  },
  {
    title: "MYMT 2026",
    href: "https://www.mhtc.org.my/mymt-2026/",
    external: true,
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
              src="/images/logo-malaysiahealthcare.png"
              alt="Malaysia Healthcare Logo"
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
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "text-base transition-colors duration-150",
                      pathname === item.href ? "text-[#C8102E]" : "text-foreground",
                    )}
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.title}
                      </a>
                    ) : (
                      <Link href={item.href}>{item.title}</Link>
                    )}
                  </Button>
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
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
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
              className="bg-mhtc-primary text-white transition-colors duration-150 hover:bg-[#A50E25]"
              asChild
            >
              <Link href="/contact">Contact Us</Link>
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
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block font-medium transition-colors duration-150",
                        pathname === item.href ? "text-[#C8102E]" : "text-foreground",
                      )}
                    >
                      {item.title}
                    </a>
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
              <Button className="mt-4 w-full bg-mhtc-primary text-white transition-colors duration-150 hover:bg-[#A50E25]" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
