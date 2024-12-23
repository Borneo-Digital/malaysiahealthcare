'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, CalendarIcon, Users, Clock, ChevronLeft, ChevronRight } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "International Medical Tourism Conference",
    date: "2023-07-15",
    location: "Kuala Lumpur Convention Center",
    type: "Conference",
    attendees: "500+",
    time: "9:00 AM - 5:00 PM",
    description: "Join healthcare professionals and industry experts for insights into medical tourism trends and opportunities."
  },
  {
    id: 2,
    title: "Healthcare Travel Expo",
    date: "2023-08-01",
    location: "Penang International Convention Center",
    type: "Expo",
    attendees: "1000+",
    time: "10:00 AM - 6:00 PM",
    description: "Discover the latest innovations in healthcare travel and connect with leading providers."
  },
  {
    id: 3,
    title: "Wellness Tourism Summit",
    date: "2023-09-10",
    location: "Kota Kinabalu, Sabah",
    type: "Summit",
    attendees: "300+",
    time: "9:30 AM - 4:30 PM",
    description: "Explore the intersection of wellness and medical tourism in Malaysia."
  }
]

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

export default function CalendarPage() {
  const [view, setView] = useState<'calendar' | 'list'>('calendar')
  const [currentDate, setCurrentDate] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const days = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()
    return { days, firstDay }
  }

  const { days, firstDay } = getDaysInMonth(currentDate)

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Event Calendar
        </h1>
        <p className="text-gray-600 mb-8">
          Stay updated with healthcare events and activities across Malaysia
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader className="border-b">
              <h2 className="text-xl font-semibold">Upcoming Events</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex space-x-2 mb-6">
                <Button
                  variant={view === 'calendar' ? 'secondary' : 'ghost'}
                  onClick={() => setView('calendar')}
                  className="rounded-md"
                >
                  Calendar View
                </Button>
                <Button
                  variant={view === 'list' ? 'secondary' : 'ghost'}
                  onClick={() => setView('list')}
                  className="rounded-md"
                >
                  List View
                </Button>
              </div>

              {view === 'calendar' ? (
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <button onClick={prevMonth} className="p-1">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <h3 className="text-sm font-medium">
                      {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                    </h3>
                    <button onClick={nextMonth} className="p-1">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-7 gap-0">
                    {DAYS.map(day => (
                      <div key={day} className="text-center text-sm text-gray-500 py-2">
                        {day}
                      </div>
                    ))}
                    {Array.from({ length: firstDay }).map((_, index) => (
                      <div key={`empty-${index}`} className="text-center py-2" />
                    ))}
                    {Array.from({ length: days }).map((_, index) => (
                      <div
                        key={index + 1}
                        className="text-center py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      >
                        {index + 1}
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map((event) => (
                    <Card key={event.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{event.title}</h3>
                            <p className="text-sm text-gray-600">{event.date}</p>
                          </div>
                          <Badge>{event.type}</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="border-b">
              <h2 className="text-xl font-semibold">Event Details</h2>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                {events.map((event) => (
                  <div key={event.id} className="pb-4 border-b last:border-b-0">
                    <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <CalendarIcon className="w-4 h-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {event.attendees} Expected Attendees
                      </div>
                      <p className="text-gray-600 mt-2">{event.description}</p>
                      <Button className="w-full mt-2">Register Now</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

