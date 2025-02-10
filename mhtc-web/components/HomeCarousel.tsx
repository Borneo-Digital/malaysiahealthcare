"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/images/carousel/slide1.jpg",
    title: "Welcome to Malaysia Healthcare",
    description: "Experience world-class healthcare services",
  },
  {
    id: 2,
    image: "/images/carousel/slide2.jpg",
    title: "State-of-the-Art Facilities",
    description: "Advanced medical technology and expert care",
  },
  {
    id: 3,
    image: "/images/carousel/slide3.jpg",
    title: "Your Health Journey",
    description: "Personalized care for your well-being",
  },
];

export default function HomeCarousel() {
  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                  {slide.title}
                </h2>
                <p className="text-xl md:text-2xl text-center max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
