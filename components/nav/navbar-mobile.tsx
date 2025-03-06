import { useScreenType } from "@/hooks/use-screen-type";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../ui/button";
import { navbar } from "@/constants/navbar";
import { ThemeButton } from "../theme-button";
import { useEffect } from "react";

interface NavbarMobileProps {
  isNavbarMobileOpen: boolean;
  setIsNavbarMobileOpen: (isNavbarMobileOpen: boolean) => void;
}

export function NavbarMobile({
  isNavbarMobileOpen,
  setIsNavbarMobileOpen,
}: NavbarMobileProps) {
  const screenType = useScreenType();

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isNavbarMobileOpen && screenType === "mobile") {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isNavbarMobileOpen, screenType]);

  return (
    <AnimatePresence>
      {isNavbarMobileOpen && screenType === "mobile" ? (
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
                  setIsNavbarMobileOpen(false);
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
  );
}
