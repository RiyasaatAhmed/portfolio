import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { navbar } from "@/constants/navbar";

import { Button } from "../ui/button";
import { ThemeButton } from "../theme-button";
import { useIsMobileScreen } from "@/hooks/use-is-mobile-screen";

interface NavbarMobileProps {
  isNavbarMobileOpen: boolean;
  setIsNavbarMobileOpen: (open: boolean) => void;
}

export function NavbarMobile({
  isNavbarMobileOpen,
  setIsNavbarMobileOpen,
}: NavbarMobileProps) {
  const isMobileScreen = useIsMobileScreen();
  const lastClickedNavItemRef = useRef<string | null>(null);

  useEffect(() => {
    if (isNavbarMobileOpen && isMobileScreen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");

      const target = lastClickedNavItemRef.current;
      if (target) {
        smoothScrollToSection(target, { offset: 64 });
        lastClickedNavItemRef.current = null;
      }
    };
  }, [isNavbarMobileOpen, isMobileScreen]);

  if (!isNavbarMobileOpen || !isMobileScreen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="absolute top-full left-0 w-full h-screen bg-white dark:bg-black shadow-md origin-top-right"
      >
        <div className="flex flex-col items-start space-y-4 p-4">
          {navbar.map((item) => (
            <Button
              key={item}
              variant="ghost"
              className="text-muted-foreground"
              onClick={() => {
                lastClickedNavItemRef.current = item.toLowerCase();
                setIsNavbarMobileOpen(false);
              }}
            >
              {item}
            </Button>
          ))}
          <ThemeButton />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
