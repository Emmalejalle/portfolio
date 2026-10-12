import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projets">
      <SectionHeading
        index="01"
        eyebrow="Projets"
        title="Stages, projets d'équipe et projets universitaires"
        description="Des missions clients en agence à des projets menés en équipe ou en solo dans le cadre de mes études."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
