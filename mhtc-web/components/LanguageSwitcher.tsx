"use client";

import { useCallback, useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { CommonTranslations } from "@/types/translations";

interface Language {
  code: string;
  region: string;
  name: string;
  nativeName: string;
}

const languages: Language[] = [
  { code: "en", region: "GB", name: "English", nativeName: "English" },
  { code: "ms", region: "MY", name: "Malay", nativeName: "Bahasa Melayu" },
  {
    code: "id",
    region: "ID",
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
  { code: "zh", region: "CN", name: "Chinese", nativeName: "中文" },
  { code: "ar", region: "SA", name: "Arabic", nativeName: "العربية" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // Add translation support
  const { t } = useTranslation<CommonTranslations>("common");

  // Get current locale from path
  const currentLocale = pathname.split("/")[1] || "en";

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const switchLanguage = useCallback(
    (locale: string) => {
      const newPath = pathname.replace(/^\/[^\/]+/, `/${locale}`);
      router.push(newPath);
      setIsOpen(false);
    },
    [pathname, router]
  );

  // Helper function to get translated language name
  const getTranslatedName = (code: string): string => {
    // If translations for language names exist in common.json
    if (t.languages && t.languages[code]) {
      return t.languages[code];
    }
    // Fallback to predefined names
    const lang = languages.find((l) => l.code === code);
    return lang ? lang.name : code;
  };

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center space-x-2 text-sm font-medium px-2 py-1 hover:bg-gray-100 rounded"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={t.accessibility?.languageSwitcher || "Switch language"}
      >
        <span className="font-medium">{currentLanguage.region}</span>
        <span>{currentLanguage.nativeName}</span>
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-200 rounded shadow-lg z-50">
          <div className="py-1">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`flex w-full px-4 py-2 text-sm text-left hover:bg-gray-100 ${
                  currentLocale === language.code
                    ? "font-semibold bg-gray-50"
                    : ""
                }`}
                onClick={() => switchLanguage(language.code)}
                aria-label={
                  t.accessibility?.switchTo
                    ? `${t.accessibility.switchTo} ${getTranslatedName(
                        language.code
                      )}`
                    : `Switch to ${language.name}`
                }
              >
                <span className="w-8 font-medium">{language.region}</span>
                <span>{language.nativeName}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
