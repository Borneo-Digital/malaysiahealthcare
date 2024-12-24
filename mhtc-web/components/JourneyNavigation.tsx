import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const journeySteps = [
  { 
    title: 'Pre-Arrival', 
    path: '/pre-arrival',
    description: 'Prepare for your healthcare journey'
  },
  { 
    title: 'Arrival', 
    path: '/arrival',
    description: 'Your welcome to Malaysia'
  },
  { 
    title: 'Treatment', 
    path: '/treatment',
    description: 'World-class healthcare services'
  },
  { 
    title: 'Post-Treatment', 
    path: '/post-treatment',
    description: 'Recovery and beyond'
  }
]

export function JourneyNavigation({ currentStep }: { currentStep: string }) {
  const currentIndex = journeySteps.findIndex(step => step.path === `/${currentStep}`)
  const nextStep = journeySteps[currentIndex + 1]

  return nextStep ? (
    <div className="mt-12 border-t border-gray-100 pt-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-50 rounded-xl p-6">
        <div>
          <p className="text-sm text-gray-500 mb-1">Next Step</p>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{nextStep.title}</h3>
          <p className="text-sm text-gray-600">{nextStep.description}</p>
        </div>
        <Link href={nextStep.path}>
          <Button className="group w-full sm:w-auto">
            Continue to {nextStep.title}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  ) : null
}