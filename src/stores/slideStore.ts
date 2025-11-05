import { create } from 'zustand';

interface SlideStore {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  totalSlides: number;
  transitionDirection: number; // 1 for next, -1 for previous
}

export const useSlideStore = create<SlideStore>((set, get) => ({
  currentSlide: 0,
  totalSlides: 10,
  transitionDirection: 1, // Default to forward

  setCurrentSlide: (slide: number) => {
    const current = get().currentSlide;
    set({
      currentSlide: slide,
      transitionDirection: slide > current ? 1 : -1,
    });
  },
  nextSlide: () => {
    set((state) => ({
      currentSlide: Math.min(state.currentSlide + 1, state.totalSlides - 1),
      transitionDirection: 1,
    }));
  },
  previousSlide: () => {
    set((state) => ({
      currentSlide: Math.max(state.currentSlide - 1, 0),
      transitionDirection: -1,
    }));
  },
}));