"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";

export default function HireMe() {
  return (
    <Button
      size="lg"
      onClick={() => smoothScrollToSection("contact", { offset: 72 })}
    >
      Hire Me!
    </Button>
  );
}
