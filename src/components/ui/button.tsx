"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  href,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 cursor-pointer whitespace-nowrap";

  const variants = {
    primary:
      "bg-turquoise-500 text-navy-950 hover:bg-turquoise-400 shadow-lg shadow-turquoise-500/25 hover:shadow-turquoise-400/40 hover:scale-105",
    ghost:
      "border border-white/20 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-sm",
    outline:
      "border border-turquoise-500/50 text-turquoise-400 hover:bg-turquoise-500/10 hover:border-turquoise-400",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
