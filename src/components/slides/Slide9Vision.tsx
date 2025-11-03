import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const Slide9Vision = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_4.png"
          alt="floating bubbles background"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      <motion.div
        className="absolute top-16 left-16 z-20"
        animate={{
          rotate: [-5, 5, -5],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-7xl">🔭</div>
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        >
          <span className="text-3xl">✨</span>
        </motion.div>
      ))}

      <div className="relative z-10 max-w-4xl w-full">
        <InteractiveTitle
          text="Mi Visión"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          <Card className="bg-card/90 backdrop-blur-sm text-card-foreground p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-secondary/30 relative overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`ray-${i}`}
                className="absolute bg-gradient-1 opacity-10"
                style={{
                  width: '200px',
                  height: '4px',
                  top: `${25 + i * 20}%`,
                  left: i % 2 === 0 ? '-100px' : 'auto',
                  right: i % 2 === 1 ? '-100px' : 'auto',
                  transformOrigin: i % 2 === 0 ? 'right' : 'left',
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: 'easeInOut',
                }}
              />
            ))}

            <div className="relative z-10">
              <motion.div
                className="text-6xl text-center mb-8"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🌟
              </motion.div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-foreground text-center font-sans">
                Convertirme en una profesional que impacte positivamente a mi comunidad, construyendo un futuro donde pueda aplicar mi creatividad y conocimientos, sin dejar de aprender y explorar el mundo.
              </p>
            </div>
          </Card>
        </AnimatedParagraph>
      </div>

      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`balloon-${i}`}
          className="absolute"
          style={{
            left: `${70 + i * 8}%`,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(i) * 30, 0],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            delay: i * 1.5,
            ease: 'linear',
          }}
        >
          <span className="text-5xl">🎈</span>
        </motion.div>
      ))}
    </div>
  );
};
