import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary">
      <div className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
              <p className="text-white">Malaysia Healthcare Travel Council</p>
              <p className="text-white">
                28 Tower 2, Jalan Rakyat, Brickfields, 50470 Kuala Lumpur
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/member-hospitals"
                    className="text-white hover:text-gray-200"
                  >
                    Member Hospitals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/healthcare-travel-guide"
                    className="text-white hover:text-gray-200"
                  >
                    Healthcare Travel Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mhtc-chronicles"
                    className="text-white hover:text-gray-200"
                  >
                    MHTC Chronicles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/corporate-profile"
                    className="text-white hover:text-gray-200"
                  >
                    Corporate Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-gray-200"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/MHTCMalaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover:text-gray-200"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/MHTCMalaysia"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white hover:text-gray-200"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/malaysia-healthcare-travel-council"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover:text-gray-200"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://www.instagram.com/malaysiahealthcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover:text-gray-200"
                >
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-white">
            <p>
              &copy; {new Date().getFullYear()} Malaysia Healthcare Travel
              Council. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
