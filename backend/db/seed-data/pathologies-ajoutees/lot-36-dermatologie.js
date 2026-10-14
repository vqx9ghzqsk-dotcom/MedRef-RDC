'use strict';

/**
 * Lot 36 (phase 2, dermatologie) — dermatite atopique de l'adulte, psoriasis. Rédigé par IA
 * (OMS, ouvrages de référence de dermatologie, MSF) : à valider.
 */

const DERMATO = { departement: 'medecine-interne', specialite: 'Dermatologie' };

module.exports = [
  // =================================================================== Dermatite atopique
  {
    ...DERMATO,
    slug: 'dermatite-atopique-adulte',
    nom: 'Dermatite atopique de l’adulte',
    resume:
      'Eczéma chronique prurigineux à poussées, sur terrain atopique (asthme, rhinite) : plaques sèches, lichénifiées des plis, du cou et des mains ; sur peau noire, lésions souvent papuleuses et dyschromies ; émollients quotidiens, dermocorticoïdes pendant les poussées, traitement des surinfections ; éviter les savons agressifs et les produits dépigmentants.',
    definition:
      'Dermatose inflammatoire chronique et prurigineuse, liée à une anomalie de la barrière cutanée et à une réponse immunitaire de type allergique, évoluant par poussées.',
    physiopathologie:
      '## Mécanismes\n- Altération de la barrière cutanée (filaggrine), sécheresse, pénétration des allergènes et irritants\n- Inflammation de type Th2, prurit, cercle vicieux grattage-inflammation\n- Colonisation par Staphylococcus aureus (surinfections)\n\n## Facteurs aggravants\n- Savons détergents, eau chaude, chaleur et sueur, laine, stress, produits **dépigmentants** (corticoïdes, hydroquinone) et cosmétiques',
    diagnostic:
      '## Clinique\n- **Prurit** intense (insomnie), **xérose** (peau sèche)\n- Plaques eczématiformes des **plis** (coudes, genoux), du cou, du visage, des **mains** ; lichénification chez l’adulte\n- Peau noire : papules folliculaires, hyperpigmentation ou hypopigmentation résiduelles\n- Antécédents personnels ou familiaux d’atopie\n\n## Examens\n- Diagnostic clinique\n- Prélèvement bactériologique si surinfection ; test VIH si eczéma sévère d’apparition récente\n- Éliminer gale, dermatophytie, eczéma de contact',
    examens: [
      ['etiologique', 'tdr-vih', 'Dermatose sévère d’apparition récente.'],
      ['etiologique', 'examen-mycologique', 'Dermatophytie.'],
      ['deuxieme_intention', 'nfs', 'Éosinophilie.'],
    ],
    scores: [],
    differentiels: [
      ['gale', 'Prurit nocturne familial, sillons, atteinte des espaces interdigitaux.'],
      ['dermatophyties-et-pityriasis-versicolor', 'Bordure active, examen mycologique.'],
      ['psoriasis', 'Plaques bien limitées, squames épaisses, faces d’extension.'],
      ['Eczéma de contact', 'Topographie liée à l’allergène (bijoux, produits).'],
      ['dermatoses-associees-au-vih', 'Prurigo, dermite séborrhéique.'],
    ],
    etiologies: '## Terrain\n- Atopie personnelle ou familiale (asthme, rhinite allergique)',
    principes: [
      [
        'Soins de base',
        'Restaurer la barrière cutanée.',
        '- **Émollients** quotidiens (vaseline, crèmes à l’urée faiblement dosées, glycérine) sur tout le corps, surtout après la douche\n- Savons surgras, eau tiède, vêtements en coton ; ongles courts\n- **Arrêt des produits dépigmentants** et des cosmétiques irritants',
      ],
      [
        'Poussées',
        'Contrôler l’inflammation.',
        '- **Dermocorticoïde** 1 fois par jour jusqu’à blanchiment (1–2 semaines) : activité forte (**bétaméthasone**) sur le corps, faible sur le visage et les plis ; puis entretien 2 fois par semaine sur les zones récidivantes\n- Antihistaminique sédatif le soir si insomnie (prométhazine, cétirizine)\n- Surinfection : **cloxacilline** ou céfalexine 7 jours\n- Formes sévères : dermatologue (photothérapie, immunosuppresseurs)',
      ],
    ],
    molecules: [
      ['betamethasone-topique', 'premiere', 'Dermocorticoïde fort'],
      ['uree', 'premiere', 'Émollient'],
      ['cetirizine', 'adjuvant', 'Prurit'],
      ['promethazine', 'adjuvant', 'Prurit nocturne'],
      ['cloxacilline', 'alternative', 'Surinfection'],
    ],
    complications: [
      {
        nom: 'Surinfection bactérienne',
        fiche: 'pyodermites',
        description: 'Staphylocoque.',
        traitement: '- Antibiotiques, antiseptiques',
        clinique: '- Croûtes jaunâtres, suintement',
        paraclinique: '',
      },
      {
        nom: 'Eczéma herpétiforme',
        description: 'Surinfection herpétique.',
        traitement: '- Aciclovir en urgence',
        clinique: '- Vésicules ombiliquées, fièvre',
        paraclinique: '',
      },
      {
        nom: 'Atrophie et dépigmentation cortisoniques',
        description: 'Mésusage des dermocorticoïdes.',
        traitement: '- Arrêt progressif',
        clinique: '- Peau fine, vergetures',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution chronique par poussées ; contrôle satisfaisant avec les émollients et les dermocorticoïdes bien utilisés',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Lésions eczématiformes', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Taches cutanées hypopigmentées', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Émollients, dermocorticoïde, conseils', '- Forme étendue, surinfection, échec'],
      hgr: ['- Prise en charge des poussées sévères', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dermatite atopique de l’adulte',
        type: 'commune',
        description: 'Plis, cou, mains.',
        terrain: '- Atopie',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Plaques lichénifiées, xérose',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme surinfectée',
        type: 'gravite',
        description: 'Staphylocoque ou herpès.',
        terrain: '',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre',
        physiques: '- Croûtes, vésicules',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Psoriasis
  {
    ...DERMATO,
    slug: 'psoriasis',
    nom: 'Psoriasis',
    resume:
      'Dermatose inflammatoire chronique : plaques érythémato-squameuses bien limitées des coudes, genoux, cuir chevelu, région lombaire, atteinte unguéale ; rechercher le VIH (psoriasis sévère ou brutal), un rhumatisme psoriasique, des facteurs aggravants (bêtabloquants, lithium, arrêt de corticoïdes, alcool) ; dermocorticoïdes ± calcipotriol, kératolytiques, méthotrexate pour les formes étendues ; pas de corticoïdes par voie générale.',
    definition:
      'Maladie inflammatoire chronique de la peau à médiation immunitaire, caractérisée par une prolifération accélérée des kératinocytes, évoluant par poussées et pouvant s’associer à un rhumatisme et à un syndrome métabolique.',
    physiopathologie:
      '## Mécanismes\n- Activation immunitaire (axe IL-23/IL-17), hyperprolifération épidermique\n- Prédisposition génétique\n\n## Facteurs déclenchants ou aggravants\n- **VIH** (psoriasis sévère, érythrodermique), infections (streptocoque : psoriasis en gouttes)\n- Médicaments : **bêtabloquants**, **lithium**, antipaludiques de synthèse, **arrêt des corticoïdes** (rebond pustuleux)\n- Alcool, tabac, stress, traumatismes cutanés (phénomène de Koebner)',
    diagnostic:
      '## Clinique\n- **Plaques érythémato-squameuses** bien limitées, symétriques : coudes, genoux, région lombosacrée, **cuir chevelu**, ombilic\n- **Ongles** : dépressions en dé à coudre, onycholyse, hyperkératose\n- Prurit variable ; sur peau noire, plaques plus violacées ou grisâtres, dyschromies séquellaires\n- Formes : en gouttes, inversé (plis), palmoplantaire, pustuleux, **érythrodermique** (urgence)\n- Rhumatisme psoriasique : arthrites, dactylites, enthésites\n\n## Examens\n- Diagnostic clinique ; **test VIH** ; biopsie si doute\n- Avant méthotrexate : NFS, bilan hépatique, créatinine, sérologies hépatites, β-hCG, dépistage de la tuberculose',
    examens: [
      ['premiere_intention', 'tdr-vih', 'Psoriasis sévère ou brutal.'],
      ['deuxieme_intention', 'biopsie-cutanee-exsangue', 'Biopsie cutanée si doute.'],
      ['deuxieme_intention', 'examen-mycologique', 'Dermatophytie, onychomycose.'],
      ['premiere_intention', 'nfs', 'Avant méthotrexate.'],
      ['premiere_intention', 'bilan-hepatique', 'Avant méthotrexate.'],
      ['premiere_intention', 'creatinine', 'Avant méthotrexate.'],
      ['etiologique', 'serologies-hepatites', 'Avant traitement systémique.'],
      ['etiologique', 'bilan-lipidique', 'Syndrome métabolique.'],
    ],
    scores: [],
    differentiels: [
      ['dermatophyties-et-pityriasis-versicolor', 'Bordure active, examen mycologique positif.'],
      ['dermatite-atopique-adulte', 'Plaques mal limitées des plis, prurit intense.'],
      ['syphilis', 'Syphilides psoriasiformes, sérologie positive.'],
      ['Dermite séborrhéique', 'Visage, cuir chevelu, squames grasses.'],
      ['Lichen plan', 'Papules violacées, prurit.'],
    ],
    etiologies:
      '## Facteurs\n- Génétique, VIH, médicaments (bêtabloquants, lithium), alcool, tabac, infections, stress',
    principes: [
      [
        'Traitements locaux',
        'Formes limitées.',
        '- **Dermocorticoïde** fort (**bétaméthasone**) 1 fois par jour 2 à 4 semaines, ± **calcipotriol** (association), puis entretien intermittent\n- **Kératolytiques** (vaseline salicylée à 3–5 %) pour décaper les squames\n- Cuir chevelu : shampoing, lotion corticoïde\n- Émollients',
      ],
      [
        'Traitements généraux',
        'Formes étendues ou invalidantes.',
        '- **Méthotrexate** 7,5 à 25 mg une fois par semaine + **acide folique** 5 mg une fois par semaine (à distance), surveillance NFS et bilan hépatique ; contraception\n- Photothérapie, acitrétine, ciclosporine, biothérapies (centres spécialisés)\n- **Jamais de corticoïdes par voie générale** (rebond pustuleux ou érythrodermique)',
      ],
      [
        'Mesures associées',
        'Traiter le terrain.',
        '- ARV si VIH (amélioration nette) ; arrêt des médicaments aggravants si possible ; arrêt de l’alcool et du tabac\n- Dépistage du rhumatisme psoriasique et du risque cardiovasculaire ; soutien psychologique',
      ],
    ],
    molecules: [
      ['betamethasone-topique', 'premiere', 'Dermocorticoïde fort'],
      ['calcipotriol', 'premiere', 'En association au dermocorticoïde'],
      ['acide-salicylique', 'adjuvant', 'Kératolytique'],
      ['methotrexate', 'deuxieme', 'Formes étendues'],
      ['acide-folique', 'adjuvant', 'Avec méthotrexate'],
      ['uree', 'adjuvant', 'Émollient'],
    ],
    complications: [
      {
        nom: 'Érythrodermie psoriasique',
        description: 'Atteinte de plus de 90 % de la peau.',
        traitement: '- Hospitalisation, réhydratation, soins locaux, méthotrexate',
        clinique: '- Rougeur généralisée, frissons',
        paraclinique: '- Ionogramme',
      },
      {
        nom: 'Rhumatisme psoriasique',
        fiche: 'spondyloarthrites',
        description: 'Atteinte articulaire.',
        traitement: '- AINS, méthotrexate',
        clinique: '- Arthrites, dactylite',
        paraclinique: '',
      },
      {
        nom: 'Psoriasis pustuleux généralisé',
        description: 'Arrêt des corticoïdes, grossesse.',
        traitement: '- Hospitalisation, traitement spécialisé',
        clinique: '- Pustules, fièvre',
        paraclinique: '- Hyperleucocytose',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique non contagieuse, par poussées ; bon contrôle possible ; retentissement psychologique et cardiovasculaire',
    urgences: [],
    symptomes: [
      ['Plaques érythémato-squameuses', 'tres_frequent'],
      ['Prurit', 'frequent'],
      ['Arthralgies', 'occasionnel'],
      ['Gonflement articulaire', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Dermocorticoïde, kératolytique, test VIH', '- Forme étendue, érythrodermie, pustules'],
      hgr: ['- Bilan, méthotrexate, hospitalisation des formes graves', ''],
      tert: ['- Dermatologie, photothérapie, biothérapies', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Psoriasis en plaques',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Adulte',
        fonctionnels: '- Prurit modéré',
        generaux: '',
        physiques: '- Plaques des coudes, genoux, cuir chevelu',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Psoriasis associé au VIH',
        type: 'terrain',
        description: 'Forme sévère ou brutale.',
        terrain: '- VIH',
        fonctionnels: '',
        generaux: '',
        physiques: '- Plaques étendues, atteinte des plis',
        paraclinique: '- Test VIH positif',
        etiologies: '- VIH',
        syndromes: [],
      },
      {
        nom: 'Psoriasis érythrodermique ou pustuleux',
        type: 'gravite',
        description: 'Urgence dermatologique.',
        terrain: '- Arrêt de corticoïdes, VIH',
        fonctionnels: '',
        generaux: '- Fièvre, frissons, déshydratation',
        physiques: '- Érythème généralisé, pustules',
        paraclinique: '- Troubles ioniques',
        etiologies: '',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
      },
    ],
  },
];
