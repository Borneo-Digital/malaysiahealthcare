"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AnimatedHero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  };

  return (
    <motion.div
      className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        {...fadeInUp}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-shadow-lg flex flex-col items-center gap-6"
        tabIndex={0}
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Experience
        </motion.span>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Malaysia Healthcare
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto sm:max-w-none"
      >
        <Link href="/healthcare-travel-guide" className="w-full sm:w-auto">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto px-8 group transition-all duration-300"
          >
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
              Start Your Journey
            </span>
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
