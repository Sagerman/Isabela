import React from 'react';
import { motion } from 'framer-motion';

const FloatingBubbles: React.FC = () => {
  const bubbles = [
    { id: 1, size: 120, left: '10%', delay: 0 },
    { id: 2, size: 80, left: '25%', delay: 1 },
    { id: 3, size: 100, left: '50%', delay: 2 },
    { id: 4, size: 90, left: '70%', delay: 1.5 },
    { id: 5, size: 110, left: '85%', delay: 0.5 },
    { id: 6, size: 70, left: '40%', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-tertiary opacity-30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.left,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: bubble.delay,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBubbles;
