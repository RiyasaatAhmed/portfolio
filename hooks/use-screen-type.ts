import { useState, useEffect } from "react";

type ScreenType = "mobile" | "tablet" | "desktop" | "largeDesktop";

export function useScreenType(): ScreenType {
  const [screenType, setScreenType] = useState<ScreenType>("desktop");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 900) {
        setScreenType("mobile");
      } else if (width >= 900 && width < 1024) {
        setScreenType("tablet");
      } else if (width >= 1024 && width < 1536) {
        setScreenType("desktop");
      } else {
        setScreenType("largeDesktop");
      }
    };

    // Set initial screen type
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return screenType;
}
