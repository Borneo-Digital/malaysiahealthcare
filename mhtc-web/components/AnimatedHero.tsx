"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

interface AnimatedHeroProps {
  translations: {
    title: string;
    subtitle: string;
  };
}

export default function AnimatedHero({ translations }: AnimatedHeroProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="relative h-[80vh] min-h-[700px] w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt="Malaysia Healthcare"
          fill
          priority
          className="object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-white/30 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-3 h-3 bg-primary/40 rounded-full"
          animate={{
            y: [0, -30, 0],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-1 h-1 bg-white/50 rounded-full"
          animate={{
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="relative h-full flex items-center justify-center text-center text-white px-4"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <motion.h1
            {...fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}
          >
            <span className="block">{translations.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-white/90 leading-relaxed"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}
          >
            {translations.subtitle}
          </motion.h2>

          {/* Enhanced Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Discover Malaysia as your premier healthcare travel destination. 
            We connect you with world-class medical facilities and create exceptional healthcare experiences.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-center items-center mb-12"
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white px-10 py-5 h-auto text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
              >
                <Calendar className="w-6 h-6 mr-3" />
                Start Your Healthcare Journey
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center items-center gap-8 text-white/80"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">40+ JCI Hospitals</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">150+ Countries Served</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span className="text-sm font-medium">95% Satisfaction Rate</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced Pagination dots */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.span 
          className="h-3 w-8 rounded-full bg-white shadow-lg"
          animate={{ opacity: [1, 0.7, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.span>
        <span className="h-3 w-3 rounded-full bg-white/50 hover:bg-white/70 transition-colors cursor-pointer"></span>
        <span className="h-3 w-3 rounded-full bg-white/50 hover:bg-white/70 transition-colors cursor-pointer"></span>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white/70 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
