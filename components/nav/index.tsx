"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ThemeButton } from "../theme-button";
import { Menu, X } from "lucide-react";
import { useScreenType } from "@/hooks/use-screen-type";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { navbar } from "@/constants/navbar";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const screenType = useScreenType();

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
        scrolled || (isOpen && screenType === "mobile")
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-lg py-4"
          : "py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="text-2xl font-bold text-gradient animate-gradient">
          Riyasaat&apos;s Portfolio
        </div>

        {/* Desktop Navigation */}
        {screenType !== "mobile" ? (
          <div className="hidden md:flex items-center space-x-6">
            {navbar.map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-primary hover:underline"
                onClick={() =>
                  smoothScrollToSection(item?.toLowerCase(), {
                    offset: 72,
                  })
                }
              >
                {item}
              </Button>
            ))}
            <ThemeButton />
          </div>
        ) : null}

        {/* Mobile Menu Toggle */}
        {screenType === "mobile" ? (
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
        ) : null}
      </div>

      {/* Mobile Navigation */}
      {isOpen && screenType === "mobile" ? (
        <>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
          <div className="absolute top-full left-0 w-full h-screen bg-white dark:bg-black shadow-md">
            <div className="flex flex-col items-start space-y-4 p-4">
              {navbar.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-muted-foreground"
                  onClick={() => {
                    setIsOpen(false);
                    smoothScrollToSection(item?.toLowerCase(), { offset: 64 });
                  }}
                >
                  {item}
                </Button>
              ))}
              <ThemeButton />
            </div>
          </div>
        </>
      ) : null}
    </nav>
  );
}
