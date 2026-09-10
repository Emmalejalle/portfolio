export const profile = {
  name: "Emma Le Jallé",
  role: "Étudiante en Cybersécurité & Développeuse Web",
  location: "Vannes, France",
  email: "emmalejalle4@gmail.com",
  tagline:
    "J'aime construire des interfaces soignées, sans jamais perdre de vue la manière dont elles peuvent être attaquées.",
  internshipSearch: "Recherche de stage du 25 janvier au 14 mai 2027",
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
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "fenalim",
    title: "FenAlim",
    role: "Application mobile — projet d'équipe, 2ᵉ année BUT",
    team: "équipe",
    description:
      "Application mobile de recensement des points d'eau à destination des sapeurs-pompiers, développée en équipe dans le cadre d'une SAE du BUT Informatique.",
    highlights: [
      "Application mobile développée avec React Native et Expo",
      "API réalisée en FastAPI, données persistées en MySQL",
      "Répartition des rôles et gestion de projet en équipe",
    ],
    tags: ["React Native", "Expo", "FastAPI", "MySQL", "Travail d'équipe"],
    links: [{ label: "Voir le projet", href: "/projets/fenalim" }],
  },
  {
    slug: "vente-garage",
    title: "Vente-Garage",
    role: "Site one-page — projet réalisé en solo pendant mon stage chez Selltim",
    team: "solo",
    description:
      "Site vitrine one-page développé seule à partir d'une maquette Figma réalisée par l'équipe design de Selltim. L'objectif : intégrer fidèlement cette maquette en une interface web propre, responsive et performante.",
    highlights: [
      "Intégration pixel-perfect à partir d'une maquette Figma fournie par l'équipe design",
      "Développement complet en autonomie, de l'intégration au déploiement",
      "Structure one-page pensée pour la conversion et la lisibilité",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma to code", "Projet solo"],
    links: [{ label: "Voir le projet", href: "/projets/vente-garage" }],
    liveUrl: "https://www.vente-garage.fr/",
  },
];

export type SkillCategory = {
  label: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Développement web",
    skills: ["Next.js", "React / React Native", "TypeScript / JavaScript", "GraphQL", "Tailwind CSS", "HTML / CSS"],
  },
  {
    label: "Langages & bases de données",
    skills: ["Java", "Python", "SQL", "MySQL", "Oracle"],
  },
  {
    label: "Cybersécurité & outils",
    skills: ["Réseaux", "Linux", "Windows", "Git", "Figma"],
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
    title: "Prépa MPSI",
    description:
      "Année préparatoire maths/physique au lycée Lesage, à Vannes, avant réorientation vers l'informatique.",
  },
  {
    period: "2024 — 2027",
    title: "BUT Informatique, parcours Cybersécurité",
    description:
      "IUT de Vannes. Développement, réseaux, bases de données et sécurité. Projet d'équipe FenAlim, application mobile pour sapeurs-pompiers.",
  },
  {
    period: "2026",
    title: "Stage développement web — Selltim",
    description:
      "Stage chez Selltim, agence web à Lanester : développement de projets clients en Next.js, GraphQL et Tailwind CSS, dont le site Vente-Garage.",
  },
];
