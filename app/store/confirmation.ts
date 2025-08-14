import { create } from "zustand";

interface ConfirmationState {
  isOpen: boolean;
  open: (params: {
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void | Promise<void>;
    isDestructive?: boolean;
  }) => void;
  close: () => void;
  message: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void | Promise<void>;
  isDestructive?: boolean;
}

const useConfirmationStore = create<ConfirmationState>((set) => ({
  isOpen: false,
  open: ({
    title,
    message,
    confirmText = "Confirm",
    cancelText = "Cancel",
    onConfirm = () => {},
    isDestructive = false,
  }) =>
    set({
      isOpen: true,
      title,
      message,
      confirmText,
      cancelText,
      onConfirm,
      isDestructive,
    }),
  close: () => set({ isOpen: false }),
  message: "",
  title: "",
  confirmText: "Confirm",
  cancelText: "Cancel",
  onConfirm: () => {},
  isDestructive: false,
}));

export default useConfirmationStore;
