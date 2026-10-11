'use strict';

/**
 * Lot 10 (néonatologie) — tétanos néonatal, omphalite, méningite néonatale, nouveau-né
 * exposé au VIH, convulsions néonatales. Rédigé par IA (OMS, PCIME, programmes nationaux) :
 * à valider.
 */

const NEO = { departement: 'pediatrie', specialite: 'Néonatologie' };

module.exports = [
  // =================================================================== Tétanos néonatal
  {
    ...NEO,
    slug: 'tetanos-neonatal',
    nom: 'Tétanos néonatal',
    resume:
      'Nouveau-né qui tétait bien puis ne peut plus téter entre J3 et J28, avec raideur et spasmes : soins du cordon souillés, mère non vaccinée ; sérum antitétanique, métronidazole, sédation, alimentation par sonde ; prévention par la vaccination des femmes.',
    definition:
      'Tétanos survenant dans les 28 premiers jours de vie, dû à la contamination de la plaie ombilicale par *Clostridium tetani* chez un nouveau-né de mère non ou insuffisamment vaccinée ; cible d’élimination de l’OMS.',
    physiopathologie:
      '## Mécanismes\n- Spores dans la plaie ombilicale (section du cordon avec un instrument souillé, application de terre, bouse, cendres)\n- Tétanospasmine : blocage des neurones inhibiteurs, contractures et spasmes\n- Absence d’anticorps maternels transmis (mère non vaccinée)',
    diagnostic:
      '## Définition de cas (OMS)\n- Nouveau-né qui **tétait et pleurait normalement** les 2 premiers jours\n- Puis, entre J3 et J28, **incapacité à téter** (trismus) et **raideur** et/ou **spasmes**\n\n## Clinique\n- Trismus, rire sardonique, opisthotonos\n- Spasmes déclenchés par le bruit, la lumière, le toucher\n- Ombilic souvent infecté\n- Apnées pendant les spasmes',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie (jeûne).'],
      ['etiologique', 'hemocultures', 'Sepsis associé.'],
      ['premiere_intention', 'nfs', 'Infection associée.'],
      ['etiologique', 'lcr', 'Doute avec une méningite (LCR normal dans le tétanos).'],
    ],
    scores: [],
    differentiels: [
      ['meningite-neonatale', 'Fièvre, fontanelle bombée, LCR anormal ; pas de trismus.'],
      ['convulsions-neonatales', 'Crises sans raideur permanente ni trismus.'],
      ['Hypocalcémie', 'Trémulations, calcémie basse.'],
      ['sepsis-neonatal', 'Refus de téter sans trismus ni spasmes.'],
    ],
    etiologies:
      '## Facteurs\n- **Mère non vaccinée** contre le tétanos\n- Accouchement à domicile non assisté, instrument non stérile\n- Applications traditionnelles sur le cordon',
    principes: [
      [
        'Traitement spécifique',
        'Neutraliser la toxine et éliminer la bactérie.',
        '- **Immunoglobulines antitétaniques** humaines 500 UI IM (ou sérum équin selon disponibilité)\n- **Métronidazole** 7,5 mg/kg toutes les 8–12 h (ou benzylpénicilline) 7 à 10 jours\n- Soins de l’ombilic (antiseptique)',
      ],
      [
        'Contrôle des spasmes',
        'Prévenir les apnées.',
        '- **Diazépam** IV ou par sonde (0,1–0,2 mg/kg toutes les 4–6 h, à adapter), **phénobarbital** associé\n- Environnement calme et sombre, manipulations groupées\n- **Sulfate de magnésium** en complément selon les protocoles\n- Aspiration, oxygène, ballon prêt ; ventilation si disponible',
      ],
      [
        'Soins de support',
        'Maintenir la nutrition et l’hydratation.',
        '- **Sonde gastrique** : lait maternel exprimé ; perfusion de glucose 10 % au début\n- Prévention de l’hypothermie, surveillance des apnées',
      ],
      [
        'Prévention',
        'Éliminer le tétanos néonatal.',
        '- **Vaccination antitétanique** de toutes les femmes en âge de procréer et des femmes enceintes (Td)\n- Accouchement propre, soins propres du cordon (**chlorhexidine 7,1 %**)\n- Vacciner la mère après l’épisode ; notification obligatoire',
      ],
    ],
    molecules: [
      ['serum-immunoglobuline-antitetanique', 'premiere', 'Neutralisation de la toxine'],
      ['metronidazole', 'premiere', 'Antibiotique'],
      ['benzylpenicilline-penicilline-g', 'alternative', 'Antibiotique'],
      ['diazepam', 'premiere', 'Contrôle des spasmes'],
      ['phenobarbital', 'premiere', 'Sédation associée'],
      ['sulfate-de-magnesium', 'adjuvant', 'Spasmes'],
      ['glucose-10', 'adjuvant', 'Apports'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Vaccination de la mère'],
    ],
    complications: [
      {
        nom: 'Apnées et insuffisance respiratoire',
        description: 'Spasmes laryngés et thoraciques.',
        traitement: '- Diazépam, ventilation',
        clinique: '- Cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        description: 'Troubles de la déglutition.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, détresse',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-neonatal',
        description: 'Ombilic infecté.',
        traitement: '- Antibiotiques',
        clinique: '- Hypothermie, fièvre',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité de 50 à 90 % sans soins intensifs ; aucune immunité après la maladie',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Refus de téter', 'tres_frequent'],
      ['Trismus', 'tres_frequent'],
      ['Contractures musculaires', 'tres_frequent'],
      ['Convulsions', 'frequent'],
      ['Rougeur ombilicale', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Pocket book of hospital care for children (2e édition)',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: [
        '- Reconnaître le cas, première dose de diazépam, transfert ; vaccination Td des femmes',
        '- Tout cas suspect',
      ],
      hgr: [
        '- Immunoglobulines, métronidazole, sédation, sonde gastrique',
        '- Apnées nécessitant une ventilation',
      ],
      tert: ['- Réanimation néonatale', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né de 3 à 28 jours qui ne peut plus téter, raide, avec spasmes',
    },
    formes: [
      {
        nom: 'Tétanos néonatal généralisé',
        type: 'commune',
        description: 'Trismus et spasmes.',
        terrain: '- Accouchement à domicile, mère non vaccinée',
        fonctionnels: '- Ne peut plus téter',
        generaux: '- Fièvre possible',
        physiques: '- Trismus, raideur, opisthotonos, spasmes provoqués',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- C. tetani',
        syndromes: ['syndrome-convulsif'],
      },
    ],
  },

  // =================================================================== Omphalite
  {
    ...NEO,
    slug: 'omphalite',
    nom: 'Omphalite',
    resume:
      'Infection de l’ombilic du nouveau-né : rougeur péri-ombilicale, écoulement purulent ; chlorhexidine et soins locaux si limitée, antibiotiques IV si rougeur étendue ou signes généraux ; prévention par la chlorhexidine 7,1 %.',
    definition:
      'Infection bactérienne du moignon ombilical et des tissus péri-ombilicaux, pouvant diffuser à la paroi abdominale, au péritoine, au foie (veine ombilicale) et au sang.',
    physiopathologie:
      '## Mécanismes\n- Colonisation du moignon par la flore cutanée et de l’environnement (staphylocoque, streptocoque, Gram négatifs, anaérobies)\n- Diffusion par contiguïté (fasciite) ou par les vaisseaux ombilicaux (sepsis, thrombose porte)',
    diagnostic:
      '## Clinique\n- Ombilic rouge, gonflé, écoulement purulent ou malodorant\n- **Omphalite localisée** : rougeur < 1 cm autour de l’ombilic\n- **Grave** : rougeur s’étendant à la peau abdominale (> 1 cm), induration, nécrose, signes de sepsis (refus de téter, fièvre ou hypothermie, léthargie)',
    examens: [
      ['gravite', 'hemocultures', 'Formes graves.'],
      ['premiere_intention', 'nfs', 'Infection.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['etiologique', 'lcr', 'Signes de méningite.'],
    ],
    scores: [],
    differentiels: [
      ['Granulome ombilical', 'Bourgeon rose humide sans rougeur ni pus.'],
      ['Persistance du canal de l’ouraque ou omphalo-mésentérique', 'Écoulement d’urine ou de selles.'],
      ['Ombilic humide normal', 'Pas de rougeur, pas d’odeur.'],
    ],
    etiologies:
      '## Facteurs\n- Accouchement non hygiénique, applications traditionnelles sur le cordon\n- Prématurité, faible poids, rupture prolongée des membranes',
    principes: [
      [
        'Omphalite localisée',
        'Traitement local.',
        '- Nettoyage à l’eau propre puis **chlorhexidine** ou violet de gentiane, 3 fois par jour\n- Ombilic laissé à l’air, propre et sec\n- Réévaluation à 2 jours ; éducation de la mère',
      ],
      [
        'Omphalite grave',
        'Éviter le sepsis.',
        '- Hospitalisation\n- **Cloxacilline** + **gentamicine** IV (staphylocoque et Gram négatifs) 7 à 10 jours ; ou ampicilline + gentamicine selon le protocole\n- Métronidazole si nécrose\n- Débridement chirurgical si fasciite nécrosante',
      ],
      [
        'Prévention',
        'Réduire la mortalité néonatale.',
        '- **Chlorhexidine 7,1 % gel** sur le cordon dès la naissance (recommandée en RDC)\n- Instruments stériles, pas d’applications traditionnelles',
      ],
    ],
    molecules: [
      ['chlorhexidine-gluconate', 'premiere', 'Soins et prévention'],
      ['cloxacilline', 'premiere', 'Omphalite grave'],
      ['gentamicine', 'premiere', 'Omphalite grave'],
      ['ampicilline', 'alternative', 'Selon le protocole'],
      ['metronidazole', 'adjuvant', 'Nécrose, anaérobies'],
    ],
    complications: [
      {
        nom: 'Sepsis néonatal',
        fiche: 'sepsis-neonatal',
        description: 'Diffusion sanguine.',
        traitement: '- Antibiotiques IV',
        clinique: '- Refus de téter, hypothermie',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Fasciite nécrosante de la paroi',
        description: 'Mortalité élevée.',
        traitement: '- Chirurgie, antibiotiques',
        clinique: '- Nécrose, induration violacée',
        paraclinique: '',
      },
      {
        nom: 'Thrombose porte et hypertension portale',
        description: 'Séquelle tardive.',
        traitement: '- Suivi',
        clinique: '- Splénomégalie, hémorragie digestive',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Tétanos néonatal',
        fiche: 'tetanos-neonatal',
        description: 'Mère non vaccinée.',
        traitement: '- Immunoglobulines',
        clinique: '- Trismus',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent pour les formes localisées ; graves si sepsis ou fasciite',
    urgences: ['sepsis-neonatal-urgence'],
    symptomes: [
      ['Rougeur ombilicale', 'tres_frequent'],
      ['Fièvre', 'occasionnel'],
      ['Refus de téter', 'occasionnel'],
      ['Hypothermie', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Soins locaux, chlorhexidine, éducation ; première dose d’antibiotique et transfert si grave',
        '- Rougeur étendue, signes de danger',
      ],
      hgr: ['- Antibiotiques IV, surveillance', '- Fasciite'],
      tert: ['- Chirurgie pédiatrique', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Rougeur ombilicale étendue avec refus de téter, fièvre ou hypothermie',
    },
    formes: [
      {
        nom: 'Omphalite localisée',
        type: 'commune',
        description: 'Ombilic rouge et purulent.',
        terrain: '- Nouveau-né de 3 à 10 jours',
        fonctionnels: '- Tète bien',
        generaux: '',
        physiques: '- Rougeur < 1 cm, pus',
        paraclinique: '',
        etiologies: '- Staphylocoque',
        syndromes: [],
      },
      {
        nom: 'Omphalite grave',
        type: 'gravite',
        description: 'Cellulite de la paroi et sepsis.',
        terrain: '- Faible poids, soins traditionnels',
        fonctionnels: '- Refus de téter',
        generaux: '- Fièvre ou hypothermie',
        physiques: '- Rougeur étendue, induration',
        paraclinique: '- Hémocultures positives',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Méningite néonatale
  {
    ...NEO,
    slug: 'meningite-neonatale',
    nom: 'Méningite néonatale',
    resume:
      'Infection des méninges dans les 28 premiers jours (streptocoque B, E. coli, Listeria, Klebsiella) : signes peu spécifiques, fontanelle bombée, convulsions ; ponction lombaire ; ampicilline + céfotaxime (ou gentamicine) 14 à 21 jours.',
    definition:
      'Inflammation infectieuse des méninges du nouveau-né, le plus souvent bactérienne, compliquant fréquemment un sepsis néonatal.',
    physiopathologie:
      '## Mécanismes\n- Infection materno-fœtale (précoce, < 72 h) ou nosocomiale/communautaire (tardive)\n- Bactériémie puis franchissement de la barrière hémato-encéphalique\n- Œdème cérébral, ventriculite, abcès, hydrocéphalie',
    diagnostic:
      '## Clinique (souvent non spécifique)\n- Refus de téter, léthargie, irritabilité, cri aigu\n- **Fièvre ou hypothermie**\n- **Convulsions**, **fontanelle bombée**, hypotonie\n- La raideur de nuque est rare\n\n## Ponction lombaire\n- Chez tout nouveau-né suspect de sepsis, sauf instabilité (la faire dès que possible)\n- LCR : leucocytes > 20–30/mm³, protéines élevées, glucose bas, Gram, culture',
    examens: [
      ['confirmation', 'lcr', 'Cytologie, biochimie, Gram, culture.'],
      ['premiere_intention', 'hemocultures', 'Avant les antibiotiques.'],
      ['premiere_intention', 'glycemie', 'Hypoglycémie ; glycorachie.'],
      ['premiere_intention', 'nfs', 'Leucopénie ou hyperleucocytose, thrombopénie.'],
      ['premiere_intention', 'crp', 'Suivi.'],
      ['gravite', 'echographie-transfontanellaire', 'Ventriculite, abcès, hydrocéphalie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie (sécrétion inappropriée d’ADH).'],
    ],
    scores: [],
    differentiels: [
      ['sepsis-neonatal', 'Sans atteinte méningée : seule la PL tranche.'],
      ['asphyxie-perinatale', 'Contexte de naissance difficile, convulsions précoces.'],
      ['hypoglycemie-neonatale', 'Glycémie basse.'],
      ['Infections virales (herpès, entérovirus)', 'Vésicules, LCR lymphocytaire.'],
    ],
    etiologies:
      '## Germes\n- Précoces : streptocoque du groupe B, *E. coli*, *Listeria monocytogenes*\n- Tardives : *Klebsiella*, *E. coli*, staphylocoques, pneumocoque, Salmonella\n\n## Facteurs\n- Prématurité, rupture prolongée des membranes, fièvre maternelle, chorioamniotite',
    principes: [
      [
        'Antibiothérapie urgente',
        'Stériliser le LCR.',
        '- **Ampicilline** 100 mg/kg toutes les 8–12 h + **céfotaxime** 50 mg/kg toutes les 8–12 h (ou **gentamicine**), selon l’âge\n- Durée : 14 jours (streptocoque B), 21 jours (Gram négatifs)\n- Éviter la ceftriaxone en cas d’ictère ou de perfusion calcique\n- Adapter à la culture',
      ],
      [
        'Soins de support',
        'Limiter les lésions.',
        '- Convulsions : **phénobarbital** 20 mg/kg\n- Glycémie, température, apports hydriques (restriction modérée si hyponatrémie)\n- Lait maternel par sonde si succion faible\n- Oxygène si besoin',
      ],
      [
        'Suivi',
        'Dépister les séquelles.',
        '- Périmètre crânien, échographie transfontanellaire, audition, développement',
      ],
    ],
    molecules: [
      ['ampicilline', 'premiere', 'Listeria, streptocoque B'],
      ['cefotaxime', 'premiere', 'Gram négatifs'],
      ['gentamicine', 'alternative', 'Association si céfotaxime indisponible'],
      ['ceftriaxone', 'alternative', 'Nourrisson > 28 jours, sans ictère'],
      ['phenobarbital', 'premiere', 'Convulsions'],
      ['glucose-10', 'adjuvant', 'Apports, hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Hydrocéphalie',
        description: 'Ventriculite, cloisonnement.',
        traitement: '- Dérivation',
        clinique: '- Augmentation du périmètre crânien',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Abcès cérébral',
        description: 'Citrobacter, Klebsiella.',
        traitement: '- Antibiotiques prolongés, drainage',
        clinique: '- Convulsions',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Séquelles neurosensorielles',
        description: 'Surdité, épilepsie, retard.',
        traitement: '- Suivi, rééducation',
        clinique: '',
        paraclinique: '- Audition',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 10 à 50 % selon l’accès aux soins ; séquelles chez un tiers des survivants',
    urgences: ['sepsis-neonatal-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Refus de téter', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Hypothermie', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Fontanelle bombée', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
    ],
    sources: [
      'WHO recommendations for management of serious bacterial infections in infants aged 0–59 days',
      'WHO guidelines on meningitis diagnosis, treatment and care',
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Reconnaître les signes de danger, première dose d’ampicilline + gentamicine, transfert',
        '- Tout nouveau-né avec signes de danger',
      ],
      hgr: ['- PL, antibiotiques IV, phénobarbital', '- Hydrocéphalie, abcès'],
      tert: ['- Neurochirurgie pédiatrique', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né avec convulsions, fontanelle bombée, fièvre ou hypothermie',
      'syndrome-meninge-febrile': 'Nouveau-né fébrile avec fontanelle bombée ou convulsions',
    },
    formes: [
      {
        nom: 'Méningite néonatale bactérienne',
        type: 'commune',
        description: 'Tableau de sepsis avec signes neurologiques.',
        terrain: '- Prématuré, rupture prolongée des membranes',
        fonctionnels: '- Refus de téter, cri aigu',
        generaux: '- Fièvre ou hypothermie',
        physiques: '- Fontanelle bombée, convulsions, hypotonie',
        paraclinique: '- LCR purulent',
        etiologies: '- Streptocoque B, E. coli, Klebsiella',
        syndromes: ['syndrome-meninge', 'syndrome-infectieux'],
        examens: [['lcr', 'Confirmation']],
      },
    ],
  },

  // =================================================================== Nouveau-né exposé au VIH
  {
    ...NEO,
    slug: 'nouveau-ne-expose-au-vih',
    nom: 'Nouveau-né exposé au VIH',
    resume:
      'Enfant né d’une mère vivant avec le VIH : prophylaxie ARV (névirapine ± zidovudine selon le risque), diagnostic précoce par PCR à la naissance, à 6 semaines et 9 mois, cotrimoxazole dès 6 semaines, allaitement maternel protégé sous ARV maternels.',
    definition:
      'Nourrisson né d’une mère infectée par le VIH, à risque de transmission pendant la grossesse, l’accouchement et l’allaitement, jusqu’à confirmation de son statut définitif après l’arrêt de l’allaitement.',
    physiopathologie:
      '## Transmission mère-enfant\n- In utero, à l’accouchement (majoritaire), par l’allaitement\n- Risque élevé si charge virale maternelle détectable, diagnostic maternel tardif, séroconversion pendant la grossesse ou l’allaitement\n- Risque < 1 % si la mère a une charge virale indétectable sous ARV',
    diagnostic:
      '## Évaluation du risque à la naissance\n- **Haut risque** : mère sans ARV ou < 4 semaines d’ARV, charge virale > 1 000 copies/mL au 3e trimestre, infection maternelle récente ou découverte à l’accouchement\n- **Bas risque** : mère sous ARV avec charge virale supprimée\n\n## Diagnostic de l’enfant\n- **PCR** (diagnostic précoce) à la naissance (si disponible), à **6 semaines**, à 9 mois, et 3 mois après l’arrêt de l’allaitement\n- Test sérologique à 18 mois\n- Toute PCR positive : démarrer les ARV et confirmer',
    examens: [
      [
        'confirmation',
        'pcr-vih-nourrisson',
        'Naissance, 6 semaines, 9 mois, après l’arrêt de l’allaitement.',
      ],
      ['suivi', 'tdr-vih', 'À 18 mois et après l’arrêt de l’allaitement.'],
      ['premiere_intention', 'nfs', 'Anémie (zidovudine).'],
      ['etiologique', 'serologie-syphilis', 'Statut maternel.'],
      ['etiologique', 'marqueurs-vhb', 'Statut maternel (vaccination à la naissance).'],
    ],
    scores: [],
    differentiels: [
      ['Infection à VIH de l’enfant', 'PCR positive : traitement ARV.'],
      ['Malnutrition, tuberculose', 'Rechercher chez l’enfant exposé qui ne grandit pas.'],
    ],
    etiologies:
      '## Facteurs de transmission\n- Charge virale maternelle élevée, absence de traitement\n- Allaitement mixte précoce, mastite, crevasses\n- Prématurité, rupture prolongée des membranes',
    principes: [
      [
        'Prophylaxie ARV de l’enfant',
        'Prévenir l’infection.',
        '- **Bas risque** : **névirapine** 6 semaines\n- **Haut risque** : prophylaxie renforcée — **zidovudine** 2 fois par jour + **névirapine** 1 fois par jour 6 semaines, puis névirapine poursuivie 6 semaines supplémentaires (12 semaines) si allaitement\n- Débuter le plus tôt possible après la naissance (< 6 à 12 h)\n- Doses selon le poids (directives nationales)',
      ],
      [
        'Alimentation',
        'Allaitement sûr.',
        '- **Allaitement maternel exclusif** 6 mois puis diversification, poursuite jusqu’à 12–24 mois, sous ARV maternels avec charge virale supprimée\n- Contrôle de la charge virale maternelle pendant l’allaitement',
      ],
      [
        'Prévention des infections',
        'Protéger l’enfant.',
        '- **Cotrimoxazole** dès 6 semaines jusqu’à l’exclusion de l’infection\n- Calendrier vaccinal complet (BCG, hépatite B à la naissance)\n- Suivi de la croissance et du développement',
      ],
      [
        'Résultat positif',
        'Traiter sans délai.',
        '- ARV de l’enfant (dolutégravir pédiatrique ou lopinavir/r + abacavir + lamivudine selon l’âge et le poids)',
      ],
    ],
    molecules: [
      ['nevirapine', 'premiere', 'Prophylaxie'],
      ['zidovudine', 'premiere', 'Prophylaxie renforcée (haut risque)'],
      ['cotrimoxazole', 'premiere', 'Dès 6 semaines'],
      ['vaccin-hepatite-b', 'premiere', 'Dose à la naissance'],
      ['dolutegravir', 'alternative', 'Traitement si infection confirmée'],
      ['abacavir', 'alternative', 'Traitement si infection confirmée'],
      ['lamivudine', 'alternative', 'Traitement si infection confirmée'],
    ],
    complications: [
      {
        nom: 'Infection à VIH de l’enfant',
        fiche: 'infection-vih',
        description: 'Échec de la prévention.',
        traitement: '- ARV immédiats',
        clinique: '- Retard de croissance, infections',
        paraclinique: '- PCR',
      },
      {
        nom: 'Anémie sous zidovudine',
        fiche: 'anemie-ferriprive',
        description: 'Toxicité médullaire.',
        traitement: '- Surveillance, arrêt si sévère',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Pneumocystose',
        description: 'Nourrisson infecté non dépisté.',
        traitement: '- Cotrimoxazole fortes doses',
        clinique: '- Détresse respiratoire',
        paraclinique: '- SpO2',
      },
    ],
    evolution:
      '## Pronostic\n- Transmission < 2 % avec ARV maternels et prophylaxie ; sans intervention, 50 % des enfants infectés décèdent avant 2 ans',
    urgences: [],
    symptomes: [
      ['Retard de croissance', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Pocket book of hospital care for children (2e édition)',
    ],
    niveaux: {
      cs: [
        '- Prophylaxie ARV, PCR à 6 semaines, cotrimoxazole, conseil d’alimentation, vaccins',
        '- PCR positive, retard de croissance',
      ],
      hgr: ['- Diagnostic précoce, initiation des ARV pédiatriques', ''],
      tert: ['- Pédiatrie VIH', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Nouveau-né exposé à bas risque',
        type: 'commune',
        description: 'Mère sous ARV avec charge virale supprimée.',
        terrain: '- Mère suivie en PTME',
        fonctionnels: '',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- PCR négative',
        etiologies: '',
        syndromes: [],
        examens: [['pcr-vih-nourrisson', 'Diagnostic précoce']],
      },
      {
        nom: 'Nouveau-né exposé à haut risque',
        type: 'gravite',
        description: 'Mère non traitée ou virémique.',
        terrain: '- Diagnostic maternel tardif',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- PCR à la naissance',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Convulsions néonatales
  {
    ...NEO,
    slug: 'convulsions-neonatales',
    nom: 'Convulsions néonatales',
    resume:
      'Crises du nouveau-né, souvent subtiles (mâchonnements, pédalage, apnées) : vérifier glycémie et calcémie, rechercher asphyxie et infection (PL) ; phénobarbital 20 mg/kg en première intention.',
    definition:
      'Crises épileptiques survenant pendant les 28 premiers jours de vie (ou avant 44 semaines d’âge corrigé chez le prématuré), le plus souvent symptomatiques d’une agression cérébrale aiguë.',
    physiopathologie:
      '## Mécanismes\n- Cerveau immature hyperexcitable\n- Causes aiguës : anoxie, infection, troubles métaboliques, hémorragie\n- Crises souvent électriques sans traduction clinique évidente',
    diagnostic:
      '## Clinique\n- Formes **subtiles** : mâchonnements, clignements, déviation des yeux, mouvements de pédalage ou de nage, apnées\n- Crises cloniques focales ou multifocales, toniques, myocloniques\n- Distinguer des **trémulations** (cèdent à la contention d’un membre, déclenchées par la stimulation)\n\n## Bilan immédiat\n- **Glycémie**, calcémie, magnésémie, natrémie\n- Recherche d’infection (PL), histoire de l’accouchement (asphyxie)\n- Échographie transfontanellaire',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie : cause à corriger immédiatement.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypocalcémie, hypomagnésémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'lcr', 'Méningite.'],
      ['premiere_intention', 'hemocultures', 'Sepsis.'],
      ['premiere_intention', 'bilirubine-neonatale', 'Ictère nucléaire.'],
      ['gravite', 'echographie-transfontanellaire', 'Hémorragie, lésions anoxiques, malformations.'],
      ['gravite', 'eeg', 'Crises infracliniques, pronostic.'],
    ],
    scores: ['apgar'],
    differentiels: [
      ['Trémulations', 'Cèdent à la contention, pas d’anomalie oculaire.'],
      ['Myoclonies du sommeil bénignes', 'Uniquement pendant le sommeil, cessent au réveil.'],
      ['tetanos-neonatal', 'Trismus et raideur permanente.'],
    ],
    etiologies:
      '## Causes\n- **Encéphalopathie anoxo-ischémique** (première cause)\n- **Infections** : méningite, sepsis, toxoplasmose, herpès\n- **Métaboliques** : hypoglycémie, hypocalcémie, hypomagnésémie, hyponatrémie\n- Hémorragie intracrânienne, AVC néonatal\n- Ictère nucléaire, sevrage, maladies métaboliques héréditaires, épilepsies néonatales',
    principes: [
      [
        'Mesures immédiates',
        'Sécuriser.',
        '- Voies aériennes, oxygène, position latérale\n- **Glucose 10 %** 2 mL/kg IV si glycémie basse ou non mesurable\n- **Gluconate de calcium 10 %** 2 mL/kg IV lent sous surveillance cardiaque si hypocalcémie\n- Sulfate de magnésium si hypomagnésémie',
      ],
      [
        'Antiépileptiques',
        'Arrêter les crises.',
        '- **Phénobarbital** 20 mg/kg IV en 15–20 min ; si persistance, 10 mg/kg supplémentaires (jusqu’à 40 mg/kg)\n- Deuxième ligne : **phénytoïne** 20 mg/kg IV lente ou **lévétiracétam** 40–60 mg/kg ; **midazolam**\n- Entretien par phénobarbital 3–5 mg/kg/j ; arrêt rapide si cause aiguë résolue',
      ],
      [
        'Traitement de la cause',
        'Prévenir les récidives.',
        '- Antibiotiques (**ampicilline** + **gentamicine** ou céfotaxime) si infection possible, en attendant la PL\n- Prise en charge de l’asphyxie, de l’ictère',
      ],
    ],
    molecules: [
      ['phenobarbital', 'premiere', '20 mg/kg IV'],
      ['phenytoine', 'deuxieme', 'Crises réfractaires'],
      ['levetiracetam', 'deuxieme', 'Crises réfractaires'],
      ['midazolam', 'alternative', 'Crises réfractaires'],
      ['glucose-10', 'premiere', 'Hypoglycémie'],
      ['gluconate-de-calcium', 'premiere', 'Hypocalcémie'],
      ['sulfate-de-magnesium', 'adjuvant', 'Hypomagnésémie'],
      ['ampicilline', 'adjuvant', 'Infection possible'],
      ['gentamicine', 'adjuvant', 'Infection possible'],
      ['pyridoxine', 'adjuvant', 'Crises réfractaires (épreuve)'],
    ],
    complications: [
      {
        nom: 'État de mal convulsif',
        fiche: 'etat-de-mal-epileptique',
        description: 'Crises prolongées.',
        traitement: '- Antiépileptiques de 2e ligne',
        clinique: '- Crises répétées',
        paraclinique: '- EEG',
      },
      {
        nom: 'Apnées',
        description: 'Crises ou phénobarbital.',
        traitement: '- Ventilation au ballon',
        clinique: '- Cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Séquelles neurologiques et épilepsie',
        description: 'Selon la cause.',
        traitement: '- Suivi neurologique',
        clinique: '',
        paraclinique: '- EEG',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause : bon pour les causes métaboliques corrigées, réservé pour l’asphyxie sévère et les méningites',
    urgences: ['sepsis-neonatal-urgence', 'etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Refus de téter', 'frequent'],
      ['Hypotonie', 'frequent'],
      ['Mouvements involontaires', 'frequent'],
      ['Cyanose', 'occasionnel'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Glycémie, glucose 10 %, phénobarbital ou diazépam, première dose d’antibiotiques, transfert',
        '- Toute convulsion néonatale',
      ],
      hgr: ['- Bilan métabolique, PL, phénobarbital, prise en charge de la cause', '- Crises réfractaires'],
      tert: ['- EEG, neurologie pédiatrique', ''],
    },
    alertes: {
      'sepsis-neonatal-urgence': 'Nouveau-né qui convulse avec fièvre, hypothermie ou refus de téter',
      'etat-de-mal-epileptique-urgence': 'Crises néonatales répétées ou prolongées malgré le phénobarbital',
    },
    formes: [
      {
        nom: 'Convulsions symptomatiques aiguës',
        type: 'commune',
        description: 'Crises dans les premiers jours.',
        terrain: '- Asphyxie, infection, hypoglycémie',
        fonctionnels: '- Mâchonnements, pédalage',
        generaux: '',
        physiques: '- Crises cloniques ou subtiles, apnées',
        paraclinique: '- Glycémie, calcémie, LCR',
        etiologies: '- Asphyxie, méningite, métabolique',
        syndromes: ['syndrome-convulsif'],
        examens: [['glycemie', 'Cause métabolique']],
      },
    ],
  },
];
