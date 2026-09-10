import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="competences" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Compétences"
          title="Stack technique & compétences"
          description="Une double formation développement web et cybersécurité, avec une pratique de Next.js consolidée lors de mon stage chez Selltim."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.label}
              className="flex flex-col gap-4 rounded-3xl border border-border bg-background p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground-muted">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
