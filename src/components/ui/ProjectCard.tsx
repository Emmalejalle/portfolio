import Link from "next/link";
import type { Project } from "@/lib/data";
import { Badge } from "./Badge";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col gap-5 rounded-3xl border border-border bg-surface p-6 shadow-sm shadow-foreground/[0.03] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10">
      <ProjectVisual label={project.title} />

      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
          {project.team === "solo" ? (
            <Badge tone="outline">Projet solo</Badge>
          ) : (
            <Badge tone="outline">Projet d&apos;équipe</Badge>
          )}
        </div>

        <p className="text-sm font-medium text-accent-strong">{project.role}</p>
        <p className="text-sm leading-relaxed text-foreground-muted">{project.description}</p>

        <ul className="flex flex-col gap-1.5 pt-1">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-foreground-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="flex gap-4 pt-1">
        {project.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-foreground underline decoration-accent-strong/40 decoration-2 underline-offset-4 transition-colors hover:text-accent-strong"
          >
            {link.label} →
          </Link>
        ))}
      </div>
    </article>
  );
}
