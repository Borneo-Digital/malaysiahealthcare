"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedHeroProps {
  translations: {
    title: string;
    subtitle: string;
  };
}

export default function AnimatedHero({ translations }: AnimatedHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <div className="relative h-[70vh] min-h-[600px] w-full overflow-hidden z-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Malaysia Healthcare"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />{" "}
        {/* Darkening overlay */}
      </div>

      <motion.div
        className="relative h-full flex items-center justify-center text-center text-white px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h1
            {...fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg"
            tabIndex={0}
          >
            {translations.title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-shadow-lg"
          >
            {translations.subtitle}
          </motion.h2>
        </div>
      </motion.div>

      {/* Pagination dots at bottom */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
        <span className="h-2 w-2 rounded-full bg-white opacity-100"></span>
        <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
        <span className="h-2 w-2 rounded-full bg-white opacity-50"></span>
      </div>
    </div>
  );
}
