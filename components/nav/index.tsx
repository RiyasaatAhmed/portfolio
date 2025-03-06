"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ThemeButton } from "../theme-button";
import { Menu, X } from "lucide-react";
import { useScreenType } from "@/hooks/use-screen-type";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { navbar } from "@/constants/navbar";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const screenType = useScreenType();

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const [width, setWidth] = useState("0%");

  useEffect(() => {
    return smoothProgress.on("change", (latest) =>
      setWidth(`${0 + latest * 100}%`)
    );
  }, [smoothProgress]);

  // Toggle mobile menu
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
    setWidth("0%");
  }, []);

  // Track scrolling to update navbar styles
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen && screenType === "mobile") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isOpen, screenType]);

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled || (isOpen && screenType === "mobile")
            ? `${
                isOpen
                  ? "bg-white dark:bg-black"
                  : "bg-white/70 dark:bg-black/70"
              } backdrop-blur-lg py-6`
            : "py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <h1 className="text-2xl xs:text-3xl font-bold text-gradient animate-gradient">
            Riyasaat&apos;s Portfolio
          </h1>

          {/* Desktop Navigation */}
          {screenType !== "mobile" ? (
            <div className="hidden md:flex items-center space-x-6">
              {navbar.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-primary hover:underline"
                  onClick={() =>
                    smoothScrollToSection(item.toLowerCase(), { offset: 72 })
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
        <AnimatePresence>
          {isOpen && screenType === "mobile" ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1, type: "spring" }}
              className="absolute top-full left-0 w-full h-screen bg-white dark:bg-black shadow-md origin-top-right"
            >
              <div className="flex flex-col items-start space-y-4 p-4">
                {navbar.map((item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="text-muted-foreground"
                    onClick={() => {
                      setIsOpen(false);
                      smoothScrollToSection(item.toLowerCase(), {
                        offset: 64,
                      });
                    }}
                  >
                    {item}
                  </Button>
                ))}
                <ThemeButton />
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </nav>

      {/* Expanding Scroll Indicator */}
      <motion.div className="h-[2px] bg-gradient" style={{ width }} />
    </header>
  );
}
