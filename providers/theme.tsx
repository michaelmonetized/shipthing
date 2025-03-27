/**
 * Theme Provider
 *
 * This component is used to provide the theme to the app.
 * It is used to toggle light mode on/off.
 *
 */

"use client";

import { useState, createContext, useContext } from "react";
import { Button } from "@/components/ui/button";
import { LightbulbOffIcon, LightbulbIcon } from "lucide-react";

const ThemeContext = createContext({
  theme: "",
  toggleTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "" : "light");
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      <div className={theme}>
        {children}
        <Button
          onClick={toggleTheme}
          className="fixed bottom-4 right-4 cursor-pointer"
        >
          <span className="sr-only">Toggle Theme</span>
          {theme === "light" ? (
            <LightbulbOffIcon className="w-4 h-4" />
          ) : (
            <LightbulbIcon className="w-4 h-4" />
          )}
        </Button>
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
