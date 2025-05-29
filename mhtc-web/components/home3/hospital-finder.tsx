"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/home3/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { MapPin, Search, Star } from "lucide-react"

export function HospitalFinder() {
  return (
    <div className="rounded-lg border bg-card shadow-sm">
      <div className="p-6">
        <Tabs defaultValue="map">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold">Find Hospitals Near You</h3>
              <p className="text-sm text-muted-foreground">Locate MHTC member hospitals based on your preferences</p>
            </div>
            <TabsList>
              <TabsTrigger value="map" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
                Map View
              </TabsTrigger>
              <TabsTrigger value="list" className="data-[state=active]:bg-[#C8102E] data-[state=active]:text-white">
                List View
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="mb-6 grid gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
              <Input className="pl-9" placeholder="Search hospitals" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                <SelectItem value="cardiology">Cardiology</SelectItem>
                <SelectItem value="oncology">Oncology</SelectItem>
                <SelectItem value="orthopedics">Orthopedics</SelectItem>
                <SelectItem value="fertility">Fertility</SelectItem>
                <SelectItem value="neurology">Neurology</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="State/Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All States</SelectItem>
                <SelectItem value="kl">Kuala Lumpur</SelectItem>
                <SelectItem value="selangor">Selangor</SelectItem>
                <SelectItem value="penang">Penang</SelectItem>
                <SelectItem value="johor">Johor</SelectItem>
                <SelectItem value="melaka">Melaka</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Accreditation" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Accreditations</SelectItem>
                <SelectItem value="jci">JCI Accredited</SelectItem>
                <SelectItem value="msqh">MSQH Accredited</SelectItem>
                <SelectItem value="elite">MHTC Elite Partner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <TabsContent value="map" className="mt-0">
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=500&width=1200&text=Interactive+Map+of+Malaysia"
                alt="Map of Malaysia showing hospital locations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm text-muted-foreground">Map showing hospital locations across Malaysia</p>
                </div>
              </div>

              {/* Map Markers */}
              <div className="absolute left-[30%] top-[40%] animate-pulse">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-[#C8102E]" />
                  <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                    8
                  </div>
                </div>
              </div>
              <div className="absolute left-[60%] top-[30%] animate-pulse">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-[#C8102E]" />
                  <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                    5
                  </div>
                </div>
              </div>
              <div className="absolute left-[45%] top-[70%] animate-pulse">
                <div className="relative">
                  <MapPin className="h-8 w-8 text-[#C8102E]" />
                  <div className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#C8102E] text-xs font-bold text-white">
                    3
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((hospital) => (
                <Card key={hospital} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="flex">
                    <div className="relative h-24 w-24 flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=100&width=100&text=H${hospital}`}
                        alt={`Hospital ${hospital}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <div className="mb-1 flex items-center justify-between">
                        <h4 className="font-semibold">Hospital Name {hospital}</h4>
                        <Badge variant="outline" className="bg-[#C8102E]/10 text-[#C8102E]">
                          Elite
                        </Badge>
                      </div>
                      <div className="mb-2 flex items-center text-xs text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        {["Kuala Lumpur", "Penang", "Johor"][hospital - 1]}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
                            />
                          ))}
                        </div>
                        <Button variant="link" size="sm" className="h-auto p-0 text-xs text-[#C8102E]">
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((hospital) => (
                <Card key={hospital} className="overflow-hidden transition-all hover:shadow-md">
                  <div className="relative h-40">
                    <Image
                      src={`/placeholder.svg?height=200&width=400&text=Hospital+${hospital}`}
                      alt={`Hospital ${hospital}`}
                      fill
                      className="object-cover"
                    />
                    {hospital <= 3 && (
                      <div className="absolute left-4 top-4 rounded-full bg-[#C8102E] px-3 py-1 text-xs font-medium text-white">
                        Elite Partner
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="mb-1 flex items-center justify-between">
                      <h4 className="font-semibold">Hospital Name {hospital}</h4>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="mb-2 flex items-center text-xs text-muted-foreground">
                      <MapPin className="mr-1 h-3 w-3" />
                      {["Kuala Lumpur", "Penang", "Melaka", "Johor", "Selangor", "Sabah"][hospital - 1]}
                    </div>
                    <div className="mb-3 flex flex-wrap gap-1">
                      {["Cardiology", "Oncology", "Orthopedics", "Neurology", "Fertility"]
                        .slice(0, (hospital % 3) + 2)
                        .map((specialty, index) => (
                          <span key={index} className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700">
                            {specialty}
                          </span>
                        ))}
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline" size="sm">
                        View Profile
                      </Button>
                      <Button size="sm" className="bg-[#C8102E] hover:bg-[#A00F26]">
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

