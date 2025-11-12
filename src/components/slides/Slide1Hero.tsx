import { motion, AnimatePresence } from 'framer-motion';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { FloatingElements } from '@/components/FloatingElements';
import { AnimatedSun } from '@/components/AnimatedSun';
import { Button } from '@/components/ui/button';
import { useSlideStore } from '@/stores/slideStore';
import { useState, useEffect } from 'react'; // Importamos useState y useEffect

// --- ¡ASEGÚRATE DE QUE ESTOS NOMBRES COINCIDAN! ---
import heroPic1 from '../../assets/hero-pic-1.jpg';
import heroPic2 from '../../assets/hero-pic-2.jpg';
import heroPic3 from '../../assets/hero-pic-3.jpg';
import heroPic4 from '../../assets/hero-pic-4.jpg';
import heroPic5 from '../../assets/hero-pic-5.jpg';

const images = [heroPic1, heroPic2, heroPic3, heroPic4, heroPic5];

export const Slide1Hero = () => {
  const nextSlide = useSlideStore((state) => state.nextSlide);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Cambia la imagen cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      <FloatingElements />
      <AnimatedSun />
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <motion.video
          alt="pastel animated video background"
          src="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_1.mp4"
          poster="https://c.animaapp.com/mhbwykrcWWxvya/img/ai_1-poster.png"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-foreground opacity-60" />
      </div>

      {/* --- FOTOS ANIMADAS --- */}
      {/* Este 'div' pone las fotos encima del video (z-1) pero debajo del texto (z-10) */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex} // Key para forzar la re-animación
            src={images[currentImageIndex]}
            alt={`Foto ${currentImageIndex + 1}`}
            className="absolute object-cover rounded-xl shadow-xl border-4 border-white/50"
            initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
            exit={{ opacity: 0, scale: 1.2, rotate: Math.random() * 20 - 10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              width: '200px',
              height: '250px',
              top: `${10 + (currentImageIndex % 3) * 20}%`,
              left: `${10 + ((currentImageIndex * 2) % 4) * 20}%`,
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
           <motion.img
            key={currentImageIndex + 10} // Otra key para otra imagen
            src={images[(currentImageIndex + 1) % images.length]} // Muestra la siguiente imagen
            alt={`Foto ${(currentImageIndex + 1) % images.length + 1}`}
            className="absolute object-cover rounded-xl shadow-xl border-4 border-white/50"
            initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 20 - 10 }}
            animate={{ opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }}
            exit={{ opacity: 0, scale: 1.2, rotate: Math.random() * 20 - 10 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{
              width: '180px',
              height: '230px',
              bottom: `${10 + (currentImageIndex % 2) * 20}%`,
              right: `${10 + ((currentImageIndex * 3) % 4) * 20}%`,
              filter: 'brightness(1.1) contrast(1.1)',
            }}
          />
        </AnimatePresence>
      </div>
      {/* --- FIN DE LAS FOTOS ANIMADAS --- */}


      {/* Content (El texto principal) */}
      <div className="relative z-10 text-center max-w-4xl">
        <InteractiveTitle
          text="Mi proyecto de vida"
          as="h1"
          className="text-5xl md:text-7xl lg:text-8xl mb-8 text-background drop-shadow-lg"
        />

        <AnimatedParagraph delay={1.2} className="space-y-4">
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-headline font-semibold text-background"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            Grado 10-2
          </motion.p>
          <p className="text-lg md:text-xl lg:text-2xl text-background">
            Materia: Ética
          </p>
        </AnimatedParagraph>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-12"
        >
          <Button
            onClick={nextSlide}
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-normal text-lg px-12 py-6 rounded-full"
          >
            Siguiente
          </Button>
        </motion.div>
      </div>
    </div>
  );
};