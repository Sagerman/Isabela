import { motion } from 'framer-motion';

export const FloatingDecorations = () => {
  const bubbles = [
    { size: 80, x: '10%', delay: 0, duration: 15 },
    { size: 120, x: '25%', delay: 2, duration: 18 },
    { size: 60, x: '50%', delay: 4, duration: 20 },
    { size: 100, x: '70%', delay: 1, duration: 16 },
    { size: 90, x: '85%', delay: 3, duration: 19 },
    { size: 70, x: '40%', delay: 5, duration: 17 },
  ];

  const blobs = [
    { size: 300, x: '15%', y: '20%', delay: 0 },
    { size: 250, x: '75%', y: '60%', delay: 1 },
    { size: 200, x: '50%', y: '80%', delay: 2 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Bubbles */}
      {bubbles.map((bubble, index) => (
        <motion.div
          key={`bubble-${index}`}
          className="absolute rounded-full opacity-30"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            bottom: '-10%',
            background: 'linear-gradient(135deg, hsl(340, 85%, 75%) 0%, hsl(350, 90%, 80%) 100%)',
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Pulsing Blobs */}
      {blobs.map((blob, index) => (
        <motion.div
          key={`blob-${index}`}
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            left: blob.x,
            top: blob.y,
            background: 'linear-gradient(135deg, hsl(340, 85%, 75%) 0%, hsl(350, 90%, 80%) 100%)',
          }}
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 5,
            delay: blob.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Botanical Lines */}
      <motion.img
        src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_3.png"
        alt="botanical line texture"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
        loading="lazy"
        animate={{
          rotate: [-2, 2, -2],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
