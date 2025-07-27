import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => void;
  isAuthenticated: () => boolean;
  clearTokens: () => void;
}

const cookieStorage = {
  getItem: (name: string): string | null => {
    const regex = new RegExp("(^| )" + name + "=([^;]+)");
    const match = regex.exec(document.cookie);
    return match ? decodeURIComponent(match[2]) : null;
  },
  setItem: (name: string, value: string, maxAge?: number): void => {
    const secureFlag = location.protocol === "https:" ? "Secure;" : "";
    const maxAgeStr = maxAge ? `max-age=${maxAge};` : "";
    document.cookie = `${name}=${encodeURIComponent(
      value
    )}; path=/; ${maxAgeStr} SameSite=Lax; ${secureFlag}`;
  },
  removeItem: (name: string): void => {
    document.cookie = `${name}=; Max-Age=0; path=/`;
  },
};

const decodeExp = (jwt: string): number | null => {
  try {
    const payload = JSON.parse(atob(jwt.split(".")[1]));
    const exp = payload.exp;
    return typeof exp === "number" ? exp - Math.floor(Date.now() / 1000) : null;
  } catch {
    return null;
  }
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (access, refresh) => {
        set({ accessToken: access, refreshToken: refresh });

        const accessMaxAge = decodeExp(access);
        const refreshMaxAge = decodeExp(refresh);

        if (accessMaxAge)
          cookieStorage.setItem("accessToken", access, accessMaxAge);
        else cookieStorage.setItem("accessToken", access);

        if (refreshMaxAge)
          cookieStorage.setItem("refreshToken", refresh, refreshMaxAge);
        else cookieStorage.setItem("refreshToken", refresh);
      },
      clearTokens: () => {
        set({ accessToken: null, refreshToken: null });
        cookieStorage.removeItem("accessToken");
        cookieStorage.removeItem("refreshToken");
      },
      isAuthenticated: () => {
        const access = cookieStorage.getItem("accessToken");
        const refresh = cookieStorage.getItem("refreshToken");
        if (access && refresh) return true;
        return false;
      },
    }),
    {
      name: "auth",
      storage: {
        getItem: () => {
          const access = cookieStorage.getItem("accessToken");
          const refresh = cookieStorage.getItem("refreshToken");
          return {
            state: { accessToken: access, refreshToken: refresh },
            version: 0,
          };
        },
        setItem: () => {}, // manejado manualmente arriba
        removeItem: () => {}, // manejado manualmente arriba
      },
    }
  )
);

export default useAuthStore;
