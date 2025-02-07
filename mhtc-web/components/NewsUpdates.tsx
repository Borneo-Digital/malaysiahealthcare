"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Malaysia Healthcare Wins Global Recognition",
    date: "March 15, 2024",
    image: "/images/news/news1.jpg",
    excerpt:
      "Malaysia Healthcare has been recognized as one of the world's top healthcare destinations...",
    link: "/mhtc-chronicles/healthcare-recognition",
  },
  {
    id: 2,
    title: "New Medical Tourism Packages Launched",
    date: "March 10, 2024",
    image: "/images/news/news2.jpg",
    excerpt:
      "MHTC introduces comprehensive medical tourism packages for international patients...",
    link: "/mhtc-chronicles/new-packages",
  },
  {
    id: 3,
    title: "Healthcare Innovation Summit 2024",
    date: "March 5, 2024",
    image: "/images/news/news3.jpg",
    excerpt:
      "Join us for the upcoming Healthcare Innovation Summit featuring global healthcare leaders...",
    link: "/mhtc-chronicles/innovation-summit",
  },
];

export default function NewsUpdates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Latest Updates</h2>
          <Link href="/mhtc-chronicles">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-white transition-colors"
            >
              View All News
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3">{item.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
