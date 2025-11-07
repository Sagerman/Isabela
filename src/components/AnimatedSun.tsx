import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const AnimatedSun = () => {
  const [sunPosition, setSunPosition] = useState(200);
  const [showCloud, setShowCloud] = useState(false);

  useEffect(() => {
    // Movimiento del sol
    let sunX = 200;
    let direction = 1;
    
    const moveSunInterval = setInterval(() => {
      sunX += direction * 2;
      
      if (sunX >= window.innerWidth - 300) {
        direction = -1;
      } else if (sunX <= 200) {
        direction = 1;
      }
      
      setSunPosition(sunX);
    }, 30);

    // Persecución de la nube cada 12 segundos
    const cloudInterval = setInterval(() => {
      setShowCloud(true);
      
      // Después de 10 segundos, ocultar la nube
      setTimeout(() => {
        setShowCloud(false);
      }, 10000);
    }, 12000);

    return () => {
      clearInterval(moveSunInterval);
      clearInterval(cloudInterval);
    };
  }, []);

  return (
    <>
      {/* Sol GIF animado */}
      <motion.div
        className="fixed top-16 z-40 pointer-events-none"
        style={{ left: sunPosition }}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <img
          src="https://cdn.pixabay.com/animation/2024/10/31/17/30/17-30-40-673_512.gif"
          alt="Sol animado brillante"
          className="w-40 h-40 md:w-48 md:h-48 object-contain drop-shadow-[0_0_40px_rgba(255,193,7,0.7)]"
        />
      </motion.div>

      {/* Nube perseguidora */}
      {showCloud && (
        <motion.div
          className="fixed top-12 z-35 pointer-events-none"
          initial={{ left: -300 }}
          animate={{ left: sunPosition - 150 }}
          transition={{
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <div className="relative">
            {/* Nube de lluvia oscura */}
            <div className="flex items-end relative">
              <motion.div 
                className="w-20 h-16 bg-gray-700 rounded-full"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.div 
                className="w-28 h-20 bg-gray-800 rounded-full -ml-10"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              />
              <motion.div 
                className="w-20 h-16 bg-gray-700 rounded-full -ml-10"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              
              {/* Cara enojada de la nube */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* Ojos enojados */}
                <div className="flex gap-3 mb-1">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                {/* Boca enojada */}
                <div className="w-6 h-1 bg-white rounded-full transform rotate-12" />
              </div>
            </div>
            
            {/* Gotas de lluvia */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-4 bg-blue-400 rounded-full"
                style={{
                  left: `${15 + i * 12}%`,
                  top: '100%',
                }}
                animate={{
                  y: [0, 30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: 'linear',
                }}
              />
            ))}
            
            {/* Relámpagos */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <svg width="20" height="30" viewBox="0 0 20 30" fill="yellow">
                <path d="M10 0 L5 15 L10 15 L7 30 L15 12 L10 12 L13 0 Z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};
