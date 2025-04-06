"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";

export default function ViewProjects() {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => smoothScrollToSection("projects", { offset: 72 })}
    >
      View Projects
    </Button>
  );
}
