'use strict';

/**
 * Lot 54 (phase 2, médecine materno-fœtale) — échographie obstétricale et dépistage des
 * malformations, infections fœtales, anasarque fœto-placentaire, diagnostic prénatal, surveillance
 * du bien-être fœtal. Rédigé par IA (OMS, ISUOG, Normes et directives SR) : à valider.
 */

const MFM = { departement: 'gynecologie-obstetrique', specialite: 'Médecine materno-fœtale' };

module.exports = [
  // =================================================================== Échographie obstétricale
  {
    ...MFM,
    slug: 'echographie-obstetricale-depistage-malformations',
    nom: 'Échographie obstétricale et dépistage des malformations',
    resume:
      'L’OMS recommande au moins une échographie avant 24 semaines (idéalement au 1er trimestre) : datation précise, nombre de fœtus et chorionicité, vitalité, localisation placentaire, dépistage des malformations majeures (anencéphalie, spina bifida, hydrocéphalie, cardiopathies, laparoschisis, omphalocèle, uropathies, fentes) lors de l’échographie morphologique de 18–22 semaines ; 3e trimestre : croissance, liquide, présentation, placenta ; une anomalie découverte impose un conseil, un avis spécialisé et l’organisation de la naissance dans une structure adaptée.',
    definition:
      'Examen échographique de la grossesse permettant la datation, la surveillance de la croissance et le dépistage des anomalies morphologiques fœtales et placentaires.',
    physiopathologie:
      '## Échographies clés\n- **1er trimestre (11–14 semaines)** : datation (longueur cranio-caudale), grossesse multiple et chorionicité, clarté nucale (dépistage chromosomique), anencéphalie\n- **Morphologique (18–22 semaines)** : crâne, cerveau, face, rachis, cœur (4 cavités, gros vaisseaux), abdomen, reins, vessie, membres, placenta, liquide\n- **3e trimestre (30–34 semaines)** : croissance, présentation, placenta (prævia, accreta), liquide amniotique\n\n## Intérêt en RDC\n- Repérage des grossesses à risque (gémellaires, placenta prævia, présentation anormale) pour orienter l’accouchement',
    diagnostic:
      '## Malformations majeures repérables\n- **Système nerveux** : anencéphalie, spina bifida (signe du citron, de la banane), hydrocéphalie, microcéphalie\n- **Cœur** : cardiopathies (vue des 4 cavités)\n- **Paroi** : laparoschisis, omphalocèle\n- **Reins** : agénésie (anamnios), hydronéphrose, valves\n- **Face** : fentes labiales ; membres : pieds bots, réductions\n- **Signes d’appel** : hydramnios, oligoamnios, RCIU, anasarque\n\n## Limites\n- Opérateur et appareil dépendants ; certaines anomalies ne sont visibles que tardivement',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Datation, morphologie, croissance.'],
      ['deuxieme_intention', 'amniocentese', 'Caryotype si anomalie.'],
      ['deuxieme_intention', 'serologies-torch', 'Signes d’infection fœtale.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Malformations\n- Génétiques, carence en acide folique, diabète, infections, médicaments tératogènes, inconnues',
    principes: [
      [
        'Organisation',
        'Au moins une échographie avant 24 semaines.',
        '- Échographie précoce (datation), morphologique à 18–22 semaines si possible, échographie du 3e trimestre selon les risques\n- Opérateurs formés, comptes rendus structurés',
      ],
      [
        'Anomalie découverte',
        'Accompagner.',
        '- Information claire et bienveillante, **avis spécialisé** (centre de référence), bilan (caryotype, infections)\n- Planification de la naissance dans une structure adaptée (chirurgie néonatale : laparoschisis, atrésie de l’œsophage, spina bifida)\n- Soutien psychologique, options selon la loi et la gravité',
      ],
      [
        'Prévention',
        'Réduire les malformations.',
        '- **Acide folique** périconceptionnel, contrôle du diabète, vaccination rubéole, éviter les tératogènes',
      ],
    ],
    molecules: [['acide-folique', 'premiere', 'Prévention des défauts du tube neural']],
    complications: [
      {
        nom: 'Malformations non dépistées',
        fiche: 'malformations-congenitales-majeures',
        description: 'Absence d’échographie.',
        traitement: '- Prise en charge néonatale',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Erreur de terme',
        fiche: 'grossesse-prolongee',
        description: 'Datation tardive.',
        traitement: '- Échographie précoce',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Le dépistage permet d’organiser la naissance et d’améliorer la survie des malformations opérables',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Orientation pour échographie avant 24 semaines', ''],
      hgr: ['- Échographie de datation et de croissance', ''],
      tert: ['- Échographie morphologique de référence, diagnostic prénatal', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Échographie normale',
        type: 'commune',
        description: 'Dépistage.',
        terrain: '- Toute femme enceinte',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Malformation fœtale majeure',
        type: 'gravite',
        description: 'Orientation spécialisée.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Anomalie morphologique',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Infections fœtales
  {
    ...MFM,
    slug: 'infections-foetales',
    nom: 'Infections fœtales',
    resume:
      'Infections transmises au fœtus pendant la grossesse : syphilis (la plus fréquente et évitable en RDC), VIH, paludisme placentaire et congénital, toxoplasmose, rubéole, CMV, parvovirus B19 (anémie fœtale, anasarque), varicelle, Zika, hépatite B (transmission surtout à l’accouchement) ; signes échographiques (RCIU, calcifications, ventriculomégalie, microcéphalie, hépatosplénomégalie, anasarque, hydramnios, placenta épais) ; dépistage maternel (syphilis, VIH, AgHBs), diagnostic par amniocentèse (PCR), traitement maternel selon l’agent, organisation de la naissance et prise en charge néonatale.',
    definition:
      'Infection du fœtus par un agent transmis par voie transplacentaire (ou ascendante), responsable de mort fœtale, de malformations, de retard de croissance ou d’infection congénitale.',
    physiopathologie:
      '## Agents principaux\n- **Syphilis** : mort fœtale, prématurité, syphilis congénitale (évitable par la pénicilline)\n- **VIH** : transmission évitable par les ARV\n- **Paludisme** : anémie maternelle, RCIU, prématurité, paludisme congénital\n- **Toxoplasmose**, **rubéole**, **CMV** : malformations cérébrales et sensorielles\n- **Parvovirus B19** : anémie fœtale, anasarque\n- Varicelle (1er–2e trimestre), Zika (microcéphalie), listériose\n\n## Gravité\n- Dépend de l’agent et du terme : malformations au 1er trimestre, infection évolutive plus tard',
    diagnostic:
      '## Dépistage maternel\n- **Syphilis**, **VIH**, **AgHBs** systématiques ; toxoplasmose et rubéole selon les ressources\n- Fièvre, éruption ou contage pendant la grossesse\n\n## Signes échographiques\n- RCIU, **calcifications** intracrâniennes ou hépatiques, **ventriculomégalie**, microcéphalie, hépatosplénomégalie, intestin hyperéchogène, **anasarque**, hydramnios, placentomégalie\n\n## Confirmation\n- Sérologies maternelles, **amniocentèse** (PCR toxoplasmose, CMV, parvovirus) en centre spécialisé ; Doppler cérébral (anémie fœtale)',
    examens: [
      ['premiere_intention', 'serologie-syphilis', 'Syphilis.'],
      ['premiere_intention', 'tdr-vih', 'VIH.'],
      ['premiere_intention', 'aghbs', 'Hépatite B.'],
      ['premiere_intention', 'serologies-torch', 'Toxoplasmose, rubéole, CMV.'],
      ['confirmation', 'echographie-obstetricale', 'Signes fœtaux.'],
      ['confirmation', 'amniocentese', 'PCR fœtale.'],
      ['etiologique', 'tdr-paludisme', 'Paludisme.'],
    ],
    scores: [],
    differentiels: [
      ['infections-torch-grossesse', 'Infections maternelles TORCH.'],
      ['syphilis-et-grossesse', 'Syphilis maternelle.'],
      ['retard-croissance-intra-uterin', 'RCIU d’origine non infectieuse.'],
      ['anasarque-foeto-placentaire', 'Autres causes d’anasarque.'],
    ],
    etiologies:
      '## Agents\n- Syphilis, VIH, paludisme, toxoplasmose, rubéole, CMV, parvovirus B19, varicelle, Zika, hépatite B',
    principes: [
      [
        'Traitement maternel',
        'Selon l’agent.',
        '- **Syphilis** : benzathine benzylpénicilline 2,4 MUI IM (1 à 3 doses selon le stade), traitement du partenaire\n- **VIH** : ARV ; **hépatite B** : ténofovir et vaccin du nouveau-né\n- **Paludisme** : TPI, traitement des accès\n- **Toxoplasmose** : spiramycine ; infection fœtale prouvée : pyriméthamine-sulfadiazine + acide folinique\n- **Parvovirus** avec anémie fœtale : transfusion in utero (centre spécialisé)',
      ],
      [
        'Naissance et nouveau-né',
        'Organiser.',
        '- Accouchement en structure avec néonatologie, examen du nouveau-né, prélèvements, traitement (syphilis congénitale, CMV : valganciclovir), suivi auditif et neurologique',
      ],
      [
        'Prévention',
        'Avant tout.',
        '- Dépistage précoce aux CPN, vaccination rubéole avant la grossesse, mesures d’hygiène, moustiquaire, préservatif',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Syphilis'],
      ['spiramycine', 'alternative', 'Toxoplasmose gravidique'],
      ['pyrimethamine', 'alternative', 'Toxoplasmose fœtale'],
      ['sulfadiazine', 'alternative', 'Toxoplasmose fœtale'],
      ['tenofovir-disoproxil', 'alternative', 'VIH, hépatite B'],
      ['sulfadoxine', 'premiere', 'TPI (sulfadoxine-pyriméthamine)'],
    ],
    complications: [
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Syphilis, parvovirus, paludisme.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syphilis congénitale',
        fiche: 'syphilis-congenitale',
        description: 'Mère non traitée.',
        traitement: '- Pénicilline',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Séquelles neurosensorielles',
        fiche: 'cmv-congenital',
        description: 'CMV, toxoplasmose, rubéole.',
        traitement: '- Suivi, rééducation',
        clinique: '- Surdité, retard',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Syphilis, VIH, hépatite B et paludisme : transmission largement évitable par le dépistage et le traitement',
    urgences: [],
    symptomes: [
      ['Fièvre', 'occasionnel'],
      ['Éruption cutanée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'WHO guidelines for malaria',
    ],
    niveaux: {
      cs: ['- Dépistage syphilis, VIH, AgHBs ; traitement de la syphilis', ''],
      hgr: ['- Échographie, traitement maternel', ''],
      tert: ['- Amniocentèse, transfusion in utero', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Infection fœtale évitable (syphilis, VIH)',
        type: 'commune',
        description: 'Dépistage.',
        terrain: '- Femme non dépistée',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Sérologie positive',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Infection fœtale avec signes échographiques',
        type: 'gravite',
        description: 'Atteinte fœtale.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Calcifications, ventriculomégalie, anasarque',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Anasarque
  {
    ...MFM,
    slug: 'anasarque-foeto-placentaire',
    nom: 'Anasarque fœto-placentaire',
    resume:
      'Accumulation anormale de liquide dans au moins deux compartiments fœtaux (ascite, épanchement pleural ou péricardique, œdème cutané) : immune (allo-immunisation rhésus) ou, plus souvent, non immune (anémie fœtale par parvovirus B19 ou alpha-thalassémie, infections, cardiopathies et troubles du rythme, anomalies chromosomiques, syndrome transfuseur-transfusé, tumeurs) ; diagnostic échographique, Doppler cérébral (anémie), groupage et RAI, sérologies, Kleihauer ; prise en charge en centre spécialisé (transfusion in utero si anémie), risque de pré-éclampsie maternelle (syndrome miroir) ; pronostic souvent réservé.',
    definition:
      'Présence d’épanchements dans au moins deux cavités séreuses fœtales et/ou d’un œdème sous-cutané généralisé, souvent associée à un hydramnios et à un placenta épais.',
    physiopathologie:
      '## Anasarque immune\n- **Allo-immunisation** (anti-D surtout) → hémolyse → anémie fœtale sévère → insuffisance cardiaque\n\n## Anasarque non immune (≈ 90 %)\n- **Anémie** : parvovirus B19, **alpha-thalassémie** homozygote, hémorragie fœto-maternelle\n- **Cardiaques** : malformations, **troubles du rythme** (tachycardie supraventriculaire)\n- **Infections** : syphilis, CMV, toxoplasmose\n- **Chromosomiques** : Turner, trisomies ; syndrome transfuseur-transfusé, tumeurs, malformations thoraciques\n\n## Syndrome miroir\n- La mère développe œdèmes et pré-éclampsie',
    diagnostic:
      '## Échographie\n- Ascite, épanchements pleuraux et péricardique, œdème cutané (> 5 mm), placenta épais, **hydramnios**\n- **Doppler de l’artère cérébrale moyenne** : vitesse augmentée = anémie fœtale\n- Rythme cardiaque fœtal, morphologie, cœur\n\n## Bilan maternel\n- **Groupage-RAI**, test de Kleihauer, NFS et électrophorèse de l’hémoglobine (thalassémie), **sérologies** (parvovirus, syphilis, CMV, toxoplasmose)\n- Tension et protéinurie (syndrome miroir)\n- Amniocentèse (caryotype, PCR) en centre spécialisé',
    examens: [
      ['confirmation', 'echographie-obstetricale', 'Épanchements, Doppler cérébral.'],
      ['premiere_intention', 'groupage-rai', 'Allo-immunisation.'],
      ['etiologique', 'serologies-torch', 'Infections.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'electrophorese-hb', 'Thalassémie.'],
      ['deuxieme_intention', 'amniocentese', 'Caryotype, PCR.'],
      ['gravite', 'bandelette-urinaire', 'Syndrome miroir (protéinurie).'],
    ],
    scores: [],
    differentiels: [
      ['allo-immunisation-rhesus', 'Anasarque immune.'],
      ['oligoamnios-et-hydramnios', 'Hydramnios isolé.'],
      ['infections-foetales', 'Cause infectieuse.'],
    ],
    etiologies:
      '## Causes\n- Allo-immunisation, parvovirus, alpha-thalassémie, cardiopathies, troubles du rythme, infections, chromosomiques',
    principes: [
      [
        'Orientation',
        'Centre spécialisé.',
        '- Référence vers un centre de médecine fœtale pour le bilan étiologique et le traitement',
      ],
      [
        'Traitement selon la cause',
        'Lorsque c’est possible.',
        '- **Anémie fœtale** (allo-immunisation, parvovirus) : **transfusion in utero**\n- **Tachycardie supraventriculaire** fœtale : antiarythmiques par voie maternelle (digoxine, flécaïnide, centre spécialisé)\n- **Syphilis** : pénicilline ; épanchement pleural massif : drainage in utero\n- **Corticoïdes** si naissance prévue avant 34 semaines',
      ],
      [
        'Naissance et mère',
        'Organiser.',
        '- Accouchement en centre avec réanimation néonatale (ponctions à la naissance)\n- Surveillance du **syndrome miroir** (pré-éclampsie) ; accompagnement des parents (pronostic souvent réservé)',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'alternative', 'Syphilis'],
      ['digoxine', 'alternative', 'Tachycardie fœtale (centre spécialisé)'],
      ['dexamethasone', 'adjuvant', 'Maturation pulmonaire'],
    ],
    complications: [
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Insuffisance cardiaque fœtale.',
        traitement: '- Traitement de la cause',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Syndrome miroir (pré-éclampsie)',
        fiche: 'pre-eclampsie-severe',
        description: 'Atteinte maternelle.',
        traitement: '- Accouchement, sulfate de magnésium',
        clinique: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie',
      },
      {
        nom: 'Détresse respiratoire néonatale',
        fiche: 'reanimation-nouveau-ne-salle-de-naissance',
        description: 'Épanchements, hypoplasie.',
        traitement: '- Réanimation, ponctions',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité périnatale élevée dans les formes non immunes ; bon pronostic des anémies traitées par transfusion in utero',
    urgences: [],
    symptomes: [
      ['Œdèmes', 'occasionnel'],
      ['Diminution des mouvements fœtaux', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Utérus trop gros, référence', ''],
      hgr: ['- Échographie, bilan, référence', ''],
      tert: ['- Médecine fœtale, transfusion in utero', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Anasarque non immune',
        type: 'commune',
        description: 'Majorité.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Utérus trop gros',
        paraclinique: '- Épanchements fœtaux, RAI négative',
        etiologies: '- Parvovirus, cardiopathie, chromosomique',
        syndromes: [],
      },
      {
        nom: 'Anasarque immune',
        type: 'etiologique',
        description: 'Allo-immunisation.',
        terrain: '- Femme rhésus négatif immunisée',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- RAI positive, Doppler cérébral élevé',
        etiologies: '- Anti-D',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Diagnostic prénatal
  {
    ...MFM,
    slug: 'diagnostic-prenatal',
    nom: 'Diagnostic prénatal',
    resume:
      'Ensemble des examens permettant de détecter pendant la grossesse une affection grave de l’embryon ou du fœtus : dépistage (échographie, clarté nucale, marqueurs sériques maternels, ADN fœtal libre — peu disponibles en RDC) puis diagnostic (amniocentèse, biopsie de trophoblaste : caryotype, PCR des infections, diagnostic des hémoglobinopathies dont la drépanocytose) ; indications : âge maternel, signes échographiques, antécédent d’enfant atteint, parents porteurs (drépanocytose AS × AS) ; conseil génétique avant et après, consentement éclairé, respect des choix du couple et du cadre légal.',
    definition:
      'Pratiques médicales ayant pour but de détecter in utero chez l’embryon ou le fœtus une affection d’une particulière gravité, et d’organiser la prise en charge.',
    physiopathologie:
      '## Méthodes\n- **Dépistage** : échographie (clarté nucale, morphologie), marqueurs sériques, ADN fœtal libre circulant\n- **Diagnostic invasif** : **biopsie de trophoblaste** (11–14 semaines), **amniocentèse** (≥ 15–16 semaines) : caryotype, analyses moléculaires (drépanocytose, thalassémies), PCR infectieuses ; risque de fausse couche ≈ 0,5–1 %\n\n## Indications en RDC\n- **Drépanocytose** : couple AS × AS (25 % de risque d’enfant SS)\n- Âge maternel avancé, antécédent d’enfant atteint, malformation échographique, infection maternelle',
    diagnostic:
      '## Repérage des couples à risque\n- **Électrophorèse de l’hémoglobine** des deux parents (drépanocytose, thalassémie)\n- Antécédents familiaux, consanguinité, enfant atteint\n- Échographie de qualité\n\n## Accompagnement\n- **Conseil génétique** : information sur le risque, les examens, leurs limites et leurs risques\n- Consentement éclairé ; annonce du résultat par une équipe formée',
    examens: [
      ['premiere_intention', 'electrophorese-hb', 'Parents porteurs.'],
      ['premiere_intention', 'echographie-obstetricale', 'Dépistage morphologique.'],
      ['confirmation', 'amniocentese', 'Caryotype, analyses moléculaires.'],
      ['confirmation', 'caryotype', 'Anomalies chromosomiques.'],
    ],
    scores: [],
    differentiels: [],
    etiologies:
      '## Affections recherchées\n- Anomalies chromosomiques, hémoglobinopathies, malformations, infections fœtales',
    principes: [
      [
        'Conseil génétique',
        'Informer.',
        '- Avant la grossesse si possible : dépistage des porteurs (électrophorèse), information des couples\n- Explication des risques, des examens, de leurs limites ; décision libre et éclairée',
      ],
      [
        'Réalisation',
        'Centre spécialisé.',
        '- Amniocentèse ou biopsie de trophoblaste sous échographie, **immunoglobulines anti-D** si rhésus négatif\n- Analyses dans un laboratoire de référence',
      ],
      [
        'Après le résultat',
        'Accompagner.',
        '- Annonce, soutien psychologique, options selon la gravité et la loi, organisation de la naissance et de la prise en charge (drépanocytose : dépistage néonatal et suivi précoce)',
      ],
    ],
    molecules: [
      ['immunoglobulines-anti-d', 'adjuvant', 'Après geste invasif (rhésus négatif)'],
      ['acide-folique', 'adjuvant', 'Prévention'],
    ],
    complications: [
      {
        nom: 'Fausse couche après geste invasif',
        fiche: 'avortement-spontane',
        description: 'Amniocentèse, biopsie.',
        traitement: '- Information',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Allo-immunisation',
        fiche: 'allo-immunisation-rhesus',
        description: 'Geste invasif.',
        traitement: '- Anti-D',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Intérêt\n- Information des couples, préparation de la naissance, prise en charge précoce de l’enfant',
    urgences: [],
    symptomes: [],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: ['- Repérer les couples à risque (drépanocytose), orienter', ''],
      hgr: ['- Électrophorèse, échographie', ''],
      tert: ['- Amniocentèse, conseil génétique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Couple à risque de drépanocytose',
        type: 'commune',
        description: 'AS × AS.',
        terrain: '- Parents porteurs',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Électrophorèse des parents',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Anomalie échographique',
        type: 'gravite',
        description: 'Diagnostic invasif.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Malformation, clarté nucale épaisse',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Surveillance du bien-être fœtal
  {
    ...MFM,
    slug: 'surveillance-bien-etre-foetal',
    nom: 'Surveillance du bien-être fœtal',
    resume:
      'Évaluation de l’état du fœtus pendant la grossesse et le travail : perception des mouvements fœtaux (toute diminution après 28 semaines impose une évaluation le jour même), mesure de la hauteur utérine, auscultation intermittente (stéthoscope de Pinard ou Doppler portable) toutes les 15–30 min pendant le travail et toutes les 5 min pendant l’expulsion, cardiotocographie, quantité de liquide amniotique, Doppler ombilical, profil biophysique ; un rythme anormal (< 110 ou > 160/min, décélérations tardives) impose des mesures correctrices et l’accélération de la naissance.',
    definition:
      'Ensemble des méthodes cliniques et paracliniques permettant d’évaluer l’oxygénation et la vitalité du fœtus avant et pendant le travail.',
    physiopathologie:
      '## Principes\n- Un fœtus bien oxygéné bouge, a un rythme cardiaque normal (110–160/min) avec une variabilité et des accélérations\n- Hypoxie chronique (insuffisance placentaire) : diminution des mouvements, oligoamnios, RCIU, Doppler ombilical anormal\n- Hypoxie aiguë (travail) : décélérations tardives ou variables sévères, bradycardie, perte de variabilité\n\n## Situations à risque\n- Pré-éclampsie, diabète, RCIU, grossesse prolongée, drépanocytose, anémie, paludisme, liquide méconial, travail prolongé, ocytocine',
    diagnostic:
      '## Pendant la grossesse\n- **Mouvements fœtaux** : diminution = consultation le jour même\n- **Hauteur utérine**, auscultation à chaque CPN\n- Échographie : croissance, **liquide amniotique**, **Doppler ombilical**, profil biophysique\n- **Cardiotocographie** (rythme de base, variabilité, accélérations, décélérations)\n\n## Pendant le travail\n- **Auscultation intermittente** : toutes les 15–30 min pendant la phase active, toutes les 5 min pendant l’expulsion, sur 1 minute après une contraction\n- Couleur du liquide (méconial), **partogramme**\n- Anormal : < 110 ou > 160/min, décélérations tardives → souffrance fœtale',
    examens: [
      ['premiere_intention', 'cardiotocographie', 'Rythme cardiaque fœtal.'],
      ['premiere_intention', 'echographie-obstetricale', 'Liquide, Doppler, croissance.'],
    ],
    scores: [],
    differentiels: [
      ['souffrance-foetale-aigue', 'Anomalies du rythme pendant le travail.'],
      ['mort-foetale-in-utero', 'Absence d’activité cardiaque.'],
      ['retard-croissance-intra-uterin', 'Hypoxie chronique.'],
    ],
    etiologies:
      '## Indications renforcées\n- Pré-éclampsie, diabète, RCIU, grossesse prolongée, drépanocytose, diminution des mouvements, liquide méconial',
    principes: [
      [
        'Diminution des mouvements fœtaux',
        'Évaluer le jour même.',
        '- Auscultation, cardiotocographie, échographie (liquide, croissance), recherche d’une cause maternelle (HTA, fièvre, paludisme)\n- Anomalie : extraction selon le terme',
      ],
      [
        'Rythme anormal pendant le travail',
        'Mesures correctrices.',
        '- **Décubitus latéral gauche**, **arrêt de l’ocytocine**, perfusion, oxygène si hypoxie maternelle, correction de l’hypotension, traitement de la fièvre\n- Persistance : **accélérer la naissance** (extraction instrumentale si dilatation complète, sinon césarienne)\n- Préparer la réanimation néonatale',
      ],
      [
        'Organisation',
        'Équiper les maternités.',
        '- Doppler portable ou stéthoscope de Pinard, partogramme, formation à l’interprétation',
      ],
    ],
    molecules: [
      ['oxygene', 'adjuvant', 'Hypoxie maternelle'],
      ['ringer-lactate', 'adjuvant', 'Hypotension maternelle'],
      ['salbutamol', 'adjuvant', 'Hypercinésie utérine'],
    ],
    complications: [
      {
        nom: 'Asphyxie périnatale',
        fiche: 'asphyxie-perinatale',
        description: 'Hypoxie non reconnue.',
        traitement: '- Réanimation néonatale',
        clinique: '- Apgar bas',
        paraclinique: '',
      },
      {
        nom: 'Mort fœtale',
        fiche: 'mort-foetale-in-utero',
        description: 'Hypoxie prolongée.',
        traitement: '- Prévention par la surveillance',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Intérêt\n- Réduction des morts fœtales et des asphyxies par une surveillance régulière et une réaction rapide',
    urgences: [],
    symptomes: [['Diminution des mouvements fœtaux', 'tres_frequent']],
    sources: ['OMS — lignes directrices et publications', 'Normes et directives de santé de la reproduction'],
    niveaux: {
      cs: [
        '- Mouvements fœtaux, auscultation intermittente, partogramme, référence',
        '- Diminution des mouvements, rythme anormal',
      ],
      hgr: ['- Cardiotocographie, échographie, césarienne', ''],
      tert: ['- Doppler, profil biophysique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Surveillance prénatale',
        type: 'commune',
        description: 'Grossesse.',
        terrain: '- Toute femme enceinte',
        fonctionnels: '- Mouvements fœtaux',
        generaux: '',
        physiques: '- Hauteur utérine',
        paraclinique: '- CTG, échographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rythme cardiaque fœtal anormal',
        type: 'gravite',
        description: 'Souffrance fœtale.',
        terrain: '- Travail',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- < 110 ou > 160/min, décélérations tardives',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
