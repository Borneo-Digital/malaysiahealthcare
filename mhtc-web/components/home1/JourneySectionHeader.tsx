"use client";

import { motion } from "framer-motion";

interface JourneySectionHeaderProps {
  isRTL?: boolean;
}

export default function JourneySectionHeader({ isRTL = false }: JourneySectionHeaderProps) {
  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Your Healthcare Journey in 4 Simple Steps
      </motion.h2>
      <motion.p 
        className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
      >
        From initial consultation to post-treatment care, we coordinate every aspect of your medical travel experience
      </motion.p>
    </div>
  );
} 