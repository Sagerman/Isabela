import { motion } from 'framer-motion';

interface AnimatedTitleProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
}

export const AnimatedTitle = ({ text, className = '', as = 'h1' }: AnimatedTitleProps) => {
  const Component = motion[as];
  
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
      className={`font-headline font-bold text-foreground ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, index) => (
        <motion.span key={`${char}-${index}`} variants={child}>
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </Component>
  );
};
