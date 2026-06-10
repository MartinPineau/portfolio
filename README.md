# Portfolio Pineau Martin

Site portfolio (React 19 + TypeScript + Vite + Tailwind v4) avec une zone d'administration protégée par Google OAuth pour gérer les projets, les messages de contact et les témoignages.

Il n'y a pas de backend : toutes les données sont persistées dans le `localStorage` du navigateur et validées via des schémas Zod.

## Prérequis

- [Node.js](https://nodejs.org/) 20+ et npm

## Lancer l'application

```bash
npm install
npm run dev
```

L'application est alors disponible sur **http://localhost:5173**.

Un fichier `.env` est déjà fourni : l'application fonctionne directement, sans configuration.

Pour utiliser votre propre compte Google sur l'espace admin, modifiez les deux variables du `.env` :

- `VITE_GOOGLE_CLIENT_ID` - identifiant client OAuth 2.0 ([Google Cloud Console](https://console.cloud.google.com/apis/credentials))
- `VITE_AUTHORIZED_EMAIL` - seule adresse e-mail autorisée à accéder à `/admin`

## Structure du projet

```
src/
├── components/   # Composants UI réutilisables
├── hooks/        # Custom hooks (useProjects, useContacts, useAuth, useTestimonials)
├── pages/        # Vues routées
├── services/     # Configuration Google Auth
├── types/        # Schémas Zod et types
├── context/      # États globaux (Context + useReducer)
└── layouts/      # Structures de pages (HomeLayout, BaseLayout, AdminLayout)
```

## Accès à l'administration

1. Se connecter avec le compte Google correspondant à `VITE_AUTHORIZED_EMAIL`.
2. Le lien **Admin** apparaît alors dans la navbar et donne accès au dashboard (`/admin`) :
   - **Dashboard** - indicateurs clés (projets, messages, non lus, témoignages)
   - **Projects** - CRUD complet des projets (upload d'image, tags, prévisualisation)
   - **Messages** - consultation des messages reçus via le formulaire de contact
   - **Testimonials** - affichage/masquage des témoignages
