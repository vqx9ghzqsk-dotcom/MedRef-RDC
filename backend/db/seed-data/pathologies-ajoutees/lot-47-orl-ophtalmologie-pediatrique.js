'use strict';

/**
 * Lot 47 (phase 2, ORL et ophtalmologie pédiatriques) — otite moyenne chronique, mastoïdite,
 * sinusite de l'enfant, hypertrophie adénoïdienne, cataracte congénitale. Rédigé par IA (OMS,
 * Pocket book, Nelson, IDSA) : à valider.
 */

const ORLOPH = { departement: 'pediatrie', specialite: 'ORL et ophtalmologie pédiatriques' };

module.exports = [
  // =================================================================== OMC
  {
    ...ORLOPH,
    slug: 'otite-moyenne-chronique',
    nom: 'Otite moyenne chronique',
    resume:
      'Écoulement purulent de l’oreille depuis plus de 2 semaines à travers une perforation tympanique (otite moyenne chronique suppurée), très fréquent chez l’enfant en RDC (otites aiguës mal traitées, malnutrition, VIH) : première cause évitable de surdité de l’enfant ; méchage sec de l’oreille 3 fois par jour (assèchement), gouttes de quinolone (ciprofloxacine) pendant 2 semaines ; pas de gouttes ototoxiques ; rechercher le cholestéatome et les complications (mastoïdite, méningite, abcès cérébral, paralysie faciale) ; dépister la surdité.',
    definition:
      'Inflammation chronique de l’oreille moyenne avec perforation tympanique et otorrhée persistante (> 2 semaines selon l’OMS), avec ou sans cholestéatome.',
    physiopathologie:
      '## Mécanismes\n- Otites moyennes aiguës répétées ou mal traitées → perforation persistante → infection chronique (Pseudomonas aeruginosa, Staphylococcus aureus, Proteus, anaérobies)\n- Facteurs : malnutrition, VIH, promiscuité, fumée domestique, baignades en eau souillée, hypertrophie adénoïdienne\n\n## Cholestéatome\n- Poche de peau dans l’oreille moyenne qui détruit les osselets et l’os : otorrhée fétide, risque de complications intracrâniennes',
    diagnostic:
      '## Clinique\n- **Otorrhée** chronique, souvent indolore, purulente ; **hypoacousie**\n- **Otoscopie** (après nettoyage) : perforation centrale (forme simple) ou marginale avec squames blanches (cholestéatome)\n- Signes d’alarme : **douleur**, **fièvre**, **tuméfaction rétro-auriculaire**, céphalées, vertiges, **paralysie faciale**, raideur de nuque, troubles de conscience\n\n## Examens\n- **Otoscopie**, **audiométrie** (ou tests simples d’audition)\n- Prélèvement de l’écoulement si échec, test VIH\n- Scanner des rochers si cholestéatome ou complication',
    examens: [
      ['confirmation', 'otoscopie', 'Perforation tympanique.'],
      ['premiere_intention', 'audiometrie', 'Surdité de transmission.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['gravite', 'scanner-cerebral', 'Complications, cholestéatome.'],
    ],
    scores: [],
    differentiels: [
      ['otite-moyenne-aigue', 'Otorrhée récente, fébrile, < 2 semaines.'],
      ['Otite externe', 'Douleur à la traction du pavillon, tympan intact.'],
      ['Corps étranger de l’oreille', 'Otorrhée unilatérale, objet visible.'],
      ['Tuberculose de l’oreille moyenne', 'Perforations multiples, otorrhée indolore résistante.'],
    ],
    etiologies: '## Facteurs\n- OMA mal traitées, malnutrition, VIH, fumée, eau souillée',
    principes: [
      [
        'Assèchement de l’oreille',
        'Base du traitement.',
        '- **Méchage** : nettoyer l’oreille avec une mèche de coton ou de gaze roulée, 3 fois par jour, jusqu’à ce que la mèche ressorte sèche (enseigner aux parents)\n- Garder l’oreille sèche (pas de baignade, coton gras lors de la toilette)',
      ],
      [
        'Antibiotiques locaux',
        'Stériliser.',
        '- **Gouttes de quinolone** (**ciprofloxacine** ou ofloxacine) 2–3 fois par jour pendant **2 semaines**, après méchage\n- Pas de gouttes contenant des aminosides (néomycine, gentamicine) en cas de perforation (ototoxiques)\n- Antibiotiques oraux seulement si complication ou signes généraux',
      ],
      [
        'Complications et chirurgie',
        'Orienter.',
        '- Cholestéatome, complications : ORL urgent (chirurgie, antibiotiques IV)\n- Fermeture de la perforation (tympanoplastie) ; appareillage auditif ; scolarisation adaptée',
      ],
    ],
    molecules: [
      ['ciprofloxacine', 'premiere', 'Gouttes auriculaires'],
      ['ofloxacine', 'alternative', 'Gouttes auriculaires'],
      ['amoxicilline', 'adjuvant', 'Poussée aiguë avec fièvre'],
      ['ceftriaxone', 'adjuvant', 'Complications'],
    ],
    complications: [
      {
        nom: 'Surdité',
        description: 'Destruction du tympan et des osselets.',
        traitement: '- Assèchement, chirurgie, appareillage',
        clinique: '- Hypoacousie, retard de langage',
        paraclinique: '- Audiométrie',
      },
      {
        nom: 'Mastoïdite',
        fiche: 'mastoidite',
        description: 'Extension à l’os.',
        traitement: '- Antibiotiques IV, chirurgie',
        clinique: '- Tuméfaction rétro-auriculaire',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Méningite et abcès cérébral',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Extension intracrânienne.',
        traitement: '- Antibiotiques IV, neurochirurgie',
        clinique: '- Fièvre, céphalées, troubles de conscience',
        paraclinique: '- Scanner, LCS',
      },
      {
        nom: 'Paralysie faciale',
        fiche: 'paralysie-faciale-peripherique',
        description: 'Cholestéatome.',
        traitement: '- Chirurgie',
        clinique: '- Asymétrie faciale',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Assèchement chez la majorité avec méchage et quinolones ; surdité séquellaire fréquente ; complications graves en cas de cholestéatome',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Otorrhée', 'tres_frequent'],
      ['Hypoacousie', 'frequent'],
      ['Otalgie', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Méchage, gouttes de quinolone (PCIME)', '- Signes d’alarme, échec à 2 semaines'],
      hgr: ['- Otoscopie, audiométrie', '- ORL'],
      tert: ['- Chirurgie otologique', ''],
    },
    alertes: {
      'syndrome-meninge-febrile': 'Enfant avec otorrhée chronique, fièvre, céphalées et raideur de nuque',
    },
    formes: [
      {
        nom: 'OMC simple',
        type: 'commune',
        description: 'Perforation centrale.',
        terrain: '- Enfant',
        fonctionnels: '- Otorrhée, hypoacousie',
        generaux: '',
        physiques: '- Perforation centrale',
        paraclinique: '- Surdité de transmission',
        etiologies: '- OMA mal traitées',
        syndromes: [],
      },
      {
        nom: 'Cholestéatome',
        type: 'gravite',
        description: 'Destructeur.',
        terrain: '',
        fonctionnels: '- Otorrhée fétide',
        generaux: '',
        physiques: '- Perforation marginale, squames',
        paraclinique: '- Lyse osseuse au scanner',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Mastoïdite
  {
    ...ORLOPH,
    slug: 'mastoidite',
    nom: 'Mastoïdite',
    resume:
      'Infection de la mastoïde compliquant une otite moyenne aiguë ou chronique, surtout chez le jeune enfant : tuméfaction rétro-auriculaire douloureuse, rouge, chaude, décollant le pavillon vers l’avant et le bas, fièvre, otorrhée ; urgence : ceftriaxone IV (+ cloxacilline ou métronidazole selon le contexte), incision-drainage de l’abcès sous-périosté, mastoïdectomie si échec ou cholestéatome ; rechercher les complications intracrâniennes (méningite, abcès cérébral, thrombophlébite du sinus latéral).',
    definition:
      'Ostéite infectieuse des cellules mastoïdiennes de l’os temporal, complication d’une otite moyenne, avec ou sans abcès sous-périosté.',
    physiopathologie:
      '## Mécanismes\n- Extension de l’infection de l’oreille moyenne aux cellules mastoïdiennes → destruction osseuse, abcès sous-périosté\n- Germes : pneumocoque, streptocoque A, Haemophilus, staphylocoque ; Pseudomonas et anaérobies dans les formes chroniques\n\n## Extensions\n- **Intracrâniennes** : méningite, abcès cérébral ou cérébelleux, thrombophlébite du sinus latéral\n- Paralysie faciale, labyrinthite, abcès cervical (Bezold)',
    diagnostic:
      '## Clinique\n- **Tuméfaction rétro-auriculaire** inflammatoire, fluctuante (abcès), **décollement du pavillon**, effacement du sillon rétro-auriculaire\n- **Fièvre**, otalgie, otorrhée, tympan bombant ou perforé\n- Signes d’alarme : céphalées, vomissements, raideur de nuque, troubles de conscience, convulsions, paralysie faciale, vertiges\n\n## Examens\n- NFS, CRP, hémocultures\n- **Scanner des rochers et cérébral** injecté (abcès, complications intracrâniennes) si disponible\n- Prélèvement du pus (culture) ; PL si signes méningés (après imagerie si signes focaux)',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['confirmation', 'scanner-cerebral', 'Ostéite, abcès, complications.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['premiere_intention', 'otoscopie', 'Otite associée.'],
      ['gravite', 'lcr', 'Méningite.'],
    ],
    scores: [],
    differentiels: [
      [
        'adenopathies-enfant',
        'Adénopathie rétro-auriculaire (teigne, infection du cuir chevelu), pavillon non décollé.',
      ],
      ['Otite externe compliquée', 'Douleur à la traction, tympan normal.'],
      ['abces-phlegmons-parties-molles', 'Abcès cutané rétro-auriculaire.'],
      ['Lymphome', 'Masse non inflammatoire.'],
    ],
    etiologies: '## Causes\n- OMA non ou mal traitée, otite moyenne chronique, cholestéatome',
    principes: [
      [
        'Antibiothérapie IV',
        'Urgence.',
        '- **Ceftriaxone** 100 mg/kg/j IV (méningée si complication), associée à la **cloxacilline** (staphylocoque) ou au **métronidazole** (forme chronique, anaérobies)\n- Relais oral (amoxicilline-acide clavulanique) pour une durée totale de 3 à 4 semaines selon l’évolution',
      ],
      [
        'Chirurgie',
        'Drainer.',
        '- **Incision-drainage** de l’abcès sous-périosté, paracentèse ou aérateur\n- **Mastoïdectomie** si échec, cholestéatome ou complication\n- Traitement des complications intracrâniennes (neurochirurgie)',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiothérapie IV'],
      ['cloxacilline', 'premiere', 'Couverture staphylococcique'],
      ['metronidazole', 'alternative', 'Anaérobies (forme chronique)'],
      ['amoxicilline', 'alternative', 'Relais oral (avec acide clavulanique)'],
      ['acide-clavulanique', 'alternative', 'Relais oral'],
      ['paracetamol', 'adjuvant', 'Douleur, fièvre'],
    ],
    complications: [
      {
        nom: 'Méningite',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Extension.',
        traitement: '- Antibiotiques à dose méningée',
        clinique: '- Raideur, troubles de conscience',
        paraclinique: '- LCS',
      },
      {
        nom: 'Abcès cérébral',
        description: 'Lobe temporal, cervelet.',
        traitement: '- Antibiotiques, neurochirurgie',
        clinique: '- Céphalées, signes focaux',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Thrombophlébite du sinus latéral',
        description: 'Extension veineuse.',
        traitement: '- Antibiotiques, anticoagulation discutée',
        clinique: '- Céphalées, HTIC',
        paraclinique: '- Scanner injecté',
      },
      {
        nom: 'Paralysie faciale',
        fiche: 'paralysie-faciale-peripherique',
        description: 'Atteinte du nerf facial.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Asymétrie faciale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon avec antibiotiques IV et drainage précoces ; complications intracrâniennes graves si retard',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Tuméfaction rétro-auriculaire', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Otalgie', 'tres_frequent'],
      ['Otorrhée', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Première dose d’antibiotique, transfert', '- Toute tuméfaction rétro-auriculaire fébrile'],
      hgr: ['- Antibiotiques IV, drainage', '- ORL, scanner'],
      tert: ['- Mastoïdectomie, neurochirurgie', ''],
    },
    alertes: {
      'syndrome-meninge-febrile': 'Enfant avec mastoïdite et céphalées, raideur ou troubles de conscience',
    },
    formes: [
      {
        nom: 'Mastoïdite aiguë extériorisée',
        type: 'commune',
        description: 'Abcès sous-périosté.',
        terrain: '- Jeune enfant, OMA récente',
        fonctionnels: '- Otalgie',
        generaux: '- Fièvre',
        physiques: '- Tuméfaction rétro-auriculaire, pavillon décollé',
        paraclinique: '- Ostéite au scanner',
        etiologies: '- Pneumocoque, streptocoque',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Mastoïdite compliquée',
        type: 'gravite',
        description: 'Extension intracrânienne.',
        terrain: '- OMC, cholestéatome',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '',
        physiques: '- Raideur, signes focaux',
        paraclinique: '- Abcès, thrombophlébite',
        etiologies: '',
        syndromes: ['syndrome-meninge', 'syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Sinusite enfant
  {
    ...ORLOPH,
    slug: 'sinusite-enfant',
    nom: 'Sinusite de l’enfant',
    resume:
      'Infection des sinus de la face, souvent après un rhume : à suspecter si rhinorrhée et toux persistant plus de 10 jours sans amélioration, aggravation secondaire (« double malade ») ou début sévère (fièvre ≥ 39 °C et rhinorrhée purulente ≥ 3 jours) ; ethmoïdite aiguë du jeune enfant (œdème palpébral fébrile) : urgence (cellulite orbitaire) ; amoxicilline 10 jours pour la sinusite aiguë bactérienne, lavages au sérum physiologique ; ceftriaxone IV pour l’ethmoïdite.',
    definition:
      'Inflammation infectieuse de la muqueuse des sinus paranasaux chez l’enfant, aiguë (< 30 jours) ou chronique (> 90 jours) ; les sinus se développent progressivement (ethmoïde dès la naissance, maxillaire vers 3–4 ans, frontal vers 7–10 ans).',
    physiopathologie:
      '## Mécanismes\n- Rhinopharyngite virale → obstruction des ostia → surinfection bactérienne (pneumocoque, Haemophilus influenzae, Moraxella)\n- Facteurs : hypertrophie adénoïdienne, allergie, fumée, VIH, drépanocytose, corps étranger nasal (unilatéral)\n\n## Ethmoïdite\n- Jeune enfant (< 5 ans) : extension orbitaire (cellulite péri-orbitaire puis orbitaire, abcès sous-périosté), thrombophlébite du sinus caverneux',
    diagnostic:
      '## Sinusite aiguë bactérienne\n- Rhinorrhée (purulente ou non), obstruction nasale, **toux** diurne et nocturne **> 10 jours** sans amélioration\n- Ou aggravation après une amélioration initiale, ou début sévère (fièvre élevée + rhinorrhée purulente ≥ 3 jours)\n- Céphalées, douleur faciale chez le grand enfant, haleine fétide\n\n## Ethmoïdite aiguë\n- **Œdème palpébral** fébrile unilatéral, douleur ; signes de gravité orbitaire : **exophtalmie**, **baisse de l’acuité visuelle**, **ophtalmoplégie**, chémosis\n\n## Examens\n- Diagnostic clinique ; pas de radiographie des sinus\n- **Scanner** des sinus et de l’orbite si ethmoïdite compliquée, complication intracrânienne ou forme chronique avant chirurgie',
    examens: [
      ['gravite', 'scanner-cervico-facial', 'Ethmoïdite compliquée, abcès orbitaire.'],
      ['premiere_intention', 'nfs', 'Formes graves.'],
      ['premiere_intention', 'crp', 'Formes graves.'],
      ['gravite', 'acuite-visuelle', 'Atteinte orbitaire.'],
    ],
    scores: [],
    differentiels: [
      ['Rhinopharyngite virale', 'Évolution favorable en moins de 10 jours.'],
      ['corps-etrangers-orl', 'Rhinorrhée unilatérale fétide.'],
      ['hypertrophie-adenoidienne', 'Obstruction nasale chronique, ronflements.'],
      ['Rhinite allergique', 'Éternuements, prurit nasal, rhinorrhée claire.'],
    ],
    etiologies:
      '## Germes\n- Pneumocoque, Haemophilus influenzae, Moraxella catarrhalis, staphylocoque (ethmoïdite)',
    principes: [
      [
        'Sinusite aiguë',
        'Traitement oral.',
        '- **Lavages de nez** au sérum physiologique, hydratation, antipyrétiques\n- **Amoxicilline** 80–90 mg/kg/j en 2 prises pendant **10 jours** (ou 7 jours après disparition des symptômes)\n- Échec à 72 h : **amoxicilline-acide clavulanique** ; allergie : céfuroxime ou azithromycine',
      ],
      [
        'Ethmoïdite',
        'Urgence.',
        '- Forme simple (œdème palpébral sans signe orbitaire) : amoxicilline-acide clavulanique, surveillance quotidienne\n- Forme orbitaire : hospitalisation, **ceftriaxone** IV + **cloxacilline**, avis ORL et ophtalmologique, drainage chirurgical si abcès',
      ],
      [
        'Sinusite chronique',
        'Rechercher une cause.',
        '- Végétations, allergie (corticoïde nasal), corps étranger, immunodépression (VIH), mucoviscidose',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Sinusite aiguë'],
      ['acide-clavulanique', 'alternative', 'Échec, ethmoïdite simple'],
      ['cefuroxime', 'alternative', 'Allergie à la pénicilline'],
      ['ceftriaxone', 'premiere', 'Ethmoïdite orbitaire'],
      ['cloxacilline', 'premiere', 'Ethmoïdite orbitaire'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Lavages de nez'],
      ['mometasone-furoate', 'adjuvant', 'Sinusite chronique allergique'],
    ],
    complications: [
      {
        nom: 'Cellulite et abcès orbitaires',
        description: 'Ethmoïdite.',
        traitement: '- Antibiotiques IV, drainage',
        clinique: '- Exophtalmie, baisse de vision',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Méningite et abcès cérébral',
        fiche: 'meningite-bacterienne-enfant',
        description: 'Sinusite frontale.',
        traitement: '- Antibiotiques IV, neurochirurgie',
        clinique: '- Céphalées, troubles de conscience',
        paraclinique: '- Scanner, LCS',
      },
      {
        nom: 'Thrombophlébite du sinus caverneux',
        description: 'Extension veineuse.',
        traitement: '- Antibiotiques IV',
        clinique: '- Ophtalmoplégie bilatérale',
        paraclinique: '- Scanner',
      },
    ],
    evolution: '## Pronostic\n- Favorable sous traitement ; ethmoïdite orbitaire : risque visuel si retard',
    urgences: [],
    symptomes: [
      ['Rhinorrhée', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Obstruction nasale', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Céphalées', 'occasionnel'],
      ['Œdème du visage', 'occasionnel'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Lavages, amoxicilline', '- Œdème palpébral fébrile, signes orbitaires'],
      hgr: ['- Antibiotiques IV, scanner', '- ORL, ophtalmologie'],
      tert: ['- Chirurgie endoscopique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Sinusite maxillaire aiguë',
        type: 'commune',
        description: 'Après un rhume.',
        terrain: '- Enfant > 3 ans',
        fonctionnels: '- Toux, rhinorrhée > 10 jours',
        generaux: '- Fièvre modérée',
        physiques: '- Rhinorrhée purulente',
        paraclinique: '',
        etiologies: '- Pneumocoque, Haemophilus',
        syndromes: [],
      },
      {
        nom: 'Ethmoïdite aiguë',
        type: 'gravite',
        description: 'Jeune enfant.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre élevée',
        physiques: '- Œdème palpébral, exophtalmie',
        paraclinique: '- Abcès au scanner',
        etiologies: '- Staphylocoque, pneumocoque',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Hypertrophie adénoïdienne
  {
    ...ORLOPH,
    slug: 'hypertrophie-adenoidienne',
    nom: 'Hypertrophie adénoïdienne',
    resume:
      'Augmentation du volume des végétations adénoïdes (souvent avec les amygdales) chez l’enfant de 2 à 7 ans : obstruction nasale, respiration buccale, ronflements, rhinorrhée chronique, otites à répétition et otite séromuqueuse (hypoacousie) ; syndrome d’apnées obstructives du sommeil (pauses respiratoires, sommeil agité, énurésie, somnolence, troubles de l’attention, retard de croissance, cœur pulmonaire) ; corticoïde nasal et lavages ; adéno-amygdalectomie si apnées, otites récidivantes ou séromuqueuse avec surdité.',
    definition:
      'Hypertrophie du tissu lymphoïde du rhinopharynx (végétations adénoïdes) responsable d’une obstruction des voies aériennes supérieures et de complications otologiques et respiratoires.',
    physiopathologie:
      '## Mécanismes\n- Croissance physiologique du tissu lymphoïde entre 2 et 7 ans, amplifiée par les infections répétées, l’allergie, la fumée\n- Obstruction de la trompe d’Eustache → **otites moyennes aiguës récidivantes**, **otite séromuqueuse** (surdité)\n- Obstruction des voies aériennes → **apnées obstructives du sommeil** → hypoxie nocturne, retentissement cardiaque (hypertension pulmonaire), croissance, comportement\n- Enfant drépanocytaire : hypoxie nocturne favorisant les crises et les AVC',
    diagnostic:
      '## Clinique\n- **Obstruction nasale** chronique, **respiration buccale**, voix nasonnée, rhinorrhée, **ronflements**\n- **Apnées** observées par les parents, sommeil agité, sueurs nocturnes, **énurésie**, céphalées matinales, somnolence ou hyperactivité diurne, difficultés scolaires\n- **Otites** récidivantes, **hypoacousie** (otite séromuqueuse)\n- Faciès adénoïdien (bouche ouverte, palais ogival), amygdales volumineuses\n\n## Examens\n- Otoscopie, **audiométrie** (tympanométrie)\n- Radiographie du cavum de profil ou nasofibroscopie (ORL)\n- Oxymétrie nocturne ou polygraphie si disponible ; échocardiographie si apnées sévères',
    examens: [
      ['premiere_intention', 'otoscopie', 'Otite séromuqueuse.'],
      ['premiere_intention', 'audiometrie', 'Surdité de transmission.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Retentissement cardiaque (formes sévères).'],
      ['gravite', 'echocardiographie', 'Hypertension pulmonaire.'],
      ['gravite', 'oxymetrie-de-pouls', 'Désaturations nocturnes.'],
    ],
    scores: [],
    differentiels: [
      ['Rhinite allergique', 'Éternuements, prurit nasal.'],
      ['corps-etrangers-orl', 'Obstruction et rhinorrhée unilatérales.'],
      ['sinusite-enfant', 'Rhinorrhée purulente fébrile.'],
      ['lymphome-de-burkitt', 'Masse du cavum d’évolution rapide.'],
      ['Atrésie choanale', 'Nouveau-né, obstruction dès la naissance.'],
    ],
    etiologies: '## Facteurs\n- Âge de 2 à 7 ans, infections répétées, allergie, fumée de bois et de charbon',
    principes: [
      [
        'Traitement médical',
        'Formes modérées.',
        '- **Lavages de nez** au sérum physiologique\n- **Corticoïde nasal** (mométasone ou fluticasone) pendant 6 à 12 semaines\n- Traitement des otites, éviction de la fumée',
      ],
      [
        'Chirurgie',
        'Formes compliquées.',
        '- **Adénoïdectomie** (± amygdalectomie) : **apnées obstructives**, otites récidivantes, **otite séromuqueuse** avec surdité, obstruction nasale invalidante\n- Aérateurs transtympaniques si otite séromuqueuse persistante\n- Enfant drépanocytaire avec apnées : chirurgie préventive après préparation (transfusion selon le protocole)',
      ],
    ],
    molecules: [
      ['mometasone-furoate', 'premiere', 'Corticoïde nasal'],
      ['fluticasone-propionate-furoate', 'alternative', 'Corticoïde nasal'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Lavages de nez'],
      ['amoxicilline', 'adjuvant', 'Otite moyenne aiguë'],
    ],
    complications: [
      {
        nom: 'Otite séromuqueuse et surdité',
        description: 'Obstruction tubaire.',
        traitement: '- Aérateurs, adénoïdectomie',
        clinique: '- Hypoacousie, retard de langage',
        paraclinique: '- Audiométrie',
      },
      {
        nom: 'Otites récidivantes',
        fiche: 'otite-moyenne-aigue',
        description: 'Réservoir infectieux.',
        traitement: '- Antibiotiques, adénoïdectomie',
        clinique: '- Otalgie fébrile',
        paraclinique: '',
      },
      {
        nom: 'Apnées obstructives et cœur pulmonaire',
        description: 'Hypoxie nocturne.',
        traitement: '- Adéno-amygdalectomie',
        clinique: '- Apnées, somnolence, retard de croissance',
        paraclinique: '- Oxymétrie nocturne, échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Régression naturelle après 8–10 ans ; excellente efficacité de la chirurgie sur les apnées',
    urgences: [],
    symptomes: [
      ['Obstruction nasale', 'tres_frequent'],
      ['Ronflements', 'tres_frequent'],
      ['Rhinorrhée', 'frequent'],
      ['Hypoacousie', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Incontinence urinaire', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Lavages, traitement des otites, orientation', '- Apnées, surdité, otites récidivantes'],
      hgr: ['- Corticoïde nasal, audiométrie', '- ORL'],
      tert: ['- Adéno-amygdalectomie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Obstruction nasale chronique',
        type: 'commune',
        description: 'Respiration buccale.',
        terrain: '- Enfant de 2 à 7 ans',
        fonctionnels: '- Obstruction nasale, ronflements',
        generaux: '',
        physiques: '- Faciès adénoïdien',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome d’apnées obstructives du sommeil',
        type: 'gravite',
        description: 'Hypoxie nocturne.',
        terrain: '- Amygdales et végétations volumineuses',
        fonctionnels: '- Apnées, sommeil agité',
        generaux: '- Retard de croissance',
        physiques: '- Amygdales obstructives',
        paraclinique: '- Désaturations nocturnes',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cataracte congénitale
  {
    ...ORLOPH,
    slug: 'cataracte-congenitale',
    nom: 'Cataracte congénitale',
    resume:
      'Opacité du cristallin présente à la naissance ou apparaissant dans la première année, cause majeure de cécité évitable de l’enfant : leucocorie (reflet blanc), absence de poursuite oculaire, nystagmus, strabisme ; causes : rubéole congénitale (prévention par la vaccination), génétique, trisomie 21, galactosémie, toxoplasmose ; test du reflet rouge à la naissance et à chaque visite ; chirurgie urgente avant 6–8 semaines (unilatérale) ou 10 semaines (bilatérale), correction optique et rééducation de l’amblyopie.',
    definition:
      'Opacification totale ou partielle du cristallin présente à la naissance ou apparaissant dans la petite enfance, menaçant le développement visuel (amblyopie) si elle obstrue l’axe visuel.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : **rubéole congénitale** (cataracte, surdité, cardiopathie), toxoplasmose, CMV, varicelle, syphilis\n- **Génétiques** (familiales), **trisomie 21** et autres syndromes\n- **Métaboliques** : galactosémie, hypoglycémie néonatale, hypocalcémie\n- Prématurité, traumatisme, corticothérapie, idiopathiques\n\n## Conséquences\n- Pas d’image nette sur la rétine pendant la période critique du développement visuel → **amblyopie** profonde, **nystagmus**',
    diagnostic:
      '## Clinique\n- **Leucocorie** (pupille blanche), **reflet rouge absent** ou asymétrique à l’ophtalmoscope\n- Absence de fixation et de poursuite, **nystagmus** (formes bilatérales), **strabisme**, photophobie\n- Signes associés : microphtalmie, surdité, cardiopathie (rubéole), dysmorphie\n\n## Examens\n- **Examen à la lampe à fente**, **fond d’œil** (éliminer le **rétinoblastome**), échographie oculaire si fond d’œil impossible\n- Recherche de la cause : sérologies (rubéole, toxoplasmose, CMV, syphilis), glycémie, calcémie, recherche de galactosémie ; audiométrie et échocardiographie si rubéole',
    examens: [
      ['confirmation', 'fond-d-oeil', 'Reflet rouge, rétine.'],
      ['premiere_intention', 'acuite-visuelle', 'Fonction visuelle.'],
      ['deuxieme_intention', 'echographie-parties-molles', 'Échographie oculaire (rétinoblastome).'],
      ['etiologique', 'serologie-rougeole', 'Sérologies des infections congénitales (selon disponibilité).'],
      ['etiologique', 'serologie-syphilis', 'Syphilis congénitale.'],
      ['etiologique', 'glycemie', 'Causes métaboliques.'],
      ['premiere_intention', 'audiometrie', 'Rubéole congénitale.'],
      ['premiere_intention', 'echocardiographie', 'Rubéole congénitale.'],
    ],
    scores: [],
    differentiels: [
      ['retinoblastome', 'Leucocorie par tumeur rétinienne : urgence vitale.'],
      ['cataracte', 'Cataracte de l’adulte.'],
      ['Rétinopathie du prématuré', 'Prématuré oxygéné.'],
      ['Toxocarose oculaire', 'Granulome rétinien, enfant plus grand.'],
      ['glaucome', 'Glaucome congénital : gros œil, cornée trouble, larmoiement.'],
    ],
    etiologies:
      '## Causes\n- Rubéole congénitale, génétique, trisomie 21, métaboliques, infections congénitales',
    principes: [
      [
        'Chirurgie précoce',
        'Sauver la vision.',
        '- **Extraction du cristallin** par un chirurgien ophtalmologiste pédiatrique : **avant 6–8 semaines** pour une cataracte unilatérale dense, **avant 10 semaines** pour une bilatérale\n- Implant intraoculaire après 1–2 ans, sinon lunettes ou lentilles',
      ],
      [
        'Après la chirurgie',
        'Rééduquer.',
        '- **Correction optique** (lunettes, lentilles), **traitement de l’amblyopie** (occlusion de l’œil sain)\n- Suivi prolongé : glaucome secondaire, opacification capsulaire\n- Réadaptation basse vision si besoin, scolarisation adaptée',
      ],
      [
        'Prévention',
        'Vacciner.',
        '- **Vaccination contre la rubéole** (RR) des enfants et des femmes en âge de procréer\n- **Test du reflet rouge** à la naissance et lors des consultations du nourrisson',
      ],
    ],
    molecules: [
      ['tropicamide-collyre', 'adjuvant', 'Dilatation pupillaire (examen)'],
      ['cyclopentolate', 'adjuvant', 'Dilatation, réfraction'],
      ['dexamethasone', 'adjuvant', 'Collyre postopératoire'],
    ],
    complications: [
      {
        nom: 'Amblyopie et cécité',
        description: 'Chirurgie tardive.',
        traitement: '- Chirurgie précoce, occlusion',
        clinique: '- Absence de fixation, nystagmus',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Glaucome secondaire',
        fiche: 'glaucome',
        description: 'Après chirurgie.',
        traitement: '- Collyres, chirurgie',
        clinique: '- Gros œil, larmoiement',
        paraclinique: '- Tonométrie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pronostic visuel si chirurgie précoce et rééducation ; cécité définitive si chirurgie tardive dans les formes bilatérales denses',
    urgences: [],
    symptomes: [
      ['Leucocorie', 'tres_frequent'],
      ['Strabisme', 'frequent'],
      ['Troubles visuels', 'tres_frequent'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Test du reflet rouge, orientation urgente', '- Leucocorie, absence de poursuite'],
      hgr: ['- Examen ophtalmologique', '- Chirurgie pédiatrique'],
      tert: ['- Chirurgie de la cataracte de l’enfant', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cataracte congénitale bilatérale',
        type: 'commune',
        description: 'Risque de cécité.',
        terrain: '- Nouveau-né, nourrisson',
        fonctionnels: '- Absence de poursuite',
        generaux: '',
        physiques: '- Leucocorie bilatérale, nystagmus',
        paraclinique: '- Reflet rouge absent',
        etiologies: '- Rubéole, génétique',
        syndromes: [],
      },
      {
        nom: 'Cataracte unilatérale',
        type: 'topographique',
        description: 'Amblyopie.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Leucocorie unilatérale, strabisme',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome de rubéole congénitale',
        type: 'etiologique',
        description: 'Triade.',
        terrain: '- Mère non vaccinée',
        fonctionnels: '',
        generaux: '- Retard de croissance',
        physiques: '- Cataracte, surdité, cardiopathie',
        paraclinique: '- Sérologie',
        etiologies: '- Rubéole',
        syndromes: [],
      },
    ],
  },
];
