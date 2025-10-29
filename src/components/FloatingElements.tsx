import { motion } from 'framer-motion';

export const FloatingElements = () => {
  const stars = [...Array(8)].map((_, i) => ({
    size: 20 + Math.random() * 20,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 2,
  }));

  const hearts = [...Array(6)].map((_, i) => ({
    size: 25 + Math.random() * 15,
    x: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 8 + Math.random() * 4,
  }));

  const flowers = [...Array(5)].map((_, i) => ({
    size: 30 + Math.random() * 20,
    x: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 10 + Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Estrellas parpadeantes */}
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(50, 100%, 70%)">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </motion.div>
      ))}

      {/* Corazones flotantes */}
      {hearts.map((heart, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: '-10%',
            width: heart.size,
            height: heart.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(i) * 50, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(340, 85%, 75%)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Flores giratorias */}
      {flowers.map((flower, i) => (
        <motion.div
          key={`flower-${i}`}
          className="absolute"
          style={{
            left: `${flower.x}%`,
            top: '110%',
            width: flower.size,
            height: flower.size,
          }}
          animate={{
            y: [0, -window.innerHeight - 150],
            rotate: [0, 720],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: flower.duration,
            delay: flower.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <svg viewBox="0 0 24 24" fill="hsl(350, 90%, 80%)">
            <circle cx="12" cy="12" r="3" fill="hsl(50, 100%, 60%)" />
            <circle cx="12" cy="6" r="3" />
            <circle cx="18" cy="12" r="3" />
            <circle cx="12" cy="18" r="3" />
            <circle cx="6" cy="12" r="3" />
          </svg>
        </motion.div>
      ))}

      {/* Mariposas */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`butterfly-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 20}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <motion.div
            animate={{
              rotateY: [0, 180, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40">
              <ellipse cx="10" cy="20" rx="8" ry="12" fill="hsl(280, 80%, 70%)" />
              <ellipse cx="30" cy="20" rx="8" ry="12" fill="hsl(280, 80%, 70%)" />
              <circle cx="20" cy="20" r="3" fill="hsl(340, 60%, 30%)" />
            </svg>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
