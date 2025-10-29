import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { GrowingTree } from '@/components/GrowingTree';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';

export const Slide2QuienSoy = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Árbol que crece */}
      <GrowingTree />

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_3.png"
          alt="botanical line texture"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
      </div>

      {/* Fotos de Isabela decorativas */}
      <motion.div
        className="absolute top-12 right-12 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -8 }}
        transition={{ delay: 1.5, duration: 1, ease: 'backOut' }}
      >
        <motion.div
          className="relative"
          animate={{
            rotate: [-8, -6, -8],
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="https://c.animaapp.com/mhbwykrcWWxvya/img/imagen-de-whatsapp-2025-10-28-a-las-21-45-30_c9847b47.jpg"
            alt="Isabela"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl border-4 border-white"
            style={{
              transform: 'rotate(-8deg)',
            }}
          />
          {/* Decoración de esquina */}
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full shadow-lg flex items-center justify-center">
            <span className="text-2xl">✨</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-32 left-12 z-20"
        initial={{ opacity: 0, scale: 0.5, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 10 }}
        transition={{ delay: 2, duration: 1, ease: 'backOut' }}
      >
        <motion.div
          className="relative"
          animate={{
            rotate: [10, 12, 10],
            y: [0, 5, 0],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <img
            src="https://c.animaapp.com/mhbwykrcWWxvya/img/imagen-de-whatsapp-2025-10-28-a-las-21-45-31_378219c7.jpg"
            alt="Isabela"
            className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl border-4 border-white"
            style={{
              transform: 'rotate(10deg)',
            }}
          />
          {/* Decoración de esquina */}
          <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-tertiary rounded-full shadow-lg flex items-center justify-center">
            <span className="text-2xl">💖</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="¿Quién soy?"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-12 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          <Card className="bg-card/90 backdrop-blur-sm text-card-foreground p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-secondary/30">
            <p className="text-lg md:text-xl leading-relaxed text-foreground">
              ¡Hola a todos! Mi nombre es Isabela, tengo 16 años y mi cumpleaños es el 6 de junio.
              <br /><br />
              Soy de Venezuela, pero crecí en la tierra del joropo, Villavicencio, y ahora vivo aquí en Granada, 
              una estudiante de décimo grado en el Colegio Luis Carlos Galán Sarmiento. Me dicen que soy una 
              persona muy amigable y también juiciosa con mis estudios. ¿Mi pasatiempo favorito? ¡Definitivamente comer!
            </p>
          </Card>
        </AnimatedParagraph>
      </div>

      {/* Elementos decorativos flotantes */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
          }}
          transition={{
            delay: 2 + i * 0.3,
            duration: 2,
            repeat: Infinity,
            repeatDelay: 3,
          }}
        >
          <span className="text-3xl">✨</span>
        </motion.div>
      ))}
    </div>
  );
};
