'use strict';

/**
 * Lot 45 (phase 2, néphrologie pédiatrique) — insuffisance rénale aiguë de l'enfant, uropathies
 * malformatives, syndrome hémolytique et urémique, néphropathie drépanocytaire de l'enfant, maladie
 * rénale chronique de l'enfant. Rédigé par IA (KDIGO, OMS, Nelson, Pocket book) : à valider.
 */

const NEPHROPED = { departement: 'pediatrie', specialite: 'Néphrologie pédiatrique' };

module.exports = [
  // =================================================================== IRA enfant
  {
    ...NEPHROPED,
    slug: 'insuffisance-renale-aigue-enfant',
    nom: 'Insuffisance rénale aiguë de l’enfant',
    resume:
      'Baisse brutale de la fonction rénale chez l’enfant, en RDC surtout par déshydratation (diarrhée), paludisme grave, sepsis, hémoglobinurie (G6PD, paludisme), SHU, glomérulonéphrite, médicaments néphrotoxiques ou plantes traditionnelles : oligurie, œdèmes, HTA, acidose, hyperkaliémie ; créatinine, ionogramme, bandelette ; corriger l’hypovolémie, puis restreindre les apports si oligurie persistante, traiter l’hyperkaliémie, adapter les médicaments ; dialyse péritonéale si anurie, hyperkaliémie ou surcharge réfractaires.',
    definition:
      'Diminution rapide (heures à jours) du débit de filtration glomérulaire chez l’enfant, définie (KDIGO) par une élévation de la créatinine ≥ 1,5 fois la valeur de base ou une diurèse < 0,5 mL/kg/h pendant plus de 6 heures.',
    physiopathologie:
      '## Causes pré-rénales (les plus fréquentes)\n- **Hypovolémie** : diarrhée, vomissements, hémorragie, choc septique\n\n## Causes rénales\n- **Nécrose tubulaire aiguë** (ischémie prolongée), **hémoglobinurie** (paludisme grave, déficit en G6PD), rhabdomyolyse\n- **Syndrome hémolytique et urémique**, **glomérulonéphrite aiguë**, néphrotoxiques (aminosides, AINS, produits de contraste, **remèdes traditionnels**)\n\n## Causes post-rénales\n- **Valves de l’urètre postérieur**, lithiases, compression tumorale, schistosomiase',
    diagnostic:
      '## Clinique\n- **Oligurie** ou anurie (peser les couches, sonde si nécessaire), œdèmes, prise de poids\n- **HTA**, signes de surcharge (polypnée, crépitants, hépatomégalie) ou au contraire de déshydratation\n- Polypnée d’acidose, troubles de conscience, convulsions\n- Contexte : diarrhée, fièvre, urines foncées, prise de médicaments ou de plantes\n\n## Examens\n- **Créatinine**, **urée**, **ionogramme** (kaliémie), bicarbonates, calcémie, phosphorémie\n- **Bandelette urinaire** (sang, protéines), NFS (anémie hémolytique, schizocytes), TDR paludisme\n- **Échographie rénale** (obstacle, taille des reins), **ECG** (hyperkaliémie)',
    examens: [
      ['confirmation', 'creatinine', 'Élévation.'],
      ['premiere_intention', 'uree', 'Rétention azotée.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie, acidose.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['premiere_intention', 'echographie-renale', 'Obstacle, taille des reins.'],
      ['gravite', 'ecg', 'Hyperkaliémie.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave.'],
      ['etiologique', 'nfs', 'Hémolyse, thrombopénie.'],
      ['gravite', 'gaz-du-sang', 'Acidose métabolique.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-renale-chronique-enfant', 'Petits reins, anémie, retard de croissance, rachitisme.'],
      ['deshydratation-severe-enfant', 'Oligurie fonctionnelle corrigée par la réhydratation.'],
      ['syndrome-nephrotique-enfant', 'Œdèmes, protéinurie massive.'],
      [
        'glomerulonephrite-aigue-post-streptococcique',
        'Hématurie, œdèmes, HTA après une angine ou une infection cutanée.',
      ],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Déshydratation, paludisme grave, sepsis, SHU, GNA, néphrotoxiques et remèdes traditionnels, valves de l’urètre',
    principes: [
      [
        'Volémie',
        'Corriger d’abord.',
        '- Hypovolémie : **remplissage** NaCl 0,9 % ou Ringer lactate 10–20 mL/kg, puis réévaluer la diurèse\n- Normovolémie avec oligurie : **restriction hydrique** (pertes insensibles 400 mL/m²/j + diurèse)\n- Surcharge : **furosémide** 1–2 mg/kg IV (si pas de réponse : dialyse)',
      ],
      [
        'Complications',
        'Traiter les urgences.',
        '- **Hyperkaliémie** : gluconate de calcium 10 % 0,5 mL/kg IV (protection cardiaque), **salbutamol** nébulisé, glucose-insuline, polystyrène sulfonate de sodium\n- **Acidose** sévère : bicarbonate de sodium ; HTA : amlodipine, nicardipine\n- Arrêt des néphrotoxiques, adaptation des doses ; traitement de la cause (paludisme, sepsis, obstacle)',
      ],
      [
        'Épuration',
        'Dialyser si nécessaire.',
        '- **Dialyse péritonéale** (possible avec un matériel simple) : anurie prolongée, hyperkaliémie réfractaire, surcharge, urée très élevée, encéphalopathie\n- Nutrition adaptée',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage si hypovolémie'],
      ['furosemide', 'premiere', 'Surcharge'],
      ['gluconate-de-calcium', 'premiere', 'Hyperkaliémie'],
      ['salbutamol', 'premiere', 'Hyperkaliémie'],
      ['polystyrene-sulfonate-de-sodium', 'alternative', 'Hyperkaliémie'],
      ['bicarbonate-de-sodium', 'alternative', 'Acidose sévère'],
      ['amlodipine', 'adjuvant', 'HTA'],
    ],
    complications: [
      {
        nom: 'Hyperkaliémie menaçante',
        description: 'Troubles du rythme.',
        traitement: '- Calcium, salbutamol, dialyse',
        clinique: '- Faiblesse, arythmie',
        paraclinique: '- K+ > 6,5 mmol/L, ECG',
      },
      {
        nom: 'Œdème pulmonaire',
        fiche: 'insuffisance-cardiaque-enfant',
        description: 'Surcharge.',
        traitement: '- Furosémide, dialyse',
        clinique: '- Polypnée, crépitants',
        paraclinique: '',
      },
      {
        nom: 'Encéphalopathie urémique et convulsions',
        description: 'Urée, HTA, hyponatrémie.',
        traitement: '- Dialyse, anticonvulsivants',
        clinique: '- Troubles de conscience',
        paraclinique: '- Urée, natrémie',
      },
      {
        nom: 'Évolution chronique',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Récupération incomplète.',
        traitement: '- Suivi néphrologique',
        clinique: '',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération complète dans la plupart des causes pré-rénales et de la nécrose tubulaire ; mortalité élevée sans accès à la dialyse',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Oligurie', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Anurie', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
      ['Tachypnée', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Réhydratation, surveillance de la diurèse, transfert', '- Oligurie persistante, œdèmes, HTA'],
      hgr: ['- Ionogramme, traitement de l’hyperkaliémie, dialyse péritonéale', '- Dialyse'],
      tert: ['- Néphrologie pédiatrique, dialyse', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Enfant oligurique avec kaliémie > 6,5 mmol/L ou anomalies ECG' },
    formes: [
      {
        nom: 'IRA fonctionnelle',
        type: 'commune',
        description: 'Hypovolémie.',
        terrain: '- Diarrhée, vomissements',
        fonctionnels: '- Oligurie',
        generaux: '- Déshydratation',
        physiques: '- Pli cutané, TRC allongé',
        paraclinique: '- Urée élevée, bandelette normale',
        etiologies: '- Hypovolémie',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
      {
        nom: 'IRA organique',
        type: 'gravite',
        description: 'Nécrose tubulaire, SHU, GNA.',
        terrain: '',
        fonctionnels: '- Anurie',
        generaux: '',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- Créatinine élevée, hyperkaliémie',
        etiologies: '- Paludisme, SHU, toxiques',
        syndromes: ['syndrome-uremique'],
      },
      {
        nom: 'IRA obstructive',
        type: 'etiologique',
        description: 'Obstacle.',
        terrain: '- Garçon (valves)',
        fonctionnels: '- Jet faible, rétention',
        generaux: '',
        physiques: '- Globe vésical',
        paraclinique: '- Dilatation à l’échographie',
        etiologies: '- Valves, lithiase',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Uropathies malformatives
  {
    ...NEPHROPED,
    slug: 'uropathies-malformatives',
    nom: 'Uropathies malformatives',
    resume:
      'Malformations de l’appareil urinaire, souvent découvertes à l’échographie anténatale ou lors d’infections urinaires fébriles répétées : valves de l’urètre postérieur (garçon, urgence : jet faible, globe vésical, insuffisance rénale), reflux vésico-urétéral, syndrome de la jonction pyélo-urétérale, méga-uretère, duplications ; échographie rénale et vésicale, cystographie ; drainage vésical pour les valves, antibioprophylaxie, chirurgie selon le cas ; protéger le rein des infections.',
    definition:
      'Anomalies congénitales des reins et des voies urinaires (CAKUT) responsables d’obstacle à l’écoulement des urines, de reflux ou d’anomalies de position, première cause de maladie rénale chronique de l’enfant.',
    physiopathologie:
      '## Principales malformations\n- **Valves de l’urètre postérieur** (garçon) : obstacle sous-vésical, vessie de lutte, dilatation bilatérale, insuffisance rénale\n- **Reflux vésico-urétéral** : remontée de l’urine vers le rein, pyélonéphrites, cicatrices rénales\n- **Syndrome de la jonction pyélo-urétérale** : hydronéphrose unilatérale\n- Méga-uretère, urétérocèle, duplication, rein multikystique, agénésie rénale, exstrophie vésicale, hypospadias\n\n## Conséquences\n- Infections urinaires répétées, cicatrices rénales, HTA, maladie rénale chronique',
    diagnostic:
      '## Clinique\n- Dilatation à l’**échographie anténatale**\n- **Infections urinaires fébriles** répétées, retard de croissance\n- Garçon : **jet urinaire faible**, **globe vésical**, gouttes retardataires, masse abdominale (reins dilatés)\n- Douleurs lombaires, hématurie\n\n## Examens\n- **Échographie rénale et vésicale** (dilatation, épaisseur de la paroi vésicale, résidu)\n- **Cystographie rétrograde et mictionnelle** (reflux, valves) à distance d’une infection\n- **Créatinine**, ionogramme, ECBU\n- Scintigraphie rénale (cicatrices, fonction différentielle) en centre spécialisé',
    examens: [
      ['premiere_intention', 'echographie-renale', 'Dilatation, résidu.'],
      ['confirmation', 'cystographie-mictionnelle', 'Reflux, valves.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'ecbu', 'Infection urinaire.'],
      ['premiere_intention', 'ionogramme', 'Troubles électrolytiques.'],
      ['premiere_intention', 'bandelette-urinaire', 'Infection, protéinurie.'],
    ],
    scores: [],
    differentiels: [
      ['infection-urinaire-enfant', 'Infection sur voies urinaires normales.'],
      ['nephroblastome', 'Masse rénale solide.'],
      ['Vessie neurologique', 'Spina bifida, troubles sphinctériens.'],
      ['enuresie', 'Fuites nocturnes isolées sans infection.'],
    ],
    etiologies: '## Facteurs\n- Malformations congénitales, parfois familiales ou associées à des syndromes',
    principes: [
      [
        'Valves de l’urètre postérieur',
        'Urgence.',
        '- **Drainage vésical** immédiat (sonde urétrale fine ou cystostomie), correction des troubles hydroélectrolytiques (syndrome de levée d’obstacle : polyurie)\n- **Résection endoscopique des valves** (chirurgie pédiatrique)\n- Suivi à vie de la fonction rénale et vésicale',
      ],
      [
        'Reflux et autres malformations',
        'Protéger le rein.',
        '- Traitement rapide de chaque infection urinaire fébrile\n- **Antibioprophylaxie** (cotrimoxazole 2 mg/kg/j de triméthoprime ou nitrofurantoïne 1–2 mg/kg/j le soir) dans les reflux de haut grade ou les infections récidivantes\n- Traitement de la constipation, mictions régulières\n- **Chirurgie** : pyéloplastie (jonction), réimplantation urétérale (reflux sévère, échec)',
      ],
      ['Suivi', 'Surveiller.', '- Tension artérielle, croissance, créatinine, protéinurie'],
    ],
    molecules: [
      ['cotrimoxazole', 'premiere', 'Antibioprophylaxie'],
      ['nitrofurantoine', 'alternative', 'Antibioprophylaxie'],
      ['ceftriaxone', 'premiere', 'Pyélonéphrite'],
      ['cefixime', 'alternative', 'Pyélonéphrite (relais oral)'],
    ],
    complications: [
      {
        nom: 'Pyélonéphrites récidivantes',
        fiche: 'infection-urinaire-enfant',
        description: 'Reflux, stase.',
        traitement: '- Antibiotiques, prophylaxie, chirurgie',
        clinique: '- Fièvre',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Maladie rénale chronique',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Cicatrices, dysplasie.',
        traitement: '- Néphroprotection',
        clinique: '- Retard de croissance',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'HTA',
        fiche: 'hypertension-arterielle-enfant',
        description: 'Cicatrices rénales.',
        traitement: '- Antihypertenseurs',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Reflux de bas grade : disparition fréquente avec la croissance ; valves : insuffisance rénale chronique chez un tiers des enfants',
    urgences: [],
    symptomes: [
      ['Fièvre', 'frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Masse abdominale', 'occasionnel'],
      ['Retard de croissance', 'occasionnel'],
      ['Incontinence urinaire', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Infections urinaires répétées, jet faible chez le garçon : orientation',
        '- Globe vésical, fièvre',
      ],
      hgr: ['- Échographie, sondage vésical, antibiotiques', '- Chirurgie pédiatrique'],
      tert: ['- Cystographie, chirurgie urologique pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Reflux vésico-urétéral',
        type: 'commune',
        description: 'Infections fébriles.',
        terrain: '- Nourrisson, fille',
        fonctionnels: '- Brûlures',
        generaux: '- Fièvre',
        physiques: '',
        paraclinique: '- Reflux à la cystographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Valves de l’urètre postérieur',
        type: 'gravite',
        description: 'Obstacle sous-vésical.',
        terrain: '- Garçon',
        fonctionnels: '- Jet faible',
        generaux: '- Retard de croissance',
        physiques: '- Globe vésical, reins palpables',
        paraclinique: '- Dilatation bilatérale, créatinine élevée',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
      {
        nom: 'Syndrome de la jonction pyélo-urétérale',
        type: 'topographique',
        description: 'Hydronéphrose unilatérale.',
        terrain: '',
        fonctionnels: '- Douleurs lombaires',
        generaux: '',
        physiques: '- Masse lombaire',
        paraclinique: '- Dilatation pyélocalicielle',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== SHU
  {
    ...NEPHROPED,
    slug: 'syndrome-hemolytique-et-uremique',
    nom: 'Syndrome hémolytique et urémique',
    resume:
      'Microangiopathie thrombotique associant anémie hémolytique (schizocytes), thrombopénie et insuffisance rénale aiguë, survenant chez l’enfant 5 à 10 jours après une diarrhée sanglante à Shigella dysenteriae type 1 ou E. coli producteur de shigatoxine : pâleur, oligurie, œdèmes, HTA, convulsions ; NFS, frottis, créatinine ; réhydratation prudente, transfusion, dialyse ; pas d’antidiarrhéiques ; antibiotiques adaptés pour la shigellose mais pas pour E. coli.',
    definition:
      'Triade anémie hémolytique mécanique, thrombopénie et insuffisance rénale aiguë, par lésions de l’endothélie des petits vaisseaux (rein surtout), typique post-diarrhéique chez l’enfant.',
    physiopathologie:
      '## Mécanismes\n- **Shigatoxine** (E. coli entérohémorragique, **Shigella dysenteriae type 1**) → lésion endothéliale → microthrombi dans les capillaires glomérulaires\n- Fragmentation des globules rouges (**schizocytes**), consommation des plaquettes, ischémie rénale\n- Atteinte possible du cerveau, du pancréas, du cœur, du tube digestif\n\n## Formes atypiques\n- Pneumocoque, anomalies du complément, VIH, médicaments',
    diagnostic:
      '## Clinique\n- Diarrhée souvent **sanglante** 5–10 jours avant\n- **Pâleur**, ictère discret, pétéchies\n- **Oligurie** ou anurie, œdèmes, **HTA**\n- Troubles neurologiques : irritabilité, convulsions, coma (formes graves)\n\n## Examens\n- **NFS** : anémie, **thrombopénie**, **schizocytes** au frottis, réticulocytes élevés\n- **LDH** élevée, haptoglobine basse, **test de Coombs négatif**\n- **Créatinine**, urée, ionogramme, bandelette (hématurie, protéinurie)\n- Coproculture (Shigella, E. coli), TDR paludisme (diagnostic différentiel)',
    examens: [
      ['confirmation', 'nfs', 'Anémie, thrombopénie.'],
      ['confirmation', 'frottis-sanguin', 'Schizocytes.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'ldh', 'Hémolyse.'],
      ['premiere_intention', 'test-de-coombs-direct', 'Négatif.'],
      ['gravite', 'ionogramme', 'Hyperkaliémie.'],
      ['etiologique', 'coproculture', 'Shigella, E. coli.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-grave-enfant', 'Anémie, insuffisance rénale, TDR positif.'],
      ['anemies-hemolytiques-enfant', 'Autres hémolyses.'],
      ['sepsis-enfant', 'Coagulation intravasculaire disséminée.'],
      ['glomerulonephrite-aigue-post-streptococcique', 'Pas d’hémolyse ni de thrombopénie.'],
      ['purpura-thrombopenique-immunologique-enfant', 'Thrombopénie isolée.'],
    ],
    etiologies:
      '## Causes\n- Shigella dysenteriae type 1, E. coli entérohémorragique (O157:H7) ; pneumocoque ; formes atypiques',
    principes: [
      [
        'Traitement de soutien',
        'Passer le cap.',
        '- Réhydratation **prudente** (corriger la déshydratation puis restreindre si oligurie), bilan entrées-sorties, poids quotidien\n- **Transfusion** de concentrés globulaires si Hb < 6–7 g/dL ; plaquettes seulement si saignement ou geste invasif\n- Traitement de l’**HTA** (amlodipine, nicardipine), de l’hyperkaliémie, des convulsions\n- **Dialyse** péritonéale si anurie, surcharge, hyperkaliémie ou urée très élevée',
      ],
      [
        'Ce qu’il faut éviter',
        'Ne pas aggraver.',
        '- **Pas d’antidiarrhéiques** (lopéramide)\n- Antibiotiques : traiter la **shigellose** (ciprofloxacine ou azithromycine) ; **éviter les antibiotiques** si E. coli entérohémorragique suspecté (augmentation de la libération de toxine)\n- Pas d’AINS, adaptation des médicaments à la fonction rénale',
      ],
    ],
    molecules: [
      ['furosemide', 'alternative', 'Surcharge'],
      ['amlodipine', 'premiere', 'HTA'],
      ['ciprofloxacine', 'alternative', 'Shigellose documentée'],
      ['azithromycine', 'alternative', 'Shigellose documentée'],
      ['gluconate-de-calcium', 'adjuvant', 'Hyperkaliémie'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale aiguë anurique',
        fiche: 'insuffisance-renale-aigue-enfant',
        description: 'Microthromboses glomérulaires.',
        traitement: '- Dialyse',
        clinique: '- Anurie, œdèmes',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Atteinte neurologique',
        description: 'Microangiopathie cérébrale.',
        traitement: '- Anticonvulsivants, réanimation',
        clinique: '- Convulsions, coma',
        paraclinique: '',
      },
      {
        nom: 'Maladie rénale chronique',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Séquelles.',
        traitement: '- Suivi néphrologique',
        clinique: '- HTA, protéinurie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 3–5 % avec dialyse, plus élevée après Shigella ; séquelles rénales chez 20–30 %',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Pâleur', 'tres_frequent'],
      ['Oligurie', 'tres_frequent'],
      ['Diarrhée sanglante', 'frequent'],
      ['Œdèmes', 'frequent'],
      ['Purpura', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Pâleur et oligurie après dysenterie : transfert', '- Tout cas suspect'],
      hgr: ['- NFS, créatinine, transfusion, dialyse péritonéale', ''],
      tert: ['- Néphrologie pédiatrique', ''],
    },
    alertes: { 'hyperkaliemie-menacante': 'Enfant anurique après une dysenterie' },
    formes: [
      {
        nom: 'SHU post-diarrhéique',
        type: 'commune',
        description: 'Shigatoxine.',
        terrain: '- Enfant < 5 ans',
        fonctionnels: '- Diarrhée sanglante récente',
        generaux: '',
        physiques: '- Pâleur, œdèmes, oligurie',
        paraclinique: '- Schizocytes, thrombopénie, créatinine élevée',
        etiologies: '- Shigella, E. coli',
        syndromes: ['syndrome-hemolytique', 'syndrome-uremique'],
      },
      {
        nom: 'SHU avec atteinte neurologique',
        type: 'gravite',
        description: 'Forme grave.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Convulsions, coma',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Néphropathie drépanocytaire enfant
  {
    ...NEPHROPED,
    slug: 'nephropathie-drepanocytaire-enfant',
    nom: 'Néphropathie drépanocytaire de l’enfant',
    resume:
      'Atteinte rénale de l’enfant drépanocytaire, précoce et longtemps silencieuse : hyposthénurie (urines diluées, énurésie, déshydratation rapide), hématurie (nécrose papillaire), microalbuminurie puis protéinurie dès l’âge scolaire, évoluant vers la maladie rénale chronique à l’âge adulte ; dépistage annuel de la microalbuminurie dès 10 ans (ou plus tôt), tension artérielle ; hydratation abondante, hydroxyurée, IEC si albuminurie persistante, éviter les AINS.',
    definition:
      'Ensemble des atteintes glomérulaires et tubulaires liées à la drépanocytose chez l’enfant, dues à la falciformation dans la médullaire rénale hypoxique et hyperosmolaire.',
    physiopathologie:
      '## Mécanismes\n- Médullaire rénale : hypoxie, acidose, hyperosmolarité → falciformation → infarctus des vasa recta → **défaut de concentration** des urines (hyposthénurie), **nécrose papillaire**\n- Glomérule : **hyperfiltration** → microalbuminurie → protéinurie → glomérulosclérose\n- Acidose tubulaire, hyperkaliémie\n\n## Conséquences\n- Déshydratation rapide (qui favorise les crises), énurésie, hématurie, HTA tardive, maladie rénale chronique',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique\n- **Énurésie**, polyurie, soif ; déshydratation rapide en cas de fièvre ou de diarrhée\n- **Hématurie** macroscopique (nécrose papillaire), douleurs lombaires\n- Œdèmes (syndrome néphrotique, rare), HTA (tardive : une tension « normale » peut être relativement élevée)\n\n## Examens\n- **Bandelette urinaire** et **microalbuminurie** (rapport albumine/créatinine) chaque année\n- **Créatinine** (une créatinine « normale » peut masquer une baisse de fonction, filtration souvent augmentée chez l’enfant)\n- **Échographie rénale** (nécrose papillaire, lithiase), ECBU en cas d’hématurie',
    examens: [
      ['confirmation', 'microalbuminurie', 'Atteinte glomérulaire précoce.'],
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'proteinurie', 'Protéinurie.'],
      ['deuxieme_intention', 'echographie-renale', 'Nécrose papillaire.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie, acidose.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['nephropathie-drepanocytaire', 'Fiche de l’adulte.'],
      ['infection-urinaire-enfant', 'Hématurie fébrile.'],
      ['schistosomiase-urogenitale', 'Hématurie terminale, zone d’endémie.'],
      ['syndrome-nephrotique-enfant', 'Œdèmes, protéinurie massive.'],
      ['enuresie', 'Énurésie isolée sans drépanocytose.'],
    ],
    etiologies: '## Terrain\n- Drépanocytose SS ou S-bêta0-thalassémie surtout',
    principes: [
      [
        'Prévention',
        'Ralentir l’atteinte.',
        '- **Hydratation abondante** (l’enfant ne peut pas concentrer ses urines), surtout en cas de fièvre, chaleur, diarrhée\n- **Hydroxyurée** (réduit l’hyperfiltration et l’albuminurie)\n- **Éviter les AINS** et les néphrotoxiques ; ne pas punir l’énurésie',
      ],
      [
        'Albuminurie persistante',
        'Néphroprotection.',
        '- **IEC** (énalapril, captopril) si microalbuminurie persistante sur 2 contrôles, avec surveillance de la kaliémie',
      ],
      [
        'Hématurie',
        'Traiter.',
        '- Repos, hydratation, transfusion si saignement abondant ; éliminer une infection, une lithiase, une schistosomiase',
      ],
    ],
    molecules: [
      ['hydroxycarbamide', 'premiere', 'Traitement de fond de la drépanocytose'],
      ['enalapril', 'premiere', 'Microalbuminurie persistante'],
      ['captopril', 'alternative', 'Microalbuminurie persistante'],
      ['acide-folique', 'adjuvant', 'Drépanocytose'],
    ],
    complications: [
      {
        nom: 'Maladie rénale chronique',
        fiche: 'maladie-renale-chronique-enfant',
        description: 'Glomérulosclérose.',
        traitement: '- Néphroprotection, dialyse',
        clinique: '- HTA, anémie aggravée',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Nécrose papillaire',
        description: 'Infarctus médullaire.',
        traitement: '- Hydratation, repos',
        clinique: '- Hématurie, douleur lombaire',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Déshydratation',
        fiche: 'deshydratation-severe-enfant',
        description: 'Hyposthénurie.',
        traitement: '- Réhydratation',
        clinique: '- Soif, pli cutané',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Microalbuminurie chez 20–40 % des enfants SS ; insuffisance rénale chronique fréquente à l’âge adulte',
    urgences: [],
    symptomes: [
      ['Incontinence urinaire', 'frequent'],
      ['Polyurie-polydipsie', 'frequent'],
      ['Hématurie', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'ASH — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Bandelette annuelle, hydratation, tension artérielle', '- Hématurie, protéinurie'],
      hgr: ['- Microalbuminurie, créatinine, IEC', ''],
      tert: ['- Néphrologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hyposthénurie',
        type: 'commune',
        description: 'Atteinte tubulaire précoce.',
        terrain: '- Enfant SS',
        fonctionnels: '- Énurésie, polyurie',
        generaux: '- Déshydratation facile',
        physiques: '',
        paraclinique: '- Urines diluées',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Néphropathie glomérulaire',
        type: 'evolutive',
        description: 'Microalbuminurie puis protéinurie.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '',
        generaux: '',
        physiques: '- HTA tardive',
        paraclinique: '- Microalbuminurie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== MRC enfant
  {
    ...NEPHROPED,
    slug: 'maladie-renale-chronique-enfant',
    nom: 'Maladie rénale chronique de l’enfant',
    resume:
      'Altération durable (> 3 mois) de la fonction ou de la structure rénale chez l’enfant : causes principales uropathies malformatives (valves), glomérulopathies (syndrome néphrotique corticorésistant, VIH, GNA), drépanocytose ; retard de croissance, anémie, rachitisme, HTA, acidose ; créatinine et DFG (formule de Schwartz), échographie (petits reins) ; néphroprotection (IEC, contrôle tensionnel), traitement de l’anémie, de l’acidose et des troubles phosphocalciques, nutrition ; dialyse et greffe très peu accessibles : diagnostic précoce essentiel.',
    definition:
      'Anomalies de la structure ou de la fonction rénale persistant plus de 3 mois, avec DFG < 90 mL/min/1,73 m² (estimé par la formule de Schwartz : 36,5 × taille en cm / créatinine en µmol/L) ou marqueurs d’atteinte rénale (protéinurie, anomalies échographiques).',
    physiopathologie:
      '## Causes\n- **Uropathies malformatives** et dysplasies (valves de l’urètre, reflux)\n- **Glomérulopathies** : syndrome néphrotique corticorésistant, néphropathie du VIH, séquelles de GNA ou de SHU\n- Drépanocytose, maladies héréditaires (polykystose, syndrome d’Alport)\n\n## Conséquences\n- **Anémie** (déficit en érythropoïétine, carence en fer), **acidose**, **troubles phosphocalciques** (rachitisme rénal), **HTA**, **retard de croissance**, dénutrition',
    diagnostic:
      '## Clinique\n- Souvent tardif : **retard de croissance**, pâleur, fatigue, anorexie, vomissements\n- **HTA**, œdèmes ou polyurie selon la cause, déformations osseuses (rachitisme)\n- Infections urinaires répétées, jet faible (uropathie)\n\n## Examens\n- **Créatinine** et **DFG** (Schwartz), urée, **ionogramme**, bicarbonates\n- **Calcémie, phosphorémie**, phosphatases alcalines\n- **NFS** (anémie normocytaire), ferritine\n- **Bandelette**, protéinurie\n- **Échographie rénale** (petits reins hyperéchogènes, dilatations)',
    examens: [
      ['confirmation', 'creatinine', 'DFG (formule de Schwartz).'],
      ['premiere_intention', 'uree', 'Rétention azotée.'],
      ['premiere_intention', 'ionogramme', 'Hyperkaliémie, acidose.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['premiere_intention', 'phosphoremie', 'Hyperphosphatémie.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'echographie-renale', 'Petits reins, uropathie.'],
      ['premiere_intention', 'proteinurie', 'Atteinte glomérulaire.'],
      ['premiere_intention', 'ferritine', 'Carence martiale.'],
    ],
    scores: [],
    differentiels: [
      ['insuffisance-renale-aigue-enfant', 'Reins de taille normale, installation brutale.'],
      ['maladie-renale-chronique', 'Fiche de l’adulte.'],
      ['rachitisme-carentiel', 'Rachitisme sans insuffisance rénale.'],
      ['malnutrition-chronique', 'Retard de croissance carentiel.'],
    ],
    etiologies:
      '## Causes fréquentes\n- Uropathies malformatives, syndrome néphrotique corticorésistant, VIH, drépanocytose, séquelles de SHU',
    principes: [
      [
        'Néphroprotection',
        'Ralentir la progression.',
        '- Contrôle de la **tension artérielle** (< 90e percentile) : **IEC** (énalapril) si protéinurie, amlodipine\n- Traitement des infections urinaires et des obstacles, éviter les néphrotoxiques (AINS, remèdes traditionnels), adaptation des doses',
      ],
      [
        'Complications',
        'Corriger.',
        '- **Anémie** : fer, puis **érythropoïétine** (époétine alfa) si disponible\n- **Acidose** : bicarbonate de sodium\n- **Troubles phosphocalciques** : restriction en phosphore, **carbonate de calcium** au repas (chélateur), **calcitriol**\n- **Nutrition** : apports énergétiques suffisants, sel selon la cause, suivi de la croissance\n- Vaccinations (hépatite B)',
      ],
      [
        'Stade terminal',
        'Préparer.',
        '- Dialyse péritonéale ou hémodialyse, transplantation : très peu accessibles en RDC ; information de la famille, soins palliatifs si nécessaire',
      ],
    ],
    molecules: [
      ['enalapril', 'premiere', 'HTA, protéinurie'],
      ['amlodipine', 'alternative', 'HTA'],
      ['carbonate-de-calcium', 'premiere', 'Hyperphosphatémie'],
      ['calcitriol', 'premiere', 'Ostéodystrophie rénale'],
      ['bicarbonate-de-sodium', 'premiere', 'Acidose'],
      ['epoetine-alfa', 'alternative', 'Anémie'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Carence martiale'],
      ['furosemide', 'adjuvant', 'Surcharge'],
    ],
    complications: [
      {
        nom: 'Retard de croissance',
        fiche: 'retard-staturo-ponderal',
        description: 'Acidose, dénutrition, ostéodystrophie.',
        traitement: '- Nutrition, correction métabolique, hormone de croissance',
        clinique: '- Petite taille',
        paraclinique: '',
      },
      {
        nom: 'Ostéodystrophie rénale',
        description: 'Troubles phosphocalciques.',
        traitement: '- Calcitriol, chélateurs',
        clinique: '- Déformations osseuses',
        paraclinique: '- Phosphore élevé, calcium bas',
      },
      {
        nom: 'HTA et atteinte cardiaque',
        fiche: 'hypertension-arterielle-enfant',
        description: 'Surcharge, rénine.',
        traitement: '- Antihypertenseurs',
        clinique: '',
        paraclinique: '- Échocardiographie',
      },
      {
        nom: 'Hyperkaliémie',
        description: 'Stade avancé.',
        traitement: '- Régime, résines, dialyse',
        clinique: '- Faiblesse',
        paraclinique: '- Kaliémie, ECG',
      },
    ],
    evolution:
      '## Pronostic\n- Progression vers le stade terminal ; décès fréquent sans dialyse ni greffe : le dépistage précoce et la néphroprotection sont essentiels',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Retard de croissance', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Polyurie-polydipsie', 'occasionnel'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Tension artérielle, bandelette, croissance : orientation',
        '- Retard de croissance avec pâleur ou HTA',
      ],
      hgr: ['- Créatinine, échographie, traitement des complications', ''],
      tert: ['- Néphrologie pédiatrique, dialyse', ''],
    },
    alertes: {
      'hyperkaliemie-menacante': 'Enfant insuffisant rénal chronique avec faiblesse ou vomissements',
    },
    formes: [
      {
        nom: 'MRC sur uropathie',
        type: 'commune',
        description: 'Cause principale.',
        terrain: '- Garçon, valves',
        fonctionnels: '- Polyurie',
        generaux: '- Retard de croissance',
        physiques: '- Pâleur',
        paraclinique: '- Reins dilatés, créatinine élevée',
        etiologies: '- Valves, reflux',
        syndromes: [],
      },
      {
        nom: 'MRC terminale',
        type: 'gravite',
        description: 'DFG < 15.',
        terrain: '',
        fonctionnels: '- Anorexie, vomissements',
        generaux: '- Altération de l’état général',
        physiques: '- HTA, œdèmes',
        paraclinique: '- Hyperkaliémie, acidose',
        etiologies: '',
        syndromes: ['syndrome-uremique'],
      },
    ],
  },
];
