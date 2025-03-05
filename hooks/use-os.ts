import { useState, useEffect } from "react";

type OS = "Windows" | "MacOS" | "Linux" | "Unknown";

export function useOS() {
  const [os, setOS] = useState<OS>("Unknown");

  useEffect(() => {
    const platform = navigator.userAgent.toLowerCase();
    if (platform.includes("win")) setOS("Windows");
    else if (platform.includes("mac")) setOS("MacOS");
    else if (platform.includes("linux")) setOS("Linux");
    else setOS("Unknown");
  }, []);

  return os;
}
