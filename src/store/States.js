import { create } from "zustand";

export const useUserStore = create((set, get) => ({
  /*States */
  score: 0,

  /*Functions*/
  increaseScore: () => set((state) => ({ score: state.score + 1 })),
}));
