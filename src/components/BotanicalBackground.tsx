import React from 'react';
import { motion } from 'framer-motion';

const BotanicalBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <motion.img
        src="https://c.animaapp.com/mhby8jgcFN56I9/img/ai_3.png"
        alt="botanical line art texture"
        className="absolute inset-0 w-full h-full object-cover"
        animate={{
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};

export default BotanicalBackground;
