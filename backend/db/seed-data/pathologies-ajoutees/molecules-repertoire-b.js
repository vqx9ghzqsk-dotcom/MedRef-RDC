'use strict';

/**
 * Molécules du répertoire fourni par le Dr Mingalu (19 octobre 2026) — partie B :
 * anticoagulant, insulines et agonistes du GLP-1, ORL et ophtalmologie. À valider.
 */
const INSULINE_RAPIDE = {
  classe: 'Insulines analogues rapides',
  groupe: 'Antidiabétiques',
  mecanisme: 'Analogue de l’insuline humaine à début d’action rapide (10–20 min) et à durée courte (3–5 h).',
  indications: 'Diabète de type 1 et de type 2 insulinorequérant : bolus des repas, pompe à insuline.',
  contre_indications: 'Hypoglycémie ; hypersensibilité.',
  effets_indesirables:
    'Hypoglycémie, lipodystrophie aux points d’injection, réactions locales, hypokaliémie.',
};

module.exports = [
  {
    dci: 'Acénocoumarol',
    slug: 'acenocoumarol',
    classe: 'Antivitamines K',
    groupe: 'Hémostase',
    mecanisme:
      'Inhibe la synthèse hépatique des facteurs de coagulation vitamine K-dépendants (II, VII, IX, X).',
    indications:
      'Traitement et prévention de la maladie thromboembolique veineuse, fibrillation atriale, valves cardiaques mécaniques.',
    posologie:
      'Débuter à 2–4 mg/j (moins chez le sujet âgé), puis adapter à l’INR : cible 2–3 (2,5–3,5 pour certaines valves mécaniques) ; relais de l’héparine jusqu’à 2 INR dans la cible.',
    contre_indications:
      'Hémorragie évolutive, ulcère évolutif, insuffisance hépatique sévère, grossesse (1er trimestre et fin de grossesse), HTA sévère non contrôlée.',
    effets_indesirables: 'Hémorragies, rares nécroses cutanées et alopécie.',
    precautions:
      'Demi-vie courte (INR plus instable que sous warfarine) ; nombreuses interactions (antibiotiques, antifongiques azolés, AINS ; miconazole contre-indiqué) ; surdosage : vitamine K1.',
  },
  {
    dci: 'Insuline glulisine',
    slug: 'insuline-glulisine',
    ...INSULINE_RAPIDE,
    posologie:
      'Sous-cutanée 0 à 15 min avant le repas ou juste après ; doses individuelles adaptées à la glycémie et aux glucides (enfant ≥ 6 ans).',
    precautions:
      'Conserver au réfrigérateur avant ouverture ; éducation à l’autosurveillance et au resucrage.',
  },
  {
    dci: 'Insuline asparte',
    slug: 'insuline-asparte',
    ...INSULINE_RAPIDE,
    posologie:
      'Sous-cutanée 0 à 10 min avant le repas (ou juste après) ; doses individuelles ; IV possible en milieu hospitalier ; utilisable pendant la grossesse et dès 1 an.',
    precautions:
      'Conserver au réfrigérateur avant ouverture ; éducation à l’autosurveillance et au resucrage.',
  },
  {
    dci: 'Insuline lispro',
    slug: 'insuline-lispro',
    ...INSULINE_RAPIDE,
    posologie:
      'Sous-cutanée 0 à 15 min avant le repas ; doses individuelles ; IV possible en milieu hospitalier ; utilisable pendant la grossesse.',
    precautions:
      'Conserver au réfrigérateur avant ouverture ; éducation à l’autosurveillance et au resucrage.',
  },
  {
    dci: 'Liraglutide',
    slug: 'liraglutide',
    classe: 'Agonistes du GLP-1',
    groupe: 'Antidiabétiques',
    mecanisme:
      'Agoniste du récepteur du GLP-1 : stimule la sécrétion d’insuline glucose-dépendante, freine le glucagon et la vidange gastrique, réduit l’appétit.',
    indications:
      'Diabète de type 2 insuffisamment contrôlé (bénéfice cardiovasculaire démontré) ; obésité (forme dosée à 3 mg).',
    posologie: 'Sous-cutanée une fois par jour : 0,6 mg pendant 1 semaine, puis 1,2 mg, jusqu’à 1,8 mg/j.',
    contre_indications:
      'Antécédent personnel ou familial de carcinome médullaire de la thyroïde ou de NEM 2, antécédent de pancréatite, grossesse.',
    effets_indesirables: 'Nausées, vomissements, diarrhée, pancréatite, lithiase biliaire.',
    precautions:
      'Arrêt en cas de douleur abdominale évocatrice de pancréatite ; hypoglycémies si associé à un sulfamide ou à l’insuline (réduire leur dose).',
  },
  {
    dci: 'Sémaglutide',
    slug: 'semaglutide',
    classe: 'Agonistes du GLP-1',
    groupe: 'Antidiabétiques',
    mecanisme: 'Agoniste du récepteur du GLP-1 à longue durée d’action (une injection par semaine).',
    indications: 'Diabète de type 2 (bénéfice cardiovasculaire démontré) ; obésité (forme dosée à 2,4 mg).',
    posologie:
      'Sous-cutanée une fois par semaine : 0,25 mg pendant 4 semaines, puis 0,5 mg, jusqu’à 1–2 mg ; forme orale 3 mg puis 7 et 14 mg/j à jeun.',
    contre_indications:
      'Antécédent personnel ou familial de carcinome médullaire de la thyroïde ou de NEM 2, antécédent de pancréatite, grossesse.',
    effets_indesirables:
      'Nausées, vomissements, diarrhée, pancréatite, lithiase biliaire, aggravation transitoire d’une rétinopathie diabétique.',
    precautions:
      'Fond d’œil chez le diabétique ayant une rétinopathie ; réduire les sulfamides et l’insuline.',
  },
  {
    dci: 'Dulaglutide',
    slug: 'dulaglutide',
    classe: 'Agonistes du GLP-1',
    groupe: 'Antidiabétiques',
    mecanisme: 'Agoniste du récepteur du GLP-1 à longue durée d’action.',
    indications: 'Diabète de type 2 insuffisamment contrôlé (bénéfice cardiovasculaire démontré).',
    posologie: 'Sous-cutanée une fois par semaine : 0,75 à 1,5 mg, jusqu’à 4,5 mg selon l’équilibre.',
    contre_indications:
      'Antécédent personnel ou familial de carcinome médullaire de la thyroïde ou de NEM 2, antécédent de pancréatite, grossesse.',
    effets_indesirables: 'Nausées, vomissements, diarrhée, pancréatite.',
    precautions: 'Réduire les sulfamides et l’insuline (hypoglycémies).',
  },
  {
    dci: 'Triprolidine',
    slug: 'triprolidine',
    classe: 'Antihistaminiques H1 sédatifs',
    groupe: 'Antihistaminiques',
    mecanisme: 'Antihistaminique H1 de 1re génération, anticholinergique et sédatif.',
    indications: 'Rhinite et rhume, en association (avec un vasoconstricteur et du paracétamol).',
    posologie: '2,5 mg 3 à 4 fois par jour dans les associations, durée de 5 jours au plus.',
    contre_indications:
      'Glaucome à angle fermé, rétention urinaire ; associations avec la pseudoéphédrine : enfant de moins de 15 ans, HTA sévère, coronaropathie, antécédent d’AVC ou de convulsions.',
    effets_indesirables:
      'Somnolence, sécheresse buccale, constipation, rétention urinaire, confusion chez le sujet âgé.',
    precautions:
      'Conduite et alcool déconseillés ; formes associées à la pseudoéphédrine : risque d’AVC et d’infarctus.',
  },
  {
    dci: 'Chlorure de cétylpyridinium',
    slug: 'chlorure-de-cetylpyridinium',
    classe: 'Antiseptiques buccopharyngés',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Ammonium quaternaire antiseptique (bactéries à Gram positif surtout, levures).',
    indications:
      'Traitement d’appoint des infections superficielles et des irritations de la bouche et de la gorge.',
    posologie:
      '1 pastille à sucer toutes les 2 à 3 h (maximum 6 à 8 par jour), pendant 5 jours au plus ; enfant ≥ 6 ans.',
    contre_indications: 'Hypersensibilité ; enfant de moins de 6 ans (pastilles).',
    effets_indesirables: 'Irritation buccale, coloration de la langue et des dents.',
    precautions:
      'Une angine fébrile relève d’un diagnostic (streptocoque, diphtérie), pas d’un antiseptique local.',
  },
  {
    dci: 'Lysozyme',
    slug: 'lysozyme',
    classe: 'Antiseptiques buccopharyngés',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Enzyme extraite du blanc d’œuf, qui hydrolyse la paroi de certaines bactéries.',
    indications:
      'Traitement d’appoint des infections superficielles de la bouche et de la gorge, en association.',
    posologie: '1 pastille à sucer toutes les 2 à 3 h (maximum 6 à 8 par jour), pendant 5 jours au plus.',
    contre_indications: 'Allergie à l’œuf ; enfant de moins de 6 ans (pastilles).',
    effets_indesirables: 'Réactions allergiques.',
    precautions: 'Une angine fébrile relève d’un diagnostic, pas d’un antiseptique local.',
  },
  {
    dci: 'Amylmétacrésol',
    slug: 'amylmetacresol',
    classe: 'Antiseptiques buccopharyngés',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Antiseptique phénolique local, à faible effet anesthésique.',
    indications: 'Maux de gorge (pastilles associées à l’alcool dichlorobenzylique).',
    posologie:
      '1 pastille à sucer toutes les 2 à 3 h (maximum 8 par jour), pendant 3 jours au plus ; enfant ≥ 6 ans.',
    contre_indications: 'Hypersensibilité ; enfant de moins de 6 ans.',
    effets_indesirables: 'Irritation buccale, rares réactions allergiques.',
    precautions: 'Consulter si fièvre, gêne respiratoire ou absence d’amélioration en 3 jours.',
  },
  {
    dci: 'Alcool dichlorobenzylique',
    slug: 'alcool-dichlorobenzylique',
    classe: 'Antiseptiques buccopharyngés',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Antiseptique local (alcool 2,4-dichlorobenzylique).',
    indications: 'Maux de gorge (pastilles associées à l’amylmétacrésol).',
    posologie:
      '1 pastille à sucer toutes les 2 à 3 h (maximum 8 par jour), pendant 3 jours au plus ; enfant ≥ 6 ans.',
    contre_indications: 'Hypersensibilité ; enfant de moins de 6 ans.',
    effets_indesirables: 'Irritation buccale, rares réactions allergiques.',
    precautions: 'Consulter si fièvre, gêne respiratoire ou absence d’amélioration en 3 jours.',
  },
  {
    dci: 'Hexamidine',
    slug: 'hexamidine',
    classe: 'Antiseptiques locaux (diamidines)',
    groupe: 'Ophtalmologie et ORL',
    mecanisme:
      'Antiseptique de la famille des diamidines, actif sur les bactéries à Gram positif et certaines levures.',
    indications:
      'Traitement d’appoint des affections de la bouche et de la gorge (collutoire, en association) et des peaux infectées.',
    posologie: 'Collutoire : 1 à 2 pulvérisations 3 fois par jour, pendant 5 jours au plus.',
    contre_indications:
      'Hypersensibilité ; formes contenant un anesthésique local : enfant de moins de 6 ans (fausse route).',
    effets_indesirables: 'Irritation, réactions allergiques.',
    precautions: 'Ne pas avaler ; ne pas manger ni boire dans les 2 h si un anesthésique local est associé.',
  },
  {
    dci: 'Tixocortol',
    slug: 'tixocortol',
    classe: 'Corticoïdes locaux',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Corticoïde à action anti-inflammatoire locale, sans effet systémique notable.',
    indications: 'Rhinites allergiques et inflammatoires (pulvérisation nasale de pivalate de tixocortol).',
    posologie: '1 à 2 pulvérisations dans chaque narine 2 à 4 fois par jour.',
    contre_indications: 'Infection nasale non traitée, épistaxis, hypersensibilité.',
    effets_indesirables: 'Sécheresse et irritation nasale, épistaxis.',
    precautions:
      'Préférer les corticoïdes nasaux en une prise (mométasone, fluticasone) pour un traitement prolongé.',
  },
  {
    dci: 'Bimatoprost',
    slug: 'bimatoprost',
    classe: 'Analogues des prostaglandines (collyres)',
    groupe: 'Ophtalmologie et ORL',
    mecanisme: 'Augmente l’écoulement uvéoscléral de l’humeur aqueuse : baisse de la pression intraoculaire.',
    indications: 'Glaucome à angle ouvert et hypertonie oculaire.',
    posologie: '1 goutte dans l’œil atteint une fois par jour, le soir.',
    contre_indications: 'Hypersensibilité.',
    effets_indesirables:
      'Hyperhémie conjonctivale, prurit, pigmentation de l’iris et des paupières, allongement des cils.',
    precautions:
      'Prudence en cas d’uvéite ou d’œdème maculaire ; retirer les lentilles avant l’instillation.',
  },
];
