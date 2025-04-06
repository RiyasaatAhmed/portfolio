"use client";

import { useOS } from "@/hooks/use-os";
import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface RecommendationTextProps {
  recommendation: ReactNode;
}
export function RecommendationText({
  recommendation,
}: RecommendationTextProps) {
  const os = useOS();
  const { theme } = useTheme();

  return (
    <span
      className={`h-[200px] text-sm text-center mt-4 mb-4 overflow-y-auto  ${
        os === "Windows"
          ? `${theme === "dark" ? "scrollbar-dark" : "scrollbar"}`
          : ""
      }`}
    >
      {recommendation}
    </span>
  );
}
