import { create } from 'zustand';

interface Cualidad {
  id: string;
  text: string;
}

interface CualidadesStore {
  cualidades: Cualidad[];
  addCualidad: (text: string) => void;
  editCualidad: (id: string, text: string) => void;
  deleteCualidad: (id: string) => void;
}

export const useCualidadesStore = create<CualidadesStore>((set) => ({
  cualidades: [],
  addCualidad: (text) =>
    set((state) => ({
      cualidades: [
        ...state.cualidades,
        { id: crypto.randomUUID(), text },
      ],
    })),
  editCualidad: (id, text) =>
    set((state) => ({
      cualidades: state.cualidades.map((c) =>
        c.id === id ? { ...c, text } : c
      ),
    })),
  deleteCualidad: (id) =>
    set((state) => ({
      cualidades: state.cualidades.filter((c) => c.id !== id),
    })),
}));
