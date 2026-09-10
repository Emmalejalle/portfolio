import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  target?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200";

const variants = {
  primary: "bg-accent-strong text-white hover:bg-foreground",
  outline:
    "border border-foreground/15 text-foreground hover:border-accent-strong hover:text-accent-strong",
};

export function Button({ children, href, variant = "primary", className = "", target }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

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
