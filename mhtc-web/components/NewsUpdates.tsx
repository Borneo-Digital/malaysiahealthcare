"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NewsUpdatesProps {
  translations: {
    title: string;
    viewAll: string;
    items: Array<{
      id: number;
      title: string;
      date: string;
      image: string;
      excerpt: string;
      link: string;
    }>;
  };
  isRTL?: boolean;
}

export default function NewsUpdates({
  translations,
  isRTL = false,
}: NewsUpdatesProps) {
  return (
    <div className={`px-4 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">{translations.title}</h2>
        <Link href="/mhtc-chronicles">
          <Button
            variant="outline"
            className="hover:bg-primary hover:text-white transition-colors"
          >
            {translations.viewAll}
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {translations.items.map((item) => (
          <Link key={item.id} href={item.link} className="block h-full">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow h-full flex flex-col">
              <div className="relative w-full h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 flex-grow">
                  {item.excerpt}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
