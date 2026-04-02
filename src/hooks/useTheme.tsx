import React, { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";
type ResolvedTheme = Exclude<Theme, "system">;

const STORAGE_KEY = "theme";

type LegacyMediaQueryList = MediaQueryList & {
  addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
  removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
};

function getSystemTheme(): ResolvedTheme {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw === "dark" || raw === "light" || raw === "system") return raw;
  } catch (e) {
    // ignore
  }
  return "system";
}

export function getNextTheme(theme: Theme): Theme {
  if (theme === "dark") return "light";
  if (theme === "light") return "system";
  return "dark";
}

type ThemeContextValue = {
  theme: Theme;
  resolvedTheme: ResolvedTheme;
  isDark: boolean;
  setTheme: (t: Theme | null) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme();
  });
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() => getSystemTheme());

  const resolvedTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // ignore
    }
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.dataset.theme = resolvedTheme;
    root.dataset.themeMode = theme;
  }, [resolvedTheme, theme]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const legacyMq = mq as LegacyMediaQueryList;
    const updateSystemTheme = (matches: boolean) => setSystemTheme(matches ? "dark" : "light");
    updateSystemTheme(mq.matches);
    const handler = (e: MediaQueryListEvent) => updateSystemTheme(e.matches);
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", handler);
    else legacyMq.addListener?.(handler);
    return () => {
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", handler);
      else legacyMq.removeListener?.(handler);
    };
  }, []);

  const setTheme = useCallback((t: Theme | null) => {
    setThemeState(t ?? "system");
  }, []);

  const toggle = useCallback(() => {
    setThemeState((currentTheme) => getNextTheme(currentTheme));
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, resolvedTheme, isDark: resolvedTheme === "dark", setTheme, toggle }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export type { Theme, ResolvedTheme };
