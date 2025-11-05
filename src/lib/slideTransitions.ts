import { Variants } from 'framer-motion';

// Base transition properties for consistency
const baseTransition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
  mass: 1,
  duration: 0.8,
  ease: 'easeInOut',
};

// --- Slide 1: Zoom In from Center ---
export const zoomInTransition: Variants = {
  enter: {
    opacity: 0,
    scale: 0.5,
    rotate: -15,
    filter: 'blur(10px)',
  },
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    filter: 'blur(0px)',
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 150, damping: 20 },
      rotate: { ...baseTransition, stiffness: 100, damping: 15 },
      opacity: { duration: 0.5 },
      filter: { duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    rotate: 15,
    filter: 'blur(10px)',
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 150, damping: 20 },
      rotate: { ...baseTransition, stiffness: 100, damping: 15 },
      opacity: { duration: 0.5 },
      filter: { duration: 0.5 },
    },
  },
};

// --- Slide 2: Perspective Card Flip ---
export const perspectiveFlipTransition: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction > 0 ? 90 : -90,
    scale: 0.8,
    originX: direction > 0 ? 0 : '100%',
    perspective: 1000,
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    originX: '50%',
    perspective: 1000,
    transition: {
      ...baseTransition,
      rotateY: { ...baseTransition, stiffness: 200, damping: 25, duration: 1 },
      x: { ...baseTransition, stiffness: 200, damping: 25, duration: 1 },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction < 0 ? 90 : -90,
    scale: 0.8,
    originX: direction < 0 ? 0 : '100%',
    perspective: 1000,
    transition: {
      ...baseTransition,
      rotateY: { ...baseTransition, stiffness: 200, damping: 25, duration: 1 },
      x: { ...baseTransition, stiffness: 200, damping: 25, duration: 1 },
      opacity: { duration: 0.5 },
    },
  }),
};

// --- Slide 3: Swirl & Expand ---
export const swirlExpandTransition: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.2,
    rotate: direction > 0 ? 180 : -180,
    x: direction > 0 ? '50%' : '-50%',
    y: direction > 0 ? '50%' : '-50%',
  }),
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    y: 0,
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20 },
      opacity: { duration: 0.5 },
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.2,
    rotate: direction < 0 ? 180 : -180,
    x: direction < 0 ? '50%' : '-50%',
    y: direction < 0 ? '50%' : '-50%',
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20 },
      opacity: { duration: 0.5 },
    },
  }),
};

// --- Slide 4: Cube Rotate ---
export const cubeRotateTransition: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction > 0 ? 90 : -90,
    scale: 0.9,
    transformOrigin: 'center center',
  }),
  center: {
    x: 0,
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transformOrigin: 'center center',
    transition: {
      ...baseTransition,
      rotateY: { ...baseTransition, stiffness: 220, damping: 28, duration: 1.2 },
      x: { ...baseTransition, stiffness: 220, damping: 28, duration: 1.2 },
      opacity: { duration: 0.6 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    rotateY: direction < 0 ? 90 : -90,
    scale: 0.9,
    transformOrigin: 'center center',
    transition: {
      ...baseTransition,
      rotateY: { ...baseTransition, stiffness: 220, damping: 28, duration: 1.2 },
      x: { ...baseTransition, stiffness: 220, damping: 28, duration: 1.2 },
      opacity: { duration: 0.6 },
    },
  }),
};

// --- Slide 5: Fade & Slide Up (Color Burst) ---
export const fadeSlideUpTransition: Variants = {
  enter: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...baseTransition,
      y: { ...baseTransition, stiffness: 180, damping: 22 },
      opacity: { duration: 0.7 },
    },
  },
  exit: {
    opacity: 0,
    y: -50,
    scale: 0.9,
    transition: {
      ...baseTransition,
      y: { ...baseTransition, stiffness: 180, damping: 22 },
      opacity: { duration: 0.7 },
    },
  },
};

// --- Slide 6: Record Spin (Song) ---
export const recordSpinTransition: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    scale: 0.5,
    rotate: direction > 0 ? 360 : -360,
  }),
  center: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20, duration: 1.5 },
      opacity: { duration: 0.6 },
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    scale: 0.5,
    rotate: direction < 0 ? 360 : -360,
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20, duration: 1.5 },
      opacity: { duration: 0.6 },
    },
  }),
};

// --- Slide 7: Cinematic Reveal (Movie) ---
export const cinematicRevealTransition: Variants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? '100%' : '-100%',
    scaleX: 0.5,
    transformOrigin: direction > 0 ? 'left' : 'right',
  }),
  center: {
    opacity: 1,
    x: 0,
    scaleX: 1,
    transformOrigin: 'center',
    transition: {
      ...baseTransition,
      x: { ...baseTransition, stiffness: 200, damping: 25 },
      scaleX: { ...baseTransition, stiffness: 180, damping: 22 },
      opacity: { duration: 0.6 },
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction < 0 ? '100%' : '-100%',
    scaleX: 0.5,
    transformOrigin: direction < 0 ? 'left' : 'right',
    transition: {
      ...baseTransition,
      x: { ...baseTransition, stiffness: 200, damping: 25 },
      scaleX: { ...baseTransition, stiffness: 180, damping: 22 },
      opacity: { duration: 0.6 },
    },
  }),
};

// --- Slide 8: Mission Statement (Gentle Fade & Scale) ---
export const gentleFadeScaleTransition: Variants = {
  enter: {
    opacity: 0,
    scale: 0.95,
    y: 20,
  },
  center: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      ...baseTransition,
      type: 'tween', // Más suave para este
      duration: 0.8,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: -20,
    transition: {
      ...baseTransition,
      type: 'tween',
      duration: 0.8,
      ease: 'easeIn',
    },
  },
};

// --- Slide 9: Vision (Fly In from Top with Bounce) ---
export const flyInBounceTransition: Variants = {
  enter: {
    opacity: 0,
    y: '-100%',
    scale: 0.8,
  },
  center: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      ...baseTransition,
      type: 'spring',
      stiffness: 150,
      damping: 10, // Menos damping para más rebote
      mass: 1.2,
      duration: 1,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: '100%',
    scale: 0.8,
    transition: {
      ...baseTransition,
      type: 'spring',
      stiffness: 150,
      damping: 10,
      mass: 1.2,
      duration: 1,
      ease: 'easeIn',
    },
  },
};

// --- Slide 10: Goals (Explode & Assemble) ---
export const explodeAssembleTransition: Variants = {
  enter: {
    opacity: 0,
    scale: 0.2,
    x: 'random(-200, 200)', // Posición aleatoria
    y: 'random(-200, 200)',
    rotate: 'random(-180, 180)',
  },
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotate: 0,
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20 },
      x: { ...baseTransition, stiffness: 150, damping: 20 },
      y: { ...baseTransition, stiffness: 150, damping: 20 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    x: 'random(-200, 200)',
    y: 'random(-200, 200)',
    rotate: 'random(-180, 180)',
    transition: {
      ...baseTransition,
      scale: { ...baseTransition, stiffness: 180, damping: 22 },
      rotate: { ...baseTransition, stiffness: 150, damping: 20 },
      x: { ...baseTransition, stiffness: 150, damping: 20 },
      y: { ...baseTransition, stiffness: 150, damping: 20 },
      opacity: { duration: 0.5 },
    },
  },
};