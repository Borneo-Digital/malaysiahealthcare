"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "../ui/scroll-area"
import { motion, useInView } from "framer-motion"
import { TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"

export default function HospitalNetwork() {
  const [activeSpecialty, setActiveSpecialty] = useState("all")
  const [openTooltip, setOpenTooltip] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  const specialties = [
    { id: "all", name: "All Specialties" },
    { id: "cardiology", name: "Cardiology" },
    { id: "orthopedics", name: "Orthopedics" },
    { id: "fertility", name: "Fertility" },
    { id: "oncology", name: "Oncology" },
    { id: "neurology", name: "Neurology" },
  ]

  const hospitals = [
    {
      id: 1,
      name: "Gleneagles Kuala Lumpur",
      logo: "/images/hospitals/gleneagles-logo.png",
      specialties: ["cardiology", "orthopedics", "oncology"],
      location: { x: 140.3, y: 210.9 },
      city: "Kuala Lumpur",
      beds: 330,
    },
    {
      id: 2,
      name: "Sunway Medical Centre",
      logo: "/images/hospitals/sunway-logo.png",
      specialties: ["fertility", "orthopedics", "neurology"],
      location: { x: 131.5, y: 198.2 },
      city: "Petaling Jaya",
      beds: 600,
    },
    {
      id: 3,
      name: "Prince Court Medical Centre",
      logo: "/images/hospitals/princecourt-logo.webp",
      specialties: ["cardiology", "oncology", "neurology"],
      location: { x: 140.3, y: 210.9 },
      city: "Kuala Lumpur",
      beds: 270,
    },
    {
      id: 4,
      name: "Island Hospital Penang",
      logo: "/images/hospit als/islandhospital-logo.png.webp",
      specialties: ["fertility", "orthopedics", "cardiology"],
      location: { x: 83.1, y: 106.1 },
      city: "Penang",
      beds: 300,
    },
    {
      id: 5,
      name: "KPJ Ampang Puteri",
      logo: "/images/hospitals/kpj-ampang-puteri-logo.png",
      specialties: ["oncology", "neurology", "fertility"],
      location: { x: 140.3, y: 210.9 },
      city: "Ampang",
      beds: 200,
    },
    {
      id: 6,
      name: "Thomson Hospital Kota Damansara",
      logo: "/images/hospitals/thomson-logo.png",
      specialties: ["cardiology", "fertility", "orthopedics"],
      location: { x: 131.5, y: 198.2 },
      city: "Kota Damansara",
      beds: 250,
    },
  ]

  const filteredHospitals =
    activeSpecialty === "all"
      ? hospitals
      : hospitals.filter((hospital) => hospital.specialties.includes(activeSpecialty))

  return (
    <section className="py-20 bg-white" id="hospitals" ref={sectionRef}>
      <div className="container mx-auto max-w-[1200px] px-4">
        <motion.h2
          className="text-[36px] font-bold text-center text-[#C8102E] mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          OUR HOSPITAL NETWORK
        </motion.h2>

        {/* Specialty Filters */}
        <motion.div
          className="flex flex-wrap justify-center mb-10 gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {specialties.map((specialty) => (
            <Button
              key={specialty.id}
              variant={activeSpecialty === specialty.id ? "default" : "outline"}
              className={`
                ${
                  activeSpecialty === specialty.id
                    ? "bg-[#C8102E] hover:bg-[#A50E25] text-white"
                    : "border-gray-300 text-gray-700 hover:border-[#C8102E] hover:text-[#C8102E]"
                }
                transition-all duration-300
              `}
              onClick={() => setActiveSpecialty(specialty.id)}
            >
              {specialty.name}
              {activeSpecialty !== "all" && specialty.id !== "all" && (
                <span className="ml-2 text-xs bg-white/20 px-1.5 py-0.5 rounded-full">
                  {hospitals.filter((h) => h.specialties.includes(specialty.id)).length}
                </span>
              )}
            </Button>
          ))}
        </motion.div>

        {/* Malaysia Map with Hospital Locations */}
        <motion.div
          className="relative w-full h-[400px] mb-10 bg-gray-100 rounded-lg overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image src="/images/my.svg" alt="Malaysia Map" fill className="object-contain" />

          {/* Hospital Location Indicators */}
          <TooltipProvider>
            {filteredHospitals.map((hospital) => (
              <div key={hospital.id}>
                <TooltipTrigger>
                  <motion.div
                    className={`absolute w-4 h-4 bg-[#C8102E] rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer ${
                      openTooltip === hospital.id ? "z-20" : "z-10"
                    }`}
                    style={{
                      left: `${(hospital.location.x / 1000) * 100}%`,
                      top: `${(hospital.location.y / 332) * 100}%`,
                    }}
                    animate={{
                      scale: openTooltip === hospital.id ? 1.5 : 1,
                      boxShadow: openTooltip === hospital.id ? "0 0 0 4px rgba(200, 16, 46, 0.3)" : "none",
                    }}
                    onClick={() => setOpenTooltip(openTooltip === hospital.id ? null : hospital.id)}
                  >
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full"></span>
                    {/* Pulsing animation */}
                    <span className="absolute inset-0 rounded-full bg-[#C8102E] animate-ping opacity-30"></span>
                  </motion.div>
                </TooltipTrigger>
                {openTooltip === hospital.id && (
                  <TooltipContent>
                    <div className="p-1">
                      <p className="font-bold">{hospital.name}</p>
                      <p className="text-xs">{hospital.city}</p>
                      <p className="text-xs">{hospital.beds} beds</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {hospital.specialties.map((spec) => (
                          <span key={spec} className="text-[10px] bg-gray-100 px-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TooltipContent>
                )}
              </div>
            ))}
          </TooltipProvider>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-center mb-6"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Spotlighted Hospitals
        </motion.h3>

        {/* Hospital Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ScrollArea className="w-full">
            <div className="flex space-x-6 py-4 px-2">
              {filteredHospitals.map((hospital) => (
                <motion.div
                  key={hospital.id}
                  className="flex-shrink-0 w-[180px] h-[140px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-center cursor-pointer border border-gray-100 hover:border-[#C8102E]"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={hospital.logo || "/placeholder.svg"}
                    alt={hospital.name}
                    width={160}
                    height={80}
                    className="object-contain mb-3"
                  />
                  {/* <p className="text-xs text-center text-gray-700 font-medium">{hospital.name}</p>*/}
                </motion.div>
              ))}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </section>
  )
} 