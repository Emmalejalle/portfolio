import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projets" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Projets"
        title="Deux projets, deux façons de travailler"
        description="Du travail en équipe sur un vrai besoin métier à l'intégration solo d'une maquette Figma jusqu'au code."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
