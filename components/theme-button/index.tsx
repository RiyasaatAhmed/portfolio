"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export function ThemeButton() {
  const { setTheme, theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Avoid server-client rendering mismatch
  useEffect(() => setIsMounted(true), []);

  if (!isMounted) return null;

  const isDarkMode = theme === "dark";

  return (
    <Button
      onClick={() => setTheme(isDarkMode ? "light" : "dark")}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
      className="bg-transparent hover:bg-transparent text-primary"
    >
      {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
    </Button>
  );
}
