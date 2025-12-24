"use client";

import { ArrowDown } from "lucide-react";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { useScreenType } from "@/hooks/use-screen-type";

export function DownArrow() {
  const screenType = useScreenType();
  return (
    <button
      type="button"
      aria-label="Scroll to contact section"
      className="animate-bounce mt-16 motion-reduce:animate-none"
      onClick={() =>
        smoothScrollToSection("contact", {
          offset: screenType === "mobile" ? 64 : 72,
        })
      }
    >
      <ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
    </button>
  );
}
