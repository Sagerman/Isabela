import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PencilIcon, CheckIcon } from 'lucide-react';

export const Slide7PeliculaFavorita = () => {
  const [pelicula, setPelicula] = useState('Enredados');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditValue(pelicula);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      setPelicula(editValue.trim());
      setIsEditing(false);
      setEditValue('');
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32 overflow-hidden">
      {/* GIF de Enredados como fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://i.pinimg.com/originals/ff/c7/da/ffc7dab0adefaffdfd2e7d2b7b85e1b2.gif"
          alt="Enredados - Rapunzel y Flynn Rider"
          // --- CAMBIO 1: GIF A MÁXIMA VISIBILIDAD (eliminada 'opacity-70') ---
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* --- CAMBIO 2: OVERLAY ELIMINADO --- */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/0 to-background/10" /> */}
      </div>

      {/* Textura adicional sutil (la dejamos, es parte del diseño) */}
      <div className="absolute inset-0 z-1">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_4.png"
          alt="floating bubbles background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
      </div>

      {/* ... (código de claqueta y luces flotantes sin cambios) ... */}
      <motion.div
        className="absolute top-16 left-16 z-20"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {/* --- CAMBIO 3 (Opcional): Sombra para legibilidad del emoji --- */}
        <div className="text-8xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">🎬</div>
        <motion.div
          className="absolute top-1/2 left-full w-96 h-2 bg-gradient-to-r from-yellow-300/50 to-transparent"
          style={{ transformOrigin: 'left' }}
          animate={{
            scaleX: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`light-${i}`}
          className="absolute z-10"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 15}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.6,
            ease: 'easeInOut',
          }}
        >
          <span className="text-5xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]">✨</span>
        </motion.div>
      ))}

      <motion.div
        className="absolute bottom-20 right-20 z-20 flex gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            // --- CAMBIO 3 (Opcional): Sombra para legibilidad de estrellas ---
            className="text-4xl [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          >
            ⭐
          </motion.span>
        ))}
      </motion.div>
      {/* ... (fin de animaciones de fondo) ... */}


      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="Mi Película Favorita"
          as="h2"
          // --- CAMBIO 3: AÑADIDA SOMBRA DE TEXTO PARA LEGIBILIDAD ---
          className="text-4xl md:text-6xl lg:text-7xl mb-16 text-center text-foreground [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.7)]"
        />

        <AnimatedParagraph delay={1.2}>
          <div className="relative z-10">
            <motion.div
              // --- CAMBIO 3 (Opcional): Sombra para legibilidad del emoji ---
              className="text-8xl text-center mb-8 [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.5)]"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              🎥
            </motion.div>

            {isEditing ? (
              <div className="space-y-6">
                <Input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                  placeholder="Nombre de la Película"
                  className="bg-background text-foreground border-border text-center text-xl py-6"
                  autoFocus
                />
                <Button
                  onClick={handleSave}
                  className="w-full bg-success text-success-foreground hover:bg-success/90 font-normal text-xl py-6"
                >
                  <CheckIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                  Guardar
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <motion.p
                  // --- CAMBIO 3: AÑADIDA SOMBRA DE TEXTO PARA LEGIBILIDAD ---
                  className="text-3xl md:text-4xl text-foreground text-center font-headline font-bold [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.7)]"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', duration: 0.8 }}
                >
                  {pelicula}
                </motion.p>
                <Button
                  onClick={handleEdit}
                  className="w-full bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal text-xl py-6"
                >
                  <PencilIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                  Cambiar
                </Button>
              </div>
            )}
          </div>
        </AnimatedParagraph>
      </div>
    </div>
  );
};