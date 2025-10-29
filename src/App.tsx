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

function App() {
  const currentSlide = useSlideStore((state) => state.currentSlide);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        useSlideStore.getState().nextSlide();
      } else if (e.key === 'ArrowLeft') {
        useSlideStore.getState().previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slides = [
    <Slide1Hero />,
    <Slide2QuienSoy />,
    <Slide3Cualidades />,
    <Slide4Amigas />,
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <FloatingDecorations />
      
      {slides.map((slide, index) => (
        <SlideWrapper key={index} isActive={currentSlide === index} slideIndex={index}>
          {slide}
        </SlideWrapper>
      ))}

      <NavigationControls />
    </div>
  );
}

export default App;
