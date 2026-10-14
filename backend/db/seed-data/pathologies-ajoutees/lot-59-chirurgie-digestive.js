'use strict';

/**
 * Lot 59 (phase 2, chirurgie digestive) — fissure et fistule anales, occlusion sur bride, hernie
 * ombilicale et de la ligne blanche, éventration, cancer colorectal (traitement chirurgical),
 * sténose du pylore de l'adulte. Rédigé par IA (Sabiston, WSES, ESMO) : à valider.
 */

const DIG = { departement: 'chirurgie', specialite: 'Chirurgie digestive' };

module.exports = [
  // =================================================================== Fissure et fistule anales
  {
    ...DIG,
    slug: 'fissure-fistule-anales',
    nom: 'Fissure et fistule anales',
    resume:
      'Fissure anale : ulcération du canal anal (souvent postérieure), après constipation ou accouchement, avec douleur intense à la défécation durant plusieurs heures et petites rectorragies ; traitement : fibres, laxatifs, bains de siège, topiques (dérivés nitrés, diltiazem, anesthésiques), sphinctérotomie si chronique. Fistule anale : trajet entre le canal anal et la peau, séquelle d’un abcès de la marge, avec écoulement purulent chronique ; évoquer tuberculose, maladie de Crohn, VIH ; traitement chirurgical (fistulotomie ou séton).',
    definition:
      'Fissure : ulcération longitudinale de l’anoderme du canal anal ; fistule : trajet anormal reliant une glande anale (orifice interne) à la peau périanale (orifice externe).',
    physiopathologie:
      '## Fissure\n- Traumatisme du passage de selles dures, hypertonie du sphincter interne → ischémie postérieure → non-cicatrisation\n- Facteurs : **constipation**, **post-partum**, diarrhée\n- Fissure atypique (latérale, multiple, indolore) : **Crohn**, **tuberculose**, syphilis, VIH, cancer\n\n## Fistule\n- Infection d’une glande anale → **abcès** → fistulisation\n- Classification selon le trajet par rapport au sphincter (inter-, trans-, supra-sphinctérienne)',
    diagnostic:
      '## Fissure\n- **Douleur anale** intense en coup de poignard à la défécation, persistant des heures, constipation réflexe\n- Petites **rectorragies** sur le papier\n- Inspection en déplissant la marge : ulcération postérieure, marisque sentinelle (forme chronique) ; toucher rectal douloureux, à éviter\n\n## Fistule\n- **Écoulement purulent** chronique périanal, orifice externe, antécédent d’abcès\n- Induration du trajet, recherche de l’orifice interne\n\n## Examens\n- **Anuscopie** (sous anesthésie si trop douloureux)\n- Fistule complexe : échographie endo-anale ou IRM pelvienne\n- TDR VIH, syphilis ; biopsie si atypique (tuberculose, cancer)',
    examens: [
      ['confirmation', 'anuscopie', 'Fissure, orifice fistuleux.'],
      ['etiologique', 'tdr-vih', 'Lésion atypique.'],
      ['etiologique', 'serologie-syphilis', 'Lésion atypique.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Tuberculose, Crohn, cancer.'],
      ['deuxieme_intention', 'coloscopie', 'Crohn, signes associés.'],
    ],
    scores: [],
    differentiels: [
      ['hemorroides', 'Rectorragies sans douleur intense.'],
      ['abces-marge-anale', 'Tuméfaction inflammatoire aiguë.'],
      ['condylomes-genitaux', 'Végétations anales.'],
      ['cancer-colorectal', 'Lésion indurée, saignements chroniques.'],
      ['ulcerations-genitales', 'Ulcère anal infectieux (herpès, syphilis).'],
    ],
    etiologies: '## Facteurs\n- Constipation, accouchement, abcès de la marge, Crohn, tuberculose, VIH',
    principes: [
      [
        'Fissure aiguë',
        'Traitement médical.',
        '- **Fibres**, **eau**, **laxatifs** (macrogol), bains de siège tièdes\n- **Antalgiques**, topiques anesthésiants (lidocaïne)\n- **Relâchement du sphincter** : **trinitrine** pommade 0,4 % ou **diltiazem** 2 % pommade 2 fois par jour 6–8 semaines (ou nifédipine topique)\n- Guérison dans la majorité en 6–8 semaines',
      ],
      [
        'Fissure chronique',
        'Chirurgie si échec.',
        '- **Sphinctérotomie latérale interne** (risque d’incontinence à expliquer) ou fissurectomie',
      ],
      [
        'Fistule',
        'Chirurgie.',
        '- Fistule basse : **fistulotomie** (mise à plat)\n- Fistule haute ou complexe : **séton** de drainage puis chirurgie en plusieurs temps (préserver la continence)\n- Antibiotiques si cellulite ; traitement de la tuberculose ou du VIH',
      ],
    ],
    molecules: [
      ['macrogol', 'premiere', 'Selles molles'],
      ['trinitrine', 'alternative', 'Pommade (relâchement sphinctérien)'],
      ['nifedipine', 'alternative', 'Topique (relâchement sphinctérien)'],
      ['lidocaine', 'premiere', 'Topique anesthésiant'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['metronidazole', 'adjuvant', 'Infection, Crohn périanal'],
    ],
    complications: [
      {
        nom: 'Abcès de la marge anale',
        fiche: 'abces-marge-anale',
        description: 'Fistule non drainée.',
        traitement: '- Incision',
        clinique: '- Tuméfaction douloureuse, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Incontinence anale',
        description: 'Après chirurgie sphinctérienne.',
        traitement: '- Rééducation',
        clinique: '- Fuites de gaz ou de selles',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Fissure ou fistule.',
        traitement: '- Reprise',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Fissure aiguë : guérison sous traitement médical ; fistule : guérison après chirurgie adaptée',
    urgences: [],
    symptomes: [
      ['Douleur anale', 'tres_frequent'],
      ['Rectorragies', 'frequent'],
      ['Constipation', 'frequent'],
      ['Écoulement purulent d’une plaie', 'occasionnel'],
      ['Prurit anal', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'ACG — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Laxatifs, bains de siège, topiques', '- Fissure chronique, fistule'],
      hgr: ['- Anuscopie, sphinctérotomie, fistulotomie', ''],
      tert: ['- Fistules complexes', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fissure anale aiguë',
        type: 'commune',
        description: 'Post-constipation.',
        terrain: '- Adulte jeune, post-partum',
        fonctionnels: '- Douleur à la défécation',
        generaux: '',
        physiques: '- Ulcération postérieure',
        paraclinique: '',
        etiologies: '- Constipation',
        syndromes: [],
      },
      {
        nom: 'Fistule anale',
        type: 'evolutive',
        description: 'Après abcès.',
        terrain: '',
        fonctionnels: '- Écoulement chronique',
        generaux: '',
        physiques: '- Orifice périanal',
        paraclinique: '- Trajet à l’IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Lésion anale atypique',
        type: 'etiologique',
        description: 'Crohn, tuberculose, VIH.',
        terrain: '- Immunodépression',
        fonctionnels: '',
        generaux: '- Amaigrissement',
        physiques: '- Lésions multiples, latérales',
        paraclinique: '- Biopsie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Occlusion sur bride
  {
    ...DIG,
    slug: 'occlusion-sur-bride',
    nom: 'Occlusion sur bride',
    resume:
      'Première cause d’occlusion du grêle chez l’adulte opéré (césarienne, laparotomie, péritonite, appendicectomie) : douleurs abdominales en crises, vomissements précoces, arrêt des matières et des gaz, distension, cicatrice abdominale ; radiographie (niveaux hydro-aériques), échographie, scanner ; signes de strangulation (douleur continue, fièvre, défense, tachycardie, lactates élevés) : chirurgie urgente ; sinon traitement médical (aspiration gastrique, réhydratation, correction ionique, surveillance) 48–72 h, opacification aux hydrosolubles ; laparotomie si échec.',
    definition:
      'Occlusion intestinale mécanique (surtout du grêle) due à une adhérence fibreuse (bride) postopératoire ou post-inflammatoire, avec ou sans strangulation.',
    physiopathologie:
      '## Mécanismes\n- **Adhérences** après chirurgie abdominale ou pelvienne (césariennes multiples, péritonite, typhoïde perforée), infection génitale haute, tuberculose\n- **Obstruction simple** : distension, troisième secteur, déshydratation, troubles ioniques\n- **Strangulation** : compression du mésentère → ischémie → nécrose, perforation, péritonite, choc',
    diagnostic:
      '## Clinique\n- **Douleurs** en crises, **vomissements** (précoces si occlusion haute), **arrêt des matières et des gaz**, **distension** abdominale\n- **Cicatrice** abdominale, orifices herniaires libres (éliminer une hernie étranglée)\n- **Signes de strangulation** : douleur continue, fièvre, tachycardie, **défense**, silence auscultatoire\n- Déshydratation, oligurie\n\n## Examens\n- **Abdomen sans préparation** (niveaux hydro-aériques du grêle), **échographie**\n- **Scanner** (niveau de l’obstacle, signes d’ischémie) si disponible\n- **Ionogramme**, créatinine, NFS, CRP, **lactates**, groupage',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Niveaux hydro-aériques.'],
      ['premiere_intention', 'echographie-abdominale', 'Anses dilatées.'],
      ['confirmation', 'scanner-abdominal', 'Bride, ischémie.'],
      ['premiere_intention', 'ionogramme', 'Troubles ioniques.'],
      ['gravite', 'lactates', 'Ischémie.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['deuxieme_intention', 'opacification-digestive', 'Test aux hydrosolubles.'],
    ],
    scores: [],
    differentiels: [
      ['hernie-etranglee', 'Orifice herniaire douloureux.'],
      ['volvulus-du-sigmoide', 'Distension majeure, occlusion basse.'],
      ['occlusion-intestinale-aigue', 'Autres causes d’occlusion.'],
      ['cancer-colorectal', 'Occlusion colique progressive.'],
      ['Iléus paralytique', 'Contexte postopératoire, péritonite, troubles ioniques.'],
    ],
    etiologies:
      '## Causes\n- Adhérences postopératoires (césarienne, laparotomie), post-infectieuses, tuberculose',
    principes: [
      [
        'Traitement initial',
        'Pour tous.',
        '- **À jeun**, **sonde nasogastrique** en aspiration, **réhydratation IV** (Ringer lactate, NaCl 0,9 %), correction du **potassium**\n- Sonde urinaire, surveillance (pouls, température, abdomen, diurèse)\n- Antalgiques (paracétamol, morphine)',
      ],
      [
        'Chirurgie urgente',
        'Si strangulation.',
        '- Signes de strangulation, péritonite, choc : **laparotomie** (section de la bride, résection si nécrose)\n- Antibioprophylaxie (céfazoline ou ceftriaxone + métronidazole)',
      ],
      [
        'Traitement non opératoire',
        'Occlusion simple.',
        '- Surveillance 48–72 h, **opacification aux hydrosolubles** (diagnostique et thérapeutique)\n- Absence de reprise du transit ou aggravation : laparotomie',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réhydratation'],
      ['chlorure-de-sodium-0-9', 'alternative', 'Réhydratation'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
      ['morphine', 'alternative', 'Douleur'],
      ['ceftriaxone', 'adjuvant', 'Chirurgie, strangulation'],
      ['metronidazole', 'adjuvant', 'Chirurgie, strangulation'],
    ],
    complications: [
      {
        nom: 'Nécrose et perforation',
        fiche: 'peritonite-aigue',
        description: 'Strangulation.',
        traitement: '- Résection, lavage',
        clinique: '- Défense, choc',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Choc hypovolémique',
        fiche: 'reanimation-du-choc',
        description: 'Troisième secteur, vomissements.',
        traitement: '- Remplissage',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Vomissements.',
        traitement: '- Antibiotiques',
        clinique: '- Toux, fièvre',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Résolution sans chirurgie chez 70 % des occlusions simples ; mortalité élevée si strangulation opérée tardivement ; récidives possibles',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Distension abdominale', 'tres_frequent'],
      ['Constipation', 'frequent'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'WSES — recommandations de pratique clinique'],
    niveaux: {
      cs: ['- Sonde gastrique, perfusion, référence', '- Tout syndrome occlusif'],
      hgr: ['- Traitement médical, laparotomie', ''],
      tert: ['', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical':
        'Patient opéré de l’abdomen avec vomissements, arrêt du transit et douleur continue',
    },
    formes: [
      {
        nom: 'Occlusion simple sur bride',
        type: 'commune',
        description: 'Traitement médical possible.',
        terrain: '- Antécédent de laparotomie, césarienne',
        fonctionnels: '- Douleurs en crises, vomissements',
        generaux: '',
        physiques: '- Distension, cicatrice',
        paraclinique: '- Niveaux du grêle',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Occlusion avec strangulation',
        type: 'gravite',
        description: 'Chirurgie urgente.',
        terrain: '',
        fonctionnels: '- Douleur continue',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Défense',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale'],
      },
    ],
  },

  // =================================================================== Hernie ombilicale
  {
    ...DIG,
    slug: 'hernie-ombilicale-ligne-blanche',
    nom: 'Hernie ombilicale et de la ligne blanche',
    resume:
      'Hernie ombilicale très fréquente chez le nourrisson africain (fermeture spontanée dans la majorité avant 4–5 ans, pas de pièce ni de bandage) et chez l’adulte (multipares, obésité, ascite) ; hernie de la ligne blanche (épigastrique) ; risque d’étranglement chez l’adulte (douleur, irréductibilité, vomissements) ; chirurgie de l’adulte symptomatique (raphie ou plaque), de l’enfant après 4–5 ans ou si collet large, étranglement ou croissance ; correction de l’ascite chez le cirrhotique.',
    definition:
      'Issue de viscères ou de graisse à travers l’anneau ombilical (hernie ombilicale) ou un orifice de la ligne blanche entre l’ombilic et l’appendice xiphoïde (hernie épigastrique).',
    physiopathologie:
      '## Enfant\n- Fermeture incomplète de l’anneau ombilical ; très fréquente (prématurés, enfants d’ascendance africaine), fermeture spontanée habituelle\n\n## Adulte\n- Augmentation de la pression abdominale : **grossesses**, **obésité**, **ascite** (cirrhose), toux chronique, efforts\n- Collet étroit → **étranglement** (graisse ou intestin)',
    diagnostic:
      '## Clinique\n- **Tuméfaction** ombilicale ou épigastrique, impulsive à la toux, réductible\n- Gêne, douleurs à l’effort\n- **Étranglement** : douleur intense, tuméfaction tendue, irréductible, vomissements, arrêt du transit\n- Peau amincie, ulcérée (ascite : risque de rupture)\n\n## Examens\n- Diagnostic clinique ; **échographie** pariétale si doute (obésité)\n- Bilan préopératoire ; recherche d’une cirrhose si ascite',
    examens: [
      ['deuxieme_intention', 'echographie-parties-molles', 'Collet, contenu.'],
      ['gravite', 'abdomen-sans-preparation', 'Occlusion (étranglement).'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
    ],
    scores: [],
    differentiels: [
      ['hernie-etranglee', 'Complication.'],
      ['eventration', 'Hernie sur cicatrice.'],
      ['Diastasis des grands droits', 'Écartement des muscles sans orifice.'],
      ['Lipome', 'Masse non impulsive.'],
      ['Granulome ombilical', 'Nouveau-né, bourgeon rouge.'],
    ],
    etiologies: '## Facteurs\n- Nourrisson ; adulte : grossesses, obésité, ascite, toux chronique',
    principes: [
      [
        'Enfant',
        'Attendre.',
        '- **Abstention** jusqu’à 4–5 ans (fermeture spontanée), **pas de pièce de monnaie ni de bandage**\n- Chirurgie si persistance après 4–5 ans, collet > 1,5–2 cm, croissance ou étranglement (rare)',
      ],
      [
        'Adulte',
        'Chirurgie.',
        '- **Herniorraphie** (petite hernie) ou **plaque** (collet > 1–2 cm, récidive), programmée si symptomatique\n- Contrôle de l’**ascite** avant chirurgie chez le cirrhotique ; perte de poids',
      ],
      ['Étranglement', 'Urgence.', '- Chirurgie urgente, résection intestinale si nécrose'],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie (plaque)'],
      ['lidocaine', 'adjuvant', 'Anesthésie locale'],
    ],
    complications: [
      {
        nom: 'Étranglement',
        fiche: 'hernie-etranglee',
        description: 'Collet étroit.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur, irréductibilité, vomissements',
        paraclinique: '',
      },
      {
        nom: 'Rupture sur ascite',
        fiche: 'ascite-et-decompensation-cirrhose',
        description: 'Cirrhose.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Écoulement d’ascite',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Raphie simple, obésité.',
        traitement: '- Plaque',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Enfant : fermeture spontanée fréquente ; adulte : bons résultats de la chirurgie, récidives possibles',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: ['- Rassurer (enfant), orientation de l’adulte', '- Hernie douloureuse irréductible'],
      hgr: ['- Herniorraphie, plaque, chirurgie urgente', ''],
      tert: ['', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Hernie ombilicale douloureuse, irréductible, avec vomissements' },
    formes: [
      {
        nom: 'Hernie ombilicale du nourrisson',
        type: 'terrain',
        description: 'Fermeture spontanée.',
        terrain: '- Nourrisson',
        fonctionnels: '',
        generaux: '',
        physiques: '- Tuméfaction ombilicale réductible',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hernie ombilicale de l’adulte',
        type: 'commune',
        description: 'Chirurgie.',
        terrain: '- Multipare, obèse, cirrhotique',
        fonctionnels: '- Gêne',
        generaux: '',
        physiques: '- Tuméfaction impulsive',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hernie étranglée',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '',
        physiques: '- Tuméfaction irréductible',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },

  // =================================================================== Éventration
  {
    ...DIG,
    slug: 'eventration',
    nom: 'Éventration',
    resume:
      'Hernie à travers une cicatrice de laparotomie (10–20 % des laparotomies, plus après césarienne médiane, infection de paroi, obésité, diabète, malnutrition, toux, fermeture défectueuse) : tuméfaction cicatricielle impulsive, gêne, douleurs, troubles du transit ; risque d’étranglement (collet étroit) et de troubles trophiques cutanés ; prévention par une fermeture pariétale soigneuse et le traitement des infections de paroi ; cure chirurgicale (suture ou plaque) après préparation (perte de poids, arrêt du tabac, contrôle du diabète) ; urgence si étranglement ou éviscération.',
    definition:
      'Issue de viscères sous la peau à travers une déhiscence de la paroi musculo-aponévrotique au niveau d’une cicatrice opératoire ou traumatique.',
    physiopathologie:
      '## Facteurs\n- **Infection du site opératoire**, hématome\n- **Obésité**, **diabète**, **malnutrition**, anémie, corticoïdes, tabac, **toux chronique**, constipation\n- Incision médiane, fermeture défectueuse, reprise précoce d’efforts\n\n## Évolution\n- Augmentation progressive, **perte de droit de domicile** (grandes éventrations), troubles respiratoires\n- **Étranglement** (petits collets), ulcérations cutanées',
    diagnostic:
      '## Clinique\n- **Tuméfaction** de la cicatrice, impulsive à la toux, réductible ou non\n- Gêne, douleurs, constipation\n- **Étranglement** : douleur, irréductibilité, vomissements, arrêt du transit\n- Peau fine, ulcérée\n\n## Examens\n- **Échographie** pariétale ; **scanner** pour les grandes éventrations (taille du défect, volume du sac)\n- Bilan préopératoire, glycémie, état nutritionnel',
    examens: [
      ['premiere_intention', 'echographie-parties-molles', 'Défect pariétal.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Grandes éventrations.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
    ],
    scores: [],
    differentiels: [
      ['hernie-ombilicale-ligne-blanche', 'Hernie sans cicatrice.'],
      ['infection-du-site-operatoire', 'Collection inflammatoire.'],
      ['Hématome de paroi', 'Masse non impulsive.'],
      ['Récidive tumorale pariétale', 'Masse dure après chirurgie d’un cancer.'],
    ],
    etiologies:
      '## Facteurs\n- Infection de paroi, obésité, diabète, malnutrition, toux, technique de fermeture',
    principes: [
      [
        'Préparation',
        'Optimiser avant d’opérer.',
        '- **Perte de poids**, arrêt du tabac, contrôle du **diabète**, renutrition, correction de l’anémie, traitement de la toux et de la constipation',
      ],
      [
        'Chirurgie',
        'Réparer la paroi.',
        '- Petit défect : **suture**\n- Défect > 2–3 cm ou récidive : **plaque** (prothèse), technique adaptée\n- Grandes éventrations : centre spécialisé (préparation, techniques de séparation des composants)',
      ],
      [
        'Prévention et urgence',
        'Fermer correctement.',
        '- Fermeture pariétale continue au fil lent, prévention des infections\n- **Étranglement** ou **éviscération** : chirurgie urgente',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
      ['macrogol', 'adjuvant', 'Constipation'],
    ],
    complications: [
      {
        nom: 'Étranglement',
        fiche: 'hernie-etranglee',
        description: 'Collet étroit.',
        traitement: '- Chirurgie urgente',
        clinique: '- Douleur, irréductibilité',
        paraclinique: '',
      },
      {
        nom: 'Infection de plaque',
        fiche: 'infection-du-site-operatoire',
        description: 'Après réparation.',
        traitement: '- Antibiotiques, ablation',
        clinique: '- Fistule, pus',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Facteurs persistants.',
        traitement: '- Reprise',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bons résultats avec plaque ; récidives fréquentes si les facteurs de risque persistent',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Constipation', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Préparation (poids, diabète), orientation', '- Éventration douloureuse irréductible'],
      hgr: ['- Cure d’éventration', ''],
      tert: ['- Grandes éventrations', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Éventration douloureuse, irréductible, avec vomissements' },
    formes: [
      {
        nom: 'Éventration simple',
        type: 'commune',
        description: 'Programmée.',
        terrain: '- Antécédent de laparotomie',
        fonctionnels: '- Gêne',
        generaux: '',
        physiques: '- Tuméfaction cicatricielle impulsive',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Éventration étranglée',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Douleur intense, vomissements',
        generaux: '',
        physiques: '- Tuméfaction irréductible',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },

  // =================================================================== Cancer colorectal chirurgie
  {
    ...DIG,
    slug: 'cancer-colorectal-chirurgie',
    nom: 'Cancer colorectal (traitement chirurgical)',
    resume:
      'Prise en charge chirurgicale du cancer du côlon et du rectum, souvent diagnostiqué à un stade avancé ou compliqué en RDC (occlusion, perforation, hémorragie, anémie) : bilan d’extension (scanner thoraco-abdomino-pelvien, ACE, coloscopie complète) ; côlon : colectomie segmentaire avec curage ganglionnaire, chimiothérapie adjuvante (FOLFOX, CAPOX) au stade III ; rectum : radiochimiothérapie préopératoire puis exérèse totale du mésorectum ; urgences : colostomie de décharge ou résection en deux temps ; soins palliatifs.',
    definition:
      'Traitement chirurgical à visée curative ou palliative des adénocarcinomes du côlon et du rectum et de leurs complications.',
    physiopathologie:
      '## Principes oncologiques\n- Exérèse de la tumeur avec **marges saines** et **curage ganglionnaire** (au moins 12 ganglions)\n- Rectum : **exérèse totale du mésorectum** (réduction des récidives locales)\n\n## Formes compliquées\n- **Occlusion** (côlon gauche), **perforation** (péritonite), **hémorragie**, **abcès**\n- Métastases hépatiques et pulmonaires (stade IV)',
    diagnostic:
      '## Bilan préthérapeutique\n- **Coloscopie** complète avec **biopsies** (tumeur, polypes synchrones)\n- **Scanner thoraco-abdomino-pelvien** (extension), **ACE**\n- Rectum : toucher rectal, IRM pelvienne (stade local) si disponible\n- NFS, bilan nutritionnel, fonction rénale, état général\n\n## Urgences\n- Syndrome occlusif, péritonite, hémorragie : radiographie, scanner, réanimation',
    examens: [
      ['confirmation', 'coloscopie', 'Biopsies.'],
      ['confirmation', 'biopsie-histologie', 'Adénocarcinome.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['gravite', 'scanner-thoracique', 'Métastases pulmonaires.'],
      ['premiere_intention', 'ace', 'Marqueur.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Métastases hépatiques.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-colorectal', 'Fiche médicale.'],
      ['volvulus-du-sigmoide', 'Occlusion colique.'],
      ['hemorroides', 'Rectorragies.'],
      ['Amibiase colique (amoebome)', 'Masse colique, sérologie amibienne.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose iléo-cæcale.'],
    ],
    etiologies: '## Facteurs\n- Âge, polypes, antécédents familiaux, alimentation pauvre en fibres, obésité',
    principes: [
      [
        'Chirurgie programmée',
        'Exérèse carcinologique.',
        '- **Côlon** : hémicolectomie droite ou gauche, sigmoïdectomie, avec curage et anastomose\n- **Rectum** : radiochimiothérapie (capécitabine) préopératoire pour les tumeurs avancées, puis **exérèse totale du mésorectum** (conservation sphinctérienne si possible, sinon amputation abdomino-périnéale avec colostomie)\n- Préparation : renutrition, correction de l’anémie, antibioprophylaxie, thromboprophylaxie',
      ],
      [
        'Chirurgie en urgence',
        'Sauver d’abord.',
        '- **Occlusion** : colostomie de décharge ou résection avec stomie (Hartmann), puis rétablissement\n- **Perforation** : résection, lavage, stomie\n- Hémorragie : transfusion, résection',
      ],
      [
        'Traitements complémentaires',
        'Centre d’oncologie.',
        '- **Chimiothérapie adjuvante** (stade III, certains stades II) : **FOLFOX** (5-FU, acide folinique, oxaliplatine) ou **CAPOX** (capécitabine, oxaliplatine) pendant 3–6 mois\n- Stade IV : chimiothérapie, résection des métastases si possible, soins palliatifs\n- Éducation à la stomie, surveillance (ACE, scanner, coloscopie)',
      ],
    ],
    molecules: [
      ['fluorouracile', 'premiere', 'FOLFOX (centre spécialisé)'],
      ['acide-folinique', 'premiere', 'FOLFOX'],
      ['oxaliplatine', 'premiere', 'FOLFOX, CAPOX'],
      ['capecitabine', 'alternative', 'CAPOX, radiochimiothérapie rectale'],
      ['ceftriaxone', 'adjuvant', 'Antibioprophylaxie'],
      ['metronidazole', 'adjuvant', 'Antibioprophylaxie'],
      ['enoxaparine', 'adjuvant', 'Thromboprophylaxie'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Fistule anastomotique',
        fiche: 'fistules-digestives',
        description: 'Lâchage d’anastomose.',
        traitement: '- Drainage, reprise, stomie',
        clinique: '- Fièvre, péritonite',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Péritonite postopératoire',
        fiche: 'peritonite-postoperatoire',
        description: 'Fuite.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Défense, sepsis',
        paraclinique: '',
      },
      {
        nom: 'Complications de stomie',
        description: 'Nécrose, prolapsus, irritation cutanée.',
        traitement: '- Soins, reprise',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 90 % au stade I, ≈ 70 % au stade III avec chimiothérapie, < 15 % au stade IV ; pronostic aggravé par la chirurgie d’urgence',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Rectorragies', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Constipation', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Rectorragies, anémie, troubles du transit après 45 ans : orientation', ''],
      hgr: ['- Chirurgie d’urgence (stomie), colectomie', ''],
      tert: ['- Chirurgie carcinologique, chimiothérapie, radiothérapie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Occlusion ou péritonite chez un patient porteur de cancer colorectal',
    },
    formes: [
      {
        nom: 'Cancer du côlon opérable',
        type: 'commune',
        description: 'Colectomie.',
        terrain: '- Adulte > 50 ans',
        fonctionnels: '- Troubles du transit',
        generaux: '- Anémie',
        physiques: '- Masse abdominale possible',
        paraclinique: '- Coloscopie, scanner',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cancer colique occlusif',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Arrêt du transit',
        generaux: '',
        physiques: '- Distension',
        paraclinique: '- Dilatation colique',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Cancer du rectum',
        type: 'topographique',
        description: 'Radiochimiothérapie puis chirurgie.',
        terrain: '',
        fonctionnels: '- Rectorragies, ténesme',
        generaux: '',
        physiques: '- Tumeur au toucher rectal',
        paraclinique: '- IRM pelvienne',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sténose du pylore adulte
  {
    ...DIG,
    slug: 'stenose-pylore-adulte',
    nom: 'Sténose du pylore de l’adulte',
    resume:
      'Obstacle à la vidange gastrique de l’adulte, d’origine ulcéreuse (sténose cicatricielle d’un ulcère duodénal ou pylorique, fréquente en Afrique par défaut de traitement de l’ulcère et d’éradication d’H. pylori) ou tumorale (cancer de l’antre) : vomissements alimentaires tardifs abondants, clapotage à jeun, amaigrissement, déshydratation avec alcalose hypochlorémique et hypokaliémie ; fibroscopie avec biopsies (éliminer un cancer) ; réhydratation, correction ionique, aspiration, IPP, éradication d’H. pylori, renutrition ; dilatation endoscopique ou chirurgie (gastro-entérostomie, antrectomie).',
    definition:
      'Rétrécissement de la région pyloro-duodénale entraînant une obstruction à l’évacuation de l’estomac chez l’adulte.',
    physiopathologie:
      '## Causes\n- **Ulcéreuse** (cicatrice d’ulcère duodénal ou pylorique) : la plus fréquente en contexte d’ulcère non traité\n- **Tumorale** : **cancer de l’antre**, lymphome, compression (pancréas)\n- Autres : caustiques, tuberculose\n\n## Conséquences\n- Vomissements → perte de HCl et de potassium → **alcalose métabolique hypochlorémique**, **hypokaliémie**, **déshydratation**, insuffisance rénale fonctionnelle\n- **Dénutrition**',
    diagnostic:
      '## Clinique\n- **Vomissements** alimentaires **tardifs**, abondants, d’aliments ingérés la veille, soulageant la douleur\n- Antécédents de douleurs ulcéreuses, satiété précoce, **amaigrissement**\n- **Clapotage à jeun**, ondulations péristaltiques épigastriques, déshydratation\n\n## Examens\n- **Ionogramme** (hypokaliémie, hypochlorémie, alcalose), créatinine, NFS\n- **Fibroscopie** œso-gastro-duodénale après vidange gastrique : siège, aspect, **biopsies** (cancer, H. pylori)\n- Transit baryté ou scanner (cancer, extension)',
    examens: [
      ['confirmation', 'endoscopie-digestive-haute', 'Sténose, biopsies.'],
      ['premiere_intention', 'ionogramme', 'Alcalose, hypokaliémie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale fonctionnelle.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['confirmation', 'biopsie-histologie', 'Éliminer un cancer.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Cancer, extension.'],
      ['gravite', 'gaz-du-sang', 'Alcalose métabolique.'],
    ],
    scores: [],
    differentiels: [
      ['cancer-de-l-estomac', 'Sténose tumorale.'],
      ['ulcere-gastroduodenal', 'Ulcère non compliqué.'],
      ['occlusion-intestinale-aigue', 'Occlusion plus basse.'],
      ['Gastroparésie diabétique', 'Pas d’obstacle à l’endoscopie.'],
    ],
    etiologies: '## Causes\n- Ulcère duodénal ou pylorique, cancer de l’antre, caustiques',
    principes: [
      [
        'Réanimation',
        'Corriger les troubles.',
        '- **Sonde nasogastrique** en aspiration (quelques jours), **réhydratation** au **NaCl 0,9 %** avec **chlorure de potassium**\n- **IPP** IV (oméprazole, ésoméprazole)\n- **Renutrition** (parentérale ou par sonde au-delà de l’obstacle si dénutrition sévère)',
      ],
      [
        'Sténose ulcéreuse',
        'Traitement médical et dilatation.',
        '- **Éradication d’H. pylori** (IPP + amoxicilline + clarithromycine ou métronidazole), arrêt des AINS\n- **Dilatation endoscopique** au ballonnet (répétée si besoin)\n- Échec : **chirurgie** (gastro-entérostomie, antrectomie avec vagotomie)',
      ],
      [
        'Sténose tumorale',
        'Oncologie.',
        '- **Gastrectomie** si résécable ; sinon gastro-entérostomie palliative ou prothèse ; soins palliatifs',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IPP'],
      ['esomeprazole', 'alternative', 'IPP IV'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['chlorure-de-potassium', 'premiere', 'Hypokaliémie'],
      ['amoxicilline', 'premiere', 'Éradication d’H. pylori'],
      ['metronidazole', 'alternative', 'Éradication d’H. pylori'],
    ],
    complications: [
      {
        nom: 'Troubles hydro-électrolytiques graves',
        description: 'Alcalose, hypokaliémie.',
        traitement: '- Correction',
        clinique: '- Faiblesse, troubles du rythme',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Dénutrition',
        fiche: 'malnutrition-aigue-severe',
        description: 'Vomissements prolongés.',
        traitement: '- Renutrition',
        clinique: '- Amaigrissement',
        paraclinique: '- Albumine',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Vomissements.',
        traitement: '- Antibiotiques',
        clinique: '- Toux, fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon pour la sténose ulcéreuse traitée ; celui du cancer pour les formes tumorales',
    urgences: [],
    symptomes: [
      ['Vomissements', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'ACG — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Vomissements tardifs avec amaigrissement : référence', ''],
      hgr: ['- Réanimation, fibroscopie, chirurgie', ''],
      tert: ['- Dilatation endoscopique, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Sténose ulcéreuse',
        type: 'commune',
        description: 'Ulcère chronique.',
        terrain: '- Antécédent d’ulcère',
        fonctionnels: '- Vomissements tardifs',
        generaux: '- Amaigrissement',
        physiques: '- Clapotage à jeun',
        paraclinique: '- Sténose bénigne',
        etiologies: '- Ulcère, H. pylori',
        syndromes: [],
      },
      {
        nom: 'Sténose tumorale',
        type: 'gravite',
        description: 'Cancer de l’antre.',
        terrain: '- Adulte > 50 ans',
        fonctionnels: '- Vomissements, anorexie',
        generaux: '- Altération de l’état général',
        physiques: '- Masse épigastrique',
        paraclinique: '- Biopsies positives',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
