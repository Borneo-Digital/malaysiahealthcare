import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'About MHTC | Malaysia Healthcare Travel Council',
  description: 'Learn about the Malaysia Healthcare Travel Council, our mission, vision, and commitment to world-class healthcare.',
}

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-8">About MHTC</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            The Malaysia Healthcare Travel Council (MHTC) is committed to facilitating and promoting the healthcare travel industry of Malaysia. We strive to position Malaysia as the leading global healthcare destination, offering world-class quality healthcare services to international patients.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To make Malaysia the preferred destination for world-class healthcare services, fostering sustainable economic growth through medical tourism while ensuring the highest standards of patient care and satisfaction.
          </p>
        </div>
        <div>
          <Image
            src="/placeholder.svg?height=400&width=600&text=MHTC+Team"
            alt="MHTC Team"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">Our Focus Areas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {['Quality Assurance', 'Patient Experience', 'Industry Collaboration', 'Global Promotion', 'Innovation in Healthcare', 'Capacity Building'].map((area) => (
          <Card key={area}>
            <CardHeader>
              <CardTitle>{area}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-6">Our Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          { number: '250+', label: 'Healthcare Facilities' },
          { number: '1M+', label: 'International Patients' },
          { number: '30+', label: 'Industry Awards' },
          { number: '10+', label: 'Years of Excellence' },
        ].map((stat) => (
          <Card key={stat.label} className="text-center">
            <CardHeader>
              <CardTitle className="text-4xl font-bold text-primary">{stat.number}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Join Us in Shaping the Future of Healthcare Travel</h2>
        <Button size="lg">Contact Us</Button>
      </div>
    </div>
  )
}

