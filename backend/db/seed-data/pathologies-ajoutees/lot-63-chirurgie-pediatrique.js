'use strict';

/**
 * Lot 63 (phase 2, chirurgie pédiatrique) — maladie de Hirschsprung, malformations anorectales,
 * atrésie de l'œsophage. Rédigé par IA (Nelson, Sabiston, Pocket book) : à valider.
 */

const CPED = { departement: 'chirurgie', specialite: 'Chirurgie pédiatrique' };

module.exports = [
  // =================================================================== Hirschsprung
  {
    ...CPED,
    slug: 'maladie-de-hirschsprung',
    nom: 'Maladie de Hirschsprung',
    resume:
      'Absence congénitale de cellules ganglionnaires dans la paroi du rectum et d’un segment variable du côlon (≈ 1/5 000, garçons, trisomie 21) : retard d’émission du méconium (> 48 h), occlusion néonatale basse (distension, vomissements bilieux), débâcle après toucher rectal ; plus tard constipation sévère depuis la naissance avec ballonnement et retard de croissance ; risque d’entérocolite grave (diarrhée fétide, fièvre, choc) ; lavement opaque (zone de transition), biopsie rectale (diagnostic) ; nursing rectal (sondes, lavements) ou colostomie, puis abaissement colo-anal.',
    definition:
      'Malformation congénitale du système nerveux entérique caractérisée par l’absence de cellules ganglionnaires (aganglionose) dans un segment distal du tube digestif, à partir du sphincter interne de l’anus.',
    physiopathologie:
      '## Mécanisme\n- Arrêt de la migration des cellules de la crête neurale → segment **aganglionnaire** contracté, sans péristaltisme → **obstacle fonctionnel**, dilatation du côlon d’amont\n- Forme recto-sigmoïdienne (80 %), formes longues, coliques totales\n\n## Complications\n- **Entérocolite** (stase, pullulation bactérienne) : cause principale de décès\n- Perforation, malnutrition\n\n## Associations\n- **Trisomie 21**, autres syndromes',
    diagnostic:
      '## Nouveau-né\n- **Retard d’émission du méconium** au-delà de 48 h\n- **Distension abdominale**, **vomissements bilieux**, refus de téter\n- **Débâcle** de selles et de gaz après le toucher rectal (ou la sonde)\n\n## Nourrisson et enfant\n- **Constipation** sévère depuis la naissance, ballonnement, **retard de croissance**, ampoule rectale vide\n\n## Entérocolite\n- Diarrhée fétide explosive, fièvre, distension, déshydratation, choc\n\n## Examens\n- **Abdomen sans préparation** (distension colique, absence d’air rectal)\n- **Lavement opaque** aux hydrosolubles (**zone de transition**)\n- **Biopsie rectale** (absence de cellules ganglionnaires) : diagnostic de certitude',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Distension, absence d’air rectal.'],
      ['premiere_intention', 'opacification-digestive', 'Lavement opaque : zone de transition.'],
      ['confirmation', 'biopsie-histologie', 'Biopsie rectale : aganglionose.'],
      ['premiere_intention', 'ionogramme', 'Déshydratation.'],
      ['etiologique', 'caryotype', 'Trisomie 21.'],
    ],
    scores: [],
    differentiels: [
      ['constipation-enfant', 'Constipation fonctionnelle (début après la période néonatale).'],
      ['malformations-anorectales', 'Anus absent ou anormal.'],
      ['Iléus méconial', 'Mucoviscidose.'],
      ['hypothyroidie-congenitale', 'Constipation, ictère prolongé.'],
      ['occlusion-intestinale-aigue', 'Autres occlusions néonatales.'],
    ],
    etiologies: '## Facteurs\n- Génétiques, trisomie 21, sexe masculin',
    principes: [
      [
        'Traitement initial',
        'Décomprimer.',
        '- **Nursing rectal** : sonde rectale et **lavements** au sérum physiologique tiède (10–20 mL/kg) 1–2 fois par jour, éducation des parents\n- **Colostomie** (en zone ganglionnaire) si échec, forme longue, entérocolite grave ou accès chirurgical différé',
      ],
      [
        'Entérocolite',
        'Urgence.',
        '- Réhydratation IV, sonde rectale et lavements, **métronidazole** ± ampicilline + gentamicine, surveillance (perforation)',
      ],
      [
        'Chirurgie définitive',
        'Abaissement.',
        '- **Abaissement colo-anal** (Soave, Duhamel, transanal) avec résection du segment aganglionnaire, en centre spécialisé (souvent dans les premiers mois)\n- Suivi : continence, constipation, entérocolite tardive',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Lavements, réhydratation'],
      ['metronidazole', 'premiere', 'Entérocolite'],
      ['ampicilline', 'alternative', 'Entérocolite grave'],
      ['gentamicine', 'alternative', 'Entérocolite grave'],
      ['ringer-lactate', 'premiere', 'Réhydratation'],
    ],
    complications: [
      {
        nom: 'Entérocolite',
        fiche: 'sepsis-enfant',
        description: 'Stase colique.',
        traitement: '- Lavements, antibiotiques, réhydratation',
        clinique: '- Diarrhée fétide, fièvre, choc',
        paraclinique: '',
      },
      {
        nom: 'Perforation',
        fiche: 'peritonite-aigue',
        description: 'Distension.',
        traitement: '- Chirurgie',
        clinique: '- Défense, pneumopéritoine',
        paraclinique: '- ASP',
      },
      {
        nom: 'Malnutrition',
        fiche: 'retard-staturo-ponderal',
        description: 'Constipation chronique.',
        traitement: '- Prise en charge nutritionnelle',
        clinique: '- Retard de croissance',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon après abaissement ; troubles du transit et entérocolites possibles à distance',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Constipation', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Retard de croissance', 'frequent'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Retard d’émission du méconium : référence', ''],
      hgr: ['- Lavements, colostomie', ''],
      tert: ['- Biopsie, abaissement colo-anal', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme néonatale',
        type: 'commune',
        description: 'Occlusion basse.',
        terrain: '- Nouveau-né garçon',
        fonctionnels: '- Retard du méconium, vomissements',
        generaux: '',
        physiques: '- Distension, débâcle au toucher',
        paraclinique: '- Zone de transition',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'Entérocolite de Hirschsprung',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Diarrhée fétide',
        generaux: '- Fièvre, choc',
        physiques: '- Distension',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Malformations anorectales
  {
    ...CPED,
    slug: 'malformations-anorectales',
    nom: 'Malformations anorectales',
    resume:
      'Anomalies congénitales de l’anus et du rectum (≈ 1/5 000) : anus absent (imperforation), ectopique ou sténosé, souvent avec fistule vers le périnée, la vulve, le vagin, l’urètre ou la vessie ; à dépister à l’examen systématique du nouveau-né (vérifier la présence et la position de l’anus) ; rechercher les malformations associées (VACTERL : vertébrales, anorectales, cardiaques, trachéo-œsophagiennes, rénales, membres) ; formes basses avec fistule périnéale : anoplastie ; formes hautes : colostomie puis anorectoplastie sagittale postérieure ; pronostic de la continence selon la forme.',
    definition:
      'Malformations congénitales de la région anorectale allant de la simple sténose anale à l’absence d’anus avec ou sans fistule vers le périnée ou les voies génito-urinaires.',
    physiopathologie:
      '## Formes\n- **Basses** : fistule périnéale (méconium au périnée), anus antérieur, sténose\n- **Intermédiaires et hautes** : fistule recto-urétrale ou recto-vésicale (garçon : méconium dans les urines), recto-vestibulaire (fille), **cloaque** (orifice unique chez la fille)\n\n## Associations (VACTERL)\n- Malformations **vertébrales** et sacrées, **cardiaques**, **atrésie de l’œsophage**, **rénales**, des **membres** ; trisomie 21',
    diagnostic:
      '## Clinique\n- **Absence d’anus** ou anus anormal à l’examen du nouveau-né (prise de température rectale : jamais avant d’avoir vérifié l’anus)\n- **Méconium** au périnée, au vestibule, dans les urines (fistule urinaire), absence de méconium\n- **Distension abdominale**, vomissements (occlusion) après 24 h\n- Examen du sacrum, de la colonne, du cœur, des membres\n\n## Examens\n- Observation 24 h (apparition du méconium au périnée ou dans les urines)\n- **Radiographie** (cliché en décubitus ventral, fesses surélevées : distance cul-de-sac–peau), radiographie du sacrum\n- **Échographie rénale** et périnéale, **échocardiographie**, radiographie du rachis, sonde œsophagienne (atrésie)',
    examens: [
      ['premiere_intention', 'abdomen-sans-preparation', 'Cliché en décubitus ventral.'],
      ['premiere_intention', 'echographie-renale', 'Malformations rénales.'],
      ['premiere_intention', 'echocardiographie', 'Cardiopathie (VACTERL).'],
      ['deuxieme_intention', 'radiographie-osseuse', 'Sacrum, rachis.'],
      ['premiere_intention', 'bandelette-urinaire', 'Méconium dans les urines (fistule).'],
    ],
    scores: [],
    differentiels: [
      ['maladie-de-hirschsprung', 'Anus normal, retard du méconium.'],
      ['occlusion-intestinale-aigue', 'Autres occlusions néonatales.'],
      ['malformations-congenitales-majeures', 'Malformations associées.'],
    ],
    etiologies:
      '## Mécanisme\n- Anomalie de la cloison urorectale embryonnaire ; associations VACTERL, trisomie 21',
    principes: [
      [
        'Mesures initiales',
        'Stabiliser.',
        '- À jeun, **sonde gastrique**, perfusion (glucose, électrolytes), antibiotiques si fistule urinaire\n- Bilan des malformations associées (cœur, reins, œsophage)',
      ],
      [
        'Chirurgie',
        'Selon la forme.',
        '- **Formes basses** (fistule périnéale) : **anoplastie** périnéale dans les premiers jours\n- **Formes hautes** ou incertaines après 24 h : **colostomie** de décharge, puis **anorectoplastie sagittale postérieure** (PSARP) à 1–6 mois, puis fermeture de la colostomie\n- **Dilatations** anales postopératoires quotidiennes par les parents',
      ],
      [
        'Suivi',
        'Continence.',
        '- Programme de gestion des selles (lavements, laxatifs), suivi urologique (fistule, reflux), soutien des familles',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Perfusion du nouveau-né à jeun'],
      ['ampicilline', 'alternative', 'Fistule urinaire, chirurgie'],
      ['gentamicine', 'alternative', 'Fistule urinaire, chirurgie'],
      ['macrogol', 'adjuvant', 'Constipation postopératoire'],
    ],
    complications: [
      {
        nom: 'Occlusion et perforation',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Diagnostic tardif.',
        traitement: '- Colostomie',
        clinique: '- Distension, vomissements',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires',
        fiche: 'infection-urinaire-enfant',
        description: 'Fistule recto-urinaire.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Fièvre',
        paraclinique: '- ECBU',
      },
      {
        nom: 'Incontinence fécale ou constipation',
        description: 'Formes hautes.',
        traitement: '- Gestion des selles',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Continence satisfaisante dans les formes basses ; plus difficile dans les formes hautes et en cas d’anomalie sacrée',
    urgences: [],
    symptomes: [
      ['Distension abdominale', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Constipation', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: ['- Examen de l’anus de tout nouveau-né, référence', '- Anus absent'],
      hgr: ['- Anoplastie, colostomie', ''],
      tert: ['- Anorectoplastie sagittale postérieure', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme basse avec fistule périnéale',
        type: 'commune',
        description: 'Anoplastie.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Méconium au périnée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme haute',
        type: 'gravite',
        description: 'Colostomie.',
        terrain: '- Nouveau-né',
        fonctionnels: '- Occlusion',
        generaux: '',
        physiques: '- Pas d’orifice, méconium dans les urines',
        paraclinique: '- Cul-de-sac haut',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },

  // =================================================================== Atrésie de l'œsophage
  {
    ...CPED,
    slug: 'atresie-oesophage',
    nom: 'Atrésie de l’œsophage',
    resume:
      'Interruption congénitale de l’œsophage (≈ 1/3 500), le plus souvent avec fistule entre l’œsophage inférieur et la trachée : hydramnios pendant la grossesse ; à la naissance, hypersalivation mousseuse, toux, cyanose et étouffement aux premières tétées ; ne pas alimenter ; diagnostic par l’impossibilité de passer une sonde gastrique (arrêt à 10 cm) et la radiographie (sonde enroulée dans le cul-de-sac) ; sonde d’aspiration continue du cul-de-sac (Replogle), position proclive, antibiotiques, transfert urgent en chirurgie pédiatrique (ligature de la fistule et anastomose œsophagienne) ; rechercher les malformations associées (VACTERL, cœur).',
    definition:
      'Interruption de la continuité de l’œsophage, associée dans la majorité des cas (type III, 85 %) à une fistule trachéo-œsophagienne inférieure.',
    physiopathologie:
      '## Types\n- **Type III** (85 %) : cul-de-sac supérieur + fistule entre l’œsophage inférieur et la trachée\n- Type I : atrésie sans fistule (abdomen sans air) ; fistule en H sans atrésie (toux aux repas, pneumonies)\n\n## Conséquences\n- Salive non dégluties → **inhalation** ; reflux du contenu gastrique dans la trachée par la fistule → **pneumopathie chimique**\n- **Prématurité**, **cardiopathies**, malformations VACTERL',
    diagnostic:
      '## Anténatal\n- **Hydramnios**, estomac petit ou absent à l’échographie\n\n## Naissance\n- **Hypersalivation** mousseuse, **toux**, **cyanose** et **étouffement** à la première tétée\n- Test systématique en cas d’hydramnios : **passage d’une sonde gastrique** (arrêt vers 10 cm de l’arcade dentaire)\n- Abdomen distendu (air passant par la fistule) ou plat (sans fistule)\n\n## Examens\n- **Radiographie thoraco-abdominale** avec sonde radio-opaque (sonde enroulée dans le cul-de-sac, air digestif = fistule)\n- **Échocardiographie** (cardiopathie, arc aortique), échographie rénale, radiographie du rachis',
    examens: [
      ['confirmation', 'radiographie-thoracique', 'Sonde enroulée, air digestif.'],
      ['premiere_intention', 'echocardiographie', 'Cardiopathie associée.'],
      ['premiere_intention', 'echographie-renale', 'Malformations rénales.'],
      ['premiere_intention', 'echographie-obstetricale', 'Hydramnios (anténatal).'],
      ['gravite', 'glycemie', 'Hypoglycémie.'],
    ],
    scores: [],
    differentiels: [
      ['detresse-respiratoire-nouveau-ne', 'Autres causes de détresse respiratoire.'],
      ['malformations-congenitales-majeures', 'Malformations associées.'],
      ['Fistule trachéo-œsophagienne en H', 'Toux aux repas sans atrésie.'],
      ['Fente laryngée', 'Fausses routes.'],
    ],
    etiologies:
      '## Mécanisme\n- Anomalie de la séparation trachée-œsophage ; associations VACTERL, trisomies',
    principes: [
      [
        'Mesures immédiates',
        'Prévenir l’inhalation.',
        '- **Ne pas alimenter**\n- **Sonde d’aspiration** dans le cul-de-sac supérieur, aspiration **continue** ou toutes les 10–15 min\n- **Position proclive** (tête surélevée) ou latérale\n- Perfusion de glucose, maintien de la température, oxygène si besoin\n- **Antibiotiques** (ampicilline + gentamicine) si inhalation\n- Éviter la ventilation au masque prolongée (distension gastrique par la fistule)',
      ],
      [
        'Chirurgie',
        'Transfert urgent.',
        '- **Ligature de la fistule** et **anastomose** œsophagienne termino-terminale (thoracotomie extrapleurale) dans les premiers jours\n- Grand écart entre les culs-de-sac : gastrostomie, anastomose différée\n- Prise en charge de la cardiopathie',
      ],
      [
        'Suivi',
        'Complications.',
        '- Sténose anastomotique (dilatations), reflux gastro-œsophagien (IPP), trachéomalacie',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Perfusion'],
      ['ampicilline', 'premiere', 'Inhalation'],
      ['gentamicine', 'premiere', 'Inhalation'],
      ['oxygene', 'adjuvant', 'Hypoxémie'],
      ['omeprazole', 'adjuvant', 'Reflux postopératoire'],
    ],
    complications: [
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Salive, reflux par la fistule.',
        traitement: '- Aspiration, antibiotiques',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sténose et fistule anastomotiques',
        description: 'Postopératoires.',
        traitement: '- Dilatations, reprise',
        clinique: '- Dysphagie',
        paraclinique: '- Opacification',
      },
      {
        nom: 'Reflux gastro-œsophagien',
        fiche: 'reflux-gastro-oesophagien-nourrisson',
        description: 'Fréquent après réparation.',
        traitement: '- IPP',
        clinique: '- Vomissements',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Survie > 90 % dans les centres équipés ; mortalité élevée en cas de diagnostic tardif, prématurité, cardiopathie ou transfert difficile',
    urgences: [],
    symptomes: [
      ['Hypersalivation', 'tres_frequent'],
      ['Cyanose', 'frequent'],
      ['Toux', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Refus de téter', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Hypersalivation du nouveau-né : test à la sonde, ne pas alimenter, aspiration, transfert',
        '- Tout cas suspect',
      ],
      hgr: ['- Radiographie, aspiration continue, antibiotiques', ''],
      tert: ['- Chirurgie néonatale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Atrésie avec fistule inférieure (type III)',
        type: 'commune',
        description: '85 %.',
        terrain: '- Nouveau-né, hydramnios',
        fonctionnels: '- Hypersalivation, étouffement',
        generaux: '',
        physiques: '- Abdomen distendu',
        paraclinique: '- Sonde enroulée, air digestif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Atrésie avec inhalation et prématurité',
        type: 'gravite',
        description: 'Pronostic réservé.',
        terrain: '- Prématuré, cardiopathie',
        fonctionnels: '',
        generaux: '',
        physiques: '- Détresse respiratoire',
        paraclinique: '- Pneumopathie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
