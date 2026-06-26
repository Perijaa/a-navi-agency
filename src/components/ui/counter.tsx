"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";
import { useReducedMotion } from "@/lib/use-reduced-motion";

interface CounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export function Counter({
  target,
  suffix = "",
  decimals = 0,
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reducedMotion = useReducedMotion();
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const format = (value: number) =>
      decimals > 0
        ? value.toFixed(decimals)
        : Math.floor(value).toLocaleString();

    if (reducedMotion) {
      setDisplay(format(target));
      return;
    }

    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        setDisplay(format(value));
      },
    });

    return () => controls.stop();
  }, [isInView, target, duration, decimals, reducedMotion]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
