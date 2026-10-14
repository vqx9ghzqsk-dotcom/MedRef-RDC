'use strict';

/**
 * Lot 33 (phase 2, gastro-entérologie et hépatologie) — hémorragie digestive basse,
 * encéphalopathie hépatique, hépatite C chronique, pancréatite aiguë, reflux
 * gastro-œsophagien, dyspepsie et gastrite, cancer de l'estomac, cancer colorectal.
 * Rédigé par IA (OMS, EASL, ACG, ESGE, ESMO, MSF) : à valider.
 */

const GASTRO = { departement: 'medecine-interne', specialite: 'Gastro-entérologie et hépatologie' };

module.exports = [
  // =================================================================== Hémorragie digestive basse
  {
    ...GASTRO,
    slug: 'hemorragie-digestive-basse',
    nom: 'Hémorragie digestive basse',
    resume:
      'Saignement d’origine colique ou ano-rectale (rectorragies, sang rouge ou marron) : évaluer le retentissement, éliminer une hémorragie haute abondante (sonde gastrique, endoscopie), réanimer, transfusion restrictive ; causes fréquentes en RDC : hémorroïdes, dysenterie, amibiase, schistosomiase, cancer colorectal, diverticules chez le sujet âgé ; coloscopie après préparation.',
    definition:
      'Hémorragie digestive dont la source est située en aval de l’angle de Treitz, le plus souvent dans le côlon, le rectum ou l’anus.',
    physiopathologie:
      '## Causes\n- **Ano-rectales** : hémorroïdes, fissure anale, rectite\n- **Infectieuses et parasitaires** : shigellose, **amibiase**, **schistosomiase intestinale**, colites infectieuses\n- **Tumorales** : **cancer colorectal**, polypes\n- **Diverticules**, angiodysplasies (sujet âgé), colite ischémique, maladies inflammatoires\n- Iatrogènes (après polypectomie), anticoagulants\n\n## Piège\n- Une **hémorragie haute abondante** peut se présenter par des rectorragies (10–15 % des cas)',
    diagnostic:
      '## Évaluation\n- Abondance, retentissement : pouls, tension, pâleur, choc\n- Toucher rectal, anuscopie (hémorroïdes, fissure)\n- Fièvre, diarrhée glairo-sanglante (dysenterie), amaigrissement, troubles du transit (cancer)\n- Médicaments : anticoagulants, antiagrégants, AINS\n\n## Examens\n- NFS, groupage, hémostase, urée et créatinine (urée élevée : origine haute)\n- **Coloscopie** après préparation, dans les 24 h si saignement significatif ; endoscopie haute si instabilité\n- Coproculture, examen parasitologique des selles (amibes, œufs de schistosomes)',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'hemostase', 'Anticoagulants, coagulopathie.'],
      ['premiere_intention', 'uree', 'Urée élevée : origine haute probable.'],
      ['confirmation', 'coloscopie', 'Lésion responsable.'],
      ['deuxieme_intention', 'endoscopie-digestive-haute', 'Éliminer une source haute si instabilité.'],
      ['etiologique', 'examen-parasitologique-selles', 'Amibes, œufs de schistosomes.'],
      ['etiologique', 'coproculture', 'Dysenterie bactérienne.'],
    ],
    scores: [],
    differentiels: [
      ['hemorragie-digestive-haute', 'Méléna, hématémèse, urée élevée.'],
      ['amibiase-intestinale', 'Dysenterie, amibes dans les selles.'],
      ['shigellose', 'Dysenterie fébrile.'],
      ['Hémorroïdes', 'Sang rouge en fin de selle, anuscopie.'],
    ],
    etiologies:
      '## Terrain\n- Sujet âgé (diverticules, cancer), anticoagulants, zone d’endémie bilharzienne, dysenterie',
    principes: [
      [
        'Réanimation',
        'Stabiliser.',
        '- 2 voies veineuses, **cristalloïdes**, oxygène\n- **Transfusion restrictive** : seuil Hb 7 g/dL (8 g/dL si cardiopathie)\n- Arrêt ou correction des anticoagulants selon le risque thrombotique\n- L’acide tranexamique n’a pas montré de bénéfice dans les hémorragies digestives',
      ],
      [
        'Diagnostic et traitement de la cause',
        'Arrêter le saignement.',
        '- Coloscopie (hémostase endoscopique), embolisation ou chirurgie si saignement persistant\n- Hémorroïdes : régularisation du transit, traitement local, ligature\n- Amibiase : **métronidazole** ; schistosomiase : **praziquantel** ; dysenterie : antibiotique\n- Cancer : prise en charge oncologique',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Remplissage'],
      ['metronidazole', 'alternative', 'Amibiase'],
      ['praziquantel', 'alternative', 'Schistosomiase intestinale'],
      ['macrogol', 'adjuvant', 'Préparation colique, constipation'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'reanimation-du-choc',
        description: 'Saignement abondant.',
        traitement: '- Réanimation, transfusion, hémostase',
        clinique: '- Tachycardie, hypotension',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Saignement chronique.',
        traitement: '- Fer, traitement de la cause',
        clinique: '- Pâleur, fatigue',
        paraclinique: '- NFS, ferritine',
      },
    ],
    evolution:
      '## Pronostic\n- Arrêt spontané dans 80 % des cas ; mortalité plus élevée chez le sujet âgé et en cas de comorbidités',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Rectorragies', 'tres_frequent'],
      ['Pâleur', 'frequent'],
      ['Hypotension', 'occasionnel'],
      ['Diarrhée sanglante', 'occasionnel'],
      ['Douleur anale', 'occasionnel'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'ESGE (gastro-entérologie) — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Évaluer le retentissement, toucher rectal, perfusion, transfert',
        '- Saignement abondant, choc, sujet âgé, anticoagulants',
      ],
      hgr: ['- Réanimation, transfusion, rectosigmoïdoscopie', '- Coloscopie, embolisation'],
      tert: ['- Coloscopie, radiologie interventionnelle, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Rectorragies d’origine ano-rectale',
        type: 'commune',
        description: 'Hémorroïdes, fissure.',
        terrain: '- Adulte, constipation',
        fonctionnels: '- Sang rouge en fin de selle',
        generaux: '- Bon état général',
        physiques: '- Hémorroïdes à l’anuscopie',
        paraclinique: '- Hb normale',
        etiologies: '- Hémorroïdes',
        syndromes: [],
      },
      {
        nom: 'Hémorragie basse grave',
        type: 'gravite',
        description: 'Saignement abondant.',
        terrain: '- Sujet âgé, anticoagulants',
        fonctionnels: '- Rectorragies abondantes',
        generaux: '- Choc',
        physiques: '- Pâleur',
        paraclinique: '- Anémie aiguë',
        etiologies: '- Diverticules, angiodysplasies',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
      },
      {
        nom: 'Rectorragies révélant un cancer colorectal',
        type: 'etiologique',
        description: 'Saignement chronique.',
        terrain: '- > 45 ans',
        fonctionnels: '- Troubles du transit',
        generaux: '- Amaigrissement',
        physiques: '- Masse au toucher rectal',
        paraclinique: '- Anémie ferriprive, coloscopie',
        etiologies: '- Adénocarcinome',
        syndromes: ['syndrome-anemique'],
      },
    ],
  },

  // =================================================================== Encéphalopathie hépatique
  {
    ...GASTRO,
    slug: 'encephalopathie-hepatique',
    nom: 'Encéphalopathie hépatique',
    resume:
      'Troubles neuropsychiques de l’insuffisance hépatique (cirrhose surtout) : confusion, inversion du rythme du sommeil, astérixis, jusqu’au coma ; rechercher et traiter le facteur déclenchant (hémorragie digestive, infection, constipation, hypokaliémie, sédatifs, diurétiques) ; lactulose jusqu’à 2–3 selles molles par jour, rifaximine en prévention des récidives ; pas de restriction protidique.',
    definition:
      'Dysfonction cérébrale causée par une insuffisance hépatique et/ou un shunt porto-systémique, allant des troubles minimes de l’attention au coma.',
    physiopathologie:
      '## Mécanismes\n- Accumulation d’**ammoniaque** et d’autres neurotoxines d’origine intestinale non épurées par le foie\n- Œdème des astrocytes, neuroinflammation\n\n## Facteurs déclenchants (à rechercher systématiquement)\n- **Hémorragie digestive**, **infection** (liquide d’ascite, urines, poumon), **constipation**\n- Hypokaliémie, hyponatrémie, déshydratation, insuffisance rénale (diurétiques, paracentèse)\n- **Sédatifs** (benzodiazépines), opioïdes, alcool, hypoglycémie',
    diagnostic:
      '## Clinique (grades de West Haven)\n- **Grade 1** : troubles de l’attention, du sommeil, de l’humeur\n- **Grade 2** : désorientation temporelle, léthargie, **astérixis** (flapping)\n- **Grade 3** : somnolence, confusion importante\n- **Grade 4** : coma\n- Signes d’insuffisance hépatocellulaire, ictère, ascite, foetor hepaticus\n\n## Examens\n- Glycémie (éliminer une hypoglycémie), ionogramme, créatinine, NFS, TP\n- Recherche d’infection : ponction d’ascite, ECBU, hémocultures, radiographie thoracique\n- Scanner cérébral si signes focaux ou traumatisme (hématome sous-dural)',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hypokaliémie, hyponatrémie.'],
      ['premiere_intention', 'creatinine', 'Insuffisance rénale.'],
      ['premiere_intention', 'bilan-hepatique', 'Insuffisance hépatocellulaire.'],
      ['premiere_intention', 'hemostase', 'TP.'],
      ['etiologique', 'ponction-epanchement', 'Ponction d’ascite : infection.'],
      ['etiologique', 'ecbu', 'Infection urinaire.'],
      ['etiologique', 'hemocultures', 'Sepsis.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Signes focaux, chute.'],
    ],
    scores: [],
    differentiels: [
      ['hypoglycemie-adulte', 'Glycémie basse.'],
      ['sevrage-alcoolique-delirium-tremens', 'Sevrage, tremblements, sueurs.'],
      ['encephalopathie-de-gayet-wernicke', 'Ataxie, troubles oculomoteurs.'],
      ['hematome-sous-dural', 'Chute, signes focaux.'],
      ['meningite-bacterienne', 'Fièvre, raideur de nuque.'],
      ['syndrome-confusionnel-aigu', 'Autres causes de confusion.'],
    ],
    etiologies:
      '## Terrain\n- Cirrhose (virale B, C, alcoolique), hépatite fulminante, shunt porto-systémique',
    principes: [
      [
        'Facteur déclenchant',
        'Priorité.',
        '- Traiter l’hémorragie digestive, l’infection (antibiotiques), la constipation, les troubles ioniques\n- Arrêter les sédatifs et les diurétiques, corriger la déshydratation',
      ],
      [
        'Lactulose',
        'Réduire l’ammoniaque.',
        '- **Lactulose** 20–30 mL 2 à 4 fois par jour per os ou par sonde, à adapter pour **2 à 3 selles molles par jour** ; lavement si coma\n- Prévention secondaire au long cours',
      ],
      [
        'Rifaximine et nutrition',
        'Prévenir les récidives.',
        '- **Rifaximine** 550 mg 2 fois par jour en association au lactulose après une récidive\n- **Pas de restriction protidique** : 1,2–1,5 g/kg/j de protéines, collation du soir\n- Grade 3–4 : protection des voies aériennes, position latérale',
      ],
    ],
    molecules: [
      ['lactulose', 'premiere', 'Traitement et prévention'],
      ['rifaximine', 'deuxieme', 'Prévention des récidives'],
      ['ceftriaxone', 'adjuvant', 'Infection déclenchante'],
      ['chlorure-de-potassium', 'adjuvant', 'Hypokaliémie'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Coma et inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Grade 3–4.',
        traitement: '- Protection des voies aériennes, antibiotiques',
        clinique: '- Coma',
        paraclinique: '',
      },
      {
        nom: 'Œdème cérébral',
        description: 'Hépatite fulminante.',
        traitement: '- Réanimation, transplantation',
        clinique: '- Coma profond',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Réversible si le facteur déclenchant est traité ; une encéphalopathie dans la cirrhose est un marqueur de mauvais pronostic',
    urgences: [],
    symptomes: [
      ['Désorientation', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Mouvements involontaires', 'frequent'],
      ['Ictère', 'frequent'],
    ],
    sources: [
      'EASL — recommandations de pratique clinique',
      'AASLD — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Glycémie, lactulose, recherche du facteur déclenchant, transfert',
        '- Grade ≥ 2, hémorragie, fièvre',
      ],
      hgr: ['- Bilan, ponction d’ascite, antibiotiques, lactulose', ''],
      tert: ['- Hépatologie, réanimation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Encéphalopathie de la cirrhose',
        type: 'commune',
        description: 'Facteur déclenchant identifiable.',
        terrain: '- Cirrhose',
        fonctionnels: '- Inversion du sommeil, confusion',
        generaux: '- Ictère',
        physiques: '- Astérixis, ascite',
        paraclinique: '- Insuffisance hépatocellulaire',
        etiologies: '- Hémorragie, infection, constipation',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire', 'syndrome-confusionnel'],
      },
      {
        nom: 'Coma hépatique',
        type: 'gravite',
        description: 'Grade 4.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Coma',
        physiques: '- Foetor hepaticus',
        paraclinique: '- TP effondré',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hépatite C chronique
  {
    ...GASTRO,
    slug: 'hepatite-c-chronique',
    nom: 'Hépatite C chronique',
    resume:
      'Infection chronique par le VHC (transmission sanguine : transfusions, injections et soins non sécurisés, scarifications), longtemps silencieuse, évoluant vers la cirrhose et le carcinome hépatocellulaire : sérologie puis ARN viral ; tous les patients virémiques sont à traiter par antiviraux à action directe pangénotypiques (sofosbuvir-velpatasvir ou sofosbuvir-daclatasvir 12 semaines), guérison > 95 %.',
    definition:
      'Persistance de l’ARN du virus de l’hépatite C plus de 6 mois après l’infection, avec atteinte inflammatoire et fibrosante du foie.',
    physiopathologie:
      '## Transmission\n- Sang : transfusions non testées, injections et matériel médical réutilisé, usage de drogues injectables, tatouages et scarifications\n- Rarement sexuelle ou de la mère à l’enfant\n\n## Évolution\n- Chronicité dans 70 % des cas, fibrose progressive sur 20–30 ans\n- Facteurs aggravants : alcool, VIH, hépatite B, obésité, diabète',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique ; fatigue ; signes de cirrhose aux stades avancés\n- Manifestations extra-hépatiques : cryoglobulinémie, glomérulonéphrite, diabète\n\n## Examens\n- **Sérologie anti-VHC** (test rapide ou ELISA), puis **ARN du VHC** (ou antigène core) pour confirmer l’infection active\n- Bilan hépatique, NFS (plaquettes), TP, créatinine\n- **Fibrose** : score APRI ou FIB-4, élastométrie\n- AgHBs, test VIH, échographie (carcinome)',
    examens: [
      ['premiere_intention', 'serologies-hepatites', 'Anti-VHC.'],
      ['confirmation', 'arn-vhc', 'Infection active.'],
      ['premiere_intention', 'bilan-hepatique', 'Transaminases.'],
      ['premiere_intention', 'nfs', 'Plaquettes (APRI, FIB-4).'],
      ['gravite', 'elastometrie-hepatique', 'Fibrose, cirrhose.'],
      ['etiologique', 'aghbs', 'Coinfection B.'],
      ['etiologique', 'tdr-vih', 'Coinfection VIH.'],
      ['gravite', 'echographie-abdominale', 'Cirrhose, carcinome.'],
      ['premiere_intention', 'creatinine', 'Avant traitement.'],
    ],
    scores: [],
    differentiels: [
      ['hepatite-b-chronique', 'AgHBs positif.'],
      ['Hépatopathie alcoolique', 'Consommation d’alcool, GGT élevées.'],
      ['Stéatose hépatique métabolique', 'Obésité, diabète, sérologies négatives.'],
      ['schistosomiase-hepatosplenique', 'Hypertension portale avec fonction hépatique conservée.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Transfusions anciennes, soins invasifs non sécurisés, drogues injectables, hémodialyse, enfants de mère infectée, détenus',
    principes: [
      [
        'Antiviraux à action directe',
        'Guérir.',
        '- Traiter **tous les patients virémiques** (OMS), y compris les adolescents et les enfants ≥ 3 ans\n- **Sofosbuvir-velpatasvir** 400/100 mg 1 fois par jour **12 semaines**\n- Ou **sofosbuvir** 400 mg + **daclatasvir** 60 mg 1 fois par jour 12 semaines (24 semaines en cas de cirrhose selon le protocole)\n- Vérifier les interactions (antiépileptiques inducteurs, rifampicine, amiodarone : contre-indiquée avec le sofosbuvir)',
      ],
      [
        'Suivi',
        'Confirmer la guérison.',
        '- **ARN indétectable 12 semaines après la fin** du traitement (RVS12)\n- Cirrhose : échographie tous les 6 mois (carcinome), endoscopie (varices)\n- Arrêt de l’alcool, vaccination contre l’hépatite B',
      ],
      [
        'Prévention',
        'Interrompre la transmission.',
        '- Sécurité transfusionnelle et des injections, stérilisation du matériel, réduction des risques chez les usagers de drogues',
      ],
    ],
    molecules: [
      ['sofosbuvir', 'premiere', 'Association pangénotypique'],
      ['velpatasvir', 'premiere', 'Avec sofosbuvir'],
      ['daclatasvir', 'alternative', 'Avec sofosbuvir'],
      ['vaccin-hepatite-b', 'adjuvant', 'Si non immunisé'],
    ],
    complications: [
      {
        nom: 'Cirrhose',
        fiche: 'cirrhose-hepatique',
        description: 'Fibrose progressive.',
        traitement: '- Antiviraux, prise en charge de la cirrhose',
        clinique: '- Ascite, ictère',
        paraclinique: '- Élastométrie',
      },
      {
        nom: 'Carcinome hépatocellulaire',
        fiche: 'carcinome-hepatocellulaire',
        description: 'Sur cirrhose.',
        traitement: '- Dépistage, traitement oncologique',
        clinique: '- Masse, altération de l’état général',
        paraclinique: '- Échographie, AFP',
      },
      {
        nom: 'Glomérulonéphrite et cryoglobulinémie',
        description: 'Atteintes extra-hépatiques.',
        traitement: '- Antiviraux',
        clinique: '- Purpura, œdèmes',
        paraclinique: '- Protéinurie',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison virologique chez plus de 95 % des patients traités ; le risque de carcinome persiste en cas de cirrhose',
    urgences: [],
    symptomes: [
      ['Asthénie', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'EASL — recommandations de pratique clinique',
      'AASLD — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Dépistage par test rapide, orientation', '- Sérologie positive'],
      hgr: ['- ARN viral, évaluation de la fibrose, traitement par AAD', '- Cirrhose décompensée'],
      tert: ['- Hépatologie, carcinome', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hépatite C chronique sans cirrhose',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Adulte, facteurs de risque',
        fonctionnels: '- Asymptomatique ou fatigue',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Anti-VHC et ARN positifs, APRI bas',
        etiologies: '- VHC',
        syndromes: [],
        examens: [['arn-vhc', 'Détectable']],
      },
      {
        nom: 'Hépatite C avec cirrhose',
        type: 'gravite',
        description: 'Stade avancé.',
        terrain: '',
        fonctionnels: '- Fatigue',
        generaux: '- Amaigrissement',
        physiques: '- Ascite, circulation collatérale',
        paraclinique: '- Plaquettes basses, élastométrie élevée',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-portale', 'syndrome-d-insuffisance-hepatocellulaire'],
      },
    ],
  },

  // =================================================================== Pancréatite aiguë
  {
    ...GASTRO,
    slug: 'pancreatite-aigue',
    nom: 'Pancréatite aiguë',
    resume:
      'Douleur épigastrique brutale transfixiante avec vomissements et lipasémie > 3 fois la normale ; causes principales : lithiase biliaire et alcool (aussi hypertriglycéridémie, médicaments dont certains ARV) ; réhydratation modérée guidée (Ringer lactate), antalgie, alimentation orale précoce ; pas d’antibiotiques systématiques ; surveiller les défaillances d’organes.',
    definition:
      'Inflammation aiguë du pancréas liée à l’activation intra-pancréatique des enzymes, de gravité variable (oedémateuse ou nécrosante), avec risque de défaillances d’organes.',
    physiopathologie:
      '## Causes\n- **Lithiase biliaire** (migration d’un calcul)\n- **Alcool**\n- Hypertriglycéridémie (> 10 g/L), hypercalcémie\n- Médicaments : **didanosine**, stavudine, valproate, azathioprine, œstrogènes\n- Infections (oreillons, CMV), traumatisme, parasites (ascaris), post-CPRE, tumeurs\n\n## Gravité\n- Syndrome de réponse inflammatoire, défaillances respiratoire, rénale, circulatoire ; nécrose infectée secondaire',
    diagnostic:
      '## Critères (2 sur 3)\n- **Douleur épigastrique** brutale, intense, transfixiante, irradiant dans le dos, avec **vomissements**\n- **Lipasémie > 3 fois la normale**\n- Imagerie évocatrice (scanner, échographie)\n\n## Gravité\n- Signes de choc, détresse respiratoire, oligurie, SIRS persistant > 48 h\n- Critères de défaillance d’organes (score de Marshall), CRP > 150 mg/L à 48 h\n\n## Examens\n- Lipase, NFS, CRP, ionogramme, créatinine, glycémie, calcémie, triglycérides, bilan hépatique\n- **Échographie abdominale** (lithiase biliaire) ; scanner après 72 h si doute ou aggravation',
    examens: [
      ['confirmation', 'lipasemie', '> 3 fois la normale.'],
      ['premiere_intention', 'echographie-abdominale', 'Lithiase biliaire.'],
      ['premiere_intention', 'bilan-hepatique', 'Origine biliaire (ALAT élevées).'],
      ['premiere_intention', 'crp', 'Gravité à 48 h.'],
      ['premiere_intention', 'creatinine', 'Défaillance rénale.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypercalcémie, hypocalcémie.'],
      ['etiologique', 'bilan-lipidique', 'Hypertriglycéridémie.'],
      ['premiere_intention', 'glycemie', 'Hyperglycémie.'],
      ['deuxieme_intention', 'scanner-abdominal', 'Nécrose, complications (après 72 h).'],
      ['gravite', 'gaz-du-sang', 'Défaillance respiratoire.'],
    ],
    scores: [],
    differentiels: [
      ['perforation-ulcere-gastroduodenal', 'Pneumopéritoine, contracture.'],
      ['cholecystite-lithiase-biliaire', 'Douleur de l’hypochondre droit, lipase normale ou peu élevée.'],
      ['syndrome-coronarien-aigu-st-plus', 'Infarctus inférieur : ECG.'],
      ['occlusion-intestinale-aigue', 'Arrêt des matières, niveaux hydro-aériques.'],
      ['Ischémie mésentérique', 'Sujet âgé, fibrillation atriale, douleur intense.'],
    ],
    etiologies:
      '## Terrain\n- Lithiase biliaire (femme, obésité), alcool, hypertriglycéridémie, patient VIH sous anciens ARV',
    principes: [
      [
        'Réanimation',
        'Prévenir les défaillances.',
        '- **Ringer lactate** modéré et guidé : 10 mL/kg si hypovolémie puis environ 1,5 mL/kg/h, réévalué (diurèse, pouls) ; éviter l’hyperhydratation\n- Oxygène, surveillance de la diurèse, de la glycémie et de la calcémie',
      ],
      [
        'Antalgie et nutrition',
        'Soulager et nourrir.',
        '- **Paracétamol**, **morphine** titrée si besoin\n- **Alimentation orale précoce** (dans les 24–72 h) dès que tolérée ; sonde nasogastrique ou nasojéjunale si impossible\n- Pas d’antibiotiques prophylactiques ; antibiotiques seulement si infection prouvée ou nécrose infectée',
      ],
      [
        'Traitement de la cause',
        'Éviter la récidive.',
        '- Origine biliaire : **cholécystectomie** pendant la même hospitalisation (forme légère) ; CPRE si angiocholite\n- Alcool : sevrage ; hypertriglycéridémie : insuline, fibrates ; arrêt du médicament en cause',
      ],
    ],
    molecules: [
      ['ringer-lactate', 'premiere', 'Réhydratation guidée'],
      ['paracetamol', 'premiere', 'Douleur'],
      ['morphine', 'alternative', 'Douleur intense'],
      ['ondansetron', 'adjuvant', 'Vomissements'],
      ['omeprazole', 'adjuvant', 'Prévention de l’ulcère de stress (formes graves)'],
      ['insuline-humaine-rapide', 'adjuvant', 'Hyperglycémie, hypertriglycéridémie'],
    ],
    complications: [
      {
        nom: 'Défaillances d’organes',
        fiche: 'reanimation-du-choc',
        description: 'Forme grave.',
        traitement: '- Réanimation',
        clinique: '- Choc, dyspnée, oligurie',
        paraclinique: '- Créatinine, gaz du sang',
      },
      {
        nom: 'Nécrose infectée',
        description: 'Après la 1re semaine.',
        traitement: '- Antibiotiques (carbapénème), drainage',
        clinique: '- Fièvre, aggravation',
        paraclinique: '- Scanner : gaz',
      },
      {
        nom: 'Pseudokyste pancréatique',
        description: 'Collection tardive.',
        traitement: '- Surveillance, drainage si symptomatique',
        clinique: '- Masse, douleur',
        paraclinique: '- Échographie, scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Forme légère (80 %) : guérison en quelques jours ; forme grave nécrosante : mortalité de 20 à 30 %',
    urgences: ['abdomen-aigu-chirurgical', 'choc-septique'],
    symptomes: [
      ['Douleur abdominale', 'tres_frequent'],
      ['Vomissements', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Distension abdominale', 'frequent'],
      ['Ictère', 'occasionnel'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'WSES — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Antalgie, perfusion, transfert', '- Douleur abdominale intense avec vomissements'],
      hgr: ['- Lipase, échographie, réhydratation, surveillance', '- Défaillances d’organes, nécrose'],
      tert: ['- Réanimation, scanner, CPRE, chirurgie', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Douleur épigastrique intense avec défense',
      'choc-septique': 'Pancréatite avec hypotension ou fièvre élevée',
    },
    formes: [
      {
        nom: 'Pancréatite aiguë œdémateuse',
        type: 'commune',
        description: 'Forme légère.',
        terrain: '- Lithiase biliaire, alcool',
        fonctionnels: '- Douleur épigastrique, vomissements',
        generaux: '- Fébricule',
        physiques: '- Sensibilité épigastrique',
        paraclinique: '- Lipase > 3 N',
        etiologies: '- Lithiase, alcool',
        syndromes: [],
        examens: [['lipasemie', 'Élevée']],
      },
      {
        nom: 'Pancréatite aiguë grave',
        type: 'gravite',
        description: 'Défaillance d’organes persistante.',
        terrain: '',
        fonctionnels: '- Dyspnée',
        generaux: '- Choc, oligurie',
        physiques: '- Distension, iléus',
        paraclinique: '- CRP > 150, nécrose au scanner',
        etiologies: '',
        syndromes: ['syndrome-de-reponse-inflammatoire-systemique', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== RGO
  {
    ...GASTRO,
    slug: 'reflux-gastro-oesophagien',
    nom: 'Reflux gastro-œsophagien',
    resume:
      'Remontée du contenu gastrique dans l’œsophage : pyrosis et régurgitations, parfois toux ou douleur thoracique ; diagnostic clinique ; mesures hygiéno-diététiques et IPP (oméprazole 20 mg/j 4 à 8 semaines) ; endoscopie si signes d’alarme (dysphagie, amaigrissement, anémie, vomissements, âge > 50 ans).',
    definition:
      'Passage anormal du contenu gastrique dans l’œsophage, responsable de symptômes gênants et/ou de lésions d’œsophagite.',
    physiopathologie:
      '## Mécanismes\n- Relaxations inappropriées du sphincter inférieur de l’œsophage, hernie hiatale\n- Facteurs : obésité, grossesse, repas copieux et gras, alcool, tabac, café, décubitus après le repas, médicaments (inhibiteurs calciques, dérivés nitrés)',
    diagnostic:
      '## Clinique\n- **Pyrosis** (brûlure rétrosternale ascendante), **régurgitations** acides, postprandiaux ou en décubitus\n- Manifestations atypiques : toux chronique, enrouement, douleur thoracique (éliminer une cause cardiaque)\n\n## Signes d’alarme (endoscopie)\n- Dysphagie, odynophagie, amaigrissement, anémie, hémorragie, vomissements persistants, début après 50 ans\n\n## Examens\n- Aucun si symptômes typiques sans alarme (test thérapeutique par IPP)\n- **Endoscopie digestive haute** si signes d’alarme ou échec',
    examens: [
      ['deuxieme_intention', 'endoscopie-digestive-haute', 'Signes d’alarme, échec du traitement.'],
      ['deuxieme_intention', 'ecg', 'Douleur thoracique.'],
      ['etiologique', 'test-helicobacter', 'Dyspepsie associée.'],
    ],
    scores: [],
    differentiels: [
      ['angor-stable', 'Douleur d’effort, ECG.'],
      ['dyspepsie-et-gastrite', 'Douleur épigastrique sans pyrosis.'],
      ['Œsophagite infectieuse (candida)', 'Patient VIH, odynophagie.'],
      ['Cancer de l’œsophage', 'Dysphagie progressive, amaigrissement.'],
    ],
    etiologies: '## Facteurs\n- Obésité, grossesse, alimentation, alcool, tabac, hernie hiatale',
    principes: [
      [
        'Mesures hygiéno-diététiques',
        'Réduire les symptômes.',
        '- Perte de poids, surélever la tête du lit, éviter les repas copieux et tardifs, alcool, tabac\n- Ne pas s’allonger dans les 2–3 h suivant le repas',
      ],
      [
        'Médicaments',
        'Soulager et cicatriser.',
        '- **Oméprazole** 20 mg/j (ou ésoméprazole 20–40 mg) 30 min avant le petit-déjeuner, 4 à 8 semaines ; puis dose minimale efficace ou à la demande\n- Antiacides ou **alginates** pour les symptômes ponctuels\n- Grossesse : alginates, antiacides, puis IPP si nécessaire',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IPP'],
      ['esomeprazole', 'alternative', 'IPP'],
      ['alginate', 'adjuvant', 'Symptômes ponctuels, grossesse'],
      ['hydroxyde-d-aluminium', 'adjuvant', 'Antiacide'],
    ],
    complications: [
      {
        nom: 'Œsophagite et sténose peptique',
        description: 'Reflux prolongé.',
        traitement: '- IPP, dilatation',
        clinique: '- Dysphagie',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Endobrachyœsophage',
        description: 'Métaplasie, risque de cancer.',
        traitement: '- IPP, surveillance endoscopique',
        clinique: '',
        paraclinique: '- Biopsies',
      },
      {
        nom: 'Hémorragie digestive',
        fiche: 'hemorragie-digestive-haute',
        description: 'Œsophagite sévère.',
        traitement: '- IPP, endoscopie',
        clinique: '- Hématémèse',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bénin, souvent chronique avec rechutes à l’arrêt du traitement',
    urgences: [],
    symptomes: [
      ['Pyrosis', 'tres_frequent'],
      ['Épigastralgies', 'frequent'],
      ['Toux', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
      ['Dysphagie', 'occasionnel'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Conseils, IPP, alginates', '- Signes d’alarme'],
      hgr: ['- Endoscopie', ''],
      tert: ['- Explorations fonctionnelles, chirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'RGO typique',
        type: 'commune',
        description: 'Pyrosis et régurgitations.',
        terrain: '- Adulte, obésité',
        fonctionnels: '- Pyrosis postprandial',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Aucun examen nécessaire',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'RGO compliqué',
        type: 'gravite',
        description: 'Signes d’alarme.',
        terrain: '- > 50 ans',
        fonctionnels: '- Dysphagie',
        generaux: '- Amaigrissement',
        physiques: '',
        paraclinique: '- Œsophagite, sténose',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'RGO de la grossesse',
        type: 'terrain',
        description: 'Fréquent au 3e trimestre.',
        terrain: '- Grossesse',
        fonctionnels: '- Pyrosis',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dyspepsie
  {
    ...GASTRO,
    slug: 'dyspepsie-et-gastrite',
    nom: 'Dyspepsie et gastrite',
    resume:
      'Douleur ou inconfort épigastrique, pesanteur postprandiale, satiété précoce : très fréquent ; rechercher les signes d’alarme et les AINS ; stratégie « tester et traiter » Helicobacter pylori, IPP 4 à 8 semaines ; endoscopie si alarme ou âge > 50–60 ans ; dyspepsie fonctionnelle fréquente.',
    definition:
      'Ensemble de symptômes épigastriques (douleur, brûlure, pesanteur postprandiale, satiété précoce) d’origine organique (ulcère, gastrite, cancer) ou fonctionnelle ; la gastrite est une inflammation de la muqueuse gastrique, souvent liée à H. pylori ou aux AINS.',
    physiopathologie:
      '## Causes\n- **Helicobacter pylori** (gastrite chronique, ulcère)\n- **AINS**, aspirine, alcool, corticoïdes\n- Ulcère gastroduodénal, RGO, cancer gastrique\n- **Dyspepsie fonctionnelle** : hypersensibilité viscérale, troubles de la motricité, stress',
    diagnostic:
      '## Clinique\n- Douleur ou brûlure épigastrique, pesanteur, satiété précoce, ballonnements, nausées\n\n## Signes d’alarme\n- Âge > 50–60 ans au début, amaigrissement, vomissements persistants, dysphagie, anémie, hémorragie (méléna), masse, antécédent familial de cancer gastrique\n\n## Examens\n- **Test H. pylori** (antigène fécal ou test respiratoire) en l’absence d’alarme\n- **Endoscopie** avec biopsies si alarme ou échec\n- NFS (anémie)',
    examens: [
      ['premiere_intention', 'test-helicobacter', 'Stratégie tester et traiter.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['deuxieme_intention', 'endoscopie-digestive-haute', 'Signes d’alarme, âge, échec.'],
      ['deuxieme_intention', 'echographie-abdominale', 'Douleur biliaire.'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-gastroduodenal', 'Douleur rythmée par les repas, endoscopie.'],
      ['reflux-gastro-oesophagien', 'Pyrosis, régurgitations.'],
      ['cancer-de-l-estomac', 'Signes d’alarme.'],
      ['cholecystite-lithiase-biliaire', 'Douleur de l’hypochondre droit, échographie.'],
      ['syndrome-coronarien-aigu-sans-st', 'Douleur épigastrique d’origine cardiaque.'],
      ['parasitoses-intestinales-enfant', 'Helminthiases.'],
    ],
    etiologies:
      '## Facteurs\n- H. pylori (très fréquent en Afrique), AINS (automédication), alcool, tabac, stress',
    principes: [
      [
        'Tester et traiter H. pylori',
        'Supprimer une cause curable.',
        '- Éradication si test positif (voir la fiche *Infection à Helicobacter pylori*)',
      ],
      [
        'Traitement symptomatique',
        'Soulager.',
        '- **IPP** (oméprazole 20 mg/j) 4 à 8 semaines\n- Arrêt des AINS, de l’alcool, du tabac ; repas réguliers\n- Dyspepsie fonctionnelle : explications, prokinétique (dompéridone de courte durée), amitriptyline à faible dose si persistante',
      ],
    ],
    molecules: [
      ['omeprazole', 'premiere', 'IPP'],
      ['amoxicilline', 'alternative', 'Éradication de H. pylori'],
      ['clarithromycine', 'alternative', 'Éradication de H. pylori'],
      ['domperidone', 'adjuvant', 'Pesanteur postprandiale (courte durée)'],
      ['amitriptyline', 'adjuvant', 'Dyspepsie fonctionnelle'],
    ],
    complications: [
      {
        nom: 'Ulcère et hémorragie',
        fiche: 'hemorragie-digestive-haute',
        description: 'H. pylori, AINS.',
        traitement: '- IPP, endoscopie',
        clinique: '- Méléna, hématémèse',
        paraclinique: '',
      },
      {
        nom: 'Cancer gastrique',
        fiche: 'cancer-de-l-estomac',
        description: 'Gastrite chronique à H. pylori.',
        traitement: '- Prise en charge oncologique',
        clinique: '- Signes d’alarme',
        paraclinique: '- Biopsies',
      },
    ],
    evolution: '## Pronostic\n- Bon ; rechutes fréquentes de la dyspepsie fonctionnelle',
    urgences: [],
    symptomes: [
      ['Épigastralgies', 'tres_frequent'],
      ['Vomissements', 'occasionnel'],
      ['Anorexie', 'occasionnel'],
      ['Distension abdominale', 'frequent'],
    ],
    sources: [
      'ACG — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Recherche des signes d’alarme, IPP, arrêt des AINS', '- Signes d’alarme'],
      hgr: ['- Test H. pylori, endoscopie', ''],
      tert: ['- Gastro-entérologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Dyspepsie fonctionnelle',
        type: 'commune',
        description: 'Bilan normal.',
        terrain: '- Adulte jeune, stress',
        fonctionnels: '- Pesanteur, satiété précoce',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Endoscopie normale',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Gastrite à H. pylori',
        type: 'etiologique',
        description: 'Gastrite chronique.',
        terrain: '',
        fonctionnels: '- Épigastralgies',
        generaux: '',
        physiques: '',
        paraclinique: '- Test H. pylori positif',
        etiologies: '- Helicobacter pylori',
        syndromes: [],
      },
      {
        nom: 'Gastrite médicamenteuse',
        type: 'etiologique',
        description: 'AINS, aspirine.',
        terrain: '- Automédication',
        fonctionnels: '- Brûlures épigastriques',
        generaux: '',
        physiques: '',
        paraclinique: '- Érosions à l’endoscopie',
        etiologies: '- AINS',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer de l'estomac
  {
    ...GASTRO,
    slug: 'cancer-de-l-estomac',
    nom: 'Cancer de l’estomac',
    resume:
      'Adénocarcinome gastrique, favorisé par Helicobacter pylori, souvent diagnostiqué tardivement en Afrique : épigastralgies, amaigrissement, anémie, vomissements, hémorragie ; endoscopie avec biopsies ; chirurgie (gastrectomie avec curage) ± chimiothérapie périopératoire pour les formes localisées ; soins palliatifs pour les formes avancées.',
    definition:
      'Tumeur maligne de l’estomac, dans plus de 90 % des cas un adénocarcinome, plus rarement un lymphome ou une tumeur stromale.',
    physiopathologie:
      '## Facteurs\n- **Helicobacter pylori** (gastrite atrophique, métaplasie intestinale)\n- Alimentation salée, fumée, pauvre en fruits et légumes ; tabac\n- Antécédents familiaux, gastrectomie ancienne\n\n## Extension\n- Locale, ganglionnaire, péritonéale (ascite), hépatique, ovarienne (Krukenberg), ganglion sus-claviculaire gauche (Troisier)',
    diagnostic:
      '## Clinique\n- **Épigastralgies**, **amaigrissement**, anorexie, satiété précoce, **vomissements** (sténose), **anémie**, méléna\n- Masse épigastrique, ganglion de Troisier, ascite, hépatomégalie\n\n## Examens\n- **Endoscopie digestive haute avec biopsies** (diagnostic)\n- Bilan d’extension : **scanner thoraco-abdomino-pelvien** ; échographie à défaut\n- NFS, bilan hépatique, albumine, état nutritionnel',
    examens: [
      ['confirmation', 'endoscopie-digestive-haute', 'Tumeur, biopsies.'],
      ['confirmation', 'biopsie-histologie', 'Adénocarcinome.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'bilan-hepatique', 'Métastases, état nutritionnel.'],
      ['premiere_intention', 'echographie-abdominale', 'Métastases hépatiques, ascite.'],
    ],
    scores: [],
    differentiels: [
      ['ulcere-gastroduodenal', 'Ulcère bénin (biopsies).'],
      ['dyspepsie-et-gastrite', 'Sans signes d’alarme.'],
      ['Lymphome gastrique', 'Histologie.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose abdominale : ascite, fièvre.'],
    ],
    etiologies:
      '## Facteurs de risque\n- H. pylori, homme > 50 ans, alimentation salée et fumée, tabac, antécédents familiaux',
    principes: [
      [
        'Forme localisée',
        'Guérir.',
        '- **Gastrectomie** totale ou partielle avec curage ganglionnaire\n- Chimiothérapie périopératoire (FLOT ou équivalent) selon l’état général et les ressources',
      ],
      [
        'Forme avancée',
        'Soulager.',
        '- Chimiothérapie palliative si l’état général le permet\n- Sténose : gastro-entéroanastomose ou prothèse ; hémorragie : transfusion, hémostase\n- **Soins palliatifs** : antalgie (morphine), nutrition, soutien',
      ],
      [
        'Prévention',
        'Réduire l’incidence.',
        '- Éradication de H. pylori, alimentation riche en fruits et légumes, moins de sel',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleurs'],
      ['omeprazole', 'adjuvant', 'Symptômes'],
      ['fluorouracile', 'alternative', 'Chimiothérapie (protocole)'],
      ['docetaxel', 'alternative', 'Chimiothérapie (protocole)'],
      ['metoclopramide', 'adjuvant', 'Nausées'],
    ],
    complications: [
      {
        nom: 'Hémorragie digestive',
        fiche: 'hemorragie-digestive-haute',
        description: 'Saignement tumoral.',
        traitement: '- Transfusion, hémostase',
        clinique: '- Méléna',
        paraclinique: '- Hémoglobine',
      },
      {
        nom: 'Sténose pylorique',
        description: 'Tumeur antrale.',
        traitement: '- Dérivation, prothèse',
        clinique: '- Vomissements',
        paraclinique: '- Endoscopie',
      },
      {
        nom: 'Perforation',
        fiche: 'peritonite-aigue',
        description: 'Rare.',
        traitement: '- Chirurgie',
        clinique: '- Contracture',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Dénutrition',
        description: 'Stades avancés.',
        traitement: '- Nutrition',
        clinique: '- Cachexie',
        paraclinique: '- Albumine',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans élevée dans les formes précoces, faible (< 10–20 %) dans les formes avancées fréquentes au diagnostic',
    urgences: [],
    symptomes: [
      ['Épigastralgies', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Méléna', 'occasionnel'],
      ['Masse abdominale', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: ['- Signes d’alarme, orientation', '- Amaigrissement, anémie, vomissements'],
      hgr: ['- Endoscopie, chirurgie', ''],
      tert: ['- Oncologie, chimiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Adénocarcinome gastrique avancé',
        type: 'commune',
        description: 'Diagnostic tardif.',
        terrain: '- Homme > 50 ans',
        fonctionnels: '- Épigastralgies, vomissements',
        generaux: '- Amaigrissement',
        physiques: '- Masse, ganglion de Troisier',
        paraclinique: '- Tumeur ulcérée, biopsies',
        etiologies: '- H. pylori',
        syndromes: ['syndrome-d-alteration-de-l-etat-general', 'syndrome-anemique'],
      },
      {
        nom: 'Cancer gastrique sténosant',
        type: 'gravite',
        description: 'Sténose.',
        terrain: '',
        fonctionnels: '- Vomissements alimentaires',
        generaux: '- Déshydratation',
        physiques: '- Clapotage',
        paraclinique: '- Sténose antrale',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer colorectal
  {
    ...GASTRO,
    slug: 'cancer-colorectal',
    nom: 'Cancer colorectal',
    resume:
      'Adénocarcinome du côlon ou du rectum, en augmentation en Afrique et souvent chez des sujets plus jeunes : rectorragies, troubles du transit, anémie ferriprive, amaigrissement, occlusion ; toucher rectal, coloscopie avec biopsies, scanner ; chirurgie (colectomie, résection du rectum) ± chimiothérapie (FOLFOX/CAPOX) et radiothérapie du rectum.',
    definition:
      'Tumeur maligne développée à partir de la muqueuse du côlon ou du rectum, le plus souvent par transformation d’un polype adénomateux.',
    physiopathologie:
      '## Facteurs\n- Âge, polypes adénomateux, antécédents familiaux, syndromes génétiques (Lynch, polypose)\n- Alimentation pauvre en fibres, riche en viande rouge et transformée, obésité, sédentarité, alcool, tabac\n- Maladies inflammatoires chroniques de l’intestin\n\n## Extension\n- Ganglions, **foie**, poumons, péritoine',
    diagnostic:
      '## Clinique\n- **Rectorragies**, **troubles du transit** récents (constipation, diarrhée), ténesme et faux besoins (rectum)\n- **Anémie ferriprive** inexpliquée, amaigrissement, douleurs abdominales\n- **Occlusion** ou perforation révélatrices\n- **Toucher rectal** systématique\n\n## Examens\n- **Coloscopie** avec biopsies\n- Bilan d’extension : **scanner thoraco-abdomino-pelvien**, IRM pelvienne (rectum), ACE\n- NFS, ferritine, bilan hépatique',
    examens: [
      ['confirmation', 'coloscopie', 'Tumeur, biopsies.'],
      ['confirmation', 'biopsie-histologie', 'Adénocarcinome.'],
      ['gravite', 'scanner-abdominal', 'Extension, métastases hépatiques.'],
      ['premiere_intention', 'nfs', 'Anémie.'],
      ['premiere_intention', 'ferritine', 'Carence martiale.'],
      ['premiere_intention', 'bilan-hepatique', 'Métastases.'],
      ['gravite', 'radiographie-thoracique', 'Métastases pulmonaires.'],
    ],
    scores: [],
    differentiels: [
      ['hemorragie-digestive-basse', 'Autres causes de rectorragies.'],
      ['amibiase-intestinale', 'Amœbome, dysenterie.'],
      ['Tuberculose iléo-cæcale', 'Fièvre, VIH, masse de la fosse iliaque droite.'],
      ['Hémorroïdes', 'Ne pas attribuer des rectorragies aux hémorroïdes sans explorer après 45 ans.'],
      ['schistosomiase-hepatosplenique', 'Polypes bilharziens.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Âge > 45–50 ans, antécédents familiaux, polypes, alimentation occidentalisée, obésité',
    principes: [
      [
        'Forme localisée',
        'Guérir.',
        '- **Colectomie** avec curage ganglionnaire ; rectum : radiochimiothérapie préopératoire puis résection\n- Chimiothérapie adjuvante (**FOLFOX** ou **CAPOX** : oxaliplatine + 5-FU ou **capécitabine**) pour les stades III',
      ],
      [
        'Formes compliquées',
        'Traiter l’urgence.',
        '- Occlusion : colostomie de décharge ou résection en urgence ; perforation : chirurgie',
      ],
      [
        'Forme métastatique',
        'Prolonger et soulager.',
        '- Chimiothérapie, résection des métastases hépatiques si possible\n- Soins palliatifs, traitement de l’anémie (fer, transfusion)',
      ],
      [
        'Dépistage',
        'Diagnostic précoce.',
        '- Explorer toute rectorragie ou anémie ferriprive après 45 ans ; coloscopie chez les apparentés',
      ],
    ],
    molecules: [
      ['capecitabine', 'alternative', 'Chimiothérapie (CAPOX)'],
      ['fluorouracile', 'alternative', 'Chimiothérapie (FOLFOX)'],
      ['acide-folinique', 'adjuvant', 'Associé au 5-FU'],
      ['morphine', 'adjuvant', 'Douleurs'],
      ['fumarate-ferreux-fer', 'adjuvant', 'Anémie ferriprive'],
    ],
    complications: [
      {
        nom: 'Occlusion intestinale',
        fiche: 'occlusion-intestinale-aigue',
        description: 'Tumeur sténosante.',
        traitement: '- Chirurgie',
        clinique: '- Arrêt des matières',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Perforation et péritonite',
        fiche: 'peritonite-aigue',
        description: 'Tumeur ou distension.',
        traitement: '- Chirurgie',
        clinique: '- Contracture',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Anémie ferriprive',
        fiche: 'anemie-ferriprive',
        description: 'Saignement chronique.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Métastases hépatiques',
        description: 'Fréquentes.',
        traitement: '- Chimiothérapie, résection',
        clinique: '- Hépatomégalie',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans de 90 % au stade I, 10–15 % au stade métastatique ; souvent découvert tardivement',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Rectorragies', 'tres_frequent'],
      ['Arrêt des matières et des gaz', 'occasionnel'],
      ['Douleur abdominale', 'frequent'],
      ['Perte de poids', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Toucher rectal, NFS, orientation',
        '- Rectorragies ou anémie après 45 ans, troubles du transit',
      ],
      hgr: ['- Coloscopie, chirurgie', '- Chimiothérapie, radiothérapie'],
      tert: ['- Oncologie, chirurgie colorectale', ''],
    },
    alertes: { 'abdomen-aigu-chirurgical': 'Occlusion ou perforation révélant un cancer colorectal' },
    formes: [
      {
        nom: 'Cancer du côlon',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- > 45 ans',
        fonctionnels: '- Troubles du transit, rectorragies',
        generaux: '- Amaigrissement',
        physiques: '- Masse abdominale',
        paraclinique: '- Anémie ferriprive, coloscopie',
        etiologies: '- Polype adénomateux',
        syndromes: ['syndrome-anemique'],
        examens: [['coloscopie', 'Tumeur']],
      },
      {
        nom: 'Cancer du rectum',
        type: 'topographique',
        description: 'Signes rectaux.',
        terrain: '',
        fonctionnels: '- Ténesme, faux besoins, rectorragies',
        generaux: '',
        physiques: '- Tumeur au toucher rectal',
        paraclinique: '- IRM pelvienne',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme révélée par une occlusion',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '',
        fonctionnels: '- Arrêt des matières et des gaz',
        generaux: '- Déshydratation',
        physiques: '- Distension',
        paraclinique: '- Occlusion colique',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },
];
