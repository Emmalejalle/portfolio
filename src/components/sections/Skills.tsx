import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="competences" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Compétences"
            title="Stack technique & compétences"
            description="Une double formation développement web et cybersécurité, avec une pratique de Next.js consolidée lors de mon stage chez Selltim."
          />

          <ol className="relative flex flex-col gap-10 border-l border-border pl-8">
            {skillCategories.map((category) => (
              <li key={category.label} className="relative">
                <span className="absolute -left-9.25 top-1.5 h-2.5 w-2.5 rounded-full bg-accent-strong ring-4 ring-accent-soft" />
                <h3 className="text-lg font-semibold text-foreground">
                  {category.label}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
