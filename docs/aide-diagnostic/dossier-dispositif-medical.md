# Dossier « logiciel dispositif médical » — Aide au diagnostic MedRef RDC

Document de travail préparatoire. Il n’engage aucune démarche officielle. Les points marqués **à vérifier** demandent l’avis d’un spécialiste réglementaire avant toute diffusion hors de la RDC ou à grande échelle.

## 1. Destination (usage prévu)

- **Utilisateurs** : professionnels de santé (médecins, infirmiers, sages-femmes) connectés et vérifiés. L’outil n’est pas destiné aux patients.
- **Fonction** : aider le soignant à structurer la démarche sémiologique, à envisager des hypothèses diagnostiques et les diagnostics graves à éliminer, à trier l’urgence (ABCDE) et à préparer un traitement conforme aux fiches.
- **Ce qu’il ne fait pas** : il ne pose pas de diagnostic, ne décide pas d’un traitement et n’agit pas sur un appareil. Le soignant valide chaque étape et voit le raisonnement : signes pour et contre, sources, certitude.
- **Contexte** : centres de santé et hôpitaux de la RDC, avec ou sans connexion.

## 2. Classification (à vérifier)

| Cadre | Analyse préliminaire |
|---|---|
| Union européenne (MDR 2017/745, règle 11) | Logiciel fournissant des informations utilisées pour des décisions diagnostiques ou thérapeutiques : **classe IIa** au minimum, **IIb** si une décision erronée peut entraîner une détérioration grave de l’état de santé (triage d’urgence, diagnostics graves). |
| États-Unis (FDA, logiciel d’aide à la décision clinique) | Peut relever des logiciels non dispositifs si le professionnel peut vérifier lui-même le fondement des recommandations (raisonnement affiché). Le triage d’urgence et les alertes en temps critique tendent toutefois vers le statut de dispositif. |
| RDC | Cadre des dispositifs médicaux logiciels **à vérifier** auprès de l’ACOREP et du ministère de la Santé. |

## 3. Exigences et état actuel

| Exigence | Norme de référence | État dans MedRef RDC |
|---|---|---|
| Gestion des risques | ISO 14971 | À formaliser. Risques identifiés au § 4. |
| Cycle de vie du logiciel | IEC 62304 | Versionnage git, tests automatiques (moteur, interface, API), revue de chaque modification. Classe de sécurité logicielle à déterminer (probablement B). |
| Aptitude à l’utilisation | IEC 62366-1 | Parcours guidés, test sur téléphone. Étude d’utilisabilité formelle à faire. |
| Évaluation clinique | MDR annexe XIV | Bancs de cas (réglage et validation indépendante). Étude prospective prévue : voir protocole-validation-clinique.md. |
| Surveillance après mise sur le marché | MDR art. 83-86 | Diagnostics retenus (anonymes) et signalements d’erreurs dans l’onglet d’administration. Procédure de revue périodique à écrire. |
| Données personnelles | Loi applicable en RDC (**à vérifier**) ; RGPD si diffusion en Europe | Aucune donnée de patient sur le serveur. Partage et export sans identité. |
| Contenu médical | — | Fiches validées par un médecin ; référentiels de l’aide au diagnostic « à valider » (voir comite-relecture.md). |

## 4. Principaux risques et mesures

| Risque | Conséquence | Mesures en place | À compléter |
|---|---|---|---|
| Diagnostic grave absent des hypothèses | Retard de prise en charge | Section « À ne pas manquer », triage ABCDE, alertes de constantes, avertissement « l’outil propose, le soignant décide » | Mesure de sensibilité en étude prospective |
| Excès de confiance du soignant | Arrêt de la démarche | Degré de certitude affiché, « données insuffisantes », arguments contre visibles | Formation des utilisateurs |
| Erreur de dose | Toxicité ou inefficacité | Calcul au poids, dose maximale, alerte rénale et hépatique, allergies, interactions, LNME | Revue des posologies structurées par un pharmacien |
| Contenu non validé | Information erronée | Statut « à valider » affiché, version de la base | Validation par le comité de relecture |
| Données périmées hors connexion | Information obsolète | Date de la base affichée | Rappel de mise à jour après N jours hors ligne |
| Indisponibilité | Perte de l’outil | Fonctionnement hors connexion | — |

## 5. Documentation à produire avant une diffusion large

1. Spécification des exigences du logiciel et matrice de traçabilité exigences → tests.
2. Dossier de gestion des risques (ISO 14971) complet.
3. Rapport d’évaluation clinique, après l’étude prospective.
4. Notice d’utilisation : destination, limites, contre-indications d’usage, formation.
5. Procédure de surveillance après diffusion et de gestion des signalements.
6. Procédure de gestion des versions de la base de connaissances.
