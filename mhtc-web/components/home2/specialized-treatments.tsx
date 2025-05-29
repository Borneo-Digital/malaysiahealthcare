"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SpecializedTreatments() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "cardiovascular", name: "Cardiovascular" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "fertility", name: "Fertility" },
    { id: "oncology", name: "Oncology" },
    { id: "neurology", name: "Neurology" },
  ]

  const treatments = [
    {
      id: 1,
      title: "Coronary Artery Bypass",
      description:
        "Advanced surgical procedure to restore blood flow to the heart using minimally invasive techniques.",
      image: "/images/home2/coronary.jpeg",
      category: "cardiovascular",
    },
    {
      id: 2,
      title: "Joint Replacement",
      description:
        "State-of-the-art joint replacement surgeries with rapid recovery protocols and personalized rehabilitation.",
      image: "/images/home2/joint-rep.png",
      category: "orthopedics",
    },
    {
      id: 3,
      title: "IVF Treatment",
      description:
        "Comprehensive fertility services with high success rates and compassionate care throughout your journey.",
      image: "/images/home2/ivf-treat.jpg",
      category: "fertility",
    },
    {
      id: 4,
      title: "Cancer Immunotherapy",
      description:
        "Cutting-edge immunotherapy treatments tailored to your specific cancer type with integrated supportive care.",
      image: "/images/home2/cancer.jpg.webp",
      category: "oncology",
    },
  ]

  const filteredTreatments =
    activeCategory === "all" ? treatments : treatments.filter((treatment) => treatment.category === activeCategory)

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-4 text-[#C8102E]">
          SPECIALIZED TREATMENTS
        </h2>
        
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16 leading-relaxed">
          Explore Malaysia&apos;s comprehensive range of world-class medical treatments delivered by expert specialists across our network hospitals
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center mb-16 gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              className={`
                ${
                  activeCategory === category.id
                    ? "bg-[#C8102E] hover:bg-[#A50E25] text-white"
                    : "border-gray-300 text-gray-700 hover:border-[#C8102E] hover:text-[#C8102E]"
                }
                transition-all duration-300
              `}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTreatments.map((treatment) => (
            <Card
              key={treatment.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full"
            >
              <div className="relative">
                <Image
                  src={treatment.image || "/placeholder.svg"}
                  alt={treatment.title}
                  width={280}
                  height={180}
                  className="w-full h-[180px] object-cover"
                />
                {/* Category Label */}
                <div className="absolute top-0 right-0 bg-[#C8102E] text-white text-xs font-bold py-1 px-3 uppercase">
                  {treatment.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#C8102E] transition-colors">
                  {treatment.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{treatment.description}</p>
                <div className="flex items-center text-[#C8102E] font-medium group-hover:translate-x-1 transition-transform">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 