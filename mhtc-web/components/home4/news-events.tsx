import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, ArrowRight } from "lucide-react"

export default function NewsEvents() {
  const newsItems = [
    {
      id: 1,
      title: 'Malaysia Healthcare Wins "Destination of the Year" Award',
      date: "2023-10-15",
      excerpt: "Malaysia Healthcare Travel Council recognized for excellence in medical tourism services.",
      image: "/images/home2/award.jpg",
    },
    {
      id: 2,
      title: "New Advanced Cancer Treatment Center Opens in Kuala Lumpur",
      date: "2023-10-08",
      excerpt: "State-of-the-art facility brings cutting-edge cancer treatments to Southeast Asia.",
      image: "/images/home2/cancer.jpg.webp",
    },
    {
      id: 3,
      title: "Malaysia Hosts International Healthcare Conference",
      date: "2023-09-28",
      excerpt: "Global healthcare leaders gather to discuss innovations in medical travel.",
      image: "/images/home2/conference.jpg.webp",
    },
  ]

  const events = [
    {
      id: 1,
      title: "Malaysia Healthcare Expo",
      date: "2023-11-15",
      location: "Kuala Lumpur Convention Centre",
    },
    {
      id: 2,
      title: "International Medical Tourism Conference",
      date: "2023-12-05",
      location: "Penang",
    },
    {
      id: 3,
      title: "Healthcare Innovation Summit",
      date: "2024-01-20",
      location: "Johor Bahru",
    },
    {
      id: 4,
      title: "Medical Travel Awards Ceremony",
      date: "2024-02-10",
      location: "Kuala Lumpur",
    },
  ]

  // Get current month and year for calendar
  const currentDate = new Date()
  const currentMonth = currentDate.toLocaleString("default", { month: "long" })
  const currentYear = currentDate.getFullYear()

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Latest News (60%) */}
          <div className="w-full lg:w-3/5">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">LATEST NEWS</h2>
              <Link href="/news">
                <Button variant="link" className="text-[#C8102E] flex items-center">
                  View All News
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>

            <div className="space-y-6">
              {newsItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-1/3 h-[200px] md:h-auto">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardContent className="p-6 w-full md:w-2/3">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <time dateTime={item.date}>
                          {new Date(item.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 hover:text-[#C8102E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <Link href={`/news/${item.id}`}>
                        <Button
                          variant="link"
                          className="p-0 text-[#C8102E] flex items-center hover:translate-x-1 transition-transform"
                        >
                          Read More
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </Button>
                      </Link>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Upcoming Events (40%) */}
          <div className="w-full lg:w-2/5">
            <h2 className="text-2xl font-bold mb-8">UPCOMING EVENTS</h2>

            {/* Calendar Widget */}
            <Card className="mb-6 overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-semibold">
                    {currentMonth} {currentYear}
                  </h3>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div key={index} className="text-sm font-medium text-gray-500 py-2">
                      {day}
                    </div>
                  ))}
                  {/* This would be dynamically generated in a real implementation */}
                  {Array.from({ length: 35 }).map((_, index) => {
                    const day = index - 3 // Adjust for month start day
                    const isCurrentMonth = day > 0 && day <= 31
                    const isToday = day === currentDate.getDate()
                    const hasEvent = events.some(
                      (event) =>
                        new Date(event.date).getDate() === day &&
                        new Date(event.date).getMonth() === currentDate.getMonth(),
                    )

                    return (
                      <div
                        key={index}
                        className={`
                          text-sm py-2 rounded-full
                          ${!isCurrentMonth ? "text-gray-300" : "text-gray-700"}
                          ${isToday ? "bg-[#C8102E] text-white" : ""}
                          ${hasEvent && !isToday ? "bg-red-100 text-[#C8102E] font-medium" : ""}
                          ${hasEvent ? "cursor-pointer hover:bg-red-200 transition-colors" : ""}
                        `}
                      >
                        {isCurrentMonth ? day : ""}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Events List */}
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h3 className="font-semibold hover:text-[#C8102E] transition-colors">{event.title}</h3>
                    <div className="text-sm text-gray-600 mt-1">
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1 text-[#C8102E]" />
                        <time dateTime={event.date}>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <div className="mt-1 ml-5">{event.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 