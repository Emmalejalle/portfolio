export type ProjectType = "Stage" | "Projet universitaire" | "Projet d'équipe";

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  type: ProjectType;
  typeDetail?: string;
  summary: string;
  tags: string[];
  stack: string[];
  cover?: string;
  context?: string;
  role?: string;
  features: string[];
  challenges: string[];
  takeaway?: string;
  gallery?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: "crm-cabinet-conseil",
    title: "CRM métier pour un cabinet de conseil",
    type: "Stage",
    typeDetail: "agence web Selltim, avril-juin 2026",
    summary:
      "Évolution d'un CRM fullstack utilisé par un cabinet de conseil pour piloter son activité et sa comptabilité.",
    tags: ["NestJS", "Prisma", "Next.js", "TanStack Query"],
    stack: ["NestJS", "Prisma", "Next.js", "TanStack Query", "TypeScript", "BullMQ", "CASL"],
    context: "Projet client de l'agence, repris en cours de route à la suite d'un autre stagiaire.",
    role: "Développement de nouvelles fonctionnalités back et front sur une base de code existante.",
    features: [
      "Gestion des permissions par rôle (CASL)",
      "Module de suivi du temps passé, avec création automatique via une file de tâches (BullMQ)",
      "Système de périodes comptables avec clonage des données",
      "Dashboard financier avec compte de résultat proratisé selon la période fiscale",
      "Export ZIP en streaming des documents stockés",
      "Collecte de documents via des liens à expiration",
    ],
    challenges: [
      "Reprendre un projet déjà avancé et comprendre le code existant avant de pouvoir le faire évoluer.",
      "Comprendre le métier comptable (fiches comptables, périodes fiscales, proratisation) pour que les chiffres affichés soient justes.",
    ],
    takeaway:
      "Avant de coder, il faut comprendre le métier du client : sur ce projet, c'était la partie la plus difficile.",
  },
  {
    slug: "site-headless-menuisiers",
    title: "Site vitrine headless pour un réseau de menuisiers",
    type: "Stage",
    typeDetail: "agence web Selltim",
    summary: "Refonte d'un site vitrine avec WordPress en headless et un front Next.js.",
    tags: ["WordPress headless", "WPGraphQL", "ACF", "Next.js App Router"],
    stack: ["WordPress headless", "WPGraphQL", "ACF", "Next.js App Router", "TypeScript", "Tailwind"],
    role: "Développement du front et des templates de pages branchés sur les champs ACF.",
    features: [
      "Mégamenu dynamique sur 3 colonnes, piloté depuis WordPress",
      "Carte des agences avec calcul de distance",
      "Templates de pages avec sections conditionnelles selon les champs ACF",
      "Fiches projets « Inspiration »",
      "Formulaire de contact par agence et par profil",
    ],
    challenges: [
      "Structurer les champs ACF pour que le contenu reste modifiable côté WordPress tout en alimentant des templates Next.js flexibles.",
    ],
    takeaway: "J'y ai énormément appris sur ACF et sur le fonctionnement de WordPress en headless.",
  },
  {
    slug: "vente-garage",
    title: "Vente-Garage",
    type: "Stage",
    typeDetail: "agence web Selltim",
    summary: "Site one-page intégré en autonomie à partir d'une maquette Figma.",
    tags: ["Next.js App Router", "TypeScript", "Tailwind v4", "Zod"],
    stack: ["Next.js App Router", "TypeScript", "Tailwind v4", "Zod"],
    context:
      "Maquette réalisée par l'agence et validée par le client, à intégrer fidèlement.",
    role: "Intégration complète du site, du design au formulaire de contact.",
    features: [
      "Formulaire de contact via Server Actions avec validation Zod",
      "Protection anti-spam (honeypot)",
      "Envoi des messages via l'API mail interne de l'agence",
    ],
    challenges: [
      "Respecter fidèlement la maquette validée par le client, au plus près de ce que l'équipe web avait livré.",
    ],
    links: [{ label: "Voir le site en ligne", href: "https://www.vente-garage.fr/" }],
  },
  {
    slug: "fenalim",
    title: "FenAlim",
    type: "Projet d'équipe",
    typeDetail: "fin de 2ᵉ année BUT Informatique",
    summary:
      "Application mobile pour aider les sapeurs-pompiers à recenser et localiser les points d'eau utilisables en intervention.",
    tags: ["React Native", "Expo", "TypeScript", "FastAPI"],
    stack: ["React Native", "Expo", "TypeScript", "FastAPI", "MySQL"],
    context:
      "Application avec plusieurs profils d'utilisateurs aux droits différents : civil, pompier, commandant et administrateur.",
    role: "Développement du front mobile (écrans) et intégration avec l'API.",
    features: [
      "Recensement et localisation des points d'eau",
      "Gestion de 4 rôles utilisateurs avec des droits différents",
    ],
    challenges: [
      "Faire communiquer correctement l'application avec le backend et gérer les données affichées selon le rôle de l'utilisateur. On s'en est sortis en testant les appels API un par un et en séparant clairement les fonctionnalités et les permissions.",
    ],
    links: [{ label: "Voir le code sur GitHub", href: "https://github.com/Emmalejalle/fen-alim_b" }],
  },
  {
    slug: "infra-reseau-wireguard",
    title: "Architecture réseau sécurisée + VPN WireGuard",
    type: "Projet universitaire",
    typeDetail: "BUT3, parcours cybersécurité",
    summary: "Mise en place d'une architecture réseau d'entreprise segmentée, entièrement conteneurisée avec Docker.",
    tags: ["Docker", "docker-compose", "Linux", "iptables"],
    stack: ["Docker", "docker-compose", "Linux", "iptables", "WireGuard"],
    features: [
      "4 sous-réseaux : WAN, routeur/pare-feu, DMZ, LAN",
      "Routeur et pare-feu (iptables)",
      "Serveurs et postes clients Linux et Windows conteneurisés",
      "Tunnel WireGuard vers un poste distant situé derrière un second routeur, avec accès SSH à travers le tunnel",
    ],
    challenges: [
      "Faire cohabiter Docker et une VM Kali sous VirtualBox, qui se disputaient l'accès à KVM. J'ai réglé le problème en passant de Docker Desktop au démon Docker natif.",
    ],
  },
];
