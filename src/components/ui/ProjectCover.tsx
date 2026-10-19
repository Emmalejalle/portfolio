import Image from "next/image";
import type { Project } from "@/data/projects";
import { ProjectVisual } from "./ProjectVisual";

type ProjectCoverProps = {
  project: Project;
  className?: string;
  sizes?: string;
  preload?: boolean;
};

export function ProjectCover({
  project,
  className = "h-48",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  preload = false,
}: ProjectCoverProps) {
  if (!project.cover) {
    return <ProjectVisual label={project.title} className={className} />;
  }

  return (
    <div className={`relative w-full overflow-hidden rounded-media bg-accent-soft ${className}`}>
      <Image
        src={project.cover}
        alt={project.title}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
      />
    </div>
  );
}
