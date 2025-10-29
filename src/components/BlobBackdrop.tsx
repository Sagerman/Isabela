import React from 'react';
import { motion } from 'framer-motion';

const BlobBackdrop: React.FC = () => {
  const blobs = [
    { id: 1, image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/ai_2.png', top: '10%', left: '5%' },
    { id: 2, image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/ai_4.png', top: '40%', right: '10%' },
    { id: 3, image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/ai_2.png', bottom: '15%', left: '15%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob) => (
        <motion.img
          key={blob.id}
          src={blob.image}
          alt={`Placeholder alt tag for asset ${blob.id === 2 ? 'ai_4' : 'ai_2'}`}
          className="absolute w-[40%] md:w-[30%] opacity-40"
          style={{
            top: blob.top,
            left: blob.left,
            right: blob.right,
            bottom: blob.bottom,
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default BlobBackdrop;
