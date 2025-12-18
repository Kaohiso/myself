import { create } from 'zustand';

// Types pour le store
interface ScrollStore {
  scrollProgress: number;
  cubeX: number;
  setScrollProgress: (progress: number) => void;
  setCubeX: (x: number) => void;
}

// Store Zustand pour partager l'état du scroll
export const useScrollStore = create<ScrollStore>((set) => ({
  scrollProgress: 0,
  cubeX: 1.5,
  setScrollProgress: (progress: number) => set({ scrollProgress: progress }),
  setCubeX: (x: number) => set({ cubeX: x }),
}));
