"use client";

import { useState, type ReactNode } from "react";
import { profile, socials } from "@/lib/data";
import { fingerprintBits } from "@/lib/fingerprint";
import { Fingerprint } from "./Fingerprint";

const id = profile.badgeId;

const fields = [
  { label: "Formation", value: profile.school },
  { label: "Parcours", value: "cybersécurité" },
  { label: "Promo", value: "2027" },
  { label: "Base", value: profile.location },
];

const contacts = [
  ...socials.map((social) => ({ ...social, value: social.label === "Email" ? profile.email : social.label })),
  { label: "CV", href: "/cv.pdf", value: "cv.pdf" },
];

function Barcode({ seed }: { seed: string }) {
  const widths = fingerprintBits(seed, 48).map((wide) => (wide ? 1.6 : 0.7));
  const offsets = widths.map((_, i) => widths.slice(0, i).reduce((sum, w) => sum + w + 0.5, 0));
  const total = offsets[offsets.length - 1] + widths[widths.length - 1];

  return (
    <svg viewBox={`0 0 ${total} 12`} preserveAspectRatio="none" className="h-8 w-full text-foreground" aria-hidden>
      {widths.map((width, i) =>
        i % 2 === 0 ? <rect key={i} x={offsets[i]} width={width} height={12} fill="currentColor" /> : null,
      )}
    </svg>
  );
}

function Face({ title, hidden, className = "", children }: { title: string; hidden: boolean; className?: string; children: ReactNode }) {
  return (
    <div
      inert={hidden}
      aria-hidden={hidden}
      className={`overflow-hidden rounded-card border border-border bg-surface shadow-raised backface-hidden ${className}`}
    >
      <div className="relative flex items-center justify-between bg-accent-ink px-5 pt-6 pb-3 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.15em] text-accent-foreground">
        <span aria-hidden className="absolute left-1/2 top-2 h-1.5 w-10 -translate-x-1/2 rounded-full bg-background/90" />
        <span>{title}</span>
        <span>{id}</span>
      </div>
      {children}
    </div>
  );
}

function FlipButton({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-full border border-border px-3 py-1 font-mono text-[0.6875rem] text-foreground-muted transition-colors hover:border-accent-ink hover:text-accent-ink"
    >
      ↻ {label}
    </button>
  );
}

export function AccessBadge({ strapClassName = "h-16" }: { strapClassName?: string }) {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped((value) => !value);

  return (
    <div className="mx-auto w-full max-w-xs origin-top animate-swing motion-reduce:animate-none">
      <div aria-hidden className={`mx-auto flex w-5 justify-center bg-accent-strong ${strapClassName}`}>
        <span className="mt-auto -mb-2 h-5 w-9 shrink-0 rounded-md border-4 border-foreground-muted" />
      </div>

      <div className="perspective-[1400px]">
        <div
          className={`grid transition-transform duration-700 transform-3d motion-reduce:transition-none ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          <Face title="Accès autorisé" hidden={flipped} className="col-start-1 row-start-1">
            <div className="flex flex-col gap-6 p-5">
              <div className="flex items-center gap-4">
                <div className="shrink-0 rounded-media bg-accent-soft p-3">
                  <Fingerprint seed={profile.name} className="h-20 w-20 text-accent-ink" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="type-subtitle leading-tight">{profile.name}</span>
                  <span className="font-mono text-xs text-foreground-muted">dev web · cybersécurité</span>
                </div>
              </div>

              <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 border-y border-dashed border-border py-4 font-mono text-xs">
                {fields.map((field) => (
                  <div key={field.label} className="contents">
                    <dt className="uppercase tracking-wider text-foreground-muted">{field.label}</dt>
                    <dd className="text-foreground">{field.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="flex flex-col gap-3">
                <Barcode seed={`${profile.name}:${profile.email}`} />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.625rem] tracking-[0.3em] text-foreground-muted">
                    {id}·VANNES
                  </span>
                  <FlipButton onClick={flip} label="retourner" />
                </div>
              </div>
            </div>
          </Face>

          <Face title="Me joindre" hidden={!flipped} className="col-start-1 row-start-1 flex flex-col rotate-y-180">
            <div className="flex flex-1 flex-col gap-4 p-5">
              <ul className="flex flex-col">
                {contacts.map((contact) => (
                  <li key={contact.label} className="border-b border-dashed border-border last:border-b-0">
                    <a
                      href={contact.href}
                      target={contact.href.startsWith("http") || contact.label === "CV" ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between gap-4 py-3 font-mono text-xs"
                    >
                      <span className="uppercase tracking-wider text-foreground-muted">{contact.label}</span>
                      <span className="truncate text-foreground transition-colors group-hover:text-accent-ink">
                        {contact.value} ↗
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-end justify-between gap-4">
                <Fingerprint seed={profile.email} cells={5} className="h-14 w-14 text-accent" />
                <FlipButton onClick={flip} label="recto" />
              </div>
            </div>
          </Face>
        </div>
      </div>
    </div>
  );
}
