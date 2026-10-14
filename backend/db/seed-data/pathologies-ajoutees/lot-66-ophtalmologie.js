'use strict';

/**
 * Lot 66 (phase 2, ophtalmologie) — onchocercose oculaire, baisse brutale de l'acuité visuelle,
 * ptérygion, troubles de la réfraction. Rédigé par IA (OMS, Guide clinique et thérapeutique) : à valider.
 */

const OPH = { departement: 'chirurgie', specialite: 'Ophtalmologie' };

module.exports = [
  // =================================================================== Onchocercose oculaire
  {
    ...OPH,
    slug: 'onchocercose-oculaire',
    nom: 'Onchocercose oculaire',
    resume:
      'Atteinte oculaire de l’onchocercose (« cécité des rivières »), endémique dans de nombreuses zones de la RDC proches des rivières à courant rapide (simulies) : microfilaires vivantes dans la chambre antérieure et la cornée, kératite ponctuée puis kératite sclérosante, uvéite antérieure, choriorétinite, atrophie optique, jusqu’à la cécité bilatérale ; prurit et nodules cutanés associés ; diagnostic par biopsie cutanée exsangue et examen à la lampe à fente ; ivermectine annuelle ou semestrielle (traitement de masse sous directive communautaire), doxycycline 6 semaines contre les Wolbachia ; prudence en zone de loase (encéphalopathie sous ivermectine si microfilarémie à Loa loa élevée).',
    definition:
      'Lésions oculaires dues à la réaction inflammatoire contre les microfilaires d’Onchocerca volvulus migrant dans les tissus de l’œil.',
    physiopathologie:
      '## Cycle\n- Transmission par la piqûre de **simulies** (rivières à courant rapide), vers adultes dans des **nodules** sous-cutanés, **microfilaires** migrant dans la peau et l’œil\n\n## Atteinte oculaire\n- Mort des microfilaires → inflammation (réaction aux Wolbachia)\n- **Segment antérieur** : kératite ponctuée (opacités « en flocon de neige »), puis **kératite sclérosante** (cécité), **uvéite antérieure**, glaucome secondaire, cataracte\n- **Segment postérieur** : **choriorétinite**, **atrophie optique**\n- Charge parasitaire et durée d’exposition déterminent la sévérité',
    diagnostic:
      '## Clinique\n- Résidence en zone d’endémie, **prurit**, nodules (crêtes iliaques, genoux, tête chez l’enfant), dépigmentation (« peau de léopard »)\n- **Photophobie**, larmoiement, œil rouge, baisse de vision, rétrécissement du champ visuel (atrophie optique), cécité\n\n## Examens\n- **Lampe à fente** : microfilaires dans la chambre antérieure (après tête penchée en avant), opacités cornéennes\n- **Fond d’œil** : choriorétinite, atrophie optique\n- **Biopsie cutanée exsangue** (skin snip) : microfilaires\n- Rechercher une **loase** (frottis sanguin de midi) avant ivermectine en zone de co-endémie',
    examens: [
      ['confirmation', 'biopsie-cutanee-exsangue', 'Microfilaires dermiques.'],
      ['premiere_intention', 'acuite-visuelle', 'Baisse de vision.'],
      ['confirmation', 'fond-d-oeil', 'Choriorétinite, atrophie optique.'],
      ['gravite', 'tonometrie', 'Glaucome secondaire.'],
      ['etiologique', 'recherche-microfilaires', 'Loase associée (microfilarémie à Loa loa).'],
      ['premiere_intention', 'nfs', 'Éosinophilie.'],
    ],
    scores: [],
    differentiels: [
      ['onchocercose', 'Formes cutanées et générales de la maladie.'],
      ['trachome', 'Trichiasis, opacités cornéennes cicatricielles.'],
      ['glaucome', 'Atrophie optique glaucomateuse.'],
      ['uveites', 'Autres causes d’uvéite.'],
      ['carence-en-vitamine-a', 'Xérophtalmie de l’enfant.'],
    ],
    etiologies: '## Cause\n- Onchocerca volvulus transmis par les simulies',
    principes: [
      [
        'Traitement individuel',
        'Tuer les microfilaires.',
        '- **Ivermectine** 150 µg/kg en dose unique, répétée tous les 6–12 mois (plusieurs années)\n- **Doxycycline** 100–200 mg/j pendant **6 semaines** (Wolbachia, effet sur les vers adultes) ; contre-indiquée chez l’enfant < 8 ans et la femme enceinte\n- Uvéite : corticoïde et cycloplégique locaux\n- Nodulectomie des nodules de la tête',
      ],
      [
        'Précautions',
        'Loase.',
        '- En zone de co-endémie : rechercher la microfilarémie à **Loa loa** ; si élevée, risque d’**encéphalopathie** sous ivermectine (doxycycline d’abord, surveillance)\n- Ivermectine contre-indiquée chez l’enfant < 15 kg et la femme enceinte',
      ],
      [
        'Santé publique',
        'Éliminer la transmission.',
        '- **Traitement par ivermectine sous directive communautaire** annuel ou semestriel\n- Lutte antivectorielle, réhabilitation des aveugles',
      ],
    ],
    molecules: [
      ['ivermectine', 'premiere', 'Microfilaricide'],
      ['doxycycline', 'deuxieme', 'Anti-Wolbachia, 6 semaines'],
      ['dexamethasone', 'adjuvant', 'Collyre (uvéite)'],
      ['atropine', 'adjuvant', 'Cycloplégie'],
    ],
    complications: [
      {
        nom: 'Kératite sclérosante et cécité',
        description: 'Atteinte cornéenne chronique.',
        traitement: '- Prévention par l’ivermectine',
        clinique: '- Opacité cornéenne',
        paraclinique: '',
      },
      {
        nom: 'Atrophie optique',
        description: 'Atteinte du nerf optique.',
        traitement: '- Aucun traitement curatif',
        clinique: '- Rétrécissement du champ visuel',
        paraclinique: '- Fond d’œil',
      },
      {
        nom: 'Glaucome secondaire',
        fiche: 'glaucome',
        description: 'Uvéite.',
        traitement: '- Hypotonisants',
        clinique: '',
        paraclinique: '- Tonométrie',
      },
      {
        nom: 'Encéphalopathie à Loa loa',
        fiche: 'loase',
        description: 'Ivermectine en cas de microfilarémie élevée.',
        traitement: '- Réanimation',
        clinique: '- Troubles de conscience',
        paraclinique: '- Frottis sanguin',
      },
    ],
    evolution:
      '## Pronostic\n- Lésions antérieures réversibles sous traitement ; atrophie optique et kératite sclérosante définitives',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Troubles visuels', 'tres_frequent'],
      ['Photophobie', 'frequent'],
      ['Larmoiement', 'frequent'],
      ['Yeux rouges', 'frequent'],
      ['Nodules sous-cutanés', 'frequent'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: [
        '- Ivermectine (distribution communautaire), dépistage de la baisse de vision',
        '- Baisse de vision, œil rouge douloureux',
      ],
      hgr: ['- Biopsie cutanée exsangue, doxycycline', ''],
      tert: ['- Ophtalmologie : lampe à fente, fond d’œil', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Kératite onchocerquienne',
        type: 'commune',
        description: 'Segment antérieur.',
        terrain: '- Zone d’endémie',
        fonctionnels: '- Photophobie, larmoiement',
        generaux: '',
        physiques: '- Opacités ponctuées, microfilaires en chambre antérieure',
        paraclinique: '- Lampe à fente',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Atteinte postérieure avec cécité',
        type: 'gravite',
        description: 'Choriorétinite, atrophie optique.',
        terrain: '- Exposition prolongée',
        fonctionnels: '- Cécité',
        generaux: '',
        physiques: '',
        paraclinique: '- Fond d’œil',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Baisse brutale de l'acuité visuelle
  {
    ...OPH,
    slug: 'baisse-brutale-acuite-visuelle',
    nom: 'Baisse brutale de l’acuité visuelle',
    resume:
      'Urgence ophtalmologique : perte de vision survenant en quelques minutes à quelques jours. Œil rouge et douloureux : glaucome aigu par fermeture de l’angle, kératite, uvéite, endophtalmie, traumatisme. Œil blanc et indolore : occlusion de l’artère centrale de la rétine, occlusion veineuse, décollement de rétine (phosphènes, myodésopsies, voile), hémorragie du vitré (diabète, drépanocytose), névrite optique, neuropathie optique ischémique, causes neurologiques (AVC, hypertension intracrânienne, intoxication au méthanol, éclampsie). Acuité visuelle, réflexe pupillaire, tension oculaire, fond d’œil, échographie oculaire ; orientation en urgence vers l’ophtalmologiste ; glaucome aigu traité immédiatement (acétazolamide, pilocarpine, timolol).',
    definition:
      'Diminution rapide (minutes à quelques jours) de l’acuité visuelle d’un ou des deux yeux, symptôme d’une pathologie oculaire ou neurologique souvent menaçante.',
    physiopathologie:
      '## Œil rouge douloureux\n- **Glaucome aigu** par fermeture de l’angle, **kératite**, **uvéite**, **endophtalmie**, traumatismes\n\n## Œil blanc indolore\n- **Vasculaires** : occlusion de l’artère ou de la veine centrale de la rétine (HTA, diabète, drépanocytose, embolies), **neuropathie optique ischémique**\n- **Hémorragie du vitré** (diabète, drépanocytose), **décollement de rétine** (myopie forte, traumatisme)\n- **Névrite optique** (sclérose en plaques, infections, toxiques : **méthanol**, éthambutol)\n- **Neurologiques** : AVC occipital, hypertension intracrânienne, éclampsie, hypophyse',
    diagnostic:
      '## Interrogatoire\n- Mode d’installation, uni- ou bilatéral, douleur, phosphènes, voile, terrain (diabète, HTA, drépanocytose, grossesse, VIH), traumatisme, médicaments, alcool frelaté\n\n## Examen\n- **Acuité visuelle** de chaque œil\n- **Réflexe pupillaire** (déficit afférent : nerf optique, rétine)\n- Rougeur, cornée (fluorescéine), chambre antérieure, **tension oculaire** (œil dur)\n- **Fond d’œil** (rétine pâle avec macula rouge cerise : occlusion artérielle ; hémorragies diffuses : occlusion veineuse ; œdème papillaire)\n- **Échographie oculaire** si le fond d’œil est impossible\n- Tension artérielle, glycémie, examen neurologique ; VS et CRP chez le sujet âgé',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Quantifier la baisse.'],
      ['premiere_intention', 'tonometrie', 'Glaucome aigu.'],
      ['confirmation', 'fond-d-oeil', 'Occlusion, décollement, œdème papillaire.'],
      ['deuxieme_intention', 'echographie-oculaire', 'Hémorragie du vitré, décollement de rétine.'],
      ['confirmation', 'test-fluoresceine', 'Kératite.'],
      ['etiologique', 'glycemie', 'Diabète.'],
      ['etiologique', 'nfs', 'Drépanocytose, infection.'],
      ['etiologique', 'scanner-cerebral', 'AVC, hypertension intracrânienne.'],
    ],
    scores: [],
    differentiels: [
      ['cataracte', 'Baisse progressive, non brutale.'],
      ['troubles-de-la-refraction', 'Baisse progressive corrigée par les verres.'],
      ['cephalees-migraine', 'Aura visuelle transitoire.'],
      ['accident-ischemique-transitoire', 'Amaurose transitoire.'],
    ],
    etiologies:
      '## Causes\n- Glaucome aigu, kératite, uvéite, endophtalmie, occlusions vasculaires rétiniennes, décollement de rétine, hémorragie du vitré, névrite optique, méthanol, AVC, éclampsie',
    principes: [
      [
        'Glaucome aigu',
        'Urgence absolue.',
        '- **Acétazolamide** 500 mg IV ou per os, **timolol** collyre, **pilocarpine** collyre, mannitol IV si besoin, antalgiques, antiémétiques\n- Puis iridotomie au laser ou iridectomie (les deux yeux)',
      ],
      [
        'Autres causes',
        'Orienter en urgence.',
        '- Occlusion artérielle récente (< 6 h) : massage oculaire, acétazolamide ; bilan cardiovasculaire\n- Décollement de rétine : chirurgie urgente\n- Névrite optique : corticoïdes ; méthanol : éthanol ou fomépizole, dialyse\n- Traiter le terrain (HTA, diabète, drépanocytose, éclampsie)',
      ],
      [
        'Règles',
        'Ne pas retarder.',
        '- Toute baisse brutale de vision justifie un avis ophtalmologique le jour même\n- Pas de collyre corticoïde ou anesthésiant sans diagnostic',
      ],
    ],
    molecules: [
      ['acetazolamide', 'premiere', 'Glaucome aigu'],
      ['timolol-collyre', 'premiere', 'Glaucome aigu'],
      ['pilocarpine', 'premiere', 'Glaucome aigu (myotique)'],
      ['mannitol', 'alternative', 'Glaucome aigu réfractaire'],
      ['methylprednisolone', 'alternative', 'Névrite optique'],
      ['prednisolone', 'alternative', 'Artérite, névrite'],
      ['acide-acetylsalicylique', 'adjuvant', 'Occlusion vasculaire (prévention)'],
    ],
    complications: [
      {
        nom: 'Cécité définitive',
        description: 'Retard de prise en charge.',
        traitement: '- Réadaptation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Atteinte de l’autre œil',
        fiche: 'glaucome',
        description: 'Glaucome aigu, artérite.',
        traitement: '- Iridotomie préventive',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et du délai ; l’occlusion artérielle et le glaucome aigu se jouent en heures',
    urgences: ['urgence-hypertensive', 'eclampsie'],
    symptomes: [
      ['Troubles visuels', 'tres_frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Yeux rouges', 'frequent'],
      ['Céphalées', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Acuité visuelle, tension artérielle, glycémie ; référer le jour même',
        '- Toute baisse brutale de vision',
      ],
      hgr: ['- Acétazolamide, fond d’œil', ''],
      tert: ['- Ophtalmologie : laser, chirurgie rétinienne', ''],
    },
    alertes: {
      'urgence-hypertensive': 'Baisse de vision avec HTA sévère et œdème papillaire',
      eclampsie: 'Femme enceinte avec troubles visuels, céphalées et HTA',
    },
    formes: [
      {
        nom: 'Glaucome aigu par fermeture de l’angle',
        type: 'commune',
        description: 'Œil rouge douloureux.',
        terrain: '- Adulte de plus de 50 ans, hypermétrope',
        fonctionnels: '- Douleur intense, halos colorés',
        generaux: '- Vomissements',
        physiques: '- Semi-mydriase aréactive, œil dur',
        paraclinique: '- Tension oculaire > 40 mmHg',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Occlusion de l’artère centrale de la rétine',
        type: 'gravite',
        description: 'Œil blanc.',
        terrain: '- HTA, cardiopathie emboligène, drépanocytose',
        fonctionnels: '- Cécité brutale indolore',
        generaux: '',
        physiques: '- Déficit pupillaire afférent',
        paraclinique: '- Rétine pâle, macula rouge cerise',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Décollement de rétine',
        type: 'etiologique',
        description: 'Voile.',
        terrain: '- Myopie forte, traumatisme',
        fonctionnels: '- Phosphènes, corps flottants, voile',
        generaux: '',
        physiques: '',
        paraclinique: '- Fond d’œil, échographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Ptérygion
  {
    ...OPH,
    slug: 'pterygion',
    nom: 'Ptérygion',
    resume:
      'Repli fibrovasculaire triangulaire de la conjonctive bulbaire (le plus souvent nasal) qui envahit progressivement la cornée, très fréquent en zone tropicale (exposition aux UV, poussière, vent) : irritation, rougeur, sensation de corps étranger, larmoiement ; menace la vision quand il atteint l’axe pupillaire ou induit un astigmatisme ; protection solaire (lunettes, chapeau), larmes artificielles, collyre anti-inflammatoire court en poussée ; chirurgie par exérèse avec autogreffe conjonctivale (récidives fréquentes après exérèse simple) quand il progresse vers l’axe visuel.',
    definition:
      'Prolifération fibrovasculaire dégénérative de la conjonctive bulbaire s’étendant sur la cornée, en forme d’aile.',
    physiopathologie:
      '## Facteurs\n- **Ultraviolets** (soleil tropical, travail à l’extérieur), **poussière**, vent, sécheresse oculaire\n- Dégénérescence élastotique de la conjonctive, prolifération fibrovasculaire envahissant la cornée\n\n## Conséquences\n- Irritation chronique, **astigmatisme**, envahissement de l’**axe visuel**',
    diagnostic:
      '## Clinique\n- Lésion triangulaire charnue, vascularisée, du côté **nasal** (parfois temporal ou bilatérale), tête sur la cornée\n- Rougeur, irritation, **sensation de corps étranger**, **larmoiement**, gêne esthétique\n- **Baisse de vision** si atteinte de l’axe pupillaire ou astigmatisme\n\n## Examens\n- **Acuité visuelle**, **réfraction** (astigmatisme)\n- Distinguer d’une **néoplasie conjonctivale** (lésion gélatineuse, irrégulière, chez le VIH) : biopsie',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Retentissement visuel.'],
      ['deuxieme_intention', 'refraction', 'Astigmatisme induit.'],
      ['etiologique', 'biopsie-histologie', 'Lésion atypique (néoplasie).'],
      ['etiologique', 'tdr-vih', 'Néoplasie conjonctivale suspecte.'],
    ],
    scores: [],
    differentiels: [
      ['Pinguécula', 'Nodule jaunâtre conjonctival ne touchant pas la cornée.'],
      [
        'Néoplasie épidermoïde de la conjonctive',
        'Lésion gélatineuse, leucoplasique, rapidement évolutive (VIH).',
      ],
      ['conjonctivites-adulte', 'Rougeur diffuse, sécrétions.'],
    ],
    etiologies: '## Facteurs\n- Ultraviolets, poussière, vent, sécheresse oculaire',
    principes: [
      [
        'Traitement médical',
        'Soulager.',
        '- **Protection solaire** (lunettes, chapeau), larmes artificielles\n- Poussée inflammatoire : collyre anti-inflammatoire court (fluorométholone) sous surveillance',
      ],
      [
        'Chirurgie',
        'Si progression.',
        '- Indications : envahissement vers l’axe visuel, astigmatisme, gêne importante\n- **Exérèse avec autogreffe conjonctivale** (moins de récidives que l’exérèse simple), mitomycine C en centre spécialisé',
      ],
    ],
    molecules: [
      ['fluorometholone', 'alternative', 'Poussée inflammatoire'],
      ['dexamethasone', 'alternative', 'Collyre postopératoire'],
    ],
    complications: [
      {
        nom: 'Baisse de vision',
        description: 'Atteinte de l’axe visuel, astigmatisme.',
        traitement: '- Chirurgie',
        clinique: '- Baisse de vision',
        paraclinique: '- Réfraction',
      },
      {
        nom: 'Récidive',
        description: 'Après exérèse simple.',
        traitement: '- Autogreffe conjonctivale',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Évolution lente ; bon résultat de la chirurgie avec autogreffe',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'frequent'],
      ['Larmoiement', 'frequent'],
      ['Troubles visuels', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Guide clinique et thérapeutique'],
    niveaux: {
      cs: ['- Conseils de protection, larmes artificielles', '- Ptérygion progressif vers la pupille'],
      hgr: ['- Acuité visuelle, orientation', ''],
      tert: ['- Chirurgie avec autogreffe', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Ptérygion nasal',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Travailleur en plein air',
        fonctionnels: '- Irritation',
        generaux: '',
        physiques: '- Repli triangulaire nasal',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Ptérygion envahissant l’axe visuel',
        type: 'gravite',
        description: 'Indication chirurgicale.',
        terrain: '',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '- Tête sur l’aire pupillaire',
        paraclinique: '- Astigmatisme',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Troubles de la réfraction
  {
    ...OPH,
    slug: 'troubles-de-la-refraction',
    nom: 'Troubles de la réfraction',
    resume:
      'Première cause de déficience visuelle dans le monde et facilement corrigible : myopie (vision floue de loin), hypermétropie (fatigue visuelle, céphalées, strabisme chez l’enfant), astigmatisme, presbytie (après 40 ans, difficulté de lecture de près) ; chez l’enfant, retentissement scolaire et risque d’amblyopie ; dépistage scolaire de l’acuité visuelle (échelle) ; mesure de la réfraction (sous cycloplégie chez l’enfant) et prescription de lunettes ; lunettes de presbytie prêtes à porter ; vérifier le fond d’œil et éliminer une autre cause si l’acuité ne se corrige pas.',
    definition:
      'Défaut de focalisation de l’image sur la rétine (amétropie) : myopie, hypermétropie, astigmatisme ; presbytie liée à l’âge.',
    physiopathologie:
      '## Types\n- **Myopie** : image en avant de la rétine (œil trop long) — vision floue de loin\n- **Hypermétropie** : image en arrière — effort d’accommodation, fatigue, strabisme convergent chez l’enfant\n- **Astigmatisme** : courbure cornéenne irrégulière (kératocône, ptérygion)\n- **Presbytie** : perte d’accommodation avec l’âge (après 40 ans)\n\n## Enfant\n- Une amétropie non corrigée, surtout asymétrique, entraîne une **amblyopie** (définitive après 7–8 ans)',
    diagnostic:
      '## Clinique\n- Vision floue de loin (myopie) ou de près (presbytie, hypermétropie), plisse les yeux, **céphalées**, fatigue visuelle\n- Enfant : difficultés scolaires, se rapproche du tableau ou de la télévision, **strabisme**\n\n## Examens\n- **Acuité visuelle** de chaque œil (échelle, de loin et de près) ; amélioration au **trou sténopéique** = trouble réfractif\n- **Réfraction** (sous cycloplégie chez l’enfant)\n- Examen de l’œil et **fond d’œil** si l’acuité ne se corrige pas (cataracte, rétine, glaucome)',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Dépistage, trou sténopéique.'],
      ['confirmation', 'refraction', 'Mesure de l’amétropie.'],
      ['deuxieme_intention', 'fond-d-oeil', 'Autre cause si non corrigeable.'],
      ['deuxieme_intention', 'tonometrie', 'Glaucome (adulte > 40 ans).'],
    ],
    scores: [],
    differentiels: [
      ['cataracte', 'Baisse de vision non corrigée par les verres.'],
      ['glaucome', 'Atteinte du champ visuel.'],
      ['retinopathies-diabetique-et-hypertensive', 'Diabétique, hypertendu.'],
      ['cataracte-congenitale', 'Leucocorie chez l’enfant.'],
    ],
    etiologies: '## Types\n- Myopie, hypermétropie, astigmatisme, presbytie',
    principes: [
      [
        'Correction optique',
        'Lunettes.',
        '- **Lunettes** adaptées après réfraction ; lunettes de **presbytie** prêtes à porter\n- Lentilles de contact (hygiène stricte), chirurgie réfractive en centre spécialisé',
      ],
      [
        'Enfant',
        'Prévenir l’amblyopie.',
        '- **Dépistage** de l’acuité visuelle à l’école et avant 3–4 ans\n- Correction totale sous cycloplégie, **occlusion** de l’œil sain si amblyopie, traitement du strabisme',
      ],
      [
        'Santé publique',
        'Rendre les lunettes accessibles.',
        '- Dépistage scolaire et communautaire, lunettes à faible coût\n- Myopie de l’enfant : activités à l’extérieur',
      ],
    ],
    molecules: [
      ['cyclopentolate', 'premiere', 'Cycloplégie pour la réfraction de l’enfant'],
      ['atropine', 'alternative', 'Cycloplégie, pénalisation'],
      ['tropicamide-collyre', 'alternative', 'Dilatation pupillaire'],
    ],
    complications: [
      {
        nom: 'Amblyopie',
        description: 'Enfant non corrigé.',
        traitement: '- Correction, occlusion',
        clinique: '- Baisse de vision d’un œil',
        paraclinique: '',
      },
      {
        nom: 'Strabisme',
        description: 'Hypermétropie de l’enfant.',
        traitement: '- Correction optique, chirurgie',
        clinique: '- Déviation d’un œil',
        paraclinique: '',
      },
      {
        nom: 'Décollement de rétine',
        fiche: 'baisse-brutale-acuite-visuelle',
        description: 'Myopie forte.',
        traitement: '- Chirurgie',
        clinique: '- Phosphènes, voile',
        paraclinique: '- Fond d’œil',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent avec correction ; amblyopie définitive si l’enfant n’est pas corrigé à temps',
    urgences: [],
    symptomes: [
      ['Troubles visuels', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Strabisme', 'occasionnel'],
    ],
    sources: ['OMS — lignes directrices et publications', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: [
        '- Mesure de l’acuité visuelle, trou sténopéique, lunettes de presbytie',
        '- Enfant avec baisse de vision ou strabisme',
      ],
      hgr: ['- Réfraction, lunettes', ''],
      tert: ['- Ophtalmologie pédiatrique, chirurgie réfractive', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Myopie',
        type: 'commune',
        description: 'Flou de loin.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Vision floue de loin',
        generaux: '',
        physiques: '',
        paraclinique: '- Réfraction',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Presbytie',
        type: 'terrain',
        description: 'Après 40 ans.',
        terrain: '- Adulte de plus de 40 ans',
        fonctionnels: '- Difficulté de lecture de près',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Amétropie de l’enfant avec amblyopie',
        type: 'gravite',
        description: 'Urgence fonctionnelle.',
        terrain: '- Enfant < 7 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Strabisme',
        paraclinique: '- Réfraction sous cycloplégie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
