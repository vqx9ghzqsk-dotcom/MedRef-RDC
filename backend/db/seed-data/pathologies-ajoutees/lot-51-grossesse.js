'use strict';

/**
 * Lot 51 (phase 2, grossesse) — douleurs abdominales de la grossesse, appendicite et grossesse,
 * vaccination pendant la grossesse, hépatite E et grossesse. Rédigé par IA (OMS, Normes et
 * directives SR, Sabiston) : à valider.
 */

const GROS = { departement: 'gynecologie-obstetrique', specialite: 'Grossesse' };

module.exports = [
  // =================================================================== Douleurs abdominales
  {
    ...GROS,
    slug: 'douleurs-abdominales-grossesse',
    nom: 'Douleurs abdominales de la grossesse',
    resume:
      'Démarche devant une douleur abdominale chez la femme enceinte : causes obstétricales selon le terme (1er trimestre : grossesse extra-utérine, avortement ; 2e–3e : travail prématuré, hématome rétroplacentaire, rupture utérine, pré-éclampsie/HELLP, chorioamniotite) et non obstétricales (infection urinaire et pyélonéphrite, appendicite, cholécystite, pancréatite, torsion d’annexe, fibrome en nécrobiose, paludisme, occlusion) ; signes de gravité (choc, saignement, défense, HTA, absence de bruits du cœur fœtal) ; β-hCG, échographie, bandelette, NFS, tension ; ne pas retarder une chirurgie nécessaire.',
    definition:
      'Douleur abdominale ou pelvienne survenant pendant la grossesse, d’origine obstétricale, gynécologique ou extragénitale.',
    physiopathologie:
      '## 1er trimestre\n- **Grossesse extra-utérine** (rompue : choc), **avortement** spontané ou septique, kyste ou torsion d’annexe, infection urinaire\n\n## 2e–3e trimestres\n- Obstétricales : **menace d’accouchement prématuré** / travail, **hématome rétroplacentaire** (douleur + utérus dur + saignement), **rupture utérine** (utérus cicatriciel), **pré-éclampsie/HELLP** (douleur épigastrique en barre), **chorioamniotite**, nécrobiose de fibrome\n- Non obstétricales : **pyélonéphrite**, **appendicite**, cholécystite, pancréatite, occlusion, paludisme, ulcère, constipation, ligaments ronds (bénin)',
    diagnostic:
      '## Évaluation initiale\n- Terme, caractéristiques de la douleur, saignement, perte de liquide, fièvre, signes urinaires et digestifs\n- **Signes de gravité** : pouls, tension (choc ou HTA), défense, contracture utérine, saignement abondant, bruits du cœur fœtal\n\n## Examens\n- **β-hCG** (si grossesse non confirmée), **échographie** obstétricale et abdominale\n- **Bandelette urinaire** (infection, protéinurie), **NFS**, CRP, TDR paludisme\n- Bilan hépatique, plaquettes, LDH (HELLP), lipasémie, groupage-RAI\n- Cardiotocographie après 28 semaines',
    examens: [
      ['premiere_intention', 'echographie-obstetricale', 'Grossesse, placenta, vitalité fœtale.'],
      ['premiere_intention', 'echographie-abdominale', 'Appendice, vésicule, reins.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection, protéinurie.'],
      ['premiere_intention', 'nfs', 'Anémie, infection, plaquettes.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
      ['gravite', 'bilan-hepatique', 'HELLP.'],
      ['gravite', 'groupage-rai', 'Hémorragie.'],
      ['etiologique', 'lipasemie', 'Pancréatite.'],
      ['premiere_intention', 'cardiotocographie', 'Contractions, rythme fœtal.'],
    ],
    scores: [],
    differentiels: [
      ['grossesse-extra-uterine', 'Premier trimestre, saignement, choc.'],
      ['hematome-retroplacentaire', 'Utérus dur, saignement noir, HTA.'],
      ['menace-accouchement-premature', 'Contractions régulières, modification du col.'],
      ['appendicite-et-grossesse', 'Fièvre, douleur latérale droite.'],
      ['infections-urinaires-de-la-grossesse', 'Brûlures, fièvre, douleur lombaire.'],
      ['hellp-syndrome', 'Douleur épigastrique, HTA, cytolyse.'],
    ],
    etiologies: '## Causes\n- Obstétricales, gynécologiques, urinaires, digestives, paludisme',
    principes: [
      [
        'Urgences',
        'Agir sans délai.',
        '- **Choc** : 2 voies veineuses, remplissage, sang, laparotomie (GEU rompue, rupture utérine)\n- Hématome rétroplacentaire : extraction, correction de la coagulation\n- Pré-éclampsie/HELLP : sulfate de magnésium, antihypertenseurs, accouchement',
      ],
      [
        'Traitement selon la cause',
        'Ne pas retarder.',
        '- Pyélonéphrite : **ceftriaxone** IV ; appendicite : chirurgie ; travail prématuré : tocolyse et corticoïdes selon le terme\n- Douleur : **paracétamol** ; antispasmodique (phloroglucinol) ; **éviter les AINS** après 20 semaines\n- La grossesse ne doit pas retarder l’imagerie ni la chirurgie nécessaires',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['phloroglucinol', 'alternative', 'Douleur spasmodique'],
      ['ceftriaxone', 'alternative', 'Pyélonéphrite'],
      ['nifedipine', 'alternative', 'Tocolyse'],
      ['sulfate-de-magnesium', 'alternative', 'Pré-éclampsie sévère'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'GEU rompue, HRP, rupture utérine.',
        traitement: '- Réanimation, chirurgie',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- Hb',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'HRP, infection.',
        traitement: '- Prise en charge',
        clinique: '- Arrêt des mouvements',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Accouchement prématuré',
        fiche: 'menace-accouchement-premature',
        description: 'Infection, chirurgie.',
        traitement: '- Tocolyse, corticoïdes',
        clinique: '- Contractions',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et de la rapidité du diagnostic ; les retards diagnostiques aggravent le pronostic maternel et fœtal',
    urgences: ['abdomen-aigu-chirurgical', 'grossesse-extra-uterine-rompue'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Saignement vaginal', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
      ['Brûlures mictionnelles', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Signes de gravité, bandelette, TDR, référence', '- Choc, saignement, défense, HTA'],
      hgr: ['- Échographie, chirurgie, césarienne', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Femme enceinte avec douleur abdominale et défense',
      'grossesse-extra-uterine-rompue': 'Douleur pelvienne et choc au 1er trimestre',
    },
    formes: [
      {
        nom: 'Douleur obstétricale',
        type: 'commune',
        description: 'Contractions, HRP.',
        terrain: '- 2e–3e trimestres',
        fonctionnels: '- Douleurs',
        generaux: '',
        physiques: '- Utérus contractile ou dur',
        paraclinique: '- Échographie, CTG',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Abdomen chirurgical de la grossesse',
        type: 'gravite',
        description: 'Appendicite, GEU, rupture.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre ou choc',
        physiques: '- Défense',
        paraclinique: '- Échographie',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Appendicite et grossesse
  {
    ...GROS,
    slug: 'appendicite-et-grossesse',
    nom: 'Appendicite et grossesse',
    resume:
      'Urgence chirurgicale non obstétricale la plus fréquente pendant la grossesse (≈ 1/1 500) : douleur de la fosse iliaque droite au 1er trimestre, plus haute et latérale (flanc, hypochondre droit) aux 2e–3e trimestres, défense souvent absente ; diagnostic retardé = perforation, péritonite, fausse couche, accouchement prématuré, mort fœtale ; échographie ; appendicectomie sans délai (laparotomie ou cœlioscopie), antibiotiques (céfazoline ou ceftriaxone + métronidazole), surveillance fœtale ; ne jamais retarder l’intervention à cause de la grossesse.',
    definition:
      'Inflammation aiguë de l’appendice survenant pendant la grossesse, dont la présentation est modifiée par le déplacement de l’appendice par l’utérus.',
    physiopathologie:
      '## Particularités\n- L’utérus refoule l’appendice vers le **haut** et en **dehors** au fil de la grossesse\n- Paroi abdominale distendue : **défense moins nette**\n- Hyperleucocytose physiologique, nausées et vomissements fréquents : diagnostic difficile\n\n## Gravité\n- **Perforation** plus fréquente (retard diagnostique), péritonite → **mort fœtale** (jusqu’à 20–35 % en cas de perforation), **accouchement prématuré**',
    diagnostic:
      '## Clinique\n- **Douleur** de la fosse iliaque droite (1er trimestre) ou du **flanc droit**/hypochondre droit (3e trimestre), persistante, aggravée par la marche\n- Nausées, vomissements, anorexie, fièvre modérée\n- Douleur à la palpation latérale droite, douleur en décubitus latéral gauche, contractions utérines\n\n## Examens\n- **Échographie** abdominale (appendice > 6 mm, non compressible) ; IRM si disponible et doute\n- NFS (hyperleucocytose à interpréter), CRP, **bandelette urinaire** (pyélonéphrite)\n- Échographie obstétricale, cardiotocographie',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Appendice inflammatoire.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'bandelette-urinaire', 'Pyélonéphrite.'],
      ['premiere_intention', 'echographie-obstetricale', 'Vitalité fœtale.'],
      ['premiere_intention', 'cardiotocographie', 'Contractions.'],
    ],
    scores: [],
    differentiels: [
      ['infections-urinaires-de-la-grossesse', 'Pyélonéphrite droite : bandelette positive.'],
      ['cholecystite-lithiase-biliaire', 'Douleur de l’hypochondre droit, échographie.'],
      ['torsion-d-annexe', 'Douleur brutale, kyste.'],
      ['menace-accouchement-premature', 'Contractions sans fièvre.'],
      ['hematome-retroplacentaire', 'Utérus dur, saignement.'],
      ['appendicite-aigue', 'Fiche générale.'],
    ],
    etiologies:
      '## Mécanisme\n- Obstruction de la lumière appendiculaire (stercolithe, hyperplasie lymphoïde)',
    principes: [
      [
        'Chirurgie',
        'Sans délai.',
        '- **Appendicectomie** en urgence (cœlioscopie au 1er–2e trimestre, laparotomie centrée sur le point douloureux au 3e)\n- Position en décubitus latéral gauche (compression de la veine cave)\n- Tout retard augmente le risque de perforation et de perte fœtale',
      ],
      [
        'Antibiotiques',
        'Couverture.',
        '- **Céfazoline** ou **ceftriaxone** + **métronidazole** ; poursuite 5–7 jours si perforation\n- **Pas de traitement antibiotique seul** (non validé pendant la grossesse)',
      ],
      [
        'Surveillance',
        'Protéger le fœtus.',
        '- Surveillance fœtale et des contractions ; **tocolyse** (nifédipine) si contractions ; **corticoïdes** si risque de naissance avant 34 semaines\n- Antalgiques : paracétamol, morphine ; éviter les AINS ; thromboprophylaxie',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie'],
      ['cefazoline', 'alternative', 'Antibioprophylaxie'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur sévère'],
      ['nifedipine', 'adjuvant', 'Tocolyse'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire'],
    ],
    complications: [
      {
        nom: 'Perforation et péritonite',
        fiche: 'abdomen-aigu-demarche',
        description: 'Retard diagnostique.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Défense, fièvre, choc',
        paraclinique: '',
      },
      {
        nom: 'Accouchement prématuré',
        fiche: 'menace-accouchement-premature',
        description: 'Inflammation, chirurgie.',
        traitement: '- Tocolyse, corticoïdes',
        clinique: '- Contractions',
        paraclinique: '',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Péritonite.',
        traitement: '- Prévention par la chirurgie précoce',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si opérée avant perforation ; perte fœtale élevée en cas de péritonite',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Nausées', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Anorexie', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'WSES — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Repérer, référence urgente', '- Douleur droite persistante, fièvre'],
      hgr: ['- Échographie, appendicectomie', ''],
      tert: ['', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Femme enceinte avec douleur droite persistante, fièvre ou défense',
    },
    formes: [
      {
        nom: 'Appendicite du 1er trimestre',
        type: 'commune',
        description: 'Présentation typique.',
        terrain: '- Premier trimestre',
        fonctionnels: '- Douleur de la fosse iliaque droite',
        generaux: '- Fébricule',
        physiques: '- Douleur provoquée',
        paraclinique: '- Appendice épaissi',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Appendicite du 3e trimestre',
        type: 'topographique',
        description: 'Douleur haute.',
        terrain: '- Troisième trimestre',
        fonctionnels: '- Douleur du flanc droit',
        generaux: '',
        physiques: '- Défense peu marquée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Appendicite perforée',
        type: 'gravite',
        description: 'Péritonite.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Défense généralisée',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Vaccination pendant la grossesse
  {
    ...GROS,
    slug: 'vaccination-pendant-la-grossesse',
    nom: 'Vaccination pendant la grossesse',
    resume:
      'La vaccination maternelle protège la mère et le nouveau-né (anticorps transmis par le placenta) : antitétanique-diphtérique (Td) selon le statut vaccinal (prévention du tétanos néonatal), grippe et COVID-19 recommandés si disponibles, coqueluche (dTca) dans les pays qui l’utilisent, hépatite B si non immunisée et à risque ; vaccins inactivés sûrs à tout terme ; vaccins vivants (ROR/RR, fièvre jaune sauf épidémie, BCG, varicelle) contre-indiqués sauf situation particulière ; vérifier et compléter le carnet à la première CPN.',
    definition:
      'Administration de vaccins à la femme enceinte pour la protéger et protéger son enfant pendant les premiers mois de vie.',
    physiopathologie:
      '## Principes\n- **Passage transplacentaire des IgG** au 3e trimestre → protection du nourrisson avant ses propres vaccins (tétanos, coqueluche, grippe)\n- Vaccins **inactivés**, sous-unitaires et anatoxines : **sûrs** pendant la grossesse\n- Vaccins **vivants atténués** : risque théorique pour le fœtus → contre-indiqués (sauf balance bénéfice/risque, ex. fièvre jaune en épidémie)',
    diagnostic:
      '## Évaluation à la première CPN\n- **Carnet de vaccination** : nombre de doses antitétaniques reçues (enfance, grossesses précédentes)\n- Statut hépatite B (AgHBs), risques d’exposition (fièvre jaune, rage, épidémies)\n- Vaccination accidentelle par un vaccin vivant : rassurer (pas d’indication d’interruption de grossesse)',
    examens: [['premiere_intention', 'aghbs', 'Statut hépatite B.']],
    scores: [],
    differentiels: [],
    etiologies:
      '## Maladies évitables\n- Tétanos maternel et néonatal, grippe, COVID-19, coqueluche du nourrisson, hépatite B',
    principes: [
      [
        'Vaccins recommandés',
        'Protéger la mère et l’enfant.',
        '- **Td (antitétanique-diphtérique)** : femme jamais vaccinée, 2 doses à 4 semaines d’intervalle (la 2e au moins 2 semaines avant l’accouchement), puis rappels à 6 mois, 1 an et 1 an (5 doses = protection à vie) ; femme déjà vaccinée : compléter selon le carnet\n- **Grippe** inactivé à tout terme, **COVID-19** selon les directives nationales\n- **Coqueluche** (dTca) au 2e–3e trimestre là où il est disponible\n- **Hépatite B** si non immunisée et à risque',
      ],
      [
        'Vaccins contre-indiqués',
        'Vaccins vivants.',
        '- **RR/ROR**, **varicelle**, **BCG** : à reporter après l’accouchement (vacciner en post-partum les femmes non immunisées contre la rubéole)\n- **Fièvre jaune** : seulement en situation d’épidémie ou de risque élevé ; **rage** : vaccination post-exposition indiquée (vaccin inactivé)',
      ],
      [
        'Post-partum',
        'Rattraper.',
        '- RR si non immunisée, compléter les doses Td ; allaitement compatible avec tous les vaccins (prudence fièvre jaune avant 6 mois de l’enfant)',
      ],
    ],
    molecules: [
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos maternel et néonatal'],
      ['vaccin-hepatite-b', 'alternative', 'Femme non immunisée à risque'],
      ['vaccin-rougeole-rubeole', 'adjuvant', 'Post-partum uniquement'],
      ['vaccin-antirabique', 'alternative', 'Post-exposition'],
      ['vaccin-antiamaril', 'deuxieme', 'Épidémie de fièvre jaune uniquement'],
    ],
    complications: [
      {
        nom: 'Tétanos néonatal',
        fiche: 'tetanos-neonatal',
        description: 'Mère non vaccinée.',
        traitement: '- Prévention par le Td',
        clinique: '- Trismus, spasmes',
        paraclinique: '',
      },
      {
        nom: 'Rubéole congénitale',
        fiche: 'infections-torch-grossesse',
        description: 'Mère non immunisée.',
        traitement: '- Vaccination avant la grossesse',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Le Td maternel a permis l’élimination du tétanos néonatal dans de nombreux pays',
    urgences: [],
    symptomes: [],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Vérification du carnet, Td, conseils', ''],
      hgr: ['', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Vaccination antitétanique de la femme enceinte',
        type: 'commune',
        description: 'Td.',
        terrain: '- Toute femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Vaccination accidentelle par un vaccin vivant',
        type: 'gravite',
        description: 'Rassurer.',
        terrain: '- Grossesse méconnue',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hépatite E et grossesse
  {
    ...GROS,
    slug: 'hepatite-e-et-grossesse',
    nom: 'Hépatite E et grossesse',
    resume:
      'Hépatite virale transmise par l’eau souillée (épidémies dans les camps de déplacés, après inondations), particulièrement grave chez la femme enceinte au 3e trimestre : hépatite fulminante (mortalité 15–25 %), hémorragies, avortement, mort fœtale, accouchement prématuré ; ictère, urines foncées, nausées ; IgM anti-VHE, transaminases, TP ; pas de traitement antiviral spécifique (ribavirine contre-indiquée) : hospitalisation, surveillance de l’insuffisance hépatique, vitamine K, prévention de l’hypoglycémie, gestion de l’accouchement ; prévention : eau potable, hygiène, vaccination (Hecolin) lors des épidémies.',
    definition:
      'Infection aiguë par le virus de l’hépatite E (génotypes 1 et 2 en Afrique) pendant la grossesse, à risque élevé d’insuffisance hépatique aiguë.',
    physiopathologie:
      '## Transmission\n- **Féco-orale** par l’**eau contaminée** ; épidémies dans les camps de réfugiés et de déplacés\n- Transmission verticale possible (hépatite néonatale)\n\n## Gravité pendant la grossesse\n- Mécanismes mal connus (modifications immunitaires et hormonales) → **hépatite fulminante**, encéphalopathie, **coagulopathie**, hémorragies du post-partum',
    diagnostic:
      '## Clinique\n- Phase pré-ictérique : fièvre, nausées, vomissements, douleurs abdominales, fatigue\n- **Ictère**, **urines foncées**, selles décolorées\n- **Signes de gravité** : confusion, somnolence (encéphalopathie), saignements, hypoglycémie, oligurie\n\n## Examens\n- **Transaminases**, bilirubine, **TP/INR**, glycémie, créatinine, NFS, plaquettes\n- **IgM anti-VHE** (TDR ou ELISA), AgHBs, TDR paludisme\n- Échographie obstétricale (vitalité fœtale)\n- Distinguer : HELLP, stéatose hépatique aiguë gravidique, hépatites médicamenteuses',
    examens: [
      ['confirmation', 'serologies-hepatites', 'IgM anti-VHE.'],
      ['premiere_intention', 'bilan-hepatique', 'Cytolyse, bilirubine.'],
      ['gravite', 'hemostase', 'TP/INR.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Plaquettes.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['etiologique', 'aghbs', 'Hépatite B.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
    ],
    scores: [],
    differentiels: [
      ['hellp-syndrome', 'HTA, hémolyse, thrombopénie.'],
      [
        'Stéatose hépatique aiguë gravidique',
        '3e trimestre, hypoglycémie, insuffisance hépatique, IgM VHE négatives.',
      ],
      ['hepatites-virales-aigues-a-et-e', 'Fiche générale.'],
      ['cholestase-gravidique', 'Prurit, transaminases modérément élevées.'],
      ['paludisme-et-grossesse', 'Ictère fébrile, TDR positif.'],
    ],
    etiologies: '## Agent\n- Virus de l’hépatite E (génotypes 1 et 2), eau contaminée',
    principes: [
      [
        'Prise en charge',
        'Soutien et surveillance.',
        '- **Hospitalisation** au 3e trimestre ou si signes de gravité\n- Surveillance de la conscience, de la **glycémie** (glucose 10 % si hypoglycémie), du TP, de la diurèse\n- **Vitamine K1** 10 mg IV, plasma frais congelé si saignement ; éviter les médicaments hépatotoxiques (paracétamol à dose réduite)\n- **Pas de ribavirine** pendant la grossesse',
      ],
      [
        'Accouchement',
        'Prévenir l’hémorragie.',
        '- Pas d’extraction systématique ; accouchement en structure avec sang disponible ; **gestion active de la délivrance**\n- Encéphalopathie : réanimation, lactulose',
      ],
      [
        'Prévention',
        'Eau et hygiène.',
        '- **Eau potable**, chloration, assainissement, lavage des mains\n- **Vaccination** (vaccin VHE, Hecolin) des femmes enceintes lors des épidémies selon l’OMS',
      ],
    ],
    molecules: [
      ['vitamine-k1-phytomenadione', 'premiere', 'Coagulopathie'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['lactulose', 'alternative', 'Encéphalopathie hépatique'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
    ],
    complications: [
      {
        nom: 'Hépatite fulminante',
        fiche: 'encephalopathie-hepatique',
        description: '3e trimestre.',
        traitement: '- Réanimation',
        clinique: '- Confusion, coma',
        paraclinique: '- TP < 50 %',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Coagulopathie.',
        traitement: '- Utérotoniques, plasma',
        clinique: '- Saignement',
        paraclinique: '- Hémostase',
      },
      {
        nom: 'Mort fœtale et prématurité',
        fiche: 'mort-foetale-in-utero',
        description: 'Infection maternelle sévère.',
        traitement: '- Surveillance',
        clinique: '',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle de 15 à 25 % au 3e trimestre lors des épidémies ; guérison sans chronicité chez la survivante',
    urgences: [],
    symptomes: [
      ['Ictère', 'tres_frequent'],
      ['Urines foncées', 'frequent'],
      ['Nausées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: [
        '- Repérer l’ictère, référence de toute femme enceinte ictérique',
        '- Ictère pendant la grossesse',
      ],
      hgr: ['- Bilan, surveillance, vitamine K, accouchement', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hépatite E aiguë de la femme enceinte',
        type: 'commune',
        description: 'Ictère.',
        terrain: '- Femme enceinte, contexte épidémique',
        fonctionnels: '- Nausées, fatigue',
        generaux: '- Fièvre initiale',
        physiques: '- Ictère',
        paraclinique: '- IgM anti-VHE, transaminases élevées',
        etiologies: '- VHE',
        syndromes: [],
      },
      {
        nom: 'Hépatite E fulminante',
        type: 'gravite',
        description: 'Insuffisance hépatique aiguë.',
        terrain: '- 3e trimestre',
        fonctionnels: '- Confusion',
        generaux: '',
        physiques: '- Encéphalopathie, saignements',
        paraclinique: '- TP effondré, hypoglycémie',
        etiologies: '',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire'],
      },
    ],
  },
];
