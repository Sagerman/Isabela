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

  // --- ¡ARREGLO MAYOR AQUÍ! ---
  // Dividimos el texto en palabras y luego en letras dentro de cada palabra
  const words = text.split(' ');

  return (
    <Component
      className={`font-headline font-bold text-foreground ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, wordIndex) => (
        <span key={`word-${wordIndex}`} className="inline-block"> {/* Contenedor para cada palabra */}
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={`${wordIndex}-${charIndex}`}
              variants={child}
              onMouseEnter={() => setHoveredIndex(wordIndex * 100 + charIndex)} // ID único para cada letra
              onMouseLeave={() => setHoveredIndex(null)}
              className="inline-block cursor-pointer"
              animate={{
                scale: hoveredIndex === (wordIndex * 100 + charIndex) ? 1.5 : 1,
                color: hoveredIndex === (wordIndex * 100 + charIndex) ? 'hsl(340, 100%, 50%)' : 'hsl(340, 60%, 30%)',
                rotate: hoveredIndex === (wordIndex * 100 + charIndex) ? [0, -10, 10, -10, 0] : 0,
                y: hoveredIndex === (wordIndex * 100 + charIndex) ? -10 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: 'easeOut',
              }}
            >
              {char}
            </motion.span>
          ))}
          {/* Añadir un espacio entre palabras si no es la última */}
          {wordIndex < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </Component>
  );
};