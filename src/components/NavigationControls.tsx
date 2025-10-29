import { motion } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSlideStore } from '@/stores/slideStore';

export const NavigationControls = () => {
  const { currentSlide, totalSlides, nextSlide, previousSlide } = useSlideStore();

  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex items-center gap-4 bg-card/80 backdrop-blur-sm px-6 py-4 rounded-full shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <Button
        onClick={previousSlide}
        disabled={currentSlide === 0}
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed font-normal rounded-full w-12 h-12 p-0"
        aria-label="Anterior"
      >
        <ChevronLeftIcon className="w-6 h-6" strokeWidth={2} />
      </Button>

      <div className="flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => useSlideStore.getState().setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-secondary w-8'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Ir a diapositiva ${index + 1}`}
          />
        ))}
      </div>

      <Button
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="bg-secondary text-secondary-foreground hover:bg-secondary/90 disabled:opacity-50 disabled:cursor-not-allowed font-normal rounded-full w-12 h-12 p-0"
        aria-label="Siguiente"
      >
        <ChevronRightIcon className="w-6 h-6" strokeWidth={2} />
      </Button>
    </motion.div>
  );
};
