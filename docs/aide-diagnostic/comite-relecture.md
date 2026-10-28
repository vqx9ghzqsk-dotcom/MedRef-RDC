# Comité de relecture médicale — Aide au diagnostic MedRef RDC

Proposition d’organisation, à adapter par le Dr Ben Mingalu.

## 1. Rôle

Le comité valide le contenu médical qui fait raisonner l’outil, suit sa justesse et traite les signalements des utilisateurs. Aucun référentiel ne perd la mention « à valider » sans décision du comité.

## 2. Composition proposée

- Le Dr Ben Mingalu, président.
- Un pédiatre, avec une expérience PCIME ou PCIMA de préférence.
- Un gynécologue-obstétricien ou une sage-femme cadre.
- Un médecin de médecine interne ou un infectiologue.
- Un pharmacien, pour les posologies, la LNME, l’AWaRe et les interactions.
- Un médecin ou un infirmier titulaire de centre de santé, pour la faisabilité au premier niveau.

Chaque membre déclare ses liens d’intérêts (firmes pharmaceutiques en particulier). Un membre en conflit sur un sujet ne vote pas.

## 3. Référentiels à relire

| Référentiel | Fichier | Liste lisible |
|---|---|---|
| Fréquence des maladies en RDC, saisons, foyers | backend/db/seed-data/epidemiologie.js | docs/epidemiologie-rdc.md (`npm run diagnostic:epidemiologie`) |
| Signes discriminants des fiches (ajoutés, clés, d’exclusion, terrain requis) | backend/db/seed-data/signes-fiches.js | docs/signes-discriminants.md (`npm run diagnostic:signes`) |
| Performances des examens (Se, Sp) | backend/db/seed-data/performances-examens.js | — |
| Médicaments essentiels (LNME 2020) et AWaRe | backend/db/seed-data/medicaments-essentiels.js | — |
| Codes CIM-10 | backend/db/seed-data/codes-cim10.js | — |
| Technique de recherche des signes | backend/db/seed-data/recherche-signes.js | — |
| Triage ABCDE, causes d’échec | frontend/src/core/diagnostic.js (TRIAGE, CAUSES_ECHEC) | — |
| Scores guidés | frontend/src/core/scoresGuides.js | — |
| Parcours PCIME, PCIMA, saignement pendant la grossesse | frontend/src/core/parcours.js | — |
| Conseils au patient | frontend/src/core/conseils.js | — |
| Règles cliniques (restrictions, signes clés des syndromes, niveaux des examens) | backend/db/seed-data/diagnostic.js | — |
| Cas cliniques des bancs | backend/db/seed-data/cas-cliniques.js, cas-validation.js | docs/banc-diagnostic.md (`npm run diagnostic:banc`) |

Les fiches elles-mêmes sont validées dans l’administration (onglet Fiches), comme aujourd’hui.

## 4. Fonctionnement

1. **Relecture par lots** : chaque membre relit les éléments de son domaine dans les listes lisibles et note ses corrections (fiche, signe, valeur, source).
2. **Décision** : en réunion mensuelle, ou par écrit pour les corrections simples. Accord de 2 membres au moins, dont le spécialiste du domaine.
3. **Mise en œuvre** : les corrections sont appliquées dans les fichiers, avec la source dans le message de modification (historique git). On relance alors les bancs pour vérifier qu’aucune correction ne dégrade la justesse.
4. **Validation** : un référentiel relu en entier peut perdre la mention « à valider ». La version de la base affichée dans l’outil change.

## 5. Suivi de la justesse et des signalements

- **Chaque mois** : onglet « Aide au diagnostic » de l’administration. On y voit la part du bon diagnostic en 1re position et dans les 3 premiers, les fiches le plus souvent manquées et les signalements à traiter.
- **Signalement d’un risque pour les patients** (erreur de dose, diagnostic grave manqué) : traitement sous 7 jours, et sous 48 heures si une erreur de dose est confirmée.
- **Banc de validation** : il ne sert jamais à régler l’outil. Quand il commence à guider des corrections, on écrit de nouveaux cas indépendants.

## 6. Traçabilité

Chaque modification du contenu est conservée dans l’historique git (date, auteur, motif) et dans l’historique de l’administration pour les fiches. Les comptes rendus de réunion sont archivés avec la liste des éléments validés.
