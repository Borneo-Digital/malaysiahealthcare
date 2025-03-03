"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { useTranslation } from "@/hooks/useTranslation";
import { FooterTranslations } from "@/types/translations";

export default function Footer() {
  const { t, isRTL } = useTranslation<FooterTranslations>("footer");
  const currentYear = new Date().getFullYear();

  // Replace the year placeholder in the copyright text
  const copyright =
    t.copyright?.replace("{{year}}", currentYear.toString()) ||
    `© ${currentYear} Malaysia Healthcare Travel Council. All rights reserved.`;

  return (
    <footer className={`bg-primary ${isRTL ? "rtl" : "ltr"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                {t.contactUs}
              </h3>
              <p className="text-white">{t.organizationName}</p>
              <p className="text-white">{t.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                {t.quickLinks}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/member-hospitals"
                    className="text-white hover:text-gray-200"
                  >
                    {t.memberHospitals}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/healthcare-travel-guide"
                    className="text-white hover:text-gray-200"
                  >
                    {t.healthcareTravelGuide}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mhtc-chronicles"
                    className="text-white hover:text-gray-200"
                  >
                    {t.mhtcChronicles}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-profile"
                    className="text-white hover:text-gray-200"
                  >
                    {t.corporateProfile}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-gray-200"
                  >
                    {t.contactUs}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">
                {t.followUs}
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/MHTCMalaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.socialMedia.facebook}
                  className="text-white hover:text-gray-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/MHTCMalaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.socialMedia.twitter}
                  className="text-white hover:text-gray-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/malaysia-healthcare-travel-council"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.socialMedia.linkedin}
                  className="text-white hover:text-gray-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/malaysiahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.socialMedia.instagram}
                  className="text-white hover:text-gray-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-white">
            <p>{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
