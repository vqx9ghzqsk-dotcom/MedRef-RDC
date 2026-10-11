'use strict';

/**
 * Lot 9 (néonatologie) — asphyxie périnatale, prématurité, faible poids de naissance et
 * méthode kangourou, ictère néonatal, détresse respiratoire du nouveau-né, hypoglycémie et
 * hypothermie néonatales. Rédigé par IA (OMS, Helping Babies Breathe, AAP, NICE) : à valider.
 */

const NEO = { departement: 'pediatrie', specialite: 'Néonatologie' };

module.exports = [
  // =================================================================== Asphyxie
  {
    ...NEO,
    slug: 'asphyxie-perinatale',
    nom: 'Asphyxie périnatale et encéphalopathie anoxo-ischémique',
    resume:
      'Défaut d’oxygénation autour de la naissance : nouveau-né qui ne respire pas, Apgar bas ; réanimation immédiate (sécher, stimuler, ventiler au ballon dans la « minute d’or »), puis surveillance de l’encéphalopathie (convulsions, glycémie, température).',
    definition:
      'Altération des échanges gazeux materno-fœtaux ou néonataux entraînant hypoxie, hypercapnie et acidose ; l’encéphalopathie anoxo-ischémique est l’atteinte cérébrale qui en résulte (stades de Sarnat I à III).',
    physiopathologie:
      '## Mécanismes\n- Interruption du flux placentaire ou ombilical (travail prolongé, procidence du cordon, hématome rétroplacentaire, rupture utérine)\n- Hypoxie : métabolisme anaérobie, acidose, atteinte multiviscérale (cerveau, rein, cœur, foie)\n- Lésions cérébrales secondaires dans les 6 à 72 h (fenêtre de neuroprotection)',
    diagnostic:
      '## À la naissance\n- Nouveau-né qui **ne crie pas, ne respire pas** ou gaspe, hypotonique, bradycarde\n- **Score d’Apgar** < 7 à 5 minutes\n- Liquide amniotique méconial\n\n## Encéphalopathie (Sarnat)\n- Stade I : hyperexcitabilité, cri aigu, pupilles dilatées\n- Stade II : léthargie, hypotonie, **convulsions**, succion faible\n- Stade III : coma, hypotonie flasque, apnées\n\n## Atteintes associées\n- Oligurie (rein), hypotension, hypoglycémie, hypocalcémie, troubles de la coagulation',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie fréquente : à corriger.'],
      ['gravite', 'gaz-du-sang', 'Acidose (pH < 7, déficit en bases ≥ 12 mmol/L au cordon).'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['premiere_intention', 'creatinine', 'Atteinte rénale.'],
      ['premiere_intention', 'nfs', 'Infection associée, polyglobulie.'],
      ['gravite', 'echographie-transfontanellaire', 'Œdème, hémorragie.'],
      ['gravite', 'eeg', 'Convulsions infracliniques, pronostic.'],
      ['etiologique', 'hemocultures', 'Infection materno-fœtale associée.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['sepsis-neonatal', 'Facteurs de risque infectieux, fièvre ou hypothermie, dégradation secondaire.'],
      ['hypoglycemie-neonatale', 'Glycémie basse isolée, améliorée par le glucose.'],
      ['Malformations cérébrales, maladies métaboliques', 'Absence d’événement périnatal.'],
      ['Dépression médicamenteuse (opioïdes maternels)', 'Contexte, réponse à la naloxone.'],
    ],
    etiologies:
      '## Causes\n- Travail prolongé ou dystocique, mauvaise surveillance du travail\n- Procidence du cordon, hématome rétroplacentaire, rupture utérine, éclampsie\n- Hémorragie maternelle, présentation du siège, prématurité\n- Absence de personnel formé à la réanimation néonatale',
    principes: [
      [
        'Réanimation dans la « minute d’or » (Helping Babies Breathe)',
        'Établir la respiration.',
        '- **Sécher**, réchauffer, dégager les voies aériennes si nécessaire\n- **Stimuler** ; si pas de respiration : **ventilation au ballon et masque** (air ambiant) dans la première minute, 40 insufflations/min\n- FC < 60/min malgré 30 s de ventilation efficace : massage cardiaque (3 compressions pour 1 insufflation)\n- Clampage retardé du cordon si le nouveau-né respire\n- Arrêt après 10 à 20 min sans activité cardiaque',
      ],
      [
        'Soins post-réanimation',
        'Limiter les lésions secondaires.',
        '- Maintenir une température normale (éviter l’hyperthermie) ; hypothermie thérapeutique seulement en unité équipée\n- Glycémie normale (**glucose 10 %**), apports hydriques prudents (60 mL/kg/j à J1)\n- Oxygène si SpO2 < 90 %\n- Alimentation différée puis progressive (lait maternel)',
      ],
      [
        'Convulsions',
        'Contrôler les crises.',
        '- **Phénobarbital** 20 mg/kg IV en 20 min, puis 10 mg/kg si persistance, entretien 5 mg/kg/j\n- Corriger glycémie et calcémie',
      ],
      [
        'Prévention',
        'Éviter l’asphyxie.',
        '- Partogramme, surveillance du rythme cardiaque fœtal, accouchement assisté\n- Personnel formé et ballon-masque dans chaque salle d’accouchement',
      ],
    ],
    molecules: [
      ['oxygene', 'adjuvant', 'SpO2 < 90 % après la réanimation'],
      ['glucose-10', 'premiere', 'Hypoglycémie, apports'],
      ['phenobarbital', 'premiere', 'Convulsions'],
      ['gluconate-de-calcium', 'adjuvant', 'Hypocalcémie'],
      ['adrenaline-epinephrine', 'deuxieme', 'FC < 60/min malgré ventilation et massage'],
      ['ampicilline', 'adjuvant', 'Infection suspectée associée'],
      ['gentamicine', 'adjuvant', 'Infection suspectée associée'],
    ],
    complications: [
      {
        nom: 'Infirmité motrice cérébrale',
        description: 'Séquelles des stades II–III.',
        traitement: '- Rééducation, suivi du développement',
        clinique: '- Spasticité, retard',
        paraclinique: '',
      },
      {
        nom: 'Épilepsie et retard de développement',
        description: 'Lésions cérébrales.',
        traitement: '- Antiépileptiques, stimulation',
        clinique: '- Crises',
        paraclinique: '- EEG',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Nécrose tubulaire.',
        traitement: '- Restriction hydrique adaptée',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Stade I : bon ; stade II : séquelles dans 20 à 40 % ; stade III : décès ou séquelles graves dans la majorité des cas',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Hypotonie', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Cyanose', 'frequent'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Réanimation de base au ballon-masque, réchauffement, glycémie, transfert',
        '- Tout nouveau-né réanimé',
      ],
      hgr: [
        '- Soins post-réanimation, phénobarbital, surveillance',
        '- Encéphalopathie sévère, besoin de ventilation',
      ],
      tert: ['- Néonatologie, hypothermie thérapeutique, EEG', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence':
        'Nouveau-né réanimé qui se dégrade secondairement (fièvre, hypothermie, refus de téter)',
    },
    formes: [
      {
        nom: 'Nouveau-né qui ne respire pas',
        type: 'commune',
        description: 'Asphyxie à la naissance.',
        terrain: '- Travail prolongé, liquide méconial',
        fonctionnels: '- Absence de cri',
        generaux: '- Bradycardie',
        physiques: '- Apnée, hypotonie, cyanose',
        paraclinique: '- Apgar bas',
        etiologies: '- Hypoxie per-partum',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Encéphalopathie anoxo-ischémique modérée à sévère',
        type: 'gravite',
        description: 'Atteinte cérébrale.',
        terrain: '- Réanimation prolongée',
        fonctionnels: '- Succion faible',
        generaux: '',
        physiques: '- Léthargie ou coma, convulsions',
        paraclinique: '- EEG anormal',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Prématurité
  {
    ...NEO,
    slug: 'prematurite',
    nom: 'Prématurité',
    resume:
      'Naissance avant 37 semaines d’aménorrhée : risques d’hypothermie, d’hypoglycémie, de détresse respiratoire, d’infection, d’ictère et de difficultés d’alimentation ; soins essentiels, méthode kangourou, lait maternel, corticoïdes anténatals.',
    definition:
      'Naissance vivante avant 37 semaines d’aménorrhée (SA) révolues : prématurité extrême (< 28 SA), grande prématurité (28–32 SA), prématurité moyenne et tardive (32–37 SA).',
    physiopathologie:
      '## Immaturité des organes\n- Poumons : déficit en surfactant (maladie des membranes hyalines)\n- Thermorégulation : peu de graisse brune, grande surface cutanée\n- Métabolisme : réserves de glycogène faibles (hypoglycémie)\n- Immunité : infections\n- Cerveau : hémorragies intraventriculaires, apnées\n- Foie : ictère ; tube digestif : entérocolite ulcéro-nécrosante\n- Rétine : rétinopathie (excès d’oxygène)',
    diagnostic:
      '## Évaluation\n- Âge gestationnel : date des dernières règles, échographie précoce, score de Ballard (maturation)\n- Poids, taille, périmètre crânien sur les courbes\n\n## Surveillance\n- Température, glycémie, respiration (apnées, détresse), alimentation, ictère, signes d’infection',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['premiere_intention', 'nfs', 'Anémie, infection.'],
      ['gravite', 'hemocultures', 'Infection.'],
      ['gravite', 'radiographie-thoracique', 'Détresse respiratoire.'],
      ['gravite', 'echographie-transfontanellaire', 'Hémorragie intraventriculaire.'],
      ['suivi', 'fond-d-oeil', 'Rétinopathie (< 32 SA ou < 1 500 g, oxygénothérapie).'],
    ],
    scores: ['silverman', 'apgar'],
    differentiels: [
      [
        'faible-poids-naissance-methode-kangourou',
        'Retard de croissance intra-utérin à terme : risques différents.',
      ],
    ],
    etiologies:
      '## Causes\n- Infections maternelles (paludisme, infection urinaire, chorioamniotite), rupture prématurée des membranes\n- Pré-éclampsie, hémorragies, grossesses multiples\n- Grossesse chez l’adolescente, intervalle court, malnutrition, travail pénible\n- Anomalies utérines, béance cervicale',
    principes: [
      [
        'Avant la naissance',
        'Améliorer le pronostic.',
        '- **Corticoïdes anténatals** (dexaméthasone 6 mg IM toutes les 12 h, 4 doses) entre 24 et 34 SA si accouchement imminent et soins néonatals adéquats\n- Sulfate de magnésium avant 32 SA (neuroprotection)\n- Antibiotiques si rupture prématurée des membranes\n- Transfert in utero vers une structure adaptée',
      ],
      [
        'Soins essentiels',
        'Prévenir les complications.',
        '- **Chaleur** : séchage, contact peau à peau, **méthode kangourou** continue dès stabilisation\n- **Lait maternel** précoce (tasse, sonde si succion insuffisante), apports progressifs\n- Glycémie, prévention des infections (lavage des mains, soins du cordon à la chlorhexidine)\n- **Vitamine K1** à la naissance',
      ],
      [
        'Soins spécifiques',
        'Traiter les complications.',
        '- Détresse respiratoire : oxygène contrôlé, **CPAP**\n- Apnées : **caféine** (20 mg/kg de citrate puis 5 mg/kg/j)\n- Infection suspectée : **ampicilline** + **gentamicine**\n- Ictère : photothérapie à des seuils plus bas\n- Supplémentation en fer et vitamines à partir de 2 à 4 semaines',
      ],
      [
        'Suivi',
        'Dépister les séquelles.',
        '- Croissance, développement psychomoteur, vision, audition, vaccinations à l’âge chronologique',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Corticoïde anténatal (mère)'],
      ['cafeine', 'premiere', 'Apnées du prématuré'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Prévention de la maladie hémorragique'],
      ['ampicilline', 'premiere', 'Infection suspectée'],
      ['gentamicine', 'premiere', 'Infection suspectée'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['oxygene', 'adjuvant', 'SpO2 cible 90–95 %'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Soins du cordon'],
    ],
    complications: [
      {
        nom: 'Détresse respiratoire',
        fiche: 'detresse-respiratoire-nouveau-ne',
        description: 'Maladie des membranes hyalines.',
        traitement: '- CPAP, oxygène',
        clinique: '- Geignement, tirage',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Infections néonatales',
        fiche: 'sepsis-neonatal',
        description: 'Immunité immature.',
        traitement: '- Ampicilline + gentamicine',
        clinique: '- Hypothermie, refus de téter',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Hypothermie et hypoglycémie',
        fiche: 'hypothermie-neonatale',
        description: 'Faibles réserves.',
        traitement: '- Kangourou, glucose',
        clinique: '- Froid, léthargie',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Entérocolite ulcéro-nécrosante',
        description: 'Intestin immature.',
        traitement: '- Arrêt de l’alimentation, antibiotiques, chirurgie',
        clinique: '- Ballonnement, sang dans les selles',
        paraclinique: '- ASP',
      },
      {
        nom: 'Rétinopathie du prématuré',
        description: 'Excès d’oxygène.',
        traitement: '- Laser',
        clinique: '',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- La survie dépend de l’âge gestationnel et de l’accès aux soins essentiels ; la méthode kangourou réduit la mortalité de 40 %',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'frequent'],
      ['Hypothermie', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Ictère', 'frequent'],
      ['Geignement expiratoire', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Soins essentiels, peau à peau, allaitement, vitamine K, transfert des < 2 000 g ou < 34 SA',
        '- Prématuré < 34 SA, détresse, infection',
      ],
      hgr: ['- Unité kangourou, alimentation à la sonde, CPAP, antibiotiques', '- Grand prématuré instable'],
      tert: ['- Néonatologie, ventilation, surfactant', ''],
    },
    alertes: { 'sepsis-neonatal-urgence': 'Prématuré avec hypothermie, refus de téter, apnées ou fièvre' },
    formes: [
      {
        nom: 'Prématuré moyen ou tardif',
        type: 'commune',
        description: '32 à 37 SA.',
        terrain: '- Accouchement spontané prématuré',
        fonctionnels: '- Succion faible',
        generaux: '- Hypothermie',
        physiques: '- Peau fine, lanugo',
        paraclinique: '- Glycémie',
        etiologies: '- Infection, grossesse multiple',
        syndromes: [],
      },
      {
        nom: 'Grand prématuré',
        type: 'gravite',
        description: 'Moins de 32 SA.',
        terrain: '- Pré-éclampsie, chorioamniotite',
        fonctionnels: '- Apnées',
        generaux: '- Instabilité thermique',
        physiques: '- Détresse respiratoire',
        paraclinique: '- Hémorragie intraventriculaire',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Faible poids / kangourou
  {
    ...NEO,
    slug: 'faible-poids-naissance-methode-kangourou',
    nom: 'Faible poids de naissance et méthode kangourou',
    resume:
      'Poids de naissance < 2 500 g (prématurité et/ou retard de croissance intra-utérin) : méthode mère kangourou continue, allaitement exclusif, prévention de l’hypothermie, de l’hypoglycémie et des infections, suivi de la croissance.',
    definition:
      'Poids de naissance inférieur à 2 500 g quel que soit le terme ; très faible poids < 1 500 g ; la méthode mère kangourou (MMK) associe contact peau à peau continu, allaitement exclusif et sortie précoce avec suivi.',
    physiopathologie:
      '## Mécanismes\n- Prématurité (immaturité) et/ou **retard de croissance intra-utérin** (insuffisance placentaire)\n- Faibles réserves énergétiques : hypoglycémie, hypothermie\n- Polyglobulie et hypoglycémie dans le retard de croissance',
    diagnostic:
      '## Évaluation\n- Pesée à la naissance (balance précise), âge gestationnel\n- Petit pour l’âge gestationnel (< 10e percentile) ou prématuré eutrophe\n\n## Critères d’éligibilité à la MMK\n- Nouveau-né stable (respiration spontanée, pas d’apnée ni de détresse grave), même sous oxygène\n- OMS 2022 : MMK immédiate dès la naissance pour tous les < 2 000 g stables',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Polyglobulie (RCIU), anémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis congénitale.'],
      ['etiologique', 'tdr-vih', 'Statut VIH maternel.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['prematurite', 'Faible poids lié à l’âge gestationnel : risques respiratoires et neurologiques.'],
      [
        'Infections congénitales (syphilis, CMV, toxoplasmose)',
        'Hépatosplénomégalie, éruption, microcéphalie.',
      ],
    ],
    etiologies:
      '## Causes\n- Prématurité\n- RCIU : **paludisme pendant la grossesse**, malnutrition maternelle, anémie, pré-éclampsie, tabac, grossesses multiples, infections, adolescentes',
    principes: [
      [
        'Méthode mère kangourou',
        'Réduire la mortalité.',
        '- **Contact peau à peau continu** (24 h/24 si possible) sur la poitrine de la mère ou d’un proche, bonnet, couche, enveloppé\n- Démarrage immédiat dès la naissance chez le nouveau-né stable\n- Le père et la famille peuvent relayer',
      ],
      [
        'Alimentation',
        'Assurer la croissance.',
        '- **Allaitement exclusif**, tétées fréquentes (toutes les 2 à 3 h)\n- Lait maternel exprimé à la tasse ou à la sonde si succion insuffisante\n- Apports progressifs de 60–80 mL/kg/j à J1 jusqu’à 150–180 mL/kg/j\n- Prise de poids attendue ≥ 15 g/kg/j',
      ],
      [
        'Prévention',
        'Éviter les complications.',
        '- **Vitamine K1** à la naissance, soins du cordon à la chlorhexidine, hygiène des mains\n- Glycémie et température surveillées\n- Fer et vitamine D à partir de 2 semaines (selon le protocole)\n- Vaccinations à l’âge chronologique',
      ],
      [
        'Sortie et suivi',
        'Continuité des soins.',
        '- Sortie quand l’enfant tète bien, prend du poids, température stable en kangourou, mère confiante\n- Suivi hebdomadaire jusqu’à 2 500 g',
      ],
    ],
    molecules: [
      ['vitamine-k1-phytomenadione', 'premiere', 'À la naissance'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Soins du cordon'],
      ['ampicilline', 'adjuvant', 'Infection suspectée'],
      ['gentamicine', 'adjuvant', 'Infection suspectée'],
    ],
    complications: [
      {
        nom: 'Hypothermie',
        fiche: 'hypothermie-neonatale',
        description: 'Faibles réserves.',
        traitement: '- Kangourou, réchauffement',
        clinique: '- Extrémités froides',
        paraclinique: '- Température',
      },
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Faibles réserves.',
        traitement: '- Allaitement, glucose',
        clinique: '- Léthargie, trémulations',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Infections',
        fiche: 'sepsis-neonatal',
        description: 'Immunité faible.',
        traitement: '- Antibiotiques',
        clinique: '- Refus de téter',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Retard de croissance et de développement',
        description: 'Apports insuffisants.',
        traitement: '- Soutien nutritionnel, stimulation',
        clinique: '',
        paraclinique: '- Courbes',
      },
    ],
    evolution:
      '## Pronostic\n- Le faible poids est en cause dans la majorité des décès néonatals ; la MMK et l’allaitement réduisent fortement la mortalité',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'frequent'],
      ['Hypothermie', 'frequent'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Pesée, peau à peau, allaitement, vitamine K, suivi kangourou ambulatoire',
        '- < 2 000 g, difficultés d’alimentation, signes de danger',
      ],
      hgr: ['- Unité kangourou, alimentation à la sonde, soins', '- Très faible poids instable'],
      tert: ['- Néonatologie', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Faible poids avec hypothermie persistante, refus de téter ou léthargie',
    },
    formes: [
      {
        nom: 'Faible poids stable en kangourou',
        type: 'commune',
        description: 'Nouveau-né < 2 500 g sans détresse.',
        terrain: '- Paludisme maternel, grossesse gémellaire',
        fonctionnels: '- Tétées courtes',
        generaux: '- Température instable',
        physiques: '- Maigreur, peu de graisse sous-cutanée',
        paraclinique: '- Glycémie',
        etiologies: '- Prématurité, RCIU',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ictère néonatal
  {
    ...NEO,
    slug: 'ictere-neonatal',
    nom: 'Ictère néonatal',
    resume:
      'Coloration jaune du nouveau-né : physiologique après 24 h ; pathologique si précoce (< 24 h), intense, prolongé ou avec signes de danger ; bilirubine sur les courbes, photothérapie, exsanguino-transfusion pour éviter l’ictère nucléaire.',
    definition:
      'Coloration jaune de la peau et des muqueuses due à l’accumulation de bilirubine ; la forme non conjuguée expose à l’encéphalopathie bilirubinique (ictère nucléaire), la forme conjuguée (cholestase) traduit une maladie hépatobiliaire.',
    physiopathologie:
      '## Mécanismes\n- Production accrue (hémolyse : incompatibilité ABO ou rhésus, déficit en G6PD, céphalhématome)\n- Immaturité de la conjugaison hépatique\n- Cycle entéro-hépatique (allaitement insuffisant)\n- Bilirubine libre neurotoxique : noyaux gris centraux',
    diagnostic:
      '## Ictère physiologique\n- Après 24 h, maximum J3–J5, disparition avant J10 (J14 chez le prématuré), enfant en bonne santé\n\n## Signes de gravité\n- **Ictère avant 24 h**, ictère jusqu’aux paumes et plantes\n- Prématuré, hémolyse, sepsis\n- **Signes neurologiques** : léthargie, hypotonie, refus de téter, puis hypertonie, opisthotonos, cri aigu (ictère nucléaire)\n- Ictère prolongé > 14 jours, **selles décolorées, urines foncées** (cholestase : atrésie des voies biliaires)\n\n## Évaluation\n- Bilirubine (transcutanée ou sanguine) reportée sur la courbe horaire\n- Groupe sanguin et rhésus mère-enfant, Coombs direct, NFS, réticulocytes, G6PD',
    examens: [
      [
        'confirmation',
        'bilirubine-neonatale',
        'Bilirubine totale sur la courbe horaire ; conjuguée si ictère prolongé.',
      ],
      ['etiologique', 'groupage-rai', 'Incompatibilité ABO ou rhésus.'],
      ['etiologique', 'test-de-coombs-direct', 'Hémolyse immunologique.'],
      ['etiologique', 'nfs', 'Anémie, hémolyse, infection.'],
      ['etiologique', 'reticulocytes', 'Hémolyse.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
      ['etiologique', 'echographie-abdominale', 'Cholestase : atrésie des voies biliaires.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Ictère avec signes infectieux.'],
      [
        'Atrésie des voies biliaires',
        'Ictère prolongé, selles décolorées : urgence chirurgicale avant 6–8 semaines.',
      ],
      ['Syphilis congénitale', 'Hépatosplénomégalie, éruption, sérologie maternelle.'],
    ],
    etiologies:
      '## Ictères à bilirubine non conjuguée\n- Physiologique, prématurité\n- **Hémolyse** : incompatibilité ABO (fréquente), rhésus, **déficit en G6PD**, sphérocytose\n- Infection, hypothyroïdie, allaitement insuffisant, céphalhématome\n\n## Ictères à bilirubine conjuguée\n- Atrésie des voies biliaires, infections (syphilis, CMV), hépatites',
    principes: [
      [
        'Photothérapie',
        'Faire baisser la bilirubine.',
        '- Selon les courbes (âge en heures, terme, facteurs de risque)\n- Enfant nu, yeux protégés, retourné régulièrement, lampes à bonne distance\n- Poursuite de l’**allaitement** fréquent ; contrôle de la bilirubine toutes les 6 à 12 h\n- Lumière solaire filtrée : non recommandée comme traitement',
      ],
      [
        'Exsanguino-transfusion',
        'Prévenir l’ictère nucléaire.',
        '- Bilirubine au-dessus du seuil d’exsanguino-transfusion ou signes neurologiques\n- Sang compatible, en centre équipé',
      ],
      [
        'Traitements associés',
        'Traiter la cause.',
        '- Hydratation et allaitement efficace\n- Infection : **ampicilline** + **gentamicine**\n- Prévention de l’allo-immunisation rhésus (immunoglobulines anti-D chez la mère)',
      ],
      [
        'Ictère prolongé',
        'Ne pas méconnaître une cholestase.',
        '- Couleur des selles et des urines (carte colorimétrique), bilirubine conjuguée, avis spécialisé rapide',
      ],
    ],
    molecules: [
      ['ampicilline', 'adjuvant', 'Sepsis associé'],
      ['gentamicine', 'adjuvant', 'Sepsis associé'],
      ['glucose-10', 'adjuvant', 'Apports si l’alimentation est insuffisante'],
    ],
    complications: [
      {
        nom: 'Ictère nucléaire (encéphalopathie bilirubinique)',
        description: 'Bilirubine libre très élevée.',
        traitement: '- Exsanguino-transfusion urgente',
        clinique: '- Hypotonie puis hypertonie, opisthotonos, cri aigu',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Choréo-athétose, surdité, retard.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '- Audition',
      },
      {
        nom: 'Cirrhose biliaire',
        description: 'Atrésie méconnue.',
        traitement: '- Chirurgie de Kasai précoce',
        clinique: '- Ictère prolongé, selles décolorées',
        paraclinique: '- Échographie',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour l’ictère physiologique ; l’ictère nucléaire est évitable par une photothérapie à temps',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Ictère', 'tres_frequent'],
      ['Refus de téter', 'occasionnel'],
      ['Hypotonie', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'AAP — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Examen de la coloration à la lumière du jour, allaitement, transfert si signe de gravité',
        '- Ictère < 24 h, paumes et plantes jaunes, léthargie, ictère > 14 jours',
      ],
      hgr: ['- Bilirubine, photothérapie, bilan d’hémolyse', '- Exsanguino-transfusion'],
      tert: ['- Exsanguino-transfusion, chirurgie de l’atrésie', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Ictère du nouveau-né avec refus de téter, léthargie, fièvre ou hypothermie',
    },
    formes: [
      {
        nom: 'Ictère physiologique',
        type: 'commune',
        description: 'Ictère modéré après 24 h.',
        terrain: '- Nouveau-né à terme',
        fonctionnels: '- Tète bien',
        generaux: '',
        physiques: '- Ictère du visage et du tronc',
        paraclinique: '- Bilirubine sous le seuil',
        etiologies: '- Immaturité hépatique',
        syndromes: [],
        examens: [['bilirubine-neonatale', 'Courbe horaire']],
      },
      {
        nom: 'Ictère hémolytique précoce',
        type: 'gravite',
        description: 'Ictère avant 24 h.',
        terrain: '- Incompatibilité ABO ou rhésus, G6PD',
        fonctionnels: '',
        generaux: '- Pâleur',
        physiques: '- Ictère intense, hépatosplénomégalie',
        paraclinique: '- Coombs positif, anémie',
        etiologies: '- Hémolyse',
        syndromes: ['syndrome-hemolytique'],
      },
    ],
  },

  // =================================================================== Détresse respiratoire
  {
    ...NEO,
    slug: 'detresse-respiratoire-nouveau-ne',
    nom: 'Détresse respiratoire du nouveau-né',
    resume:
      'Polypnée, tirage, geignement, cyanose chez le nouveau-né : maladie des membranes hyalines (prématuré), retard de résorption, inhalation méconiale, infection ; oxygène, CPAP, antibiotiques, maintien de la chaleur et de la glycémie.',
    definition:
      'Difficulté respiratoire du nouveau-né associant polypnée (> 60/min), signes de lutte (tirage, battement des ailes du nez, geignement) et/ou cyanose, évaluée par le score de Silverman.',
    physiopathologie:
      '## Causes principales\n- **Maladie des membranes hyalines** : déficit en surfactant du prématuré\n- **Retard de résorption du liquide pulmonaire** (tachypnée transitoire) : césarienne, terme proche\n- **Inhalation de liquide méconial** : asphyxie, post-terme\n- **Pneumonie néonatale** (infection materno-fœtale)\n- Pneumothorax, cardiopathies, malformations (hernie diaphragmatique)',
    diagnostic:
      '## Clinique\n- FR > 60/min, **geignement expiratoire**, tirage, battement des ailes du nez, balancement thoraco-abdominal\n- **Score de Silverman** (0 à 10) : ≥ 5 = détresse sévère\n- Cyanose, SpO2 < 90 %\n- Rechercher fièvre ou hypothermie, facteurs de risque infectieux\n\n## Radiographie\n- Membranes hyalines : aspect granité, bronchogramme aérien\n- Inhalation : opacités hétérogènes, distension',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 cible 90–95 %.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie associée.'],
      ['gravite', 'radiographie-thoracique', 'Cause, pneumothorax.'],
      ['premiere_intention', 'hemocultures', 'Infection.'],
      ['premiere_intention', 'nfs', 'Infection, polyglobulie.'],
      ['premiere_intention', 'crp', 'Infection.'],
      ['gravite', 'gaz-du-sang', 'Hypercapnie, acidose.'],
    ],
    scores: ['silverman'],
    differentiels: [
      ['sepsis-neonatal', 'Détresse avec signes infectieux : traiter systématiquement.'],
      ['Cardiopathies congénitales', 'Cyanose sans détresse importante, souffle, SpO2 basse sous oxygène.'],
      ['hypothermie-neonatale', 'Polypnée et léthargie.'],
      ['Acidose métabolique', 'Polypnée sans signe de lutte.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Prématurité, diabète maternel, césarienne avant travail\n- Rupture prolongée des membranes, fièvre maternelle, liquide méconial\n- Asphyxie périnatale',
    principes: [
      [
        'Mesures immédiates',
        'Stabiliser.',
        '- Maintenir la **chaleur** (peau à peau ou incubateur), aspiration si encombrement\n- **Oxygène** par lunettes ou cloche pour SpO2 90–95 % (éviter l’excès chez le prématuré)\n- **CPAP** (y compris CPAP à bulles) si détresse modérée à sévère ou besoin d’oxygène croissant\n- Ventilation au ballon si apnées ou épuisement',
      ],
      [
        'Antibiotiques',
        'Traiter une infection possible.',
        '- **Ampicilline** 50 mg/kg toutes les 12 h + **gentamicine** 5 mg/kg/24 h, arrêt à 48–72 h si hémocultures négatives et enfant asymptomatique',
      ],
      [
        'Soutien',
        'Éviter les complications.',
        '- Perfusion de **glucose 10 %** si l’alimentation orale est impossible, puis lait maternel par sonde\n- Surveillance glycémie, température, SpO2\n- Pneumothorax compressif : exsufflation',
      ],
      [
        'Prévention',
        'Réduire la maladie des membranes hyalines.',
        '- Corticoïdes anténatals avant un accouchement prématuré, éviter les césariennes programmées avant 39 SA',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'SpO2 90–95 %'],
      ['ampicilline', 'premiere', 'Infection possible'],
      ['gentamicine', 'premiere', 'Infection possible'],
      ['glucose-10', 'premiere', 'Apports, hypoglycémie'],
      ['cafeine', 'adjuvant', 'Apnées du prématuré'],
      ['dexamethasone', 'adjuvant', 'Corticoïde anténatal (mère)'],
    ],
    complications: [
      {
        nom: 'Pneumothorax',
        description: 'Ventilation, CPAP, inhalation.',
        traitement: '- Exsufflation, drainage',
        clinique: '- Aggravation brutale',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Insuffisance respiratoire et décès',
        description: 'Formes sévères sans ventilation.',
        traitement: '- CPAP, ventilation',
        clinique: '- Apnées, bradycardie',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Dysplasie bronchopulmonaire',
        description: 'Prématurés ventilés.',
        traitement: '- Oxygène prolongé',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Tachypnée transitoire : guérison en 24 à 72 h ; membranes hyalines : pronostic transformé par la CPAP et les corticoïdes anténatals',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Tachypnée', 'tres_frequent'],
      ['Geignement expiratoire', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Chaleur, oxygène si disponible, première dose d’antibiotiques, transfert',
        '- Toute détresse respiratoire du nouveau-né',
      ],
      hgr: ['- Oxygène, CPAP à bulles, antibiotiques, radiographie', '- Besoin de ventilation'],
      tert: ['- Néonatologie, surfactant, ventilation', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence':
        'Nouveau-né avec détresse respiratoire et fièvre, hypothermie ou refus de téter',
    },
    formes: [
      {
        nom: 'Tachypnée transitoire',
        type: 'commune',
        description: 'Retard de résorption du liquide pulmonaire.',
        terrain: '- Césarienne, nouveau-né à terme ou proche du terme',
        fonctionnels: '',
        generaux: '',
        physiques: '- Polypnée, signes de lutte modérés',
        paraclinique: '- Scissurite, opacités hilaires',
        etiologies: '- Liquide pulmonaire',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Maladie des membranes hyalines',
        type: 'gravite',
        description: 'Déficit en surfactant.',
        terrain: '- Prématuré < 34 SA',
        fonctionnels: '',
        generaux: '',
        physiques: '- Geignement, tirage, cyanose aggravés en quelques heures',
        paraclinique: '- Aspect granité, bronchogramme',
        etiologies: '- Immaturité pulmonaire',
        syndromes: ['syndrome-de-detresse-respiratoire'],
        examens: [['radiographie-thoracique', 'Diagnostic']],
      },
    ],
  },

  // =================================================================== Hypoglycémie néonatale
  {
    ...NEO,
    slug: 'hypoglycemie-neonatale',
    nom: 'Hypoglycémie néonatale',
    resume:
      'Glycémie < 0,45 g/L (2,5 mmol/L) chez le nouveau-né à risque (faible poids, prématuré, mère diabétique, asphyxie, infection) : alimentation précoce, glucose 10 % 2 mL/kg IV si symptomatique ou persistante.',
    definition:
      'Glycémie inférieure à 2,5 mmol/L (0,45 g/L) chez le nouveau-né (seuil OMS) ; sévère si < 1,1 mmol/L (0,2 g/L) ou symptomatique.',
    physiopathologie:
      '## Mécanismes\n- Faibles réserves de glycogène (prématuré, RCIU, hypothermie)\n- Hyperinsulinisme (enfant de mère diabétique)\n- Consommation accrue (infection, asphyxie, hypothermie)\n- Retard de l’alimentation',
    diagnostic:
      '## Clinique (souvent asymptomatique)\n- Trémulations, irritabilité, léthargie, hypotonie, refus de téter\n- Apnées, cyanose, hypothermie, **convulsions**, coma\n\n## Dépistage systématique\n- Nouveau-nés à risque : glycémie avant la 2e tétée puis toutes les 3 à 6 h pendant 24 à 48 h',
    examens: [
      ['confirmation', 'glycemie', '< 2,5 mmol/L (0,45 g/L).'],
      ['etiologique', 'hemocultures', 'Infection.'],
      ['etiologique', 'nfs', 'Infection, polyglobulie.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypocalcémie associée (convulsions).'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Signes infectieux (souvent associés).'],
      ['asphyxie-perinatale', 'Encéphalopathie après réanimation.'],
      ['Hypocalcémie', 'Trémulations et convulsions à glycémie normale.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Faible poids, prématurité, petit pour l’âge gestationnel\n- Mère diabétique\n- Asphyxie, infection, hypothermie\n- Retard d’allaitement',
    principes: [
      [
        'Prévention',
        'Éviter l’hypoglycémie.',
        '- **Allaitement précoce** dans l’heure qui suit la naissance, puis toutes les 2 à 3 h\n- Prévention de l’hypothermie (peau à peau)',
      ],
      [
        'Hypoglycémie asymptomatique modérée',
        'Corriger par l’alimentation.',
        '- Mise au sein ou lait maternel exprimé (10 mL/kg) par tasse ou sonde\n- Contrôle de la glycémie 30 à 60 min plus tard',
      ],
      [
        'Hypoglycémie sévère ou symptomatique',
        'Corriger rapidement.',
        '- **Glucose 10 %** 2 mL/kg IV en 5 min (ou par sonde gastrique si pas d’accès veineux)\n- Puis perfusion de glucose 10 % à 60–80 mL/kg/j (4–6 mg/kg/min)\n- Contrôles toutes les 30 min à 1 h jusqu’à stabilisation, poursuite de l’alimentation\n- Ne jamais injecter de glucose 30 % ou 50 % chez le nouveau-né',
      ],
      [
        'Hypoglycémie persistante',
        'Rechercher une cause.',
        '- Infection, hyperinsulinisme : avis spécialisé (glucagon, hydrocortisone selon les cas)',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', '2 mL/kg IV puis perfusion'],
      ['glucagon', 'deuxieme', 'Hypoglycémie réfractaire (hyperinsulinisme)'],
      ['hydrocortisone', 'alternative', 'Hypoglycémie réfractaire'],
    ],
    complications: [
      {
        nom: 'Lésions cérébrales',
        description: 'Hypoglycémie profonde ou prolongée.',
        traitement: '- Prévention, correction rapide',
        clinique: '- Convulsions, retard',
        paraclinique: '',
      },
      {
        nom: 'Convulsions',
        description: 'Neuroglucopénie.',
        traitement: '- Glucose, phénobarbital si persistance',
        clinique: '- Mouvements anormaux',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si corrigée rapidement ; séquelles possibles en cas d’hypoglycémie sévère prolongée',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Tremblements', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Cyanose', 'occasionnel'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Allaitement précoce, glycémie des nouveau-nés à risque, glucose 10 % par sonde ou IV',
        '- Hypoglycémie persistante ou convulsions',
      ],
      hgr: ['- Perfusion de glucose, recherche d’infection', '- Hypoglycémie réfractaire'],
      tert: ['- Néonatologie, endocrinologie pédiatrique', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né hypoglycémique avec hypothermie, fièvre ou refus de téter',
    },
    formes: [
      {
        nom: 'Hypoglycémie du nouveau-né à risque',
        type: 'commune',
        description: 'Découverte au dépistage.',
        terrain: '- Faible poids, mère diabétique',
        fonctionnels: '- Tétée faible',
        generaux: '',
        physiques: '- Trémulations ou examen normal',
        paraclinique: '- Glycémie < 2,5 mmol/L',
        etiologies: '- Faibles réserves, hyperinsulinisme',
        syndromes: [],
        examens: [['glycemie', 'Dépistage']],
      },
      {
        nom: 'Hypoglycémie sévère symptomatique',
        type: 'gravite',
        description: 'Convulsions ou coma.',
        terrain: '- Infection, asphyxie',
        fonctionnels: '- Refus de téter',
        generaux: '- Hypothermie',
        physiques: '- Convulsions, apnées',
        paraclinique: '- Glycémie < 1,1 mmol/L',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Hypothermie néonatale
  {
    ...NEO,
    slug: 'hypothermie-neonatale',
    nom: 'Hypothermie néonatale',
    resume:
      'Température < 36,5 °C chez le nouveau-né, très fréquente même en climat chaud : chaîne du chaud (séchage, peau à peau, bonnet, allaitement), réchauffement progressif, recherche d’une infection et d’une hypoglycémie.',
    definition:
      'Température axillaire inférieure à 36,5 °C : modérée (32–36,4 °C) ou sévère (< 32 °C) ; facteur majeur de mortalité néonatale.',
    physiopathologie:
      '## Mécanismes\n- Pertes de chaleur par évaporation (nouveau-né mouillé), convection, conduction, radiation\n- Faibles réserves de graisse brune, grande surface corporelle (prématuré, faible poids)\n- Conséquences : hypoglycémie, acidose, détresse respiratoire, troubles de la coagulation, infection',
    diagnostic:
      '## Clinique\n- Extrémités et tronc froids, léthargie, refus de téter, cri faible\n- Sévère : bradycardie, détresse respiratoire, sclérème (peau dure), œdèmes, rougeur du visage\n\n## Mesure\n- **Thermomètre axillaire** (3 minutes) ; dépistage systématique des nouveau-nés, surtout faible poids',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie associée.'],
      ['etiologique', 'hemocultures', 'Infection (l’hypothermie peut en être le seul signe).'],
      ['etiologique', 'nfs', 'Infection.'],
      ['etiologique', 'crp', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      [
        'sepsis-neonatal',
        'Hypothermie persistante malgré le réchauffement : infection jusqu’à preuve du contraire.',
      ],
      ['hypoglycemie-neonatale', 'Souvent associée.'],
    ],
    etiologies:
      '## Facteurs\n- Défaut de séchage à la naissance, bain précoce, nouveau-né séparé de sa mère\n- Salle d’accouchement froide, saison des pluies, nuit\n- Prématurité, faible poids, asphyxie, infection, malnutrition',
    principes: [
      [
        'Chaîne du chaud (prévention)',
        'Garder le nouveau-né au chaud.',
        '- Salle chaude (25–28 °C), **séchage immédiat**, retrait des linges mouillés\n- **Contact peau à peau** avec la mère, bonnet, couverture\n- Allaitement dans l’heure, **bain différé** après 24 h\n- Transport en kangourou',
      ],
      [
        'Hypothermie modérée',
        'Réchauffer.',
        '- Peau à peau ou kangourou, bonnet, couverture, pièce chaude\n- Allaitement ou lait exprimé, glycémie\n- Contrôle de la température toutes les heures jusqu’à normalisation',
      ],
      [
        'Hypothermie sévère',
        'Réchauffement progressif et recherche de cause.',
        '- Incubateur ou table chauffante (pas de bouillotte directe : brûlures)\n- **Glucose 10 %** IV si hypoglycémie ou impossibilité de s’alimenter\n- **Ampicilline** + **gentamicine** (infection présumée)\n- Oxygène si détresse',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Hypoglycémie, apports'],
      ['ampicilline', 'premiere', 'Infection présumée (hypothermie sévère ou persistante)'],
      ['gentamicine', 'premiere', 'Infection présumée'],
      ['oxygene', 'adjuvant', 'Détresse respiratoire'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Consommation de glucose.',
        traitement: '- Glucose',
        clinique: '- Léthargie',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Infection et décès',
        fiche: 'sepsis-neonatal',
        description: 'Hypothermie et infection associées.',
        traitement: '- Antibiotiques',
        clinique: '- Refus de téter',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Hémorragie pulmonaire et sclérème',
        description: 'Hypothermie sévère.',
        traitement: '- Réanimation',
        clinique: '- Saignement, peau dure',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Chaque baisse d’un degré augmente la mortalité ; la chaîne du chaud et la méthode kangourou sont très efficaces',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Hypothermie', 'tres_frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Tachypnée', 'occasionnel'],
      ['Œdèmes', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- Chaîne du chaud, peau à peau, mesure de la température, allaitement',
        '- Hypothermie sévère ou persistante, signes de danger',
      ],
      hgr: ['- Réchauffement, glucose, antibiotiques', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né à température < 35,5 °C persistante ou avec refus de téter',
    },
    formes: [
      {
        nom: 'Hypothermie modérée',
        type: 'commune',
        description: 'Nouveau-né froid, encore actif.',
        terrain: '- Nouveau-né non séché, séparé de sa mère',
        fonctionnels: '- Tétée faible',
        generaux: '- Température 32–36,4 °C',
        physiques: '- Pieds et mains froids',
        paraclinique: '- Glycémie',
        etiologies: '- Pertes de chaleur',
        syndromes: [],
      },
      {
        nom: 'Hypothermie sévère',
        type: 'gravite',
        description: 'Température < 32 °C.',
        terrain: '- Faible poids, infection',
        fonctionnels: '- Refus de téter',
        generaux: '- Bradycardie',
        physiques: '- Léthargie, sclérème, détresse respiratoire',
        paraclinique: '- Hypoglycémie',
        etiologies: '- Infection, défaut de soins',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
