'use strict';

/**
 * Lot 12 (infectiologie pédiatrique) — varicelle, poliomyélite et paralysies flasques aiguës,
 * méningite bactérienne de l'enfant, infection à VIH de l'enfant, tuberculose de l'enfant,
 * fièvre typhoïde de l'enfant, choléra de l'enfant, sepsis de l'enfant.
 * Rédigé par IA (OMS, PCIME, PEV, PNLT, PNLS) : à valider.
 */

const INFPED = { departement: 'pediatrie', specialite: 'Infectiologie pédiatrique' };

module.exports = [
  // =================================================================== Varicelle
  {
    ...INFPED,
    slug: 'varicelle',
    nom: 'Varicelle',
    resume:
      'Primo-infection par le virus varicelle-zona : éruption vésiculeuse prurigineuse généralisée en poussées, bénigne chez l’enfant sain ; soins locaux, paracétamol (pas d’AINS ni d’aspirine), aciclovir chez l’immunodéprimé ou dans les formes graves.',
    definition:
      'Maladie éruptive très contagieuse due au virus varicelle-zona (VZV), touchant surtout l’enfant de 2 à 10 ans ; le virus reste latent et peut se réactiver en zona.',
    physiopathologie:
      '## Mécanismes\n- Transmission aérienne et par contact avec les vésicules ; contagiosité de 2 jours avant à la fin des croûtes\n- Incubation de 14 à 16 jours\n- Virémie puis éruption cutanéo-muqueuse ; latence dans les ganglions sensitifs',
    diagnostic:
      '## Clinique\n- Fièvre modérée, malaise\n- **Éruption** de macules puis vésicules « en gouttes de rosée », puis croûtes, en **plusieurs poussées** (éléments d’âges différents)\n- Début au visage et au tronc, cuir chevelu et muqueuses atteints, **prurit**\n\n## Formes graves\n- Immunodéprimé (VIH, malnutrition, corticoïdes, chimiothérapie), nouveau-né, adulte\n- Surinfection cutanée, pneumopathie varicelleuse, encéphalite (ataxie cérébelleuse)',
    examens: [
      ['etiologique', 'tdr-vih', 'Varicelle grave ou extensive.'],
      ['gravite', 'radiographie-thoracique', 'Pneumopathie varicelleuse.'],
      ['gravite', 'nfs', 'Formes graves.'],
    ],
    scores: [],
    differentiels: [
      ['rougeole', 'Éruption maculo-papuleuse, signes catarrhaux.'],
      ['mpox', 'Lésions au même stade, adénopathies, contexte épidémique.'],
      ['Prurigo strophulus (piqûres)', 'Papules à vésicule centrale, pas de fièvre.'],
      ['Syndrome pieds-mains-bouche', 'Vésicules palmo-plantaires et buccales.'],
      ['pyodermites', 'Impétigo bulleux : croûtes mélicériques.'],
    ],
    etiologies:
      '## Cause\n- Virus varicelle-zona (herpèsvirus)\n\n## Terrain à risque de forme grave\n- Immunodépression, malnutrition, nouveau-né, femme enceinte',
    principes: [
      [
        'Traitement symptomatique',
        'Soulager et éviter la surinfection.',
        '- **Paracétamol** si fièvre ; **pas d’aspirine** (syndrome de Reye) **ni d’AINS** (surinfections graves)\n- Ongles courts, toilette à l’eau et au savon, antiseptique sur les lésions\n- Antihistaminique (**chlorphénamine**) si prurit',
      ],
      [
        'Aciclovir',
        'Formes à risque.',
        '- Immunodéprimé, forme grave, nouveau-né, pneumopathie : **aciclovir** IV 10–20 mg/kg toutes les 8 h 7 à 10 jours\n- Forme modérée chez l’adolescent : aciclovir oral 20 mg/kg 4 fois par jour 5 jours (dans les 24 h)',
      ],
      [
        'Surinfection',
        'Traiter.',
        '- Impétiginisation : **cloxacilline**\n- Cellulite étendue, fasciite : hospitalisation',
      ],
      [
        'Prévention',
        'Limiter la transmission.',
        '- Éviction scolaire jusqu’à la phase de croûtes\n- Éviter le contact avec les immunodéprimés et les femmes enceintes',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre'],
      ['chlorphenamine', 'adjuvant', 'Prurit'],
      ['aciclovir', 'deuxieme', 'Immunodéprimé, forme grave'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Antisepsie des lésions'],
      ['cloxacilline', 'adjuvant', 'Surinfection bactérienne'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'pyodermites',
        description: 'Streptocoque, staphylocoque ; favorisée par les AINS.',
        traitement: '- Antibiotiques',
        clinique: '- Lésions purulentes, fièvre secondaire',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie varicelleuse',
        description: 'Immunodéprimé, adulte.',
        traitement: '- Aciclovir IV, oxygène',
        clinique: '- Toux, dyspnée',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Encéphalite et ataxie cérébelleuse',
        description: 'Rare.',
        traitement: '- Aciclovir (encéphalite)',
        clinique: '- Troubles de la marche, convulsions',
        paraclinique: '- LCR',
      },
    ],
    evolution: '## Pronostic\n- Guérison en 10 à 15 jours chez l’enfant sain ; grave chez l’immunodéprimé',
    urgences: [],
    symptomes: [
      ['Éruption vésiculeuse', 'tres_frequent'],
      ['Prurit', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Soins locaux, paracétamol, conseils', '- Immunodéprimé, nouveau-né, forme grave'],
      hgr: ['- Aciclovir IV, prise en charge des complications', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Varicelle commune de l’enfant',
        type: 'commune',
        description: 'Éruption vésiculeuse en poussées.',
        terrain: '- Enfant de 2 à 10 ans',
        fonctionnels: '- Prurit',
        generaux: '- Fièvre modérée',
        physiques: '- Vésicules d’âges différents, cuir chevelu atteint',
        paraclinique: '',
        etiologies: '- VZV',
        syndromes: [],
      },
      {
        nom: 'Varicelle de l’immunodéprimé',
        type: 'terrain',
        description: 'Forme extensive et nécrotique.',
        terrain: '- VIH, malnutrition, corticoïdes',
        fonctionnels: '- Douleurs',
        generaux: '- Fièvre élevée',
        physiques: '- Lésions nombreuses, hémorragiques',
        paraclinique: '- Pneumopathie',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Polio / PFA
  {
    ...INFPED,
    slug: 'poliomyelite-paralysies-flasques-aigues',
    nom: 'Poliomyélite et paralysies flasques aiguës',
    resume:
      'Toute paralysie flasque aiguë (PFA) chez un enfant de moins de 15 ans est une urgence de surveillance : notifier dans les 24 h, 2 selles à 24 h d’intervalle dans les 14 jours ; soins de support et rééducation ; vaccination (VPO, VPI).',
    definition:
      'La paralysie flasque aiguë est l’apparition brutale d’une faiblesse ou d’une paralysie flasque d’un ou plusieurs membres ; la poliomyélite est due aux poliovirus (sauvages ou dérivés de souches vaccinales, PVDVc, présents en RDC).',
    physiopathologie:
      '## Mécanismes\n- Transmission féco-orale\n- Multiplication intestinale, puis atteinte des motoneurones de la corne antérieure de la moelle chez < 1 % des infectés\n- Paralysie asymétrique, définitive dans la majorité des cas',
    diagnostic:
      '## Poliomyélite\n- Fièvre, douleurs musculaires, puis **paralysie flasque asymétrique** en 24 à 72 h, prédominant aux membres inférieurs\n- Réflexes abolis, **sensibilité conservée**\n- Forme bulbaire : troubles de la déglutition et respiratoires\n\n## Démarche PFA (surveillance)\n- Tout cas de PFA chez l’enfant < 15 ans (ou toute paralysie suspecte de polio à tout âge)\n- **Notification immédiate** et investigation\n- **Deux échantillons de selles** à 24 h d’intervalle, dans les 14 jours suivant le début\n- Examen de suivi à 60 jours (paralysie résiduelle)',
    examens: [
      ['confirmation', 'selles-poliovirus', '2 selles à 24 h d’intervalle, chaîne du froid.'],
      ['etiologique', 'lcr', 'Guillain-Barré (dissociation albumino-cytologique), méningite.'],
      ['etiologique', 'glycemie', 'Diagnostic différentiel.'],
      ['etiologique', 'ionogramme', 'Hypokaliémie.'],
    ],
    scores: [],
    differentiels: [
      ['Syndrome de Guillain-Barré', 'Paralysie ascendante symétrique, troubles sensitifs, LCR.'],
      ['Névrite traumatique post-injection', 'Injection IM fessière récente, membre unique.'],
      ['Myélite transverse', 'Niveau sensitif, troubles sphinctériens.'],
      ['mal-de-pott', 'Paraparésie progressive, gibbosité.'],
      ['Paralysie hypokaliémique', 'Kaliémie basse.'],
      ['Konzo', 'Paraparésie spastique brutale symétrique, consommation de manioc amer.'],
    ],
    etiologies:
      '## Causes de PFA\n- Poliovirus sauvage ou dérivé d’une souche vaccinale (PVDVc type 2 en RDC)\n- Guillain-Barré, névrite post-injection, myélite, traumatisme, autres entérovirus\n\n## Facteurs\n- Couverture vaccinale faible, zones de conflit, assainissement insuffisant',
    principes: [
      [
        'Surveillance et riposte',
        'Interrompre la transmission.',
        '- Notification dans les 24 h au point focal de surveillance\n- Prélèvement des selles et envoi sous chaîne du froid\n- Riposte vaccinale (VPOn2, VPOb) autour des cas confirmés',
      ],
      [
        'Soins de support',
        'Préserver la fonction.',
        '- Repos en phase aiguë, positionnement du membre, antalgiques (**paracétamol**)\n- **Pas d’injections intramusculaires** pendant la phase aiguë\n- Surveillance respiratoire et de la déglutition (formes bulbaires)',
      ],
      [
        'Rééducation',
        'Limiter le handicap.',
        '- Kinésithérapie précoce, prévention des rétractions\n- Orthèses, chirurgie orthopédique des séquelles, inclusion scolaire',
      ],
      [
        'Prévention',
        'Éradiquer la poliomyélite.',
        '- **VPO** à la naissance, 6, 10, 14 semaines, **VPI** selon le calendrier\n- Campagnes de vaccination de masse',
      ],
    ],
    molecules: [
      ['vaccin-polio', 'premiere', 'Prévention et riposte'],
      ['paracetamol', 'premiere', 'Douleurs'],
      ['ibuprofene', 'alternative', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Paralysie respiratoire',
        description: 'Forme bulbaire ou haute.',
        traitement: '- Ventilation',
        clinique: '- Détresse respiratoire, troubles de la déglutition',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Séquelles motrices',
        description: 'Paralysie résiduelle, atrophie, déformations.',
        traitement: '- Rééducation, appareillage, chirurgie',
        clinique: '- Boiterie, membre atrophique',
        paraclinique: '',
      },
      {
        nom: 'Syndrome post-poliomyélitique',
        description: 'Des années plus tard.',
        traitement: '- Rééducation',
        clinique: '- Fatigue, faiblesse nouvelle',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Paralysie définitive dans la majorité des cas ; létalité de 5 à 10 % des formes paralytiques (atteinte respiratoire)',
    urgences: [],
    symptomes: [
      ['Paralysie flasque', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleurs osseuses', 'frequent'],
      ['Dysphagie', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Reconnaître et notifier toute PFA, prélever les selles, vaccination',
        '- Atteinte respiratoire, déglutition',
      ],
      hgr: ['- Soins de support, investigation, kinésithérapie', ''],
      tert: ['- Réanimation, chirurgie orthopédique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Poliomyélite paralytique spinale',
        type: 'commune',
        description: 'Paralysie flasque asymétrique.',
        terrain: '- Enfant non ou incomplètement vacciné',
        fonctionnels: '- Ne peut plus marcher',
        generaux: '- Fièvre initiale',
        physiques: '- Membre flasque, aréflexique, sensibilité conservée',
        paraclinique: '- Poliovirus dans les selles',
        etiologies: '- Poliovirus sauvage ou PVDVc',
        syndromes: [],
        examens: [['selles-poliovirus', 'Confirmation']],
      },
      {
        nom: 'Forme bulbaire',
        type: 'gravite',
        description: 'Atteinte des nerfs crâniens.',
        terrain: '- Enfant non vacciné',
        fonctionnels: '- Fausses routes, voix nasonnée',
        generaux: '',
        physiques: '- Paralysie du voile, détresse respiratoire',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Méningite enfant
  {
    ...INFPED,
    slug: 'meningite-bacterienne-enfant',
    nom: 'Méningite bactérienne de l’enfant',
    resume:
      'Urgence : fièvre, convulsions, raideur de nuque ou fontanelle bombée, troubles de conscience ; PL si possible sans retarder le traitement ; ceftriaxone 100 mg/kg/j, dexaméthasone selon le contexte ; prévention par les vaccins Hib, pneumocoque, méningocoque A.',
    definition:
      'Infection bactérienne des méninges chez l’enfant de plus de 2 mois, due principalement au pneumocoque, au méningocoque et à *Haemophilus influenzae* type b (devenu rare grâce au vaccin).',
    physiopathologie:
      '## Mécanismes\n- Colonisation rhinopharyngée, bactériémie, franchissement de la barrière hémato-encéphalique\n- Inflammation, œdème cérébral, hypertension intracrânienne, vascularite\n- Épidémies de méningocoque (ceinture africaine de la méningite, nord de la RDC)',
    diagnostic:
      '## Clinique\n- **Fièvre**, céphalées, vomissements, photophobie\n- **Raideur de nuque** (> 1 an) ; nourrisson : **fontanelle bombée**, hypotonie, refus de téter, irritabilité\n- **Convulsions**, troubles de conscience\n- **Purpura** extensif (méningocoque : purpura fulminans, urgence absolue)\n\n## Ponction lombaire\n- LCR trouble, leucocytes élevés à polynucléaires, protéines > 1 g/L, glucose bas, Gram, culture, test rapide d’antigènes\n- Différer la PL si signes d’hypertension intracrânienne, choc, troubles de coagulation, convulsions prolongées : traiter d’abord',
    examens: [
      ['confirmation', 'lcr', 'Cytologie, biochimie, Gram, culture, antigènes.'],
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme associé ou différentiel.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Infection, thrombopénie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['gravite', 'scanner-cerebral', 'Signes focaux, abcès, hydrocéphalie.'],
    ],
    scores: ['glasgow', 'blantyre', 'dose-ponderale'],
    differentiels: [
      ['paludisme-grave-enfant', 'TDR positif ; la méningite peut être associée.'],
      ['Méningite tuberculeuse', 'Début progressif, LCR lymphocytaire, contage.'],
      ['Méningite à cryptocoque', 'Enfant infecté par le VIH, CrAg positif.'],
      ['Encéphalite virale', 'LCR lymphocytaire, troubles du comportement.'],
      ['Convulsion fébrile simple', 'Crise brève, examen normal après la crise.'],
    ],
    etiologies:
      '## Germes\n- *Streptococcus pneumoniae*, *Neisseria meningitidis* (A, C, W, X), *Haemophilus influenzae* b\n- *Salmonella* chez le drépanocytaire et le malnutri\n\n## Facteurs\n- Absence de vaccination, drépanocytose, VIH, asplénie, malnutrition',
    principes: [
      [
        'Antibiothérapie urgente',
        'Réduire la mortalité.',
        '- **Ceftriaxone** 100 mg/kg/j (1 ou 2 injections, maximum 4 g) IV ou IM, **dans l’heure**, sans attendre la PL si elle est différée\n- Durée : 5 jours (méningocoque), 10 à 14 jours (pneumocoque, Hib)\n- En épidémie de méningocoque : ceftriaxone selon le protocole OMS',
      ],
      [
        'Corticoïdes',
        'Réduire les séquelles auditives.',
        '- **Dexaméthasone** 0,15 mg/kg toutes les 6 h 2 à 4 jours, débutée avant ou avec la 1re dose d’antibiotique (pays à revenu élevé, Hib, pneumocoque) ; bénéfice incertain en Afrique subsaharienne : selon le protocole national',
      ],
      [
        'Soins de support',
        'Prévenir les complications.',
        '- Convulsions : **diazépam**, phénobarbital\n- Glycémie, apports hydriques adaptés (pas de restriction systématique), oxygène\n- Choc : remplissage, antibiotiques ; purpura fulminans : ceftriaxone immédiate',
      ],
      [
        'Prévention',
        'Protéger les contacts.',
        '- Vaccins Hib, pneumocoque conjugué, MenAfriVac (méningocoque A)\n- Chimioprophylaxie des contacts du méningocoque (ciprofloxacine dose unique ou ceftriaxone)\n- Notification',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', '100 mg/kg/j'],
      ['dexamethasone', 'adjuvant', 'Selon le protocole'],
      ['diazepam', 'premiere', 'Convulsions'],
      ['phenobarbital', 'alternative', 'Convulsions répétées'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['ciprofloxacine', 'adjuvant', 'Chimioprophylaxie des contacts'],
      ['vaccin-pneumococcique-conjugue', 'premiere', 'Prévention'],
      ['vaccin-meningococcique-a-conjugue', 'premiere', 'Prévention'],
      ['vaccin-haemophilus-influenzae-b', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Surdité',
        description: 'Pneumocoque surtout.',
        traitement: '- Dépistage auditif, appareillage',
        clinique: '- Absence de réaction aux bruits',
        paraclinique: '- Audiométrie',
      },
      {
        nom: 'Hydrocéphalie, abcès, empyème',
        description: 'Complications neurologiques.',
        traitement: '- Neurochirurgie',
        clinique: '- Fontanelle tendue, déficit',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Choc septique et purpura fulminans',
        fiche: 'sepsis-enfant',
        description: 'Méningocoque.',
        traitement: '- Remplissage, antibiotiques',
        clinique: '- Purpura extensif, choc',
        paraclinique: '',
      },
      {
        nom: 'Séquelles cognitives et épilepsie',
        description: 'Lésions cérébrales.',
        traitement: '- Suivi',
        clinique: '',
        paraclinique: '- EEG',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de 10 à 30 % ; séquelles chez 20 à 30 % des survivants',
    urgences: ['syndrome-meninge-febrile', 'choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Raideur de nuque', 'frequent'],
      ['Fontanelle bombée', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines on meningitis diagnosis, treatment and care',
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Première dose de ceftriaxone, diazépam, glucose, transfert immédiat',
        '- Toute suspicion de méningite',
      ],
      hgr: [
        '- PL, ceftriaxone, prise en charge des convulsions et du choc',
        '- Complications neurochirurgicales',
      ],
      tert: ['- Neurochirurgie, réanimation', ''],
    },
    alertes: {
      'syndrome-meninge-febrile':
        'Enfant fébrile avec raideur de nuque, fontanelle bombée, convulsions ou somnolence',
      'choc-septique': 'Enfant fébrile avec purpura extensif ou extrémités froides',
    },
    formes: [
      {
        nom: 'Méningite purulente de l’enfant',
        type: 'commune',
        description: 'Syndrome méningé fébrile.',
        terrain: '- Enfant non vacciné, drépanocytaire',
        fonctionnels: '- Céphalées, vomissements',
        generaux: '- Fièvre élevée',
        physiques: '- Raideur de nuque, fontanelle bombée',
        paraclinique: '- LCR purulent',
        etiologies: '- Pneumocoque, méningocoque, Hib',
        syndromes: ['syndrome-meninge', 'syndrome-infectieux'],
        examens: [['lcr', 'Confirmation']],
      },
      {
        nom: 'Purpura fulminans',
        type: 'gravite',
        description: 'Méningococcémie fulminante.',
        terrain: '- Épidémie de méningocoque',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Purpura extensif nécrotique',
        paraclinique: '- Thrombopénie, CIVD',
        etiologies: '- N. meningitidis',
        syndromes: ['syndrome-de-choc', 'syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== VIH enfant
  {
    ...INFPED,
    slug: 'infection-vih-enfant',
    nom: 'Infection à VIH de l’enfant',
    resume:
      'Transmission mère-enfant surtout : retard de croissance, infections répétées, candidose, pneumonie ; PCR avant 18 mois ; TARV pour tous dès le diagnostic (dolutégravir pédiatrique), cotrimoxazole, nutrition, vaccins.',
    definition:
      'Infection par le VIH chez l’enfant de moins de 15 ans, acquise le plus souvent par transmission mère-enfant ; évolution rapide chez le nourrisson non traité (50 % de décès avant 2 ans).',
    physiopathologie:
      '## Mécanismes\n- Transmission in utero, à l’accouchement ou par l’allaitement\n- Système immunitaire immature : progression rapide, infections bactériennes et opportunistes précoces\n- Encéphalopathie, retard de croissance',
    diagnostic:
      '## Signes évocateurs (stades OMS)\n- Retard de croissance, malnutrition ne répondant pas au traitement\n- Pneumonies répétées, pneumocystose (nourrisson), tuberculose\n- Candidose buccale persistante, diarrhée chronique, parotidite, adénopathies généralisées, hépatosplénomégalie\n- Retard de développement\n\n## Diagnostic\n- **< 18 mois : PCR** (test virologique)\n- **≥ 18 mois : tests sérologiques rapides** selon l’algorithme national\n- Dépister tout enfant malade, malnutri, tuberculeux ou de mère séropositive',
    examens: [
      ['confirmation', 'pcr-vih-nourrisson', 'Avant 18 mois.'],
      ['confirmation', 'tdr-vih', 'À partir de 18 mois.'],
      ['premiere_intention', 'cd4', 'Stade immunitaire (en % avant 5 ans).'],
      ['suivi', 'charge-virale-vih', 'Efficacité du TARV (6 mois puis annuelle).'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose associée.'],
      ['etiologique', 'tb-lam', 'Tuberculose chez l’enfant très malade.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'anthropometrie', 'Croissance.'],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      ['malnutrition-aigue-severe', 'Peut être associée : dépister le VIH.'],
      ['tuberculose-enfant', 'Souvent associée.'],
      ['retard-staturo-ponderal', 'Autres causes de cassure de la courbe.'],
    ],
    etiologies:
      '## Transmission\n- Mère-enfant (> 90 %) : absence de PTME, mère non traitée ou virémique\n- Transfusion, violences sexuelles, adolescents (transmission sexuelle)',
    principes: [
      [
        'TARV pour tous',
        'Restaurer l’immunité, réduire la mortalité.',
        '- Démarrer dès le diagnostic (le jour même si possible)\n- Schéma préféré : **dolutégravir** pédiatrique (comprimés dispersibles 10 mg dès 4 semaines et 3 kg) + **abacavir** + **lamivudine**\n- Alternatives : lopinavir/ritonavir chez le nourrisson\n- Doses selon le poids (tableaux nationaux), révision à chaque visite',
      ],
      [
        'Prévention des infections',
        'Éviter les infections opportunistes.',
        '- **Cotrimoxazole** quotidien\n- Prévention de la tuberculose (**isoniazide** 6 mois) après exclusion d’une tuberculose active\n- Vaccinations complètes (sauf BCG si VIH symptomatique), vitamine A, déparasitage',
      ],
      [
        'Nutrition et accompagnement',
        'Assurer la croissance et l’observance.',
        '- Évaluation nutritionnelle, prise en charge de la malnutrition\n- Annonce adaptée à l’âge, soutien des parents, groupes d’adolescents\n- Charge virale : échec si > 1 000 copies/mL après renforcement de l’observance',
      ],
    ],
    molecules: [
      ['dolutegravir', 'premiere', 'TARV (forme pédiatrique dispersible)'],
      ['abacavir', 'premiere', 'TARV'],
      ['lamivudine', 'premiere', 'TARV'],
      ['lopinavir', 'alternative', 'Nourrisson (avec ritonavir)'],
      ['ritonavir', 'alternative', 'Avec lopinavir'],
      ['zidovudine', 'alternative', 'Selon les directives'],
      ['cotrimoxazole', 'premiere', 'Prophylaxie'],
      ['isoniazide', 'adjuvant', 'Prévention de la tuberculose'],
    ],
    complications: [
      {
        nom: 'Pneumocystose du nourrisson',
        description: 'Nourrisson de 2 à 6 mois.',
        traitement: '- Cotrimoxazole forte dose, prednisolone, oxygène',
        clinique: '- Détresse respiratoire, SpO2 basse',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Tuberculose',
        fiche: 'tuberculose-enfant',
        description: 'Très fréquente.',
        traitement: '- Antituberculeux',
        clinique: '- Toux, amaigrissement',
        paraclinique: '- Xpert, TB-LAM',
      },
      {
        nom: 'Malnutrition sévère',
        fiche: 'malnutrition-aigue-severe',
        description: 'Infection non contrôlée.',
        traitement: '- PCIMA, TARV',
        clinique: '- Émaciation',
        paraclinique: '- PB',
      },
      {
        nom: 'Encéphalopathie à VIH',
        description: 'Nourrisson non traité.',
        traitement: '- TARV',
        clinique: '- Régression du développement, microcéphalie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Sous TARV précoce, espérance de vie proche de la normale ; sans traitement, mortalité très élevée avant 2 ans',
    urgences: [],
    symptomes: [
      ['Retard de croissance', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Toux', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Perte de poids', 'frequent'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Dépistage, TARV, cotrimoxazole, suivi de l’observance et de la croissance',
        '- Enfant gravement malade, échec virologique',
      ],
      hgr: ['- Prise en charge des infections opportunistes, charge virale', ''],
      tert: ['- Pédiatrie VIH, génotypage de résistance', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'VIH du nourrisson',
        type: 'commune',
        description: 'Progression rapide.',
        terrain: '- Mère non traitée',
        fonctionnels: '- Diarrhée, toux',
        generaux: '- Retard de croissance',
        physiques: '- Candidose buccale, hépatosplénomégalie',
        paraclinique: '- PCR positive',
        etiologies: '- Transmission mère-enfant',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [['pcr-vih-nourrisson', 'Diagnostic']],
      },
      {
        nom: 'VIH de l’adolescent',
        type: 'terrain',
        description: 'Survivant à long terme ou transmission récente.',
        terrain: '- Adolescent',
        fonctionnels: '- Difficultés d’observance',
        generaux: '- Petite taille',
        physiques: '- Retard pubertaire',
        paraclinique: '- Charge virale élevée',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== TB enfant
  {
    ...INFPED,
    slug: 'tuberculose-enfant',
    nom: 'Tuberculose de l’enfant',
    resume:
      'Souvent paucibacillaire et difficile à prouver : contage, toux > 2 semaines, fièvre, cassure pondérale ; Xpert sur crachats, aspiration gastrique ou selles, radiographie ; 2RHZ(E)/4RH (4 mois pour les formes non graves), traitement préventif des contacts.',
    definition:
      'Infection tuberculeuse active chez l’enfant de moins de 15 ans, pulmonaire ou extrapulmonaire (ganglionnaire, méningée, miliaire, ostéoarticulaire), avec un risque élevé de formes graves avant 5 ans.',
    physiopathologie:
      '## Mécanismes\n- Contamination par un adulte bacillifère du foyer\n- Primo-infection : complexe ganglio-pulmonaire, adénopathies médiastinales\n- Dissémination plus fréquente chez le nourrisson, le malnutri et l’enfant infecté par le VIH (miliaire, méningite)',
    diagnostic:
      '## Arguments\n- **Contact** avec un tuberculeux (surtout dans le foyer)\n- Toux persistante > 2 semaines, fièvre, sueurs, **perte de poids ou cassure de la courbe**, fatigue\n- Adénopathies cervicales, signes de méningite, gibbosité\n\n## Examens\n- **Xpert MTB/RIF Ultra** sur crachats, aspiration gastrique, aspiration nasopharyngée ou **selles**\n- Radiographie thoracique : adénopathies hilaires, miliaire, opacités\n- IDR ou test IGRA (infection), TB-LAM urinaire chez l’enfant VIH+\n- Algorithmes de décision de l’OMS (score) si pas de confirmation',
    examens: [
      ['confirmation', 'xpert-mtb-rif', 'Crachats, aspiration gastrique, selles.'],
      ['premiere_intention', 'radiographie-thoracique', 'Adénopathies, miliaire, opacités.'],
      ['deuxieme_intention', 'idr-tuberculine', 'Infection tuberculeuse.'],
      ['etiologique', 'tb-lam', 'Enfant infecté par le VIH.'],
      ['premiere_intention', 'tdr-vih', 'Systématique.'],
      ['premiere_intention', 'anthropometrie', 'Malnutrition.'],
      ['gravite', 'lcr', 'Méningite tuberculeuse.'],
      ['etiologique', 'cytoponction-ganglionnaire', 'Adénopathie cervicale.'],
    ],
    scores: [],
    differentiels: [
      ['pneumonie-enfant', 'Évolution aiguë, réponse aux antibiotiques.'],
      ['infection-vih-enfant', 'Souvent associée.'],
      ['malnutrition-aigue-severe', 'Peut masquer la tuberculose.'],
      ['Corps étranger bronchique', 'Syndrome de pénétration.'],
    ],
    etiologies:
      '## Facteurs\n- Contage familial, âge < 5 ans, malnutrition, VIH, rougeole récente\n- Absence de BCG (formes graves)',
    principes: [
      [
        'Traitement',
        'Guérir.',
        '- Forme non grave (enfant 3 mois–16 ans) : **2HRZ(E)/2HR** (4 mois)\n- Forme standard : **2HRZE/4HR** (6 mois)\n- Méningite et ostéoarticulaire : 2HRZE/10HR (ou schéma court de 6 mois intensif selon l’OMS) + corticoïdes (méningite)\n- Formes pédiatriques dispersibles à doses fixes selon le poids, **pyridoxine**',
      ],
      [
        'Traitement préventif des contacts',
        'Éviter la maladie.',
        '- Tout enfant < 5 ans (et tout enfant VIH+) contact d’un cas, sans tuberculose active : **isoniazide** 6 mois (ou 3HR)',
      ],
      [
        'Accompagnement',
        'Assurer l’observance.',
        '- Traitement sous observation (famille), soutien nutritionnel, dépistage du VIH, déclaration au PNLT',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', 'Toutes formes'],
      ['isoniazide', 'premiere', 'Traitement et prévention'],
      ['pyrazinamide', 'premiere', 'Phase intensive'],
      ['ethambutol', 'premiere', 'Phase intensive (formes étendues)'],
      ['pyridoxine', 'adjuvant', 'Prévention de la neuropathie'],
      ['prednisolone', 'adjuvant', 'Méningite, péricardite'],
      ['vaccin-bcg', 'premiere', 'Prévention des formes graves'],
    ],
    complications: [
      {
        nom: 'Méningite tuberculeuse',
        description: 'Nourrisson, non vacciné.',
        traitement: '- Antituberculeux 12 mois, corticoïdes',
        clinique: '- Troubles de conscience, paralysies',
        paraclinique: '- LCR',
      },
      {
        nom: 'Miliaire',
        description: 'Dissémination.',
        traitement: '- Antituberculeux',
        clinique: '- Fièvre, détresse respiratoire',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Mal de Pott',
        fiche: 'mal-de-pott',
        description: 'Atteinte vertébrale.',
        traitement: '- Antituberculeux prolongés',
        clinique: '- Gibbosité',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement complet ; mortalité élevée des formes méningées et chez l’enfant VIH+ non traité',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Retard de croissance', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Adénopathies', 'occasionnel'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide technique de prise en charge de la tuberculose',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Dépistage des contacts, recueil des échantillons, traitement et suivi, traitement préventif',
        '- Forme grave, diagnostic incertain',
      ],
      hgr: ['- Radiographie, Xpert, prise en charge des formes graves', '- Tuberculose résistante'],
      tert: ['- Pneumologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Tuberculose pulmonaire de l’enfant',
        type: 'commune',
        description: 'Toux chronique et cassure pondérale.',
        terrain: '- Contact familial',
        fonctionnels: '- Toux > 2 semaines',
        generaux: '- Fièvre, amaigrissement',
        physiques: '- Peu de signes auscultatoires',
        paraclinique: '- Adénopathies hilaires, Xpert parfois positif',
        etiologies: '- M. tuberculosis',
        syndromes: ['syndrome-d-impregnation-tuberculeuse'],
        examens: [['xpert-mtb-rif', 'Confirmation']],
      },
      {
        nom: 'Méningite tuberculeuse',
        type: 'gravite',
        description: 'Forme la plus grave.',
        terrain: '- Nourrisson non vacciné, VIH',
        fonctionnels: '- Céphalées, vomissements, changement de comportement',
        generaux: '- Fièvre prolongée',
        physiques: '- Troubles de conscience, paralysies oculomotrices',
        paraclinique: '- LCR lymphocytaire, glucose bas',
        etiologies: '',
        syndromes: ['syndrome-meninge'],
      },
    ],
  },

  // =================================================================== Typhoïde enfant
  {
    ...INFPED,
    slug: 'fievre-typhoide-enfant',
    nom: 'Fièvre typhoïde de l’enfant',
    resume:
      'Fièvre prolongée de l’enfant d’âge scolaire avec douleurs abdominales, TDR du paludisme négatif : hémocultures ; azithromycine (forme non compliquée) ou ceftriaxone ; perforation intestinale = urgence chirurgicale ; vaccin conjugué.',
    definition:
      'Infection systémique à *Salmonella* Typhi ou Paratyphi chez l’enfant, transmise par l’eau et les aliments contaminés, avec des résistances croissantes (multirésistance, fluoroquinolones).',
    physiopathologie:
      '## Mécanismes\n- Ingestion, invasion des plaques de Peyer, bactériémie\n- Atteinte digestive (ulcérations, perforation iléale), hépatique, neurologique',
    diagnostic:
      '## Clinique\n- **Fièvre progressive et prolongée** (> 3 jours), céphalées, malaise\n- Douleurs abdominales, diarrhée ou constipation, hépatosplénomégalie\n- Langue saburrale, pouls dissocié (moins net chez l’enfant)\n- Formes graves : troubles de conscience (tuphos), perforation, hémorragie digestive\n\n## Confirmation\n- **Hémocultures** (référence)\n- Le test de Widal n’est pas fiable',
    examens: [
      ['confirmation', 'hemocultures', 'S. Typhi et antibiogramme.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme (diagnostic différentiel ou associé).'],
      ['premiere_intention', 'nfs', 'Leucopénie, anémie.'],
      ['etiologique', 'coproculture', 'Si disponible.'],
      ['gravite', 'abdomen-sans-preparation', 'Pneumopéritoine (perforation).'],
      ['gravite', 'echographie-abdominale', 'Épanchement, perforation.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['paludisme-simple-enfant', 'TDR positif.'],
      ['fievre-enfant-pcime', 'Autre cause de fièvre.'],
      ['tuberculose-enfant', 'Évolution plus lente, contage.'],
      ['appendicite-aigue', 'Douleur localisée de la fosse iliaque droite.'],
    ],
    etiologies:
      '## Facteurs\n- Eau non potable, aliments de rue, absence de lavage des mains\n- Épidémies (Kinshasa, Kikwit)',
    principes: [
      [
        'Forme non compliquée',
        'Traitement oral.',
        '- **Azithromycine** 20 mg/kg/j (maximum 1 g) 7 jours\n- Ou **céfixime** 15–20 mg/kg/j 10–14 jours\n- Ciprofloxacine si souche sensible',
      ],
      [
        'Forme grave',
        'Hospitaliser.',
        '- **Ceftriaxone** 80–100 mg/kg/j IV 10 à 14 jours (méropénem si souche XDR)\n- Troubles de conscience ou choc : dexaméthasone selon les protocoles\n- Réhydratation, alimentation, paracétamol',
      ],
      ['Perforation', 'Urgence chirurgicale.', '- Laparotomie, métronidazole + ceftriaxone, réanimation'],
      [
        'Prévention',
        'Couper la transmission.',
        '- Eau potable, hygiène des mains et des aliments\n- **Vaccin typhoïdique conjugué** dès 6 mois selon le programme',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', 'Forme non compliquée'],
      ['cefixime', 'alternative', 'Forme non compliquée'],
      ['ceftriaxone', 'premiere', 'Forme grave'],
      ['ciprofloxacine', 'alternative', 'Souche sensible'],
      ['metronidazole', 'adjuvant', 'Perforation'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
      ['vaccin-typhoidique-conjugue-vi-tt', 'premiere', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Perforation intestinale',
        fiche: 'peritonite-aigue',
        description: '2e–3e semaine.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, défense, choc',
        paraclinique: '- ASP',
      },
      {
        nom: 'Hémorragie digestive',
        description: 'Ulcérations iléales.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Rectorragies, méléna',
        paraclinique: '- Hb',
      },
      {
        nom: 'Encéphalopathie typhique',
        description: 'Formes graves.',
        traitement: '- Ceftriaxone, soins de support',
        clinique: '- Confusion, coma',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Apyrexie en 3 à 5 jours sous traitement adapté ; mortalité élevée en cas de perforation',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Vomissements', 'frequent'],
      ['Anorexie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- TDR, azithromycine ou céfixime, conseils d’hygiène', '- Forme grave, douleur abdominale aiguë'],
      hgr: ['- Hémocultures, ceftriaxone IV, chirurgie de la perforation', ''],
      tert: ['- Réanimation, chirurgie pédiatrique', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Enfant typhique avec douleur abdominale brutale, défense ou ventre de bois',
    },
    formes: [
      {
        nom: 'Typhoïde non compliquée',
        type: 'commune',
        description: 'Fièvre prolongée.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Céphalées, douleurs abdominales',
        generaux: '- Fièvre en plateau',
        physiques: '- Hépatosplénomégalie, langue saburrale',
        paraclinique: '- Hémocultures positives',
        etiologies: '- S. Typhi',
        syndromes: ['syndrome-infectieux'],
        examens: [['hemocultures', 'Confirmation']],
      },
      {
        nom: 'Typhoïde perforée',
        type: 'gravite',
        description: 'Péritonite.',
        terrain: '- Traitement tardif',
        fonctionnels: '- Douleur abdominale aiguë',
        generaux: '- Choc',
        physiques: '- Défense, contracture',
        paraclinique: '- Pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Choléra enfant
  {
    ...INFPED,
    slug: 'cholera-enfant',
    nom: 'Choléra de l’enfant',
    resume:
      'Diarrhée aqueuse profuse « eau de riz » avec vomissements, déshydratation rapide en contexte épidémique : plan A, B ou C de réhydratation (Ringer lactate 100 mL/kg si grave), azithromycine dose unique, zinc, prévention.',
    definition:
      'Infection intestinale toxinique due à *Vibrio cholerae* O1/O139, endémo-épidémique en RDC (Est, Grands Lacs, Kinshasa), responsable de déshydratations sévères mortelles en quelques heures.',
    physiopathologie:
      '## Mécanismes\n- Toxine cholérique : sécrétion massive d’eau et d’électrolytes par l’intestin grêle\n- Déshydratation extracellulaire, acidose, hypokaliémie, hypoglycémie chez l’enfant',
    diagnostic:
      '## Clinique\n- Diarrhée aqueuse profuse, « eau de riz », vomissements\n- Évaluation de la **déshydratation** (OMS) : état général, yeux enfoncés, soif, pli cutané\n- Déshydratation sévère : léthargie, ne peut pas boire, pli cutané très lent, pouls faible\n\n## Confirmation\n- TDR choléra (dépistage), coproculture (confirmation des premiers cas)',
    examens: [
      ['confirmation', 'tdr-cholera', 'Dépistage épidémique.'],
      ['confirmation', 'coproculture', 'Confirmation et antibiogramme.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'ionogramme', 'Hypokaliémie.'],
    ],
    scores: ['deshydratation-oms', 'besoins-hydriques'],
    differentiels: [
      ['diarrhee-aigue-enfant', 'Hors contexte épidémique, diarrhée moins profuse.'],
      ['shigellose', 'Diarrhée sanglante.'],
      ['paludisme-grave-enfant', 'Vomissements et fièvre, TDR positif.'],
    ],
    etiologies:
      '## Facteurs\n- Eau non traitée, défaut d’assainissement\n- Rassemblements, camps de déplacés, saison des pluies\n- Malnutrition (formes graves)',
    principes: [
      [
        'Réhydratation selon le plan OMS',
        'Restaurer la volémie.',
        '- **Plan A** (pas de déshydratation) : SRO après chaque selle\n- **Plan B** (déshydratation modérée) : SRO 75 mL/kg en 4 h\n- **Plan C** (sévère) : **Ringer lactate** 100 mL/kg IV : < 12 mois 30 mL/kg en 1 h puis 70 mL/kg en 5 h ; ≥ 12 mois 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30, puis SRO dès que possible\n- Enfant malnutri sévère : protocole spécifique (ReSoMal, prudence IV)',
      ],
      [
        'Antibiotique et zinc',
        'Réduire la durée.',
        '- **Azithromycine** 20 mg/kg dose unique (déshydratation modérée ou sévère)\n- Ou **doxycycline** selon la sensibilité\n- **Zinc** 10–20 mg/j 10 jours',
      ],
      [
        'Prévention',
        'Contrôler l’épidémie.',
        '- Chloration de l’eau, lavage des mains, latrines, hygiène alimentaire\n- Vaccin anticholérique oral en riposte, notification',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Plan C'],
      ['sro', 'premiere', 'Plans A et B'],
      ['azithromycine', 'premiere', 'Dose unique'],
      ['doxycycline', 'alternative', 'Selon la sensibilité'],
      ['zinc', 'premiere', '10 jours'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique',
        description: 'Pertes massives.',
        traitement: '- Ringer lactate rapide',
        clinique: '- Pouls imperceptible, léthargie',
        paraclinique: '',
      },
      {
        nom: 'Hypoglycémie et hypokaliémie',
        fiche: 'dyskaliemies',
        description: 'Enfant.',
        traitement: '- Glucose, SRO',
        clinique: '- Convulsions, faiblesse',
        paraclinique: '- Glycémie, kaliémie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Réhydratation tardive.',
        traitement: '- Réhydratation',
        clinique: '- Anurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité < 1 % avec une réhydratation correcte ; jusqu’à 50 % sans traitement',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Contractures musculaires', 'occasionnel'],
    ],
    sources: [
      'Directives de prise en charge du choléra et des maladies diarrhéiques',
      'Cholera Outbreak Response: Field Manual',
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
    ],
    niveaux: {
      cs: ['- Plans A et B, SRO, zinc, azithromycine, notification', '- Déshydratation sévère'],
      hgr: ['- Plan C, centre de traitement du choléra', ''],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {
      'deshydratation-severe-enfant':
        'Enfant avec diarrhée aqueuse, léthargique ou incapable de boire, pli cutané très lent',
    },
    formes: [
      {
        nom: 'Choléra avec déshydratation modérée',
        type: 'commune',
        description: 'Plan B.',
        terrain: '- Contexte épidémique',
        fonctionnels: '- Diarrhée aqueuse, vomissements, soif',
        generaux: '- Agitation',
        physiques: '- Yeux enfoncés, pli cutané lent',
        paraclinique: '- TDR positif',
        etiologies: '- V. cholerae',
        syndromes: ['syndrome-choleriforme', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [['tdr-cholera', 'Dépistage']],
      },
      {
        nom: 'Choléra avec déshydratation sévère',
        type: 'gravite',
        description: 'Plan C.',
        terrain: '- Retard de prise en charge',
        fonctionnels: '- Ne peut pas boire',
        generaux: '- Léthargie, choc',
        physiques: '- Pli très lent, pouls faible',
        paraclinique: '- Hypoglycémie',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Sepsis enfant
  {
    ...INFPED,
    slug: 'sepsis-enfant',
    nom: 'Sepsis de l’enfant',
    resume:
      'Infection avec défaillance d’organe chez l’enfant : léthargie, extrémités froides, temps de recoloration > 3 s, polypnée ; antibiotiques dans l’heure (ceftriaxone ou ampicilline + gentamicine), remplissage prudent, glucose, oxygène.',
    definition:
      'Dysfonction d’organes menaçant la vie, due à une réponse dérégulée de l’hôte à une infection, chez l’enfant de plus de 28 jours (critères de Phoenix 2024) ; choc septique : sepsis avec dysfonction cardiovasculaire.',
    physiopathologie:
      '## Mécanismes\n- Réponse inflammatoire, vasoplégie, fuite capillaire, dysfonction myocardique\n- Hypoperfusion : acidose lactique, défaillances (cerveau, rein, poumon, coagulation)\n- Chez l’enfant : choc « froid » fréquent (vasoconstriction)',
    diagnostic:
      '## Signes de gravité (ETAT/PCIME)\n- **Léthargie** ou inconscience, convulsions\n- **Extrémités froides**, temps de recoloration capillaire > 3 s, pouls faible et rapide\n- Détresse respiratoire, SpO2 basse\n- Purpura, oligurie\n- Fièvre ou hypothermie\n\n## Recherche du foyer\n- Pneumonie, méningite, infection digestive (salmonellose), cutanée, urinaire, ostéoarticulaire, paludisme associé',
    examens: [
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme grave à éliminer ou associé.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Leucocytes, plaquettes, Hb.'],
      ['gravite', 'lactates', 'Hypoperfusion.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['etiologique', 'lcr', 'Méningite.'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire.'],
      ['gravite', 'creatinine', 'Atteinte rénale.'],
    ],
    scores: ['qsofa', 'dose-ponderale'],
    differentiels: [
      ['paludisme-grave-enfant', 'TDR positif (peut coexister avec une bactériémie).'],
      ['Choc hypovolémique', 'Diarrhée, vomissements, déshydratation.'],
      ['Choc cardiogénique', 'Hépatomégalie, crépitants, souffle (myocardite).'],
      ['malnutrition-aigue-severe', 'Signes de choc atypiques : remplissage prudent.'],
    ],
    etiologies:
      '## Germes\n- Pneumocoque, *S. aureus*, *Salmonella* non typhiques (VIH, paludisme, drépanocytose), *E. coli*, *Klebsiella*, méningocoque\n\n## Terrain\n- Malnutrition, VIH, drépanocytose, absence de vaccination',
    principes: [
      [
        'Antibiotiques dans l’heure',
        'Réduire la mortalité.',
        '- **Ceftriaxone** 80–100 mg/kg/j ou **ampicilline** + **gentamicine**\n- Infection cutanée ou ostéoarticulaire : ajouter **cloxacilline**\n- Adapter aux hémocultures',
      ],
      [
        'Remplissage prudent',
        'Restaurer la perfusion sans surcharge.',
        '- Choc (extrémités froides, TRC > 3 s, pouls faible) **avec hypotension** : 10–20 mL/kg de Ringer lactate ou NaCl 0,9 % en 30 à 60 min, réévaluer, maximum 40 mL/kg\n- Sans hypotension, en milieu sans réanimation : **pas de bolus** (essai FEAST), perfusion d’entretien\n- Malnutrition sévère : protocole spécifique\n- Choc persistant : adrénaline ou noradrénaline',
      ],
      [
        'Mesures associées',
        'Corriger les défaillances.',
        '- **Oxygène** si SpO2 < 94 % en cas de choc\n- **Glucose 10 %** 5 mL/kg si hypoglycémie\n- Antipaludique si TDR positif, traitement des convulsions\n- Transfusion si anémie sévère',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Antibiotique probabiliste'],
      ['ampicilline', 'alternative', 'Avec gentamicine'],
      ['gentamicine', 'alternative', 'Avec ampicilline'],
      ['cloxacilline', 'adjuvant', 'Staphylocoque'],
      ['ringer-lactate', 'premiere', 'Remplissage si choc hypotensif'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Remplissage'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['oxygene', 'premiere', 'Hypoxémie, choc'],
      ['adrenaline-epinephrine', 'deuxieme', 'Choc réfractaire'],
    ],
    complications: [
      {
        nom: 'Défaillance multiviscérale',
        description: 'Choc prolongé.',
        traitement: '- Réanimation',
        clinique: '- Oligurie, coma, saignements',
        paraclinique: '- Lactates, créatinine',
      },
      {
        nom: 'Surcharge volémique',
        description: 'Remplissage excessif.',
        traitement: '- Arrêt du remplissage, furosémide',
        clinique: '- Hépatomégalie, crépitants',
        paraclinique: '- SpO2',
      },
      {
        nom: 'CIVD et purpura',
        description: 'Méningocoque, choc.',
        traitement: '- Plasma, plaquettes',
        clinique: '- Purpura, saignements',
        paraclinique: '- Plaquettes',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 30 % en Afrique subsaharienne, plus élevée en cas de malnutrition ou de VIH',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Hypotension', 'frequent'],
      ['Hypothermie', 'occasionnel'],
      ['Vomissements', 'frequent'],
    ],
    sources: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Triage ETAT, première dose de ceftriaxone, glucose, oxygène, transfert',
        '- Tout signe de choc',
      ],
      hgr: ['- Antibiotiques IV, remplissage prudent, surveillance', '- Choc réfractaire'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: { 'choc-septique': 'Enfant fébrile léthargique, extrémités froides, TRC > 3 s ou pouls faible' },
    formes: [
      {
        nom: 'Sepsis de l’enfant',
        type: 'commune',
        description: 'Infection avec dysfonction d’organe.',
        terrain: '- Enfant malnutri, VIH, drépanocytaire',
        fonctionnels: '- Ne boit plus',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Léthargie, polypnée',
        paraclinique: '- Hémocultures positives',
        etiologies: '- Pneumocoque, Salmonella',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique'],
        examens: [['hemocultures', 'Germe']],
      },
      {
        nom: 'Choc septique',
        type: 'gravite',
        description: 'Dysfonction circulatoire.',
        terrain: '- Retard de prise en charge',
        fonctionnels: '',
        generaux: '- Hypotension',
        physiques: '- Extrémités froides, TRC > 3 s, pouls filant',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
