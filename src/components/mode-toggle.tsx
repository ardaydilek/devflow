"use client";

import { useTheme } from "@/context/theme-provider";

export function ModeToggle({}) {
  const { theme, setTheme } = useTheme();
  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
}
