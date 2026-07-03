"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  blurReveal,
  fade,
  fadeUp,
  scaleIn,
  slideLeft,
  slideRight,
  transition,
  reducedVariants,
  VIEWPORT,
} from "@/lib/motion";

const variantMap = {
  fade,
  fadeUp,
  blur: blurReveal,
  scale: scaleIn,
  slideLeft,
  slideRight,
} as const;

type RevealVariant = keyof typeof variantMap;

type RevealProps = HTMLMotionProps<"div"> & {
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
};

export function Reveal({
  variant = "blur",
  delay = 0,
  duration,
  children,
  ...props
}: RevealProps) {
  const reduced = useReducedMotion();
  const variants = reducedVariants(variantMap[variant], reduced);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants}
      transition={transition(duration, delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn(props: Omit<RevealProps, "variant">) {
  return <Reveal variant="fade" {...props} />;
}

export function BlurReveal({ variant = "blur", ...props }: RevealProps) {
  return <Reveal variant={variant} {...props} />;
}
