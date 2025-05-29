"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Eye } from "lucide-react";

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
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  return (
    <div className={`px-4 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="flex justify-between items-center mb-12">
        <div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {translations.title}
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Stay informed with the latest healthcare developments
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link href="/mhtc-chronicles">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-white transition-all duration-300 group border-2 px-6 py-3 h-auto"
            >
              {translations.viewAll}
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {translations.items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={item.link} className="block h-full group">
              <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg group-hover:scale-[1.02]">
                <div className="relative overflow-hidden">
                  <div className="relative w-full h-56">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    <Calendar className="w-3 h-3 inline mr-1" />
                    {getTimeAgo(item.date)}
                  </div>

                  {/* Read More Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <Eye className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4 mr-1" />
                    <time dateTime={item.date}>
                      {formatDate(item.date)}
                    </time>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 line-clamp-3 flex-grow leading-relaxed mb-4">
                    {item.excerpt}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
