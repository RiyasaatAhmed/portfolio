"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";
import { Medal } from "lucide-react";

export default function HireMe() {
  return (
    <Button
      size="lg"
      onClick={() => smoothScrollToSection("contact", { offset: 72 })}
    >
      <Medal className="mr-2 h-4 w-4" />
      Hire Me!
    </Button>
  );
}
