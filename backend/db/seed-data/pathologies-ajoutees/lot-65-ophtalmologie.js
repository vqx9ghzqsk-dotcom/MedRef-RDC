'use strict';

/**
 * Lot 65 (phase 2, ophtalmologie) — kératite et ulcère de cornée, uvéites, rétinopathies diabétique et
 * hypertensive. Rédigé par IA (OMS, ADA, ESC, Guide clinique et thérapeutique) : à valider.
 */

const OPH = { departement: 'chirurgie', specialite: 'Ophtalmologie' };

module.exports = [
  // =================================================================== Kératite et ulcère de cornée
  {
    ...OPH,
    slug: 'keratite-ulcere-de-cornee',
    nom: 'Kératite et ulcère de cornée',
    resume:
      'Inflammation et ulcération de la cornée, urgence ophtalmologique fréquente en RDC (traumatisme végétal chez l’agriculteur, corps étranger, lentilles, carence en vitamine A, rougeole, herpès, traitements traditionnels) : œil rouge douloureux, photophobie, larmoiement, baisse de vision, cercle périkératique, tache blanche cornéenne, ulcération visible à la fluorescéine, hypopion ; bactérienne, fongique (après traumatisme végétal, aspect duveteux, lésions satellites), herpétique (ulcère dendritique), amibienne ; jamais de corticoïde local sans diagnostic ; collyres antibiotiques fortifiés fréquents, natamycine pour les champignons, aciclovir pour l’herpès, cycloplégique ; risque de perforation et de cécité.',
    definition:
      'Atteinte inflammatoire de la cornée (kératite), avec perte de substance épithéliale et stromale (ulcère) d’origine infectieuse, traumatique, carentielle ou d’exposition.',
    physiopathologie:
      '## Facteurs\n- **Traumatisme** (végétal, corps étranger), **lentilles de contact**, **produits traditionnels** instillés dans l’œil\n- **Carence en vitamine A**, **rougeole**, malnutrition (enfant : kératomalacie)\n- Exposition (paralysie faciale, coma), sécheresse, diabète, VIH, corticoïdes locaux\n\n## Germes\n- **Bactéries** : staphylocoque, pneumocoque, **Pseudomonas**, gonocoque (nouveau-né)\n- **Champignons** : Fusarium, Aspergillus (traumatisme végétal, climat chaud)\n- **Herpès simplex**, **zona** ophtalmique, Acanthamoeba',
    diagnostic:
      '## Clinique\n- **Œil rouge douloureux**, **photophobie**, larmoiement, **baisse de l’acuité visuelle**\n- **Cercle périkératique**, opacité ou infiltrat blanc cornéen, **hypopion** (pus dans la chambre antérieure)\n- **Test à la fluorescéine** : ulcération ; dendrite (herpès)\n- Fongique : infiltrat sec, duveteux, lésions satellites, après blessure végétale\n- **Signes de gravité** : ulcère > 2 mm ou central, hypopion, amincissement, perforation, monophtalme\n\n## Examens\n- Acuité visuelle, fluorescéine, lampe à fente\n- **Grattage cornéen** (Gram, KOH, culture) si ulcère important ; glycémie, test VIH',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['confirmation', 'test-fluoresceine', 'Ulcération, dendrite.'],
      ['etiologique', 'prelevement-oculaire', 'Grattage : Gram, KOH, culture.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'tdr-vih', 'Immunodépression.'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivites-adulte', 'Œil rouge sans baisse de vision, cornée claire.'],
      ['glaucome', 'Glaucome aigu : pupille en semi-mydriase, œil dur.'],
      ['uveites', 'Cornée claire, Tyndall.'],
      ['trachome', 'Trichiasis, opacités cornéennes cicatricielles.'],
      ['carence-en-vitamine-a', 'Xérophtalmie, kératomalacie de l’enfant.'],
    ],
    etiologies:
      '## Causes\n- Bactéries, champignons, herpès, zona, Acanthamoeba, carence en vitamine A, exposition, traumatismes',
    principes: [
      [
        'Mesures urgentes',
        'Ne pas nuire.',
        '- **Jamais de corticoïde local** sans avis spécialisé, arrêt des produits traditionnels et des lentilles\n- Retrait d’un corps étranger superficiel\n- Référer en urgence les formes graves',
      ],
      [
        'Traitement selon la cause',
        'Collyres fréquents.',
        '- **Bactérienne** : **moxifloxacine** ou ofloxacine collyre toutes les heures, ou collyres fortifiés (céfazoline + gentamicine) ; gonocoque : ceftriaxone IM\n- **Fongique** : **natamycine 5 %** toutes les heures, plusieurs semaines\n- **Herpétique** : **aciclovir** pommade ophtalmique ou oral (ou valaciclovir)\n- **Cycloplégique** (atropine) contre la douleur et les synéchies, antalgiques',
      ],
      [
        'Prévention',
        'Éviter la cécité.',
        '- **Vitamine A** (rougeole, malnutrition), protection oculaire au travail agricole, hygiène des lentilles\n- Protection de la cornée chez le patient comateux ou en paralysie faciale',
      ],
    ],
    molecules: [
      ['moxifloxacine-collyre', 'premiere', 'Kératite bactérienne'],
      ['ofloxacine', 'alternative', 'Collyre'],
      ['tobramycine-ophtalmique', 'alternative', 'Kératite bactérienne'],
      ['natamycine', 'premiere', 'Kératite fongique'],
      ['aciclovir', 'premiere', 'Kératite herpétique'],
      ['valaciclovir', 'alternative', 'Herpès, zona ophtalmique'],
      ['atropine', 'adjuvant', 'Cycloplégie'],
      ['ceftriaxone', 'premiere', 'Gonocoque'],
      ['vitamine-a-retinol', 'premiere', 'Carence, rougeole'],
    ],
    complications: [
      {
        nom: 'Perforation cornéenne',
        description: 'Ulcère profond.',
        traitement: '- Chirurgie (colle, greffe, recouvrement)',
        clinique: '- Hypotonie, iris hernié',
        paraclinique: '',
      },
      {
        nom: 'Endophtalmie',
        description: 'Extension intraoculaire.',
        traitement: '- Antibiotiques intravitréens',
        clinique: '- Douleur, perte de vision',
        paraclinique: '',
      },
      {
        nom: 'Taie cornéenne et cécité',
        description: 'Cicatrice.',
        traitement: '- Greffe de cornée',
        clinique: '- Opacité blanche',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon si traitement précoce ; cause majeure de cécité monoculaire en Afrique',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'tres_frequent'],
      ['Douleur oculaire', 'tres_frequent'],
      ['Photophobie', 'frequent'],
      ['Troubles visuels', 'frequent'],
    ],
    sources: ['Guide clinique et thérapeutique', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Fluorescéine, arrêt des produits traditionnels, collyre antibiotique, vitamine A',
        '- Ulcère, hypopion, baisse de vision',
      ],
      hgr: ['- Grattage, collyres fréquents', ''],
      tert: ['- Ophtalmologie : chirurgie, greffe', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Kératite bactérienne',
        type: 'commune',
        description: 'Infiltrat blanc.',
        terrain: '- Traumatisme, lentilles',
        fonctionnels: '- Douleur, photophobie',
        generaux: '',
        physiques: '- Ulcère, hypopion',
        paraclinique: '- Gram, culture',
        etiologies: '- Staphylocoque, Pseudomonas',
        syndromes: [],
      },
      {
        nom: 'Kératite fongique',
        type: 'etiologique',
        description: 'Traumatisme végétal.',
        terrain: '- Agriculteur',
        fonctionnels: '',
        generaux: '',
        physiques: '- Infiltrat duveteux, lésions satellites',
        paraclinique: '- KOH',
        etiologies: '- Fusarium, Aspergillus',
        syndromes: [],
      },
      {
        nom: 'Kératite herpétique',
        type: 'etiologique',
        description: 'Récidivante.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Ulcère dendritique',
        paraclinique: '- Fluorescéine',
        etiologies: '- Herpès simplex',
        syndromes: [],
      },
      {
        nom: 'Kératomalacie de l’enfant',
        type: 'terrain',
        description: 'Carence en vitamine A.',
        terrain: '- Rougeole, malnutrition',
        fonctionnels: '',
        generaux: '- Malnutrition',
        physiques: '- Fonte cornéenne bilatérale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Uvéites
  {
    ...OPH,
    slug: 'uveites',
    nom: 'Uvéites',
    resume:
      'Inflammation de l’uvée (iris, corps ciliaire, choroïde) : uvéite antérieure (œil rouge douloureux, photophobie, cercle périkératique, pupille en myosis, Tyndall de chambre antérieure, précipités) ou postérieure (baisse de vision, myodésopsies, foyers de choroïdite) ; causes : toxoplasmose (cause majeure d’uvéite postérieure), tuberculose, syphilis, VIH (CMV), zona, onchocercose, lèpre, spondylarthrites, sarcoïdose, Behçet ; examen à la lampe à fente et fond d’œil ; collyre corticoïde et cycloplégique pour l’uvéite antérieure (après avoir éliminé une kératite), traitement de la cause.',
    definition:
      'Inflammation de la tunique vasculaire de l’œil, classée en antérieure, intermédiaire, postérieure ou totale (panuvéite).',
    physiopathologie:
      '## Causes infectieuses\n- **Toxoplasmose** (rétinochoroïdite), **tuberculose**, **syphilis**, **VIH** (rétinite à CMV), **zona** ophtalmique, herpès, **onchocercose**, **lèpre**, toxocarose\n\n## Causes non infectieuses\n- **Spondylarthrites** (HLA-B27), arthrite juvénile, sarcoïdose, Behçet, traumatisme\n- Idiopathiques (fréquentes)',
    diagnostic:
      '## Antérieure\n- **Œil rouge douloureux**, **photophobie**, larmoiement, baisse de vision modérée\n- **Cercle périkératique**, **myosis**, **Tyndall** et précipités rétrocornéens, synéchies, hypopion\n\n## Postérieure\n- **Baisse de vision**, **myodésopsies** (corps flottants), œil blanc et indolore\n- Fond d’œil : hyalite, foyers de choroïdite (toxoplasmose : foyer actif près d’une cicatrice pigmentée)\n\n## Bilan\n- **Sérologies** (syphilis, VIH, toxoplasmose), radiographie thoracique et IDR (tuberculose), recherche de microfilaires, radiographie du bassin (sacro-iliite), NFS, VS',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['confirmation', 'fond-d-oeil', 'Choroïdite, rétinite.'],
      ['premiere_intention', 'tonometrie', 'Hypertonie.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'serologies-torch', 'Toxoplasmose.'],
      ['etiologique', 'radiographie-thoracique', 'Tuberculose, sarcoïdose.'],
      ['etiologique', 'idr-tuberculine', 'Tuberculose.'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivites-adulte', 'Œil rouge sans baisse de vision ni myosis.'],
      ['keratite-ulcere-de-cornee', 'Ulcère prenant la fluorescéine.'],
      ['glaucome', 'Glaucome aigu : semi-mydriase, tension élevée.'],
      ['retinopathies-diabetique-et-hypertensive', 'Baisse de vision sans inflammation.'],
    ],
    etiologies:
      '## Causes\n- Toxoplasmose, tuberculose, syphilis, VIH, zona, onchocercose, lèpre, spondylarthrites, Behçet, sarcoïdose',
    principes: [
      [
        'Uvéite antérieure',
        'Calmer l’inflammation.',
        '- Éliminer une **kératite** (fluorescéine) avant tout corticoïde\n- **Collyre corticoïde** (dexaméthasone, prednisolone) en décroissance\n- **Cycloplégique** (atropine ou cyclopentolate) : douleur, prévention des synéchies\n- Surveillance de la tension oculaire',
      ],
      [
        'Uvéite postérieure',
        'Traiter la cause.',
        '- **Toxoplasmose** : **pyriméthamine** + sulfadiazine + acide folinique (ou cotrimoxazole) ± corticoïde oral\n- **Tuberculose** : antituberculeux ; **syphilis** : pénicilline G IV (neurosyphilis)\n- **CMV** (VIH) : ganciclovir, antirétroviraux\n- Avis ophtalmologique',
      ],
      [
        'Suivi',
        'Prévenir les séquelles.',
        '- Surveillance (cataracte, glaucome cortisonique), traitement de la maladie systémique',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Collyre (uvéite antérieure)'],
      ['prednisolone', 'alternative', 'Collyre ou voie orale'],
      ['atropine', 'premiere', 'Cycloplégie'],
      ['cyclopentolate', 'alternative', 'Cycloplégie'],
      ['pyrimethamine', 'premiere', 'Toxoplasmose oculaire'],
      ['sulfadiazine', 'premiere', 'Toxoplasmose oculaire'],
      ['cotrimoxazole', 'alternative', 'Toxoplasmose oculaire'],
      ['acetazolamide', 'adjuvant', 'Hypertonie oculaire'],
    ],
    complications: [
      {
        nom: 'Glaucome',
        fiche: 'glaucome',
        description: 'Synéchies, corticoïdes.',
        traitement: '- Hypotonisants',
        clinique: '- Douleur, baisse de vision',
        paraclinique: '- Tonométrie',
      },
      {
        nom: 'Cataracte',
        fiche: 'cataracte',
        description: 'Inflammation chronique, corticoïdes.',
        traitement: '- Chirurgie',
        clinique: '- Baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Œdème maculaire et cécité',
        description: 'Uvéite postérieure.',
        traitement: '- Corticoïdes',
        clinique: '- Baisse de vision',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour les uvéites antérieures traitées ; séquelles visuelles des uvéites postérieures et récidivantes',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Photophobie', 'frequent'],
      ['Troubles visuels', 'tres_frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Œil rouge douloureux avec baisse de vision : référer', ''],
      hgr: ['- Bilan étiologique, traitement de la cause', ''],
      tert: ['- Ophtalmologie : lampe à fente, fond d’œil', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Uvéite antérieure aiguë',
        type: 'commune',
        description: 'Iridocyclite.',
        terrain: '- Adulte jeune, spondylarthrite',
        fonctionnels: '- Douleur, photophobie',
        generaux: '',
        physiques: '- Cercle périkératique, myosis',
        paraclinique: '- Tyndall',
        etiologies: '- HLA-B27, zona',
        syndromes: [],
      },
      {
        nom: 'Rétinochoroïdite toxoplasmique',
        type: 'etiologique',
        description: 'Uvéite postérieure.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Baisse de vision, corps flottants',
        generaux: '',
        physiques: '- Foyer près d’une cicatrice',
        paraclinique: '- Fond d’œil',
        etiologies: '- Toxoplasma gondii',
        syndromes: [],
      },
      {
        nom: 'Rétinite à CMV',
        type: 'terrain',
        description: 'VIH avancé.',
        terrain: '- CD4 < 50',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '- Rétinite hémorragique',
        paraclinique: '- Fond d’œil',
        etiologies: '- CMV',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Rétinopathies diabétique et hypertensive
  {
    ...OPH,
    slug: 'retinopathies-diabetique-et-hypertensive',
    nom: 'Rétinopathies diabétique et hypertensive',
    resume:
      'Atteintes de la rétine par le diabète et l’hypertension, première cause de cécité évitable de l’adulte actif : longtemps asymptomatiques, d’où le dépistage par fond d’œil (au diagnostic du diabète de type 2 puis chaque année) ; rétinopathie diabétique non proliférante (microanévrismes, hémorragies, exsudats), proliférante (néovaisseaux : hémorragie du vitré, décollement de rétine, glaucome néovasculaire) et œdème maculaire ; rétinopathie hypertensive (rétrécissement artériel, hémorragies en flammèche, nodules cotonneux, œdème papillaire de l’HTA maligne) ; équilibre glycémique et tensionnel, statines, photocoagulation laser et anti-VEGF en centre spécialisé.',
    definition:
      'Microangiopathie rétinienne liée au diabète (rétinopathie diabétique) ou à l’hypertension artérielle (rétinopathie hypertensive), pouvant conduire à la perte de vision.',
    physiopathologie:
      '## Diabétique\n- Hyperglycémie chronique → épaississement des capillaires, **microanévrismes**, fuites (**exsudats**, **œdème maculaire**), occlusions → ischémie → **néovaisseaux** (VEGF)\n- Facteurs d’aggravation : mauvais équilibre glycémique, **HTA**, dyslipidémie, ancienneté, grossesse, néphropathie\n\n## Hypertensive\n- Vasoconstriction artériolaire, **croisements artério-veineux**, rupture de la barrière (hémorragies, nodules cotonneux), **œdème papillaire** (HTA maligne)',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique** ; baisse de vision (œdème maculaire), voile brutal (hémorragie du vitré), flou visuel\n\n## Fond d’œil\n- **Diabétique** : non proliférante (microanévrismes, hémorragies, exsudats, nodules) → proliférante (néovaisseaux, hémorragie du vitré, décollement de rétine) ; œdème maculaire\n- **Hypertensive** : rétrécissement artériel, croisements, hémorragies en flammèche, nodules cotonneux, **œdème papillaire** (stade sévère)\n\n## Dépistage\n- Diabète de type 2 : **au diagnostic** puis annuel ; type 1 : 5 ans après le diagnostic ; grossesse\n- Bilan associé : **HbA1c**, tension, créatinine, protéinurie, lipides',
    examens: [
      ['confirmation', 'fond-d-oeil', 'Stade de la rétinopathie.'],
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['premiere_intention', 'hba1c', 'Équilibre glycémique.'],
      ['gravite', 'creatinine', 'Néphropathie associée.'],
      ['gravite', 'proteinurie', 'Néphropathie.'],
      ['premiere_intention', 'bilan-lipidique', 'Dyslipidémie.'],
      ['premiere_intention', 'tonometrie', 'Glaucome néovasculaire.'],
    ],
    scores: [],
    differentiels: [
      ['cataracte', 'Baisse de vision progressive avec fond d’œil normal.'],
      ['glaucome', 'Atteinte du champ visuel, excavation papillaire.'],
      ['uveites', 'Inflammation, hyalite.'],
      ['drepanocytose', 'Rétinopathie drépanocytaire.'],
    ],
    etiologies: '## Causes\n- Diabète mal équilibré, HTA, dyslipidémie, néphropathie, grossesse',
    principes: [
      [
        'Contrôle des facteurs',
        'Base.',
        '- **Équilibre glycémique** (HbA1c < 7 %, baisse progressive), **tension** < 130/80 (IEC), **statine**, arrêt du tabac\n- HTA maligne : baisse tensionnelle progressive (urgence hypertensive)',
      ],
      [
        'Traitement ophtalmologique',
        'Centre spécialisé.',
        '- **Photocoagulation panrétinienne au laser** (rétinopathie proliférante)\n- **Anti-VEGF** intravitréens ou laser (œdème maculaire)\n- **Vitrectomie** (hémorragie du vitré persistante, décollement de rétine)',
      ],
      [
        'Dépistage',
        'Prévenir la cécité.',
        '- Fond d’œil annuel (ou rétinographie) de tout diabétique, intégré au suivi en centre de santé\n- Surveillance rapprochée pendant la grossesse',
      ],
    ],
    molecules: [
      ['metformine', 'premiere', 'Équilibre glycémique'],
      ['insuline-nph', 'alternative', 'Équilibre glycémique'],
      ['enalapril', 'premiere', 'HTA, néphroprotection'],
      ['amlodipine', 'alternative', 'HTA'],
      ['atorvastatine', 'adjuvant', 'Dyslipidémie'],
    ],
    complications: [
      {
        nom: 'Hémorragie du vitré',
        description: 'Néovaisseaux.',
        traitement: '- Laser, vitrectomie',
        clinique: '- Voile brutal',
        paraclinique: '- Échographie oculaire',
      },
      {
        nom: 'Décollement de rétine',
        description: 'Traction.',
        traitement: '- Chirurgie',
        clinique: '- Amputation du champ visuel',
        paraclinique: '',
      },
      {
        nom: 'Glaucome néovasculaire',
        fiche: 'glaucome',
        description: 'Ischémie.',
        traitement: '- Laser, hypotonisants',
        clinique: '- Œil rouge douloureux',
        paraclinique: '- Tonométrie',
      },
      {
        nom: 'Urgence hypertensive',
        fiche: 'hypertension-arterielle',
        description: 'Œdème papillaire.',
        traitement: '- Antihypertenseurs',
        clinique: '- Céphalées, troubles visuels',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évitable par le dépistage et l’équilibre glycémique et tensionnel ; cécité définitive aux stades tardifs',
    urgences: ['urgence-hypertensive'],
    symptomes: [
      ['Troubles visuels', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'ESC — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Équilibre glycémique et tensionnel, orientation pour fond d’œil annuel', ''],
      hgr: ['- Fond d’œil', ''],
      tert: ['- Laser, anti-VEGF, vitrectomie', ''],
    },
    alertes: { 'urgence-hypertensive': 'HTA sévère avec œdème papillaire, céphalées, troubles visuels' },
    formes: [
      {
        nom: 'Rétinopathie diabétique non proliférante',
        type: 'commune',
        description: 'Asymptomatique.',
        terrain: '- Diabétique',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Microanévrismes, exsudats',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rétinopathie diabétique proliférante',
        type: 'gravite',
        description: 'Néovaisseaux.',
        terrain: '- Diabète ancien mal équilibré',
        fonctionnels: '- Baisse de vision brutale',
        generaux: '',
        physiques: '',
        paraclinique: '- Néovaisseaux, hémorragie du vitré',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rétinopathie hypertensive maligne',
        type: 'etiologique',
        description: 'HTA maligne.',
        terrain: '- HTA sévère',
        fonctionnels: '- Céphalées, troubles visuels',
        generaux: '',
        physiques: '',
        paraclinique: '- Œdème papillaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
