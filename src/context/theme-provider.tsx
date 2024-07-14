"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeContextProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextProps>({
  theme: "light",
  setTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  const handleThemeChange = () => {
    if (theme === "dark") {
      // setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      // setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
