import Image from 'next/image'
import { Button } from '@/components/ui/button'

// Mock data for the monthly theme
const mockMonthlyTheme = {
  title: "[Placeholder] Wellness & Prevention Month",
  description: "[Placeholder] Discover comprehensive wellness programs and preventive healthcare services available in Malaysia. Learn about health screening packages, lifestyle consultations, and more.",
  imageUrl: "/placeholder.svg?height=300&width=400&text=Monthly+Theme",
  altText: "Monthly Health Theme Illustration"
}

export default function MonthlyThemeBanner() {
  return (
    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg overflow-hidden shadow-lg">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={mockMonthlyTheme.imageUrl}
            alt={mockMonthlyTheme.altText}
            width={400}
            height={300}
            className="h-48 w-full object-cover md:h-full md:w-48"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-primary font-semibold">
            Monthly Health Theme
          </div>
          <h2 className="mt-2 text-2xl font-semibold text-gray-900">
            {mockMonthlyTheme.title}
          </h2>
          <p className="mt-3 text-gray-600">
            {mockMonthlyTheme.description}
          </p>
          <Button className="mt-4 bg-primary hover:bg-primary/90">
            Explore Theme
          </Button>
        </div>
      </div>
    </div>
  )
}

