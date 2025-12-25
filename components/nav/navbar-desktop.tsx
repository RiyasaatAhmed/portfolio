import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { navbar } from "@/constants/navbar";
import { Button } from "../ui/button";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { ThemeButton } from "../theme-button";
import { useIsMobileScreen } from "@/hooks/use-is-mobile-screen";

export function NavbarDesktop() {
  const isMobileScreen = useIsMobileScreen();
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (section: string) => {
    const sectionId = section.toLowerCase();
    if (pathname === "/") {
      smoothScrollToSection(sectionId, { offset: 72 });
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  if (isMobileScreen) return null;

  return (
    <div className="hidden md:flex items-center space-x-6">
      {navbar.map((item) => (
        <Button
          key={item}
          variant="ghost"
          className="text-primary hover:underline"
          onClick={() => handleNavClick(item)}
        >
          {item}
        </Button>
      ))}
      <Button
        variant="ghost"
        className="text-primary hover:underline"
        asChild
      >
        <Link href="/blogs">Blog</Link>
      </Button>
      <ThemeButton />
    </div>
  );
}
