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
2. [Lancement en un clic (Windows)](#lancement-en-un-clic-windows) · [Démarrage rapide (Docker)](#démarrage-rapide-docker)
3. [Développement local](#développement-local)
4. [Fonctionnalités](#fonctionnalités-phase-1--web)
5. [API](#api)
6. [Modèle de données](#modèle-de-données)
7. [Mode hors ligne et synchronisation](#mode-hors-ligne-et-synchronisation)
8. [Robustesse : contenu, sécurité, erreurs](#robustesse--contenu-sécurité-erreurs)
9. [Mise en ligne](#mise-en-ligne)
10. [Tests et qualité](#tests-et-qualité)
11. [Ajouter du contenu](#ajouter-du-contenu)
12. [Vers l'application mobile](#vers-lapplication-mobile)

---

## Architecture

```
medref-rdc/
├── backend/                 API Express + MySQL 8
│   ├── db/
│   │   ├── schema.sql       schéma normalisé (24 tables, liaisons N:N, FULLTEXT)
│   │   ├── seed-data/       contenu d'amorçage par thème (référentiels, médicaments, sources,
│   │   │                    pathologies/ par département)
│   │   ├── seed.js          insertion paramétrée, vérifie toutes les références croisées
│   │   ├── migrations/      évolutions du schéma (001_….sql), appliquées une seule fois
│   │   ├── migrations.js    suivi des migrations (table schema_migrations)
│   │   └── sauvegarde.js    sauvegarde / restauration en Node (fichiers .sql.gz)
│   ├── scripts/             migrate.js (migrations, reset protégé), backup.js, role.js
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

## Lancement en un clic (Windows)

Démarrez WampServer (icône verte), puis double-cliquez sur **`demarrer.bat`** à la racine du projet. Il vérifie que
MySQL répond, installe les dépendances si besoin, applique les migrations (sans perte de données), ouvre l'API et
l'interface dans deux fenêtres puis le site dans le navigateur. Laissez ces deux fenêtres ouvertes.

---

## Démarrage rapide (Docker)

Prérequis : [Docker Desktop](https://www.docker.com/products/docker-desktop/).

```bash
docker compose up -d --build
docker compose run --rm api npm run db:reset   # 1re fois : crée le schéma et insère les données
```

Ouvrez <http://localhost:8080>. L'API répond sur <http://localhost:4000/api/health>.

Créez d'abord un fichier `.env` à la racine avec `JWT_SECRET` (32 caractères aléatoires ou plus), `DB_PASSWORD` et
`MYSQL_ROOT_PASSWORD` : Docker Compose refuse de démarrer sans eux, et l'API refuse en production les valeurs d'exemple.
Les sauvegardes et les journaux sont conservés dans le volume `api-data`.

> `db:reset` **supprime et recrée** toutes les tables. Sur une base réelle, il exige `-- --confirmer=<nom de la base>`
> et fait d'abord une sauvegarde. Pour une base existante, utilisez `npm run db:migrate`.

---

## Développement local

Prérequis : Node.js 20+ et MySQL 8 (ou seulement le conteneur `db` : `docker compose up -d db`).

```bash
# Backend
cd backend
cp .env.example .env          # ajustez DB_* et JWT_SECRET
npm install
npm run db:reset              # 1re installation : schéma + données
npm run dev                   # http://localhost:4000 (nodemon)

# Frontend (autre terminal)
cd frontend
npm install
npm run dev                   # http://localhost:5173 — /api est relayé vers :4000
```

Sous Windows (PowerShell), remplacez `cp` par `Copy-Item`.

| Script                | Backend                                                  | Frontend                    |
| --------------------- | -------------------------------------------------------- | --------------------------- |
| `npm run dev`         | API avec rechargement (nodemon)                          | serveur Vite                |
| `npm test`            | Jest + Supertest                                         | Vitest                      |
| `npm run lint`        | ESLint                                                   | ESLint (+ React, hooks)     |
| `npm run format`      | Prettier                                                 | Prettier                    |
| `npm run build`       | —                                                        | build de production (dist/) |
| `npm run db:migrate`  | applique les migrations en attente                       | —                           |
| `npm run db:status`   | migrations appliquées / en attente                       | —                           |
| `npm run db:backup`   | sauvegarde de la base (`-- --liste`)                     | —                           |
| `npm run db:restore`  | restaure une sauvegarde                                  | —                           |
| `npm run db:enrichir` | ajoute le nouveau contenu de seed-data sans rien écraser | —                           |
| `npm run db:reset`    | DESTRUCTIF : schéma + données initiales                  | —                           |

---

## Protection des données

Depuis l'interface **/admin**, la base (`medref_rdc`) contient le contenu corrigé et validé : c'est elle la référence,
plus les fichiers `seed-data/`. Trois mécanismes la protègent.

**Sauvegardes.** L'API sauvegarde la base à son démarrage puis toutes les 24 h tant qu'elle tourne (fichiers
`backups/medref_rdc-AAAA-MM-JJ_HHMMSS.sql.gz`, 30 derniers conservés). Réglages dans `.env` :

| Variable                | Défaut             | Rôle                                                        |
| ----------------------- | ------------------ | ----------------------------------------------------------- |
| `BACKUP_DIR`            | `backend/backups/` | dossier ; choisissez-en un hors de l'ordinateur si possible |
| `BACKUP_KEEP`           | `30`               | nombre de sauvegardes périodiques conservées                |
| `BACKUP_INTERVAL_HOURS` | `24`               | intervalle entre deux sauvegardes automatiques              |
| `BACKUP_AUTO`           | `1` (`0` en test)  | `0` désactive la sauvegarde automatique                     |

```bash
npm run db:backup                                     # sauvegarde immédiate
npm run db:backup -- --liste                          # sauvegardes disponibles
npm run db:restore -- medref_rdc-2026-10-05_210335.sql.gz --confirmer=medref_rdc
```

Une restauration, une migration ou un reset sauvegarde d'abord l'état actuel (fichiers `…-avant-restauration`,
`…-avant-migration`, `…-avant-reset`, jamais supprimés par la rotation). Le dossier `backups/` n'est pas versionné :
copiez régulièrement les sauvegardes sur un autre support (clé USB, Drive…).

**Reset verrouillé.** `npm run db:reset` refuse de toucher une base réelle sans `-- --confirmer=medref_rdc`. Les bases
dont le nom contient `test` (`medref_rdc_test`) n'ont pas besoin de confirmation ; les tests d'intégration refusent
toute autre base.

**Migrations.** `db/schema.sql` est le schéma de départ et ne change plus. Une évolution (colonne, table, index) s'écrit
dans `db/migrations/001_description.sql` et s'applique avec `npm run db:migrate`, sans perte de données. Chaque
migration est appliquée une seule fois et ne doit plus être modifiée ensuite (voir `db/migrations/LISEZMOI.md`).

---

## Fonctionnalités (phase 1 — web)

| #   | Fonctionnalité           | Où                                                                                                                                                                                                                                                                         |
| --- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Page d'accueil           | identité, recherche, 5 accès rapides, grille des départements, contact                                                                                                                                                                                                     |
| 2   | Authentification         | inscription, connexion, `/me`, session persistée (JWT 7 j)                                                                                                                                                                                                                 |
| 3   | Navigation catalogue     | Département → Spécialité → Pathologie, fil d'Ariane                                                                                                                                                                                                                        |
| 4   | Fiche pathologie         | 5 onglets (clavier ←/→), urgences en tête, symptômes, médicaments, scores, sources (détail ci-dessous)                                                                                                                                                                     |
| 5   | Urgences                 | A→Z, filtre par catégorie, signes de gravité, ABCDE, transfert                                                                                                                                                                                                             |
| 6   | Symptômes                | A→Z, pathologies triées par fréquence                                                                                                                                                                                                                                      |
| 7   | Calculatrices / scores   | IMC, Glasgow, Blantyre, Apgar, Silverman, qSOFA, index de choc, déshydratation OMS, contrôle GINA, Child-Pugh, APRI, CKD-EPI 2021, Cockcroft-Gault, Holliday-Segar, débit, dose pondérale, Alvarado ; classifications descriptives (NYHA, NIHSS, KDIGO, stades OMS du VIH) |
| 8   | Médicaments              | filtres molécule / classe / opérateur ; fiche produit (identification, usage propre au produit, fiche pharmacologique de chaque molécule) ; fiche molécule avec ses produits seuls ou en association                                                                       |
| 8b  | Examens                  | valeurs normales de référence et interprétation dans chaque pathologie                                                                                                                                                                                                     |
| 9   | Sources                  | 4 niveaux de preuve, domaine (spécialité), filtre global / département / pathologie                                                                                                                                                                                        |
| 10  | Recherche globale        | un endpoint, résultats regroupés par type                                                                                                                                                                                                                                  |
| 11  | Prescriptions hors ligne | IndexedDB, badge « En attente », synchro automatique                                                                                                                                                                                                                       |
| 12  | PWA                      | manifest, service worker (assets uniquement, jamais `/api`)                                                                                                                                                                                                                |

### Structure d'une fiche pathologie

| Onglet           | Contenu                                                                                                                                                                                                                                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Définition       | définition, physiopathologie                                                                                                                                                                                                                                                                                              |
| Diagnostic       | diagnostic clinique ; bilan biologique, imagerie et explorations classés par catégorie (1re intention, 2e intention, présomption, confirmation, gravité, étiologique, pré-thérapeutique, suivi), chacun avec son interprétation dans la pathologie et ses valeurs normales ; scores ; diagnostics différentiels ouvrables |
| Étiologies       | agents, terrain, facteurs favorisants                                                                                                                                                                                                                                                                                     |
| Thérapeutique    | sommaire des principes de prise en charge (avec le grade de la recommandation : source, force, niveau de preuve) puis détail de chacun ; molécules (ligne, contexte) avec leurs produits par opérateur ; traitement de chaque complication                                                                                |
| Niveaux de soins | pour le centre de santé, l'hôpital général de référence et l'hôpital provincial/universitaire : ce qu'on peut faire sur place et quand transférer                                                                                                                                                                         |
| Évolution        | évolution et pronostic ; surveillance clinique et paraclinique de chaque complication                                                                                                                                                                                                                                     |

Chaque fiche affiche son statut de relecture : « en attente de validation médicale » ou « validée par … le … ».

Les **posologies** sont structurées par population (adulte, enfant, nouveau-né, grossesse, avec le niveau de sécurité
pendant la grossesse). Pour les doses exprimées par kilo, la fiche molécule et la fiche produit proposent un calcul
automatique selon le poids, plafonné à la dose maximale par prise.

### Administration du contenu

Les comptes `admin` et `medecin` accèdent à **/admin** (lien « Administration » dans le menu) pour :

- corriger chaque fiche (textes, examens, différentiels, principes et grades, complications, niveaux de soins) ;
- la **valider** sous leur nom (date et validateur affichés sur la fiche publique). Toute modification ultérieure
  repasse la fiche « à valider » ;
- compléter les posologies et la fiche pharmacologique des molécules, la disponibilité en RDC et le prix des produits ;
- consulter l'historique de toutes les modifications.

L'inscription crée toujours un compte `user`. Pour donner les droits, créer d'abord le compte depuis l'application,
puis :

```bash
cd backend
npm run user:role -- votre.email@exemple.cd admin      # ou medecin ; « user » pour retirer les droits
```

Le rôle est relu en base à chaque requête d'administration : un retrait de droits prend effet immédiatement
(reconnectez-vous pour voir apparaître ou disparaître le lien du menu).

---

## API

Toutes les réponses sont en JSON. Les listes sont dans `data`. Les erreurs ont la forme
`{ "error": "message", "details"?: {...} }`.

| Méthode | Route                                                  | Description                                                                                                      |
| ------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| GET     | `/api/health`                                          | état du service                                                                                                  |
| POST    | `/api/auth/register`                                   | `{ email, password, nom }` → `{ token, user }`                                                                   |
| POST    | `/api/auth/login`                                      | `{ email, password }` → `{ token, user }`                                                                        |
| GET     | `/api/auth/me`                                         | 🔒 utilisateur courant                                                                                           |
| POST    | `/api/auth/password`                                   | 🔒 `{ actuel, nouveau }` → nouveau jeton ; les autres sessions sont révoquées                                    |
| GET     | `/api/hors-ligne`                                      | adresses publiques à télécharger pour la consultation hors ligne                                                 |
| POST    | `/api/journal/erreur`                                  | erreur survenue dans l'interface → journal du serveur, renvoie une référence                                     |
| GET     | `/api/departements`                                    | départements + compteurs                                                                                         |
| GET     | `/api/departements/:slug`                              | département + spécialités                                                                                        |
| GET     | `/api/specialites/:slug`                               | spécialité + pathologies                                                                                         |
| GET     | `/api/pathologies/:slug`                               | fiche complète (5 onglets + blocs liés)                                                                          |
| GET     | `/api/urgences?categorie=`                             | urgences A→Z (`medicale`, `chirurgicale`, `gyneco-obstetricale`, `pediatrique`)                                  |
| GET     | `/api/urgences/:slug`                                  | urgence + pathologies associées                                                                                  |
| GET     | `/api/symptomes`                                       | symptômes A→Z                                                                                                    |
| GET     | `/api/symptomes/:slug`                                 | symptôme + pathologies par fréquence                                                                             |
| GET     | `/api/scores`, `/api/scores/:slug`                     | scores/calculatrices + pathologies liées                                                                         |
| GET     | `/api/medicaments?operateur=&classe=&molecule=&q=`     | liste filtrée                                                                                                    |
| GET     | `/api/medicaments/filtres`                             | opérateurs, classes, molécules disponibles                                                                       |
| GET     | `/api/medicaments/:id`                                 | fiche produit + composition (fiche de chaque molécule) + pathologies + même composition chez d'autres opérateurs |
| GET     | `/api/molecules`, `/api/molecules/:slug`               | molécules ; fiche pharmacologique + produits (seule / association) + pathologies                                 |
| GET     | `/api/examens`, `/api/examens/:slug`                   | examens ; valeurs normales + interprétation par pathologie                                                       |
| GET     | `/api/sources?scope=&departement=&pathologie=&niveau=` | `scope` = `global` / `departement` / `pathologie`                                                                |
| GET     | `/api/recherche?q=`                                    | `{ total, data: { pathologies, medicaments, molecules, examens, urgences, symptomes, scores } }`                 |
| GET     | `/api/prescriptions`                                   | 🔒 prescriptions de l'utilisateur                                                                                |
| POST    | `/api/prescriptions/sync`                              | 🔒 synchronisation idempotente (voir plus bas)                                                                   |
| DELETE  | `/api/prescriptions/:id`                               | 🔒 suppression logique                                                                                           |
| GET     | `/api/admin/resume`                                    | 🛡 statuts, listes des fiches, molécules, produits, historique                                                    |
| GET/PUT | `/api/admin/pathologies/:id`                           | 🛡 lecture / enregistrement complet d'une fiche (+ validation)                                                    |
| GET/PUT | `/api/admin/molecules/:id`                             | 🛡 fiche pharmacologique et posologies                                                                            |
| GET/PUT | `/api/admin/medicaments/:id`                           | 🛡 produit : disponibilité RDC, prix, informations propres                                                        |
| GET     | `/api/admin/modifications/:id`                         | 🛡 une version : état avant / après et rubriques modifiées                                                        |

🔒 = en-tête `Authorization: Bearer <jwt>` requis. 🛡 = idem, avec un rôle `admin` ou `medecin`.

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
réseau. Pour le **contenu médical public**, il interroge d'abord le serveur ; si le réseau est absent, en panne ou met
plus de 5 s à répondre, il sert la dernière version reçue. La page **/hors-ligne** (« Utiliser sans connexion »)
télécharge d'un coup toutes les fiches (`GET /api/hors-ligne` donne la liste des adresses). Les données personnelles
et d'administration (`/api/auth`, `/api/prescriptions`, `/api/admin`) ne sont jamais mises en cache. Le service
worker n'est actif qu'avec l'interface compilée (`npm run build`), pas en développement.

---

## Robustesse : contenu, sécurité, erreurs

**Historique complet.** Chaque enregistrement dans /admin conserve l'état complet de la fiche avant et après. Dans
l'historique, « Voir les changements » compare les deux versions rubrique par rubrique ; « Revenir à la version
d'avant » remplit le formulaire, à relire puis enregistrer (la fiche repasse « à valider »). Un enregistrement sans
changement n'ajoute rien à l'historique.

**Date de révision.** Une fiche validée reçoit une date de révision (`REVISION_MOIS`, 24 par défaut). Passé ce délai,
elle est signalée « À revoir » dans le tableau de bord et sur la fiche publique. Revalider la fiche repousse la date.

**Double validation (optionnelle).** Avec `VALIDATION_DOUBLE=1`, on ne peut ni modifier et valider dans le même
enregistrement, ni valider une version qu'on a soi-même rédigée : un second relecteur valide.

**Garde-fous des doses.** Le calcul au poids signale un poids incohérent avec la population (adulte de moins de
35 kg, enfant de plus de 50 kg, nouveau-né de plus de 6 kg…), une dose plafonnée à la dose maximale, l'absence de
dose maximale renseignée ; aucun calcul n'est proposé pour une posologie contre-indiquée.

**Comptes.** Mots de passe de 10 caractères minimum (lettres et chiffres, ni courants, ni dérivés du nom ou de
l'e-mail) ; compte bloqué 15 min après 5 échecs ; sessions de 12 h pour les comptes admin / medecin ; « Mon compte »
(**/compte**) permet de changer de mot de passe, ce qui déconnecte les autres appareils.

**Erreurs.** Une page qui plante affiche un message clair (recharger, revenir à l'accueil) au lieu d'un écran blanc
et est signalée au serveur. Les erreurs du serveur et de l'interface sont écrites dans `backend/logs/api-AAAA-MM-JJ.log`
(une ligne JSON par erreur, 30 jours conservés). L'utilisateur voit seulement une **référence** (ex. `3fa9c21b04de`)
qui permet de retrouver la ligne correspondante dans le journal.

---

## Mise en ligne

Pour que les confrères accèdent au site sans votre ordinateur, il faut un serveur (VPS) avec Node.js 20+ et MySQL 8,
et un nom de domaine en HTTPS. Le plus simple est d'utiliser **un seul programme** : l'API sert aussi l'interface
compilée.

```bash
cd frontend && npm ci && npm run build          # produit frontend/dist
cd ../backend && npm ci --omit=dev
npm run db:migrate                              # 1re fois sur une base vide : npm run db:reset
NODE_ENV=production FRONTEND_DIST=../frontend/dist node src/server.js
```

En production, l'API refuse de démarrer si `JWT_SECRET` ou `DB_PASSWORD` gardent une valeur d'exemple. Placez un
proxy HTTPS devant (Caddy ou Nginx avec Let's Encrypt), faites tourner le service avec un gestionnaire (systemd, pm2)
et réglez `BACKUP_DIR` vers un disque sauvegardé. L'alternative Docker (`docker compose up -d --build`) fait la même
chose avec Nginx devant l'interface.

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

La CI GitHub Actions (`.github/workflows/ci.yml`) s'exécute à chaque push et pull request : lint, tests unitaires,
intégration sur MySQL 8.4 (y compris migrations et aller-retour sauvegarde / restauration), puis, sur une base vide,
`db:migrate`, `db:reset`, `db:backup` ; côté interface, lint, Vitest et build. Résultat dans l'onglet **Actions** du
dépôt GitHub.

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

Les niveaux de soins sont dans `seed-data/niveaux.js`, les grades dans `seed-data/grades.js` (seuls les grades vérifiés
dans la source sont renseignés) et les posologies structurées dans `seed-data/posologies.js`.

**Catalogues des firmes.** Les catalogues Word des firmes (Arauphar, Denk Pharma, New Cesamex, PrincePharma, Shalina
Healthcare, Unique Pharma) sont convertis par un script Python (python-docx et Pillow) :

```bash
cd backend
python scripts/catalogues/extraire_catalogues.py "C:/chemin/Catalogues" Catalogue_Firme.docx
npm run db:enrichir
```

Le script produit `seed-data/catalogues/<firme>.json` (nom, présentation, DCI, composition, mécanisme, indications,
repère posologique, classe, forme, « adapté à l'enfant ») et les photos optimisées `medias/produits/<firme>/` (WebP
800 px et vignette 240 px). L'import rattache chaque produit aux molécules de MedRef RDC uniquement quand la
correspondance est sûre (`db/correspondance.js` : nom exact après retrait des doses et des sels, synonymes) ; les
solutés ne sont jamais rattachés automatiquement. Chaque produit a un état de liaison : _vérifiée_, _automatique_,
_partielle_ (une partie des principes actifs) ou _à lier_. Dans /admin, l'onglet « Catalogue des firmes » liste les
produits à lier, permet de créer une molécule absente (les produits qui la contiennent sont alors liés aussitôt) et
de relancer le rapprochement ; la fiche d'une molécule propose les produits du catalogue qui la citent. Un produit
déjà importé n'est jamais réécrit par un nouvel import.

Sur la fiche d'une molécule, la galerie « Produits disponibles chez les firmes » montre les photos (seule, puis en
association), filtrables par forme, firme et « adapté à l'enfant » ; un clic sur le nom ouvre la fiche du produit en
panneau latéral. L'onglet Thérapeutique des pathologies montre les mêmes produits en vignettes.

La fiche d'un produit fusionne, rubrique par rubrique, les données du produit (catalogue ou /admin), la fiche MedRef
de chaque molécule et les fiches externes ; chaque texte indique sa provenance et un texte identique n'est affiché
qu'une fois.

**Répertoire des AMM de l'ACOREP.** Les documents tirés du répertoire des autorisations de mise sur le marché
(« Produits des firmes pharmaceutiques autorisés en RDC », puis la version complète « Tous les produits des
opérateurs pharmaceutiques autorisés en RDC » : 6 352 lignes, 1 081 opérateurs, 547 fiches de substances rédigées
par IA) sont convertis puis importés de la même façon :

```bash
cd backend
python scripts/catalogues/extraire_acorep.py "C:/chemin/Tous_produits_operateurs_RDC_ACOREP.docx"
npm run db:enrichir
```

Le script lit les deux versions du document. Les lignes déjà importées sont reconnues (même opérateur, marque, dosage
et n° AMM) et complétées, jamais dupliquées ; un second import ne change rien.

- chaque ligne du répertoire (dosage ou conditionnement enregistré) est conservée dans `autorisations_amm` et
  rattachée au produit de catalogue de la même firme et de la même marque, de forme compatible ; sinon un produit est
  créé (un par marque + DCI). La fiche produit affiche le tableau des AMM et la mention « AMM RDC », qui ne coche
  jamais d'office la disponibilité dans le circuit national ;
- chaque fiche de substance est conservée intacte dans `molecule_fiches_externes`. Une substance absente de MedRef
  devient une molécule marquée **à valider** (bandeau sur la fiche, case « Fiche relue et validée » dans /admin) ;
  une molécule existante garde sa fiche MedRef et la fiche externe s'affiche à côté quand elle diffère ;
- chaque produit a une **nature** (médicament, complément, dispositif, cosmétique, autre). Cosmétiques et
  dispositifs n'ont pas de principe actif à lier : leur liaison est _sans objet_. La page Médicaments se filtre par
  nature et par nom, et n'affiche que les 300 premiers résultats (avec le total) ;
- la synthèse par firme (y compris les firmes sans AMM trouvée) et le tableau de tous les opérateurs (pays,
  importateurs principaux) sont dans `repertoire_amm_firmes`.

**Formes cliniques et sémiologie.** `seed-data/semiologie/` décrit, pour chaque fiche, ses formes cliniques (commune,
grave, selon le terrain, topographique, évolutive, paraclinique, étiologique). Chaque forme a sa sémiologie
systématisée (terrain, signes fonctionnels, généraux, physiques, paraclinique), ses syndromes, ses examens de
confirmation et ses étiologies ; `urgences` donne les signes d'alerte du bandeau « Urgence associée ». Les syndromes
sont dans `seed-data/syndromes.js`, le glossaire sémiologique dans `seed-data/glossaire.js` (terme, définition,
variantes, syndrome lié). Dans les fiches, la première occurrence de chaque terme du glossaire est soulignée et sa
définition s'affiche au survol ou au toucher.

Sur une base en service, `npm run db:enrichir` ajoute ce contenu sans rien écraser : une fiche qui a déjà des formes
(saisies ou corrigées dans /admin) est conservée telle quelle, de même que les termes, syndromes et signes d'alerte
déjà présents. Une sauvegarde est faite avant.

Au quotidien, corrigez le contenu depuis **/admin** : `npm run db:reset` recharge les fichiers et **efface** les
modifications faites dans l'administration (d'où la confirmation exigée et la sauvegarde préalable).

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
