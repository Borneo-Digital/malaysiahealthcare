import { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export const metadata: Metadata = {
  title: 'Medical Directory | Malaysia Healthcare Travel Council',
  description: 'Find world-class hospitals, clinics, and healthcare professionals in Malaysia.',
}

export default function MedicalDirectory() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-8">Medical Directory</h1>
      
      {/* Search and Filter Section */}
      <div className="bg-gray-100 p-6 rounded-lg mb-12">
        <h2 className="text-2xl font-semibold mb-4">Find Healthcare Providers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input placeholder="Search by name or specialty" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="kuala-lumpur">Kuala Lumpur</SelectItem>
              <SelectItem value="penang">Penang</SelectItem>
              <SelectItem value="johor">Johor</SelectItem>
              <SelectItem value="malacca">Malacca</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select provider type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="hospital">Hospital</SelectItem>
              <SelectItem value="clinic">Clinic</SelectItem>
              <SelectItem value="specialist">Specialist</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button className="mt-4">Search</Button>
      </div>

      {/* Featured Providers */}
      <h2 className="text-2xl font-semibold mb-6">Featured Healthcare Providers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((provider) => (
          <div key={provider} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={`/placeholder.svg?height=200&width=400&text=Provider+${provider}`}
              alt={`Featured Provider ${provider}`}
              width={400}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Provider Name {provider}</h3>
              <p className="text-gray-600 mb-4">Specialty • Location</p>
              <Button variant="outline">View Details</Button>
            </div>
          </div>
        ))}
      </div>

      {/* Specialties Section */}
      <h2 className="text-2xl font-semibold mt-12 mb-6">Browse by Specialty</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {['Cardiology', 'Oncology', 'Orthopedics', 'Neurology', 'Pediatrics', 'Dermatology', 'Ophthalmology', 'Dentistry'].map((specialty) => (
          <Button key={specialty} variant="outline" className="justify-start">
            {specialty}
          </Button>
        ))}
      </div>
    </div>
  )
}

