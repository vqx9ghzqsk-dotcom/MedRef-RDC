'use strict';

/**
 * Lot 15 (néphrologie et endocrinologie pédiatriques) — syndrome néphrotique de l'enfant,
 * glomérulonéphrite aiguë post-streptococcique, infection urinaire de l'enfant, diabète de
 * type 1 de l'enfant, acidocétose diabétique de l'enfant.
 * Rédigé par IA (KDIGO, IPNA, ISPAD, OMS, AAP) : à valider.
 */

const NEPHROPED = { departement: 'pediatrie', specialite: 'Néphrologie pédiatrique' };
const ENDOPED = { departement: 'pediatrie', specialite: 'Endocrinologie pédiatrique' };

module.exports = [
  // =================================================================== SN enfant
  {
    ...NEPHROPED,
    slug: 'syndrome-nephrotique-enfant',
    nom: 'Syndrome néphrotique de l’enfant',
    resume:
      'Œdèmes, protéinurie massive et hypoalbuminémie ; chez l’enfant de 1 à 10 ans, le plus souvent corticosensible (lésions glomérulaires minimes) : prednisolone 60 mg/m²/j 4 semaines puis 40 mg/m² 1 jour sur 2 ; en Afrique, formes corticorésistantes plus fréquentes.',
    definition:
      'Protéinurie ≥ 40 mg/m²/h (ou rapport protéine/créatinine ≥ 2 g/g, bandelette ≥ 3+) avec albuminémie < 25–30 g/L, habituellement accompagnée d’œdèmes.',
    physiopathologie:
      '## Mécanismes\n- Atteinte de la barrière glomérulaire (podocytopathie)\n- Fuite d’albumine, rétention sodée, œdèmes\n- Risques : infections (péritonite à pneumocoque), thromboses, hypovolémie',
    diagnostic:
      '## Clinique\n- **Œdèmes** des paupières le matin puis déclives, ascite, épanchements, prise de poids\n- Urines mousseuses\n- Pur (forme idiopathique typique) : sans HTA, hématurie macroscopique ni insuffisance rénale\n\n## Biologie\n- Bandelette ≥ 3+, protéinurie, albuminémie basse, cholestérol élevé\n- Créatinine, C3 (glomérulonéphrite), sérologies (VIH, hépatite B, syphilis), paludisme à P. malariae\n- Biopsie rénale si âge < 1 an ou > 10–12 ans, forme impure ou corticorésistance',
    examens: [
      ['confirmation', 'proteinurie', 'Protéinurie néphrotique.'],
      ['confirmation', 'bilan-hepatique', 'Albuminémie basse.'],
      ['premiere_intention', 'bandelette-urinaire', '≥ 3+, hématurie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'bilan-lipidique', 'Hypercholestérolémie.'],
      ['etiologique', 'tdr-vih', 'Néphropathie du VIH.'],
      ['etiologique', 'marqueurs-vhb', 'Hépatite B.'],
      ['etiologique', 'goutte-epaisse', 'P. malariae.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Biopsie rénale si corticorésistance ou forme atypique.'],
    ],
    scores: [],
    differentiels: [
      ['kwashiorkor', 'Œdèmes nutritionnels sans protéinurie massive, dermatose.'],
      ['glomerulonephrite-aigue-post-streptococcique', 'Hématurie, HTA, oligurie, protéinurie modérée.'],
      ['insuffisance-cardiaque-enfant', 'Hépatomégalie, cardiomégalie, pas de protéinurie massive.'],
    ],
    etiologies:
      '## Causes\n- Idiopathique : lésions glomérulaires minimes (corticosensible), hyalinose segmentaire et focale (plus fréquente en Afrique, souvent corticorésistante)\n- Secondaires : hépatite B, VIH, paludisme à P. malariae, schistosomiase, syphilis congénitale (nourrisson)',
    principes: [
      [
        'Corticothérapie',
        'Obtenir la rémission.',
        '- **Prednisolone** 60 mg/m²/j (2 mg/kg/j, maximum 60 mg) pendant 4 semaines, puis 40 mg/m² (1,5 mg/kg) **un jour sur deux** pendant 4 semaines (8 à 12 semaines au total)\n- Rémission : bandelette négative ou traces 3 jours de suite\n- Corticorésistance (pas de rémission après 4 à 6 semaines) : biopsie, avis spécialisé (IEC, anticalcineurines)',
      ],
      [
        'Traitement symptomatique',
        'Réduire les complications.',
        '- Régime peu salé, apports protéiques normaux\n- Diurétiques avec prudence (**furosémide**, spironolactone) ; perfusion d’albumine si œdèmes massifs symptomatiques\n- Traitement de toute infection (amoxicilline, ceftriaxone si péritonite)\n- Déparasitage (**albendazole** ou **ivermectine**) avant les corticoïdes',
      ],
      [
        'Suivi et prévention',
        'Éviter rechutes et complications.',
        '- Bandelette à domicile, consultation à chaque rechute (fréquentes)\n- Vaccinations (pneumocoque), dépistage de la tuberculose',
      ],
    ],
    molecules: [
      ['prednisolone', 'premiere', '60 mg/m²/j puis 1 jour sur 2'],
      ['furosemide', 'adjuvant', 'Œdèmes'],
      ['spironolactone', 'adjuvant', 'Œdèmes'],
      ['albumine-humaine', 'adjuvant', 'Œdèmes massifs'],
      ['enalapril', 'deuxieme', 'Corticorésistance'],
      ['albendazole', 'adjuvant', 'Déparasitage avant corticoïdes'],
      ['amoxicilline', 'adjuvant', 'Infections'],
    ],
    complications: [
      {
        nom: 'Péritonite à pneumocoque',
        description: 'Fièvre et douleurs abdominales.',
        traitement: '- Ceftriaxone',
        clinique: '- Douleur abdominale, fièvre',
        paraclinique: '- Ponction d’ascite',
      },
      {
        nom: 'Thromboses',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Hypercoagulabilité.',
        traitement: '- Anticoagulation',
        clinique: '- Œdème d’un membre, hématurie',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Hypovolémie et insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Diurétiques, diarrhée.',
        traitement: '- Albumine, arrêt des diurétiques',
        clinique: '- Douleurs abdominales, extrémités froides',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Effets des corticoïdes',
        description: 'Cures répétées.',
        traitement: '- Épargne cortisonique',
        clinique: '- Retard de croissance, HTA',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Forme corticosensible : rechutes fréquentes mais bon pronostic rénal ; forme corticorésistante : risque d’insuffisance rénale',
    urgences: [],
    symptomes: [
      ['Œdèmes', 'tres_frequent'],
      ['Distension abdominale', 'frequent'],
      ['Oligurie', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'KDIGO — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Bandelette devant des œdèmes, transfert', '- Tout syndrome néphrotique'],
      hgr: ['- Prednisolone, suivi des rechutes', '- Corticorésistance, forme impure'],
      tert: ['- Néphrologie pédiatrique, biopsie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syndrome néphrotique idiopathique corticosensible',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Garçon de 2 à 8 ans',
        fonctionnels: '- Gonflement des paupières, prise de poids',
        generaux: '',
        physiques: '- Œdèmes blancs, mous',
        paraclinique: '- Protéinurie massive, albumine basse',
        etiologies: '- Lésions glomérulaires minimes',
        syndromes: ['syndrome-oedemateux'],
        examens: [['proteinurie', 'Diagnostic']],
      },
      {
        nom: 'Syndrome néphrotique corticorésistant',
        type: 'gravite',
        description: 'Absence de rémission sous corticoïdes.',
        terrain: '- Enfant plus âgé, hyalinose segmentaire',
        fonctionnels: '- Œdèmes persistants',
        generaux: '',
        physiques: '- HTA',
        paraclinique: '- Hématurie, créatinine en hausse',
        etiologies: '',
        syndromes: ['syndrome-oedemateux', 'syndrome-uremique'],
      },
    ],
  },

  // =================================================================== GNA
  {
    ...NEPHROPED,
    slug: 'glomerulonephrite-aigue-post-streptococcique',
    nom: 'Glomérulonéphrite aiguë post-streptococcique',
    resume:
      'Syndrome néphritique 1 à 3 semaines après une angine ou une pyodermite streptococcique : œdèmes, urines « coca », HTA, oligurie ; restriction hydrosodée, furosémide, antihypertenseurs, pénicilline ; guérison habituelle.',
    definition:
      'Glomérulonéphrite à complexes immuns survenant après une infection à streptocoque A (pharyngée ou cutanée), réalisant un syndrome néphritique aigu chez l’enfant de 5 à 12 ans.',
    physiopathologie:
      '## Mécanismes\n- Dépôts de complexes immuns dans les glomérules, consommation du complément (C3 bas)\n- Baisse de la filtration : rétention hydrosodée, HTA, œdèmes, oligurie',
    diagnostic:
      '## Clinique\n- Antécédent d’angine (1–2 semaines) ou d’impétigo (3–6 semaines)\n- **Hématurie macroscopique** (urines « coca » ou « thé »), **œdèmes** du visage\n- **HTA**, oligurie\n- Complications : encéphalopathie hypertensive (céphalées, convulsions), OAP\n\n## Biologie\n- Hématurie, protéinurie modérée, créatinine élevée\n- **C3 bas** (normalisation en 6–8 semaines), ASLO élevés',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie.'],
      ['confirmation', 'aslo', 'Preuve streptococcique.'],
      ['premiere_intention', 'proteinurie', 'Quantification.'],
      ['gravite', 'radiographie-thoracique', 'Surcharge, OAP.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-nephrotique-enfant', 'Œdèmes massifs, protéinurie massive, pas d’hématurie macroscopique.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale sans HTA.'],
      ['Néphropathie à IgA, lupus', 'C3 normal ou évolution prolongée.'],
      ['Syndrome hémolytique et urémique', 'Diarrhée sanglante, anémie, thrombopénie.'],
    ],
    etiologies:
      '## Cause\n- Streptocoque A néphritogène (angine, impétigo, gale surinfectée)\n\n## Facteurs\n- Promiscuité, pyodermites, gale',
    principes: [
      [
        'Restriction et diurétiques',
        'Corriger la surcharge.',
        '- **Restriction hydrique** (pertes insensibles + diurèse) et **sodée**\n- **Furosémide** 1–2 mg/kg\n- Repos',
      ],
      [
        'Hypertension',
        'Prévenir l’encéphalopathie.',
        '- **Nifédipine** ou **amlodipine** ; hydralazine IV si urgence\n- Convulsions : diazépam',
      ],
      [
        'Antibiotique',
        'Éradiquer le streptocoque.',
        '- **Benzathine benzylpénicilline** dose unique ou **amoxicilline** 10 jours\n- Traitement de la gale et des pyodermites',
      ],
      [
        'Surveillance',
        'Repérer les complications.',
        '- Poids, diurèse, PA quotidiens, créatinine, kaliémie\n- Dialyse si anurie, hyperkaliémie ou surcharge réfractaires',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Surcharge'],
      ['nifedipine', 'premiere', 'HTA'],
      ['amlodipine', 'alternative', 'HTA'],
      ['hydralazine', 'alternative', 'Urgence hypertensive'],
      ['benzathine-benzylpenicilline', 'premiere', 'Éradication'],
      ['amoxicilline', 'alternative', 'Éradication'],
      ['diazepam', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Encéphalopathie hypertensive',
        fiche: 'urgences-hypertensives',
        description: 'HTA sévère.',
        traitement: '- Antihypertenseurs, diazépam',
        clinique: '- Céphalées, convulsions, troubles visuels',
        paraclinique: '',
      },
      {
        nom: 'Œdème aigu du poumon',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Surcharge.',
        traitement: '- Furosémide, oxygène',
        clinique: '- Dyspnée, crépitants',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Formes sévères.',
        traitement: '- Dialyse si besoin',
        clinique: '- Anurie',
        paraclinique: '- Créatinine, kaliémie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans plus de 95 % des cas chez l’enfant ; hématurie microscopique possible plusieurs mois',
    urgences: ['urgence-hypertensive', 'oedeme-aigu-du-poumon'],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Œdèmes', 'tres_frequent'],
      ['Oligurie', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      'KDIGO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Bandelette devant des œdèmes ou urines foncées, mesure de la PA, transfert',
        '- Toute suspicion',
      ],
      hgr: ['- Restriction, furosémide, antihypertenseurs, pénicilline', '- Insuffisance rénale sévère'],
      tert: ['- Dialyse pédiatrique', ''],
    },
    alertes: {
      'urgence-hypertensive':
        'Enfant avec urines « coca », œdèmes et céphalées, troubles visuels ou convulsions',
      'oedeme-aigu-du-poumon': 'Enfant néphritique avec dyspnée et crépitants',
    },
    formes: [
      {
        nom: 'Syndrome néphritique aigu',
        type: 'commune',
        description: 'Hématurie, œdèmes, HTA.',
        terrain: '- Enfant de 5 à 12 ans, angine ou impétigo récents',
        fonctionnels: '- Urines foncées, gonflement du visage',
        generaux: '',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- Hématurie, C3 bas, ASLO élevés',
        etiologies: '- Streptocoque A',
        syndromes: ['syndrome-de-retention-hydrosodee'],
        examens: [['bandelette-urinaire', 'Hématurie']],
      },
      {
        nom: 'Forme compliquée',
        type: 'gravite',
        description: 'Encéphalopathie ou OAP.',
        terrain: '- HTA sévère, surcharge',
        fonctionnels: '- Céphalées, dyspnée',
        generaux: '',
        physiques: '- Convulsions, crépitants',
        paraclinique: '- Créatinine élevée',
        etiologies: '',
        syndromes: ['syndrome-convulsif', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },

  // =================================================================== IU enfant
  {
    ...NEPHROPED,
    slug: 'infection-urinaire-enfant',
    nom: 'Infection urinaire de l’enfant',
    resume:
      'Fièvre sans foyer du nourrisson, brûlures et pleurs mictionnels chez l’enfant : bandelette puis ECBU ; pyélonéphrite = céfixime ou ceftriaxone 7–10 jours ; échographie rénale pour rechercher une malformation.',
    definition:
      'Infection bactérienne des voies urinaires : cystite (enfant > 2 ans, sans fièvre) ou pyélonéphrite aiguë (infection fébrile du rein), fréquente chez le nourrisson et révélatrice de malformations.',
    physiopathologie:
      '## Mécanismes\n- Voie ascendante (E. coli) ; voie hématogène chez le nouveau-né\n- Facteurs : reflux vésico-urétéral, uropathies obstructives, phimosis, constipation, mauvaise hygiène\n- Risque de cicatrices rénales et d’HTA en cas de pyélonéphrites répétées',
    diagnostic:
      '## Clinique\n- Nourrisson : **fièvre isolée**, vomissements, refus de téter, irritabilité, cassure pondérale\n- Enfant : brûlures mictionnelles, pollakiurie, fuites urinaires, douleurs abdominales ou lombaires\n\n## Diagnostic\n- **Bandelette** (leucocytes, nitrites) : n’affirme pas l’infection chez le nourrisson\n- **ECBU** sur prélèvement propre (milieu de jet, sondage ou ponction sus-pubienne chez le nourrisson ; poche en dernier recours)\n- Leucocyturie ≥ 10⁴/mL et bactériurie ≥ 10⁵ UFC/mL (≥ 10³–10⁴ par sondage)',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Leucocytes, nitrites.'],
      ['confirmation', 'ecbu', 'Germe, antibiogramme.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['gravite', 'hemocultures', 'Nourrisson < 3 mois, sepsis.'],
      ['premiere_intention', 'creatinine', 'Pyélonéphrite.'],
      ['suivi', 'echographie-renale', 'Malformation, obstacle, après une première pyélonéphrite.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['fievre-enfant-pcime', 'Autre cause de fièvre.'],
      ['paludisme-simple-enfant', 'TDR positif.'],
      ['Vulvite, balanite, oxyurose', 'Brûlures sans bactériurie.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale.'],
    ],
    etiologies:
      '## Germes\n- *Escherichia coli* (80 %), *Proteus* (garçon), *Klebsiella*, entérocoque\n\n## Facteurs\n- Malformations urinaires, reflux, phimosis serré, constipation, vessie neurologique',
    principes: [
      [
        'Pyélonéphrite',
        'Prévenir les cicatrices rénales.',
        '- Nourrisson < 3 mois ou état grave : hospitalisation, **ceftriaxone** 50–75 mg/kg/j IV (ou ampicilline + gentamicine)\n- Enfant > 3 mois sans gravité : **céfixime** 8 mg/kg/j per os\n- Durée totale 7 à 10 jours ; adaptation à l’antibiogramme',
      ],
      [
        'Cystite',
        'Soulager.',
        '- Enfant > 2 ans : **amoxicilline-acide clavulanique**, céfixime ou **nitrofurantoïne** (> 6 ans) 3 à 5 jours selon l’antibiogramme',
      ],
      [
        'Bilan et prévention',
        'Éviter les récidives.',
        '- Échographie rénale après une première pyélonéphrite du nourrisson\n- Hygiène, boissons, traitement de la constipation, mictions régulières\n- Avis spécialisé si malformation ou récidives',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Pyélonéphrite grave ou nourrisson'],
      ['cefixime', 'premiere', 'Pyélonéphrite orale'],
      ['ampicilline', 'alternative', 'Avec gentamicine'],
      ['gentamicine', 'alternative', 'Avec ampicilline'],
      ['amoxicilline', 'alternative', 'Associée à l’acide clavulanique'],
      ['acide-clavulanique', 'alternative', 'Avec amoxicilline'],
      ['nitrofurantoine', 'alternative', 'Cystite > 6 ans'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Nourrisson.',
        traitement: '- Antibiotiques IV',
        clinique: '- Léthargie, choc',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Cicatrices rénales et HTA',
        fiche: 'maladie-renale-chronique',
        description: 'Pyélonéphrites répétées.',
        traitement: '- Prévention des récidives',
        clinique: '- HTA',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Abcès rénal',
        description: 'Rare.',
        traitement: '- Antibiotiques prolongés, drainage',
        clinique: '- Fièvre persistante',
        paraclinique: '- Échographie',
      },
    ],
    evolution: '## Pronostic\n- Guérison rapide ; récidives fréquentes en cas de malformation',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Refus de téter', 'occasionnel'],
      ['Douleur lombaire', 'occasionnel'],
    ],
    sources: [
      'AAP — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Bandelette devant une fièvre sans foyer, céfixime, transfert du nourrisson < 3 mois',
        '- Nourrisson, état grave, échec',
      ],
      hgr: ['- ECBU, ceftriaxone, échographie', '- Malformation'],
      tert: ['- Néphrologie et urologie pédiatriques', ''],
    },
    alertes: { 'choc-septique': 'Nourrisson fébrile léthargique avec extrémités froides' },
    formes: [
      {
        nom: 'Pyélonéphrite du nourrisson',
        type: 'commune',
        description: 'Fièvre isolée.',
        terrain: '- Nourrisson',
        fonctionnels: '- Pleurs, refus de téter',
        generaux: '- Fièvre élevée',
        physiques: '- Examen pauvre',
        paraclinique: '- ECBU positif',
        etiologies: '- E. coli',
        syndromes: ['syndrome-infectieux'],
        examens: [['ecbu', 'Confirmation']],
      },
      {
        nom: 'Cystite de l’enfant',
        type: 'topographique',
        description: 'Signes urinaires sans fièvre.',
        terrain: '- Fille de plus de 3 ans',
        fonctionnels: '- Brûlures, pollakiurie, fuites',
        generaux: '- Apyrexie',
        physiques: '- Sensibilité sus-pubienne',
        paraclinique: '- Bandelette positive',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== DT1 enfant
  {
    ...ENDOPED,
    slug: 'diabete-type-1-enfant',
    nom: 'Diabète de type 1 de l’enfant',
    resume:
      'Polyurie, soif, amaigrissement, énurésie secondaire, souvent révélé par une acidocétose : insulinothérapie (basal-bolus ou 2 injections de mélange), éducation de la famille, autosurveillance, programme « Changing Diabetes in Children » ou équivalents.',
    definition:
      'Diabète par destruction auto-immune des cellules bêta, forme la plus fréquente chez l’enfant et l’adolescent, nécessitant de l’insuline à vie.',
    physiopathologie:
      '## Mécanismes\n- Destruction auto-immune des cellules bêta\n- Carence absolue en insuline : hyperglycémie, lipolyse, cétose\n- Diagnostic souvent tardif en Afrique (confusion avec paludisme, gastro-entérite, pneumonie)',
    diagnostic:
      '## Clinique\n- **Polyurie, polydipsie**, **énurésie secondaire**, amaigrissement malgré l’appétit, fatigue\n- Candidose génitale\n- Révélation par une **acidocétose** (vomissements, douleurs abdominales, polypnée) dans 30 à 70 % des cas en Afrique\n\n## Confirmation\n- Glycémie ≥ 2 g/L avec symptômes, cétonurie, HbA1c',
    examens: [
      ['confirmation', 'glycemie', '≥ 2 g/L avec symptômes.'],
      ['premiere_intention', 'bandelette-urinaire', 'Glycosurie, cétonurie.'],
      ['suivi', 'hba1c', 'Objectif < 7 % (ISPAD), tous les 3 mois.'],
      ['suivi', 'tsh', 'Thyroïdite associée.'],
      ['suivi', 'microalbuminurie', 'Dès 11 ans ou après 2–5 ans d’évolution.'],
      ['suivi', 'anthropometrie', 'Croissance.'],
    ],
    scores: [],
    differentiels: [
      ['Diabète insipide', 'Polyurie sans glycosurie.'],
      ['Diabète de type 2 de l’adolescent', 'Obésité, acanthosis nigricans.'],
      ['Diabète lié à la malnutrition', 'Malnutrition, résistance à la cétose.'],
      ['infection-urinaire-enfant', 'Pollakiurie sans glycosurie.'],
    ],
    etiologies:
      '## Cause\n- Auto-immunité sur terrain génétique\n\n## Facteurs déclenchants\n- Infections virales',
    principes: [
      [
        'Insulinothérapie',
        'Remplacer l’insuline.',
        '- Dose totale 0,7–1 U/kg/j (plus à la puberté)\n- **Basal-bolus** : **NPH** ou **glargine** + **insuline rapide** aux repas\n- Ou 2 injections par jour de mélange rapide + NPH si contraintes\n- Conservation de l’insuline au frais (pots en terre cuite si pas de réfrigérateur)\n- Ne jamais arrêter l’insuline',
      ],
      [
        'Éducation',
        'Rendre l’enfant et la famille autonomes.',
        '- Injections, rotation des sites, glycémies capillaires (au moins 3–4 par jour)\n- Reconnaissance et traitement de l’hypoglycémie (sucre ; glucagon)\n- Règles en cas de maladie (cétonurie, ne pas arrêter l’insuline), alimentation équilibrée, activité physique\n- Information de l’école',
      ],
      [
        'Suivi',
        'Croissance et prévention des complications.',
        '- Consultation tous les 3 mois : HbA1c, croissance, injections, psychologie\n- Dépistage des complications et des maladies auto-immunes associées',
      ],
    ],
    molecules: [
      ['insuline-humaine-rapide', 'premiere', 'Bolus'],
      ['insuline-nph', 'premiere', 'Basale'],
      ['insuline-glargine', 'alternative', 'Basale'],
      ['glucagon', 'adjuvant', 'Hypoglycémie sévère'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Acidocétose',
        fiche: 'acidocetose-diabetique-enfant',
        description: 'Révélation ou arrêt de l’insuline.',
        traitement: '- Protocole pédiatrique',
        clinique: '- Vomissements, polypnée',
        paraclinique: '- Glycémie, cétonurie',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Insuline, repas sauté, effort.',
        traitement: '- Sucre, glucose, glucagon',
        clinique: '- Sueurs, convulsions',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Retard de croissance et pubertaire',
        fiche: 'retard-staturo-ponderal',
        description: 'Déséquilibre chronique.',
        traitement: '- Équilibre glycémique',
        clinique: '- Petite taille',
        paraclinique: '- Courbes',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec accès à l’insuline et éducation ; mortalité élevée en cas de rupture d’insuline',
    urgences: ['acidocetose-diabetique-urgence'],
    symptomes: [
      ['Polyurie-polydipsie', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire devant polyurie ou amaigrissement, transfert ; suivi partagé',
        '- Toute suspicion',
      ],
      hgr: ['- Mise sous insuline, éducation, suivi', '- Déséquilibre majeur'],
      tert: ['- Endocrinologie pédiatrique', ''],
    },
    alertes: {
      'acidocetose-diabetique-urgence':
        'Enfant diabétique avec vomissements, douleurs abdominales ou respiration rapide',
    },
    formes: [
      {
        nom: 'Diabète de type 1 révélé par le syndrome cardinal',
        type: 'commune',
        description: 'Polyurie et amaigrissement.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Soif, polyurie, énurésie',
        generaux: '- Amaigrissement',
        physiques: '- Examen normal ou déshydratation',
        paraclinique: '- Hyperglycémie, cétonurie',
        etiologies: '- Auto-immunité',
        syndromes: ['syndrome-cardinal-diabetique'],
        examens: [['glycemie', 'Diagnostic']],
      },
    ],
  },

  // =================================================================== Acidocétose enfant
  {
    ...ENDOPED,
    slug: 'acidocetose-diabetique-enfant',
    nom: 'Acidocétose diabétique de l’enfant',
    resume:
      'Urgence : glycémie > 2 g/L, cétose, acidose (pH < 7,3) ; réhydratation prudente sur 48 h (NaCl 0,9 % 10–20 mL/kg puis déficit étalé), insuline IV 0,05–0,1 U/kg/h après 1 h de réhydratation, potassium ; surveiller l’œdème cérébral.',
    definition:
      'Complication aiguë du diabète de l’enfant associant hyperglycémie (> 2 g/L), cétonémie ≥ 3 mmol/L ou cétonurie ≥ ++, et acidose (pH < 7,3 ou bicarbonates < 18 mmol/L) ; sévère si pH < 7,1.',
    physiopathologie:
      '## Mécanismes\n- Carence en insuline : hyperglycémie, diurèse osmotique, déshydratation\n- Cétogenèse : acidose\n- Œdème cérébral (enfant) : complication la plus redoutée, favorisée par une réhydratation trop rapide et l’acidose sévère',
    diagnostic:
      '## Clinique\n- Polyurie, polydipsie, amaigrissement, **vomissements**, **douleurs abdominales**\n- **Polypnée de Kussmaul**, haleine acétonique, déshydratation\n- Troubles de conscience\n\n## Signes d’œdème cérébral\n- Céphalées, vomissements secondaires, bradycardie, HTA, baisse de la conscience, convulsions\n\n## Biologie\n- Glycémie, cétonurie, gaz du sang, ionogramme (natrémie corrigée, kaliémie), créatinine',
    examens: [
      ['confirmation', 'glycemie', '> 2 g/L.'],
      ['confirmation', 'bandelette-urinaire', 'Cétonurie.'],
      ['gravite', 'gaz-du-sang', 'pH, bicarbonates.'],
      ['premiere_intention', 'ionogramme', 'Kaliémie, natrémie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['etiologique', 'tdr-paludisme', 'Facteur déclenchant.'],
      ['etiologique', 'nfs', 'Infection.'],
    ],
    scores: ['glasgow', 'besoins-hydriques'],
    differentiels: [
      ['paludisme-grave-enfant', 'Acidose et troubles de conscience, TDR positif.'],
      ['Gastro-entérite', 'Vomissements sans glycémie élevée.'],
      ['pneumonie-enfant', 'Polypnée, foyer.'],
      ['appendicite-aigue', 'Douleur abdominale localisée persistante.'],
      ['Intoxication salicylée', 'Contexte.'],
    ],
    etiologies:
      '## Facteurs\n- Diabète inaugural\n- Arrêt de l’insuline (coût, rupture de stock), infections (paludisme), stress',
    principes: [
      [
        'Réhydratation prudente',
        'Restaurer la volémie sans œdème cérébral.',
        '- **NaCl 0,9 %** 10 mL/kg en 30–60 min (20 mL/kg si choc), à répéter si nécessaire\n- Puis correction du déficit (5–10 % du poids) + besoins d’entretien **sur 48 h**\n- Quand la glycémie < 2,5–3 g/L : ajouter du **glucose** (glucosé 5 % ou 10 % + NaCl)',
      ],
      [
        'Insuline',
        'Arrêter la cétogenèse.',
        '- **Insuline rapide IV** 0,05 à 0,1 U/kg/h, **débutée 1 h après le début de la réhydratation**, sans bolus\n- Sans seringue électrique : insuline SC ou IM 0,1 U/kg toutes les 1–2 h selon le protocole\n- Baisse de la glycémie ≤ 1 g/L par heure\n- Relais SC quand l’acidose est corrigée et que l’enfant mange',
      ],
      [
        'Potassium',
        'Éviter l’hypokaliémie.',
        '- **KCl** 40 mmol/L dans les solutés dès que la diurèse est présente (sauf hyperkaliémie)\n- Pas de bicarbonate en routine',
      ],
      [
        'Surveillance',
        'Repérer l’œdème cérébral.',
        '- Glycémie horaire, conscience et signes neurologiques horaires, ionogramme toutes les 2–4 h, bilan entrées-sorties\n- Œdème cérébral : **mannitol** 0,5–1 g/kg ou **NaCl 3 %**, réduction des apports, tête surélevée',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['insuline-humaine-rapide', 'premiere', '0,05–0,1 U/kg/h'],
      ['chlorure-de-potassium', 'premiere', 'Dans les solutés'],
      ['glucose-10', 'premiere', 'Quand la glycémie baisse'],
      ['chlorure-de-sodium-hypertonique', 'deuxieme', 'Œdème cérébral'],
      ['bicarbonate-de-sodium', 'alternative', 'Non recommandé en routine'],
    ],
    complications: [
      {
        nom: 'Œdème cérébral',
        description: '0,5 à 1 % des acidocétoses de l’enfant, mortalité élevée.',
        traitement: '- Mannitol ou NaCl 3 %, réduction des apports',
        clinique: '- Céphalées, bradycardie, baisse de conscience',
        paraclinique: '',
      },
      {
        nom: 'Hypokaliémie et hypoglycémie',
        fiche: 'dyskaliemies',
        description: 'Traitement.',
        traitement: '- Potassium, glucose',
        clinique: '- Arythmies, sueurs',
        paraclinique: '- Ionogramme, glycémie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Déshydratation.',
        traitement: '- Réhydratation',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 1 % dans les centres expérimentés, plus élevée en Afrique (retard diagnostique, œdème cérébral)',
    urgences: ['acidocetose-diabetique-urgence'],
    symptomes: [
      ['Polyurie-polydipsie', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: [
        '- Glycémie capillaire et cétonurie chez tout enfant qui vomit avec polypnée, NaCl 0,9 % 10 mL/kg, transfert',
        '- Toute acidocétose',
      ],
      hgr: [
        '- Protocole pédiatrique, insuline, potassium, surveillance neurologique',
        '- Œdème cérébral, pH < 7',
      ],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'acidocetose-diabetique-urgence':
        'Enfant avec vomissements, respiration profonde, glycémie élevée et cétonurie',
    },
    formes: [
      {
        nom: 'Acidocétose révélatrice',
        type: 'commune',
        description: 'Premier signe du diabète.',
        terrain: '- Enfant non diagnostiqué',
        fonctionnels: '- Vomissements, douleurs abdominales',
        generaux: '- Déshydratation, amaigrissement',
        physiques: '- Kussmaul, haleine acétonique',
        paraclinique: '- pH < 7,3, cétonurie',
        etiologies: '- Diabète de type 1',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
        examens: [['gaz-du-sang', 'Gravité']],
      },
      {
        nom: 'Acidocétose sévère avec œdème cérébral',
        type: 'gravite',
        description: 'Complication neurologique.',
        terrain: '- Jeune enfant, pH < 7,1',
        fonctionnels: '- Céphalées',
        generaux: '- Bradycardie, HTA',
        physiques: '- Baisse de conscience',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },
];
