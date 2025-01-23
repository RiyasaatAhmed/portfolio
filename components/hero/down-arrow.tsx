"use client";

import { ArrowDown } from "lucide-react";
import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { useScreenType } from "@/hooks/useScreenType";

export function DownArrow() {
  const screenType = useScreenType();
  return (
    <div className="animate-bounce mt-16">
      <ArrowDown
        className="mx-auto h-6 w-6 text-muted-foreground cursor-pointer"
        onClick={() =>
          smoothScrollToSection("contact", {
            offset: screenType === "mobile" ? 64 : 72,
          })
        }
      />
    </div>
  );
}
