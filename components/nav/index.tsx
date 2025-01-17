"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ThemeButton } from "../theme-button";
import { Menu, X } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the mobile menu
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Track scrolling to update navbar styles
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/70 dark:bg-black/70 backdrop-blur-lg py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-2xl font-bold bg-clip-text text-primary">
          Riyasaat&apos;s Portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {["About", "Projects", "Contact"].map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-primary hover:underline"
            >
              {item}
            </Button>
          ))}
          <ThemeButton />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            className="focus:outline-none"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-primary" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {["About", "Projects", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Button>
            ))}
            <ThemeButton />
          </div>
        </div>
      )}
    </nav>
  );
}
