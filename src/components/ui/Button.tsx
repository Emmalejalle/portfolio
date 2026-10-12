import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  className?: string;
  target?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-accent-ink text-accent-foreground hover:bg-foreground",
  outline:
    "border border-foreground/15 text-foreground hover:border-accent-ink hover:text-accent-ink",
};

const sizes = {
  md: "px-6 py-3",
  sm: "px-5 py-2.5",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  target,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
