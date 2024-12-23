import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Malaysia Healthcare Travel Council - World-Class Healthcare in Malaysia',
  description: 'Experience top-quality medical care and hospitality with Malaysia Healthcare Travel Council. Plan your healthcare journey in Malaysia today.',
  keywords: 'Malaysia healthcare, health travel, world-class healthcare, MHTC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://malaysiahealthcare.org',
    siteName: 'Malaysia Healthcare Travel Council',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Malaysia Healthcare Travel Council',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@MHTCMalaysia',
    creator: '@MHTCMalaysia',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Malaysia Healthcare Travel Council",
              "url": "https://malaysiahealthcare.org",
              "logo": "https://malaysiahealthcare.org/logo.png",
              "sameAs": [
                "https://www.facebook.com/MHTCMalaysia",
                "https://twitter.com/MHTCMalaysia",
                "https://www.linkedin.com/company/malaysia-healthcare-travel-council"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+60378419999",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": ["English", "Malay", "Chinese", "Arabic"]
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}

