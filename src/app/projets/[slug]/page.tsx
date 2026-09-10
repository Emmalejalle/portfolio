import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { projects } from "@/lib/data";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} — Emma Lejalle`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/#projets"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent-strong"
      >
        ← Retour aux projets
      </Link>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {project.title}
          </h1>
          {project.team === "solo" ? (
            <Badge tone="outline">Projet solo</Badge>
          ) : (
            <Badge tone="outline">Projet d&apos;équipe</Badge>
          )}
        </div>
        <p className="text-sm font-medium text-accent-strong">{project.role}</p>
      </div>

      <div className="mt-8">
        <ProjectVisual label={project.title} />
      </div>

      <p className="mt-8 text-base leading-relaxed text-foreground-muted">
        {project.description}
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <h2 className="text-lg font-semibold text-foreground">Points clés</h2>
        <ul className="flex flex-col gap-2">
          {project.highlights.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-foreground-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {project.liveUrl ? (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-strong px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-foreground"
          >
            Voir le site en ligne ↗
          </a>
        ) : null}
        <Button href="/#contact" variant="outline">
          Me contacter à ce sujet
        </Button>
      </div>
    </article>
  );
}
