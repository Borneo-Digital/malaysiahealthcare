"use client"

import { useState } from "react"
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Zap, 
  Baby,
  // ArrowRight,
  Users,
  Star,
  Building
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/home4/ui/button"
import { Badge } from "@/components/ui/badge"

interface SpecialtiesTranslations {
  title: string;
  subtitle: string;
  categories: string[];
}

interface SpecialtiesExplorerGridProps {
  specialtiesTranslations: SpecialtiesTranslations;
}

export function SpecialtiesExplorerGrid({ specialtiesTranslations }: SpecialtiesExplorerGridProps) {
    const medicalSpecialties = [
  {
    id: "cardiology",
    name: specialtiesTranslations.categories[0] || "Cardiology",
    description: "Comprehensive heart and cardiovascular care with advanced interventional procedures",
    icon: Heart,
    color: "bg-red-50 border-red-200 text-red-700",
    procedures: ["Bypass Surgery", "Angioplasty", "Heart Valve Repair", "Pacemaker Implant"],
    stats: { patients: "2,500+", success: "98%" },
    featured: true
  },
  {
    id: "neurology", 
    name: specialtiesTranslations.categories[3] || "Neurology",
    description: "Expert brain and nervous system treatment using cutting-edge technology",
    icon: Brain,
    color: "bg-purple-50 border-purple-200 text-purple-700",
    procedures: ["Brain Surgery", "Stroke Treatment", "Epilepsy Care", "Spine Surgery"],
    stats: { patients: "1,200+", success: "96%" },
    featured: false
  },
  {
    id: "orthopedics",
    name: specialtiesTranslations.categories[2] || "Orthopedics", 
    description: "Advanced musculoskeletal care and joint replacement procedures",
    icon: Bone,
    color: "bg-blue-50 border-blue-200 text-blue-700",
    procedures: ["Joint Replacement", "Sports Medicine", "Spine Surgery", "Arthroscopy"],
    stats: { patients: "3,200+", success: "97%" },
    featured: true
  },
  {
    id: "oncology",
    name: "Oncology",
    description: "Comprehensive cancer care with personalized treatment protocols",
    icon: Zap,
    color: "bg-orange-50 border-orange-200 text-orange-700",
    procedures: ["Chemotherapy", "Radiation", "Immunotherapy", "Surgical Oncology"],
    stats: { patients: "1,800+", success: "94%" },
    featured: false
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "Advanced eye care and vision restoration procedures",
    icon: Eye,
    color: "bg-green-50 border-green-200 text-green-700",
    procedures: ["Cataract Surgery", "LASIK", "Retinal Surgery", "Glaucoma Treatment"],
    stats: { patients: "1,600+", success: "99%" },
    featured: false
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Specialized healthcare for children and adolescents",
    icon: Baby,
    color: "bg-pink-50 border-pink-200 text-pink-700",
    procedures: ["Pediatric Surgery", "NICU Care", "Child Psychology", "Vaccination"],
    stats: { patients: "2,100+", success: "98%" },
    featured: false
  }
]
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const featuredSpecialties = medicalSpecialties.filter(s => s.featured)
  const otherSpecialties = medicalSpecialties.filter(s => !s.featured)

  return (
    <section className="space-y-8">
      {/* Section Header */}
      <div className="text-center space-y-4">
        <Badge className="bg-[#BE1E2D]/10 text-[#BE1E2D] px-4 py-2">
          <Building className="h-4 w-4 mr-2" />
          Medical Specialties
        </Badge>
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {specialtiesTranslations.title}
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {specialtiesTranslations.subtitle}
        </p>
      </div>

      {/* Featured Specialties */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Featured Centers</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredSpecialties.map((specialty) => (
            <Card 
              key={specialty.id}
              className={`${specialty.color} border-2 transition-all duration-300 hover:shadow-xl hover:scale-105 group cursor-pointer overflow-hidden ${
                selectedSpecialty === specialty.id ? 'ring-2 ring-[#BE1E2D] ring-offset-2' : ''
              }`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === specialty.id ? null : specialty.id)}
              onMouseEnter={() => setHoveredCard(specialty.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <CardContent className="p-8">
                <div className="relative">
                  {/* Background Icon */}
                  <div className="absolute top-0 right-0 opacity-10">
                    <specialty.icon className="h-20 w-20 text-gray-600" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                          <specialty.icon className="h-8 w-8 text-[#BE1E2D]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                            {specialty.name}
                          </h3>
                          <Badge variant="secondary" className="mt-1">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                        </div>
                      </div>
                    </div>

                    {/* Stats
                    <div className="flex gap-6 py-4">
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Patients Treated</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div> */}

                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed">
                      {specialty.description}
                    </p>

                    {/* Procedures - Show when selected or hovered */}
                    {(selectedSpecialty === specialty.id || hoveredCard === specialty.id) && (
                      <div className="space-y-3 pt-4 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900">Key Procedures:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {specialty.procedures.map((procedure, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <Users className="h-3 w-3 text-[#BE1E2D] flex-shrink-0" />
                              <span className="text-sm text-gray-600">{procedure}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action */}
                    {/* <div className="pt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white group-hover:scale-105 transition-all"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div> */}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Other Specialties */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Additional Specialties</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherSpecialties.map((specialty) => (
            <Card 
              key={specialty.id}
              className={`${specialty.color} border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer`}
              onClick={() => setSelectedSpecialty(selectedSpecialty === specialty.id ? null : specialty.id)}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform">
                      <specialty.icon className="h-6 w-6 text-[#BE1E2D]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#BE1E2D] transition-colors">
                        {specialty.name}
                      </h3>
                    </div>
                  </div>

                  {/* Stats */}
                  {/* <div className="flex justify-between py-2">
                    <div className="text-center">
                      <div className="text-xs text-gray-600">Patients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs text-gray-600">Success</div>
                    </div>
                  </div> */}

                  {/* Description */}
                  <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
                    {specialty.description}
                  </p>

                  {/* Action */}
                  {/* <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full border-[#BE1E2D] text-[#BE1E2D] hover:bg-[#BE1E2D] hover:text-white text-xs"
                  >
                    Explore
                  </Button> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Bottom CTA
      <div className="text-center pt-8">
        <Card className="bg-gradient-to-r from-[#BE1E2D] to-[#A01825] border-none text-white overflow-hidden">
          <CardContent className="p-8 relative">
            <div className="absolute top-0 right-0 opacity-10">
              <Award className="h-32 w-32" />
            </div>
            <div className="relative z-10 space-y-4">
              <h3 className="text-2xl font-bold">Need Help Choosing?</h3>
              <p className="text-white/90 max-w-2xl mx-auto">
                Our medical advisors are here to help you find the right specialty and treatment plan 
                for your unique health needs.
              </p>
              <Button 
                size="lg"
                className="bg-white text-[#BE1E2D] hover:bg-white/90 hover:scale-105 transition-all"
              >
                Consult Our Experts
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div> */}
    </section>
  )
} 