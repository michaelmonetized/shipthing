"use client";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the context type
type ThemeContextType = {
  isLight: boolean;
  toggleTheme: () => void;
};

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Create a custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Props type for the provider component
type ThemeProviderProps = {
  children: ReactNode;
};

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isLight, toggleTheme }}>
      <body id="top" className={isLight ? "light" : ""}>
        {children}
        <Button
          onClick={toggleTheme}
          className="fixed bottom-xs right-5xl m-md cursor-pointer"
        >
          <span className="sr-only">Toggle Theme</span>
          {isLight ? (
            <SunIcon className="w-4 h-4" />
          ) : (
            <MoonIcon className="w-4 h-4" />
          )}
        </Button>
      </body>
    </ThemeContext.Provider>
  );
};
