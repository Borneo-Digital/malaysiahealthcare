'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import LanguageSwitcher from './LanguageSwitcher'
import Search from './Search'
import MobileMenu from './MobileMenu'
import { useTranslation } from '@/lib/i18n'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const navItems = [
  { href: '/', labelKey: 'home' },
  { href: '/medical-directory', labelKey: 'medicalDirectory' },
  { href: '/for-traveller', labelKey: 'forTraveller' },
  { href: '/news', labelKey: 'newsAndArticles' },
  { href: '/about', labelKey: 'aboutUs' },
  { href: '/contact', labelKey: 'contactUs' },
]

export default function Header() {
  const [lang, setLang] = useState('en')
  const { t } = useTranslation(lang)

  useEffect(() => {
    const storedLang = localStorage.getItem('lang') || 'en'
    setLang(storedLang)
  }, [])

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="sr-only">
        <a href="#main-content">Skip to main content</a>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
      <div className="container mx-auto px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <MobileMenu navItems={navItems} lang={lang} />
            <Link href="/" className="flex items-center ml-2 md:ml-0" aria-label="Malaysia Healthcare Home">
              <Image
                src="/images/malaysiahealthcarelogo.webp"
                alt=""
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8" aria-label="Main Navigation">
            <AnimatePresence>
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm lg:text-base text-gray-600 hover:text-primary transition-colors duration-300"
                  >
                    {t(item.labelKey)}
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <Search />
            <Button
              variant="ghost"
              size="icon"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              aria-label="Open chat"
            >
              <MessageCircle className="h-5 w-5 text-gray-600" />
            </Button>
            <LanguageSwitcher onLanguageChange={setLang} />
          </div>
        </div>
      </div>
    </header>
  )
}

