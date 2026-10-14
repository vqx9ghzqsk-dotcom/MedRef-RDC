'use strict';

/**
 * Lot 37 (phase 2, médecine interne générale) — piqûres et envenimations par scorpions et
 * hyménoptères, intoxication aux organophosphorés. Rédigé par IA (OMS, MSF, ouvrages de
 * toxicologie) : à valider.
 */

const MIG = { departement: 'medecine-interne', specialite: 'Médecine interne générale' };

module.exports = [
  // =================================================================== Scorpions et hyménoptères
  {
    ...MIG,
    slug: 'piqures-scorpions-hymenopteres',
    nom: 'Piqûres et envenimations par scorpions et hyménoptères',
    resume:
      'Piqûres de scorpions (douleur intense locale, formes graves chez l’enfant : agitation, sueurs, vomissements, troubles cardiorespiratoires) et d’hyménoptères (abeilles, guêpes : réactions locales, anaphylaxie, envenimation par piqûres multiples) : antalgie, anesthésie locale, retrait du dard ; anaphylaxie = adrénaline IM immédiate ; surveillance hospitalière de l’enfant et des piqûres multiples.',
    definition:
      'Ensemble des manifestations locales, allergiques et toxiques consécutives à la piqûre d’un scorpion ou d’un insecte hyménoptère (abeille, guêpe, frelon, fourmi).',
    physiopathologie:
      '## Scorpions\n- Venin neurotoxique (canaux sodiques) : décharge adrénergique et cholinergique\n- Gravité plus grande chez l’enfant (petit poids) ; espèces d’Afrique centrale généralement moins dangereuses que celles d’Afrique du Nord, mais formes graves possibles\n\n## Hyménoptères\n- **Allergie** (IgE) : réactions locales étendues, **anaphylaxie** même après une seule piqûre\n- **Toxicité directe** par piqûres multiples (essaims, > 50–100 piqûres) : hémolyse, rhabdomyolyse, insuffisance rénale, atteinte hépatique',
    diagnostic:
      '## Scorpion\n- **Douleur** locale intense, paresthésies\n- Signes de gravité : agitation, **sueurs**, hypersalivation, **vomissements**, priapisme, tachycardie ou bradycardie, HTA puis hypotension, **œdème pulmonaire**, convulsions\n\n## Hyménoptères\n- Réaction locale (douleur, œdème), réaction locale étendue\n- **Anaphylaxie** : urticaire généralisée, œdème de la face, dyspnée, hypotension, malaise dans les minutes qui suivent\n- Piqûres multiples : vomissements, urines foncées, oligurie dans les heures suivantes\n\n## Examens\n- Formes graves : NFS, créatinine, CPK, ionogramme, bandelette (myoglobinurie), ECG, glycémie',
    examens: [
      ['gravite', 'ecg', 'Troubles du rythme, myocardite.'],
      ['gravite', 'cpk', 'Rhabdomyolyse (piqûres multiples).'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['gravite', 'bandelette-urinaire', 'Myoglobinurie, hémoglobinurie.'],
      ['gravite', 'glycemie', 'Hyperglycémie (scorpion).'],
      ['gravite', 'radiographie-thoracique', 'Œdème pulmonaire.'],
    ],
    scores: [],
    differentiels: [
      ['envenimation-morsure-de-serpent', 'Traces de crochets, troubles de la coagulation.'],
      ['choc-anaphylactique', 'Anaphylaxie d’autre cause.'],
      ['intoxication-aux-organophosphores', 'Syndrome cholinergique sans piqûre.'],
    ],
    etiologies:
      '## Circonstances\n- Scorpions : marche pieds nus la nuit, bois, pierres ; enfants\n- Hyménoptères : ruches, essaims, travaux agricoles, allergie connue',
    principes: [
      [
        'Piqûre de scorpion',
        'Soulager et surveiller.',
        '- Glace, **paracétamol**, **infiltration locale de lidocaïne** (sans adrénaline) pour la douleur\n- Enfant < 15 kg ou signes généraux : hospitalisation et surveillance\n- Formes graves : oxygène, réanimation, traitement de l’œdème pulmonaire, sérum antiscorpionique adapté aux espèces locales s’il est disponible\n- Prophylaxie antitétanique',
      ],
      [
        'Piqûres d’hyménoptères',
        'Traiter la réaction.',
        '- Retirer le dard (racler), nettoyer, froid, antihistaminique (**cétirizine**), antalgique\n- **Anaphylaxie** : **adrénaline IM** 0,5 mg chez l’adulte (0,01 mg/kg chez l’enfant, maximum 0,5 mg), à répéter après 5–15 min ; remplissage, oxygène (voir *Choc anaphylactique*)\n- **Piqûres multiples** : hospitalisation, hydratation abondante, surveillance de la diurèse, de la créatinine et des CPK, dialyse si besoin',
      ],
      [
        'Prévention',
        'Éviter la récidive.',
        '- Chaussures, secouer vêtements et chaussures, lampe la nuit\n- Allergiques aux hyménoptères : trousse d’adrénaline si disponible, orientation pour désensibilisation',
      ],
    ],
    molecules: [
      ['lidocaine', 'premiere', 'Infiltration locale (scorpion)'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie'],
      ['cetirizine', 'alternative', 'Réaction locale, urticaire'],
      ['hydrocortisone', 'adjuvant', 'Anaphylaxie (après adrénaline)'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Remplissage, piqûres multiples'],
    ],
    complications: [
      {
        nom: 'Choc anaphylactique',
        fiche: 'choc-anaphylactique',
        description: 'Allergie aux hyménoptères.',
        traitement: '- Adrénaline IM',
        clinique: '- Hypotension, dyspnée',
        paraclinique: '',
      },
      {
        nom: 'Œdème pulmonaire et myocardite',
        description: 'Envenimation scorpionique grave.',
        traitement: '- Réanimation',
        clinique: '- Dyspnée, crépitants',
        paraclinique: '- Radiographie, ECG',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Piqûres multiples.',
        traitement: '- Hydratation, dialyse',
        clinique: '- Oligurie, urines foncées',
        paraclinique: '- Créatinine, CPK',
      },
    ],
    evolution:
      '## Pronostic\n- Bénin dans la grande majorité des cas ; décès possibles chez l’enfant (scorpion) et par anaphylaxie ou piqûres multiples',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'frequent'],
      ['Œdème d’un membre', 'frequent'],
      ['Sueurs', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Hypersalivation', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Antalgie, lidocaïne locale, adrénaline IM si anaphylaxie, transfert',
        '- Enfant piqué par un scorpion, signes généraux, piqûres multiples',
      ],
      hgr: ['- Surveillance, réanimation, hydratation', '- Dialyse'],
      tert: ['- Réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Piqûre de scorpion simple',
        type: 'commune',
        description: 'Douleur locale.',
        terrain: '- Adulte',
        fonctionnels: '- Douleur intense, paresthésies',
        generaux: '',
        physiques: '- Point de piqûre',
        paraclinique: '',
        etiologies: '- Scorpion',
        syndromes: [],
      },
      {
        nom: 'Envenimation scorpionique grave de l’enfant',
        type: 'gravite',
        description: 'Atteinte systémique.',
        terrain: '- Enfant',
        fonctionnels: '- Vomissements, agitation',
        generaux: '- Sueurs, hypersalivation',
        physiques: '- Tachycardie, crépitants',
        paraclinique: '- Œdème pulmonaire',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Anaphylaxie aux hyménoptères',
        type: 'gravite',
        description: 'Allergie.',
        terrain: '- Allergique',
        fonctionnels: '- Dyspnée, malaise',
        generaux: '- Hypotension',
        physiques: '- Urticaire, œdème facial',
        paraclinique: '',
        etiologies: '- Abeille, guêpe',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Organophosphorés
  {
    ...MIG,
    slug: 'intoxication-aux-organophosphores',
    nom: 'Intoxication aux organophosphorés',
    resume:
      'Intoxication par insecticides organophosphorés ou carbamates (ingestion volontaire, exposition agricole) : syndrome cholinergique (myosis, hypersalivation, bronchorrhée, bradycardie, vomissements, diarrhée, fasciculations, faiblesse, coma) ; décontamination, oxygène, atropine IV à doses croissantes doublées toutes les 5 min jusqu’à assèchement bronchique, pralidoxime si disponible, diazépam ; intubation si détresse ; évaluation psychiatrique.',
    definition:
      'Intoxication par des inhibiteurs des cholinestérases (organophosphorés, carbamates) entraînant une accumulation d’acétylcholine et une hyperstimulation des récepteurs muscariniques, nicotiniques et centraux.',
    physiopathologie:
      '## Mécanismes\n- Inhibition (irréversible avec les organophosphorés après « vieillissement ») de l’acétylcholinestérase\n- **Muscarinique** : myosis, hypersalivation, larmoiement, **bronchorrhée**, bronchospasme, **bradycardie**, vomissements, diarrhée, incontinence\n- **Nicotinique** : **fasciculations**, faiblesse, paralysie respiratoire, tachycardie, HTA\n- **Central** : confusion, convulsions, coma\n\n## Circonstances\n- **Tentatives de suicide** (fréquentes en milieu rural), accidents agricoles et domestiques, enfants',
    diagnostic:
      '## Clinique\n- Odeur d’ail ou de solvant, notion de produit\n- **Myosis**, **hypersalivation**, sueurs, larmoiement, **bronchorrhée** (crépitants), bradycardie\n- **Fasciculations**, faiblesse musculaire, détresse respiratoire\n- Troubles de conscience, convulsions\n- **Syndrome intermédiaire** (J1–J4) : faiblesse proximale, nuque, nerfs crâniens, insuffisance respiratoire\n\n## Examens\n- Diagnostic clinique : ne pas attendre les examens\n- **Cholinestérases** si disponibles, glycémie, ionogramme, gaz du sang, ECG (QT long), lipase',
    examens: [
      ['confirmation', 'cholinesterase', 'Activité abaissée.'],
      ['premiere_intention', 'oxymetrie-de-pouls', 'Hypoxémie.'],
      ['premiere_intention', 'ecg', 'Bradycardie, QT long.'],
      ['gravite', 'gaz-du-sang', 'Insuffisance respiratoire.'],
      ['premiere_intention', 'glycemie', 'Hyperglycémie, hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie.'],
    ],
    scores: [],
    differentiels: [
      ['intoxication-aux-psychotropes', 'Coma sans syndrome cholinergique.'],
      ['Intoxication aux opioïdes', 'Myosis, bradypnée, sans hypersalivation ni fasciculations.'],
      ['neuropaludisme-adulte', 'Fièvre, TDR positif.'],
      ['Intoxication aux champignons muscariniens', 'Contexte alimentaire.'],
    ],
    etiologies:
      '## Produits\n- Insecticides agricoles et domestiques (organophosphorés, carbamates), parfois en association',
    principes: [
      [
        'Mesures immédiates',
        'Stabiliser et décontaminer.',
        '- Protection des soignants (gants), retrait des vêtements, **lavage** de la peau à l’eau et au savon\n- Position latérale, **aspiration**, **oxygène** ; intubation si détresse ou coma (éviter le suxaméthonium)\n- Pas de vomissements provoqués ; charbon activé seulement si ingestion < 1 h et voies aériennes protégées',
      ],
      [
        'Atropine',
        'Assécher les bronches.',
        '- **Atropine** 1–2 mg IV (enfant 0,02 mg/kg), puis **doubler la dose toutes les 5 minutes** jusqu’à l’**atropinisation** : bronches sèches à l’auscultation, FC > 80/min, PAS > 80 mmHg\n- Puis perfusion de 10 à 20 % de la dose de charge par heure, ajustée (surveiller la toxicité : agitation, fièvre, rétention, iléus)\n- La tachycardie et la mydriase ne sont pas des contre-indications',
      ],
      [
        'Autres traitements',
        'Compléter.',
        '- **Pralidoxime** 30 mg/kg IV en 30 min puis 8 mg/kg/h (organophosphorés, si disponible)\n- **Diazépam** 10 mg IV pour l’agitation et les convulsions\n- Surveillance prolongée (syndrome intermédiaire, rechute) ; **évaluation psychiatrique** (risque suicidaire)\n- Prévention : stockage sécurisé des pesticides',
      ],
    ],
    molecules: [
      ['atropine', 'premiere', 'Antidote muscarinique'],
      ['pralidoxime', 'alternative', 'Réactivateur des cholinestérases'],
      ['diazepam', 'premiere', 'Convulsions, agitation'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['charbon-active', 'adjuvant', 'Ingestion très récente, voies aériennes protégées'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        fiche: 'insuffisance-respiratoire-aigue',
        description: 'Bronchorrhée, paralysie.',
        traitement: '- Atropine, ventilation',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Gaz du sang',
      },
      {
        nom: 'Syndrome intermédiaire',
        description: 'J1–J4.',
        traitement: '- Ventilation',
        clinique: '- Faiblesse de la nuque, des muscles proximaux',
        paraclinique: '',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Vomissements, coma.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Récidive suicidaire',
        fiche: 'risque-suicidaire',
        description: 'Intoxication volontaire.',
        traitement: '- Prise en charge psychiatrique',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 10 à 20 % (insuffisance respiratoire) ; réduite par l’atropinisation rapide et la ventilation',
    urgences: [],
    symptomes: [
      ['Myosis', 'tres_frequent'],
      ['Hypersalivation', 'tres_frequent'],
      ['Fasciculations', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Dyspnée', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Sueurs', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Décontamination, atropine, oxygène, transfert', '- Tout patient symptomatique'],
      hgr: ['- Atropinisation titrée, surveillance, diazépam', '- Ventilation'],
      tert: ['- Réanimation, pralidoxime', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Syndrome cholinergique aigu',
        type: 'commune',
        description: 'Ingestion.',
        terrain: '- Tentative de suicide, agriculteur',
        fonctionnels: '- Vomissements, diarrhée',
        generaux: '- Sueurs',
        physiques: '- Myosis, hypersalivation, bradycardie',
        paraclinique: '- Cholinestérases basses',
        etiologies: '- Organophosphorés',
        syndromes: [],
      },
      {
        nom: 'Forme grave avec insuffisance respiratoire',
        type: 'gravite',
        description: 'Bronchorrhée et paralysie.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '- Coma',
        physiques: '- Crépitants, fasciculations',
        paraclinique: '- Hypoxémie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Intoxication de l’enfant',
        type: 'terrain',
        description: 'Accidentelle.',
        terrain: '- Enfant',
        fonctionnels: '- Somnolence, convulsions',
        generaux: '',
        physiques: '- Myosis, hypotonie',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
