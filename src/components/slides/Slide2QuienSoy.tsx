import { useState } from 'react';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
// import { GrowingTree } from '@/components/GrowingTree'; // Ya no se usa
import { Card } from '@/components/ui/card';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';

// Importamos tus GIFs
import fondoAnimado from '../../assets/slide2-fondo.gif';
import arbolAnimado from '../../assets/arbol-slide2.gif';

interface DraggableImage {
  id: number;
  src: string;
  alt: string;
  emoji: string;
  initialPosition: { top: string; left?: string; right?: string; bottom?: string };
  rotation: number;
}

const images: DraggableImage[] = [
  {
    id: 1,
    src: 'https://c.animaapp.com/mhbwykrcWWxvya/img/imagen-de-whatsapp-2025-10-28-a-las-21-45-30_c9847b47.jpg',
    alt: 'Isabela',
    emoji: '✨',
    initialPosition: { top: '12%', right: '12%' },
    rotation: -8,
  },
  {
    id: 2,
    src: 'https://c.animaapp.com/mhbwykrcWWxvya/img/imagen-de-whatsapp-2025-10-28-a-las-21-45-31_378219c7.jpg',
    alt: 'Isabela',
    emoji: '💖',
    initialPosition: { top: '32%', left: '5%' },
    rotation: 10,
  },
  {
    id: 3,
    src: 'https://c.animaapp.com/mhckzzyfNrTaXP/img/image.png',
    alt: 'Isabela en el avión',
    emoji: '✈️',
    initialPosition: { bottom: '16%', right: '16%' },
    rotation: -5,
  },
];

export const Slide2QuienSoy = () => {
  const [insertedImage, setInsertedImage] = useState<DraggableImage | null>(null);
  const [draggedImageId, setDraggedImageId] = useState<number | null>(null);

  const handleDragEnd = (imageData: DraggableImage, event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const cardElement = document.getElementById('text-card');
    if (!cardElement) return;

    const cardRect = cardElement.getBoundingClientRect();
    const imageX = info.point.x;
    const imageY = info.point.y;

    const isOverCard =
      imageX >= cardRect.left &&
      imageX <= cardRect.right &&
      imageY >= cardRect.top &&
      imageY <= cardRect.bottom;

    if (isOverCard) {
      setInsertedImage(imageData);
    }

    setDraggedImageId(null);
  };

  const handleRemoveImage = () => {
    setInsertedImage(null);
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Tu GIF del árbol (Movido más a la izquierda) */}
      <motion.img
        src={arbolAnimado}
        alt="Árbol animado"
        // --- ¡CAMBIO AQUÍ! Añadido 'ml-[-80px]' para moverlo más a la izquierda ---
        className="fixed bottom-0 left-0 z-10 pointer-events-none ml-[-80px]"
        style={{ width: '450px' }} // Mantenemos el tamaño grande
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
      />

      {/* Tu GIF de fondo */}
      <div className="absolute inset-0 z-0">
        <img
          src={fondoAnimado}
          alt="Fondo animado de paisaje"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Fotos de Isabela arrastrables (sin cambios) */}
      {images.map((image) => {
        const isInserted = insertedImage?.id === image.id;
        const isDragging = draggedImageId === image.id;

        if (isInserted) return null;

        return (
          <motion.div
            key={image.id}
            className="absolute z-20 cursor-grab active:cursor-grabbing"
            style={image.initialPosition}
            drag
            dragMomentum={false}
            dragElastic={0.1}
            onDragStart={() => setDraggedImageId(image.id)}
            onDragEnd={(event, info) => handleDragEnd(image, event, info)}
            initial={{ opacity: 0, scale: 0.5, rotate: image.rotation * 2 }}
            animate={{
              opacity: 1,
              scale: isDragging ? 1.1 : 1,
              rotate: isDragging ? 0 : image.rotation,
              y: isDragging ? 0 : [0, -5, 0],
            }}
            transition={{
              opacity: { delay: 1.5, duration: 1 },
              scale: { delay: 1.5, duration: 1, ease: 'backOut' },
              rotate: { delay: 1.5, duration: 1, ease: 'backOut' },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
            whileHover={{ scale: 1.05, rotate: image.rotation + 2 }}
          >
            <div className="relative">
              <img
                src={image.src}
                alt={image.alt}
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl shadow-2xl border-4 border-white pointer-events-none"
              />
              <div
                className="absolute w-8 h-8 bg-secondary rounded-full shadow-lg flex items-center justify-center pointer-events-none"
                style={{
                  top: image.id === 2 ? 'auto' : '-0.5rem',
                  bottom: image.id === 2 ? '-0.5rem' : 'auto',
                  left: image.id === 3 ? '-0.5rem' : 'auto',
                  right: image.id === 3 ? 'auto' : '-0.5rem',
                }}
              >
                <span className="text-2xl">{image.emoji}</span>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Content (sin cambios) */}
      <div className="relative z-10 max-w-3xl w-full">
        <InteractiveTitle
          text="¿Quién soy?"
          as="h2"
          className="text-4xl md:text-6xl lg:text-7xl mb-12 text-center text-foreground"
        />

        <AnimatedParagraph delay={1.2}>
          <Card
            id="text-card"
            className="bg-card/90 backdrop-blur-sm text-card-foreground p-8 md:p-12 rounded-3xl shadow-2xl border-2 border-secondary/30 min-h-[300px] flex items-center justify-center relative overflow-hidden"
          >
            {insertedImage ? (
              <motion.div
                className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing"
                drag
                dragMomentum={false}
                dragElastic={0.1}
                onDragEnd={(event, info) => {
                  const cardElement = document.getElementById('text-card');
                  if (!cardElement) return;
                  const cardRect = cardElement.getBoundingClientRect();
                  const imageX = info.point.x;
                  const imageY = info.point.y;
                  const isStillOverCard =
                    imageX >= cardRect.left &&
                    imageX <= cardRect.right &&
                    imageY >= cardRect.top &&
                    imageY <= cardRect.bottom;
                  if (!isStillOverCard) {
                    handleRemoveImage();
                  }
                }}
                initial={{ scale: 0, rotate: 0 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 0 }}
                transition={{ duration: 0.5, ease: 'backOut' }}
              >
                <img
                  src={insertedImage.src}
                  alt={insertedImage.alt}
                  className="max-w-full max-h-[400px] object-contain rounded-2xl shadow-2xl border-4 border-white pointer-events-none"
                />
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-secondary rounded-full shadow-lg flex items-center justify-center pointer-events-none"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span className="text-3xl">{insertedImage.emoji}</span>
                </motion.div>
              </motion.div>
            ) : (
              <motion.p
                className="text-lg md:text-xl leading-relaxed text-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                ¡Hola a todos! Mi nombre es Isabela, tengo 16 años y mi cumpleaños es el 6 de junio.
                <br />
                <br />
                Soy de Venezuela, pero crecí en la tierra del joropo, Villavicencio, y ahora vivo aquí en Granada,
                una estudiante de décimo grado en el Colegio Luis Carlos Galán Sarmiento. Me dicen que soy una
                persona muy amigable y también juiciosa con mis estudios. ¿Mi pasatiempo favorito? ¡Definitivamente comer!
              </motion.p>
            )}
          </Card>
        </AnimatedParagraph>
      </div>

      {/* Elementos decorativos flotantes (sin cambios) */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute z-5 pointer-events-none"
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