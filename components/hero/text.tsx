"use client";

import { VariableProximity } from "../ui/variable-proximity";
import { useRef } from "react";

export function Text() {
  const containerRef = useRef(null);
  return (
    <h1 ref={containerRef} style={{ position: "relative" }}>
      <VariableProximity
        label={"Solution Oriented Developer"}
        className={
          "text-5xl lg:text-6xl font-bold text-gradient animate-gradient"
        }
        fromFontVariationSettings="'wght' 600, 'opsz' 9"
        toFontVariationSettings="'wght' 1200, 'opsz' 40"
        containerRef={containerRef}
        radius={100}
        falloff="linear"
      />
    </h1>
  );
}
