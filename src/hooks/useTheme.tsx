import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

function getSystemTheme(): Theme {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

type ThemeContextValue = {
  theme: Theme;
  isDark: boolean;
  setTheme: (t: Theme | null) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw === "dark" || raw === "light") return raw;
    } catch (e) {
      // ignore
    }
    return getSystemTheme();
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    let mq: MediaQueryList | null = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "dark" || saved === "light") return;
    } catch (e) {
      // ignore
    }
    if (typeof window === "undefined" || !window.matchMedia) return;
    mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => setThemeState(e.matches ? "dark" : "light");
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
    else (mq as any).addListener?.(handler);
    return () => {
      if (!mq) return;
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", handler);
      else (mq as any).removeListener?.(handler);
    };
  }, []);

  const setTheme = useCallback((t: Theme | null) => {
    if (t === null) {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch (e) {
        // ignore
      }
      setThemeState(getSystemTheme());
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch (e) {
      // ignore
    }
    setThemeState(t);
  }, []);

  const toggle = useCallback(() => setTheme(theme === "dark" ? "light" : "dark"), [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === "dark", setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export type { Theme };
