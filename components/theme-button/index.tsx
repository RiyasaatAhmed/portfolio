"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export function ThemeButton() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Handle initial mount to prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Set initial theme based on system preference if not explicitly set
    if (!theme) {
      setTheme(systemTheme || "light");
    }
  }, [setTheme, systemTheme, theme]);

  // Don't render anything until mounted to prevent flash
  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <Button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      {isDark ? (
        <Sun className="h-5 w-5 transition-all" />
      ) : (
        <Moon className="h-5 w-5 transition-all" />
      )}
    </Button>
  );
}
