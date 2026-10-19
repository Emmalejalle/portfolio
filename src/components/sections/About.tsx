import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timeline } from "@/lib/data";

export function About() {
  return (
    <Section id="a-propos">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading
            index="03"
            eyebrow="À propos"
            title="Développement et cybersécurité, une même logique"
          />
          <p className="type-body">
            Je suis étudiante en BUT Informatique, parcours Cybersécurité, à l&apos;IUT de Vannes.
            J&apos;aime autant construire des interfaces claires que comprendre comment elles
            peuvent être mises à l&apos;épreuve — les deux se nourrissent l&apos;une l&apos;autre.
          </p>
          <p className="type-body">
            J&apos;ai réalisé un stage de développement web chez{" "}
            <span className="font-medium text-foreground">Selltim</span>, une agence web basée à
            Lanester, où j&apos;ai travaillé au quotidien avec Next.js, GraphQL et Tailwind CSS
            sur des projets clients.
          </p>
        </div>

        <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
          {timeline.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full bg-accent-strong ring-4 ring-accent-soft" />
              <span className="type-eyebrow">
                {item.period}
              </span>
              <h3 className="type-subtitle mt-1">{item.title}</h3>
              <p className="type-small mt-1">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
