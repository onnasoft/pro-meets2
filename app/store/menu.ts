import { create } from "zustand";

interface MobileMenuState {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

const useMobileMenuStore = create<MobileMenuState>((set) => ({
  isOpen: false,
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));

export default useMobileMenuStore;
