export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
}

export const smoothTransition = {
  type: "tween",
  ease: [0.25, 0.1, 0.25, 1], // Improved cubic-bezier curve
  duration: 0.5,
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...springTransition,
      duration: 0.6,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: springTransition,
  },
}

export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: springTransition,
  },
}

export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 30,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: springTransition,
  },
} 