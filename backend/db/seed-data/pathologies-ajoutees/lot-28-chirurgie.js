'use strict';

/**
 * Lot 28 (fin de la chirurgie) — traumatismes oculaires, œil rouge (démarche), abcès et
 * cellulites d'origine dentaire, réanimation du choc. Rédigé par IA (OMS, MSF, Surviving Sepsis
 * Campaign, ouvrages de référence) : à valider.
 */

const OPH = { departement: 'chirurgie', specialite: 'Ophtalmologie' };
const STO = { departement: 'chirurgie', specialite: 'Stomatologie et chirurgie maxillo-faciale' };
const REA = { departement: 'chirurgie', specialite: 'Anesthésie-réanimation' };

module.exports = [
  // =================================================================== Traumatismes oculaires
  {
    ...OPH,
    slug: 'traumatismes-oculaires',
    nom: 'Traumatismes oculaires',
    resume:
      'Contusions, plaies du globe, corps étrangers et brûlures chimiques de l’œil (travail, jeux d’enfants, agressions) : mesurer l’acuité visuelle ; brûlure chimique = lavage immédiat et prolongé ; plaie perforante = coque rigide sans pression, pas de collyre ni de pommade, antibiotiques, transfert pour suture ; corps étranger superficiel = ablation sous anesthésie locale.',
    definition:
      'Lésions de l’œil et de ses annexes par agent mécanique (contusion, plaie, corps étranger), chimique (acides, bases), thermique ou radiatif.',
    physiopathologie:
      '## Types\n- **Contusion** : hyphéma (sang dans la chambre antérieure), luxation du cristallin, décollement de rétine, fracture du plancher de l’orbite\n- **Plaie du globe** (perforante ou pénétrante) : risque d’endophtalmie et d’ophtalmie sympathique\n- **Corps étranger** cornéen ou intraoculaire (meulage, martelage)\n- **Brûlure chimique** : les **bases** (chaux, ciment, soude) pénètrent et sont plus graves que les acides',
    diagnostic:
      '## Évaluation\n- Circonstances, agent, heure\n- **Acuité visuelle** de chaque œil (valeur pronostique et médico-légale)\n- Inspection sans appuyer sur le globe : plaie, hernie de l’iris, pupille déformée, hyphéma, chémosis hémorragique\n- **Test à la fluorescéine** (érosion, ulcère) ; éversion de la paupière supérieure (corps étranger sous-palpébral)\n- Motilité oculaire (fracture de l’orbite), sensibilité du nerf infra-orbitaire\n\n## Examens\n- Radiographie ou **scanner de l’orbite** si corps étranger intraoculaire ou fracture (pas d’IRM si corps métallique)',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Gravité et suivi.'],
      ['premiere_intention', 'tonometrie', 'Hyphéma (hypertonie) ; contre-indiquée si plaie du globe.'],
      ['deuxieme_intention', 'scanner-cervico-facial', 'Scanner orbitaire : corps étranger, fracture.'],
      ['deuxieme_intention', 'fond-d-oeil', 'Décollement de rétine, hémorragie du vitré.'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivites-adulte', 'Pas de traumatisme, acuité normale.'],
      ['glaucome', 'Crise aiguë spontanée.'],
      ['traumatisme-cranien', 'Lésions associées à rechercher.'],
    ],
    etiologies:
      '## Circonstances\n- Accidents du travail (meulage, menuiserie, chantier), agressions, accidents de la route, jeux d’enfants (bâtons, frondes), projections de chaux ou de ciment, remèdes traditionnels',
    principes: [
      [
        'Brûlure chimique',
        'Urgence absolue.',
        '- **Lavage immédiat et abondant** (eau propre ou sérum physiologique, au moins 30 minutes, 1 à 2 litres), paupières écartées, après anesthésie locale (**tétracaïne**)\n- Retirer les particules (chaux) des culs-de-sac\n- Puis antibiotique local, cycloplégique, transfert',
      ],
      [
        'Plaie du globe',
        'Éviter la perte de l’œil.',
        '- **Coque rigide** sans compresse appuyée, ne pas manipuler, ne rien instiller\n- À jeun, antiémétique, antalgique, **prophylaxie antitétanique**\n- Antibiotiques systémiques (**ciprofloxacine** ou **lévofloxacine** per os, bonne pénétration oculaire)\n- Transfert pour suture chirurgicale en urgence',
      ],
      [
        'Corps étranger superficiel et érosion',
        'Soulager.',
        '- Ablation sous anesthésie locale (coton-tige, aiguille), éversion de la paupière\n- **Tétracycline** pommade, cycloplégique si douleur ; contrôle à 24–48 heures\n- Ne jamais donner de collyre anesthésique à domicile',
      ],
      [
        'Contusion',
        'Prévenir les complications.',
        '- Hyphéma : repos semi-assis, coque, cycloplégique, corticoïde local, surveillance de la pression ; pas d’AINS ni d’aspirine\n- Fracture de l’orbite : avis maxillo-facial',
      ],
    ],
    molecules: [
      ['tetracaine', 'premiere', 'Anesthésie locale pour l’examen et le lavage'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Lavage oculaire'],
      ['tetracycline', 'premiere', 'Pommade ophtalmique'],
      ['ciprofloxacine', 'premiere', 'Plaie du globe (voie générale)'],
      ['cyclopentolate', 'adjuvant', 'Cycloplégique'],
      ['fluoresceine', 'premiere', 'Test diagnostique'],
      ['serum-immunoglobuline-antitetanique', 'adjuvant', 'Prévention du tétanos'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Endophtalmie',
        description: 'Infection intraoculaire après plaie.',
        traitement: '- Antibiotiques intravitréens et généraux',
        clinique: '- Douleur, baisse de vision, hypopion',
        paraclinique: '',
      },
      {
        nom: 'Glaucome post-traumatique',
        fiche: 'glaucome',
        description: 'Hyphéma, récession de l’angle.',
        traitement: '- Hypotonisants',
        clinique: '- Douleur',
        paraclinique: '- Tonométrie',
      },
      {
        nom: 'Cataracte traumatique',
        fiche: 'cataracte',
        description: 'Atteinte du cristallin.',
        traitement: '- Chirurgie',
        clinique: '- Baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Ophtalmie sympathique',
        description: 'Uvéite de l’œil sain après plaie.',
        traitement: '- Corticoïdes',
        clinique: '- Baisse de vision de l’autre œil',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de l’acuité initiale et du type de lésion ; graves séquelles des brûlures par base et des plaies négligées',
    urgences: [],
    symptomes: [
      ['Douleur oculaire', 'tres_frequent'],
      ['Troubles visuels', 'frequent'],
      ['Yeux rouges', 'frequent'],
      ['Lésions traumatiques', 'tres_frequent'],
      ['Photophobie', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Lavage, acuité visuelle, corps étranger superficiel, coque',
        '- Plaie du globe, baisse de vision, hyphéma, brûlure chimique',
      ],
      hgr: ['- Ophtalmologiste : suture, extraction', ''],
      tert: ['- Chirurgie vitréo-rétinienne, orbitaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Corps étranger et érosion cornéenne',
        type: 'commune',
        description: 'Forme la plus fréquente.',
        terrain: '- Travailleur manuel',
        fonctionnels: '- Douleur, larmoiement, sensation de grain de sable',
        generaux: '',
        physiques: '- Corps étranger, prise de fluorescéine',
        paraclinique: '',
        etiologies: '- Meulage, poussières',
        syndromes: [],
      },
      {
        nom: 'Plaie perforante du globe',
        type: 'gravite',
        description: 'Urgence chirurgicale.',
        terrain: '',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '- Plaie, iris hernié, pupille déformée',
        paraclinique: '- Corps étranger intraoculaire au scanner',
        etiologies: '- Objet tranchant, projectile',
        syndromes: [],
      },
      {
        nom: 'Brûlure chimique',
        type: 'etiologique',
        description: 'Bases plus graves que les acides.',
        terrain: '- Chantier, agression',
        fonctionnels: '- Douleur intense',
        generaux: '',
        physiques: '- Blanchiment conjonctival (ischémie), opacité cornéenne',
        paraclinique: '',
        etiologies: '- Chaux, ciment, soude, acides',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Œil rouge
  {
    ...OPH,
    slug: 'oeil-rouge-demarche',
    nom: 'Œil rouge (démarche)',
    resume:
      'Démarche devant un œil rouge : trois questions — baisse de vision ? douleur ? traumatisme ? Sans baisse de vision ni douleur : conjonctivite, hémorragie sous-conjonctivale (bénins). Avec baisse de vision et douleur : kératite, uvéite, glaucome aigu, endophtalmie → avis ophtalmologique urgent ; pas de corticoïde local à l’aveugle.',
    definition:
      'Démarche diagnostique et d’orientation devant une rougeur oculaire, uni- ou bilatérale, pour distinguer les causes bénignes des urgences menaçant la vision.',
    physiopathologie:
      '## Causes principales\n- **Sans baisse de vision** : conjonctivites, hémorragie sous-conjonctivale, épisclérite, sécheresse, ptérygion inflammatoire\n- **Avec baisse de vision et douleur** : **kératite** (bactérienne, herpétique, fongique, carence en vitamine A), **uvéite antérieure** (VIH, tuberculose, syphilis, onchocercose), **glaucome aigu**, **endophtalmie**, sclérite\n- **Traumatisme**, corps étranger, brûlure chimique',
    diagnostic:
      '## Interrogatoire\n- Baisse de vision, douleur (superficielle ou profonde), photophobie, sécrétions, prurit, traumatisme, port de lentilles, remèdes traditionnels, corticoïdes, VIH\n\n## Examen\n- **Acuité visuelle**\n- Type de rougeur : diffuse (conjonctivite) ou **cercle périkératique** (atteinte cornéenne ou intraoculaire)\n- Cornée (transparence, **fluorescéine**), pupille (myosis dans l’uvéite, semi-mydriase dans le glaucome), tonus\n\n## Orientation\n- Œil rouge + baisse de vision ou douleur profonde ou photophobie ou pupille anormale = **urgence ophtalmologique**',
    examens: [
      ['premiere_intention', 'acuite-visuelle', 'Élément clé du tri.'],
      ['premiere_intention', 'tonometrie', 'Glaucome aigu.'],
      ['etiologique', 'tdr-vih', 'Zona ophtalmique, uvéites, kératites.'],
      ['etiologique', 'serologie-syphilis', 'Uvéite.'],
      ['etiologique', 'glycemie', 'Diabète (kératites, uvéites).'],
    ],
    scores: [],
    differentiels: [
      ['conjonctivites-adulte', 'Sécrétions, vision normale.'],
      ['glaucome', 'Douleur, semi-mydriase, œil dur.'],
      ['traumatismes-oculaires', 'Contexte traumatique.'],
      ['carence-en-vitamine-a', 'Xérophtalmie, kératomalacie de l’enfant.'],
      ['trachome', 'Trichiasis, cicatrices tarsiennes.'],
      ['onchocercose', 'Kératite et uvéite en zone d’endémie.'],
    ],
    etiologies:
      '## Terrain à risque\n- VIH (zona ophtalmique), diabète, malnutrition (vitamine A), remèdes traditionnels, collyres corticoïdes en automédication',
    principes: [
      [
        'Causes bénignes',
        'Traiter simplement.',
        '- Conjonctivite : lavages, antibiotique local si bactérienne\n- Hémorragie sous-conjonctivale : rassurer, mesurer la tension artérielle',
      ],
      [
        'Kératite',
        'Urgence.',
        '- Antibiotique local intensif (**ciprofloxacine** ou **chloramphénicol**), cycloplégique ; **aciclovir** si herpès ; **natamycine** si fongique (traumatisme végétal)\n- Jamais de corticoïde local\n- Enfant malnutri : **vitamine A** en urgence',
      ],
      [
        'Uvéite et glaucome aigu',
        'Préserver la vision.',
        '- Uvéite : cycloplégique, corticoïde local sous contrôle ophtalmologique, recherche étiologique (VIH, tuberculose, syphilis)\n- Glaucome aigu : acétazolamide, pilocarpine, mannitol (voir fiche)',
      ],
    ],
    molecules: [
      ['chloramphenicol', 'premiere', 'Conjonctivite, kératite'],
      ['ciprofloxacine', 'alternative', 'Kératite bactérienne (collyre)'],
      ['aciclovir', 'premiere', 'Kératite herpétique, zona ophtalmique'],
      ['natamycine', 'premiere', 'Kératite fongique'],
      ['cyclopentolate', 'adjuvant', 'Kératite, uvéite'],
      ['vitamine-a-retinol', 'premiere', 'Kératomalacie'],
      ['acetazolamide', 'premiere', 'Glaucome aigu'],
    ],
    complications: [
      {
        nom: 'Perforation cornéenne',
        description: 'Kératite non traitée.',
        traitement: '- Chirurgie',
        clinique: '- Perte de vision',
        paraclinique: '',
      },
      {
        nom: 'Cécité',
        fiche: 'glaucome',
        description: 'Glaucome aigu, endophtalmie, kératite.',
        traitement: '- Prise en charge urgente',
        clinique: '- Baisse de vision',
        paraclinique: '- Acuité visuelle',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour les causes bénignes ; perte visuelle si une urgence est méconnue',
    urgences: [],
    symptomes: [
      ['Yeux rouges', 'tres_frequent'],
      ['Douleur oculaire', 'frequent'],
      ['Troubles visuels', 'frequent'],
      ['Photophobie', 'frequent'],
      ['Sécrétions oculaires', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Tri par l’acuité visuelle et la douleur, traitement des conjonctivites',
        '- Baisse de vision, douleur, photophobie, pupille anormale',
      ],
      hgr: ['- Ophtalmologiste, traitement des kératites', ''],
      tert: ['- Uvéites, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Œil rouge sans baisse de vision',
        type: 'commune',
        description: 'Causes bénignes.',
        terrain: '',
        fonctionnels: '- Gêne, sécrétions',
        generaux: '',
        physiques: '- Rougeur diffuse',
        paraclinique: '- Acuité normale',
        etiologies: '- Conjonctivite, hémorragie sous-conjonctivale',
        syndromes: [],
        examens: [['acuite-visuelle', 'Normale']],
      },
      {
        nom: 'Œil rouge douloureux avec baisse de vision',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Douleur, photophobie',
        generaux: '',
        physiques: '- Cercle périkératique, cornée trouble ou pupille anormale',
        paraclinique: '- Acuité basse',
        etiologies: '- Kératite, uvéite, glaucome aigu',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Abcès dentaires
  {
    ...STO,
    slug: 'abces-cellulites-dentaires',
    nom: 'Abcès et cellulites d’origine dentaire',
    resume:
      'Infection d’une dent cariée ou de la dent de sagesse étendue à l’os et aux tissus mous : douleur dentaire, tuméfaction, fièvre ; traitement de la dent (drainage par la dent, extraction) et incision de l’abcès ; amoxicilline (± métronidazole) si extension ou signes généraux ; éviter les AINS seuls ; trismus, dysphagie ou dyspnée = cellulite grave.',
    definition:
      'Infections suppurées d’origine dentaire : abcès apical (périapical), péricoronarite de la dent de sagesse, abcès sous-périosté et cellulite localisée de la face.',
    physiopathologie:
      '## Mécanismes\n- **Carie** → pulpite → nécrose pulpaire → infection apicale → abcès → extension aux tissus mous (cellulite)\n- **Péricoronarite** : dent de sagesse inférieure en éruption difficile\n- Flore mixte aéro-anaérobie (streptocoques, anaérobies)\n- Facteurs : mauvaise hygiène, sucre, accès limité aux soins dentaires, automédication par AINS',
    diagnostic:
      '## Clinique\n- **Douleur dentaire** pulsatile, dent sensible à la percussion, mobile\n- Tuméfaction gingivale ou vestibulaire fluctuante, joue gonflée\n- Fièvre, adénopathie sous-mandibulaire\n- **Signes de gravité** : trismus serré, dysphagie, dyspnée, tuméfaction du plancher buccal ou du cou, extension palpébrale, sepsis → cellulite cervico-faciale\n\n## Examens\n- **Radiographie dentaire** (rétro-alvéolaire, panoramique)\n- Glycémie, NFS si signes généraux',
    examens: [
      ['premiere_intention', 'radiographie-dentaire-panoramique', 'Dent causale, lésion apicale.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['gravite', 'nfs', 'Hyperleucocytose.'],
      ['etiologique', 'tdr-vih', 'Infections récidivantes.'],
    ],
    scores: [],
    differentiels: [
      ['cellulite-cervico-faciale', 'Extension diffuse, signes de gravité.'],
      ['noma', 'Enfant malnutri, nécrose.'],
      ['Ostéite des maxillaires', 'Évolution chronique, fistules, séquestres.'],
      ['Sinusite maxillaire', 'Douleur sous-orbitaire, rhinorrhée.'],
    ],
    etiologies:
      '## Facteurs\n- Caries non soignées, dent de sagesse incluse, traumatisme dentaire, diabète, VIH',
    principes: [
      [
        'Traitement de la cause',
        'Supprimer le foyer.',
        '- **Drainage** : ouverture de la chambre pulpaire, **incision** de l’abcès sous anesthésie locale (**lidocaïne**)\n- **Extraction** de la dent non conservable\n- Bains de bouche (**chlorhexidine**, eau salée tiède)',
      ],
      [
        'Antibiotiques',
        'Si extension ou signes généraux.',
        '- **Amoxicilline** 1 g 3 fois/j 5–7 jours, + **métronidazole** si cellulite ou péricoronarite\n- **Clindamycine** si allergie\n- Pas d’antibiotiques seuls sans traitement dentaire',
      ],
      [
        'Antalgie',
        'Soulager.',
        '- Paracétamol ; AINS (ibuprofène) en courte durée uniquement associé au traitement de la cause',
      ],
      [
        'Prévention',
        'Éviter la récidive.',
        '- Hygiène bucco-dentaire, brossage fluoré, soins des caries, réduction du sucre',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Infection dentaire étendue'],
      ['metronidazole', 'premiere', 'Anaérobies (avec amoxicilline)'],
      ['clindamycine', 'alternative', 'Allergie à la pénicilline'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Bains de bouche'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['ibuprofene', 'adjuvant', 'Douleur (courte durée, avec traitement de la cause)'],
    ],
    complications: [
      {
        nom: 'Cellulite cervico-faciale diffuse',
        fiche: 'cellulite-cervico-faciale',
        description: 'Extension.',
        traitement: '- Antibiotiques IV, drainage chirurgical',
        clinique: '- Trismus, dysphagie, dyspnée',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Ostéite des maxillaires',
        description: 'Infection osseuse chronique.',
        traitement: '- Antibiotiques prolongés, séquestrectomie',
        clinique: '- Fistules, dents mobiles',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sinusite maxillaire d’origine dentaire',
        description: 'Molaires supérieures.',
        traitement: '- Traitement dentaire, antibiotiques',
        clinique: '- Rhinorrhée unilatérale fétide',
        paraclinique: '',
      },
      {
        nom: 'Endocardite infectieuse',
        fiche: 'endocardite-infectieuse',
        description: 'Valvulopathie.',
        traitement: '- Antibiothérapie prolongée',
        clinique: '- Fièvre, souffle',
        paraclinique: '- Hémocultures, échocardiographie',
      },
    ],
    evolution: '## Pronostic\n- Guérison après traitement de la dent ; récidive si la cause persiste',
    urgences: [],
    symptomes: [
      ['Tuméfaction faciale', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Trismus', 'occasionnel'],
      ['Haleine fétide', 'frequent'],
      ['Adénopathies', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Antalgiques, amoxicilline, orientation vers le dentiste',
        '- Trismus, tuméfaction cervicale, fièvre élevée',
      ],
      hgr: ['- Extraction, incision-drainage, antibiotiques IV', '- Cellulite diffuse'],
      tert: ['- Chirurgie maxillo-faciale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Abcès apical',
        type: 'commune',
        description: 'Dent cariée.',
        terrain: '- Adulte, enfant',
        fonctionnels: '- Douleur dentaire pulsatile',
        generaux: '- Fébricule',
        physiques: '- Tuméfaction vestibulaire fluctuante',
        paraclinique: '- Lésion apicale',
        etiologies: '- Carie',
        syndromes: [],
        examens: [['radiographie-dentaire-panoramique', 'Lésion apicale']],
      },
      {
        nom: 'Péricoronarite',
        type: 'etiologique',
        description: 'Dent de sagesse.',
        terrain: '- Adulte jeune',
        fonctionnels: '- Douleur rétromolaire, trismus',
        generaux: '',
        physiques: '- Capuchon muqueux inflammatoire',
        paraclinique: '- Dent incluse',
        etiologies: '- Éruption difficile',
        syndromes: [],
      },
      {
        nom: 'Cellulite circonscrite',
        type: 'gravite',
        description: 'Extension aux tissus mous.',
        terrain: '- AINS, diabète',
        fonctionnels: '- Trismus, dysphagie',
        generaux: '- Fièvre',
        physiques: '- Tuméfaction jugale ou sous-mandibulaire',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Réanimation du choc
  {
    ...REA,
    slug: 'reanimation-du-choc',
    nom: 'Réanimation du choc',
    resume:
      'Démarche commune à tous les états de choc : reconnaître (hypotension, tachycardie, extrémités froides, oligurie, confusion, lactates), identifier le mécanisme (hypovolémique, septique, cardiogénique, obstructif, anaphylactique), oxygène, deux voies veineuses, remplissage par cristalloïdes guidé par la réponse, noradrénaline si hypotension persistante, traitement de la cause.',
    definition:
      'Insuffisance circulatoire aiguë entraînant une hypoperfusion et une hypoxie tissulaires, avec défaillance d’organes ; l’hypotension (PAS < 90 mmHg ou PAM < 65 mmHg) est fréquente mais non indispensable.',
    physiopathologie:
      '## Mécanismes\n- **Hypovolémique** : hémorragie (traumatisme, obstétrique, digestive), pertes digestives (choléra), brûlures\n- **Distributif** : **septique**, **anaphylactique**, neurogénique\n- **Cardiogénique** : infarctus, cardiomyopathie, troubles du rythme\n- **Obstructif** : embolie pulmonaire, tamponnade, pneumothorax compressif\n\n## Conséquences\n- Métabolisme anaérobie (**lactates**), défaillances rénale, respiratoire, neurologique, coagulopathie',
    diagnostic:
      '## Reconnaître\n- PAS < 90 mmHg, **tachycardie**, pouls filant\n- **Extrémités froides**, marbrures, **temps de recoloration > 3 s**\n- **Oligurie** (< 0,5 mL/kg/h), confusion, tachypnée\n- Lactates > 2 mmol/L\n\n## Orienter le mécanisme\n- Hémorragie visible ou occulte, fièvre et foyer infectieux, urticaire et contexte allergique\n- Turgescence jugulaire (cardiogénique, obstructif), crépitants, souffle, ECG\n- **Échographie au lit** (cœur, veine cave, plèvres, péritoine)\n\n## Examens\n- NFS, groupage, ionogramme, créatinine, glycémie, lactates, gaz du sang, hémocultures, hémostase, ECG, troponine, TDR paludisme',
    examens: [
      ['premiere_intention', 'lactates', 'Hypoperfusion, suivi.'],
      ['premiere_intention', 'nfs', 'Hémorragie, infection.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'creatinine', 'Défaillance rénale.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'hemocultures', 'Choc septique.'],
      ['etiologique', 'ecg', 'Choc cardiogénique.'],
      ['etiologique', 'echocardiographie', 'Mécanisme du choc.'],
      ['gravite', 'gaz-du-sang', 'Acidose.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme grave.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-et-choc-septique', 'Choc septique : fièvre, foyer infectieux.'],
      ['choc-hemorragique-traumatique', 'Traumatisme, hémorragie.'],
      ['choc-anaphylactique', 'Exposition à un allergène, urticaire, bronchospasme.'],
      ['choc-hemorragique-obstetrical', 'Contexte obstétrical.'],
      ['embolie-pulmonaire', 'Choc obstructif.'],
      ['choc-enfant', 'Enfant : protocoles pédiatriques.'],
    ],
    etiologies:
      '## Causes fréquentes en RDC\n- Sepsis (paludisme grave, péritonites, infections obstétricales), hémorragies (post-partum, traumatismes), déshydratation (choléra), cardiopathies',
    principes: [
      [
        'Mesures immédiates',
        'Restaurer la perfusion.',
        '- Position allongée, **oxygène**, deux voies veineuses de gros calibre (ou intra-osseuse)\n- **Remplissage** : cristalloïdes (**Ringer lactate** ou sérum salé 0,9 %) 500 mL en 15 min chez l’adulte, à répéter selon la réponse (pouls, tension, TRC, diurèse) et l’absence de surcharge (crépitants, turgescence jugulaire)\n- Sonde urinaire, surveillance rapprochée',
      ],
      [
        'Vasopresseurs',
        'Maintenir la pression.',
        '- **Noradrénaline** si PAM < 65 mmHg malgré le remplissage (voie centrale idéalement, périphérique possible sur une veine de bon calibre)\n- **Adrénaline** : anaphylaxie (IM 0,5 mg), ou en l’absence de noradrénaline',
      ],
      [
        'Traitement de la cause',
        'Agir sur le mécanisme.',
        '- Septique : antibiotiques dans l’heure (**ceftriaxone** ± métronidazole, adapter au foyer), contrôle de la source, **hydrocortisone** si choc réfractaire\n- Hémorragique : arrêt du saignement, **transfusion**, **acide tranexamique**\n- Anaphylactique : adrénaline IM\n- Obstructif : exsufflation, péricardiocentèse, thrombolyse\n- Cardiogénique : remplissage prudent, inotropes, revascularisation si disponible',
      ],
      [
        'Objectifs',
        'Suivre la réanimation.',
        '- PAM ≥ 65 mmHg, diurèse ≥ 0,5 mL/kg/h, TRC < 3 s, baisse des lactates, amélioration de la conscience\n- Glycémie, prévention des complications (ulcère de stress, thrombose)',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Remplissage'],
      ['noradrenaline', 'premiere', 'Vasopresseur'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie, alternative vasopresseur'],
      ['oxygene', 'premiere', 'Hypoxémie'],
      ['ceftriaxone', 'premiere', 'Choc septique'],
      ['hydrocortisone', 'adjuvant', 'Choc septique réfractaire'],
      ['acide-tranexamique', 'premiere', 'Choc hémorragique'],
      ['albumine-humaine', 'alternative', 'Remplissage (cas particuliers)'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Hypoperfusion.',
        traitement: '- Restaurer la perfusion, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Œdème pulmonaire de surcharge',
        description: 'Remplissage excessif.',
        traitement: '- Arrêt du remplissage, diurétique, oxygène',
        clinique: '- Crépitants, désaturation',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Coagulation intravasculaire disséminée',
        description: 'Sepsis, hémorragie.',
        traitement: '- Plasma, plaquettes, traitement de la cause',
        clinique: '- Saignements diffus',
        paraclinique: '- Hémostase, plaquettes',
      },
      {
        nom: 'Défaillance multiviscérale',
        description: 'Choc prolongé.',
        traitement: '- Réanimation',
        clinique: '- Coma, détresse respiratoire',
        paraclinique: '- Lactates élevés',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la rapidité de la réanimation et du traitement de la cause ; mortalité du choc septique de 30 à 50 %',
    urgences: ['choc-septique'],
    symptomes: [
      ['Hypotension', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Tachypnée', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Sueurs', 'frequent'],
    ],
    sources: [
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Oxygène, voie veineuse, remplissage, antibiotiques, adrénaline IM, transfert',
        '- Tout état de choc',
      ],
      hgr: [
        '- Remplissage guidé, transfusion, noradrénaline, chirurgie',
        '- Choc réfractaire, défaillances d’organes',
      ],
      tert: ['- Réanimation, ventilation, dialyse', ''],
    },
    alertes: { 'choc-septique': 'Hypotension persistante avec fièvre ou foyer infectieux' },
    formes: [
      {
        nom: 'Choc hypovolémique',
        type: 'commune',
        description: 'Hémorragie ou pertes liquidiennes.',
        terrain: '- Traumatisme, hémorragie, diarrhée',
        fonctionnels: '- Soif',
        generaux: '- Tachycardie, hypotension',
        physiques: '- Pâleur, veines plates, extrémités froides',
        paraclinique: '- Anémie ou hémoconcentration',
        etiologies: '- Hémorragie, choléra, brûlures',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Choc septique',
        type: 'etiologique',
        description: 'Choc distributif.',
        terrain: '- Infection',
        fonctionnels: '',
        generaux: '- Fièvre ou hypothermie',
        physiques: '- Extrémités chaudes puis froides',
        paraclinique: '- Lactates élevés, hémocultures',
        etiologies: '- Bactéries, paludisme grave',
        syndromes: ['syndrome-de-choc', 'syndrome-de-reponse-inflammatoire-systemique'],
      },
      {
        nom: 'Choc cardiogénique ou obstructif',
        type: 'etiologique',
        description: 'Pompe ou obstacle.',
        terrain: '- Cardiopathie, embolie, traumatisme',
        fonctionnels: '- Dyspnée, douleur thoracique',
        generaux: '',
        physiques: '- Turgescence jugulaire, crépitants',
        paraclinique: '- ECG, échographie',
        etiologies: '- Infarctus, tamponnade, embolie',
        syndromes: ['syndrome-de-choc', 'syndrome-d-insuffisance-cardiaque-gauche'],
      },
    ],
  },
];
