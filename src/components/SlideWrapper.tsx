import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';

interface SlideWrapperProps {
  children: ReactNode;
  isActive: boolean;
  slideIndex: number;
}

export const SlideWrapper = ({ children, isActive, slideIndex }: SlideWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      {isActive && (
        <motion.section
          key={slideIndex}
          className="fixed inset-0 w-full h-screen flex items-center justify-center overflow-hidden"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {children}
        </motion.section>
      )}
    </AnimatePresence>
  );
};
