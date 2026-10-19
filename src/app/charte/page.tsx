import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AccessBadge } from "@/components/ui/AccessBadge";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Fingerprint } from "@/components/ui/Fingerprint";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TokenValue } from "./TokenValue";

export const metadata: Metadata = {
  title: "Charte graphique — Emma Lejalle",
  robots: { index: false, follow: false },
};

const colors = [
  { token: "--background", swatch: "bg-background", usage: "Fond de page" },
  { token: "--surface", swatch: "bg-surface", usage: "Sections alternées, cartes" },
  { token: "--border", swatch: "bg-border", usage: "Bordures et filets" },
  { token: "--foreground", swatch: "bg-foreground", usage: "Titres, texte principal" },
  { token: "--foreground-muted", swatch: "bg-foreground-muted", usage: "Texte courant, légendes" },
  { token: "--accent-soft", swatch: "bg-accent-soft", usage: "Fond de badge, de visuel, de bloc" },
  { token: "--accent", swatch: "bg-accent", usage: "Halos et ombres colorées" },
  { token: "--accent-strong", swatch: "bg-accent-strong", usage: "Décor uniquement : points, anneaux" },
  { token: "--accent-ink", swatch: "bg-accent-ink", usage: "Texte rose, liens, bouton principal" },
];

const typeScale = [
  { name: "type-display", usage: "Titre du hero, une seule fois par page", sample: "Je code des interfaces solides" },
  { name: "type-title", usage: "Titre de section ou de page projet", sample: "Stack technique & compétences" },
  { name: "type-subtitle", usage: "Titre de carte, d'étape, de sous-partie", sample: "BUT Informatique" },
  { name: "type-eyebrow", usage: "Sur-titre au-dessus d'un titre", sample: "Projets" },
  { name: "type-lead", usage: "Chapeau sous un titre principal", sample: "Étudiante en BUT Informatique, parcours cybersécurité." },
  { name: "type-body", usage: "Paragraphe courant", sample: "J'aime autant construire des interfaces claires que les mettre à l'épreuve." },
  { name: "type-small", usage: "Texte de carte, listes, détails", sample: "Application de commande réalisée en équipe de quatre." },
];

const radii = [
  { name: "rounded-full", usage: "Boutons, badges, pastilles" },
  { name: "rounded-media", usage: "Images, visuels, encarts flottants" },
  { name: "rounded-card", usage: "Cartes" },
  { name: "rounded-panel", usage: "Grands blocs : photo, contact" },
];

const shadows = [
  { name: "shadow-card", usage: "Carte au repos" },
  { name: "shadow-card-hover", usage: "Carte au survol" },
  { name: "shadow-float", usage: "Encart flottant" },
  { name: "shadow-raised", usage: "Élément phare (photo du hero)" },
];

function Block({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border py-16">
      <SectionHeading eyebrow={eyebrow} title={title} />
      <div className="mt-10">{children}</div>
    </section>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <code className="font-mono text-xs font-medium text-foreground">{children}</code>;
}

export default function ChartePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <div className="flex flex-col gap-4 pb-16">
        <span className="type-eyebrow">Usage interne</span>
        <h1 className="type-display">
          Charte graphique
        </h1>
        <p className="type-lead max-w-2xl">
          Les tokens et composants du portfolio. Tout est défini dans{" "}
          <code className="font-mono text-sm text-foreground">src/app/globals.css</code> : cette
          page ne fait que les afficher.
        </p>
      </div>

      <Block eyebrow="Couleurs" title="Palette">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {colors.map((color) => (
            <li key={color.token} className="overflow-hidden rounded-card border border-border bg-surface">
              <div className={`h-24 border-b border-border ${color.swatch}`} />
              <div className="flex flex-col gap-1 p-4">
                <div className="flex items-center justify-between gap-2">
                  <Label>{color.token}</Label>
                  <TokenValue name={color.token} />
                </div>
                <span className="type-small">{color.usage}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 rounded-card border border-border bg-surface p-6">
          <h3 className="type-subtitle">Règles</h3>
          <ul className="type-small mt-3 flex list-disc flex-col gap-2 pl-5 marker:text-accent-strong">
            <li>Le rose s&apos;utilise en touche (sur-titres, liens, points), jamais en grand aplat.</li>
            <li>
              Tout texte rose utilise <Label>accent-ink</Label>. <Label>accent-strong</Label> n&apos;a
              pas assez de contraste pour du texte (3:1) et reste décoratif.
            </li>
            <li>
              Le texte posé sur un fond rose plein utilise <Label>accent-foreground</Label>, pas{" "}
              <Label>text-white</Label>.
            </li>
            <li>
              Les sections alternent <Label>bg-background</Label> et <Label>bg-surface</Label>.
            </li>
          </ul>
        </div>
      </Block>

      <Block eyebrow="Typographie" title="Échelle de texte">
        <p className="type-body max-w-2xl">
          Geist pour le texte. Geist Mono (<Label>font-mono</Label>) pour tout ce qui
          s&apos;apparente à une donnée : sur-titres, dates, identifiants, étiquettes. Pas
          d&apos;italique décoratif.
        </p>
        <ul className="mt-8 flex flex-col">
          {typeScale.map((type) => (
            <li
              key={type.name}
              className="grid gap-2 border-b border-border py-6 last:border-b-0 md:grid-cols-[14rem_1fr] md:gap-8"
            >
              <div className="flex flex-col gap-1">
                <Label>{type.name}</Label>
                <span className="type-small">{type.usage}</span>
              </div>
              <p className={type.name}>{type.sample}</p>
            </li>
          ))}
          <li className="grid gap-2 py-6 md:grid-cols-[14rem_1fr] md:gap-8">
            <div className="flex flex-col gap-1">
              <Label>link-underline</Label>
              <span className="type-small">Lien dans le texte ou en pied de carte</span>
            </div>
            <a href="#" className="link-underline w-fit text-foreground">
              Voir le projet →
            </a>
          </li>
        </ul>
      </Block>

      <Block eyebrow="Formes" title="Arrondis et ombres">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {radii.map((radius) => (
            <div key={radius.name} className="flex flex-col gap-3">
              <div className={`h-24 border border-accent bg-accent-soft ${radius.name}`} />
              <Label>{radius.name}</Label>
              <span className="type-small">{radius.usage}</span>
            </div>
          ))}
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="flex flex-col gap-3">
              <div className={`h-24 rounded-card border border-border bg-surface ${shadow.name}`} />
              <Label>{shadow.name}</Label>
              <span className="type-small">{shadow.usage}</span>
            </div>
          ))}
        </div>
      </Block>

      <Block eyebrow="Composants" title="Éléments réutilisables">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <Label>Button</Label>
            <div className="flex flex-wrap items-center gap-4">
              <Button href="#">Principal</Button>
              <Button href="#" variant="outline">
                Secondaire
              </Button>
              <Button href="#" size="sm">
                Petit
              </Button>
              <Button href="#" variant="outline" size="sm">
                Petit secondaire
              </Button>
            </div>
            <span className="type-small">
              Un seul bouton principal par bloc. <Label>size=&quot;sm&quot;</Label> pour le header.
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Label>Badge</Label>
            <div className="flex flex-wrap gap-2">
              <Badge>Next.js</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge tone="outline">Stage</Badge>
            </div>
            <span className="type-small">
              <Label>soft</Label> pour les technos, <Label>outline</Label> pour le type de projet.
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Label>SectionHeading</Label>
            <div className="rounded-card border border-border bg-surface p-8">
              <SectionHeading
                eyebrow="Sur-titre"
                title="Titre de section"
                description="Description facultative, en type-body, limitée à deux ou trois lignes."
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Label>Fingerprint</Label>
            <div className="flex flex-wrap items-end gap-6">
              {["Emma Le Jallé", "Poké Bar", "Portfolio"].map((seed) => (
                <div key={seed} className="flex flex-col items-center gap-2">
                  <div className="rounded-media bg-accent-soft p-3">
                    <Fingerprint seed={seed} className="h-16 w-16 text-accent-ink" />
                  </div>
                  <span className="font-mono text-xs text-foreground-muted">{seed}</span>
                </div>
              ))}
            </div>
            <span className="type-small">
              Motif unique calculé à partir d&apos;un texte (un hash) : même texte, même motif. Sert au
              logo, au badge et aux visuels de projets. C&apos;est la signature graphique du site.
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <Label>AccessBadge</Label>
            <div className="rounded-card border border-border bg-background py-8">
              <AccessBadge />
            </div>
            <span className="type-small">Remplace la photo dans le hero.</span>
          </div>

          <div className="flex flex-col gap-4">
            <Label>ProjectVisual</Label>
            <div className="max-w-sm">
              <ProjectVisual label="Poké Bar" />
            </div>
            <span className="type-small">Visuel par défaut quand un projet n&apos;a pas de capture.</span>
          </div>
        </div>
      </Block>
    </div>
  );
}
