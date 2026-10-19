export const profile = {
  name: "Emma Le Jallé",
  role: "Étudiante en Cybersécurité & Développeuse Web",
  location: "Vannes, France",
  // Numéro du badge : EL (initiales) · 56 (Morbihan) · 27 (promo 2027)
  badgeId: "EL-5627",
  school: "BUT Info · IUT Vannes",
  email: "emmalejalle4@gmail.com",
  tagline:
    "J'aime construire des interfaces soignées, sans jamais perdre de vue la manière dont elles peuvent être attaquées.",
};


export const navLinks = [
  { href: "/#projets", label: "Projets" },
  { href: "/#competences", label: "Compétences" },
  { href: "/#a-propos", label: "À propos" },
  { href: "/#contact", label: "Contact" },
];

export const socials = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: "https://github.com/Emmalejalle" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/emma-le-jall%C3%A9-228283349/" },
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
