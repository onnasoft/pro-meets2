import { create } from "zustand";

interface ErrorState {
  isOpen: boolean;
  title: string;
  message: string;
  closeButton?: string;
  setError: (title: string, message: string) => void;
  clearError: () => void;
}

const useErrorStore = create<ErrorState>((set) => ({
  isOpen: false,
  title: "",
  message: "",
  closeButton: "Close",
  setError: (title, message) => set({ isOpen: true, title, message }),
  clearError: () => set({ isOpen: false, title: "", message: "" }),
}));

export default useErrorStore;
