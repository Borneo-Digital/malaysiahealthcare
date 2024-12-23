import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThematicBanner() {
  // This would typically be fetched from an API or CMS
  const currentTheme = {
    title: "Pinktober: Breast Cancer Awareness Month",
    description: "Join us in raising awareness and supporting breast cancer prevention.",
    image: "/images/pinktober-banner.jpg",
    link: "/pinktober"
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            src={currentTheme.image}
            alt={currentTheme.title}
            width={300}
            height={200}
            className="h-48 w-full object-cover md:w-48"
          />
        </div>
        <div className="p-8">
          <h3 className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Monthly Health Theme
          </h3>
          <Link href={currentTheme.link} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {currentTheme.title}
          </Link>
          <p className="mt-2 text-gray-500">{currentTheme.description}</p>
          <Button asChild className="mt-4">
            <Link href={currentTheme.link}>Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

