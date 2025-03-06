"use client";

import { useCallback, useEffect, useState } from "react";
import { useScreenType } from "@/hooks/use-screen-type";
import { ScrollProgressBar } from "./scroll-progress-bar";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarButtonMobile } from "./navbar-button-mobile";
import { NavbarMobile } from "./navbar-mobile";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);
  const screenType = useScreenType();
  const [width, setWidth] = useState("0%");

  // Toggle navbar mobile menu
  const toggleNavbarMobileMenu = useCallback(() => {
    setIsNavbarMobileOpen((prev) => !prev);
    setWidth("0%");
  }, []);

  // Track scrolling to update navbar styles
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-50">
      <nav
        className={`transition-all duration-300 ${
          scrolled || (isNavbarMobileOpen && screenType === "mobile")
            ? `${
                isNavbarMobileOpen
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

          {/* Navbar Desktop */}
          <NavbarDesktop />

          {/* Navbar Button Mobile */}
          <NavbarButtonMobile
            isNavbarMobileOpen={isNavbarMobileOpen}
            toggleNavbarMobileMenu={toggleNavbarMobileMenu}
          />
        </div>

        {/* Navbar Mobile */}
        <NavbarMobile
          isNavbarMobileOpen={isNavbarMobileOpen}
          setIsNavbarMobileOpen={setIsNavbarMobileOpen}
        />
      </nav>

      {/* Expanding Scroll Indicator */}
      <ScrollProgressBar width={width} setWidth={setWidth} />
    </header>
  );
}
