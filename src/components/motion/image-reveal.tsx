"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { imageReveal, transition, reducedVariants, VIEWPORT } from "@/lib/motion";

type ImageRevealProps = HTMLMotionProps<"div"> & {
  duration?: number;
};

export function ImageReveal({
  children,
  className = "",
  duration = 0.95,
  ...props
}: ImageRevealProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...VIEWPORT, margin: "-40px" }}
      variants={reducedVariants(imageReveal, reduced)}
      transition={transition(duration)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
