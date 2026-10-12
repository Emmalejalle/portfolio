import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  tone?: "background" | "surface";
  className?: string;
  children: ReactNode;
};

// Section cadrée : filet en haut et coins de viseur aux angles du cadre de page.
export function Section({ id, tone = "background", className = "", children }: SectionProps) {
  return (
    <section id={id} className={`relative border-t border-border ${tone === "surface" ? "bg-surface" : ""}`}>
      <div className={`relative mx-auto max-w-6xl px-6 py-20 sm:py-28 ${className}`}>
        <span aria-hidden className="absolute -top-px left-0 h-3 w-3 border-t-2 border-l-2 border-accent-ink" />
        <span aria-hidden className="absolute -top-px right-0 h-3 w-3 border-t-2 border-r-2 border-accent-ink" />
        {children}
      </div>
    </section>
  );
}
