import { navbar } from "@/constants/navbar";
import { useScreenType } from "@/hooks/use-screen-type";
import { Button } from "../ui/button";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { ThemeButton } from "../theme-button";

export function NavbarDesktop() {
  const screenType = useScreenType();
  if (screenType !== "mobile") {
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
  return null;
}
