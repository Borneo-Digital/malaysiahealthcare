import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Info, Newspaper, PlayCircle, CalendarIcon, Stethoscope, Plane } from 'lucide-react'

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto px-4 py-8">
      {quickLinks.map((link) => (
        <Button
          key={link.title}
          variant="outline"
          asChild
          className="h-auto p-6 flex flex-col items-center text-center hover:bg-primary/5"
        >
          <Link href={link.href}>
            <link.icon className="h-8 w-8 mb-3 text-primary" />
            <h3 className="font-bold mb-2">{link.title}</h3>
            <p className="text-sm text-gray-600">{link.description}</p>
          </Link>
        </Button>
      ))}
    </div>
  )
}

