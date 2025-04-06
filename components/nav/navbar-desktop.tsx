import { navbar } from "@/constants/navbar";
import { Button } from "../ui/button";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { ThemeButton } from "../theme-button";
import { useIsMobileScreen } from "@/hooks/use-is-mobile-screen";

export function NavbarDesktop() {
  const isMobileScreen = useIsMobileScreen();

  if (isMobileScreen) return null;

  return (
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
  );
}
