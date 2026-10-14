'use strict';

/**
 * Lot 62 (phase 2, urgences chirurgicales et urologie) — ischémie aiguë de membre, hydrocèle,
 * varicocèle, cryptorchidie. Rédigé par IA (ESC, Sabiston, Nelson) : à valider.
 */

const URGCH = { departement: 'chirurgie', specialite: 'Urgences chirurgicales' };
const URO = { departement: 'chirurgie', specialite: 'Urologie' };

module.exports = [
  // =================================================================== Ischémie aiguë de membre
  {
    ...URGCH,
    slug: 'ischemie-aigue-de-membre',
    nom: 'Ischémie aiguë de membre',
    resume:
      'Interruption brutale de la vascularisation artérielle d’un membre (embolie d’origine cardiaque : fibrillation atriale, valvulopathie rhumatismale, cardiomyopathie ; thrombose sur artériopathie ; traumatisme, compression, injection intra-artérielle accidentelle) : les « 6 P » (douleur, pâleur, absence de pouls, paresthésies, paralysie, froideur) ; urgence absolue : la viabilité du membre dépend du délai (6 h) ; héparine IV immédiate, antalgie, membre en déclive non réchauffé, transfert en chirurgie vasculaire (embolectomie au Fogarty, revascularisation, aponévrotomie) ; amputation si membre non viable ; traitement de la cause (anticoagulation au long cours).',
    definition:
      'Diminution brutale de la perfusion artérielle d’un membre menaçant sa viabilité, évoluant depuis moins de 14 jours.',
    physiopathologie:
      '## Causes\n- **Embolie** (cœur) : **fibrillation atriale**, **valvulopathie rhumatismale** (rétrécissement mitral), cardiomyopathie dilatée, endocardite, thrombus ventriculaire après infarctus\n- **Thrombose** sur artériopathie (diabète, tabac), anévrisme poplité, états d’hypercoagulabilité (cancer, drépanocytose, VIH)\n- **Traumatisme** artériel (fracture, luxation du genou, plaie), compression (plâtre), injection intra-artérielle\n\n## Conséquences\n- Ischémie musculaire et nerveuse → nécrose en 6 h ; **syndrome de revascularisation** (hyperkaliémie, acidose, myoglobinurie), syndrome des loges',
    diagnostic:
      '## Clinique : les « 6 P »\n- **Douleur** brutale, **pâleur** (puis marbrures), **absence de pouls**, **paresthésies**, **paralysie**, membre **froid**\n- Gravité (classification de Rutherford) : déficit sensitif et moteur = ischémie menaçante ; rigidité, phlyctènes = membre non viable\n- Rechercher la cause : arythmie, souffle, antécédents\n\n## Examens\n- Ne pas retarder le traitement\n- **Écho-Doppler artériel**, ECG (fibrillation atriale), échocardiographie\n- NFS, hémostase, créatinine, **kaliémie**, **CPK**, groupage',
    examens: [
      ['confirmation', 'echo-doppler-arteriel', 'Occlusion artérielle.'],
      ['premiere_intention', 'ecg', 'Fibrillation atriale.'],
      ['etiologique', 'echocardiographie', 'Source embolique.'],
      ['gravite', 'cpk', 'Rhabdomyolyse.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie.'],
      ['premiere_intention', 'hemostase', 'Avant héparine.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
    ],
    scores: [],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Membre chaud, œdématié, pouls présents.'],
      ['syndrome-des-loges', 'Loges tendues, pouls souvent présents.'],
      ['Phlegmatia caerulea dolens', 'Thrombose veineuse massive avec membre bleu.'],
      ['Compression nerveuse aiguë', 'Pouls présents.'],
    ],
    etiologies:
      '## Causes\n- Embolie cardiaque (FA, valvulopathie), thrombose sur artériopathie, traumatisme',
    principes: [
      [
        'Urgence',
        'Dans l’heure.',
        '- **Héparine non fractionnée** IV en bolus (5 000 UI ou 80 UI/kg) puis perfusion\n- **Antalgie** (morphine), membre en **position déclive**, **ne pas réchauffer ni surélever**, protéger la peau\n- Transfert immédiat en chirurgie vasculaire',
      ],
      [
        'Revascularisation',
        'Selon la cause.',
        '- **Embolectomie** au cathéter de Fogarty (embolie), pontage ou thrombolyse (thrombose, centre spécialisé)\n- **Aponévrotomie** préventive si ischémie prolongée\n- Surveillance du syndrome de revascularisation (kaliémie, diurèse, myoglobinurie)',
      ],
      [
        'Membre non viable et suite',
        'Amputer si nécessaire, prévenir la récidive.',
        '- **Amputation** si rigidité, nécrose\n- **Anticoagulation** au long cours (FA : warfarine ou héparine relais), traitement de la valvulopathie, arrêt du tabac, antiagrégants (artériopathie)',
      ],
    ],
    molecules: [
      ['heparine-non-fractionnee', 'premiere', 'Anticoagulation immédiate'],
      ['morphine', 'premiere', 'Douleur'],
      ['warfarine', 'alternative', 'Anticoagulation au long cours (embolie)'],
      ['enoxaparine', 'alternative', 'Relais'],
      ['acide-acetylsalicylique', 'adjuvant', 'Artériopathie'],
      ['streptokinase', 'deuxieme', 'Thrombolyse (centre spécialisé)'],
    ],
    complications: [
      {
        nom: 'Gangrène et amputation',
        fiche: 'amputations-traumatiques',
        description: 'Revascularisation tardive.',
        traitement: '- Amputation',
        clinique: '- Nécrose',
        paraclinique: '',
      },
      {
        nom: 'Syndrome de revascularisation',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hyperkaliémie, myoglobinurie.',
        traitement: '- Hydratation, correction de la kaliémie',
        clinique: '- Troubles du rythme, oligurie',
        paraclinique: '- Kaliémie, CPK',
      },
      {
        nom: 'Syndrome des loges',
        fiche: 'syndrome-des-loges',
        description: 'Œdème de reperfusion.',
        traitement: '- Aponévrotomie',
        clinique: '- Loges tendues',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amputation et mortalité élevées (10–30 %) ; dépendent du délai de revascularisation et de la cardiopathie',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Membre froid et pâle', 'tres_frequent'],
      ['Troubles sensitifs', 'frequent'],
      ['Paralysie flasque', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'AHA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Héparine si disponible, antalgie, transfert immédiat', '- Tout membre froid sans pouls'],
      hgr: ['- Héparine, embolectomie, amputation', ''],
      tert: ['- Chirurgie vasculaire, thrombolyse', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Revascularisation d’une ischémie prolongée' },
    formes: [
      {
        nom: 'Embolie artérielle',
        type: 'commune',
        description: 'Cause cardiaque.',
        terrain: '- FA, valvulopathie rhumatismale',
        fonctionnels: '- Douleur brutale',
        generaux: '',
        physiques: '- Membre froid sans pouls',
        paraclinique: '- Occlusion nette',
        etiologies: '- Embolie',
        syndromes: [],
      },
      {
        nom: 'Ischémie menaçante',
        type: 'gravite',
        description: 'Déficit sensitivo-moteur.',
        terrain: '',
        fonctionnels: '- Paralysie',
        generaux: '',
        physiques: '- Anesthésie, déficit moteur',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ischémie traumatique',
        type: 'etiologique',
        description: 'Lésion artérielle.',
        terrain: '- Fracture, luxation du genou',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pouls absent en aval',
        paraclinique: '- Doppler',
        etiologies: '- Traumatisme',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hydrocèle
  {
    ...URO,
    slug: 'hydrocele',
    nom: 'Hydrocèle',
    resume:
      'Collection de liquide dans la vaginale du testicule : chez le nourrisson (hydrocèle communicante par persistance du canal péritonéo-vaginal, résolution spontanée fréquente avant 1–2 ans) et chez l’adulte (idiopathique, inflammatoire, filariose lymphatique fréquente en zone d’endémie, tumeur, traumatisme) ; tuméfaction scrotale indolore, rénitente, transilluminable, testicule non palpable séparément ; échographie (éliminer tumeur testiculaire, hernie) ; chez l’enfant : surveillance puis chirurgie (ligature du canal) après 1–2 ans ; chez l’adulte : cure chirurgicale (résection de la vaginale) si gênant ; traitement de la filariose (programme de masse).',
    definition:
      'Accumulation de liquide séreux entre les deux feuillets de la vaginale entourant le testicule.',
    physiopathologie:
      '## Enfant\n- **Persistance du canal péritonéo-vaginal** (communicante : volume variable selon la position), parfois associée à une hernie inguinale\n\n## Adulte\n- **Idiopathique** (défaut de résorption)\n- **Filariose lymphatique** (Wuchereria bancrofti) : hydrocèles volumineuses, chyleuses\n- **Réactionnelle** : orchi-épididymite, **tumeur testiculaire**, traumatisme, torsion',
    diagnostic:
      '## Clinique\n- **Tuméfaction scrotale** indolore, ovoïde, **rénitente**, **transilluminable**, testicule non palpable séparément\n- On peut passer au-dessus de la masse (≠ hernie)\n- Enfant : volume variable dans la journée (communicante)\n- Adulte : volumineuse, gênante (marche, rapports, travail), lymphœdème en zone d’endémie filarienne\n\n## Examens\n- **Échographie scrotale** (testicule normal ? tumeur ? hernie associée ?)\n- Recherche de microfilaires (sang nocturne) ou test antigénique en zone d’endémie',
    examens: [
      ['confirmation', 'echographie-doppler-scrotale', 'Liquide, testicule normal.'],
      ['etiologique', 'recherche-microfilaires', 'Filariose lymphatique.'],
    ],
    scores: [],
    differentiels: [
      ['hernie-inguinale-enfant', 'Masse impulsive, réductible, non transilluminable.'],
      ['hernie-inguinale-adulte', 'Masse impulsive à la toux.'],
      ['Tumeur testiculaire', 'Testicule dur, augmenté.'],
      ['torsion-du-testicule', 'Douleur aiguë.'],
      ['varicocele', 'Varices du cordon.'],
    ],
    etiologies:
      '## Causes\n- Canal péritonéo-vaginal (enfant), idiopathique, filariose, infection, tumeur, traumatisme',
    principes: [
      [
        'Enfant',
        'Attendre.',
        '- Surveillance jusqu’à 1–2 ans (résolution spontanée fréquente)\n- **Chirurgie** (voie inguinale, ligature du canal péritonéo-vaginal) si persistance après 2 ans, volume variable (communicante) ou hernie associée',
      ],
      [
        'Adulte',
        'Chirurgie si gêne.',
        '- **Cure d’hydrocèle** (résection ou éversion de la vaginale) par voie scrotale ; ponction-aspiration déconseillée (récidive, infection)\n- Hydrocèle réactionnelle : traitement de la cause (tumeur, infection)',
      ],
      [
        'Filariose',
        'Prévention et traitement.',
        '- **Traitement de masse** (ivermectine + diéthylcarbamazine + albendazole selon les zones), chirurgie des hydrocèles, soins du lymphœdème',
      ],
    ],
    molecules: [
      ['diethylcarbamazine', 'alternative', 'Filariose lymphatique'],
      ['albendazole', 'alternative', 'Filariose (traitement de masse)'],
      ['ivermectine', 'alternative', 'Filariose (traitement de masse)'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
      ['paracetamol', 'adjuvant', 'Douleur postopératoire'],
    ],
    complications: [
      {
        nom: 'Hématome et infection postopératoires',
        fiche: 'infection-du-site-operatoire',
        description: 'Chirurgie scrotale.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Gonflement, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Méconnaissance d’une tumeur testiculaire',
        description: 'Hydrocèle réactionnelle.',
        traitement: '- Orchidectomie inguinale',
        clinique: '',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Retentissement social et sexuel',
        description: 'Hydrocèle géante filarienne.',
        traitement: '- Chirurgie',
        clinique: '- Gêne, stigmatisation',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent ; résolution spontanée chez le nourrisson ; récidive rare après chirurgie',
    urgences: [],
    symptomes: [
      ['Tuméfaction scrotale', 'tres_frequent'],
      ['Douleur scrotale', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Diagnostic (transillumination), surveillance de l’enfant, référence', ''],
      hgr: ['- Échographie, cure chirurgicale', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hydrocèle du nourrisson',
        type: 'terrain',
        description: 'Résolution spontanée.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bourse augmentée, transilluminable',
        paraclinique: '',
        etiologies: '- Canal péritonéo-vaginal',
        syndromes: [],
      },
      {
        nom: 'Hydrocèle de l’adulte',
        type: 'commune',
        description: 'Chirurgie si gêne.',
        terrain: '- Adulte, zone filarienne',
        fonctionnels: '- Gêne',
        generaux: '',
        physiques: '- Masse rénitente',
        paraclinique: '- Testicule normal',
        etiologies: '- Idiopathique, filariose',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Varicocèle
  {
    ...URO,
    slug: 'varicocele',
    nom: 'Varicocèle',
    resume:
      'Dilatation des veines du plexus pampiniforme, presque toujours gauche (15 % des hommes), découverte chez l’adolescent ou lors d’un bilan d’infertilité : « sac de vers » au-dessus du testicule, augmentant debout et en Valsalva, pesanteur ; peut altérer la spermatogenèse et la croissance testiculaire ; varicocèle droite isolée ou d’apparition brutale chez l’adulte : rechercher une compression (tumeur rénale) ; examen debout, échographie Doppler, spermogramme ; traitement (ligature chirurgicale ou embolisation) si infertilité avec anomalies du sperme, douleur, ou atrophie testiculaire chez l’adolescent.',
    definition: 'Dilatation variqueuse des veines du cordon spermatique (plexus pampiniforme).',
    physiopathologie:
      '## Mécanismes\n- Incontinence des valvules de la veine spermatique gauche (abouchement à angle droit dans la veine rénale gauche) → reflux, stase\n- Élévation de la température testiculaire, stress oxydatif → altération de la **spermatogenèse**, **hypotrophie testiculaire**\n\n## Formes secondaires\n- Compression de la veine rénale ou cave : **tumeur rénale**, adénopathies (varicocèle droite, récente, non réductible en décubitus)',
    diagnostic:
      '## Clinique\n- Examen **debout** puis couché : veines dilatées au-dessus du testicule (« **sac de vers** »), majorées par la **manœuvre de Valsalva**\n- Grade 1 (perçue au Valsalva), 2 (palpable debout), 3 (visible)\n- Pesanteur, douleur sourde en fin de journée\n- Volume testiculaire (hypotrophie gauche chez l’adolescent)\n\n## Examens\n- **Échographie Doppler scrotale** (reflux, taille des veines, volume testiculaire)\n- **Spermogramme** (bilan d’infertilité)\n- Échographie rénale si varicocèle droite isolée ou d’apparition brutale',
    examens: [
      ['confirmation', 'echographie-doppler-scrotale', 'Reflux veineux, volume testiculaire.'],
      ['premiere_intention', 'spermogramme', 'Infertilité.'],
      ['etiologique', 'echographie-renale', 'Varicocèle secondaire.'],
    ],
    scores: [],
    differentiels: [
      ['hydrocele', 'Masse transilluminable.'],
      ['hernie-inguinale-adulte', 'Masse impulsive réductible.'],
      ['Orchi-épididymite', 'Testicule douloureux, fièvre.'],
      ['Tumeur rénale (varicocèle secondaire)', 'Varicocèle droite ou récente.'],
    ],
    etiologies: '## Causes\n- Primitive (incontinence valvulaire gauche) ; secondaire (compression)',
    principes: [
      [
        'Indications',
        'Ne pas opérer systématiquement.',
        '- **Infertilité** du couple avec varicocèle palpable et anomalies du spermogramme\n- **Adolescent** : hypotrophie testiculaire ou douleur\n- **Douleur** persistante',
      ],
      [
        'Traitement',
        'Ligature ou embolisation.',
        '- **Ligature** des veines spermatiques (voie inguinale ou sous-inguinale, microchirurgicale si possible, ou cœlioscopie)\n- **Embolisation** percutanée en centre équipé\n- Antalgiques, slip de maintien pour les formes douloureuses non opérées',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'alternative', 'Douleur'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-masculine',
        description: 'Altération de la spermatogenèse.',
        traitement: '- Cure de varicocèle, AMP',
        clinique: '',
        paraclinique: '- Spermogramme',
      },
      {
        nom: 'Hydrocèle postopératoire',
        fiche: 'hydrocele',
        description: 'Ligature des lymphatiques.',
        traitement: '- Cure',
        clinique: '- Tuméfaction',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Veines collatérales.',
        traitement: '- Embolisation',
        clinique: '',
        paraclinique: '- Doppler',
      },
    ],
    evolution: '## Pronostic\n- Amélioration du spermogramme dans 60–70 % des cas après traitement',
    urgences: [],
    symptomes: [
      ['Tuméfaction scrotale', 'frequent'],
      ['Douleur scrotale', 'occasionnel'],
      ['Infertilité', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Examen debout, orientation', ''],
      hgr: ['- Doppler, spermogramme, ligature', ''],
      tert: ['- Microchirurgie, embolisation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Varicocèle gauche primitive',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adolescent, homme jeune',
        fonctionnels: '- Pesanteur',
        generaux: '',
        physiques: '- Sac de vers debout',
        paraclinique: '- Reflux au Doppler',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Varicocèle secondaire',
        type: 'gravite',
        description: 'Compression.',
        terrain: '- Adulte, droite ou récente',
        fonctionnels: '',
        generaux: '- Amaigrissement possible',
        physiques: '- Non réductible en décubitus',
        paraclinique: '- Masse rénale',
        etiologies: '- Tumeur rénale',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cryptorchidie
  {
    ...URO,
    slug: 'cryptorchidie',
    nom: 'Cryptorchidie',
    resume:
      'Testicule non descendu dans la bourse (3 % des nouveau-nés à terme, 30 % des prématurés), descente spontanée possible jusqu’à 6 mois : à dépister à la naissance et aux visites du nourrisson ; distinguer le testicule rétractile (abaissable, normal) ; testicule non palpable : échographie, cœlioscopie ; bilatéral non palpable chez un nouveau-né : éliminer une hyperplasie congénitale des surrénales (fille virilisée) ; orchidopexie chirurgicale entre 6 et 18 mois (préservation de la fertilité, réduction du risque de cancer, détection) ; risques : infertilité, cancer testiculaire, torsion, hernie.',
    definition:
      'Absence de testicule dans la bourse, par arrêt de la migration sur son trajet normal (cryptorchidie vraie) ou position anormale hors du trajet (ectopie).',
    physiopathologie:
      '## Mécanismes\n- Défaut de migration du testicule de l’abdomen vers la bourse (facteurs hormonaux, mécaniques, génétiques)\n- Facteurs : **prématurité**, petit poids de naissance, syndromes, anomalies de la différenciation sexuelle\n\n## Conséquences\n- Température élevée → altération de la spermatogenèse (**infertilité**, surtout si bilatérale)\n- Risque de **cancer testiculaire** (× 3–8)\n- **Hernie inguinale** associée, **torsion**, retentissement psychologique',
    diagnostic:
      '## Clinique\n- Examen des bourses au calme, mains chaudes, enfant détendu (position accroupie)\n- Testicule **palpable** dans le canal inguinal (abaissable ou non) ou **non palpable**\n- **Testicule rétractile** : peut être amené dans la bourse et y reste → normal (surveillance)\n- Bilatéral non palpable ou associé à un hypospadias : **anomalie de la différenciation sexuelle** (caryotype, 17-OHP)\n\n## Examens\n- **Échographie** inguinale (testicule inguinal) ; **cœlioscopie** si non palpable\n- Caryotype et bilan hormonal si bilatéral non palpable ou ambiguïté',
    examens: [
      ['premiere_intention', 'echographie-doppler-scrotale', 'Testicule inguinal.'],
      ['etiologique', 'caryotype', 'Bilatéral non palpable, ambiguïté.'],
      ['etiologique', '17-hydroxyprogesterone', 'Hyperplasie des surrénales.'],
    ],
    scores: [],
    differentiels: [
      ['Testicule rétractile', 'Abaissable, reste dans la bourse.'],
      ['anomalies-differenciation-sexuelle', 'Bilatéral non palpable avec hypospadias.'],
      ['hernie-inguinale-enfant', 'Hernie associée.'],
      ['Anorchidie', 'Absence de testicule (torsion anténatale).'],
    ],
    etiologies:
      '## Facteurs\n- Prématurité, petit poids de naissance, syndromes génétiques, anomalies de la différenciation sexuelle',
    principes: [
      [
        'Surveillance initiale',
        'Jusqu’à 6 mois.',
        '- Descente spontanée possible jusqu’à **6 mois** (âge corrigé) ; au-delà, peu probable',
      ],
      [
        'Chirurgie',
        'Orchidopexie précoce.',
        '- **Orchidopexie** (abaissement et fixation dans la bourse) **entre 6 et 18 mois**, cure de la hernie associée\n- Testicule non palpable : cœlioscopie (abaissement en un ou deux temps, ou orchidectomie si atrophique)\n- Le traitement hormonal (hCG) n’est pas recommandé en routine',
      ],
      [
        'Suivi',
        'Informer.',
        '- Autopalpation des testicules à l’adolescence (cancer), suivi de la fertilité si bilatéral',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur postopératoire'],
      ['bupivacaine', 'adjuvant', 'Anesthésie locorégionale'],
    ],
    complications: [
      {
        nom: 'Infertilité',
        fiche: 'infertilite-masculine',
        description: 'Bilatérale, traitement tardif.',
        traitement: '- Orchidopexie précoce, AMP',
        clinique: '',
        paraclinique: '- Spermogramme',
      },
      {
        nom: 'Cancer testiculaire',
        description: 'Risque accru.',
        traitement: '- Orchidectomie, oncologie',
        clinique: '- Masse testiculaire',
        paraclinique: '- Échographie, marqueurs',
      },
      {
        nom: 'Torsion du testicule non descendu',
        fiche: 'torsion-du-testicule',
        description: 'Mobilité anormale.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur inguinale',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon après orchidopexie précoce ; fertilité diminuée dans les formes bilatérales',
    urgences: [],
    symptomes: [
      ['Bourse vide', 'tres_frequent'],
      ['Tuméfaction inguinale', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Examen des bourses à la naissance et aux visites, orientation', '- Bilatéral non palpable'],
      hgr: ['- Échographie, orchidopexie', ''],
      tert: ['- Cœlioscopie, anomalies de la différenciation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cryptorchidie unilatérale palpable',
        type: 'commune',
        description: 'Orchidopexie.',
        terrain: '- Nourrisson, prématuré',
        fonctionnels: '',
        generaux: '',
        physiques: '- Testicule inguinal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cryptorchidie bilatérale non palpable',
        type: 'gravite',
        description: 'Bilan de différenciation.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bourses vides, hypospadias possible',
        paraclinique: '- Caryotype',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
