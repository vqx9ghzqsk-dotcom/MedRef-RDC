'use strict';

/**
 * Lot 41 (phase 2, infectiologie pédiatrique) — mpox de l'enfant, scarlatine, encéphalites
 * virales de l'enfant, trypanosomiase de l'enfant, schistosomiase de l'enfant, infection
 * congénitale à cytomégalovirus. Rédigé par IA (OMS, Nelson, programmes nationaux) : à valider.
 */

const INFPED = { departement: 'pediatrie', specialite: 'Infectiologie pédiatrique' };

module.exports = [
  // =================================================================== Mpox enfant
  {
    ...INFPED,
    slug: 'mpox-enfant',
    nom: 'Mpox de l’enfant',
    resume:
      'En RDC, les enfants représentent une grande part des cas de mpox (clade I), avec une gravité et une mortalité plus élevées, surtout chez le nourrisson, l’enfant malnutri ou vivant avec le VIH : fièvre, adénopathies puis éruption vésiculo-pustuleuse ; PCR sur lésion ; isolement, soins de soutien (hydratation, nutrition, soins cutanés et oculaires, antalgie), traitement des surinfections ; notification et recherche des contacts ; vaccination selon la stratégie nationale.',
    definition:
      'Infection par le virus mpox (orthopoxvirus) chez l’enfant, transmise par contact avec une personne ou un animal infectés, ou de la mère au fœtus.',
    physiopathologie:
      '## Transmission\n- Contacts familiaux étroits (peau, lésions, literie), gouttelettes, animaux (rongeurs, singes), transmission materno-fœtale\n\n## Gravité chez l’enfant\n- Nourrisson, malnutrition, VIH non traité, absence de vaccination antivariolique : formes étendues, surinfections bactériennes, pneumonie, déshydratation, encéphalite, atteinte oculaire',
    diagnostic:
      '## Clinique\n- Prodromes : fièvre, céphalées, fatigue, **adénopathies** (cervicales, inguinales)\n- **Éruption** : macules puis papules, vésicules, **pustules ombiliquées**, croûtes, toutes au même stade ; visage, paumes, plantes, bouche, région génitale\n- Signes de gravité : lésions nombreuses ou confluentes, refus de boire ou de manger, lésions buccales, atteinte oculaire, dyspnée, troubles de conscience, surinfection\n\n## Examens\n- **PCR mpox** sur écouvillon de lésion (vésicule, croûte)\n- **Test VIH**, NFS, état nutritionnel, glycémie\n- Diagnostic différentiel avec la **varicelle**',
    examens: [
      ['confirmation', 'pcr-mpox', 'Lésion cutanée.'],
      ['premiere_intention', 'tdr-vih', 'Facteur de gravité.'],
      ['premiere_intention', 'anthropometrie', 'Malnutrition.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['gravite', 'nfs', 'Surinfection.'],
    ],
    scores: [],
    differentiels: [
      ['varicelle', 'Lésions d’âges différents, peu d’adénopathies.'],
      ['impetigo', 'Croûtes mélicériques, pas de fièvre.'],
      ['gale-enfant', 'Prurit, sillons.'],
      ['rougeole', 'Éruption maculo-papuleuse, toux, conjonctivite.'],
      ['herpes-cutaneo-muqueux', 'Vésicules groupées localisées.'],
    ],
    etiologies:
      '## Facteurs\n- Contact familial avec un cas, consommation ou manipulation de gibier, zones d’endémie (Équateur, Sankuru, Sud-Kivu…)',
    principes: [
      [
        'Isolement et notification',
        'Limiter la transmission.',
        '- Isolement à domicile ou dans une structure dédiée jusqu’à la chute de toutes les croûtes\n- Notification, recherche et suivi des contacts\n- L’allaitement peut être poursuivi selon l’évaluation et les recommandations en vigueur',
      ],
      [
        'Soins de soutien',
        'Prévenir les complications.',
        '- **Hydratation** (SRO, perfusion si besoin), **nutrition** (prise en charge de la malnutrition)\n- **Paracétamol** pour la fièvre et la douleur ; bains de bouche, soins des lésions (antiseptique), prurit\n- **Soins oculaires** (lavages) ; avis ophtalmologique si atteinte cornéenne\n- **Surinfection** cutanée : **amoxicilline-acide clavulanique** ou cloxacilline\n- VIH : ARV ; traitement antiviral spécifique seulement dans le cadre des protocoles',
      ],
      [
        'Prévention',
        'Protéger.',
        '- **Vaccination** selon la stratégie nationale (personnes contacts, zones touchées)\n- Hygiène des mains, éviter le contact avec les animaux sauvages',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre, douleur'],
      ['sro', 'premiere', 'Hydratation'],
      ['amoxicilline', 'alternative', 'Surinfection (avec acide clavulanique)'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Soins des lésions'],
      ['vitamine-a-retinol', 'adjuvant', 'Enfant malnutri'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'pyodermites',
        description: 'Fréquente.',
        traitement: '- Antibiotiques',
        clinique: '- Pus, cellulite',
        paraclinique: '',
      },
      {
        nom: 'Déshydratation et malnutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Lésions buccales.',
        traitement: '- Réhydratation, renutrition',
        clinique: '- Refus de boire, amaigrissement',
        paraclinique: '',
      },
      {
        nom: 'Pneumonie et sepsis',
        fiche: 'sepsis-enfant',
        description: 'Formes graves.',
        traitement: '- Antibiotiques, oxygène',
        clinique: '- Détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Kératite et cécité',
        fiche: 'conjonctivite-enfant',
        description: 'Atteinte oculaire.',
        traitement: '- Soins oculaires, avis spécialisé',
        clinique: '- Œil rouge, douleur',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 2 à 4 semaines ; mortalité plus élevée chez le jeune enfant, le malnutri et l’enfant VIH (clade I)',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Éruption vésiculeuse', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Adénopathies', 'frequent'],
      ['Refus de téter', 'occasionnel'],
      ['Yeux rouges', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Isolement, notification, prélèvement, soins de soutien, orientation',
        '- Signes de gravité, nourrisson, malnutrition, VIH',
      ],
      hgr: ['- Hospitalisation, réhydratation, nutrition, antibiotiques', ''],
      tert: ['- Centres de traitement, ophtalmologie', ''],
    },
    alertes: { 'deshydratation-severe-enfant': 'Enfant atteint de mpox qui ne boit plus' },
    formes: [
      {
        nom: 'Mpox non compliqué',
        type: 'commune',
        description: 'Éruption limitée.',
        terrain: '- Enfant contact d’un cas',
        fonctionnels: '- Douleurs, prurit',
        generaux: '- Fièvre',
        physiques: '- Pustules ombiliquées, adénopathies',
        paraclinique: '- PCR positive',
        etiologies: '- Virus mpox',
        syndromes: [],
      },
      {
        nom: 'Mpox grave de l’enfant',
        type: 'gravite',
        description: 'Forme étendue.',
        terrain: '- Nourrisson, malnutrition, VIH',
        fonctionnels: '- Refus de boire',
        generaux: '- Fièvre élevée, déshydratation',
        physiques: '- Lésions confluentes, buccales, oculaires',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Scarlatine
  {
    ...INFPED,
    slug: 'scarlatine',
    nom: 'Scarlatine',
    resume:
      'Angine à streptocoque A sécréteur de toxine chez l’enfant de 3 à 10 ans : fièvre, angine, éruption rugueuse en « papier de verre » prédominant aux plis, langue framboisée, desquamation ; amoxicilline 50 mg/kg/j 10 jours (ou benzathine pénicilline dose unique) pour prévenir le rhumatisme articulaire aigu ; éviction 24 h après le début des antibiotiques.',
    definition:
      'Toxi-infection due au streptocoque β-hémolytique du groupe A (Streptococcus pyogenes) producteur d’exotoxine pyrogène, associant une angine et une éruption caractéristique.',
    physiopathologie:
      '## Mécanismes\n- Angine streptococcique, toxines érythrogènes responsables de l’éruption\n- Complications : suppurées (abcès, otite, adénite) et **post-streptococciques** (rhumatisme articulaire aigu, glomérulonéphrite)',
    diagnostic:
      '## Clinique\n- Début brutal : **fièvre**, **angine** rouge, vomissements, céphalées\n- **Éruption** en 12–48 h : érythème diffus granité, rugueux au toucher (« papier de verre »), plus marqué aux **plis** (lignes de Pastia), pâleur péribuccale\n- **Langue** blanche puis **framboisée** (J4–J6)\n- **Desquamation** des mains et des pieds après une semaine\n\n## Examens\n- Test de diagnostic rapide streptococcique ou prélèvement de gorge si disponible\n- Bandelette urinaire à 2–3 semaines (glomérulonéphrite)',
    examens: [
      ['confirmation', 'prelevement-de-gorge', 'TDR ou culture : streptocoque A.'],
      ['etiologique', 'aslo', 'Infection streptococcique récente.'],
      ['deuxieme_intention', 'bandelette-urinaire', 'Glomérulonéphrite post-streptococcique.'],
    ],
    scores: [],
    differentiels: [
      ['rougeole', 'Toux, conjonctivite, Köplik.'],
      ['Maladie de Kawasaki', 'Fièvre > 5 jours, conjonctivite, adénopathie, atteinte des extrémités.'],
      ['toxidermies-graves', 'Prise médicamenteuse.'],
      ['Syndrome du choc toxique', 'Choc, défaillances.'],
      ['rubeole', 'Éruption pâle, adénopathies occipitales.'],
    ],
    etiologies: '## Agent\n- Streptocoque β-hémolytique du groupe A',
    principes: [
      [
        'Antibiotiques',
        'Guérir et prévenir les complications.',
        '- **Amoxicilline** 50 mg/kg/j en 1 à 2 prises (maximum 1 g/j) pendant **10 jours**\n- Ou **benzathine benzylpénicilline** IM dose unique : 600 000 UI (< 30 kg), 1,2 MUI (≥ 30 kg) — utile si observance incertaine\n- Allergie : azithromycine 12 mg/kg/j 5 jours',
      ],
      [
        'Mesures associées',
        'Soulager et limiter la contagion.',
        '- **Paracétamol**, hydratation\n- Éviction scolaire jusqu’à 24 h après le début des antibiotiques\n- Surveillance des complications (arthrites, souffle cardiaque, urines foncées)',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', '10 jours'],
      ['benzathine-benzylpenicilline', 'alternative', 'Dose unique'],
      ['azithromycine', 'alternative', 'Allergie aux pénicillines'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Rhumatisme articulaire aigu',
        fiche: 'rhumatisme-articulaire-aigu-enfant',
        description: 'Post-streptococcique.',
        traitement: '- Prévention par les antibiotiques',
        clinique: '- Arthrites, cardite',
        paraclinique: '- ASLO, échocardiographie',
      },
      {
        nom: 'Glomérulonéphrite aiguë',
        fiche: 'glomerulonephrite-aigue-post-streptococcique',
        description: '1–3 semaines après.',
        traitement: '- Restriction sodée, furosémide',
        clinique: '- Œdèmes, urines foncées',
        paraclinique: '- Hématurie',
      },
      {
        nom: 'Complications suppurées',
        fiche: 'abces-peri-amygdalien',
        description: 'Abcès, otite, adénite.',
        traitement: '- Antibiotiques, drainage',
        clinique: '- Trismus, otalgie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous antibiotiques ; risque de complications post-streptococciques sans traitement',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Mal de gorge', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Langue framboisée', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Adénopathies', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Amoxicilline ou benzathine pénicilline, éviction', '- Complications'],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Scarlatine typique',
        type: 'commune',
        description: 'Angine et éruption.',
        terrain: '- Enfant de 3 à 10 ans',
        fonctionnels: '- Mal de gorge, vomissements',
        generaux: '- Fièvre élevée',
        physiques: '- Éruption rugueuse des plis, langue framboisée',
        paraclinique: '- TDR streptococcique positif',
        etiologies: '- Streptocoque A',
        syndromes: [],
      },
      {
        nom: 'Scarlatine compliquée',
        type: 'gravite',
        description: 'Complications.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Arthrites, œdèmes, souffle',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Encéphalites virales
  {
    ...INFPED,
    slug: 'encephalites-virales-enfant',
    nom: 'Encéphalites virales de l’enfant',
    resume:
      'Fièvre avec troubles de conscience, convulsions, troubles du comportement ou signes focaux : traiter en urgence les causes curables (neuropaludisme, méningite bactérienne, encéphalite herpétique) avant les résultats — artésunate si TDR positif, ceftriaxone, aciclovir IV 20 mg/kg toutes les 8 h ; causes virales : herpès, rougeole, varicelle, entérovirus, arbovirus, VIH, rage ; soins de soutien, traitement des convulsions et de l’HTIC.',
    definition:
      'Inflammation du parenchyme cérébral d’origine virale, se traduisant par une fièvre et une atteinte neurologique (troubles de conscience, convulsions, déficits, troubles du comportement).',
    physiopathologie:
      '## Agents\n- **Herpès simplex** (encéphalite herpétique : nécrose temporale, grave et traitable)\n- **Rougeole** (encéphalite aiguë, panencéphalite sclérosante tardive), **varicelle**, **entérovirus**, **VIH** (encéphalopathie), **rage**\n- Arbovirus (dengue, chikungunya, encéphalites), Ebola (rarement neurologique)\n\n## Diagnostics à éliminer\n- **Neuropaludisme**, **méningite bactérienne** ou tuberculeuse, abcès cérébral, hypoglycémie, intoxication, THA',
    diagnostic:
      '## Clinique\n- **Fièvre**, **céphalées**, vomissements\n- **Troubles de conscience** (somnolence à coma), **convulsions** (souvent focales), troubles du comportement, confusion\n- Signes focaux (hémiparésie, aphasie), mouvements anormaux\n- Éruption (rougeole, varicelle), hydrophobie (rage)\n\n## Examens\n- **Glycémie**, **TDR paludisme**, NFS, ionogramme\n- **Ponction lombaire** (après scanner si signes d’HTIC ou focaux) : pléiocytose lymphocytaire, protéines modérément élevées, glucose normal ; PCR HSV si disponible\n- Test VIH ; EEG, imagerie cérébrale si disponibles',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'tdr-paludisme', 'Neuropaludisme.'],
      ['confirmation', 'lcr', 'Méningo-encéphalite lymphocytaire.'],
      ['premiere_intention', 'nfs', 'Infection.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['etiologique', 'tdr-vih', 'Encéphalopathie du VIH.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Avant ponction si signes focaux, abcès.'],
      ['deuxieme_intention', 'eeg', 'État de mal non convulsif.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'TDR positif.'],
      ['meningite-bacterienne-enfant', 'LCR purulent.'],
      ['rage', 'Morsure, hydrophobie.'],
      ['tha-phase-neurologique', 'Zone d’endémie, troubles du sommeil.'],
      ['intoxications-enfant', 'Toxique, absence de fièvre.'],
    ],
    etiologies: '## Agents fréquents\n- Herpès simplex, rougeole, varicelle, entérovirus, VIH, rage',
    principes: [
      [
        'Traitements empiriques urgents',
        'Ne pas attendre les résultats.',
        '- **Artésunate** IV si TDR positif ou indisponible en zone d’endémie\n- **Ceftriaxone** 100 mg/kg/j si méningite bactérienne non exclue\n- **Aciclovir IV** **20 mg/kg toutes les 8 h** (enfant de 3 mois à 12 ans ; 10 mg/kg toutes les 8 h après 12 ans), **14 à 21 jours** si encéphalite herpétique confirmée ou probable',
      ],
      [
        'Soins de soutien',
        'Protéger le cerveau.',
        '- Voies aériennes, oxygène, position latérale, **glycémie**\n- **Convulsions** : diazépam, phénobarbital\n- HTIC : tête à 30°, restriction hydrique modérée si hyponatrémie, mannitol\n- Nutrition, soins du comateux, rééducation',
      ],
      [
        'Prévention',
        'Vacciner.',
        '- Vaccination contre la rougeole, prophylaxie de la rage après morsure, prise en charge du VIH',
      ],
    ],
    molecules: [
      ['aciclovir', 'premiere', 'Encéphalite herpétique'],
      ['ceftriaxone', 'premiere', 'Méningite non exclue'],
      ['artesunate', 'premiere', 'Neuropaludisme possible'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['phenobarbital', 'alternative', 'Convulsions répétées'],
      ['mannitol', 'adjuvant', 'Hypertension intracrânienne'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-convulsif-enfant',
        description: 'Encéphalite.',
        traitement: '- Benzodiazépines, phénobarbital',
        clinique: '- Convulsions prolongées',
        paraclinique: '',
      },
      {
        nom: 'Séquelles neurologiques',
        fiche: 'paralysie-cerebrale',
        description: 'Encéphalite herpétique, rougeole.',
        traitement: '- Rééducation',
        clinique: '- Déficits, épilepsie, troubles cognitifs',
        paraclinique: '',
      },
      {
        nom: 'Hypertension intracrânienne',
        fiche: 'hypertension-intracranienne',
        description: 'Œdème cérébral.',
        traitement: '- Mesures anti-HTIC',
        clinique: '- Coma, vomissements',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Encéphalite herpétique : mortalité > 70 % sans aciclovir, 10–20 % avec ; séquelles fréquentes',
    urgences: ['paludisme-grave-urgence', 'syndrome-meninge-febrile', 'etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Troubles de la conscience', 'tres_frequent'],
      ['Convulsions', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'WHO guidelines on meningitis diagnosis, treatment and care',
    ],
    niveaux: {
      cs: [
        '- Glycémie, TDR, artésunate, ceftriaxone, diazépam, transfert',
        '- Tout enfant fébrile avec troubles de conscience ou convulsions',
      ],
      hgr: ['- Ponction lombaire, aciclovir IV, soins intensifs', ''],
      tert: ['- Neuropédiatrie, imagerie, EEG', ''],
    },
    alertes: {
      'paludisme-grave-urgence': 'Enfant fébrile avec troubles de conscience en zone d’endémie',
      'syndrome-meninge-febrile': 'Fièvre avec raideur de nuque',
      'etat-de-mal-epileptique-urgence': 'Convulsions prolongées fébriles',
    },
    formes: [
      {
        nom: 'Encéphalite virale aiguë',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant',
        fonctionnels: '- Céphalées, comportement anormal',
        generaux: '- Fièvre',
        physiques: '- Troubles de conscience, convulsions',
        paraclinique: '- LCR lymphocytaire',
        etiologies: '- Virus',
        syndromes: ['syndrome-confusionnel', 'syndrome-convulsif'],
      },
      {
        nom: 'Encéphalite herpétique',
        type: 'gravite',
        description: 'Urgence thérapeutique.',
        terrain: '',
        fonctionnels: '- Troubles du langage, du comportement',
        generaux: '- Fièvre élevée',
        physiques: '- Convulsions focales, hémiparésie',
        paraclinique: '- PCR HSV, lésions temporales',
        etiologies: '- Herpès simplex',
        syndromes: [],
      },
    ],
  },

  // =================================================================== THA enfant
  {
    ...INFPED,
    slug: 'trypanosomiase-enfant',
    nom: 'Trypanosomiase de l’enfant',
    resume:
      'Maladie du sommeil (T. b. gambiense) chez l’enfant de zone d’endémie : fièvre, adénopathies cervicales, retard de croissance, troubles du comportement, de l’apprentissage et du sommeil, convulsions ; dépistage sérologique puis confirmation parasitologique ; traitement selon l’âge, le poids et le stade : fexinidazole (≥ 6 ans et ≥ 20 kg), pentamidine (stade 1, enfant plus jeune), NECT (stade 2 sévère) selon les directives du PNLTHA.',
    definition:
      'Trypanosomiase humaine africaine à Trypanosoma brucei gambiense chez l’enfant, transmise par la mouche tsé-tsé ou, plus rarement, de la mère à l’enfant.',
    physiopathologie:
      '## Transmission\n- Piqûre de glossine (activités près des rivières, des champs) ; transmission congénitale possible\n\n## Particularités de l’enfant\n- Évolution parfois plus rapide, retentissement sur la croissance et le développement\n- Phase lymphatico-sanguine puis méningo-encéphalitique (troubles cognitifs, du comportement, convulsions)',
    diagnostic:
      '## Clinique\n- Fièvre intermittente, **adénopathies cervicales postérieures**, hépatosplénomégalie, œdèmes, prurit\n- **Retard de croissance**, amaigrissement\n- Phase neurologique : somnolence diurne, irritabilité, troubles de l’apprentissage et du comportement, convulsions, troubles moteurs\n\n## Examens\n- **Dépistage** sérologique (TDR, CATT), puis **parasitologie** (suc ganglionnaire, sang)\n- **Ponction lombaire** pour le stade (selon le protocole)\n- TDR paludisme, NFS, test VIH, état nutritionnel',
    examens: [
      ['premiere_intention', 'depistage-tha', 'Dépistage sérologique.'],
      ['confirmation', 'parasitologie-tha', 'Trypanosomes.'],
      ['confirmation', 'lcr', 'Stadification.'],
      ['premiere_intention', 'tdr-paludisme', 'Diagnostic différentiel.'],
      ['premiere_intention', 'anthropometrie', 'Retard de croissance.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-simple-enfant', 'Fièvre, TDR positif.'],
      ['tuberculose-enfant', 'Adénopathies, toux, contage.'],
      ['infection-vih-enfant', 'Adénopathies, retard de croissance.'],
      ['epilepsie-onchocercose', 'Zone d’onchocercose, hochements de tête.'],
      ['encephalites-virales-enfant', 'Installation aiguë.'],
    ],
    etiologies:
      '## Facteurs\n- Résidence en foyer de THA (Kwilu, Kasaï, Kongo-Central, Équateur…), mère infectée',
    principes: [
      [
        'Traitement selon le protocole national',
        'Guérir.',
        '- **Fexinidazole** per os 10 jours chez l’enfant **≥ 6 ans et ≥ 20 kg** (formes non sévères), avec un repas\n- Enfant plus jeune ou de moins de 20 kg : **pentamidine** 4 mg/kg/j IM pendant 7 jours (stade 1) ; **NECT** (nifurtimox per os + éflornithine IV, doses par kg) pour le stade 2\n- Forme sévère (≥ 100 leucocytes/mm³ dans le LCR) : NECT\n- Les nouvelles options (acoziborole) suivent les recommandations nationales selon l’âge',
      ],
      [
        'Soins associés',
        'Soutenir.',
        '- Traitement du paludisme et des parasitoses, renutrition, traitement des convulsions\n- Suivi du développement et de la scolarité\n- Dépistage de la famille et de la communauté',
      ],
    ],
    molecules: [
      ['fexinidazole', 'premiere', 'Enfant ≥ 6 ans et ≥ 20 kg'],
      ['pentamidine', 'premiere', 'Stade 1, jeune enfant'],
      ['nifurtimox', 'alternative', 'NECT'],
      ['eflornithine', 'alternative', 'NECT'],
      ['diazepam', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Atteinte neurologique et séquelles',
        fiche: 'tha-phase-neurologique',
        description: 'Stade 2.',
        traitement: '- Traitement précoce',
        clinique: '- Troubles cognitifs, du comportement',
        paraclinique: '- LCR',
      },
      {
        nom: 'Malnutrition et retard de croissance',
        fiche: 'malnutrition-chronique',
        description: 'Maladie chronique.',
        traitement: '- Renutrition',
        clinique: '- Retard statural',
        paraclinique: '- Anthropométrie',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement ; séquelles neuropsychiques si diagnostic tardif',
    urgences: [],
    symptomes: [
      ['Fièvre', 'frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Dépistage, orientation, fexinidazole selon le programme', '- Signes neurologiques'],
      hgr: ['- Confirmation, ponction lombaire, traitement', ''],
      tert: ['- Formes compliquées', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'THA de l’enfant en phase lymphatico-sanguine',
        type: 'commune',
        description: 'Stade 1.',
        terrain: '- Enfant en zone d’endémie',
        fonctionnels: '',
        generaux: '- Fièvre intermittente',
        physiques: '- Adénopathies cervicales postérieures',
        paraclinique: '- Trypanosomes, LCR normal',
        etiologies: '- T. b. gambiense',
        syndromes: [],
      },
      {
        nom: 'THA de l’enfant en phase neurologique',
        type: 'gravite',
        description: 'Stade 2.',
        terrain: '',
        fonctionnels: '- Somnolence, troubles du comportement',
        generaux: '- Amaigrissement',
        physiques: '- Convulsions, troubles moteurs',
        paraclinique: '- LCR anormal',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Schistosomiase enfant
  {
    ...INFPED,
    slug: 'schistosomiase-enfant',
    nom: 'Schistosomiase de l’enfant',
    resume:
      'Bilharziose urinaire (S. haematobium : hématurie terminale) ou intestinale (S. mansoni : douleurs, diarrhée, hépatosplénomégalie) chez l’enfant d’âge scolaire au contact de l’eau douce : œufs dans les urines ou les selles ; praziquantel 40 mg/kg dose unique (formulation pédiatrique d’arpraziquantel chez les moins de 6 ans selon disponibilité) ; traitement de masse scolaire ; anémie, retard de croissance et fibrose si infections répétées.',
    definition:
      'Infection de l’enfant par les schistosomes (S. haematobium, S. mansoni, S. intercalatum), contractée lors de contacts avec l’eau douce infestée.',
    physiopathologie:
      '## Transmission\n- Pénétration cutanée des cercaires lors des baignades, de la pêche, des corvées d’eau\n- Les œufs bloqués dans les tissus provoquent inflammation et fibrose\n\n## Conséquences chez l’enfant\n- **Anémie**, **retard de croissance**, troubles cognitifs et scolaires\n- Lésions vésicales et urétérales (S. haematobium), fibrose hépatique et hypertension portale (S. mansoni)\n- Schistosomiase génitale féminine (dès l’enfance)',
    diagnostic:
      '## Clinique\n- **S. haematobium** : **hématurie terminale**, brûlures mictionnelles\n- **S. mansoni** : douleurs abdominales, diarrhée parfois sanglante, **hépatosplénomégalie**\n- Prurit après baignade, fièvre (forme aiguë)\n\n## Examens\n- **Bandelette urinaire** (hématurie) et **filtration des urines** (prélèvement entre 10 h et 14 h) : œufs\n- **Examen des selles** (Kato-Katz) : œufs de S. mansoni\n- NFS (anémie, éosinophilie), échographie (vessie, foie, rate)',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['confirmation', 'oeufs-schistosomes-urines', 'S. haematobium.'],
      ['confirmation', 'examen-parasitologique-selles', 'S. mansoni.'],
      ['premiere_intention', 'nfs', 'Anémie, éosinophilie.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Vessie, fibrose hépatique.'],
    ],
    scores: [],
    differentiels: [
      ['infection-urinaire-enfant', 'Fièvre, leucocyturie.'],
      ['glomerulonephrite-aigue-post-streptococcique', 'Œdèmes, HTA, hématurie totale.'],
      ['parasitoses-intestinales-enfant', 'Autres helminthiases.'],
      ['drepanocytose', 'Hématurie, splénomégalie (enfant jeune).'],
    ],
    etiologies:
      '## Facteurs\n- Baignades et activités dans les rivières, lacs et étangs, absence d’accès à l’eau potable et aux latrines',
    principes: [
      [
        'Traitement',
        'Tuer les vers.',
        '- **Praziquantel** **40 mg/kg** en dose unique, au cours d’un repas (enfant capable d’avaler les comprimés)\n- Enfant de moins de 6 ans : formulation pédiatrique (arpraziquantel) selon disponibilité et le programme national\n- Contrôle des œufs 4 à 6 semaines après ; retraitement si persistance',
      ],
      [
        'Traitement de masse et prévention',
        'Réduire la morbidité.',
        '- Distribution de praziquantel en milieu scolaire et communautaire selon la prévalence (programme national)\n- Accès à l’eau potable, latrines, éducation sanitaire',
      ],
      [
        'Mesures associées',
        'Corriger les conséquences.',
        '- Traitement de l’anémie (fer), déparasitage associé (albendazole), suivi de la croissance',
      ],
    ],
    molecules: [
      ['praziquantel', 'premiere', 'Dose unique 40 mg/kg'],
      ['albendazole', 'adjuvant', 'Géohelminthiases associées'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Fibrose vésicale et urétérale',
        fiche: 'schistosomiase-urogenitale',
        description: 'S. haematobium chronique.',
        traitement: '- Praziquantel, chirurgie',
        clinique: '- Hydronéphrose',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Fibrose hépatique',
        fiche: 'schistosomiase-hepatosplenique',
        description: 'S. mansoni chronique.',
        traitement: '- Praziquantel, propranolol',
        clinique: '- Splénomégalie, hématémèse',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Anémie et retard de croissance',
        fiche: 'anemie-enfant',
        description: 'Pertes de sang chroniques.',
        traitement: '- Fer, praziquantel',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous traitement ; réinfections fréquentes en l’absence de mesures d’assainissement',
    urgences: [],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Diarrhée sanglante', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Bandelette, praziquantel, traitement de masse', '- Hématémèse, hydronéphrose, anémie sévère'],
      hgr: ['- Échographie, prise en charge des complications', ''],
      tert: ['- Urologie, hépatologie pédiatriques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Schistosomiase urinaire',
        type: 'commune',
        description: 'S. haematobium.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Hématurie terminale',
        generaux: '',
        physiques: '',
        paraclinique: '- Œufs dans les urines',
        etiologies: '- S. haematobium',
        syndromes: [],
      },
      {
        nom: 'Schistosomiase intestinale',
        type: 'topographique',
        description: 'S. mansoni.',
        terrain: '',
        fonctionnels: '- Douleurs, diarrhée',
        generaux: '',
        physiques: '- Hépatosplénomégalie',
        paraclinique: '- Œufs dans les selles',
        etiologies: '- S. mansoni',
        syndromes: [],
      },
    ],
  },

  // =================================================================== CMV congénital
  {
    ...INFPED,
    slug: 'cmv-congenital',
    nom: 'Infection congénitale à cytomégalovirus',
    resume:
      'Infection congénitale la plus fréquente, première cause non génétique de surdité de l’enfant : nouveau-né souvent asymptomatique ou avec retard de croissance, microcéphalie, pétéchies, ictère, hépatosplénomégalie, choriorétinite ; PCR CMV urines ou salive avant 21 jours ; dépistage auditif ; valganciclovir 6 mois pour les formes symptomatiques (centre spécialisé) ; suivi de l’audition et du développement.',
    definition:
      'Infection du fœtus par le cytomégalovirus (herpèsvirus) transmise au cours de la grossesse, lors d’une primo-infection ou d’une réactivation maternelle.',
    physiopathologie:
      '## Mécanismes\n- Transmission transplacentaire ; atteinte du cerveau (calcifications, microcéphalie), de l’oreille interne, de la rétine, du foie, de la moelle osseuse\n- Plus fréquente chez les mères vivant avec le VIH\n- 10 % des nouveau-nés infectés sont symptomatiques ; des séquelles (surdité) peuvent apparaître chez des enfants asymptomatiques',
    diagnostic:
      '## Clinique\n- **Retard de croissance intra-utérin**, **microcéphalie**, **pétéchies** (thrombopénie), **ictère**, **hépatosplénomégalie**\n- **Choriorétinite**, **surdité** de perception, convulsions, hypotonie\n- Souvent asymptomatique\n\n## Examens\n- **PCR CMV** sur urines ou salive **avant 21 jours de vie**\n- NFS (thrombopénie), bilan hépatique, bilirubine\n- **Échographie transfontanellaire** (calcifications périventriculaires), **audiométrie** (potentiels évoqués), fond d’œil\n- Statut VIH de la mère',
    examens: [
      ['confirmation', 'pcr-cmv', 'Avant 21 jours.'],
      ['premiere_intention', 'nfs', 'Thrombopénie.'],
      ['premiere_intention', 'bilan-hepatique', 'Hépatite.'],
      ['premiere_intention', 'echographie-transfontanellaire', 'Calcifications, ventriculomégalie.'],
      ['premiere_intention', 'audiometrie', 'Surdité.'],
      ['premiere_intention', 'fond-d-oeil', 'Choriorétinite.'],
    ],
    scores: [],
    differentiels: [
      ['syphilis-congenitale', 'RPR positif, pemphigus palmo-plantaire.'],
      ['rubeole', 'Rubéole congénitale : cataracte, cardiopathie.'],
      ['Toxoplasmose congénitale', 'Calcifications diffuses, sérologie.'],
      ['sepsis-neonatal', 'Infection bactérienne.'],
      ['ictere-neonatal', 'Autres causes d’ictère.'],
    ],
    etiologies:
      '## Facteurs\n- Primo-infection maternelle pendant la grossesse, mère vivant avec le VIH, contact avec de jeunes enfants',
    principes: [
      [
        'Formes symptomatiques',
        'Limiter les séquelles.',
        '- **Valganciclovir** 16 mg/kg per os 2 fois par jour pendant **6 mois**, débuté avant 1 mois de vie, dans un centre spécialisé (surveillance de la NFS)\n- Traitement de soutien (thrombopénie, ictère, convulsions)',
      ],
      [
        'Suivi',
        'Dépister les séquelles.',
        '- **Audition** régulière jusqu’à 5–6 ans (surdité d’apparition retardée), appareillage précoce\n- Fond d’œil, suivi du développement, kinésithérapie et orthophonie',
      ],
      [
        'Prévention',
        'Réduire la transmission.',
        '- Hygiène pendant la grossesse (lavage des mains après contact avec la salive et les couches des jeunes enfants)\n- ARV chez la mère vivant avec le VIH',
      ],
    ],
    molecules: [
      ['valganciclovir', 'premiere', 'Formes symptomatiques'],
      ['phenobarbital', 'adjuvant', 'Convulsions'],
    ],
    complications: [
      {
        nom: 'Surdité de perception',
        description: 'Séquelle la plus fréquente.',
        traitement: '- Appareillage, implant',
        clinique: '- Retard de langage',
        paraclinique: '- Audiométrie',
      },
      {
        nom: 'Retard de développement et paralysie cérébrale',
        fiche: 'retard-developpement-psychomoteur',
        description: 'Atteinte cérébrale.',
        traitement: '- Rééducation',
        clinique: '- Retard psychomoteur',
        paraclinique: '',
      },
      {
        nom: 'Épilepsie',
        fiche: 'epilepsie-enfant',
        description: 'Calcifications cérébrales.',
        traitement: '- Antiépileptiques',
        clinique: '- Convulsions',
        paraclinique: '- EEG',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour la plupart des formes asymptomatiques ; séquelles neurosensorielles chez la majorité des formes symptomatiques',
    urgences: [],
    symptomes: [
      ['Ictère', 'frequent'],
      ['Hépatomégalie', 'frequent'],
      ['Splénomégalie', 'frequent'],
      ['Purpura', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Repérer le nouveau-né symptomatique, orienter',
        '- Microcéphalie, pétéchies, ictère avec hépatosplénomégalie',
      ],
      hgr: ['- Bilan, PCR, dépistage auditif', ''],
      tert: ['- Néonatologie, valganciclovir, ORL', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'CMV congénital asymptomatique',
        type: 'commune',
        description: 'La plupart des cas.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- PCR positive',
        etiologies: '- CMV',
        syndromes: [],
      },
      {
        nom: 'CMV congénital symptomatique',
        type: 'gravite',
        description: 'Atteinte multiviscérale.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Retard de croissance',
        physiques: '- Microcéphalie, pétéchies, hépatosplénomégalie',
        paraclinique: '- Thrombopénie, calcifications',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
