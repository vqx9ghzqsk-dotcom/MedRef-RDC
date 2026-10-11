'use strict';

/**
 * Lot 1 (partie A) — infectiologie prioritaire en RDC : fièvre typhoïde, shigellose,
 * maladie à virus Ebola, mpox, peste. Fiches rédigées par IA à partir des
 * recommandations OMS, MSF et des programmes nationaux : à valider par un médecin.
 */

const MI = { departement: 'medecine-interne', specialite: 'Infectiologie' };

module.exports = [
  // =================================================================== Fièvre typhoïde
  {
    ...MI,
    slug: 'fievre-typhoide',
    nom: 'Fièvre typhoïde',
    resume:
      'Salmonellose systémique à S. Typhi transmise par l’eau et les aliments souillés ; fièvre en plateau, risque de perforation intestinale.',
    definition:
      'Infection systémique due à *Salmonella enterica* sérotype Typhi (fièvre paratyphoïde : sérotypes Paratyphi A, B, C), transmise par voie féco-orale, caractérisée par une fièvre prolongée et des troubles digestifs.',
    physiopathologie:
      '## Mécanismes\n- Ingestion de bacilles, franchissement de la muqueuse iléale au niveau des plaques de Peyer\n- Multiplication dans les ganglions mésentériques puis bactériémie\n- Libération d’endotoxine : fièvre, tuphos, atteintes viscérales\n- Ulcérations des plaques de Peyer en 2e–3e semaine → hémorragie et perforation',
    diagnostic:
      '## Clinique\n- Incubation 7 à 14 jours\n- 1er septénaire : fièvre progressive « en escalier » jusqu’à 39–40 °C, céphalées, asthénie, insomnie, épistaxis, douleurs abdominales, constipation ou diarrhée\n- 2e septénaire : fièvre en plateau, **pouls dissocié** (bradycardie relative), **tuphos** (prostration, obnubilation), langue saburrale, splénomégalie, taches rosées lenticulaires (rares sur peau noire)\n\n## Confirmation\n- Hémocultures (1re semaine, sensibilité 40–80 %), coproculture\n- Le sérodiagnostic de Widal est peu fiable en zone d’endémie : ne pas traiter sur Widal seul',
    examens: [
      [
        'confirmation',
        'hemocultures',
        'Isolement de S. Typhi ou Paratyphi : diagnostic de certitude ; antibiogramme indispensable (multirésistance fréquente).',
      ],
      [
        'confirmation',
        'coproculture',
        'Positive surtout à partir de la 2e semaine ; utile aussi pour dépister les porteurs chroniques.',
      ],
      [
        'premiere_intention',
        'tdr-paludisme',
        'Éliminer un paludisme (co-infection possible) devant toute fièvre.',
      ],
      [
        'premiere_intention',
        'nfs',
        'Leucopénie ou leuconormie relative, anémie, thrombopénie ; une hyperleucocytose doit faire chercher une perforation.',
      ],
      [
        'gravite',
        'bilan-hepatique',
        'Cytolyse modérée fréquente ; ictère = forme grave (hépatite typhique).',
      ],
      ['gravite', 'abdomen-sans-preparation', 'Pneumopéritoine en cas de perforation iléale.'],
      ['gravite', 'creatinine', 'Insuffisance rénale dans les formes graves.'],
    ],
    scores: ['qsofa', 'dose-ponderale'],
    differentiels: [
      [
        'paludisme-simple',
        'TDR ou goutte épaisse positifs ; fièvre plus irrégulière. Les deux peuvent coexister.',
      ],
      ['Brucellose', 'Fièvre ondulante, sueurs, arthralgies ; contact avec le bétail ou lait cru.'],
      [
        'tuberculose-pulmonaire',
        'Fièvre au long cours, toux, sueurs nocturnes, amaigrissement ; GeneXpert positif.',
      ],
      [
        'Leptospirose',
        'Myalgies intenses, suffusion conjonctivale, ictère et insuffisance rénale ; exposition à l’eau souillée.',
      ],
      ['Abcès amibien du foie', 'Douleur de l’hypochondre droit, hépatomégalie douloureuse ; échographie.'],
    ],
    etiologies:
      '## Agents\n- *Salmonella* Typhi ; *S.* Paratyphi A, B, C (forme plus bénigne)\n\n## Transmission et facteurs de risque\n- Eau de boisson non traitée, aliments crus ou manipulés par un porteur\n- Assainissement insuffisant, inondations, surpeuplement\n- Porteurs chroniques (vésicule biliaire), réservoir strictement humain',
    principes: [
      [
        'Confirmer et rechercher les signes de gravité',
        'Traiter tôt, repérer perforation et encéphalopathie.',
        '- Hémocultures avant antibiotique si possible\n- Gravité : tuphos profond, confusion, choc, hémorragie digestive, défense abdominale\n- TDR paludisme systématique',
      ],
      [
        'Antibiothérapie adaptée à la résistance locale',
        'Guérir et éviter les complications et le portage.',
        '- Forme non compliquée : **azithromycine** 20 mg/kg/j (max 1 g) per os pendant 7 jours\n- Forme grave ou vomissements : **ceftriaxone** 2 g/j IV (enfant 50–80 mg/kg/j) pendant 10 à 14 jours\n- Ciprofloxacine seulement si souche sensible (résistance fréquente)\n- Adapter à l’antibiogramme',
      ],
      [
        'Traitement de la typhoïde grave',
        'Réduire la mortalité de l’encéphalopathie et du choc.',
        '- **Dexaméthasone** 3 mg/kg IV puis 1 mg/kg toutes les 6 h pendant 48 h si confusion, coma ou choc\n- Réhydratation, correction hydroélectrolytique, alimentation',
      ],
      [
        'Dépister la perforation intestinale',
        'Opérer sans délai.',
        '- Examen abdominal biquotidien\n- Douleur brutale, défense, pneumopéritoine : avis chirurgical urgent',
      ],
      [
        'Prévention',
        'Réduire la transmission.',
        '- Eau potable, hygiène des mains, assainissement\n- Vaccin conjugué Vi-TT (à partir de 6 mois) selon le programme national\n- Coproculture de contrôle chez les manipulateurs d’aliments',
      ],
    ],
    molecules: [
      ['azithromycine', 'premiere', 'Forme non compliquée, traitement oral de 7 jours'],
      ['ceftriaxone', 'premiere', 'Forme grave, vomissements ou échec du traitement oral'],
      ['ciprofloxacine', 'alternative', 'Uniquement si souche sensible'],
      ['dexamethasone', 'adjuvant', 'Typhoïde grave avec encéphalopathie ou choc'],
      ['paracetamol', 'adjuvant', 'Fièvre (éviter l’aspirine : risque hémorragique)'],
      ['vaccin-typhoidique-conjugue-vi-tt', 'adjuvant', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Perforation iléale',
        description: 'En 2e–3e semaine ; péritonite stercorale, mortalité élevée sans chirurgie.',
        traitement:
          '- Réanimation, antibiothérapie élargie (ceftriaxone + métronidazole)\n- Laparotomie urgente (suture, résection si besoin)',
        clinique: '- Douleur brutale, défense, choc, disparition de la matité préhépatique',
        paraclinique: '- ASP : pneumopéritoine ; NFS',
      },
      {
        nom: 'Hémorragie digestive',
        description: 'Ulcération d’une plaque de Peyer érodant un vaisseau.',
        traitement: '- Remplissage, transfusion\n- Chirurgie si hémorragie persistante',
        clinique: '- Méléna, rectorragies, pâleur, tachycardie',
        paraclinique: '- Hb répétée, groupage',
      },
      {
        nom: 'Encéphalopathie typhique',
        description: 'Tuphos profond, délire, coma.',
        traitement: '- Dexaméthasone, soins de réanimation',
        clinique: '- Conscience, signes de focalisation',
        paraclinique: '- Éliminer un neuropaludisme et une méningite (TDR, LCR)',
      },
      {
        nom: 'Rechute et portage chronique',
        description: 'Rechute dans 5–10 % des cas ; portage biliaire > 1 an chez 1–5 %.',
        traitement: '- Nouvelle cure d’antibiotique selon l’antibiogramme',
        clinique: '- Reprise fébrile',
        paraclinique: '- Coprocultures de contrôle',
      },
    ],
    evolution:
      '## Pronostic\n- Apyrexie en 4 à 6 jours sous traitement efficace\n- Létalité < 1 % traitée, 10–20 % sans traitement ou en cas de perforation\n\n## Surveillance\n- Température, examen abdominal, conscience, hémoglobine',
    urgences: ['choc-septique', 'abdomen-aigu-chirurgical'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Diarrhée', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
      ['Splénomégalie', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- TDR paludisme, examen abdominal\n- Forme simple : azithromycine per os, paracétamol, hydratation',
        '- Vomissements, tuphos, signes abdominaux, choc, enfant de moins de 2 ans',
      ],
      hgr: [
        '- Hémocultures, NFS, ceftriaxone IV\n- Dexaméthasone si forme grave\n- Laparotomie en cas de perforation',
        '- Réanimation nécessaire, insuffisance rénale sévère',
      ],
      tert: ['- Réanimation, chirurgie complexe, prise en charge des souches multirésistantes', ''],
    },
    alertes: {
      'choc-septique': 'Hypotension, marbrures, confusion au cours d’une fièvre prolongée',
      'abdomen-aigu-chirurgical':
        'Douleur abdominale brutale et défense en 2e–3e semaine de fièvre (perforation)',
    },
    formes: [
      {
        nom: 'Forme commune de l’adulte',
        type: 'commune',
        description: 'Fièvre progressive puis en plateau avec tuphos et troubles digestifs.',
        terrain: '- Grand enfant et adulte jeune, zone d’assainissement insuffisant',
        fonctionnels:
          '- Céphalées frontales, insomnie, épistaxis\n- Douleurs abdominales, constipation ou diarrhée « jus de melon »',
        generaux: '- Fièvre en plateau à 40 °C, pouls dissocié, prostration (tuphos)',
        physiques:
          '- Langue saburrale, abdomen sensible avec gargouillement de la fosse iliaque droite, splénomégalie modérée',
        paraclinique: '- Hémocultures positives (1re semaine), leucopénie relative',
        etiologies: '- *S.* Typhi',
        syndromes: ['syndrome-infectieux'],
        examens: [['hemocultures', 'Diagnostic de certitude']],
      },
      {
        nom: 'Forme de l’enfant de moins de 5 ans',
        type: 'terrain',
        description: 'Tableau atypique, souvent une fièvre avec diarrhée ou vomissements.',
        terrain: '- Nourrisson et jeune enfant',
        fonctionnels: '- Diarrhée, vomissements, refus alimentaire',
        generaux: '- Fièvre, déshydratation',
        physiques: '- Hépatosplénomégalie',
        paraclinique: '- Hémocultures',
        etiologies: '- *S.* Typhi',
        syndromes: ['syndrome-infectieux', 'syndrome-de-deshydratation-extracellulaire'],
      },
      {
        nom: 'Forme compliquée de perforation',
        type: 'gravite',
        description: 'Péritonite au cours d’une typhoïde, souvent en 2e–3e semaine.',
        terrain: '- Retard de traitement',
        fonctionnels: '- Douleur abdominale brutale, vomissements',
        generaux: '- Choc, fièvre',
        physiques: '- Défense ou contracture, disparition de la matité préhépatique',
        paraclinique: '- Pneumopéritoine',
        etiologies: '- Ulcération perforée d’une plaque de Peyer',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
        examens: [['abdomen-sans-preparation', 'Croissant gazeux sous-diaphragmatique']],
      },
    ],
  },

  // =================================================================== Shigellose
  {
    ...MI,
    slug: 'shigellose',
    nom: 'Shigellose (dysenterie bacillaire)',
    resume:
      'Diarrhée invasive glairo-sanglante à Shigella, épidémique (S. dysenteriae type 1) ; grave chez l’enfant malnutri.',
    definition:
      'Infection intestinale invasive à *Shigella* se manifestant par une dysenterie : selles glairo-sanglantes fréquentes avec douleurs abdominales, ténesme et fièvre.',
    physiopathologie:
      '## Mécanismes\n- Inoculum très faible (10 à 100 bactéries) : transmission interhumaine facile\n- Invasion de la muqueuse colique, ulcérations et abcès cryptiques\n- *S. dysenteriae* type 1 sécrète la toxine Shiga : syndrome hémolytique et urémique',
    diagnostic:
      '## Clinique\n- Diarrhée glairo-sanglante, nombreuses petites selles\n- Douleurs abdominales, ténesme, épreintes, fièvre\n- Déshydratation habituellement modérée\n\n## Signes de gravité\n- Enfant < 5 ans malnutri, âgé, choc, convulsions, prolapsus rectal, anurie (SHU)',
    examens: [
      [
        'confirmation',
        'coproculture',
        'Isole Shigella et précise la sensibilité ; indispensable au début d’une épidémie.',
      ],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['gravite', 'nfs', 'Hyperleucocytose ; anémie hémolytique et thrombopénie évoquent un SHU.'],
      ['gravite', 'creatinine', 'Insuffisance rénale aiguë (SHU).'],
      ['gravite', 'ionogramme', 'Hyponatrémie, hypokaliémie.'],
      ['gravite', 'glycemie', 'Hypoglycémie chez l’enfant (convulsions).'],
    ],
    scores: ['deshydratation-oms', 'dose-ponderale'],
    differentiels: [
      [
        'Amibiase intestinale',
        'Début plus progressif, peu de fièvre ; trophozoïtes hématophages dans les selles fraîches.',
      ],
      [
        'Invagination intestinale',
        'Nourrisson, crises douloureuses, boudin palpable, selles sanglantes sans fièvre.',
      ],
      ['Colite à Campylobacter ou à salmonelles', 'Coproculture.'],
      ['cholera', 'Selles aqueuses abondantes sans sang.'],
    ],
    etiologies:
      '## Agents\n- *S. flexneri* et *S. sonnei* (endémiques)\n- *S. dysenteriae* type 1 (épidémies graves, multirésistance)\n\n## Facteurs\n- Mains sales, eau souillée, promiscuité (camps de déplacés)\n- Malnutrition, rougeole récente',
    principes: [
      [
        'Réhydrater et nourrir',
        'Prévenir et traiter la déshydratation.',
        '- SRO selon le plan OMS (A, B ou C)\n- Poursuivre l’allaitement et l’alimentation\n- Zinc chez l’enfant : 20 mg/j (10 mg avant 6 mois) pendant 10 jours',
      ],
      [
        'Antibiothérapie de toute dysenterie',
        'Raccourcir la maladie et limiter la transmission.',
        '- **Ciprofloxacine** 15 mg/kg 2 fois par jour (adulte 500 mg 2 fois par jour) pendant 3 jours\n- Alternative : **azithromycine** (enfant 20 mg/kg J1 puis 10 mg/kg/j J2–J5 ; adulte 500 mg J1 puis 250 mg J2–J5)\n- Forme grave : **ceftriaxone** 50–80 mg/kg/j (adulte 1–2 g/j) IV 3 à 5 jours\n- Adapter selon la sensibilité locale',
      ],
      [
        'Réévaluer à 48 h',
        'Dépister l’échec et les complications.',
        '- Pas d’amélioration : changer d’antibiotique, rechercher une amibiase\n- Surveiller diurèse, conscience, poids',
      ],
      [
        'Contrôler une épidémie',
        'Couper la transmission.',
        '- Lavage des mains au savon, eau chlorée, latrines\n- Isolement des cas hospitalisés, notification',
      ],
    ],
    molecules: [
      ['ciprofloxacine', 'premiere', 'Traitement de référence (OMS), 3 jours'],
      ['azithromycine', 'alternative', 'Si résistance aux fluoroquinolones'],
      ['ceftriaxone', 'alternative', 'Formes graves ou impossibilité de la voie orale'],
      ['sro', 'premiere', 'Réhydratation'],
      ['zinc', 'adjuvant', 'Enfant, 10 jours'],
      ['paracetamol', 'adjuvant', 'Fièvre et douleurs (pas d’antidiarrhéique ralentisseur)'],
    ],
    complications: [
      {
        nom: 'Syndrome hémolytique et urémique',
        description: 'Toxine Shiga ; anémie hémolytique, thrombopénie, insuffisance rénale.',
        traitement: '- Équilibre hydrique strict, transfusion si besoin\n- Dialyse si anurie',
        clinique: '- Pâleur, oligurie, œdèmes',
        paraclinique: '- NFS, créatinine',
      },
      {
        nom: 'Prolapsus rectal',
        description: 'Chez l’enfant malnutri avec ténesme important.',
        traitement: '- Réduction manuelle douce, traitement de la dysenterie et de la malnutrition',
        clinique: '- Masse rouge à l’anus',
        paraclinique: '',
      },
      {
        nom: 'Convulsions et encéphalopathie',
        description: 'Fièvre, hypoglycémie, hyponatrémie ou toxine.',
        traitement: '- Diazépam, correction de la glycémie et de la natrémie',
        clinique: '- Conscience',
        paraclinique: '- Glycémie, ionogramme',
      },
      {
        nom: 'Malnutrition aiguë',
        fiche: 'malnutrition-aigue-severe',
        description: 'Aggravation de l’état nutritionnel chez l’enfant.',
        traitement: '- Prise en charge nutritionnelle (PCIMA)',
        clinique: '- Poids, PB, œdèmes',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration en 48 h sous antibiotique adapté\n- Létalité élevée chez le jeune enfant malnutri et lors des épidémies à *S. dysenteriae* type 1',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée sanglante', 'tres_frequent'],
      ['Douleur abdominale', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      'Guide clinique et thérapeutique',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
    ],
    niveaux: {
      cs: [
        '- SRO, zinc, ciprofloxacine per os 3 jours\n- Poursuite de l’alimentation, réévaluation à 48 h',
        '- Déshydratation sévère, enfant < 2 mois, malnutrition sévère, convulsions, absence d’amélioration à 48 h',
      ],
      hgr: [
        '- Perfusion, ceftriaxone IV, coproculture\n- Prise en charge du SHU et de la malnutrition',
        '- Insuffisance rénale nécessitant une dialyse',
      ],
      tert: ['- Dialyse, réanimation pédiatrique', ''],
    },
    alertes: {
      'deshydratation-severe-enfant': 'Dysenterie avec yeux enfoncés, pli cutané persistant, léthargie',
    },
    formes: [
      {
        nom: 'Forme commune (dysenterie)',
        type: 'commune',
        description: 'Syndrome dysentérique fébrile.',
        terrain: '- Enfant de 1 à 5 ans, collectivités, camps',
        fonctionnels: '- Selles glairo-sanglantes fréquentes, ténesme, épreintes, douleurs abdominales',
        generaux: '- Fièvre, malaise',
        physiques: '- Abdomen sensible en cadre colique',
        paraclinique: '- Coproculture positive',
        etiologies: '- *S. flexneri*, *S. sonnei*',
        syndromes: ['syndrome-dysenterique', 'syndrome-infectieux'],
        examens: [['coproculture', 'Isolement et antibiogramme']],
      },
      {
        nom: 'Forme épidémique à S. dysenteriae type 1',
        type: 'gravite',
        description: 'Forme sévère avec risque de SHU et multirésistance.',
        terrain: '- Épidémies, déplacés',
        fonctionnels: '- Dysenterie intense',
        generaux: '- Fièvre, altération de l’état général',
        physiques: '- Pâleur, œdèmes si SHU',
        paraclinique: '- Anémie hémolytique, insuffisance rénale',
        etiologies: '- *S. dysenteriae* type 1 (toxine Shiga)',
        syndromes: ['syndrome-dysenterique', 'syndrome-hemolytique', 'syndrome-uremique'],
      },
    ],
  },

  // =================================================================== Ebola
  {
    ...MI,
    slug: 'maladie-a-virus-ebola',
    nom: 'Maladie à virus Ebola',
    resume:
      'Fièvre hémorragique virale à forte létalité, épidémique en RDC ; isolement en CTE, anticorps monoclonaux et vaccination en anneau.',
    definition:
      'Infection systémique due à un orthoebolavirus (Zaïre surtout en RDC ; aussi Soudan, Bundibugyo), transmise par contact direct avec le sang ou les liquides biologiques d’un malade ou d’un défunt, se manifestant par une fièvre puis des troubles digestifs et parfois des hémorragies.',
    physiopathologie:
      '## Mécanismes\n- Pénétration par les muqueuses ou une effraction cutanée\n- Réplication dans les monocytes, macrophages et cellules dendritiques, puis foie, rate, surrénales\n- Inhibition de la réponse interféron, orage cytokinique, atteinte endothéliale\n- Pertes digestives massives, choc hypovolémique, coagulopathie, défaillance multiviscérale',
    diagnostic:
      '## Définition de cas (alerte)\n- Fièvre ≥ 38 °C d’apparition brutale **et** contact avec un cas suspect, probable ou confirmé, ou un animal malade ou mort\n- Ou fièvre avec ≥ 3 signes : céphalées, vomissements, diarrhée, anorexie, asthénie intense, douleurs abdominales, myalgies, dysphagie, hoquet\n- Ou saignement inexpliqué, ou décès inexpliqué\n\n## Évolution clinique\n- Incubation 2 à 21 jours (souvent 8–10)\n- Phase « sèche » : fièvre, asthénie, céphalées, myalgies\n- Phase « humide » (J3–J5) : vomissements, diarrhée profuse, douleurs abdominales, hoquet\n- Hémorragies inconstantes et tardives',
    examens: [
      [
        'confirmation',
        'pcr-ebola',
        'Confirmation du cas ; à répéter à 48 h si négative avant 72 h de symptômes.',
      ],
      [
        'premiere_intention',
        'tdr-paludisme',
        'Systématique : le paludisme est le premier diagnostic différentiel et une co-infection fréquente.',
      ],
      ['gravite', 'creatinine', 'Insuffisance rénale aiguë (pronostic).'],
      ['gravite', 'ionogramme', 'Hypokaliémie, hyponatrémie liées aux pertes digestives.'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
      ['gravite', 'bilan-hepatique', 'Cytolyse marquée (ASAT > ALAT).'],
      ['suivi', 'pcr-ebola', 'Deux PCR sanguines négatives à 48 h d’intervalle pour la sortie.'],
    ],
    scores: ['index-de-choc', 'dose-ponderale'],
    differentiels: [
      ['paludisme-grave', 'TDR positif ; mais un TDR positif n’exclut pas Ebola chez un contact.'],
      ['fievre-typhoide', 'Fièvre progressive, pouls dissocié ; hémocultures.'],
      ['shigellose', 'Diarrhée glairo-sanglante fébrile sans notion de contact.'],
      [
        'Autres fièvres hémorragiques (Marburg, fièvre jaune, Lassa)',
        'Contexte épidémique, PCR spécifiques.',
      ],
      ['Méningococcie', 'Purpura extensif, syndrome méningé.'],
    ],
    etiologies:
      '## Agents\n- *Orthoebolavirus zairense* (épidémies de RDC), *sudanense*, *bundibugyoense*\n\n## Transmission\n- Contact avec sang, vomissements, selles, sperme d’un malade ou d’un corps (rites funéraires)\n- Soignants sans protection, injections non sûres\n- Réservoir animal (chauves-souris), viande de brousse\n- Transmission sexuelle par le sperme plusieurs mois après la guérison',
    principes: [
      [
        'Isoler et protéger',
        'Couper la transmission dès la suspicion.',
        '- Isolement immédiat du cas suspect, équipement de protection individuelle complet\n- Notification sans délai, transfert vers un centre de traitement Ebola (CTE)\n- Suivi des contacts pendant 21 jours',
      ],
      [
        'Traitement spécifique précoce',
        'Réduire la mortalité (virus Zaïre).',
        '- Anticorps monoclonaux recommandés par l’OMS : **ansuvimab** 50 mg/kg ou **atoltivimab-maftivimab-odesivimab** 50 mg/kg, perfusion IV unique, le plus tôt possible\n- Sans efficacité sur les virus Soudan et Bundibugyo',
      ],
      [
        'Soins de soutien optimisés',
        'Corriger les pertes et les défaillances.',
        '- Réhydratation orale ou IV guidée par les pertes, correction du potassium\n- Antipaludique (CTA) systématique, antibiotique empirique si choc (ceftriaxone)\n- Antiémétique, antalgique (paracétamol, morphine ; pas d’AINS), oxygène, nutrition\n- Vitamine K si saignement',
      ],
      [
        'Vacciner autour des cas',
        'Prévenir de nouveaux cas.',
        '- Vaccin rVSV-ZEBOV (Ervebo) en anneau : contacts, contacts de contacts, soignants\n- Enterrements dignes et sécurisés',
      ],
      [
        'Suivi des survivants',
        'Dépister séquelles et persistance virale.',
        '- Troubles oculaires (uvéite), arthralgies, troubles auditifs, détresse psychologique\n- Dépistage du virus dans le sperme, rapports protégés',
      ],
    ],
    molecules: [
      ['ansuvimab', 'premiere', 'Virus Zaïre confirmé, dose unique'],
      ['atoltivimab-maftivimab-odesivimab', 'premiere', 'Virus Zaïre confirmé, dose unique'],
      ['vaccin-ebola-zaire', 'premiere', 'Vaccination en anneau des contacts et des soignants'],
      ['sro', 'premiere', 'Réhydratation orale'],
      ['ringer-lactate', 'premiere', 'Réhydratation IV'],
      ['artesunate', 'adjuvant', 'Traitement présomptif du paludisme associé'],
      ['ceftriaxone', 'adjuvant', 'Choc ou suspicion de surinfection bactérienne'],
      ['paracetamol', 'adjuvant', 'Fièvre et douleurs'],
      ['morphine', 'adjuvant', 'Douleurs intenses'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique',
        description: 'Pertes digestives massives (jusqu’à 10 L/j).',
        traitement: '- Remplissage IV par Ringer lactate, correction de la kaliémie',
        clinique: '- PA, FC, diurèse, conscience',
        paraclinique: '- Ionogramme, créatinine, lactates si disponibles',
      },
      {
        nom: 'Hémorragies et coagulopathie',
        description: 'Saignements digestifs et aux points de ponction.',
        traitement: '- Vitamine K, transfusion si disponible en CTE',
        clinique: '- Saignements extériorisés',
        paraclinique: '- Hb',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypovolémie et atteinte directe.',
        traitement: '- Réhydratation ; dialyse dans les CTE équipés',
        clinique: '- Diurèse',
        paraclinique: '- Créatinine, kaliémie',
      },
      {
        nom: 'Séquelles du survivant',
        description:
          'Uvéite, arthralgies, asthénie, troubles psychiques, persistance du virus dans les liquides immunoprivilégiés.',
        traitement: '- Programme de suivi des survivants, ophtalmologie, soutien psychosocial',
        clinique: '- Vision, articulations, humeur',
        paraclinique: '- PCR sur le sperme',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité 25 à 90 % selon l’épidémie et la qualité des soins ; réduite par les anticorps monoclonaux précoces\n- Charge virale élevée, insuffisance rénale et âge extrême = mauvais pronostic',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Asthénie', 'tres_frequent'],
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Hémorragies', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Triage à l’entrée (définition de cas), isolement dans une zone dédiée, EPI\n- Notification immédiate à la zone de santé',
        '- Tout cas suspect : transfert organisé vers le CTE (ambulance dédiée)',
      ],
      hgr: [
        '- Zone d’isolement, prélèvement PCR en EPI\n- Soins de soutien en attendant le transfert',
        '- Cas confirmé : transfert vers le CTE',
      ],
      tert: ['- Centre de traitement Ebola : anticorps monoclonaux, réanimation, dialyse si disponible', ''],
    },
    alertes: {
      'choc-septique':
        'Fièvre avec diarrhée et vomissements profus chez un contact, extrémités froides, hypotension',
    },
    formes: [
      {
        nom: 'Forme commune',
        type: 'commune',
        description: 'Fièvre brutale puis syndrome gastro-intestinal profus.',
        terrain: '- Contact d’un cas, soignant, participant à des funérailles',
        fonctionnels:
          '- Céphalées, myalgies, asthénie intense, dysphagie, hoquet\n- Vomissements, diarrhée aqueuse profuse, douleurs abdominales',
        generaux: '- Fièvre ≥ 38 °C, déshydratation, tachycardie',
        physiques: '- Injection conjonctivale, éruption maculopapuleuse du tronc (inconstante)',
        paraclinique: '- PCR Ebola positive',
        etiologies: '- *Orthoebolavirus zairense*',
        syndromes: ['syndrome-infectieux', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [['pcr-ebola', 'Confirmation']],
      },
      {
        nom: 'Forme hémorragique',
        type: 'gravite',
        description: 'Saignements multiples, souvent annonciateurs du décès.',
        terrain: '- Charge virale élevée',
        fonctionnels: '- Hématémèse, méléna',
        generaux: '- Choc',
        physiques: '- Gingivorragies, saignements aux points de ponction',
        paraclinique: '- Thrombopénie, anémie',
        etiologies: '- Coagulopathie et atteinte endothéliale',
        syndromes: ['syndrome-hemorragique', 'syndrome-de-choc'],
      },
      {
        nom: 'Forme de la femme enceinte',
        type: 'terrain',
        description: 'Létalité maternelle et fœtale très élevée.',
        terrain: '- Grossesse',
        fonctionnels: '- Saignement vaginal, contractions',
        generaux: '- Fièvre',
        physiques: '- Avortement, mort fœtale',
        paraclinique: '- PCR',
        etiologies: '- Virus présent dans le liquide amniotique et le placenta',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Mpox
  {
    ...MI,
    slug: 'mpox',
    nom: 'Mpox (variole simienne)',
    resume:
      'Orthopoxvirose endémique en RDC (clades Ia et Ib) : fièvre, adénopathies et éruption vésiculo-pustuleuse ; isolement et soins de soutien.',
    definition:
      'Infection due au virus mpox (orthopoxvirus), transmise par contact étroit avec un humain (lésions, rapports sexuels, gouttelettes) ou un animal infecté, caractérisée par une éruption vésiculo-pustuleuse évoluant de façon synchrone vers la croûte.',
    physiopathologie:
      '## Mécanismes\n- Entrée par la peau lésée ou les muqueuses (respiratoire, génitale)\n- Réplication locale puis dans les ganglions (adénopathies caractéristiques)\n- Virémie et dissémination cutanée et viscérale\n- Clade I plus sévère que le clade II ; clade Ib à transmission sexuelle et familiale',
    diagnostic:
      '## Clinique\n- Incubation 5 à 21 jours\n- Prodromes : fièvre, céphalées, myalgies, asthénie, **adénopathies** (cervicales, inguinales)\n- Éruption 1 à 3 jours après : macules → papules → vésicules → pustules ombiliquées → croûtes, en 2 à 4 semaines\n- Lésions au même stade, prédominant au visage, paumes, plantes (clade Ia) ou génitales et péri-anales (clade Ib)\n- Énanthème buccal, conjonctivite\n\n## Confirmation\n- PCR sur écouvillon de lésion',
    examens: [
      ['confirmation', 'pcr-mpox', 'Confirme le diagnostic et précise le clade.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage du VIH : formes sévères chez la PVVIH non contrôlée.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['gravite', 'nfs', 'Hyperleucocytose si surinfection bactérienne.'],
      ['gravite', 'cd4', 'PVVIH : CD4 < 200 = risque de forme nécrosante grave.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Varicelle', 'Lésions d’âges différents (polymorphisme), pas d’adénopathies marquées, prurit.'],
      ['Syphilis secondaire', 'Roséole, syphilides palmo-plantaires ; sérologie.'],
      ['Herpès disséminé', 'Vésicules groupées en bouquet sur base érythémateuse.'],
      ['Gale surinfectée', 'Prurit nocturne, sillons, atteinte familiale.'],
      ['Molluscum contagiosum', 'Papules ombiliquées sans fièvre ni pustules.'],
    ],
    etiologies:
      '## Agent\n- Virus mpox, clade I (Ia : zoonotique, enfants ; Ib : interhumain et sexuel, depuis 2023 au Sud-Kivu) et clade II\n\n## Transmission\n- Contact avec les lésions, rapports sexuels, gouttelettes en contact prolongé, objets contaminés\n- Rongeurs et singes (chasse, viande de brousse)\n- Transmission materno-fœtale',
    principes: [
      [
        'Isoler et notifier',
        'Limiter la transmission.',
        '- Isolement jusqu’à la chute de toutes les croûtes, masque, lésions couvertes\n- Abstinence sexuelle puis préservatif 12 semaines après guérison\n- Notification, suivi des contacts 21 jours',
      ],
      [
        'Soins de soutien',
        'Soulager et prévenir les complications.',
        '- Antalgiques (paracétamol), antiprurigineux, soins cutanés antiseptiques\n- Hydratation et nutrition (enfants : dépister la malnutrition)\n- Soins de bouche, soins oculaires',
      ],
      [
        'Traiter les surinfections et les terrains fragiles',
        'Réduire la mortalité.',
        '- Surinfection cutanée : cloxacilline ou amoxicilline-acide clavulanique\n- PVVIH : bilan et mise sous ARV rapide\n- Tecovirimat sans bénéfice démontré sur le clade I (essai PALM007) : réservé aux protocoles',
      ],
      [
        'Vacciner',
        'Prévenir autour des cas.',
        '- Vaccins MVA-BN ou LC16m8 pour les contacts et les groupes à risque selon le programme national',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre et douleurs'],
      ['cloxacilline', 'adjuvant', 'Surinfection cutanée'],
      ['amoxicilline', 'adjuvant', 'Surinfection cutanée (avec acide clavulanique)'],
      ['acide-clavulanique', 'adjuvant', 'Associé à l’amoxicilline'],
      ['sro', 'adjuvant', 'Déshydratation'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne cutanée',
        description: 'Cellulite, abcès, la plus fréquente.',
        traitement: '- Antiseptique local, antibiotique antistaphylococcique',
        clinique: '- Rougeur, douleur, pus',
        paraclinique: '- NFS',
      },
      {
        nom: 'Atteinte oculaire',
        description: 'Conjonctivite, kératite pouvant aboutir à la cécité.',
        traitement: '- Soins oculaires, avis ophtalmologique',
        clinique: '- Œil rouge, douleur, baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Pneumonie, encéphalite, sepsis',
        description: 'Formes graves, surtout enfant malnutri et PVVIH.',
        traitement: '- Hospitalisation, oxygène, antibiotiques',
        clinique: '- FR, SpO2, conscience',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Atteinte de la grossesse',
        description: 'Avortement, mort fœtale, mpox congénitale.',
        traitement: '- Suivi obstétrical rapproché',
        clinique: '- Saignements, mouvements fœtaux',
        paraclinique: '- Échographie obstétricale',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 2 à 4 semaines dans la majorité des cas, cicatrices possibles\n- Létalité du clade I plus élevée chez l’enfant, la femme enceinte et la PVVIH non traitée',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'CDC — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Isolement, prélèvement PCR selon l’organisation, soins de soutien à domicile ou en isolement',
        '- Lésions étendues, atteinte oculaire, déshydratation, enfant malnutri, femme enceinte, PVVIH',
      ],
      hgr: [
        '- Hospitalisation en isolement, traitement des surinfections, nutrition, ARV',
        '- Défaillance d’organe',
      ],
      tert: ['- Réanimation, ophtalmologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme commune (clade Ia, zoonotique)',
        type: 'commune',
        description: 'Éruption généralisée centrifuge précédée d’adénopathies.',
        terrain: '- Enfant, zone forestière, contact animal',
        fonctionnels: '- Céphalées, myalgies, douleur des lésions',
        generaux: '- Fièvre, asthénie',
        physiques:
          '- Vésiculo-pustules ombiliquées au même stade, visage, paumes et plantes\n- Adénopathies cervicales et inguinales',
        paraclinique: '- PCR positive',
        etiologies: '- Clade Ia',
        syndromes: ['syndrome-infectieux'],
        examens: [['pcr-mpox', 'Confirmation']],
      },
      {
        nom: 'Forme génitale (clade Ib)',
        type: 'topographique',
        description: 'Lésions génitales et péri-anales, transmission sexuelle.',
        terrain: '- Adulte jeune, travailleuses du sexe et partenaires, foyers familiaux',
        fonctionnels: '- Douleur anale, dysurie',
        generaux: '- Fièvre parfois absente',
        physiques: '- Ulcérations et pustules génitales, adénopathies inguinales',
        paraclinique: '- PCR',
        etiologies: '- Clade Ib',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Forme grave de la PVVIH',
        type: 'terrain',
        description: 'Lésions nécrotiques étendues et prolongées.',
        terrain: '- VIH non contrôlé, CD4 < 200',
        fonctionnels: '- Douleurs intenses',
        generaux: '- Altération de l’état général',
        physiques: '- Lésions confluentes nécrotiques',
        paraclinique: '- CD4 bas',
        etiologies: '- Immunodépression',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
      },
    ],
  },

  // =================================================================== Peste
  {
    ...MI,
    slug: 'peste',
    nom: 'Peste',
    resume:
      'Zoonose à Yersinia pestis endémique en Ituri : formes bubonique, septicémique et pulmonaire ; antibiotique en urgence, isolement de la forme pulmonaire.',
    definition:
      'Infection due à *Yersinia pestis*, transmise par la piqûre de puces de rongeurs infectés (forme bubonique) ou par voie aérienne d’homme à homme (forme pulmonaire), mortelle en l’absence de traitement précoce.',
    physiopathologie:
      '## Mécanismes\n- Inoculation par la puce, migration vers le ganglion de drainage : bubon\n- Bactériémie : forme septicémique, choc, CIVD\n- Atteinte pulmonaire secondaire, puis transmission par gouttelettes (forme pulmonaire primaire)',
    diagnostic:
      '## Clinique\n- Incubation 2 à 6 jours (1 à 3 jours pour la forme pulmonaire)\n- **Bubonique** : fièvre brutale, frissons, bubon très douloureux (inguinal, axillaire, cervical)\n- **Septicémique** : choc, purpura, nécroses des extrémités\n- **Pulmonaire** : toux, dyspnée, crachats hémoptoïques, évolution foudroyante\n\n## Confirmation\n- Test rapide antigène F1 sur ponction du bubon ou crachat, puis culture ou PCR',
    examens: [
      [
        'presomption',
        'tdr-peste',
        'Positif sur bubon ou crachat : traiter immédiatement ; confirmer par culture ou PCR.',
      ],
      ['confirmation', 'hemocultures', 'Isolement de Y. pestis (forme septicémique).'],
      ['premiere_intention', 'tdr-paludisme', 'Éliminer un paludisme associé.'],
      ['gravite', 'radiographie-thoracique', 'Pneumonie extensive dans la forme pulmonaire.'],
      ['gravite', 'nfs', 'Hyperleucocytose, thrombopénie (CIVD).'],
    ],
    scores: ['qsofa', 'dose-ponderale'],
    differentiels: [
      [
        'Adénite bactérienne (staphylocoque, streptocoque)',
        'Porte d’entrée cutanée, évolution moins brutale.',
      ],
      ['Lymphogranulomatose vénérienne', 'Adénopathie inguinale post-ulcération génitale, évolution lente.'],
      ['Pneumonie communautaire', 'Absence de contexte épidémique ; TDR peste négatif.'],
      ['paludisme-grave', 'TDR positif ; pas de bubon.'],
    ],
    etiologies:
      '## Agent\n- *Yersinia pestis*\n\n## Contexte\n- Foyer actif de l’Ituri (zones de santé de Rethy, Aru, Linga…), mortalité des rats\n- Transmission par les puces de rongeurs, contact avec un animal mort, gouttelettes (forme pulmonaire)',
    principes: [
      [
        'Traiter sans attendre la confirmation',
        'La mortalité dépend du délai.',
        '- Antibiotique dès la suspicion clinique en zone d’endémie\n- **Gentamicine** 5 mg/kg/j IM ou IV (ou **streptomycine** 1 g toutes les 12 h) pendant 10 jours\n- Alternatives orales (bubonique peu sévère) : **doxycycline** 100 mg 2 fois par jour ou **ciprofloxacine** 500–750 mg 2 fois par jour, 10 jours',
      ],
      [
        'Isoler la forme pulmonaire',
        'Bloquer la transmission interhumaine.',
        '- Isolement respiratoire (gouttelettes) jusqu’à 48 h de traitement efficace\n- Masques pour soignants et patient',
      ],
      [
        'Chimioprophylaxie des contacts',
        'Prévenir les cas secondaires.',
        '- Contacts étroits de peste pulmonaire : doxycycline ou ciprofloxacine 7 jours (cotrimoxazole chez l’enfant)\n- Surveillance de la fièvre 7 jours',
      ],
      [
        'Lutte antivectorielle',
        'Réduire le réservoir.',
        '- Désinsectisation (puces) avant la dératisation\n- Notification immédiate (maladie à déclaration internationale)',
      ],
    ],
    molecules: [
      ['gentamicine', 'premiere', 'Toutes formes, 10 jours ; utilisable chez la femme enceinte'],
      ['streptomycine', 'premiere', 'Référence historique ; éviter pendant la grossesse'],
      ['doxycycline', 'alternative', 'Forme bubonique peu sévère, chimioprophylaxie'],
      ['ciprofloxacine', 'alternative', 'Toutes formes, chimioprophylaxie'],
      ['cotrimoxazole', 'alternative', 'Chimioprophylaxie de l’enfant'],
      ['paracetamol', 'adjuvant', 'Fièvre et douleur du bubon'],
    ],
    complications: [
      {
        nom: 'Choc septique et CIVD',
        description: 'Forme septicémique, nécroses des extrémités.',
        traitement: '- Remplissage, vasopresseurs, antibiotique IV',
        clinique: '- PA, marbrures, purpura',
        paraclinique: '- Plaquettes, hémostase',
      },
      {
        nom: 'Peste pulmonaire secondaire',
        description: 'Extension pulmonaire d’une forme bubonique, source d’épidémie.',
        traitement: '- Isolement, antibiotique IV',
        clinique: '- Toux, dyspnée, hémoptysie',
        paraclinique: '- Radiographie thoracique',
      },
      {
        nom: 'Méningite pesteuse',
        description: 'Rare, surtout chez l’enfant.',
        traitement: '- Chloramphénicol (diffusion méningée)',
        clinique: '- Syndrome méningé',
        paraclinique: '- LCR',
      },
    ],
    evolution:
      '## Pronostic\n- Bubonique traitée : létalité < 10 % ; non traitée : 50 %\n- Pulmonaire non traitée : mortelle en 24 à 72 h',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Adénopathies', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Hémoptysie', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'CDC — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Suspicion en zone d’endémie : 1re dose de gentamicine ou doxycycline, notification\n- TDR F1 si disponible',
        '- Tout cas suspect : transfert ; forme pulmonaire en isolement',
      ],
      hgr: [
        '- Isolement, antibiothérapie IV, prise en charge du choc\n- Prélèvements pour culture',
        '- Défaillance multiviscérale',
      ],
      tert: ['- Réanimation', ''],
    },
    alertes: {
      'choc-septique': 'Fièvre brutale avec bubon ou toux hémoptoïque en Ituri, hypotension, purpura',
    },
    formes: [
      {
        nom: 'Peste bubonique',
        type: 'commune',
        description: 'Adénite aiguë très douloureuse fébrile.',
        terrain: '- Zone d’endémie, mortalité des rats',
        fonctionnels: '- Douleur intense du bubon, céphalées',
        generaux: '- Fièvre brutale à 40 °C, frissons, prostration',
        physiques: '- Bubon inguinal, axillaire ou cervical, chaud, très douloureux, adhérent',
        paraclinique: '- TDR F1 positif sur ponction du bubon',
        etiologies: '- Piqûre de puce infectée',
        syndromes: ['syndrome-infectieux'],
        examens: [['tdr-peste', 'Ponction du bubon']],
      },
      {
        nom: 'Peste pulmonaire',
        type: 'gravite',
        description: 'Pneumonie foudroyante, contagieuse d’homme à homme.',
        terrain: '- Contact d’un cas pulmonaire',
        fonctionnels: '- Toux, dyspnée, douleur thoracique, crachats hémoptoïques',
        generaux: '- Fièvre, choc',
        physiques: '- Râles crépitants',
        paraclinique: '- TDR F1 positif sur crachat',
        etiologies: '- Transmission par gouttelettes',
        syndromes: ['syndrome-de-condensation-pulmonaire', 'syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Peste septicémique',
        type: 'gravite',
        description: 'Bactériémie sans bubon visible, choc et CIVD.',
        terrain: '- Toute forme évoluée',
        fonctionnels: '- Douleurs abdominales, vomissements',
        generaux: '- Choc',
        physiques: '- Purpura, nécroses des extrémités',
        paraclinique: '- Hémocultures positives',
        etiologies: '- Dissémination hématogène',
        syndromes: ['syndrome-de-choc', 'syndrome-hemorragique'],
      },
    ],
  },
];
