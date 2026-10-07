'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — pédiatrie.
 * Format : voir semiologie/infectiologie.js. Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== Malnutrition aiguë sévère
  'malnutrition-aigue-severe': {
    urgences: {
      'malnutrition-aigue-severe-compliquee':
        'Perte d’appétit (test de l’appétit échoué), œdèmes généralisés, hypothermie, léthargie, vomissements, signes d’infection',
      'deshydratation-severe-enfant':
        'Diarrhée abondante, léthargie, yeux très enfoncés, soif ou incapacité à boire (pli cutané peu fiable en cas de marasme)',
    },
    formes: [
      {
        nom: 'Marasme (malnutrition sans œdème)',
        type: 'commune',
        description:
          'Émaciation majeure par déficit global d’apport énergétique, avec fonte musculaire et adipeuse.',
        terrain:
          '- Enfant de 6 à 59 mois, sevrage précoce ou brutal, insécurité alimentaire, conflits, déplacés\n- Infections répétées (diarrhée, rougeole, tuberculose, VIH)',
        fonctionnels: '- Appétit souvent conservé (« enfant affamé »), irritabilité',
        generaux: '- Amaigrissement extrême, aspect de « petit vieillard »\n- Hypothermie possible',
        physiques:
          '- **Anthropométrie** : P/T < −3 z-score et/ou périmètre brachial < 115 mm\n- Fonte musculaire (fesses « en culotte flottante », côtes visibles), peau fripée\n- Absence d’œdème',
        paraclinique:
          '- Hypoglycémie, anémie\n- Rechercher une infection associée : TDR paludisme, VIH, tuberculose',
        etiologies:
          '- Apports insuffisants (quantité, qualité), allaitement interrompu\n- Infections et parasitoses répétées, maladie chronique sous-jacente (VIH, tuberculose, cardiopathie)',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [
          ['anthropometrie', 'P/T < −3 z-score ou PB < 115 mm : MAS.'],
          ['glycemie', 'Hypoglycémie fréquente.'],
        ],
      },
      {
        nom: 'Kwashiorkor (malnutrition œdémateuse)',
        type: 'commune',
        description:
          'Malnutrition aiguë sévère définie par des œdèmes bilatéraux prenant le godet, quel que soit le poids.',
        terrain:
          '- Enfant de 1 à 3 ans, sevrage vers une alimentation pauvre en protéines (bouillies), infections',
        fonctionnels: '- Anorexie, apathie, irritabilité, diarrhée',
        generaux: '- Poids parfois peu abaissé (masqué par les œdèmes)',
        physiques:
          '- **Œdèmes** bilatéraux prenant le godet : + (pieds), ++ (pieds et jambes), +++ (généralisés avec visage)\n- Dermatose « en peinture écaillée », dépigmentation\n- Cheveux fins, roux, cassants, défrisés (signe du drapeau)\n- Hépatomégalie (stéatose), visage lunaire',
        paraclinique: '- Hypoalbuminémie, anémie, troubles ioniques (hypokaliémie)',
        etiologies:
          '- Carence protéino-énergétique avec stress oxydatif, infections déclenchantes (rougeole, diarrhée)',
        syndromes: ['syndrome-de-malnutrition-oedemateuse', 'syndrome-oedemateux'],
        examens: [['anthropometrie', 'Œdèmes bilatéraux = MAS, même avec un P/T normal.']],
      },
      {
        nom: 'Malnutrition aiguë sévère compliquée',
        type: 'gravite',
        description:
          'MAS avec perte d’appétit ou complication médicale : hospitalisation (unité nutritionnelle thérapeutique).',
        terrain: '- Tout enfant MAS ; kwashiorkor-marasme (forme mixte), nourrisson < 6 mois',
        fonctionnels: '- Test de l’appétit échoué, vomissements, diarrhée profuse',
        generaux: '- Hypothermie (< 35,5 °C) ou fièvre, léthargie',
        physiques:
          '- Œdèmes +++, détresse respiratoire, déshydratation, lésions cutanées étendues\n- Signes de danger PCIME, pâleur sévère, signes oculaires de carence en vitamine A',
        paraclinique: '- Hypoglycémie, anémie sévère, infections (paludisme, pneumonie, sepsis)',
        etiologies:
          '- Infections intercurrentes, déséquilibres hydro-électrolytiques, carences en micronutriments',
        syndromes: ['syndrome-infectieux', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [
          ['nfs', 'Anémie sévère : transfusion prudente.'],
          ['tdr-paludisme', 'Systématique.'],
        ],
      },
    ],
  },

  // =================================================================== Diarrhée aiguë de l'enfant
  'diarrhee-aigue-enfant': {
    urgences: {
      'deshydratation-severe-enfant':
        'Léthargie ou inconscience, yeux enfoncés, incapacité à boire, pli cutané s’effaçant très lentement (> 2 s)',
    },
    formes: [
      {
        nom: 'Diarrhée aqueuse aiguë (forme commune)',
        type: 'commune',
        description: '≥ 3 selles liquides par jour depuis moins de 14 jours, sans sang.',
        terrain:
          '- Enfant de moins de 5 ans, eau non potable, hygiène des mains, sevrage, rotavirus avant vaccination',
        fonctionnels:
          '- Selles liquides fréquentes, vomissements, douleurs abdominales, refus de boire ou soif',
        generaux: '- Fièvre modérée possible',
        physiques:
          '- **Classer la déshydratation (PCIME)** :\n  - pas de déshydratation visible\n  - signes évidents : agité, irritable, yeux enfoncés, boit avidement, pli cutané lent\n  - sévère : léthargique, yeux enfoncés, boit difficilement, pli cutané très lent\n- Peser l’enfant (perte de poids)',
        paraclinique:
          '- Pas d’examen systématique ; TDR paludisme si fièvre ; ionogramme si déshydratation sévère',
        etiologies:
          '- **Virales** (les plus fréquentes) : rotavirus, norovirus, adénovirus\n- **Bactériennes** : *E. coli* entérotoxinogène, *Vibrio cholerae*\n- **Parasitaires** : *Giardia*, *Cryptosporidium* (VIH)\n- **Extra-digestives** : paludisme, otite, infection urinaire',
        syndromes: ['syndrome-de-deshydratation-extracellulaire', 'syndrome-choleriforme'],
        examens: [['ionogramme', 'Si déshydratation sévère : dysnatrémie, hypokaliémie.']],
      },
      {
        nom: 'Dysenterie (diarrhée sanglante)',
        type: 'etiologique',
        description: 'Diarrhée avec du sang dans les selles : bactérie invasive le plus souvent.',
        terrain: '- Promiscuité, épidémies, malnutrition',
        fonctionnels: '- Selles glairo-sanglantes, peu abondantes, épreintes, ténesme',
        generaux: '- Fièvre souvent élevée, altération de l’état général',
        physiques: '- Douleur abdominale à la palpation, signes de déshydratation possibles',
        paraclinique: '- Coproculture si disponible (épidémies)',
        etiologies:
          '- *Shigella* (la plus fréquente), *Salmonella*, *Campylobacter*, *E. coli* entéro-invasif\n- *Entamoeba histolytica* (amibiase, plutôt grand enfant)',
        syndromes: ['syndrome-dysenterique', 'syndrome-infectieux'],
        examens: [['nfs', 'Hyperleucocytose ; rechercher un syndrome hémolytique et urémique.']],
      },
      {
        nom: 'Diarrhée persistante',
        type: 'evolutive',
        description: 'Diarrhée qui dure 14 jours ou plus ; risque élevé de malnutrition.',
        terrain: '- Malnutrition, VIH, nourrisson non allaité',
        fonctionnels: '- Selles liquides prolongées, ballonnement',
        generaux: '- Amaigrissement, cassure de la courbe pondérale',
        physiques: '- Signes de malnutrition, de déshydratation',
        paraclinique: '- Rechercher VIH, parasites (*Giardia*, *Cryptosporidium*) ; examen des selles',
        etiologies: '- Infections persistantes, intolérance secondaire au lactose, VIH, malnutrition',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [['tdr-vih', 'Systématique devant une diarrhée persistante.']],
      },
    ],
  },

  // =================================================================== Pneumonie de l'enfant
  'pneumonie-enfant': {
    formes: [
      {
        nom: 'Pneumonie (forme commune PCIME)',
        type: 'commune',
        description: 'Toux ou difficulté respiratoire avec respiration rapide, sans signe de gravité.',
        terrain:
          '- Enfant de moins de 5 ans, malnutrition, VIH, fumée domestique, non vacciné (pneumocoque, Hib, rougeole)',
        fonctionnels: '- Toux, difficulté respiratoire, refus de s’alimenter',
        generaux: '- Fièvre',
        physiques:
          '- **Polypnée** selon l’âge : ≥ 50/min (2–11 mois), ≥ 40/min (1–5 ans), compter sur 1 minute\n- Râles crépitants, parfois souffle tubaire (condensation)\n- Pas de tirage sous-costal ni de signe de danger',
        paraclinique: '- Radiographie non indispensable ; oxymétrie de pouls si disponible',
        etiologies:
          '- *Streptococcus pneumoniae* (1re cause bactérienne), *Haemophilus influenzae* b\n- Virus (VRS, grippe), *Staphylococcus aureus* (après rougeole)\n- *Pneumocystis jirovecii* chez le nourrisson VIH+',
        syndromes: ['syndrome-de-condensation-pulmonaire', 'syndrome-infectieux'],
        examens: [['oxymetrie-de-pouls', 'SpO₂ < 90 % : pneumonie grave, oxygène.']],
      },
      {
        nom: 'Pneumonie grave',
        type: 'gravite',
        description: 'Pneumonie avec signe de danger, détresse respiratoire ou hypoxémie : hospitalisation.',
        terrain: '- Nourrisson, malnutrition, VIH, drépanocytose',
        fonctionnels: '- Incapacité à boire ou à téter, vomit tout',
        generaux: '- Fièvre élevée ou hypothermie, léthargie',
        physiques:
          '- Tirage sous-costal, battement des ailes du nez, geignement expiratoire\n- Cyanose centrale, SpO₂ < 90 %\n- Convulsions, léthargie (signes de danger)',
        paraclinique:
          '- Radiographie : opacité systématisée, épanchement pleural, pneumatocèles (staphylocoque)\n- NFS, CRP, hémocultures',
        etiologies: '- Pneumocoque, *S. aureus*, *H. influenzae* ; rechercher une tuberculose ou un VIH',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-de-condensation-pulmonaire'],
        examens: [['radiographie-thoracique', 'Complications : épanchement, pneumatocèles, abcès.']],
      },
      {
        nom: 'Bronchiolite du nourrisson (diagnostic différentiel principal)',
        type: 'etiologique',
        description: 'Infection virale des petites bronches avant 2 ans, avec sifflements.',
        terrain: '- Nourrisson < 2 ans, saison des pluies, prématurité (gravité)',
        fonctionnels: '- Rhinite, toux, gêne respiratoire, difficultés à téter',
        generaux: '- Fièvre modérée',
        physiques: '- Polypnée, tirage, sibilants et/ou crépitants diffus, distension thoracique',
        paraclinique: '- Radiographie : distension, atélectasies',
        etiologies: '- Virus respiratoire syncytial (VRS), rhinovirus, métapneumovirus',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [],
      },
    ],
  },

  // =================================================================== Sepsis néonatal
  'sepsis-neonatal': {
    urgences: {
      'sepsis-neonatal-urgence':
        'Refus de téter, hypothermie ou fièvre, léthargie, convulsions, geignement, tirage, apnées, teint gris, ictère précoce',
    },
    formes: [
      {
        nom: 'Infection néonatale précoce (avant 72 h)',
        type: 'commune',
        description: 'Infection transmise par la mère avant ou pendant l’accouchement.',
        terrain:
          '- Rupture prolongée des membranes (> 18 h), fièvre maternelle pendant le travail, liquide amniotique teinté ou fétide\n- Prématurité, infection urinaire maternelle, portage de streptocoque B',
        fonctionnels: '- Refus de téter, vomissements',
        generaux: '- Fièvre (> 37,5 °C) ou hypothermie (< 35,5 °C), teint gris, léthargie',
        physiques:
          '- **Respiratoires** : polypnée > 60/min, tirage sévère, geignement, apnées\n- **Hémodynamiques** : temps de recoloration cutanée > 3 s, marbrures, tachycardie\n- **Neurologiques** : hypotonie, convulsions, fontanelle bombée\n- **Digestifs** : ballonnement, ictère précoce (< 24 h)',
        paraclinique:
          '- CRP élevée (contrôle à 24–48 h), hémocultures\n- Ponction lombaire si signes neurologiques ou hémoculture positive\n- Glycémie (hypo- ou hyperglycémie)',
        etiologies:
          '- Streptocoque B (*S. agalactiae*), *Escherichia coli*, *Klebsiella*, *Listeria monocytogenes*',
        syndromes: ['syndrome-infectieux', 'syndrome-de-detresse-respiratoire'],
        examens: [
          ['crp', 'Élevée ; une CRP normale à 24–48 h rend l’infection peu probable.'],
          ['hemocultures', 'Avant les antibiotiques.'],
        ],
      },
      {
        nom: 'Infection néonatale tardive (après 72 h)',
        type: 'evolutive',
        description: 'Infection acquise après la naissance, dans la communauté ou à l’hôpital.',
        terrain: '- Hospitalisation, cathéters, soins du cordon inadaptés, prématurité',
        fonctionnels: '- Refus de téter, régurgitations',
        generaux: '- Fièvre ou hypothermie, léthargie',
        physiques:
          '- Omphalite (rougeur périombilicale, pus), pustules cutanées\n- Méningite (fontanelle bombée, convulsions), arthrite, ostéomyélite',
        paraclinique: '- Hémocultures, ponction lombaire, ECBU',
        etiologies:
          '- *Staphylococcus aureus*, *Klebsiella pneumoniae* (souvent multirésistante en milieu hospitalier), *E. coli*, *Pseudomonas*\n- Tétanos néonatal si soins du cordon non stériles',
        syndromes: ['syndrome-infectieux'],
        examens: [['lcr', 'Méningite associée dans 15 à 25 % des sepsis.']],
      },
      {
        nom: 'Choc septique néonatal',
        type: 'gravite',
        description: 'Sepsis avec défaillance circulatoire : mortalité élevée.',
        terrain: '- Prématuré, petit poids de naissance',
        fonctionnels: '- Arrêt de l’alimentation',
        generaux: '- Hypothermie, teint gris, marbrures',
        physiques: '- TRC > 3 s, pouls faibles, tachycardie ou bradycardie, apnées, hypotonie',
        paraclinique: '- Lactates, glycémie, hémostase (CIVD), thrombopénie',
        etiologies: '- Bacilles à Gram négatif, streptocoque B',
        syndromes: ['syndrome-de-choc'],
        examens: [['glycemie', 'Hypoglycémie fréquente, à corriger.']],
      },
    ],
  },
};
