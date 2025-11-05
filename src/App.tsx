import { useEffect } from 'react';
import { useSlideStore } from '@/stores/slideStore';
import { SlideWrapper } from '@/components/SlideWrapper';
import { FloatingDecorations } from '@/components/FloatingDecorations';
import { FloatingElements } from '@/components/FloatingElements';
import { AnimatedSun } from '@/components/AnimatedSun';
import { NavigationControls } from '@/components/NavigationControls';
import { Slide1Hero } from '@/components/slides/Slide1Hero';
import { Slide2QuienSoy } from '@/components/slides/Slide2QuienSoy';
import { Slide3Cualidades } from '@/components/slides/Slide3Cualidades';
import { Slide4Amigas } from '@/components/slides/Slide4Amigas';
import { Slide5ColorFavorito } from '@/components/slides/Slide5ColorFavorito';
import { Slide6CancionFavorita } from '@/components/slides/Slide6CancionFavorita';
import { Slide7PeliculaFavorita } from '@/components/slides/Slide7PeliculaFavorita';
import { Slide8Mision } from '@/components/slides/Slide8Mision';
import { Slide9Vision } from '@/components/slides/Slide9Vision';
import { Slide10Metas } from '@/components/slides/Slide10Metas';

// Importar todas las transiciones
import {
  zoomInTransition,
  perspectiveFlipTransition,
  swirlExpandTransition,
  cubeRotateTransition,
  fadeSlideUpTransition,
  recordSpinTransition,
  cinematicRevealTransition,
  gentleFadeScaleTransition,
  flyInBounceTransition,
  explodeAssembleTransition,
} from '@/lib/slideTransitions';

function App() {
  const { currentSlide, transitionDirection, nextSlide, previousSlide } = useSlideStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, previousSlide]);

  const slides = [
    <Slide1Hero />,
    <Slide2QuienSoy />,
    <Slide3Cualidades />,
    <Slide4Amigas />,
    <Slide5ColorFavorito />,
    <Slide6CancionFavorita />,
    <Slide7PeliculaFavorita />,
    <Slide8Mision />,
    <Slide9Vision />,
    <Slide10Metas />,
  ];

  // Mapear cada diapositiva a una transición específica
  const slideTransitions = [
    zoomInTransition,
    perspectiveFlipTransition,
    swirlExpandTransition,
    cubeRotateTransition,
    fadeSlideUpTransition,
    recordSpinTransition,
    cinematicRevealTransition,
    gentleFadeScaleTransition,
    flyInBounceTransition,
    explodeAssembleTransition,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <FloatingDecorations />
      
      {slides.map((slide, index) => (
        <SlideWrapper
          key={index}
          isActive={currentSlide === index}
          slideIndex={index}
          direction={transitionDirection}
          customVariants={slideTransitions[index]} // Pasar la variante específica
        >
          {slide}
        </SlideWrapper>
      ))}

      <NavigationControls />
    </div>
  );
}

export default App;