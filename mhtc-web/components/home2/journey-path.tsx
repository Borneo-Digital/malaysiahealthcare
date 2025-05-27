"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function JourneyPath() {
  const [windowHeight, setWindowHeight] = useState(0)

  useEffect(() => {
    setWindowHeight(window.innerHeight)

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollY } = useScroll()
  const pathLength = useTransform(scrollY, [0, windowHeight * 4], [0, 1])

  return (
    <div className="fixed left-0 top-0 w-full h-full pointer-events-none z-[5] opacity-20">
      <svg
        className="absolute left-0 top-0 w-full h-[500vh]"
        viewBox="0 0 100 500"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M10,0 C50,100 80,120 20,200 C-20,280 40,300 60,400 C70,450 30,480 50,500"
          stroke="#C8102E"
          strokeWidth="0.5"
          strokeDasharray="1"
          style={{
            pathLength,
            strokeDashoffset: 0,
          }}
        />

        {/* Journey Markers */}
        <motion.circle cx="10" cy="0" r="1" fill="#C8102E" style={{ opacity: pathLength }} />
        <motion.circle
          cx="20"
          cy="200"
          r="1"
          fill="#C8102E"
          style={{ opacity: useTransform(pathLength, [0.2, 0.3], [0, 1]) }}
        />
        <motion.circle
          cx="60"
          cy="400"
          r="1"
          fill="#C8102E"
          style={{ opacity: useTransform(pathLength, [0.6, 0.7], [0, 1]) }}
        />
        <motion.circle
          cx="50"
          cy="500"
          r="1"
          fill="#C8102E"
          style={{ opacity: useTransform(pathLength, [0.9, 1], [0, 1]) }}
        />
      </svg>
    </div>
  )
} 