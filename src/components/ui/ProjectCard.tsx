import Link from "next/link";
import type { Project } from "@/data/projects";
import { Badge } from "./Badge";
import { ProjectCover } from "./ProjectCover";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-card border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <ProjectCover project={project} />

      <div className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          <Badge tone="outline">{project.type}</Badge>
        </div>

        <p className="type-small">{project.summary}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <Link
        href={`/projets/${project.slug}`}
        className="link-underline w-fit text-foreground"
      >
        Voir le projet →
      </Link>
    </article>
  );
}
