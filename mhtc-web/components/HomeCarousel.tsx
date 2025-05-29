"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

interface HomeCarouselProps {
  translations: {
    slides: Array<{
      id: number;
      image: string;
      title: string;
      description: string;
    }>;
  };
}

export default function HomeCarousel({ translations }: HomeCarouselProps) {
  const slides = translations.slides;

  return (
    <div className="relative w-full h-[70vh] min-h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{ 
          clickable: true,
          bulletClass: 'swiper-pagination-bullet-custom',
          bulletActiveClass: 'swiper-pagination-bullet-active-custom',
        }}
        autoplay={{ 
          delay: 6000, 
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              
              {/* Enhanced overlay with gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <div className="max-w-5xl mx-auto text-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-6"
                  >
                    <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
                      Malaysia Healthcare Travel Council
                    </span>
                  </motion.div>

                  <motion.h2 
                    className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {slide.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    <Link href="/member-hospital">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary-dark text-white px-10 py-5 h-auto text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                      >
                        Explore Our Network
                        <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Slide indicator */}
              <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm font-medium">
                {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev-custom absolute left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
        <svg className="w-6 h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button className="swiper-button-next-custom absolute right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group">
        <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Custom Pagination Styles */}
      <style jsx global>{`
        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          margin: 0 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-pagination {
          bottom: 24px !important;
        }
      `}</style>
    </div>
  );
}
