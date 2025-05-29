"use client"

import { useState, useEffect } from "react"

interface ScrollPosition {
  scrollY: number
  scrollDirection: "up" | "down" | null
  lastScrollY: number
}

export function useScrollPosition(): ScrollPosition {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    scrollY: 0,
    scrollDirection: null,
    lastScrollY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      const scrollDirection = currentScrollY > scrollPosition.lastScrollY ? "down" : "up"

      setScrollPosition({
        scrollY: currentScrollY,
        scrollDirection,
        lastScrollY: currentScrollY,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollPosition.lastScrollY])

  return scrollPosition
}

