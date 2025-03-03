import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Videos | Malaysia Healthcare Travel Council',
  description: 'Explore informative videos about healthcare travel in Malaysia, including patient testimonials and facility tours.',
}

const videoCategories = [
  {
    id: "featured",
    label: "Featured",
    videos: [
      {
        id: 1,
        title: "Malaysia Healthcare Overview",
        description: "An introduction to world-class healthcare services in Malaysia.",
        duration: "5:30",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Malaysia+Healthcare+Overview",
        views: "2.5K"
      },
      {
        id: 2,
        title: "Patient Testimonial: John's Journey",
        description: "Hear John's experience with cardiac treatment in Malaysia.",
        duration: "8:45",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Patient+Testimonial",
        views: "1.8K"
      },
      {
        id: 3,
        title: "Top Hospitals in Kuala Lumpur",
        description: "A tour of leading healthcare facilities in Malaysia's capital.",
        duration: "12:20",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Hospital+Tour",
        views: "3.2K"
      }
    ]
  },
  {
    id: "testimonials",
    label: "Patient Stories",
    videos: [
      {
        id: 4,
        title: "Sarah's Recovery Story",
        description: "A successful orthopedic surgery journey from Australia.",
        duration: "6:15",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Patient+Story",
        views: "1.5K"
      },
      // Add more testimonial videos
    ]
  },
  {
    id: "facilities",
    label: "Our Facilities",
    videos: [
      {
        id: 5,
        title: "State-of-the-art Medical Centers",
        description: "Explore our world-class healthcare facilities.",
        duration: "10:30",
        thumbnail: "/placeholder.svg?height=400&width=600&text=Medical+Centers",
        views: "2.1K"
      },
      // Add more facility videos
    ]
  }
]

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">
          Explore Our Videos
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover healthcare excellence in Malaysia through our curated video collection
        </p>

        <div className="mb-12">
          {/* Featured Video */}
          <div className="relative aspect-video mb-8 group cursor-pointer">
            <Image
              src="/placeholder.svg?height=600&width=1200&text=Featured+Video"
              alt="Featured Video"
              width={1200}
              height={600}
              className="rounded-lg object-cover w-full"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all rounded-lg flex items-center justify-center">
              <PlayCircle className="w-20 h-20 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h2 className="text-2xl font-bold text-white mb-2">
                Experience World-Class Healthcare in Malaysia
              </h2>
              <p className="text-white/90">
                A comprehensive look at Malaysia&apos;s healthcare excellence
              </p>
            </div>
          </div>

          {/* Video Categories */}
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="mb-6">
              {videoCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {videoCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.videos.map((video) => (
                    <Card key={video.id} className="group cursor-pointer overflow-hidden">
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all flex items-center justify-center">
                          <PlayCircle className="w-12 h-12 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                          {video.description}
                        </p>
                        <p className="text-sm text-gray-500">
                          {video.views} views
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Video Playlists */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Playlists</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Healthcare Services', 'Patient Experiences', 'Hospital Tours'].map((playlist) => (
              <Card key={playlist} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{playlist}</h3>
                  <Button variant="outline" className="w-full">
                    View Playlist
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

