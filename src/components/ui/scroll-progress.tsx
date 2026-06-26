"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress" aria-hidden>
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
}
