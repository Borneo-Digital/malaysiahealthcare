"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter, useParams } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Container } from "@/components/home4/ui/container"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/hooks/useTranslation"
import { HeaderTranslations } from "@/types/translations"

interface NavItem {
  title: string
  href: string
  external?: boolean
}

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ms", name: "Bahasa Malaysia", nativeName: "Bahasa Melayu" },
  { code: "id", name: "Indonesian", nativeName: "Bahasa Indonesia" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "zh", name: "Chinese", nativeName: "中文" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const params = useParams()
  
  // Get current locale and translations
  const { t } = useTranslation<HeaderTranslations>("header")
  const currentLocale = (params?.locale as string) || "en"
  
  // Get current language info
  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]
  
  // Create nav items with translations
  const mainNavItems: NavItem[] = [
    {
      title: t.navigation?.memberHospital || "Member Hospital",
      href: "/member-hospital",
    },
    {
      title: t.navigation?.mymt2026 || "MYMT 2026",
      href: "/mymt2026",
    },
  ]
  
  // Language switching function
  const switchLanguage = useCallback(
    (newLocale: string) => {
      const newPath = pathname.replace(/^\/[^\/]+/, `/${newLocale}`)
      router.push(newPath)
    },
    [pathname, router]
  )

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
        <div className="grid h-24 grid-cols-3 items-center md:h-24">
          {/* Left: Logo */}
          <div className="flex items-center justify-start">
            <Link href={`/${currentLocale}`} className="flex items-center">
              {/* Original Malaysia Healthcare Logo */}
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/logo-malaysiahealthcare.png"
                  alt="Malaysia Healthcare Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Divider */}
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              
              {/* MYMT Logo */}
              <div className="relative h-10 w-auto">
                <Image
                  src="/images/home4/MYMTlogo.png"
                  alt="MYMT Logo"
                  width={100}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden items-center justify-center md:flex">
            <ul className="flex space-x-1">
              {mainNavItems.map((item) => (
                <li key={item.href} className="relative">
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "text-base transition-colors duration-150",
                      pathname === `/${currentLocale}${item.href}` 
                        ? "text-[#C8102E] bg-red-50 font-semibold" 
                        : "text-foreground hover:text-[#C8102E]",
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
                      <Link href={`/${currentLocale}${item.href}`}>{item.title}</Link>
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center justify-end space-x-2">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-1 transition-colors duration-150"
                >
                  <Globe className="h-4 w-4" />
                  <span className="hidden sm:inline-block">{currentLanguage.nativeName}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white border border-gray-200 shadow-lg">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>
                    <button
                      className="w-full text-left transition-colors duration-150 hover:bg-gray-100 px-2 py-1 rounded"
                      onClick={() => switchLanguage(lang.code)}
                    >
                      {lang.nativeName}
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
              <Link href={`/${currentLocale}/contact`}>{t.navigation?.contact || "Contact Us"}</Link>
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
                        "block font-medium transition-colors duration-150 px-3 py-2 rounded-md",
                        pathname === `/${currentLocale}${item.href}` 
                          ? "text-[#C8102E] bg-red-50 font-semibold" 
                          : "text-foreground hover:text-[#C8102E] hover:bg-gray-50",
                      )}
                    >
                      {item.title}
                    </a>
                  ) : (
                    <Link
                      href={`/${currentLocale}${item.href}`}
                      className={cn(
                        "block font-medium transition-colors duration-150 px-3 py-2 rounded-md",
                        pathname === `/${currentLocale}${item.href}` 
                          ? "text-[#C8102E] bg-red-50 font-semibold" 
                          : "text-foreground hover:text-[#C8102E] hover:bg-gray-50",
                      )}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="mt-4 w-full bg-mhtc-primary text-white transition-colors duration-150 hover:bg-[#A50E25]" asChild>
                <Link href={`/${currentLocale}/contact`}>{t.navigation?.contact || "Contact Us"}</Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
