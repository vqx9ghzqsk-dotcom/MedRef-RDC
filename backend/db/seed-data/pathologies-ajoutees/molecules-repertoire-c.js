'use strict';

/**
 * Molécules du répertoire fourni par le Dr Mingalu (19 octobre 2026) — partie C :
 * psychiatrie, neurologie, dermatologie. À valider.
 */
module.exports = [
  {
    dci: 'Zolpidem',
    slug: 'zolpidem',
    classe: 'Hypnotiques apparentés aux benzodiazépines',
    groupe: 'Psychiatrie',
    mecanisme: 'Agoniste du site benzodiazépine du récepteur GABA-A (sous-unité α1) : effet hypnotique.',
    indications: 'Insomnie occasionnelle ou transitoire sévère.',
    posologie:
      '10 mg au coucher (5 mg chez le sujet âgé ou en insuffisance hépatique), pendant 4 semaines au plus.',
    contre_indications:
      'Insuffisance respiratoire sévère, apnées du sommeil, myasthénie, insuffisance hépatique sévère, moins de 18 ans.',
    effets_indesirables:
      'Somnolence résiduelle, amnésie, comportements complexes pendant le sommeil (somnambulisme), dépendance et sevrage.',
    precautions: 'Pas d’alcool ni d’opioïdes ; prise au lit ; arrêt progressif.',
  },
  {
    dci: 'Escitalopram',
    slug: 'escitalopram',
    classe: 'ISRS',
    groupe: 'Psychiatrie',
    mecanisme: 'Inhibiteur sélectif de la recapture de la sérotonine.',
    indications: 'Épisode dépressif caractérisé, trouble panique, anxiété généralisée, anxiété sociale, TOC.',
    posologie:
      '10 mg/j (5 mg/j la 1re semaine dans le trouble panique), jusqu’à 20 mg/j ; sujet de plus de 65 ans : 5 à 10 mg/j.',
    contre_indications:
      'Association aux IMAO, allongement congénital du QT, association à d’autres médicaments allongeant le QT.',
    effets_indesirables:
      'Nausées, insomnie ou somnolence, troubles sexuels, hyponatrémie (sujet âgé), allongement du QT dose-dépendant.',
    precautions:
      'Surveiller le risque suicidaire en début de traitement chez l’adolescent et l’adulte jeune ; arrêt progressif (syndrome de sevrage).',
  },
  {
    dci: 'Aripiprazole',
    slug: 'aripiprazole',
    classe: 'Antipsychotiques de 2e génération',
    groupe: 'Psychiatrie',
    mecanisme: 'Agoniste partiel des récepteurs D2 et 5-HT1A, antagoniste 5-HT2A.',
    indications: 'Schizophrénie, épisodes maniaques et prévention des récidives du trouble bipolaire.',
    posologie: '10 à 15 mg une fois par jour, jusqu’à 30 mg/j.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables:
      'Akathisie, insomnie, nausées, céphalées ; troubles du contrôle des impulsions (jeu, achats) ; peu d’effets métaboliques.',
    precautions: 'Interactions CYP2D6 et CYP3A4 (adapter la dose) ; surveillance du poids et de la glycémie.',
  },
  {
    dci: 'Bensérazide',
    slug: 'benserazide',
    classe: 'Inhibiteurs de la dopa-décarboxylase',
    groupe: 'Neurologie',
    mecanisme:
      'Inhibe la décarboxylation périphérique de la lévodopa : plus de lévodopa atteint le cerveau, moins d’effets périphériques.',
    indications: 'Maladie de Parkinson, toujours associé à la lévodopa (rapport 4:1).',
    posologie:
      'Exprimée en lévodopa : débuter à 50–100 mg 2 à 3 fois par jour, augmenter par paliers d’une semaine selon la réponse.',
    contre_indications:
      'Ceux de la lévodopa : psychose sévère, glaucome à angle fermé, IMAO non sélectifs ; neuroleptiques antiémétiques déconseillés.',
    effets_indesirables:
      'Nausées, hypotension orthostatique, dyskinésies, hallucinations, somnolence brutale, troubles du contrôle des impulsions.',
    precautions: 'Ne jamais arrêter brutalement (syndrome malin) ; prise à distance des repas protéinés.',
  },
  {
    dci: 'Trolamine',
    slug: 'trolamine',
    classe: 'Émollients et cicatrisants cutanés',
    groupe: 'Dermatologie',
    mecanisme: 'Émulsion hydratante favorisant la cicatrisation de l’épiderme.',
    indications:
      'Brûlures superficielles du 1er et du 2e degré peu étendues, érythèmes radiques, plaies cutanées superficielles non infectées.',
    posologie: 'Application en couche épaisse 2 à 4 fois par jour, sans frotter.',
    contre_indications: 'Plaie infectée ou hémorragique, hypersensibilité.',
    effets_indesirables: 'Picotements, eczéma de contact.',
    precautions:
      'Ne remplace pas la prise en charge d’une brûlure profonde ou étendue (refroidir, couvrir, orienter).',
  },
  {
    dci: 'Adapalène',
    slug: 'adapalene',
    classe: 'Rétinoïdes topiques',
    groupe: 'Dermatologie',
    mecanisme: 'Rétinoïde topique : normalise la kératinisation folliculaire, effet anti-inflammatoire.',
    indications:
      'Acné légère à modérée à prédominance rétentionnelle (comédons), seul ou associé au peroxyde de benzoyle.',
    posologie: '1 application le soir sur les zones atteintes, peau sèche ; effet après 8 à 12 semaines.',
    contre_indications: 'Grossesse (à éviter), eczéma ou peau lésée sur la zone.',
    effets_indesirables: 'Irritation, sécheresse, desquamation, photosensibilisation.',
    precautions:
      'Protection solaire ; éviter les yeux et les muqueuses ; espacer les applications en cas d’irritation.',
  },
  {
    dci: 'Isotrétinoïne',
    slug: 'isotretinoine',
    classe: 'Rétinoïdes systémiques',
    groupe: 'Dermatologie',
    mecanisme:
      'Rétinoïde oral : réduit fortement la sécrétion de sébum, normalise la kératinisation, effet anti-inflammatoire.',
    indications:
      'Acné sévère (nodulaire, conglobata) ou résistante à un traitement bien conduit par antibiotique et topiques.',
    posologie:
      'Au cours d’un repas : 0,5 mg/kg/j, augmenté jusqu’à 1 mg/kg/j selon la tolérance, pour une dose cumulée de 120 à 150 mg/kg.',
    contre_indications:
      'Grossesse et allaitement (tératogène majeur), insuffisance hépatique, hyperlipidémie importante, hypervitaminose A, association aux cyclines (hypertension intracrânienne).',
    effets_indesirables:
      'Sécheresse cutanéo-muqueuse, chéilite, épistaxis, élévation des triglycérides et des transaminases, troubles de l’humeur.',
    precautions:
      'Programme de prévention des grossesses : contraception efficace 1 mois avant, pendant et 1 mois après, test de grossesse mensuel ; bilan lipidique et hépatique ; surveillance psychique ; prescription spécialisée.',
  },
];
