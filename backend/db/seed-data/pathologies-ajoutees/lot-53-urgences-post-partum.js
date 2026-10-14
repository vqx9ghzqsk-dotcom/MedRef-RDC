'use strict';

/**
 * Lot 53 (phase 2, urgences obstétricales et post-partum) — inversion utérine, embolie amniotique,
 * coagulopathie obstétricale, thrombose veineuse du post-partum, infection de la plaie de
 * césarienne. Rédigé par IA (OMS, Normes et directives SR, Guide clinique et thérapeutique) : à
 * valider.
 */

const URGOBS = { departement: 'gynecologie-obstetrique', specialite: 'Urgences obstétricales' };
const PP = { departement: 'gynecologie-obstetrique', specialite: 'Post-partum' };

module.exports = [
  // =================================================================== Inversion utérine
  {
    ...URGOBS,
    slug: 'inversion-uterine',
    nom: 'Inversion utérine',
    resume:
      'Complication rare et brutale de la délivrance : le fond utérin se retourne à travers le col, souvent après une traction excessive sur le cordon ou une expression abdominale sur un utérus relâché ; douleur intense, choc (souvent disproportionné à l’hémorragie, d’origine vagale), hémorragie, masse rouge à la vulve, fond utérin non palpable ; réduction manuelle immédiate (avant la formation d’un anneau de contraction), sans retirer le placenta s’il est encore adhérent, réanimation, utérotoniques après la réduction ; sinon réduction hydrostatique ou chirurgicale.',
    definition:
      'Retournement du fond utérin en doigt de gant dans la cavité utérine, le vagin ou à l’extérieur de la vulve, survenant habituellement lors de la délivrance.',
    physiopathologie:
      '## Facteurs\n- **Traction excessive sur le cordon** avant le décollement placentaire, **expression utérine**, placenta fundique ou accreta, cordon court, atonie utérine, accouchement rapide, primiparité\n\n## Conséquences\n- **Choc** neurogénique (traction des ligaments) et **hémorragique**\n- Formation d’un anneau de contraction du col qui rend la réduction plus difficile avec le temps',
    diagnostic:
      '## Clinique\n- Juste après l’accouchement : **douleur abdominale intense**, **choc**, **hémorragie**\n- **Masse rouge**, arrondie, à la vulve ou dans le vagin (avec ou sans placenta attaché)\n- **Fond utérin non palpable** ou cupule à la palpation abdominale\n- Inversion incomplète : masse dans le vagin au toucher',
    examens: [
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'nfs', 'Hémorragie.'],
      ['gravite', 'hemostase', 'Coagulopathie.'],
    ],
    scores: [],
    differentiels: [
      ['Fibrome accouché par le col', 'Masse ferme, fond utérin palpable.'],
      ['retention-placentaire', 'Placenta non délivré, fond utérin présent.'],
      ['Prolapsus utérin', 'Col visible à l’extrémité de la masse.'],
    ],
    etiologies:
      '## Facteurs\n- Traction excessive sur le cordon, expression utérine, placenta fundique ou adhérent',
    principes: [
      [
        'Réduction immédiate',
        'Le plus tôt possible.',
        '- **Appeler à l’aide**, arrêter l’ocytocine, 2 voies veineuses, remplissage, sang\n- **Réduction manuelle** immédiate : repousser le fond utérin (la partie sortie en dernier rentre en premier) à travers le col, main dans le vagin\n- **Ne pas retirer le placenta** avant la réduction s’il est adhérent (hémorragie)\n- Relâchement utérin si nécessaire : **salbutamol** ou **terbutaline**, sulfate de magnésium, anesthésie générale (halothane, kétamine)',
      ],
      [
        'Après la réduction',
        'Maintenir.',
        '- **Ocytocine** en perfusion, main maintenue dans l’utérus jusqu’à contraction, délivrance artificielle\n- **Antibiotiques** (ampicilline + métronidazole), surveillance de l’hémorragie\n- Échec : **réduction hydrostatique** (sérum chaud dans le vagin) ou **laparotomie** (Huntington, Haultain)',
      ],
    ],
    molecules: [
      ['ocytocine', 'premiere', 'Après la réduction'],
      ['salbutamol', 'alternative', 'Relâchement utérin'],
      ['terbutaline', 'alternative', 'Relâchement utérin'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['ketamine', 'alternative', 'Anesthésie pour la réduction'],
      ['ampicilline', 'adjuvant', 'Prévention de l’infection'],
      ['metronidazole', 'adjuvant', 'Prévention de l’infection'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Hémorragie, vagal.',
        traitement: '- Réduction, réanimation',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Récidive',
        description: 'Utérus atone.',
        traitement: '- Ocytocine, maintien manuel',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Endométrite',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Manœuvres.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si réduction immédiate ; mortalité élevée si le diagnostic et la réduction sont retardés',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Saignement vaginal', 'tres_frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Réduction manuelle immédiate, remplissage, référence', '- Tout cas'],
      hgr: ['- Réduction sous anesthésie, laparotomie', ''],
      tert: ['', ''],
    },
    alertes: { 'hemorragie-du-post-partum-urgence': 'Choc et masse vulvaire après la délivrance' },
    formes: [
      {
        nom: 'Inversion aiguë complète',
        type: 'commune',
        description: 'Masse vulvaire.',
        terrain: '- Délivrance',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Masse rouge à la vulve, fond non palpable',
        paraclinique: '',
        etiologies: '- Traction sur le cordon',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Inversion incomplète',
        type: 'gravite',
        description: 'Diagnostic difficile.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Hémorragie',
        physiques: '- Cupule du fond utérin',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Embolie amniotique
  {
    ...URGOBS,
    slug: 'embolie-amniotique',
    nom: 'Embolie amniotique',
    resume:
      'Urgence obstétricale rare et souvent mortelle : réaction anaphylactoïde au passage de liquide amniotique dans la circulation maternelle, pendant le travail, la césarienne ou juste après l’accouchement : détresse respiratoire brutale, cyanose, collapsus, arrêt cardiaque, convulsions, puis coagulopathie (CIVD) avec hémorragie massive ; diagnostic clinique d’élimination ; réanimation immédiate (oxygène, intubation, remplissage, vasopresseurs, massage cardiaque avec déviation utérine, extraction fœtale en moins de 5 min si arrêt), correction précoce de la coagulopathie (plasma, cryoprécipité, plaquettes, acide tranexamique), traitement de l’hémorragie.',
    definition:
      'Syndrome brutal associant détresse cardiorespiratoire, choc et coagulopathie, survenant pendant le travail ou dans les 30 minutes suivant l’accouchement, attribué au passage de liquide amniotique dans la circulation maternelle.',
    physiopathologie:
      '## Mécanismes\n- Passage de liquide amniotique et de cellules fœtales → **réaction anaphylactoïde** et activation du complément\n- **Hypertension pulmonaire** aiguë et **défaillance cardiaque droite** → hypoxie, collapsus\n- **Coagulopathie de consommation** (CIVD) → hémorragie massive\n\n## Facteurs\n- Travail rapide ou déclenché, césarienne, âge > 35 ans, placenta prævia ou accreta, HRP, rupture utérine, éclampsie, extraction instrumentale',
    diagnostic:
      '## Clinique (brutal)\n- **Dyspnée** brutale, **cyanose**, **désaturation**\n- **Hypotension**, collapsus, **arrêt cardiaque**\n- Agitation, confusion, **convulsions**\n- **Saignements** diffus (CIVD), hémorragie du post-partum\n- Souffrance fœtale aiguë si avant la naissance\n\n## Examens (ne pas retarder la réanimation)\n- **Hémostase** (TP, TCA, **fibrinogène**), NFS, plaquettes, test de coagulation au lit, gaz du sang, groupage\n- ECG, échocardiographie (dilatation du ventricule droit)\n- Diagnostic d’élimination : embolie pulmonaire, choc anaphylactique, choc septique, éclampsie, infarctus, toxicité des anesthésiques locaux',
    examens: [
      ['gravite', 'hemostase', 'CIVD.'],
      ['gravite', 'fibrinogene', 'Coagulopathie.'],
      ['gravite', 'test-de-coagulation-au-lit', 'Coagulopathie au lit.'],
      ['gravite', 'nfs', 'Plaquettes, hémorragie.'],
      ['gravite', 'gaz-du-sang', 'Hypoxie.'],
      ['gravite', 'groupage-rai', 'Transfusion massive.'],
      ['deuxieme_intention', 'echocardiographie', 'Défaillance droite.'],
    ],
    scores: [],
    differentiels: [
      ['embolie-pulmonaire', 'Dyspnée sans coagulopathie initiale.'],
      ['choc-anaphylactique', 'Exposition à un médicament, urticaire.'],
      ['sepsis-et-choc-septique', 'Fièvre, installation moins brutale.'],
      ['eclampsie', 'Convulsions avec HTA.'],
      ['hemorragie-post-partum', 'Hémorragie sans détresse respiratoire initiale.'],
    ],
    etiologies:
      '## Facteurs\n- Travail déclenché ou rapide, césarienne, anomalies placentaires, âge maternel',
    principes: [
      [
        'Réanimation immédiate',
        'ABC.',
        '- Appeler à l’aide, **oxygène**, intubation et ventilation, 2 voies veineuses\n- **Remplissage** prudent, **vasopresseurs** (noradrénaline, adrénaline)\n- **Arrêt cardiaque** : RCP avec **déviation utérine manuelle à gauche** ; **extraction fœtale (césarienne péri-mortem) dans les 4–5 minutes** si fœtus ≥ 20 semaines',
      ],
      [
        'Coagulopathie et hémorragie',
        'Corriger tôt.',
        '- **Acide tranexamique** 1 g IV, **plasma frais congelé**, **cryoprécipité** (fibrinogène > 2 g/L), **plaquettes**, transfusion massive de culots\n- Utérotoniques (ocytocine), chirurgie d’hémostase, hystérectomie si nécessaire',
      ],
      [
        'Soins intensifs',
        'Défaillances.',
        '- Ventilation, soutien hémodynamique, surveillance rénale et neurologique',
      ],
    ],
    molecules: [
      ['oxygene', 'premiere', 'Hypoxie'],
      ['adrenaline-epinephrine', 'premiere', 'Arrêt cardiaque, choc'],
      ['noradrenaline', 'premiere', 'Choc'],
      ['acide-tranexamique', 'premiere', 'Coagulopathie'],
      ['ocytocine', 'premiere', 'Atonie utérine'],
      ['ringer-lactate', 'alternative', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Arrêt cardiaque',
        description: 'Défaillance droite, hypoxie.',
        traitement: '- RCP, césarienne péri-mortem',
        clinique: '- Absence de pouls',
        paraclinique: '',
      },
      {
        nom: 'CIVD et hémorragie massive',
        fiche: 'coagulopathie-obstetricale',
        description: 'Consommation.',
        traitement: '- Produits sanguins, acide tranexamique',
        clinique: '- Saignements diffus',
        paraclinique: '- Fibrinogène bas',
      },
      {
        nom: 'Séquelles neurologiques',
        description: 'Hypoxie.',
        traitement: '- Réanimation',
        clinique: '- Coma',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité maternelle de 20 à 60 % ; séquelles neurologiques fréquentes chez les survivantes',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Dyspnée', 'tres_frequent'],
      ['Cyanose', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Hémorragies', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'Surviving Sepsis Campaign: International Guidelines for Management of Sepsis and Septic Shock 2021',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Oxygène, réanimation de base, référence (souvent trop tard)', ''],
      hgr: ['- Réanimation, transfusion, césarienne péri-mortem', ''],
      tert: ['- Soins intensifs', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence':
        'Collapsus brutal avec hémorragie diffuse pendant ou après l’accouchement',
    },
    formes: [
      {
        nom: 'Forme cardiorespiratoire',
        type: 'commune',
        description: 'Collapsus brutal.',
        terrain: '- Travail, césarienne',
        fonctionnels: '- Dyspnée brutale',
        generaux: '- Collapsus',
        physiques: '- Cyanose, convulsions',
        paraclinique: '- Désaturation',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-de-detresse-respiratoire'],
      },
      {
        nom: 'Forme hémorragique',
        type: 'gravite',
        description: 'CIVD au premier plan.',
        terrain: '- Post-partum immédiat',
        fonctionnels: '',
        generaux: '',
        physiques: '- Saignements diffus',
        paraclinique: '- Fibrinogène effondré',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
    ],
  },

  // =================================================================== Coagulopathie obstétricale
  {
    ...URGOBS,
    slug: 'coagulopathie-obstetricale',
    nom: 'Coagulopathie obstétricale',
    resume:
      'Troubles de la coagulation acquis en obstétrique (CIVD, coagulopathie de dilution et de consommation) : causes principales l’hémorragie du post-partum massive, l’hématome rétroplacentaire, la mort fœtale prolongée, l’embolie amniotique, le sepsis, le HELLP et la stéatose hépatique aiguë ; saignements diffus, sang incoagulable (test de coagulation au lit > 7 min), fibrinogène bas ; traiter la cause (évacuer l’utérus), acide tranexamique précoce, transfusion de culots, plasma, cryoprécipité et plaquettes selon un rapport équilibré, prévenir l’hypothermie et l’acidose.',
    definition:
      'Altération acquise de l’hémostase au cours de la grossesse ou du post-partum, par consommation (CIVD), dilution ou fibrinolyse, responsable de saignements diffus.',
    physiopathologie:
      '## Causes\n- **Hémorragie du post-partum** massive (consommation et dilution par les solutés)\n- **Hématome rétroplacentaire** (libération de thromboplastine)\n- **Mort fœtale** prolongée (> 4 semaines), **embolie amniotique**, **sepsis**, avortement septique\n- **Pré-éclampsie/HELLP**, **stéatose hépatique aiguë**, transfusion incompatible\n\n## Mécanismes\n- Activation diffuse de la coagulation → consommation des facteurs et des plaquettes, **chute du fibrinogène** (marqueur précoce), fibrinolyse\n- **Triade létale** : hypothermie, acidose, coagulopathie',
    diagnostic:
      '## Clinique\n- **Saignements diffus** : utérus, plaie de césarienne, points de ponction, gencives, hématurie, pétéchies\n- Sang qui ne coagule pas dans le bassin ou les compresses\n\n## Examens\n- **Test de coagulation au lit** (tube sec : caillot absent à 7–10 min)\n- **Fibrinogène** (< 2 g/L : risque majeur), TP, TCA, **plaquettes**, D-dimères\n- NFS, groupage, ionogramme, gaz du sang (acidose), température',
    examens: [
      ['confirmation', 'test-de-coagulation-au-lit', 'Sang incoagulable.'],
      ['confirmation', 'fibrinogene', '< 2 g/L.'],
      ['premiere_intention', 'hemostase', 'TP, TCA.'],
      ['premiere_intention', 'nfs', 'Plaquettes, Hb.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'gaz-du-sang', 'Acidose.'],
      ['deuxieme_intention', 'd-dimeres', 'CIVD.'],
    ],
    scores: [],
    differentiels: [
      ['purpura-thrombopenique-immunologique', 'Thrombopénie isolée préexistante.'],
      ['hemophilie', 'Coagulopathie héréditaire (conductrice).'],
      ['Maladie de Willebrand', 'Saignements muqueux antérieurs.'],
    ],
    etiologies:
      '## Causes\n- Hémorragie massive, HRP, mort fœtale, embolie amniotique, sepsis, HELLP, stéatose aiguë',
    principes: [
      [
        'Traiter la cause',
        'Priorité.',
        '- **Évacuation de l’utérus** (accouchement, délivrance, révision), hémostase chirurgicale, antibiotiques si sepsis\n- Utérotoniques pour l’atonie',
      ],
      [
        'Corriger la coagulation',
        'Précoce et équilibrée.',
        '- **Acide tranexamique** 1 g IV dans les 3 h (répéter après 30 min si saignement)\n- **Culots globulaires**, **plasma frais congelé** (15–20 mL/kg), **cryoprécipité** si fibrinogène < 2 g/L, **plaquettes** si < 50 000 avec saignement\n- Sang total frais si les composants sont indisponibles\n- Limiter les cristalloïdes, **réchauffer** (solutés, couvertures), corriger l’acidose et la **calcémie** (gluconate de calcium)',
      ],
      [
        'Surveillance',
        'Soins intensifs.',
        '- Test de coagulation au lit répété, diurèse, température ; prévention de la thrombose une fois le saignement contrôlé',
      ],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Fibrinolyse'],
      ['gluconate-de-calcium', 'adjuvant', 'Hypocalcémie de la transfusion massive'],
      ['ocytocine', 'premiere', 'Atonie utérine'],
      ['vitamine-k1-phytomenadione', 'adjuvant', 'Insuffisance hépatique'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-obstetrical',
        description: 'Saignement non contrôlé.',
        traitement: '- Transfusion massive, chirurgie',
        clinique: '- Choc',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Choc, microthromboses.',
        traitement: '- Réanimation, dialyse',
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
    evolution:
      '## Pronostic\n- Bon si la cause est contrôlée et la coagulation corrigée tôt ; cause majeure de décès par hémorragie',
    urgences: ['hemorragie-du-post-partum-urgence'],
    symptomes: [
      ['Hémorragies', 'tres_frequent'],
      ['Saignement vaginal', 'tres_frequent'],
      ['Purpura', 'occasionnel'],
      ['Hématurie', 'occasionnel'],
    ],
    sources: [
      'Normes et directives de santé de la reproduction',
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Test de coagulation au lit, acide tranexamique, remplissage, référence', ''],
      hgr: ['- Transfusion, plasma, chirurgie', ''],
      tert: ['- Cryoprécipité, plaquettes, soins intensifs', ''],
    },
    alertes: {
      'hemorragie-du-post-partum-urgence': 'Saignement diffus et sang incoagulable après l’accouchement',
    },
    formes: [
      {
        nom: 'Coagulopathie de l’hémorragie du post-partum',
        type: 'commune',
        description: 'Consommation et dilution.',
        terrain: '- HPP massive',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Saignement diffus',
        paraclinique: '- Fibrinogène bas',
        etiologies: '',
        syndromes: ['syndrome-hemorragique'],
      },
      {
        nom: 'CIVD aiguë',
        type: 'gravite',
        description: 'HRP, embolie amniotique, sepsis.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pétéchies, saignements aux points de ponction',
        paraclinique: '- Plaquettes et fibrinogène effondrés',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Thrombose veineuse du post-partum
  {
    ...PP,
    slug: 'thrombose-veineuse-post-partum',
    nom: 'Thrombose veineuse du post-partum',
    resume:
      'Le post-partum (surtout les 6 premières semaines et après césarienne) est la période de risque thrombotique maximal : thrombose veineuse profonde des membres inférieurs, thrombose des veines pelviennes et ovariennes (fièvre résistante aux antibiotiques après accouchement ou césarienne), thrombose veineuse cérébrale (céphalées, convulsions, déficit) ; échographie Doppler, scanner injecté ; héparine (énoxaparine) puis relais par warfarine compatible avec l’allaitement, au moins 3 mois ; prévention : lever précoce, hydratation, thromboprophylaxie après césarienne chez les femmes à risque.',
    definition:
      'Thrombose veineuse survenant pendant les 6 à 12 semaines suivant l’accouchement : membres inférieurs, veines pelviennes et ovariennes, sinus veineux cérébraux.',
    physiopathologie:
      '## Facteurs\n- Hypercoagulabilité persistante, lésions vasculaires de l’accouchement, **immobilisation**\n- **Césarienne** (surtout en urgence), **hémorragie** et transfusion, **infection** (endométrite), pré-éclampsie, drépanocytose, obésité, âge, déshydratation\n\n## Formes\n- **TVP** des membres inférieurs (gauche surtout), embolie pulmonaire\n- **Thrombophlébite pelvienne septique** et thrombose de la veine ovarienne (droite surtout)\n- **Thrombose veineuse cérébrale** (1re semaine à 1 mois)',
    diagnostic:
      '## Clinique\n- TVP : douleur et **œdème unilatéral** du mollet ou de la cuisse\n- Thrombose pelvienne : **fièvre persistante** malgré les antibiotiques après accouchement, douleur de la fosse iliaque\n- Thrombose cérébrale : **céphalées** intenses et progressives, **convulsions**, déficit, troubles de conscience (à distinguer de l’éclampsie du post-partum)\n- Embolie pulmonaire : dyspnée brutale, douleur thoracique\n\n## Examens\n- **Échographie Doppler veineux** ; **scanner** abdomino-pelvien injecté (veines ovariennes) ; **scanner ou IRM cérébrale** avec phase veineuse\n- NFS, plaquettes, créatinine, hémostase avant anticoagulation',
    examens: [
      ['confirmation', 'echo-doppler-veineux', 'TVP.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Thrombose pelvienne ou ovarienne.'],
      ['gravite', 'scanner-cerebral', 'Thrombose veineuse cérébrale.'],
      ['gravite', 'irm-cerebrale', 'Thrombose veineuse cérébrale.'],
      ['premiere_intention', 'nfs', 'Plaquettes.'],
      ['premiere_intention', 'hemostase', 'Avant anticoagulation.'],
      ['gravite', 'angioscanner-thoracique', 'Embolie pulmonaire.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-thromboembolique-et-grossesse', 'Fiche pendant la grossesse.'],
      ['sepsis-maternel-endometrite', 'Fièvre du post-partum.'],
      ['eclampsie', 'Convulsions du post-partum avec HTA.'],
      ['erysipele-et-cellulite', 'Rougeur, fièvre.'],
    ],
    etiologies: '## Facteurs\n- Césarienne, hémorragie, infection, immobilisation, drépanocytose, obésité',
    principes: [
      [
        'Traitement',
        'Anticoagulation.',
        '- **Énoxaparine** 1 mg/kg toutes les 12 h, relais par **warfarine** (INR 2–3) possible, **compatible avec l’allaitement**\n- Durée : au moins **3 mois** (6 mois pour la thrombose cérébrale)\n- Thrombophlébite pelvienne septique : héparine + antibiotiques (ampicilline, gentamicine, métronidazole)\n- Thrombose cérébrale : héparine même en cas d’hémorragie associée (avis spécialisé), anticonvulsivants',
      ],
      [
        'Prévention',
        'Thromboprophylaxie.',
        '- **Lever précoce**, hydratation, mobilisation\n- **Énoxaparine** 40 mg/j après **césarienne** avec facteurs de risque (7–10 jours, 6 semaines si risque élevé)\n- Contraception sans œstrogènes pendant les 6 premières semaines',
      ],
    ],
    molecules: [
      ['enoxaparine', 'premiere', 'Traitement et prophylaxie'],
      ['warfarine', 'alternative', 'Relais (compatible avec l’allaitement)'],
      ['heparine-non-fractionnee', 'alternative', 'Insuffisance rénale'],
      ['ampicilline', 'adjuvant', 'Thrombophlébite pelvienne septique'],
      ['metronidazole', 'adjuvant', 'Thrombophlébite pelvienne septique'],
    ],
    complications: [
      {
        nom: 'Embolie pulmonaire',
        fiche: 'embolie-pulmonaire',
        description: 'Migration.',
        traitement: '- Anticoagulation, thrombolyse',
        clinique: '- Dyspnée brutale',
        paraclinique: '- Angioscanner',
      },
      {
        nom: 'Hypertension intracrânienne et déficits',
        fiche: 'hypertension-intracranienne',
        description: 'Thrombose cérébrale.',
        traitement: '- Anticoagulation',
        clinique: '- Céphalées, convulsions',
        paraclinique: '- Imagerie',
      },
      {
        nom: 'Syndrome post-thrombotique',
        description: 'Séquelle veineuse.',
        traitement: '- Contention',
        clinique: '- Œdème chronique',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon sous anticoagulation ; l’embolie pulmonaire du post-partum reste une cause évitable de décès maternel',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Céphalées', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'ESC — recommandations de pratique clinique',
      'Normes et directives de santé de la reproduction',
    ],
    niveaux: {
      cs: ['- Lever précoce, repérer œdème unilatéral, fièvre persistante, céphalées : référence', ''],
      hgr: ['- Doppler, héparine, prophylaxie après césarienne', ''],
      tert: ['- Imagerie cérébrale, embolie grave', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'TVP du post-partum',
        type: 'commune',
        description: 'Membre inférieur.',
        terrain: '- Post-césarienne',
        fonctionnels: '- Douleur du mollet',
        generaux: '',
        physiques: '- Œdème unilatéral',
        paraclinique: '- Doppler positif',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Thrombophlébite pelvienne septique',
        type: 'etiologique',
        description: 'Fièvre résistante.',
        terrain: '- Endométrite, césarienne',
        fonctionnels: '- Douleur pelvienne',
        generaux: '- Fièvre persistante',
        physiques: '',
        paraclinique: '- Thrombose ovarienne au scanner',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Thrombose veineuse cérébrale',
        type: 'gravite',
        description: 'Céphalées, convulsions.',
        terrain: '- Premier mois',
        fonctionnels: '- Céphalées intenses',
        generaux: '',
        physiques: '- Convulsions, déficit',
        paraclinique: '- Imagerie veineuse',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Infection plaie de césarienne
  {
    ...PP,
    slug: 'infection-plaie-cesarienne',
    nom: 'Infection de la plaie de césarienne',
    resume:
      'Complication fréquente de la césarienne en RDC (5–20 %) : rougeur, chaleur, douleur, induration, écoulement purulent de la cicatrice, fièvre, entre le 4e et le 10e jour ; formes graves (abcès profond, fasciite nécrosante, éviscération, endométrite associée, péritonite) ; prévention : antibioprophylaxie (céfazoline 2 g IV avant l’incision), asepsie, technique opératoire, correction de l’anémie, contrôle du diabète ; traitement : ouverture et drainage, soins locaux, antibiotiques si cellulite ou signes généraux (cloxacilline ± métronidazole, adaptés au prélèvement).',
    definition:
      'Infection du site opératoire après césarienne, superficielle (peau et tissu sous-cutané), profonde (aponévrose, muscles) ou d’organe (utérus, cavité péritonéale) dans les 30 jours suivant l’intervention.',
    physiopathologie:
      '## Germes\n- **Staphylococcus aureus**, streptocoques, entérobactéries, anaérobies (flore vaginale)\n\n## Facteurs de risque\n- **Césarienne en urgence**, travail prolongé, **rupture prolongée des membranes**, **chorioamniotite**, touchers multiples\n- Absence ou retard d’**antibioprophylaxie**, asepsie insuffisante, durée opératoire longue, hématome\n- **Anémie**, **obésité**, **diabète**, malnutrition, VIH',
    diagnostic:
      '## Clinique\n- **Rougeur**, chaleur, **douleur**, **induration** de la cicatrice, **écoulement** purulent ou désunion\n- **Fièvre**, frissons\n- Gravité : nécrose cutanée, crépitation, douleur disproportionnée (fasciite), **éviscération**, défense abdominale, lochies fétides (endométrite), sepsis\n\n## Examens\n- **Prélèvement de pus** (Gram, culture, antibiogramme)\n- NFS, CRP, hémocultures si fièvre élevée\n- **Échographie** abdomino-pelvienne (collection profonde, abcès, rétention utérine)',
    examens: [
      ['confirmation', 'prelevement-de-pus', 'Germe, antibiogramme.'],
      ['premiere_intention', 'nfs', 'Hyperleucocytose, anémie.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['gravite', 'hemocultures', 'Sepsis.'],
      ['premiere_intention', 'echographie-abdominale', 'Collection profonde.'],
      ['etiologique', 'glycemie', 'Diabète.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-maternel-endometrite', 'Lochies fétides, utérus douloureux.'],
      ['infection-du-site-operatoire', 'Fiche générale.'],
      ['Hématome de paroi', 'Tuméfaction sans fièvre.'],
      ['fasciite-necrosante', 'Douleur intense, nécrose, crépitation.'],
      ['thrombose-veineuse-post-partum', 'Fièvre persistante du post-partum.'],
    ],
    etiologies: '## Germes\n- Staphylococcus aureus, streptocoques, entérobactéries, anaérobies',
    principes: [
      [
        'Prévention',
        'Avant tout.',
        '- **Céfazoline** 2 g IV (3 g si > 120 kg) **avant l’incision** (± azithromycine en cas de césarienne en travail selon les protocoles)\n- Préparation cutanée à la **chlorhexidine alcoolique**, asepsie, pas de rasage au rasoir, technique soigneuse\n- Correction de l’anémie, contrôle du diabète',
      ],
      [
        'Infection superficielle',
        'Drainer.',
        '- **Ouverture** de la cicatrice, évacuation du pus, lavage, pansements quotidiens\n- Antibiotiques si cellulite ou signes généraux : **cloxacilline** (ou amoxicilline-acide clavulanique) ± **métronidazole**, adaptés à l’antibiogramme\n- Fermeture secondaire lorsque la plaie est propre',
      ],
      [
        'Formes profondes',
        'Chirurgie.',
        '- Abcès profond : drainage ; **fasciite nécrosante** : débridement urgent large et antibiotiques IV ; **éviscération** : reprise chirurgicale\n- Endométrite ou péritonite : ampicilline + gentamicine + métronidazole IV, reprise si nécessaire',
      ],
    ],
    molecules: [
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['cloxacilline', 'premiere', 'Infection à staphylocoque'],
      ['acide-clavulanique', 'alternative', 'Avec l’amoxicilline'],
      ['amoxicilline', 'alternative', 'Avec l’acide clavulanique'],
      ['metronidazole', 'alternative', 'Anaérobies'],
      ['gentamicine', 'adjuvant', 'Formes profondes'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Fasciite nécrosante',
        fiche: 'fasciite-necrosante',
        description: 'Infection profonde extensive.',
        traitement: '- Débridement, antibiotiques IV',
        clinique: '- Douleur intense, nécrose',
        paraclinique: '',
      },
      {
        nom: 'Éviscération',
        description: 'Désunion aponévrotique.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Anses visibles',
        paraclinique: '',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-maternel-endometrite',
        description: 'Extension.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Choc',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 2 à 4 semaines pour les formes superficielles ; mortalité élevée des formes nécrosantes non opérées',
    urgences: ['choc-septique'],
    symptomes: [
      ['Écoulement purulent d’une plaie', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Douleur abdominale', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Normes et directives de santé de la reproduction',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Soins de plaie, ouverture des petites collections, référence',
        '- Fièvre élevée, nécrose, éviscération',
      ],
      hgr: ['- Drainage, antibiotiques, reprise chirurgicale', ''],
      tert: ['', ''],
    },
    alertes: { 'choc-septique': 'Accouchée par césarienne avec plaie infectée et hypotension' },
    formes: [
      {
        nom: 'Infection superficielle',
        type: 'commune',
        description: 'Peau et sous-cutané.',
        terrain: '- J4–J10 après césarienne',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre modérée',
        physiques: '- Rougeur, pus',
        paraclinique: '- S. aureus',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Infection profonde ou nécrosante',
        type: 'gravite',
        description: 'Urgence chirurgicale.',
        terrain: '',
        fonctionnels: '- Douleur intense',
        generaux: '- Sepsis',
        physiques: '- Nécrose, crépitation',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },
];
