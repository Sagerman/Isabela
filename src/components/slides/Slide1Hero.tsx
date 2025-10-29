import { motion } from 'framer-motion';
import { InteractiveTitle } from '@/components/InteractiveTitle';
import { AnimatedParagraph } from '@/components/AnimatedParagraph';
import { FloatingElements } from '@/components/FloatingElements';
import { AnimatedSun } from '@/components/AnimatedSun';
import { Button } from '@/components/ui/button';
import { useSlideStore } from '@/stores/slideStore';

export const Slide1Hero = () => {
  const nextSlide = useSlideStore((state) => state.nextSlide);

  return (
    <div className="relative w-full h-full flex items-center justify-center px-8 md:px-16 lg:px-32">
      {/* Animaciones especiales solo para slide 1 */}
      <FloatingElements />
      <AnimatedSun />
      
      {/* Video Background with Overlay */}
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

      {/* Content */}
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
            Materia: Tecnología
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
