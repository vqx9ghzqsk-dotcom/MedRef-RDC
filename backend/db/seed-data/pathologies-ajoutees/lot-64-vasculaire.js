'use strict';

/**
 * Lot 64 (phase 2, chirurgie vasculaire) — varices des membres inférieurs, anévrysme de l'aorte
 * abdominale, plaies vasculaires, fistule artério-veineuse pour hémodialyse. Rédigé par IA (ESC,
 * Sabiston, ACS TQIP, EAST) : à valider.
 */

const VASC = { departement: 'chirurgie', specialite: 'Chirurgie vasculaire' };

module.exports = [
  // =================================================================== Varices
  {
    ...VASC,
    slug: 'varices-membres-inferieurs',
    nom: 'Varices des membres inférieurs',
    resume:
      'Dilatations veineuses superficielles permanentes, très fréquentes (femmes, multiparité, station debout prolongée, obésité, hérédité, séquelles de thrombose) : jambes lourdes, douleurs, œdème du soir, crampes, puis troubles trophiques (dermite ocre, eczéma, hypodermite, ulcère veineux) ; complications : thrombose veineuse superficielle, rupture hémorragique, ulcère ; examen debout, écho-Doppler veineux ; traitement : mesures hygiéniques, compression élastique (après élimination d’une artériopathie), surélévation, marche ; sclérothérapie, chirurgie (stripping, ligature-crossectomie) ou techniques endoveineuses pour les formes symptomatiques.',
    definition:
      'Veines superficielles des membres inférieurs dilatées (diamètre ≥ 3 mm en position debout), tortueuses, avec reflux, traduisant une insuffisance veineuse superficielle.',
    physiopathologie:
      '## Mécanismes\n- Incontinence des **valvules** veineuses → **reflux** et hyperpression → dilatation (grande et petite veine saphène)\n- **Primitives** (hérédité, faiblesse de la paroi) ou **secondaires** (post-thrombotiques)\n\n## Facteurs\n- Sexe féminin, **grossesses**, station debout prolongée, **obésité**, âge, chaleur\n\n## Évolution\n- Insuffisance veineuse chronique : œdème, **dermite ocre**, hypodermite, **ulcère** (classification CEAP)',
    diagnostic:
      '## Clinique\n- **Jambes lourdes**, douleurs, prurit, crampes nocturnes, **œdème** vespéral\n- Examen **debout** : varices de la grande saphène (face interne) ou de la petite saphène (mollet)\n- Troubles trophiques : dermite ocre, eczéma, atrophie blanche, **ulcère** malléolaire\n- Pouls distaux (éliminer une artériopathie avant compression)\n\n## Examens\n- **Écho-Doppler veineux** : reflux, perméabilité du réseau profond (avant traitement)\n- **IPS** avant compression forte',
    examens: [
      ['confirmation', 'echo-doppler-veineux', 'Reflux, réseau profond.'],
      ['premiere_intention', 'ips-cheville-bras', 'Avant compression.'],
    ],
    scores: [],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Œdème unilatéral douloureux.'],
      ['ulceres-chroniques-de-jambe', 'Ulcère veineux et autres causes.'],
      ['filariose-lymphatique', 'Lymphœdème.'],
      ['insuffisance-cardiaque', 'Œdèmes bilatéraux.'],
    ],
    etiologies: '## Facteurs\n- Hérédité, grossesses, station debout, obésité, thrombose ancienne',
    principes: [
      [
        'Mesures générales',
        'Pour tous.',
        '- **Marche**, surélévation des jambes, éviter la station debout prolongée et la chaleur, perte de poids\n- **Compression élastique** (bas de classe 2) si IPS normal\n- Veinotoniques (diosmine) : effet symptomatique modeste',
      ],
      [
        'Traitements interventionnels',
        'Formes symptomatiques.',
        '- **Sclérothérapie** (petites varices), **chirurgie** (crossectomie, stripping, phlébectomies) ou techniques endoveineuses (laser, radiofréquence) en centre équipé\n- Avant tout traitement : réseau profond perméable au Doppler',
      ],
      [
        'Complications',
        'Traiter.',
        '- **Rupture** hémorragique : compression, surélévation\n- **Thrombose superficielle** : AINS, compression, anticoagulant si étendue ou proche de la crosse\n- **Ulcère** : soins locaux et compression',
      ],
    ],
    molecules: [
      ['diosmine', 'alternative', 'Symptômes'],
      ['enoxaparine', 'alternative', 'Thrombose superficielle étendue'],
      ['ibuprofene', 'alternative', 'Thrombose superficielle'],
      ['paracetamol', 'adjuvant', 'Douleur'],
    ],
    complications: [
      {
        nom: 'Ulcère veineux',
        fiche: 'ulceres-chroniques-de-jambe',
        description: 'Insuffisance veineuse évoluée.',
        traitement: '- Compression, soins locaux',
        clinique: '- Ulcère malléolaire',
        paraclinique: '',
      },
      {
        nom: 'Thrombose veineuse superficielle',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Stase.',
        traitement: '- AINS, anticoagulation selon le cas',
        clinique: '- Cordon rouge douloureux',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Rupture hémorragique',
        description: 'Varice superficielle.',
        traitement: '- Compression, surélévation',
        clinique: '- Saignement abondant',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Maladie chronique évolutive ; amélioration des symptômes par la compression ; récidives après traitement',
    urgences: [],
    symptomes: [
      ['Jambes lourdes', 'tres_frequent'],
      ['Œdème d’un membre', 'frequent'],
      ['Prurit', 'occasionnel'],
      ['Ulcère cutané', 'occasionnel'],
    ],
    sources: ['ESC — recommandations de pratique clinique', 'Sabiston Textbook of Surgery'],
    niveaux: {
      cs: ['- Conseils, compression, soins d’ulcère', ''],
      hgr: ['- Doppler, chirurgie des varices', ''],
      tert: ['- Techniques endoveineuses', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Varices primitives',
        type: 'commune',
        description: 'Grande saphène.',
        terrain: '- Femme multipare',
        fonctionnels: '- Jambes lourdes',
        generaux: '',
        physiques: '- Varices de la face interne',
        paraclinique: '- Reflux saphène',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Insuffisance veineuse avec troubles trophiques',
        type: 'gravite',
        description: 'Ulcère.',
        terrain: '- Post-thrombotique',
        fonctionnels: '',
        generaux: '',
        physiques: '- Dermite ocre, ulcère',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== AAA
  {
    ...VASC,
    slug: 'anevrysme-aorte-abdominale',
    nom: 'Anévrysme de l’aorte abdominale',
    resume:
      'Dilatation permanente de l’aorte abdominale (≥ 3 cm, généralement sous-rénale), surtout chez l’homme de plus de 65 ans fumeur et hypertendu (athérosclérose), plus rarement infectieuse (syphilis, salmonelles, tuberculose) : souvent asymptomatique (masse battante, découverte échographique) ; rupture = douleur abdominale ou lombaire brutale, masse battante, choc : urgence vitale (mortalité > 80 %) ; échographie, scanner ; surveillance si < 5,5 cm, arrêt du tabac, contrôle tensionnel, statine ; chirurgie (mise à plat-greffe ou endoprothèse) si ≥ 5,5 cm, croissance rapide ou symptômes.',
    definition:
      'Dilatation localisée et permanente de l’aorte abdominale dont le diamètre dépasse 3 cm ou 1,5 fois le diamètre normal.',
    physiopathologie:
      '## Causes\n- **Athérosclérose** (tabac, HTA, âge, sexe masculin, dyslipidémie)\n- **Infectieuse** (anévrisme mycotique : salmonelles, staphylocoque, **syphilis**, **tuberculose**), inflammatoire, traumatique, maladies du tissu conjonctif\n\n## Évolution\n- Croissance progressive ; risque de **rupture** augmentant avec le diamètre (> 5,5 cm) et la vitesse de croissance\n- Thrombose, embolies distales',
    diagnostic:
      '## Clinique\n- **Asymptomatique** le plus souvent ; **masse abdominale battante** et expansive (péri-ombilicale)\n- Douleurs abdominales ou lombaires (anévrisme symptomatique : risque de rupture imminente)\n- **Rupture** : douleur brutale abdominale ou lombaire, malaise, **choc hémorragique**, masse battante\n- Ischémie des membres (embolies)\n\n## Examens\n- **Échographie** abdominale (dépistage, surveillance du diamètre)\n- **Scanner** injecté (bilan préopératoire, rupture si patient stable)\n- NFS, créatinine, groupage ; sérologie syphilis, hémocultures si suspicion infectieuse',
    examens: [
      ['confirmation', 'echographie-abdominale', 'Diamètre aortique.'],
      ['confirmation', 'scanner-abdominal', 'Bilan, rupture.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['premiere_intention', 'creatinine', 'Fonction rénale.'],
      ['etiologique', 'serologie-syphilis', 'Anévrisme syphilitique.'],
      ['premiere_intention', 'bilan-lipidique', 'Risque cardiovasculaire.'],
    ],
    scores: [],
    differentiels: [
      ['lithiase-urinaire-colique-nephretique', 'Douleur lombaire (piège de la rupture).'],
      ['pancreatite-aigue', 'Douleur épigastrique, lipase élevée.'],
      ['perforation-ulcere-gastroduodenal', 'Pneumopéritoine.'],
      ['Masse abdominale non vasculaire', 'Masse non battante.'],
    ],
    etiologies: '## Causes\n- Athérosclérose, tabac, HTA ; infections (syphilis, salmonelles, tuberculose)',
    principes: [
      [
        'Anévrisme non compliqué',
        'Surveiller et réduire le risque.',
        '- **Arrêt du tabac**, contrôle de la **tension**, **statine**, aspirine\n- Surveillance échographique (annuelle à semestrielle selon le diamètre)\n- **Chirurgie** si diamètre ≥ 5,5 cm (5 cm chez la femme), croissance > 1 cm/an ou symptômes : mise à plat-greffe prothétique ou **endoprothèse** (centre spécialisé)',
      ],
      [
        'Rupture',
        'Urgence vitale.',
        '- Appel du chirurgien vasculaire, 2 voies veineuses, **hypotension permissive** (ne pas remonter la tension au-delà de 80–90 mmHg systolique), transfusion, **acide tranexamique** discuté\n- **Chirurgie immédiate** (clampage aortique) ou endoprothèse',
      ],
      [
        'Anévrisme infecté',
        'Antibiotiques et chirurgie.',
        '- Antibiothérapie prolongée adaptée et chirurgie ; syphilis : pénicilline',
      ],
    ],
    molecules: [
      ['acide-acetylsalicylique', 'premiere', 'Prévention cardiovasculaire'],
      ['amlodipine', 'alternative', 'HTA'],
      ['morphine', 'adjuvant', 'Douleur (rupture)'],
      ['benzathine-benzylpenicilline', 'alternative', 'Syphilis'],
      ['acide-tranexamique', 'adjuvant', 'Hémorragie'],
    ],
    complications: [
      {
        nom: 'Rupture',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Diamètre important.',
        traitement: '- Chirurgie immédiate',
        clinique: '- Douleur, choc',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Ischémie aiguë des membres',
        fiche: 'ischemie-aigue-de-membre',
        description: 'Embolies, thrombose.',
        traitement: '- Revascularisation',
        clinique: '- Membre froid',
        paraclinique: '',
      },
      {
        nom: 'Complications postopératoires',
        fiche: 'insuffisance-renale-aigue',
        description: 'Clampage aortique.',
        traitement: '- Réanimation',
        clinique: '- Oligurie, ischémie colique',
        paraclinique: '',
      },
    ],
    evolution: '## Pronostic\n- Mortalité de la chirurgie programmée < 5 % ; mortalité de la rupture > 80 %',
    urgences: ['abdomen-aigu-chirurgical'],
    symptomes: [
      ['Masse abdominale', 'frequent'],
      ['Douleur abdominale', 'occasionnel'],
      ['Douleur lombaire', 'occasionnel'],
      ['Pâleur', 'occasionnel'],
    ],
    sources: [
      'ESC — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
      'AHA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: ['- Repérer une masse battante, orientation ; rupture : transfert immédiat', ''],
      hgr: ['- Échographie, prévention cardiovasculaire', ''],
      tert: ['- Scanner, chirurgie vasculaire, endoprothèse', ''],
    },
    alertes: {
      'abdomen-aigu-chirurgical': 'Homme âgé avec douleur abdominale ou lombaire brutale et masse battante',
    },
    formes: [
      {
        nom: 'Anévrisme asymptomatique',
        type: 'commune',
        description: 'Découverte fortuite.',
        terrain: '- Homme > 65 ans, fumeur',
        fonctionnels: '',
        generaux: '',
        physiques: '- Masse battante',
        paraclinique: '- Diamètre ≥ 3 cm',
        etiologies: '- Athérosclérose',
        syndromes: [],
      },
      {
        nom: 'Anévrisme rompu',
        type: 'gravite',
        description: 'Urgence vitale.',
        terrain: '',
        fonctionnels: '- Douleur brutale',
        generaux: '- Choc',
        physiques: '- Masse battante douloureuse',
        paraclinique: '- Hématome rétropéritonéal',
        etiologies: '',
        syndromes: ['syndrome-de-choc', 'syndrome-d-hemorragie-interne'],
      },
    ],
  },

  // =================================================================== Plaies vasculaires
  {
    ...VASC,
    slug: 'plaies-vasculaires',
    nom: 'Plaies vasculaires',
    resume:
      'Lésions des artères et veines par plaies pénétrantes (couteau, machette, balle, verre) ou traumatismes fermés (fractures, luxations du genou, écrasements), fréquentes dans les contextes de violence et d’accidents : hémorragie externe pulsatile, hématome expansif, souffle, ischémie d’aval (membre froid, sans pouls) ; contrôle immédiat du saignement (compression directe, pansement compressif, garrot si échec, noter l’heure), réanimation, acide tranexamique ; exploration chirurgicale : suture, pontage veineux, shunt temporaire, ligature (veines) ; aponévrotomie si ischémie prolongée ; rechercher une lésion vasculaire devant toute fracture ou luxation à risque.',
    definition:
      'Lésion traumatique d’un vaisseau sanguin (section, contusion, dissection, thrombose, fistule artério-veineuse, faux anévrisme).',
    physiopathologie:
      '## Mécanismes\n- **Pénétrants** : armes blanches, armes à feu, éclats, verre\n- **Fermés** : fractures déplacées (supracondylienne de l’humérus, fémur), **luxation du genou** (artère poplitée), écrasements\n\n## Conséquences\n- **Hémorragie** (externe ou interne), choc\n- **Ischémie** d’aval → nécrose en 6 h, syndrome des loges, rhabdomyolyse\n- Tardives : faux anévrisme, fistule artério-veineuse',
    diagnostic:
      '## Signes « durs » (exploration immédiate)\n- **Hémorragie pulsatile**, **hématome expansif ou battant**, **souffle ou frémissement**, **absence de pouls** distaux, **ischémie** (membre froid, pâle)\n\n## Signes « mous » (examens complémentaires)\n- Saignement modéré, hématome stable, déficit nerveux associé, pouls diminué, proximité d’une plaie avec un trajet vasculaire\n\n## Examens\n- **Index de pression systolique** (< 0,9 : lésion probable), **écho-Doppler artériel**, angioscanner\n- NFS, groupage, hémostase, CPK',
    examens: [
      ['premiere_intention', 'ips-cheville-bras', 'Index < 0,9.'],
      ['confirmation', 'echo-doppler-arteriel', 'Lésion artérielle.'],
      ['deuxieme_intention', 'angioscanner-thoracique', 'Angioscanner (selon le siège).'],
      ['gravite', 'nfs', 'Hémorragie.'],
      ['gravite', 'groupage-rai', 'Transfusion.'],
      ['gravite', 'cpk', 'Ischémie musculaire.'],
    ],
    scores: [],
    differentiels: [
      ['plaies-par-arme-a-feu', 'Prise en charge globale.'],
      ['syndrome-des-loges', 'Ischémie avec pouls présents.'],
      ['ischemie-aigue-de-membre', 'Ischémie non traumatique.'],
      ['Spasme artériel', 'Pouls diminué transitoire (diagnostic d’élimination).'],
    ],
    etiologies:
      '## Causes\n- Violences (armes blanches, armes à feu), accidents, fractures, luxations, iatrogènes',
    principes: [
      [
        'Contrôle de l’hémorragie',
        'Immédiat.',
        '- **Compression directe** manuelle puis pansement compressif\n- **Garrot** au-dessus de la plaie si hémorragie non contrôlée (noter l’heure, ne pas le desserrer avant le bloc)\n- Réanimation : **acide tranexamique**, transfusion, hypotension permissive (sauf traumatisme crânien)',
      ],
      [
        'Chirurgie',
        'Revasculariser.',
        '- **Exploration** : contrôle proximal et distal, **suture**, résection-anastomose, **pontage veineux** (saphène), **shunt temporaire** en situation de damage control\n- Veines : réparation ou ligature\n- **Aponévrotomie** si ischémie > 4–6 h ; stabilisation des fractures associées\n- Antibiotiques, antitétanique',
      ],
      ['Après', 'Surveiller.', '- Pouls, perfusion, syndrome des loges, rhabdomyolyse ; thromboprophylaxie'],
    ],
    molecules: [
      ['acide-tranexamique', 'premiere', 'Hémorragie'],
      ['heparine-non-fractionnee', 'alternative', 'Héparinisation locale peropératoire'],
      ['cefazoline', 'premiere', 'Antibioprophylaxie'],
      ['anatoxines-tetanique-diphterique', 'premiere', 'Prévention du tétanos'],
      ['morphine', 'premiere', 'Douleur'],
      ['ringer-lactate', 'alternative', 'Remplissage initial'],
    ],
    complications: [
      {
        nom: 'Choc hémorragique',
        fiche: 'choc-hemorragique-traumatique',
        description: 'Saignement.',
        traitement: '- Transfusion, chirurgie',
        clinique: '- Hypotension',
        paraclinique: '',
      },
      {
        nom: 'Ischémie et amputation',
        fiche: 'amputations-traumatiques',
        description: 'Revascularisation tardive.',
        traitement: '- Amputation',
        clinique: '- Nécrose',
        paraclinique: '',
      },
      {
        nom: 'Faux anévrisme et fistule artério-veineuse',
        description: 'Lésion méconnue.',
        traitement: '- Chirurgie',
        clinique: '- Masse battante, souffle',
        paraclinique: '- Doppler',
      },
    ],
    evolution:
      '## Pronostic\n- Bon si contrôle et réparation rapides ; amputations fréquentes si délai > 6 h',
    urgences: [],
    symptomes: [
      ['Hémorragies', 'tres_frequent'],
      ['Membre froid et pâle', 'frequent'],
      ['Lésions traumatiques', 'tres_frequent'],
      ['Troubles sensitifs', 'occasionnel'],
    ],
    sources: [
      'ACS TQIP — recommandations de pratique clinique',
      'EAST — recommandations de pratique clinique',
      'Sabiston Textbook of Surgery',
    ],
    niveaux: {
      cs: ['- Compression, garrot, acide tranexamique, transfert', '- Toute plaie vasculaire'],
      hgr: ['- Exploration, ligature, shunt, réparation', ''],
      tert: ['- Chirurgie vasculaire, pontages', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Plaie artérielle pénétrante',
        type: 'commune',
        description: 'Hémorragie.',
        terrain: '- Agression, arme blanche',
        fonctionnels: '',
        generaux: '- Choc',
        physiques: '- Saignement pulsatile',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
      {
        nom: 'Lésion artérielle sur fracture ou luxation',
        type: 'etiologique',
        description: 'Ischémie.',
        terrain: '- Luxation du genou, fracture supracondylienne',
        fonctionnels: '',
        generaux: '',
        physiques: '- Pouls absent, membre froid',
        paraclinique: '- IPS bas',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== FAV hémodialyse
  {
    ...VASC,
    slug: 'fistule-arterio-veineuse-hemodialyse',
    nom: 'Fistule artério-veineuse pour hémodialyse',
    resume:
      'Abord vasculaire de référence de l’hémodialyse chronique : anastomose chirurgicale entre une artère et une veine de l’avant-bras ou du bras (radio-céphalique au poignet en premier), réalisée 3 à 6 mois avant le début prévu de la dialyse (préserver les veines du bras non dominant : pas de prises de sang ni de perfusions) ; maturation en 6–8 semaines ; surveillance quotidienne du frémissement (thrill) ; complications : thrombose (perte du thrill : urgence), sténose, infection, anévrisme, ischémie de la main, hyperdébit cardiaque ; cathéter central en attendant (risque infectieux).',
    definition:
      'Communication chirurgicale entre une artère et une veine superficielle permettant d’obtenir une veine à haut débit, facile à ponctionner pour l’hémodialyse.',
    physiopathologie:
      '## Principe\n- L’anastomose artérialise la veine → dilatation et épaississement (**maturation**) en 6–8 semaines → ponctions répétées possibles\n\n## Types\n- **Radio-céphalique** (poignet) : premier choix\n- **Brachio-céphalique** ou brachio-basilique (coude, bras)\n- Pontage prothétique si veines insuffisantes\n\n## Complications\n- **Thrombose**, **sténose**, **infection**, **anévrisme**, **ischémie de la main** (vol vasculaire), insuffisance cardiaque à haut débit, hémorragie',
    diagnostic:
      '## Avant la création\n- Maladie rénale chronique stade 4–5 avec dialyse prévue ; examen des pouls, test d’Allen, **cartographie veineuse** (écho-Doppler)\n- **Préservation** des veines du bras non dominant\n\n## Surveillance\n- **Frémissement** (thrill) palpable et **souffle** continu, quotidiennement par le patient\n- Signes d’alerte : perte du thrill (**thrombose**), douleur, rougeur, écoulement (infection), main froide et douloureuse (ischémie), saignement prolongé après dialyse (sténose), gonflement du bras\n\n## Examens\n- **Écho-Doppler** (débit, sténose, thrombose), fistulographie',
    examens: [
      ['premiere_intention', 'echo-doppler-veineux', 'Cartographie, surveillance.'],
      ['premiere_intention', 'echo-doppler-arteriel', 'Artères du membre.'],
      ['premiere_intention', 'nfs', 'Bilan préopératoire.'],
      ['premiere_intention', 'hemostase', 'Bilan préopératoire.'],
      ['etiologique', 'hemocultures', 'Infection.'],
    ],
    scores: [],
    differentiels: [
      ['maladie-renale-chronique', 'Indication.'],
      ['urgences-hemodialyse', 'Complications de la dialyse.'],
      ['thrombose-veineuse-profonde', 'Œdème du bras.'],
    ],
    etiologies: '## Indication\n- Maladie rénale chronique terminale nécessitant une hémodialyse',
    principes: [
      [
        'Création',
        'Anticiper.',
        '- Créer la fistule **3–6 mois avant** la dialyse prévue, sous anesthésie locale ou locorégionale\n- **Préserver les veines** du bras non dominant (pas de prises de sang, perfusions, cathéters)\n- Exercices de la main (balle) pour favoriser la maturation',
      ],
      [
        'Surveillance et soins',
        'Protéger la fistule.',
        '- Vérifier le **thrill** chaque jour, ne pas comprimer le bras (pas de tension artérielle ni de montre serrée), hygiène\n- Ponctions par du personnel formé, en rotation',
      ],
      [
        'Complications',
        'Agir vite.',
        '- **Thrombose** : désobstruction urgente (< 24–48 h) chirurgicale ou endovasculaire\n- **Sténose** : angioplastie, reprise\n- **Infection** : antibiotiques (cloxacilline ± vancomycine), ligature si infection grave\n- **Ischémie de la main** : chirurgie de correction ; **anévrisme** : reprise',
      ],
    ],
    molecules: [
      ['heparine-non-fractionnee', 'alternative', 'Thrombose (périopératoire)'],
      ['cloxacilline', 'premiere', 'Infection de fistule'],
      ['vancomycine', 'alternative', 'Infection à SARM'],
      ['lidocaine', 'premiere', 'Anesthésie locale'],
      ['acide-acetylsalicylique', 'adjuvant', 'Prévention de la thrombose (discutée)'],
    ],
    complications: [
      {
        nom: 'Thrombose de fistule',
        description: 'Sténose, hypotension.',
        traitement: '- Désobstruction urgente',
        clinique: '- Perte du thrill',
        paraclinique: '- Doppler',
      },
      {
        nom: 'Infection',
        fiche: 'sepsis-et-choc-septique',
        description: 'Ponctions.',
        traitement: '- Antibiotiques, chirurgie',
        clinique: '- Rougeur, pus, fièvre',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Ischémie de la main',
        description: 'Vol vasculaire.',
        traitement: '- Correction chirurgicale',
        clinique: '- Main froide, douleur',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance cardiaque à haut débit',
        fiche: 'insuffisance-cardiaque',
        description: 'Fistule à fort débit.',
        traitement: '- Réduction du débit',
        clinique: '- Dyspnée',
        paraclinique: '- Échocardiographie',
      },
    ],
    evolution:
      '## Pronostic\n- Abord le plus durable et le moins infectieux ; perméabilité de plusieurs années avec une bonne surveillance',
    urgences: [],
    symptomes: [
      ['Œdème d’un membre', 'occasionnel'],
      ['Membre froid et pâle', 'occasionnel'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: ['Sabiston Textbook of Surgery', "Harrison's Principles of Internal Medicine"],
    niveaux: {
      cs: ['- Préservation des veines, éducation', ''],
      hgr: ['- Création de fistule (chirurgien formé)', ''],
      tert: ['- Centre de dialyse, chirurgie vasculaire', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Fistule radio-céphalique',
        type: 'commune',
        description: 'Premier choix.',
        terrain: '- Insuffisance rénale terminale',
        fonctionnels: '',
        generaux: '',
        physiques: '- Thrill au poignet',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Fistule thrombosée',
        type: 'gravite',
        description: 'Urgence.',
        terrain: '- Dialysé',
        fonctionnels: '',
        generaux: '',
        physiques: '- Absence de thrill',
        paraclinique: '- Doppler : thrombose',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
