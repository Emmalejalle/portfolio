import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { profile, socials } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" tone="surface">
      <div className="flex flex-col items-start gap-8 rounded-panel border border-border bg-accent-soft/60 p-10 sm:p-14 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex max-w-xl flex-col gap-4">
          <span className="type-eyebrow flex items-baseline gap-2">
            <span className="text-foreground-muted">04 /</span>
            Contact
          </span>
          <h2 className="type-title">
            On en parle ?
          </h2>
          <p className="type-body">
            Une question sur un projet, une idée à partager ou simplement envie d&apos;échanger
            autour du développement web et de la cybersécurité : écris-moi.
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
                  className="link-underline text-foreground-muted"
                >
                  {social.label}
                </a>
              ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
