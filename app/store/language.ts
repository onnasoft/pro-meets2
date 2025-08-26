import { create } from "zustand";
import { persist } from "zustand/middleware";
import { defaultLanguage, Language } from "pro-meets-core";

const cookieStorage = {
  getItem: (name: string): string | null => {
    const regex = new RegExp("(^| )" + name + "=([^;]+)");
    const match = regex.exec(document.cookie);
    return match ? decodeURIComponent(match[2]) : null;
  },
  setItem: (name: string, value: string): void => {
    const secureFlag = location.protocol === "https:" ? "Secure;" : "";
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; path=/; max-age=31536000; SameSite=None; ${secureFlag}`;
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
    (set, get) => ({
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
          const stored = cookieStorage.getItem(name);
          return stored
            ? { state: { language: stored }, version: 0 }
            : { state: { language: defaultLanguage }, version: 0 };
        },
        setItem: (name, value) => {
          cookieStorage.setItem(name, value.state.language);
        },
        removeItem: (name) => {
          cookieStorage.removeItem(name);
        },
      },
    }
  )
);

export default useLanguageStore;
