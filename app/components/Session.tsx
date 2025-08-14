import { useEffect, useRef } from "react";
import { refreshToken } from "~/services/auth";
import useAuthStore from "~/store/auth";
import { jwtDecode } from "jwt-decode";

export default function Session() {
  const auth = useAuthStore();
  const refreshTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!auth.accessToken || !auth.refreshToken) return;

    try {
      const decoded: { exp: number } = jwtDecode(auth.accessToken);
      const expiresInMs = decoded.exp * 1000 - Date.now();

      // Refrescar 1 minuto antes de que caduque
      const refreshTime = Math.max(expiresInMs - 60_000, 0);

      if (refreshTimer.current) clearTimeout(refreshTimer.current);

      refreshTimer.current = setTimeout(async () => {
        if (!auth.refreshToken) return;
        const newTokens = await refreshToken(auth.refreshToken);
        if (newTokens) {
          auth.setTokens(newTokens.access_token, newTokens.refresh_token);
        }
      }, refreshTime);
    } catch (err) {
      console.error("Error decoding token", err);
    }

    return () => {
      if (refreshTimer.current) clearTimeout(refreshTimer.current);
    };
  }, [auth.accessToken, auth.refreshToken]);

  return null;
}
