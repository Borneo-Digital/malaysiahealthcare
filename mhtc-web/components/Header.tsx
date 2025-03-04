// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import LocaleLink from "./LocaleLink";
import LanguageSwitcher from "./LanguageSwitcher";
import Image from "next/image";
import { Search, Bell, Menu, X } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { HeaderTranslations } from "@/types/translations";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Use the typed translation hook instead of direct require
  const { t, locale, isRTL } = useTranslation<HeaderTranslations>("header");

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* Red Top Border */}
      <div className="h-1 w-full bg-primary"></div>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* Logo */}
          <LocaleLink href="/" className="flex items-center">
            <Image
              src="/images/mhtc-logo.png"
              alt="MHTC Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </LocaleLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <LocaleLink
              href="/"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname === `/${locale}` || pathname === `/${locale}/`
                  ? "text-primary"
                  : ""
              }`}
            >
              {t.navigation.home}
            </LocaleLink>
            <LocaleLink
              href="/member-hospital"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname.includes("/member-hospital") ? "text-primary" : ""
              }`}
            >
              {t.navigation.memberHospital}
            </LocaleLink>
            <LocaleLink
              href="/healthcare-travel-guide"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname.includes("/healthcare-travel-guide")
                  ? "text-primary"
                  : ""
              }`}
            >
              {t.navigation.healthcareTravelGuide}
            </LocaleLink>
            <LocaleLink
              href="/mhtc-chronicles"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname.includes("/mhtc-chronicles") ? "text-primary" : ""
              }`}
            >
              {t.navigation.mhtcChronicles}
            </LocaleLink>
            <LocaleLink
              href="/corporate-profile"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname.includes("/corporate-profile") ? "text-primary" : ""
              }`}
            >
              {t.navigation.corporateProfile}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 text-sm font-medium ${
                pathname.includes("/contact") ? "text-primary" : ""
              }`}
            >
              {t.navigation.contact}
            </LocaleLink>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label={t.accessibility.toggleSearch}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Notification Bell */}
            <button
              className="text-gray-600 hover:text-primary transition-colors duration-200"
              aria-label={t.accessibility.notifications}
            >
              <Bell className="h-5 w-5" />
            </button>

            {/* Language Switcher */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600 hover:text-primary transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={t.accessibility.toggleMenu}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 absolute w-full z-50">
          <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <LocaleLink
              href="/"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 ${
                pathname === `/${locale}` || pathname === `/${locale}/`
                  ? "text-primary"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.home}
            </LocaleLink>
            <LocaleLink
              href="/member-hospital"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 ${
                pathname.includes("/member-hospital") ? "text-primary" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.memberHospital}
            </LocaleLink>
            <LocaleLink
              href="/healthcare-travel-guide"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 ${
                pathname.includes("/healthcare-travel-guide")
                  ? "text-primary"
                  : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.healthcareTravelGuide}
            </LocaleLink>
            <LocaleLink
              href="/mhtc-chronicles"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 ${
                pathname.includes("/mhtc-chronicles") ? "text-primary" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.mhtcChronicles}
            </LocaleLink>
            <LocaleLink
              href="/corporate-profile"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 border-b border-gray-100 ${
                pathname.includes("/corporate-profile") ? "text-primary" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.corporateProfile}
            </LocaleLink>
            <LocaleLink
              href="/contact"
              className={`text-gray-800 hover:text-primary transition-colors duration-200 py-2 ${
                pathname.includes("/contact") ? "text-primary" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {t.navigation.contact}
            </LocaleLink>
          </nav>
        </div>
      )}
    </header>
  );
}
