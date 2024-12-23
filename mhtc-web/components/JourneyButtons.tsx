import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function JourneyButtons() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      <Button asChild className="h-auto py-4" variant="outline">
        <Link href="/pre-arrival">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Pre-Arrival</h3>
            <p className="text-sm">Prepare for your healthcare journey</p>
          </div>
        </Link>
      </Button>
      <Button asChild className="h-auto py-4" variant="outline">
        <Link href="/arrival">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Arrival</h3>
            <p className="text-sm">Your welcome to Malaysia</p>
          </div>
        </Link>
      </Button>
      <Button asChild className="h-auto py-4" variant="outline">
        <Link href="/treatment">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Treatment</h3>
            <p className="text-sm">World-class healthcare services</p>
          </div>
        </Link>
      </Button>
      <Button asChild className="h-auto py-4" variant="outline">
        <Link href="/post-treatment">
          <div className="text-center">
            <h3 className="text-lg font-bold mb-2">Post-Treatment</h3>
            <p className="text-sm">Recovery and beyond</p>
          </div>
        </Link>
      </Button>
    </div>
  )
}

