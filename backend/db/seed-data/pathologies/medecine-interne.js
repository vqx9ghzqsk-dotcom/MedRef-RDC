'use strict';

/** Fiches — Médecine interne (hors infectiologie). Format : voir infectiologie.js. */

module.exports = [
  // =================================================================== Asthme
  {
    specialite: 'Pneumologie',
    slug: 'asthme',
    nom: 'Asthme',
    resume:
      'Inflammation chronique des bronches : corticoïde inhalé pour tous, jamais de bronchodilatateur seul (GINA).',
    definition:
      'Maladie hétérogène caractérisée par une inflammation chronique des voies aériennes, définie par des symptômes respiratoires variables dans le temps et en intensité (sifflements, dyspnée, oppression thoracique, toux) et une limitation variable du débit expiratoire (GINA).',
    physiopathologie:
      '## Mécanismes\n- Inflammation bronchique, le plus souvent de type 2 (éosinophiles, IgE, IL-4/5/13)\n- Hyperréactivité bronchique et bronchoconstriction réversible\n- Hypersécrétion de mucus, remodelage bronchique dans les formes non contrôlées',
    diagnostic:
      '## Arguments cliniques\n- Symptômes variables, nocturnes ou au réveil, déclenchés par l’effort, le froid, les allergènes, les infections virales, la fumée (bois, charbon)\n- Sibilants expiratoires à l’auscultation (peut être normale entre les crises)\n- Antécédents personnels ou familiaux d’atopie (rhinite, eczéma)\n\n## Évaluer\n- Le contrôle des symptômes (4 dernières semaines) et le risque d’exacerbation',
    examens: [
      [
        'confirmation',
        'spirometrie',
        'Trouble ventilatoire obstructif (VEMS/CVF < 0,70 ou < LIN) réversible : VEMS + ≥ 12 % et + ≥ 200 mL après bronchodilatateur.',
      ],
      [
        'confirmation',
        'debit-expiratoire-de-pointe',
        'Si spirométrie indisponible : variabilité diurne moyenne > 10 % (adulte) ou > 13 % (enfant) sur 2 semaines, ou augmentation ≥ 20 % après bronchodilatateur.',
      ],
      ['gravite', 'oxymetrie-de-pouls', 'Exacerbation : SpO2 < 90 % = crise grave.'],
      [
        'gravite',
        'gaz-du-sang',
        'Crise grave : une PaCO2 normale ou élevée (≥ 42 mmHg) témoigne de l’épuisement.',
      ],
      [
        'deuxieme_intention',
        'nfs',
        'Éosinophilie > 300/mm³ : phénotype de type 2 ; en zone tropicale, penser aux parasitoses (anguillulose avant corticothérapie prolongée).',
      ],
      [
        'deuxieme_intention',
        'radiographie-thoracique',
        'Non systématique : doute diagnostique, crise grave, suspicion de pneumothorax ou de pneumonie.',
      ],
    ],
    scores: ['gina-controle'],
    differentiels: [
      ['BPCO', 'Tabagisme ou exposition aux fumées, âge > 40 ans, obstruction non complètement réversible.'],
      [
        'insuffisance-cardiaque',
        '« Asthme cardiaque » : crépitants, œdèmes, cardiomégalie ; BNP et échocardiographie.',
      ],
      ['Corps étranger inhalé', 'Enfant, syndrome de pénétration, sibilant unilatéral.'],
      ['tuberculose-pulmonaire', 'Toux chronique avec fièvre et amaigrissement.'],
      ['Bronchiolite du nourrisson', '< 2 ans, premier épisode viral, crépitants et sibilants.'],
      ['Dysfonction des cordes vocales', 'Stridor inspiratoire, absence de réponse aux bronchodilatateurs.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Atopie personnelle et familiale\n- Exposition à la fumée de tabac, à la fumée de bois ou de charbon (cuisine), à la pollution\n- Obésité\n\n## Facteurs déclenchants\n- Infections virales, allergènes (acariens, pollens, moisissures, blattes), effort, froid\n- Médicaments : aspirine et AINS, bêtabloquants',
    principes: [
      [
        'Confirmer le diagnostic et évaluer le contrôle',
        'Ne pas traiter à tort, adapter l’intensité du traitement.',
        '- Spirométrie ou DEP avant le traitement si possible\n- Score de contrôle GINA, recherche des facteurs de risque d’exacerbation',
      ],
      [
        'Traitement de fond anti-inflammatoire pour tous',
        'Réduire les exacerbations et la mortalité.',
        '- Jamais de bronchodilatateur de courte durée seul chez l’adulte et l’adolescent\n- Voie 1 (préférée, ≥ 12 ans) : budésonide-formotérol à la demande (paliers 1–2), puis en fond et à la demande (MART, paliers 3–5)\n- Voie 2 : salbutamol à la demande + corticoïde inhalé quotidien\n- Enfant 6–11 ans : corticoïde inhalé faible dose quotidien',
      ],
      [
        'Éducation et plan d’action écrit',
        'Rendre le patient autonome.',
        '- Vérifier la technique d’inhalation à chaque consultation (chambre d’inhalation)\n- Plan d’action : reconnaître l’aggravation, augmenter le traitement, consulter',
      ],
      [
        'Contrôle de l’environnement et des comorbidités',
        'Supprimer les facteurs aggravants.',
        '- Arrêt du tabac, réduction de la fumée domestique\n- Traiter la rhinite, l’obésité, le reflux',
      ],
      [
        'Traiter les exacerbations',
        'Lever le bronchospasme et l’inflammation.',
        '- Salbutamol répété (chambre d’inhalation), oxygène, corticoïde oral précoce\n- Formes graves : ipratropium, sulfate de magnésium, hospitalisation',
      ],
      [
        'Suivi et ajustement par paliers',
        'Utiliser la dose minimale efficace.',
        '- Réévaluer à 1–3 mois ; diminuer après 3 mois de contrôle',
      ],
    ],
    molecules: [
      ['budesonide', 'premiere', 'Corticoïde inhalé : traitement de fond'],
      ['formoterol', 'premiere', 'Avec le budésonide : à la demande (voie 1) ou MART'],
      ['salbutamol', 'premiere', 'Soulagement des symptômes et crises (toujours avec un corticoïde inhalé)'],
      ['ipratropium', 'adjuvant', 'Exacerbation sévère'],
      ['prednisolone', 'adjuvant', 'Exacerbation : 5–7 jours'],
      ['hydrocortisone', 'alternative', 'Exacerbation si voie orale impossible'],
      ['sulfate-de-magnesium', 'adjuvant', 'Crise grave réfractaire'],
    ],
    complications: [
      {
        nom: 'Crise d’asthme aiguë grave',
        description: 'Exacerbation menaçant le pronostic vital.',
        traitement:
          '- Oxygène, salbutamol en nébulisation répétée + ipratropium\n- Corticoïde systémique précoce\n- Sulfate de magnésium IV si absence de réponse\n- Transfert en soins intensifs si signes d’épuisement',
        clinique:
          '- Parole, FR, FC, mise en jeu des muscles accessoires, conscience toutes les 15–30 min\n- DEP avant et après traitement',
        paraclinique: '- SpO2 continue, gaz du sang si crise grave, kaliémie (salbutamol à forte dose)',
      },
      {
        nom: 'Pneumothorax et pneumomédiastin',
        description: 'Complication rare des crises sévères.',
        traitement: '- Exsufflation ou drainage si pneumothorax important',
        clinique: '- Douleur thoracique brutale, asymétrie auscultatoire, emphysème sous-cutané',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Insuffisance respiratoire aiguë et arrêt respiratoire',
        description: 'Évolution des crises graves non traitées.',
        traitement: '- Ventilation mécanique en réanimation',
        clinique: '- Silence auscultatoire, cyanose, confusion, bradycardie',
        paraclinique: '- Gaz du sang (hypercapnie)',
      },
      {
        nom: 'Effets indésirables des traitements',
        description:
          'Candidose et dysphonie (corticoïdes inhalés) ; effets systémiques des cures répétées de corticoïdes oraux.',
        traitement:
          '- Rinçage de la bouche après inhalation, chambre d’inhalation\n- Limiter les corticoïdes oraux en optimisant le traitement de fond',
        clinique: '- Bouche, voix ; croissance chez l’enfant ; PA, poids',
        paraclinique: '- Glycémie si cures répétées de corticoïdes',
      },
      {
        nom: 'Asthme sévère et remodelage',
        description: 'Asthme non contrôlé malgré un traitement de palier 4–5 bien pris.',
        traitement:
          '- Vérifier observance, technique, comorbidités\n- Avis spécialisé (biothérapies si disponibles)',
        clinique: '- Nombre d’exacerbations par an, recours aux corticoïdes oraux',
        paraclinique: '- Spirométrie annuelle, éosinophiles',
      },
    ],
    evolution:
      '## Évolution\n- Maladie chronique ; un bon contrôle est obtenu chez la majorité des patients sous corticoïde inhalé bien pris\n- Les décès sont liés aux crises graves chez les patients sans traitement de fond\n\n## Suivi\n- Consultation tous les 3 à 12 mois selon le contrôle',
    urgences: ['crise-d-asthme-aigue-grave'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Sibilants', 'tres_frequent'],
      ['Toux', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Douleur thoracique', 'occasionnel'],
    ],
    sources: [
      'GINA — Global Strategy for Asthma Management and Prevention',
      'ERS — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
  },

  // =================================================================== HTA
  {
    specialite: 'Cardiologie',
    slug: 'hypertension-arterielle',
    nom: 'Hypertension artérielle',
    resume:
      "PA ≥ 140/90 mmHg confirmée — premier facteur de risque d'AVC et d'insuffisance cardiaque en Afrique subsaharienne.",
    definition:
      'Élévation permanente de la pression artérielle : PAS ≥ 140 mmHg et/ou PAD ≥ 90 mmHg en consultation, confirmée par automesure (≥ 135/85) ou MAPA. L’ESC 2024 distingue la PA non élevée (< 120/70), la PA élevée (120–139/70–89) et l’HTA (≥ 140/90).',
    physiopathologie:
      "## Mécanismes\n- Augmentation des résistances vasculaires périphériques\n- Activation du système rénine-angiotensine-aldostérone et du système sympathique\n- Rétention hydrosodée (profil à rénine basse fréquent chez les patients d'ascendance africaine)\n- Retentissement sur les organes cibles : cœur, cerveau, reins, rétine, artères",
    diagnostic:
      '## Mesure standardisée\n- Patient assis, au repos 5 min, brassard adapté au bras, 2–3 mesures à 1 min d’intervalle\n- Confirmation par automesure ou MAPA, ou à au moins 2 consultations\n\n## Évaluer\n- Les autres facteurs de risque cardiovasculaire et l’atteinte d’organe cible\n- Une HTA secondaire si sujet jeune (< 40 ans), HTA résistante, hypokaliémie ou aggravation brutale',
    examens: [
      ['premiere_intention', 'creatinine', 'DFG estimé (CKD-EPI) : < 60 mL/min/1,73 m² = atteinte rénale.'],
      [
        'premiere_intention',
        'ionogramme',
        'Hypokaliémie spontanée : évoquer un hyperaldostéronisme ; référence avant diurétique ou IEC.',
      ],
      ['premiere_intention', 'glycemie', 'Diabète associé (risque cardiovasculaire majoré).'],
      ['premiere_intention', 'bilan-lipidique', 'Évaluation du risque cardiovasculaire global.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie, hématurie : néphropathie.'],
      ['premiere_intention', 'microalbuminurie', 'RAC ≥ 3 mg/mmol : atteinte rénale (organe cible).'],
      ['premiere_intention', 'ecg', 'HVG (Sokolow ≥ 35 mm), fibrillation atriale, séquelles d’infarctus.'],
      [
        'deuxieme_intention',
        'echocardiographie',
        'Anomalie ECG, dyspnée ou souffle : HVG, dysfonction diastolique ou systolique.',
      ],
      [
        'deuxieme_intention',
        'fond-d-oeil',
        'HTA sévère ou diabète : rétinopathie hypertensive (stades III–IV = urgence).',
      ],
      [
        'etiologique',
        'echographie-renale',
        'Sujet jeune, insuffisance rénale : néphropathie, asymétrie rénale (sténose artérielle).',
      ],
    ],
    scores: ['imc', 'ckd-epi', 'clairance-creatinine'],
    differentiels: [
      ['Effet « blouse blanche »', 'PA élevée au cabinet, normale en automesure ou en MAPA.'],
      [
        'HTA secondaire',
        'Sujet jeune, HTA résistante, hypokaliémie : néphropathie, sténose de l’artère rénale, causes endocriniennes.',
      ],
      ['pre-eclampsie-severe', 'HTA apparue après 20 SA avec protéinurie ou atteinte d’organe.'],
      [
        'HTA induite',
        'AINS, corticoïdes, contraceptifs œstroprogestatifs, alcool, réglisse, décongestionnants.',
      ],
      [
        'Élévation réactionnelle',
        'Douleur, anxiété, rétention urinaire : contrôler après traitement de la cause.',
      ],
    ],
    etiologies:
      "## HTA essentielle (≈ 90 %)\n- Âge, hérédité, obésité, sédentarité\n- Consommation excessive de sel et d'alcool, faible apport en potassium\n\n## HTA secondaires\n- Néphropathies, sténose de l'artère rénale\n- Hyperaldostéronisme, phéochromocytome, syndrome de Cushing, dysthyroïdie\n- Syndrome d’apnées du sommeil\n- Médicaments (AINS, corticoïdes, contraceptifs œstroprogestatifs)",
    principes: [
      [
        'Confirmer le diagnostic et évaluer le risque global',
        'Traiter le risque cardiovasculaire, pas seulement un chiffre.',
        '- Mesures répétées, automesure ou MAPA\n- Atteinte d’organe cible, facteurs de risque associés (diabète, tabac, dyslipidémie, MRC)',
      ],
      [
        'Mesures hygiéno-diététiques pour tous',
        'Baisser la PA de 5 à 10 mmHg et réduire le risque.',
        '- Sel < 5 g/j, fruits et légumes (potassium), activité physique ≥ 150 min/semaine\n- Perte de poids, limitation de l’alcool, arrêt du tabac',
      ],
      [
        'Traitement médicamenteux, souvent en bithérapie d’emblée',
        'Atteindre l’objectif en moins de 3 mois.',
        '- Débuter dès PA ≥ 140/90 confirmée (ou 130–139/80–89 si risque élevé après 3 mois de mesures hygiéno-diététiques)\n- Patient d’ascendance africaine : inhibiteur calcique + diurétique thiazidique, ou inhibiteur calcique + IEC/ARA2\n- Associations fixes en un comprimé pour l’observance\n- IEC/ARA2 en cas de diabète, de protéinurie ou d’insuffisance cardiaque',
      ],
      [
        'Objectifs tensionnels',
        'Réduire AVC, insuffisance cardiaque et insuffisance rénale.',
        '- ESC 2024 : PAS 120–129 mmHg si bien tolérée ; à défaut, aussi bas que raisonnablement possible\n- Au minimum < 140/90 mmHg ; individualiser chez le sujet très âgé ou fragile',
      ],
      [
        'Prise en charge du risque cardiovasculaire global',
        'Prévenir les complications athéromateuses.',
        '- Statine si risque élevé ; aspirine uniquement en prévention secondaire\n- Équilibre du diabète, néphroprotection en cas de MRC',
      ],
      [
        'Suivi et observance',
        'Maintenir le contrôle au long cours.',
        '- Titration toutes les 2 à 4 semaines, puis suivi tous les 3 à 6 mois\n- Bilan biologique annuel',
      ],
    ],
    molecules: [
      ['amlodipine', 'premiere', '1re intention, notamment chez le patient d’ascendance africaine'],
      ['hydrochlorothiazide', 'premiere', '1re intention ; à associer à l’inhibiteur calcique'],
      ['enalapril', 'deuxieme', 'Diabète, protéinurie, insuffisance cardiaque ; en bithérapie'],
      ['losartan', 'deuxieme', 'Alternative à l’IEC (toux)'],
      ['valsartan', 'alternative', 'En association fixe avec l’amlodipine'],
      ['bisoprolol', 'alternative', 'Coronaropathie, insuffisance cardiaque, fibrillation atriale'],
      ['spironolactone', 'deuxieme', 'HTA résistante (4e médicament)'],
      ['atorvastatine', 'adjuvant', 'Risque cardiovasculaire élevé'],
      ['nicardipine', 'adjuvant', 'Urgence hypertensive'],
      ['labetalol', 'adjuvant', 'Urgence hypertensive'],
    ],
    complications: [
      {
        nom: 'Urgence hypertensive',
        description:
          'PA très élevée avec atteinte aiguë d’un organe cible (encéphalopathie, OAP, AVC, dissection, insuffisance rénale).',
        traitement:
          '- Hospitalisation, antihypertenseur IV titrable (nicardipine, labétalol)\n- Baisse de la PAM ≤ 25 % la 1re heure, puis progressive sur 24–48 h\n- Objectifs propres en cas d’AVC, de dissection aortique ou d’éclampsie',
        clinique: '- PA toutes les 15 min, examen neurologique, diurèse, signes d’OAP',
        paraclinique: '- Créatinine, ionogramme, troponine, ECG, fond d’œil, bandelette urinaire',
      },
      {
        nom: 'Accident vasculaire cérébral',
        fiche: 'avc',
        description:
          'Complication la plus fréquente de l’HTA non contrôlée en Afrique subsaharienne ; part élevée d’hémorragies.',
        traitement:
          '- Voir la fiche AVC (objectifs tensionnels spécifiques)\n- Prévention secondaire : contrôle tensionnel strict',
        clinique: '- Déficit neurologique, céphalées, troubles de la conscience',
        paraclinique: '- Scanner cérébral',
      },
      {
        nom: 'Insuffisance cardiaque',
        fiche: 'insuffisance-cardiaque',
        description: 'Cardiopathie hypertensive : première cause d’insuffisance cardiaque en Afrique.',
        traitement: '- Traitement de l’insuffisance cardiaque et contrôle tensionnel',
        clinique: '- Dyspnée, œdèmes, poids',
        paraclinique: '- Échocardiographie, BNP',
      },
      {
        nom: 'Maladie rénale chronique (néphroangiosclérose)',
        description: 'Baisse progressive du DFG, protéinurie.',
        traitement:
          '- IEC ou ARA2 si albuminurie, inhibiteur SGLT2, objectif tensionnel strict\n- Éviter les néphrotoxiques (AINS)',
        clinique: '- PA, œdèmes',
        paraclinique: '- DFG et RAC annuels (tous les 3–6 mois si MRC)',
      },
      {
        nom: 'Cardiopathie ischémique',
        description: 'Angor, infarctus du myocarde.',
        traitement: '- Antiagrégant, statine, bêtabloquant ; revascularisation si indiquée',
        clinique: '- Douleur thoracique d’effort ou de repos',
        paraclinique: '- ECG, troponine en cas de douleur',
      },
      {
        nom: 'Rétinopathie hypertensive',
        description: 'Du rétrécissement artériel aux hémorragies et à l’œdème papillaire.',
        traitement: '- Contrôle tensionnel ; stade III–IV = urgence hypertensive',
        clinique: '- Acuité visuelle, troubles visuels',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si la PA est contrôlée ; chaque baisse de 10 mmHg de la PAS réduit le risque d’AVC d’environ un tiers\n- Mauvais contrôle fréquent par défaut d’observance et de suivi\n\n## Suivi\n- PA à chaque visite, automesure, bilan rénal et métabolique annuel',
    urgences: ['urgence-hypertensive', 'avc-aigu'],
    symptomes: [
      ['Céphalées', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
      ['Douleur thoracique', 'rare'],
    ],
    sources: [
      '2024 ESC Guidelines for the management of elevated blood pressure and hypertension',
      'ISH Global Hypertension Practice Guidelines',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
      "Harrison's Principles of Internal Medicine",
    ],
  },

  // =================================================================== Insuffisance cardiaque
  {
    specialite: 'Cardiologie',
    slug: 'insuffisance-cardiaque',
    nom: 'Insuffisance cardiaque',
    resume:
      'Syndrome clinique lié à une dysfonction cardiaque : diurétiques pour la congestion, 4 piliers pour la FE réduite.',
    definition:
      'Syndrome clinique associant des symptômes (dyspnée, fatigue) et/ou des signes (œdèmes, crépitants, turgescence jugulaire) liés à une anomalie structurelle ou fonctionnelle du cœur, confirmée par l’élévation des peptides natriurétiques et/ou une congestion objective (ESC 2021). On distingue l’IC à fraction d’éjection réduite (≤ 40 %), modérément réduite (41–49 %) et préservée (≥ 50 %).',
    physiopathologie:
      '## Mécanismes\n- Baisse du débit cardiaque et/ou élévation des pressions de remplissage\n- Activation neurohormonale (système rénine-angiotensine-aldostérone, sympathique) : rétention hydrosodée, vasoconstriction\n- Remodelage ventriculaire et cercle vicieux d’aggravation (cibles des traitements de fond)',
    diagnostic:
      '## Symptômes\n- Dyspnée d’effort puis de repos, orthopnée, dyspnée paroxystique nocturne, fatigue\n\n## Signes\n- Turgescence jugulaire, reflux hépato-jugulaire, galop (B3), crépitants\n- Œdèmes des membres inférieurs, hépatomégalie, ascite\n\n## Rechercher\n- La cause et le facteur déclenchant (HTA non contrôlée, infection, arrêt du traitement, sel, arythmie, anémie, grossesse)',
    examens: [
      [
        'premiere_intention',
        'bnp',
        'BNP ≥ 35 pg/mL ou NT-proBNP ≥ 125 pg/mL (chronique) ; en aigu BNP ≥ 100 ou NT-proBNP ≥ 300 pg/mL : IC probable. Une valeur normale rend l’IC peu probable.',
      ],
      [
        'premiere_intention',
        'ecg',
        'Un ECG normal rend l’IC peu probable ; rechercher FA, HVG, ondes Q, bloc de branche (QRS ≥ 130 ms).',
      ],
      [
        'confirmation',
        'echocardiographie',
        'Examen clé : FEVG (≤ 40 %, 41–49 %, ≥ 50 %), valvulopathie (rhumatismale), cardiomyopathie, péricarde, PAPS.',
      ],
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Cardiomégalie (ICT > 0,5), redistribution vasculaire, lignes de Kerley, épanchements ; éliminer une cause pulmonaire.',
      ],
      ['premiere_intention', 'nfs', 'Anémie (facteur aggravant ou cause d’IC à haut débit).'],
      [
        'pretherapeutique',
        'creatinine',
        'DFG avant et sous IEC/ARNI, antialdostérone, inhibiteur SGLT2, diurétiques.',
      ],
      ['pretherapeutique', 'ionogramme', 'Kaliémie et natrémie avant et sous traitement.'],
      ['deuxieme_intention', 'bilan-hepatique', 'Foie cardiaque (cytolyse, cholestase).'],
      ['etiologique', 'troponine', 'Suspicion de syndrome coronarien aigu ou de myocardite.'],
      ['etiologique', 'tdr-vih', 'Cardiomyopathie associée au VIH.'],
    ],
    scores: ['nyha'],
    differentiels: [
      ['asthme', 'Sibilants, réversibilité de l’obstruction, BNP normal.'],
      ['BPCO et pneumopathies', 'Tabagisme, fièvre, foyer radiologique ; BNP normal ou peu élevé.'],
      ['Syndrome néphrotique', 'Œdèmes avec protéinurie massive et hypoalbuminémie.'],
      [
        'hepatite-b-chronique',
        'Cirrhose : ascite, ictère, signes d’insuffisance hépatocellulaire ; BNP normal.',
      ],
      ['insuffisance-renale-aigue', 'Surcharge hydrosodée par oligo-anurie.'],
      ['Péricardite constrictive ou tamponnade', 'Souvent tuberculeuse en Afrique ; échocardiographie.'],
    ],
    etiologies:
      '## Causes fréquentes en Afrique subsaharienne\n- Cardiopathie hypertensive (première cause)\n- Cardiomyopathies : dilatée idiopathique, du péripartum, alcoolique, liée au VIH\n- Valvulopathies rhumatismales\n- Endomyocardiofibrose, péricardites (tuberculose)\n- Cardiopathie ischémique (en augmentation)\n\n## Facteurs déclenchants\n- Arrêt du traitement, excès de sel, infection, anémie, arythmie (FA), grossesse, AINS',
    principes: [
      [
        'Confirmer, classer et rechercher la cause',
        'Le traitement dépend de la FEVG et de la cause.',
        '- BNP, ECG, échocardiographie\n- Corriger le facteur déclenchant',
      ],
      [
        'Traiter la congestion par diurétiques de l’anse',
        'Soulager rapidement la dyspnée et les œdèmes.',
        '- Furosémide à la dose minimale efficace, adapté au poids et aux signes congestifs',
      ],
      [
        'IC à FE réduite : les 4 piliers',
        'Réduire la mortalité et les hospitalisations.',
        '- IEC (ou ARNI sacubitril-valsartan) ; ARA2 si intolérance\n- Bêtabloquant (bisoprolol)\n- Antialdostérone (spironolactone)\n- Inhibiteur SGLT2 (dapagliflozine)\n- Introduire tôt, puis augmenter les doses toutes les 1–2 semaines jusqu’aux doses cibles tolérées',
      ],
      [
        'IC à FE modérément réduite ou préservée',
        'Améliorer les symptômes et réduire les hospitalisations.',
        '- Inhibiteur SGLT2, diurétiques si congestion\n- Traiter l’HTA, la FA et les comorbidités',
      ],
      [
        'Traiter la cause',
        'Agir sur l’évolution de la maladie.',
        '- Contrôle tensionnel, chirurgie valvulaire si indiquée, prophylaxie du RAA\n- Revascularisation coronaire, anticoagulation de la FA',
      ],
      [
        'Éducation et mesures non médicamenteuses',
        'Prévenir les décompensations.',
        '- Pesée régulière (alerte si + 2 kg en 3 jours), sel modéré, activité physique adaptée\n- Vaccinations (grippe, pneumocoque), éviter les AINS',
      ],
    ],
    molecules: [
      ['furosemide', 'premiere', 'Congestion (tous types d’IC)'],
      ['enalapril', 'premiere', 'IC à FE réduite (pilier 1)'],
      ['sacubitril', 'premiere', 'Avec valsartan (ARNI) : à préférer à l’IEC si disponible et toléré'],
      ['bisoprolol', 'premiere', 'IC à FE réduite stable (pilier 2)'],
      ['spironolactone', 'premiere', 'IC à FE réduite (pilier 3)'],
      ['dapagliflozine', 'premiere', 'IC à FE réduite (pilier 4), modérément réduite et préservée'],
      ['valsartan', 'alternative', 'ARA2 si IEC non toléré ; composant de l’ARNI'],
      ['losartan', 'alternative', 'Si IEC non toléré'],
    ],
    complications: [
      {
        nom: 'Œdème aigu du poumon',
        description: 'Décompensation congestive aiguë.',
        traitement:
          '- Position assise, oxygène si SpO2 < 90 %, VNI si détresse\n- Furosémide IV, dérivés nitrés si PAS > 110 mmHg\n- Traiter le facteur déclenchant',
        clinique: '- FR, SpO2, crépitants, PA, diurèse horaire',
        paraclinique: '- Kaliémie, créatinine, radiographie thoracique, ECG',
      },
      {
        nom: 'Choc cardiogénique',
        description: 'Hypoperfusion d’organes par effondrement du débit cardiaque.',
        traitement:
          '- Réanimation : inotropes (dobutamine), noradrénaline si hypotension\n- Traiter la cause (SCA, arythmie, valvulopathie)',
        clinique: '- PA, conscience, marbrures, extrémités froides, diurèse',
        paraclinique: '- Lactates, créatinine, échocardiographie',
      },
      {
        nom: 'Fibrillation atriale',
        description: 'Fréquente ; aggrave l’IC et expose aux embolies.',
        traitement:
          '- Contrôle de la fréquence (bêtabloquant, digoxine)\n- Anticoagulation selon le risque embolique (AVK avec INR cible 2–3 si AOD indisponibles)\n- Cardioversion si instabilité',
        clinique: '- Pouls irrégulier, FC, tolérance',
        paraclinique: '- ECG, INR sous AVK',
      },
      {
        nom: 'Insuffisance rénale et hyperkaliémie sous traitement',
        description: 'Liées aux diurétiques, IEC, ARNI, antialdostérone.',
        traitement:
          '- Adapter les doses ; ne pas arrêter définitivement les traitements de fond sans avis\n- Hyperkaliémie menaçante : voir l’urgence',
        clinique: '- Diurèse, poids, déshydratation',
        paraclinique: '- Kaliémie et créatinine 1–2 semaines après chaque modification',
      },
      {
        nom: 'Complications thromboemboliques',
        description: 'AVC, embolie pulmonaire, thrombus intraventriculaire.',
        traitement: '- Anticoagulation curative si FA ou thrombus',
        clinique: '- Déficit neurologique, dyspnée brutale',
        paraclinique: '- Échocardiographie, imagerie selon l’orientation',
      },
      {
        nom: 'Troubles du rythme ventriculaire et mort subite',
        description: 'Principale cause de décès dans l’IC à FE réduite.',
        traitement:
          '- Bêtabloquant et antialdostérone (réduisent la mort subite)\n- Défibrillateur implantable si disponible et indiqué',
        clinique: '- Palpitations, syncopes',
        paraclinique: '- ECG, kaliémie, magnésémie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité élevée (≈ 50 % à 5 ans), aggravée par chaque hospitalisation\n- Le traitement optimal (4 piliers) réduit fortement la mortalité\n\n## Suivi\n- Consultation 1–2 semaines après une hospitalisation, puis régulière ; poids, PA, FC, kaliémie, créatinine',
    urgences: ['oedeme-aigu-du-poumon'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Œdèmes', 'tres_frequent'],
      ['Asthénie', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      '2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure (mise à jour 2023)',
      '2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure',
      "Harrison's Principles of Internal Medicine",
    ],
  },

  // =================================================================== Hépatite B
  {
    specialite: 'Gastro-entérologie et hépatologie',
    slug: 'hepatite-b-chronique',
    nom: 'Hépatite B chronique',
    resume:
      'AgHBs positif > 6 mois : évaluer la fibrose, traiter largement par ténofovir (OMS 2024), dépister le carcinome hépatocellulaire.',
    definition:
      'Infection par le virus de l’hépatite B définie par la persistance de l’AgHBs plus de 6 mois. La RDC est un pays de moyenne à forte endémie ; la transmission y est surtout périnatale et dans la petite enfance.',
    physiopathologie:
      '## Mécanismes\n- Virus à ADN non cytopathique : les lésions hépatiques sont dues à la réponse immunitaire\n- Persistance de l’ADN circulaire clos (cccDNA) dans les hépatocytes : guérison rarement complète\n- Phases successives : infection AgHBe+, hépatite AgHBe+, infection AgHBe− (porteur inactif), hépatite AgHBe−\n- Évolution possible vers la cirrhose et le carcinome hépatocellulaire (même sans cirrhose)',
    diagnostic:
      '## Circonstances\n- Le plus souvent asymptomatique : dépistage (femme enceinte, PVVIH, donneurs de sang, entourage d’un porteur)\n- Asthénie, signes de cirrhose (ictère, ascite, hémorragie digestive, encéphalopathie)\n\n## Évaluer\n- La phase de l’infection, l’activité, la fibrose, les co-infections',
    examens: [
      ['confirmation', 'aghbs', 'Positif à 2 reprises à plus de 6 mois d’intervalle.'],
      [
        'premiere_intention',
        'marqueurs-vhb',
        'AgHBe/anti-HBe : phase ; ADN VHB : réplication (seuil 2 000 UI/mL). Sans ADN disponible, l’OMS 2024 permet de décider sur les ALAT et la fibrose.',
      ],
      [
        'premiere_intention',
        'bilan-hepatique',
        'ALAT au-dessus de la normale (OMS 2024 : > 30 UI/L chez l’homme, > 19 UI/L chez la femme) = activité ; albumine et bilirubine = fonction hépatique.',
      ],
      [
        'premiere_intention',
        'nfs',
        'Plaquettes < 150 G/L : hypertension portale ; nécessaires au score APRI.',
      ],
      ['premiere_intention', 'hemostase', 'TP/INR : fonction hépatique (score de Child-Pugh).'],
      ['gravite', 'elastometrie-hepatique', '> 7 kPa : fibrose significative ; > 12,5 kPa : cirrhose.'],
      [
        'premiere_intention',
        'echographie-abdominale',
        'Dysmorphie hépatique, splénomégalie, ascite ; nodule suspect de carcinome.',
      ],
      ['etiologique', 'serologies-hepatites', 'Co-infection VHD (formes sévères) et VHC.'],
      [
        'etiologique',
        'tdr-vih',
        'Co-infection VIH : schéma antirétroviral contenant ténofovir + lamivudine.',
      ],
      ['pretherapeutique', 'creatinine', 'DFG avant ténofovir.'],
      [
        'suivi',
        'alpha-foetoproteine',
        'Avec l’échographie tous les 6 mois : surveillance du carcinome hépatocellulaire (cirrhose, antécédent familial, âge selon le terrain).',
      ],
      [
        'suivi',
        'echographie-abdominale',
        'Tous les 6 mois chez les patients à risque de carcinome hépatocellulaire.',
      ],
    ],
    scores: ['apri', 'child-pugh'],
    differentiels: [
      ['Hépatite C chronique', 'Anti-VHC positif ; ARN VHC.'],
      [
        'Hépatopathie alcoolique ou métabolique',
        'Consommation d’alcool, syndrome métabolique ; AgHBs négatif.',
      ],
      [
        'Hépatite médicamenteuse ou toxique',
        'Antituberculeux, antirétroviraux, plantes médicinales traditionnelles.',
      ],
      [
        'Schistosomiase hépatosplénique',
        'Hypertension portale avec fonction hépatique conservée ; zones d’endémie ; œufs dans les selles, échographie (fibrose périportale).',
      ],
      ['Hépatite D (delta)', 'Surinfection d’un porteur de l’AgHBs : aggravation brutale ; anti-VHD.'],
      ['insuffisance-cardiaque', 'Foie cardiaque : hépatomégalie douloureuse, turgescence jugulaire.'],
    ],
    etiologies:
      '## Transmission\n- Mère-enfant (périnatale) : risque de chronicité ≈ 90 % chez le nouveau-né\n- Horizontale dans l’enfance (intrafamiliale)\n- Sexuelle, sanguine (injections, scarifications, transfusions non sécurisées)\n\n## Facteurs aggravants\n- Alcool, co-infections VIH/VHD/VHC, aflatoxines, sexe masculin, âge',
    principes: [
      [
        'Évaluer la phase et la fibrose',
        'Identifier les patients à traiter.',
        '- ADN VHB, ALAT, AgHBe\n- Fibrose : élastométrie ou score APRI (accessible partout)',
      ],
      [
        'Indications de traitement élargies (OMS 2024)',
        'Traiter tous ceux qui en bénéficient.',
        '- Fibrose significative (APRI > 0,5 ou élastométrie > 7 kPa) ou cirrhose, quels que soient l’ADN et les ALAT\n- ADN > 2 000 UI/mL avec ALAT élevées\n- Co-infection VIH, VHD ou VHC, antécédent familial de carcinome ou de cirrhose, immunosuppression, manifestations extra-hépatiques\n- Sans ADN disponible : ALAT persistantement élevées',
      ],
      [
        'Traitement antiviral au long cours',
        'Supprimer la réplication et prévenir cirrhose et carcinome.',
        '- Ténofovir disoproxil 300 mg/j (1re intention, y compris pendant la grossesse)\n- Entécavir 0,5 mg/j en alternative (atteinte rénale ou osseuse, enfant)\n- Traitement le plus souvent à vie ; ne jamais l’arrêter brutalement',
      ],
      [
        'Prévention de la transmission mère-enfant',
        'Éliminer la transmission périnatale.',
        '- Dépistage de l’AgHBs chez toute femme enceinte\n- Ténofovir à partir du 2e–3e trimestre si ADN ≥ 200 000 UI/mL ou AgHBe+ (ou chez toutes les porteuses si ces tests sont indisponibles)\n- Vaccin anti-hépatite B chez le nouveau-né dans les 24 h (± immunoglobulines)',
      ],
      [
        'Mesures générales',
        'Limiter la progression et protéger l’entourage.',
        '- Arrêt de l’alcool, éviter les hépatotoxiques\n- Dépistage et vaccination de l’entourage et des partenaires',
      ],
      [
        'Surveillance de la cirrhose et du carcinome',
        'Dépister tôt les complications curables.',
        '- Échographie ± AFP tous les 6 mois chez les patients à risque\n- ALAT et ADN régulièrement, créatinine sous ténofovir',
      ],
    ],
    molecules: [
      [
        'tenofovir-disoproxil',
        'premiere',
        '1re intention, y compris grossesse et prévention de la transmission mère-enfant',
      ],
      ['entecavir', 'premiere', 'Alternative, notamment si atteinte rénale ou osseuse'],
      ['lamivudine', 'adjuvant', 'Uniquement en association au ténofovir chez le co-infecté VIH'],
      ['spironolactone', 'adjuvant', 'Ascite (cirrhose)'],
      ['furosemide', 'adjuvant', 'Ascite (avec la spironolactone)'],
      [
        'ceftriaxone',
        'adjuvant',
        'Prophylaxie infectieuse au cours d’une hémorragie digestive du cirrhotique',
      ],
    ],
    complications: [
      {
        nom: 'Cirrhose décompensée — ascite',
        description: 'Rétention hydrosodée liée à l’hypertension portale.',
        traitement:
          '- Restriction sodée modérée, spironolactone ± furosémide\n- Ponction évacuatrice (avec albumine si > 5 L)\n- Antiviral sans délai',
        clinique: '- Poids, périmètre abdominal, diurèse, signes d’encéphalopathie',
        paraclinique:
          '- Natrémie, kaliémie, créatinine, albumine, score de Child-Pugh ; ponction d’ascite si fièvre (infection du liquide)',
      },
      {
        nom: 'Hémorragie digestive par hypertension portale',
        description: 'Rupture de varices œsophagiennes ou gastriques ; mortalité élevée.',
        traitement:
          '- Remplissage prudent, transfusion restrictive (Hb cible 7–8 g/dL)\n- Antibioprophylaxie (ceftriaxone), vasoactif (octréotide ou terlipressine)\n- Endoscopie avec ligature dans les 12 h\n- Prophylaxie secondaire : bêtabloquant non sélectif + ligatures',
        clinique: '- Hématémèse, méléna, PA, FC, conscience',
        paraclinique: '- Hémoglobine, endoscopie',
      },
      {
        nom: 'Encéphalopathie hépatique',
        description: 'Confusion, astérixis, coma.',
        traitement:
          '- Traiter le facteur déclenchant (hémorragie, infection, constipation, sédatifs)\n- Lactulose ; rifaximine si récidive',
        clinique: '- Conscience, astérixis, transit',
        paraclinique: '- Glycémie, ionogramme, recherche d’infection',
      },
      {
        nom: 'Carcinome hépatocellulaire',
        description:
          'Peut survenir sans cirrhose chez le porteur du VHB ; souvent découvert tardivement en Afrique.',
        traitement: '- Selon le stade : résection, ablation percutanée, traitements palliatifs',
        clinique: '- Altération de l’état général, douleur de l’hypocondre droit, masse',
        paraclinique: '- Échographie et AFP tous les 6 mois ; scanner si nodule',
      },
      {
        nom: 'Réactivation virale',
        description:
          'Poussée lors d’une immunosuppression (chimiothérapie, corticoïdes) ou à l’arrêt de l’antiviral.',
        traitement: '- Antiviral curatif ; prophylaxie avant toute immunosuppression',
        clinique: '- Ictère, asthénie',
        paraclinique: '- ALAT, ADN VHB, TP',
      },
    ],
    evolution:
      '## Évolution\n- Sans traitement : cirrhose chez 20 à 30 % des patients à hépatite active, carcinome hépatocellulaire\n- Sous antiviral : suppression virale chez la grande majorité, régression de la fibrose, baisse du risque de carcinome (sans le supprimer)\n\n## Suivi\n- ALAT et ADN tous les 6–12 mois, créatinine, dépistage du carcinome selon le risque',
    urgences: [],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'Guidelines for the prevention, diagnosis, care and treatment of people with chronic hepatitis B infection',
      'EASL Clinical Practice Guidelines on the management of hepatitis B virus infection',
      'Update on Prevention, Diagnosis, and Treatment of Chronic Hepatitis B: AASLD 2018 Hepatitis B Guidance',
    ],
  },

  // =================================================================== IRA
  {
    specialite: 'Néphrologie',
    slug: 'insuffisance-renale-aigue',
    nom: 'Insuffisance rénale aiguë',
    resume:
      'Baisse brutale de la fonction rénale (KDIGO) : chercher l’obstacle, corriger l’hypovolémie, traiter l’hyperkaliémie.',
    definition:
      'Baisse rapide de la fonction rénale définie par KDIGO : augmentation de la créatinine ≥ 26,5 µmol/L (0,3 mg/dL) en 48 h, ou ≥ 1,5 fois la valeur de base dans les 7 jours, ou diurèse < 0,5 mL/kg/h pendant 6 h.',
    physiopathologie:
      '## Trois mécanismes\n- **Prérénale (fonctionnelle)** : hypoperfusion rénale (déshydratation, hémorragie, choc, insuffisance cardiaque)\n- **Rénale (organique)** : nécrose tubulaire aiguë (ischémie prolongée, toxiques), néphrite interstitielle, glomérulonéphrite, atteinte vasculaire\n- **Postrénale (obstructive)** : obstacle sur les voies urinaires',
    diagnostic:
      '## Clinique\n- Oligurie ou anurie (parfois diurèse conservée)\n- Signes de surcharge (œdèmes, OAP) ou de déshydratation\n- Signes d’urémie : nausées, confusion, péricardite\n\n## Rechercher\n- Le contexte : diarrhée, sepsis, paludisme grave, médicaments, plantes, accouchement compliqué\n- Un globe vésical, un obstacle pelvien',
    examens: [
      [
        'confirmation',
        'creatinine',
        'Élévation ≥ 26,5 µmol/L en 48 h ou ≥ 1,5 × la valeur de base : définit et stadifie l’IRA (KDIGO).',
      ],
      [
        'premiere_intention',
        'uree',
        'Rapport urée (mmol/L) × 1 000 / créatinine (µmol/L) > 100 : orientation prérénale.',
      ],
      [
        'gravite',
        'ionogramme',
        'Hyperkaliémie (≥ 6,5 mmol/L = urgence), bicarbonates < 15 mmol/L (acidose), dysnatrémies.',
      ],
      [
        'gravite',
        'gaz-du-sang',
        'Acidose métabolique sévère (pH < 7,15) : indication d’épuration extrarénale.',
      ],
      ['gravite', 'ecg', 'Signes d’hyperkaliémie : ondes T pointues, élargissement du QRS, bradycardie.'],
      [
        'premiere_intention',
        'bandelette-urinaire',
        'Protéinurie et hématurie (glomérulonéphrite), leucocytes/nitrites (infection) ; normale si cause prérénale ou obstructive.',
      ],
      ['etiologique', 'proteinurie', 'Protéinurie > 1 g/24 h ou RPC élevé : atteinte glomérulaire.'],
      [
        'premiere_intention',
        'echographie-renale',
        'Éliminer un obstacle (dilatation des cavités) ; taille des reins (petits reins = maladie chronique).',
      ],
      [
        'etiologique',
        'nfs',
        'Anémie, schizocytes et thrombopénie (microangiopathie thrombotique), éosinophilie (néphrite interstitielle).',
      ],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave, cause fréquente d’IRA en zone d’endémie.'],
      [
        'suivi',
        'creatinine',
        'Quotidienne jusqu’à la récupération ; contrôle à 3 mois (passage à la chronicité).',
      ],
    ],
    scores: ['kdigo-ira', 'clairance-creatinine'],
    differentiels: [
      [
        'Maladie rénale chronique',
        'Petits reins, anémie, hypocalcémie, antécédents ; créatinine anciennement élevée.',
      ],
      [
        'Élévation de la créatinine sans IRA',
        'Triméthoprime, dolutégravir, cimétidine (sécrétion tubulaire), forte masse musculaire.',
      ],
      ['IRA sur maladie rénale chronique', 'Aggravation aiguë d’une MRC connue.'],
      ['pre-eclampsie-severe', 'Grossesse > 20 SA avec HTA : IRA de la pré-éclampsie ou du HELLP.'],
      ['Rhabdomyolyse', 'Traumatisme, crush, convulsions prolongées ; urines foncées, CPK très élevées.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Déshydratation (diarrhées, choléra), sepsis, paludisme grave\n- Néphrotoxiques : AINS, aminosides, produits de contraste, plantes médicinales traditionnelles\n- Causes obstétricales : hémorragie du post-partum, pré-éclampsie, sepsis post-abortum\n- Hémolyse (déficit en G6PD, paludisme), rhabdomyolyse\n- Obstacles : hypertrophie ou cancer de la prostate, cancers pelviens, schistosomiase urinaire',
    principes: [
      [
        'Reconnaître, stadifier et dépister les urgences vitales',
        'Traiter d’abord ce qui menace la vie.',
        '- Hyperkaliémie, OAP, acidose sévère, encéphalopathie urémique\n- Stade KDIGO',
      ],
      [
        'Identifier et traiter la cause',
        'Lever ce qui est réversible.',
        '- Prérénale : remplissage (cristalloïdes) si hypovolémie\n- Obstructive : sonde urinaire, néphrostomie\n- Rénale : traiter le sepsis, le paludisme, arrêter les toxiques',
      ],
      [
        'Optimiser l’hémodynamique et l’équilibre hydrique',
        'Préserver la perfusion rénale sans surcharger.',
        '- Bilan entrées-sorties, poids quotidien\n- Diurétiques seulement en cas de surcharge (ils ne « relancent » pas la fonction rénale)',
      ],
      [
        'Arrêter les néphrotoxiques et adapter les posologies',
        'Éviter d’aggraver les lésions.',
        '- Suspendre AINS, IEC/ARA2, metformine, aminosides si possible\n- Adapter les doses à la clairance',
      ],
      [
        'Épuration extrarénale si indication',
        'Suppléer le rein en cas d’échec du traitement médical.',
        '- Hyperkaliémie, acidose ou surcharge réfractaires, intoxication, complications urémiques\n- La dialyse péritonéale est une option en contexte de ressources limitées',
      ],
      [
        'Suivi de la récupération',
        'Dépister le passage à la chronicité.',
        '- Créatinine, PA et protéinurie à 3 mois',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage si cause prérénale (hypovolémie)'],
      ['ringer-lactate', 'alternative', 'Remplissage (prudence si hyperkaliémie sévère)'],
      ['furosemide', 'adjuvant', 'Surcharge hydrique uniquement'],
      ['gluconate-de-calcium', 'adjuvant', 'Hyperkaliémie avec signes ECG'],
      ['insuline-humaine-rapide', 'adjuvant', 'Hyperkaliémie (avec glucose)'],
      ['glucose-10', 'adjuvant', 'Avec l’insuline (hyperkaliémie)'],
      ['salbutamol', 'adjuvant', 'Hyperkaliémie (nébulisation)'],
    ],
    complications: [
      {
        nom: 'Hyperkaliémie',
        description: 'Risque de troubles du rythme et d’arrêt cardiaque.',
        traitement:
          '- Gluconate de calcium si signes ECG\n- Insuline + glucose, salbutamol nébulisé\n- Furosémide si diurèse conservée ; dialyse si réfractaire\n- Arrêt des apports et médicaments hyperkaliémiants',
        clinique: '- Faiblesse musculaire, pouls (bradycardie)',
        paraclinique: '- Kaliémie toutes les 4–6 h, ECG',
      },
      {
        nom: 'Surcharge hydrique et OAP',
        description: 'Liée à l’oligurie et aux apports excessifs.',
        traitement: '- Restriction hydrosodée, furosémide à forte dose\n- Dialyse si échec',
        clinique: '- Poids quotidien, FR, crépitants, œdèmes, bilan entrées-sorties',
        paraclinique: '- SpO2, radiographie thoracique',
      },
      {
        nom: 'Acidose métabolique',
        description: 'Défaut d’excrétion des acides.',
        traitement: '- Bicarbonate de sodium si pH < 7,2 sans surcharge\n- Dialyse si sévère',
        clinique: '- Polypnée (respiration de Kussmaul)',
        paraclinique: '- Bicarbonates, gaz du sang',
      },
      {
        nom: 'Syndrome urémique',
        description: 'Encéphalopathie, péricardite, saignements.',
        traitement: '- Épuration extrarénale',
        clinique: '- Conscience, frottement péricardique, saignements',
        paraclinique: '- Urée, échocardiographie si suspicion de péricardite',
      },
      {
        nom: 'Dysnatrémies',
        description: 'Hyponatrémie par surcharge en eau libre, hypernatrémie par déshydratation.',
        traitement: '- Adapter les apports en eau et en sodium ; correction progressive',
        clinique: '- Conscience, convulsions',
        paraclinique: '- Natrémie quotidienne',
      },
      {
        nom: 'Passage à la maladie rénale chronique',
        description:
          'Récupération incomplète, surtout après nécrose tubulaire sévère ou atteinte glomérulaire.',
        traitement:
          '- Néphroprotection : contrôle tensionnel, IEC/ARA2 si protéinurie, éviction des néphrotoxiques',
        clinique: '- PA, œdèmes',
        paraclinique: '- Créatinine (DFG) et protéinurie à 3 mois',
      },
    ],
    evolution:
      '## Pronostic\n- Récupération fréquente des IRA prérénales corrigées tôt\n- Mortalité élevée si IRA sévère dans un contexte de sepsis ou sans accès à la dialyse\n\n## Suivi\n- Toute IRA expose à une maladie rénale chronique : contrôle à 3 mois',
    urgences: ['hyperkaliemie-menacante'],
    symptomes: [
      ['Oligurie', 'tres_frequent'],
      ['Œdèmes', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Troubles de la conscience', 'rare'],
    ],
    sources: [
      'KDIGO Clinical Practice Guideline for Acute Kidney Injury',
      'KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of Chronic Kidney Disease',
      "Harrison's Principles of Internal Medicine",
    ],
  },

  // =================================================================== Diabète de type 2
  {
    specialite: 'Endocrinologie et diabétologie',
    slug: 'diabete-type-2',
    nom: 'Diabète de type 2',
    resume:
      'Hyperglycémie chronique par insulinorésistance : metformine en 1re intention, protection cardio-rénale, dépistage des complications.',
    definition:
      'Hyperglycémie chronique liée à une insulinorésistance et à un déficit progressif de l’insulinosécrétion. Critères ADA : glycémie à jeun ≥ 1,26 g/L (7,0 mmol/L) à 2 reprises, HbA1c ≥ 6,5 %, glycémie 2 h après HGPO ≥ 2,00 g/L, ou glycémie aléatoire ≥ 2,00 g/L (11,1 mmol/L) avec symptômes.',
    physiopathologie:
      '## Mécanismes\n- Insulinorésistance (muscle, foie, tissu adipeux), favorisée par l’obésité abdominale et la sédentarité\n- Déclin progressif de la fonction des cellules bêta\n- En Afrique : formes atypiques fréquentes, dont le diabète cétosique (« ketosis-prone ») révélé par une cétose chez un sujet de phénotype type 2',
    diagnostic:
      '## Circonstances\n- Souvent asymptomatique (dépistage) ou syndrome polyuro-polydipsique, amaigrissement\n- Infections à répétition, complications révélatrices (plaie du pied, troubles visuels, AVC)\n\n## Bilan initial\n- Poids, tour de taille, PA, examen des pieds, recherche des complications',
    examens: [
      [
        'confirmation',
        'glycemie',
        '≥ 1,26 g/L (7,0 mmol/L) à jeun à 2 reprises, ou ≥ 2,00 g/L (11,1 mmol/L) à tout moment avec symptômes.',
      ],
      [
        'confirmation',
        'hba1c',
        '≥ 6,5 % (méthode standardisée, en l’absence d’hémoglobinopathie ou d’anémie). Objectif sous traitement : < 7 % en général.',
      ],
      [
        'premiere_intention',
        'cetonemie',
        'Au diagnostic si amaigrissement ou glycémie très élevée : cétose (diabète cétosique, type 1).',
      ],
      ['pretherapeutique', 'creatinine', 'DFG : choix et dose de la metformine et des inhibiteurs SGLT2.'],
      ['premiere_intention', 'microalbuminurie', 'Dépistage annuel de la néphropathie diabétique.'],
      ['premiere_intention', 'bilan-lipidique', 'Risque cardiovasculaire, indication de statine.'],
      ['premiere_intention', 'ecg', 'Ischémie silencieuse, HVG.'],
      ['premiere_intention', 'fond-d-oeil', 'Rétinopathie diabétique : au diagnostic puis tous les 1–2 ans.'],
      ['suivi', 'hba1c', 'Tous les 3 mois jusqu’à l’objectif, puis tous les 6 mois.'],
    ],
    scores: ['imc', 'ckd-epi'],
    differentiels: [
      ['Diabète de type 1', 'Sujet jeune, mince, cétose ; auto-anticorps, insulinodépendance.'],
      [
        'Diabète cétosique de type africain',
        'Phénotype type 2 révélé par une cétose ; rémission possible sous insuline.',
      ],
      [
        'Diabète secondaire',
        'Pancréatite chronique (diabète tropical fibrocalculeux), corticothérapie, hémochromatose.',
      ],
      ['Diabète gestationnel', 'Découvert pendant la grossesse.'],
      ['Hyperglycémie de stress', 'Infection, sepsis, infarctus ; HbA1c normale.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Surpoids et obésité abdominale, sédentarité, alimentation riche en sucres et graisses\n- Antécédents familiaux, âge, diabète gestationnel antérieur\n- Urbanisation rapide, malnutrition fœtale (hypothèse de l’« origine développementale »)',
    principes: [
      [
        'Éducation thérapeutique et mesures hygiéno-diététiques',
        'Rendre le patient acteur et améliorer la glycémie.',
        '- Alimentation équilibrée, réduction des sucres rapides et des boissons sucrées\n- Activité physique ≥ 150 min/semaine, perte de poids, arrêt du tabac\n- Autosurveillance si insuline, reconnaissance des hypoglycémies',
      ],
      [
        'Metformine en 1re intention',
        'Baisser la glycémie sans hypoglycémie ni prise de poids.',
        '- Débuter à 500 mg/j au repas, augmenter progressivement jusqu’à 2 g/j selon la tolérance et le DFG',
      ],
      [
        'Intensifier selon le profil du patient',
        'Atteindre l’objectif et protéger le cœur et les reins.',
        '- Maladie cardiovasculaire, insuffisance cardiaque ou rénale : inhibiteur SGLT2 (ou agoniste du GLP-1) indépendamment de l’HbA1c\n- Sinon, option accessible : sulfamide (gliclazide)\n- Insuline basale si HbA1c > 10 %, glycémie ≥ 3 g/L, signes cataboliques ou échec',
      ],
      [
        'Objectifs individualisés',
        'Équilibrer bénéfice et risque d’hypoglycémie.',
        '- HbA1c < 7 % pour la plupart ; < 8 % chez le sujet âgé ou fragile\n- PA < 130/80 mmHg ; LDL selon le risque',
      ],
      [
        'Protection cardiovasculaire et rénale',
        'Réduire les complications.',
        '- Statine (40–75 ans), IEC/ARA2 si HTA ou albuminurie\n- Aspirine en prévention secondaire uniquement',
      ],
      [
        'Dépister chaque année les complications',
        'Agir avant le stade irréversible.',
        '- Yeux (fond d’œil), reins (DFG, albuminurie), pieds (monofilament, pouls), cœur (ECG)\n- Vaccinations',
      ],
    ],
    molecules: [
      ['metformine', 'premiere', '1re intention sauf contre-indication'],
      ['gliclazide', 'deuxieme', 'Bithérapie accessible'],
      ['dapagliflozine', 'deuxieme', 'Atteinte cardiovasculaire, insuffisance cardiaque ou rénale'],
      ['insuline-nph', 'deuxieme', 'Insulinothérapie basale'],
      ['insuline-glargine', 'alternative', 'Insuline basale (analogue)'],
      ['insuline-humaine-rapide', 'adjuvant', 'Décompensation aiguë, schéma basal-bolus'],
      ['atorvastatine', 'adjuvant', 'Prévention cardiovasculaire (40–75 ans)'],
      ['enalapril', 'adjuvant', 'HTA ou albuminurie'],
      ['acide-acetylsalicylique', 'adjuvant', 'Prévention secondaire uniquement'],
    ],
    complications: [
      {
        nom: 'Acidocétose diabétique',
        description:
          'Carence en insuline : hyperglycémie, cétose, acidose. Possible dans le diabète cétosique africain.',
        traitement:
          '- NaCl 0,9 % (1 L la 1re heure chez l’adulte), puis selon l’état d’hydratation\n- Potassium avant/avec l’insuline selon la kaliémie\n- Insuline rapide IV 0,1 UI/kg/h ; glucosé dès glycémie < 2,5 g/L\n- Traiter le facteur déclenchant',
        clinique: '- Conscience, hydratation, respiration de Kussmaul, diurèse toutes les heures',
        paraclinique: '- Glycémie horaire, kaliémie toutes les 2–4 h, cétonémie, bicarbonates/pH',
      },
      {
        nom: 'État hyperglycémique hyperosmolaire',
        description:
          'Sujet âgé : glycémie très élevée, déshydratation massive, troubles de la conscience, sans cétose importante.',
        traitement:
          '- Réhydratation prudente au NaCl 0,9 %\n- Insuline à faible dose après le début de la réhydratation\n- Prévention thromboembolique',
        clinique: '- Conscience, hydratation, diurèse',
        paraclinique: '- Glycémie, natrémie corrigée, osmolalité, créatinine',
      },
      {
        nom: 'Hypoglycémie',
        description: 'Sous sulfamides ou insuline ; prolongée sous sulfamide.',
        traitement:
          '- Patient conscient : 15 g de sucre per os, contrôle à 15 min\n- Inconscient : glucosé 30 % IV ou glucagon ; perfusion glucosée\n- Hospitaliser si hypoglycémie sous sulfamide (récidive)',
        clinique: '- Sueurs, tremblements, confusion, convulsions',
        paraclinique: '- Glycémie capillaire',
      },
      {
        nom: 'Pied diabétique',
        description:
          'Neuropathie et artériopathie : ulcère, infection, gangrène ; première cause d’amputation non traumatique.',
        traitement:
          '- Décharge, débridement, soins locaux\n- Antibiothérapie si infection (amoxicilline-acide clavulanique)\n- Revascularisation si ischémie ; amputation en dernier recours',
        clinique: '- Inspection quotidienne des pieds, sensibilité (monofilament), pouls pédieux, chaussage',
        paraclinique: '- Radiographie (ostéite), prélèvements bactériologiques profonds',
      },
      {
        nom: 'Néphropathie diabétique',
        description: 'Albuminurie puis baisse du DFG.',
        traitement: '- IEC/ARA2, inhibiteur SGLT2, contrôle tensionnel et glycémique',
        clinique: '- PA, œdèmes',
        paraclinique: '- DFG et RAC annuels',
      },
      {
        nom: 'Rétinopathie diabétique',
        description: 'Première cause de cécité évitable chez l’adulte actif.',
        traitement: '- Équilibre glycémique et tensionnel ; laser ou anti-VEGF',
        clinique: '- Acuité visuelle',
        paraclinique: '- Fond d’œil annuel (ou tous les 2 ans si normal)',
      },
      {
        nom: 'Complications cardiovasculaires',
        fiche: 'avc',
        description: 'Infarctus, AVC, artériopathie des membres inférieurs.',
        traitement:
          '- Prévention : statine, contrôle tensionnel, inhibiteur SGLT2 si maladie cardiovasculaire\n- Traitement spécifique de l’événement',
        clinique: '- Douleur thoracique, déficit neurologique, claudication',
        paraclinique: '- ECG annuel, bilan lipidique',
      },
    ],
    evolution:
      '## Évolution\n- Maladie chronique et progressive : intensification du traitement souvent nécessaire avec le temps\n- Les complications sont évitables ou retardées par un bon contrôle glycémique, tensionnel et lipidique\n\n## Suivi\n- Tous les 3 mois (HbA1c, poids, PA, pieds) ; bilan annuel des complications',
    urgences: ['acidocetose-diabetique-urgence'],
    symptomes: [
      ['Polyurie-polydipsie', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Perte de poids', 'occasionnel'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: [
      'ADA — Standards of Care in Diabetes',
      'Hyperglycemic Crises in Adults With Diabetes: A Consensus Report',
      'WHO package of essential noncommunicable (PEN) disease interventions for primary health care',
    ],
  },

  // =================================================================== Drépanocytose
  {
    specialite: 'Hématologie',
    slug: 'drepanocytose',
    nom: 'Drépanocytose',
    resume:
      'Hémoglobinopathie S : prévention des infections, hydroxyurée dès 9 mois, prise en charge rapide des crises et des complications.',
    definition:
      'Maladie génétique autosomique récessive due à une mutation du gène de la β-globine (HbS). Les syndromes drépanocytaires majeurs regroupent l’homozygotie SS, les doubles hétérozygoties SC et S-β-thalassémie. La RDC est parmi les pays au plus grand nombre de naissances d’enfants drépanocytaires au monde.',
    physiopathologie:
      '## Mécanismes\n- Polymérisation de l’HbS désoxygénée → déformation des hématies en faucille\n- Vaso-occlusion (crises douloureuses, infarctus d’organes)\n- Hémolyse chronique (anémie, ictère, lithiase, vasculopathie)\n- Asplénie fonctionnelle précoce : infections graves à pneumocoque et salmonelles',
    diagnostic:
      '## Clinique\n- Dès 6 mois : syndrome pieds-mains (dactylite), pâleur, ictère, splénomégalie chez le jeune enfant\n- Crises douloureuses osseuses, abdominales, thoraciques\n- Infections sévères et répétées, retard de croissance\n\n## Dépistage\n- Néonatal par test rapide, confirmé par électrophorèse',
    examens: [
      [
        'confirmation',
        'electrophorese-hb',
        'SS : HbS > 80 %, HbA absente, HbF variable ; SC : HbS ≈ HbC ; AS : porteur sain.',
      ],
      [
        'presomption',
        'test-rapide-drepanocytose',
        'Dépistage néonatal ou au lit : profil SS ou SC à confirmer.',
      ],
      [
        'premiere_intention',
        'nfs',
        'Anémie normocytaire 6–9 g/dL à l’état basal (SS) : noter l’Hb de base ; hyperleucocytose fréquente.',
      ],
      [
        'premiere_intention',
        'reticulocytes',
        'Élevés (hémolyse) ; effondrés = érythroblastopénie (parvovirus B19).',
      ],
      ['premiere_intention', 'bilan-hepatique', 'Bilirubine libre élevée (hémolyse).'],
      [
        'gravite',
        'oxymetrie-de-pouls',
        'SpO2 < 95 % ou baisse ≥ 3 % par rapport à la valeur de base : alerte (syndrome thoracique).',
      ],
      [
        'gravite',
        'radiographie-thoracique',
        'Syndrome thoracique aigu : nouvel infiltrat avec fièvre et/ou signes respiratoires.',
      ],
      ['gravite', 'hemocultures', 'Fièvre ≥ 38,5 °C : risque de sepsis à pneumocoque ou à salmonelle.'],
      ['gravite', 'tdr-paludisme', 'Le paludisme déclenche des crises : TDR systématique en cas de fièvre.'],
      [
        'pretherapeutique',
        'groupage-rai',
        'Phénotype érythrocytaire étendu avant transfusion (prévention de l’allo-immunisation).',
      ],
      ['suivi', 'doppler-transcranien', 'Annuel de 2 à 16 ans : ≥ 200 cm/s = risque élevé d’AVC.'],
      ['suivi', 'microalbuminurie', 'Néphropathie drépanocytaire : dépistage annuel dès l’enfance.'],
      ['suivi', 'echocardiographie', 'Hypertension pulmonaire (adolescent et adulte).'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      [
        'paludisme-grave',
        'Fièvre, anémie, ictère : le paludisme est aussi un déclencheur fréquent de crise.',
      ],
      [
        'Ostéomyélite (salmonelle, staphylocoque)',
        'Fièvre persistante, douleur localisée fixe ; distinction difficile avec l’infarctus osseux (imagerie, hémocultures).',
      ],
      [
        'appendicite-aigue',
        'Douleur abdominale fébrile : crise abdominale vaso-occlusive ou urgence chirurgicale.',
      ],
      ['Rhumatisme articulaire aigu', 'Polyarthrite migratrice, cardite ; ASLO.'],
      [
        'Autres anémies hémolytiques',
        'Thalassémies, déficit en G6PD, sphérocytose ; électrophorèse normale pour l’HbS.',
      ],
    ],
    etiologies:
      '## Génétique\n- Transmission autosomique récessive : deux parents AS ont 25 % de risque d’enfant SS à chaque grossesse\n\n## Facteurs déclenchants des crises\n- Infections (paludisme, pneumocoque), déshydratation, froid, effort intense, altitude, stress, grossesse',
    principes: [
      [
        'Dépistage néonatal et éducation des familles',
        'Réduire la mortalité des 5 premières années.',
        '- Signes d’alerte : fièvre, pâleur brutale, augmentation de la rate, douleur thoracique, déficit neurologique\n- Hydratation, éviter le froid, apprendre aux parents à palper la rate',
      ],
      [
        'Prévention des infections',
        'Éviter sepsis et méningites.',
        '- Pénicilline V dès 2–3 mois jusqu’à au moins 5 ans\n- Vaccinations : pneumocoque (conjugué puis polysaccharidique ≥ 2 ans), Hib, méningocoque, hépatite B\n- Prévention du paludisme selon le protocole national, moustiquaire',
      ],
      [
        'Hydroxyurée pour tous dès 9 mois',
        'Réduire les crises, les syndromes thoraciques, les transfusions et la mortalité.',
        '- Recommandée par l’ASH et le NHLBI ; efficacité et sécurité confirmées en Afrique (essai REACH, auquel la RDC a participé)\n- Débuter à 15–20 mg/kg/j, titrer jusqu’à la dose maximale tolérée',
      ],
      [
        'Acide folique et nutrition',
        'Compenser l’hémolyse chronique.',
        '- Acide folique au long cours, suivi de la croissance',
      ],
      [
        'Traitement de la crise vaso-occlusive',
        'Soulager vite et prévenir le syndrome thoracique.',
        '- Antalgie évaluée et administrée dans l’heure : paracétamol, AINS (si fonction rénale normale), morphine si douleur intense\n- Hydratation, oxygène si SpO2 < 95 %, spirométrie incitative\n- Rechercher et traiter le facteur déclenchant',
      ],
      [
        'Prévention de l’AVC et suivi spécialisé',
        'Dépister les atteintes d’organes avant qu’elles soient irréversibles.',
        '- Doppler transcrânien annuel de 2 à 16 ans ; programme transfusionnel ou hydroxyurée si anormal\n- Bilan annuel : rein, cœur, yeux, hanches',
      ],
    ],
    molecules: [
      ['hydroxycarbamide', 'premiere', 'Traitement de fond dès 9 mois'],
      ['phenoxymethylpenicilline', 'premiere', 'Prophylaxie antipneumococcique jusqu’à 5 ans au moins'],
      ['acide-folique', 'adjuvant', 'Hémolyse chronique'],
      ['paracetamol', 'premiere', 'Crise douloureuse (palier 1)'],
      ['ibuprofene', 'deuxieme', 'Crise douloureuse si fonction rénale normale et pas de déshydratation'],
      ['morphine', 'deuxieme', 'Crise hyperalgique'],
      ['ceftriaxone', 'adjuvant', 'Fièvre ≥ 38,5 °C, syndrome thoracique aigu'],
      ['azithromycine', 'adjuvant', 'Syndrome thoracique aigu (germes atypiques)'],
    ],
    complications: [
      {
        nom: 'Syndrome thoracique aigu',
        description:
          'Première cause de décès chez l’adulte drépanocytaire : douleur thoracique, fièvre, hypoxie, infiltrat.',
        traitement:
          '- Oxygène, antalgie, spirométrie incitative\n- Antibiothérapie (ceftriaxone + macrolide)\n- Transfusion simple, ou échange transfusionnel si forme sévère',
        clinique: '- FR, SpO2, douleur thoracique, auscultation toutes les 2–4 h',
        paraclinique: '- Radiographie thoracique, hémoglobine, gaz du sang si hypoxie',
      },
      {
        nom: 'Séquestration splénique aiguë',
        description: 'Augmentation brutale de la rate et chute de l’Hb chez le jeune enfant ; choc possible.',
        traitement:
          '- Remplissage, transfusion prudente par petits volumes (la rate relargue les hématies)\n- Splénectomie après récidive',
        clinique: '- Taille de la rate (marquer le bord au stylo), pâleur, signes de choc',
        paraclinique: '- Hémoglobine toutes les 4–6 h, réticulocytes',
      },
      {
        nom: 'Accident vasculaire cérébral',
        fiche: 'avc',
        description: 'Surtout chez l’enfant ; récidive fréquente sans prévention.',
        traitement:
          '- Échange transfusionnel en urgence (HbS < 30 %), puis programme transfusionnel ou hydroxyurée',
        clinique: '- Déficit moteur, troubles du langage, convulsions',
        paraclinique: '- Imagerie cérébrale, taux d’HbS',
      },
      {
        nom: 'Infections graves',
        description: 'Sepsis et méningite à pneumocoque, ostéomyélite à salmonelle.',
        traitement: '- Ceftriaxone en urgence si fièvre ≥ 38,5 °C après prélèvements',
        clinique: '- Température, état hémodynamique, foyers infectieux',
        paraclinique: '- Hémocultures, NFS, CRP, TDR paludisme',
      },
      {
        nom: 'Crise aplasique (parvovirus B19)',
        description: 'Anémie brutale avec réticulocytes effondrés.',
        traitement: '- Transfusion',
        clinique: '- Pâleur, fatigue, tachycardie',
        paraclinique: '- Hémoglobine, réticulocytes (< 1 %)',
      },
      {
        nom: 'Priapisme',
        description: 'Érection douloureuse prolongée ; risque d’impuissance au-delà de 4 h.',
        traitement:
          '- Hydratation, antalgie\n- Au-delà de 4 h : urgence urologique (aspiration des corps caverneux ± injection d’alpha-agoniste)',
        clinique: '- Durée de l’épisode, récidives',
        paraclinique: '- Aucun examen indispensable',
      },
      {
        nom: 'Ostéonécrose de la tête fémorale',
        description: 'Douleur de hanche, boiterie, chez l’adolescent et l’adulte.',
        traitement: '- Antalgie, décharge ; chirurgie (forage, prothèse) selon le stade',
        clinique: '- Douleur, boiterie, mobilité de la hanche',
        paraclinique: '- Radiographie, IRM',
      },
      {
        nom: 'Néphropathie et hypertension pulmonaire',
        description: 'Atteintes chroniques liées à l’hémolyse et à la vasculopathie.',
        traitement: '- IEC si albuminurie ; hydroxyurée ; avis spécialisé',
        clinique: '- PA, dyspnée d’effort',
        paraclinique: '- RAC annuel, échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Sans prise en charge, la majorité des enfants SS meurent avant 5 ans en Afrique subsaharienne\n- Le dépistage néonatal, la prévention des infections et l’hydroxyurée transforment le pronostic\n\n## Suivi\n- Consultation tous les 3 à 6 mois ; bilan annuel des atteintes d’organes',
    urgences: ['crise-drepanocytaire-grave'],
    symptomes: [
      ['Douleurs osseuses', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Ictère', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Splénomégalie', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
    ],
    sources: [
      'American Society of Hematology 2020 guidelines for sickle cell disease: management of acute and chronic pain',
      'Evidence-Based Management of Sickle Cell Disease: Expert Panel Report',
      'Guide clinique et thérapeutique',
    ],
  },
];
