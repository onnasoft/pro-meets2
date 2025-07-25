import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultLanguage, Language } from "~/utils/language";

const cookieStorage = {
  getItem: (name: string): string | null => {
    const regex = new RegExp("(^| )" + name + "=([^;]+)");
    const match = regex.exec(document.cookie);
    return match ? decodeURIComponent(match[2]) : null;
  },
  setItem: (name: string, value: string): void => {
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; path=/; max-age=31536000`;
  },
  removeItem: (name: string): void => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  },
};

interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (lang) => {
        set({ language: lang });

        window.location.reload();
      },
    }),
    {
      name: "language",
      storage: {
        getItem: (name) => {
          const value = cookieStorage.getItem(name);
          return value ? JSON.parse(value) : null;
        },
        setItem: (name, value) => {
          cookieStorage.setItem(name, JSON.stringify(value));
        },
        removeItem: (name) => {
          cookieStorage.removeItem(name);
        },
      },
    }
  )
);

export default useLanguageStore;
