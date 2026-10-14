'use strict';

/**
 * Lot 68 (phase 2, épileptologie) — épilepsie et VIH, épilepsie pharmacorésistante, crises non
 * épileptiques psychogènes, épilepsie-absences, syndrome de Lennox-Gastaut. Rédigé par IA (ILAE,
 * mhGAP, OMS VIH, Nelson) : à valider.
 */

const EPI = { departement: 'neuropsychiatrie', specialite: 'Épilepsie' };

module.exports = [
  // =================================================================== Épilepsie et VIH
  {
    ...EPI,
    slug: 'epilepsie-et-vih',
    nom: 'Épilepsie et VIH',
    resume:
      'Crises convulsives fréquentes chez les personnes vivant avec le VIH, souvent révélatrices d’une lésion cérébrale : toxoplasmose cérébrale, méningite à cryptocoque, tuberculome et méningite tuberculeuse, lymphome primitif du SNC, leucoencéphalopathie multifocale progressive, encéphalopathie à VIH, neurosyphilis, troubles métaboliques, sevrage alcoolique, médicaments ; toute première crise chez un patient VIH impose une imagerie cérébrale et une ponction lombaire (après imagerie) ; traitement de la cause et antiépileptique choisi en tenant compte des interactions avec les antirétroviraux : lévétiracétam ou valproate préférés, éviter carbamazépine, phénytoïne et phénobarbital (inducteurs enzymatiques qui diminuent les taux du dolutégravir, des inhibiteurs de protéase, de l’éfavirenz et de la rifampicine) ; doubler la dose de dolutégravir si un inducteur ne peut être évité.',
    definition:
      'Crises épileptiques (aiguës symptomatiques ou épilepsie constituée) survenant chez une personne infectée par le VIH, liées à une infection opportuniste, à une tumeur, au VIH lui-même ou à des causes métaboliques et toxiques.',
    physiopathologie:
      '## Causes\n- **Infections opportunistes** : **toxoplasmose cérébrale**, **cryptococcose** méningée, **tuberculose** (méningite, tuberculome), neurosyphilis, CMV, VZV, LEMP (virus JC)\n- **Lymphome** primitif du SNC\n- **Encéphalopathie à VIH**, séquelles d’infections\n- **Métaboliques** : hyponatrémie, hypoglycémie, hypocalcémie, insuffisance rénale\n- **Toxiques et médicaments** : sevrage alcoolique, isoniazide (sans pyridoxine), éfavirenz, imipénème\n\n## Interactions\n- **Inducteurs enzymatiques** (carbamazépine, phénytoïne, phénobarbital) → baisse des concentrations des antirétroviraux (dolutégravir, IP, NNRTI) → échec virologique et résistances\n- Inhibiteurs de protéase et ritonavir → hausse ou baisse des antiépileptiques',
    diagnostic:
      '## Évaluation\n- Type de crise (focale : lésion), fièvre, céphalées, déficit focal, troubles de conscience, raideur méningée\n- **CD4**, charge virale, statut sous antirétroviraux, prophylaxie au cotrimoxazole\n\n## Examens\n- **Glycémie** immédiate, ionogramme, calcémie, créatinine\n- **Scanner cérébral** (avec injection) ou IRM : abcès en cocarde (toxoplasmose), tuberculome, lymphome\n- **Ponction lombaire** (après imagerie si signes focaux) : antigène cryptococcique (CrAg), encre de Chine, GeneXpert, VDRL, cytologie\n- **CrAg sérique** si CD4 < 200 ; sérologie toxoplasmique\n- **EEG** selon disponibilité',
    examens: [
      ['premiere_intention', 'glycemie', 'Hypoglycémie.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie.'],
      ['premiere_intention', 'scanner-cerebral', 'Toxoplasmose, tuberculome, lymphome.'],
      ['premiere_intention', 'cd4', 'Degré d’immunodépression.'],
      ['confirmation', 'lcr', 'Cryptocoque, tuberculose, syphilis.'],
      ['deuxieme_intention', 'irm-cerebrale', 'LEMP, petites lésions.'],
      ['etiologique', 'serologie-syphilis', 'Neurosyphilis.'],
      ['etiologique', 'charge-virale-vih', 'Échec thérapeutique.'],
      ['deuxieme_intention', 'eeg', 'Caractérisation des crises.'],
      ['etiologique', 'calcemie-magnesemie', 'Hypocalcémie.'],
    ],
    scores: ['glasgow', 'stades-oms-vih'],
    differentiels: [
      ['toxoplasmose-cerebrale', 'Lésions en cocarde, déficit focal.'],
      ['meningite-a-cryptocoque', 'Céphalées, hypertension intracrânienne.'],
      ['meningite-tuberculeuse', 'Fièvre prolongée, atteinte des nerfs crâniens.'],
      ['syncope-et-malaise', 'Perte de connaissance brève sans convulsion prolongée.'],
      ['sevrage-alcoolique-delirium-tremens', 'Crises de sevrage.'],
      ['hyponatremie', 'Crises métaboliques.'],
    ],
    etiologies:
      '## Causes\n- Toxoplasmose, cryptococcose, tuberculose, lymphome, LEMP, encéphalopathie à VIH, troubles métaboliques, sevrage, médicaments',
    principes: [
      [
        'Crise et cause',
        'Urgence.',
        '- Crise prolongée : **diazépam** rectal ou IV, **midazolam** ; état de mal selon le protocole\n- **Traitement de la cause** : toxoplasmose (cotrimoxazole à dose curative ou pyriméthamine-sulfadiazine), cryptococcose (amphotéricine B + flucytosine/fluconazole, ponctions lombaires évacuatrices), tuberculose, syphilis\n- Corriger glycémie et ionogramme',
      ],
      [
        'Antiépileptique',
        'Attention aux interactions.',
        '- **Lévétiracétam** (premier choix, pas d’interaction) ou **valproate** (prudence : hépatotoxicité, interaction avec la zidovudine, grossesse) ; lamotrigine possible\n- **Éviter** carbamazépine, phénytoïne et **phénobarbital** (inducteurs) avec le dolutégravir, les IP et la rifampicine\n- Si un inducteur est le seul disponible : **dolutégravir 50 mg 2 fois par jour** et avis spécialisé\n- Durée : arrêt possible après traitement de la cause et 1–2 ans sans crise si lésion guérie',
      ],
      [
        'Antirétroviraux',
        'Ne pas retarder.',
        '- Débuter ou poursuivre le **TARV** (délai de 4–6 semaines en cas de méningite à cryptocoque ou tuberculeuse)\n- Pyridoxine sous isoniazide ; prophylaxies (cotrimoxazole, fluconazole si CrAg positif)',
      ],
    ],
    molecules: [
      ['levetiracetam', 'premiere', 'Antiépileptique sans interaction'],
      ['valproate-de-sodium-acide-valproique', 'alternative', 'Antiépileptique'],
      ['lamotrigine', 'alternative', 'Antiépileptique'],
      ['diazepam', 'premiere', 'Crise prolongée'],
      ['midazolam', 'alternative', 'Crise prolongée'],
      ['phenobarbital', 'deuxieme', 'Si seul disponible (inducteur)'],
      ['dolutegravir', 'premiere', 'TARV (dose doublée avec un inducteur)'],
      ['cotrimoxazole', 'premiere', 'Toxoplasmose, prophylaxie'],
      ['pyridoxine', 'adjuvant', 'Prévention sous isoniazide'],
    ],
    complications: [
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Crises répétées.',
        traitement: '- Benzodiazépines, antiépileptiques IV',
        clinique: '- Crises sans reprise de conscience',
        paraclinique: '',
      },
      {
        nom: 'Échec virologique',
        fiche: 'infection-vih',
        description: 'Interaction avec un inducteur.',
        traitement: '- Changer d’antiépileptique, adapter le TARV',
        clinique: '',
        paraclinique: '- Charge virale',
      },
      {
        nom: 'Syndrome inflammatoire de restauration immunitaire',
        description: 'Après début du TARV.',
        traitement: '- Corticoïdes selon le cas',
        clinique: '- Aggravation neurologique',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause ; mortalité élevée des infections opportunistes cérébrales ; épilepsie séquellaire fréquente',
    urgences: ['etat-de-mal-epileptique-urgence', 'syndrome-meninge-febrile'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Déficit moteur', 'occasionnel'],
      ['Troubles de la conscience', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      'ILAE — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Diazépam, glycémie, test VIH, référence', '- Toute première crise chez un patient VIH'],
      hgr: ['- Scanner, ponction lombaire, CrAg, lévétiracétam', ''],
      tert: ['- IRM, neurologie, biopsie', ''],
    },
    alertes: {
      'etat-de-mal-epileptique-urgence': 'Crises répétées sans reprise de conscience',
      'syndrome-meninge-febrile': 'Crise avec fièvre, céphalées et raideur de nuque',
    },
    formes: [
      {
        nom: 'Crise symptomatique d’une infection opportuniste',
        type: 'commune',
        description: 'CD4 bas.',
        terrain: '- CD4 < 200',
        fonctionnels: '- Céphalées',
        generaux: '- Fièvre',
        physiques: '- Déficit focal',
        paraclinique: '- Scanner, LCR',
        etiologies: '- Toxoplasmose, cryptocoque, tuberculose',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Épilepsie séquellaire sous TARV',
        type: 'evolutive',
        description: 'Interactions.',
        terrain: '- VIH contrôlé',
        fonctionnels: '- Crises récurrentes',
        generaux: '',
        physiques: '',
        paraclinique: '- Charge virale',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Épilepsie pharmacorésistante
  {
    ...EPI,
    slug: 'epilepsie-pharmacoresistante',
    nom: 'Épilepsie pharmacorésistante',
    resume:
      'Persistance des crises malgré deux antiépileptiques bien choisis, bien tolérés et pris à dose efficace (définition ILAE), concernant environ un tiers des épileptiques ; avant de conclure, éliminer une pseudo-résistance très fréquente en RDC : mauvaise observance (coût, ruptures de stock, croyances, traitement traditionnel), dose insuffisante, molécule inadaptée au type de crise (carbamazépine aggravant les absences et les myoclonies), crises non épileptiques psychogènes, syncopes, alcool, privation de sommeil, interactions (rifampicine, antirétroviraux) ; bilan en centre spécialisé (EEG, IRM), essais de bithérapie rationnelle, régime cétogène chez l’enfant, chirurgie de l’épilepsie (sclérose hippocampique) ; prise en charge psychosociale, sécurité (noyade, brûlures), mortalité subite (SUDEP).',
    definition:
      'Épilepsie dans laquelle deux schémas d’antiépileptiques appropriés, bien tolérés et correctement utilisés (en monothérapie ou en association) n’ont pas permis d’obtenir une absence durable de crises.',
    physiopathologie:
      '## Causes de vraie résistance\n- Lésions structurelles : **sclérose hippocampique**, séquelles d’**asphyxie périnatale**, de méningite, de **neuropaludisme**, de traumatisme, malformations corticales, **neurocysticercose**, tumeurs\n- Encéphalopathies épileptiques de l’enfant (syndrome de West, Lennox-Gastaut)\n\n## Pseudo-résistance\n- **Mauvaise observance**, dose insuffisante, mauvais choix de molécule, médicaments de mauvaise qualité\n- Erreur diagnostique (**crises psychogènes**, syncopes), facteurs déclenchants (alcool, manque de sommeil)',
    diagnostic:
      '## Démarche\n- Revoir le **diagnostic** (témoins, vidéo sur téléphone), le **type de crises** et le **syndrome**\n- Vérifier l’**observance** (calendrier, dosages si disponibles), les doses (mg/kg), la qualité et l’approvisionnement\n- Rechercher les interactions (rifampicine, antirétroviraux, contraceptifs)\n\n## Examens\n- **EEG** (idéalement prolongé ou vidéo-EEG), **IRM cérébrale** (protocole épilepsie)\n- Bilan métabolique, sérologie de la cysticercose selon le contexte\n- Évaluation cognitive et psychiatrique (dépression, anxiété)',
    examens: [
      ['confirmation', 'eeg', 'Type de crises, foyer.'],
      ['confirmation', 'irm-cerebrale', 'Lésion épileptogène (sclérose hippocampique).'],
      ['deuxieme_intention', 'scanner-cerebral', 'Calcifications, cysticercose.'],
      ['etiologique', 'ionogramme', 'Cause métabolique.'],
      ['etiologique', 'bilan-hepatique', 'Tolérance du valproate, de la carbamazépine.'],
      ['etiologique', 'nfs', 'Tolérance de la carbamazépine.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['crises-non-epileptiques-psychogenes', 'Crises sans anomalie EEG.'],
      ['syncope-et-malaise', 'Syncopes convulsivantes.'],
      ['epilepsie', 'Épilepsie non résistante mal traitée.'],
      ['trouble-de-l-usage-de-l-alcool', 'Crises de sevrage.'],
    ],
    etiologies:
      '## Causes\n- Sclérose hippocampique, séquelles périnatales et infectieuses, malformations, neurocysticercose, encéphalopathies épileptiques ; pseudo-résistance',
    principes: [
      [
        'Corriger la pseudo-résistance',
        'D’abord.',
        '- Éducation, **observance**, approvisionnement régulier (le phénobarbital est peu coûteux)\n- Dose adaptée au poids, molécule adaptée au type de crises : **valproate** pour les épilepsies généralisées (sauf femme en âge de procréer), **carbamazépine** ou lamotrigine pour les focales\n- Éviter alcool et privation de sommeil',
      ],
      [
        'Optimiser',
        'Associations rationnelles.',
        '- Bithérapie : valproate + lamotrigine, ajout de **lévétiracétam**, **clobazam**, **topiramate**\n- Changer un seul médicament à la fois, journal des crises\n- Enfant : **régime cétogène** en centre spécialisé',
      ],
      [
        'Centre spécialisé',
        'Chirurgie et sécurité.',
        '- Bilan préchirurgical (vidéo-EEG, IRM), **chirurgie** (lobectomie temporale antérieure), stimulation du nerf vague\n- **Sécurité** : pas de baignade seul, protection contre le feu (brûlures), conduite interdite\n- Prise en charge de la dépression, scolarisation, lutte contre la stigmatisation',
      ],
    ],
    molecules: [
      ['valproate-de-sodium-acide-valproique', 'premiere', 'Épilepsies généralisées'],
      ['carbamazepine', 'premiere', 'Épilepsies focales'],
      ['lamotrigine', 'alternative', 'Focales et généralisées, femme'],
      ['levetiracetam', 'alternative', 'Association'],
      ['clobazam', 'adjuvant', 'Association'],
      ['topiramate', 'alternative', 'Association'],
      ['phenobarbital', 'alternative', 'Disponible, peu coûteux'],
      ['phenytoine', 'alternative', 'Épilepsies focales'],
    ],
    complications: [
      {
        nom: 'Mort subite inattendue (SUDEP)',
        description: 'Crises tonico-cloniques nocturnes non contrôlées.',
        traitement: '- Contrôle des crises',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Traumatismes, noyades, brûlures',
        fiche: 'brulures-adulte',
        description: 'Chutes pendant les crises.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression et exclusion sociale',
        fiche: 'depression',
        description: 'Stigmatisation.',
        traitement: '- Soutien, antidépresseur',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Arrêt brutal du traitement.',
        traitement: '- Benzodiazépines',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Une part importante des « résistances » disparaît après correction de l’observance et du choix du médicament ; la chirurgie guérit 60–70 % des scléroses hippocampiques',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles de la mémoire', 'occasionnel'],
      ['Troubles du comportement', 'occasionnel'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'mhGAP Intervention Guide 2.0',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Observance, approvisionnement, éducation, journal des crises',
        '- Crises persistantes malgré un traitement bien pris',
      ],
      hgr: ['- Ajustement des doses, EEG', ''],
      tert: ['- IRM, vidéo-EEG, chirurgie', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Crise > 5 minutes ou crises répétées' },
    formes: [
      {
        nom: 'Pseudo-résistance',
        type: 'commune',
        description: 'Observance, dose, choix.',
        terrain: '',
        fonctionnels: '- Crises persistantes',
        generaux: '',
        physiques: '',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Épilepsie temporale avec sclérose hippocampique',
        type: 'etiologique',
        description: 'Chirurgie.',
        terrain: '- Antécédent de convulsions fébriles prolongées',
        fonctionnels: '- Crises focales avec rupture de contact',
        generaux: '',
        physiques: '',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Encéphalopathie épileptique de l’enfant',
        type: 'terrain',
        description: 'Retard associé.',
        terrain: '- Séquelles périnatales',
        fonctionnels: '- Crises multiples',
        generaux: '',
        physiques: '- Retard de développement',
        paraclinique: '- EEG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Crises non épileptiques psychogènes
  {
    ...EPI,
    slug: 'crises-non-epileptiques-psychogenes',
    nom: 'Crises non épileptiques psychogènes',
    resume:
      'Épisodes paroxystiques ressemblant à des crises d’épilepsie mais sans décharge électrique cérébrale, d’origine psychologique (trouble neurologique fonctionnel ou dissociatif), fréquents chez l’adolescente et l’adulte jeune, souvent après des traumatismes (violences, deuil, conflits) : crises prolongées et fluctuantes, yeux fermés avec résistance à l’ouverture, mouvements asynchrones du bassin et de la tête (latéralité alternante), pleurs, conscience partiellement préservée, absence de cyanose et de confusion post-critique ; diagnostic par l’observation, les vidéos et l’EEG ; jusqu’à 20 % des « épilepsies résistantes » ; peuvent coexister avec une épilepsie ; annonce bienveillante du diagnostic, arrêt progressif des antiépileptiques inutiles, psychothérapie, traitement de la dépression et de l’anxiété.',
    definition:
      'Manifestations paroxystiques évoquant des crises épileptiques sans activité épileptique corticale, relevant d’un trouble neurologique fonctionnel (dissociatif ou de conversion).',
    physiopathologie:
      '## Mécanismes\n- Réaction **dissociative** à des émotions ou des souvenirs intolérables, non simulée\n- Facteurs : **traumatismes** (violences sexuelles, conflits armés), stress, dépression, anxiété, trouble de stress post-traumatique, troubles de la personnalité\n- Coexistence possible avec une épilepsie (10–20 %)',
    diagnostic:
      '## Éléments évocateurs\n- Crises **longues** (> 2 min), début et fin progressifs, fluctuations\n- **Yeux fermés** avec résistance à l’ouverture, mouvements **asynchrones**, balancement du bassin, mouvements de « non » de la tête, opisthotonos\n- **Pleurs**, réponse partielle pendant la crise, souvenir de l’épisode, pas de **confusion post-critique**\n- Survenue en présence de témoins, en contexte émotionnel, jamais pendant le sommeil vrai\n- Morsure latérale de langue, incontinence et blessures graves rares (mais possibles)\n\n## Examens\n- **Vidéo** des crises (téléphone de la famille), **EEG** (normal pendant la crise : vidéo-EEG de référence)\n- Évaluation psychiatrique (dépression, stress post-traumatique), recherche de violences',
    examens: [
      ['confirmation', 'eeg', 'Normal pendant une crise (vidéo-EEG).'],
      ['etiologique', 'glycemie', 'Hypoglycémie.'],
      ['deuxieme_intention', 'ecg', 'Syncope cardiaque.'],
    ],
    scores: [],
    differentiels: [
      ['epilepsie', 'Crises stéréotypées, yeux ouverts, confusion post-critique.'],
      ['syncope-et-malaise', 'Perte de connaissance brève avec pâleur.'],
      ['etat-de-stress-post-traumatique', 'Trouble associé.'],
      ['hypoglycemie-adulte', 'Malaise avec sueurs.'],
      ['Simulation', 'Production volontaire avec bénéfice recherché (rare).'],
    ],
    etiologies:
      '## Facteurs\n- Traumatismes, violences, stress, dépression, anxiété, stress post-traumatique',
    principes: [
      [
        'Annonce du diagnostic',
        'Étape thérapeutique majeure.',
        '- Expliquer que les crises sont **réelles**, involontaires, non dangereuses comme l’épilepsie, et qu’elles peuvent guérir\n- Éviter les termes « simulation » ou « hystérie » ; impliquer la famille\n- Ne pas renforcer par des injections ou une hospitalisation systématiques',
      ],
      [
        'Traitement',
        'Psychologique.',
        '- **Psychothérapie** (thérapie cognitivo-comportementale, approches centrées sur le traumatisme), soutien psychosocial\n- Traitement de la **dépression** et de l’**anxiété** (fluoxétine, sertraline)\n- **Arrêt progressif** des antiépileptiques s’il n’y a pas d’épilepsie associée\n- Prise en charge des violences et protection',
      ],
      [
        'Pendant la crise',
        'Rassurer.',
        '- Protéger des chocs, parler calmement, attendre la fin ; pas de benzodiazépines répétées si le diagnostic est établi',
      ],
    ],
    molecules: [
      ['fluoxetine', 'alternative', 'Dépression, anxiété associées'],
      ['sertraline', 'alternative', 'Dépression, stress post-traumatique'],
    ],
    complications: [
      {
        nom: 'Iatrogénie',
        description: 'Traitements antiépileptiques et intubations inutiles.',
        traitement: '- Diagnostic correct',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Handicap et désinsertion',
        description: 'Crises fréquentes.',
        traitement: '- Psychothérapie',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'depression',
        description: 'Comorbidité.',
        traitement: '- Antidépresseurs, suivi',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Amélioration chez la moitié des patients après une annonce bien conduite et une psychothérapie ; meilleur pronostic si diagnostic précoce',
    urgences: [],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Troubles du comportement', 'occasionnel'],
      ['Syncope', 'occasionnel'],
    ],
    sources: ['ILAE — recommandations de pratique clinique', 'mhGAP Intervention Guide 2.0'],
    niveaux: {
      cs: ['- Repérer, rassurer, éviter les injections inutiles, orienter', ''],
      hgr: ['- EEG, avis psychiatrique', ''],
      tert: ['- Vidéo-EEG, psychothérapie spécialisée', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Crises psychogènes isolées',
        type: 'commune',
        description: 'Forme habituelle.',
        terrain: '- Adolescente, adulte jeune',
        fonctionnels: '- Crises prolongées, yeux fermés',
        generaux: '',
        physiques: '',
        paraclinique: '- EEG normal',
        etiologies: '- Traumatismes',
        syndromes: [],
      },
      {
        nom: 'Association à une épilepsie',
        type: 'terrain',
        description: 'Diagnostic difficile.',
        terrain: '- Épileptique connu',
        fonctionnels: '- Deux types de crises',
        generaux: '',
        physiques: '',
        paraclinique: '- Vidéo-EEG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Épilepsie-absences
  {
    ...EPI,
    slug: 'epilepsie-absences',
    nom: 'Épilepsie-absences',
    resume:
      'Épilepsie généralisée de l’enfant d’âge scolaire (4–10 ans, plus souvent la fille) : absences typiques très brèves (5–15 secondes), pluriquotidiennes (jusqu’à des dizaines par jour), avec arrêt de l’activité, regard fixe, parfois clignements ou automatismes, sans chute ni confusion, souvent prises pour de l’inattention ou de la « rêverie » et responsables de difficultés scolaires ; provoquées par l’hyperventilation (test au cabinet de 3 minutes) ; EEG : pointes-ondes généralisées à 3 Hz ; traitement par éthosuximide ou valproate (lamotrigine en alternative) ; la carbamazépine et la phénytoïne aggravent les absences ; bon pronostic, guérison à l’adolescence dans la majorité des cas.',
    definition:
      'Syndrome épileptique généralisé idiopathique de l’enfant caractérisé par des absences typiques fréquentes et des pointes-ondes généralisées à 3 Hz à l’EEG.',
    physiopathologie:
      '## Mécanisme\n- Oscillations thalamo-corticales anormales (canaux calciques de type T) → décharges de pointes-ondes généralisées\n- Prédisposition **génétique** (antécédents familiaux)\n\n## Facteurs déclenchants\n- **Hyperventilation**, manque de sommeil, fatigue',
    diagnostic:
      '## Clinique\n- **Absences** : rupture de contact brutale de 5–15 s, regard fixe, arrêt de la parole ou de l’activité, reprise immédiate sans confusion\n- Clignements palpébraux, automatismes (mâchonnement)\n- Très fréquentes (10 à 100 par jour) ; enfant normal par ailleurs\n- **Test d’hyperventilation** (souffler 3 minutes) : déclenche une absence\n- Signalées comme « inattention » par l’école\n\n## Examens\n- **EEG** : **pointes-ondes généralisées à 3 Hz**, favorisées par l’hyperventilation\n- Imagerie non nécessaire dans la forme typique',
    examens: [
      ['confirmation', 'eeg', 'Pointes-ondes généralisées à 3 Hz.'],
      ['etiologique', 'glycemie', 'Malaise hypoglycémique.'],
      ['deuxieme_intention', 'irm-cerebrale', 'Forme atypique.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['trouble-deficit-attention-hyperactivite', 'Inattention sans rupture de contact brutale.'],
      ['epilepsie-enfant', 'Crises focales avec rupture de contact (plus longues, confusion).'],
      ['Rêverie', 'Interrompue par une stimulation.'],
      ['syndrome-de-lennox-gastaut', 'Absences atypiques avec retard et autres crises.'],
    ],
    etiologies: '## Cause\n- Génétique (épilepsie généralisée idiopathique)',
    principes: [
      [
        'Traitement',
        'Monothérapie.',
        '- **Éthosuximide** (premier choix si absences isolées) ou **valproate** (si crises tonico-cloniques associées ; à éviter chez l’adolescente)\n- **Lamotrigine** en alternative\n- **Ne pas utiliser** carbamazépine, phénytoïne, oxcarbazépine (aggravation)',
      ],
      [
        'Suivi',
        'École et observance.',
        '- Information des parents et des enseignants, hygiène de sommeil\n- Contrôle par le test d’hyperventilation et l’EEG\n- Arrêt progressif après 2 ans sans absence',
      ],
    ],
    molecules: [
      ['ethosuximide', 'premiere', 'Absences isolées'],
      ['valproate-de-sodium-acide-valproique', 'premiere', 'Absences avec crises généralisées'],
      ['lamotrigine', 'alternative', 'Alternative'],
    ],
    complications: [
      {
        nom: 'Difficultés scolaires',
        description: 'Absences méconnues.',
        traitement: '- Traitement, information de l’école',
        clinique: '- Baisse des résultats',
        paraclinique: '',
      },
      {
        nom: 'Crises généralisées tonico-cloniques',
        fiche: 'epilepsie-enfant',
        description: 'Évolution chez certains.',
        traitement: '- Valproate',
        clinique: '- Convulsions',
        paraclinique: '',
      },
      {
        nom: 'Accidents',
        description: 'Absences en traversant la route, à vélo, à la baignade.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Rémission dans 70–80 % des cas à l’adolescence',
    urgences: [],
    symptomes: [
      ['Absences', 'tres_frequent'],
      ['Troubles du langage', 'occasionnel'],
    ],
    sources: [
      'ILAE — recommandations de pratique clinique',
      'Nelson Textbook of Pediatrics',
      'mhGAP Intervention Guide 2.0',
    ],
    niveaux: {
      cs: ['- Test d’hyperventilation, orientation', '- Enfant « inattentif » avec absences'],
      hgr: ['- EEG, valproate', ''],
      tert: ['- Neuropédiatrie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Épilepsie-absences de l’enfant',
        type: 'commune',
        description: 'Forme typique.',
        terrain: '- Enfant 4–10 ans',
        fonctionnels: '- Absences pluriquotidiennes',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- Pointes-ondes 3 Hz',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Épilepsie-absences de l’adolescent',
        type: 'terrain',
        description: 'Absences moins fréquentes.',
        terrain: '- Adolescent',
        fonctionnels: '- Absences, crises tonico-cloniques',
        generaux: '',
        physiques: '',
        paraclinique: '- EEG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Syndrome de Lennox-Gastaut
  {
    ...EPI,
    slug: 'syndrome-de-lennox-gastaut',
    nom: 'Syndrome de Lennox-Gastaut',
    resume:
      'Encéphalopathie épileptique sévère débutant entre 1 et 8 ans, souvent secondaire (séquelles d’asphyxie périnatale, de méningite ou de neuropaludisme, malformations, syndrome de West antérieur) : crises multiples (toniques surtout nocturnes, atoniques avec chutes brutales et traumatismes de la face, absences atypiques), retard ou régression cognitive et troubles du comportement, EEG avec pointes-ondes lentes < 2,5 Hz et rythmes rapides pendant le sommeil ; pharmacorésistance habituelle : valproate en premier, puis lamotrigine, clobazam, topiramate, rufinamide ; éviter la carbamazépine ; casque de protection contre les chutes ; régime cétogène et chirurgie palliative en centre spécialisé ; soutien des familles et scolarisation adaptée.',
    definition:
      'Encéphalopathie épileptique de l’enfant associant des crises de types multiples (toniques, atoniques, absences atypiques), un ralentissement cognitif et un EEG intercritique de pointes-ondes lentes diffuses.',
    physiopathologie:
      '## Causes\n- **Symptomatiques** (70 %) : encéphalopathie anoxo-ischémique néonatale, séquelles de **méningite**, d’**encéphalite**, de **neuropaludisme**, malformations corticales, sclérose tubéreuse, traumatismes\n- Évolution d’un **syndrome de West** (spasmes infantiles)\n- Cryptogéniques\n\n## Conséquences\n- Activité épileptique continue perturbant le développement cognitif',
    diagnostic:
      '## Clinique\n- **Crises toniques** (surtout pendant le sommeil), **crises atoniques** (chutes brutales, blessures du visage et des dents), **absences atypiques** (début et fin progressifs), crises myoclonico-astatiques, états de mal non convulsifs\n- **Retard** ou régression du développement, troubles du comportement (hyperactivité, autisme)\n\n## Examens\n- **EEG** : pointes-ondes lentes (< 2,5 Hz) diffuses, rythmes rapides de 10 Hz pendant le sommeil\n- **IRM** cérébrale (cause), bilan selon le contexte',
    examens: [
      ['confirmation', 'eeg', 'Pointes-ondes lentes, rythmes rapides de sommeil.'],
      ['etiologique', 'irm-cerebrale', 'Lésions séquellaires, malformations.'],
      ['deuxieme_intention', 'scanner-cerebral', 'Calcifications, séquelles.'],
      ['gravite', 'bilan-hepatique', 'Tolérance du valproate.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['epilepsie-absences', 'Absences typiques, enfant normal.'],
      ['epilepsie-enfant', 'Épilepsie sans encéphalopathie.'],
      ['paralysie-cerebrale', 'Séquelles motrices avec épilepsie.'],
      ['Syndrome de Dravet', 'Crises fébriles prolongées du nourrisson.'],
    ],
    etiologies:
      '## Causes\n- Encéphalopathie anoxo-ischémique, séquelles infectieuses, malformations, syndrome de West',
    principes: [
      [
        'Antiépileptiques',
        'Résistance habituelle.',
        '- **Valproate** en première intention\n- Associations : **lamotrigine**, **clobazam**, **topiramate**, rufinamide (centre spécialisé)\n- **Éviter** la carbamazépine (aggrave les absences atypiques et les chutes) ; prudence avec les benzodiazépines IV (crises toniques)\n- Objectif réaliste : réduire les chutes et les crises les plus invalidantes',
      ],
      [
        'Autres traitements',
        'Centre spécialisé.',
        '- **Régime cétogène**, callosotomie (chutes), stimulation du nerf vague',
      ],
      [
        'Accompagnement',
        'Famille.',
        '- **Casque** de protection, surveillance, soins dentaires\n- Rééducation, scolarisation adaptée, soutien des familles, lutte contre la stigmatisation et l’abandon',
      ],
    ],
    molecules: [
      ['valproate-de-sodium-acide-valproique', 'premiere', 'Première intention'],
      ['lamotrigine', 'alternative', 'Association'],
      ['clobazam', 'alternative', 'Association'],
      ['topiramate', 'alternative', 'Association'],
      ['levetiracetam', 'alternative', 'Association'],
      ['diazepam', 'adjuvant', 'Crise prolongée'],
    ],
    complications: [
      {
        nom: 'Traumatismes par chutes',
        description: 'Crises atoniques.',
        traitement: '- Casque',
        clinique: '- Plaies, fractures dentaires',
        paraclinique: '',
      },
      {
        nom: 'État de mal épileptique',
        fiche: 'etat-de-mal-epileptique',
        description: 'Fréquent, parfois non convulsif.',
        traitement: '- Benzodiazépines',
        clinique: '- Somnolence, crises répétées',
        paraclinique: '- EEG',
      },
      {
        nom: 'Déficience intellectuelle',
        fiche: 'deficience-intellectuelle',
        description: 'Quasi constante.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Sévère : persistance des crises à l’âge adulte et déficience intellectuelle chez la majorité',
    urgences: ['etat-de-mal-epileptique-urgence'],
    symptomes: [
      ['Convulsions', 'tres_frequent'],
      ['Absences', 'frequent'],
      ['Régression des acquisitions', 'frequent'],
      ['Troubles du comportement', 'frequent'],
    ],
    sources: ['ILAE — recommandations de pratique clinique', 'Nelson Textbook of Pediatrics'],
    niveaux: {
      cs: ['- Suivi, observance, soutien des familles', ''],
      hgr: ['- Valproate, EEG', ''],
      tert: ['- Neuropédiatrie, régime cétogène, chirurgie', ''],
    },
    alertes: { 'etat-de-mal-epileptique-urgence': 'Crises répétées ou somnolence inhabituelle prolongée' },
    formes: [
      {
        nom: 'Forme symptomatique',
        type: 'commune',
        description: 'Séquelles cérébrales.',
        terrain: '- Antécédent d’asphyxie, de méningite',
        fonctionnels: '- Crises multiples',
        generaux: '',
        physiques: '- Déficits neurologiques',
        paraclinique: '- IRM lésionnelle',
        etiologies: '',
        syndromes: ['syndrome-convulsif'],
      },
      {
        nom: 'Évolution d’un syndrome de West',
        type: 'evolutive',
        description: 'Après spasmes infantiles.',
        terrain: '- Nourrisson',
        fonctionnels: '- Spasmes puis crises toniques',
        generaux: '',
        physiques: '',
        paraclinique: '- EEG',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
