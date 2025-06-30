"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StatsSectionProps {
  isRTL?: boolean;
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  isPercentage?: boolean;
}

function Counter({ end, duration = 2, suffix = "", prefix = "", isPercentage = false }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isVisible]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onViewportEnter={() => setIsVisible(true)}
      className="text-center"
    >
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
        {prefix}{isPercentage ? count : count.toLocaleString()}{suffix}
      </div>
    </motion.div>
  );
}

export default function StatsSection({ isRTL = false }: StatsSectionProps) {
  const stats = [
    {
      value: 58,
      suffix: "",
      label: "Hospitals",
      description: "Member facilities",
    },
    {
      value: 20,
      suffix: "",
      label: "Ambulatory Care Centres",
      description: "Specialized care",
    },
    {
      value: 4,
      suffix: "",
      label: "Dental Clinics",
      description: "Oral healthcare",
    },
    {
      value: 6,
      suffix: "",
      label: "Accreditation Bodies",
      description: "International standards",
    },
  ];

  return (
    <div className={`${isRTL ? "rtl" : "ltr"}`}>
      <div className="text-center mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          Malaysia Healthcare at a Glance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-white/90 max-w-3xl mx-auto"
        >
          Key facts about healthcare travel coordination in Malaysia
        </motion.p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <Counter 
              end={stat.value} 
              suffix={stat.suffix}
              duration={2 + index * 0.2}
            />
            <h3 className="text-base font-semibold text-white mb-1">
              {stat.label}
            </h3>
            <p className="text-white/80 text-sm">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Healthcare Accreditation Standards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-12 text-center"
      >
        <h3 className="text-xl font-semibold text-white mb-6">
          International Healthcare Accreditation Standards
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">ISQua</h4>
            <p className="text-white/80 text-xs">International Society for Quality in Health Care</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">MSQH</h4>
            <p className="text-white/80 text-xs">Malaysian Society for Quality in Health</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">JCI</h4>
            <p className="text-white/80 text-xs">Joint Commission International</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">ACHS</h4>
            <p className="text-white/80 text-xs">Australian Council on Healthcare Standards</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">RTAC</h4>
            <p className="text-white/80 text-xs">Reproductive Technology Accreditation Committee</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
            <h4 className="text-sm font-bold text-white mb-1">Temos</h4>
            <p className="text-white/80 text-xs">Temos International Healthcare Accreditation</p>
          </div>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-white/90 text-sm mt-6 max-w-3xl mx-auto"
        >
          MHTC member facilities maintain certifications across multiple international and regional 
          quality standards, ensuring world-class healthcare delivery and patient safety.
        </motion.p>
      </motion.div>
    </div>
  );
} 