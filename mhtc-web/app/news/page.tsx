import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'News & Articles | Malaysia Healthcare Travel Council',
  description: 'Stay updated with the latest news, articles, and insights from Malaysia Healthcare Travel Council.',
}

const newsArticles = [
  {
    id: 1,
    title: 'Malaysia Ranked Top Healthcare Destination in Southeast Asia',
    excerpt: 'Malaysia has been recognized as the leading healthcare destination in Southeast Asia, according to a recent international survey.',
    date: '2023-05-15',
    image: '/placeholder.svg?height=200&width=400&text=Healthcare+Ranking',
  },
  {
    id: 2,
    title: 'New State-of-the-Art Cancer Treatment Center Opens in Kuala Lumpur',
    excerpt: 'A cutting-edge cancer treatment facility has been inaugurated in Kuala Lumpur, offering advanced therapies and personalized care.',
    date: '2023-04-28',
    image: '/placeholder.svg?height=200&width=400&text=Cancer+Center',
  },
  {
    id: 3,
    title: 'MHTC Launches Digital Health Initiative for International Patients',
    excerpt: 'The Malaysia Healthcare Travel Council introduces a new digital platform to streamline services for international patients.',
    date: '2023-04-10',
    image: '/placeholder.svg?height=200&width=400&text=Digital+Health',
  },
]

export default function NewsUpdate() {
  return (
    <div className="container mx-auto px-4 py-16 mt-16">
      <h1 className="text-4xl font-bold text-primary mb-8">News & Articles</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <Card key={article.id}>
            <CardHeader>
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <p className="text-sm text-gray-500">{article.date}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/news/${article.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Categories</h2>
        <div className="flex flex-wrap gap-4">
          {['Healthcare Innovations', 'Patient Stories', 'Industry Updates', 'Events', 'Travel Tips'].map((category) => (
            <Button key={category} variant="outline">
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-6">Subscribe to Our Newsletter</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">Stay updated with the latest news and insights from Malaysia Healthcare Travel Council.</p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 border rounded-md"
              />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

