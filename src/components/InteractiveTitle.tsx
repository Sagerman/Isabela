import { motion } from 'framer-motion';
import { useState } from 'react';

interface InteractiveTitleProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const InteractiveTitle = ({ text, className = '', as = 'h1' }: InteractiveTitleProps) => {
  const Component = motion[as];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Component
      className={`font-headline font-bold text-foreground whitespace-nowrap ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          className="inline-block cursor-pointer"
          animate={{
            scale: hoveredIndex === index ? 1.5 : 1,
            color: hoveredIndex === index ? 'hsl(340, 100%, 50%)' : 'hsl(340, 60%, 30%)',
            rotate: hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
            y: hoveredIndex === index ? -10 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  );
};
