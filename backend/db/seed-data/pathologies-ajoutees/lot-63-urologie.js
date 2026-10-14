'use strict';

/**
 * Lot 63 (phase 2, urologie) — orchi-épididymite, traumatismes urologiques, cancer de la vessie,
 * tumeurs du rein, hématurie (démarche), phimosis et paraphimosis, hypospadias. Rédigé par IA
 * (Sabiston, OMS, ESMO, NCCN, Nelson) : à valider.
 */

const URO = { departement: 'chirurgie', specialite: 'Urologie' };

module.exports = [
  // =================================================================== Orchi-épididymite
  {
    ...URO,
    slug: 'orchi-epididymite',
    nom: 'Orchi-épididymite',
    resume:
      'Infection de l’épididyme et du testicule : chez l’homme jeune, IST (gonocoque, Chlamydia) ; après 35 ans ou en cas d’obstacle urinaire, germes urinaires (E. coli) ; aussi oreillons (orchite), tuberculose, brucellose, filariose : douleur scrotale progressive, bourse inflammatoire, fièvre, signe de Prehn (soulagement à l’élévation), écoulement urétral ou signes urinaires ; éliminer une torsion du testicule (urgence, surtout avant 25 ans) ; ECBU, prélèvement urétral, échographie Doppler ; ceftriaxone + doxycycline (IST) ou fluoroquinolone (germes urinaires), repos, suspensoir, AINS, traitement du partenaire.',
    definition:
      'Inflammation infectieuse de l’épididyme (épididymite), étendue ou non au testicule (orchi-épididymite).',
    physiopathologie:
      '## Germes selon l’âge\n- **Homme sexuellement actif < 35 ans** : **Neisseria gonorrhoeae**, **Chlamydia trachomatis**\n- **Plus de 35 ans**, obstacle (HBP, rétrécissement), sonde : **entérobactéries** (E. coli)\n- **Oreillons** (orchite isolée, post-pubertaire), **tuberculose** (épididymite chronique, nodule, fistule), brucellose, **filariose**, schistosomiase\n\n## Mécanisme\n- Infection ascendante par le canal déférent',
    diagnostic:
      '## Clinique\n- **Douleur scrotale** d’installation progressive (heures à jours), irradiant au cordon\n- **Bourse** rouge, chaude, augmentée, épididyme induré et douloureux\n- **Fièvre**, **écoulement urétral**, brûlures mictionnelles\n- **Signe de Prehn** (soulagement à l’élévation de la bourse), réflexe crémastérien présent\n\n## Distinguer de la torsion\n- Torsion : début **brutal**, adolescent, pas de fièvre, testicule ascensionné, réflexe crémastérien aboli → **chirurgie urgente** au moindre doute\n\n## Examens\n- **Bandelette**, **ECBU**, prélèvement urétral (gonocoque, Chlamydia), TDR VIH et syphilis\n- **Échographie Doppler** scrotale (hypervascularisation ; torsion : absence de flux)\n- Forme chronique : recherche de tuberculose (urines), échographie',
    examens: [
      ['premiere_intention', 'ecbu', 'Germes urinaires.'],
      ['premiere_intention', 'bandelette-urinaire', 'Leucocyturie.'],
      ['premiere_intention', 'echographie-doppler-scrotale', 'Hypervascularisation, éliminer une torsion.'],
      ['etiologique', 'tdr-vih', 'IST.'],
      ['etiologique', 'serologie-syphilis', 'IST.'],
      ['etiologique', 'xpert-mtb-rif', 'Tuberculose génitale.'],
    ],
    scores: [],
    differentiels: [
      ['torsion-du-testicule', 'Début brutal, adolescent : urgence chirurgicale.'],
      ['oreillons', 'Orchite ourlienne, parotidite.'],
      ['hydrocele', 'Masse indolore transilluminable.'],
      ['Tumeur testiculaire', 'Masse dure indolore.'],
      ['gangrene-de-fournier', 'Nécrose, crépitation.'],
    ],
    etiologies:
      '## Causes\n- IST (gonocoque, Chlamydia), germes urinaires, oreillons, tuberculose, filariose',
    principes: [
      [
        'IST probable (< 35 ans)',
        'Traitement syndromique.',
        '- **Ceftriaxone** 1 g IM dose unique + **doxycycline** 100 mg 2 fois par jour pendant 10–14 jours\n- **Traitement du partenaire**, préservatifs, dépistage VIH et syphilis',
      ],
      [
        'Germes urinaires (> 35 ans)',
        'Fluoroquinolone.',
        '- **Ofloxacine** ou **ciprofloxacine** 10–14 jours, adaptées à l’ECBU ; bilan de l’obstacle (HBP, rétrécissement)',
      ],
      [
        'Mesures associées',
        'Soulager.',
        '- Repos, **suspensoir**, glace, **AINS**\n- Abcès : drainage ; tuberculose : antituberculeux ; oreillons : symptomatique',
      ],
    ],
    molecules: [
      ['ceftriaxone', 'premiere', 'Gonocoque'],
      ['doxycycline', 'premiere', 'Chlamydia'],
      ['ofloxacine', 'alternative', 'Germes urinaires'],
      ['ciprofloxacine', 'alternative', 'Germes urinaires'],
      ['azithromycine', 'alternative', 'Chlamydia'],
      ['ibuprofene', 'premiere', 'Douleur, inflammation'],
    ],
    complications: [
      {
        nom: 'Abcès testiculaire',
        description: 'Infection non traitée.',
        traitement: '- Drainage, orchidectomie',
        clinique: '- Fluctuation',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Infertilité',
        fiche: 'infertilite-masculine',
        description: 'Obstruction épididymaire.',
        traitement: '- AMP',
        clinique: '',
        paraclinique: '- Spermogramme',
      },
      {
        nom: 'Atrophie testiculaire',
        description: 'Orchite ourlienne.',
        traitement: '',
        clinique: '- Petit testicule',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Guérison sous traitement ; induration épididymaire résiduelle possible',
    urgences: [],
    symptomes: [
      ['Douleur scrotale', 'tres_frequent'],
      ['Tuméfaction scrotale', 'frequent'],
      ['Fièvre', 'frequent'],
      ['Écoulement urétral', 'occasionnel'],
      ['Brûlures mictionnelles', 'occasionnel'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Sabiston Textbook of Surgery',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Traitement syndromique, éliminer une torsion, partenaire', '- Doute avec une torsion'],
      hgr: ['- Échographie, drainage', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Orchi-épididymite sexuellement transmise',
        type: 'commune',
        description: 'Homme jeune.',
        terrain: '- < 35 ans',
        fonctionnels: '- Douleur scrotale, écoulement',
        generaux: '- Fièvre',
        physiques: '- Épididyme induré',
        paraclinique: '- Gonocoque, Chlamydia',
        etiologies: '',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Épididymite tuberculeuse',
        type: 'etiologique',
        description: 'Chronique.',
        terrain: '- VIH, tuberculose',
        fonctionnels: '',
        generaux: '',
        physiques: '- Nodule, fistule scrotale',
        paraclinique: '- Xpert urinaire',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Traumatismes urologiques
  {
    ...URO,
    slug: 'traumatismes-urologiques',
    nom: 'Traumatismes urologiques',
    resume:
      'Lésions du rein (traumatisme lombaire ou abdominal fermé, le plus souvent traité sans chirurgie), de la vessie (fracture du bassin, vessie pleine), de l’urètre (fracture du bassin : urètre postérieur ; chute à califourchon : urètre bulbaire) et des organes génitaux (fracture de la verge, plaies) : hématurie, douleur, impossibilité d’uriner, sang au méat, hématome périnéal ; ne jamais sonder en cas de sang au méat (cystostomie sus-pubienne) ; FAST, scanner injecté avec temps tardif, urétrographie, cystographie ; réanimation, traitement conservateur du rein si stable, suture vésicale si rupture intrapéritonéale.',
    definition:
      'Lésions traumatiques des reins, des uretères, de la vessie, de l’urètre et des organes génitaux externes.',
    physiopathologie:
      '## Rein\n- **Traumatisme fermé** (décélération, choc lombaire), plaie pénétrante ; contusion, fracture rénale, lésion du pédicule\n\n## Vessie\n- **Fracture du bassin** (rupture extrapéritonéale), choc sur **vessie pleine** (rupture intrapéritonéale)\n\n## Urètre\n- **Urètre postérieur** : fracture du bassin (homme)\n- **Urètre antérieur (bulbaire)** : chute à califourchon, sondage traumatique\n\n## Organes génitaux\n- Fracture de la verge (rapport sexuel), plaies, morsures, mutilations',
    diagnostic:
      '## Clinique\n- **Hématurie** (macroscopique ou microscopique), douleur lombaire ou sus-pubienne, hématome du flanc\n- **Sang au méat urétral**, **impossibilité d’uriner**, globe vésical, **hématome périnéal en ailes de papillon**\n- Prostate ascensionnée au toucher rectal (urètre postérieur)\n- Choc hémorragique (rein)\n\n## Examens\n- **FAST**, **scanner** abdomino-pelvien injecté avec **temps tardif** (rein, vessie) chez le patient stable\n- **Urétrographie rétrograde** (sang au méat), **cystographie** (suspicion de rupture vésicale)\n- NFS, groupage, créatinine, bandelette',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie.'],
      ['confirmation', 'scanner-abdominal', 'Rein, vessie (temps tardif).'],
      ['premiere_intention', 'echographie-abdominale', 'FAST.'],
      ['confirmation', 'urethrographie', 'Lésion urétrale.'],
      ['confirmation', 'cystographie-mictionnelle', 'Rupture vésicale.'],
      ['gravite', 'nfs', 'Hémorragie.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
    ],
    scores: [],
    differentiels: [
      ['traumatisme-abdominal-ferme', 'Lésions viscérales associées.'],
      ['fracture-du-bassin', 'Lésions urétrales et vésicales associées.'],
      ['hematurie-demarche', 'Hématurie non traumatique.'],
      ['retention-aigue-urine', 'Rétention non traumatique.'],
    ],
    etiologies:
      '## Causes\n- Accidents de la route, chutes, agressions, armes, rapports sexuels, sondage traumatique',
    principes: [
      [
        'Rein',
        'Conservateur si possible.',
        '- Patient **stable** : surveillance, repos, transfusion si besoin (la majorité des traumatismes rénaux fermés)\n- **Instable** ou lésion du pédicule : laparotomie (néphrectomie ou réparation), embolisation si disponible',
      ],
      [
        'Vessie et urètre',
        'Dériver les urines.',
        '- **Sang au méat** : **pas de sonde urétrale** → **cystostomie** sus-pubienne ; réparation urétrale différée (3 mois) ou réalignement\n- Rupture vésicale **extrapéritonéale** : sonde vésicale 10–14 jours ; **intrapéritonéale** : suture chirurgicale',
      ],
      [
        'Organes génitaux',
        'Réparer.',
        '- Fracture de la verge : **chirurgie urgente** (suture de l’albuginée)\n- Plaies : parage, suture ; antitétanique, antibiotiques si morsure',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['acide-tranexamique', 'alternative', 'Hémorragie'],
      ['ceftriaxone', 'alternative', 'Antibioprophylaxie'],
      ['anatoxines-tetanique-diphterique', 'adjuvant', 'Plaies'],
      ['ringer-lactate', 'premiere', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Rétrécissement urétral',
        fiche: 'retrecissement-uretral',
        description: 'Lésion urétrale.',
        traitement: '- Urétrotomie, urétroplastie',
        clinique: '- Dysurie, jet faible',
        paraclinique: '- Urétrographie',
      },
      {
        nom: 'Urinome et infection',
        description: 'Fuite urinaire.',
        traitement: '- Drainage',
        clinique: '- Fièvre, douleur',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Lésion rénale grave.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Dysfonction érectile',
        description: 'Lésion de l’urètre postérieur.',
        traitement: '- Prise en charge spécialisée',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Rein : conservation dans la majorité ; urètre : rétrécissement fréquent',
    urgences: [],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Douleur lombaire', 'frequent'],
      ['Rétention urinaire', 'frequent'],
      ['Lésions traumatiques', 'frequent'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'ACS TQIP — recommandations de pratique clinique',
      'EAST — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Pas de sonde si sang au méat, réanimation, référence',
        '- Tout traumatisme avec hématurie ou rétention',
      ],
      hgr: ['- FAST, cystostomie, laparotomie', ''],
      tert: ['- Scanner, urétroplastie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Contusion rénale',
        type: 'commune',
        description: 'Traitement conservateur.',
        terrain: '- Traumatisme lombaire',
        fonctionnels: '- Douleur lombaire',
        generaux: '',
        physiques: '- Hématurie',
        paraclinique: '- Scanner : contusion',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Rupture de l’urètre',
        type: 'gravite',
        description: 'Sang au méat.',
        terrain: '- Fracture du bassin, chute à califourchon',
        fonctionnels: '- Impossibilité d’uriner',
        generaux: '',
        physiques: '- Sang au méat, hématome périnéal',
        paraclinique: '- Urétrographie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Cancer de la vessie
  {
    ...URO,
    slug: 'cancer-de-la-vessie',
    nom: 'Cancer de la vessie',
    resume:
      'En RDC et en Afrique, souvent carcinome épidermoïde lié à la schistosomiase urinaire chronique (Schistosoma haematobium), chez des patients plus jeunes, ailleurs carcinome urothélial lié au tabac : hématurie macroscopique indolore (signe principal), signes irritatifs, douleur, rétention ; tout hématurie doit être explorée ; échographie, cystoscopie avec biopsie ou résection, scanner ; tumeurs superficielles : résection endoscopique ± instillations ; infiltrantes : cystectomie ou radiochimiothérapie ; prévention : traitement et contrôle de la schistosomiase (praziquantel), arrêt du tabac.',
    definition:
      'Tumeur maligne de la paroi vésicale, carcinome urothélial (transitionnel) ou épidermoïde (lié à la schistosomiase).',
    physiopathologie:
      '## Facteurs\n- **Schistosomiase urinaire** chronique : inflammation, métaplasie → **carcinome épidermoïde**\n- **Tabac**, amines aromatiques (industries), cyclophosphamide, irradiation pelvienne\n\n## Formes\n- **Superficielles** (n’infiltrant pas le muscle) : récidives fréquentes\n- **Infiltrantes** (muscle) : extension locale, ganglionnaire, métastases',
    diagnostic:
      '## Clinique\n- **Hématurie macroscopique**, totale, **indolore**, souvent intermittente\n- Signes irritatifs (pollakiurie, brûlures), caillots, rétention\n- Formes avancées : douleurs pelviennes, masse, œdème des membres inférieurs, insuffisance rénale (obstruction urétérale)\n\n## Examens\n- **ECBU** (éliminer une infection), **œufs de schistosomes**, cytologie urinaire\n- **Échographie** vésicale et rénale (masse, hydronéphrose)\n- **Cystoscopie** avec **biopsie** ou **résection** (diagnostic et stade)\n- **Scanner** abdomino-pelvien et thoracique (extension), créatinine',
    examens: [
      ['premiere_intention', 'echographie-renale', 'Masse vésicale, hydronéphrose.'],
      ['confirmation', 'cystoscopie', 'Tumeur, biopsie.'],
      ['confirmation', 'biopsie-histologie', 'Type, infiltration.'],
      ['premiere_intention', 'cytologie-urinaire', 'Cellules tumorales.'],
      ['etiologique', 'oeufs-schistosomes-urines', 'Schistosomiase.'],
      ['gravite', 'scanner-abdominal', 'Extension.'],
      ['premiere_intention', 'creatinine', 'Retentissement rénal.'],
      ['premiere_intention', 'ecbu', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['schistosomiase-urogenitale', 'Hématurie terminale, œufs dans les urines.'],
      ['hematurie-demarche', 'Démarche diagnostique.'],
      ['cancer-de-la-prostate', 'Hématurie, troubles mictionnels.'],
      ['lithiase-urinaire-colique-nephretique', 'Douleur, calcul.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose urinaire.'],
    ],
    etiologies: '## Facteurs\n- Schistosomiase urinaire, tabac, expositions professionnelles',
    principes: [
      [
        'Tumeurs superficielles',
        'Résection.',
        '- **Résection transurétrale** complète, instillations intravésicales (BCG, chimiothérapie) selon le risque\n- Surveillance par cystoscopie (récidives)',
      ],
      [
        'Tumeurs infiltrantes',
        'Traitement radical.',
        '- **Cystectomie** totale avec dérivation urinaire (centre spécialisé), chimiothérapie néoadjuvante (**cisplatine-gemcitabine**)\n- Alternative : **radiochimiothérapie** (préservation vésicale)\n- Formes métastatiques : chimiothérapie, soins palliatifs (hématurie, douleur, néphrostomie)',
      ],
      [
        'Prévention',
        'Agir sur les causes.',
        '- **Praziquantel** (traitement de masse en zone d’endémie), accès à l’eau potable, arrêt du **tabac**',
      ],
    ],
    molecules: [
      ['cisplatine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['gemcitabine', 'premiere', 'Chimiothérapie (centre spécialisé)'],
      ['vaccin-bcg', 'alternative', 'Instillations intravésicales (BCG thérapeutique)'],
      ['praziquantel', 'adjuvant', 'Schistosomiase'],
      ['morphine', 'adjuvant', 'Douleurs'],
    ],
    complications: [
      {
        nom: 'Anémie et rétention sur caillots',
        fiche: 'retention-aigue-urine',
        description: 'Hématurie abondante.',
        traitement: '- Sonde à double courant, lavage, transfusion',
        clinique: '- Rétention, pâleur',
        paraclinique: '- Hb',
      },
      {
        nom: 'Insuffisance rénale obstructive',
        fiche: 'insuffisance-renale-aigue',
        description: 'Envahissement des uretères.',
        traitement: '- Néphrostomie',
        clinique: '- Oligurie',
        paraclinique: '- Hydronéphrose',
      },
      {
        nom: 'Métastases',
        description: 'Ganglions, os, poumons.',
        traitement: '- Chimiothérapie, soins palliatifs',
        clinique: '',
        paraclinique: '- Scanner',
      },
    ],
    evolution:
      '## Pronostic\n- Superficiel : bon mais récidives fréquentes ; infiltrant : survie à 5 ans ≈ 50 % après cystectomie ; souvent diagnostiqué tardivement en Afrique',
    urgences: [],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Brûlures mictionnelles', 'frequent'],
      ['Douleur pelvienne', 'occasionnel'],
      ['Rétention urinaire', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: [
        '- Hématurie : bandelette, œufs de schistosomes, référence',
        '- Hématurie persistante après praziquantel',
      ],
      hgr: ['- Échographie, cystoscopie, résection', ''],
      tert: ['- Cystectomie, chimiothérapie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome épidermoïde bilharzien',
        type: 'commune',
        description: 'Schistosomiase.',
        terrain: '- Adulte de zone d’endémie',
        fonctionnels: '- Hématurie',
        generaux: '',
        physiques: '',
        paraclinique: '- Œufs calcifiés, tumeur infiltrante',
        etiologies: '- S. haematobium',
        syndromes: [],
      },
      {
        nom: 'Tumeur urothéliale superficielle',
        type: 'etiologique',
        description: 'Tabac.',
        terrain: '- Fumeur',
        fonctionnels: '- Hématurie indolore',
        generaux: '',
        physiques: '',
        paraclinique: '- Tumeur papillaire',
        etiologies: '- Tabac',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Tumeurs du rein
  {
    ...URO,
    slug: 'tumeurs-du-rein',
    nom: 'Tumeurs du rein',
    resume:
      'Chez l’adulte, carcinome à cellules rénales (cancer du rein), souvent découvert fortuitement à l’échographie ou tardivement (hématurie, douleur lombaire, masse : triade rare et tardive), syndromes paranéoplasiques (polyglobulie, hypercalcémie, fièvre) ; tumeurs bénignes (angiomyolipome, oncocytome) et kystes ; chez l’enfant, néphroblastome (fiche dédiée) ; échographie, scanner injecté (masse prenant le contraste), bilan d’extension ; néphrectomie totale ou partielle, traitements ciblés dans les formes métastatiques ; kystes simples : abstention.',
    definition:
      'Masses tumorales du rein, malignes (carcinome à cellules rénales, carcinome urothélial des cavités) ou bénignes (angiomyolipome, oncocytome), à distinguer des kystes.',
    physiopathologie:
      '## Carcinome à cellules rénales\n- Facteurs : **tabac**, obésité, HTA, insuffisance rénale chronique (dialyse), maladie de von Hippel-Lindau\n- Extension : veine rénale et veine cave, poumons, os, foie, cerveau\n- **Syndromes paranéoplasiques** : polyglobulie (érythropoïétine), hypercalcémie, HTA, fièvre\n\n## Autres masses\n- **Kystes simples** (fréquents, bénins), polykystose\n- Angiomyolipome (graisse), oncocytome, carcinome urothélial des cavités, lymphome, métastases',
    diagnostic:
      '## Clinique\n- Souvent **asymptomatique** (découverte échographique)\n- **Hématurie**, **douleur lombaire**, **masse du flanc** (triade tardive), varicocèle gauche récente\n- Altération de l’état général, fièvre, signes de métastases (toux, douleurs osseuses)\n\n## Examens\n- **Échographie** (masse solide vs kyste)\n- **Scanner** thoraco-abdomino-pelvien injecté (rehaussement, extension veineuse, ganglions, métastases)\n- NFS (polyglobulie, anémie), calcémie, créatinine, bilan hépatique\n- Biopsie seulement dans certains cas (avant traitement non chirurgical)',
    examens: [
      ['premiere_intention', 'echographie-renale', 'Masse solide ou kyste.'],
      ['confirmation', 'scanner-abdominal', 'Caractérisation, extension.'],
      ['gravite', 'scanner-thoracique', 'Métastases pulmonaires.'],
      ['premiere_intention', 'nfs', 'Polyglobulie, anémie.'],
      ['premiere_intention', 'calcemie-magnesemie', 'Hypercalcémie.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['deuxieme_intention', 'biopsie-histologie', 'Cas particuliers.'],
    ],
    scores: [],
    differentiels: [
      ['nephroblastome', 'Tumeur rénale de l’enfant.'],
      ['Kyste rénal simple', 'Anéchogène, paroi fine, pas de rehaussement.'],
      ['Abcès rénal', 'Fièvre, infection urinaire.'],
      ['tuberculose-extrapulmonaire', 'Tuberculose rénale.'],
      ['lithiase-urinaire-colique-nephretique', 'Douleur lombaire, calcul.'],
    ],
    etiologies: '## Facteurs\n- Tabac, obésité, HTA, dialyse, prédisposition génétique',
    principes: [
      [
        'Tumeur localisée',
        'Chirurgie.',
        '- **Néphrectomie élargie** ou **partielle** (petites tumeurs, rein unique), y compris thrombus de la veine rénale\n- Surveillance (scanner) après la chirurgie',
      ],
      [
        'Forme métastatique',
        'Centre spécialisé.',
        '- Néphrectomie de réduction dans certains cas, **thérapies ciblées** (inhibiteurs de tyrosine kinase) et immunothérapie (accès limité), radiothérapie des métastases osseuses, soins palliatifs',
      ],
      [
        'Masses bénignes',
        'Selon le type.',
        '- **Kyste simple** : abstention ; angiomyolipome volumineux : embolisation ou chirurgie (risque hémorragique)',
      ],
    ],
    molecules: [
      ['morphine', 'adjuvant', 'Douleurs'],
      ['acide-zoledronique', 'adjuvant', 'Métastases osseuses, hypercalcémie'],
      ['cefazoline', 'adjuvant', 'Antibioprophylaxie'],
    ],
    complications: [
      {
        nom: 'Hémorragie rétropéritonéale',
        description: 'Angiomyolipome, tumeur.',
        traitement: '- Embolisation, chirurgie',
        clinique: '- Douleur, choc',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Métastases',
        description: 'Poumons, os, cerveau.',
        traitement: '- Traitements systémiques',
        clinique: '',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Insuffisance rénale',
        fiche: 'maladie-renale-chronique',
        description: 'Après néphrectomie sur rein fragile.',
        traitement: '- Néphroprotection',
        clinique: '',
        paraclinique: '- Créatinine',
      },
    ],
    evolution:
      '## Pronostic\n- Survie à 5 ans > 90 % pour les petites tumeurs localisées ; mauvais pronostic des formes métastatiques',
    urgences: [],
    symptomes: [
      ['Hématurie', 'frequent'],
      ['Douleur lombaire', 'frequent'],
      ['Masse abdominale', 'occasionnel'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: [
      'ESMO — recommandations de pratique clinique',
      'NCCN — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Hématurie, masse : orientation', ''],
      hgr: ['- Échographie', ''],
      tert: ['- Scanner, néphrectomie, oncologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Carcinome à cellules rénales localisé',
        type: 'commune',
        description: 'Découverte fortuite.',
        terrain: '- Adulte, fumeur',
        fonctionnels: '',
        generaux: '',
        physiques: '',
        paraclinique: '- Masse rehaussée au scanner',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Forme métastatique',
        type: 'gravite',
        description: 'Diagnostic tardif.',
        terrain: '',
        fonctionnels: '- Hématurie, douleur',
        generaux: '- Amaigrissement',
        physiques: '- Masse du flanc',
        paraclinique: '- Métastases pulmonaires',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hématurie démarche
  {
    ...URO,
    slug: 'hematurie-demarche',
    nom: 'Hématurie (démarche)',
    resume:
      'Présence de sang dans les urines, macroscopique ou microscopique (≥ 5 hématies/mm³) : en RDC, penser d’abord à la schistosomiase urinaire (hématurie terminale, enfants et adolescents en zone d’endémie), puis infection urinaire, lithiase, glomérulonéphrite (hématurie avec protéinurie, œdèmes, HTA), drépanocytose (nécrose papillaire), traumatisme, tumeurs (vessie, rein, prostate) après 40 ans, tuberculose urinaire, troubles de la coagulation ; éliminer les fausses hématuries (règles, médicaments, betterave, hémoglobinurie, myoglobinurie) ; bandelette, ECBU, œufs de schistosomes, créatinine, échographie, cystoscopie si > 40 ans ou persistante.',
    definition:
      'Présence anormale de globules rouges dans les urines, visible à l’œil nu (macroscopique) ou seulement à l’examen (microscopique : ≥ 10 hématies/µL ou ≥ 5 par champ).',
    physiopathologie:
      '## Causes urologiques\n- **Schistosomiase** (S. haematobium), **infection urinaire**, **lithiase**, **tumeurs** (vessie, rein, prostate, uretère), **traumatisme**, **tuberculose** urinaire, HBP\n\n## Causes néphrologiques\n- **Glomérulonéphrites** (post-streptococcique, à IgA, lupus), **nécrose papillaire** (drépanocytose, AINS, diabète)\n\n## Autres\n- Troubles de la coagulation, anticoagulants (révèlent souvent une lésion sous-jacente), effort intense\n\n## Fausses hématuries\n- Règles, hémoglobinurie (hémolyse, G6PD, paludisme), myoglobinurie (rhabdomyolyse), aliments (betterave), médicaments (rifampicine)',
    diagnostic:
      '## Orientation clinique\n- **Chronologie** : initiale (urètre, prostate), **terminale** (vessie : schistosomiase), **totale** (rein, vessie)\n- Signes associés : brûlures et fièvre (infection), colique (lithiase), œdèmes et HTA (glomérulaire), caillots (urologique)\n- Âge, tabac, zone d’endémie bilharzienne, drépanocytose, traumatisme, anticoagulants\n\n## Examens\n- **Bandelette** et **ECBU** (hématies, leucocytes, germe, cylindres hématiques, hématies déformées = glomérulaire)\n- **Œufs de schistosomes** (urines de midi), **protéinurie**, **créatinine**, NFS, hémostase\n- **Échographie** rénale et vésicale\n- **Cystoscopie** si âge > 40 ans, facteur de risque ou hématurie inexpliquée ; scanner',
    examens: [
      ['premiere_intention', 'bandelette-urinaire', 'Hématurie, protéinurie, leucocytes.'],
      ['premiere_intention', 'ecbu', 'Infection, hématies.'],
      ['premiere_intention', 'oeufs-schistosomes-urines', 'Schistosomiase.'],
      ['premiere_intention', 'proteinurie', 'Origine glomérulaire.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['premiere_intention', 'echographie-renale', 'Lithiase, tumeur, hydronéphrose.'],
      ['deuxieme_intention', 'cystoscopie', 'Après 40 ans, persistante.'],
      ['deuxieme_intention', 'cytologie-urinaire', 'Tumeur urothéliale.'],
      ['etiologique', 'electrophorese-hb', 'Drépanocytose.'],
    ],
    scores: [],
    differentiels: [
      ['schistosomiase-urogenitale', 'Hématurie terminale, zone d’endémie.'],
      ['infections-urinaires-adulte', 'Brûlures, fièvre.'],
      ['lithiase-urinaire-colique-nephretique', 'Colique néphrétique.'],
      ['glomerulonephrites-aigues-adulte', 'Protéinurie, œdèmes, HTA.'],
      ['cancer-de-la-vessie', 'Hématurie indolore après 40 ans.'],
      ['deficit-en-g6pd', 'Urines foncées par hémoglobinurie (fausse hématurie).'],
    ],
    etiologies:
      '## Causes\n- Schistosomiase, infection, lithiase, glomérulonéphrite, tumeurs, traumatisme, drépanocytose, tuberculose',
    principes: [
      [
        'Urgences',
        'Agir vite.',
        '- **Rétention sur caillots** : sonde à double courant, lavage vésical\n- Hématurie abondante avec anémie : transfusion, recherche de la cause\n- Traumatisme : voir fiche traumatismes urologiques',
      ],
      [
        'Traitement de la cause',
        'Selon l’orientation.',
        '- **Schistosomiase** : **praziquantel** 40 mg/kg en dose unique, contrôle ; hématurie persistante après traitement → échographie, cystoscopie\n- Infection : antibiotiques ; lithiase : antalgiques, prise en charge urologique\n- Glomérulaire : avis néphrologique\n- **Tumeurs** : prise en charge spécifique',
      ],
      [
        'Ne pas banaliser',
        'Explorer.',
        '- Une hématurie sous anticoagulant doit être explorée\n- Toute hématurie macroscopique de l’adulte > 40 ans : cystoscopie',
      ],
    ],
    molecules: [
      ['praziquantel', 'premiere', 'Schistosomiase'],
      ['ciprofloxacine', 'alternative', 'Infection urinaire (selon ECBU)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
      ['acide-tranexamique', 'adjuvant', 'Hématurie abondante (prudence : caillots)'],
    ],
    complications: [
      {
        nom: 'Rétention sur caillots',
        fiche: 'retention-aigue-urine',
        description: 'Hématurie abondante.',
        traitement: '- Sonde à double courant, lavage',
        clinique: '- Globe, douleur',
        paraclinique: '',
      },
      {
        nom: 'Anémie',
        fiche: 'anemie-ferriprive',
        description: 'Saignement chronique.',
        traitement: '- Fer, transfusion',
        clinique: '- Pâleur',
        paraclinique: '- NFS',
      },
      {
        nom: 'Retard diagnostique d’un cancer',
        fiche: 'cancer-de-la-vessie',
        description: 'Hématurie banalisée.',
        traitement: '- Exploration',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Celui de la cause ; schistosomiase : guérison sous praziquantel, séquelles si infection prolongée',
    urgences: [],
    symptomes: [
      ['Hématurie', 'tres_frequent'],
      ['Brûlures mictionnelles', 'occasionnel'],
      ['Douleur lombaire', 'occasionnel'],
      ['Urines foncées', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'OMS — lignes directrices et publications',
      "Harrison's Principles of Internal Medicine",
    ],
    niveaux: {
      cs: [
        '- Bandelette, œufs de schistosomes, praziquantel, ECBU',
        '- Hématurie persistante, > 40 ans, caillots',
      ],
      hgr: ['- Échographie, créatinine', ''],
      tert: ['- Cystoscopie, scanner, néphrologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hématurie bilharzienne',
        type: 'commune',
        description: 'Terminale.',
        terrain: '- Enfant ou adolescent en zone d’endémie',
        fonctionnels: '- Hématurie terminale',
        generaux: '',
        physiques: '',
        paraclinique: '- Œufs de S. haematobium',
        etiologies: '- Schistosomiase',
        syndromes: [],
      },
      {
        nom: 'Hématurie glomérulaire',
        type: 'etiologique',
        description: 'Néphropathie.',
        terrain: '',
        fonctionnels: '',
        generaux: '',
        physiques: '- Œdèmes, HTA',
        paraclinique: '- Protéinurie, cylindres hématiques',
        etiologies: '- Glomérulonéphrite',
        syndromes: [],
      },
      {
        nom: 'Hématurie macroscopique de l’adulte > 40 ans',
        type: 'gravite',
        description: 'Tumeur à éliminer.',
        terrain: '- Fumeur',
        fonctionnels: '- Hématurie indolore',
        generaux: '',
        physiques: '',
        paraclinique: '- Cystoscopie',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Phimosis et paraphimosis
  {
    ...URO,
    slug: 'phimosis-paraphimosis',
    nom: 'Phimosis et paraphimosis',
    resume:
      'Phimosis : prépuce trop étroit pour être rétracté derrière le gland ; physiologique chez le petit garçon (décollement spontané avant la puberté), pathologique s’il est cicatriciel (balanites, lichen scléreux) ou gênant (ballonnement à la miction, infections, rapports douloureux) : soins d’hygiène, dermocorticoïde local 4–6 semaines, circoncision si échec ; paraphimosis : prépuce rétracté et bloqué derrière le gland, œdème et risque d’ischémie (urgence) : réduction manuelle après compression de l’œdème, sinon incision dorsale, circoncision à distance ; circoncision médicale (prévention du VIH) dans de bonnes conditions d’asepsie.',
    definition:
      'Phimosis : étroitesse de l’anneau préputial empêchant de découvrir le gland ; paraphimosis : prépuce étroit rétracté qui ne peut revenir sur le gland, formant un anneau constrictif.',
    physiopathologie:
      '## Phimosis\n- **Physiologique** chez le nourrisson et le jeune enfant (adhérences, régression progressive)\n- **Pathologique** : cicatrices de **balanoposthites**, **lichen scléreux** (balanite xérotique), diabète, rétractions forcées\n\n## Paraphimosis\n- Prépuce rétracté (toilette, rapport, sondage urinaire, examen) non replacé → **œdème** du gland et du prépuce → constriction, ischémie, nécrose',
    diagnostic:
      '## Phimosis\n- Impossibilité de décalotter, **ballonnement du prépuce** à la miction, jet faible, balanites récidivantes, infections urinaires, rapports douloureux\n- Anneau blanc scléreux (lichen)\n\n## Paraphimosis\n- **Anneau préputial** serré derrière le gland, **œdème** du gland et du prépuce, douleur\n- Gland violacé ou noir : ischémie\n\n## Examens\n- Diagnostic clinique ; glycémie (balanites récidivantes, diabète)',
    examens: [
      ['etiologique', 'glycemie', 'Diabète (balanites).'],
      ['etiologique', 'bandelette-urinaire', 'Infection urinaire.'],
    ],
    scores: [],
    differentiels: [
      ['Balanite', 'Inflammation du gland sans constriction.'],
      ['Œdème allergique du prépuce', 'Pas d’anneau constrictif.'],
      ['lichen-sclereux-vulvaire', 'Lichen scléreux (forme masculine : balanite xérotique).'],
    ],
    etiologies: '## Causes\n- Physiologique (enfant), balanites, lichen scléreux, diabète, rétraction forcée',
    principes: [
      [
        'Phimosis',
        'Conservateur d’abord.',
        '- Enfant : **ne pas décalotter de force** ; hygiène simple\n- **Dermocorticoïde** (**bétaméthasone** 0,05 % ou clobétasol) 2 fois par jour 4–6 semaines avec étirements doux\n- **Circoncision** ou plastie du prépuce si échec, phimosis cicatriciel, infections récidivantes',
      ],
      [
        'Paraphimosis',
        'Urgence.',
        '- **Réduction manuelle** : antalgie (bloc pénien à la **lidocaïne** sans adrénaline), compression prolongée de l’œdème (compresses, glace), puis repousser le gland avec les pouces tout en ramenant le prépuce\n- Échec : **incision dorsale** de l’anneau sous anesthésie\n- **Circoncision** à distance',
      ],
      [
        'Circoncision médicale',
        'Bonnes pratiques.',
        '- Asepsie, anesthésie locale, opérateur formé ; prévention partielle du VIH chez l’homme (programmes)',
      ],
    ],
    molecules: [
      ['betamethasone-topique', 'premiere', 'Phimosis'],
      ['clobetasol-propionate', 'alternative', 'Phimosis, lichen scléreux'],
      ['lidocaine', 'premiere', 'Bloc pénien (sans adrénaline)'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Nécrose du gland',
        description: 'Paraphimosis non réduit.',
        traitement: '- Chirurgie',
        clinique: '- Gland noir',
        paraclinique: '',
      },
      {
        nom: 'Balanites et infections urinaires',
        fiche: 'infections-urinaires-adulte',
        description: 'Phimosis serré.',
        traitement: '- Hygiène, antibiotiques, circoncision',
        clinique: '- Brûlures, écoulement',
        paraclinique: '',
      },
      {
        nom: 'Complications de circoncision',
        description: 'Hémorragie, infection, lésion du gland.',
        traitement: '- Hémostase, soins',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Excellent ; paraphimosis sans séquelle si réduit rapidement',
    urgences: [],
    symptomes: [
      ['Douleur scrotale', 'occasionnel'],
      ['Dysurie', 'frequent'],
      ['Œdèmes', 'occasionnel'],
    ],
    sources: [
      'Sabiston Textbook of Surgery',
      'Nelson Textbook of Pediatrics',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: ['- Conseils, dermocorticoïde, réduction d’un paraphimosis', '- Échec de réduction'],
      hgr: ['- Incision dorsale, circoncision', ''],
      tert: ['', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Phimosis physiologique de l’enfant',
        type: 'terrain',
        description: 'Normal.',
        terrain: '- Garçon < 5 ans',
        fonctionnels: '',
        generaux: '',
        physiques: '- Prépuce non rétractable',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Phimosis pathologique',
        type: 'commune',
        description: 'Cicatriciel.',
        terrain: '- Balanites, lichen',
        fonctionnels: '- Ballonnement, douleur',
        generaux: '',
        physiques: '- Anneau scléreux',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Paraphimosis',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Après rétraction',
        fonctionnels: '- Douleur',
        generaux: '',
        physiques: '- Anneau constrictif, œdème',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Hypospadias
  {
    ...URO,
    slug: 'hypospadias',
    nom: 'Hypospadias',
    resume:
      'Malformation congénitale fréquente du pénis (≈ 1/250 garçons) : méat urétral ouvert sur la face inférieure du pénis (balanique, pénien, scrotal ou périnéal), prépuce incomplet en « tablier » dorsal, courbure ventrale de la verge ; ne pas circoncire (le prépuce sert à la réparation) ; formes postérieures ou associées à une cryptorchidie : rechercher une anomalie de la différenciation sexuelle (caryotype, 17-OHP) ; correction chirurgicale entre 6 et 18 mois par un chirurgien pédiatre formé ; complications : fistule, sténose.',
    definition:
      'Malformation congénitale de l’urètre antérieur dont le méat s’ouvre sur la face ventrale du pénis, du scrotum ou du périnée, souvent associée à une courbure de la verge et à une anomalie du prépuce.',
    physiopathologie:
      '## Mécanisme\n- Défaut de fermeture du sillon urétral pendant le développement embryonnaire (dépendant des androgènes)\n\n## Facteurs\n- Antécédents familiaux, prématurité, petit poids de naissance, exposition hormonale, **anomalies de la différenciation sexuelle** (formes postérieures)\n\n## Formes\n- **Antérieures** (balaniques, coronales) : 70 %\n- **Moyennes** (péniennes), **postérieures** (scrotales, périnéales)',
    diagnostic:
      '## Clinique (naissance)\n- **Méat urétral** ectopique sur la face ventrale\n- **Prépuce** incomplet (capuchon dorsal), **courbure ventrale** (chordée)\n- Jet urinaire dévié\n- Rechercher : **testicules** (cryptorchidie), hernie, scrotum bifide\n\n## Examens\n- Hypospadias **postérieur** ou associé à une **cryptorchidie** : **caryotype**, **17-hydroxyprogestérone**, échographie pelvienne (anomalie de la différenciation sexuelle)\n- Échographie rénale (formes graves)',
    examens: [
      ['etiologique', 'caryotype', 'Formes postérieures, cryptorchidie.'],
      ['etiologique', '17-hydroxyprogesterone', 'Hyperplasie des surrénales.'],
      ['deuxieme_intention', 'echographie-renale', 'Malformations associées.'],
    ],
    scores: [],
    differentiels: [
      ['anomalies-differenciation-sexuelle', 'Hypospadias postérieur avec gonades non palpables.'],
      ['cryptorchidie', 'Association.'],
      ['Épispadias', 'Méat sur la face dorsale.'],
    ],
    etiologies: '## Facteurs\n- Génétiques, hormonaux, prématurité, anomalies de la différenciation sexuelle',
    principes: [
      [
        'À la naissance',
        'Ne pas circoncire.',
        '- **Pas de circoncision** (le prépuce est utilisé pour la réparation)\n- Information des parents ; bilan si forme postérieure ou cryptorchidie',
      ],
      [
        'Chirurgie',
        'Entre 6 et 18 mois.',
        '- **Urétroplastie** avec redressement de la verge et reconstruction (chirurgien pédiatre formé), en un ou deux temps selon la forme\n- Formes très antérieures sans courbure : chirurgie facultative',
      ],
      [
        'Suivi',
        'Dépister les complications.',
        '- Jet urinaire, cicatrisation, fistule ; suivi jusqu’à la puberté',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur postopératoire'],
      ['bupivacaine', 'adjuvant', 'Bloc caudal ou pénien'],
      ['testosterone', 'adjuvant', 'Préparation préopératoire (petit pénis, avis spécialisé)'],
    ],
    complications: [
      {
        nom: 'Fistule urétro-cutanée',
        description: 'Postopératoire.',
        traitement: '- Reprise chirurgicale',
        clinique: '- Fuite d’urine par un orifice',
        paraclinique: '',
      },
      {
        nom: 'Sténose du méat ou de l’urètre',
        fiche: 'retrecissement-uretral',
        description: 'Cicatrisation.',
        traitement: '- Dilatation, reprise',
        clinique: '- Jet faible',
        paraclinique: '',
      },
      {
        nom: 'Courbure résiduelle',
        description: 'Redressement incomplet.',
        traitement: '- Reprise',
        clinique: '- Courbure à l’érection',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Bons résultats fonctionnels et esthétiques dans les formes antérieures ; complications plus fréquentes dans les formes postérieures',
    urgences: [],
    symptomes: [
      ['Dysurie', 'occasionnel'],
      ['Bourse vide', 'occasionnel'],
    ],
    sources: ['Nelson Textbook of Pediatrics', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Diagnostic à la naissance, pas de circoncision, orientation', ''],
      hgr: ['- Formes antérieures (chirurgien formé)', ''],
      tert: ['- Formes postérieures, bilan de différenciation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Hypospadias antérieur',
        type: 'commune',
        description: 'Balanique, coronal.',
        terrain: '- Nouveau-né garçon',
        fonctionnels: '',
        generaux: '',
        physiques: '- Méat près du gland, prépuce en tablier',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Hypospadias postérieur',
        type: 'gravite',
        description: 'Bilan de différenciation.',
        terrain: '- Nouveau-né',
        fonctionnels: '',
        generaux: '',
        physiques: '- Méat scrotal ou périnéal, cryptorchidie',
        paraclinique: '- Caryotype',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
