'use strict';

/**
 * Lot 7 (pneumologie et rhumatologie) — pneumonie communautaire de l'adulte, BPCO, asthme
 * aigu grave, pleurésie (dont tuberculeuse), pneumothorax spontané, goutte.
 * Rédigé par IA (ATS/IDSA, GOLD, GINA, BTS, OMS, EULAR, ACR) : à valider.
 */

const PNEUMO = { departement: 'medecine-interne', specialite: 'Pneumologie' };
const RHUMATO = { departement: 'medecine-interne', specialite: 'Rhumatologie' };

module.exports = [
  // =================================================================== Pneumonie
  {
    ...PNEUMO,
    slug: 'pneumonie-communautaire-adulte',
    nom: 'Pneumonie communautaire de l’adulte',
    resume:
      'Infection du parenchyme pulmonaire acquise en ville, surtout à pneumocoque : fièvre, toux, crépitants, opacité radiologique ; gravité par CURB-65 ; amoxicilline en ambulatoire, ceftriaxone + macrolide si grave.',
    definition:
      'Infection aiguë du parenchyme pulmonaire acquise hors de l’hôpital (ou dans les 48 premières heures d’une hospitalisation).',
    physiopathologie:
      '## Mécanismes\n- Inhalation ou micro-inhalation de germes de l’oropharynx\n- Réaction inflammatoire alvéolaire : condensation, hypoxémie\n- Facteurs favorisants : VIH, alcool, tabac, BPCO, drépanocytose, diabète, grippe récente, âge',
    diagnostic:
      '## Clinique\n- Fièvre, frissons, toux, expectoration purulente, douleur thoracique, dyspnée\n- Polypnée, crépitants localisés, souffle tubaire, matité\n- Sujet âgé : confusion, chute, peu de fièvre\n\n## Radiographie\n- Opacité alvéolaire systématisée ou infiltrat\n\n## Gravité : CURB-65 (1 point chacun)\n- Confusion, Urée > 7 mmol/L, FR ≥ 30/min, PAS < 90 ou PAD ≤ 60 mmHg, âge ≥ 65 ans\n- 0–1 : ambulatoire ; 2 : hospitalisation ; ≥ 3 : grave (envisager les soins intensifs)\n- SpO2 < 92 %, atteinte multilobaire, comorbidités : hospitalisation',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Opacité alvéolaire ; épanchement, abcès.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 < 92 % : hospitalisation, oxygène.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Élevée.'],
      ['premiere_intention', 'uree', 'Score CURB-65.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['etiologique', 'xpert-mtb-rif', 'Toux > 2 semaines, PVVIH, évolution traînante.'],
      ['gravite', 'hemocultures', 'Pneumonie hospitalisée.'],
      ['gravite', 'gaz-du-sang', 'Formes graves.'],
      ['etiologique', 'test-covid', 'Contexte épidémique.'],
      ['premiere_intention', 'creatinine', 'Adaptation des doses.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['tuberculose-pulmonaire', 'Toux chronique, sueurs, amaigrissement, cavernes, GeneXpert.'],
      ['embolie-pulmonaire', 'Dyspnée brutale, facteurs de risque, peu de fièvre.'],
      ['insuffisance-cardiaque', 'Crépitants bilatéraux, cardiomégalie, BNP.'],
      ['Pneumocystose', 'PVVIH avec CD4 < 200, dyspnée progressive, infiltrat interstitiel.'],
      [
        'syndrome-thoracique-aigu-drepanocytaire',
        'Drépanocytaire : même traitement associé à la transfusion.',
      ],
    ],
    etiologies:
      '## Germes\n- ***Streptococcus pneumoniae*** (première cause)\n- *Haemophilus influenzae*, *Staphylococcus aureus* (post-grippal), *Klebsiella* (alcool, diabète)\n- Atypiques : *Mycoplasma*, *Chlamydia*, *Legionella*\n- Virus : grippe, SARS-CoV-2, VRS\n- PVVIH : penser tuberculose et pneumocystose',
    principes: [
      [
        'Ambulatoire (CURB-65 0–1)',
        'Guérir sans hospitalisation.',
        '- **Amoxicilline** 1 g 3 fois par jour 5 à 7 jours\n- Allergie ou suspicion d’atypique : **doxycycline** 100 mg 2 fois par jour ou **azithromycine**\n- Réévaluation à 48–72 h',
      ],
      [
        'Hospitalisation (CURB-65 ≥ 2)',
        'Couvrir pneumocoque et atypiques.',
        '- **Ceftriaxone** 1 à 2 g/j IV + **azithromycine** 500 mg/j (ou **clarithromycine**)\n- **Oxygène** pour SpO2 ≥ 92–94 %, hydratation, thromboprophylaxie\n- Relais oral à l’apyrexie, durée totale 5 à 7 jours',
      ],
      [
        'Situations particulières',
        'Adapter.',
        '- Post-grippal (staphylocoque) : amoxicilline-acide clavulanique ou cloxacilline\n- Inhalation (alcool, coma) : amoxicilline-acide clavulanique\n- PVVIH : cotrimoxazole si suspicion de pneumocystose, recherche de tuberculose',
      ],
      [
        'Prévention',
        'Réduire l’incidence.',
        '- Vaccination antipneumococcique (PVVIH, drépanocytaires, > 65 ans), antigrippale\n- Arrêt du tabac',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Ambulatoire'],
      ['ceftriaxone', 'premiere', 'Hospitalisation'],
      ['azithromycine', 'premiere', 'Atypiques, association'],
      ['clarithromycine', 'alternative', 'Atypiques'],
      ['doxycycline', 'alternative', 'Allergie, atypiques'],
      ['acide-clavulanique', 'alternative', 'Associé à l’amoxicilline : inhalation, post-grippal'],
      ['oxygene', 'premiere', 'SpO2 < 92 %'],
      ['paracetamol', 'adjuvant', 'Fièvre, douleur'],
    ],
    complications: [
      {
        nom: 'Pleurésie purulente',
        fiche: 'pleuresie',
        description: 'Épanchement infecté.',
        traitement: '- Drainage, antibiotiques prolongés',
        clinique: '- Fièvre persistante, matité',
        paraclinique: '- Ponction pleurale',
      },
      {
        nom: 'Sepsis et choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Formes graves.',
        traitement: '- Antibiotiques, remplissage',
        clinique: '- Hypotension',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Insuffisance respiratoire aiguë',
        description: 'Atteinte étendue.',
        traitement: '- Oxygène, ventilation',
        clinique: '- SpO2 basse, tirage',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Abcès pulmonaire',
        description: 'Staphylocoque, anaérobies, Klebsiella.',
        traitement: '- Antibiotiques prolongés',
        clinique: '- Vomique',
        paraclinique: '- Radiographie (niveau hydro-aérique)',
      },
    ],
    evolution:
      '## Pronostic\n- Apyrexie en 48–72 h ; mortalité < 1 % en ambulatoire, 10 à 30 % pour les formes graves',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Expectoration', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Douleur thoracique', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Frissons', 'frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'ATS — recommandations de pratique clinique',
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Diagnostic clinique, amoxicilline, test du paludisme et du VIH, oxymétrie',
        '- CURB-65 ≥ 2, SpO2 < 92 %, échec à 72 h',
      ],
      hgr: ['- Radiographie, ceftriaxone + macrolide, oxygène', '- Insuffisance respiratoire, choc'],
      tert: ['- Réanimation, ventilation', ''],
    },
    alertes: { 'choc-septique': 'Pneumonie avec PAS < 90 mmHg, confusion ou marbrures' },
    formes: [
      {
        nom: 'Pneumonie franche lobaire aiguë à pneumocoque',
        type: 'commune',
        description: 'Début brutal.',
        terrain: '- Adulte, alcool, VIH',
        fonctionnels: '- Frisson solennel, point de côté, toux, crachats rouillés',
        generaux: '- Fièvre à 40 °C',
        physiques: '- Foyer de crépitants, souffle tubaire',
        paraclinique: '- Opacité lobaire systématisée',
        etiologies: '- S. pneumoniae',
        syndromes: ['syndrome-de-condensation-pulmonaire', 'syndrome-infectieux'],
        examens: [['radiographie-thoracique', 'Confirmation']],
      },
      {
        nom: 'Pneumonie grave',
        type: 'gravite',
        description: 'Insuffisance respiratoire ou sepsis.',
        terrain: '- Sujet âgé, comorbidités',
        fonctionnels: '- Dyspnée intense',
        generaux: '- Hypotension, confusion',
        physiques: '- Polypnée ≥ 30/min, tirage',
        paraclinique: '- Atteinte multilobaire, SpO2 < 90 %',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== BPCO
  {
    ...PNEUMO,
    slug: 'bpco',
    nom: 'Bronchopneumopathie chronique obstructive',
    resume:
      'Obstruction bronchique permanente due au tabac et à la fumée de bois ou de charbon : dyspnée et toux chroniques, spirométrie ; bronchodilatateurs de longue durée, arrêt de l’exposition, traitement des exacerbations.',
    definition:
      'Maladie respiratoire chronique caractérisée par des symptômes persistants (dyspnée, toux, expectoration) et une obstruction bronchique non complètement réversible : rapport VEMS/CVF < 0,70 après bronchodilatateur.',
    physiopathologie:
      '## Mécanismes\n- Inhalation chronique de particules (tabac, **fumée de biomasse**, poussières professionnelles)\n- Inflammation bronchique, hypersécrétion, remodelage, emphysème\n- Distension, hypoxémie, puis hypertension pulmonaire et cœur pulmonaire chronique',
    diagnostic:
      '## Clinique\n- Dyspnée d’effort progressive, toux et expectoration chroniques\n- Exposition : tabac, cuisine au bois ou au charbon dans un local fermé, mines\n- Distension thoracique, freinage expiratoire, sibilants\n- Stades évolués : cyanose, œdèmes (cœur pulmonaire)\n\n## Confirmation\n- **Spirométrie** : VEMS/CVF < 0,70 après bronchodilatateur ; sévérité selon le VEMS (GOLD 1 à 4)\n\n## Exacerbation\n- Aggravation de la dyspnée, de la toux et de l’expectoration (purulence) ; gravité : cyanose, confusion, SpO2 < 88 %, tirage',
    examens: [
      ['confirmation', 'spirometrie', 'VEMS/CVF < 0,70 après bronchodilatateur.'],
      ['premiere_intention', 'radiographie-thoracique', 'Distension, élimine un autre diagnostic.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 au repos et à l’effort.'],
      ['gravite', 'gaz-du-sang', 'Hypercapnie, acidose respiratoire en exacerbation.'],
      ['premiere_intention', 'nfs', 'Polyglobulie, éosinophilie.'],
      ['etiologique', 'xpert-mtb-rif', 'Séquelles ou tuberculose active.'],
      ['suivi', 'ecg', 'Cœur pulmonaire chronique.'],
      ['suivi', 'echocardiographie', 'Hypertension pulmonaire.'],
    ],
    scores: [],
    differentiels: [
      ['asthme', 'Début jeune, variabilité, réversibilité complète, atopie.'],
      [
        'Séquelles de tuberculose',
        'Antécédent de tuberculose, lésions fibreuses ; peut s’associer à une obstruction.',
      ],
      ['insuffisance-cardiaque', 'Orthopnée, cardiomégalie, BNP.'],
      ['Dilatation des bronches', 'Expectoration abondante chronique, scanner.'],
    ],
    etiologies:
      '## Facteurs de risque\n- **Tabac**\n- **Fumée de biomasse** (bois, charbon de bois) : femmes et enfants exposés en cuisine\n- Expositions professionnelles (mines, poussières), pollution\n- Séquelles de tuberculose, infections respiratoires de l’enfance, déficit en alpha-1-antitrypsine',
    principes: [
      [
        'Arrêt de l’exposition',
        'Ralentir le déclin.',
        '- Arrêt du tabac (conseil, substituts nicotiniques)\n- Foyers améliorés, cuisson à l’extérieur, ventilation',
      ],
      [
        'Bronchodilatateurs',
        'Soulager la dyspnée.',
        '- **Salbutamol** à la demande (± **ipratropium**)\n- Traitement de fond : **tiotropium** (LAMA) ou bêta-2 de longue durée (**formotérol**, **salmétérol**), puis association LAMA + LABA\n- Corticoïde inhalé (**budésonide**, béclométasone) si exacerbations fréquentes et éosinophiles ≥ 300/mm³\n- Technique d’inhalation vérifiée (chambre d’inhalation)',
      ],
      [
        'Exacerbation',
        'Passer le cap aigu.',
        '- Bronchodilatateurs nébulisés (salbutamol + ipratropium)\n- **Prednisolone** 40 mg/j 5 jours\n- Antibiotique si expectoration purulente : **amoxicilline** (± clavulanate) ou **doxycycline** 5 jours\n- **Oxygène** pour SpO2 88–92 % ; ventilation non invasive si acidose hypercapnique',
      ],
      [
        'Mesures générales',
        'Améliorer la qualité de vie.',
        '- Réhabilitation respiratoire, activité physique\n- Vaccinations antigrippale et antipneumococcique\n- Oxygénothérapie de longue durée si hypoxémie sévère\n- Dépistage de la tuberculose',
      ],
    ],
    molecules: [
      ['salbutamol', 'premiere', 'À la demande, exacerbation'],
      ['ipratropium', 'premiere', 'Exacerbation, en association'],
      ['tiotropium', 'premiere', 'Traitement de fond (LAMA)'],
      ['formoterol', 'alternative', 'Traitement de fond (LABA)'],
      ['salmeterol', 'alternative', 'Traitement de fond (LABA)'],
      ['budesonide', 'adjuvant', 'Exacerbations fréquentes'],
      ['prednisolone', 'premiere', 'Exacerbation 5 jours'],
      ['amoxicilline', 'premiere', 'Exacerbation avec expectoration purulente'],
      ['doxycycline', 'alternative', 'Exacerbation'],
      ['oxygene', 'premiere', 'SpO2 88–92 %'],
    ],
    complications: [
      {
        nom: 'Exacerbation grave et insuffisance respiratoire',
        description: 'Acidose hypercapnique.',
        traitement: '- Oxygène prudent, VNI',
        clinique: '- Cyanose, confusion, tirage',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Cœur pulmonaire chronique',
        description: 'Hypertension pulmonaire.',
        traitement: '- Oxygène, diurétiques',
        clinique: '- Œdèmes, turgescence jugulaire',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Pneumothorax',
        fiche: 'pneumothorax-spontane',
        description: 'Rupture de bulles d’emphysème.',
        traitement: '- Drainage',
        clinique: '- Dyspnée brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Pneumonie',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Facteur d’exacerbation.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie progressive ; les exacerbations sévères et l’hypoxémie chronique assombrissent le pronostic',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Toux', 'tres_frequent'],
      ['Expectoration', 'frequent'],
      ['Sibilants', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'GOLD — recommandations de pratique clinique',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      'ERS — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Repérage des exposés, arrêt du tabac, salbutamol, prise en charge des exacerbations légères',
        '- Exacerbation sévère, SpO2 < 90 %',
      ],
      hgr: ['- Spirométrie, traitement de fond, exacerbations, oxygène', '- Besoin de VNI'],
      tert: ['- Pneumologie, VNI, oxygénothérapie de longue durée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'BPCO stable',
        type: 'commune',
        description: 'Dyspnée d’effort chronique.',
        terrain: '- Fumeur, femme exposée à la fumée de bois',
        fonctionnels: '- Dyspnée d’effort, toux, expectoration',
        generaux: '',
        physiques: '- Distension, sibilants, expiration prolongée',
        paraclinique: '- VEMS/CVF < 0,70',
        etiologies: '- Tabac, biomasse',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [['spirometrie', 'Confirmation']],
      },
      {
        nom: 'Exacerbation grave',
        type: 'gravite',
        description: 'Insuffisance respiratoire aiguë.',
        terrain: '- BPCO sévère, infection',
        fonctionnels: '- Dyspnée de repos',
        generaux: '- Sueurs, confusion',
        physiques: '- Cyanose, tirage, astérixis',
        paraclinique: '- Hypercapnie, pH < 7,35',
        etiologies: '- Infection, arrêt du traitement',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Asthme aigu grave
  {
    ...PNEUMO,
    slug: 'asthme-aigu-grave',
    nom: 'Asthme aigu grave',
    resume:
      'Crise d’asthme menaçant la vie : parole difficile, tirage, SpO2 < 92 %, DEP < 50 % ; oxygène, salbutamol nébulisé répété + ipratropium, corticoïdes, sulfate de magnésium IV, transfert en réanimation si signes d’alarme.',
    definition:
      'Crise d’asthme sévère ou menaçant le pronostic vital, ne répondant pas ou peu au traitement bronchodilatateur initial.',
    physiopathologie:
      '## Mécanismes\n- Bronchospasme, inflammation et bouchons muqueux\n- Distension, épuisement des muscles respiratoires, hypoxémie\n- Normocapnie ou hypercapnie : signe d’épuisement',
    diagnostic:
      '## Critères de gravité\n- Parle par mots, ne peut pas s’allonger, agitation\n- FR > 30/min, FC > 120/min, tirage, sueurs\n- **DEP < 50 %** de la valeur théorique ou habituelle, SpO2 < 92 %\n\n## Signes de menace vitale\n- Silence auscultatoire, cyanose, épuisement, troubles de conscience, bradycardie, hypotension\n- DEP < 33 %, normo- ou hypercapnie\n\n## Terrain à risque\n- Antécédent d’intubation, hospitalisations répétées, mauvaise observance, sevrage récent en corticoïdes, recours croissant au salbutamol',
    examens: [
      [
        'premiere_intention',
        'debit-expiratoire-de-pointe',
        'Sévérité et réponse au traitement (si le patient peut souffler).',
      ],
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 < 92 % : gravité.'],
      ['gravite', 'gaz-du-sang', 'PaCO2 normale ou élevée : épuisement.'],
      ['gravite', 'radiographie-thoracique', 'Pneumothorax, pneumonie (non systématique).'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie sous salbutamol.'],
    ],
    scores: ['gina-controle'],
    differentiels: [
      ['Exacerbation de BPCO', 'Fumeur, âge, obstruction permanente.'],
      ['insuffisance-cardiaque', 'Asthme cardiaque : crépitants, cardiopathie.'],
      ['pneumothorax-spontane', 'Abolition unilatérale du murmure vésiculaire.'],
      ['Corps étranger, obstruction laryngée', 'Stridor inspiratoire.'],
      ['Anaphylaxie', 'Urticaire, hypotension, exposition à un allergène.'],
    ],
    etiologies:
      '## Facteurs déclenchants\n- Infections virales, allergènes, fumées, pollution\n- Arrêt du traitement de fond, mauvaise technique d’inhalation\n- AINS, bêtabloquants chez certains asthmatiques',
    principes: [
      [
        'Traitement immédiat',
        'Lever le bronchospasme.',
        '- **Oxygène** pour SpO2 93–95 %\n- **Salbutamol** 5 mg nébulisé toutes les 20 min la 1re heure (ou 4 à 10 bouffées en chambre d’inhalation)\n- **Ipratropium** 0,5 mg nébulisé associé\n- **Prednisolone** 40 à 50 mg per os ou **méthylprednisolone** / hydrocortisone IV',
      ],
      [
        'En l’absence d’amélioration',
        'Éviter l’intubation.',
        '- **Sulfate de magnésium** 2 g IV en 20 min\n- Salbutamol en nébulisation continue ; adrénaline si anaphylaxie\n- **Aminophylline** : place marginale (toxicité)\n- Réanimation : épuisement, confusion, hypercapnie (intubation par un opérateur expérimenté)',
      ],
      [
        'À la sortie',
        'Prévenir la récidive.',
        '- Corticoïde oral 5 à 7 jours\n- **Corticoïde inhalé** (budésonide-formotérol) systématique\n- Plan d’action écrit, technique d’inhalation, consultation de suivi',
      ],
    ],
    molecules: [
      ['salbutamol', 'premiere', 'Nébulisation répétée'],
      ['ipratropium', 'premiere', 'Associé au salbutamol'],
      ['oxygene', 'premiere', 'SpO2 93–95 %'],
      ['prednisolone', 'premiere', '40 à 50 mg per os'],
      ['methylprednisolone', 'alternative', 'Voie IV'],
      ['hydrocortisone', 'alternative', 'Voie IV'],
      ['sulfate-de-magnesium', 'deuxieme', '2 g IV en 20 min'],
      ['aminophylline', 'alternative', 'Dernier recours'],
      ['budesonide', 'adjuvant', 'Traitement de fond à la sortie'],
      ['formoterol', 'adjuvant', 'Associé au budésonide'],
    ],
    complications: [
      {
        nom: 'Arrêt respiratoire',
        description: 'Épuisement.',
        traitement: '- Intubation, ventilation',
        clinique: '- Silence auscultatoire, coma',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Pneumothorax et pneumomédiastin',
        fiche: 'pneumothorax-spontane',
        description: 'Barotraumatisme.',
        traitement: '- Drainage',
        clinique: '- Douleur, emphysème sous-cutané',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hypokaliémie',
        fiche: 'dyskaliemies',
        description: 'Salbutamol à fortes doses.',
        traitement: '- KCl',
        clinique: '- Arythmies',
        paraclinique: '- Kaliémie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si traité tôt ; la plupart des décès surviennent avant l’hôpital ou par sous-estimation de la gravité',
    urgences: ['crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Sibilants', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'GINA — Global Strategy for Asthma Management and Prevention',
      'Guide clinique et thérapeutique',
      'Médicaments essentiels — guide pratique d’utilisation',
    ],
    niveaux: {
      cs: [
        '- Salbutamol en chambre d’inhalation, prednisolone, oxygène si disponible, transfert',
        '- Absence de réponse, signes de gravité',
      ],
      hgr: ['- Nébulisations, oxygène, corticoïdes, sulfate de magnésium', '- Épuisement, hypercapnie'],
      tert: ['- Réanimation, ventilation', ''],
    },
    alertes: {
      'crise-d-asthme-aigue-grave':
        'Asthmatique ne pouvant plus parler, tirage, SpO2 < 92 % ou silence auscultatoire',
    },
    formes: [
      {
        nom: 'Crise sévère',
        type: 'commune',
        description: 'Dyspnée intense avec réponse au traitement.',
        terrain: '- Asthme mal contrôlé',
        fonctionnels: '- Dyspnée, parle par phrases courtes',
        generaux: '- Tachycardie',
        physiques: '- Sibilants diffus, tirage',
        paraclinique: '- DEP 33–50 %',
        etiologies: '- Infection virale, arrêt du traitement',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [['debit-expiratoire-de-pointe', 'Sévérité']],
      },
      {
        nom: 'Asthme menaçant la vie',
        type: 'gravite',
        description: 'Épuisement respiratoire.',
        terrain: '- Antécédent d’intubation',
        fonctionnels: '- Impossibilité de parler',
        generaux: '- Confusion, bradycardie',
        physiques: '- Silence auscultatoire, cyanose',
        paraclinique: '- SpO2 < 92 %, PaCO2 ≥ 45 mmHg',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Pleurésie
  {
    ...PNEUMO,
    slug: 'pleuresie',
    nom: 'Pleurésie (dont tuberculeuse)',
    resume:
      'Épanchement liquidien pleural : ponction exploratrice (exsudat ou transsudat) ; en RDC, la tuberculose est la première cause d’exsudat lymphocytaire ; traitement de la cause, drainage des pleurésies purulentes.',
    definition:
      'Présence de liquide dans la cavité pleurale : transsudat (cause mécanique) ou exsudat (atteinte de la plèvre : infection, tuberculose, cancer).',
    physiopathologie:
      '## Mécanismes\n- Transsudat : hausse de la pression hydrostatique (insuffisance cardiaque) ou baisse de la pression oncotique (cirrhose, syndrome néphrotique)\n- Exsudat : inflammation ou infiltration pleurale (tuberculose, pneumonie, cancer)\n- Pleurésie tuberculeuse : réaction d’hypersensibilité, peu de bacilles dans le liquide',
    diagnostic:
      '## Clinique\n- Douleur thoracique pleurale, toux sèche aux changements de position, dyspnée\n- **Syndrome d’épanchement** : matité, abolition des vibrations vocales et du murmure vésiculaire\n- Signes de tuberculose : fièvre vespérale, sueurs, amaigrissement\n\n## Paraclinique\n- Radiographie : opacité déclive à limite supérieure concave (ligne de Damoiseau)\n- Échographie : confirmation, repérage\n- **Ponction pleurale** : critères de Light (exsudat si protides pleural/sérique > 0,5, LDH pleural/sérique > 0,6) ; formule cellulaire, glucose, Gram, culture, GeneXpert, cytologie',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Opacité déclive, abondance.'],
      [
        'confirmation',
        'ponction-epanchement',
        'Exsudat/transsudat, cellules, glucose, pH, Gram, culture, GeneXpert, cytologie.',
      ],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['etiologique', 'xpert-mtb-rif', 'Liquide pleural et crachats (sensibilité faible dans le liquide).'],
      ['etiologique', 'biopsie-histologie', 'Biopsie pleurale : granulome tuberculeux, cancer.'],
      ['premiere_intention', 'ldh', 'Critères de Light.'],
      ['premiere_intention', 'bilan-hepatique', 'Protides sériques, cirrhose.'],
      ['etiologique', 'echocardiographie', 'Insuffisance cardiaque.'],
      ['etiologique', 'proteinurie', 'Syndrome néphrotique.'],
    ],
    scores: [],
    differentiels: [
      [
        'pneumonie-communautaire-adulte',
        'Condensation sans épanchement (souffle tubaire, opacité non déclive).',
      ],
      ['Atélectasie', 'Rétraction, déviation médiastinale vers l’opacité.'],
      ['pericardite-aigue-et-tamponnade', 'Épanchement péricardique : cardiomégalie en carafe.'],
    ],
    etiologies:
      '## Exsudats\n- **Tuberculose** (surtout PVVIH, adulte jeune)\n- Pleurésie parapneumonique et purulente\n- Cancers (poumon, sein, lymphome, mésothéliome), sarcome de Kaposi\n- Embolie pulmonaire, abcès amibien du foie\n\n## Transsudats\n- Insuffisance cardiaque, cirrhose, syndrome néphrotique, hypoalbuminémie',
    principes: [
      [
        'Pleurésie tuberculeuse',
        'Guérir et limiter les séquelles.',
        '- Traitement antituberculeux standard 2RHZE/4RH (**rifampicine**, **isoniazide**, **pyrazinamide**, **éthambutol**)\n- Évacuation si épanchement abondant et dyspnéique\n- Kinésithérapie respiratoire (prévention du pachypleurite)\n- PVVIH : ARV dans les 2 semaines',
      ],
      [
        'Pleurésie purulente',
        'Drainer et stériliser.',
        '- **Drainage thoracique** systématique\n- Antibiotiques IV prolongés (**ceftriaxone** + **métronidazole**, ou amoxicilline-acide clavulanique) 3 à 6 semaines\n- Chirurgie si cloisonnement',
      ],
      [
        'Autres causes',
        'Traiter la cause.',
        '- Transsudat : traiter l’insuffisance cardiaque, la cirrhose, le syndrome néphrotique (diurétiques)\n- Néoplasique : évacuations, talcage, oncologie',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'Pleurésie tuberculeuse'],
      ['isoniazide', 'premiere', 'Pleurésie tuberculeuse'],
      ['pyrazinamide', 'premiere', 'Pleurésie tuberculeuse'],
      ['ethambutol', 'premiere', 'Pleurésie tuberculeuse'],
      ['ceftriaxone', 'premiere', 'Pleurésie purulente'],
      ['metronidazole', 'premiere', 'Anaérobies (pleurésie purulente)'],
      ['furosemide', 'adjuvant', 'Transsudat (insuffisance cardiaque)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Pachypleurite et séquelles',
        description: 'Tuberculose, pleurésie purulente.',
        traitement: '- Kinésithérapie, décortication',
        clinique: '- Dyspnée, rétraction thoracique',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Empyème cloisonné',
        description: 'Retard de drainage.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Fièvre persistante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Insuffisance respiratoire',
        description: 'Épanchement abondant.',
        traitement: '- Évacuation',
        clinique: '- Dyspnée de repos',
        paraclinique: '- SpO2',
      },
    ],
    evolution:
      '## Pronostic\n- Pleurésie tuberculeuse : guérison sous traitement, séquelles pleurales fréquentes ; pronostic des pleurésies néoplasiques sombre',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide technique de prise en charge de la tuberculose',
      'ERS — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Reconnaître un syndrome d’épanchement, test VIH, crachats pour GeneXpert, transfert',
        '- Dyspnée, fièvre élevée',
      ],
      hgr: [
        '- Radiographie, ponction, antituberculeux, drainage',
        '- Empyème cloisonné, suspicion de cancer',
      ],
      tert: ['- Biopsie pleurale, chirurgie thoracique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pleurésie tuberculeuse',
        type: 'etiologique',
        description: 'Exsudat lymphocytaire de l’adulte jeune.',
        terrain: '- Adulte jeune, PVVIH',
        fonctionnels: '- Douleur thoracique, toux, dyspnée',
        generaux: '- Fièvre, sueurs, amaigrissement',
        physiques: '- Syndrome d’épanchement',
        paraclinique: '- Exsudat lymphocytaire, protides élevés',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien', 'syndrome-d-impregnation-tuberculeuse'],
      },
      {
        nom: 'Pleurésie de forme commune',
        type: 'commune',
        description: 'Épanchement de moyenne abondance.',
        terrain: '- Tout âge',
        fonctionnels: '- Douleur, toux aux changements de position',
        generaux: '',
        physiques: '- Matité, abolition du murmure',
        paraclinique: '- Opacité déclive',
        etiologies: '- Selon la ponction',
        syndromes: ['syndrome-d-epanchement-pleural-liquidien'],
        examens: [['ponction-epanchement', 'Diagnostic']],
      },
      {
        nom: 'Pleurésie purulente',
        type: 'gravite',
        description: 'Empyème.',
        terrain: '- Pneumonie, alcool, diabète',
        fonctionnels: '- Douleur, dyspnée',
        generaux: '- Fièvre élevée, altération',
        physiques: '- Syndrome d’épanchement',
        paraclinique: '- Liquide purulent, glucose bas, germes',
        etiologies: '- Pneumocoque, staphylocoque, anaérobies',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Pneumothorax
  {
    ...PNEUMO,
    slug: 'pneumothorax-spontane',
    nom: 'Pneumothorax spontané',
    resume:
      'Air dans la plèvre : douleur thoracique brutale et dyspnée, abolition du murmure, radiographie ; abstention ou exsufflation si bien toléré, drainage si mal toléré ou secondaire ; exsufflation immédiate si compressif.',
    definition:
      'Irruption d’air dans la cavité pleurale entraînant un collapsus pulmonaire, primaire (sujet sans maladie pulmonaire, souvent jeune, longiligne, fumeur) ou secondaire (BPCO, tuberculose, pneumocystose).',
    physiopathologie:
      '## Mécanismes\n- Rupture de bulles sous-pleurales (primaire) ou de lésions pulmonaires (secondaire)\n- Collapsus pulmonaire, hypoxémie\n- Pneumothorax compressif : mécanisme de valve, hausse de la pression intrathoracique, compression médiastinale, choc',
    diagnostic:
      '## Clinique\n- **Douleur thoracique brutale** latérale, dyspnée, toux sèche\n- Hémithorax distendu, **tympanisme**, abolition des vibrations vocales et du murmure vésiculaire\n\n## Signes de gravité (compressif)\n- Détresse respiratoire, hypotension, turgescence jugulaire, déviation trachéale, SpO2 < 90 %\n- **Le pneumothorax compressif est un diagnostic clinique : exsuffler sans attendre la radiographie**\n\n## Radiographie\n- Hyperclarté sans trame vasculaire, ligne pleurale ; taille : grand si ≥ 2 cm au hile',
    examens: [
      [
        'confirmation',
        'radiographie-thoracique',
        'Ligne de plèvre viscérale, hyperclarté, déviation médiastinale.',
      ],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Retentissement.'],
      ['etiologique', 'xpert-mtb-rif', 'Pneumothorax secondaire : tuberculose.'],
      ['etiologique', 'tdr-vih', 'Pneumocystose, tuberculose.'],
      ['gravite', 'gaz-du-sang', 'Pneumothorax secondaire mal toléré.'],
    ],
    scores: [],
    differentiels: [
      ['embolie-pulmonaire', 'Dyspnée brutale, murmure conservé.'],
      ['syndrome-coronarien-aigu-st-plus', 'Douleur constrictive, ECG.'],
      ['asthme-aigu-grave', 'Sibilants diffus, mais peut se compliquer de pneumothorax.'],
      ['Grosse bulle d’emphysème', 'Pas de ligne pleurale, scanner.'],
    ],
    etiologies:
      '## Primaire\n- Homme jeune, grand, mince, **fumeur** (tabac, cannabis)\n\n## Secondaire\n- BPCO, emphysème, **tuberculose**, pneumocystose (VIH), asthme\n\n## Autres\n- Traumatique, iatrogène (pose de cathéter central, ponction pleurale)',
    principes: [
      [
        'Pneumothorax compressif',
        'Sauver la vie.',
        '- **Exsufflation à l’aiguille** immédiate (cathéter de gros calibre, 2e espace intercostal sur la ligne médio-claviculaire ou 4e–5e espace sur la ligne axillaire moyenne)\n- Puis **drainage thoracique**',
      ],
      [
        'Primaire bien toléré',
        'Laisser le poumon se réexpandre.',
        '- Petit et peu symptomatique : surveillance, radiographie de contrôle\n- Grand ou symptomatique : **exsufflation à l’aiguille** ou drain de petit calibre\n- **Oxygène** (accélère la résorption)',
      ],
      [
        'Secondaire',
        'Sécuriser.',
        '- Hospitalisation, drainage thoracique le plus souvent\n- Traitement de la maladie sous-jacente (tuberculose, pneumocystose)',
      ],
      [
        'Prévention des récidives',
        'Éviter un nouvel épisode.',
        '- **Arrêt du tabac**\n- Pleurodèse chirurgicale après récidive ou fuite persistante\n- Éviter la plongée et les voyages en avion jusqu’à guérison',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Accélère la résorption, hypoxémie'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['tramadol', 'adjuvant', 'Douleur du drain'],
    ],
    complications: [
      {
        nom: 'Pneumothorax compressif',
        description: 'Mécanisme de valve.',
        traitement: '- Exsufflation immédiate',
        clinique: '- Choc, détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: '30 % des pneumothorax primaires.',
        traitement: '- Pleurodèse',
        clinique: '- Nouvelle douleur brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hémopneumothorax',
        description: 'Rupture d’une bride vascularisée.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Pâleur, hypotension',
        paraclinique: '- Niveau hydro-aérique',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour le pneumothorax primaire ; plus grave pour le secondaire selon la maladie sous-jacente',
    urgences: [],
    symptomes: [
      ['Douleur thoracique', 'tres_frequent'],
      ['Dyspnée', 'tres_frequent'],
      ['Toux', 'occasionnel'],
      ['Tachypnée', 'frequent'],
      ['Hypotension', 'rare'],
    ],
    sources: [
      'ERS — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Reconnaître le pneumothorax, exsufflation à l’aiguille si compressif, oxygène, transfert',
        '- Tout pneumothorax',
      ],
      hgr: ['- Radiographie, exsufflation, drainage thoracique', '- Fuite persistante, récidive'],
      tert: ['- Chirurgie thoracique (pleurodèse)', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pneumothorax spontané primaire',
        type: 'commune',
        description: 'Douleur brutale chez le sujet jeune.',
        terrain: '- Homme jeune longiligne fumeur',
        fonctionnels: '- Douleur thoracique brutale, dyspnée',
        generaux: '',
        physiques: '- Tympanisme, abolition du murmure',
        paraclinique: '- Ligne pleurale à la radiographie',
        etiologies: '- Bulles sous-pleurales',
        syndromes: [],
        examens: [['radiographie-thoracique', 'Confirmation']],
      },
      {
        nom: 'Pneumothorax compressif',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '- Ventilation, traumatisme, pneumothorax secondaire',
        fonctionnels: '- Détresse respiratoire',
        generaux: '- Hypotension, tachycardie',
        physiques: '- Turgescence jugulaire, déviation trachéale',
        paraclinique: '- Déviation médiastinale',
        etiologies: '- Mécanisme de valve',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Goutte
  {
    ...RHUMATO,
    slug: 'goutte',
    nom: 'Goutte',
    resume:
      'Arthrite microcristalline par dépôts d’urate : crise aiguë du gros orteil ; colchicine, AINS ou corticoïde pour la crise, allopurinol au long cours avec objectif d’uricémie < 60 mg/L.',
    definition:
      'Maladie liée à la cristallisation d’urate monosodique dans les articulations et les tissus, consécutive à une hyperuricémie chronique (> 60 mg/L, 360 µmol/L).',
    physiopathologie:
      '## Mécanismes\n- Hyperuricémie : défaut d’élimination rénale (90 %) ou surproduction\n- Dépôts de cristaux, inflammation aiguë (inflammasome, IL-1)\n- Goutte chronique : tophus, arthropathie destructrice, néphropathie et lithiase uratique',
    diagnostic:
      '## Crise aiguë\n- Début brutal, souvent nocturne, douleur intense\n- **Métatarso-phalangienne du gros orteil** (podagre) dans 50 à 70 % des premières crises ; cheville, genou\n- Articulation rouge, chaude, très gonflée ; fébricule\n- Résolution spontanée en 1 à 2 semaines\n\n## Confirmation\n- **Cristaux d’urate** dans le liquide articulaire (référence)\n- Uricémie (peut être normale pendant la crise)\n- Échographie : signe du double contour\n\n## Goutte chronique\n- Crises répétées, tophus (oreilles, coudes, doigts), arthropathie',
    examens: [
      ['confirmation', 'ponction-articulaire', 'Cristaux d’urate ; élimine une arthrite septique.'],
      ['premiere_intention', 'uricemie', 'Élevée (à contrôler à distance de la crise).'],
      ['premiere_intention', 'creatinine', 'Choix et dose des traitements.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose ; hémopathie.'],
      ['etiologique', 'glycemie', 'Syndrome métabolique.'],
      ['etiologique', 'bilan-lipidique', 'Risque cardiovasculaire.'],
      ['suivi', 'echographie-renale', 'Lithiase uratique.'],
    ],
    scores: [],
    differentiels: [
      [
        'Arthrite septique',
        'Fièvre élevée, liquide purulent, germe : urgence (ponction indispensable si doute).',
      ],
      ['Chondrocalcinose', 'Sujet âgé, genou, poignet, cristaux de pyrophosphate.'],
      ['rhumatisme-articulaire-aigu-adulte', 'Polyarthrite migratrice des grosses articulations, ASLO.'],
      ['Érysipèle ou cellulite', 'Placard cutané sans arthrite.'],
      ['drepanocytose', 'Crise douloureuse, électrophorèse.'],
    ],
    etiologies:
      '## Facteurs\n- Homme d’âge moyen, obésité, syndrome métabolique, HTA\n- Alcool (bière), viandes rouges, abats, fruits de mer, sodas sucrés\n- **Diurétiques** (thiazidiques, furosémide), aspirine à faible dose, ciclosporine\n- Insuffisance rénale\n- Lyse cellulaire (hémopathies, chimiothérapie), psoriasis',
    principes: [
      [
        'Traiter la crise tôt',
        'Calmer l’inflammation.',
        '- **Colchicine** 1 mg puis 0,5 mg 1 h après (J1), puis 0,5 mg 2 à 3 fois par jour jusqu’à la fin de la crise (réduire si insuffisance rénale)\n- Ou **AINS** (**ibuprofène**, **diclofénac**, indométacine) si rein normal\n- Ou **prednisolone** 30 à 35 mg/j 5 jours (insuffisance rénale, contre-indication aux AINS)\n- Glace, repos de l’articulation',
      ],
      [
        'Traitement hypo-uricémiant',
        'Dissoudre les cristaux.',
        '- Indications : crises répétées (≥ 2/an), tophus, arthropathie, lithiase, insuffisance rénale\n- **Allopurinol** 100 mg/j, augmenté de 100 mg toutes les 2 à 4 semaines jusqu’à **uricémie < 60 mg/L** (< 50 si tophus)\n- **Fébuxostat** si intolérance\n- Prophylaxie des crises par **colchicine** 0,5–1 mg/j pendant les 6 premiers mois\n- Ne pas arrêter pendant une crise',
      ],
      [
        'Mesures hygiéno-diététiques',
        'Réduire les crises et les risques associés.',
        '- Réduction de l’alcool, des sodas sucrés, des abats et viandes rouges\n- Perte de poids, hydratation\n- Remplacer les diurétiques thiazidiques si possible (losartan, amlodipine)\n- Prise en charge du risque cardiovasculaire',
      ],
    ],
    molecules: [
      ['colchicine', 'premiere', 'Crise et prophylaxie à l’instauration de l’allopurinol'],
      ['ibuprofene', 'premiere', 'Crise (rein normal)'],
      ['diclofenac', 'alternative', 'Crise'],
      ['indometacine', 'alternative', 'Crise'],
      ['prednisolone', 'alternative', 'Crise si AINS et colchicine contre-indiqués'],
      ['allopurinol', 'premiere', 'Hypo-uricémiant'],
      ['febuxostat', 'deuxieme', 'Intolérance à l’allopurinol'],
      ['losartan', 'adjuvant', 'HTA associée (effet uricosurique)'],
    ],
    complications: [
      {
        nom: 'Tophus et arthropathie destructrice',
        description: 'Goutte chronique non traitée.',
        traitement: '- Allopurinol (uricémie < 50 mg/L)',
        clinique: '- Nodules, déformations',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Lithiase urique et néphropathie',
        fiche: 'maladie-renale-chronique',
        description: 'Dépôts rénaux.',
        traitement: '- Hydratation, alcalinisation, allopurinol',
        clinique: '- Colique néphrétique',
        paraclinique: '- Échographie, créatinine',
      },
      {
        nom: 'Toxidermie grave à l’allopurinol',
        description: 'Syndrome DRESS ou de Stevens-Johnson, surtout en début de traitement.',
        traitement: '- Arrêt définitif, hospitalisation',
        clinique: '- Éruption, fièvre',
        paraclinique: '- Bilan hépatique, éosinophiles',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous traitement hypo-uricémiant bien conduit ; associée à un risque cardiovasculaire élevé',
    urgences: [],
    symptomes: [
      ['Gonflement articulaire', 'tres_frequent'],
      ['Arthralgies', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Nodules sous-cutanés', 'occasionnel'],
    ],
    sources: [
      'EULAR — recommandations de pratique clinique',
      'ACR — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Traitement de la crise (colchicine, AINS), conseils, poursuite de l’allopurinol',
        '- Doute avec une arthrite septique, crises répétées',
      ],
      hgr: ['- Ponction articulaire, uricémie, allopurinol', '- Goutte tophacée sévère'],
      tert: ['- Rhumatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Crise de goutte du gros orteil',
        type: 'commune',
        description: 'Monoarthrite aiguë très douloureuse.',
        terrain: '- Homme de plus de 40 ans, alcool, diurétique',
        fonctionnels: '- Douleur nocturne insupportable',
        generaux: '- Fébricule',
        physiques: '- Métatarso-phalangienne rouge, chaude, gonflée',
        paraclinique: '- Cristaux d’urate, uricémie élevée',
        etiologies: '- Hyperuricémie',
        syndromes: [],
        examens: [['ponction-articulaire', 'Cristaux']],
      },
      {
        nom: 'Goutte tophacée chronique',
        type: 'evolutive',
        description: 'Tophus et atteinte polyarticulaire.',
        terrain: '- Goutte ancienne non traitée',
        fonctionnels: '- Douleurs chroniques, crises fréquentes',
        generaux: '',
        physiques: '- Tophus (oreilles, coudes, doigts), déformations',
        paraclinique: '- Érosions à l’emporte-pièce',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
