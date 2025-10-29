import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedParagraphProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedParagraph = ({ children, className = '', delay = 1 }: AnimatedParagraphProps) => {
  return (
    <motion.div
      className={`text-foreground ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
};
