// store/useScrollTimeline.ts
import { create } from "zustand";

export const useTimeline = create<{
  cubeX: number;
  setCubeX: (x: number) => void;
}>((set) => ({
  cubeX: 1.5,
  setCubeX: (x) => set({ cubeX: x }),
}));
