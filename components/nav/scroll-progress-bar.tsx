import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";

interface ScrollProgressBarProps {
  width: string;
  setWidth: (width: string) => void;
}

export function ScrollProgressBar({ width, setWidth }: ScrollProgressBarProps) {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useEffect(() => {
    return smoothProgress.on("change", (latest: number) =>
      setWidth(`${0 + latest * 100}%`)
    );
  }, [setWidth, smoothProgress]);

  return <motion.div className="h-[2px] bg-gradient" style={{ width }} />;
}
