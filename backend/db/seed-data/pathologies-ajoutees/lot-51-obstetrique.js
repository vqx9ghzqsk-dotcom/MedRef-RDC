'use strict';

/**
 * Lot 51 (phase 2, pathologies obstétricales) — HELLP syndrome, môle hydatiforme, retard de
 * croissance intra-utérin, oligoamnios et hydramnios, chorioamniotite, cholestase gravidique.
 * Rédigé par IA (OMS, Normes et directives SR, FIGO) : à valider.
 */

const OBS = { departement: 'gynecologie-obstetrique', specialite: 'Pathologies obstétricales' };

module.exports = [
  // =================================================================== HELLP
  {
    ...OBS,
    slug: 'hellp-syndrome',
    nom: 'HELLP syndrome',
    resume:
      'Complication grave de la pré-éclampsie (parfois sans HTA ni protéinurie importantes) : hémolyse, cytolyse hépatique, thrombopénie ; douleur épigastrique ou de l’hypochondre droit en barre, nausées, vomissements, malaise, au 3e trimestre ou dans le post-partum ; NFS (plaquettes < 100 000), LDH > 600, transaminases élevées, frottis (schizocytes) ; sulfate de magnésium, contrôle tensionnel, corticoïdes si < 34 semaines, accouchement rapide après stabilisation, transfusion de plaquettes si nécessaire ; risques : hématome sous-capsulaire du foie, CIVD, HRP, insuffisance rénale.',
    definition:
      'Syndrome associant hémolyse (Hemolysis), élévation des enzymes hépatiques (Elevated Liver enzymes) et thrombopénie (Low Platelets), forme sévère de la pré-éclampsie.',
    physiopathologie:
      '## Mécanismes\n- Dysfonction endothéliale placentaire (pré-éclampsie) → **microangiopathie** : hémolyse mécanique (schizocytes), dépôts de fibrine dans les sinusoïdes hépatiques (nécrose périportale), consommation de plaquettes\n\n## Complications\n- **Hématome sous-capsulaire** et rupture du foie, **CIVD**, **hématome rétroplacentaire**, insuffisance rénale aiguë, œdème pulmonaire, éclampsie, décès maternel et fœtal',
    diagnostic:
      '## Clinique\n- **Douleur épigastrique** ou de l’**hypochondre droit** (en barre), nausées, vomissements, malaise général\n- HTA (parfois modérée ou absente), protéinurie, céphalées, troubles visuels\n- Ictère, saignements (gencives, points de ponction), hématurie\n- 3e trimestre ou **post-partum** (jusqu’à 7 jours)\n\n## Examens\n- **NFS** : **plaquettes < 100 000/mm³**, anémie\n- **LDH > 600 UI/L**, bilirubine libre élevée, haptoglobine basse, **schizocytes**\n- **Transaminases** (ASAT > 70 UI/L)\n- Hémostase (CIVD), créatinine, protéinurie, glycémie\n- Échographie hépatique si douleur intense (hématome) ; bilan fœtal',
    examens: [
      ['confirmation', 'nfs', 'Thrombopénie, anémie.'],
      ['confirmation', 'ldh', 'Hémolyse.'],
      ['confirmation', 'bilan-hepatique', 'Cytolyse.'],
      ['premiere_intention', 'frottis-sanguin', 'Schizocytes.'],
      ['gravite', 'hemostase', 'CIVD.'],
      ['gravite', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'proteinurie', 'Pré-éclampsie.'],
      ['gravite', 'echographie-abdominale', 'Hématome sous-capsulaire.'],
      ['premiere_intention', 'echographie-obstetricale', 'Bien-être fœtal.'],
    ],
    scores: [],
    differentiels: [
      [
        'Stéatose hépatique aiguë gravidique',
        'Hypoglycémie, insuffisance hépatique, troubles de coagulation précoces.',
      ],
      ['hepatite-e-et-grossesse', 'Ictère, IgM anti-VHE.'],
      ['paludisme-et-grossesse', 'Fièvre, thrombopénie, TDR positif.'],
      ['Microangiopathies thrombotiques (PTT, SHU)', 'Thrombopénie et schizocytes sans pré-éclampsie.'],
      ['cholecystite-lithiase-biliaire', 'Douleur de l’hypochondre droit, fièvre.'],
    ],
    etiologies: '## Terrain\n- Pré-éclampsie, multiparité, antécédent de HELLP',
    principes: [
      [
        'Stabilisation',
        'Protéger la mère.',
        '- **Sulfate de magnésium** (schéma de Zuspan ou Pritchard) pour prévenir l’éclampsie\n- **Antihypertenseurs** si TA ≥ 160/110 : **labétalol** IV, **nifédipine** orale, hydralazine\n- Correction de la coagulation : **plaquettes** si < 50 000 avant césarienne ou si saignement, plasma frais congelé si CIVD',
      ],
      [
        'Accouchement',
        'Seul traitement curatif.',
        '- **Accouchement rapide** après stabilisation (dans les 24–48 h si < 34 semaines pour permettre les corticoïdes, immédiat si > 34 semaines ou aggravation)\n- **Dexaméthasone** 6 mg IM toutes les 12 h × 4 pour la maturation pulmonaire si < 34 semaines\n- Voie basse possible si col favorable ; césarienne sinon ; anesthésie générale si plaquettes < 75 000',
      ],
      [
        'Post-partum',
        'Surveiller.',
        '- Surveillance en soins intensifs 48–72 h (aggravation possible après l’accouchement), NFS, transaminases, diurèse\n- Hématome hépatique rompu : réanimation, chirurgie',
      ],
    ],
    molecules: [
      ['sulfate-de-magnesium', 'premiere', 'Prévention de l’éclampsie'],
      ['labetalol', 'premiere', 'HTA sévère'],
      ['nifedipine', 'premiere', 'HTA sévère'],
      ['hydralazine', 'alternative', 'HTA sévère'],
      ['dexamethasone', 'premiere', 'Maturation pulmonaire fœtale'],
    ],
    complications: [
      {
        nom: 'Éclampsie',
        fiche: 'eclampsie',
        description: 'Pré-éclampsie sévère.',
        traitement: '- Sulfate de magnésium',
        clinique: '- Convulsions',
        paraclinique: '',
      },
      {
        nom: 'Hématome rétroplacentaire',
        fiche: 'hematome-retroplacentaire',
        description: 'Microangiopathie.',
        traitement: '- Extraction, réanimation',
        clinique: '- Douleur, utérus dur',
        paraclinique: '',
      },
      {
        nom: 'Hématome sous-capsulaire du foie',
        description: 'Nécrose hépatique.',
        traitement: '- Réanimation, chirurgie',
        clinique: '- Douleur épigastrique intense, choc',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Microangiopathie, hypovolémie.',
        traitement: '- Équilibre hydrique, dialyse',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle de 1 à 25 % selon l’accès aux soins ; régression biologique en quelques jours après l’accouchement',
    urgences: ['eclampsie', 'urgence-hypertensive'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Nausées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Céphalées', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Œdèmes', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Douleur épigastrique chez une femme enceinte : TA, protéinurie, sulfate de magnésium, référence',
        '- Tout cas suspect',
      ],
      hgr: ['- Bilan, stabilisation, accouchement', ''],
      tert: ['- Réanimation, transfusion de plaquettes', ''],
    },
    alertes: {
      eclampsie: 'Femme enceinte avec douleur épigastrique, céphalées et HTA',
      'urgence-hypertensive': 'TA ≥ 160/110 mmHg pendant la grossesse',
    },
    formes: [
      {
        nom: 'HELLP complet',
        type: 'commune',
        description: 'Triade biologique.',
        terrain: '- 3e trimestre, pré-éclampsie',
        fonctionnels: '- Douleur épigastrique',
        generaux: '',
        physiques: '- HTA, œdèmes',
        paraclinique: '- Plaquettes < 100 000, LDH, transaminases élevées',
        etiologies: '',
        syndromes: ['syndrome-hellp'],
      },
      {
        nom: 'HELLP du post-partum',
        type: 'evolutive',
        description: 'Après l’accouchement.',
        terrain: '- Post-partum < 7 jours',
        fonctionnels: '- Douleur, nausées',
        generaux: '',
        physiques: '',
        paraclinique: '- Thrombopénie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'HELLP compliqué',
        type: 'gravite',
        description: 'Hématome hépatique, CIVD.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Saignements',
        paraclinique: '- CIVD',
        etiologies: '',
        syndromes: ['syndrome-hemorragique', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Môle hydatiforme
  {
    ...OBS,
    slug: 'mole-hydatiforme',
    nom: 'Môle hydatiforme',
    resume:
      'Maladie trophoblastique gestationnelle : grossesse anormale avec prolifération du trophoblaste (môle complète ou partielle) : saignements du 1er trimestre, utérus plus gros que l’âge de la grossesse, vomissements importants, pré-éclampsie précoce, hyperthyroïdie, expulsion de vésicules ; β-hCG très élevée, échographie (aspect en « flocons de neige ») ; évacuation par aspiration manuelle ou électrique (pas de misoprostol en première intention), examen histologique, surveillance de la β-hCG jusqu’à négativation puis pendant 6 mois, contraception efficace ; risque de tumeur trophoblastique (choriocarcinome).',
    definition:
      'Grossesse anormale caractérisée par une dégénérescence hydropique des villosités choriales et une hyperplasie du trophoblaste ; complète (sans embryon, origine paternelle) ou partielle (triploïde, avec embryon anormal).',
    physiopathologie:
      '## Mécanismes\n- **Môle complète** : fécondation d’un ovule sans noyau → génome uniquement paternel, pas d’embryon\n- **Môle partielle** : triploïdie, embryon malformé\n- Production excessive d’**hCG** → vomissements, kystes ovariens, hyperthyroïdie\n\n## Évolution\n- Risque de **tumeur trophoblastique gestationnelle** (môle invasive, **choriocarcinome**) : 15–20 % après môle complète, 1–5 % après môle partielle\n\n## Facteurs\n- Âges extrêmes, antécédent de môle',
    diagnostic:
      '## Clinique\n- **Saignements** du 1er trimestre, parfois expulsion de **vésicules** en grappe\n- **Utérus trop gros** et mou pour l’âge, absence de bruits du cœur fœtal\n- **Vomissements** importants, **pré-éclampsie** avant 20 semaines, signes d’**hyperthyroïdie**\n\n## Examens\n- **β-hCG** quantitative très élevée\n- **Échographie** : image intra-utérine en « flocons de neige » ou « nid d’abeille », kystes ovariens\n- NFS, groupage-RAI, TSH, radiographie thoracique (métastases), bilan hépatique et rénal\n- **Histologie** après évacuation (confirmation)',
    examens: [
      ['confirmation', 'beta-hcg', 'Très élevée, suivi.'],
      ['confirmation', 'echographie-pelvienne', 'Aspect en flocons de neige.'],
      ['confirmation', 'biopsie-histologie', 'Produit d’évacuation.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'groupage-rai', 'Hémorragie, rhésus.'],
      ['premiere_intention', 'tsh', 'Hyperthyroïdie.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
    ],
    scores: [],
    differentiels: [
      ['avortement-spontane', 'Saignement, utérus de taille normale ou petite.'],
      ['grossesse-gemellaire', 'Utérus gros, deux fœtus.'],
      ['hyperemesis-gravidarum', 'Vomissements avec grossesse normale.'],
      ['grossesse-extra-uterine', 'Utérus vide, douleur.'],
    ],
    etiologies: '## Facteurs\n- Âge < 20 ans ou > 40 ans, antécédent de môle',
    principes: [
      [
        'Évacuation',
        'Vider l’utérus.',
        '- **Aspiration** manuelle (AMIU) ou électrique sous perfusion d’**ocytocine** (débutée pendant l’aspiration), quel que soit la taille utérine\n- Éviter le misoprostol et l’ocytocine seuls avant l’aspiration (embolisation trophoblastique)\n- **Immunoglobulines anti-D** si rhésus négatif ; transfusion si nécessaire\n- **Histologie** systématique',
      ],
      [
        'Surveillance',
        'Dépister une tumeur trophoblastique.',
        '- **β-hCG** hebdomadaire jusqu’à négativation (3 dosages négatifs), puis mensuelle pendant 6 mois\n- **Contraception** efficace pendant la surveillance (pilule, injectable, implant)\n- Plateau ou réascension de la β-hCG, métastases : tumeur trophoblastique → **méthotrexate** (ou dactinomycine) en centre spécialisé (très chimiosensible)',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Pendant l’aspiration'],
      ['immunoglobulines-anti-d', 'adjuvant', 'Femme rhésus négatif'],
      ['methotrexate', 'deuxieme', 'Tumeur trophoblastique (spécialiste)'],
      ['dactinomycine', 'deuxieme', 'Tumeur trophoblastique (spécialiste)'],
      ['medroxyprogesterone', 'adjuvant', 'Contraception pendant la surveillance'],
    ],
    complications: [
      {
        nom: 'Hémorragie',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Évacuation, perforation.',
        traitement: '- Ocytocine, transfusion',
        clinique: '- Saignement abondant',
        paraclinique: '',
      },
      {
        nom: 'Tumeur trophoblastique (choriocarcinome)',
        description: 'Persistance de la β-hCG.',
        traitement: '- Chimiothérapie',
        clinique: '- Saignements, métastases',
        paraclinique: '- β-hCG, radiographie',
      },
      {
        nom: 'Pré-éclampsie précoce',
        fiche: 'pre-eclampsie-severe',
        description: 'Avant 20 semaines.',
        traitement: '- Évacuation, antihypertenseurs',
        clinique: '- HTA',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Hyperthyroïdie',
        fiche: 'hyperthyroidie-basedow',
        description: 'hCG.',
        traitement: '- Bêtabloquants, évacuation',
        clinique: '- Tachycardie',
        paraclinique: '- TSH basse',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison dans la majorité après évacuation ; tumeurs trophoblastiques curables (> 90 %) si surveillance et chimiothérapie',
    urgences: [],
    symptomes: [
      ['Saignement vaginal', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Palpitations', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'ESMO — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Saignement avec utérus trop gros : référence', ''],
      hgr: ['- Échographie, β-hCG, aspiration, histologie', ''],
      tert: ['- Chimiothérapie des tumeurs trophoblastiques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Môle complète',
        type: 'commune',
        description: 'Sans embryon.',
        terrain: '- Âges extrêmes',
        fonctionnels: '- Saignements, vomissements',
        generaux: '',
        physiques: '- Utérus trop gros',
        paraclinique: '- β-hCG très élevée, flocons de neige',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Môle partielle',
        type: 'etiologique',
        description: 'Triploïdie.',
        terrain: '',
        fonctionnels: '- Saignements',
        generaux: '',
        physiques: '',
        paraclinique: '- Embryon anormal, placenta kystique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Tumeur trophoblastique gestationnelle',
        type: 'gravite',
        description: 'Évolution maligne.',
        terrain: '- Après môle',
        fonctionnels: '- Saignements persistants',
        generaux: '',
        physiques: '- Métastases vaginales',
        paraclinique: '- β-hCG en plateau ou en hausse',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== RCIU
  {
    ...OBS,
    slug: 'retard-croissance-intra-uterin',
    nom: 'Retard de croissance intra-utérin',
    resume:
      'Croissance fœtale insuffisante (estimation du poids < 10e percentile) : causes maternelles (malnutrition, anémie, paludisme placentaire, HTA et pré-éclampsie, tabac, VIH, drépanocytose), fœtales (anomalies chromosomiques, infections TORCH, grossesse multiple) et placentaires ; dépistage par la mesure de la hauteur utérine à chaque CPN, confirmation échographique (biométrie, liquide amniotique, Doppler) ; prévention du paludisme, nutrition, aspirine si risque de pré-éclampsie ; surveillance du bien-être fœtal et accouchement au moment optimal ; nouveau-né à risque d’hypoglycémie et d’hypothermie.',
    definition:
      'Fœtus dont le poids estimé ou la circonférence abdominale est inférieur au 10e percentile pour l’âge gestationnel, en particulier lorsqu’il ne réalise pas son potentiel de croissance (restriction de croissance).',
    physiopathologie:
      '## Causes maternelles\n- **Malnutrition**, faible prise de poids, **anémie**, **paludisme placentaire**, **HTA** et **pré-éclampsie**, tabac, alcool, VIH, drépanocytose, cardiopathies, adolescence\n\n## Causes fœtales\n- Anomalies chromosomiques, malformations, **infections** (CMV, toxoplasmose, rubéole, syphilis), grossesse multiple\n\n## Causes placentaires\n- Insuffisance placentaire, infarctus, insertion anormale du cordon\n\n## Types\n- **Harmonieux** (précoce, cause fœtale) ; **dysharmonieux** (tardif, vasculaire : périmètre abdominal réduit)',
    diagnostic:
      '## Dépistage\n- **Hauteur utérine** inférieure à l’attendue (écart > 3 cm), faible prise de poids maternelle\n\n## Confirmation\n- **Échographie** : biométries (périmètre céphalique, abdominal, fémur), estimation du poids, **liquide amniotique** (oligoamnios), **Doppler** ombilical\n- Datation précise (échographie précoce)\n\n## Bilan étiologique\n- Tension, protéinurie, NFS, TDR paludisme, VIH, syphilis, sérologies TORCH, électrophorèse de l’hémoglobine, morphologie fœtale',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Biométrie, liquide, Doppler.'],
      ['premiere_intention', 'bandelette-urinaire', 'Pré-éclampsie.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme placentaire.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'serologies-torch', 'Infections fœtales.'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: [],
    differentiels: [
      ['Erreur de terme', 'Datation incertaine.'],
      ['Petit fœtus constitutionnellement', 'Croissance régulière, Doppler et liquide normaux.'],
      ['oligoamnios-et-hydramnios', 'Hauteur utérine basse par oligoamnios.'],
    ],
    etiologies:
      '## Causes\n- Maternelles (malnutrition, paludisme, HTA), fœtales (chromosomiques, infections), placentaires',
    principes: [
      [
        'Prévention',
        'Agir sur les causes.',
        '- **TPI** (sulfadoxine-pyriméthamine) et moustiquaire, **fer-acide folique**, supplémentation énergétique et protéique si malnutrition\n- **Aspirine** 75–150 mg/j dès 12 semaines si risque de pré-éclampsie, **calcium**\n- Arrêt du tabac et de l’alcool, traitement de l’HTA et des infections',
      ],
      [
        'Surveillance',
        'Choisir le moment de l’accouchement.',
        '- Échographie de croissance toutes les 2–3 semaines, liquide amniotique, Doppler ombilical, mouvements fœtaux, cardiotocographie\n- Doppler anormal, oligoamnios, anomalies du RCF : accouchement selon le terme\n- **Corticoïdes** (dexaméthasone) si naissance prévue avant 34 semaines ; **sulfate de magnésium** avant 32 semaines (neuroprotection)',
      ],
      [
        'Naissance',
        'Préparer l’accueil du nouveau-né.',
        '- Accouchement en structure avec réanimation néonatale\n- Nouveau-né : prévention de l’**hypoglycémie** et de l’**hypothermie** (peau à peau, alimentation précoce), méthode kangourou',
      ],
    ],
    molecules: [
      ['sulfadoxine', 'premiere', 'TPI (sulfadoxine-pyriméthamine)'],
      ['acide-acetylsalicylique', 'alternative', 'Prévention si risque de pré-éclampsie'],
      ['fumarate-ferreux-fer', 'premiere', 'Supplémentation'],
      ['dexamethasone', 'alternative', 'Maturation pulmonaire'],
      ['sulfate-de-magnesium', 'adjuvant', 'Neuroprotection avant 32 semaines'],
    ],
    complications: [
      {
        nom: 'Mort fœtale in utero',
        fiche: 'mort-foetale-in-utero',
        description: 'Insuffisance placentaire.',
        traitement: '- Surveillance, accouchement',
        clinique: '- Arrêt des mouvements',
        paraclinique: '',
      },
      {
        nom: 'Asphyxie périnatale',
        fiche: 'asphyxie-perinatale',
        description: 'Mauvaise tolérance du travail.',
        traitement: '- Réanimation néonatale',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hypoglycémie néonatale',
        fiche: 'hypoglycemie-neonatale',
        description: 'Réserves faibles.',
        traitement: '- Alimentation précoce, glucose',
        clinique: '- Léthargie',
        paraclinique: '- Glycémie',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité périnatale accrue ; risques à long terme (retard de croissance, maladies métaboliques)',
    urgences: [],
    symptomes: [],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: ['- Hauteur utérine à chaque CPN, TPI, nutrition, référence', '- Hauteur utérine trop basse'],
      hgr: ['- Échographie, surveillance, accouchement', ''],
      tert: ['- Doppler, néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'RCIU vasculaire tardif',
        type: 'commune',
        description: 'Dysharmonieux.',
        terrain: '- HTA, pré-éclampsie, paludisme',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hauteur utérine basse',
        paraclinique: '- Périmètre abdominal réduit, Doppler anormal',
        etiologies: '- Insuffisance placentaire',
        syndromes: [],
      },
      {
        nom: 'RCIU sévère précoce',
        type: 'gravite',
        description: 'Avant 32 semaines.',
        terrain: '',
        fonctionnels: '- Diminution des mouvements',
        generaux: '',
        physiques: '',
        paraclinique: '- Oligoamnios, Doppler très anormal',
        etiologies: '- Chromosomique, infectieux, vasculaire',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Oligoamnios et hydramnios
  {
    ...OBS,
    slug: 'oligoamnios-et-hydramnios',
    nom: 'Oligoamnios et hydramnios',
    resume:
      'Anomalies de la quantité de liquide amniotique à l’échographie : oligoamnios (plus grande citerne < 2 cm ou index < 5 cm) lié à la rupture des membranes, à l’insuffisance placentaire (RCIU, pré-éclampsie, terme dépassé) ou à une malformation urinaire fœtale ; hydramnios (citerne > 8 cm ou index > 24 cm) lié au diabète, aux malformations digestives ou neurologiques fœtales, aux infections, à l’anémie fœtale, aux grossesses gémellaires monochoriales ; bilan étiologique, surveillance, accouchement en structure (procidence du cordon, hémorragie).',
    definition:
      'Oligoamnios : diminution du volume de liquide amniotique ; hydramnios (polyhydramnios) : excès de liquide amniotique, évalués par échographie.',
    physiopathologie:
      '## Oligoamnios\n- **Rupture des membranes**, **insuffisance placentaire** (RCIU, pré-éclampsie, terme dépassé), **malformations urinaires** fœtales (agénésie rénale, valves), médicaments (AINS, IEC)\n- Conséquences : compression du cordon, **hypoplasie pulmonaire** (avant 24 semaines), déformations\n\n## Hydramnios\n- **Diabète** maternel, **malformations** (atrésie de l’œsophage ou du duodénum, anencéphalie), **anémie fœtale** (allo-immunisation, parvovirus), infections, syndrome transfuseur-transfusé, idiopathique\n- Conséquences : dyspnée maternelle, **menace d’accouchement prématuré**, présentations anormales, **procidence du cordon** à la rupture, hémorragie du post-partum',
    diagnostic:
      '## Clinique\n- Oligoamnios : hauteur utérine basse, fœtus facilement palpable, mouvements perçus douloureux\n- Hydramnios : **utérus trop gros**, tendu, fœtus difficile à palper, bruits du cœur assourdis, dyspnée, œdèmes\n\n## Examens\n- **Échographie** : plus grande citerne verticale ou index amniotique, morphologie fœtale, croissance, Doppler\n- Oligoamnios : rechercher une rupture des membranes (spéculum)\n- Hydramnios : **glycémie** (HGPO), groupage-RAI, sérologies (TORCH, syphilis)',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Quantité de liquide, morphologie.'],
      ['etiologique', 'hgpo-75g', 'Diabète (hydramnios).'],
      ['etiologique', 'groupage-rai', 'Allo-immunisation.'],
      ['etiologique', 'serologies-torch', 'Infections.'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
    ],
    scores: [],
    differentiels: [
      ['rupture-prematuree-membranes', 'Écoulement de liquide.'],
      ['grossesse-gemellaire', 'Utérus trop gros.'],
      ['mole-hydatiforme', 'Utérus trop gros au 1er trimestre.'],
      ['retard-croissance-intra-uterin', 'Hauteur utérine basse.'],
    ],
    etiologies:
      '## Causes\n- Oligoamnios : rupture, insuffisance placentaire, malformations urinaires ; hydramnios : diabète, malformations, anémie fœtale',
    principes: [
      [
        'Oligoamnios',
        'Selon la cause et le terme.',
        '- Rupture des membranes : prise en charge spécifique (antibiotiques, corticoïdes)\n- Insuffisance placentaire : surveillance rapprochée, accouchement selon le terme et le bien-être fœtal\n- Hydratation maternelle ; arrêt des AINS et IEC',
      ],
      [
        'Hydramnios',
        'Traiter la cause.',
        '- Équilibre du **diabète**, recherche de malformations (orientation pour prise en charge néonatale chirurgicale)\n- Formes sévères symptomatiques : amniodrainage en centre spécialisé ; tocolyse si contractions\n- Accouchement en structure : rupture contrôlée des membranes (procidence), **gestion active de la délivrance**',
      ],
    ],
    molecules: [
      ['dexamethasone', 'alternative', 'Maturation pulmonaire'],
      ['nifedipine', 'alternative', 'Tocolyse'],
      ['ocytocine', 'premiere', 'Gestion active de la délivrance'],
    ],
    complications: [
      {
        nom: 'Procidence du cordon',
        fiche: 'procidence-du-cordon',
        description: 'Hydramnios, rupture.',
        traitement: '- Césarienne urgente',
        clinique: '- Cordon visible ou palpable',
        paraclinique: '',
      },
      {
        nom: 'Accouchement prématuré',
        fiche: 'menace-accouchement-premature',
        description: 'Surdistension.',
        traitement: '- Tocolyse, corticoïdes',
        clinique: '- Contractions',
        paraclinique: '',
      },
      {
        nom: 'Hypoplasie pulmonaire',
        description: 'Oligoamnios précoce.',
        traitement: '- Réanimation néonatale',
        clinique: '- Détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Hydramnios.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et du terme ; oligoamnios précoce sévère de mauvais pronostic',
    urgences: [],
    symptomes: [
      ['Dyspnée', 'occasionnel'],
      ['Douleur abdominale', 'occasionnel'],
      ['Écoulement de liquide amniotique', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Hauteur utérine anormale : référence', ''],
      hgr: ['- Échographie, bilan, accouchement', ''],
      tert: ['- Diagnostic prénatal, chirurgie néonatale', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Oligoamnios',
        type: 'commune',
        description: 'Peu de liquide.',
        terrain: '- RCIU, terme dépassé, rupture',
        fonctionnels: '',
        generaux: '',
        physiques: '- Hauteur utérine basse',
        paraclinique: '- Citerne < 2 cm',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hydramnios',
        type: 'etiologique',
        description: 'Excès de liquide.',
        terrain: '- Diabète, malformation',
        fonctionnels: '- Dyspnée',
        generaux: '',
        physiques: '- Utérus trop gros',
        paraclinique: '- Citerne > 8 cm',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Chorioamniotite
  {
    ...OBS,
    slug: 'chorioamniotite',
    nom: 'Chorioamniotite',
    resume:
      'Infection intra-amniotique, le plus souvent après rupture prolongée des membranes ou travail prolongé avec touchers multiples : fièvre maternelle ≥ 38 °C avec tachycardie fœtale, tachycardie maternelle, utérus douloureux, liquide fétide ou purulent ; risques de sepsis maternel, d’hémorragie du post-partum, de sepsis et d’asphyxie néonatale ; antibiotiques IV immédiats (ampicilline + gentamicine, + métronidazole en cas de césarienne), accouchement rapide (pas d’attente prolongée), prise en charge du nouveau-né (antibiotiques).',
    definition:
      'Infection des membranes fœtales et du liquide amniotique (infection intra-amniotique), généralement par ascension de germes vaginaux.',
    physiopathologie:
      '## Mécanismes\n- **Ascension** de germes vaginaux et digestifs (streptocoque B, E. coli, anaérobies, mycoplasmes) après **rupture des membranes**, **travail prolongé**, **touchers vaginaux répétés**, manœuvres intra-utérines, avortement septique\n- Plus rarement par voie hématogène (Listeria)\n\n## Conséquences\n- Mère : **sepsis**, **atonie utérine** et hémorragie, endométrite\n- Fœtus et nouveau-né : **sepsis néonatal précoce**, méningite, pneumonie, asphyxie, prématurité',
    diagnostic:
      '## Clinique\n- **Fièvre** ≥ 38 °C (souvent ≥ 39 °C) pendant le travail ou après rupture\n- **Tachycardie fœtale** (> 160/min), **tachycardie maternelle**\n- **Utérus douloureux** à la palpation, **liquide amniotique fétide** ou purulent, leucorrhées purulentes\n- Signes de sepsis : hypotension, confusion, oligurie\n\n## Examens\n- NFS, CRP, **hémocultures**, prélèvement vaginal, ECBU, TDR paludisme (fièvre)\n- Cardiotocographie ; lactates si sepsis',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'hemocultures', 'Bactériémie.'],
      ['premiere_intention', 'prelevement-vaginal', 'Germes.'],
      ['etiologique', 'tdr-paludisme', 'Diagnostic différentiel.'],
      ['etiologique', 'ecbu', 'Pyélonéphrite.'],
      ['premiere_intention', 'cardiotocographie', 'Tachycardie fœtale.'],
    ],
    scores: [],
    differentiels: [
      ['paludisme-et-grossesse', 'Fièvre, TDR positif.'],
      ['infections-urinaires-de-la-grossesse', 'Pyélonéphrite : douleur lombaire.'],
      ['fievre-pendant-la-grossesse', 'Autres causes de fièvre.'],
      ['Fièvre de l’analgésie péridurale', 'Fébricule sans signe utérin.'],
    ],
    etiologies:
      '## Facteurs\n- Rupture prolongée des membranes, travail prolongé, touchers vaginaux répétés, manœuvres, avortement',
    principes: [
      [
        'Antibiothérapie',
        'Immédiate.',
        '- **Ampicilline** 2 g IV toutes les 6 h + **gentamicine** 5 mg/kg IV une fois par jour\n- Ajouter **métronidazole** 500 mg IV toutes les 8 h (ou clindamycine) en cas de césarienne\n- Poursuivre jusqu’à 24–48 h d’apyrexie après l’accouchement (plus longtemps si endométrite ou bactériémie)',
      ],
      [
        'Accouchement',
        'Ne pas attendre.',
        '- Accélérer l’accouchement : ocytocine, voie basse si possible ; **césarienne pour indication obstétricale**\n- **Gestion active de la délivrance** (risque d’atonie)\n- Antipyrétique (paracétamol), réanimation si sepsis',
      ],
      [
        'Nouveau-né',
        'Traiter le sepsis précoce.',
        '- Évaluation, **ampicilline + gentamicine** chez le nouveau-né symptomatique ou selon le protocole national, surveillance 48 h',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Antibiothérapie'],
      ['gentamicine', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'alternative', 'Césarienne, anaérobies'],
      ['clindamycine', 'alternative', 'Anaérobies, allergie'],
      ['ocytocine', 'premiere', 'Accouchement, délivrance'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Sepsis maternel',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Infection.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Hypotension, confusion',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Sepsis néonatal',
        fiche: 'sepsis-neonatal',
        description: 'Transmission.',
        traitement: '- Antibiotiques',
        clinique: '- Détresse, hypothermie',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Atonie utérine.',
        traitement: '- Utérotoniques',
        clinique: '- Saignement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si antibiotiques et accouchement rapides ; mortalité maternelle et néonatale élevée en cas de sepsis non traité',
    urgences: ['choc-septique', 'sepsis-neonatal-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Douleur abdominale', 'frequent'],
      ['Leucorrhées', 'frequent'],
      ['Écoulement de liquide amniotique', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
    ],
    niveaux: {
      cs: ['- Fièvre pendant le travail : première dose d’antibiotiques, référence', '- Tout cas'],
      hgr: ['- Antibiotiques IV, accouchement, néonatologie', ''],
      tert: ['- Réanimation maternelle et néonatale', ''],
    },
    alertes: {
      'choc-septique': 'Femme fébrile en travail avec hypotension',
      'sepsis-neonatal-urgence': 'Nouveau-né d’une mère avec chorioamniotite',
    },
    formes: [
      {
        nom: 'Chorioamniotite clinique',
        type: 'commune',
        description: 'Pendant le travail.',
        terrain: '- Rupture prolongée, travail long',
        fonctionnels: '- Douleur utérine',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Liquide fétide',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Germes vaginaux',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Chorioamniotite avec sepsis',
        type: 'gravite',
        description: 'Choc septique.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Hypotension',
        physiques: '- Confusion, oligurie',
        paraclinique: '- Lactates élevés',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Cholestase gravidique
  {
    ...OBS,
    slug: 'cholestase-gravidique',
    nom: 'Cholestase gravidique',
    resume:
      'Affection hépatique propre à la grossesse (2e–3e trimestres) : prurit intense palmo-plantaire à prédominance nocturne, sans lésion cutanée primaire, parfois ictère discret ; acides biliaires élevés (≥ 10 µmol/L) et transaminases modérément augmentées ; risque de mort fœtale et de prématurité, d’autant plus élevé que les acides biliaires sont hauts (≥ 100 µmol/L) ; acide ursodésoxycholique, vitamine K si cholestase prolongée, surveillance fœtale, accouchement entre 35 et 39 semaines selon le taux ; disparition après l’accouchement.',
    definition:
      'Cholestase intrahépatique de la grossesse : prurit et élévation des acides biliaires sériques au 2e ou 3e trimestre, régressant après l’accouchement.',
    physiopathologie:
      '## Mécanismes\n- Sensibilité génétique des transporteurs biliaires aux **hormones de la grossesse** (œstrogènes, progestérone) → accumulation d’**acides biliaires**\n- Les acides biliaires passent chez le fœtus : arythmies, vasoconstriction placentaire → **mort fœtale subite**, liquide méconial, prématurité\n\n## Facteurs\n- Antécédent personnel ou familial, grossesse multiple, hépatite C',
    diagnostic:
      '## Clinique\n- **Prurit** intense, **paumes et plantes** puis généralisé, **nocturne**, insomnie, lésions de grattage\n- Pas d’éruption primaire ; ictère dans 10–15 %, urines foncées\n\n## Examens\n- **Acides biliaires sériques** à jeun (≥ 10 µmol/L), **transaminases** élevées\n- Éliminer : hépatites virales (AgHBs, VHE, VHA), HELLP, paludisme, échographie hépatique (lithiase)\n- Surveillance fœtale (cardiotocographie)',
    examens: [
      ['confirmation', 'acides-biliaires-seriques', '≥ 10 µmol/L.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases, bilirubine.'],
      ['etiologique', 'serologies-hepatites', 'Hépatites virales.'],
      ['etiologique', 'echographie-abdominale', 'Lithiase biliaire.'],
      ['gravite', 'hemostase', 'TP (vitamine K).'],
      ['premiere_intention', 'cardiotocographie', 'Bien-être fœtal.'],
      ['premiere_intention', 'nfs', 'Plaquettes (HELLP).'],
    ],
    scores: [],
    differentiels: [
      ['hellp-syndrome', 'HTA, thrombopénie, hémolyse.'],
      ['hepatite-e-et-grossesse', 'Ictère fébrile, IgM VHE.'],
      ['gale', 'Prurit familial, sillons.'],
      ['Dermatoses de la grossesse (pemphigoïde, éruption polymorphe)', 'Lésions cutanées primaires.'],
      ['cholecystite-lithiase-biliaire', 'Douleur, échographie.'],
    ],
    etiologies: '## Facteurs\n- Hormones de la grossesse, prédisposition génétique, grossesse multiple',
    principes: [
      [
        'Traitement maternel',
        'Soulager le prurit.',
        '- **Acide ursodésoxycholique** 10–15 mg/kg/j (500–1 000 mg/j en 2 prises), ajusté selon le prurit\n- Émollients, antihistaminique sédatif le soir\n- **Vitamine K1** si TP bas ou cholestase prolongée avant l’accouchement',
      ],
      [
        'Surveillance fœtale et accouchement',
        'Prévenir la mort fœtale.',
        '- Acides biliaires et transaminases toutes les 1–2 semaines\n- **Acides biliaires ≥ 100 µmol/L** : accouchement vers **35–36 semaines** ; 40–99 µmol/L : vers 38–39 semaines ; < 40 : 38–40 semaines (selon les directives)\n- Corticoïdes si accouchement avant 34 semaines',
      ],
      [
        'Après l’accouchement',
        'Contrôler.',
        '- Disparition du prurit en quelques jours ; contrôle du bilan hépatique à 6–12 semaines (sinon autre cause)\n- Récidive fréquente aux grossesses suivantes ; prudence avec les contraceptifs œstroprogestatifs',
      ],
    ],
    molecules: [
      ['acide-ursodesoxycholique', 'premiere', 'Prurit, acides biliaires'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'TP bas'],
      ['chlorphenamine', 'adjuvant', 'Prurit nocturne'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire'],
    ],
    complications: [
      {
        nom: 'Mort fœtale in utero',
        fiche: 'mort-foetale-in-utero',
        description: 'Acides biliaires élevés.',
        traitement: '- Accouchement anticipé',
        clinique: '- Arrêt des mouvements',
        paraclinique: '',
      },
      {
        nom: 'Prématurité',
        fiche: 'prematurite',
        description: 'Spontanée ou induite.',
        traitement: '- Corticoïdes',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hémorragie du post-partum',
        fiche: 'hemorragie-post-partum',
        description: 'Carence en vitamine K.',
        traitement: '- Vitamine K, utérotoniques',
        clinique: '- Saignement',
        paraclinique: '- TP',
      },
    ],
    evolution:
      '## Pronostic\n- Maternel excellent (guérison après l’accouchement) ; risque fœtal lié au taux d’acides biliaires',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'EASL — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Prurit palmo-plantaire de la grossesse : référence', ''],
      hgr: ['- Acides biliaires, transaminases, acide ursodésoxycholique', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Cholestase gravidique modérée',
        type: 'commune',
        description: 'Acides biliaires < 40.',
        terrain: '- 3e trimestre',
        fonctionnels: '- Prurit nocturne palmo-plantaire',
        generaux: '',
        physiques: '- Lésions de grattage',
        paraclinique: '- Acides biliaires 10–39 µmol/L',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Cholestase gravidique sévère',
        type: 'gravite',
        description: 'Risque fœtal élevé.',
        terrain: '',
        fonctionnels: '- Prurit intense',
        generaux: '',
        physiques: '- Ictère',
        paraclinique: '- Acides biliaires ≥ 100 µmol/L',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
