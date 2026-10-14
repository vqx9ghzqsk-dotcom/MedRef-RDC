'use strict';

/**
 * Lot 69 (phase 2, neurologie et neurochirurgie) — syndrome de la queue de cheval, radiculopathies,
 * lésions du plexus brachial, neuropathie alcoolique, botulisme. Rédigé par IA (Harrison, Sabiston,
 * OMS, CDC) : à valider.
 */

const NEU = { departement: 'neuropsychiatrie', specialite: 'Neurologie' };
const NCH = { departement: 'chirurgie', specialite: 'Neurochirurgie' };
const NIN = { departement: 'neuropsychiatrie', specialite: 'Neuro-infectiologie' };

module.exports = [
  // =================================================================== Syndrome de la queue de cheval
  {
    ...NCH,
    slug: 'syndrome-de-la-queue-de-cheval',
    nom: 'Syndrome de la queue de cheval',
    resume:
      'Compression des racines nerveuses lombo-sacrées sous le cône terminal, urgence neurochirurgicale : grosse hernie discale L4-L5 ou L5-S1 (la plus fréquente), mal de Pott, métastases, tumeurs, hématome, abcès, traumatisme, sténose canalaire ; lombalgie et sciatique souvent bilatérale, anesthésie en selle (périnée, organes génitaux, face interne des cuisses), troubles urinaires (rétention indolore, incontinence par regorgement), constipation ou incontinence anale, troubles sexuels, déficit moteur des membres inférieurs, abolition des réflexes achilléens ; IRM en urgence ; décompression chirurgicale dans les 48 heures (au mieux 24 h) pour préserver les fonctions sphinctériennes ; toute lombosciatique avec troubles urinaires ou anesthésie en selle doit être adressée immédiatement.',
    definition:
      'Atteinte pluriradiculaire des racines lombaires et sacrées de la queue de cheval, le plus souvent par compression, associant déficit sensitivo-moteur des membres inférieurs, anesthésie en selle et troubles sphinctériens.',
    physiopathologie:
      '## Causes\n- **Hernie discale** médiane volumineuse (L4-L5, L5-S1)\n- **Mal de Pott**, **métastases**, tumeurs (épendymome, neurinome), myélome\n- Abcès épidural, **hématome** (anticoagulants, ponction lombaire), **traumatismes** (fractures lombaires)\n- Sténose canalaire lombaire, complication chirurgicale\n- Non compressives : schistosomiase, CMV (VIH), méningite carcinomateuse\n\n## Conséquence\n- Ischémie et compression des racines → déficits définitifs si la décompression est tardive',
    diagnostic:
      '## Signes d’alerte\n- **Anesthésie en selle** (périnée, fesses, organes génitaux)\n- **Troubles urinaires** : rétention, difficulté à initier la miction, perte de la sensation de besoin, incontinence par regorgement\n- Troubles anaux (incontinence, perte de la sensation), troubles de l’érection\n- **Sciatique bilatérale** ou à bascule, déficit moteur (releveurs du pied), **réflexes achilléens abolis**\n- Toucher rectal : tonus anal diminué\n\n## Examens\n- **IRM lombaire en urgence** (scanner si IRM indisponible)\n- **Résidu post-mictionnel** (échographie ou sondage) : rétention\n- Radiographie du rachis, NFS, CRP (infection, Pott)',
    examens: [
      ['confirmation', 'irm-rachidienne', 'Compression des racines.'],
      ['premiere_intention', 'echographie-renale', 'Résidu post-mictionnel.'],
      ['premiere_intention', 'radiographie-osseuse', 'Pott, fracture, lyse.'],
      ['etiologique', 'crp', 'Infection.'],
      ['etiologique', 'nfs', 'Infection, hémopathie.'],
    ],
    scores: [],
    differentiels: [
      ['lombalgie-et-sciatique', 'Sciatique sans troubles sphinctériens ni anesthésie en selle.'],
      ['hernie-discale-lombaire', 'Hernie sans syndrome de la queue de cheval.'],
      ['myelopathies', 'Syndrome pyramidal, niveau sensitif plus haut.'],
      ['syndrome-de-guillain-barre', 'Atteinte ascendante sans anesthésie en selle.'],
      ['retention-aigue-urine', 'Rétention d’origine prostatique.'],
    ],
    etiologies:
      '## Causes\n- Hernie discale, mal de Pott, métastases, tumeurs, hématome, abcès, traumatismes, sténose canalaire',
    principes: [
      [
        'Urgence',
        'Décomprimer.',
        '- **Décompression chirurgicale** (laminectomie, discectomie) **dans les 24–48 h**\n- Sondage vésical en cas de rétention\n- Cause tumorale : dexaméthasone, radiothérapie ; Pott : antituberculeux ± chirurgie ; abcès : drainage et antibiotiques',
      ],
      [
        'Après',
        'Rééducation.',
        '- Rééducation vésico-sphinctérienne, autosondages si besoin, kinésithérapie\n- Prise en charge des troubles sexuels, soutien psychologique',
      ],
      [
        'Prévention du retard',
        'Informer.',
        '- Éducation des patients lombalgiques : consulter immédiatement en cas de troubles urinaires ou d’anesthésie en selle',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Compression tumorale'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['tramadol', 'alternative', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie chirurgicale'],
    ],
    complications: [
      {
        nom: 'Troubles sphinctériens définitifs',
        description: 'Décompression tardive.',
        traitement: '- Autosondages, rééducation',
        clinique: '- Incontinence, rétention',
        paraclinique: '',
      },
      {
        nom: 'Déficit moteur séquellaire',
        description: 'Releveurs du pied.',
        traitement: '- Attelle, kinésithérapie',
        clinique: '- Steppage',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires',
        fiche: 'retention-aigue-urine',
        description: 'Rétention.',
        traitement: '- Sondage, antibiotiques',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération sphinctérienne nettement meilleure si décompression avant la rétention complète et dans les 48 h',
    urgences: [],
    symptomes: [
      ['Douleur lombaire', 'tres_frequent'],
      ['Douleur radiculaire', 'tres_frequent'],
      ['Troubles sphinctériens', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Déficit moteur', 'frequent'],
    ],
    sources: ['Sabiston Textbook of Surgery', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: [
        '- Rechercher l’anesthésie en selle et les troubles urinaires, sonder, référer en urgence',
        '- Toute lombosciatique avec troubles sphinctériens',
      ],
      hgr: ['- Scanner, sondage, avis chirurgical', ''],
      tert: ['- IRM, neurochirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Queue de cheval par hernie discale',
        type: 'commune',
        description: 'Hernie volumineuse.',
        terrain: '- Adulte, lombalgie ancienne',
        fonctionnels: '- Sciatique bilatérale, rétention',
        generaux: '',
        physiques: '- Anesthésie en selle',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Queue de cheval incomplète',
        type: 'evolutive',
        description: 'Dysurie, hypoesthésie.',
        terrain: '',
        fonctionnels: '- Difficulté à uriner',
        generaux: '',
        physiques: '- Hypoesthésie périnéale',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Queue de cheval tumorale ou infectieuse',
        type: 'etiologique',
        description: 'Pott, métastase.',
        terrain: '- Tuberculose, cancer',
        fonctionnels: '- Installation progressive',
        generaux: '- Altération de l’état général',
        physiques: '',
        paraclinique: '- Radiographie, IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Radiculopathies
  {
    ...NEU,
    slug: 'radiculopathies',
    nom: 'Radiculopathies',
    resume:
      'Atteintes d’une racine nerveuse, surtout cervicale (névralgie cervico-brachiale : C5 à C8) et lombaire (sciatique L5 et S1, cruralgie L3-L4) : douleur à topographie radiculaire majorée par la toux et l’effort, paresthésies, déficit sensitif et moteur dans le territoire, diminution du réflexe correspondant ; causes : hernie discale et arthrose (uncarthrose, sténose foraminale) le plus souvent, mais aussi mal de Pott, métastases, zona, diabète, VIH, schistosomiase ; signes d’alerte (fièvre, amaigrissement, cancer, déficit moteur sévère ou progressif, troubles sphinctériens, douleur nocturne inflammatoire) imposant une imagerie rapide ; traitement le plus souvent médical (antalgiques, AINS courts, antineuropathiques, kinésithérapie, maintien de l’activité) avec bonne évolution en 6–12 semaines ; chirurgie en cas de déficit moteur ou d’échec.',
    definition:
      'Souffrance d’une racine rachidienne, responsable d’une douleur et de signes neurologiques dans son territoire (dermatome, myotome, réflexe).',
    physiopathologie:
      '## Causes\n- **Mécaniques** : **hernie discale**, **arthrose** (uncarthrose cervicale, sténose foraminale), spondylolisthésis\n- **Infectieuses** : **mal de Pott**, spondylodiscite, **zona**, VIH (CMV), schistosomiase\n- **Tumorales** : métastases, neurinome, myélome\n- **Métaboliques** : radiculopathie diabétique (cruralgie du diabétique)\n\n## Mécanisme\n- Compression et inflammation de la racine → douleur neuropathique et déficit',
    diagnostic:
      '## Territoires\n- **C5** : épaule, deltoïde, réflexe bicipital ; **C6** : pouce, biceps, réflexe stylo-radial ; **C7** : majeur, triceps, réflexe tricipital ; **C8** : 5e doigt, muscles de la main\n- **L4** : face antérieure de la jambe, quadriceps, réflexe rotulien (cruralgie L3-L4)\n- **L5** : dos du pied, gros orteil, releveurs du pied (marche sur les talons impossible)\n- **S1** : plante et bord externe du pied, triceps sural (marche sur la pointe impossible), réflexe achilléen\n\n## Signes d’alerte\n- Fièvre, amaigrissement, antécédent de cancer, VIH, tuberculose, douleur nocturne, déficit moteur progressif, troubles sphinctériens, traumatisme\n\n## Examens\n- Aucun dans la forme commune les 6 premières semaines\n- **IRM** (ou scanner) si signes d’alerte, déficit ou échec ; radiographie (Pott, lyse), NFS, CRP, glycémie\n- Électromyogramme si doute',
    examens: [
      ['deuxieme_intention', 'irm-rachidienne', 'Hernie, sténose, cause secondaire.'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Arthrose, Pott, lyse.'],
      ['etiologique', 'crp', 'Spondylodiscite.'],
      ['etiologique', 'glycemie', 'Radiculopathie diabétique.'],
      ['deuxieme_intention', 'electromyogramme', 'Confirmation, diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['lombalgie-et-sciatique', 'Lombosciatique commune.'],
      ['syndrome-canal-carpien', 'Paresthésies nocturnes des trois premiers doigts.'],
      ['lesions-du-plexus-brachial', 'Atteinte de plusieurs racines après traumatisme.'],
      ['zona', 'Douleur suivie d’une éruption.'],
      ['neuropathies-peripheriques', 'Atteinte distale symétrique.'],
      ['Tendinopathie de l’épaule', 'Douleur mécanique sans signes neurologiques.'],
    ],
    etiologies: '## Causes\n- Hernie discale, arthrose, Pott, spondylodiscite, zona, métastases, diabète',
    principes: [
      [
        'Traitement médical',
        'Forme commune.',
        '- **Maintien de l’activité** adaptée, pas de repos strict prolongé\n- **Paracétamol**, **AINS** sur une courte durée (ibuprofène, diclofénac), tramadol\n- Douleurs neuropathiques : **amitriptyline**, **gabapentine** ou **prégabaline**\n- Corticoïdes oraux courts discutés ; infiltrations en centre spécialisé ; collier cervical bref\n- Kinésithérapie après la phase aiguë',
      ],
      [
        'Chirurgie',
        'Indications.',
        '- **Déficit moteur** sévère ou progressif, **syndrome de la queue de cheval** ou myélopathie (urgence)\n- Douleur résistante après 6–12 semaines de traitement bien conduit',
      ],
      [
        'Causes secondaires',
        'Traiter.',
        '- Pott : antituberculeux ; zona : antiviral ; métastases : radiothérapie ; diabète : équilibre glycémique',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'AINS courte durée'],
      ['diclofenac', 'alternative', 'AINS'],
      ['tramadol', 'alternative', 'Douleur modérée à intense'],
      ['amitriptyline', 'premiere', 'Douleur neuropathique'],
      ['gabapentine', 'alternative', 'Douleur neuropathique'],
      ['pregabaline', 'alternative', 'Douleur neuropathique'],
      ['prednisolone', 'alternative', 'Cure courte'],
      ['tizanidine', 'adjuvant', 'Contracture'],
    ],
    complications: [
      {
        nom: 'Déficit moteur séquellaire',
        description: 'Compression prolongée.',
        traitement: '- Chirurgie, rééducation',
        clinique: '- Steppage, faiblesse de la main',
        paraclinique: '',
      },
      {
        nom: 'Douleur chronique',
        description: 'Plus de 3 mois.',
        traitement: '- Antineuropathiques, rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de la queue de cheval',
        fiche: 'syndrome-de-la-queue-de-cheval',
        description: 'Hernie volumineuse.',
        traitement: '- Chirurgie urgente',
        clinique: '- Troubles sphinctériens',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration spontanée chez la majorité en 6–12 semaines ; récidives possibles',
    urgences: [],
    symptomes: [
      ['Douleur radiculaire', 'tres_frequent'],
      ['Paresthésies', 'frequent'],
      ['Douleur lombaire', 'frequent'],
      ['Douleur de l’épaule', 'frequent'],
      ['Faiblesse musculaire', 'occasionnel'],
    ],
    sources: [
      "Harrison's Principles of Internal Medicine",
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Antalgiques, AINS, maintien de l’activité, recherche des signes d’alerte',
        '- Déficit moteur, troubles sphinctériens, fièvre',
      ],
      hgr: ['- Radiographie, antineuropathiques, kinésithérapie', ''],
      tert: ['- IRM, chirurgie du rachis', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Névralgie cervico-brachiale',
        type: 'topographique',
        description: 'Racines C5–C8.',
        terrain: '- Adulte de plus de 40 ans',
        fonctionnels: '- Douleur du cou au bras',
        generaux: '',
        physiques: '- Réflexe diminué',
        paraclinique: '',
        etiologies: '- Uncarthrose, hernie',
        syndromes: [],
      },
      {
        nom: 'Sciatique L5 ou S1',
        type: 'commune',
        description: 'Hernie discale.',
        terrain: '- Adulte',
        fonctionnels: '- Douleur fessière et du membre inférieur',
        generaux: '',
        physiques: '- Lasègue positif',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Radiculopathie symptomatique',
        type: 'gravite',
        description: 'Pott, métastase.',
        terrain: '- Tuberculose, cancer, VIH',
        fonctionnels: '- Douleur nocturne',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Déficit',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Lésions du plexus brachial
  {
    ...NCH,
    slug: 'lesions-du-plexus-brachial',
    nom: 'Lésions du plexus brachial',
    resume:
      'Atteintes du réseau nerveux formé par les racines C5 à T1, innervant le membre supérieur : traumatiques chez l’adulte (accidents de moto avec traction violente de l’épaule, plaies par arme blanche ou par balle, luxation de l’épaule) et obstétricales chez le nouveau-né (dystocie des épaules, paralysie de Duchenne-Erb C5-C6 : bras collé au corps en rotation interne, « main de serveur ») ; formes supérieures, inférieures (Klumpke, main) ou totales (bras ballant, anesthésie, syndrome de Claude Bernard-Horner = avulsion des racines) ; aussi névralgie amyotrophique (Parsonage-Turner), compression tumorale (cancer du sein, du poumon), radiothérapie ; mobilisation passive précoce pour éviter les raideurs, kinésithérapie, attelles, chirurgie nerveuse (greffe, transfert) idéalement avant 3–6 mois en l’absence de récupération.',
    definition:
      'Lésions d’une partie ou de la totalité du plexus brachial (racines C5 à T1, troncs, faisceaux), responsables d’une paralysie et de troubles sensitifs du membre supérieur.',
    physiopathologie:
      '## Mécanismes\n- **Traction** (accidents de moto, chute sur l’épaule, accouchement avec dystocie des épaules ou siège) : de l’élongation (neurapraxie) à l’**avulsion** des racines de la moelle\n- **Plaies** (arme blanche, balle), fractures de la clavicule, luxation de l’épaule\n- **Compression** : tumeurs (apex pulmonaire : syndrome de Pancoast, métastases ganglionnaires du sein), hématome\n- **Inflammatoire** : névralgie amyotrophique ; **radique**\n\n## Topographie\n- **Supérieure** (C5-C6) : épaule et flexion du coude\n- **Inférieure** (C8-T1) : muscles de la main\n- **Totale** : membre ballant',
    diagnostic:
      '## Clinique\n- **Nouveau-né** : bras inerte, absence de Moro du côté atteint, rotation interne, pronation (Erb) ; rechercher une fracture de la clavicule ou de l’humérus, une paralysie phrénique\n- **Adulte** : paralysie, anesthésie, douleurs neuropathiques souvent intenses (avulsion)\n- **Syndrome de Claude Bernard-Horner** (ptosis, myosis) : avulsion de C8-T1, mauvais pronostic\n- Pouls radial (lésion vasculaire associée)\n\n## Examens\n- **Radiographies** (clavicule, épaule, rachis cervical, thorax : coupole diaphragmatique)\n- **Électromyogramme** à 3–4 semaines, puis répété\n- **IRM** (avulsions, tumeur), échographie du plexus',
    examens: [
      ['premiere_intention', 'radiographie-osseuse', 'Fracture de la clavicule, de l’humérus.'],
      ['premiere_intention', 'radiographie-thoracique', 'Paralysie phrénique, tumeur de l’apex.'],
      ['deuxieme_intention', 'electromyogramme', 'Siège et gravité, récupération.'],
      ['deuxieme_intention', 'irm-rachidienne', 'Avulsions radiculaires, tumeur.'],
      ['gravite', 'echo-doppler-arteriel', 'Lésion vasculaire associée.'],
    ],
    scores: [],
    differentiels: [
      ['radiculopathies', 'Atteinte d’une seule racine.'],
      ['traumatismes-obstetricaux-nouveau-ne', 'Fracture de la clavicule (pseudoparalysie).'],
      ['osteomyelite-aigue', 'Pseudoparalysie douloureuse du nourrisson.'],
      ['avc', 'Déficit d’origine centrale.'],
      ['plaies-vasculaires', 'Ischémie du membre.'],
    ],
    etiologies:
      '## Causes\n- Accidents de moto, dystocie des épaules, plaies, luxations, tumeurs, radiothérapie, névralgie amyotrophique',
    principes: [
      [
        'Paralysie obstétricale',
        'Kinésithérapie et surveillance.',
        '- **Mobilisation passive douce** dès la 2e semaine, apprentissage aux parents, éviter la rétraction en rotation interne\n- Récupération spontanée dans la majorité (souvent dès le premier mois)\n- Absence de récupération de la flexion du coude à **3–6 mois** : avis de chirurgie nerveuse',
      ],
      [
        'Lésion traumatique de l’adulte',
        'Chirurgie selon le type.',
        '- Plaie nette : réparation nerveuse précoce ; lésion vasculaire : réparation urgente\n- Lésion fermée : surveillance clinique et EMG ; chirurgie (greffe, **transferts nerveux**) avant 6 mois si pas de récupération ; transferts tendineux plus tard\n- Attelles, kinésithérapie, prévention des raideurs',
      ],
      [
        'Douleur',
        'Neuropathique.',
        '- **Amitriptyline**, **gabapentine**, prégabaline, carbamazépine ; soutien psychologique',
      ],
    ],
    molecules: [
      ['amitriptyline', 'premiere', 'Douleur neuropathique'],
      ['gabapentine', 'alternative', 'Douleur neuropathique'],
      ['pregabaline', 'alternative', 'Douleur neuropathique'],
      ['carbamazepine', 'alternative', 'Douleur en éclairs'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['tramadol', 'alternative', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Raideur et rétractions',
        description: 'Absence de mobilisation.',
        traitement: '- Kinésithérapie',
        clinique: '- Épaule bloquée en rotation interne',
        paraclinique: '',
      },
      {
        nom: 'Douleurs de désafférentation',
        description: 'Avulsion radiculaire.',
        traitement: '- Antineuropathiques, chirurgie de la douleur',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Membre supérieur atrophique et court',
        description: 'Paralysie obstétricale non récupérée.',
        traitement: '- Chirurgie secondaire',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Paralysies obstétricales : récupération complète chez la majorité ; avulsions de l’adulte : séquelles importantes malgré la chirurgie',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'tres_frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Douleur de l’épaule', 'frequent'],
      ['Ptosis', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Repérer la paralysie du nouveau-né, apprendre la mobilisation aux parents', ''],
      hgr: ['- Radiographies, kinésithérapie', ''],
      tert: ['- EMG, IRM, chirurgie nerveuse', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Paralysie obstétricale de Duchenne-Erb',
        type: 'commune',
        description: 'C5-C6.',
        terrain: '- Nouveau-né macrosome, dystocie des épaules',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bras en rotation interne, main de serveur',
        paraclinique: '- Radiographie de la clavicule',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Lésion traumatique totale',
        type: 'gravite',
        description: 'Avulsion.',
        terrain: '- Accident de moto',
        fonctionnels: '- Douleurs intenses',
        generaux: '',
        physiques: '- Membre ballant, Claude Bernard-Horner',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Atteinte tumorale',
        type: 'etiologique',
        description: 'Pancoast, sein.',
        terrain: '- Fumeur, cancer du sein',
        fonctionnels: '- Douleur progressive',
        generaux: '- Amaigrissement',
        physiques: '- Atrophie de la main',
        paraclinique: '- Imagerie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Neuropathie alcoolique
  {
    ...NEU,
    slug: 'neuropathie-alcoolique',
    nom: 'Neuropathie alcoolique',
    resume:
      'Polyneuropathie sensitivo-motrice distale et symétrique due à la consommation chronique et excessive d’alcool (toxicité directe) et aux carences associées (thiamine, folates, B12, malnutrition) : paresthésies et brûlures des pieds, douleurs nocturnes, crampes, hypoesthésie en chaussettes, abolition des réflexes achilléens, faiblesse distale et amyotrophie, troubles de la marche et chutes, parfois dysautonomie ; associée à d’autres complications (Gayet-Wernicke, cirrhose, cardiomyopathie) ; éliminer diabète, VIH, isoniazide, carence en B12 ; arrêt de l’alcool (sevrage sécurisé), thiamine avant tout apport glucidique, vitamines du groupe B, renutrition, antineuropathiques, kinésithérapie ; récupération lente et partielle après sevrage.',
    definition:
      'Polyneuropathie axonale à prédominance sensitive, longueur-dépendante, liée à l’alcoolisme chronique et aux carences nutritionnelles associées.',
    physiopathologie:
      '## Mécanismes\n- **Toxicité directe** de l’éthanol et de ses métabolites sur l’axone\n- **Carences** : **thiamine** (B1), folates, B12, B6, malnutrition\n\n## Facteurs\n- Durée et quantité de consommation, alcools artisanaux, malnutrition, hépatopathie associée',
    diagnostic:
      '## Clinique\n- **Paresthésies** et **brûlures** des pieds, douleurs nocturnes, **crampes**\n- **Hypoesthésie** en chaussettes, puis en gants\n- **Abolition des réflexes achilléens**, faiblesse distale (steppage), amyotrophie\n- **Ataxie** et troubles de la marche (atteinte proprioceptive, cérébelleuse associée)\n- Signes associés : Gayet-Wernicke (confusion, ophtalmoplégie, ataxie), cirrhose, macrocytose\n\n## Examens\n- **Bilan hépatique** (GGT, transaminases), **NFS** (macrocytose), glycémie, **vitamine B12 et folates**, créatinine\n- Test VIH, sérologie syphilitique\n- **Électromyogramme** (neuropathie axonale) si doute',
    examens: [
      ['premiere_intention', 'bilan-hepatique', 'GGT, transaminases.'],
      ['premiere_intention', 'nfs', 'Macrocytose.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'vitamine-b12-folates', 'Carences.'],
      ['etiologique', 'tdr-vih', 'Neuropathie du VIH.'],
      ['deuxieme_intention', 'electromyogramme', 'Neuropathie axonale.'],
    ],
    scores: [],
    differentiels: [
      ['neuropathie-associee-au-vih', 'Polyneuropathie du VIH.'],
      ['neuropathies-peripheriques', 'Diabète, isoniazide, lèpre.'],
      ['neuropathie-ataxique-tropicale', 'Manioc, ataxie.'],
      ['anemie-megaloblastique', 'Carence en B12 avec atteinte médullaire.'],
      ['encephalopathie-de-gayet-wernicke', 'Confusion, ophtalmoplégie.'],
    ],
    etiologies: '## Causes\n- Alcoolisme chronique, carence en thiamine et autres vitamines B, malnutrition',
    principes: [
      [
        'Arrêt de l’alcool',
        'Indispensable.',
        '- Sevrage sécurisé (benzodiazépines, hydratation) ; accompagnement (entretien motivationnel, naltrexone)\n- **Thiamine** 100 mg IV ou IM avant tout soluté glucosé, puis orale au long cours',
      ],
      [
        'Renutrition et vitamines',
        'Corriger les carences.',
        '- **Vitamines du groupe B** (thiamine, pyridoxine, B12, acide folique), apports protéino-énergétiques',
      ],
      [
        'Symptômes',
        'Douleur et marche.',
        '- **Amitriptyline**, gabapentine, prégabaline\n- Kinésithérapie, prévention des chutes, soins des pieds',
      ],
    ],
    molecules: [
      ['vitamine-b1-thiamine', 'premiere', 'Carence en thiamine'],
      ['pyridoxine', 'adjuvant', 'Carence en B6'],
      ['cyanocobalamine-vitamine-b12', 'adjuvant', 'Carence en B12'],
      ['acide-folique', 'adjuvant', 'Carence en folates'],
      ['amitriptyline', 'premiere', 'Douleurs neuropathiques'],
      ['gabapentine', 'alternative', 'Douleurs neuropathiques'],
      ['diazepam', 'adjuvant', 'Sevrage alcoolique'],
      ['naltrexone', 'alternative', 'Maintien de l’abstinence'],
    ],
    complications: [
      {
        nom: 'Chutes et traumatismes',
        fiche: 'traumatisme-cranien',
        description: 'Ataxie.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Plaies des pieds',
        fiche: 'ulceres-chroniques-de-jambe',
        description: 'Pieds insensibles.',
        traitement: '- Soins',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Encéphalopathie de Gayet-Wernicke',
        fiche: 'encephalopathie-de-gayet-wernicke',
        description: 'Carence en thiamine.',
        traitement: '- Thiamine IV',
        clinique: '- Confusion, ataxie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Stabilisation et récupération lente et partielle après arrêt de l’alcool ; aggravation en cas de poursuite',
    urgences: [],
    symptomes: [
      ['Paresthésies', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Crampes musculaires', 'frequent'],
      ['Troubles de la marche', 'frequent'],
      ['Faiblesse musculaire', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Thiamine, vitamines, accompagnement de l’arrêt de l’alcool', ''],
      hgr: ['- Bilan, sevrage hospitalier', ''],
      tert: ['- EMG, neurologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyneuropathie sensitive douloureuse',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Consommation chronique d’alcool',
        fonctionnels: '- Brûlures des pieds',
        generaux: '- Dénutrition',
        physiques: '- Aréflexie achilléenne',
        paraclinique: '- Macrocytose, GGT',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme sensitivo-motrice avec ataxie',
        type: 'gravite',
        description: 'Chutes.',
        terrain: '',
        fonctionnels: '- Troubles de la marche',
        generaux: '',
        physiques: '- Steppage, amyotrophie',
        paraclinique: '- EMG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Botulisme
  {
    ...NIN,
    slug: 'botulisme',
    nom: 'Botulisme',
    resume:
      'Intoxication grave par la neurotoxine de Clostridium botulinum, bloquant la libération d’acétylcholine : alimentaire (conserves artisanales, viandes et poissons fumés, salés ou fermentés, aliments mal conservés), par blessure (plaies souillées, injection de drogues), infantile (miel chez le nourrisson) ; 12–72 h après le repas : troubles visuels (vision floue, diplopie, ptosis, mydriase), sécheresse de la bouche, dysphagie, dysarthrie, puis paralysie flasque descendante symétrique pouvant atteindre les muscles respiratoires, sans fièvre ni troubles de conscience ni sensitifs ; plusieurs cas après un même repas ; urgence : surveillance respiratoire et ventilation, antitoxine le plus tôt possible, débridement et pénicilline pour les plaies ; déclaration immédiate (santé publique).',
    definition:
      'Paralysie flasque descendante due à la toxine botulique, qui bloque la libération d’acétylcholine à la jonction neuromusculaire et dans le système nerveux autonome.',
    physiopathologie:
      '## Formes\n- **Alimentaire** : ingestion de toxine préformée dans un aliment contaminé (conserves maison, poissons et viandes séchés ou fermentés, condiments)\n- **Par blessure** : germination des spores dans une plaie (traumatisme, injection de drogue)\n- **Infantile** : colonisation intestinale du nourrisson (< 1 an) par les spores (miel)\n\n## Mécanisme\n- Toxine → blocage **présynaptique** de l’acétylcholine → paralysie flasque et signes **cholinergiques** (bouche sèche, mydriase, constipation, rétention)\n- Récupération par repousse des terminaisons nerveuses (semaines à mois)',
    diagnostic:
      '## Clinique\n- Incubation de 12–72 h ; troubles digestifs initiaux possibles\n- **Atteinte des nerfs crâniens** : vision floue, **diplopie**, **ptosis**, **mydriase** aréactive, **dysphagie**, **dysarthrie**, sécheresse buccale\n- **Paralysie flasque descendante symétrique** (cou, membres supérieurs, tronc, membres inférieurs), **insuffisance respiratoire**\n- **Conscience normale**, **pas de fièvre**, **pas de troubles sensitifs**\n- Constipation, rétention urinaire, hypotension orthostatique\n- **Cas groupés** après un repas commun\n\n## Examens\n- Diagnostic **clinique** (ne pas attendre la confirmation)\n- Recherche de toxine dans le sérum, les selles, l’aliment suspect (laboratoire de référence)\n- **Électromyogramme** (incrément), spirométrie (capacité vitale), gaz du sang ; LCR normal',
    examens: [
      ['gravite', 'spirometrie', 'Capacité vitale.'],
      ['gravite', 'gaz-du-sang', 'Insuffisance respiratoire.'],
      ['deuxieme_intention', 'electromyogramme', 'Incrément à la stimulation rapide.'],
      ['deuxieme_intention', 'lcr', 'Normal (élimine Guillain-Barré).'],
      ['etiologique', 'prelevement-de-pus', 'Botulisme par blessure.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-de-guillain-barre', 'Paralysie ascendante, aréflexie, dissociation albumino-cytologique.'],
      ['myasthenie', 'Fatigabilité, pupilles normales.'],
      ['avc', 'Atteinte du tronc cérébral (asymétrique).'],
      ['poliomyelite-paralysies-flasques-aigues', 'Fièvre, paralysie asymétrique.'],
      ['Intoxication aux organophosphorés', 'Myosis, hypersalivation, bradycardie.'],
      ['Diphtérie', 'Paralysie du voile après angine à fausses membranes.'],
    ],
    etiologies:
      '## Cause\n- Toxine de Clostridium botulinum (aliments mal conservés, plaies, miel chez le nourrisson)',
    principes: [
      [
        'Réanimation',
        'Priorité.',
        '- Hospitalisation, surveillance de la **capacité vitale** et de la déglutition plusieurs fois par jour\n- **Intubation et ventilation** si capacité vitale < 20 mL/kg, troubles de la déglutition sévères ou hypercapnie (souvent plusieurs semaines)\n- Nutrition par sonde, prévention des escarres et des thromboses, sondage',
      ],
      [
        'Antitoxine',
        'Le plus tôt possible.',
        '- **Antitoxine botulique** équine dès la suspicion clinique (stocks de référence), après précautions contre l’anaphylaxie\n- Nourrisson : immunoglobuline botulique humaine (centre spécialisé)',
      ],
      [
        'Mesures spécifiques',
        'Cause et santé publique.',
        '- **Plaie** : débridement chirurgical, **pénicilline G** ou métronidazole\n- **Éviter les aminosides**, la clindamycine et le magnésium (aggravent le bloc)\n- **Déclaration immédiate**, identification et retrait de l’aliment, recherche des autres convives\n- Prévention : conserves stérilisées, pas de miel avant 1 an',
      ],
    ],
    molecules: [
      ['antitoxine-botulique', 'premiere', 'Neutralisation de la toxine'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Botulisme par blessure'],
      ['metronidazole', 'alternative', 'Botulisme par blessure'],
      ['adrenaline-epinephrine', 'adjuvant', 'Réaction à l’antitoxine'],
      ['enoxaparine', 'adjuvant', 'Prévention thromboembolique'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        description: 'Paralysie diaphragmatique.',
        traitement: '- Ventilation mécanique',
        clinique: '- Dyspnée, toux faible',
        paraclinique: '- Capacité vitale',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Fausses routes.',
        traitement: '- Antibiotiques',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Complications de réanimation prolongée',
        fiche: 'escarres',
        description: 'Ventilation de plusieurs semaines.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité < 10 % avec ventilation ; récupération lente sur des semaines à des mois ; décès par insuffisance respiratoire sans réanimation',
    urgences: [],
    symptomes: [
      ['Diplopie', 'tres_frequent'],
      ['Ptosis', 'frequent'],
      ['Dysphagie', 'tres_frequent'],
      ['Dysarthrie', 'frequent'],
      ['Paralysie flasque', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Constipation', 'frequent'],
    ],
    sources: [
      'CDC — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Suspecter devant des cas groupés, référer en urgence, déclarer',
        '- Troubles de la déglutition, dyspnée',
      ],
      hgr: ['- Surveillance respiratoire, débridement des plaies', ''],
      tert: ['- Réanimation, ventilation, antitoxine', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Botulisme alimentaire',
        type: 'commune',
        description: 'Cas groupés.',
        terrain: '- Repas commun, conserves artisanales',
        fonctionnels: '- Diplopie, dysphagie',
        generaux: '- Apyrexie',
        physiques: '- Mydriase, ptosis, paralysie descendante',
        paraclinique: '- Toxine',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Botulisme par blessure',
        type: 'etiologique',
        description: 'Plaie souillée.',
        terrain: '- Traumatisme, injection de drogue',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaie',
        paraclinique: '- Prélèvement',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Botulisme infantile',
        type: 'terrain',
        description: 'Nourrisson.',
        terrain: '- Nourrisson < 1 an, miel',
        fonctionnels: '- Constipation, faible succion',
        generaux: '',
        physiques: '- Hypotonie, cri faible',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Botulisme avec insuffisance respiratoire',
        type: 'gravite',
        description: 'Réanimation.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Toux inefficace',
        paraclinique: '- Capacité vitale basse',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
