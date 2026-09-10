import { profile, socials } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-foreground">{profile.name}</span>
          <span className="text-sm text-foreground-muted">{profile.role}</span>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent-strong"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="border-t border-border px-6 py-4 text-center text-xs text-foreground-muted">
        © {new Date().getFullYear()} {profile.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
