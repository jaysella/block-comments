"use client";

import { useEffect, useState } from "react";

export function useThemeDetector() {
  const [darkMode, setDarkMode] = useState(false);

  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const mqListener = (e: MediaQueryListEvent) => {
    setDarkMode(e.matches);
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      setDarkMode(getCurrentTheme());
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

      darkThemeMq.addEventListener("change", mqListener);
      return () => darkThemeMq.removeEventListener("change", mqListener);
    }
  }, []);

  return darkMode;
}
