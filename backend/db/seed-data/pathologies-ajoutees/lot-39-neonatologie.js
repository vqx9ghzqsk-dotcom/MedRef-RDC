'use strict';

/**
 * Lot 39 (phase 2, néonatologie) — entérocolite ulcéro-nécrosante, polyglobulie néonatale,
 * maladie hémorragique du nouveau-né, traumatismes obstétricaux, malformations congénitales
 * majeures, nouveau-né de mère diabétique, difficultés d'alimentation, hypocalcémie néonatale.
 * Rédigé par IA (OMS, Pocket book, ouvrages de référence) : à valider.
 */

const NEO = { departement: 'pediatrie', specialite: 'Néonatologie' };

module.exports = [
  // =================================================================== ECUN
  {
    ...NEO,
    slug: 'enterocolite-ulcero-necrosante',
    nom: 'Entérocolite ulcéro-nécrosante',
    resume:
      'Urgence digestive du prématuré (surtout < 32 SA et faible poids), le plus souvent après le début de l’alimentation : ballonnement, résidus gastriques bilieux, rectorragies, apnées, instabilité ; radiographie de l’abdomen (pneumatose) ; arrêt de l’alimentation, sonde gastrique, perfusion, ampicilline + gentamicine + métronidazole, avis chirurgical si perforation ; prévention par le lait maternel.',
    definition:
      'Nécrose inflammatoire de la paroi intestinale du nouveau-né, principalement du prématuré, pouvant évoluer vers la perforation et le sepsis.',
    physiopathologie:
      '## Mécanismes\n- Immaturité intestinale, ischémie, colonisation bactérienne anormale, alimentation entérale (lait artificiel surtout)\n- Pneumatose intestinale (gaz dans la paroi), nécrose, perforation, péritonite\n\n## Facteurs de risque\n- **Prématurité**, faible poids, asphyxie, polyglobulie, cardiopathies, augmentation rapide des volumes de lait, lait artificiel\n- Facteur protecteur : **lait maternel**',
    diagnostic:
      '## Clinique\n- **Distension abdominale**, intolérance alimentaire, **résidus gastriques** (bilieux), vomissements\n- **Rectorragies** ou sang dans les selles\n- Signes généraux : apnées, bradycardie, léthargie, instabilité thermique, choc\n- Paroi abdominale érythémateuse ou violacée (perforation, péritonite)\n\n## Examens\n- **Radiographie de l’abdomen** : distension, **pneumatose intestinale**, gaz portal, pneumopéritoine (perforation)\n- NFS (thrombopénie), CRP, hémocultures, glycémie, ionogramme, gaz du sang (acidose)',
    examens: [
      ['confirmation', 'abdomen-sans-preparation', 'Pneumatose, pneumopéritoine.'],
      ['premiere_intention', 'nfs', 'Thrombopénie, neutropénie.'],
      ['premiere_intention', 'crp', 'Inflammation.'],
      ['premiere_intention', 'hemocultures', 'Sepsis.'],
      ['gravite', 'gaz-du-sang', 'Acidose métabolique.'],
      ['premiere_intention', 'glycemie', 'Hypo- ou hyperglycémie.'],
      ['premiere_intention', 'ionogramme', 'Troubles ioniques.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Sepsis avec iléus (souvent associé).'],
      ['Malrotation avec volvulus', 'Vomissements bilieux brutaux : urgence chirurgicale.'],
      ['Occlusion néonatale (atrésie, Hirschsprung)', 'Retard d’émission du méconium.'],
      ['maladie-hemorragique-du-nouveau-ne', 'Saignement digestif sans distension.'],
    ],
    etiologies:
      '## Terrain\n- Prématuré < 32 SA, faible poids, alimentation artificielle, asphyxie, polyglobulie',
    principes: [
      [
        'Mise au repos digestif',
        'Arrêter l’agression.',
        '- **Arrêt de l’alimentation** 7 à 14 jours selon la gravité, **sonde gastrique** en aspiration\n- **Perfusion** (glucosé avec électrolytes), correction de l’acidose et des troubles ioniques\n- Surveillance du périmètre abdominal, des constantes, de la diurèse',
      ],
      [
        'Antibiotiques',
        'Traiter l’infection.',
        '- **Ampicilline** 50 mg/kg toutes les 12 h (1re semaine) + **gentamicine** 5 mg/kg/24 h (3 mg/kg si faible poids, 1re semaine) + **métronidazole** 7,5 mg/kg toutes les 12 h, 7 à 14 jours\n- Remplissage, transfusion de plaquettes ou de sang si besoin',
      ],
      [
        'Chirurgie et prévention',
        'Traiter la perforation.',
        '- **Pneumopéritoine** ou dégradation : avis chirurgical (drainage péritonéal, résection)\n- Reprise progressive de l’alimentation au **lait maternel**\n- Prévention : lait maternel, augmentation prudente des volumes chez le prématuré',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Antibiothérapie'],
      ['gentamicine', 'premiere', 'Antibiothérapie'],
      ['metronidazole', 'premiere', 'Anaérobies'],
      ['glucose-10', 'premiere', 'Perfusion'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Perforation et péritonite',
        fiche: 'peritonite-aigue',
        description: 'Nécrose transmurale.',
        traitement: '- Chirurgie',
        clinique: '- Paroi violacée, choc',
        paraclinique: '- Pneumopéritoine',
      },
      {
        nom: 'Sepsis et choc',
        fiche: 'sepsis-neonatal',
        description: 'Translocation bactérienne.',
        traitement: '- Antibiotiques, réanimation',
        clinique: '- Instabilité',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Sténose intestinale',
        description: 'Séquelle cicatricielle.',
        traitement: '- Chirurgie',
        clinique: '- Occlusion secondaire',
        paraclinique: '- Opacification',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 15 à 30 %, plus élevée chez le grand prématuré et en cas de perforation',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Distension abdominale', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Rectorragies', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Arrêt de l’alimentation, transfert immédiat',
        '- Prématuré avec ventre distendu ou sang dans les selles',
      ],
      hgr: ['- Sonde gastrique, perfusion, antibiotiques, radiographie', '- Perforation'],
      tert: ['- Réanimation néonatale, chirurgie pédiatrique', ''],
    },
    alertes: { 'sepsis-neonatal-urgence': 'Prématuré avec distension abdominale, apnées ou instabilité' },
    formes: [
      {
        nom: 'ECUN confirmée',
        type: 'commune',
        description: 'Pneumatose.',
        terrain: '- Prématuré alimenté',
        fonctionnels: '- Résidus gastriques, vomissements',
        generaux: '- Apnées',
        physiques: '- Distension abdominale',
        paraclinique: '- Pneumatose intestinale',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
      {
        nom: 'ECUN perforée',
        type: 'gravite',
        description: 'Péritonite.',
        terrain: '',
        fonctionnels: '',
        generaux: '- Choc, acidose',
        physiques: '- Paroi érythémateuse',
        paraclinique: '- Pneumopéritoine',
        etiologies: '',
        syndromes: ['syndrome-d-irritation-peritoneale', 'syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Polyglobulie
  {
    ...NEO,
    slug: 'polyglobulie-neonatale',
    nom: 'Polyglobulie néonatale',
    resume:
      'Hématocrite veineux > 65 % chez le nouveau-né (retard de croissance, mère diabétique, clampage tardif excessif, transfusion fœto-fœtale) : souvent asymptomatique, sinon léthargie, cyanose, détresse respiratoire, hypoglycémie, ictère ; hydratation et alimentation, surveillance de la glycémie ; exsanguinotransfusion partielle au sérum salé si symptomatique ou hématocrite > 70 %.',
    definition:
      'Hématocrite veineux supérieur à 65 % (ou hémoglobine > 22 g/dL) chez le nouveau-né, responsable d’une hyperviscosité sanguine.',
    physiopathologie:
      '## Mécanismes\n- **Hypoxie fœtale chronique** (retard de croissance, pré-éclampsie, mère diabétique, tabac) → érythropoïèse accrue\n- **Transfusion placento-fœtale** (transfusion fœto-fœtale, traite du cordon)\n- Hyperviscosité : hypoperfusion des organes, hypoglycémie, ictère, thrombopénie, entérocolite',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique**\n- Érythrose (aspect pléthorique), léthargie, hypotonie, trémulations, convulsions\n- Cyanose, détresse respiratoire, difficultés de succion, **hypoglycémie**, **ictère**\n\n## Examens\n- **Hématocrite veineux** (le capillaire surestime) : > 65 %\n- **Glycémie**, bilirubine, plaquettes, calcémie',
    examens: [
      ['confirmation', 'nfs', 'Hématocrite veineux > 65 %.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
    ],
    scores: [],
    differentiels: [
      ['nouveau-ne-mere-diabetique', 'Cause fréquente.'],
      ['cardiopathies-congenitales', 'Cyanose d’origine cardiaque.'],
      ['detresse-respiratoire-nouveau-ne', 'Autres causes de détresse.'],
    ],
    etiologies:
      '## Facteurs\n- Retard de croissance intra-utérin, mère diabétique ou hypertendue, post-terme, trisomie 21, transfusion fœto-fœtale',
    principes: [
      [
        'Forme asymptomatique',
        'Surveiller.',
        '- Alimentation précoce et suffisante, hydratation\n- **Glycémie** répétée, surveillance de l’ictère\n- Contrôle de l’hématocrite',
      ],
      [
        'Forme symptomatique ou hématocrite > 70 %',
        'Réduire la viscosité.',
        '- **Exsanguinotransfusion partielle** au **sérum salé 0,9 %** : volume (mL) = poids × 80–90 mL/kg × (Ht observé − 55) / Ht observé\n- Traitement de l’hypoglycémie (**glucose 10 %**) et de l’ictère (photothérapie)',
      ],
    ],
    molecules: [
      ['chlorure-de-sodium-0-9', 'premiere', 'Exsanguinotransfusion partielle'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Consommation accrue.',
        traitement: '- Glucose 10 %',
        clinique: '- Trémulations',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Ictère',
        fiche: 'ictere-neonatal',
        description: 'Hémolyse des hématies en excès.',
        traitement: '- Photothérapie',
        clinique: '- Ictère',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Entérocolite ulcéro-nécrosante',
        fiche: 'enterocolite-ulcero-necrosante',
        description: 'Hypoperfusion digestive.',
        traitement: '- Repos digestif, antibiotiques',
        clinique: '- Distension',
        paraclinique: '- Radiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Bon le plus souvent ; séquelles neurologiques possibles dans les formes symptomatiques sévères',
    urgences: [],
    symptomes: [
      ['Cyanose', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Refus de téter', 'frequent'],
      ['Ictère', 'frequent'],
      ['Tremblements', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Alimentation précoce, glycémie, orientation', '- Nouveau-né pléthorique symptomatique'],
      hgr: ['- Hématocrite, exsanguinotransfusion partielle', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Polyglobulie asymptomatique',
        type: 'commune',
        description: 'Découverte biologique.',
        terrain: '- Retard de croissance, mère diabétique',
        fonctionnels: '',
        generaux: '',
        physiques: '- Érythrose',
        paraclinique: '- Ht 65–70 %',
        etiologies: '- Hypoxie fœtale',
        syndromes: [],
      },
      {
        nom: 'Polyglobulie symptomatique',
        type: 'gravite',
        description: 'Hyperviscosité.',
        terrain: '',
        fonctionnels: '- Mauvaise succion',
        generaux: '- Léthargie',
        physiques: '- Cyanose, détresse respiratoire',
        paraclinique: '- Ht > 70 %, hypoglycémie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Maladie hémorragique du NN
  {
    ...NEO,
    slug: 'maladie-hemorragique-du-nouveau-ne',
    nom: 'Maladie hémorragique du nouveau-né',
    resume:
      'Hémorragie par carence en vitamine K (saignements digestifs, ombilicaux, cutanés, après circoncision, intracrâniens), évitable par la vitamine K1 1 mg IM à la naissance pour tous les nouveau-nés ; forme tardive (2–12 semaines) chez l’enfant allaité exclusivement sans prophylaxie : hémorragie intracrânienne ; traitement : vitamine K1 1 mg IV ou SC, plasma frais congelé si saignement grave.',
    definition:
      'Syndrome hémorragique du nouveau-né et du nourrisson lié à un déficit en facteurs de coagulation vitamine K-dépendants (II, VII, IX, X).',
    physiopathologie:
      '## Mécanismes\n- Faibles réserves en vitamine K à la naissance, faible passage placentaire, lait maternel pauvre en vitamine K, flore intestinale immature\n\n## Formes\n- **Précoce** (< 24 h) : médicaments maternels (antiépileptiques, antituberculeux, antivitamines K)\n- **Classique** (J2–J7) : saignements digestifs, ombilicaux, cutanés\n- **Tardive** (2–12 semaines) : allaitement exclusif sans prophylaxie, cholestase, malabsorption : **hémorragies intracrâniennes** fréquentes',
    diagnostic:
      '## Clinique\n- Saignement du cordon, **hématémèse**, **méléna**, ecchymoses, saignements aux points de ponction ou après **circoncision**\n- Hémorragie intracrânienne : pâleur, convulsions, fontanelle bombée, léthargie\n- Rechercher l’absence de vitamine K à la naissance (accouchement à domicile)\n\n## Examens\n- **TP (INR) et TCA allongés**, plaquettes et fibrinogène normaux\n- NFS (anémie), groupage\n- Échographie transfontanellaire ou scanner si signes neurologiques\n- Test de l’Apt (sang maternel dégluti) si hématémèse chez un enfant en bon état',
    examens: [
      ['confirmation', 'hemostase', 'TP et TCA allongés, plaquettes normales.'],
      ['premiere_intention', 'nfs', 'Anémie, plaquettes normales.'],
      ['premiere_intention', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'echographie-transfontanellaire', 'Hémorragie intracrânienne.'],
    ],
    scores: [],
    differentiels: [
      ['Sang maternel dégluti', 'Enfant en bon état, test de l’Apt.'],
      ['hemophilie', 'TCA allongé isolé, garçon.'],
      ['sepsis-neonatal', 'CIVD : plaquettes et fibrinogène bas.'],
      ['Thrombopénie néonatale', 'Plaquettes basses (allo-immune, infection).'],
    ],
    etiologies:
      '## Facteurs de risque\n- Absence de vitamine K à la naissance (accouchement à domicile), allaitement exclusif, médicaments maternels, diarrhée prolongée, cholestase',
    principes: [
      [
        'Prévention',
        'Pour tous les nouveau-nés.',
        '- **Vitamine K1** **1 mg IM** à la naissance (**0,5 mg** si < 1 500 g)\n- Rattrapage chez tout nouveau-né non injecté (accouchement à domicile)',
      ],
      [
        'Traitement',
        'Arrêter le saignement.',
        '- **Vitamine K1** 1 mg IV lente ou SC (pas IM en cas de saignement actif), correction en quelques heures\n- Saignement grave ou intracrânien : **plasma frais congelé** 10–20 mL/kg, transfusion de culot si anémie\n- Hémorragie intracrânienne : soins de soutien, avis neurochirurgical',
      ],
    ],
    molecules: [['vitamine-k1-phytomenadione', 'premiere', 'Prévention et traitement']],
    complications: [
      {
        nom: 'Hémorragie intracrânienne',
        fiche: 'convulsions-neonatales',
        description: 'Forme tardive.',
        traitement: '- Vitamine K, plasma, soins neurologiques',
        clinique: '- Convulsions, fontanelle bombée',
        paraclinique: '- Échographie transfontanellaire',
      },
      {
        nom: 'Anémie aiguë',
        fiche: 'transfusion-chez-l-enfant',
        description: 'Hémorragie abondante.',
        traitement: '- Transfusion',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hb basse',
      },
      {
        nom: 'Séquelles neurologiques',
        fiche: 'paralysie-cerebrale',
        description: 'Après hémorragie cérébrale.',
        traitement: '- Rééducation',
        clinique: '- Retard moteur',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent sous vitamine K pour les formes classiques ; mortalité et séquelles élevées des hémorragies intracrâniennes',
    urgences: [],
    symptomes: [
      ['Hémorragies', 'tres_frequent'],
      ['Méléna', 'frequent'],
      ['Hématémèse', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Fontanelle bombée', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: [
        '- Vitamine K à la naissance et en rattrapage, vitamine K si saignement, transfert',
        '- Tout saignement du nouveau-né',
      ],
      hgr: ['- Vitamine K IV, plasma, transfusion', '- Hémorragie intracrânienne'],
      tert: ['- Néonatologie, neurochirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme classique',
        type: 'commune',
        description: 'J2–J7.',
        terrain: '- Nouveau-né sans vitamine K',
        fonctionnels: '- Méléna, saignement du cordon',
        generaux: '',
        physiques: '- Ecchymoses',
        paraclinique: '- TP allongé',
        etiologies: '- Carence en vitamine K',
        syndromes: ['syndrome-hemorragique'],
      },
      {
        nom: 'Forme tardive avec hémorragie intracrânienne',
        type: 'gravite',
        description: '2–12 semaines.',
        terrain: '- Allaitement exclusif sans prophylaxie',
        fonctionnels: '- Convulsions, vomissements',
        generaux: '- Pâleur',
        physiques: '- Fontanelle bombée',
        paraclinique: '- Hémorragie à l’échographie',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== Traumatismes obstétricaux
  {
    ...NEO,
    slug: 'traumatismes-obstetricaux-nouveau-ne',
    nom: 'Traumatismes obstétricaux du nouveau-né',
    resume:
      'Lésions liées à l’accouchement (macrosomie, dystocie des épaules, présentation du siège, extraction instrumentale) : bosse sérosanguine et céphalhématome (bénins), hématome sous-galéal (urgence hémorragique), fracture de la clavicule, paralysie du plexus brachial (Erb), paralysie faciale, fractures de l’humérus ou du fémur ; examen systématique du nouveau-né ; surveillance, immobilisation, kinésithérapie, transfusion si hématome sous-galéal.',
    definition:
      'Lésions physiques du nouveau-né survenant au cours du travail ou de l’accouchement, liées aux forces mécaniques exercées sur le fœtus.',
    physiopathologie:
      '## Facteurs de risque\n- **Macrosomie** (mère diabétique), **dystocie des épaules**, présentation du siège, travail prolongé, disproportion fœto-pelvienne\n- Extraction par **ventouse** ou forceps, manœuvres obstétricales, prématurité\n\n## Lésions\n- Crâne : bosse sérosanguine, céphalhématome, **hématome sous-galéal** (sous l’aponévrose, peut contenir une grande partie de la masse sanguine), fractures\n- Nerfs : **plexus brachial** (C5–C6 : Erb), nerf facial\n- Os : **clavicule** (la plus fréquente), humérus, fémur',
    diagnostic:
      '## Clinique\n- **Bosse sérosanguine** : œdème mou, dépasse les sutures, disparaît en quelques jours\n- **Céphalhématome** : tuméfaction limitée à un os (ne dépasse pas les sutures), apparaît en quelques heures\n- **Hématome sous-galéal** : tuméfaction fluctuante diffuse, croissante, pâleur, tachycardie, **choc**\n- **Fracture de clavicule** : crépitation, réflexe de Moro asymétrique\n- **Paralysie d’Erb** : bras le long du corps en rotation interne, poignet fléchi (« serveur »)\n- Paralysie faciale : asymétrie lors des pleurs\n\n## Examens\n- NFS, hématocrite répétés (sous-galéal), bilirubine (résorption des hématomes)\n- Radiographie (fractures)',
    examens: [
      ['premiere_intention', 'nfs', 'Anémie (hématome sous-galéal).'],
      ['premiere_intention', 'radiographie-osseuse', 'Fractures.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère de résorption.'],
      ['gravite', 'hemostase', 'Coagulopathie associée.'],
      ['gravite', 'echographie-transfontanellaire', 'Hémorragie intracrânienne.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-hemorragique-du-nouveau-ne', 'Saignements diffus, TP allongé.'],
      ['arthrite-septique', 'Pseudo-paralysie fébrile (ostéoarthrite).'],
      ['syphilis-congenitale', 'Pseudo-paralysie de Parrot.'],
      ['Encéphalocèle', 'Masse pulsatile, défect osseux.'],
    ],
    etiologies: '## Facteurs\n- Macrosomie, mère diabétique, dystocie, siège, ventouse ou forceps',
    principes: [
      [
        'Lésions bénignes',
        'Rassurer et surveiller.',
        '- Bosse sérosanguine, céphalhématome : abstention, **ne pas ponctionner**, surveiller l’ictère\n- **Fracture de clavicule** : manipulation douce, épingler la manche au vêtement 1 à 2 semaines, antalgique (paracétamol)',
      ],
      [
        'Hématome sous-galéal',
        'Urgence.',
        '- Surveillance rapprochée (périmètre crânien, pouls, hématocrite), **vitamine K**, **remplissage**, **transfusion** (sang, plasma) si choc ou anémie',
      ],
      [
        'Lésions nerveuses',
        'Rééducation.',
        '- **Plexus brachial** : positionnement, kinésithérapie douce dès 1–2 semaines ; avis chirurgical si absence de récupération à 3–6 mois\n- **Paralysie faciale** : protection de l’œil, récupération spontanée en quelques semaines\n- Fracture de l’humérus ou du fémur : immobilisation',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['vitamine-k1-phytomenadione', 'premiere', 'Prévention des saignements'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-enfant',
        description: 'Hématome sous-galéal.',
        traitement: '- Remplissage, transfusion',
        clinique: '- Pâleur, tachycardie',
        paraclinique: '- Hématocrite',
      },
      {
        nom: 'Ictère',
        fiche: 'ictere-neonatal',
        description: 'Résorption des hématomes.',
        traitement: '- Photothérapie',
        clinique: '- Ictère',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Paralysie définitive du membre supérieur',
        description: 'Avulsion du plexus.',
        traitement: '- Chirurgie nerveuse, rééducation',
        clinique: '- Absence de récupération',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour la plupart des lésions ; paralysie d’Erb récupérant dans 80–90 % des cas ; mortalité possible de l’hématome sous-galéal méconnu',
    urgences: [],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Paralysie flasque', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
      ['Ictère', 'occasionnel'],
      ['Déformation d’un membre', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Examen systématique du nouveau-né, conseils, orientation',
        '- Tuméfaction crânienne croissante, pâleur, paralysie',
      ],
      hgr: ['- Surveillance, transfusion, immobilisation, kinésithérapie', ''],
      tert: ['- Néonatologie, chirurgie des nerfs périphériques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fracture de la clavicule',
        type: 'commune',
        description: 'Lésion la plus fréquente.',
        terrain: '- Macrosomie, dystocie des épaules',
        fonctionnels: '- Pleurs à la mobilisation',
        generaux: '',
        physiques: '- Crépitation, Moro asymétrique',
        paraclinique: '- Radiographie',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Paralysie du plexus brachial',
        type: 'topographique',
        description: 'Paralysie d’Erb (C5–C6).',
        terrain: '- Dystocie des épaules',
        fonctionnels: '',
        generaux: '',
        physiques: '- Bras en rotation interne, Moro asymétrique',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hématome sous-galéal',
        type: 'gravite',
        description: 'Urgence hémorragique.',
        terrain: '- Ventouse',
        fonctionnels: '',
        generaux: '- Pâleur, tachycardie',
        physiques: '- Tuméfaction crânienne diffuse croissante',
        paraclinique: '- Chute de l’hématocrite',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Malformations congénitales
  {
    ...NEO,
    slug: 'malformations-congenitales-majeures',
    nom: 'Malformations congénitales majeures',
    resume:
      'Malformations visibles ou à dépister dès la naissance : spina bifida et myéloméningocèle, hydrocéphalie, fentes labio-palatines, atrésie de l’œsophage, imperforation anale, laparoschisis et omphalocèle, pied bot, trisomie 21, cardiopathies ; gestes immédiats (protection des défects, sonde gastrique, à jeun, chaleur), orientation chirurgicale ; prévention par l’acide folique péri-conceptionnel ; soutien de la famille.',
    definition:
      'Anomalies structurelles présentes à la naissance, ayant des conséquences médicales, chirurgicales, fonctionnelles ou esthétiques importantes.',
    physiopathologie:
      '## Causes\n- Génétiques (trisomies), environnementales (carence en **acide folique**, diabète maternel, alcool, médicaments tératogènes : valproate, isotrétinoïne), infections (rubéole, syphilis, Zika), âge maternel\n\n## Principales malformations\n- **Défauts du tube neural** : spina bifida, myéloméningocèle, anencéphalie, encéphalocèle\n- **Hydrocéphalie** ; **fentes labio-palatines**\n- **Digestives** : atrésie de l’œsophage, atrésies intestinales, **imperforation anale**, **laparoschisis**, **omphalocèle**, Hirschsprung\n- **Pied bot varus équin**, luxation de hanche ; cardiopathies ; anomalies urogénitales',
    diagnostic:
      '## Examen systématique du nouveau-né\n- Crâne (périmètre crânien, fontanelle), dos (masse lombaire), face (fente), bouche (palais), anus (perméabilité), organes génitaux, membres et pieds, hanches, abdomen\n- **Atrésie de l’œsophage** : hypersalivation, toux et cyanose à la tétée, impossibilité de passer une sonde gastrique\n- **Imperforation anale** : absence d’anus, pas de méconium\n- Trisomie 21 : hypotonie, faciès, pli palmaire unique (rechercher une cardiopathie)\n\n## Examens\n- Radiographie (sonde enroulée dans le cul-de-sac œsophagien), échographie transfontanellaire, cardiaque et rénale, glycémie',
    examens: [
      ['premiere_intention', 'radiographie-thoracique', 'Atrésie de l’œsophage (sonde).'],
      ['deuxieme_intention', 'echographie-transfontanellaire', 'Hydrocéphalie.'],
      ['deuxieme_intention', 'echocardiographie', 'Cardiopathie associée.'],
      ['deuxieme_intention', 'echographie-renale', 'Malformations urinaires.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['deuxieme_intention', 'abdomen-sans-preparation', 'Occlusion néonatale.'],
    ],
    scores: [],
    differentiels: [
      ['traumatismes-obstetricaux-nouveau-ne', 'Lésions acquises lors de l’accouchement.'],
      ['cardiopathies-congenitales', 'Cyanose, souffle.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Carence en folates, diabète maternel, médicaments tératogènes, infections congénitales, consanguinité, âge maternel élevé',
    principes: [
      [
        'Gestes immédiats',
        'Protéger et stabiliser.',
        '- **Myéloméningocèle** : compresse stérile humide (sérum salé) et film, position ventrale, pas de pression ; antibiotiques si rupture ; chirurgie dans les 48–72 h\n- **Laparoschisis** : couvrir les anses (film plastique propre), enfant sur le côté, sonde gastrique, perfusion, chaleur ; transfert urgent\n- **Atrésie de l’œsophage** : à jeun, aspiration continue du cul-de-sac, position proclive, perfusion\n- **Imperforation anale** : à jeun, sonde gastrique, perfusion, chirurgie (colostomie)',
      ],
      [
        'Prise en charge spécifique',
        'Orienter.',
        '- **Fentes labio-palatines** : alimentation adaptée (tasse, cuillère, lait maternel exprimé), chirurgie (lèvre vers 3 mois, palais vers 9–12 mois)\n- **Pied bot** : méthode de Ponseti (plâtres successifs) dès les premières semaines\n- **Hydrocéphalie** : dérivation ventriculo-péritonéale\n- Trisomie 21 : bilan cardiaque, thyroïdien, suivi du développement',
      ],
      [
        'Prévention et soutien',
        'Réduire l’incidence.',
        '- **Acide folique** 0,4 mg/j (5 mg si antécédent) avant la conception et au 1er trimestre ; contrôle du diabète, éviter les tératogènes\n- Soutien psychologique des parents, lutte contre l’abandon et la stigmatisation',
      ],
    ],
    molecules: [
      ['acide-folique', 'premiere', 'Prévention des défauts du tube neural'],
      ['glucose-10', 'adjuvant', 'Perfusion des nouveau-nés à jeun'],
      ['ampicilline', 'adjuvant', 'Myéloméningocèle rompue'],
      ['gentamicine', 'adjuvant', 'Myéloméningocèle rompue'],
    ],
    complications: [
      {
        nom: 'Méningite et ventriculite',
        fiche: 'meningite-neonatale',
        description: 'Myéloméningocèle rompue.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Fièvre, fontanelle bombée',
        paraclinique: '- LCR',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-enfant',
        description: 'Atrésie de l’œsophage, fentes.',
        traitement: '- Antibiotiques, aspiration',
        clinique: '- Détresse respiratoire',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Hypothermie et déshydratation',
        fiche: 'hypothermie-neonatale',
        description: 'Laparoschisis.',
        traitement: '- Réchauffement, perfusion',
        clinique: '- Froideur',
        paraclinique: '',
      },
      {
        nom: 'Malnutrition',
        fiche: 'retard-staturo-ponderal',
        description: 'Difficultés d’alimentation.',
        traitement: '- Soutien nutritionnel',
        clinique: '- Mauvaise prise de poids',
        paraclinique: '- Courbe de poids',
      },
    ],
    evolution:
      '## Pronostic\n- Très variable ; nettement amélioré par la prise en charge précoce et l’accès à la chirurgie pédiatrique',
    urgences: [],
    symptomes: [
      ['Hypersalivation', 'occasionnel'],
      ['Distension abdominale', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
      ['Refus de téter', 'occasionnel'],
      ['Paralysie flasque', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Nelson Textbook of Pediatrics',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Examen systématique, gestes de protection, transfert', '- Toute malformation majeure'],
      hgr: ['- Stabilisation, alimentation adaptée, orientation chirurgicale', ''],
      tert: ['- Chirurgie pédiatrique, neurochirurgie, orthopédie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fente labio-palatine',
        type: 'commune',
        description: 'Malformation fréquente.',
        terrain: '',
        fonctionnels: '- Difficultés de succion',
        generaux: '',
        physiques: '- Fente de la lèvre et/ou du palais',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Myéloméningocèle',
        type: 'gravite',
        description: 'Défaut du tube neural.',
        terrain: '- Carence en folates',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse lombaire, paralysie des membres inférieurs',
        paraclinique: '- Hydrocéphalie associée',
        etiologies: '- Carence en acide folique',
        syndromes: [],
      },
      {
        nom: 'Malformation digestive chirurgicale',
        type: 'gravite',
        description: 'Urgence néonatale.',
        terrain: '',
        fonctionnels: '- Hypersalivation, vomissements, absence de méconium',
        generaux: '',
        physiques: '- Abdomen distendu, anus absent',
        paraclinique: '- Radiographie',
        etiologies: '',
        syndromes: ['syndrome-occlusif'],
      },
    ],
  },

  // =================================================================== NN de mère diabétique
  {
    ...NEO,
    slug: 'nouveau-ne-mere-diabetique',
    nom: 'Nouveau-né de mère diabétique',
    resume:
      'Nouveau-né de mère diabétique (préexistant ou gestationnel) : macrosomie, traumatismes obstétricaux, hypoglycémie dans les premières heures, détresse respiratoire, polyglobulie, hypocalcémie, ictère, cardiomyopathie, malformations ; mise au sein dans l’heure, glycémie à 1–2 h puis avant chaque tétée pendant 24–48 h, glucose 10 % si hypoglycémie persistante ou symptomatique ; examen complet.',
    definition:
      'Nouveau-né exposé in utero à une hyperglycémie maternelle (diabète de type 1, de type 2 ou gestationnel), à risque de complications métaboliques, respiratoires, traumatiques et malformatives.',
    physiopathologie:
      '## Mécanismes\n- Hyperglycémie maternelle → hyperglycémie fœtale → **hyperinsulinisme fœtal**\n- **Macrosomie**, **hypoglycémie** néonatale à l’arrêt brutal de l’apport glucosé maternel\n- Retard de maturation pulmonaire (surfactant), polyglobulie (hypoxie), hypocalcémie, hypertrophie septale\n- Malformations si diabète mal équilibré en début de grossesse (cardiaques, tube neural, régression caudale)',
    diagnostic:
      '## Clinique\n- Macrosomie (poids > 4 kg), faciès pléthorique\n- Hypoglycémie : trémulations, hypotonie, apnées, convulsions, ou **asymptomatique**\n- Détresse respiratoire, ictère, lésions obstétricales (clavicule, plexus brachial)\n- Souffle cardiaque, malformations\n\n## Examens\n- **Glycémie** à 1–2 h de vie puis avant les tétées pendant 24–48 h\n- Hématocrite, calcémie, bilirubine ; échocardiographie si souffle ou détresse',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'nfs', 'Polyglobulie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['deuxieme_intention', 'echocardiographie', 'Cardiomyopathie, malformation.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Détresse respiratoire.'],
    ],
    scores: [],
    differentiels: [
      ['hypoglycemie-neonatale', 'Autres causes d’hypoglycémie.'],
      ['sepsis-neonatal', 'Infection.'],
      ['maladie-des-membranes-hyalines', 'Détresse respiratoire.'],
    ],
    etiologies:
      '## Terrain\n- Mère diabétique de type 1 ou 2, diabète gestationnel, surtout si mal équilibré',
    principes: [
      [
        'Prévention de l’hypoglycémie',
        'Alimenter tôt.',
        '- **Mise au sein dans la première heure**, tétées fréquentes (toutes les 2–3 h), peau à peau\n- **Glycémie** à 1–2 h puis avant les tétées pendant 24–48 h\n- Hypoglycémie asymptomatique : tétée ou lait maternel exprimé, contrôle',
      ],
      [
        'Hypoglycémie persistante ou symptomatique',
        'Corriger.',
        '- **Glucose 10 %** 2 mL/kg IV puis perfusion 60–80 mL/kg/j, sevrage progressif\n- Voir *Hypoglycémie néonatale*',
      ],
      [
        'Autres complications',
        'Rechercher et traiter.',
        '- Détresse respiratoire : oxygène, CPAP ; polyglobulie, hypocalcémie, ictère : voir fiches\n- Examen à la recherche de traumatismes et de malformations',
      ],
    ],
    molecules: [
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['gluconate-de-calcium', 'adjuvant', 'Hypocalcémie symptomatique'],
      ['oxygene', 'adjuvant', 'Détresse respiratoire'],
    ],
    complications: [
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Hyperinsulinisme.',
        traitement: '- Alimentation, glucose 10 %',
        clinique: '- Trémulations, convulsions',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Traumatismes obstétricaux',
        fiche: 'traumatismes-obstetricaux-nouveau-ne',
        description: 'Macrosomie.',
        traitement: '- Selon la lésion',
        clinique: '- Fracture, paralysie',
        paraclinique: '',
      },
      {
        nom: 'Polyglobulie et hypocalcémie',
        fiche: 'polyglobulie-neonatale',
        description: 'Hypoxie fœtale.',
        traitement: '- Selon les fiches',
        clinique: '',
        paraclinique: '- Hématocrite, calcémie',
      },
      {
        nom: 'Détresse respiratoire',
        fiche: 'maladie-des-membranes-hyalines',
        description: 'Retard de maturation.',
        traitement: '- CPAP, oxygène',
        clinique: '- Polypnée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si l’hypoglycémie est prévenue et traitée ; risque ultérieur d’obésité et de diabète',
    urgences: [],
    symptomes: [
      ['Tremblements', 'frequent'],
      ['Hypotonie', 'occasionnel'],
      ['Tachypnée', 'occasionnel'],
      ['Ictère', 'frequent'],
      ['Convulsions', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'ADA — Standards of Care in Diabetes',
    ],
    niveaux: {
      cs: [
        '- Allaitement précoce, glycémie, orientation',
        '- Hypoglycémie persistante, détresse respiratoire',
      ],
      hgr: ['- Surveillance glycémique, glucose IV, bilan', ''],
      tert: ['- Néonatologie, cardiologie pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Nouveau-né macrosome de mère diabétique',
        type: 'commune',
        description: 'Forme fréquente.',
        terrain: '- Mère diabétique',
        fonctionnels: '',
        generaux: '',
        physiques: '- Poids > 4 kg, pléthore',
        paraclinique: '- Glycémie basse précoce',
        etiologies: '- Hyperinsulinisme fœtal',
        syndromes: [],
      },
      {
        nom: 'Forme compliquée',
        type: 'gravite',
        description: 'Hypoglycémie sévère, détresse.',
        terrain: '- Diabète mal équilibré',
        fonctionnels: '- Apnées, convulsions',
        generaux: '',
        physiques: '- Détresse respiratoire, souffle',
        paraclinique: '- Hypoglycémie, hypocalcémie',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Difficultés d'alimentation
  {
    ...NEO,
    slug: 'difficultes-alimentation-nouveau-ne',
    nom: 'Difficultés d’alimentation du nouveau-né',
    resume:
      'Problèmes de mise au sein et d’alimentation des premiers jours (mauvaise position et prise du sein, engorgement, crevasses, faible poids, prématurité, fente palatine, ou nouveau-né malade) : évaluer la tétée, rechercher les signes de danger (refus de téter = sepsis possible), perte de poids > 10 % ; soutien à l’allaitement exclusif, lait exprimé à la tasse, volumes adaptés au poids ; pas de biberon ni d’eau.',
    definition:
      'Difficultés d’alimentation du nouveau-né au cours du premier mois, liées à la technique d’allaitement, à l’enfant (prématurité, malformation, maladie) ou à la mère.',
    physiopathologie:
      '## Causes\n- **Technique** : mauvaise position, mauvaise prise du sein, tétées trop espacées, compléments d’eau ou de lait artificiel\n- **Enfant** : prématurité, faible poids, ictère, **sepsis**, hypoglycémie, asphyxie, fente labio-palatine, frein de langue, candidose buccale\n- **Mère** : engorgement, crevasses, mastite, fatigue, maladie, VIH, croyances\n\n## Conséquences\n- Perte de poids excessive, déshydratation (hypernatrémie), hypoglycémie, ictère',
    diagnostic:
      '## Évaluation (PCIME)\n- **Signes de danger** : ne tète plus, convulsions, léthargie, fièvre ou hypothermie, respiration rapide → **sepsis** jusqu’à preuve du contraire\n- **Observer une tétée** : position (corps de l’enfant contre la mère), **prise du sein** (bouche grande ouverte, lèvre inférieure retournée, aréole plus visible au-dessus), succion efficace\n- Nombre de tétées (8–12/24 h), nombre de couches mouillées (≥ 6/j après J5), selles\n- **Poids** : perte > 10 % du poids de naissance ou absence de reprise à J10–14\n- Bouche (fente, muguet), seins de la mère',
    examens: [
      ['premiere_intention', 'anthropometrie', 'Courbe de poids.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère.'],
      ['gravite', 'ionogramme', 'Déshydratation hypernatrémique.'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Refus de téter avec signes de danger.'],
      ['hypoglycemie-neonatale', 'Léthargie, trémulations.'],
      ['malformations-congenitales-majeures', 'Fente palatine, atrésie de l’œsophage.'],
      ['ictere-neonatal', 'Somnolence par ictère important.'],
    ],
    etiologies:
      '## Facteurs\n- Primipare, césarienne, séparation mère-enfant, compléments précoces, prématurité, croyances (rejet du colostrum)',
    principes: [
      [
        'Soutien à l’allaitement',
        'Allaitement exclusif efficace.',
        '- Mise au sein dans l’heure, **peau à peau**, tétées à la demande (8–12/24 h)\n- Corriger la **position** et la **prise du sein**\n- Pas d’eau, pas de biberon ni de tétine ; donner le colostrum\n- Engorgement, crevasses : tétées fréquentes, expression manuelle',
      ],
      [
        'Enfant qui ne peut pas téter efficacement',
        'Assurer les apports.',
        '- **Lait maternel exprimé** donné à la **tasse** ou à la cuillère (ou par sonde chez le prématuré)\n- Volumes : 60–80 mL/kg/j à J1, augmenter de 20–30 mL/kg/j jusqu’à 150–180 mL/kg/j (prématuré)\n- Fente palatine : tasse, position semi-assise',
      ],
      [
        'Suivi',
        'Vérifier la croissance.',
        '- Pesée régulière ; retour immédiat si signes de danger\n- Traiter la candidose buccale (nystatine) et les problèmes maternels (mastite)\n- Mère VIH positive : allaitement exclusif sous ARV selon le protocole national',
      ],
    ],
    molecules: [
      ['nystatine', 'adjuvant', 'Muguet du nouveau-né'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Déshydratation hypernatrémique',
        fiche: 'deshydratation-severe-enfant',
        description: 'Apports insuffisants.',
        traitement: '- Réhydratation prudente',
        clinique: '- Perte de poids, fièvre de soif',
        paraclinique: '- Natrémie élevée',
      },
      {
        nom: 'Hypoglycémie',
        fiche: 'hypoglycemie-neonatale',
        description: 'Jeûne.',
        traitement: '- Alimentation, glucose',
        clinique: '- Léthargie',
        paraclinique: '- Glycémie',
      },
      {
        nom: 'Ictère d’allaitement insuffisant',
        fiche: 'ictere-neonatal',
        description: 'Faibles apports.',
        traitement: '- Alimentation, photothérapie',
        clinique: '- Ictère',
        paraclinique: '- Bilirubine',
      },
      {
        nom: 'Mastite maternelle',
        fiche: 'mastite-abces-du-sein',
        description: 'Engorgement non traité.',
        traitement: '- Vidange, antibiotiques',
        clinique: '- Sein rouge, fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent avec un soutien adapté ; risque de malnutrition et d’abandon de l’allaitement sans aide',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'tres_frequent'],
      ['Perte de poids', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: [
        '- Observation de la tétée, conseils, lait exprimé à la tasse',
        '- Signes de danger, perte de poids > 10 %',
      ],
      hgr: ['- Bilan, alimentation par sonde, traitement de la cause', ''],
      tert: ['- Néonatologie', ''],
    },
    alertes: { 'sepsis-neonatal-urgence': 'Nouveau-né qui ne tète plus' },
    formes: [
      {
        nom: 'Mauvaise technique d’allaitement',
        type: 'commune',
        description: 'Prise du sein inefficace.',
        terrain: '- Primipare',
        fonctionnels: '- Tétées longues ou inefficaces',
        generaux: '',
        physiques: '- Mauvaise prise du sein',
        paraclinique: '- Perte de poids modérée',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Refus de téter (signe de danger)',
        type: 'gravite',
        description: 'Maladie sous-jacente.',
        terrain: '',
        fonctionnels: '- Ne tète plus',
        generaux: '- Fièvre ou hypothermie',
        physiques: '- Léthargie',
        paraclinique: '',
        etiologies: '- Sepsis, hypoglycémie',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hypocalcémie néonatale
  {
    ...NEO,
    slug: 'hypocalcemie-neonatale',
    nom: 'Hypocalcémie néonatale',
    resume:
      'Calcémie totale < 2 mmol/L (80 mg/L) ou calcium ionisé < 1,1 mmol/L : précoce (J1–J3 : prématuré, asphyxie, mère diabétique) ou tardive (J5–J10 : lait de vache riche en phosphore, hypoparathyroïdie, carence en vitamine D, hypomagnésémie) ; trémulations, hyperexcitabilité, convulsions ; gluconate de calcium 10 % 2 mL/kg IV lent sous surveillance cardiaque si symptomatique, puis entretien ; corriger le magnésium.',
    definition:
      'Diminution du calcium sanguin chez le nouveau-né : calcémie totale < 2 mmol/L (< 1,75 mmol/L chez le prématuré) ou calcium ionisé < 1,1 mmol/L.',
    physiopathologie:
      '## Hypocalcémie précoce (48–72 premières heures)\n- Arrêt de l’apport calcique placentaire, parathyroïdes immatures\n- Prématurité, **asphyxie**, **mère diabétique**, retard de croissance, sepsis\n\n## Hypocalcémie tardive (fin de la 1re semaine)\n- **Lait de vache** ou préparations riches en phosphore, **hypomagnésémie**, carence maternelle en vitamine D, hypoparathyroïdie (syndrome de DiGeorge)',
    diagnostic:
      '## Clinique\n- Souvent asymptomatique (forme précoce)\n- **Trémulations**, hyperexcitabilité, sursauts, hypertonie, **convulsions** (cloniques, focales), apnées, laryngospasme\n- Vomissements, refus de téter\n\n## Examens\n- **Calcémie** (et calcium ionisé si disponible), **magnésémie**, phosphorémie, glycémie\n- ECG : QT allongé\n- Hypocalcémie persistante : parathormone, vitamine D, calcémie maternelle',
    examens: [
      ['confirmation', 'calcemie-magnesemie', 'Calcémie, magnésémie.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie associée.'],
      ['premiere_intention', 'ecg', 'QT long.'],
      ['premiere_intention', 'ionogramme', 'Phosphorémie, natrémie.'],
    ],
    scores: [],
    differentiels: [
      ['hypoglycemie-neonatale', 'Glycémie basse (souvent associée).'],
      ['convulsions-neonatales', 'Autres causes de convulsions.'],
      ['meningite-neonatale', 'Fièvre, LCR anormal.'],
      ['Sevrage néonatal', 'Exposition maternelle aux opioïdes.'],
    ],
    etiologies:
      '## Facteurs\n- Prématurité, asphyxie, mère diabétique, lait de vache, carence maternelle en vitamine D, hypomagnésémie',
    principes: [
      [
        'Forme symptomatique',
        'Corriger rapidement.',
        '- **Gluconate de calcium 10 %** **2 mL/kg** IV **lente** (10 minutes) sous **surveillance cardiaque** (bradycardie), en veine sûre (nécrose en cas d’extravasation)\n- Puis entretien 4–8 mL/kg/j de gluconate de calcium 10 % dans la perfusion, ou per os, pendant 48–72 h\n- **Hypomagnésémie** : sulfate de magnésium (le calcium reste inefficace sans correction du magnésium)',
      ],
      [
        'Forme asymptomatique',
        'Compléter progressivement.',
        '- Alimentation précoce au lait maternel, supplément calcique oral si besoin, contrôle de la calcémie',
      ],
      [
        'Forme tardive',
        'Traiter la cause.',
        '- Arrêt du lait de vache (allaitement maternel ou lait adapté pauvre en phosphore), **vitamine D**, magnésium ; bilan d’une hypoparathyroïdie si persistante',
      ],
    ],
    molecules: [
      ['gluconate-de-calcium', 'premiere', 'Hypocalcémie symptomatique'],
      ['sulfate-de-magnesium', 'alternative', 'Hypomagnésémie associée'],
      ['cholecalciferol-vitamine-d3', 'adjuvant', 'Carence en vitamine D'],
      ['calcium', 'adjuvant', 'Supplément oral'],
    ],
    complications: [
      {
        nom: 'Convulsions',
        fiche: 'convulsions-neonatales',
        description: 'Hypocalcémie sévère.',
        traitement: '- Calcium IV',
        clinique: '- Convulsions',
        paraclinique: '- Calcémie basse',
      },
      {
        nom: 'Troubles du rythme',
        description: 'Hypocalcémie ou injection trop rapide.',
        traitement: '- Surveillance cardiaque',
        clinique: '- Bradycardie',
        paraclinique: '- ECG',
      },
      {
        nom: 'Nécrose cutanée',
        description: 'Extravasation du calcium.',
        traitement: '- Soins locaux',
        clinique: '- Nécrose au point de perfusion',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Bon ; la forme précoce se corrige en quelques jours',
    urgences: [],
    symptomes: [
      ['Tremblements', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Refus de téter', 'occasionnel'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      'Nelson Textbook of Pediatrics',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Glycémie, alimentation au lait maternel, transfert si convulsions',
        '- Trémulations, convulsions',
      ],
      hgr: ['- Calcémie, gluconate de calcium IV sous surveillance', ''],
      tert: ['- Néonatologie, bilan endocrinien', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypocalcémie précoce',
        type: 'commune',
        description: 'J1–J3.',
        terrain: '- Prématuré, asphyxie, mère diabétique',
        fonctionnels: '',
        generaux: '',
        physiques: '- Trémulations ou asymptomatique',
        paraclinique: '- Calcémie < 2 mmol/L',
        etiologies: '- Immaturité parathyroïdienne',
        syndromes: [],
      },
      {
        nom: 'Hypocalcémie tardive',
        type: 'etiologique',
        description: 'J5–J10.',
        terrain: '- Lait de vache',
        fonctionnels: '- Hyperexcitabilité',
        generaux: '',
        physiques: '- Convulsions',
        paraclinique: '- Hyperphosphorémie, hypomagnésémie',
        etiologies: '- Excès de phosphore',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },
];
