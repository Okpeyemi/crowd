# 🚀 Crowd - Plateforme de Financement Participatif

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

> **Levez des fonds pour votre entreprise avec notre communauté de 135 000 investisseurs**

Crowd est une plateforme de financement participatif (crowdfunding) reconnue par l'AMF (Autorité des Marchés Financiers). Nous accompagnons les entreprises dans leur levée de fonds en crowdequity et mettons en relation entrepreneurs et investisseurs.

---

## 📋 Table des matières

- [Caractéristiques](#-caractéristiques)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Développement](#-développement)
- [SEO & Performance](#-seo--performance)
- [Structure du projet](#-structure-du-projet)
- [Responsivité](#-responsivité)
- [Déploiement](#-déploiement)
- [Contribution](#-contribution)
- [License](#-license)

---

## ✨ Caractéristiques

### 🎯 Fonctionnalités principales

- **Levée de fonds** : Formulaire multi-étapes pour soumettre votre projet
- **Communauté d'investisseurs** : Accès à 135 000 investisseurs actifs
- **Accompagnement complet** : 6 étapes de A à Z pour réussir votre levée
- **Témoignages** : Retours d'expérience d'entrepreneurs ayant levé avec Crowd
- **FAQ interactive** : Réponses aux questions les plus fréquentes
- **Responsive Design** : Optimisé pour mobile, tablette et desktop

### 🔒 Conformité & Sécurité

- ✅ Plateforme PSFP (Prestataire de Services de Financement Participatif)
- ✅ Immatriculée AMF sous le numéro FP-2023-9
- ✅ Partenaire Lemonway pour les paiements sécurisés
- ✅ Conformité RGPD

---

## 🛠 Technologies

### Stack technique

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Next.js** | 15.5.6 | Framework React avec App Router |
| **React** | 19 | Bibliothèque UI |
| **TypeScript** | 5.0+ | Typage statique |
| **Tailwind CSS** | 4.0 | Framework CSS utility-first |
| **Lucide React** | Latest | Icônes SVG optimisées |

### Polices

- **Lexend** : Titres et headings (400, 500, 600, 700)
- **DM Sans** : Corps de texte (400, 500, 700)

---

## 📦 Installation

### Prérequis

- Node.js 18.17 ou supérieur
- npm, yarn, pnpm ou bun

### Installation des dépendances

```bash
# Cloner le repository
git clone https://github.com/votre-org/crowd.git
cd crowd

# Installer les dépendances
npm install
# ou
yarn install
# ou
pnpm install
```

### Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# URL de base (production)
NEXT_PUBLIC_BASE_URL=https://crowd.fr

# Google Analytics (optionnel)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# API Keys (si nécessaire)
# NEXT_PUBLIC_API_KEY=your_api_key
```

---

## 💻 Développement

### Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Commandes disponibles

```bash
# Développement avec Turbopack
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint

# Type checking
npm run type-check
```

### Structure des composants

```
src/
├── app/                    # App Router Next.js
│   ├── layout.tsx         # Layout principal avec SEO
│   ├── page.tsx           # Page d'accueil
│   ├── globals.css        # Styles globaux
│   └── sitemap.ts         # Sitemap dynamique
├── components/            # Composants React
│   ├── Header.tsx         # En-tête avec navigation
│   ├── Hero.tsx           # Section hero
│   ├── WhySection.tsx     # Pourquoi Crowd
│   ├── EntrepriseForm.tsx # Formulaire multi-étapes
│   ├── StepsSection.tsx   # 6 étapes
│   ├── TestimonialsSection.tsx # Témoignages
│   ├── RecipeSection.tsx  # Notre recette
│   ├── FaqSection.tsx     # FAQ accordéon
│   ├── Footer.tsx         # Pied de page
│   ├── Button.tsx         # Bouton réutilisable
│   └── StructuredData.tsx # Schema.org JSON-LD
└── public/                # Assets statiques
    ├── robots.txt         # Configuration robots
    ├── manifest.json      # PWA manifest
    └── *.png              # Images et logos
```

---

## 🎯 SEO & Performance

### Optimisations SEO implémentées

#### ✅ Métadonnées complètes

- **Title** : Template dynamique avec fallback
- **Description** : 155 caractères optimisés
- **Keywords** : 13 mots-clés ciblés (levée de fonds, crowdfunding, etc.)
- **Open Graph** : Images 1200x630, locale fr_FR
- **Twitter Cards** : Summary large image
- **Canonical URLs** : URLs canoniques pour éviter le duplicate content

#### ✅ Données structurées (Schema.org)

- **Organization** : Informations entreprise
- **FinancialService** : Type de service
- **FAQPage** : Questions-réponses
- **BreadcrumbList** : Fil d'Ariane
- **Service** : Catalogue d'offres

#### ✅ Fichiers techniques

- **robots.txt** : Configuration crawlers (Allow all, blocage bad bots)
- **sitemap.xml** : Sitemap dynamique avec priorités
- **manifest.json** : PWA ready avec shortcuts

#### ✅ Performance

- **Next.js Image** : Optimisation automatique des images
- **Font optimization** : Google Fonts avec display=swap
- **Code splitting** : Chargement progressif
- **Turbopack** : Build ultra-rapide

### Scores Lighthouse visés

| Métrique | Score cible |
|----------|-------------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

---

## 📱 Responsivité

Le site est **100% responsive** avec une approche **mobile-first**.

### Breakpoints Tailwind

| Breakpoint | Taille | Appareils |
|------------|--------|-----------|
| **Mobile** | < 640px | Smartphones |
| **sm** | ≥ 640px | Petites tablettes |
| **md** | ≥ 768px | Tablettes |
| **lg** | ≥ 1024px | Petits desktops |
| **xl** | ≥ 1280px | Grands desktops |

### Composants optimisés

- ✅ Navigation mobile avec menu hamburger
- ✅ Grilles adaptatives (1→2→3→4 colonnes)
- ✅ Typographie fluide (text-sm → text-6xl)
- ✅ Images responsive avec Next.js Image
- ✅ Formulaires tactiles optimisés
- ✅ Scroll horizontal pour testimonials mobile

📄 **Documentation complète** : Voir [RESPONSIVE_IMPROVEMENTS.md](RESPONSIVE_IMPROVEMENTS.md)

---

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Build manuel

```bash
# Build
npm run build

# Démarrer
npm start
```

### Variables d'environnement production

Configurez ces variables dans votre plateforme de déploiement :

- `NEXT_PUBLIC_BASE_URL` : https://crowd.fr
- `NEXT_PUBLIC_GA_ID` : Votre ID Google Analytics

---

## 🤝 Contribution

### Guidelines

1. **Fork** le projet
2. Créer une **branche** (`git checkout -b feature/AmazingFeature`)
3. **Commit** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une **Pull Request**

### Standards de code

- ✅ TypeScript strict mode
- ✅ ESLint + Prettier
- ✅ Commits conventionnels
- ✅ Tests unitaires (à venir)

---

## 📄 License

Copyright © 2024 Crowd SAS. Tous droits réservés.

Ce projet est propriétaire et confidentiel. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.

---

## 📞 Contact

**Crowd SAS**  
📧 Email : contact@crowd.fr  
📱 Téléphone : 01 42 05 44 45  
🌐 Site web : [https://crowd.fr](https://crowd.fr)  
💼 LinkedIn : [linkedin.com/company/crowd](https://linkedin.com/company/crowd)

---

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS
- [Lucide](https://lucide.dev/) - Icônes
- [Vercel](https://vercel.com/) - Hébergement

---

**Fait avec ❤️ par l'équipe Crowd**
