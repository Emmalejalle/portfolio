# Portfolio — Emma Le Jallé

Site portfolio d'Emma Le Jallé, étudiante en BUT Informatique parcours Cybersécurité à l'IUT de
Vannes. Le site présente son parcours, ses projets et sa stack technique.

Site one-page avec des pages de détail par projet.

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components) |
| Langage | TypeScript |
| Styles | Tailwind CSS v4 (configuration via `@theme` dans le CSS, pas de `tailwind.config`) |
| Polices | Geist pour le texte, Geist Mono pour les données et étiquettes — chargées via `next/font/google` |
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
| `profile` | Nom, rôle, email, accroche, formation, numéro du badge |
| `navLinks` | Liens du menu de navigation |
| `socials` | Liens Email, GitHub et LinkedIn du pied de page |
| `projects` | Les projets — chaque entrée génère sa carte et sa page `/projets/<slug>` |
| `skillCategories` | Les trois catégories de compétences et leur contenu |
| `timeline` | Le parcours affiché dans la section À propos |

Ajouter un projet revient à ajouter un objet au tableau `projects` : la carte sur la page
d'accueil et la page de détail sont créées automatiquement à partir du `slug`.

**À compléter :** les liens GitHub et LinkedIn dans `socials` sont encore des `#`.

## Design

La charte est définie dans `src/app/globals.css` (seule source de vérité) et visible en vrai sur
**`/charte`** (page non indexée, absente de la navigation).

Deux thèmes : **sombre par défaut** (`[data-theme="dark"]`) et clair (`:root`). Le bouton du header
bascule et mémorise le choix dans `localStorage` ; un script inline dans `layout.tsx` l'applique avant
l'affichage pour éviter un flash. Variante Tailwind : `dark:`.

### Couleurs

Variables CSS exposées à Tailwind via `@theme inline` : `bg-surface`, `text-accent-ink`, `border-border`…

| Variable | Rôle |
|---|---|
| `--background` | Fond de page, beige rosé |
| `--surface` | Fond des sections alternées et des cartes, blanc |
| `--border` | Bordures et filets |
| `--foreground` / `--foreground-muted` | Texte principal / secondaire |
| `--accent-soft` | Fond rose pâle : badges, visuels, blocs |
| `--accent` | Halos et ombres colorées |
| `--accent-strong` | Rose décoratif : points, anneaux (**jamais pour du texte**, contraste 3:1) |
| `--accent-ink` | Rose lisible : texte rose, liens, bouton principal (contraste ≥ 4,5:1) |
| `--accent-foreground` | Texte posé sur un fond rose plein |

### Typographie

Utilitaires `type-*` à utiliser plutôt que de recombiner taille, graisse et couleur :

| Classe | Usage |
|---|---|
| `type-display` | Titre du hero |
| `type-title` | Titre de section ou de page |
| `type-subtitle` | Titre de carte, d'étape, de sous-partie |
| `type-eyebrow` | Sur-titre en capitales roses, en Geist Mono |
| `type-lead` / `type-body` / `type-small` | Chapeau / paragraphe / texte de carte |
| `link-underline` | Lien souligné rose |

Geist pour le texte, Geist Mono (`font-mono`) pour ce qui ressemble à une donnée : dates,
identifiants, étiquettes. Pas d'italique décoratif.

### Signature visuelle

`Fingerprint` génère un motif « 10 PRINT » à partir d'un texte haché (`src/lib/fingerprint.ts`) :
même texte, même motif. Il sert au logo du header, au badge d'accès du hero (`AccessBadge`, à la
place d'une photo) et aux visuels de projets sans capture.

### Structure

- Cadre de page : deux filets verticaux aux bords du conteneur (`layout.tsx`).
- `Section` (`src/components/layout/Section.tsx`) : filet en haut et coins de viseur roses aux angles.
- Sections numérotées via `SectionHeading index="01"`.
- Logo : `src/components/ui/Logo.tsx` (empreinte en attendant le vrai logo).

### Formes

- Arrondis : `rounded-full` (boutons, badges), `rounded-media` (images, encarts), `rounded-card` (cartes), `rounded-panel` (grands blocs).
- Ombres : `shadow-card`, `shadow-card-hover`, `shadow-float`, `shadow-raised`.

### Conventions

- les sections alternent entre `bg-background` et `bg-surface` pour rythmer la page ;
- l'accent rose s'utilise en touche (points, liens, libellés) plutôt qu'en aplat ;
- pas de couleur, d'arrondi ou d'ombre en dur (`text-white`, `rounded-[…]`, `shadow-lg`) : passer par les tokens.

## Déploiement

Le projet est un site Next.js standard, déployable tel quel sur Vercel : importer le dépôt,
aucune variable d'environnement n'est nécessaire.

## Note sur `AGENTS.md`

Le fichier `AGENTS.md` à la racine est généré automatiquement par `next dev` et destiné aux
assistants de code. Il est normal de le voir réapparaître après avoir lancé le serveur de
développement.
