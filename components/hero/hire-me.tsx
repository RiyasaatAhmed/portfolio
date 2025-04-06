"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";
import { SparklesText } from "../magicui/sparkles-text";

export default function HireMe() {
  return (
    <Button
      size="lg"
      onClick={() => smoothScrollToSection("contact", { offset: 72 })}
    >
      <SparklesText text="Hire Me!" />
    </Button>
  );
}
