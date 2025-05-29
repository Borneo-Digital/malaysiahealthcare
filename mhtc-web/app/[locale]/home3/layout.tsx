import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../../globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Malaysia Healthcare Travel Council",
  description: "Experience world-class healthcare services with the warmth of Malaysian hospitality",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </div>
  )
}
