# Portfolio — Emma Le Jallé

Site portfolio d'Emma Le Jallé, étudiante en BUT Informatique parcours Cybersécurité à l'IUT de
Vannes. Le site présente son parcours, ses projets et sa stack technique, dans le cadre d'une
recherche de stage (25 janvier — 14 mai 2027).

Site one-page avec des pages de détail par projet.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| Langage | TypeScript |
| Styles | Tailwind CSS v4 (configuration via `@theme` dans le CSS, pas de `tailwind.config`) |
| Polices | Geist et Geist Mono pour le texte, Instrument Serif pour les accents — chargées via `next/font/google` |
| Lint | ESLint 9 (flat config) avec `eslint-config-next` |

## Démarrage

Prérequis : Node.js 20 ou plus récent.

```bash
npm install
```

```bash
npm run dev
```

Le site est alors disponible sur http://localhost:3000.

### Scripts

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement avec rechargement à chaud |
| `npm run build` | Build de production |
| `npm run start` | Sert le build de production (nécessite `npm run build` au préalable) |
| `npm run lint` | Analyse ESLint du projet |

## Structure

```
src/
├── app/
│   ├── layout.tsx              Layout racine : polices, métadonnées, Header et Footer
│   ├── page.tsx                Page d'accueil — assemble les cinq sections
│   ├── globals.css             Tokens de couleur, thème Tailwind, animations
│   └── projets/[slug]/page.tsx Page de détail d'un projet, générée depuis les données
├── components/
│   ├── layout/                 Header, Footer
│   ├── sections/               Hero, Projects, Skills, About, Contact
│   └── ui/                     Badge, Button, ProjectCard, ProjectVisual, SectionHeading
└── lib/
    └── data.ts                 Tout le contenu du site
public/
└── cv.pdf                      CV téléchargeable depuis le Hero
```

## Modifier le contenu

Le contenu est entièrement centralisé dans `src/lib/data.ts` — il n'y a pas de texte en dur dans
les composants de section. Pour mettre le site à jour, c'est le seul fichier à toucher dans la
plupart des cas :

| Export | Contenu |
|---|---|
| `profile` | Nom, rôle, email, accroche, période de recherche de stage |
| `navLinks` | Liens du menu de navigation |
| `socials` | Liens Email, GitHub et LinkedIn du pied de page |
| `projects` | Les projets — chaque entrée génère sa carte et sa page `/projets/<slug>` |
| `skillCategories` | Les trois catégories de compétences et leur contenu |
| `timeline` | Le parcours affiché dans la section À propos |

Ajouter un projet revient à ajouter un objet au tableau `projects` : la carte sur la page
d'accueil et la page de détail sont créées automatiquement à partir du `slug`.

**À compléter :** les liens GitHub et LinkedIn dans `socials` sont encore des `#`.

## Design

Les couleurs sont définies comme variables CSS dans `src/app/globals.css`, puis exposées à
Tailwind via `@theme inline`. Elles s'utilisent donc comme des classes normales
(`bg-surface`, `text-accent-strong`, `border-border`…).

| Variable | Rôle |
|---|---|
| `--background` | Fond de page, beige rosé |
| `--surface` | Fond des sections alternées et des cartes, blanc |
| `--border` | Bordures et filets |
| `--foreground` / `--foreground-muted` | Texte principal / secondaire |
| `--accent` / `--accent-strong` / `--accent-soft` | Rose de la charte, du plus clair au plus soutenu |

Deux conventions à respecter pour rester cohérent avec l'existant :

- les sections alternent entre `bg-background` et `bg-surface` pour rythmer la page ;
- l'accent rose s'utilise en touche (points, liens, libellés) plutôt qu'en aplat.

## Déploiement

Le projet est un site Next.js standard, déployable tel quel sur Vercel : importer le dépôt,
aucune variable d'environnement n'est nécessaire.

## Note sur `AGENTS.md`

Le fichier `AGENTS.md` à la racine est généré automatiquement par `next dev` et destiné aux
assistants de code. Il est normal de le voir réapparaître après avoir lancé le serveur de
développement.
