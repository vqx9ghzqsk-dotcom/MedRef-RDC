# MedRef RDC

Bibliothèque médicale de référence adaptée à la République démocratique du Congo, créée par le
**Dr Ben Mingalu** (<bmingalu@gmail.com>).

> **Principe : un seul contenu médical, plusieurs portes d'entrée, tout est interconnecté.**
> Une pathologie est rédigée une seule fois, puis retrouvée par son département, par un symptôme, par une
> urgence, par un médicament, par un examen, par un score ou par la recherche globale.

⚠️ Les fiches de `backend/db/seed-data/` (27 pathologies, 89 molécules, 130 produits, 64 examens, 148 sources) sont
rédigées à partir des recommandations citées (OMS, programmes nationaux RDC, sociétés savantes). Elles doivent être
**relues et validées avant tout usage clinique**. La disponibilité « circuit national RDC » des produits et les prix
indicatifs sont à confirmer localement.

---

## Sommaire

1. [Architecture](#architecture)
2. [Démarrage rapide (Docker)](#démarrage-rapide-docker)
3. [Développement local](#développement-local)
4. [Fonctionnalités](#fonctionnalités-phase-1--web)
5. [API](#api)
6. [Modèle de données](#modèle-de-données)
7. [Mode hors ligne et synchronisation](#mode-hors-ligne-et-synchronisation)
8. [Tests et qualité](#tests-et-qualité)
9. [Ajouter du contenu](#ajouter-du-contenu)
10. [Vers l'application mobile](#vers-lapplication-mobile)

---

## Architecture

```
medref-rdc/
├── backend/                 API Express + MySQL 8
│   ├── db/
│   │   ├── schema.sql       schéma normalisé (24 tables, liaisons N:N, FULLTEXT)
│   │   ├── seed-data/       contenu d'amorçage par thème (référentiels, médicaments, sources,
│   │   │                    pathologies/ par département)
│   │   └── seed.js          insertion paramétrée, vérifie toutes les références croisées
│   ├── scripts/migrate.js   création du schéma (+ --seed)
│   ├── src/
│   │   ├── app.js           helmet, cors, rate-limit, routes
│   │   ├── routes/          auth, catalogue, referentiels (urgences, symptômes, scores, examens),
│   │   │                    medicaments (produits et molécules), sources, recherche, prescriptions
│   │   ├── services/        prescriptionSync (logique de synchro idempotente)
│   │   └── middleware/      JWT, gestion d'erreurs
│   └── tests/               Jest + Supertest (unitaires + intégration MySQL)
├── frontend/                React 18 + Vite, PWA
│   ├── public/              manifest.json, service-worker.js, icônes
│   ├── src/
│   │   ├── core/            ⚙️ logique sans DOM ni React (réutilisable sur mobile)
│   │   │   ├── api/         client HTTP + points d'accès typés
│   │   │   ├── auth/        persistance de session (stockage injectable)
│   │   │   ├── offline/     dépôt IndexedDB + synchronisation
│   │   │   ├── calculators/ scores et calculatrices (fonctions pures)
│   │   │   └── richText.js  analyse du texte des fiches → arbre neutre (pas de HTML)
│   │   └── ui/              composants React web (pages, contexte, hooks)
│   └── tests/               Vitest + Testing Library
├── docker-compose.yml       MySQL + API + web (nginx)
└── .github/workflows/ci.yml lint, tests, intégration MySQL, build
```

**Stack** : Node.js 20, Express 4, MySQL 8, JWT (7 jours), bcryptjs, helmet, cors, express-rate-limit ·
React 18, Vite 6, react-router-dom 6, idb · Jest, Supertest, Vitest · ESLint 9, Prettier.

---

## Démarrage rapide (Docker)

Prérequis : [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
docker compose up -d --build
docker compose run --rm api npm run db:reset   # 1re fois : crée le schéma et insère les données
```

Ouvrez <http://localhost:8080>. L'API répond sur <http://localhost:4000/api/health>.

En production, définissez au minimum `JWT_SECRET`, `DB_PASSWORD` et `MYSQL_ROOT_PASSWORD` (fichier `.env` à la
racine, lu automatiquement par Docker Compose).

> `db:reset` **supprime et recrée** toutes les tables. Ne le lancez pas sur une base contenant des données réelles.

---

## Développement local

Prérequis : Node.js 20+ et MySQL 8 (ou seulement le conteneur `db` : `docker compose up -d db`).

```bash
# Backend
cd backend
cp .env.example .env          # ajustez DB_* et JWT_SECRET
npm install
npm run db:reset              # schéma + données
npm run dev                   # http://localhost:4000 (nodemon)

# Frontend (autre terminal)
cd frontend
npm install
npm run dev                   # http://localhost:5173 — /api est relayé vers :4000
```

Sous Windows (PowerShell), remplacez `cp` par `Copy-Item`.

| Script               | Backend                                | Frontend                    |
| -------------------- | -------------------------------------- | --------------------------- |
| `npm run dev`        | API avec rechargement (nodemon)        | serveur Vite                |
| `npm test`           | Jest + Supertest                       | Vitest                      |
| `npm run lint`       | ESLint                                 | ESLint (+ React, hooks)     |
| `npm run format`     | Prettier                               | Prettier                    |
| `npm run build`      | —                                      | build de production (dist/) |
| `npm run db:migrate` | schéma seul                            | —                           |
| `npm run db:reset`   | schéma + données d'amorçage            | —                           |

---

## Fonctionnalités (phase 1 — web)

| #   | Fonctionnalité            | Où                                                                       |
| --- | ------------------------- | ------------------------------------------------------------------------ |
| 1   | Page d'accueil            | identité, recherche, 5 accès rapides, grille des départements, contact   |
| 2   | Authentification          | inscription, connexion, `/me`, session persistée (JWT 7 j)               |
| 3   | Navigation catalogue      | Département → Spécialité → Pathologie, fil d'Ariane                      |
| 4   | Fiche pathologie          | 5 onglets (clavier ←/→), urgences en tête, symptômes, médicaments, scores, sources (détail ci-dessous) |
| 5   | Urgences                  | A→Z, filtre par catégorie, signes de gravité, ABCDE, transfert           |
| 6   | Symptômes                 | A→Z, pathologies triées par fréquence                                    |
| 7   | Calculatrices / scores    | IMC, Glasgow, Blantyre, Apgar, Silverman, qSOFA, index de choc, déshydratation OMS, contrôle GINA, Child-Pugh, APRI, CKD-EPI 2021, Cockcroft-Gault, Holliday-Segar, débit, dose pondérale, Alvarado ; classifications descriptives (NYHA, NIHSS, KDIGO, stades OMS du VIH) |
| 8   | Médicaments               | filtres molécule / classe / opérateur ; fiche produit (identification, usage propre au produit, fiche pharmacologique de chaque molécule) ; fiche molécule avec ses produits seuls ou en association |
| 8b  | Examens                   | valeurs normales de référence et interprétation dans chaque pathologie   |
| 9   | Sources                   | 4 niveaux de preuve, domaine (spécialité), filtre global / département / pathologie |
| 10  | Recherche globale         | un endpoint, résultats regroupés par type                                |
| 11  | Prescriptions hors ligne  | IndexedDB, badge « En attente », synchro automatique                     |
| 12  | PWA                       | manifest, service worker (assets uniquement, jamais `/api`)              |

### Structure d'une fiche pathologie

| Onglet        | Contenu |
| ------------- | ------- |
| Définition    | définition, physiopathologie |
| Diagnostic    | diagnostic clinique ; bilan biologique, imagerie et explorations classés par catégorie (1re intention, 2e intention, présomption, confirmation, gravité, étiologique, pré-thérapeutique, suivi), chacun avec son interprétation dans la pathologie et ses valeurs normales ; scores ; diagnostics différentiels ouvrables |
| Étiologies    | agents, terrain, facteurs favorisants |
| Thérapeutique | sommaire des principes de prise en charge puis détail de chacun ; molécules (ligne, contexte) avec leurs produits par opérateur ; traitement de chaque complication |
| Évolution     | évolution et pronostic ; surveillance clinique et paraclinique de chaque complication |

Rôles : `user` (défaut, seul actif en phase 1), `medecin`, `admin` (prévus dans le schéma et le middleware
`requireRole`).

---

## API

Toutes les réponses sont en JSON. Les listes sont dans `data`. Les erreurs ont la forme
`{ "error": "message", "details"?: {...} }`.

| Méthode | Route                              | Description                                                         |
| ------- | ---------------------------------- | ------------------------------------------------------------------- |
| GET     | `/api/health`                      | état du service                                                     |
| POST    | `/api/auth/register`               | `{ email, password, nom }` → `{ token, user }`                       |
| POST    | `/api/auth/login`                  | `{ email, password }` → `{ token, user }`                            |
| GET     | `/api/auth/me`                     | 🔒 utilisateur courant                                              |
| GET     | `/api/departements`                | départements + compteurs                                            |
| GET     | `/api/departements/:slug`          | département + spécialités                                           |
| GET     | `/api/specialites/:slug`           | spécialité + pathologies                                            |
| GET     | `/api/pathologies/:slug`           | fiche complète (5 onglets + blocs liés)                             |
| GET     | `/api/urgences?categorie=`         | urgences A→Z (`medicale`, `chirurgicale`, `gyneco-obstetricale`, `pediatrique`) |
| GET     | `/api/urgences/:slug`              | urgence + pathologies associées                                     |
| GET     | `/api/symptomes`                   | symptômes A→Z                                                       |
| GET     | `/api/symptomes/:slug`             | symptôme + pathologies par fréquence                                |
| GET     | `/api/scores`, `/api/scores/:slug` | scores/calculatrices + pathologies liées                            |
| GET     | `/api/medicaments?operateur=&classe=&molecule=&q=` | liste filtrée                                       |
| GET     | `/api/medicaments/filtres`         | opérateurs, classes, molécules disponibles                          |
| GET     | `/api/medicaments/:id`             | fiche produit + composition (fiche de chaque molécule) + pathologies + même composition chez d'autres opérateurs |
| GET     | `/api/molecules`, `/api/molecules/:slug` | molécules ; fiche pharmacologique + produits (seule / association) + pathologies |
| GET     | `/api/examens`, `/api/examens/:slug` | examens ; valeurs normales + interprétation par pathologie |
| GET     | `/api/sources?scope=&departement=&pathologie=&niveau=` | `scope` = `global` / `departement` / `pathologie` |
| GET     | `/api/recherche?q=`                | `{ total, data: { pathologies, medicaments, molecules, examens, urgences, symptomes, scores } }` |
| GET     | `/api/prescriptions`               | 🔒 prescriptions de l'utilisateur                                   |
| POST    | `/api/prescriptions/sync`          | 🔒 synchronisation idempotente (voir plus bas)                      |
| DELETE  | `/api/prescriptions/:id`           | 🔒 suppression logique                                              |

🔒 = en-tête `Authorization: Bearer <jwt>` requis.

**Sécurité** : helmet (en-têtes HTTP), CORS limité à `CORS_ORIGIN`, limitation de débit (1000 req/15 min sur
`/api`, 20 req/15 min sur `/api/auth`), mots de passe hachés (bcrypt), requêtes SQL toutes paramétrées, rôle
forcé à `user` à l'inscription, messages d'erreur internes masqués.

---

## Modèle de données

```
departements 1─N specialites 1─N pathologies
pathologies N─N urgences               (pathologie_urgences)
pathologies N─N symptomes              (pathologie_symptomes + frequence)
pathologies N─N molecules              (molecule_pathologies + ligne + contexte)
medicaments N─N molecules              (medicament_molecules + dosage : associations à dose fixe)
pathologies N─N examens                (pathologie_examens + catégorie + interprétation)
pathologies 1─N pathologie_differentiels (→ fiche liée si elle existe)
pathologies 1─N pathologie_principes   (principes de prise en charge ordonnés)
pathologies 1─N complications          (traitement + surveillance clinique / paraclinique, → fiche liée)
pathologies N─N scores                 (pathologie_scores)
pathologies N─N sources                (pathologie_sources)
molecules   N─1 classes_pharmacologiques ; medicaments N─1 operateurs
sources     N─1 departements (NULL = source transversale)
users       1─N prescriptions (id UUID CHAR(36), contenu JSON)
```

- `FULLTEXT` sur `pathologies(nom, definition)`, `medicaments(nom_commercial, dci, indication)` et
  `molecules(dci, indications)`.
- Les champs cliniques d'un produit (posologie, CI…) sont facultatifs : vides, ils sont repris de la fiche de la
  molécule (produit mono-molécule) ; renseignés, ils décrivent ce qui est propre au produit (association, forme).
- `ON DELETE CASCADE` sur toutes les clés étrangères des tables de liaison.
- `UNIQUE(specialite_id, nom)` sur `pathologies`.
- Collation `utf8mb4_unicode_ci` : recherche insensible aux accents (« artesunate » trouve « Artésunate »).

Le schéma complet et commenté est dans [`backend/db/schema.sql`](backend/db/schema.sql).

---

## Mode hors ligne et synchronisation

1. Une prescription est créée **dans IndexedDB** avec un UUID généré sur l'appareil et le statut `pending`
   (badge jaune « En attente »). Aucune connexion n'est nécessaire.
2. Dès que l'utilisateur est connecté et que le réseau est disponible (au chargement, à l'événement `online`
   ou via « Synchroniser maintenant »), le client envoie les éléments en attente à `POST /api/prescriptions/sync`.
3. Le serveur fait un **UPSERT idempotent** sur l'UUID (`INSERT … ON DUPLICATE KEY UPDATE` conditionnel, dans une
   transaction avec `SELECT … FOR UPDATE`) :
   - absent → `created` ; plus récent → `updated` ; identique ou plus ancien → `unchanged` (rejeu sans effet) ;
   - appartenant à un autre compte → `conflict` (jamais écrasé) ; données invalides → `invalid`.
4. Les suppressions sont propagées par **tombstone** (`deleted_at`), pour qu'un appareil hors ligne ne
   « ressuscite » pas une prescription supprimée ailleurs.
5. Le client marque les éléments acceptés comme `synced`, puis aligne son cache sur l'état renvoyé par le
   serveur (prescriptions créées sur un autre appareil incluses). Une modification faite **pendant** l'envoi
   n'est jamais écrasée.

Le **service worker** met en cache la coque de l'application (HTML, JS, CSS, icônes) pour qu'elle s'ouvre sans
réseau. Il ne met **jamais** en cache les réponses `/api` : le contenu médical vient toujours du serveur à jour.
Il n'est actif qu'en production (`npm run build`).

---

## Tests et qualité

```bash
cd backend  && npm test                    # unitaires (MySQL simulé)
cd backend  && DB_INTEGRATION=1 npm run test:integration   # contre un vrai MySQL (base recréée !)
cd frontend && npm test
```

- **Backend** : auth (validation, hachage, rôle forcé, JWT falsifié), catalogue, filtres, recherche FULLTEXT,
  synchronisation (idempotence, dernier-écrit-gagne, tombstones, conflit de propriétaire, lots invalides).
- **Intégration** : parcours complet sur MySQL 8 réel (schéma + données + API), exécuté en CI.
- **Frontend** : calculatrices (valeurs de référence), analyseur de texte (aucun HTML injecté), client API,
  dépôt IndexedDB et synchronisation (fake-indexeddb), rendu de l'accueil et de la fiche (onglets au clavier).

La CI GitHub Actions exécute lint, tests unitaires, intégration MySQL et build à chaque push.

---

## Ajouter du contenu

En phase 1, le contenu est saisi dans `backend/db/seed-data/` (format markdown léger : `## Titre`, `- puce`,
`**gras**`, `*italique*`), puis chargé avec `npm run db:reset`. Le format d'une fiche est documenté en tête de
`seed-data/pathologies/infectiologie.js` :

- `examens` : `[catégorie, slug de l'examen, interprétation dans la pathologie]` ;
- `differentiels` : `[slug d'une fiche OU libellé libre, éléments distinctifs]` ;
- `principes` : `[titre, objectif, détails]` ;
- `molecules` : `[slug de la molécule, ligne, contexte]` ;
- `complications` : `{ nom, fiche?, description, traitement, clinique, paraclinique }`.

Les molécules (fiche pharmacologique) et les produits (opérateur, composition) sont dans `seed-data/medicaments.js`,
les examens et leurs valeurs normales dans `seed-data/referentiels.js`. Le script s'arrête avec un message clair si une
référence (spécialité, molécule, examen, source, fiche…) n'existe pas.

Une interface d'administration (rôle `admin`) est la suite logique pour éditer le contenu sans toucher au code.

---

## Vers l'application mobile

Tout ce qui n'est pas de l'affichage vit dans `frontend/src/core/` sans dépendance au DOM ni à React :
client API (`fetch` injecté), session (stockage injectable), calculatrices, analyse des fiches, dépôt et
synchronisation hors ligne. Pour une application **Capacitor**, le frontend actuel peut être empaqueté tel quel.
Pour **React Native**, on réutilise `core/` et on réécrit seulement `ui/` avec des composants natifs (et un
adaptateur de stockage à la place d'IndexedDB si besoin).

---

© Dr Ben Mingalu — MedRef RDC. Outil de référence pour professionnels de santé ; il ne remplace pas le jugement
clinique.
