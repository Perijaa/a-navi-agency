"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  staggerContainer,
  staggerItem,
  transition,
  reducedVariants,
  VIEWPORT,
} from "@/lib/motion";

type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  stagger = 0.09,
  delayChildren = 0.04,
  children,
  ...props
}: StaggerProps) {
  const reduced = useReducedMotion();
  const container = reduced
    ? reducedVariants(staggerContainer, true)
    : {
        ...staggerContainer,
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={container}
      {...props}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = HTMLMotionProps<"div"> & {
  duration?: number;
};

export function StaggerItem({ duration, children, ...props }: StaggerItemProps) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      variants={reducedVariants(staggerItem, reduced)}
      transition={transition(duration)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
