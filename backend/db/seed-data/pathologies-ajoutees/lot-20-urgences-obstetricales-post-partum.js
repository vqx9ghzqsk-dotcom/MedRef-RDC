'use strict';

/**
 * Lot 20 (urgences obstétricales et post-partum) — rupture utérine, choc hémorragique
 * obstétrical, sepsis maternel et endométrite du post-partum, hémorragies du troisième
 * trimestre, mastite et abcès du sein, suivi postnatal de la mère, hémorragie secondaire du
 * post-partum. Rédigé par IA (OMS, FIGO, RCOG) : à valider.
 */

const URGOBS = { departement: 'gynecologie-obstetrique', specialite: 'Urgences obstétricales' };
const PP = { departement: 'gynecologie-obstetrique', specialite: 'Post-partum' };

module.exports = [
  // =================================================================== Rupture utérine
  {
    ...URGOBS,
    slug: 'rupture-uterine',
    nom: 'Rupture utérine',
    resume:
      'Déchirure de l’utérus pendant la grossesse ou le travail (utérus cicatriciel, travail bloqué, ocytocine mal utilisée) : douleur brutale, arrêt des contractions, choc, disparition des BCF, fœtus palpable sous la peau ; réanimation et laparotomie immédiate.',
    definition:
      'Solution de continuité de la paroi utérine, complète (avec la séreuse) ou incomplète, survenant le plus souvent pendant le travail, cause majeure de mortalité maternelle et fœtale dans les zones à accès limité à la césarienne.',
    physiopathologie:
      '## Mécanismes\n- Utérus cicatriciel (césarienne, myomectomie)\n- **Travail bloqué** (disproportion, présentation transverse) chez la grande multipare\n- **Ocytocine ou misoprostol** mal utilisés, manœuvres obstétricales\n- Hémorragie interne, choc, mort fœtale ; lésions vésicales',
    diagnostic:
      '## Signes annonciateurs (pré-rupture)\n- Travail prolongé, contractions violentes, anneau de rétraction (de Bandl), douleur sus-pubienne permanente, hématurie\n\n## Rupture\n- **Douleur brutale** puis accalmie trompeuse, **arrêt des contractions**\n- **Choc** hémorragique, saignement vaginal variable\n- **BCF absents**, parties fœtales palpables sous la peau, présentation remontée\n- Rupture sur cicatrice : parfois peu symptomatique (anomalies des BCF)',
    examens: [
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion massive.'],
      ['premiere_intention', 'hemostase', 'CIVD.'],
      [
        'deuxieme_intention',
        'echographie-abdominale',
        'Épanchement, fœtus extra-utérin (sans retarder la chirurgie).',
      ],
      ['premiere_intention', 'cardiotocographie', 'BCF.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['hematome-retroplacentaire', 'Utérus dur et contracturé, fœtus intra-utérin.'],
      ['placenta-praevia', 'Saignement indolore, utérus souple.'],
      ['Rupture de grossesse abdominale', 'Contexte rare.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Césarienne antérieure (surtout corporéale), grande multiparité\n- Travail prolongé ou bloqué non surveillé (absence de partogramme)\n- Ocytocine ou misoprostol sans surveillance, manœuvres intra-utérines',
    principes: [
      [
        'Réanimation',
        'Restaurer la volémie.',
        '- 2 voies veineuses, **Ringer lactate**, **transfusion** massive, **acide tranexamique**\n- Oxygène, sonde urinaire',
      ],
      [
        'Laparotomie immédiate',
        'Arrêter l’hémorragie.',
        '- Extraction fœtale, réparation de l’utérus si possible ou **hystérectomie** (subtotale)\n- Contrôle des lésions vésicales\n- Antibiotiques (ampicilline + métronidazole + gentamicine)',
      ],
      [
        'Après',
        'Prévenir.',
        '- Contraception ; si utérus conservé : grossesse suivante à haut risque, césarienne programmée avant le travail\n- Prévention : partogramme, utilisation encadrée de l’ocytocine, accouchement en hôpital des utérus cicatriciels',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['ocytocine', 'adjuvant', 'Après réparation'],
      ['ampicilline', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'premiere', 'Antibiothérapie'],
      ['gentamicine', 'alternative', 'Antibiothérapie'],
      ['ketamine', 'adjuvant', 'Anesthésie en urgence'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique et décès',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Hémorragie massive.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Pâleur, pouls filant',
        paraclinique: '- Hb',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Quasi constante en cas de rupture complète.',
        traitement: '- Extraction',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Fistule vésico-vaginale',
        description: 'Lésion vésicale.',
        traitement: '- Réparation',
        clinique: '- Fuite d’urine',
        paraclinique: '',
      },
      {
        nom: 'Infection',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Péritonite.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle élevée sans chirurgie rapide ; évitable par le partogramme et l’accès à la césarienne',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Hypotension', 'tres_frequent'],
      ['Saignement vaginal', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'FIGO — recommandations de pratique clinique',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Prévention (partogramme), reconnaître la pré-rupture, transfert immédiat avec remplissage',
        '- Toute suspicion',
      ],
      hgr: ['- Laparotomie, hystérectomie, transfusion', ''],
      tert: ['- Réparation des fistules', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence':
        'Femme en travail avec douleur brutale, arrêt des contractions et choc',
    },
    formes: [
      {
        nom: 'Rupture sur travail bloqué',
        type: 'commune',
        description: 'Utérus sain, grande multipare.',
        terrain: '- Travail prolongé non surveillé',
        fonctionnels: '- Douleur brutale puis accalmie',
        generaux: '- Choc',
        physiques: '- Fœtus palpable, BCF absents',
        paraclinique: '',
        etiologies: '- Disproportion',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
      },
      {
        nom: 'Rupture sur utérus cicatriciel',
        type: 'etiologique',
        description: 'Désunion de cicatrice.',
        terrain: '- Antécédent de césarienne',
        fonctionnels: '- Douleur sur la cicatrice',
        generaux: '',
        physiques: '- Anomalies des BCF',
        paraclinique: '',
        etiologies: '- Cicatrice utérine',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Choc hémorragique obstétrical
  {
    ...URGOBS,
    slug: 'choc-hemorragique-obstetrical',
    nom: 'Choc hémorragique obstétrical',
    resume:
      'Défaillance circulatoire par hémorragie de la grossesse ou du post-partum : appel à l’aide, 2 voies veineuses, remplissage, transfusion précoce (ratio culots/plasma), acide tranexamique, traitement de la cause (atonie, rétention, déchirures, rupture, HRP, GEU), vêtement antichoc non pneumatique.',
    definition:
      'Insuffisance circulatoire aiguë secondaire à une hémorragie obstétricale (anté-, per- ou post-partum), première cause de mortalité maternelle en RDC.',
    physiopathologie:
      '## Mécanismes\n- Pertes sanguines rapides et souvent sous-estimées ; la femme enceinte compense longtemps (hypervolémie) puis s’effondre\n- Coagulopathie (dilution, consommation, CIVD), hypothermie, acidose : « triade létale »',
    diagnostic:
      '## Reconnaissance\n- **Index de choc** (pouls/PAS) ≥ 1 : alerte ; ≥ 1,4 : grave\n- Pâleur, sueurs, extrémités froides, agitation, oligurie, hypotension tardive\n- Estimer les pertes (sac collecteur, pesée des compresses)\n\n## Rechercher la cause (4 T)\n- **Tonus** (atonie), **Tissu** (rétention), **Traumatisme** (déchirures, rupture, inversion), **Thrombine** (coagulopathie)\n- Avant l’accouchement : GEU, placenta prævia, HRP, rupture utérine',
    examens: [
      ['premiere_intention', 'nfs', 'Hb, plaquettes.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion en urgence.'],
      ['premiere_intention', 'hemostase', 'Fibrinogène, TP.'],
      ['premiere_intention', 'test-de-coagulation-au-lit', 'Coagulopathie sans laboratoire.'],
      ['gravite', 'lactates', 'Hypoperfusion.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['sepsis-maternel-endometrite', 'Fièvre, choc septique.'],
      ['embolie-pulmonaire', 'Dyspnée brutale, pas de saignement.'],
      ['Embolie amniotique', 'Collapsus brutal, détresse respiratoire, CIVD.'],
      ['choc-anaphylactique', 'Urticaire, médicament.'],
    ],
    etiologies:
      '## Causes\n- Hémorragie du post-partum (atonie, rétention, déchirures)\n- Placenta prævia, HRP, rupture utérine, GEU rompue, avortement hémorragique',
    principes: [
      [
        'Réanimation immédiate',
        'Restaurer la perfusion.',
        '- **Appel à l’aide**, chronométrer\n- 2 voies veineuses de gros calibre, prélèvements\n- **Ringer lactate** 1 à 2 L puis transfusion dès que possible (culots, plasma, plaquettes ; sang total frais si seul disponible)\n- **Acide tranexamique** 1 g IV dans les 3 h, à répéter 1 fois\n- Oxygène, réchauffement, sonde urinaire, surélévation des jambes\n- **Vêtement antichoc non pneumatique** pendant le transfert',
      ],
      [
        'Traiter la cause',
        'Arrêter le saignement.',
        '- Atonie : **ocytocine** en perfusion, massage, **misoprostol**, compression bimanuelle, tamponnement intra-utérin par ballonnet\n- Rétention : délivrance artificielle, révision\n- Déchirures : suture\n- Échec : ligatures vasculaires, B-Lynch, hystérectomie',
      ],
      [
        'Après',
        'Prévenir les séquelles.',
        '- Surveillance en soins intensifs, fer, prévention des thromboses',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['acide-tranexamique', 'premiere', '1 g IV dans les 3 h'],
      ['ocytocine', 'premiere', 'Atonie'],
      ['misoprostol', 'premiere', 'Atonie'],
      ['ergometrine', 'alternative', 'Atonie (sauf HTA)'],
      ['carbetocine', 'alternative', 'Atonie'],
      ['noradrenaline', 'deuxieme', 'Choc réfractaire après remplissage'],
      ['oxygene', 'premiere', 'Choc'],
    ],
    complications: [
      {
        nom: 'Coagulopathie et CIVD',
        description: 'Dilution, consommation.',
        traitement: '- Plasma, plaquettes, fibrinogène',
        clinique: '- Saignement en nappe',
        paraclinique: '- Fibrinogène',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion.',
        traitement: '- Remplissage, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Syndrome de Sheehan',
        description: 'Nécrose hypophysaire.',
        traitement: '- Substitution hormonale',
        clinique: '- Absence de montée laiteuse, aménorrhée',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évitable dans la majorité des cas avec un protocole et du sang disponibles',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Hypotension', 'tres_frequent'],
      ['Pâleur', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Oligurie', 'frequent'],
    ],
    sources: [
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      'FIGO recommendations on the management of postpartum hemorrhage 2022',
      'WHO recommendation on tranexamic acid for the treatment of postpartum haemorrhage',
    ],
    niveaux: {
      cs: [
        '- Remplissage, utérotoniques, acide tranexamique, compression bimanuelle, transfert avec vêtement antichoc',
        '- Tout choc',
      ],
      hgr: ['- Transfusion, chirurgie', ''],
      tert: ['- Réanimation, radiologie interventionnelle', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence':
        'Saignement obstétrical avec pouls > 100 ou PAS < 90 (index de choc ≥ 1)',
    },
    formes: [
      {
        nom: 'Choc hémorragique du post-partum',
        type: 'commune',
        description: 'Atonie utérine.',
        terrain: '- Travail prolongé, grande multipare',
        fonctionnels: '- Malaise',
        generaux: '- Tachycardie, pâleur',
        physiques: '- Utérus mou, saignement',
        paraclinique: '- Hb basse',
        etiologies: '- Atonie',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Choc avec coagulopathie',
        type: 'gravite',
        description: 'CIVD.',
        terrain: '- HRP, MFIU, transfusion massive',
        fonctionnels: '',
        generaux: '- Choc profond',
        physiques: '- Saignement incoagulable',
        paraclinique: '- Fibrinogène effondré',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Sepsis maternel
  {
    ...URGOBS,
    slug: 'sepsis-maternel-endometrite',
    nom: 'Sepsis maternel et endométrite du post-partum',
    resume:
      'Infection pendant la grossesse ou le post-partum avec dysfonction d’organe : endométrite (fièvre, utérus douloureux, lochies fétides), infection de césarienne, pyélonéphrite, mastite ; antibiotiques dans l’heure (ampicilline + gentamicine + métronidazole), source à contrôler.',
    definition:
      'Dysfonction d’organe menaçant la vie, due à une infection pendant la grossesse, l’accouchement, l’avortement ou le post-partum (jusqu’à 42 jours) ; l’endométrite du post-partum en est la cause la plus fréquente.',
    physiopathologie:
      '## Mécanismes\n- Infection ascendante après le travail (rupture prolongée, touchers multiples, rétention), césarienne\n- Germes : streptocoque A (formes foudroyantes), entérobactéries, anaérobies, staphylocoque',
    diagnostic:
      '## Clinique\n- Fièvre ≥ 38 °C (ou hypothermie), frissons, tachycardie\n- Endométrite : utérus mou, gros, douloureux, **lochies fétides** ou purulentes\n- Autres foyers : plaie de césarienne, seins, urines, poumons, paludisme\n\n## Gravité\n- qSOFA (FR ≥ 22, PAS ≤ 100, confusion), oligurie, marbrures',
    examens: [
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'tdr-paludisme', 'Paludisme.'],
      ['premiere_intention', 'ecbu', 'Pyélonéphrite.'],
      ['gravite', 'lactates', 'Choc.'],
      ['gravite', 'creatinine', 'Défaillance rénale.'],
      ['deuxieme_intention', 'echographie-pelvienne', 'Rétention, abcès.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['paludisme-et-grossesse', 'TDR positif.'],
      ['mastite-abces-du-sein', 'Sein rouge et douloureux.'],
      ['thrombose-veineuse-profonde', 'Thrombophlébite pelvienne, fièvre persistante.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Césarienne, travail prolongé, rupture prolongée des membranes, touchers répétés\n- Rétention placentaire, manœuvres, anémie, VIH, malnutrition, accouchement non hygiénique',
    principes: [
      [
        'Antibiotiques dans l’heure',
        'Contrôler l’infection.',
        '- **Ampicilline** 2 g IV toutes les 6 h + **gentamicine** 5 mg/kg/j + **métronidazole** 500 mg toutes les 8 h\n- Ou **clindamycine** + gentamicine\n- Jusqu’à 48 h d’apyrexie',
      ],
      [
        'Réanimation',
        'Restaurer la perfusion.',
        '- Remplissage 30 mL/kg de cristalloïdes si hypotension, noradrénaline si persistance\n- Oxygène, sonde urinaire',
      ],
      [
        'Contrôle de la source',
        'Supprimer le foyer.',
        '- Évacuation d’une rétention, drainage d’abcès, reprise chirurgicale\n- Hystérectomie si myométrite nécrosante',
      ],
      [
        'Prévention',
        'Réduire le sepsis maternel.',
        '- Hygiène de l’accouchement, antibioprophylaxie de la césarienne, limitation des touchers vaginaux',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Association'],
      ['gentamicine', 'premiere', 'Association'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['clindamycine', 'alternative', 'Avec gentamicine'],
      ['ceftriaxone', 'alternative', 'Avec métronidazole'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['noradrenaline', 'deuxieme', 'Choc septique'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Choc septique',
        fiche: 'sepsis-et-choc-septique',
        description: 'Défaillance circulatoire.',
        traitement: '- Réanimation',
        clinique: '- Hypotension, marbrures',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Abcès pelvien et péritonite',
        fiche: 'peritonite-aigue',
        description: 'Extension.',
        traitement: '- Drainage, chirurgie',
        clinique: '- Défense',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Thrombophlébite pelvienne',
        description: 'Fièvre persistante sous antibiotiques.',
        traitement: '- Anticoagulation',
        clinique: '- Fièvre isolée',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Cause majeure de mortalité maternelle ; bon si traité dans l’heure',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur pelvienne', 'frequent'],
      ['Lochies fétides', 'frequent'],
      ['Frissons', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Reconnaître, première dose d’antibiotiques, remplissage, transfert', '- Tout sepsis maternel'],
      hgr: ['- Antibiotiques IV, contrôle de la source', ''],
      tert: ['- Réanimation', ''],
    },
    alertes: { 'choc-septique': 'Accouchée fébrile avec hypotension, confusion ou respiration rapide' },
    formes: [
      {
        nom: 'Endométrite du post-partum',
        type: 'commune',
        description: 'Infection utérine.',
        terrain: '- Césarienne, travail prolongé',
        fonctionnels: '- Douleurs pelviennes',
        generaux: '- Fièvre',
        physiques: '- Utérus mou et douloureux, lochies fétides',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Polymicrobienne',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Sepsis à streptocoque A',
        type: 'gravite',
        description: 'Forme foudroyante.',
        terrain: '- Post-partum précoce',
        fonctionnels: '- Douleur abdominale intense',
        generaux: '- Choc, diarrhée',
        physiques: '- Peu de signes locaux',
        paraclinique: '- Hémocultures',
        etiologies: '- S. pyogenes',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Hémorragies T3
  {
    ...URGOBS,
    slug: 'hemorragies-troisieme-trimestre',
    nom: 'Hémorragies du troisième trimestre (démarche)',
    resume:
      'Saignement après 28 SA : ne pas faire de toucher vaginal avant l’échographie ; distinguer placenta prævia (indolore, utérus souple), HRP (douleur, utérus dur), rupture utérine (choc, arrêt des contractions) ; réanimation, transfert, extraction selon la cause.',
    definition:
      'Saignement génital survenant au 3e trimestre de la grossesse, urgence obstétricale pouvant menacer la vie de la mère et du fœtus.',
    physiopathologie:
      '## Causes\n- **Placenta prævia**\n- **Hématome rétroplacentaire**\n- **Rupture utérine**\n- Hémorragie de Benckiser (rupture d’un vaisseau prævia : sang fœtal)\n- Lésions du col (cervicite, cancer, polype), début du travail (bouchon muqueux)',
    diagnostic:
      '## Démarche\n- Retentissement maternel (pouls, PA, index de choc), BCF\n- **Pas de toucher vaginal** tant qu’un placenta prævia n’est pas exclu ; spéculum doux\n- Douleur et tonus utérin, HTA, protéinurie, cicatrice utérine\n- **Échographie** : localisation placentaire, vitalité fœtale\n\n## Orientation\n- Indolore, utérus souple, sang rouge : placenta prævia\n- Douloureux, utérus dur, sang noir, HTA : HRP\n- Choc, arrêt des contractions, utérus cicatriciel : rupture utérine',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Placenta, vitalité fœtale.'],
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion, rhésus.'],
      ['premiere_intention', 'hemostase', 'CIVD.'],
      ['premiere_intention', 'cardiotocographie', 'Souffrance fœtale.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie.'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['placenta-praevia', 'Saignement indolore.'],
      ['hematome-retroplacentaire', 'Douleur, utérus dur.'],
      ['rupture-uterine', 'Choc, travail.'],
    ],
    etiologies: '## Facteurs\n- Utérus cicatriciel, multiparité, HTA, pré-éclampsie, traumatisme',
    principes: [
      [
        'Mesures communes',
        'Stabiliser.',
        '- Voie veineuse, groupage, remplissage, transfusion\n- Surveillance maternelle et fœtale\n- Anti-D si rhésus négatif ; corticoïdes anténatals si < 34 SA et état stable',
      ],
      [
        'Selon la cause',
        'Traiter.',
        '- Placenta prævia : expectative ou césarienne\n- HRP : extraction urgente\n- Rupture utérine : laparotomie\n- Transfert vers une structure chirurgicale',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['dexamethasone', 'adjuvant', 'Corticoïdes anténatals'],
      ['immunoglobulines-anti-d', 'adjuvant', 'Rhésus négatif'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Hémorragie abondante.',
        traitement: '- Réanimation',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hb',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'HRP, rupture.',
        traitement: '- Évacuation',
        clinique: '- BCF absents',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Dépend de la cause et de la rapidité du transfert',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Hypotension', 'occasionnel'],
    ],
    sources: [
      'RCOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
      "Précis d'obstétrique (Merger)",
    ],
    niveaux: {
      cs: [
        '- Pas de toucher vaginal, voie veineuse, transfert immédiat',
        '- Tout saignement du 3e trimestre',
      ],
      hgr: ['- Échographie, transfusion, césarienne', ''],
      tert: ['', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Saignement au 3e trimestre avec malaise ou douleur' },
    formes: [
      {
        nom: 'Saignement indolore',
        type: 'commune',
        description: 'Évoque un placenta prævia.',
        terrain: '',
        fonctionnels: '- Saignement rouge',
        generaux: '',
        physiques: '- Utérus souple',
        paraclinique: '- Placenta bas',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Saignement douloureux avec choc',
        type: 'gravite',
        description: 'HRP ou rupture utérine.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Utérus dur ou fœtus palpable',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Mastite
  {
    ...PP,
    slug: 'mastite-abces-du-sein',
    nom: 'Mastite et abcès du sein',
    resume:
      'Inflammation du sein chez la femme allaitante (engorgement, stase) : sein rouge, chaud, douloureux, fièvre ; poursuivre l’allaitement et vider le sein, antalgiques ; cloxacilline si infection ; abcès = drainage (aspiration ou incision).',
    definition:
      'Inflammation du tissu mammaire, infectieuse ou non, le plus souvent dans les 3 premiers mois de l’allaitement ; l’abcès est une collection purulente compliquant une mastite.',
    physiopathologie:
      '## Mécanismes\n- Stase lactée (mauvaise prise du sein, tétées espacées, engorgement)\n- Crevasses : porte d’entrée de *Staphylococcus aureus*\n- Évolution vers l’abcès en l’absence de vidange',
    diagnostic:
      '## Clinique\n- Engorgement : seins tendus bilatéraux, sans fièvre importante\n- **Mastite** : zone rouge, chaude, douloureuse d’un sein, fièvre, syndrome pseudo-grippal\n- **Abcès** : masse fluctuante, douleur intense, fièvre persistante\n- Observer une tétée (position, prise du sein)',
    examens: [['etiologique', 'nfs', 'Formes sévères.']],
    scores: [],
    differentiels: [
      ['Engorgement mammaire', 'Bilatéral, sans fièvre élevée.'],
      ['Cancer inflammatoire du sein', 'Absence d’allaitement, peau d’orange, persistance.'],
      ['Galactocèle', 'Kyste laiteux non inflammatoire.'],
    ],
    etiologies:
      '## Facteurs\n- Mauvaise prise du sein, crevasses, tétées irrégulières, sevrage brutal, fatigue',
    principes: [
      [
        'Vidange du sein',
        'Traitement de base.',
        '- **Poursuivre l’allaitement** (y compris du côté atteint), tétées fréquentes, correction de la position\n- Expression manuelle après les tétées, compresses chaudes avant, froides après',
      ],
      [
        'Médicaments',
        'Soulager et traiter l’infection.',
        '- Antalgiques : **paracétamol**, **ibuprofène**\n- Antibiotique si symptômes > 24 h, fièvre élevée ou crevasses infectées : **cloxacilline** (ou flucloxacilline) 500 mg 4 fois par jour 10–14 jours ; allergie : érythromycine ou clindamycine',
      ],
      [
        'Abcès',
        'Drainer.',
        '- Aspiration à l’aiguille (répétée) ou incision-drainage\n- Allaitement poursuivi du côté sain, reprise du côté atteint dès que possible',
      ],
    ],
    molecules: [
      ['cloxacilline', 'premiere', 'Mastite infectieuse'],
      ['flucloxacilline', 'alternative', 'Mastite infectieuse'],
      ['erythromycine', 'alternative', 'Allergie'],
      ['clindamycine', 'alternative', 'Allergie, SARM'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'premiere', 'Douleur, inflammation'],
    ],
    complications: [
      {
        nom: 'Abcès du sein',
        description: 'Mastite non traitée.',
        traitement: '- Drainage',
        clinique: '- Masse fluctuante',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Arrêt de l’allaitement',
        fiche: 'alimentation-nourrisson-diversification',
        description: 'Douleur, découragement.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison rapide si le sein est vidé ; l’arrêt brutal de l’allaitement favorise l’abcès',
    urgences: [],
    symptomes: [
      ['Douleur mammaire', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Asthénie', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'UNICEF — santé et nutrition de l’enfant',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Conseil en allaitement, antalgiques, cloxacilline, aspiration', '- Abcès volumineux'],
      hgr: ['- Drainage chirurgical', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Mastite aiguë',
        type: 'commune',
        description: 'Sein inflammatoire.',
        terrain: '- Femme allaitante, 2 à 6 semaines',
        fonctionnels: '- Douleur du sein',
        generaux: '- Fièvre',
        physiques: '- Placard rouge chaud',
        paraclinique: '',
        etiologies: '- Stase, S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Abcès du sein',
        type: 'gravite',
        description: 'Collection.',
        terrain: '- Mastite négligée',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre persistante',
        physiques: '- Masse fluctuante',
        paraclinique: '- Collection',
        etiologies: '- S. aureus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Suivi postnatal
  {
    ...PP,
    slug: 'suivi-postnatal-mere',
    nom: 'Suivi postnatal de la mère',
    resume:
      'Au moins 4 contacts (24 h, J3, J7–14, 6 semaines) : saignements, involution utérine, température, PA, seins et allaitement, périnée, humeur (dépression), anémie, contraception, vaccinations, signes de danger.',
    definition:
      'Soins à la mère pendant les 6 semaines suivant l’accouchement (période de la majorité des décès maternels), associés aux soins du nouveau-né.',
    physiopathologie:
      '## Enjeux\n- Hémorragies, infections, pré-éclampsie du post-partum, thromboses, anémie, dépression\n- Reprise de la fertilité (contraception)',
    diagnostic:
      '## Calendrier (OMS)\n- Dans les 24 h, à J3, entre J7 et J14, à 6 semaines\n\n## Examen\n- PA, pouls, température, Hb\n- Involution utérine, lochies (abondance, odeur), périnée ou plaie de césarienne\n- Seins, allaitement\n- Mictions, transit, mollets (thrombose)\n- Humeur, sommeil, soutien (dépression du post-partum)\n\n## Signes de danger\n- Saignement abondant, fièvre, lochies fétides, céphalées et troubles visuels, convulsions, dyspnée, douleur du mollet',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'bandelette-urinaire', 'Protéinurie (pré-éclampsie du post-partum), infection.'],
      ['etiologique', 'tdr-vih', 'Si non fait ou à risque.'],
      ['etiologique', 'glycemie', 'Après un diabète gestationnel (6–12 semaines).'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Facteurs de risque\n- Césarienne, hémorragie, anémie, pré-éclampsie, VIH, adolescente, isolement',
    principes: [
      [
        'Soins et prévention',
        'Réduire la mortalité du post-partum.',
        '- **Fer + acide folique** 3 mois\n- Soutien à l’allaitement exclusif\n- Hygiène du périnée, soins de la cicatrice\n- Vaccination (Td, rubéole selon le programme)\n- Moustiquaire',
      ],
      [
        'Contraception',
        'Espacer les naissances.',
        '- Proposée avant la sortie : DIU du post-partum, implant, progestatifs (**médroxyprogestérone** à 6 semaines), méthode MAMA (allaitement exclusif < 6 mois et aménorrhée)\n- Éviter les œstroprogestatifs avant 6 semaines',
      ],
      [
        'Santé mentale',
        'Dépister la dépression.',
        '- Baby blues (J3–J10, bénin) vs dépression du post-partum (> 2 semaines) : écoute, soutien, mhGAP\n- Psychose du post-partum : urgence',
      ],
      [
        'Suivi des pathologies',
        'Continuité des soins.',
        '- PA après une pré-éclampsie, glycémie après un diabète gestationnel, ARV si VIH',
      ],
    ],
    molecules: [
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
      ['acide-folique', 'premiere', 'Supplémentation'],
      ['medroxyprogesterone', 'alternative', 'Contraception injectable'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Mise à jour vaccinale'],
    ],
    complications: [
      {
        nom: 'Hémorragie secondaire',
        fiche: 'hemorragie-secondaire-post-partum',
        description: 'Rétention, infection.',
        traitement: '- Utérotoniques, évacuation',
        clinique: '- Saignement',
        paraclinique: '',
      },
      {
        nom: 'Infection',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Endométrite, plaie.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
      {
        nom: 'Éclampsie du post-partum',
        fiche: 'eclampsie',
        description: 'Jusqu’à 6 semaines.',
        traitement: '- Sulfate de magnésium',
        clinique: '- Céphalées, convulsions',
        paraclinique: '',
      },
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Hypercoagulabilité.',
        traitement: '- Anticoagulation',
        clinique: '- Mollet douloureux',
        paraclinique: '- Doppler',
      },
    ],
    evolution: '## Bénéfices\n- Le suivi postnatal précoce réduit la mortalité maternelle et néonatale',
    urgences: ['hemorragie-du-post-partum-urgence', 'eclampsie'],
    symptomes: [
      ['Saignement vaginal', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Douleur mammaire', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: [
        '- Visites postnatales, conseils, contraception, dépistage des signes de danger',
        '- Signes de danger',
      ],
      hgr: ['- Prise en charge des complications', ''],
      tert: ['', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Saignement abondant après l’accouchement',
      eclampsie: 'Accouchée avec céphalées intenses, troubles visuels ou convulsions',
    },
    formes: [
      {
        nom: 'Post-partum normal',
        type: 'commune',
        description: 'Récupération sans complication.',
        terrain: '- Accouchée',
        fonctionnels: '- Fatigue',
        generaux: '',
        physiques: '- Utérus involué, lochies normales',
        paraclinique: '- Hb correcte',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dépression du post-partum',
        type: 'evolutive',
        description: 'Tristesse > 2 semaines.',
        terrain: '- Isolement, complications',
        fonctionnels: '- Tristesse, insomnie, perte d’intérêt',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== HPP secondaire
  {
    ...PP,
    slug: 'hemorragie-secondaire-post-partum',
    nom: 'Hémorragie secondaire du post-partum',
    resume:
      'Saignement anormal entre 24 h et 6 semaines après l’accouchement : rétention placentaire et endométrite surtout ; utérotoniques, antibiotiques, évacuation utérine prudente ; transfusion si besoin.',
    definition:
      'Saignement génital anormal ou abondant survenant plus de 24 heures et jusqu’à 6 semaines après l’accouchement.',
    physiopathologie:
      '## Causes\n- **Rétention de fragments placentaires**\n- **Endométrite** (souvent associée)\n- Sous-involution utérine, déhiscence de cicatrice de césarienne\n- Troubles de la coagulation, choriocarcinome (rare)',
    diagnostic:
      '## Clinique\n- Saignement abondant ou prolongé, caillots\n- Fièvre, lochies fétides, utérus gros et mou, douloureux (endométrite)\n- Retentissement : pâleur, tachycardie\n\n## Examens\n- Hb, échographie (rétention), hémocultures si fièvre ; β-hCG si saignements persistants',
    examens: [
      ['premiere_intention', 'nfs', 'Hb.'],
      ['premiere_intention', 'echographie-pelvienne', 'Rétention.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'hemocultures', 'Fièvre.'],
      ['etiologique', 'beta-hcg', 'Saignements persistants (môle, choriocarcinome).'],
    ],
    scores: ['index-de-choc'],
    differentiels: [
      ['Retour de couches', 'Règles normales après 6 semaines.'],
      ['Lésions cervico-vaginales', 'Examen au spéculum.'],
      ['Choriocarcinome', 'β-hCG élevée.'],
    ],
    etiologies: '## Facteurs\n- Délivrance incomplète, absence de GATPA, accouchement à domicile, infection',
    principes: [
      [
        'Traitement médical',
        'Contrôler le saignement.',
        '- **Ocytocine** ou **misoprostol**\n- **Antibiotiques** si fièvre ou suspicion d’endométrite (ampicilline + gentamicine + métronidazole)\n- **Acide tranexamique** si saignement important',
      ],
      [
        'Évacuation',
        'Traiter la rétention.',
        '- AMIU ou curetage prudent (utérus fragile, risque de perforation), sous antibiotiques',
      ],
      ['Mesures associées', 'Corriger l’anémie.', '- Transfusion si nécessaire, fer'],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Utérotonique'],
      ['misoprostol', 'premiere', 'Utérotonique'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
      ['ampicilline', 'premiere', 'Endométrite'],
      ['metronidazole', 'premiere', 'Endométrite'],
      ['gentamicine', 'alternative', 'Endométrite'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Hémorragie abondante.',
        traitement: '- Réanimation',
        clinique: '- Pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Endométrite.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
      {
        nom: 'Perforation utérine',
        description: 'Curetage.',
        traitement: '- Chirurgie',
        clinique: '- Douleur',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon avec un traitement adapté',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Lochies fétides', 'frequent'],
      ['Pâleur', 'frequent'],
    ],
    sources: [
      'WHO recommendations for the prevention and treatment of postpartum haemorrhage',
      'RCOG — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Utérotoniques, antibiotiques, transfert', '- Saignement abondant, fièvre'],
      hgr: ['- Échographie, évacuation, transfusion', ''],
      tert: ['', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Saignement abondant dans les semaines suivant l’accouchement',
    },
    formes: [
      {
        nom: 'Rétention avec endométrite',
        type: 'commune',
        description: 'Cause la plus fréquente.',
        terrain: '- 1 à 2 semaines après l’accouchement',
        fonctionnels: '- Saignement, douleurs',
        generaux: '- Fièvre',
        physiques: '- Utérus gros, mou, sensible',
        paraclinique: '- Rétention à l’échographie',
        etiologies: '- Délivrance incomplète',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },
];
