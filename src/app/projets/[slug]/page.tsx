import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCover } from "@/components/ui/ProjectCover";
import { projects } from "@/data/projects";

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
    description: project.summary,
  };
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mt-10 flex flex-col gap-3">
      <h2 className="type-subtitle">{title}</h2>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-col gap-2">
      {items.map((item) => (
        <li key={item} className="type-small flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-strong" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projets/[slug]">) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  if (!project) {
    notFound();
  }

  const previousProject = index > 0 ? projects[index - 1] : undefined;
  const nextProject = index < projects.length - 1 ? projects[index + 1] : undefined;

  return (
    <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Link
        href="/#projets"
        className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent-ink"
      >
        ← Retour aux projets
      </Link>

      <div className="mt-6 flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="type-title">
            {project.title}
          </h1>
          <Badge tone="outline">{project.type}</Badge>
        </div>
        {project.typeDetail ? (
          <p className="text-sm font-medium text-accent-ink">{project.typeDetail}</p>
        ) : null}
      </div>

      <div className="mt-8">
        <ProjectCover project={project} className="h-56 sm:h-72" sizes="(min-width: 768px) 768px, 100vw" preload />
      </div>

      <p className="type-lead mt-8">{project.summary}</p>

      {project.context ? <Section title="Contexte"><p className="type-small">{project.context}</p></Section> : null}

      {project.role ? <Section title="Mon rôle"><p className="type-small">{project.role}</p></Section> : null}

      <Section title="Stack technique">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Section>

      <Section title="Fonctionnalités clés">
        <BulletList items={project.features} />
      </Section>

      <Section title="Défis">
        <BulletList items={project.challenges} />
      </Section>

      {project.takeaway ? (
        <Section title="Ce que j'en retiens">
          <p className="type-small">{project.takeaway}</p>
        </Section>
      ) : null}

      {project.gallery && project.gallery.length > 0 ? (
        <Section title="Galerie de captures">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.gallery.map((capture) => (
              <div
                key={capture}
                className="relative h-48 w-full overflow-hidden rounded-media bg-accent-soft"
              >
                <Image
                  src={capture}
                  alt={`Capture d'écran — ${project.title}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {project.links && project.links.length > 0 ? (
        <div className="mt-10 flex flex-wrap gap-3">
          {project.links.map((link) => (
            <Button key={link.href} href={link.href} target="_blank">
              {link.label} ↗
            </Button>
          ))}
          <Button href="/#contact" variant="outline">
            Me contacter à ce sujet
          </Button>
        </div>
      ) : (
        <div className="mt-10">
          <Button href="/#contact" variant="outline">
            Me contacter à ce sujet
          </Button>
        </div>
      )}

      {previousProject || nextProject ? (
        <nav className="mt-16 flex items-center justify-between gap-4 border-t border-border pt-6">
          {previousProject ? (
            <Link
              href={`/projets/${previousProject.slug}`}
              className="flex flex-col text-sm text-foreground-muted transition-colors hover:text-accent-ink"
            >
              <span>← Précédent</span>
              <span className="font-medium text-foreground">{previousProject.title}</span>
            </Link>
          ) : (
            <span />
          )}
          {nextProject ? (
            <Link
              href={`/projets/${nextProject.slug}`}
              className="flex flex-col text-right text-sm text-foreground-muted transition-colors hover:text-accent-ink"
            >
              <span>Suivant →</span>
              <span className="font-medium text-foreground">{nextProject.title}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      ) : null}
    </article>
  );
}
