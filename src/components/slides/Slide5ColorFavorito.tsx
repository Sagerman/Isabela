import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { PencilIcon, CheckIcon } from 'lucide-react';

export const Slide5ColorFavorito = () => {
  const [color, setColor] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState('');

  const handleEdit = () => {
    setIsEditing(true);
    setEditValue(color);
  };

  const handleSave = () => {
    if (editValue.trim()) {
      setColor(editValue.trim());
      setIsEditing(false);
      setEditValue('');
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_2.png"
          alt="pastel blob background"
          className="w-full h-full object-cover opacity-30"
          loading="lazy"
        />
      </div>

      {/* Paleta de colores flotante */}
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
          <Card className="bg-card/90 backdrop-blur-sm text-card-foreground p-12 md:p-16 rounded-3xl shadow-2xl border-2 border-secondary/30 relative overflow-hidden">
            {/* Círculos de colores decorativos */}
            {['#FF6B9D', '#C44569', '#FFA07A', '#98D8C8', '#6C5CE7', '#FDCB6E'].map((bgColor, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full opacity-20"
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

            <div className="relative z-10">
              <motion.div
                className="text-8xl text-center mb-8"
                animate={{
                  scale: [1, 1.15, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                🌈
              </motion.div>

              {isEditing ? (
                <div className="space-y-6">
                  <Input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                    placeholder="Ej: Azul, Rosa, Verde..."
                    className="bg-background text-foreground border-border text-center text-2xl py-6"
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
                  {color ? (
                    <motion.p
                      className="text-4xl md:text-5xl text-foreground text-center font-headline font-bold"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', duration: 0.8 }}
                    >
                      {color}
                    </motion.p>
                  ) : (
                    <p className="text-2xl text-muted-foreground text-center italic">
                      ¿Cuál es tu color favorito?
                    </p>
                  )}
                  <Button
                    onClick={handleEdit}
                    className="w-full bg-tertiary text-tertiary-foreground hover:bg-tertiary/90 font-normal text-xl py-6"
                  >
                    <PencilIcon className="w-6 h-6 mr-2" strokeWidth={2} />
                    {color ? 'Cambiar' : 'Agregar'}
                  </Button>
                </div>
              )}
            </div>
          </Card>
        </AnimatedParagraph>
      </div>

      {/* Pinceles y brochas flotantes */}
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
