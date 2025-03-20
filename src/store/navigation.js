import { create } from "zustand";

export const useGNB = create((set) => ({
  open: false,
  setGNB: (state) => set((prev) => ({ open: typeof state === "boolean" ? state : !prev.open })),
}));

// 코드풀어놓을때
// setGNB: (state) =>
//   set((prev) => {
//     const valid = typeof state === "boolean" ? state : !prev.open;
//     return { open: valid };
//   }),
