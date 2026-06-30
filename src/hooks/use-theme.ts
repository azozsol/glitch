import { useEffect, useState } from "react";

type Theme = "dark" | "light";

const STORAGE_KEY = "glitch-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === "undefined") return "dark";

    return (localStorage.getItem(STORAGE_KEY) as Theme | null) ?? "dark";
  });

  // useEffect(() => {
  //   const stored = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as Theme | null)) || "dark";
  //   setTheme(stored);
  // }, []);


  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);



  return {
    theme,
    toggle: () => setTheme((t) => (t === "dark" ? "light" : "dark")),
  };
}
