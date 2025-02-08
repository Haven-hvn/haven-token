import { Variants } from "framer-motion";

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

export const staggerChildren = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleHover: Variants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
};

export const slideIn: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

export const easeInOut = {
  type: "tween",
  duration: 0.3,
  ease: "easeInOut",
};

// Mobile menu animations
export const mobileMenuAnim: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, ease: "easeInOut" },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: "easeInOut" },
      opacity: { duration: 0.2, ease: "easeInOut" },
    },
  },
};

// Hero section animations
export const heroTextAnim: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

// Scroll-triggered animations
export const scrollFadeIn: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Page transitions
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
};

// Animation helpers
export const createStaggeredFadeIn = (staggerAmount = 0.1) => ({
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * staggerAmount,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
});
