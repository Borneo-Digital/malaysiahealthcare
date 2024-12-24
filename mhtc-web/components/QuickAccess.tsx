'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Info, Newspaper, Stethoscope, Plane } from 'lucide-react'

const quickLinks = [
  {
    title: "About MHTC",
    icon: Info,
    href: "/about",
    description: "Learn about our organization"
  },
  {
    title: "News & Articles",
    icon: Newspaper,
    href: "/news",
    description: "Latest updates and insights"
  },
  {
    title: "Medical Directory",
    icon: Stethoscope,
    href: "/medical-directory",
    description: "Find healthcare providers"
  },
  {
    title: "For Travellers",
    icon: Plane,
    href: "/for-traveller",
    description: "Plan your healthcare journey"
  }
]

export default function QuickAccess() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4"
    >
      {quickLinks.map((link) => (
        <motion.div key={link.title} variants={item}>
          <Link href={link.href} className="block h-full">
            <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-6 h-full border border-gray-100 hover:border-primary/20 group">
              <div className="mb-4 relative overflow-hidden">
                <link.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-primary/5 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{link.title}</h3>
              <p className="text-gray-600">{link.description}</p>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

