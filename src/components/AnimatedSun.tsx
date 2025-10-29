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
      {/* Sol hermoso con rayos */}
      <motion.div
        className="fixed top-16 z-40 pointer-events-none"
        style={{ left: sunPosition }}
      >
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* Círculo del sol */}
          <motion.div
            className="absolute"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: '100px',
                height: '100px',
                background: 'radial-gradient(circle at 30% 30%, #FFF59D, #FFD54F 40%, #FFA726 70%, #FF9800)',
                boxShadow: '0 0 40px rgba(255, 193, 7, 0.6), inset 0 0 20px rgba(255, 255, 255, 0.3)',
              }}
            />
          </motion.div>

          {/* Rayos del sol - correctamente posicionados alrededor */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16;
            const radian = (angle * Math.PI) / 180;
            const distance = 70; // Distancia desde el centro
            const rayX = Math.cos(radian) * distance;
            const rayY = Math.sin(radian) * distance;

            return (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${rayX}px, ${rayY}px) rotate(${angle + 90}deg)`,
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 2 + (i % 3) * 0.3,
                  repeat: Infinity,
                  delay: i * 0.08,
                  ease: 'easeInOut',
                }}
              >
                <div
                  className="bg-gradient-to-t from-yellow-400 via-yellow-300 to-yellow-200"
                  style={{
                    width: '10px',
                    height: '45px',
                    borderRadius: '50% 50% 40% 40%',
                    boxShadow: '0 0 8px rgba(255, 200, 0, 0.4)',
                  }}
                />
              </motion.div>
            );
          })}
        </div>
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
