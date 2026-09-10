export const profile = {
  name: "Emma Lejalle",
  role: "Étudiante en Cybersécurité & Développeuse Web",
  location: "Vannes, France",
  email: "emmalejalle4@gmail.com",
  tagline:
    "J'aime construire des interfaces soignées, sans jamais perdre de vue la manière dont elles peuvent être attaquées.",
};

export const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
];

export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export type Project = {
  slug: string;
  title: string;
  role: string;
  team: "solo" | "équipe";
  description: string;
  highlights: string[];
  tags: string[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "fenalim",
    title: "FenAlim",
    role: "Application mobile — projet d'équipe, 2ᵉ année BUT",
    team: "équipe",
    description:
      "Application mobile pensée pour accompagner les sapeurs-pompiers dans le suivi de leurs interventions et de leurs échanges d'informations sur le terrain. Développée en équipe de plusieurs étudiants dans le cadre du BUT Informatique.",
    highlights: [
      "Conception collaborative du cahier des charges avec un client réel",
      "Répartition des rôles et gestion de projet en équipe",
      "Interface pensée pour une utilisation rapide, en conditions d'urgence",
    ],
    tags: ["Développement mobile", "Travail d'équipe", "Gestion de projet"],
    links: [{ label: "Voir le projet", href: "#" }],
  },
  {
    slug: "vente-garage",
    title: "Vente-Garage",
    role: "Site one-page — projet réalisé en solo",
    team: "solo",
    description:
      "Site vitrine one-page conçu et développé seule, de la maquette Figma jusqu'au code final. L'objectif : traduire fidèlement une identité visuelle existante en une interface web propre, responsive et performante.",
    highlights: [
      "Intégration pixel-perfect à partir d'une maquette Figma",
      "Développement complet en autonomie, du design system au déploiement",
      "Structure one-page pensée pour la conversion et la lisibilité",
    ],
    tags: ["Next.js", "Tailwind CSS", "Figma to code", "Projet solo"],
    links: [{ label: "Voir le projet", href: "#" }],
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Développement web",
    skills: ["Next.js", "React", "TypeScript / JavaScript", "GraphQL", "Tailwind CSS"],
  },
  {
    label: "Cybersécurité",
    skills: ["Sécurité applicative", "Réseaux", "Administration Linux", "Analyse de vulnérabilités"],
  },
  {
    label: "Outils & méthodes",
    skills: ["Git / GitHub", "Figma", "SQL", "Travail en équipe agile"],
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  description: string;
};

export const timeline: TimelineItem[] = [
  {
    period: "2023 — 2024",
    title: "BUT Informatique, 1ʳᵉ année",
    description:
      "Entrée à l'IUT de Vannes, parcours Cybersécurité. Fondamentaux du développement, des réseaux et des bases de données.",
  },
  {
    period: "2024 — 2025",
    title: "BUT Informatique, 2ᵉ année",
    description:
      "Approfondissement de la cybersécurité et du développement. Projet d'équipe FenAlim, application mobile pour sapeurs-pompiers.",
  },
  {
    period: "2025 — en cours",
    title: "Stage développement web — Selltim",
    description:
      "Stage chez Selltim, agence web à Lanester, sur des projets clients en Next.js, GraphQL et Tailwind CSS.",
  },
];
