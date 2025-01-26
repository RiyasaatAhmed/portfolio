"use client";

import { smoothScrollToSection } from "@/utils/smooth-scroll-to-section";
import { Button } from "../ui/button";
import { Mail } from "lucide-react";

export default function ContactMe() {
  return (
    <Button
      size="lg"
      onClick={() => smoothScrollToSection("contact", { offset: 72 })}
    >
      <Mail className="mr-2 h-4 w-4" />
      Contact Me
    </Button>
  );
}
