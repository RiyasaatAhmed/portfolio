"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";

export default function ViewProjects() {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => smoothScrollToSection("recommendations", { offset: 72 })}
    >
      View Recommendations
    </Button>
  );
}
