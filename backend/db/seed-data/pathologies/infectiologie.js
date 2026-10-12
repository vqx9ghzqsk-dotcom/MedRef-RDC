'use strict';

/**
 * Fiches — Infectiologie et pneumologie infectieuse (médecine interne).
 *
 * Format d'une fiche (voir aussi seed.js) :
 *   examens       : [catégorie, slug examen, interprétation dans cette pathologie]
 *   differentiels : [slug de fiche OU libellé libre, éléments distinctifs]
 *   principes     : [titre, objectif, détails]
 *   molecules     : [slug molécule, ligne, contexte]
 *   complications : { nom, fiche?, description, traitement, clinique, paraclinique }
 */

module.exports = [
  // =================================================================== Paludisme grave
  {
    specialite: 'Infectiologie',
    slug: 'paludisme-grave',
    nom: 'Paludisme grave',
    resume:
      'Accès palustre à P. falciparum avec défaillance d’organe — urgence vitale, première cause de mortalité infantile en RDC.',
    definition:
      'Accès palustre à *Plasmodium falciparum* (plus rarement *P. vivax* ou *P. knowlesi*) associé à au moins un critère de gravité clinique ou biologique défini par l’OMS, en l’absence d’autre cause évidente.',
    physiopathologie:
      '## Mécanismes\n- Cytoadhérence des hématies parasitées à l’endothélium (séquestration microvasculaire)\n- Rosetting et obstruction capillaire → hypoxie tissulaire\n- Hémolyse et dysérythropoïèse → anémie\n- Réponse inflammatoire systémique, consommation du glucose → hypoglycémie, acidose lactique',
    diagnostic:
      '## Contexte\n- Fièvre ou notion de fièvre en zone d’endémie (toute la RDC)\n\n## Critères cliniques de gravité (OMS)\n- Troubles de la conscience : Glasgow < 11 (adulte), Blantyre < 3 (enfant)\n- Prostration (incapacité à s’asseoir, à boire ou à téter)\n- Convulsions répétées (> 2 en 24 h)\n- Détresse respiratoire (respiration acidosique), OAP\n- Choc : PAS < 80 mmHg (adulte), < 70 mmHg (enfant), extrémités froides\n- Saignements anormaux, ictère, hémoglobinurie (urines « coca-cola »)',
    examens: [
      [
        'confirmation',
        'tdr-paludisme',
        'Positif (antigène HRP2) : confirme l’infection à P. falciparum. Ne quantifie pas la parasitémie et ne retarde jamais le traitement.',
      ],
      [
        'confirmation',
        'goutte-epaisse',
        'Parasitémie quantifiée : hyperparasitémie > 10 % = critère de gravité. Sert aussi au suivi de l’efficacité.',
      ],
      [
        'gravite',
        'glycemie',
        'Hypoglycémie < 2,2 mmol/L (0,40 g/L) = critère de gravité. Contrôle toutes les 4 h (et sous quinine).',
      ],
      [
        'gravite',
        'nfs',
        'Anémie sévère : Hb < 5 g/dL (enfant < 12 ans) ou < 7 g/dL (adulte) = critère de gravité. Thrombopénie fréquente, sans valeur de gravité.',
      ],
      [
        'gravite',
        'creatinine',
        'Créatinine > 265 µmol/L (3 mg/dL) ou urée > 20 mmol/L = insuffisance rénale (critère de gravité).',
      ],
      [
        'gravite',
        'bilan-hepatique',
        'Bilirubine > 50 µmol/L (3 mg/dL) avec parasitémie > 100 000/µL = ictère grave.',
      ],
      ['gravite', 'lactates', 'Lactates ≥ 5 mmol/L = acidose (critère de gravité).'],
      ['gravite', 'ionogramme', 'Bicarbonates < 15 mmol/L = acidose métabolique (critère de gravité).'],
      [
        'etiologique',
        'lcr',
        'Si coma ou convulsions avec doute : éliminer une méningite bactérienne (LCR normal dans le neuropaludisme).',
      ],
      [
        'etiologique',
        'hemocultures',
        'Bactériémie associée fréquente chez l’enfant (salmonelles non typhiques) : à prélever si disponible.',
      ],
      ['pretherapeutique', 'groupage-rai', 'Avant transfusion en cas d’anémie sévère.'],
      [
        'gravite',
        'radiographie-thoracique',
        'Détresse respiratoire : OAP lésionnel/SDRA, pneumopathie associée.',
      ],
      [
        'etiologique',
        'fond-d-oeil',
        'Rétinopathie palustre (blanchiment rétinien, hémorragies) : spécifique du neuropaludisme de l’enfant.',
      ],
      ['suivi', 'nfs', 'Hémoglobine à J7, J14 et J28 : dépistage de l’hémolyse retardée post-artésunate.'],
    ],
    scores: ['glasgow', 'blantyre', 'dose-ponderale', 'debit-perfusion'],
    differentiels: [
      [
        'meningite-bacterienne',
        'Raideur de nuque, purpura, LCR trouble à polynucléaires. Les deux peuvent coexister : ponction lombaire au moindre doute.',
      ],
      ['Sepsis bactérien', 'Foyer infectieux identifiable, hémocultures positives, TDR négatif.'],
      [
        'Fièvre typhoïde',
        'Fièvre progressive en plateau, pouls dissocié, troubles digestifs ; hémocultures positives.',
      ],
      ['Encéphalite virale', 'TDR négatif, LCR lymphocytaire ; contexte épidémique (rage, arboviroses).'],
      [
        'Trypanosomiase humaine africaine',
        'Fièvre prolongée, troubles du sommeil et du comportement, adénopathies cervicales postérieures ; dépistage sérologique (CATT) puis recherche de trypanosomes (sang, ganglion, LCR).',
      ],
      [
        'etat-de-mal-epileptique',
        'Épilepsie connue, convulsions sans fièvre. En zone d’endémie, le paludisme reste une cause fréquente d’état de mal : TDR systématique.',
      ],
    ],
    etiologies:
      '## Agent\n- *Plasmodium falciparum* (≈ 95 % des cas en RDC)\n\n## Terrain à risque\n- Enfants de moins de 5 ans\n- Femmes enceintes\n- Personnes vivant avec le VIH, drépanocytaires, splénectomisés\n- Sujets non immuns (voyageurs, déplacés)\n\n## Facteurs favorisants\n- Retard de consultation, automédication, traitement incomplet\n- Absence de moustiquaire imprégnée d’insecticide',
    principes: [
      [
        'Reconnaître la gravité et hospitaliser',
        'Identifier tout critère de gravité OMS et mettre le patient en condition.',
        '- Hospitalisation, PLS si troubles de la conscience\n- Voie veineuse, pesée (doses selon le poids), glycémie capillaire immédiate\n- Bilan de gravité sans retarder le traitement\n- Si le traitement parentéral est impossible sur place : artésunate rectal (enfant < 6 ans) puis transfert',
      ],
      [
        'Traitement antipaludique parentéral sans délai',
        'Réduire le plus vite possible la biomasse parasitaire.',
        '- **Artésunate IV ou IM** (1re intention, tous âges, grossesse comprise) : 2,4 mg/kg à H0, H12, H24 puis toutes les 24 h (3 mg/kg si < 20 kg)\n- Au moins 3 doses (24 h) avant le relais oral\n- Alternatives si artésunate indisponible : artéméther IM, puis quinine IV',
      ],
      [
        'Traiter les défaillances et complications',
        'Corriger ce qui tue à court terme : hypoglycémie, convulsions, anémie, choc, acidose.',
        '- Hypoglycémie : glucosé 10 % 5 mL/kg (enfant)\n- Convulsions : diazépam, puis phénobarbital si récidive\n- Anémie sévère : transfusion selon les seuils\n- Pas de corticoïdes, de mannitol ni d’héparine (inefficaces ou délétères)\n- Remplissage prudent : pas de bolus systématique chez l’enfant sans choc',
      ],
      [
        'Relais oral par une CTA complète',
        'Éliminer les parasites résiduels et prévenir la recrudescence.',
        '- Dès que la voie orale est possible (après ≥ 24 h de traitement parentéral)\n- Cure complète de 3 jours : artéméther-luméfantrine ou artésunate-amodiaquine (protocole PNLP)',
      ],
      [
        'Surveillance et prévention',
        'Dépister les complications retardées et prévenir les nouveaux accès.',
        '- Conscience, température, glycémie, diurèse, Hb\n- Hémoglobine à J7, J14, J28 (hémolyse retardée)\n- Moustiquaire imprégnée, chimioprévention selon le terrain, vaccination antipaludique de l’enfant selon le calendrier national',
      ],
    ],
    molecules: [
      [
        'artesunate',
        'premiere',
        'IV ou IM en 1re intention ; voie rectale en pré-transfert (enfant < 6 ans)',
      ],
      [
        'artemether',
        'alternative',
        'IM si artésunate indisponible ; per os en association avec la luméfantrine pour le relais',
      ],
      ['quinine', 'alternative', 'IV si artésunate et artéméther indisponibles'],
      ['lumefantrine', 'adjuvant', 'Relais oral (artéméther-luméfantrine)'],
      ['amodiaquine', 'adjuvant', 'Relais oral possible (artésunate-amodiaquine)'],
      ['glucose-10', 'adjuvant', 'Prévention et correction de l’hypoglycémie'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['phenobarbital', 'adjuvant', 'Convulsions récidivantes'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
      ['ceftriaxone', 'adjuvant', 'Choc ou suspicion de bactériémie ou de méningite associée'],
    ],
    complications: [
      {
        nom: 'Neuropaludisme (coma, convulsions)',
        description:
          'Encéphalopathie diffuse par séquestration cérébrale ; séquelles neurologiques chez 10–20 % des enfants survivants.',
        traitement:
          '- PLS, liberté des voies aériennes, oxygène\n- Corriger l’hypoglycémie\n- Convulsions : diazépam 0,3 mg/kg IV ou 0,5 mg/kg intrarectal, puis phénobarbital 20 mg/kg si récidive\n- Pas de corticoïdes ni de mannitol\n- Nursing : retournements, sonde nasogastrique si coma prolongé',
        clinique:
          '- Glasgow (adulte) ou Blantyre (enfant) toutes les 4 h\n- Convulsions (y compris discrètes : mâchonnement, déviation du regard)\n- Pupilles, tonus, signes d’engagement',
        paraclinique: '- Glycémie toutes les 4 h\n- Ponction lombaire si doute de méningite',
      },
      {
        nom: 'Hypoglycémie',
        description:
          'Fréquente chez l’enfant, la femme enceinte et sous quinine ; souvent masquée par le coma.',
        traitement:
          '- Enfant : glucosé 10 % 5 mL/kg IV (ou par sonde gastrique)\n- Adulte : glucosé 10 % 150–250 mL ou glucosé 30 % 50 mL IV\n- Puis perfusion glucosée d’entretien et alimentation dès que possible',
        clinique: '- Conscience, sueurs, convulsions, respiration',
        paraclinique: '- Glycémie capillaire 15–30 min après correction, puis toutes les 4 h',
      },
      {
        nom: 'Anémie sévère',
        description: 'Hémolyse et dysérythropoïèse ; risque d’insuffisance cardiaque et de décès.',
        traitement:
          '- Transfusion si Hb < 4 g/dL, ou < 6 g/dL avec signes de gravité (enfant) ; Hb < 7 g/dL chez l’adulte\n- Sang total 20 mL/kg (ou culot 10 mL/kg) en 3–4 h ; furosémide si surcharge',
        clinique:
          '- FC, FR, signes d’insuffisance cardiaque (hépatomégalie, galop)\n- Tolérance transfusionnelle',
        paraclinique: '- Hb après transfusion, puis à J7, J14, J28',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Surtout chez l’adulte ; tubulopathie aiguë, hémoglobinurie.',
        traitement:
          '- Corriger une hypovolémie avec prudence (risque d’OAP)\n- Éviter les néphrotoxiques, adapter les posologies\n- Épuration extrarénale si hyperkaliémie, acidose, surcharge ou urémie réfractaires',
        clinique: '- Diurèse horaire, poids, œdèmes, bilan entrées-sorties',
        paraclinique: '- Créatinine, urée, kaliémie quotidiennes',
      },
      {
        nom: 'Œdème pulmonaire / SDRA',
        description: 'OAP lésionnel, souvent iatrogène (surcharge hydrique), de pronostic sévère.',
        traitement:
          '- Position demi-assise, oxygène, restriction des apports\n- Furosémide si surcharge\n- Ventilation (VNI ou mécanique) si disponible',
        clinique: '- FR, SpO2, crépitants, signes de lutte',
        paraclinique: '- Radiographie thoracique, gaz du sang si disponibles',
      },
      {
        nom: 'Choc (paludisme « algide »)',
        description: 'Souvent lié à une bactériémie associée.',
        traitement:
          '- Remplissage prudent (cristalloïdes), rechercher et traiter une bactériémie (ceftriaxone)\n- Vasopresseurs si choc persistant',
        clinique: '- PA, FC, temps de recoloration, conscience, diurèse',
        paraclinique: '- Lactates, hémocultures',
      },
      {
        nom: 'Hémolyse retardée post-artésunate',
        description:
          'Anémie hémolytique 1 à 3 semaines après le traitement, surtout en cas d’hyperparasitémie.',
        traitement: '- Le plus souvent spontanément résolutive\n- Transfusion si anémie sévère mal tolérée',
        clinique: '- Pâleur, ictère, urines foncées, fatigue après la sortie',
        paraclinique: '- Hb, réticulocytes, LDH, bilirubine à J7, J14, J28',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité de 10 à 20 % malgré le traitement, bien plus élevée sans traitement\n- Sous artésunate précoce, amélioration de la conscience en 24–72 h\n\n## Critères de sortie\n- Apyrexie, conscience normale, alimentation orale, cure de CTA complète\n- Rendez-vous de contrôle (Hb) et prévention (moustiquaire)',
    urgences: ['paludisme-grave-urgence'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'frequent'],
      ['Pâleur', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Ictère', 'occasionnel'],
      ['Dyspnée', 'occasionnel'],
      ['Oligurie', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      'Guide clinique et thérapeutique',
    ],
  },

  // =================================================================== Paludisme simple
  {
    specialite: 'Infectiologie',
    slug: 'paludisme-simple',
    nom: 'Paludisme simple',
    resume: 'Accès palustre confirmé sans critère de gravité : CTA de 3 jours en ambulatoire.',
    definition:
      'Fièvre (ou antécédent de fièvre dans les 48 h) avec test de diagnostic parasitologique positif (TDR ou microscopie), sans aucun critère clinique ou biologique de gravité.',
    physiopathologie:
      '## Mécanismes\n- Cycle érythrocytaire asexué : éclatement des hématies et libération de pyrogènes (accès fébriles)\n- Incubation de 7 à 15 jours pour P. falciparum\n- Tout accès simple à P. falciparum peut évoluer vers la gravité en quelques heures, surtout chez le jeune enfant',
    diagnostic:
      '## Clinique\n- Fièvre, frissons, sueurs, céphalées, myalgies\n- Troubles digestifs (vomissements, diarrhée) fréquents chez l’enfant\n- Splénomégalie, pâleur modérée\n\n## Rechercher systématiquement\n- Signes de danger (PCIME) : incapacité à boire, vomit tout, convulsions, léthargie\n- Tout critère de gravité → fiche « Paludisme grave »',
    examens: [
      [
        'confirmation',
        'tdr-paludisme',
        'Positif : traiter. Tester avant tout traitement (« tester, traiter, suivre ») ; un TDR négatif doit faire rechercher une autre cause de fièvre.',
      ],
      [
        'confirmation',
        'goutte-epaisse',
        'Alternative au TDR ; permet d’identifier l’espèce et de quantifier la parasitémie.',
      ],
      [
        'gravite',
        'glycemie',
        'Enfant qui vomit ou somnolent : une hypoglycémie fait classer en paludisme grave.',
      ],
      ['deuxieme_intention', 'nfs', 'Non nécessaire au diagnostic ; anémie et thrombopénie fréquentes.'],
      [
        'suivi',
        'goutte-epaisse',
        'Fièvre persistante à J3 : parasitémie > 25 % de celle de J0 = échec. Le TDR HRP2 reste positif plusieurs semaines : inutile pour le contrôle.',
      ],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Fièvre typhoïde', 'Fièvre en plateau, douleurs abdominales, pouls dissocié ; TDR négatif.'],
      [
        'pneumonie-enfant',
        'Toux, respiration rapide ou tirage chez l’enfant ; une co-infection est possible.',
      ],
      ['Infection urinaire', 'Brûlures mictionnelles, douleurs lombaires ; bandelette urinaire positive.'],
      [
        'Grippe et autres viroses',
        'Contexte épidémique, TDR négatif : ne pas donner d’antipaludique sur un TDR négatif.',
      ],
      [
        'Arboviroses (chikungunya, dengue)',
        'Arthralgies intenses, éruption, contexte épidémique ; TDR négatif.',
      ],
      [
        'meningite-bacterienne',
        'Raideur de nuque, céphalées intenses, troubles de la conscience : ponction lombaire.',
      ],
    ],
    etiologies:
      '## Agents\n- *P. falciparum* (majoritaire), *P. malariae*, *P. ovale*\n\n## Facteurs\n- Transmission pérenne dans toute la RDC, pics en saison des pluies\n- Absence de moustiquaire imprégnée, habitat proche des gîtes larvaires',
    principes: [
      [
        'Confirmer avant de traiter',
        'Ne traiter que les cas confirmés.',
        '- TDR (ou microscopie) chez tout patient fébrile\n- Exception : test impossible et signes de gravité → traiter comme un paludisme grave',
      ],
      [
        'CTA de 3 jours selon le poids',
        'Guérir l’accès et prévenir la recrudescence.',
        '- 1re intention (PNLP) : artéméther-luméfantrine (6 prises, avec un aliment gras) ou artésunate-amodiaquine (1 prise/j)\n- Alternative : dihydroartémisinine-pipéraquine\n- 1re dose sous observation ; redonner la dose si vomissement dans les 30 min (demi-dose entre 30 et 60 min)',
      ],
      [
        'Traitement symptomatique et conseils',
        'Soulager et faire revenir à temps.',
        '- Paracétamol si fièvre, hydratation, poursuite de l’alimentation et de l’allaitement\n- Revenir immédiatement en cas de signe de danger ou de fièvre persistante après 48–72 h',
      ],
      [
        'Populations particulières',
        'Adapter le traitement au terrain.',
        '- Grossesse : artéméther-luméfantrine utilisable à tous les trimestres (OMS 2022)\n- Nourrisson < 5 kg : artéméther-luméfantrine selon le poids\n- PVVIH sous éfavirenz ou zidovudine : éviter l’amodiaquine',
      ],
      [
        'Prévention',
        'Réduire la transmission et les nouveaux accès.',
        '- Moustiquaire imprégnée d’insecticide pour tous\n- Traitement préventif intermittent chez la femme enceinte (sulfadoxine-pyriméthamine) selon le protocole national\n- Vaccins antipaludiques (RTS,S/AS01, R21/Matrix-M) chez l’enfant selon le calendrier national',
      ],
    ],
    molecules: [
      ['artemether', 'premiere', 'Artéméther-luméfantrine : CTA de 1re intention (PNLP)'],
      ['lumefantrine', 'premiere', 'Associée à l’artéméther'],
      ['artesunate', 'premiere', 'Artésunate-amodiaquine : CTA de 1re intention (PNLP)'],
      ['amodiaquine', 'premiere', 'Associée à l’artésunate'],
      ['dihydroartemisinine', 'alternative', 'Dihydroartémisinine-pipéraquine'],
      ['piperaquine', 'alternative', 'Associée à la dihydroartémisinine'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Évolution vers un paludisme grave',
        fiche: 'paludisme-grave',
        description: 'Possible en quelques heures, surtout chez l’enfant < 5 ans et la femme enceinte.',
        traitement:
          '- Arrêter le traitement oral et débuter l’artésunate parentéral\n- Pré-transfert : artésunate rectal chez l’enfant < 6 ans',
        clinique: '- Signes de danger : conscience, convulsions, capacité à boire, respiration',
        paraclinique: '- Glycémie, hémoglobine',
      },
      {
        nom: 'Vomissements empêchant le traitement oral',
        description: 'Fréquents chez l’enfant fébrile.',
        traitement:
          '- Antipyrétique puis redonner la dose\n- Vomissements répétés : traiter comme un paludisme grave (artésunate parentéral ou rectal avant transfert)',
        clinique: '- Nombre de vomissements, hydratation',
        paraclinique: '- Glycémie si somnolence',
      },
      {
        nom: 'Échec thérapeutique',
        description:
          'Persistance ou réapparition des parasites dans les 28 jours (42 jours avec la pipéraquine) après une CTA bien prise.',
        traitement:
          '- Vérifier l’observance et la qualité du médicament\n- Traiter par une autre CTA que celle reçue',
        clinique: '- Fièvre persistante à J3 ou réapparition',
        paraclinique: '- Goutte épaisse (le TDR HRP2 reste positif)',
      },
      {
        nom: 'Anémie post-palustre',
        description: 'Surtout chez l’enfant après des accès répétés.',
        traitement: '- Fer et acide folique après la guérison de l’accès, déparasitage, prévention des accès',
        clinique: '- Pâleur, tolérance à l’effort',
        paraclinique: '- Hémoglobine à 2–4 semaines',
      },
    ],
    evolution:
      '## Évolution sous traitement\n- Apyrexie en 24–48 h sous CTA\n- Guérison si la cure de 3 jours est complète\n\n## Suivi\n- Revoir si la fièvre persiste à J3 ou réapparaît',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Splénomégalie', 'occasionnel'],
      ['Diarrhée', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines for malaria',
      'Directives nationales de prise en charge du paludisme',
      'Guide clinique et thérapeutique',
    ],
  },

  // =================================================================== VIH
  {
    specialite: 'Infectiologie',
    slug: 'infection-vih',
    nom: 'Infection à VIH',
    resume:
      'Infection chronique par le VIH : dépistage, TARV le jour même (TLD), prévention et prise en charge de la maladie avancée.',
    definition:
      'Infection chronique par le virus de l’immunodéficience humaine (VIH-1, plus rarement VIH-2) responsable d’une destruction progressive des lymphocytes T CD4. Le stade SIDA correspond au stade clinique OMS 4 ; la maladie à VIH avancée est définie par des CD4 < 200/mm³ ou un stade OMS 3–4 (tout enfant < 5 ans).',
    physiopathologie:
      '## Mécanismes\n- Tropisme pour les cellules CD4 (lymphocytes, macrophages) via les corécepteurs CCR5/CXCR4\n- Réplication intense dès la primo-infection, réservoirs viraux persistants\n- Déplétion CD4 et activation immunitaire chronique → infections opportunistes et cancers',
    diagnostic:
      '## Quand dépister\n- Systématiquement : consultation prénatale, tuberculose, IST, malnutrition, hospitalisation\n- Signes évocateurs : amaigrissement, diarrhée chronique, candidose buccale, zona, infections répétées\n\n## Stadification\n- Stades cliniques OMS 1 à 4, CD4\n- Rechercher la maladie avancée : tuberculose, cryptococcose, infections bactériennes graves',
    examens: [
      [
        'confirmation',
        'tdr-vih',
        'Algorithme national à 3 tests rapides : 3 tests réactifs = séropositivité. Enfant < 18 mois : diagnostic par PCR (diagnostic précoce du nourrisson).',
      ],
      [
        'pretherapeutique',
        'cd4',
        'Bilan initial : < 200/mm³ = maladie avancée → dépistage de la tuberculose (TB-LAM) et de l’antigène cryptococcique, prophylaxies.',
      ],
      [
        'deuxieme_intention',
        'tb-lam',
        'CD4 < 200/mm³, stade 3–4, patient hospitalisé : positif = tuberculose (traiter).',
      ],
      [
        'deuxieme_intention',
        'xpert-mtb-rif',
        'Tout symptôme de tuberculose (toux, fièvre, sueurs, amaigrissement).',
      ],
      [
        'pretherapeutique',
        'aghbs',
        'Co-infection VHB : maintenir le ténofovir + lamivudine dans tout schéma.',
      ],
      ['pretherapeutique', 'creatinine', 'DFG avant ténofovir (éviter si clairance < 50 mL/min).'],
      ['pretherapeutique', 'nfs', 'Anémie, cytopénies (référence).'],
      [
        'etiologique',
        'radiographie-thoracique',
        'Symptômes respiratoires : tuberculose, pneumocystose, pneumonie bactérienne.',
      ],
      [
        'suivi',
        'charge-virale-vih',
        'À 6 mois et 12 mois du TARV puis annuelle : < 1 000 copies/mL = succès ; ≥ 1 000 = renforcer l’observance et contrôler à 3 mois.',
      ],
    ],
    scores: ['stades-oms-vih'],
    differentiels: [
      [
        'tuberculose-pulmonaire',
        'Altération de l’état général fébrile ; souvent associée au VIH : dépister les deux.',
      ],
      ['Lymphomes et autres cancers', 'Adénopathies, masses ; biopsie.'],
      [
        'malnutrition-aigue-severe',
        'Chez l’enfant, la malnutrition peut révéler une infection à VIH : dépistage systématique.',
      ],
      [
        'Autres causes d’immunodépression',
        'Corticothérapie prolongée, chimiothérapie, diabète déséquilibré.',
      ],
    ],
    etiologies:
      '## Transmission\n- Sexuelle (majoritaire)\n- Mère-enfant (grossesse, accouchement, allaitement)\n- Sanguine (transfusion non sécurisée, matériel souillé)\n\n## Populations prioritaires\n- Femmes enceintes, travailleuses du sexe, partenaires de PVVIH, adolescents',
    principes: [
      [
        'Dépister, annoncer et accompagner',
        'Faire connaître son statut et lier immédiatement aux soins.',
        '- Conseil et annonce, dépistage des partenaires et des enfants\n- Éducation à l’observance dès la 1re consultation',
      ],
      [
        'Bilan initial et recherche de la maladie avancée',
        'Identifier les patients à haut risque de décès précoce.',
        '- CD4, dépistage de la tuberculose (symptômes, TB-LAM, Xpert), antigène cryptococcique si CD4 < 200\n- AgHBs, créatinine, test de grossesse',
      ],
      [
        'TARV le jour même ou dans les 7 jours',
        'Supprimer durablement la réplication virale.',
        '- 1re ligne adulte et adolescent : ténofovir + lamivudine + dolutégravir (TLD), 1 comprimé par jour\n- Enfant : abacavir-lamivudine + dolutégravir pédiatrique selon le poids\n- Différer de 4 à 6 semaines en cas de méningite cryptococcique ; débuter dans les 2 semaines en cas de tuberculose (sauf méningite tuberculeuse)',
      ],
      [
        'Prophylaxies des infections opportunistes',
        'Réduire la morbidité et la mortalité.',
        '- Cotrimoxazole selon les critères nationaux\n- Traitement préventif de la tuberculose (isoniazide 6 mois ou schéma court) après exclusion d’une tuberculose active, avec pyridoxine\n- Fluconazole préemptif si antigène cryptococcique positif sans méningite',
      ],
      [
        'Suivi virologique et soutien à l’observance',
        'Maintenir la charge virale indétectable.',
        '- Charge virale à 6 et 12 mois puis annuelle\n- Indétectable = intransmissible (I = I)',
      ],
      [
        'Prévention de la transmission',
        'Protéger les partenaires et les enfants.',
        '- PTME : TARV pour toute femme enceinte ou allaitante, prophylaxie du nouveau-né, diagnostic précoce du nourrisson\n- Préservatifs, PrEP pour les partenaires séronégatifs',
      ],
    ],
    molecules: [
      ['tenofovir-disoproxil', 'premiere', 'Schéma TLD (adulte et adolescent)'],
      ['lamivudine', 'premiere', 'Schéma TLD ; ABC/3TC chez l’enfant'],
      ['dolutegravir', 'premiere', 'Schéma TLD ; DTG pédiatrique dispersible'],
      ['abacavir', 'alternative', 'Enfant (ABC/3TC + DTG) ; adulte si TDF contre-indiqué'],
      ['cotrimoxazole', 'adjuvant', 'Prophylaxie des infections opportunistes'],
      ['isoniazide', 'adjuvant', 'Traitement préventif de la tuberculose'],
      ['pyridoxine', 'adjuvant', 'Avec l’isoniazide'],
    ],
    complications: [
      {
        nom: 'Tuberculose associée',
        fiche: 'tuberculose-pulmonaire',
        description: 'Première cause de décès des PVVIH ; formes extrapulmonaires et disséminées fréquentes.',
        traitement:
          '- Traitement antituberculeux standard\n- TARV dans les 2 semaines (dolutégravir 50 mg 2 fois par jour sous rifampicine)\n- Cotrimoxazole',
        clinique:
          '- Toux, fièvre, poids, signes d’IRIS les premières semaines du TARV\n- Tolérance (ictère, éruption)',
        paraclinique: '- Bacilloscopies de contrôle, bilan hépatique si symptômes, charge virale',
      },
      {
        nom: 'Méningite à cryptocoque',
        description:
          'Céphalées subaiguës, fièvre, troubles de la conscience chez un patient aux CD4 < 100–200/mm³.',
        traitement:
          '- Induction (OMS 2022) : amphotéricine B liposomale 10 mg/kg dose unique + flucytosine 14 jours + fluconazole 1 200 mg/j\n- Consolidation puis entretien par fluconazole\n- Ponctions lombaires évacuatrices si hypertension intracrânienne\n- TARV différé de 4 à 6 semaines',
        clinique: '- Céphalées, conscience, vision, signes d’hypertension intracrânienne',
        paraclinique:
          '- Pression d’ouverture du LCR, antigène cryptococcique\n- Créatinine et kaliémie (amphotéricine)',
      },
      {
        nom: 'Pneumocystose',
        description: 'Pneumopathie interstitielle hypoxémiante subaiguë.',
        traitement:
          '- Cotrimoxazole à forte dose (15–20 mg/kg/j de triméthoprime) pendant 21 jours\n- Corticoïdes si PaO2 < 70 mmHg\n- Oxygène',
        clinique: '- FR, SpO2, tolérance à l’effort',
        paraclinique: '- Radiographie thoracique, NFS, kaliémie (cotrimoxazole)',
      },
      {
        nom: 'Syndrome inflammatoire de reconstitution immunitaire (IRIS)',
        description:
          'Aggravation paradoxale d’une infection connue ou révélation d’une infection latente 2 à 12 semaines après le début du TARV.',
        traitement:
          '- Poursuivre le TARV\n- Traiter l’infection en cause ; AINS ou corticoïdes (prednisolone) dans l’IRIS tuberculeux',
        clinique: '- Fièvre, adénopathies, aggravation respiratoire ou neurologique',
        paraclinique: '- Selon l’orientation (radiographie, LCR)',
      },
      {
        nom: 'Échec virologique',
        description: 'Charge virale ≥ 1 000 copies/mL à 2 reprises malgré le soutien à l’observance.',
        traitement:
          '- Séances de renforcement de l’observance, contrôle à 3 mois\n- Si échec confirmé : schéma de 2e ligne selon le protocole national (inhibiteur de protéase boosté)',
        clinique: '- Observance, nouvelles infections opportunistes',
        paraclinique: '- Charge virale, CD4, génotypage si disponible',
      },
      {
        nom: 'Toxicité des antirétroviraux',
        description:
          'Néphrotoxicité du TDF, prise de poids et insomnie sous DTG, hypersensibilité à l’abacavir.',
        traitement:
          '- Adapter le schéma (substitution de la molécule en cause)\n- Abacavir : arrêt définitif en cas d’hypersensibilité',
        clinique: '- Poids, PA, sommeil, éruption',
        paraclinique: '- Créatinine (TDF), glycémie et lipides selon le terrain',
      },
    ],
    evolution:
      '## Sans traitement\n- Évolution en une dizaine d’années vers le SIDA et le décès\n\n## Sous TARV bien suivi\n- Espérance de vie proche de celle de la population générale\n- Charge virale indétectable = pas de transmission sexuelle',
    urgences: [],
    symptomes: [
      ['Perte de poids', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Diarrhée', 'frequent'],
      ['Toux', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Sueurs nocturnes', 'occasionnel'],
    ],
    sources: [
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
      "Guide national de prise en charge de l'infection à VIH",
      'Guide clinique et thérapeutique',
    ],
  },

  // =================================================================== Méningite
  {
    specialite: 'Infectiologie',
    slug: 'meningite-bacterienne',
    nom: 'Méningite bactérienne aiguë',
    resume: 'Infection des méninges à pneumocoque, méningocoque ou Haemophilus : ceftriaxone dans l’heure.',
    definition:
      'Inflammation aiguë des méninges d’origine bactérienne, avec réaction cellulaire à prédominance de polynucléaires dans le liquide cérébrospinal. Urgence diagnostique et thérapeutique.',
    physiopathologie:
      '## Mécanismes\n- Colonisation du nasopharynx puis bactériémie et franchissement de la barrière hémato-méningée\n- Réaction inflammatoire intense dans l’espace sous-arachnoïdien → œdème cérébral, vascularite, hypertension intracrânienne\n- La lyse bactérienne sous antibiotiques majore transitoirement l’inflammation (rationnel de la dexaméthasone)',
    diagnostic:
      '## Clinique\n- Fièvre, céphalées intenses, vomissements, photophobie\n- Raideur de nuque, signes de Kernig et de Brudzinski\n- Troubles de la conscience, convulsions, signes de localisation\n- Purpura (méningocoque) : rechercher sur tout le corps\n\n## Nourrisson\n- Fontanelle bombée, hypotonie, refus de téter, convulsions, cri plaintif',
    examens: [
      [
        'confirmation',
        'lcr',
        'LCR trouble, leucocytes > 1 000/mm³ à polynucléaires, protéinorachie > 1 g/L, glycorachie < 0,4 × glycémie ; Gram positif dans 60–90 % des cas ; culture, antigènes solubles, PCR.',
      ],
      ['premiere_intention', 'hemocultures', 'Avant l’antibiothérapie ; positives dans 50 à 75 % des cas.'],
      ['premiere_intention', 'glycemie', 'Simultanée à la PL pour interpréter la glycorachie.'],
      [
        'presomption',
        'procalcitonine',
        '> 0,5 ng/mL : oriente vers une origine bactérienne plutôt que virale.',
      ],
      ['presomption', 'crp', 'Élevée dans les méningites bactériennes (non spécifique).'],
      [
        'etiologique',
        'tdr-paludisme',
        'Systématique en zone d’endémie (diagnostic différentiel ou association).',
      ],
      ['etiologique', 'tdr-vih', 'Méningites à cryptocoque ou tuberculeuse chez le PVVIH.'],
      ['gravite', 'nfs', 'Hyperleucocytose ; thrombopénie (purpura fulminans, CIVD).'],
      ['gravite', 'hemostase', 'Purpura extensif : CIVD.'],
      [
        'gravite',
        'ionogramme',
        'Hyponatrémie (sécrétion inappropriée d’ADH) : risque de convulsions et d’œdème cérébral.',
      ],
      [
        'deuxieme_intention',
        'scanner-cerebral',
        'Avant la PL uniquement si signes de localisation, convulsions récentes, Glasgow ≤ 10 ou immunodépression. Ne doit jamais retarder l’antibiothérapie.',
      ],
      [
        'suivi',
        'echographie-transfontanellaire',
        'Nourrisson : empyème, abcès, ventriculite, hydrocéphalie si évolution défavorable.',
      ],
    ],
    scores: ['glasgow', 'blantyre'],
    differentiels: [
      ['paludisme-grave', 'Neuropaludisme : TDR positif, LCR normal. Les deux peuvent coexister.'],
      [
        'Méningite tuberculeuse',
        'Installation subaiguë, paralysies des nerfs crâniens ; LCR lymphocytaire, glycorachie basse, protéinorachie élevée.',
      ],
      ['Méningite à cryptocoque', 'PVVIH aux CD4 bas ; antigène cryptococcique positif, encre de Chine.'],
      ['Méningite virale', 'LCR clair, lymphocytaire, glycorachie normale ; bon état général.'],
      ['Hémorragie méningée', 'Céphalée brutale « en coup de tonnerre » ; scanner, LCR hémorragique.'],
      ['avc', 'Déficit focal brutal, souvent sans fièvre initiale.'],
    ],
    etiologies:
      '## Germes selon l’âge\n- Nouveau-né : streptocoque B, *E. coli*, *Listeria*\n- Nourrisson et enfant : pneumocoque, méningocoque, *Haemophilus influenzae* b (non vacciné)\n- Adulte : pneumocoque, méningocoque ; *Listeria* après 50 ans et chez l’immunodéprimé\n\n## Facteurs favorisants\n- Asplénie (drépanocytose), VIH, brèche ostéoméningée, otites et sinusites\n- Épidémies de méningocoque (saison sèche dans les zones de la ceinture de la méningite)',
    principes: [
      [
        'Antibiothérapie probabiliste en urgence',
        'Débuter dans l’heure : chaque heure de retard aggrave le pronostic.',
        '- Ceftriaxone IV : adulte 2 g toutes les 12 h ; enfant 100 mg/kg/j\n- Si purpura : 1re dose immédiate, avant tout examen (IM si pas de voie veineuse)\n- Nouveau-né ou suspicion de *Listeria* : ampicilline + gentamicine',
      ],
      [
        'Ponction lombaire et prélèvements',
        'Identifier le germe et adapter.',
        '- PL immédiate sauf contre-indication (signes d’engagement, troubles de la coagulation, instabilité)\n- Hémocultures avant l’antibiotique, sans le retarder',
      ],
      [
        'Corticothérapie adjuvante',
        'Réduire les séquelles (surdité) et la mortalité des méningites à pneumocoque.',
        '- Dexaméthasone 0,15 mg/kg toutes les 6 h pendant 4 jours, débutée avant ou avec la 1re dose d’antibiotique\n- Pas chez le nouveau-né ; bénéfice moindre dans les contextes de forte prévalence du VIH ou de malnutrition',
      ],
      [
        'Traitement symptomatique et réanimation',
        'Prévenir les agressions cérébrales secondaires.',
        '- Traiter les convulsions, la fièvre, l’hypoglycémie\n- Apports hydriques normaux (pas de restriction systématique), surveiller la natrémie\n- Tête surélevée à 30° si hypertension intracrânienne',
      ],
      [
        'Adapter et fixer la durée',
        'Traiter suffisamment sans prolonger inutilement.',
        '- Méningocoque : 5–7 jours ; pneumocoque : 10–14 jours ; *Haemophilus* : 7–10 jours ; *Listeria* : 21 jours ; nouveau-né : 14–21 jours\n- En épidémie de méningocoque : schéma court selon le protocole OMS',
      ],
      [
        'Prophylaxie et déclaration',
        'Éviter les cas secondaires.',
        '- Méningocoque : prophylaxie des contacts proches (ciprofloxacine 500 mg dose unique chez l’adulte, ceftriaxone IM chez l’enfant et la femme enceinte)\n- Déclaration obligatoire ; vaccination selon le germe (PCV, Hib, méningocoque)',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Traitement probabiliste de référence'],
      ['dexamethasone', 'adjuvant', 'Avant ou avec la 1re dose d’antibiotique (hors nouveau-né)'],
      ['ampicilline', 'alternative', 'Nouveau-né, suspicion de Listeria (avec gentamicine)'],
      ['gentamicine', 'alternative', 'Nouveau-né (avec ampicilline)'],
      ['ciprofloxacine', 'adjuvant', 'Prophylaxie des contacts (méningocoque)'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['paracetamol', 'adjuvant', 'Fièvre, céphalées'],
    ],
    complications: [
      {
        nom: 'Choc septique et purpura fulminans',
        description: 'Méningococcémie fulminante : purpura extensif, choc, CIVD ; mortalité élevée.',
        traitement:
          '- Ceftriaxone immédiate\n- Remplissage, vasopresseurs (noradrénaline), réanimation\n- Corriger la coagulopathie',
        clinique: '- PA, FC, temps de recoloration, extension du purpura (le délimiter au stylo), diurèse',
        paraclinique: '- Lactates, hémostase, plaquettes',
      },
      {
        nom: 'Hypertension intracrânienne et œdème cérébral',
        description: 'Cause majeure de décès précoce ; risque d’engagement.',
        traitement:
          '- Tête à 30°, normonatrémie, normoglycémie, normothermie\n- Osmothérapie (mannitol) si signes d’engagement, intubation si coma',
        clinique: '- Glasgow, pupilles, bradycardie avec HTA, troubles respiratoires',
        paraclinique: '- Natrémie, scanner cérébral',
      },
      {
        nom: 'Convulsions et état de mal',
        fiche: 'etat-de-mal-epileptique',
        description: 'Fréquentes chez l’enfant.',
        traitement: '- Benzodiazépine puis antiépileptique de 2e ligne selon l’algorithme',
        clinique: '- Durée et récurrence des crises, conscience intercritique',
        paraclinique: '- Glycémie, natrémie, calcémie',
      },
      {
        nom: 'Hyponatrémie (SIADH)',
        description: 'Aggrave l’œdème cérébral et favorise les convulsions.',
        traitement:
          '- Hyponatrémie symptomatique : NaCl hypertonique selon protocole\n- Éviter les solutés hypotoniques',
        clinique: '- Conscience, convulsions, poids',
        paraclinique: '- Natrémie toutes les 12–24 h',
      },
      {
        nom: 'Empyème sous-dural, abcès, hydrocéphalie',
        description: 'Fièvre persistante ou réapparition de signes neurologiques.',
        traitement:
          '- Prolonger l’antibiothérapie\n- Drainage neurochirurgical si collection compressive, dérivation si hydrocéphalie',
        clinique: '- Fièvre au-delà de 72 h, signes focaux, périmètre crânien (nourrisson)',
        paraclinique: '- Échographie transfontanellaire, scanner',
      },
      {
        nom: 'Surdité et séquelles neurologiques',
        description:
          'Surdité chez 10 à 30 % des survivants (pneumocoque) ; retard de développement, épilepsie.',
        traitement: '- Dépistage précoce, appareillage ou implant, rééducation',
        clinique: '- Audition, développement psychomoteur, crises',
        paraclinique: '- Audiométrie ou potentiels évoqués auditifs avant la sortie',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité de 10 à 30 % (pneumocoque) ; plus élevée en cas de retard thérapeutique\n- Séquelles chez 20 à 30 % des survivants\n\n## Suivi\n- Audition avant la sortie, développement de l’enfant, vaccination de rattrapage',
    urgences: ['syndrome-meninge-febrile', 'choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Céphalées', 'tres_frequent'],
      ['Raideur de nuque', 'frequent'],
      ['Vomissements', 'frequent'],
      ['Troubles de la conscience', 'frequent'],
      ['Convulsions', 'occasionnel'],
      ['Refus de téter', 'occasionnel'],
    ],
    sources: [
      'WHO guidelines on meningitis diagnosis, treatment and care',
      'ESCMID guideline: diagnosis and treatment of acute bacterial meningitis',
      'Practice Guidelines for the Management of Bacterial Meningitis',
    ],
  },

  // =================================================================== Choléra
  {
    specialite: 'Infectiologie',
    slug: 'cholera',
    nom: 'Choléra',
    resume:
      'Diarrhée aqueuse profuse à Vibrio cholerae : la réhydratation rapide sauve la vie ; maladie à déclaration obligatoire.',
    definition:
      'Toxi-infection intestinale aiguë due à *Vibrio cholerae* O1 ou O139 toxinogène, responsable d’une diarrhée aqueuse profuse pouvant entraîner une déshydratation sévère et le décès en quelques heures. Endémo-épidémique en RDC (région des Grands Lacs, Kinshasa, Kasaï…).',
    physiopathologie:
      '## Mécanismes\n- Ingestion d’eau ou d’aliments contaminés\n- La toxine cholérique active l’adénylate cyclase des entérocytes → sécrétion massive de chlore et d’eau\n- Pas d’invasion de la muqueuse (pas de fièvre ni de sang)\n- Pertes jusqu’à 1 L/h chez l’adulte : hypovolémie, acidose, hypokaliémie',
    diagnostic:
      '## Définition de cas (OMS/GTFCC)\n- Hors épidémie : personne ≥ 2 ans avec diarrhée aqueuse aiguë et déshydratation sévère ou décès\n- En épidémie : toute personne avec diarrhée aqueuse aiguë\n\n## Clinique\n- Selles « eau de riz », vomissements, crampes musculaires\n- Évaluer la déshydratation : conscience, yeux, soif, pli cutané, pouls',
    examens: [
      [
        'confirmation',
        'tdr-cholera',
        'TDR pour l’alerte et le suivi ; confirmation des premiers cas d’une épidémie par culture ou PCR. Le traitement ne doit jamais attendre le résultat.',
      ],
      [
        'gravite',
        'ionogramme',
        'Hypokaliémie, acidose métabolique (bicarbonates bas) ; non indispensable à la prise en charge.',
      ],
      [
        'gravite',
        'creatinine',
        'Insuffisance rénale aiguë fonctionnelle si oligurie persistante après réhydratation.',
      ],
      ['gravite', 'glycemie', 'Enfant léthargique ou convulsions : hypoglycémie.'],
    ],
    scores: ['deshydratation-oms', 'debit-perfusion'],
    differentiels: [
      [
        'diarrhee-aigue-enfant',
        'Gastro-entérite virale ou bactérienne : diarrhée moins profuse, fièvre possible.',
      ],
      ['Shigellose (dysenterie)', 'Selles glairo-sanglantes, fièvre, ténesme.'],
      ['paludisme-simple', 'Diarrhée fébrile de l’enfant ; TDR positif.'],
      ['Intoxication alimentaire', 'Vomissements précoces (< 6 h), cas groupés après un repas commun.'],
      ['infection-vih', 'Diarrhée chronique (> 14 jours), amaigrissement : dépistage VIH.'],
    ],
    etiologies:
      '## Agent\n- *Vibrio cholerae* O1 (biotype El Tor) ou O139\n\n## Facteurs\n- Absence d’eau potable et d’assainissement, promiscuité (camps de déplacés)\n- Saison des pluies, inondations, rassemblements, funérailles sans précautions',
    principes: [
      [
        'Évaluer la déshydratation et trier',
        'Orienter immédiatement vers le bon plan de réhydratation.',
        '- Plan A : pas de déshydratation ; plan B : signes évidents ; plan C : déshydratation sévère\n- Prise en charge en centre ou unité de traitement du choléra (CTC/UTC), circuit propre/sale',
      ],
      [
        'Réhydrater : pilier du traitement',
        'Restaurer et maintenir la volémie.',
        '- Plan C : Ringer lactate 100 mL/kg — adulte et enfant ≥ 1 an : 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30 ; < 1 an : 30 mL/kg en 1 h puis 70 mL/kg en 5 h\n- SRO dès que le patient peut boire, en compensant les pertes\n- Réévaluer toutes les 1–2 h',
      ],
      [
        'Antibiothérapie des formes modérées à sévères',
        'Réduire le volume et la durée de la diarrhée et l’excrétion du vibrion.',
        '- Adulte : doxycycline 300 mg en dose unique\n- Enfant et femme enceinte : azithromycine en dose unique (20 mg/kg ; 1 g chez l’adulte)\n- Alternative : ciprofloxacine (selon la sensibilité locale)',
      ],
      [
        'Zinc chez l’enfant',
        'Réduire la durée de la diarrhée.',
        '- 20 mg/j pendant 10 jours (10 mg/j avant 6 mois)',
      ],
      [
        'Alimentation',
        'Prévenir la dénutrition.',
        '- Reprendre l’alimentation dès la correction de la déshydratation, poursuivre l’allaitement',
      ],
      [
        'Hygiène, notification et riposte',
        'Interrompre la transmission.',
        '- Notification immédiate de tout cas suspect\n- Chloration de l’eau, désinfection, lavage des mains, enterrements sécurisés\n- Vaccination orale contre le choléra lors des campagnes',
      ],
    ],
    molecules: [
      ['sro', 'premiere', 'Plans A et B, relais du plan C'],
      ['ringer-lactate', 'premiere', 'Plan C (déshydratation sévère)'],
      ['doxycycline', 'premiere', 'Adulte : dose unique'],
      ['azithromycine', 'premiere', 'Enfant et femme enceinte : dose unique'],
      ['ciprofloxacine', 'alternative', 'Selon la sensibilité locale'],
      ['zinc', 'adjuvant', 'Enfant'],
      ['glucose-10', 'adjuvant', 'Hypoglycémie'],
    ],
    complications: [
      {
        nom: 'Choc hypovolémique',
        description: 'Complication principale, mortelle en quelques heures sans réhydratation.',
        traitement:
          '- Plan C au Ringer lactate (voie IV ou intra-osseuse) ; 2 voies si nécessaire\n- Sonde nasogastrique (SRO 20 mL/kg/h) si perfusion impossible',
        clinique:
          '- Pouls, PA, conscience, pli cutané, yeux toutes les 15–30 min pendant le plan C, puis toutes les 1–2 h\n- Volume des selles et des vomissements',
        paraclinique: '- Aucun examen indispensable ; créatinine si oligurie persistante',
      },
      {
        nom: 'Hypokaliémie',
        description: 'Pertes fécales de potassium : crampes, faiblesse, iléus, troubles du rythme.',
        traitement:
          '- SRO (contiennent du potassium), aliments riches en potassium\n- Potassium oral si signes persistants',
        clinique: '- Crampes, faiblesse musculaire, ballonnement',
        paraclinique: '- Kaliémie et ECG si disponibles',
      },
      {
        nom: 'Hypoglycémie de l’enfant',
        description: 'Survient chez l’enfant à jeun, peut provoquer convulsions et coma.',
        traitement: '- Glucosé 10 % 5 mL/kg IV, puis SRO et alimentation',
        clinique: '- Conscience, convulsions',
        paraclinique: '- Glycémie capillaire',
      },
      {
        nom: 'Insuffisance rénale aiguë',
        fiche: 'insuffisance-renale-aigue',
        description: 'Fonctionnelle (hypovolémie), parfois organique si choc prolongé.',
        traitement: '- Réhydratation complète ; la diurèse doit reprendre dans les 6 h',
        clinique: '- Diurèse (doit reprendre dans les 3–6 h)',
        paraclinique: '- Créatinine si oligurie persistante',
      },
      {
        nom: 'Surcharge hydrique (OAP)',
        description: 'Risque chez l’enfant, la personne âgée, le malnutri et la femme enceinte.',
        traitement: '- Ralentir ou arrêter la perfusion, position assise, furosémide si OAP',
        clinique: '- FR, crépitants, œdème des paupières, turgescence jugulaire',
        paraclinique: '- SpO2, radiographie thoracique si disponible',
      },
    ],
    evolution:
      '## Pronostic\n- Létalité < 1 % si réhydratation précoce ; jusqu’à 50 % sans traitement\n- Guérison en 2 à 5 jours\n\n## Sortie\n- Plus de déshydratation, capacité à boire les SRO, selles moulées ou diminuées',
    urgences: ['deshydratation-severe-enfant'],
    symptomes: [
      ['Diarrhée', 'tres_frequent'],
      ['Vomissements', 'frequent'],
      ['Oligurie', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Troubles de la conscience', 'rare'],
    ],
    sources: [
      'Cholera Outbreak Response: Field Manual',
      'Directives de prise en charge du choléra et des maladies diarrhéiques',
      'The treatment of diarrhoea: a manual for physicians and other senior health workers',
      'Guide clinique et thérapeutique',
    ],
  },

  // =================================================================== Tuberculose
  {
    specialite: 'Pneumologie',
    slug: 'tuberculose-pulmonaire',
    nom: 'Tuberculose pulmonaire',
    resume:
      'Infection à Mycobacterium tuberculosis : Xpert en 1re intention, 2RHZE/4RH, dépistage VIH, traitement préventif des contacts.',
    definition:
      'Infection pulmonaire due au complexe *Mycobacterium tuberculosis*, transmise par voie aérienne. La RDC figure parmi les pays à forte charge de tuberculose, de co-infection TB/VIH et de tuberculose multirésistante.',
    physiopathologie:
      '## Mécanismes\n- Inhalation de gouttelettes → primo-infection, le plus souvent contrôlée (infection latente)\n- Réactivation en cas de baisse de l’immunité (VIH, diabète, malnutrition, âge)\n- Nécrose caséeuse, cavernes riches en bacilles (contagiosité)',
    diagnostic:
      '## Clinique\n- Toux > 2 semaines (toute toux chez le PVVIH), expectoration, hémoptysie\n- Fièvre vespérale, sueurs nocturnes, amaigrissement, asthénie\n\n## Enfant\n- Contage, cassure pondérale, toux persistante ; confirmation bactériologique difficile (diagnostic souvent clinique et radiologique)',
    examens: [
      [
        'premiere_intention',
        'xpert-mtb-rif',
        'Test initial recommandé par l’OMS : MTB détecté = diagnostic ; résistance à la rifampicine détectée = tuberculose RR/MR.',
      ],
      ['confirmation', 'bacilloscopie', 'Si Xpert indisponible : ≥ 1 BAAR = positif.'],
      ['deuxieme_intention', 'tb-lam', 'PVVIH avec CD4 < 200/mm³, maladie avancée ou hospitalisé.'],
      [
        'premiere_intention',
        'radiographie-thoracique',
        'Infiltrats des sommets, cavernes, nodules, miliaire, épanchement pleural, adénopathies médiastinales (enfant).',
      ],
      ['pretherapeutique', 'tdr-vih', 'Dépistage VIH systématique chez tout tuberculeux.'],
      [
        'pretherapeutique',
        'glycemie',
        'Dépistage du diabète (facteur de risque et de moins bonne évolution).',
      ],
      [
        'pretherapeutique',
        'bilan-hepatique',
        'Référence avant traitement si hépatopathie, alcool, VIH ou âge avancé.',
      ],
      ['suivi', 'bacilloscopie', 'Fin du 2e mois, 5e et 6e mois : la négativation définit la guérison.'],
    ],
    scores: ['imc'],
    differentiels: [
      ['Pneumonie bactérienne', 'Début aigu, réponse rapide aux antibiotiques.'],
      ['Cancer bronchopulmonaire', 'Tabagisme, âge > 40 ans, hémoptysies ; imagerie, fibroscopie.'],
      ['Pneumocystose', 'PVVIH, dyspnée hypoxémiante, infiltrat interstitiel.'],
      ['Bronchectasies', 'Bronchorrhée chronique, infections répétées.'],
      [
        'Paragonimose',
        'Hémoptysies chroniques, consommation de crabes ou d’écrevisses crus ; œufs dans les crachats.',
      ],
    ],
    etiologies:
      '## Agent\n- *Mycobacterium tuberculosis* (rarement *M. bovis*)\n\n## Facteurs de risque\n- Infection à VIH (principal), diabète, malnutrition\n- Contact avec un cas contagieux, promiscuité, prisons, mines\n- Tabac, alcool, silicose',
    principes: [
      [
        'Confirmer et rechercher la résistance',
        'Traiter le bon patient avec le bon schéma.',
        '- Xpert MTB/RIF Ultra sur crachats (ou selles, aspiration chez l’enfant)\n- Résistance à la rifampicine : schéma de tuberculose RR/MR',
      ],
      [
        'Traitement standard de 6 mois (2RHZE/4RH)',
        'Guérir et éviter les rechutes et les résistances.',
        '- Phase intensive 2 mois : rifampicine + isoniazide + pyrazinamide + éthambutol (associations à dose fixe selon le poids)\n- Phase de continuation 4 mois : rifampicine + isoniazide\n- Enfant avec forme non sévère : schéma de 4 mois (OMS 2022)\n- Traitement directement observé ou soutenu',
      ],
      [
        'Dépister et traiter le VIH',
        'Réduire la mortalité de la co-infection.',
        '- TARV dans les 2 semaines (sauf méningite tuberculeuse)\n- Cotrimoxazole',
      ],
      [
        'Traitements associés',
        'Prévenir les effets indésirables et la dénutrition.',
        '- Pyridoxine si terrain à risque de neuropathie\n- Soutien nutritionnel\n- Corticoïdes dans les formes méningées et péricardiques',
      ],
      [
        'Observance et suivi',
        'Garantir la guérison.',
        '- Bacilloscopies de contrôle, poids mensuel, recherche des effets indésirables',
      ],
      [
        'Prévention de la transmission et des cas secondaires',
        'Protéger l’entourage.',
        '- Dépistage des contacts ; traitement préventif (isoniazide 6 mois ou schéma court) des enfants < 5 ans et des PVVIH contacts\n- Aération, port du masque, BCG à la naissance',
      ],
    ],
    molecules: [
      ['rifampicine', 'premiere', '2RHZE puis 4RH'],
      ['isoniazide', 'premiere', '2RHZE puis 4RH'],
      ['pyrazinamide', 'premiere', 'Phase intensive (2 mois)'],
      ['ethambutol', 'premiere', 'Phase intensive (2 mois)'],
      ['pyridoxine', 'adjuvant', 'Prévention de la neuropathie (terrain à risque)'],
      ['prednisolone', 'adjuvant', 'Formes méningées et péricardiques, IRIS'],
      ['acide-tranexamique', 'adjuvant', 'Hémoptysie'],
    ],
    complications: [
      {
        nom: 'Hémoptysie massive',
        description: 'Rupture d’un vaisseau dans une caverne ou séquelles ; risque d’asphyxie.',
        traitement:
          '- Décubitus latéral côté du saignement, oxygène, voie veineuse\n- Acide tranexamique, transfusion si besoin\n- Embolisation des artères bronchiques ou chirurgie si disponible',
        clinique: '- Volume expectoré, FR, SpO2, PA, FC',
        paraclinique: '- Hémoglobine, radiographie ou scanner thoracique',
      },
      {
        nom: 'Hépatite médicamenteuse',
        description:
          'Liée à l’isoniazide, la rifampicine ou le pyrazinamide ; plus fréquente si VIH, alcool, malnutrition.',
        traitement:
          '- Arrêter les antituberculeux si ALAT > 3 × N avec symptômes ou > 5 × N sans symptômes, ou ictère\n- Réintroduction un par un après normalisation (rifampicine, puis isoniazide ; pyrazinamide en dernier ou remplacé)',
        clinique: '- Ictère, nausées, vomissements, douleurs abdominales',
        paraclinique: '- ALAT, bilirubine',
      },
      {
        nom: 'Neuropathie périphérique',
        description: 'Liée à l’isoniazide (carence en B6).',
        traitement: '- Pyridoxine à dose thérapeutique (50–100 mg/j)',
        clinique: '- Paresthésies, brûlures des pieds et des mains',
        paraclinique: '- Aucun examen indispensable',
      },
      {
        nom: 'Tuberculose résistante (RR/MR)',
        description: 'Résistance au moins à la rifampicine.',
        traitement:
          '- Schéma oral court de 6 mois (bédaquiline, prétomanide, linézolide ± moxifloxacine) selon le PNLT\n- Prise en charge en centre de référence',
        clinique: '- Observance, tolérance (neuropathie, troubles visuels sous linézolide)',
        paraclinique: '- Culture mensuelle, ECG (QT), NFS',
      },
      {
        nom: 'Pleurésie et pneumothorax',
        description: 'Épanchement tuberculeux ou rupture d’une caverne.',
        traitement: '- Ponction ou drainage selon l’abondance\n- Poursuite du traitement antituberculeux',
        clinique: '- Douleur thoracique, dyspnée, asymétrie auscultatoire',
        paraclinique: '- Radiographie thoracique, échographie pleurale',
      },
    ],
    evolution:
      '## Sous traitement\n- Taux de succès > 85 % pour la tuberculose sensible\n- Contagiosité très réduite après 2 semaines de traitement efficace\n\n## Séquelles\n- Bronchectasies, aspergillome, insuffisance respiratoire chronique',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Perte de poids', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sueurs nocturnes', 'frequent'],
      ['Asthénie', 'frequent'],
      ['Anorexie', 'frequent'],
      ['Hémoptysie', 'occasionnel'],
      ['Douleur thoracique', 'occasionnel'],
    ],
    sources: [
      'WHO consolidated guidelines on tuberculosis (Module 3 : diagnostic ; Module 4 : traitement)',
      'Guide technique de prise en charge de la tuberculose',
      'Guide clinique et thérapeutique',
    ],
  },
];
