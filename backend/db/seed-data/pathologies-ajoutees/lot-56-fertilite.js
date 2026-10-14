'use strict';

/**
 * Lot 56 (phase 2, fertilité et reproduction) — infertilité tubaire, insuffisance ovarienne
 * prématurée, infertilité masculine, assistance médicale à la procréation. Rédigé par IA (OMS,
 * Normes et directives SR) : à valider.
 */

const FERT = { departement: 'gynecologie-obstetrique', specialite: 'Fertilité et reproduction' };

module.exports = [
  // =================================================================== Infertilité tubaire
  {
    ...FERT,
    slug: 'infertilite-tubaire',
    nom: 'Infertilité tubaire',
    resume:
      'Cause principale d’infertilité féminine en Afrique subsaharienne (infertilité secondaire surtout) : obstruction ou lésion des trompes après infections génitales hautes (chlamydia, gonocoque), complications d’avortements et d’accouchements, tuberculose génitale, chirurgie pelvienne ; souvent silencieuse ; hystérosalpingographie (obstruction, hydrosalpinx), cœlioscopie avec épreuve au bleu ; chirurgie tubaire dans les lésions distales modérées, fécondation in vitro dans les obstructions bilatérales sévères (salpingectomie préalable des hydrosalpinx) ; prévention : IST, soins après avortement, accouchements propres.',
    definition:
      'Infertilité liée à une altération de la perméabilité ou de la fonction des trompes utérines empêchant la rencontre des gamètes ou le transport de l’embryon.',
    physiopathologie:
      '## Causes\n- **Infections génitales hautes** : Chlamydia trachomatis, gonocoque (souvent asymptomatiques)\n- **Infections du post-abortum et du post-partum** (avortements clandestins, accouchements non assistés)\n- **Tuberculose génitale**, schistosomiase\n- Endométriose, chirurgie pelvienne (adhérences), GEU antérieure, stérilisation tubaire\n\n## Conséquences\n- Infertilité, **grossesse extra-utérine**, douleurs pelviennes chroniques',
    diagnostic:
      '## Contexte\n- Infertilité (souvent **secondaire**), antécédents d’IST, de douleurs pelviennes, d’avortement compliqué, de GEU, de tuberculose\n\n## Examens\n- **Hystérosalpingographie** (en 1re partie de cycle, hors infection) : obstruction proximale ou distale, hydrosalpinx, synéchies\n- **Échographie pelvienne** (hydrosalpinx)\n- Cœlioscopie avec épreuve au bleu (référence)\n- Bilan du couple (spermogramme, ovulation) ; dépistage des IST et de la tuberculose génitale selon le contexte',
    examens: [
      ['confirmation', 'hysterosalpingographie', 'Perméabilité tubaire.'],
      ['premiere_intention', 'echographie-pelvienne', 'Hydrosalpinx.'],
      ['premiere_intention', 'spermogramme', 'Bilan du couple.'],
      ['etiologique', 'prelevement-vaginal', 'IST.'],
      ['etiologique', 'tdr-vih', 'Dépistage.'],
    ],
    scores: [],
    differentiels: [
      ['infertilite-du-couple', 'Démarche globale du couple.'],
      ['syndrome-des-ovaires-polykystiques', 'Anovulation.'],
      ['infertilite-masculine', 'Facteur masculin.'],
      ['synechies-uterines', 'Cause utérine.'],
    ],
    etiologies:
      '## Causes\n- IST, infections post-abortum et post-partum, tuberculose génitale, endométriose, chirurgie',
    principes: [
      [
        'Chirurgie tubaire',
        'Formes sélectionnées.',
        '- Femme jeune, lésions distales modérées : **néosalpingostomie**, adhésiolyse par cœlioscopie (centre spécialisé)\n- Obstruction proximale : cathétérisme tubaire sélectif\n- Risque de GEU ensuite : échographie précoce en cas de grossesse',
      ],
      [
        'Fécondation in vitro',
        'Obstruction sévère.',
        '- **FIV** pour les obstructions bilatérales ou l’échec de la chirurgie ; **salpingectomie** préalable des hydrosalpinx',
      ],
      [
        'Prévention',
        'Agir en amont.',
        '- Dépistage et traitement des **IST** (traitement des partenaires), préservatifs, **soins après avortement** de qualité, accouchement propre, traitement précoce des infections du post-partum',
      ],
    ],
    molecules: [
      ['doxycycline', 'alternative', 'Infection active (avant HSG si suspicion)'],
      ['azithromycine', 'alternative', 'Chlamydiose'],
    ],
    complications: [
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Trompe lésée.',
        traitement: '- Chirurgie, méthotrexate',
        clinique: '- Douleur, saignement',
        paraclinique: '- β-hCG',
      },
      {
        nom: 'Retentissement psychosocial',
        description: 'Stigmatisation de l’infertilité.',
        traitement: '- Soutien psychologique',
        clinique: '- Détresse, conflits conjugaux',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Faibles chances de grossesse spontanée en cas d’obstruction bilatérale ; la FIV permet de contourner l’obstacle',
    urgences: [],
    symptomes: [
      ['Infertilité', 'tres_frequent'],
      ['Douleur pelvienne', 'occasionnel'],
    ],
    sources: ['Normes et directives de santé de la reproduction', 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Prévention des IST, orientation du couple', ''],
      hgr: ['- HSG, échographie', ''],
      tert: ['- Cœlioscopie, FIV', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Obstruction tubaire distale',
        type: 'commune',
        description: 'Hydrosalpinx.',
        terrain: '- Antécédent d’IST',
        fonctionnels: '- Infertilité secondaire',
        generaux: '',
        physiques: '',
        paraclinique: '- HSG : hydrosalpinx',
        etiologies: '- Chlamydia, gonocoque',
        syndromes: [],
      },
      {
        nom: 'Obstruction tubaire bilatérale',
        type: 'gravite',
        description: 'FIV.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Pas de passage péritonéal',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== IOP
  {
    ...FERT,
    slug: 'insuffisance-ovarienne-prematuree',
    nom: 'Insuffisance ovarienne prématurée',
    resume:
      'Arrêt de la fonction ovarienne avant 40 ans (≈ 1 %) : aménorrhée ou spanioménorrhée, signes de carence en œstrogènes (bouffées de chaleur, sécheresse vaginale), infertilité ; FSH élevée (> 25 UI/L à deux reprises), œstradiol bas, AMH effondrée ; causes : idiopathique, génétique (Turner, prémutation FMR1), auto-immune, iatrogène (chimiothérapie, radiothérapie, chirurgie), infections ; traitement hormonal substitutif jusqu’à l’âge de la ménopause (os, cœur), don d’ovocytes pour la grossesse, soutien psychologique.',
    definition:
      'Perte de l’activité ovarienne avant l’âge de 40 ans, définie par une aménorrhée (ou oligoménorrhée) d’au moins 4 mois et une FSH élevée (> 25 UI/L) sur deux dosages à 4 semaines d’intervalle.',
    physiopathologie:
      '## Causes\n- **Idiopathique** (majorité)\n- **Génétiques** : syndrome de Turner (mosaïque), prémutation FMR1 (X fragile), autres\n- **Auto-immunes** : thyroïdite, insuffisance surrénalienne, diabète de type 1\n- **Iatrogènes** : chimiothérapie, radiothérapie pelvienne, chirurgie ovarienne\n- Infections (oreillons, tuberculose), VIH\n\n## Conséquences\n- Infertilité, **ostéoporose**, risque **cardiovasculaire**, troubles de l’humeur, sécheresse vaginale',
    diagnostic:
      '## Clinique\n- Aménorrhée secondaire ou cycles irréguliers avant 40 ans\n- **Bouffées de chaleur**, sueurs, sécheresse vaginale, dyspareunie, troubles du sommeil\n- Infertilité\n\n## Examens\n- **β-hCG** (éliminer une grossesse)\n- **FSH** élevée (> 25 UI/L) à deux reprises, œstradiol bas, **AMH** basse\n- **Caryotype**, TSH et anticorps antithyroïdiens, cortisol si signes surrénaliens, glycémie\n- **Densitométrie osseuse**',
    examens: [
      ['etiologique', 'beta-hcg', 'Grossesse.'],
      ['confirmation', 'gonadotrophines-lh-fsh', 'FSH élevée.'],
      ['premiere_intention', 'hormone-antimullerienne', 'Réserve ovarienne.'],
      ['etiologique', 'caryotype', 'Turner.'],
      ['etiologique', 'tsh', 'Thyroïdite.'],
      ['etiologique', 'cortisolemie', 'Insuffisance surrénalienne.'],
      ['gravite', 'densitometrie-osseuse', 'Ostéoporose.'],
    ],
    scores: [],
    differentiels: [
      ['amenorrhees-troubles-du-cycle', 'Autres causes d’aménorrhée (prolactine, SOPK).'],
      ['menopause', 'Ménopause après 40 ans.'],
      ['syndrome-de-turner', 'Petite taille, aménorrhée primaire.'],
      ['hyperthyroidie-basedow', 'Bouffées de chaleur, tachycardie.'],
    ],
    etiologies: '## Causes\n- Idiopathique, génétique, auto-immune, chimiothérapie, radiothérapie, chirurgie',
    principes: [
      [
        'Traitement hormonal substitutif',
        'Jusqu’à 50 ans.',
        '- **Œstradiol** (oral ou transdermique) + **progestatif** (dydrogestérone, médroxyprogestérone) si utérus présent, ou pilule œstroprogestative\n- Protection osseuse et cardiovasculaire, amélioration des symptômes',
      ],
      [
        'Fertilité',
        'Information honnête.',
        '- Grossesse spontanée possible mais rare (5 %) ; **don d’ovocytes** (pays où cela est accessible)\n- Préservation de la fertilité avant chimiothérapie si possible',
      ],
      [
        'Mesures associées',
        'Accompagner.',
        '- **Calcium**, **vitamine D**, activité physique ; soutien psychologique ; dépistage des maladies auto-immunes associées',
      ],
    ],
    molecules: [
      ['estradiol', 'premiere', 'Traitement hormonal substitutif'],
      ['dydrogesterone', 'premiere', 'Progestatif associé'],
      ['medroxyprogesterone', 'alternative', 'Progestatif associé'],
      ['ethinylestradiol', 'alternative', 'Pilule œstroprogestative'],
      ['calcium', 'adjuvant', 'Protection osseuse'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Protection osseuse'],
    ],
    complications: [
      {
        nom: 'Ostéoporose',
        fiche: 'osteoporose',
        description: 'Carence en œstrogènes.',
        traitement: '- Traitement hormonal, calcium',
        clinique: '- Fractures',
        paraclinique: '- Densitométrie',
      },
      {
        nom: 'Infertilité',
        fiche: 'infertilite-du-couple',
        description: 'Épuisement folliculaire.',
        traitement: '- Don d’ovocytes',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Retentissement psychologique',
        fiche: 'depression',
        description: 'Annonce, infertilité.',
        traitement: '- Soutien',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon sous traitement substitutif ; fertilité spontanée très réduite',
    urgences: [],
    symptomes: [
      ['Aménorrhée', 'tres_frequent'],
      ['Bouffées de chaleur', 'frequent'],
      ['Infertilité', 'frequent'],
      ['Dyspareunie', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      "Harrison's Principles of Internal Medicine",
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Aménorrhée avant 40 ans : orientation', ''],
      hgr: ['- FSH, traitement hormonal', ''],
      tert: ['- Endocrinologie, génétique, AMP', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'IOP idiopathique',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Femme < 40 ans',
        fonctionnels: '- Aménorrhée, bouffées de chaleur',
        generaux: '',
        physiques: '',
        paraclinique: '- FSH élevée, AMH basse',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'IOP iatrogène',
        type: 'etiologique',
        description: 'Après chimiothérapie.',
        terrain: '- Antécédent de cancer',
        fonctionnels: '- Aménorrhée',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '- Chimiothérapie, radiothérapie',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Infertilité masculine
  {
    ...FERT,
    slug: 'infertilite-masculine',
    nom: 'Infertilité masculine',
    resume:
      'En cause dans environ la moitié des infertilités du couple, souvent négligée (l’infertilité est socialement attribuée à la femme) : séquelles d’IST (urétrite, épididymite → obstruction), varicocèle, orchite ourlienne, cryptorchidie, tuberculose génitale, VIH, causes hormonales, toxiques (tabac, alcool, chaleur, médicaments) ; spermogramme (deux examens), examen des testicules, échographie scrotale, bilan hormonal ; traitement de la cause (infection, varicocèle), conseils d’hygiène de vie, insémination ou FIV-ICSI ; impliquer l’homme dès le début du bilan.',
    definition:
      'Incapacité d’un homme à obtenir une grossesse chez une partenaire fertile, liée à des anomalies de la production, de la qualité ou du transport des spermatozoïdes ou à des troubles sexuels.',
    physiopathologie:
      '## Causes\n- **Obstructives** : séquelles d’**IST** (gonocoque, chlamydia : épididymite), tuberculose génitale, schistosomiase\n- **Testiculaires** : **varicocèle**, **orchite ourlienne**, **cryptorchidie**, torsion, traumatisme, chimiothérapie, Klinefelter\n- **Hormonales** : hypogonadisme central, hyperprolactinémie, abus de stéroïdes anabolisants\n- **Générales** : VIH, drépanocytose, obésité, diabète, **tabac**, **alcool**, chaleur, pesticides\n- **Sexuelles** : troubles de l’érection, de l’éjaculation',
    diagnostic:
      '## Évaluation\n- Antécédents : IST, oreillons après la puberté, cryptorchidie, chirurgie, maladies chroniques, médicaments, toxiques, fonction sexuelle\n- Examen : volume et consistance des **testicules**, **épididymes**, **déférents** (absence), **varicocèle** (debout, Valsalva), caractères sexuels\n\n## Examens\n- **Spermogramme** (2 examens à 3 mois, après 2–7 jours d’abstinence) : volume, concentration, mobilité, morphologie\n- **Échographie scrotale** (varicocèle, testicules), spermoculture\n- **FSH, LH, testostérone**, prolactine si anomalie ; caryotype si azoospermie ; TDR VIH',
    examens: [
      ['confirmation', 'spermogramme', 'Deux examens.'],
      ['premiere_intention', 'echographie-doppler-scrotale', 'Varicocèle, testicules.'],
      ['deuxieme_intention', 'gonadotrophines-lh-fsh', 'FSH, LH, testostérone.'],
      ['etiologique', 'prolactinemie', 'Hyperprolactinémie.'],
      ['etiologique', 'caryotype', 'Azoospermie (Klinefelter).'],
      ['etiologique', 'tdr-vih', 'VIH.'],
    ],
    scores: [],
    differentiels: [
      ['infertilite-du-couple', 'Démarche globale du couple.'],
      ['infertilite-tubaire', 'Facteur féminin associé.'],
      ['Troubles sexuels', 'Dysfonction érectile, éjaculation.'],
    ],
    etiologies: '## Causes\n- IST, varicocèle, orchite ourlienne, cryptorchidie, VIH, toxiques, hormonales',
    principes: [
      [
        'Traitement de la cause',
        'Selon l’étiologie.',
        '- **Infection** (spermoculture positive, épididymite) : antibiotiques (doxycycline, ciprofloxacine) et traitement de la partenaire\n- **Varicocèle** avec anomalie du sperme : cure chirurgicale ou embolisation\n- Hypogonadisme central : gonadotrophines (centre spécialisé) ; hyperprolactinémie : cabergoline ou bromocriptine\n- **Pas de testostérone** chez l’homme qui souhaite un enfant (elle bloque la spermatogenèse)',
      ],
      [
        'Hygiène de vie',
        'Améliorer le sperme.',
        '- Arrêt du tabac et de l’alcool, perte de poids, éviter la chaleur et les toxiques, antioxydants discutés (vitamine E, zinc)',
      ],
      [
        'Assistance médicale',
        'Si nécessaire.',
        '- Insémination intra-utérine (anomalies modérées), **FIV-ICSI** (anomalies sévères, azoospermie avec prélèvement chirurgical)\n- Soutien psychologique du couple, lutte contre la stigmatisation',
      ],
    ],
    molecules: [
      ['doxycycline', 'alternative', 'Infection génitale'],
      ['ciprofloxacine', 'alternative', 'Infection génitale'],
      ['bromocriptine', 'alternative', 'Hyperprolactinémie'],
      ['tocopherol-vitamine-e', 'adjuvant', 'Antioxydant (discuté)'],
      ['zinc', 'adjuvant', 'Antioxydant (discuté)'],
    ],
    complications: [
      {
        nom: 'Stigmatisation et conflits conjugaux',
        description: 'Infertilité attribuée à la femme.',
        traitement: '- Information, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Hypogonadisme',
        description: 'Atteinte testiculaire.',
        traitement: '- Traitement hormonal (hors désir d’enfant)',
        clinique: '- Baisse de libido',
        paraclinique: '- Testostérone basse',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration possible après traitement de la cause ; l’ICSI permet une paternité dans la plupart des anomalies sévères',
    urgences: [],
    symptomes: [
      ['Infertilité', 'tres_frequent'],
      ['Douleur scrotale', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Impliquer l’homme, traiter les IST, orientation', ''],
      hgr: ['- Spermogramme, échographie scrotale', ''],
      tert: ['- Andrologie, AMP', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Oligo-asthéno-tératospermie',
        type: 'commune',
        description: 'Anomalies du sperme.',
        terrain: '- Homme du couple infertile',
        fonctionnels: '',
        generaux: '',
        physiques: '- Varicocèle possible',
        paraclinique: '- Spermogramme anormal',
        etiologies: '- Varicocèle, infection, toxiques',
        syndromes: [],
      },
      {
        nom: 'Azoospermie',
        type: 'gravite',
        description: 'Absence de spermatozoïdes.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Petits testicules ou déférents absents',
        paraclinique: '- FSH élevée ou normale',
        etiologies: '- Obstruction, Klinefelter, orchite',
        syndromes: [],
      },
    ],
  },

  // =================================================================== AMP
  {
    ...FERT,
    slug: 'assistance-medicale-procreation',
    nom: 'Assistance médicale à la procréation',
    resume:
      'Ensemble des techniques aidant un couple infertile à concevoir : induction simple de l’ovulation (létrozole, clomifène), insémination intra-utérine, fécondation in vitro (FIV) et micro-injection (ICSI), don de gamètes ; disponibles dans quelques centres privés en RDC, coûteuses ; indications selon le bilan du couple (anovulation, facteur tubaire, facteur masculin, endométriose, infertilité inexpliquée) ; risques : syndrome d’hyperstimulation ovarienne, grossesses multiples, grossesse extra-utérine ; dépistage préalable du VIH et des hépatites, information complète et soutien psychologique.',
    definition:
      'Pratiques cliniques et biologiques permettant la conception en dehors du processus naturel : stimulation ovarienne, insémination, fécondation in vitro, transfert d’embryons, don de gamètes.',
    physiopathologie:
      '## Techniques\n- **Induction de l’ovulation** : létrozole, clomifène, gonadotrophines (anovulation, SOPK)\n- **Insémination intra-utérine** : sperme préparé injecté dans l’utérus (facteur masculin modéré, infertilité inexpliquée, trompes perméables)\n- **FIV** : stimulation, ponction des ovocytes, fécondation au laboratoire, transfert d’embryon (facteur tubaire, endométriose)\n- **ICSI** : injection d’un spermatozoïde dans l’ovocyte (facteur masculin sévère)\n\n## Risques\n- **Syndrome d’hyperstimulation ovarienne** (ascite, épanchements, thromboses), **grossesses multiples**, GEU, complications de la ponction',
    diagnostic:
      '## Bilan préalable du couple\n- Femme : ovulation (cycle, progestérone), **réserve ovarienne** (AMH, FSH), **HSG** (trompes), échographie (utérus, ovaires)\n- Homme : **spermogramme**\n- Sérologies : **VIH**, hépatites B et C, syphilis ; rubéole\n\n## Surveillance pendant la stimulation\n- Échographie (nombre et taille des follicules), œstradiol\n- Signes d’hyperstimulation : ballonnement, douleurs, prise de poids, dyspnée, oligurie',
    examens: [
      ['premiere_intention', 'hormone-antimullerienne', 'Réserve ovarienne.'],
      ['premiere_intention', 'hysterosalpingographie', 'Trompes.'],
      ['premiere_intention', 'spermogramme', 'Facteur masculin.'],
      ['premiere_intention', 'echographie-pelvienne', 'Suivi folliculaire.'],
      ['premiere_intention', 'tdr-vih', 'Dépistage.'],
      ['premiere_intention', 'serologies-hepatites', 'Dépistage.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Indications\n- Anovulation résistante, facteur tubaire, facteur masculin, endométriose, infertilité inexpliquée',
    principes: [
      [
        'Choix de la technique',
        'Selon le bilan.',
        '- **Anovulation (SOPK)** : **létrozole** (2,5–7,5 mg/j de J3 à J7) ou **clomifène** avec surveillance échographique\n- Trompes perméables et facteur masculin modéré : **insémination**\n- Trompes obstruées, endométriose sévère, échecs : **FIV** ; facteur masculin sévère : **ICSI**\n- Soutien lutéal (**progestérone**) après FIV',
      ],
      [
        'Sécurité',
        'Prévenir les complications.',
        '- Stimulation prudente, transfert d’un seul embryon (grossesses multiples)\n- **Hyperstimulation** : repos, hydratation, surveillance, thromboprophylaxie (énoxaparine), drainage de l’ascite si sévère\n- Échographie précoce de toute grossesse (GEU)',
      ],
      [
        'Accompagnement',
        'Couple.',
        '- Information complète (taux de succès, coûts, risques), soutien psychologique, respect du cadre éthique et légal',
      ],
    ],
    molecules: [
      ['letrozole', 'premiere', 'Induction de l’ovulation'],
      ['clomifene', 'alternative', 'Induction de l’ovulation'],
      ['progesterone', 'premiere', 'Soutien lutéal'],
      ['enoxaparine', 'adjuvant', 'Hyperstimulation ovarienne'],
    ],
    complications: [
      {
        nom: 'Syndrome d’hyperstimulation ovarienne',
        description: 'Réponse excessive.',
        traitement: '- Hydratation, surveillance, drainage',
        clinique: '- Ballonnement, dyspnée, oligurie',
        paraclinique: '- Échographie, hématocrite',
      },
      {
        nom: 'Grossesse multiple',
        fiche: 'grossesse-gemellaire',
        description: 'Plusieurs embryons ou ovulations.',
        traitement: '- Suivi renforcé',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Grossesse extra-utérine',
        fiche: 'grossesse-extra-uterine',
        description: 'Trompes lésées.',
        traitement: '- Chirurgie',
        clinique: '- Douleur, saignement',
        paraclinique: '- β-hCG',
      },
    ],
    evolution:
      '## Résultats\n- Taux de naissance par tentative de FIV ≈ 25–35 % avant 35 ans, diminuant nettement avec l’âge',
    urgences: [],
    symptomes: [['Infertilité', 'tres_frequent']],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Information, orientation du couple', ''],
      hgr: ['- Bilan, induction simple de l’ovulation', ''],
      tert: ['- Insémination, FIV, ICSI', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Induction simple de l’ovulation',
        type: 'commune',
        description: 'SOPK.',
        terrain: '- Anovulation',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Suivi échographique',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fécondation in vitro',
        type: 'etiologique',
        description: 'Facteur tubaire ou masculin.',
        terrain: '- Couple infertile',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
