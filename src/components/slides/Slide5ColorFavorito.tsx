// --- ¡CAMBIO! Quitamos 'useState' y 'AnimatePresence' ---
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

// Importamos tu nuevo GIF de fondo
import fondoAnimado from '../../assets/slide5-fondo.gif';

export const Slide5ColorFavorito = () => {
  const colorFavorito = "Morado";
  // --- El texto de la explicación ---
  const explanation = "Me gusta el morado porque tiene una vibra única, como entre calma y poder. No sé, simplemente me hace sentir yo. 💜";
  
  // --- (Eliminamos el estado 'showExplanation') ---

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      
      {/* Fondo con tu GIF */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado}
          alt="Fondo animado de colores"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Paleta de colores flotante (sin cambios) */}
      <motion.div
        className="absolute top-16 right-16 z-20"
        animate={{
          rotate: [0, 10, -10, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="text-8xl">🎨</div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="Mi Color Favorito"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          {/* Tarjeta con tinte azulado y transparente (sin 'onClick') */}
          <Card 
            className="bg-blue-50/50 backdrop-blur-md text-gray-900 p-12 md:p-16 rounded-3xl shadow-2xl border border-white/30 relative overflow-hidden"
          >
            {/* Círculos de colores decorativos (sin cambios) */}
            {['#E0BBE4', '#957DAD', '#FFC7D8', '#DA2D60', '#A76DD0', '#E5AADF'].map((bgColor, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-30"
                style={{
                  width: 60 + i * 10,
                  height: 60 + i * 10,
                  backgroundColor: bgColor,
                  top: `${10 + i * 15}%`,
                  left: i % 2 === 0 ? '5%' : 'auto',
                  right: i % 2 === 1 ? '5%' : 'auto',
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            ))}

            {/* --- ¡CAMBIO! Mostramos ambos textos --- */}
            <div className="relative z-10 flex flex-col items-center gap-6">
              
              {/* 1. El color "Morado" */}
              <motion.p
                className="text-4xl md:text-5xl text-foreground text-center font-headline font-bold"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', duration: 0.8, delay: 0.5 }}
                style={{ color: 'white', backgroundColor: '#8A2BE2', padding: '1rem 2rem', borderRadius: '15px' }} 
              >
                {colorFavorito}
              </motion.p>
              
              {/* 2. La explicación (nueva) */}
              <motion.p
                className="text-center text-lg font-medium text-gray-900"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }} // Aparece un poco después del color
              >
                "{explanation}"
              </motion.p>

            </div>
            {/* --- FIN DEL CAMBIO --- */}

          </Card>
        </AnimatedParagraph>
      </div>

      {/* Pinceles y brochas flotantes (sin cambios) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`brush-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            top: `${25 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: 'easeInOut',
          }}
        >
          <span className="text-4xl opacity-40">
            {i % 2 === 0 ? '🖌️' : '✨'}
          </span>
        </motion.div>
      ))}
    </div>
  );
};