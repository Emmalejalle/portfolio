import { Button } from "@/components/ui/Button";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-24 h-72 bg-[radial-gradient(ellipse_at_top,_var(--color-accent-soft),_transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="w-fit rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-foreground-muted">
            Étudiante en BUT Informatique — parcours Cybersécurité
          </span>

          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Je code des interfaces{" "}
            <span className="font-accent italic text-accent-strong">solides</span>, en pensant
            toujours à la sécurité.
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-foreground-muted sm:text-lg">
            {profile.tagline} J&apos;ai récemment effectué un stage de développement web chez
            Selltim, agence web à Lanester, où j&apos;ai travaillé avec Next.js, GraphQL et
            Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#projets">Voir mes projets</Button>
            <Button href="#contact" variant="outline">
              Me contacter
            </Button>
            <Button href="/cv.pdf" variant="outline" target="_blank">
              Voir mon CV
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-foreground-muted">
            <span className="font-medium text-foreground">Ma stack</span>
            <span>Next.js</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
            <span>GraphQL</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          {/* Emplacement photo — remplacer par une vraie photo (ex: <Image src="/photo.jpg" fill className="object-cover" />) dès qu'elle est disponible */}
          <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-b from-accent-soft to-surface shadow-xl shadow-foreground/5">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-accent-strong">
              <span className="font-accent text-5xl italic text-white">EL</span>
            </div>
            <span className="text-xs font-medium text-foreground-muted">Photo à venir</span>
          </div>

          <div className="absolute -top-6 -right-6 flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-4 py-3 text-xs shadow-lg shadow-foreground/5">
            <span className="font-semibold text-foreground">IUT de Vannes</span>
            <span className="text-foreground-muted">BUT Informatique · Cybersécurité</span>
          </div>

          <div className="absolute -bottom-6 -left-6 flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-4 py-3 text-xs shadow-lg shadow-foreground/5">
            <span className="font-semibold text-foreground">25 janv. – 14 mai 2027</span>
            <span className="text-foreground-muted">Recherche de stage</span>
          </div>
        </div>
      </div>
    </section>
  );
}
