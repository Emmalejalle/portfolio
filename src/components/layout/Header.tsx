"use client";

import { useState } from "react";
import Link from "next/link";
import { navLinks, profile } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight">
          <Logo />
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button href="/cv.pdf" variant="outline" size="sm" target="_blank">
            Mon CV
          </Button>
          <Button href="/#contact" variant="outline" size="sm">
            Me contacter
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-[1.5px] w-4 bg-current transition-transform ${
                  open ? "translate-y-[5px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-[1.5px] w-4 bg-current transition-transform ${
                  open ? "-translate-y-[5px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-media px-3 py-2.5 text-sm font-medium text-foreground-muted transition-colors hover:bg-accent-soft hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
