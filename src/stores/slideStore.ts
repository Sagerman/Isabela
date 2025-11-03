import { create } from 'zustand';

interface SlideStore {
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  totalSlides: number;
}

export const useSlideStore = create<SlideStore>((set) => ({
  currentSlide: 0,
  totalSlides: 10,
  setCurrentSlide: (slide) => set({ currentSlide: slide }),
  nextSlide: () =>
    set((state) => ({
      currentSlide: Math.min(state.currentSlide + 1, state.totalSlides - 1),
    })),
  previousSlide: () =>
    set((state) => ({
      currentSlide: Math.max(state.currentSlide - 1, 0),
    })),
}));
