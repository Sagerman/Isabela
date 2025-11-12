import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Importamos tu nuevo GIF de fondo
import fondoAnimado from '../../assets/slide9-fondo.gif';

export const Slide9Vision = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      
      {/* Fondo con tu GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado}
          alt="Fondo animado de visión"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Telescopio flotante (CONSERVADO) */}
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

      {/* Destellos flotantes (CONSERVADOS) */}
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

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl w-full">
        <InteractiveTitle
          text="Mi Visión"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          {/* --- ¡CAMBIO DE ESTÉTICA AQUÍ! --- */}
          {/* 1. Cambiado a 'bg-black/10' (¡Súper transparente!) */}
          {/* 2. Cambiado a 'backdrop-blur-sm' (Menos desenfoque) */}
          <Card className="bg-black/10 backdrop-blur-sm text-white p-10 md:p-16 rounded-3xl shadow-2xl border-2 border-white/30 relative overflow-hidden">
            {/* Rayos de luz (CONSERVADOS) */}
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
              {/* Estrella central (CONSERVADA) */}
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
              
              {/* Texto de la visión (CONSERVADO) */}
              <p className="text-xl md:text-2xl leading-relaxed text-white text-center font-sans [text-shadow:_0_1px_2px_rgb(0_0_0_/_0.5)]">
                Mi visión es convertirme en una persona realizada, feliz y segura de lo que soy, viviendo una vida equilibrada donde logre mis metas personales y profesionales, y dejando una huella positiva en quienes me rodean.
              </p>
            </div>
          </Card>
        </AnimatedParagraph>
      </div>

      {/* Globos flotantes (CONSERVADOS) */}
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