'use strict';

/**
 * Lot 47 (phase 2, dermatologie pédiatrique) — dermatite atopique de l'enfant, dermite du siège,
 * molluscum contagiosum, hémangiomes infantiles, verrues. Rédigé par IA (OMS, Nelson, Guide
 * clinique et thérapeutique) : à valider.
 */

const DERMPED = { departement: 'pediatrie', specialite: 'Dermatologie pédiatrique' };

module.exports = [
  // =================================================================== Dermatite atopique enfant
  {
    ...DERMPED,
    slug: 'dermatite-atopique-enfant',
    nom: 'Dermatite atopique de l’enfant',
    resume:
      'Eczéma chronique prurigineux et récidivant du nourrisson et de l’enfant (terrain atopique : asthme, rhinite allergique familiaux) : nourrisson, plaques suintantes des joues, du front et des faces d’extension ; enfant, plis des coudes et des genoux, peau sèche ; sur peau noire, lésions souvent papuleuses, folliculaires, avec hyper- ou hypopigmentation post-inflammatoire ; émollients quotidiens, dermocorticoïdes en cures courtes lors des poussées, traitement des surinfections (impétiginisation, eczéma herpétiforme) ; éviter les savons agressifs et la dépigmentation.',
    definition:
      'Dermatose inflammatoire chronique, prurigineuse, évoluant par poussées, liée à une altération de la barrière cutanée et à une réponse immunitaire de type allergique, débutant le plus souvent avant 2 ans.',
    physiopathologie:
      '## Mécanismes\n- **Altération de la barrière cutanée** (mutations de la filaggrine) → sécheresse, pénétration des allergènes et des irritants\n- Inflammation de type Th2, **prurit** → grattage → aggravation (cercle vicieux)\n- Colonisation par **Staphylococcus aureus** (surinfections)\n\n## Facteurs aggravants\n- Savons agressifs, eau chaude, chaleur et transpiration, laine, détergents, stress, infections\n- Allergie alimentaire chez le nourrisson atteint de formes sévères (lait de vache, œuf, arachide)',
    diagnostic:
      '## Clinique\n- **Prurit** (grattage, troubles du sommeil, irritabilité)\n- **Nourrisson** : plaques rouges suintantes et croûteuses des **joues**, du front, du cuir chevelu, des faces d’extension (respect du nez et du siège)\n- **Enfant** : lésions des **plis** (coudes, genoux, cou, poignets), lichénification, **xérose** cutanée\n- Peau foncée : formes **papuleuses et folliculaires**, lichénification marquée, **troubles pigmentaires** post-inflammatoires\n- Antécédents personnels ou familiaux d’atopie\n\n## Complications à reconnaître\n- **Impétiginisation** (croûtes jaunâtres)\n- **Eczéma herpétiforme** (pustules ombiliquées, fièvre : urgence)\n\n## Examens\n- Aucun le plus souvent ; prélèvement bactériologique si surinfection ; avis spécialisé si suspicion d’allergie alimentaire',
    examens: [
      ['deuxieme_intention', 'nfs', 'Éosinophilie (non indispensable).'],
      ['etiologique', 'examen-mycologique', 'Diagnostic différentiel (teigne, dermatophytie).'],
    ],
    scores: [],
    differentiels: [
      ['gale-enfant', 'Prurit familial, sillons, lésions des mains et des organes génitaux.'],
      ['dermatophyties-et-pityriasis-versicolor', 'Lésions annulaires, examen mycologique.'],
      ['Dermite séborrhéique', 'Nourrisson, croûtes du cuir chevelu, siège, peu de prurit.'],
      ['dermatite-atopique-adulte', 'Fiche de l’adulte.'],
      ['dermatoses-associees-au-vih', 'Prurigo, dermatoses sévères chez l’enfant VIH.'],
    ],
    etiologies:
      '## Facteurs\n- Prédisposition génétique, altération de la barrière cutanée, facteurs environnementaux',
    principes: [
      [
        'Soins de base (toujours)',
        'Restaurer la barrière cutanée.',
        '- **Émollients** 1 à 2 fois par jour sur tout le corps (vaseline, glycérine, beurre de karité pur, crèmes simples)\n- Bain ou douche courts, eau tiède, **savon doux** ou sans savon, séchage en tamponnant\n- Vêtements en coton, ongles courts ; éviter la **dépigmentation** et les produits parfumés',
      ],
      [
        'Poussées',
        'Calmer l’inflammation.',
        '- **Dermocorticoïdes** une fois par jour sur les lésions jusqu’à amélioration (souvent 5 à 15 jours), puis espacement : **hydrocortisone** 1 % (visage, nourrisson), **bétaméthasone** (corps, enfant) ; **pas de clobétasol** chez l’enfant sauf avis spécialisé\n- Antihistaminique sédatif le soir si prurit insomniant (chlorphénamine, prométhazine > 2 ans)',
      ],
      [
        'Complications',
        'Traiter.',
        '- Impétiginisation : soins antiseptiques, **acide fusidique** local ou **cloxacilline** orale si étendue\n- **Eczéma herpétiforme** : **aciclovir** urgent (oral ou IV)\n- Formes sévères : avis spécialisé',
      ],
    ],
    molecules: [
      ['hydrocortisone', 'premiere', 'Dermocorticoïde faible (visage, nourrisson)'],
      ['betamethasone-topique', 'premiere', 'Dermocorticoïde (corps)'],
      ['chlorphenamine', 'adjuvant', 'Prurit insomniant'],
      ['acide-fusidique', 'alternative', 'Impétiginisation localisée'],
      ['cloxacilline', 'alternative', 'Impétiginisation étendue'],
      ['aciclovir', 'premiere', 'Eczéma herpétiforme'],
    ],
    complications: [
      {
        nom: 'Impétiginisation',
        fiche: 'impetigo',
        description: 'Surinfection staphylococcique.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Croûtes jaunâtres',
        paraclinique: '',
      },
      {
        nom: 'Eczéma herpétiforme (Kaposi-Juliusberg)',
        fiche: 'herpes-cutaneo-muqueux',
        description: 'Surinfection herpétique.',
        traitement: '- Aciclovir urgent',
        clinique: '- Vésicules et pustules ombiliquées, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Troubles du sommeil et retentissement',
        description: 'Prurit.',
        traitement: '- Contrôle de la maladie',
        clinique: '- Irritabilité',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration ou guérison chez la majorité avant l’adolescence ; marche atopique possible (asthme, rhinite)',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Lésions eczématiformes', 'tres_frequent'],
      ['Plaques érythémato-squameuses', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Émollients, dermocorticoïdes, conseils', '- Échec, forme étendue, eczéma herpétiforme'],
      hgr: ['- Traitement des surinfections', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dermatite atopique du nourrisson',
        type: 'commune',
        description: 'Joues, convexités.',
        terrain: '- Nourrisson de 3 mois à 2 ans',
        fonctionnels: '- Prurit, irritabilité',
        generaux: '',
        physiques: '- Plaques suintantes des joues',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Dermatite atopique de l’enfant',
        type: 'evolutive',
        description: 'Plis.',
        terrain: '- Enfant > 2 ans',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Lichénification des plis, xérose',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Eczéma herpétiforme',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Enfant atopique',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre',
        physiques: '- Vésicules ombiliquées',
        paraclinique: '',
        etiologies: '- Herpès simplex',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Dermite du siège
  {
    ...DERMPED,
    slug: 'dermite-du-siege',
    nom: 'Dermite du siège',
    resume:
      'Érythème fessier du nourrisson, très fréquent : dermite d’irritation par contact prolongé avec l’urine et les selles (respect des plis), souvent surinfectée par Candida (atteinte des plis, pustules satellites) ; changes fréquents, nettoyage à l’eau, séchage, pâte à l’oxyde de zinc, laisser les fesses à l’air ; antifongique local si candidose ; penser à une diarrhée, une maltraitance-négligence, ou une maladie de peau sous-jacente si résistance.',
    definition:
      'Inflammation de la peau de la zone recouverte par la couche (fesses, organes génitaux, plis inguinaux) chez le nourrisson, le plus souvent par irritation, compliquée ou non de candidose.',
    physiopathologie:
      '## Mécanismes\n- **Occlusion** et humidité, contact prolongé avec l’**urine** (ammoniaque) et les **selles** (enzymes digestives, surtout en cas de diarrhée)\n- Frottements, savons, lingettes parfumées\n- Surinfection : **Candida albicans** (après antibiotiques, diarrhée), plus rarement bactérienne (staphylocoque, streptocoque)',
    diagnostic:
      '## Clinique\n- **Dermite d’irritation** : érythème des convexités (fesses, pubis, faces internes des cuisses) **respectant les plis**\n- **Candidose** : érythème vif, suintant, **atteignant les plis**, bordure en collerette, **pustules satellites**, souvent muguet buccal associé\n- Formes sévères : érosions, ulcérations, papules\n\n## Rechercher\n- Diarrhée, antibiothérapie récente, fréquence des changes, type de couche (tissu)\n- Lésions ailleurs (dermatite séborrhéique, psoriasis, gale), maltraitance ou négligence\n\n## Examens\n- Aucun le plus souvent ; examen mycologique si doute',
    examens: [['deuxieme_intention', 'examen-mycologique', 'Candida.']],
    scores: [],
    differentiels: [
      ['Dermite séborrhéique', 'Plis, cuir chevelu, squames grasses.'],
      ['Psoriasis du siège', 'Plaques bien limitées, résistance au traitement.'],
      ['impetigo', 'Bulles, croûtes jaunâtres.'],
      ['gale-enfant', 'Nodules, prurit familial.'],
      ['maltraitance-enfant', 'Brûlures, négligence sévère.'],
    ],
    etiologies: '## Facteurs\n- Changes insuffisants, diarrhée, antibiotiques, produits irritants',
    principes: [
      [
        'Soins',
        'Supprimer l’irritation.',
        '- **Changes fréquents** (dès qu’humide ou souillé), nettoyage à l’**eau tiède** (savon doux si selles), **séchage** soigneux\n- **Laisser les fesses à l’air** plusieurs fois par jour\n- **Pâte à l’oxyde de zinc** en couche épaisse à chaque change\n- Éviter lingettes parfumées, talc, produits colorés et remèdes traditionnels',
      ],
      [
        'Candidose',
        'Traiter le champignon.',
        '- **Nystatine** crème ou **miconazole** / **clotrimazole** 2 fois par jour pendant 7–14 jours\n- Muguet associé : nystatine orale',
      ],
      [
        'Formes inflammatoires ou surinfectées',
        'Traiter.',
        '- **Hydrocortisone** 1 % pendant quelques jours si inflammation intense\n- Surinfection bactérienne : antiseptique, antibiotique local ou oral',
      ],
    ],
    molecules: [
      ['oxyde-de-zinc-pommade', 'premiere', 'Protection'],
      ['nystatine', 'premiere', 'Candidose'],
      ['miconazole-nitrate', 'alternative', 'Candidose'],
      ['clotrimazole', 'alternative', 'Candidose'],
      ['hydrocortisone', 'adjuvant', 'Inflammation intense (courte durée)'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'impetigo',
        description: 'Staphylocoque, streptocoque.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Pustules, croûtes',
        paraclinique: '',
      },
      {
        nom: 'Ulcérations',
        description: 'Formes sévères, diarrhée prolongée.',
        traitement: '- Soins, traitement de la diarrhée',
        clinique: '- Érosions douloureuses',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison rapide avec les soins ; récidives fréquentes si les facteurs persistent',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Pleurs excessifs', 'frequent'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Conseils, oxyde de zinc, antifongique', '- Échec, lésions atypiques'],
      hgr: ['', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dermite d’irritation',
        type: 'commune',
        description: 'Respect des plis.',
        terrain: '- Nourrisson',
        fonctionnels: '- Pleurs au change',
        generaux: '',
        physiques: '- Érythème des convexités',
        paraclinique: '',
        etiologies: '- Urine, selles',
        syndromes: [],
      },
      {
        nom: 'Candidose du siège',
        type: 'etiologique',
        description: 'Atteinte des plis.',
        terrain: '- Après antibiotiques, diarrhée',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pustules satellites, plis atteints',
        paraclinique: '- Candida',
        etiologies: '- Candida albicans',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Molluscum
  {
    ...DERMPED,
    slug: 'molluscum-contagiosum',
    nom: 'Molluscum contagiosum',
    resume:
      'Infection cutanée virale bénigne (poxvirus) fréquente chez l’enfant : petites papules fermes, couleur de peau ou nacrées, ombiliquées au centre, isolées ou groupées (tronc, plis, visage), contagieuses par contact et auto-inoculation ; régression spontanée en 6 à 18 mois ; abstention ou curetage doux ; formes profuses, géantes ou du visage chez l’enfant ou l’adolescent : penser au VIH ; lésions génitales chez l’adolescent : infection sexuellement transmise (chez le jeune enfant, rechercher aussi des abus).',
    definition:
      'Infection de l’épiderme due au virus du molluscum contagiosum (poxvirus), responsable de papules ombiliquées bénignes.',
    physiopathologie:
      '## Transmission\n- Contact direct peau à peau, objets (serviettes), bains, piscines ; **auto-inoculation** par grattage\n- Plus étendu chez l’enfant atopique et **immunodéprimé** (VIH : lésions nombreuses, géantes, du visage)',
    diagnostic:
      '## Clinique\n- **Papules** de 2–5 mm, fermes, lisses, couleur de peau ou nacrées, **ombiliquées** au centre (exprimant une substance blanchâtre)\n- Groupées sur le tronc, les plis, les bras, le visage ; parfois eczéma autour\n- Inflammation précédant la guérison\n- **Signes d’alerte** : lésions très nombreuses, géantes, sur le visage d’un enfant plus grand → **test VIH**\n\n## Examens\n- Diagnostic clinique ; test VIH si forme atypique',
    examens: [
      ['etiologique', 'tdr-vih', 'Formes profuses ou géantes.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Forme atypique.'],
    ],
    scores: [],
    differentiels: [
      ['verrues', 'Surface rugueuse, pas d’ombilication.'],
      ['varicelle', 'Vésicules fébriles d’âges différents.'],
      ['Cryptococcose cutanée', 'Lésions ombiliquées chez l’immunodéprimé : biopsie.'],
      ['dermatoses-associees-au-vih', 'Autres lésions du VIH.'],
    ],
    etiologies: '## Agent\n- Virus du molluscum contagiosum (poxvirus)',
    principes: [
      [
        'Abstention',
        'Guérison spontanée.',
        '- Explication : maladie bénigne, régression en quelques mois à 1–2 ans\n- Éviter de gratter, ne pas partager les serviettes, ongles courts\n- Traiter l’eczéma associé (émollients)',
      ],
      [
        'Traitements',
        'Si gêne ou extension.',
        '- **Curetage** ou expression des lésions (après crème anesthésiante), cryothérapie\n- Traitements locaux irritants en centre spécialisé\n- **VIH** : traitement antirétroviral (régression)',
      ],
    ],
    molecules: [['dolutegravir', 'adjuvant', 'Molluscum du VIH (traitement antirétroviral)']],
    complications: [
      {
        nom: 'Eczéma péri-lésionnel',
        description: 'Réaction inflammatoire.',
        traitement: '- Émollients, dermocorticoïde faible',
        clinique: '- Plaques eczémateuses',
        paraclinique: '',
      },
      {
        nom: 'Surinfection bactérienne',
        fiche: 'impetigo',
        description: 'Grattage.',
        traitement: '- Antiseptiques',
        clinique: '- Pustules',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent : guérison spontanée sans cicatrice dans la majorité des cas',
    urgences: [],
    symptomes: [
      ['Papules cutanées', 'tres_frequent'],
      ['Prurit', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Diagnostic, conseils, test VIH si forme atypique', '- Forme profuse'],
      hgr: ['', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Molluscum de l’enfant',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Enfant de 2 à 10 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Papules ombiliquées groupées',
        paraclinique: '',
        etiologies: '- Poxvirus',
        syndromes: [],
      },
      {
        nom: 'Molluscum profus du VIH',
        type: 'terrain',
        description: 'Immunodépression.',
        terrain: '- Enfant VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Lésions nombreuses, géantes, du visage',
        paraclinique: '- CD4 bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hémangiomes
  {
    ...DERMPED,
    slug: 'hemangiomes-infantiles',
    nom: 'Hémangiomes infantiles',
    resume:
      'Tumeurs vasculaires bénignes les plus fréquentes du nourrisson (plus chez la fille et le prématuré) : absentes ou discrètes à la naissance, croissance rapide les premiers mois (maximum vers 5 mois) puis régression lente sur plusieurs années ; la plupart ne nécessitent que la surveillance ; traiter par propranolol oral (2–3 mg/kg/j) les hémangiomes compliqués ou à risque : ulcérés, périoculaires (amblyopie), des lèvres, du nez, de la région « barbe » (atteinte des voies aériennes), segmentaires étendus, multiples (atteinte hépatique).',
    definition:
      'Prolifération bénigne des cellules endothéliales apparaissant dans les premières semaines de vie, avec une phase de croissance puis une involution spontanée.',
    physiopathologie:
      '## Évolution naturelle\n- **Croissance** rapide de 0 à 5 mois, plateau, puis **involution** progressive jusqu’à 5–10 ans, laissant parfois une peau fripée ou des télangiectasies\n\n## Types\n- **Superficiel** (rouge vif, « fraise »), **profond** (bleuté, sous-cutané), **mixte**\n- **Segmentaires** du visage : syndrome PHACE (malformations cérébrales, cardiaques, oculaires)',
    diagnostic:
      '## Clinique\n- Tache rouge ou bleutée apparaissant dans les premières semaines, puis tuméfaction rouge vif, tiède, compressible\n\n## Hémangiomes à risque (avis et traitement)\n- **Périoculaires** (amblyopie, astigmatisme)\n- **Lèvres, nez, oreille** (préjudice esthétique)\n- Région **« barbe »** (menton, cou) : hémangiome sous-glottique → stridor\n- **Ulcérés** (douleur, saignement, infection), siège, plis\n- **Segmentaires** étendus du visage (PHACE), lombosacrés (dysraphisme)\n- **Multiples** (> 5) : échographie hépatique\n\n## Examens\n- Diagnostic clinique ; échographie Doppler si doute ou forme profonde, échographie hépatique si multiples',
    examens: [
      ['deuxieme_intention', 'echographie-parties-molles', 'Forme profonde, doute diagnostique.'],
      ['gravite', 'echographie-abdominale', 'Hémangiomes hépatiques (formes multiples).'],
      ['premiere_intention', 'ecg', 'Avant propranolol si bradycardie ou cardiopathie.'],
      ['gravite', 'echocardiographie', 'Syndrome PHACE.'],
    ],
    scores: [],
    differentiels: [
      [
        'Malformation vasculaire',
        'Présente dès la naissance, croît avec l’enfant, ne régresse pas (angiome plan, malformation veineuse).',
      ],
      ['Granulome pyogénique', 'Lésion rouge qui saigne facilement, enfant plus grand.'],
      ['Tumeur maligne des tissus mous', 'Masse ferme, croissance anormale : biopsie.'],
      ['abces-phlegmons-parties-molles', 'Masse inflammatoire fébrile.'],
    ],
    etiologies: '## Facteurs\n- Sexe féminin, prématurité, faible poids de naissance, grossesse multiple',
    principes: [
      [
        'Surveillance',
        'La plupart des cas.',
        '- Explication de l’évolution naturelle, photographies de suivi, surveillance de la croissance les premiers mois',
      ],
      [
        'Propranolol',
        'Hémangiomes à risque.',
        '- **Propranolol** oral **2–3 mg/kg/j** en 2 prises (débuter à 1 mg/kg/j et augmenter), **pendant les repas**, pendant au moins 6 mois\n- Examen cardiaque avant (± ECG), surveillance de la fréquence cardiaque et de la tension au début\n- Suspendre en cas de jeûne, vomissements, bronchiolite ou asthme (risque d’**hypoglycémie** et de bronchospasme)',
      ],
      [
        'Soins locaux',
        'Ulcérations.',
        '- Pansements gras, antiseptique, antalgiques ; **timolol** collyre local possible pour les petits hémangiomes superficiels (avis spécialisé)\n- Chirurgie ou laser pour les séquelles',
      ],
    ],
    molecules: [
      ['propranolol', 'premiere', 'Hémangiomes à risque'],
      ['timolol-collyre', 'alternative', 'Petits hémangiomes superficiels (local)'],
      ['paracetamol', 'adjuvant', 'Douleur des ulcérations'],
    ],
    complications: [
      {
        nom: 'Ulcération',
        description: 'Phase de croissance, siège, lèvres.',
        traitement: '- Soins locaux, propranolol',
        clinique: '- Douleur, saignement',
        paraclinique: '',
      },
      {
        nom: 'Amblyopie',
        description: 'Hémangiome périoculaire.',
        traitement: '- Propranolol, ophtalmologie',
        clinique: '- Occlusion de l’œil',
        paraclinique: '- Acuité visuelle',
      },
      {
        nom: 'Obstruction des voies aériennes',
        description: 'Hémangiome sous-glottique.',
        traitement: '- Propranolol urgent',
        clinique: '- Stridor',
        paraclinique: '- Endoscopie',
      },
    ],
    evolution:
      '## Pronostic\n- Involution spontanée ; séquelles cutanées possibles ; excellente efficacité du propranolol dans les formes à risque',
    urgences: [],
    symptomes: [
      ['Tuméfaction des parties molles', 'tres_frequent'],
      ['Taches cutanées hypopigmentées', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Surveillance, repérage des formes à risque, orientation',
        '- Hémangiome périoculaire, ulcéré, stridor',
      ],
      hgr: ['- Propranolol (début sous surveillance)', ''],
      tert: ['- Dermatologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hémangiome superficiel',
        type: 'commune',
        description: 'Lésion « fraise ».',
        terrain: '- Nourrisson, fille, prématuré',
        fonctionnels: '',
        generaux: '',
        physiques: '- Tuméfaction rouge vif',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hémangiome compliqué ou à risque',
        type: 'gravite',
        description: 'Traitement nécessaire.',
        terrain: '',
        fonctionnels: '- Douleur, stridor',
        generaux: '',
        physiques: '- Ulcération, localisation périoculaire',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Verrues
  {
    ...DERMPED,
    slug: 'verrues',
    nom: 'Verrues',
    resume:
      'Tumeurs cutanées bénignes dues aux papillomavirus humains (HPV), très fréquentes chez l’enfant : verrues vulgaires (mains, doigts, rugueuses), plantaires (douloureuses à la marche), planes (visage, dos des mains) ; contagieuses, régression spontanée fréquente en 1 à 2 ans ; traitement si gêne : acide salicylique local, cryothérapie ; verrues nombreuses ou résistantes : penser à l’immunodépression (VIH) ; condylomes ano-génitaux chez l’enfant : rechercher des abus sexuels.',
    definition:
      'Prolifération épidermique bénigne induite par les papillomavirus humains, transmise par contact direct ou indirect.',
    physiopathologie:
      '## Transmission\n- Contact direct, sols humides (douches, piscines), auto-inoculation\n- Favorisées par les microtraumatismes, la marche pieds nus, l’**immunodépression**\n\n## Types\n- **Vulgaires** (HPV 2, 4), **plantaires** (HPV 1), **planes** (HPV 3, 10), **condylomes** ano-génitaux (HPV 6, 11)',
    diagnostic:
      '## Clinique\n- **Verrue vulgaire** : papule ferme, surface rugueuse, kératosique, points noirs (capillaires thrombosés), doigts, mains, genoux\n- **Verrue plantaire** : lésion enchâssée, douloureuse à la pression, interrompant les dermatoglyphes\n- **Verrues planes** : petites papules lisses, couleur de peau, alignées sur les traces de grattage\n- **Condylomes** ano-génitaux : chez l’enfant, rechercher des **abus sexuels** (transmission aussi possible à l’accouchement ou par les mains)\n\n## Examens\n- Diagnostic clinique ; test VIH si lésions profuses ou résistantes',
    examens: [['etiologique', 'tdr-vih', 'Verrues profuses ou résistantes.']],
    scores: [],
    differentiels: [
      ['molluscum-contagiosum', 'Papules lisses ombiliquées.'],
      ['Cor plantaire', 'Zone d’appui, dermatoglyphes conservés.'],
      ['Lichen plan', 'Papules violacées prurigineuses.'],
      ['violences-sexuelles', 'Condylomes ano-génitaux de l’enfant.'],
    ],
    etiologies: '## Agent\n- Papillomavirus humains (HPV)',
    principes: [
      [
        'Abstention',
        'Souvent suffisante.',
        '- Régression spontanée fréquente ; éviter de gratter ou couper, port de sandales dans les douches',
      ],
      [
        'Traitement local',
        'Si gêne ou douleur.',
        '- **Acide salicylique** (10–20 %) chaque soir après décapage doux (pierre ponce), en protégeant la peau saine, pendant plusieurs semaines\n- **Cryothérapie** (azote liquide) en centre équipé, douloureuse chez le jeune enfant\n- Pas de traitements agressifs laissant des cicatrices',
      ],
      [
        'Situations particulières',
        'Rechercher une cause.',
        '- Verrues profuses : VIH → traitement antirétroviral\n- Condylomes de l’enfant : évaluation de protection de l’enfance ; adolescent : dépistage des IST, vaccination HPV',
      ],
    ],
    molecules: [['acide-salicylique', 'premiere', 'Traitement local']],
    complications: [
      {
        nom: 'Douleur à la marche',
        description: 'Verrues plantaires.',
        traitement: '- Traitement local',
        clinique: '- Boiterie',
        paraclinique: '',
      },
      {
        nom: 'Extension et récidives',
        description: 'Auto-inoculation, immunodépression.',
        traitement: '- Traitement de la cause',
        clinique: '- Lésions multiples',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Régression spontanée chez la majorité des enfants en 1 à 2 ans ; récidives fréquentes',
    urgences: [],
    symptomes: [
      ['Papules cutanées', 'tres_frequent'],
      ['Boiterie', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Conseils, acide salicylique', '- Condylomes de l’enfant, forme profuse'],
      hgr: ['- Cryothérapie', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Verrues vulgaires',
        type: 'commune',
        description: 'Mains, doigts.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '',
        generaux: '',
        physiques: '- Papules rugueuses',
        paraclinique: '',
        etiologies: '- HPV',
        syndromes: [],
      },
      {
        nom: 'Verrues plantaires',
        type: 'topographique',
        description: 'Douloureuses.',
        terrain: '- Marche pieds nus',
        fonctionnels: '- Douleur à la marche',
        generaux: '',
        physiques: '- Lésion plantaire enchâssée',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Condylomes ano-génitaux de l’enfant',
        type: 'gravite',
        description: 'Abus possible.',
        terrain: '- Jeune enfant',
        fonctionnels: '',
        generaux: '',
        physiques: '- Végétations ano-génitales',
        paraclinique: '- Bilan IST',
        etiologies: '- HPV 6, 11',
        syndromes: [],
      },
    ],
  },
];
