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
            {profile.tagline} Actuellement en stage développement web chez Selltim, agence web à
            Lanester, sur Next.js, GraphQL et Tailwind CSS.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="#projets">Voir mes projets</Button>
            <Button href="#contact" variant="outline">
              Me contacter
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 text-sm text-foreground-muted">
            <span className="font-medium text-foreground">Stack actuelle</span>
            <span>Next.js</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
            <span>GraphQL</span>
            <span aria-hidden className="h-1 w-1 rounded-full bg-border" />
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="relative aspect-[4/5] w-full rounded-[2.5rem] border border-border bg-surface p-8 shadow-xl shadow-foreground/5">
            <div className="absolute inset-8 rounded-3xl bg-accent-soft" />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="h-2.5 w-2.5 rounded-full bg-border" />
              </div>

              <div className="flex flex-col gap-2 font-mono text-xs text-accent-strong/80">
                <span>const dev = {"{"}</span>
                <span className="pl-4">focus: &quot;web&quot;,</span>
                <span className="pl-4">mindset: &quot;sécurité&quot;,</span>
                <span>{"}"}</span>
              </div>
            </div>
          </div>

          <div className="absolute -left-6 top-10 flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-4 py-3 text-xs shadow-lg shadow-foreground/5">
            <span className="font-semibold text-foreground">IUT de Vannes</span>
            <span className="text-foreground-muted">BUT Informatique · Cybersécurité</span>
          </div>

          <div className="absolute -bottom-6 -right-4 flex flex-col gap-0.5 rounded-2xl border border-border bg-surface px-4 py-3 text-xs shadow-lg shadow-foreground/5">
            <span className="font-semibold text-foreground">En stage</span>
            <span className="text-foreground-muted">Selltim · Lanester</span>
          </div>
        </div>
      </div>
    </section>
  );
}
