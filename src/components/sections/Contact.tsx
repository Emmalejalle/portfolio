import { Button } from "@/components/ui/Button";
import { profile, socials } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col items-start gap-8 rounded-[2.5rem] border border-border bg-accent-soft/60 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Discutons de votre prochain projet
            </h2>
            <p className="text-base leading-relaxed text-foreground-muted">
              <span className="font-semibold">{profile.internshipSearch}</span>{" "}
              — je suis ouverte aux échanges autour du développement web et de
              la cybersécurité.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-3">
            <Button href={`mailto:${profile.email}`}>Envoyer un email</Button>
            <div className="flex gap-6">
              {socials
                .filter((s) => s.label !== "Email")
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="text-sm font-medium text-foreground-muted underline decoration-accent-strong/40 decoration-2 underline-offset-4 transition-colors hover:text-accent-strong"
                  >
                    {social.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
