# Prompt — Évolutions de MedRef RDC (comptes, accueil, avis entre médecins, avis sur les produits, fiche de prescription)

> À copier tel quel dans une nouvelle session de développement (Claude Code) ouverte sur le dépôt MedRefRDC.
> Les passages entre crochets [ ] sont des choix à confirmer avant de démarrer.

---

## Rôle et contexte

Tu es le développeur principal de **MedRef RDC**, application de référence médicale destinée aux soignants de la République démocratique du Congo, conçue par le Dr Ben Mingalu.

**Existant à respecter (ne rien casser) :**
- **Pile technique** : API Express + mysql2 (MySQL 8.4 sous WAMP), interface React/Vite (application installable, fonctionnement hors ligne), tests Jest (serveur) et Vitest (interface).
- **Bases** : `medref_rdc` (réelle) et `medref_rdc_test` (essais).
- **Contenu** : 792 fiches de pathologies (définition, diagnostic, examens, différentiels, principes de prise en charge, molécules par ligne, complications, niveaux de soins : centre de santé, hôpital général, hôpital tertiaire), fiches pharmacologiques des molécules avec leurs posologies structurées, catalogue des produits des firmes, répertoire des AMM ACOREP, urgences, symptômes, scores, calculateurs.
- **Comptes et administration** : comptes et rôles `user`, `medecin`, `admin` (rôle relu en base à chaque requête), espace d'administration avec historique de chaque modification, validation des fiches (unitaire et groupée), révision au bout de 24 mois.
- **Pages à faire évoluer** : inscription, connexion, accueil, prescriptions. La page prescriptions est enregistrée sur l'appareil et synchronisée avec le serveur.

**Règles impératives :**
1. Toute modification du schéma passe par une **nouvelle migration** `backend/db/migrations/NNN_*.sql`. Jamais de `db:reset` ni de restauration de la base réelle sans accord écrit. Sauvegarde (`npm run db:backup`) avant toute opération sur la base réelle.
2. **Contenu médical** : tout contenu produit par IA est créé « à valider ». Seul un médecin valide. N'invente ni nom de marque, ni URL, ni chiffre, ni posologie : les doses viennent uniquement des fiches pharmacologiques et des posologies de la base.
3. **Sécurité et confidentialité** : aucune donnée nominative de patient sur le serveur sans nécessité. Pseudonymisation par défaut (initiales, âge, sexe, poids). Mots de passe hachés, aucun secret dans le code ni dans le chat.
4. **Usage en RDC** : interface en français, adaptée au téléphone, légère (connexions lentes et coupées), utilisable hors ligne pour la consultation et la prescription, impression A4 et A5.
5. **Méthode** : avancer par lots livrables. Chaque lot comprend tests serveur et interface, vérification dans le navigateur, puis résumé de ce qui a été fait et de ce qui reste. Avant chaque lot, présente un plan court et attends mon accord. Pas de commit sans ma demande.

---

## 1. Inscription et connexion

Améliorer les pages existantes (`/inscription`, `/connexion`) :
- **Inscription** : nom, e-mail, mot de passe (politique actuelle), **profil professionnel** (voir §3), structure d'exercice (centre de santé, hôpital général, hôpital tertiaire, clinique privée, pharmacie, université), province et zone de santé, numéro d'ordre (CNOM, ONPC, ordre des infirmiers…) facultatif à l'inscription.
- **Vérification du statut professionnel** : un compte est « non vérifié » tant qu'un administrateur n'a pas contrôlé le numéro d'ordre ou la pièce justificative. Les fonctions sensibles (§4 et §5, prescription imprimable avec en-tête) exigent un compte vérifié. File d'attente de vérification dans l'administration.
- **Connexion** : e-mail et mot de passe. Ajouter « Mot de passe oublié » par lien envoyé par e-mail, si un service d'e-mail est disponible ; sinon, réinitialisation par un administrateur. Le blocage après des essais infructueux est déjà en place.
- **Mon compte** : modifier son profil, son mot de passe et ses préférences (département favori, niveau de soins habituel), et consulter ses prescriptions, ses demandes d'avis et ses contributions.

## 2. Page d'accueil

Remplacer l'accueil actuel par un tableau de bord personnalisé selon le profil, et léger (blocs chargés à la demande) :
- **Nouveautés produits** : produits ajoutés au catalogue, nouvelles AMM ACOREP, changements de disponibilité en RDC.
- **Traitements et recommandations** : fiches nouvellement validées ou mises à jour (date, auteur de la validation), changements de protocoles nationaux (paludisme, VIH, tuberculose, PCIME, santé de la reproduction).
- **Innovations** : nouvelles molécules, nouvelles indications, nouvelles stratégies, avec leurs sources.

Propositions supplémentaires (à confirmer) :
- **Alertes sanitaires** : épidémies en cours (choléra, mpox, rougeole, Ebola), retraits de lots et alertes de pharmacovigilance, publiées par les administrateurs avec leur source.
- **Accès rapides** : urgences, calculateurs, dernière prescription, recherche.
- **Cas clinique de la semaine** et quiz (formation continue), rédigés et validés par les médecins.
- **Pour le médecin** : demandes d'avis reçues en attente, avis sur les produits à examiner.
- **Pour l'administrateur** : fiches à valider, comptes à vérifier, signalements.
- **Fiches à revoir** : fiches arrivées à échéance de révision.

## 3. Utilisateurs (profils et droits)

Ajouter un **profil professionnel**, distinct du **rôle** technique :

| Profil | Accès principal |
|---|---|
| Médecin généraliste (centre de santé, hôpital général) | Tout le contenu, prescription, demander et donner un avis, avis sur les produits |
| Médecin spécialiste | Idem, plus consultant dans sa spécialité pour les demandes d'avis |
| Infirmier(ère) titulaire / sage-femme | Contenu adapté au niveau « centre de santé », PCIME, urgences ; prescription selon le paquet minimum autorisé ; peut demander un avis |
| Pharmacien | Molécules, produits, interactions ; avis sur les produits ; pas de prescription |
| Étudiant / interne | Consultation et formation ; pas de prescription imprimable ; pas d'avis public |
| Relecteur médical (comité scientifique) | Validation des fiches et des avis sur les produits (rôle `medecin` actuel) |
| Administrateur | Comptes, vérification, modération, contenu (rôle `admin`) |
| Représentant d'une firme (optionnel) | Consultation ; peut proposer la mise à jour des fiches produits de sa firme, sans jamais publier d'avis ni voir les avis privés |

Les droits sont vérifiés **côté serveur** à partir du profil, du rôle et du statut « vérifié ».

## 4. Demander un avis à un autre médecin (téléexpertise)

**Ce que cela implique, à mettre en œuvre :**
- **Formulaire** : spécialité ou médecin ciblé, degré d'urgence (en quelques heures ou dans les 48 heures). Les urgences vitales sont exclues : message clair « appelez ou transférez ». Question posée, résumé clinique structuré (âge, sexe, poids, antécédents, signes, examens, traitements en cours), pièces jointes (photos de lésion, ECG, imagerie, résultats).
- **Consentement et confidentialité** : case « le patient (ou son représentant) a consenti au partage ». Données **pseudonymisées** (pas de nom, ni de visage sauf nécessité). Avertissement à l'envoi d'une photo.
- **Responsabilité** : le médecin demandeur reste responsable de la prise en charge. L'avis est consultatif, horodaté, signé du nom du consultant et conservé dans l'historique de la demande.
- **Circuit** : envoyée → acceptée par un consultant → questions complémentaires possibles (fil de messages) → avis rendu → clôturée. Relance si sans réponse, réaffectation possible.
- **Consultants** : médecins vérifiés qui se déclarent disponibles par spécialité, avec une charge maximale.
- **Notifications** : dans l'application ; e-mail ou SMS plus tard, si le service est disponible.
- **Stockage sécurisé** : pièces jointes hors du dossier public, accès contrôlé par le serveur, taille limitée et compression des images, durée de conservation définie [à fixer, par exemple 5 ans], suppression possible.
- **Traçabilité** : qui a vu quoi et quand ; aucune donnée de demande dans les journaux techniques.
- **Hors ligne** : rédaction possible sans réseau, envoi à la reconnexion.
- **Cadre légal** : déontologie médicale (secret médical) et réglementation congolaise sur les données personnelles et le numérique (Code du numérique). [À faire vérifier par un juriste avant l'ouverture au public.]
- **Facultatif** : mettre en avant, de façon anonymisée et avec accord, les avis utiles comme cas d'enseignement.

## 5. Donner un avis sur les produits et les traitements

Objectif : recueillir des **éléments solides**, examinés par les pairs puis par les administrateurs avant publication.
- **Soumission structurée** :
  - cible : produit (nom commercial, lot si pertinent), molécule ou traitement d'une fiche ;
  - type : efficacité, tolérance ou effet indésirable, qualité du produit (falsification suspectée, défaut, conservation), disponibilité et prix, nouvelle donnée scientifique ;
  - description factuelle et contexte (nombre de patients, durée, population) ;
  - **sources obligatoires** pour une affirmation scientifique (étude, recommandation, notice) ;
  - photos (emballage, numéro de lot) ;
  - **déclaration de liens d'intérêts**.
- **Effets indésirables graves et produits suspects** : afficher la marche à suivre pour la notification officielle de pharmacovigilance auprès de l'autorité nationale (ACOREP), avec le rappel que MedRef ne remplace pas cette notification [coordonnées exactes à fournir par l'administrateur, ne pas les inventer].
- **Examen par les pairs** : les utilisateurs vérifiés commentent et votent (« élément pertinent et sourcé »), sans pouvoir modifier l'avis.
- **Modération** : un administrateur ou relecteur médical publie, demande des compléments ou rejette, avec motif. Une donnée validée peut être reportée dans la fiche molécule, produit ou pathologie (qui repasse alors « à valider »).
- **Garde-fous** : pas de publicité, pas de critique nominative d'un confrère. Un représentant de firme ne peut pas évaluer ses propres produits. Bouton de signalement. Historique complet.

## 6. Fiche de prescription (cœur de l'évolution)

Faire évoluer la page `/prescriptions` en une **ordonnance guidée par les fiches** :

**6.1 Patient**
- Initiales ou code, âge (années, mois ou jours pour le nouveau-né), sexe, **poids (kg, obligatoire)**, taille facultative (surface corporelle si nécessaire).
- Grossesse (trimestre) et allaitement, insuffisance rénale (clairance calculée avec le calculateur existant) et hépatique, allergies connues, traitements en cours.
- Niveau de soins de l'établissement.

**6.2 Diagnostics**
- Un ou plusieurs diagnostics choisis parmi les fiches de pathologies (recherche avec tolérance des fautes et des accents), avec forme clinique ou gravité si la fiche en propose.
- Si une fiche est « à valider », afficher clairement « contenu non encore validé par un médecin ».

**6.3 Bilans**
- Proposer les examens de chaque diagnostic retenu, regroupés par catégorie (première intention, confirmation, gravité, étiologique), sans doublon entre diagnostics. Cocher ce qui est prescrit.

**6.4 Traitements, selon les principes de prise en charge de chaque pathologie**
- Pour chaque diagnostic, proposer les molécules de la fiche avec leur **ligne** (première intention, alternative, deuxième ligne, adjuvant) et leur contexte (« forme grave », « enfant < 5 ans »…).
- Le prescripteur choisit, ajoute ou retire des molécules.
- **Tout découle de la fiche pharmacologique de la molécule et de ses posologies** :
  - **Population** déduite automatiquement du patient (nouveau-né, enfant, adulte, grossesse).
  - **Indication** : menu des indications de la molécule, présélectionnée d'après le diagnostic.
  - **Voie** et **forme** : menu limité à celles de la fiche et aux présentations disponibles (catalogue, disponibilité en RDC).
  - **Calcul de la dose selon le poids** : dose en mg/kg × poids, **plafonnée à la dose maximale** ; dose par prise et dose journalière ; conversion en volume ou en nombre de comprimés selon la concentration de la présentation choisie ; arrondi pratique (demi-comprimé si le comprimé est sécable, millilitres arrondis) ; calcul toujours affiché pour vérification (« 15 mg/kg × 12 kg = 180 mg, soit 7,5 mL de suspension à 120 mg/5 mL »).
  - **Fréquence** : menu issu de la posologie (par exemple « toutes les 8 h », « 2 fois par jour »).
  - **Durée** : **menu déroulant des durées prévues par la fiche pharmacologique pour cette indication** (par exemple 3 jours, 5 jours, 7 à 10 jours, « jusqu'à… ») ; durée libre seulement avec justification.
  - **Sécurité** : alertes si la molécule est contre-indiquée ou à prudence (grossesse, âge, rein, foie), en cas d'allergie, de doublon de classe, d'interaction entre molécules de l'ordonnance, de dépassement de la dose maximale, et de poids incohérent avec l'âge.
- **Quantité à délivrer** calculée (nombre de boîtes ou de flacons selon le conditionnement).

**6.5 Ordonnance**
- Récapitulatif : diagnostics, bilans, traitements (DCI en premier, nom commercial facultatif), posologie en clair, durée, conseils au patient, critères de retour ou de transfert issus de la fiche (niveau de soins).
- Impression A4 et A5 et PDF, avec en-tête du prescripteur vérifié (nom, numéro d'ordre, structure), date et signature.
- Enregistrement hors ligne et synchronisation (mécanisme existant), modèles d'ordonnances réutilisables, historique par patient (pseudonymisé).
- Mention : « Aide à la prescription — la décision et la responsabilité restent celles du prescripteur ».

**6.6 Données à structurer (migrations)**

Aujourd'hui `molecule_posologies.duree` et `frequence` sont du texte libre ; il faut ajouter :
- des **durées structurées** : valeur minimale et maximale, unité (jours, semaines, mois, dose unique), indication et population liées, libellé ;
- une **fréquence structurée** (nombre de prises par jour ou intervalle en heures) ;
- les **concentrations des présentations** (mg par comprimé, mg/5 mL, sécabilité, contenance du conditionnement) ;
- des **interactions** structurées entre molécules (gravité, conduite à tenir), si le texte actuel ne suffit pas.

Prévoir un écran d'administration pour compléter ces champs. Pré-remplissage possible par IA, marqué « à valider ». Tant qu'une posologie n'est pas structurée, afficher le texte de la fiche sans calcul automatique.

---

## Ordre de réalisation proposé (un lot à la fois, avec mon accord)

1. **Lot A** : profils professionnels, vérification des comptes, page « Mon compte », mot de passe oublié.
2. **Lot B** : migrations des posologies structurées (durées, fréquences, présentations) et écran d'administration.
3. **Lot C** : fiche de prescription guidée (diagnostics, bilans, traitements, calcul de dose, durées, alertes, impression).
4. **Lot D** : page d'accueil personnalisée (nouveautés, traitements, innovations, alertes, accès rapides).
5. **Lot E** : avis sur les produits et les traitements (soumission, examen par les pairs, modération, lien avec la pharmacovigilance).
6. **Lot F** : demande d'avis entre médecins (téléexpertise), pièces jointes sécurisées, notifications.

Pour chaque lot :
- schéma de données ;
- routes d'API avec contrôle des droits ;
- écrans ;
- tests, dont les cas limites de calcul : nouveau-né, dose plafonnée, insuffisance rénale ;
- vérification sur `medref_rdc_test`, puis sur la base réelle après sauvegarde ;
- court guide d'utilisation en français pour les soignants.

## Questions à me poser avant de commencer

- Quels profils ouvrir dès le départ ? Faut-il les représentants de firmes ?
- Comment vérifier les comptes (numéro d'ordre seul, ou pièce justificative) ?
- Quel service d'e-mail ou de SMS utiliser (lien de réinitialisation, notifications), ou faut-il s'en passer ?
- Quelle durée de conservation pour les demandes d'avis et leurs pièces jointes ?
- Quel format d'ordonnance (A4, A5, mentions obligatoires de la structure) ?
- Qui alimente les alertes sanitaires et les nouveautés de l'accueil ?
