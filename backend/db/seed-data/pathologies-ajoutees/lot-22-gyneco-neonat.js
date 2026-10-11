'use strict';

/**
 * Lot 22 (gynéco-obstétrique) — dépistage du cancer du col, cancer du sein, fistules
 * obstétricales, réanimation du nouveau-né en salle de naissance, soins essentiels du
 * nouveau-né. Rédigé par IA (OMS, FIGO, ESMO, Helping Babies Breathe) : à valider.
 */

const ONCO = { departement: 'gynecologie-obstetrique', specialite: 'Gynécologie oncologique' };
const UROG = { departement: 'gynecologie-obstetrique', specialite: 'Urogynécologie' };
const NEOIM = { departement: 'gynecologie-obstetrique', specialite: 'Néonatologie immédiate' };

module.exports = [
  // =================================================================== Dépistage col
  {
    ...ONCO,
    slug: 'depistage-cancer-du-col',
    nom: 'Dépistage du cancer du col (IVA, test HPV)',
    resume:
      'Stratégie OMS 90-70-90 : test HPV (de préférence) ou IVA chez les femmes de 30 à 49 ans (dès 25 ans si VIH) ; « dépister et traiter » le jour même (thermocoagulation ou cryothérapie) ; orientation des lésions étendues ou suspectes.',
    definition:
      'Recherche des lésions précancéreuses du col chez des femmes sans symptôme, pour les traiter avant l’évolution vers un cancer invasif.',
    physiopathologie:
      '## Principe\n- L’infection persistante à HPV évolue en 10 à 20 ans vers des lésions précancéreuses puis un cancer\n- Le traitement des lésions précancéreuses prévient la quasi-totalité des cancers\n- Objectif OMS 2030 : 70 % des femmes dépistées par un test de haute performance à 35 et 45 ans',
    diagnostic:
      '## Tests\n- **Test ADN HPV** (prélèvement par le soignant ou auto-prélèvement) : le plus performant\n- **IVA** : application d’acide acétique à 3–5 % ; zone blanche acidophile près de la jonction = positif\n- Frottis (cytologie) si laboratoire disponible\n\n## Intervalles\n- Population générale : dès 30 ans, tous les 5–10 ans (HPV) ou 3 ans (IVA)\n- Femme vivant avec le VIH : dès 25 ans, tous les 3–5 ans (HPV) ou 3 ans (IVA)\n\n## Après un test HPV positif\n- Triage par IVA (ou colposcopie) puis traitement',
    examens: [
      ['confirmation', 'depistage-col-iva-hpv', 'Test de dépistage.'],
      ['premiere_intention', 'tdr-vih', 'Adapter l’âge de début et l’intervalle.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Lésion suspecte de cancer.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-du-col-de-l-uterus', 'Lésion visible suspecte : biopsie, pas de traitement ablatif.'],
      ['Cervicite', 'Col inflammatoire : traiter puis redépister.'],
    ],
    etiologies: '## Population cible\n- Femmes de 30 à 49 ans, femmes vivant avec le VIH dès 25 ans',
    principes: [
      [
        'Dépister et traiter',
        'Traiter le jour même.',
        '- **Thermocoagulation** (ou cryothérapie) si la lésion est éligible (entièrement visible, < 75 % du col, pas de suspicion de cancer)\n- Sinon : **résection à l’anse diathermique (RAD/LEEP)** ou orientation\n- Lésion suspecte de cancer : biopsie, orientation oncologique',
      ],
      [
        'Suivi',
        'Vérifier la guérison.',
        '- Contrôle 12 mois après le traitement (test HPV ou IVA)\n- Abstinence ou préservatif 4 semaines après une thermocoagulation',
      ],
      [
        'Prévention primaire',
        'Compléter la stratégie.',
        '- Vaccination HPV des filles de 9 à 14 ans, préservatif',
      ],
    ],
    molecules: [
      ['vaccin-papillomavirus-hpv', 'premiere', 'Prévention primaire'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale (RAD)'],
      ['paracetamol', 'adjuvant', 'Douleur après traitement'],
    ],
    complications: [
      {
        nom: 'Saignements ou pertes après traitement',
        description: 'Fréquents quelques semaines.',
        traitement: '- Conseils',
        clinique: '- Pertes aqueuses',
        paraclinique: '',
      },
      {
        nom: 'Infection',
        fiche: 'infection-genitale-haute',
        description: 'Rare.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, douleur',
        paraclinique: '',
      },
    ],
    evolution:
      '## Bénéfices\n- Le dépistage avec traitement des lésions précancéreuses réduit fortement l’incidence et la mortalité du cancer du col',
    urgences: [],
    symptomes: [['Leucorrhées', 'rare']],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'ESGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- IVA, auto-prélèvement HPV, thermocoagulation', '- Lésion non éligible, suspicion de cancer'],
      hgr: ['- RAD, biopsie, colposcopie', ''],
      tert: ['- Oncologie gynécologique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'IVA positive éligible',
        type: 'commune',
        description: 'Lésion traitable le jour même.',
        terrain: '- Femme de 30 à 49 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Zone acidophile blanche',
        paraclinique: '- Test HPV positif',
        etiologies: '- HPV',
        syndromes: [],
        examens: [['depistage-col-iva-hpv', 'Dépistage']],
      },
    ],
  },

  // =================================================================== Cancer du sein
  {
    ...ONCO,
    slug: 'cancer-du-sein',
    nom: 'Cancer du sein',
    resume:
      'Premier cancer de la femme, souvent diagnostiqué tard et chez des femmes jeunes en Afrique : nodule du sein, rétraction, adénopathie axillaire ; examen clinique des seins, échographie/mammographie, biopsie avec récepteurs hormonaux ; chirurgie, chimiothérapie, hormonothérapie, radiothérapie.',
    definition:
      'Tumeur maligne de la glande mammaire, le plus souvent carcinome canalaire infiltrant, classé selon le stade TNM et le profil biologique (récepteurs hormonaux, HER2).',
    physiopathologie:
      '## Facteurs\n- Âge, antécédents familiaux (BRCA), exposition hormonale (puberté précoce, nulliparité, première grossesse tardive), obésité, alcool\n- En Afrique : femmes plus jeunes, tumeurs plus agressives (triple négatives), diagnostic tardif',
    diagnostic:
      '## Clinique\n- **Nodule** dur, indolore, mal limité\n- Rétraction du mamelon ou de la peau, écoulement sanglant, **peau d’orange**, ulcération\n- **Adénopathies axillaires**\n- Formes inflammatoires (sein rouge, chaud, augmenté)\n\n## Triple diagnostic\n- Examen clinique + **imagerie** (échographie, mammographie) + **biopsie** (histologie, récepteurs hormonaux, HER2)\n- Bilan d’extension : radiographie thoracique, échographie hépatique, scintigraphie selon le stade',
    examens: [
      ['confirmation', 'mammographie-echographie-mammaire', 'BI-RADS, guidage.'],
      ['confirmation', 'biopsie-histologie', 'Histologie, récepteurs hormonaux, HER2.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
      ['gravite', 'echographie-abdominale', 'Métastases hépatiques.'],
      ['pretherapeutique', 'nfs', 'Avant chimiothérapie.'],
      ['pretherapeutique', 'echocardiographie', 'Avant anthracyclines ou trastuzumab.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
    ],
    scores: [],
    differentiels: [
      [
        'mastite-abces-du-sein',
        'Femme allaitante, fièvre ; un cancer inflammatoire doit être évoqué si pas d’amélioration.',
      ],
      ['Fibroadénome', 'Nodule mobile, bien limité, femme jeune.'],
      ['Kyste du sein', 'Échographie.'],
      ['Tuberculose mammaire', 'Abcès froid, fistule.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Âge, antécédents familiaux, nulliparité, faible durée d’allaitement, obésité, alcool',
    principes: [
      [
        'Traitement locorégional',
        'Contrôler la tumeur.',
        '- **Chirurgie** : mastectomie avec curage axillaire ou chirurgie conservatrice + radiothérapie\n- Radiothérapie après chirurgie selon le stade',
      ],
      [
        'Traitements systémiques',
        'Réduire le risque de récidive.',
        '- **Chimiothérapie** (néoadjuvante pour les formes localement avancées) : AC (**doxorubicine** + **cyclophosphamide**) puis **paclitaxel**\n- **Hormonothérapie** si récepteurs positifs : **tamoxifène** 5–10 ans (non ménopausée) ou anti-aromatase (**anastrozole**, **létrozole**) après la ménopause\n- **Trastuzumab** si HER2 positif (selon disponibilité)',
      ],
      [
        'Soins de support et dépistage',
        'Améliorer le pronostic.',
        '- Soins palliatifs (morphine), soutien psychologique, prothèse\n- Sensibilisation, examen clinique des seins par un soignant, diagnostic précoce de toute masse',
      ],
    ],
    molecules: [
      ['tamoxifene', 'premiere', 'Récepteurs hormonaux positifs'],
      ['anastrozole', 'alternative', 'Femme ménopausée'],
      ['letrozole', 'alternative', 'Femme ménopausée'],
      ['doxorubicine', 'premiere', 'Chimiothérapie AC'],
      ['cyclophosphamide', 'premiere', 'Chimiothérapie AC'],
      ['paclitaxel', 'premiere', 'Chimiothérapie'],
      ['trastuzumab-biosimilaire', 'alternative', 'HER2 positif'],
      ['morphine', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Métastases (os, poumon, foie, cerveau)',
        description: 'Stade avancé.',
        traitement: '- Traitement systémique, radiothérapie, acide zolédronique',
        clinique: '- Douleurs osseuses, dyspnée',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Lymphœdème du bras',
        description: 'Curage axillaire.',
        traitement: '- Drainage, contention',
        clinique: '- Bras gonflé',
        paraclinique: '',
      },
      {
        nom: 'Neutropénie fébrile',
        fiche: 'sepsis-et-choc-septique',
        description: 'Chimiothérapie.',
        traitement: '- Antibiotiques urgents',
        clinique: '- Fièvre',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 90 % pour les stades précoces, faible pour les stades avancés fréquents en RDC',
    urgences: [],
    symptomes: [
      ['Nodule du sein', 'tres_frequent'],
      ['Adénopathies', 'frequent'],
      ['Douleur mammaire', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
      ['Douleurs osseuses', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      'NCCN — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Examen des seins, orientation rapide de toute masse',
        '- Nodule, rétraction, écoulement sanglant',
      ],
      hgr: ['- Échographie, biopsie, mastectomie', '- Chimiothérapie, radiothérapie'],
      tert: ['- Oncologie, radiothérapie, anatomopathologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cancer du sein localisé',
        type: 'commune',
        description: 'Nodule isolé.',
        terrain: '- Femme de plus de 35 ans',
        fonctionnels: '- Masse indolore',
        generaux: '',
        physiques: '- Nodule dur, irrégulier',
        paraclinique: '- BI-RADS 4–5, biopsie positive',
        etiologies: '',
        syndromes: [],
        examens: [['biopsie-histologie', 'Diagnostic']],
      },
      {
        nom: 'Cancer du sein localement avancé',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '- Femme jeune',
        fonctionnels: '- Masse volumineuse',
        generaux: '- Amaigrissement',
        physiques: '- Peau d’orange, ulcération, adénopathies fixées',
        paraclinique: '- Métastases',
        etiologies: '',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Fistules obstétricales
  {
    ...UROG,
    slug: 'fistules-obstetricales',
    nom: 'Fistules obstétricales vésico-vaginales et recto-vaginales',
    resume:
      'Communication entre vessie (ou rectum) et vagin après un travail prolongé ou bloqué : fuite permanente d’urine ou de selles ; sonde vésicale précoce (petites fistules récentes), réparation chirurgicale en centre spécialisé, réinsertion sociale ; prévention par l’accès à la césarienne.',
    definition:
      'Communication anormale entre le vagin et la vessie (vésico-vaginale) et/ou le rectum (recto-vaginale), due le plus souvent à la nécrose ischémique des tissus lors d’un travail prolongé ou bloqué ; parfois traumatique (violences sexuelles, chirurgie).',
    physiopathologie:
      '## Mécanismes\n- Compression prolongée de la tête fœtale contre le bassin : ischémie, nécrose de la paroi vésicale ou rectale\n- Chute d’escarre en 3 à 10 jours après l’accouchement\n- Souvent associée à une mort fœtale, des lésions nerveuses (pied tombant), une stérilité',
    diagnostic:
      '## Clinique\n- **Fuite d’urine permanente** par le vagin (vésico-vaginale), ou de selles et de gaz (recto-vaginale)\n- Antécédent de travail prolongé, accouchement à domicile, mort-né\n- Dermite vulvaire, odeur, isolement social\n\n## Examen\n- Spéculum : orifice visible ; test au bleu de méthylène (vessie) pour les petites fistules\n- Rechercher une atteinte urétrale, une sténose vaginale, une paralysie du nerf fibulaire',
    examens: [
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
      ['premiere_intention', 'creatinine', 'Atteinte urétérale.'],
      ['premiere_intention', 'echographie-renale', 'Dilatation urétérale.'],
      ['premiere_intention', 'nfs', 'Anémie avant chirurgie.'],
      ['premiere_intention', 'tdr-vih', 'Terrain.'],
    ],
    scores: [],
    differentiels: [
      ['Incontinence urinaire d’effort', 'Fuites à l’effort, pas d’orifice.'],
      [
        'Fistule urétéro-vaginale',
        'Mictions conservées avec fuite permanente, après césarienne ou hystérectomie.',
      ],
      ['infections-genitales-basses', 'Leucorrhées sans fuite d’urine.'],
    ],
    etiologies:
      '## Facteurs\n- Travail prolongé ou bloqué sans accès à la césarienne, adolescente, petite taille, malnutrition\n- Accouchement à domicile, retards de transfert\n- Violences sexuelles, chirurgie pelvienne',
    principes: [
      [
        'Prise en charge précoce',
        'Fermer les petites fistules.',
        '- Après un travail prolongé : **sonde vésicale** 14 jours (prévention)\n- Fistule récente < 2 cm : sonde vésicale 3 à 4 semaines (fermeture spontanée possible)',
      ],
      [
        'Réparation chirurgicale',
        'Restaurer la continence.',
        '- Réparation par voie vaginale par un chirurgien formé, 3 mois après l’accouchement (tissus cicatrisés)\n- Antibioprophylaxie, sonde vésicale 10–14 jours après la réparation\n- Fistules complexes : centres spécialisés',
      ],
      [
        'Soins et réinsertion',
        'Réhabiliter.',
        '- Soins de la vulve, hydratation abondante, nutrition, kinésithérapie (pied tombant)\n- Soutien psychosocial, réinsertion\n- Grossesse suivante : césarienne programmée',
      ],
      [
        'Prévention',
        'Éliminer les fistules.',
        '- Partogramme, accès à la césarienne, accouchement assisté, retard du premier mariage et de la première grossesse',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibioprophylaxie'],
      ['cefazoline', 'alternative', 'Antibioprophylaxie'],
      ['oxyde-de-zinc-pommade', 'adjuvant', 'Dermite vulvaire'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Dermite et infections urinaires',
        fiche: 'infections-urinaires-adulte',
        description: 'Fuite permanente.',
        traitement: '- Soins, antibiotiques',
        clinique: '- Brûlures, fièvre',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Exclusion sociale et dépression',
        description: 'Odeur, abandon.',
        traitement: '- Soutien, réparation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Lésions associées.',
        traitement: '- Prise en charge',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Fermeture dans 80 à 90 % des fistules simples après une première chirurgie ; incontinence résiduelle possible',
    urgences: [],
    symptomes: [
      ['Incontinence urinaire', 'tres_frequent'],
      ['Leucorrhées', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Sonde vésicale après travail prolongé, repérage, orientation', '- Toute fistule'],
      hgr: ['- Réparation des fistules simples par chirurgien formé', ''],
      tert: ['- Centres de réparation des fistules', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fistule vésico-vaginale',
        type: 'commune',
        description: 'Fuite d’urine permanente.',
        terrain: '- Travail bloqué, mort-né',
        fonctionnels: '- Fuite d’urine continue',
        generaux: '',
        physiques: '- Orifice vaginal antérieur',
        paraclinique: '- Test au bleu positif',
        etiologies: '- Nécrose ischémique',
        syndromes: [],
      },
      {
        nom: 'Fistule recto-vaginale',
        type: 'etiologique',
        description: 'Fuite de selles.',
        terrain: '- Travail prolongé, déchirure',
        fonctionnels: '- Fuite de gaz et de selles',
        generaux: '',
        physiques: '- Orifice vaginal postérieur',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Réanimation NN
  {
    ...NEOIM,
    slug: 'reanimation-nouveau-ne-salle-de-naissance',
    nom: 'Réanimation du nouveau-né en salle de naissance',
    resume:
      'Algorithme « Helping Babies Breathe » : préparer (ballon-masque testé), sécher et stimuler ; si le nouveau-né ne respire pas : dégager les voies aériennes puis ventiler au ballon-masque dans la minute (air ambiant) ; massage cardiaque si FC < 60/min malgré une ventilation efficace.',
    definition:
      'Ensemble des gestes réalisés à la naissance chez le nouveau-né qui ne respire pas ou respire mal (environ 10 % des naissances ont besoin d’aide, 3–5 % d’une ventilation).',
    physiopathologie:
      '## Transition à la naissance\n- Résorption du liquide pulmonaire, aération des poumons, baisse des résistances pulmonaires\n- Échec : apnée, bradycardie, hypoxie\n- La ventilation efficace corrige la plupart des situations',
    diagnostic:
      '## Évaluation (dès la naissance)\n- Respire-t-il ou crie-t-il ? Tonus ?\n- Fréquence cardiaque (stéthoscope ou palpation du cordon)\n- Coloration (secondaire)\n- Score d’Apgar à 1 et 5 minutes (sans retarder la réanimation)',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 préductale (main droite).'],
      ['premiere_intention', 'glycemie', 'Après la réanimation.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['asphyxie-perinatale', 'Encéphalopathie après réanimation.'],
      ['Dépression médicamenteuse (morphiniques maternels)', 'Contexte, naloxone discutée.'],
      ['Malformations (hernie diaphragmatique)', 'Abdomen plat, détresse persistante.'],
    ],
    etiologies:
      '## Situations à risque\n- Travail prolongé, souffrance fœtale, liquide méconial, prématurité, siège, césarienne en urgence, anesthésie générale',
    principes: [
      [
        'Préparation',
        'Être prêt.',
        '- Personne formée à chaque naissance, table chaude, linges, aspirateur, **ballon et masques testés** (tailles 0 et 1), horloge',
      ],
      [
        'Minute d’or',
        'Établir la respiration.',
        '- **Sécher**, réchauffer, retirer le linge mouillé, évaluer\n- Ne respire pas : positionner la tête, dégager les voies aériennes (aspiration seulement si obstruction), stimuler (dos)\n- **Ventilation au ballon-masque dans la première minute** : 40 insufflations/min, air ambiant (oxygène si prolongée et SpO2 basse), vérifier que le thorax se soulève',
      ],
      [
        'Si FC < 60/min malgré 30 s de ventilation efficace',
        'Rétablir la circulation.',
        '- Massage cardiaque : 3 compressions pour 1 insufflation (technique des 2 pouces)\n- **Adrénaline** 10–30 µg/kg IV (cordon) si FC reste < 60/min\n- Remplissage NaCl 0,9 % 10 mL/kg si hypovolémie',
      ],
      [
        'Après',
        'Soins post-réanimation.',
        '- Peau à peau ou incubateur, glycémie, température, surveillance (fiche *Asphyxie périnatale*)\n- Arrêt après 10–20 min sans activité cardiaque, accompagnement des parents',
      ],
    ],
    molecules: [
      ['oxygene', 'adjuvant', 'Ventilation prolongée, SpO2 basse'],
      ['adrenaline-epinephrine', 'deuxieme', 'FC < 60/min malgré massage'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Hypovolémie'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie post-réanimation'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie anoxo-ischémique',
        fiche: 'asphyxie-perinatale',
        description: 'Réanimation prolongée.',
        traitement: '- Soins post-réanimation',
        clinique: '- Convulsions, hypotonie',
        paraclinique: '',
      },
      {
        nom: 'Pneumothorax',
        description: 'Ventilation.',
        traitement: '- Exsufflation',
        clinique: '- Aggravation brutale',
        paraclinique: '',
      },
      {
        nom: 'Hypothermie',
        fiche: 'hypothermie-neonatale',
        description: 'Défaut de réchauffement.',
        traitement: '- Peau à peau',
        clinique: '',
        paraclinique: '- Température',
      },
    ],
    evolution:
      '## Bénéfices\n- La formation Helping Babies Breathe réduit fortement la mortalité néonatale précoce',
    urgences: [],
    symptomes: [
      ['Cyanose', 'frequent'],
      ['Hypotonie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'AAP — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Ballon-masque à chaque accouchement, minute d’or, transfert', '- Nouveau-né réanimé'],
      hgr: ['- Réanimation avancée, soins post-réanimation', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Nouveau-né qui ne respire pas',
        type: 'commune',
        description: 'Apnée à la naissance.',
        terrain: '- Travail difficile',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pas de cri, hypotonie, FC > 60',
        paraclinique: '- Apgar bas',
        etiologies: '- Hypoxie',
        syndromes: [],
      },
      {
        nom: 'Bradycardie sévère',
        type: 'gravite',
        description: 'FC < 60/min.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Absence de réponse à la ventilation',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Soins essentiels NN
  {
    ...NEOIM,
    slug: 'soins-essentiels-nouveau-ne',
    nom: 'Soins essentiels du nouveau-né',
    resume:
      'Pour tous les nouveau-nés : séchage, peau à peau, clampage retardé, allaitement dans l’heure, soins du cordon (chlorhexidine), vitamine K, prophylaxie oculaire, vaccins (BCG, polio, hépatite B), examen complet, reconnaissance des signes de danger.',
    definition:
      'Paquet de soins de base recommandé par l’OMS pour chaque nouveau-né à la naissance et pendant les premiers jours (« Essential Care for Every Baby »).',
    physiopathologie:
      '## Enjeux\n- Près de la moitié des décès d’enfants de moins de 5 ans surviennent dans le premier mois, surtout la première semaine\n- Causes : prématurité, asphyxie, infections, hypothermie',
    diagnostic:
      '## Examen du nouveau-né\n- Poids, température, respiration, coloration, tonus, succion\n- Malformations (fente labio-palatine, spina bifida, anus imperforé, pied bot)\n- Cordon, ictère\n\n## Signes de danger (référer)\n- Ne tète pas, convulsions, respiration rapide (≥ 60/min) ou tirage, température ≥ 37,5 °C ou < 35,5 °C, léthargie, ictère précoce, rougeur ombilicale étendue',
    examens: [
      ['premiere_intention', 'glycemie', 'Nouveau-né à risque.'],
      ['premiere_intention', 'anthropometrie', 'Poids, taille, périmètre crânien.'],
    ],
    scores: ['apgar'],
    differentiels: [],
    etiologies: '## Facteurs de risque\n- Accouchement à domicile, faible poids, absence de soins postnatals',
    principes: [
      [
        'À la naissance',
        'Soins immédiats.',
        '- Séchage, **peau à peau** immédiat et prolongé, bonnet\n- **Clampage retardé** du cordon (1–3 min)\n- **Allaitement dans l’heure**, exclusif\n- Bain différé après 24 h',
      ],
      [
        'Prévention',
        'Éviter les maladies.',
        '- **Vitamine K1** 1 mg IM (0,5 mg si < 1 500 g)\n- Prophylaxie oculaire (**tétracycline** pommade)\n- **Chlorhexidine 7,1 %** sur le cordon\n- Vaccins : **BCG**, VPO 0, **hépatite B** dans les 24 h\n- Prophylaxie ARV si mère VIH+',
      ],
      [
        'Suivi',
        'Repérer les problèmes.',
        '- Séjour d’au moins 24 h après l’accouchement en structure\n- Visites postnatales (J3, J7–14, 6 semaines)\n- Méthode kangourou si faible poids',
      ],
    ],
    molecules: [
      ['vitamine-k1-phytomenadione', 'premiere', '1 mg IM'],
      ['tetracycline', 'premiere', 'Prophylaxie oculaire'],
      ['chlorhexidine-gluconate', 'premiere', 'Soins du cordon'],
      ['vaccin-bcg', 'premiere', 'Naissance'],
      ['vaccin-polio', 'premiere', 'VPO 0'],
      ['vaccin-hepatite-b', 'premiere', 'Dans les 24 h'],
      ['nevirapine', 'adjuvant', 'Mère vivant avec le VIH'],
    ],
    complications: [
      {
        nom: 'Hypothermie',
        fiche: 'hypothermie-neonatale',
        description: 'Défaut de chaîne du chaud.',
        traitement: '- Peau à peau',
        clinique: '- Froid',
        paraclinique: '',
      },
      {
        nom: 'Infections néonatales',
        fiche: 'sepsis-neonatal',
        description: 'Hygiène, cordon.',
        traitement: '- Antibiotiques',
        clinique: '- Signes de danger',
        paraclinique: '',
      },
      {
        nom: 'Maladie hémorragique du nouveau-né',
        description: 'Absence de vitamine K.',
        traitement: '- Vitamine K, transfusion',
        clinique: '- Saignements',
        paraclinique: '- TP',
      },
    ],
    evolution: '## Bénéfices\n- Ces mesures simples réduisent fortement la mortalité néonatale',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'rare'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Paquet de soins essentiels, vaccins, conseils, signes de danger',
        '- Signe de danger, faible poids',
      ],
      hgr: ['- Soins spécialisés', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence':
        'Nouveau-né qui ne tète pas, convulse, respire vite ou a une température anormale',
    },
    formes: [
      {
        nom: 'Nouveau-né à terme en bonne santé',
        type: 'commune',
        description: 'Soins de routine.',
        terrain: '- Naissance à terme',
        fonctionnels: '- Tète bien',
        generaux: '- Température normale',
        physiques: '- Examen normal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
