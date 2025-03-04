'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useTranslation } from '@/hooks/useTranslation'
import { Namespace } from '@/types/i18n'

interface NavItem {
  href: string;
  labelKey: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  lang: string;
}

export default function MobileMenu({ navItems, lang }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation(lang as Namespace)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-medium hover:text-primary"
              onClick={() => setIsOpen(false)}
            >
              {t[item.labelKey] || item.labelKey}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

