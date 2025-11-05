import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  slideIndex: number;
  direction: number; // 1 for next, -1 for previous
  customVariants: Variants; // New prop for specific variants
}

export const SlideWrapper = ({ children, isActive, slideIndex, direction, customVariants }: SlideWrapperProps) => {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      {isActive && (
        <motion.section
          key={slideIndex}
          className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden [perspective:1200px]" // Add perspective for 3D effects
          variants={customVariants} // Use the custom variants
          initial="enter"
          animate="center"
          exit="exit"
          custom={direction}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
