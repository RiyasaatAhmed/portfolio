import { useScreenType } from "@/hooks/use-screen-type";
import { Menu, X } from "lucide-react";

interface NavbarButtonMobileProps {
  isNavbarMobileOpen: boolean;
  toggleNavbarMobileMenu: () => void;
}
export function NavbarButtonMobile({
  isNavbarMobileOpen,
  toggleNavbarMobileMenu,
}: NavbarButtonMobileProps) {
  const screenType = useScreenType();

  if (screenType === "mobile") {
    return (
      <button
        onClick={toggleNavbarMobileMenu}
        aria-label={isNavbarMobileOpen ? "Close menu" : "Open menu"}
        aria-expanded={isNavbarMobileOpen}
        className="focus:outline-none"
      >
        {isNavbarMobileOpen ? (
          <X className="h-6 w-6 text-primary" aria-hidden="true" />
        ) : (
          <Menu className="h-6 w-6 text-primary" aria-hidden="true" />
        )}
      </button>
    );
  }

  return null;
}
