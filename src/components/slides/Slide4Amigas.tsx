import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
// --- ¡CAMBIO 1! Importamos 'useAnimation' ---
import { motion, useAnimation } from 'framer-motion'; 

// (Importamos el GIF de fondo)
import fondoAnimado from '../../assets/slide4-fondo.gif';

interface Friend {
  id: number;
  image: string;
  name: string;
}

interface FriendCardProps {
  friend: Friend;
  delay: number;
}

const FriendCard = ({ friend, delay }: FriendCardProps) => {
  // --- ¡CAMBIO 2! Añadimos el control de animación ---
  const heartControls = useAnimation();

  // Esta función se activa con el clic
  const handleTap = async () => {
    // 1. Muestra el corazón, lo hace grande y lo mueve hacia arriba
    await heartControls.start({
      opacity: 1,
      scale: 2.5,
      y: -60,
      transition: { duration: 0.4, ease: 'easeOut' },
    });
    // 2. Lo desvanece
    await heartControls.start({
      opacity: 0,
      transition: { duration: 0.2, ease: 'easeIn' },
    });
    // 3. Lo resetea a su posición inicial (invisible)
    await heartControls.start({
      scale: 0,
      y: 0,
      transition: { duration: 0 },
    });
  };


  return (
    <motion.div
      className="flex flex-col items-center gap-6"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.8, ease: 'backOut' }}
    >
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
        // --- ¡CAMBIO 3! Añadimos el evento 'onTap' (clic) ---
        onTap={handleTap}
      >
        <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-white relative">
          <img
            src={friend.image}
            alt={friend.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent" />
        </div>
        
        {/* Decoración de corazón (fija) */}
        <motion.div
          className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-1 rounded-full shadow-lg flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-2xl">💖</span>
        </motion.div>

        {/* --- ¡CAMBIO 4! El corazón animado que "explota" --- */}
        <motion.span
          className="absolute text-6xl pointer-events-none z-50"
          style={{
            // Lo centramos en la imagen
            top: '50%', 
            left: '50%',
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={heartControls} // Lo conectamos a nuestros controles
        >
          💖
        </motion.span>
        {/* --- FIN DEL CAMBIO --- */}

      </motion.div>
      
      {/* El nombre (sin cambios) */}
      <motion.div
        className="bg-card/90 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg flex items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        <p className="text-2xl md:text-3xl font-headline font-bold text-foreground">
          {friend.name}
        </p>
      </motion.div>
    </motion.div>
  );
};

export const Slide4Amigas = () => {
  // Nombres fijos (sin cambios)
  const [friends, setFriends] = useState<Friend[]>([
    { 
      id: 1,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-16_3fb3ba22.jpg', 
      name: 'Karen'
    },
    { 
      id: 2,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-18_637066c2.jpg', 
      name: 'Mafe y Karen'
    },
    { 
      id: 3,
      image: 'https://c.animaapp.com/mhby8jgcFN56I9/img/imagen-de-whatsapp-2025-10-28-a-las-21-47-19_8051916f.jpg', 
      name: 'Luisa y Cata'
    },
  ]);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      
      {/* Fondo con tu GIF (sin cambios) */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado}
          alt="Fondo animado de amigas"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Elementos decorativos flotantes (sin cambios) */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: 'easeInOut',
          }}
        >
          <span className="text-3xl opacity-40">
            {i % 3 === 0 ? '💕' : i % 3 === 1 ? '✨' : '🌸'}
          </span>
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full">
        <InteractiveTitle
          text="Mis amigas"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground"
        />

        <AnimatedParagraph delay={1}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8 lg:gap-16">
            {friends.map((friend, index) => (
              <FriendCard
                key={friend.id}
                friend={friend}
                delay={1.4 + index * 0.2}
              />
            ))}
          </div>
        </AnimatedParagraph>

        {/* Mensaje especial (sin cambios) */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <p className="text-xl md:text-2xl font-headline text-foreground/80 italic">
            "Las mejores amigas hacen los mejores recuerdos" 💕
          </p>
        </motion.div>
      </div>
    </div>
  );
};