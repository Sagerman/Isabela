import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// --- ¡CAMBIO! Importamos tu nuevo GIF de fondo ---
import fondoAnimado from '../../assets/slide8-fondo.gif';

export const Slide8Mision = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      
      {/* --- ¡CAMBIO! Fondo reemplazado por tu GIF --- */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado} // 1. Usamos tu GIF
          alt="Fondo animado de misión" // 2. Cambiamos el alt
          className="w-full h-full object-cover" // 3. Quitamos 'opacity-20'
          loading="lazy"
        />
      </div>

      {/* Brújula flotante (CONSERVADA) */}
      <motion.div
        className="absolute top-20 right-20 z-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <div className="relative w-32 h-32">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-secondary/40"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-5xl">🧭</span>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl w-full">
        <InteractiveTitle
          text="Mi Misión"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          {/* --- ¡CAMBIO! Tarjeta estilo "vidrio esmerilado" --- */}
          <Card className="bg-white/30 backdrop-blur-md text-gray-900 p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-white/30 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-gradient-1 opacity-20 rounded-br-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-1 opacity-20 rounded-tl-full"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 2,
              }}
            />

            <div className="relative z-10">
              <motion.div
                className="text-6xl text-center mb-8"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🎯
              </motion.div>
              
              {/* --- ¡CAMBIO! Texto más oscuro para legibilidad --- */}
              <p className="text-xl md:text-2xl leading-relaxed text-gray-800 text-center font-sans">
                Ser una persona auténtica, responsable y feliz, que aprende de cada experiencia y siempre da lo mejor de sí misma para crecer y ayudar a los demás.
              </p>
            </div>
          </Card>
        </AnimatedParagraph>
      </div>

      {/* Corazones flotantes (CONSERVADOS) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 18}%`,
            top: `${30 + (i % 2) * 30}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.5,
            ease: 'easeInOut',
          }}
        >
          <span className="text-4xl">💖</span>
        </motion.div>
      ))}
    </div>
  );
};