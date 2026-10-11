'use strict';

/**
 * Référentiels nouveaux demandés par les fiches ajoutées : spécialités, examens,
 * symptômes et molécules. Rien n'est modifié s'il existe déjà. Contenu rédigé par IA,
 * à valider par le Dr Mingalu.
 */

const specialites = [
  // --- Lot 12
  {
    departement: 'pediatrie',
    nom: 'Pneumologie pédiatrique',
    description:
      'Maladies respiratoires de l’enfant : bronchiolite, asthme, laryngites, corps étrangers, infections respiratoires.',
  },
  // --- Lot 13
  {
    departement: 'pediatrie',
    nom: 'Cardiologie pédiatrique',
    description:
      'Cardiopathies congénitales et acquises de l’enfant : insuffisance cardiaque, rhumatisme articulaire aigu, cardiomyopathies.',
  },
  // --- Lot 14
  {
    departement: 'pediatrie',
    nom: 'Hématologie et oncologie pédiatriques',
    description:
      'Drépanocytose de l’enfant, anémies, transfusion, cancers de l’enfant (lymphome de Burkitt, leucémies, néphroblastome, rétinoblastome).',
  },
  // --- Lot 15
  {
    departement: 'pediatrie',
    nom: 'Néphrologie pédiatrique',
    description:
      'Maladies rénales et urinaires de l’enfant : syndrome néphrotique, glomérulonéphrites, infections urinaires, insuffisance rénale.',
  },
  // --- Lot 17
  {
    departement: 'pediatrie',
    nom: 'ORL et ophtalmologie pédiatriques',
    description:
      'Affections oculaires et ORL de l’enfant : conjonctivites, trachome, xérophtalmie, otites, angines.',
  },
  // --- Lot 19
  {
    departement: 'pediatrie',
    nom: 'Dermatologie pédiatrique',
    description: 'Dermatoses de l’enfant : teignes, gale, impétigo, dermatites, éruptions infectieuses.',
  },
  // --- Lot 20
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Post-partum',
    description:
      'Suivi de la mère après l’accouchement et complications du post-partum : hémorragies secondaires, infections, pathologies du sein.',
  },
  // --- Lot 21
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Fertilité et reproduction',
    description: 'Infertilité du couple, troubles du cycle, assistance médicale à la procréation.',
  },
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Planification familiale',
    description: 'Contraception, conseil, espacement des naissances, contraception d’urgence.',
  },
  // --- Lot 22
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Urogynécologie',
    description: 'Fistules obstétricales, prolapsus génital, incontinence urinaire de la femme.',
  },
  // --- Lot 23
  {
    departement: 'chirurgie',
    nom: 'Chirurgie générale',
    description:
      'Infections des parties molles, plaies, morsures, petite chirurgie et chirurgie de base des hôpitaux de district.',
  },
  // --- Lot 25
  {
    departement: 'chirurgie',
    nom: 'Urologie',
    description:
      'Maladies de l’appareil urinaire et génital masculin : rétention, prostate, lithiase, urètre, testicule.',
  },
  // --- Lot 26
  {
    departement: 'chirurgie',
    nom: 'Chirurgie pédiatrique',
    description:
      'Urgences et malformations chirurgicales de l’enfant : invagination, sténose du pylore, hernies, appendicite, malformations congénitales.',
  },
  {
    departement: 'chirurgie',
    nom: 'Chirurgie thoracique',
    description:
      'Traumatismes du thorax, épanchements pleuraux chirurgicaux (hémothorax, empyème), drainage thoracique.',
  },
  // --- Lot 27
  {
    departement: 'chirurgie',
    nom: 'Brûlures et chirurgie plastique',
    description:
      'Prise en charge des brûlés (réanimation, pansements, greffes), séquelles et chirurgie reconstructrice (noma, cicatrices).',
  },
  {
    departement: 'chirurgie',
    nom: 'ORL et chirurgie cervico-faciale',
    description:
      'Urgences et maladies de l’oreille, du nez, de la gorge et du cou de l’adulte : épistaxis, corps étrangers, infections profondes.',
  },
  {
    departement: 'chirurgie',
    nom: 'Ophtalmologie',
    description:
      'Maladies et urgences de l’œil de l’adulte : œil rouge, trachome, cataracte, glaucome, traumatismes oculaires.',
  },
  // --- Lot 28
  {
    departement: 'chirurgie',
    nom: 'Stomatologie et chirurgie maxillo-faciale',
    description: 'Infections dentaires et de la bouche, traumatismes et tumeurs de la face et des mâchoires.',
  },
  {
    departement: 'chirurgie',
    nom: 'Anesthésie-réanimation',
    description:
      'Anesthésie, prise en charge des états de choc et des défaillances d’organes, soins périopératoires.',
  },
];

const examens = [
  {
    slug: 'pcr-ebola',
    nom: 'RT-PCR Ebola (dont GeneXpert Ebola)',
    type: 'biologie',
    description:
      'Détection de l’ARN viral sur sang total (cas vivant) ou écouvillon buccal (décès). Prélèvement en tenue de protection, triple emballage, laboratoire agréé.',
    valeurs_normales:
      '- Négatif\n- Un premier test négatif < 72 h après le début des signes n’exclut pas l’infection : refaire à 48 h\n- Sortie du CTE : 2 PCR sanguines négatives à 48 h d’intervalle',
  },
  {
    slug: 'pcr-mpox',
    nom: 'PCR mpox (orthopoxvirus / MPXV)',
    type: 'biologie',
    description:
      'Écouvillonnage du toit ou du liquide d’une lésion cutanée ou d’une croûte ; distingue les clades.',
    valeurs_normales: '- Négatif\n- Prélever 2 lésions différentes ; le sang est peu sensible',
  },
  {
    slug: 'tdr-peste',
    nom: 'Test rapide de la peste (antigène F1)',
    type: 'biologie',
    description: 'Bandelette sur ponction de bubon, crachat ou sang ; à confirmer par culture ou PCR.',
    valeurs_normales: '- Négatif',
  },
  {
    slug: 'depistage-tha',
    nom: 'Dépistage sérologique de la trypanosomiase (CATT, TDR)',
    type: 'biologie',
    description:
      'Détection d’anticorps contre T. b. gambiense ; tout test positif doit être confirmé par la recherche du parasite.',
    valeurs_normales: '- Négatif\n- Positif = suspect, pas un diagnostic',
  },
  {
    slug: 'parasitologie-tha',
    nom: 'Recherche de trypanosomes (suc ganglionnaire, sang, LCR)',
    type: 'biologie',
    description:
      'Examen direct du suc ganglionnaire, techniques de concentration sanguine (mAECT, centrifugation en tube capillaire) ; LCR pour la stadification.',
    valeurs_normales:
      '- Absence de trypanosomes\n- LCR : ≤ 5 leucocytes/µL et absence de trypanosomes = phase 1 ; au-delà = phase 2',
  },
  {
    slug: 'crag-cryptocoque',
    nom: 'Antigène cryptococcique (CrAg) — test rapide',
    type: 'biologie',
    description:
      'Test par bandelette (LFA) sur sérum, plasma ou LCR ; dépistage chez la PVVIH avec CD4 < 200/mm³.',
    valeurs_normales: '- Négatif\n- Positif dans le sang : rechercher une méningite (ponction lombaire)',
  },
  {
    slug: 'coproculture',
    nom: 'Coproculture',
    type: 'biologie',
    description:
      'Culture des selles à la recherche de Salmonella, Shigella, Campylobacter, Vibrio ; antibiogramme.',
    valeurs_normales: '- Absence de germe entéropathogène',
  },
  // --- Lot 2
  {
    slug: 'biopsie-cutanee-exsangue',
    nom: 'Biopsie cutanée exsangue (onchocercose)',
    type: 'biologie',
    description:
      'Prélèvement superficiel de peau (crêtes iliaques, omoplates) incubé en sérum physiologique : recherche de microfilaires d’O. volvulus.',
    valeurs_normales: '- Absence de microfilaires',
  },
  {
    slug: 'oeufs-schistosomes-urines',
    nom: 'Recherche d’œufs de schistosomes dans les urines',
    type: 'biologie',
    description:
      'Filtration ou sédimentation des urines recueillies entre 10 h et 14 h, après un effort ; œufs à éperon terminal de S. haematobium.',
    valeurs_normales: '- Absence d’œufs\n- ≥ 50 œufs/10 mL = infection de forte intensité',
  },
  {
    slug: 'examen-parasitologique-selles',
    nom: 'Examen parasitologique des selles (Kato-Katz, examen direct)',
    type: 'biologie',
    description:
      'Recherche d’œufs, de larves et de kystes de parasites intestinaux ; quantification par Kato-Katz.',
    valeurs_normales: '- Absence de parasites',
  },
  {
    slug: 'serologie-syphilis',
    nom: 'Sérologie de la syphilis (TDR tréponémique, RPR/VDRL, TPHA)',
    type: 'biologie',
    description:
      'Test tréponémique (TDR, TPHA) pour le dépistage ; test non tréponémique (RPR/VDRL) titré pour l’activité et le suivi.',
    valeurs_normales:
      '- Négatif\n- Un test tréponémique reste positif à vie après une syphilis traitée\n- Guérison : baisse du titre RPR d’au moins 4 fois (2 dilutions) en 6 à 12 mois',
  },
  {
    slug: 'frottis-lepre',
    nom: 'Frottis cutané (bacilloscopie de la lèpre)',
    type: 'biologie',
    description:
      'Scarification du lobe de l’oreille et des lésions, coloration de Ziehl-Neelsen : indice bacillaire.',
    valeurs_normales: '- Négatif\n- Un frottis négatif n’exclut pas une lèpre paucibacillaire',
  },
  {
    slug: 'pcr-buruli',
    nom: 'PCR IS2404 de l’ulcère de Buruli',
    type: 'biologie',
    description:
      'Écouvillonnage des bords décollés de l’ulcère ou ponction à l’aiguille fine d’une lésion fermée ; examen de Ziehl en complément.',
    valeurs_normales: '- Négatif',
  },
  {
    slug: 'serologie-fievre-jaune',
    nom: 'Fièvre jaune : IgM (ELISA) et RT-PCR',
    type: 'biologie',
    description:
      'RT-PCR dans les premiers jours ; IgM après J5 ; confirmation par un laboratoire de référence (INRB) et séroneutralisation.',
    valeurs_normales: '- Négatif\n- Interpréter selon le statut vaccinal (IgM possibles après vaccination)',
  },
  {
    slug: 'ponction-epanchement',
    nom: 'Ponction et analyse d’un épanchement (plèvre, péritoine, péricarde)',
    type: 'biologie',
    description: 'Aspect, protéines, cellularité, glucose, ADA si disponible, GeneXpert et culture.',
    valeurs_normales: '- Exsudat : protéines > 30 g/L\n- Tuberculose : exsudat lymphocytaire, ADA élevée',
  },
  {
    slug: 'cytoponction-ganglionnaire',
    nom: 'Cytoponction ou biopsie ganglionnaire',
    type: 'biologie',
    description:
      'Ponction à l’aiguille fine d’une adénopathie : cytologie, Ziehl, GeneXpert ; biopsie pour l’histologie.',
    valeurs_normales:
      '- Ganglion réactionnel\n- Tuberculose : granulome épithélioïde, nécrose caséeuse, BAAR',
  },
  // --- Lot 3
  {
    slug: 'test-covid',
    nom: 'Test COVID-19 (TDR antigénique, RT-PCR)',
    type: 'biologie',
    description:
      'Écouvillon nasopharyngé ou nasal : TDR antigénique (résultat en 15 min) ou RT-PCR (référence).',
    valeurs_normales: '- Négatif\n- TDR négatif avec forte suspicion : RT-PCR',
  },
  {
    slug: 'sensibilite-tb',
    nom: 'Tests de sensibilité de la tuberculose (LPA, culture, antibiogramme)',
    type: 'biologie',
    description:
      'Line probe assay (résistance à l’isoniazide, aux fluoroquinolones, aux injectables), culture et antibiogramme phénotypique, Xpert MTB/XDR.',
    valeurs_normales: '- Souche sensible à tous les antituberculeux testés',
  },
  {
    slug: 'biopsie-histologie',
    nom: 'Biopsie et examen anatomopathologique',
    type: 'biologie',
    description:
      'Prélèvement tissulaire (peau, ganglion, muqueuse, tumeur) pour l’histologie et l’immunohistochimie.',
    valeurs_normales: '- Tissu normal',
  },
  {
    slug: 'endoscopie-digestive-haute',
    nom: 'Endoscopie digestive haute (fibroscopie œso-gastro-duodénale)',
    type: 'exploration',
    description:
      'Visualise l’œsophage, l’estomac et le duodénum ; biopsies ; geste d’hémostase (ligature, sclérose, injection).',
    valeurs_normales: '- Muqueuse normale',
  },
  {
    slug: 'tsh',
    nom: 'TSH (thyréostimuline) et T4 libre',
    type: 'biologie',
    description: 'Exploration de la fonction thyroïdienne.',
    valeurs_normales: '- TSH : 0,4–4 mUI/L\n- T4 libre : 10–23 pmol/L',
  },
  // --- Lot 4
  {
    slug: 'd-dimeres',
    nom: 'D-dimères',
    type: 'biologie',
    description: 'Produits de dégradation de la fibrine : test d’exclusion de la maladie thrombo-embolique.',
    valeurs_normales:
      '- < 500 µg/L (seuil ajusté à l’âge après 50 ans : âge × 10)\n- Négatifs + probabilité faible ou intermédiaire = thrombose exclue',
  },
  {
    slug: 'echo-doppler-veineux',
    nom: 'Écho-Doppler veineux des membres inférieurs',
    type: 'imagerie',
    description: 'Recherche d’une thrombose veineuse profonde (incompressibilité de la veine).',
    valeurs_normales: '- Veines compressibles, flux normal',
  },
  {
    slug: 'angioscanner-thoracique',
    nom: 'Angioscanner thoracique',
    type: 'imagerie',
    description: 'Scanner avec injection de contraste iodé : embolie pulmonaire, dissection aortique.',
    valeurs_normales: '- Absence de défect endoluminal des artères pulmonaires',
  },
  {
    slug: 'aslo',
    nom: 'Antistreptolysines O (ASLO)',
    type: 'biologie',
    description: 'Témoin d’une infection streptococcique récente.',
    valeurs_normales: '- Adulte < 200 UI/mL ; enfant < 300 UI/mL (variable selon les laboratoires)',
  },
  // --- Lot 5
  {
    slug: 'test-helicobacter',
    nom: 'Recherche d’Helicobacter pylori (antigène fécal, test respiratoire, biopsie)',
    type: 'biologie',
    description:
      'Antigène dans les selles ou test respiratoire à l’urée marquée (non invasifs), ou biopsies gastriques lors de l’endoscopie (histologie, test à l’uréase, culture).',
    valeurs_normales: '- Négatif\n- Arrêter les IPP 2 semaines et les antibiotiques 4 semaines avant le test',
  },
  {
    slug: 'radiographie-osseuse',
    nom: 'Radiographie osseuse standard',
    type: 'imagerie',
    description:
      'Radiographie d’un segment osseux : fracture, ostéite, ostéolyse, corps étranger, gaz dans les tissus.',
    valeurs_normales: '- Corticale et trame osseuse normales',
  },
  {
    slug: 'echographie-thyroidienne',
    nom: 'Échographie thyroïdienne',
    type: 'imagerie',
    description:
      'Volume de la thyroïde, nodules (classification EU-TIRADS), compression, adénopathies cervicales.',
    valeurs_normales: '- Volume total < 18 mL (femme) et < 25 mL (homme), parenchyme homogène',
  },
  {
    slug: 'ips-cheville-bras',
    nom: 'Index de pression systolique cheville-bras (IPS)',
    type: 'exploration',
    description:
      'Rapport de la pression systolique à la cheville sur celle du bras (Doppler de poche) : artériopathie des membres inférieurs.',
    valeurs_normales:
      '- 0,9 à 1,3\n- < 0,9 : artériopathie ; > 1,3 : artères incompressibles (médiacalcose du diabétique)',
  },
  // --- Lot 6
  {
    slug: 'ferritine',
    nom: 'Ferritine et bilan martial (fer sérique, coefficient de saturation de la transferrine)',
    type: 'biologie',
    description:
      'Réserves en fer : la ferritine basse affirme la carence ; elle s’élève en cas d’inflammation (interpréter avec la CRP).',
    valeurs_normales:
      '- Ferritine : femme 15–150 µg/L, homme 30–300 µg/L\n- Carence : ferritine < 30 µg/L (< 100 µg/L si inflammation)\n- Coefficient de saturation de la transferrine 20–40 %',
  },
  {
    slug: 'serologie-amibienne',
    nom: 'Sérologie amibienne',
    type: 'biologie',
    description:
      'Anticorps anti-Entamoeba histolytica : positive dans plus de 90 % des abcès amibiens du foie.',
    valeurs_normales:
      '- Négative\n- Peut rester positive des années après la guérison ; négative les 7 premiers jours',
  },
  {
    slug: 'test-de-coombs-direct',
    nom: 'Test de Coombs direct (test direct à l’antiglobuline)',
    type: 'biologie',
    description:
      'Met en évidence des anticorps fixés sur les globules rouges : hémolyse immunologique, réaction transfusionnelle hémolytique.',
    valeurs_normales: '- Négatif',
  },
  // --- Lot 7
  {
    slug: 'ponction-articulaire',
    nom: 'Ponction articulaire (analyse du liquide synovial)',
    type: 'biologie',
    description:
      'Liquide synovial : aspect, cellularité, recherche de cristaux en lumière polarisée (urate, pyrophosphate), Gram et culture.',
    valeurs_normales:
      '- Liquide mécanique < 2 000 éléments/mm³\n- Inflammatoire > 2 000/mm³ ; septique souvent > 50 000/mm³\n- Cristaux d’urate : aiguilles biréfringentes (goutte)',
  },
  // --- Lot 8
  {
    slug: 'facteur-rhumatoide-anti-ccp',
    nom: 'Facteur rhumatoïde et anticorps anti-CCP',
    type: 'biologie',
    description:
      'Auto-anticorps de la polyarthrite rhumatoïde : les anti-CCP (anti-peptides citrullinés) sont très spécifiques ; le facteur rhumatoïde est moins spécifique (infections, hépatites, sujet âgé).',
    valeurs_normales: '- Facteur rhumatoïde < 14–20 UI/mL\n- Anti-CCP < 20 U/mL (selon la technique)',
  },
  {
    slug: 'examen-mycologique',
    nom: 'Examen mycologique (prélèvement de peau, ongles, cheveux)',
    type: 'biologie',
    description:
      'Examen direct au KOH (filaments, levures) et culture sur milieu de Sabouraud : dermatophyties, candidoses, pityriasis versicolor.',
    valeurs_normales: '- Absence d’éléments fongiques',
  },
  {
    slug: 'irm-rachidienne',
    nom: 'IRM du rachis',
    type: 'imagerie',
    description: 'Spondylodiscite, abcès épidural, compression médullaire, hernie discale, métastases.',
    valeurs_normales: '- Disques et vertèbres de signal normal, canal libre',
  },
  // --- Lot 9
  {
    slug: 'bilirubine-neonatale',
    nom: 'Bilirubinémie totale et conjuguée du nouveau-né',
    type: 'biologie',
    description:
      'Dosage sanguin (ou transcutané) de la bilirubine, interprété sur les courbes horaires (âge en heures, terme, facteurs de risque) pour décider de la photothérapie ou de l’exsanguino-transfusion.',
    valeurs_normales:
      '- Seuils selon l’âge en heures et le terme (courbes NICE/AAP)\n- Bilirubine conjuguée > 20 % de la totale ou > 17–25 µmol/L : cholestase (anormale)',
  },
  // --- Lot 10
  {
    slug: 'pcr-vih-nourrisson',
    nom: 'Diagnostic précoce du VIH chez le nourrisson (PCR ADN/ARN)',
    type: 'biologie',
    description:
      'Test virologique (PCR, y compris au point de service) indispensable avant 18 mois, car les anticorps maternels rendent les tests rapides ininterprétables : à la naissance, à 6 semaines, 9 mois et après l’arrêt de l’allaitement.',
    valeurs_normales:
      '- Non détecté\n- Un résultat positif doit être confirmé sur un second prélèvement, sans retarder les ARV',
  },
  // --- Lot 11
  {
    slug: 'prelevement-de-gorge',
    nom: 'Prélèvement de gorge (TDR streptocoque, culture, recherche de diphtérie)',
    type: 'biologie',
    description:
      'Écouvillonnage pharyngé : test rapide antigénique du streptocoque A, culture bactérienne, recherche de Corynebacterium diphtheriae (milieu spécifique, test de toxinogénèse).',
    valeurs_normales: '- TDR streptocoque négatif\n- Flore commensale',
  },
  {
    slug: 'serologie-rougeole',
    nom: 'IgM rougeole (sérum ou salive) et PCR',
    type: 'biologie',
    description:
      'Confirmation des cas suspects de rougeole pour la surveillance épidémiologique (prélèvement dans les 28 jours après l’éruption).',
    valeurs_normales: '- IgM négatives',
  },
  {
    slug: 'otoscopie',
    nom: 'Otoscopie',
    type: 'exploration',
    description:
      'Examen du conduit auditif et du tympan : otite moyenne (tympan bombé, rouge), perforation, otorrhée, corps étranger.',
    valeurs_normales: '- Tympan gris nacré, translucide, triangle lumineux visible',
  },
  // --- Lot 12
  {
    slug: 'idr-tuberculine',
    nom: 'Intradermoréaction à la tuberculine (IDR)',
    type: 'biologie',
    description:
      'Injection intradermique de tuberculine et lecture de l’induration à 48–72 h : argument d’infection tuberculeuse (latente ou active), surtout chez l’enfant.',
    valeurs_normales:
      '- Induration < 10 mm (< 5 mm chez l’enfant infecté par le VIH ou malnutri)\n- Une IDR négative n’élimine pas une tuberculose',
  },
  {
    slug: 'selles-poliovirus',
    nom: 'Recherche de poliovirus dans les selles',
    type: 'biologie',
    description:
      'Deux prélèvements de selles à 24 h d’intervalle dans les 14 jours suivant le début de la paralysie, acheminés sous chaîne du froid au laboratoire de référence (surveillance des PFA).',
    valeurs_normales: '- Absence de poliovirus sauvage ou dérivé d’une souche vaccinale',
  },
  // --- Lot 17
  {
    slug: 'hgpo-75g',
    nom: 'Hyperglycémie provoquée par voie orale (HGPO 75 g)',
    type: 'biologie',
    description:
      'Glycémie à jeun puis 1 h et 2 h après ingestion de 75 g de glucose : dépistage du diabète gestationnel entre 24 et 28 SA.',
    valeurs_normales:
      '- Diabète gestationnel (OMS 2013) si : à jeun ≥ 0,92 g/L, 1 h ≥ 1,80 g/L ou 2 h ≥ 1,53 g/L',
  },
  // --- Lot 18
  {
    slug: 'cardiotocographie',
    nom: 'Enregistrement du rythme cardiaque fœtal (cardiotocographie)',
    type: 'exploration',
    description:
      'Enregistrement continu du rythme cardiaque fœtal et des contractions : bien-être fœtal, souffrance fœtale ; à défaut, auscultation intermittente au stéthoscope de Pinard ou au Doppler.',
    valeurs_normales:
      '- Rythme de base 110–160/min, variabilité 5–25 battements, accélérations, absence de décélérations tardives',
  },
  {
    slug: 'test-rupture-membranes',
    nom: 'Test de rupture des membranes (spéculum, nitrazine, fougère, test immunologique)',
    type: 'biologie',
    description:
      'Confirmation d’une perte de liquide amniotique : examen au spéculum stérile, pH alcalin (nitrazine), cristallisation en feuille de fougère, tests immunologiques (IGFBP-1, PAMG-1).',
    valeurs_normales: '- Pas de liquide dans le vagin, pH vaginal acide (4,5)',
  },
  // --- Lot 20
  {
    slug: 'prelevement-vaginal',
    nom: 'Prélèvement vaginal (examen direct, pH, culture)',
    type: 'biologie',
    description:
      'Examen au microscope (levures, Trichomonas, cellules cibles de la vaginose), pH vaginal, test à la potasse, culture (gonocoque) et PCR des IST si disponibles.',
    valeurs_normales:
      '- pH 3,8–4,5, flore lactobacillaire, absence de levures, de Trichomonas et de cellules cibles',
  },
  // --- Lot 21
  {
    slug: 'spermogramme',
    nom: 'Spermogramme',
    type: 'biologie',
    description:
      'Analyse du sperme après 2 à 7 jours d’abstinence : volume, concentration, mobilité, morphologie, leucocytes.',
    valeurs_normales:
      '- Volume ≥ 1,4 mL, concentration ≥ 16 millions/mL, mobilité progressive ≥ 30 %, formes typiques ≥ 4 % (OMS 2021)',
  },
  {
    slug: 'hysterosalpingographie',
    nom: 'Hystérosalpingographie',
    type: 'imagerie',
    description:
      'Radiographie de la cavité utérine et des trompes après injection de produit de contraste : perméabilité tubaire, malformations, synéchies, fibromes sous-muqueux.',
    valeurs_normales: '- Cavité utérine régulière, trompes perméables avec passage péritonéal bilatéral',
  },
  {
    slug: 'depistage-col-iva-hpv',
    nom: 'Dépistage du cancer du col (IVA, test HPV)',
    type: 'exploration',
    description:
      'Inspection visuelle du col après application d’acide acétique (IVA) ou test ADN du papillomavirus (auto-prélèvement possible), frottis cervical selon disponibilité.',
    valeurs_normales: '- IVA négative (pas de zone acidophile blanche)\n- Test HPV négatif',
  },
  {
    slug: 'bilan-hormonal-feminin',
    nom: 'Bilan hormonal féminin (FSH, LH, œstradiol, prolactine, progestérone)',
    type: 'biologie',
    description:
      'Exploration de l’ovulation et de la réserve ovarienne : FSH, LH et œstradiol en début de cycle, progestérone à J21, prolactine, TSH, AMH si disponible.',
    valeurs_normales:
      '- FSH < 10 UI/L à J3\n- Progestérone J21 > 10 nmol/L (ovulation)\n- Prolactine < 25 µg/L',
  },
  // --- Lot 22
  {
    slug: 'mammographie-echographie-mammaire',
    nom: 'Mammographie et échographie mammaire',
    type: 'imagerie',
    description:
      'Imagerie du sein : mammographie (après 40 ans) et échographie (femme jeune, seins denses, masse palpable), classification BI-RADS ; guidage des biopsies.',
    valeurs_normales: '- BI-RADS 1 (normal) ou 2 (bénin)\n- BI-RADS 4–5 : biopsie',
  },
  // --- Lot 23
  {
    slug: 'echographie-parties-molles',
    nom: 'Échographie des parties molles',
    type: 'imagerie',
    description:
      'Recherche d’une collection (abcès, pyomyosite), d’un corps étranger, d’un épanchement articulaire ou d’une thrombose ; guidage des ponctions.',
    valeurs_normales: '- Pas de collection ni d’épaississement inflammatoire',
  },
  // --- Lot 24
  {
    slug: 'irm-osteo-articulaire',
    nom: 'IRM ostéo-articulaire',
    type: 'imagerie',
    description:
      'Ostéonécrose débutante, ostéomyélite, abcès des parties molles, lésions ligamentaires et méniscales.',
    valeurs_normales: '- Signal osseux et médullaire normal',
  },
  // --- Lot 25
  {
    slug: 'psa',
    nom: 'Antigène prostatique spécifique (PSA)',
    type: 'biologie',
    description:
      'Marqueur prostatique : élevé dans le cancer de la prostate, mais aussi l’hypertrophie bénigne, la prostatite et après une rétention ou un sondage.',
    valeurs_normales:
      '- PSA total < 4 ng/mL (seuils variables selon l’âge)\n- Doser à distance d’une infection ou d’un sondage',
  },
  // --- Lot 26
  {
    slug: 'echographie-doppler-scrotale',
    nom: 'Échographie-Doppler scrotale',
    type: 'imagerie',
    description:
      'Exploration des bourses : vascularisation testiculaire (torsion), orchi-épididymite, hydrocèle, tumeur, hernie.',
    valeurs_normales:
      '- Testicules homogènes, vascularisation symétrique au Doppler\n- Ne jamais retarder l’exploration chirurgicale d’une torsion suspectée pour cet examen',
  },
  {
    slug: 'urethrographie',
    nom: 'Urétrographie rétrograde et mictionnelle',
    type: 'imagerie',
    description:
      'Opacification de l’urètre : siège, longueur et nombre des rétrécissements, fausses routes, fistules.',
    valeurs_normales:
      '- Urètre de calibre régulier, sans sténose ni extravasation\n- Contre-indiquée en cas d’infection urinaire non traitée',
  },
  // --- Lot 27
  {
    slug: 'acuite-visuelle',
    nom: 'Mesure de l’acuité visuelle',
    type: 'exploration',
    description:
      'Mesure de la vision de chaque œil (échelle de Snellen ou des E, compte des doigts, perception lumineuse) : examen de base de toute plainte oculaire.',
    valeurs_normales:
      '- 10/10 (6/6) à chaque œil\n- Malvoyance < 3/10 (6/18) ; cécité < 1/20 (3/60) au meilleur œil corrigé',
  },
  {
    slug: 'tonometrie',
    nom: 'Tonométrie (pression intraoculaire)',
    type: 'exploration',
    description:
      'Mesure de la pression intraoculaire (tonomètre de Schiøtz, à aplanation ou à air) : dépistage et suivi du glaucome.',
    valeurs_normales: '- 10 à 21 mmHg\n- Crise de glaucome aigu par fermeture de l’angle : souvent > 40 mmHg',
  },
  {
    slug: 'scanner-cervico-facial',
    nom: 'Scanner cervico-facial',
    type: 'imagerie',
    description:
      'Tomodensitométrie injectée du cou et de la face : extension des cellulites et abcès profonds, corps étrangers, tumeurs.',
    valeurs_normales:
      '- Espaces profonds du cou libres, sans collection ni gaz\n- Ne retarde pas le drainage d’une collection évidente ni la protection des voies aériennes',
  },
  {
    slug: 'radiographie-dentaire-panoramique',
    nom: 'Radiographie dentaire panoramique',
    type: 'imagerie',
    description:
      'Cliché panoramique des deux arcades : foyers dentaires infectieux, kystes, ostéites et fractures des maxillaires.',
    valeurs_normales: '- Pas de granulome apical, de lyse osseuse ni de fracture',
  },
  // --- Lot 28
  {
    slug: 'echo-doppler-tsa',
    nom: 'Écho-Doppler des troncs supra-aortiques',
    type: 'imagerie',
    description:
      'Exploration des artères carotides et vertébrales : sténose athéromateuse, dissection, après un AVC ischémique ou un AIT.',
    valeurs_normales:
      '- Pas de sténose ni de plaque significative\n- Sténose carotidienne symptomatique ≥ 50–70 % : discuter une endartériectomie',
  },
];

const symptomes = [
  ['Éruption cutanée', 'Lésions cutanées (macules, papules, vésicules, pustules, croûtes).'],
  ['Adénopathies', 'Augmentation de volume d’un ou plusieurs ganglions lymphatiques.'],
  ['Diarrhée sanglante', 'Selles glairo-sanglantes (dysenterie).'],
  ['Hémorragies', 'Saignements extériorisés (gingivorragies, épistaxis, hématémèse, points de ponction).'],
  ['Trismus', 'Contracture des muscles masticateurs, impossibilité d’ouvrir la bouche.'],
  ['Contractures musculaires', 'Raideur et spasmes musculaires douloureux.'],
  ['Hydrophobie', 'Spasmes pharyngés à la vue ou à la déglutition de l’eau.'],
  ['Troubles du comportement', 'Agitation, apathie, changement de personnalité, comportement inadapté.'],
  ['Troubles du sommeil', 'Somnolence diurne, insomnie nocturne, inversion du rythme veille-sommeil.'],
  ['Hypotension', 'Pression artérielle systolique < 90 mmHg (adulte) ou baisse marquée.'],
  // --- Lot 2
  ['Prurit', 'Démangeaisons cutanées.'],
  ['Hématurie', 'Présence de sang dans les urines.'],
  ['Ulcération génitale', 'Plaie ou érosion des organes génitaux.'],
  ['Écoulement urétral', 'Écoulement purulent ou séreux par le méat urétral.'],
  ['Leucorrhées', 'Pertes vaginales anormales (couleur, odeur, abondance).'],
  ['Taches cutanées hypopigmentées', 'Macules plus claires que la peau saine.'],
  ['Ulcère cutané', 'Perte de substance cutanée chronique.'],
  ['Nodules sous-cutanés', 'Masses arrondies palpables sous la peau.'],
  ['Anesthésie cutanée', 'Perte de la sensibilité au toucher, à la douleur ou à la température.'],
  // --- Lot 3
  ['Dysphagie', 'Difficulté ou douleur à la déglutition.'],
  ['Lésions cutanées violacées', 'Macules, plaques ou nodules violacés de la peau ou des muqueuses.'],
  ['Perte de l’odorat et du goût', 'Anosmie et agueusie.'],
  ['Syncope', 'Perte de connaissance brève avec retour rapide à la normale.'],
  // --- Lot 4
  ['Arthralgies', 'Douleurs articulaires, avec ou sans gonflement.'],
  ['Œdème d’un membre', 'Gonflement unilatéral d’un membre.'],
  ['Mouvements involontaires', 'Mouvements anormaux (chorée, tremblements, dystonie).'],
  // --- Lot 5
  ['Hématémèse', 'Vomissement de sang rouge ou noirâtre (« marc de café »).'],
  ['Méléna', 'Selles noires, goudronneuses et fétides (sang digéré).'],
  ['Tuméfaction cervicale', 'Gonflement de la face antérieure du cou (goitre, nodule, adénopathie).'],
  ['Sueurs', 'Transpiration anormale, souvent profuse.'],
  ['Tremblements', 'Mouvements rythmiques involontaires des extrémités.'],
  ['Faiblesse musculaire', 'Diminution de la force musculaire, crampes, paralysie.'],
  // --- Lot 6
  ['Hépatomégalie', 'Augmentation de volume du foie, parfois douloureuse.'],
  ['Urines foncées', 'Urines couleur thé ou coca (hémolyse, ictère).'],
  ['Frissons', 'Tremblements avec sensation de froid, souvent au début d’une fièvre.'],
  // --- Lot 7
  ['Brûlures mictionnelles', 'Douleur ou brûlure en urinant, souvent avec envies fréquentes (pollakiurie).'],
  ['Douleur lombaire', 'Douleur de la région lombaire, uni- ou bilatérale.'],
  ['Expectoration', 'Crachats muqueux, purulents ou hémoptoïques.'],
  ['Gonflement articulaire', 'Augmentation de volume d’une articulation (épanchement, synovite).'],
  // --- Lot 8
  [
    'Raideur matinale',
    'Enraidissement articulaire au réveil, dont la durée oriente vers une cause inflammatoire (> 30 min).',
  ],
  ['Douleur rachidienne', 'Douleur du cou, du dos ou des lombes.'],
  ['Œdème du visage', 'Gonflement des paupières, des lèvres ou de la face.'],
  ['Bulles cutanées', 'Décollements cutanés remplis de liquide, avec ou sans érosions.'],
  ['Ptosis', 'Chute de la paupière supérieure.'],
  // --- Lot 9
  ['Geignement expiratoire', 'Bruit expiratoire du nouveau-né ou du nourrisson en détresse respiratoire.'],
  ['Hypotonie', 'Diminution du tonus musculaire (« bébé mou »).'],
  ['Cyanose', 'Coloration bleutée des lèvres, des extrémités ou de la peau.'],
  ['Myosis', 'Pupilles contractées, en « tête d’épingle ».'],
  ['Hypersalivation', 'Production excessive de salive, bronchorrhée.'],
  // --- Lot 10
  ['Rougeur ombilicale', 'Rougeur, œdème ou écoulement purulent autour de l’ombilic du nouveau-né.'],
  ['Fontanelle bombée', 'Fontanelle antérieure tendue et bombante chez le nourrisson.'],
  ['Cécité nocturne', 'Mauvaise vision dans la pénombre (héméralopie).'],
  ['Retard de croissance', 'Poids ou taille insuffisants pour l’âge, cassure de la courbe.'],
  ['Prurit anal', 'Démangeaisons de la région anale, surtout la nuit.'],
  // --- Lot 11
  ['Otalgie', 'Douleur d’oreille ; chez le nourrisson : pleurs, se tire l’oreille.'],
  ['Otorrhée', 'Écoulement de pus ou de liquide par l’oreille.'],
  ['Mal de gorge', 'Douleur pharyngée, gêne ou douleur à la déglutition.'],
  [
    'Toux quinteuse',
    'Accès de toux répétés, épuisants, suivis d’une reprise inspiratoire bruyante ou de vomissements.',
  ],
  ['Yeux rouges', 'Conjonctivite, larmoiement, rougeur oculaire.'],
  ['Lésions traumatiques', 'Ecchymoses, brûlures, fractures, plaies d’âges différents ou inexpliquées.'],
  // --- Lot 12
  ['Paralysie flasque', 'Faiblesse ou paralysie d’installation aiguë avec membre mou et réflexes diminués.'],
  ['Éruption vésiculeuse', 'Vésicules cutanées en « gouttes de rosée », d’âges différents.'],
  // --- Lot 13
  ['Stridor', 'Bruit inspiratoire aigu traduisant une obstruction des voies aériennes supérieures.'],
  ['Dysphonie', 'Voix rauque, éteinte ou modifiée.'],
  // --- Lot 14
  ['Masse abdominale', 'Tuméfaction palpable de l’abdomen (rate, foie, tumeur).'],
  ['Tuméfaction faciale', 'Gonflement de la mâchoire, de l’orbite ou du visage.'],
  // --- Lot 15
  ['Spasticité', 'Raideur musculaire augmentée à l’étirement, réflexes vifs.'],
  [
    'Retard de développement psychomoteur',
    'Acquisitions motrices, du langage ou sociales en retard pour l’âge.',
  ],
  // --- Lot 16
  [
    'Brûlure cutanée',
    'Lésion de la peau par la chaleur, un liquide chaud, l’électricité ou un produit chimique.',
  ],
  // --- Lot 17
  ['Sécrétions oculaires', 'Écoulement de l’œil (larmoiement, pus), paupières collées.'],
  ['Trichiasis', 'Cils retournés frottant contre la cornée.'],
  // --- Lot 18
  ['Contractions utérines', 'Durcissement rythmé et douloureux de l’utérus.'],
  ['Écoulement de liquide amniotique', 'Perte de liquide clair par le vagin pendant la grossesse.'],
  ['Douleur pelvienne', 'Douleur du bas-ventre, sus-pubienne ou des fosses iliaques.'],
  // --- Lot 20
  ['Douleur mammaire', 'Douleur, tension ou rougeur d’un sein.'],
  ['Lochies fétides', 'Écoulements vaginaux malodorants après l’accouchement.'],
  // --- Lot 21
  ['Masse pelvienne', 'Tuméfaction palpable du bas-ventre ou au toucher vaginal.'],
  ['Dyspareunie', 'Douleur pendant les rapports sexuels.'],
  ['Infertilité', 'Absence de grossesse après 12 mois de rapports réguliers sans contraception.'],
  // --- Lot 22
  ['Nodule du sein', 'Masse palpable dans le sein ou l’aisselle.'],
  ['Incontinence urinaire', 'Fuite involontaire d’urine, permanente ou à l’effort.'],
  ['Tuméfaction inguinale', 'Gonflement de l’aine ou des bourses (hernie, adénopathie).'],
  // --- Lot 23
  ['Douleur anale', 'Douleur de la région anale, permanente ou à la défécation.'],
  ['Tuméfaction des parties molles', 'Gonflement localisé de la peau, du tissu sous-cutané ou d’un muscle.'],
  // --- Lot 24
  ['Impotence fonctionnelle', 'Impossibilité ou difficulté à utiliser un membre (marcher, bouger le bras).'],
  ['Déformation d’un membre', 'Angulation, raccourcissement ou rotation anormale d’un membre.'],
  // --- Lot 25
  ['Rétention urinaire', 'Impossibilité d’uriner malgré une vessie pleine (globe vésical).'],
  ['Dysurie', 'Difficulté à uriner : jet faible, poussée, mictions en plusieurs temps.'],
  ['Troubles sphinctériens', 'Rétention ou incontinence urinaire ou fécale d’origine neurologique.'],
  // --- Lot 26
  ['Douleur scrotale', 'Douleur des bourses ou du testicule, brutale ou progressive.'],
  ['Érection prolongée', 'Érection persistante, souvent douloureuse, sans désir sexuel.'],
  ['Rectorragies', 'Émission de sang rouge ou de glaires sanglantes par l’anus.'],
  // --- Lot 27
  ['Épistaxis', 'Saignement provenant des fosses nasales.'],
  ['Douleur oculaire', 'Douleur de l’œil ou péri-orbitaire, superficielle ou profonde.'],
  ['Photophobie', 'Gêne ou douleur provoquée par la lumière.'],
  ['Obstruction nasale', 'Gêne au passage de l’air dans une ou deux fosses nasales.'],
  ['Odynophagie', 'Douleur à la déglutition.'],
  ['Haleine fétide', 'Odeur désagréable de l’haleine, souvent liée à une infection buccale ou nécrotique.'],
  // --- Lot 28
  ['Vertiges', 'Sensation erronée de mouvement ou de déséquilibre.'],
  ['Troubles sensitifs', 'Fourmillements, engourdissement ou perte de la sensibilité d’une partie du corps.'],
  [
    'Hochements de tête',
    'Chutes répétées et involontaires de la tête vers l’avant, souvent déclenchées par les repas ou le froid.',
  ],
];

const molecules = [
  {
    dci: 'Amphotéricine B',
    slug: 'amphotericine-b',
    classe: 'Antifongiques polyéniques',
    groupe: 'Antifongiques',
    mecanisme: 'Se lie à l’ergostérol de la membrane fongique et crée des pores : effet fongicide.',
    indications: 'Méningite à cryptocoque (induction), histoplasmose et autres mycoses systémiques graves.',
    posologie:
      'Liposomale : 10 mg/kg en dose unique IV (cryptococcose, OMS 2022). Désoxycholate : 1 mg/kg/j IV, avec hydratation et potassium.',
    effets_indesirables:
      'Néphrotoxicité, hypokaliémie, hypomagnésémie, anémie, fièvre et frissons à la perfusion (moindres avec la forme liposomale).',
    precautions:
      'Prévention de la toxicité : 1 L de sérum salé avant chaque perfusion, potassium et magnésium ; créatinine et kaliémie 2 à 3 fois par semaine.',
  },
  {
    dci: 'Flucytosine',
    slug: 'flucytosine',
    classe: 'Antifongiques antimétabolites',
    groupe: 'Antifongiques',
    mecanisme:
      'Transformée en 5-fluorouracile dans la levure : inhibe la synthèse de l’ADN et de l’ARN fongiques.',
    indications: 'Méningite à cryptocoque, toujours en association (amphotéricine B ou fluconazole).',
    posologie: '100 mg/kg/j per os en 4 prises pendant 14 jours (adapter à la fonction rénale).',
    effets_indesirables:
      'Myélotoxicité (anémie, neutropénie, thrombopénie), troubles digestifs, hépatotoxicité.',
    precautions: 'NFS et créatinine au moins une fois par semaine.',
  },
  {
    dci: 'Fexinidazole',
    slug: 'fexinidazole',
    classe: 'Trypanocides (nitroimidazolés)',
    groupe: 'Antiparasitaires',
    mecanisme:
      'Nitroimidazolé activé par une nitroréductase du parasite : métabolites toxiques pour T. b. gambiense.',
    indications:
      'Trypanosomiase humaine africaine à T. b. gambiense, phase 1 et phase 2 non sévère, à partir de 6 ans et 20 kg (selon le PNLTHA).',
    posologie:
      'Per os en une prise par jour après un repas pendant 10 jours (dose de charge J1–J4, puis dose d’entretien J5–J10), selon le poids.',
    effets_indesirables:
      'Nausées, vomissements, céphalées, insomnie, troubles neuropsychiatriques, allongement du QT.',
    precautions:
      'Prise au cours d’un repas solide (absorption) ; surveillance hospitalière ; à renouveler si vomissement.',
  },
  {
    dci: 'Pentamidine',
    slug: 'pentamidine',
    classe: 'Trypanocides (diamidines)',
    groupe: 'Antiparasitaires',
    mecanisme:
      'Diamidine aromatique interférant avec l’ADN kinétoplastique et la synthèse protéique du parasite.',
    indications:
      'Trypanosomiase à T. b. gambiense en phase 1 quand le fexinidazole ne peut pas être utilisé.',
    posologie: '4 mg/kg/j IM (ou perfusion IV lente) pendant 7 jours.',
    effets_indesirables: 'Hypoglycémie, hypotension, douleur et abcès au point d’injection, néphrotoxicité.',
    precautions: 'Patient allongé et ayant mangé ; glycémie et pression artérielle surveillées.',
  },
  {
    dci: 'Éflornithine',
    slug: 'eflornithine',
    classe: 'Trypanocides',
    groupe: 'Antiparasitaires',
    mecanisme: 'Inhibe l’ornithine décarboxylase du trypanosome (synthèse des polyamines).',
    indications: 'Trypanosomiase à T. b. gambiense en phase 2 sévère, en association au nifurtimox (NECT).',
    posologie: 'NECT : 400 mg/kg/j IV en 2 perfusions de 2 h pendant 7 jours.',
    effets_indesirables: 'Convulsions, myélosuppression, troubles digestifs, infections de cathéter.',
    precautions: 'Hospitalisation ; asepsie des perfusions.',
  },
  {
    dci: 'Nifurtimox',
    slug: 'nifurtimox',
    classe: 'Trypanocides (nitrofuranes)',
    groupe: 'Antiparasitaires',
    mecanisme: 'Production de radicaux libres toxiques pour le parasite.',
    indications:
      'Trypanosomiase à T. b. gambiense en phase 2 sévère, en association à l’éflornithine (NECT).',
    posologie: 'NECT : 15 mg/kg/j per os en 3 prises pendant 10 jours.',
    effets_indesirables:
      'Nausées, vomissements, anorexie, troubles neurologiques (tremblements, convulsions).',
    precautions: 'À prendre au cours des repas.',
  },
  {
    dci: 'Streptomycine',
    slug: 'streptomycine',
    classe: 'Aminosides',
    groupe: 'Antibiotiques',
    mecanisme: 'Inhibe la synthèse protéique bactérienne (sous-unité 30S) : bactéricide.',
    indications: 'Peste (référence), tularémie ; tuberculose dans des schémas particuliers.',
    posologie: 'Peste : 1 g IM toutes les 12 h (enfant 15 mg/kg toutes les 12 h) pendant 10 jours.',
    effets_indesirables: 'Ototoxicité (vestibulaire), néphrotoxicité.',
    contre_indications: 'Grossesse (ototoxicité fœtale) : préférer la gentamicine.',
    precautions: 'Adapter à la fonction rénale ; surveiller l’audition et l’équilibre.',
  },
  {
    dci: 'Vaccin antirabique',
    slug: 'vaccin-antirabique',
    classe: 'Vaccins',
    groupe: 'Vaccins',
    mecanisme: 'Virus rabique inactivé produit sur culture cellulaire : induit des anticorps neutralisants.',
    indications:
      'Prophylaxie après exposition (catégories II et III) ; prophylaxie avant exposition des sujets à risque.',
    posologie:
      'Après exposition (OMS) : voie intradermique 0,1 mL en 2 sites à J0, J3 et J7, ou voie IM 1 dose à J0, J3, J7 et entre J14 et J28.',
    effets_indesirables: 'Réactions locales, fièvre modérée.',
    contre_indications: 'Aucune après exposition (la rage est mortelle) : grossesse et nourrisson compris.',
  },
  {
    dci: 'Immunoglobulines antirabiques',
    slug: 'immunoglobulines-antirabiques',
    classe: 'Immunoglobulines',
    groupe: 'Vaccins',
    mecanisme: 'Anticorps neutralisant le virus au site de la morsure, avant la réponse au vaccin.',
    indications:
      'Exposition de catégorie III (morsure transdermique, léchage d’une muqueuse ou d’une plaie).',
    posologie:
      'Humaines : 20 UI/kg ; équines : 40 UI/kg. Infiltrer au maximum dans et autour des plaies, à J0 (jusqu’à J7 après la 1re dose de vaccin).',
    effets_indesirables: 'Réactions locales ; anaphylaxie rare avec les immunoglobulines équines.',
  },
  {
    dci: 'Atoltivimab-maftivimab-odesivimab',
    slug: 'atoltivimab-maftivimab-odesivimab',
    classe: 'Anticorps monoclonaux antiviraux',
    groupe: 'Antiviraux',
    mecanisme: 'Association de 3 anticorps dirigés contre la glycoprotéine du virus Ebola Zaïre.',
    indications:
      'Maladie à virus Ebola (orthoebolavirus zairense) confirmée, adulte et enfant, nouveau-né compris.',
    posologie: '50 mg/kg (de chaque anticorps) en une perfusion IV unique.',
    effets_indesirables: 'Fièvre, frissons, tachycardie, réactions à la perfusion.',
    precautions: 'Sans efficacité sur les virus Soudan et Bundibugyo.',
  },
  {
    dci: 'Ansuvimab',
    slug: 'ansuvimab',
    classe: 'Anticorps monoclonaux antiviraux',
    groupe: 'Antiviraux',
    mecanisme:
      'Anticorps monoclonal bloquant la liaison de la glycoprotéine du virus Ebola Zaïre à son récepteur.',
    indications: 'Maladie à virus Ebola (orthoebolavirus zairense) confirmée, adulte et enfant.',
    posologie: '50 mg/kg en une perfusion IV unique.',
    effets_indesirables: 'Fièvre, tachycardie, hypotension, réactions à la perfusion.',
    precautions: 'Sans efficacité sur les virus Soudan et Bundibugyo.',
  },
  // --- Lot 2
  {
    dci: 'Praziquantel',
    slug: 'praziquantel',
    classe: 'Anthelminthiques (pyrazinoisoquinoléines)',
    groupe: 'Antiparasitaires',
    mecanisme:
      'Augmente la perméabilité du tégument des schistosomes au calcium : paralysie et destruction des vers adultes.',
    indications: 'Schistosomiases (toutes espèces), téniasis, cysticercose (avec précaution).',
    posologie: 'Schistosomiase : 40 mg/kg en dose unique (60 mg/kg en 2 prises pour S. japonicum).',
    effets_indesirables:
      'Douleurs abdominales, nausées, céphalées, vertiges, urticaire (souvent liés à la mort des vers).',
    precautions: 'Utilisable chez la femme enceinte et l’enfant ≥ 2 ans (OMS) ; prise avec un repas.',
  },
  {
    dci: 'Dapsone',
    slug: 'dapsone',
    classe: 'Sulfones',
    groupe: 'Antibiotiques',
    mecanisme:
      'Inhibe la synthèse de l’acide folique bactérien (antagoniste du PABA) : bactériostatique sur M. leprae.',
    indications:
      'Lèpre (polychimiothérapie OMS), prophylaxie de la pneumocystose en alternative au cotrimoxazole.',
    posologie: 'Lèpre : 100 mg/j chez l’adulte (enfant 1–2 mg/kg/j) en association.',
    effets_indesirables:
      'Hémolyse (surtout déficit en G6PD), méthémoglobinémie, syndrome d’hypersensibilité (DRESS), agranulocytose.',
    precautions: 'Arrêt immédiat en cas d’éruption fébrile ; NFS si pâleur ou ictère.',
  },
  {
    dci: 'Acide folinique',
    slug: 'acide-folinique',
    classe: 'Antidotes et vitamines',
    groupe: 'Vitamines et minéraux',
    mecanisme:
      'Forme réduite de l’acide folique, utilisable malgré l’inhibition de la dihydrofolate réductase.',
    indications: 'Prévention de la toxicité hématologique de la pyriméthamine et du méthotrexate.',
    posologie: 'Avec la pyriméthamine : 10 à 25 mg/j per os.',
    effets_indesirables: 'Rares réactions allergiques.',
  },
  {
    dci: 'Vaccin contre la fièvre jaune (antiamaril)',
    slug: 'vaccin-antiamaril',
    classe: 'Vaccins',
    groupe: 'Vaccins',
    mecanisme: 'Virus vivant atténué (souche 17D) : immunité durable après une dose unique.',
    indications:
      'Programme élargi de vaccination (9 mois), campagnes de riposte et de rattrapage, voyageurs.',
    posologie: '0,5 mL en sous-cutané ou IM, dose unique (protection à vie selon l’OMS).',
    effets_indesirables: 'Fièvre, myalgies ; rares maladies viscérotropes ou neurotropes post-vaccinales.',
    contre_indications:
      'Nourrisson < 6 mois, immunodépression sévère (VIH avec CD4 bas), allergie à l’œuf ; grossesse sauf épidémie.',
  },
  // --- Lot 3
  {
    dci: 'Bédaquiline',
    slug: 'bedaquiline',
    classe: 'Antituberculeux (diarylquinoléines)',
    groupe: 'Antituberculeux et lèpre',
    mecanisme: 'Inhibe l’ATP synthase mycobactérienne : bactéricide.',
    indications: 'Tuberculose résistante à la rifampicine (schémas BPaLM et longs).',
    posologie:
      '400 mg/j pendant 2 semaines puis 200 mg 3 fois par semaine (ou 200 mg/j 8 semaines puis 100 mg/j selon le schéma).',
    effets_indesirables: 'Allongement du QT, nausées, arthralgies, hépatotoxicité.',
    precautions:
      'ECG avant et pendant le traitement, kaliémie ; éviter l’association à d’autres allongeurs du QT si possible.',
  },
  {
    dci: 'Moxifloxacine',
    slug: 'moxifloxacine',
    classe: 'Fluoroquinolones',
    groupe: 'Antibiotiques',
    mecanisme: 'Inhibe l’ADN gyrase et la topo-isomérase IV bactériennes.',
    indications: 'Tuberculose résistante à la rifampicine (BPaLM), pneumonies communautaires.',
    posologie: 'Adulte : 400 mg/j per os.',
    effets_indesirables: 'Allongement du QT, tendinopathies, troubles digestifs, dysglycémies.',
    precautions: 'ECG ; prudence chez l’enfant et la femme enceinte.',
  },
  {
    dci: 'Bléomycine',
    slug: 'bleomycine',
    classe: 'Antinéoplasiques (antibiotiques cytotoxiques)',
    groupe: 'Oncologie',
    mecanisme: 'Provoque des cassures de l’ADN.',
    indications: 'Sarcome de Kaposi (avec vincristine), lymphomes, tumeurs germinales.',
    posologie: 'Sarcome de Kaposi (schéma BV) : 15 UI/m² toutes les 2 à 3 semaines.',
    effets_indesirables: 'Fibrose pulmonaire (dose-dépendante), fièvre, réactions cutanées.',
    precautions: 'Dose cumulée limitée ; surveillance respiratoire. Manipulation par du personnel formé.',
  },
  {
    dci: 'Vincristine',
    slug: 'vincristine',
    classe: 'Antinéoplasiques (alcaloïdes de la pervenche)',
    groupe: 'Oncologie',
    mecanisme: 'Bloque la polymérisation des microtubules : arrêt de la mitose.',
    indications: 'Sarcome de Kaposi, lymphome de Burkitt, leucémies aiguës lymphoblastiques.',
    posologie: '1,4 mg/m² IV (maximum 2 mg) selon le protocole.',
    effets_indesirables: 'Neuropathie périphérique, constipation, nécrose en cas d’extravasation.',
    contre_indications: 'Voie intrathécale : mortelle.',
    precautions: 'Injection IV stricte ; manipulation par du personnel formé.',
  },
  {
    dci: 'Streptokinase',
    slug: 'streptokinase',
    classe: 'Thrombolytiques',
    groupe: 'Cardiovasculaire',
    mecanisme: 'Active le plasminogène en plasmine : dissolution du caillot.',
    indications: 'Infarctus avec sus-décalage du ST < 12 h si angioplastie impossible dans les délais.',
    posologie: '1,5 million UI en perfusion IV de 30 à 60 minutes.',
    effets_indesirables: 'Hémorragies, hypotension, réactions allergiques.',
    contre_indications:
      'Hémorragie active, AVC hémorragique ou AVC récent, chirurgie ou traumatisme récents, HTA sévère non contrôlée ; ne pas réutiliser après 5 jours (anticorps).',
  },
  {
    dci: 'Trinitrine (nitroglycérine)',
    slug: 'trinitrine',
    classe: 'Dérivés nitrés',
    groupe: 'Cardiovasculaire',
    mecanisme: 'Donneur de NO : vasodilatation veineuse et coronaire.',
    indications: 'Crise d’angor, syndrome coronarien aigu, œdème aigu du poumon.',
    posologie:
      '0,4 mg sublinguale, à renouveler toutes les 5 min (3 fois maximum) ; IV en continu selon la PA.',
    effets_indesirables: 'Céphalées, hypotension, tachycardie réflexe.',
    contre_indications:
      'PAS < 90 mmHg, infarctus du ventricule droit, prise d’inhibiteur de la phosphodiestérase-5 récente.',
  },
  {
    dci: 'Amiodarone',
    slug: 'amiodarone',
    classe: 'Antiarythmiques (classe III)',
    groupe: 'Cardiovasculaire',
    mecanisme: 'Allonge la repolarisation (blocage potassique) ; effets bêtabloquant et inhibiteur calcique.',
    indications:
      'Fibrillation atriale (contrôle du rythme ou de la fréquence en cas d’insuffisance cardiaque), arythmies ventriculaires.',
    posologie: 'Charge : 5 mg/kg IV en 1 h ou 600 à 800 mg/j per os 8 à 10 jours ; entretien 200 mg/j.',
    effets_indesirables:
      'Dysthyroïdies, toxicité pulmonaire et hépatique, photosensibilité, bradycardie, allongement du QT.',
    precautions:
      'TSH, bilan hépatique et ECG ; interaction avec la warfarine (augmente l’INR) et la digoxine.',
  },
  {
    dci: 'Digoxine',
    slug: 'digoxine',
    classe: 'Digitaliques',
    groupe: 'Cardiovasculaire',
    mecanisme:
      'Inhibe la Na/K-ATPase : effet inotrope positif et ralentissement de la conduction auriculo-ventriculaire.',
    indications: 'Contrôle de la fréquence de la fibrillation atriale, surtout avec insuffisance cardiaque.',
    posologie: '0,125 à 0,25 mg/j (réduire chez le sujet âgé et l’insuffisant rénal).',
    effets_indesirables:
      'Intoxication digitalique : troubles digestifs, troubles visuels, arythmies (favorisées par l’hypokaliémie).',
    precautions: 'Kaliémie, créatinine ; marge thérapeutique étroite.',
  },
  {
    dci: 'Warfarine',
    slug: 'warfarine',
    classe: 'Antivitamines K',
    groupe: 'Cardiovasculaire',
    mecanisme: 'Inhibe la synthèse hépatique des facteurs de coagulation vitamine K-dépendants.',
    indications:
      'Fibrillation atriale avec valvulopathie rhumatismale (rétrécissement mitral) ou prothèse mécanique, thromboses veineuses.',
    posologie: 'Adaptée à l’INR (cible 2 à 3 ; 2,5 à 3,5 pour les prothèses mitrales).',
    effets_indesirables: 'Hémorragies.',
    contre_indications: 'Grossesse (1er trimestre et fin de grossesse), hémorragie active.',
    precautions:
      'INR régulier ; nombreuses interactions (antibiotiques, amiodarone, antifongiques) ; antidote : vitamine K.',
  },
  {
    dci: 'Bromocriptine',
    slug: 'bromocriptine',
    classe: 'Agonistes dopaminergiques',
    groupe: 'Hormones et corticoïdes',
    mecanisme: 'Inhibe la sécrétion de prolactine (dont le fragment 16 kDa cardiotoxique).',
    indications:
      'Cardiomyopathie du péripartum (traitement adjuvant), inhibition de la lactation, hyperprolactinémie.',
    posologie:
      'Cardiomyopathie du péripartum : 2,5 mg/j pendant 1 semaine (forme non compliquée) ou 2,5 mg 2 fois par jour 2 semaines puis 2,5 mg/j 6 semaines (forme sévère).',
    effets_indesirables: 'Nausées, hypotension, céphalées ; risque thrombotique.',
    precautions: 'Toujours associer une anticoagulation préventive.',
  },
  // --- Lot 4
  {
    dci: 'Vancomycine',
    slug: 'vancomycine',
    classe: 'Glycopeptides',
    groupe: 'Antibiotiques',
    mecanisme: 'Inhibe la synthèse de la paroi des bactéries à Gram positif.',
    indications:
      'Infections graves à staphylocoque résistant à la méticilline (SARM), endocardites sur prothèse, allergie aux bêtalactamines.',
    posologie: '15 à 20 mg/kg IV toutes les 8 à 12 h, à adapter aux taux résiduels et à la fonction rénale.',
    effets_indesirables: 'Néphrotoxicité, ototoxicité, « red man syndrome » si perfusion trop rapide.',
    precautions: 'Perfusion lente (≥ 60 min) ; créatinine et taux résiduels.',
  },
  {
    dci: 'Colchicine',
    slug: 'colchicine',
    classe: 'Anti-inflammatoires (alcaloïdes)',
    groupe: 'Antalgiques et anti-inflammatoires',
    mecanisme: 'Inhibe la polymérisation des microtubules des polynucléaires : effet anti-inflammatoire.',
    indications:
      'Péricardite aiguë (avec aspirine ou AINS), crise de goutte, fièvre méditerranéenne familiale.',
    posologie: 'Péricardite : 0,5 mg/j (< 70 kg) ou 0,5 mg 2 fois par jour (≥ 70 kg) pendant 3 mois.',
    effets_indesirables: 'Diarrhée, nausées ; toxicité grave en surdosage (myélotoxicité).',
    contre_indications: 'Insuffisance rénale sévère ; association aux macrolides (clarithromycine).',
  },
  {
    dci: 'Bicarbonate de sodium',
    slug: 'bicarbonate-de-sodium',
    classe: 'Solutés alcalinisants',
    groupe: 'Solutés et électrolytes',
    mecanisme: 'Apport de bicarbonate : tamponne l’acidose.',
    indications:
      'Acidose métabolique sévère (pH < 6,9 dans l’acidocétose), hyperkaliémie menaçante, certaines intoxications.',
    posologie: 'Selon l’indication : 1 à 2 mmol/kg IV (bicarbonate 4,2 % ou 8,4 %), à répéter selon le pH.',
    effets_indesirables: 'Hypokaliémie, surcharge sodée, alcalose, nécrose en cas d’extravasation.',
    precautions: 'Pas d’usage systématique dans l’acidocétose ; contrôler la kaliémie.',
  },
  // --- Lot 5
  {
    dci: 'Propranolol',
    slug: 'propranolol',
    classe: 'Bêtabloquants non cardiosélectifs',
    groupe: 'Cardiovasculaire',
    mecanisme:
      'Bloque les récepteurs bêta-1 et bêta-2 : baisse du débit cardiaque et du débit splanchnique (pression portale).',
    indications:
      'Prévention de l’hémorragie par varices œsophagiennes (cirrhose), signes adrénergiques de l’hyperthyroïdie, migraine, tremblement essentiel.',
    posologie:
      'Hypertension portale : 20 à 40 mg 2 fois par jour, à augmenter jusqu’à baisse de la fréquence cardiaque de 25 % (FC ≥ 55/min). Hyperthyroïdie : 20 à 40 mg 3 à 4 fois par jour.',
    effets_indesirables:
      'Bradycardie, hypotension, asthénie, bronchospasme, masquage des signes d’hypoglycémie.',
    contre_indications:
      'Asthme, bloc auriculo-ventriculaire, bradycardie, choc, ascite réfractaire avec hypotension.',
  },
  {
    dci: 'Octréotide',
    slug: 'octreotide',
    classe: 'Analogues de la somatostatine',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme:
      'Vasoconstriction splanchnique : baisse de la pression portale ; inhibe plusieurs sécrétions digestives et hormonales.',
    indications:
      'Hémorragie digestive par hypertension portale (avec la ligature), tumeurs neuroendocrines, acromégalie.',
    posologie: 'Hémorragie variqueuse : bolus 50 µg IV puis 25 à 50 µg/h pendant 2 à 5 jours.',
    effets_indesirables:
      'Troubles digestifs, hyperglycémie ou hypoglycémie, bradycardie, lithiase biliaire au long cours.',
  },
  {
    dci: 'Terlipressine',
    slug: 'terlipressine',
    classe: 'Analogues de la vasopressine',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme: 'Vasoconstriction splanchnique prolongée : baisse de la pression portale.',
    indications: 'Hémorragie par rupture de varices œsophagiennes, syndrome hépatorénal.',
    posologie:
      'Hémorragie variqueuse : 2 mg IV toutes les 4 h pendant 24 à 48 h, puis 1 mg toutes les 4 h jusqu’à 2 à 5 jours.',
    effets_indesirables: 'Ischémie (coronaire, digestive, des extrémités), hyponatrémie, bradycardie, HTA.',
    contre_indications: 'Coronaropathie, artériopathie sévère ; prudence après 70 ans.',
  },
  {
    dci: 'Albumine humaine',
    slug: 'albumine-humaine',
    classe: 'Dérivés du sang (solutés colloïdes)',
    groupe: 'Solutés et électrolytes',
    mecanisme: 'Expansion volémique par pouvoir oncotique.',
    indications:
      'Ponction d’ascite de grand volume (> 5 L), infection du liquide d’ascite, syndrome hépatorénal (avec terlipressine).',
    posologie: 'Après ponction : 6 à 8 g par litre d’ascite retiré (albumine 20 %).',
    effets_indesirables: 'Surcharge volémique, réactions allergiques (rares).',
    precautions: 'Produit dérivé du sang : traçabilité.',
  },
  {
    dci: 'Glucagon',
    slug: 'glucagon',
    classe: 'Hormones hyperglycémiantes',
    groupe: 'Antidiabétiques',
    mecanisme: 'Stimule la glycogénolyse hépatique.',
    indications:
      'Hypoglycémie sévère sans voie veineuse disponible (patient sous insuline), intoxication aux bêtabloquants.',
    posologie:
      'Hypoglycémie : 1 mg IM ou SC (0,5 mg si < 25 kg), à relayer par du sucre per os dès le réveil.',
    effets_indesirables: 'Nausées, vomissements.',
    precautions:
      'Inefficace si les réserves de glycogène sont épuisées (jeûne, alcool, malnutrition). Conservation au froid.',
  },
  {
    dci: 'Polystyrène sulfonate de sodium',
    slug: 'polystyrene-sulfonate-de-sodium',
    classe: 'Résines échangeuses d’ions',
    groupe: 'Solutés et électrolytes',
    mecanisme: 'Échange le potassium contre du sodium dans l’intestin : élimination fécale du potassium.',
    indications: 'Hyperkaliémie (traitement d’épuration, action lente).',
    posologie: '15 g 1 à 4 fois par jour per os, ou 30 g en lavement.',
    effets_indesirables: 'Constipation, surcharge sodée, hypokaliémie ; nécrose intestinale (rare).',
    precautions:
      'Action en plusieurs heures : ne remplace pas le gluconate de calcium ni l’insuline-glucose en urgence.',
  },
  {
    dci: 'Chlorure de sodium hypertonique 3 %',
    slug: 'chlorure-de-sodium-hypertonique',
    classe: 'Solutés salés hypertoniques',
    groupe: 'Solutés et électrolytes',
    mecanisme: 'Apport de sodium concentré : hausse rapide de la natrémie et de l’osmolalité.',
    indications: 'Hyponatrémie sévère symptomatique (convulsions, coma), hypertension intracrânienne.',
    posologie:
      'Hyponatrémie sévère : 150 mL (ou 2 mL/kg) en 20 min, à répéter 2 fois selon la natrémie ; objectif + 5 mmol/L, sans dépasser + 10 mmol/L en 24 h.',
    effets_indesirables: 'Myélinolyse centropontine si correction trop rapide, surcharge, veinite.',
    precautions:
      'Natrémie toutes les 2 à 4 h ; à défaut de NaCl 3 %, il se prépare à partir de NaCl 0,9 % et d’ampoules de NaCl 10 % ou 20 %.',
  },
  // --- Lot 6
  {
    dci: 'Paromomycine',
    slug: 'paromomycine',
    classe: 'Aminosides (amœbicides de contact)',
    groupe: 'Antiparasitaires',
    mecanisme: 'Aminoside peu absorbé : détruit les formes kystiques et luminales d’Entamoeba histolytica.',
    indications:
      'Amœbicide de contact après le traitement tissulaire (métronidazole ou tinidazole) de l’amibiase intestinale ou hépatique ; porteurs de kystes.',
    posologie: '25 à 35 mg/kg/j en 3 prises pendant 7 jours per os.',
    effets_indesirables: 'Troubles digestifs (diarrhée, nausées).',
    precautions:
      'Peu d’absorption ; prudence en cas de lésions intestinales étendues ou d’insuffisance rénale.',
  },
  // --- Lot 7
  {
    dci: 'Tiotropium',
    slug: 'tiotropium',
    classe: 'Anticholinergiques inhalés de longue durée d’action',
    groupe: 'Pneumologie',
    mecanisme: 'Bloque les récepteurs muscariniques bronchiques : bronchodilatation prolongée (24 h).',
    indications: 'Traitement de fond de la BPCO ; asthme sévère en association.',
    posologie: '18 µg/j (poudre) ou 5 µg/j (2 bouffées de 2,5 µg, solution pour inhalation).',
    effets_indesirables: 'Sécheresse buccale, rétention urinaire, constipation, glaucome aigu (rare).',
    precautions: 'Glaucome à angle fermé, adénome de la prostate.',
  },
  {
    dci: 'Époétine alfa',
    slug: 'epoetine-alfa',
    classe: 'Agents stimulant l’érythropoïèse',
    groupe: 'Hématologie',
    mecanisme: 'Érythropoïétine recombinante : stimule la production des globules rouges.',
    indications:
      'Anémie de la maladie rénale chronique (Hb < 10 g/dL), après correction de la carence en fer.',
    posologie:
      '50 à 100 UI/kg 1 à 3 fois par semaine SC ou IV ; objectif Hb 10 à 11,5 g/dL (pas au-delà de 13).',
    effets_indesirables: 'HTA, thromboses, céphalées, érythroblastopénie (rare).',
    precautions:
      'Corriger la carence martiale (ferritine > 100–200 µg/L) ; contrôler la PA ; conservation au froid.',
  },
  {
    dci: 'Fosfomycine trométamol',
    slug: 'fosfomycine',
    classe: 'Antibiotiques (dérivés de l’acide phosphonique)',
    groupe: 'Antibiotiques',
    mecanisme: 'Inhibe la première étape de la synthèse de la paroi bactérienne.',
    indications: 'Cystite aiguë simple de la femme (dose unique), bactériurie de la femme enceinte.',
    posologie: '3 g per os en dose unique, à distance des repas.',
    effets_indesirables: 'Diarrhée, nausées.',
    precautions: 'Ne convient pas à la pyélonéphrite.',
  },
  {
    dci: 'Oxygène médical',
    slug: 'oxygene',
    classe: 'Gaz médicaux',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Augmente la fraction inspirée en oxygène : corrige l’hypoxémie.',
    indications:
      'Hypoxémie (SpO2 < 90–94 %), détresse respiratoire, choc, intoxication au monoxyde de carbone.',
    posologie:
      'Débit adapté à la SpO2 : objectif 94–98 % ; 88–92 % en cas de BPCO hypercapnique (lunettes 1–2 L/min ou masque Venturi).',
    effets_indesirables: 'Hypercapnie chez le BPCO en cas d’excès, sécheresse des muqueuses.',
    precautions: 'Risque d’incendie (pas de flamme ni de corps gras) ; concentrateur ou bouteilles.',
  },
  // --- Lot 8
  {
    dci: 'Sulfasalazine',
    slug: 'sulfasalazine',
    classe: 'Antirhumatismaux modificateurs de la maladie',
    groupe: 'Immunologie et rhumatologie',
    mecanisme:
      'Association de sulfapyridine et d’acide 5-aminosalicylique : effet anti-inflammatoire et immunomodulateur.',
    indications:
      'Polyarthrite rhumatoïde (seule ou en association au méthotrexate), spondyloarthrites, rectocolite hémorragique.',
    posologie: '500 mg/j, augmenté par paliers hebdomadaires jusqu’à 2 à 3 g/j en 2 prises.',
    effets_indesirables:
      'Troubles digestifs, éruptions, leucopénie, agranulocytose, hépatite, oligospermie réversible.',
    contre_indications: 'Allergie aux sulfamides, déficit en G6PD (prudence).',
    precautions: 'NFS et bilan hépatique réguliers les 3 premiers mois.',
  },
  {
    dci: 'Sérum antivenimeux polyvalent',
    slug: 'serum-antivenimeux',
    classe: 'Immunoglobulines antivenimeuses (fragments F(ab’)2 équins)',
    groupe: 'Vaccins',
    mecanisme:
      'Anticorps neutralisant les toxines des venins de serpents d’Afrique subsaharienne (vipéridés et élapidés selon le produit).',
    indications:
      'Envenimation systémique : syndrome hémorragique ou test de coagulation sur tube sec anormal, signes neurologiques, œdème extensif, choc.',
    posologie:
      'Selon le produit : en général 2 ampoules (20 mL) IV lente dans du NaCl 0,9 % ; à renouveler selon l’évolution (test de coagulation à 6 h, signes neurologiques).',
    effets_indesirables: 'Réactions anaphylactiques précoces, maladie sérique tardive.',
    precautions:
      'Adrénaline prête avant l’injection ; utiliser un sérum adapté aux espèces d’Afrique centrale ; conservation selon le fabricant.',
  },
  {
    dci: 'Néostigmine',
    slug: 'neostigmine',
    classe: 'Anticholinestérasiques',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Inhibe l’acétylcholinestérase : augmente l’acétylcholine à la jonction neuromusculaire.',
    indications:
      'Envenimation neurotoxique par élapidés (cobras, mambas) en complément du sérum ; décurarisation ; myasthénie.',
    posologie:
      'Envenimation : 0,5 à 2 mg IV, précédée d’atropine 0,5 à 1 mg, à répéter selon la réponse (test à la néostigmine).',
    effets_indesirables: 'Bradycardie, hypersalivation, bronchospasme, crampes abdominales.',
    precautions: 'Toujours associer l’atropine ; surveillance cardiaque et respiratoire.',
  },
  // --- Lot 9
  {
    dci: 'Charbon activé',
    slug: 'charbon-active',
    classe: 'Adsorbants digestifs',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Adsorbe les toxiques dans la lumière digestive et limite leur absorption.',
    indications:
      'Intoxication orale récente (< 1 à 2 h) par un toxique adsorbable (paracétamol, carbamazépine, phénobarbital, théophylline, quinine, antipaludiques).',
    posologie:
      'Adulte : 50 g per os ou par sonde ; enfant : 1 g/kg (maximum 50 g) ; doses répétées pour certains toxiques.',
    effets_indesirables: 'Vomissements, constipation ; pneumopathie d’inhalation.',
    contre_indications:
      'Troubles de conscience sans protection des voies aériennes, caustiques, hydrocarbures (pétrole), alcools, fer, lithium (inefficace).',
  },
  {
    dci: 'Pralidoxime',
    slug: 'pralidoxime',
    classe: 'Réactivateurs des cholinestérases',
    groupe: 'Anesthésie et réanimation',
    mecanisme:
      'Réactive l’acétylcholinestérase inhibée par les organophosphorés (avant son « vieillissement »).',
    indications: 'Intoxication par insecticides organophosphorés, en complément de l’atropine.',
    posologie:
      'Adulte : 30 mg/kg IV en 30 min puis 8 à 10 mg/kg/h en perfusion continue (selon disponibilité et protocole).',
    effets_indesirables: 'Vertiges, troubles visuels, tachycardie, HTA si injection rapide.',
    precautions: 'Bénéfice discuté ; l’atropine reste le traitement essentiel.',
  },
  // --- Lot 11
  {
    dci: 'Vaccin contre la rougeole et la rubéole (RR)',
    slug: 'vaccin-rougeole-rubeole',
    classe: 'Vaccins viraux vivants atténués',
    groupe: 'Vaccins',
    mecanisme: 'Induit une immunité protectrice contre la rougeole et la rubéole.',
    indications: 'Vaccination de routine (PEV) à 9 mois et 15–18 mois ; riposte aux épidémies (dès 6 mois).',
    posologie: '0,5 mL en sous-cutané ; 2 doses.',
    effets_indesirables: 'Fièvre et éruption modérées 7 à 12 jours après ; convulsions fébriles rares.',
    contre_indications: 'Immunodépression sévère, grossesse.',
    precautions: 'Chaîne du froid ; vaccin reconstitué à utiliser dans les 6 heures.',
  },
  {
    dci: 'Vaccin pentavalent (DTC-HepB-Hib)',
    slug: 'vaccin-pentavalent',
    classe: 'Vaccins combinés',
    groupe: 'Vaccins',
    mecanisme:
      'Anatoxines diphtérique et tétanique, coqueluche à germes entiers, antigène HBs, polyoside conjugué Hib.',
    indications: 'Primovaccination du nourrisson (PEV) : 6, 10 et 14 semaines.',
    posologie:
      '0,5 mL en intramusculaire (face antérolatérale de la cuisse), 3 doses ; rappel selon le calendrier.',
    effets_indesirables:
      'Fièvre, douleur et gonflement au point d’injection, pleurs prolongés ; rarement convulsions, épisode hypotonique-hyporéactif.',
    contre_indications:
      'Réaction anaphylactique à une dose précédente ; encéphalopathie dans les 7 jours suivant une dose.',
  },
  {
    dci: 'Antitoxine diphtérique',
    slug: 'antitoxine-diphterique',
    classe: 'Sérums hétérologues (immunoglobulines équines)',
    groupe: 'Vaccins',
    mecanisme: 'Neutralise la toxine diphtérique circulante (pas celle déjà fixée).',
    indications: 'Diphtérie respiratoire suspectée ou confirmée, le plus tôt possible.',
    posologie:
      '20 000 à 100 000 UI IV selon la gravité et l’ancienneté : 20 000–40 000 UI (forme pharyngée < 48 h), 40 000–60 000 UI (atteinte rhinopharyngée), 80 000–100 000 UI (forme étendue, œdème du cou, > 3 jours).',
    effets_indesirables: 'Anaphylaxie, maladie sérique.',
    precautions:
      'Adrénaline prête ; disponibilité limitée (stocks OMS) ; ne pas retarder en attendant la confirmation.',
  },
  // --- Lot 12
  {
    dci: 'Vaccin BCG',
    slug: 'vaccin-bcg',
    classe: 'Vaccins bactériens vivants atténués',
    groupe: 'Vaccins',
    mecanisme:
      'Bacille de Calmette-Guérin : protège contre les formes graves de la tuberculose de l’enfant (méningite, miliaire).',
    indications: 'Vaccination à la naissance (PEV).',
    posologie: '0,05 mL en intradermique strict (bras gauche) chez le nourrisson.',
    effets_indesirables:
      'Nodule puis ulcération et cicatrice (normal) ; adénite ; BCGite disséminée chez l’immunodéprimé.',
    contre_indications: 'Infection à VIH symptomatique ou immunodépression connue.',
  },
  {
    dci: 'Vaccins antipoliomyélitiques (VPOb, VPI)',
    slug: 'vaccin-polio',
    classe: 'Vaccins viraux',
    groupe: 'Vaccins',
    mecanisme:
      'VPO bivalent oral (souches atténuées 1 et 3) et VPI injectable (inactivé) : immunité contre les poliovirus.',
    indications:
      'Vaccination de routine (VPO à la naissance, 6, 10, 14 semaines ; VPI à 14 semaines et 9 mois selon le calendrier) et campagnes de riposte.',
    posologie:
      'VPO : 2 gouttes par voie orale ; VPI : 0,5 mL IM ou 0,1 mL en intradermique (dose fractionnée).',
    effets_indesirables:
      'Très rarement, paralysie associée au vaccin oral ; poliovirus dérivés d’une souche vaccinale si couverture faible.',
  },
  // --- Lot 14
  {
    dci: 'Cyclophosphamide',
    slug: 'cyclophosphamide',
    classe: 'Antinéoplasiques (agents alkylants)',
    groupe: 'Oncologie',
    mecanisme: 'Alkylation de l’ADN : arrêt de la division cellulaire.',
    indications:
      'Lymphome de Burkitt (protocole à base de cyclophosphamide), autres lymphomes, leucémies, certaines maladies auto-immunes.',
    posologie:
      'Lymphome de Burkitt (protocole africain) : 40 mg/kg IV à J1, J8, J15 (± J29), selon le protocole du centre.',
    effets_indesirables: 'Neutropénie, nausées, alopécie, cystite hémorragique, stérilité.',
    precautions:
      'Hydratation abondante (prévention de la cystite et du syndrome de lyse), NFS ; manipulation par du personnel formé.',
  },
  {
    dci: 'Aliment de supplémentation prêt à l’emploi (ASPE)',
    slug: 'aspe',
    classe: 'Aliments thérapeutiques',
    groupe: 'Vitamines et minéraux',
    mecanisme: 'Pâte enrichie en énergie, protéines et micronutriments pour la récupération nutritionnelle.',
    indications:
      'Malnutrition aiguë modérée de l’enfant de 6 à 59 mois (programme de supplémentation nutritionnelle).',
    posologie:
      '1 sachet de 92 g (environ 500 kcal) par jour, en plus de l’alimentation familiale et de l’allaitement, jusqu’à guérison.',
    effets_indesirables: 'Rares (diarrhée transitoire).',
    contre_indications: 'Allergie à l’arachide.',
  },
  // --- Lot 15
  {
    dci: 'Baclofène',
    slug: 'baclofene',
    classe: 'Myorelaxants d’action centrale',
    groupe: 'Neuropsychiatrie',
    mecanisme: 'Agoniste GABA-B médullaire : diminue la spasticité.',
    indications: 'Spasticité d’origine centrale (paralysie cérébrale, lésions médullaires).',
    posologie:
      'Enfant : débuter à 0,3 mg/kg/j en 3 prises, augmenter progressivement (maximum 1–2 mg/kg/j selon l’âge) ; adulte 5 mg 3 fois par jour, maximum 60–80 mg/j.',
    effets_indesirables:
      'Somnolence, hypotonie, nausées ; syndrome de sevrage (convulsions) en cas d’arrêt brutal.',
    precautions: 'Épilepsie (abaisse le seuil), insuffisance rénale ; arrêt progressif.',
  },
  // --- Lot 16
  {
    dci: 'Sulfadiazine argentique',
    slug: 'sulfadiazine-argentique',
    classe: 'Anti-infectieux topiques',
    groupe: 'Dermatologie',
    mecanisme: 'Sel d’argent et sulfamide à action antibactérienne locale large.',
    indications: 'Prévention et traitement de l’infection des brûlures du 2e degré profond et du 3e degré.',
    posologie:
      'Crème à 1 % en couche de 3 à 5 mm sur la brûlure nettoyée, 1 à 2 fois par jour, sous pansement.',
    effets_indesirables: 'Leucopénie transitoire, réactions cutanées, argyrie (usage prolongé).',
    contre_indications:
      'Nouveau-né de moins de 2 mois, grossesse à terme, allergie aux sulfamides, déficit en G6PD (prudence).',
  },
  // --- Lot 18
  {
    dci: 'Immunoglobulines anti-D',
    slug: 'immunoglobulines-anti-d',
    classe: 'Immunoglobulines spécifiques',
    groupe: 'Gynécologie-obstétrique',
    mecanisme:
      'Anticorps anti-D éliminant les hématies fœtales RhD+ passées dans la circulation d’une mère RhD− : prévention de l’allo-immunisation.',
    indications:
      'Femme RhD− non immunisée : après accouchement d’un enfant RhD+, avortement, grossesse extra-utérine, saignement, traumatisme abdominal, gestes invasifs ; prévention à 28 SA selon les pays.',
    posologie:
      '200 à 300 µg IM ou IV dans les 72 heures suivant l’événement (adapter si hémorragie fœto-maternelle importante).',
    effets_indesirables: 'Douleur au point d’injection, réactions allergiques rares.',
    precautions: 'Disponibilité limitée ; vérifier le groupe et la RAI.',
  },
  // --- Lot 21
  {
    dci: 'Lévonorgestrel (contraception régulière)',
    slug: 'levonorgestrel',
    classe: 'Progestatifs',
    groupe: 'Gynécologie-obstétrique',
    mecanisme: 'Progestatif : inhibition de l’ovulation, épaississement de la glaire cervicale.',
    indications:
      'Contraception : pilule combinée (avec éthinylestradiol), micropilule, implant (Jadelle), DIU hormonal.',
    posologie: 'Pilule combinée : 1 comprimé par jour selon le schéma ; implant : 2 bâtonnets pour 5 ans.',
    effets_indesirables:
      'Saignements irréguliers, céphalées, mastodynies ; thromboses avec la pilule combinée.',
    contre_indications:
      'Pilule combinée : thrombose, HTA non contrôlée, migraine avec aura, tabac après 35 ans, post-partum < 6 semaines chez la femme qui allaite.',
  },
  {
    dci: 'Étonogestrel (implant)',
    slug: 'etonogestrel',
    classe: 'Progestatifs',
    groupe: 'Gynécologie-obstétrique',
    mecanisme: 'Progestatif libéré en continu : inhibition de l’ovulation.',
    indications:
      'Contraception de longue durée (implant sous-cutané, 3 ans), y compris dans le post-partum et pendant l’allaitement.',
    posologie: '1 implant de 68 mg sous la peau du bras, à remplacer tous les 3 ans.',
    effets_indesirables: 'Saignements irréguliers, aménorrhée, acné, céphalées.',
    precautions:
      'Efficacité réduite par les inducteurs enzymatiques (rifampicine, certains antiépileptiques, éfavirenz).',
  },
  {
    dci: 'Ulipristal acétate',
    slug: 'ulipristal',
    classe: 'Modulateurs sélectifs des récepteurs de la progestérone',
    groupe: 'Gynécologie-obstétrique',
    mecanisme: 'Retarde ou inhibe l’ovulation.',
    indications: 'Contraception d’urgence jusqu’à 120 heures (5 jours) après un rapport non protégé.',
    posologie: '30 mg per os en dose unique.',
    effets_indesirables: 'Céphalées, nausées, douleurs abdominales, modification des règles suivantes.',
    precautions: 'Reprendre la contraception hormonale 5 jours après ; préservatif en attendant.',
  },
  {
    dci: 'Cisplatine',
    slug: 'cisplatine',
    classe: 'Antinéoplasiques (sels de platine)',
    groupe: 'Oncologie',
    mecanisme: 'Formation de liaisons croisées dans l’ADN : apoptose des cellules tumorales.',
    indications:
      'Cancer du col de l’utérus (radio-chimiothérapie concomitante), cancers de l’ovaire, ORL, poumon, testicule.',
    posologie: 'Col utérin : 40 mg/m² par semaine pendant la radiothérapie (selon le protocole).',
    effets_indesirables:
      'Néphrotoxicité, ototoxicité, nausées et vomissements sévères, neuropathie, myélosuppression.',
    precautions:
      'Hyperhydratation, surveillance de la créatinine et du magnésium ; manipulation par du personnel formé.',
  },
  // --- Lot 22
  {
    dci: 'Tamoxifène',
    slug: 'tamoxifene',
    classe: 'Antiestrogènes (modulateurs sélectifs des récepteurs aux œstrogènes)',
    groupe: 'Oncologie',
    mecanisme: 'Bloque les récepteurs aux œstrogènes du tissu mammaire.',
    indications:
      'Cancer du sein avec récepteurs hormonaux positifs (traitement adjuvant ou métastatique), surtout chez la femme non ménopausée.',
    posologie: '20 mg par jour pendant 5 à 10 ans.',
    effets_indesirables:
      'Bouffées de chaleur, thromboses veineuses, cancer de l’endomètre (saignements à explorer), troubles visuels.',
    contre_indications: 'Grossesse, antécédent de thrombose (prudence).',
  },
  {
    dci: 'Doxorubicine',
    slug: 'doxorubicine',
    classe: 'Antinéoplasiques (anthracyclines)',
    groupe: 'Oncologie',
    mecanisme: 'Intercalation dans l’ADN et inhibition de la topo-isomérase II.',
    indications: 'Cancer du sein (protocoles AC, FAC), lymphomes, sarcomes, néphroblastome.',
    posologie:
      'Cancer du sein (AC) : 60 mg/m² IV toutes les 3 semaines, 4 cycles (avec cyclophosphamide 600 mg/m²).',
    effets_indesirables:
      'Cardiotoxicité (dose cumulée), neutropénie, alopécie, mucite, nécrose en cas d’extravasation.',
    precautions:
      'Évaluation cardiaque (échocardiographie), dose cumulée limitée ; manipulation par du personnel formé.',
  },
  // --- Lot 25
  {
    dci: 'Goséréline',
    slug: 'goserelin',
    classe: 'Analogues de la GnRH (agonistes)',
    groupe: 'Oncologie',
    mecanisme: 'Stimulation continue de l’hypophyse : effondrement de la testostérone (castration chimique).',
    indications:
      'Cancer de la prostate localement avancé ou métastatique ; cancer du sein hormonosensible de la femme non ménopausée.',
    posologie: 'Implant sous-cutané 3,6 mg tous les 28 jours ou 10,8 mg tous les 3 mois.',
    effets_indesirables:
      'Bouffées de chaleur, baisse de la libido, ostéoporose ; poussée initiale (« flare ») de la maladie.',
    precautions:
      'Associer un antiandrogène (bicalutamide) les premières semaines en cas de métastases (prévention de la poussée initiale).',
  },
  // --- Lot 27
  {
    dci: 'Acétazolamide',
    slug: 'acetazolamide',
    classe: 'Inhibiteurs de l’anhydrase carbonique',
    groupe: 'Ophtalmologie',
    mecanisme:
      'Inhibition de l’anhydrase carbonique du corps ciliaire : baisse de la sécrétion d’humeur aqueuse et de la pression intraoculaire.',
    indications:
      'Glaucome aigu par fermeture de l’angle, hypertonie oculaire en attente de traitement chirurgical ou laser ; mal aigu des montagnes.',
    posologie: 'Adulte : 500 mg IV ou per os en dose de charge, puis 250 mg toutes les 6 à 8 heures.',
    effets_indesirables:
      'Paresthésies, hypokaliémie, acidose métabolique, lithiase rénale, troubles digestifs.',
    precautions:
      'Contre-indiqué en cas d’allergie aux sulfamides, d’insuffisance rénale ou hépatique sévère ; surveiller la kaliémie ; traitement de courte durée.',
  },
  // --- Lot 28
  {
    dci: 'Nimodipine',
    slug: 'nimodipine',
    classe: 'Inhibiteurs calciques (dihydropyridines)',
    groupe: 'Neurologie',
    mecanisme:
      'Blocage des canaux calciques à tropisme cérébral : prévention du vasospasme et de l’ischémie cérébrale retardée.',
    indications: 'Hémorragie méningée par rupture d’anévrisme : prévention du déficit ischémique retardé.',
    posologie:
      'Adulte : 60 mg per os toutes les 4 heures pendant 21 jours, à débuter dans les 4 jours suivant l’hémorragie.',
    effets_indesirables: 'Hypotension artérielle, céphalées, bouffées de chaleur, troubles digestifs.',
    precautions:
      'Surveiller la tension (fractionner en 30 mg toutes les 2 heures si hypotension) ; interactions avec les inducteurs enzymatiques (carbamazépine, phénobarbital, rifampicine).',
  },
];

module.exports = { specialites, examens, symptomes, molecules };
