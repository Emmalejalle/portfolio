import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/lib/data";

export function About() {
  return (
    <section id="a-propos" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="À propos"
            title="Développement et cybersécurité, une même logique"
          />
          <p className="text-base leading-relaxed text-foreground-muted">
            Je suis étudiante en BUT Informatique, parcours Cybersécurité, à l&apos;IUT de Vannes.
            J&apos;aime autant construire des interfaces claires que comprendre comment elles
            peuvent être mises à l&apos;épreuve — les deux se nourrissent l&apos;une l&apos;autre.
          </p>
          <p className="text-base leading-relaxed text-foreground-muted">
            En parallèle de ma formation, je suis actuellement en stage de développement web chez{" "}
            <span className="font-medium text-foreground">Selltim</span>, une agence web basée à
            Lanester, où je travaille au quotidien avec Next.js, GraphQL et Tailwind CSS sur des
            projets clients.
          </p>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-accent-strong ring-4 ring-accent-soft" />
              <span className="text-xs font-semibold uppercase tracking-wide text-accent-strong">
                {item.period}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-foreground-muted">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
