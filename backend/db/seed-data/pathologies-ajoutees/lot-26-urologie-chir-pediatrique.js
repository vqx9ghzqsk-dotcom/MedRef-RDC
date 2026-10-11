'use strict';

/**
 * Lot 26 (urologie, chirurgie pédiatrique) — rétrécissement urétral, torsion du testicule,
 * priapisme, invagination intestinale aiguë, sténose hypertrophique du pylore, hernie inguinale
 * de l'enfant, appendicite de l'enfant. Rédigé par IA (OMS, WSES, ouvrages de référence) : à
 * valider.
 */

const URO = { departement: 'chirurgie', specialite: 'Urologie' };
const CPED = { departement: 'chirurgie', specialite: 'Chirurgie pédiatrique' };

module.exports = [
  // =================================================================== Rétrécissement urétral
  {
    ...URO,
    slug: 'retrecissement-uretral',
    nom: 'Rétrécissement urétral',
    resume:
      'Sténose fibreuse de l’urètre de l’homme, fréquente en RDC (séquelles d’urétrite gonococcique, traumatismes du bassin, sondages) : dysurie progressive, jet filiforme, rétention ; urétrographie ; dilatation, urétrotomie interne ou urétroplastie ; cathéter sus-pubien en cas de rétention.',
    definition:
      'Diminution du calibre de l’urètre par une fibrose cicatricielle du corps spongieux, responsable d’un obstacle à l’écoulement des urines.',
    physiopathologie:
      '## Causes\n- **Infectieuses** : urétrites gonococciques ou à Chlamydia mal traitées (cause majeure en Afrique)\n- **Traumatiques** : fracture du bassin (urètre postérieur), chute à califourchon (urètre bulbaire)\n- **Iatrogènes** : sondages traumatiques ou prolongés, chirurgie endo-urétrale\n- Lichen scléro-atrophique, idiopathiques\n\n## Conséquences\n- Vessie de lutte, résidu, infections, calculs, diverticules, fistules urétro-périnéales (« périnée en arrosoir »), retentissement rénal',
    diagnostic:
      '## Clinique\n- **Dysurie** progressive, **jet faible et filiforme**, miction en plusieurs temps, gouttes retardataires\n- Infections urinaires, orchi-épididymites récidivantes\n- **Rétention** aiguë ou chronique ; **sondage urétral impossible**\n- Antécédent d’urétrite ou de traumatisme\n\n## Examens\n- **Urétrographie** rétrograde et mictionnelle (siège, longueur, nombre)\n- ECBU, créatinine, échographie (résidu, retentissement)\n- Urétroscopie si disponible',
    examens: [
      ['confirmation', 'urethrographie', 'Siège et longueur du rétrécissement.'],
      ['premiere_intention', 'ecbu', 'Infection associée.'],
      ['premiere_intention', 'creatinine', 'Retentissement rénal.'],
      ['premiere_intention', 'echographie-renale', 'Résidu post-mictionnel, hydronéphrose.'],
    ],
    scores: [],
    differentiels: [
      ['hypertrophie-benigne-prostate', 'Homme âgé, prostate augmentée, sondage possible.'],
      ['Sténose du méat urétral', 'Visible à l’examen du gland.'],
      ['Vessie neurologique', 'Atteinte neurologique, diabète.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale, zone d’endémie.'],
    ],
    etiologies:
      '## Terrain\n- Homme jeune ou d’âge moyen, antécédent d’urétrite, de traumatisme du bassin ou de sondage',
    principes: [
      [
        'Urgence : rétention',
        'Drainer sans aggraver.',
        '- **Ne pas forcer** le sondage urétral (fausse route)\n- **Cathéter sus-pubien** (cystostomie à l’aiguille ou chirurgicale)\n- Antibiotiques si infection',
      ],
      [
        'Traitement du rétrécissement',
        'Rétablir le calibre urétral.',
        '- **Dilatations** urétrales progressives (bougies), à répéter : solution transitoire\n- **Urétrotomie interne** endoscopique : rétrécissement court (< 1,5 cm), premier épisode\n- **Urétroplastie** (anastomose termino-terminale, greffe de muqueuse buccale) : rétrécissement long, récidivant ou post-traumatique',
      ],
      [
        'Prévention',
        'Éviter les récidives et de nouveaux cas.',
        '- Traitement correct des urétrites (approche syndromique), dépistage du partenaire\n- Sondages atraumatiques, lubrifiés, de courte durée',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Gel urétral pour les dilatations'],
      ['ceftriaxone', 'premiere', 'Urétrite gonococcique associée'],
      ['doxycycline', 'premiere', 'Urétrite à Chlamydia associée'],
      ['ciprofloxacine', 'alternative', 'Infection urinaire associée (selon l’antibiogramme)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Rétention aiguë d’urine',
        fiche: 'retention-aigue-urine',
        description: 'Obstacle complet.',
        traitement: '- Cathéter sus-pubien',
        clinique: '- Globe vésical',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Infections urinaires et orchi-épididymites',
        fiche: 'infections-urinaires-adulte',
        description: 'Stase urinaire.',
        traitement: '- Antibiotiques adaptés',
        clinique: '- Fièvre, brûlures',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Fistules urétro-périnéales',
        description: 'Abcès péri-urétraux fistulisés.',
        traitement: '- Drainage, urétroplastie',
        clinique: '- Urines par le périnée',
        paraclinique: '- Urétrographie',
      },
      {
        nom: 'Insuffisance rénale obstructive',
        fiche: 'maladie-renale-chronique',
        description: 'Obstacle prolongé.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Fuites par regorgement',
        paraclinique: '- Créatinine, hydronéphrose',
      },
    ],
    evolution:
      '## Pronostic\n- Récidive fréquente après dilatation ou urétrotomie ; bons résultats durables de l’urétroplastie',
    urgences: [],
    symptomes: [
      ['Dysurie', 'tres_frequent'],
      ['Rétention urinaire', 'frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Écoulement urétral', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Traitement des urétrites, orientation', '- Dysurie progressive, sondage impossible'],
      hgr: ['- Cathéter sus-pubien, dilatations, urétrographie', '- Urétroplastie'],
      tert: ['- Urétrotomie endoscopique, urétroplastie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rétrécissement post-infectieux',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Antécédent d’urétrite',
        fonctionnels: '- Dysurie progressive, jet filiforme',
        generaux: '',
        physiques: '- Sondage difficile',
        paraclinique: '- Sténose bulbaire ou pénienne, souvent longue',
        etiologies: '- Gonococcie, Chlamydia',
        syndromes: [],
        examens: [['urethrographie', 'Rétrécissement']],
      },
      {
        nom: 'Rétrécissement post-traumatique',
        type: 'etiologique',
        description: 'Après fracture du bassin ou chute à califourchon.',
        terrain: '- Traumatisme du bassin ou du périnée',
        fonctionnels: '- Rétention immédiate ou dysurie secondaire',
        generaux: '',
        physiques: '- Urétrorragie, hématome périnéal',
        paraclinique: '- Rupture ou sténose de l’urètre postérieur',
        etiologies: '- Traumatisme',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Torsion du testicule
  {
    ...URO,
    slug: 'torsion-du-testicule',
    nom: 'Torsion du testicule',
    resume:
      'Urgence chirurgicale absolue de l’adolescent et du jeune homme : douleur scrotale brutale, testicule ascensionné et horizontalisé, réflexe crémastérien aboli ; exploration chirurgicale immédiate sans attendre l’imagerie (sauvetage du testicule < 6 heures), détorsion et orchidopexie bilatérale.',
    definition:
      'Rotation du cordon spermatique sur son axe, interrompant la vascularisation du testicule et entraînant son infarctus en quelques heures.',
    physiopathologie:
      '## Mécanismes\n- Anomalie de fixation du testicule (« battant de cloche »), souvent bilatérale\n- Pics de fréquence : période néonatale et puberté\n- Ischémie : viabilité de près de 100 % avant 6 heures, très faible après 24 heures',
    diagnostic:
      '## Clinique\n- **Douleur scrotale brutale**, intense, parfois nocturne ou à l’effort, irradiant vers l’aine ou l’abdomen\n- Nausées, vomissements, **sans fièvre** au début\n- Testicule **ascensionné**, **horizontalisé**, douloureux ; **réflexe crémastérien aboli** ; la surélévation ne soulage pas (signe de Prehn négatif)\n- Toute douleur testiculaire aiguë de l’enfant ou de l’adolescent est une torsion jusqu’à preuve du contraire\n\n## Examens\n- **Aucun examen ne doit retarder la chirurgie**\n- Échographie-Doppler seulement si immédiatement disponible et doute diagnostique',
    examens: [
      [
        'deuxieme_intention',
        'echographie-doppler-scrotale',
        'Absence de flux testiculaire ; ne doit pas retarder l’exploration.',
      ],
      [
        'premiere_intention',
        'bandelette-urinaire',
        'Orientation vers une orchi-épididymite (leucocytes, nitrites).',
      ],
    ],
    scores: [],
    differentiels: [
      ['Orchi-épididymite', 'Début progressif, fièvre, signes urinaires, réflexe crémastérien présent.'],
      ['Torsion d’hydatide', 'Douleur au pôle supérieur, « tache bleue », testicule non ascensionné.'],
      ['hernie-etranglee', 'Masse inguinale irréductible, signes occlusifs.'],
      ['Traumatisme testiculaire', 'Notion de choc, hématome.'],
      ['Orchite ourlienne', 'Parotidite associée.'],
    ],
    etiologies:
      '## Terrain\n- Garçon pubère et jeune adulte, nouveau-né (torsion extravaginale), testicule non descendu',
    principes: [
      [
        'Exploration chirurgicale immédiate',
        'Sauver le testicule.',
        '- Bloc opératoire **sans délai** dès la suspicion\n- Détorsion manuelle (rotation « en ouvrant le livre ») possible en attendant, sans remplacer la chirurgie\n- Détorsion, appréciation de la viabilité (réchauffement)',
      ],
      [
        'Geste chirurgical',
        'Prévenir la récidive.',
        '- Testicule viable : **orchidopexie**\n- Testicule nécrosé : **orchidectomie**\n- **Orchidopexie controlatérale** systématique',
      ],
      ['Antalgie', 'Soulager.', '- Paracétamol, morphine titrée'],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['ketamine', 'adjuvant', 'Anesthésie au bloc'],
    ],
    complications: [
      {
        nom: 'Perte du testicule',
        description: 'Retard de prise en charge.',
        traitement: '- Orchidectomie, prothèse éventuelle',
        clinique: '- Atrophie testiculaire',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Hypofertilité',
        description: 'Atteinte unilatérale ou bilatérale.',
        traitement: '- Prévention par la chirurgie précoce',
        clinique: '',
        paraclinique: '- Spermogramme',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si chirurgie avant 6 heures ; perte du testicule fréquente au-delà de 12 à 24 heures',
    urgences: [],
    symptomes: [
      ['Douleur scrotale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Antalgique, transfert immédiat au bloc', '- Toute douleur scrotale aiguë'],
      hgr: ['- Exploration chirurgicale, orchidopexie bilatérale', ''],
      tert: ['- Urologie, chirurgie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Torsion de l’adolescent',
        type: 'commune',
        description: 'Torsion intravaginale.',
        terrain: '- Garçon pubère, jeune adulte',
        fonctionnels: '- Douleur scrotale brutale, vomissements',
        generaux: '- Apyrexie',
        physiques: '- Testicule ascensionné, horizontal, crémastérien aboli',
        paraclinique: '- Doppler : absence de flux',
        etiologies: '- Testicule en battant de cloche',
        syndromes: [],
      },
      {
        nom: 'Torsion néonatale',
        type: 'terrain',
        description: 'Torsion extravaginale, souvent anténatale.',
        terrain: '- Nouveau-né',
        fonctionnels: '- Peu de douleur',
        generaux: '',
        physiques: '- Bourse augmentée, dure, violacée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Priapisme
  {
    ...URO,
    slug: 'priapisme',
    nom: 'Priapisme',
    resume:
      'Érection prolongée (> 4 heures) et douloureuse sans désir sexuel ; en RDC surtout chez le drépanocytaire : forme ischémique = urgence (hydratation, antalgie, aspiration des corps caverneux et injection de phényléphrine, puis shunt chirurgical) pour éviter l’impuissance définitive.',
    definition:
      'Érection persistante de plus de 4 heures, indépendante de toute stimulation sexuelle ; on distingue le priapisme ischémique (veino-occlusif, urgent) et le priapisme non ischémique (artériel, rare).',
    physiopathologie:
      '## Mécanismes\n- **Ischémique** : blocage du retour veineux, sang caverneux acide et hypoxique, fibrose des corps caverneux après 24–48 heures\n- **Non ischémique** : fistule artério-caverneuse post-traumatique, érection peu douloureuse\n\n## Causes\n- **Drépanocytose** (cause principale de l’enfant et de l’adulte jeune)\n- Médicaments (injections intracaverneuses, sildénafil, trazodone, antipsychotiques), alcool, cannabis\n- Leucémies, traumatismes du périnée',
    diagnostic:
      '## Clinique\n- Érection prolongée, **douloureuse**, corps caverneux rigides, **gland mou**\n- Durée, épisodes antérieurs (priapismes intermittents), drépanocytose, médicaments\n\n## Examens\n- **Gaz du sang caverneux** (sang noir, hypoxique, acide dans la forme ischémique)\n- NFS, test de falciformation ou électrophorèse de l’hémoglobine\n- Écho-Doppler pénien pour la forme non ischémique',
    examens: [
      ['confirmation', 'gaz-du-sang', 'Gaz du sang caverneux : ischémique si pO2 basse, pH acide.'],
      ['premiere_intention', 'nfs', 'Anémie, hyperleucocytose (leucémie).'],
      ['etiologique', 'test-rapide-drepanocytose', 'Drépanocytose.'],
      ['etiologique', 'electrophorese-hb', 'Confirmer la drépanocytose.'],
    ],
    scores: [],
    differentiels: [
      ['Priapisme non ischémique', 'Érection peu douloureuse, sang caverneux rouge, traumatisme.'],
      ['Phlegmon ou fracture des corps caverneux', 'Contexte infectieux ou traumatique.'],
    ],
    etiologies:
      '## Terrain\n- Drépanocytaire (enfant, adolescent, adulte jeune), prise de médicaments érectogènes ou de psychotropes, leucémie',
    principes: [
      [
        'Premières mesures',
        'Soulager.',
        '- Hydratation, antalgie (**morphine** titrée), oxygène, réchauffement\n- Drépanocytaire : traiter comme une crise vaso-occlusive ; transfusion d’échange non recommandée en première intention',
      ],
      [
        'Priapisme ischémique > 4 heures',
        'Détumescence.',
        '- **Aspiration des corps caverneux** (aiguille 19–21 G, bloc pénien à la **lidocaïne**) et lavage au sérum salé\n- Injection intracaverneuse de **phényléphrine** diluée (surveillance de la tension et du pouls), répétée si besoin\n- Échec : **shunt** caverno-spongieux chirurgical',
      ],
      [
        'Prévention des récidives',
        'Éviter l’impuissance.',
        '- Drépanocytaire : hydratation, **hydroxyurée**, éducation (consulter avant 2 heures)\n- Arrêt des médicaments en cause',
      ],
    ],
    molecules: [
      ['phenylephrine', 'premiere', 'Injection intracaverneuse diluée'],
      ['lidocaine', 'premiere', 'Bloc pénien'],
      ['morphine', 'premiere', 'Douleur'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Lavage des corps caverneux, hydratation'],
      ['hydroxycarbamide', 'adjuvant', 'Prévention chez le drépanocytaire'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Dysfonction érectile définitive',
        description: 'Fibrose des corps caverneux après 24–48 heures.',
        traitement: '- Prothèse pénienne',
        clinique: '- Impuissance',
        paraclinique: '',
      },
      {
        nom: 'Récidives (priapisme intermittent)',
        fiche: 'drepanocytose',
        description: 'Fréquentes chez le drépanocytaire.',
        traitement: '- Hydroxyurée, éducation',
        clinique: '- Épisodes répétés',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si détumescence avant 12 heures ; impuissance fréquente après 24–48 heures',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Érection prolongée', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Rétention urinaire', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      "Harrison's Principles of Internal Medicine",
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Hydratation, antalgie, transfert', '- Toute érection > 2–4 heures'],
      hgr: ['- Aspiration, phényléphrine', '- Échec : shunt'],
      tert: ['- Urologie : shunts, prothèse', ''],
    },
    alertes: { 'crise-drepanocytaire-grave': 'Priapisme chez un drépanocytaire' },
    formes: [
      {
        nom: 'Priapisme ischémique',
        type: 'commune',
        description: 'Urgence.',
        terrain: '- Drépanocytaire, médicaments',
        fonctionnels: '- Érection douloureuse > 4 h',
        generaux: '',
        physiques: '- Corps caverneux rigides, gland mou',
        paraclinique: '- Sang caverneux noir, acide, hypoxique',
        etiologies: '- Drépanocytose',
        syndromes: ['syndrome-vaso-occlusif'],
        examens: [['gaz-du-sang', 'Gaz caverneux']],
      },
      {
        nom: 'Priapisme non ischémique',
        type: 'etiologique',
        description: 'Rare, après traumatisme.',
        terrain: '- Traumatisme du périnée',
        fonctionnels: '- Érection peu douloureuse',
        generaux: '',
        physiques: '- Rigidité incomplète',
        paraclinique: '- Sang caverneux rouge, Doppler : fistule',
        etiologies: '- Fistule artério-caverneuse',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Invagination
  {
    ...CPED,
    slug: 'invagination-intestinale-aigue',
    nom: 'Invagination intestinale aiguë',
    resume:
      'Pénétration d’un segment d’intestin dans le segment d’aval, typiquement iléo-colique chez le nourrisson de 3 mois à 2 ans : crises de pleurs paroxystiques, pâleur, vomissements, rectorragies, boudin palpable ; échographie ; désinvagination par lavement hydrostatique ou pneumatique, sinon chirurgie.',
    definition:
      'Télescopage d’un segment intestinal dans le segment d’aval, réalisant un boudin d’invagination avec compression des vaisseaux mésentériques, occlusion et risque de nécrose.',
    physiopathologie:
      '## Mécanismes\n- **Nourrisson** : forme idiopathique, hypertrophie des plaques de Peyer après une infection virale (adénovirus, rotavirus)\n- **Enfant plus grand** : cause organique (diverticule de Meckel, polype, lymphome de Burkitt, purpura rhumatoïde)\n- Évolution : œdème, ischémie, nécrose, perforation, péritonite',
    diagnostic:
      '## Clinique\n- **Crises de pleurs** ou de douleur paroxystiques avec **pâleur**, refus du biberon, entrecoupées d’accalmies\n- **Vomissements** (bilieux tardivement)\n- **Rectorragies** (selles « gelée de groseille ») : signe tardif\n- **Boudin** palpable, fosse iliaque droite vide ; toucher rectal sanglant\n- Signes de gravité : déshydratation, choc, péritonite, évolution > 24–48 h\n\n## Examens\n- **Échographie abdominale** (image en cocarde ou en sandwich) : examen de référence\n- ASP : niveaux, pneumopéritoine\n- NFS, ionogramme',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Image en cocarde ou en sandwich.'],
      ['premiere_intention', 'abdomen-sans-preparation', 'Occlusion, pneumopéritoine.'],
      ['premiere_intention', 'ionogramme', 'Déshydratation.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['premiere_intention', 'groupage-rai', 'Si chirurgie.'],
    ],
    scores: [],
    differentiels: [
      ['diarrhee-aigue-enfant', 'Diarrhée abondante, pas de crises douloureuses avec pâleur.'],
      ['dysenterie-enfant', 'Fièvre, selles glairo-sanglantes nombreuses.'],
      ['occlusion-intestinale-aigue', 'Autres causes d’occlusion.'],
      ['appendicite-enfant', 'Douleur fixe de la fosse iliaque droite, fièvre.'],
    ],
    etiologies:
      '## Terrain\n- Nourrisson de 3 mois à 2 ans (pic vers 6–9 mois), garçon\n- Après 3 ans : rechercher une cause organique (Meckel, lymphome)',
    principes: [
      [
        'Réanimation',
        'Préparer l’enfant.',
        '- Voie veineuse, remplissage (**Ringer lactate** 10–20 mL/kg), sonde nasogastrique, à jeun\n- Antalgie',
      ],
      [
        'Désinvagination non chirurgicale',
        'Réduire sans opérer.',
        '- **Lavement** hydrostatique (sérum sous contrôle échographique) ou pneumatique (sous contrôle radiologique)\n- Contre-indications : choc, péritonite, pneumopéritoine',
      ],
      [
        'Chirurgie',
        'Désinvaginer ou réséquer.',
        '- Échec ou contre-indication du lavement, ou lavement indisponible (cas fréquent en RDC)\n- Désinvagination manuelle par expression, **résection-anastomose** si nécrose\n- Antibioprophylaxie (**ceftriaxone** + **métronidazole** si résection)',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['ceftriaxone', 'adjuvant', 'Antibioprophylaxie ou nécrose'],
      ['metronidazole', 'adjuvant', 'Résection intestinale'],
    ],
    complications: [
      {
        nom: 'Nécrose et perforation intestinale',
        fiche: 'peritonite-aigue',
        description: 'Retard diagnostique.',
        traitement: '- Résection, lavage péritonéal',
        clinique: '- Contracture, choc',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Choc',
        fiche: 'choc-enfant',
        description: 'Hypovolémie, sepsis.',
        traitement: '- Remplissage, antibiotiques',
        clinique: '- Tachycardie, TRC allongé',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Récidive',
        description: 'Après réduction par lavement.',
        traitement: '- Nouveau lavement ou chirurgie',
        clinique: '- Nouvelles crises',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent si traitement précoce ; mortalité notable en cas de diagnostic tardif',
    urgences: ['abdomen-aigu-chirurgical', 'deshydratation-severe-enfant'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Rectorragies', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Masse abdominale', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, perfusion, transfert urgent',
        '- Pleurs paroxystiques, rectorragies, vomissements',
      ],
      hgr: ['- Échographie, chirurgie', '- Lavement sous contrôle'],
      tert: ['- Désinvagination radiologique, chirurgie pédiatrique', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Nourrisson avec crises de pleurs, pâleur et rectorragies' },
    formes: [
      {
        nom: 'Invagination idiopathique du nourrisson',
        type: 'commune',
        description: 'Forme typique iléo-colique.',
        terrain: '- Nourrisson de 3 mois à 2 ans',
        fonctionnels: '- Crises de pleurs, vomissements, refus du biberon',
        generaux: '- Pâleur pendant les crises',
        physiques: '- Boudin palpable, rectorragies',
        paraclinique: '- Cocarde à l’échographie',
        etiologies: '- Infection virale récente',
        syndromes: ['syndrome-occlusif'],
        examens: [['echographie-abdominale', 'Cocarde']],
      },
      {
        nom: 'Invagination secondaire',
        type: 'etiologique',
        description: 'Enfant plus grand.',
        terrain: '- Enfant > 3 ans',
        fonctionnels: '- Douleurs, occlusion',
        generaux: '- Altération de l’état général (lymphome)',
        physiques: '- Masse',
        paraclinique: '- Lésion organique',
        etiologies: '- Meckel, polype, lymphome de Burkitt',
        syndromes: [],
      },
      {
        nom: 'Invagination compliquée',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '',
        fonctionnels: '- Vomissements bilieux',
        generaux: '- Choc, fièvre',
        physiques: '- Défense, distension',
        paraclinique: '- Pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Sténose du pylore
  {
    ...CPED,
    slug: 'stenose-hypertrophique-pylore',
    nom: 'Sténose hypertrophique du pylore',
    resume:
      'Hypertrophie du muscle pylorique du nourrisson de 3 à 6 semaines : vomissements en jet non bilieux après les tétées, enfant affamé, perte de poids, alcalose hypochlorémique ; échographie ; correction hydro-électrolytique d’abord, puis pylorotomie extramuqueuse.',
    definition:
      'Épaississement progressif de la musculeuse du pylore entraînant une obstruction de la vidange gastrique chez le nourrisson.',
    physiopathologie:
      '## Mécanismes\n- Hypertrophie des fibres circulaires du pylore, d’origine multifactorielle (génétique, garçon premier-né, macrolides en période néonatale)\n- Vomissements : perte d’acide chlorhydrique → **alcalose métabolique hypochlorémique et hypokaliémique**, déshydratation',
    diagnostic:
      '## Clinique\n- Début vers **3 à 6 semaines** après un intervalle libre\n- **Vomissements en jet**, abondants, **non bilieux**, après les tétées ; enfant **affamé**\n- Perte de poids, constipation, déshydratation\n- **Olive pylorique** palpable sous le foie, ondulations péristaltiques visibles\n\n## Examens\n- **Échographie** : muscle > 3–4 mm d’épaisseur, canal > 15–17 mm de long\n- **Ionogramme** : hypochlorémie, hypokaliémie, alcalose (gaz du sang)',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Épaississement et allongement du pylore.'],
      ['premiere_intention', 'ionogramme', 'Hypochlorémie, hypokaliémie.'],
      ['premiere_intention', 'gaz-du-sang', 'Alcalose métabolique.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
    ],
    scores: [],
    differentiels: [
      ['Reflux gastro-œsophagien', 'Régurgitations sans perte de poids ni olive.'],
      ['vomissements-enfant', 'Autres causes de vomissements.'],
      ['Malrotation avec volvulus', 'Vomissements **bilieux** : urgence chirurgicale.'],
      ['Hyperplasie congénitale des surrénales', 'Hyponatrémie, hyperkaliémie, organes génitaux ambigus.'],
      ['sepsis-neonatal', 'Fièvre ou hypothermie, mauvais état général.'],
    ],
    etiologies:
      '## Terrain\n- Garçon, premier-né, antécédents familiaux, exposition néonatale aux macrolides',
    principes: [
      [
        'Correction préopératoire',
        'Ce n’est pas une urgence chirurgicale, c’est une urgence médicale.',
        '- Arrêt de l’alimentation, sonde gastrique\n- Perfusion de **sérum salé 0,9 %** (bolus 10–20 mL/kg si déshydratation) puis glucosé 5 % + NaCl + **KCl** après reprise de la diurèse\n- Opérer seulement après correction (chlore > 100 mmol/L, bicarbonates < 30 mmol/L)',
      ],
      [
        'Chirurgie',
        'Lever l’obstacle.',
        '- **Pylorotomie extramuqueuse de Fredet-Ramstedt** (ouverte ou cœlioscopique)\n- Reprise de l’alimentation progressive quelques heures après',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation et correction de l’alcalose'],
      ['chlorure-de-potassium', 'premiere', 'Correction de l’hypokaliémie'],
      ['glucose-solute', 'premiere', 'Apport glucidique'],
      ['paracetamol', 'adjuvant', 'Douleur postopératoire'],
    ],
    complications: [
      {
        nom: 'Déshydratation et alcalose sévère',
        fiche: 'deshydratation-severe-enfant',
        description: 'Diagnostic tardif.',
        traitement: '- Réhydratation, KCl',
        clinique: '- Léthargie, apnées',
        paraclinique: '- Alcalose, hypokaliémie',
      },
      {
        nom: 'Dénutrition',
        description: 'Vomissements prolongés.',
        traitement: '- Renutrition',
        clinique: '- Perte de poids',
        paraclinique: '',
      },
      {
        nom: 'Perforation muqueuse peropératoire',
        description: 'Complication chirurgicale.',
        traitement: '- Suture',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent après pylorotomie, croissance normale',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Vomissements', 'tres_frequent'],
      ['Perte de poids', 'frequent'],
      ['Retard de croissance', 'occasionnel'],
      ['Masse abdominale', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Reconnaître, réhydratation, transfert',
        '- Vomissements en jet chez un nourrisson de moins de 3 mois',
      ],
      hgr: ['- Ionogramme, échographie, correction, pylorotomie', ''],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme typique',
        type: 'commune',
        description: 'Nourrisson de 3 à 6 semaines.',
        terrain: '- Garçon premier-né',
        fonctionnels: '- Vomissements en jet non bilieux, faim',
        generaux: '- Perte de poids',
        physiques: '- Olive pylorique',
        paraclinique: '- Pylore épaissi, alcalose hypochlorémique',
        etiologies: '',
        syndromes: [],
        examens: [['echographie-abdominale', 'Pylore épaissi']],
      },
      {
        nom: 'Forme compliquée',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Déshydratation, léthargie',
        physiques: '- Fontanelle déprimée',
        paraclinique: '- Alcalose sévère, hypokaliémie',
        etiologies: '',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
    ],
  },

  // =================================================================== Hernie inguinale de l'enfant
  {
    ...CPED,
    slug: 'hernie-inguinale-enfant',
    nom: 'Hernie inguinale de l’enfant',
    resume:
      'Persistance du canal péritonéo-vaginal, fréquente chez le prématuré et le garçon : tuméfaction inguinale intermittente ; risque d’étranglement surtout avant 1 an ; réduction douce puis chirurgie (kélotomie, ligature du sac) rapide ; hernie irréductible = urgence.',
    definition:
      'Issue de viscères abdominaux (intestin, ovaire chez la fille) dans un canal péritonéo-vaginal resté perméable ; il s’agit d’une hernie oblique externe congénitale.',
    physiopathologie:
      '## Mécanismes\n- Absence de fermeture du canal péritonéo-vaginal après la descente du testicule\n- Fréquente chez le prématuré, plus à droite, parfois bilatérale\n- Étranglement : risque de nécrose intestinale et d’ischémie testiculaire ou ovarienne',
    diagnostic:
      '## Clinique\n- **Tuméfaction inguinale** ou inguino-scrotale apparaissant aux cris ou à l’effort, réductible\n- Fille : ovaire palpable dans la grande lèvre (risque de torsion)\n- **Étranglement** : tuméfaction dure, douloureuse, irréductible, pleurs, vomissements, occlusion\n\n## Examens\n- Diagnostic clinique ; échographie en cas de doute (hydrocèle, testicule non descendu)',
    examens: [
      ['deuxieme_intention', 'echographie-parties-molles', 'Doute diagnostique, contenu du sac.'],
      ['gravite', 'abdomen-sans-preparation', 'Étranglement : occlusion.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
    ],
    scores: [],
    differentiels: [
      ['Hydrocèle communicante', 'Transillumination positive, volume variable, non douloureuse.'],
      ['Testicule non descendu', 'Bourse vide du même côté.'],
      ['torsion-du-testicule', 'Douleur scrotale, testicule ascensionné.'],
      ['Adénopathie inguinale', 'Masse ferme, mobile, infection du membre inférieur.'],
    ],
    etiologies:
      '## Terrain\n- Prématuré, garçon, mucoviscidose, dérivation ventriculo-péritonéale, dialyse péritonéale',
    principes: [
      [
        'Hernie non compliquée',
        'Opérer rapidement.',
        '- **Kélotomie avec ligature haute du sac** (herniotomie) dès le diagnostic, sans attendre (surtout avant 1 an et chez le prématuré)',
      ],
      [
        'Hernie irréductible ou étranglée',
        'Urgence.',
        '- Antalgie, position déclive, **réduction manuelle douce** si < 12 heures et pas de signes de souffrance intestinale ; chirurgie dans les 24–48 heures\n- Échec de réduction ou signes de nécrose : **chirurgie en urgence**, résection si nécrose',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Réduction d’une hernie étranglée'],
      ['bupivacaine', 'adjuvant', 'Bloc ilio-inguinal'],
      ['ceftriaxone', 'adjuvant', 'Résection intestinale'],
    ],
    complications: [
      {
        nom: 'Étranglement herniaire',
        fiche: 'hernie-etranglee',
        description: 'Surtout avant 1 an.',
        traitement: '- Réduction douce ou chirurgie urgente',
        clinique: '- Masse irréductible douloureuse, vomissements',
        paraclinique: '- ASP : occlusion',
      },
      {
        nom: 'Atrophie testiculaire',
        description: 'Compression du cordon.',
        traitement: '- Chirurgie précoce',
        clinique: '- Testicule petit',
        paraclinique: '',
      },
      {
        nom: 'Torsion ou ischémie ovarienne',
        description: 'Fille.',
        traitement: '- Chirurgie rapide',
        clinique: '- Masse inguinale ferme',
        paraclinique: '- Échographie',
      },
    ],
    evolution: '## Pronostic\n- Excellent après herniotomie ; pas de fermeture spontanée',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Tuméfaction inguinale', 'tres_frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Diagnostic, orientation chirurgicale', '- Hernie irréductible, nourrisson'],
      hgr: ['- Herniotomie, urgences d’étranglement', ''],
      tert: ['- Chirurgie pédiatrique, prématurés', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Hernie inguinale irréductible et douloureuse chez un enfant' },
    formes: [
      {
        nom: 'Hernie réductible',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Garçon, prématuré',
        fonctionnels: '- Tuméfaction intermittente aux cris',
        generaux: '',
        physiques: '- Masse inguinale réductible',
        paraclinique: '',
        etiologies: '- Canal péritonéo-vaginal perméable',
        syndromes: [],
      },
      {
        nom: 'Hernie étranglée',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Nourrisson < 1 an',
        fonctionnels: '- Pleurs, vomissements',
        generaux: '',
        physiques: '- Masse dure, douloureuse, irréductible',
        paraclinique: '- Occlusion',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Hernie de l’ovaire',
        type: 'terrain',
        description: 'Fille.',
        terrain: '- Fille',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse ovoïde dans la grande lèvre',
        paraclinique: '- Échographie : ovaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Appendicite de l'enfant
  {
    ...CPED,
    slug: 'appendicite-enfant',
    nom: 'Appendicite de l’enfant',
    resume:
      'Première urgence chirurgicale abdominale de l’enfant, souvent perforée chez le petit enfant : douleur de la fosse iliaque droite, fièvre modérée, vomissements ; score pédiatrique (PAS), échographie ; appendicectomie et antibiotiques (ceftriaxone + métronidazole) ; péritonite = réanimation puis chirurgie.',
    definition:
      'Inflammation aiguë de l’appendice iléo-cæcal chez l’enfant, avec évolution rapide vers la perforation, l’abcès ou la péritonite, surtout avant 5 ans.',
    physiopathologie:
      '## Mécanismes\n- Obstruction de la lumière appendiculaire (stercolithe, hyperplasie lymphoïde, parasites), pullulation microbienne, ischémie, perforation\n- Petit enfant : épiploon court, diagnostic difficile, **perforation fréquente**',
    diagnostic:
      '## Clinique\n- Douleur périombilicale puis **fosse iliaque droite**, aggravée par la marche et la toux\n- Fièvre modérée (38–38,5 °C), **vomissements**, anorexie\n- Défense de la fosse iliaque droite, douleur au rebond, saut sur un pied douloureux\n- Petit enfant : tableau trompeur (diarrhée, irritabilité, fièvre élevée), péritonite d’emblée\n\n## Examens\n- NFS, CRP\n- **Échographie** (appendice > 6 mm non compressible), bandelette urinaire\n- Score PAS (Pediatric Appendicitis Score) ou d’Alvarado',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['confirmation', 'echographie-abdominale', 'Appendice épaissi, abcès, épanchement.'],
      ['premiere_intention', 'bandelette-urinaire', 'Éliminer une infection urinaire.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme (fièvre et douleurs abdominales).'],
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Pneumopéritoine, occlusion.'],
    ],
    scores: [],
    differentiels: [
      ['Adénolymphite mésentérique', 'Contexte viral, échographie : ganglions, appendice normal.'],
      ['diarrhee-aigue-enfant', 'Diarrhée prédominante, pas de défense.'],
      ['infection-urinaire-enfant', 'Bandelette positive.'],
      ['pneumonie-enfant', 'Pneumopathie de la base droite : toux, tachypnée.'],
      ['invagination-intestinale-aigue', 'Nourrisson, crises de pleurs, rectorragies.'],
      ['crise-vaso-occlusive-enfant-drepanocytaire', 'Drépanocytaire, crise abdominale.'],
      ['Fièvre typhoïde', 'Fièvre prolongée, risque de perforation iléale.'],
    ],
    etiologies: '## Terrain\n- Enfant d’âge scolaire (pic 10–12 ans) ; formes graves avant 5 ans',
    principes: [
      [
        'Réanimation préopératoire',
        'Préparer.',
        '- À jeun, voie veineuse, **Ringer lactate**, antalgie (paracétamol, morphine)\n- Antibiotiques : **ceftriaxone** 50–80 mg/kg/j + **métronidazole** 10 mg/kg/8 h (ou amoxicilline-acide clavulanique)',
      ],
      [
        'Appendicectomie',
        'Traiter la cause.',
        '- Appendicite simple : appendicectomie (ouverte ou cœlioscopique), antibioprophylaxie seule\n- Appendicite perforée, péritonite : appendicectomie, lavage péritonéal, antibiotiques 3 à 5 jours\n- Plastron : antibiotiques puis appendicectomie différée ; abcès : drainage',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Associée au métronidazole'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['amoxicilline', 'alternative', 'Avec acide clavulanique'],
      ['gentamicine', 'alternative', 'Péritonite (avec ampicilline et métronidazole)'],
      ['ringer-lactate', 'premiere', 'Réhydratation'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
    ],
    complications: [
      {
        nom: 'Péritonite appendiculaire',
        fiche: 'peritonite-aigue',
        description: 'Fréquente chez le petit enfant.',
        traitement: '- Réanimation, chirurgie, antibiotiques',
        clinique: '- Contracture, fièvre élevée',
        paraclinique: '- Épanchement',
      },
      {
        nom: 'Abcès et plastron appendiculaire',
        description: 'Évolution localisée.',
        traitement: '- Antibiotiques, drainage, appendicectomie différée',
        clinique: '- Masse de la fosse iliaque droite',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Occlusion sur brides',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Tardive.',
        traitement: '- Aspiration, chirurgie',
        clinique: '- Arrêt des matières',
        paraclinique: '- ASP',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-enfant',
        description: 'Péritonite généralisée.',
        traitement: '- Antibiotiques, remplissage',
        clinique: '- Choc',
        paraclinique: '- Lactates',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent après appendicectomie précoce ; morbidité plus élevée en cas de perforation',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'WSES — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Reconnaître, à jeun, antalgie, transfert', '- Douleur de la fosse iliaque droite, défense'],
      hgr: ['- Échographie, appendicectomie', ''],
      tert: ['- Cœlioscopie, péritonites graves', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Enfant avec douleur de la fosse iliaque droite, défense ou contracture',
    },
    formes: [
      {
        nom: 'Appendicite typique',
        type: 'commune',
        description: 'Enfant d’âge scolaire.',
        terrain: '- Enfant de 6 à 14 ans',
        fonctionnels: '- Douleur de la fosse iliaque droite, vomissements',
        generaux: '- Fébricule',
        physiques: '- Défense de la fosse iliaque droite',
        paraclinique: '- Hyperleucocytose, appendice épaissi',
        etiologies: '',
        syndromes: [],
        examens: [['echographie-abdominale', 'Appendice > 6 mm']],
      },
      {
        nom: 'Appendicite du petit enfant',
        type: 'terrain',
        description: 'Diagnostic tardif, perforation fréquente.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Irritabilité, diarrhée, vomissements',
        generaux: '- Fièvre élevée',
        physiques: '- Distension, défense diffuse',
        paraclinique: '- Épanchement péritonéal',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
      {
        nom: 'Péritonite appendiculaire',
        type: 'gravite',
        description: 'Perforation.',
        terrain: '',
        fonctionnels: '- Douleur diffuse',
        generaux: '- Fièvre, choc',
        physiques: '- Contracture',
        paraclinique: '- Épanchement, hyperleucocytose',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-infectieux'],
      },
    ],
  },
];
