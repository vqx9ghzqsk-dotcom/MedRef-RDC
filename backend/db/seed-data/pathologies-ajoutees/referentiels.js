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
  // --- Lot 29
  {
    departement: 'neuropsychiatrie',
    nom: 'Neuro-infectiologie',
    description:
      'Infections du système nerveux de l’adulte : neuropaludisme, méningites tuberculeuse et opportunistes, trypanosomiase en phase neurologique, encéphalites.',
  },
  // --- Lot 31
  {
    departement: 'neuropsychiatrie',
    nom: 'Psychiatrie de l’enfant et de l’adolescent',
    description:
      'Troubles du neurodéveloppement (autisme, TDAH, déficience intellectuelle), troubles émotionnels et du comportement, enfants exposés aux conflits.',
  },
  {
    departement: 'neuropsychiatrie',
    nom: 'Addictologie',
    description:
      'Usage de l’alcool et des drogues : dépendance, sevrage, complications neurologiques et intoxications (méthanol, alcool frelaté).',
  },
  {
    departement: 'neuropsychiatrie',
    nom: 'Démences et neurogériatrie',
    description: 'Troubles cognitifs du sujet âgé, démences, syndrome confusionnel aigu.',
  },
  // --- Lot 32
  {
    departement: 'neuropsychiatrie',
    nom: 'Psychotraumatologie',
    description:
      'Conséquences psychologiques des violences et des catastrophes : violences sexuelles, conflits armés, tortures, déplacements ; soutien psychosocial et soins spécialisés.',
  },
  // --- Lot 48
  {
    departement: 'pediatrie',
    nom: 'Génétique et maladies héréditaires',
    description:
      'Anomalies chromosomiques (trisomie 21, syndrome de Turner), maladies métaboliques héréditaires, albinisme ; conseil génétique et accompagnement des familles.',
  },
  {
    departement: 'pediatrie',
    nom: 'Santé de l’adolescent',
    description:
      'Problèmes de santé propres aux 10–19 ans : grossesse précoce, IST, usage de substances, santé menstruelle, acné, santé mentale ; services adaptés aux adolescents et confidentialité.',
  },
  // --- Lot 49
  {
    departement: 'pediatrie',
    nom: 'Immunologie et rhumatologie pédiatriques',
    description:
      'Arthrites et maladies inflammatoires de l’enfant (arthrite juvénile idiopathique, lupus, vascularites), déficits immunitaires primitifs.',
  },
  // --- Lot 54
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Médecine materno-fœtale',
    description:
      'Échographie obstétricale, dépistage et diagnostic prénatal des malformations et des infections fœtales, surveillance du bien-être fœtal, pathologies fœtales (anasarque, retard de croissance).',
  },
  // --- Lot 58
  {
    departement: 'gynecologie-obstetrique',
    nom: 'Sénologie',
    description:
      'Pathologie mammaire : tumeurs bénignes, écoulements mamelonnaires, mastodynies, infections du sein, dépistage et orientation des cancers du sein.',
  },
  // --- Lot 64
  {
    departement: 'chirurgie',
    nom: 'Chirurgie vasculaire',
    description:
      'Pathologies des artères et des veines : varices, anévrismes, plaies vasculaires, ischémies, abords vasculaires pour hémodialyse.',
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
  // --- Lot 29
  {
    slug: 'electromyogramme',
    nom: 'Électroneuromyogramme (ENMG)',
    type: 'exploration',
    description:
      'Étude de la conduction nerveuse et de l’activité musculaire : neuropathies périphériques (axonale ou démyélinisante), Guillain-Barré, atteintes de la jonction neuromusculaire.',
    valeurs_normales:
      '- Vitesses de conduction et amplitudes normales\n- Guillain-Barré : ralentissement, blocs de conduction, ondes F allongées (souvent normales la 1re semaine)',
  },
  // --- Lot 30
  {
    slug: 'lithemie',
    nom: 'Lithémie',
    type: 'biologie',
    description:
      'Dosage du lithium sanguin, 12 heures après la dernière prise : adaptation de la posologie et dépistage du surdosage.',
    valeurs_normales:
      '- Zone thérapeutique : 0,6 à 1,0 mmol/L (entretien)\n- Toxicité : > 1,2–1,5 mmol/L (tremblements, diarrhée, confusion) ; > 2 mmol/L : intoxication grave',
  },
  {
    slug: 'cpk',
    nom: 'Créatine phosphokinase (CPK)',
    type: 'biologie',
    description:
      'Enzyme musculaire : rhabdomyolyse (traumatismes, électrisation, syndrome malin des neuroleptiques, effort, intoxications), myosites.',
    valeurs_normales:
      '- < 200 UI/L (selon le laboratoire)\n- Rhabdomyolyse : > 5 fois la normale ; risque d’insuffisance rénale > 5 000 UI/L',
  },
  // --- Lot 31
  {
    slug: 'evaluation-cognitive',
    nom: 'Évaluation cognitive (MMSE, MoCA, CSI-D)',
    type: 'exploration',
    description:
      'Tests standardisés de dépistage des troubles cognitifs : orientation, mémoire, attention, langage, fonctions exécutives ; outils adaptés aux personnes peu scolarisées (CSI-D, RUDAS).',
    valeurs_normales:
      '- MMSE ≥ 24/30 et MoCA ≥ 26/30 (à interpréter selon l’âge et le niveau d’études)\n- Un score bas impose un bilan des causes curables',
  },
  {
    slug: 'audiometrie',
    nom: 'Audiométrie',
    type: 'exploration',
    description:
      'Mesure de l’audition (tonale, vocale ; potentiels évoqués auditifs chez le jeune enfant) : retard de langage, suspicion d’autisme, surdité.',
    valeurs_normales:
      '- Seuils auditifs ≤ 20 dB à toutes les fréquences\n- Toute suspicion d’autisme ou retard de langage impose de vérifier l’audition',
  },
  // --- Lot 32
  {
    slug: 't4-libre',
    nom: 'T4 libre (thyroxine libre)',
    type: 'biologie',
    description:
      'Hormone thyroïdienne libre : à interpréter avec la TSH pour confirmer une hyperthyroïdie (T4L élevée) ou une hypothyroïdie (T4L basse).',
    valeurs_normales:
      '- Environ 10 à 23 pmol/L (selon le laboratoire)\n- TSH basse + T4L élevée : hyperthyroïdie ; TSH élevée + T4L basse : hypothyroïdie',
  },
  {
    slug: 'cortisolemie',
    nom: 'Cortisolémie',
    type: 'biologie',
    description:
      'Dosage du cortisol sanguin (idéalement à 8 h) : dépistage de l’insuffisance surrénalienne ; test au Synacthène si disponible.',
    valeurs_normales:
      '- Cortisol de 8 h : environ 140 à 690 nmol/L\n- < 100 nmol/L : insuffisance surrénalienne très probable ; ne pas retarder l’hydrocortisone en urgence pour ce dosage',
  },
  // --- Lot 33
  {
    slug: 'lipasemie',
    nom: 'Lipasémie',
    type: 'biologie',
    description:
      'Dosage de la lipase sérique : diagnostic de la pancréatite aiguë (plus spécifique que l’amylase).',
    valeurs_normales:
      '- < 60 UI/L environ (selon le laboratoire)\n- Pancréatite aiguë : > 3 fois la limite supérieure ; le taux n’est pas corrélé à la gravité',
  },
  {
    slug: 'coloscopie',
    nom: 'Coloscopie',
    type: 'exploration',
    description:
      'Exploration endoscopique du côlon et du rectum avec biopsies : rectorragies, anémie ferriprive inexpliquée, suspicion de cancer colorectal, polypes.',
    valeurs_normales:
      '- Muqueuse normale, absence de polype, de tumeur ou d’ulcération\n- Préparation colique indispensable ; rectosigmoïdoscopie si la coloscopie est indisponible',
  },
  {
    slug: 'arn-vhc',
    nom: 'ARN du virus de l’hépatite C (charge virale VHC)',
    type: 'biologie',
    description:
      'Recherche de l’ARN du VHC par PCR : confirme une infection active après une sérologie positive et vérifie la guérison 12 semaines après le traitement.',
    valeurs_normales:
      '- Indétectable : pas d’infection active (guérison spontanée ou après traitement)\n- Détectable : hépatite C active à traiter ; l’antigène core du VHC est une alternative',
  },
  {
    slug: 'test-g6pd',
    nom: 'Dosage ou test rapide du G6PD',
    type: 'biologie',
    description:
      'Mesure de l’activité de la glucose-6-phosphate déshydrogénase (test qualitatif, quantitatif ou test rapide) : déficit avant primaquine ou tafénoquine, ictère néonatal, hémolyse aiguë.',
    valeurs_normales:
      '- Activité normale (≥ 70 % de la médiane, ou ≥ 6 UI/g Hb selon le test)\n- Faussement normal juste après une hémolyse (réticulocytes riches en enzyme) : contrôler à distance',
  },
  {
    slug: 'vitamine-b12-folates',
    nom: 'Vitamine B12 et folates sériques',
    type: 'biologie',
    description:
      'Dosage de la vitamine B12 (cobalamine) et des folates : anémie macrocytaire, neuropathie, troubles cognitifs, malnutrition.',
    valeurs_normales:
      '- Vitamine B12 > 200 pg/mL (150 pmol/L) environ\n- Folates sériques > 4 ng/mL environ (selon le laboratoire)',
  },
  // --- Lot 34
  {
    slug: 'myelogramme',
    nom: 'Myélogramme (ponction de moelle osseuse)',
    type: 'exploration',
    description:
      'Ponction sternale ou iliaque avec étude cytologique de la moelle : leucémies aiguës, myélome, aplasie, envahissement médullaire, cytopénies inexpliquées.',
    valeurs_normales:
      '- Moelle riche, lignées représentées, blastes < 5 %, plasmocytes < 5 %\n- Leucémie aiguë : blastes ≥ 20 % ; myélome : plasmocytes ≥ 10 %',
  },
  {
    slug: 'electrophorese-proteines',
    nom: 'Électrophorèse des protéines sériques',
    type: 'biologie',
    description:
      'Séparation des protéines du sérum : pic monoclonal (myélome, gammapathies), hypergammaglobuline polyclonale (VIH, infections chroniques), hypoalbuminémie.',
    valeurs_normales:
      '- Albumine 35–50 g/L, gammaglobulines 7–16 g/L, sans pic monoclonal\n- Compléter par l’immunofixation et la recherche de protéinurie de Bence-Jones si pic',
  },
  {
    slug: 'dosage-facteurs-coagulation',
    nom: 'Dosage des facteurs de la coagulation (VIII, IX)',
    type: 'biologie',
    description:
      'Mesure de l’activité des facteurs VIII et IX devant un TCA allongé isolé ou des saignements : diagnostic et sévérité de l’hémophilie A ou B, recherche d’inhibiteur.',
    valeurs_normales: '- Activité normale 50–150 %\n- Hémophilie sévère < 1 %, modérée 1–5 %, mineure 5–40 %',
  },
  {
    slug: 'recherche-microfilaires',
    nom: 'Recherche de microfilaires sanguines',
    type: 'biologie',
    description:
      'Frottis ou goutte épaisse (± concentration) : Wuchereria bancrofti (prélèvement nocturne, 22 h – 2 h), Loa loa (prélèvement diurne, 10 h – 15 h) avec quantification ; tests antigéniques rapides pour la filariose lymphatique.',
    valeurs_normales:
      '- Absence de microfilaires\n- Loa loa : > 8 000 mf/mL = risque d’encéphalopathie sous ivermectine ou DEC ; > 30 000 mf/mL = risque majeur',
  },
  // --- Lot 35
  {
    slug: 'serologie-leptospirose',
    nom: 'Diagnostic biologique de la leptospirose (PCR, sérologie)',
    type: 'biologie',
    description:
      'PCR sur sang ou urines en début de maladie (1re semaine) ; sérologie ELISA IgM ou test de micro-agglutination (MAT) à partir du 6e–8e jour, avec séroconversion sur deux prélèvements.',
    valeurs_normales:
      '- PCR négative, IgM absentes\n- Une sérologie négative précoce n’élimine pas le diagnostic : traiter sur la clinique',
  },
  {
    slug: 'test-grippe',
    nom: 'Test de la grippe (TDR antigénique, PCR)',
    type: 'biologie',
    description:
      'Recherche des virus grippaux A et B sur prélèvement nasopharyngé : test rapide antigénique (sensibilité moyenne) ou PCR (référence), utile en surveillance et pour les formes graves.',
    valeurs_normales: '- Négatif\n- Un TDR négatif n’exclut pas la grippe en période épidémique',
  },
  {
    slug: 'scanner-thoracique',
    nom: 'Scanner thoracique',
    type: 'imagerie',
    description:
      'Tomodensitométrie du thorax (avec injection selon l’indication) : nodules et masses, cancer bronchique et son extension, dilatation des bronches, abcès, pneumopathies interstitielles.',
    valeurs_normales:
      '- Parenchyme, bronches, médiastin et plèvre normaux\n- Pour l’embolie pulmonaire : angioscanner thoracique',
  },
  {
    slug: 'fibroscopie-bronchique',
    nom: 'Fibroscopie bronchique',
    type: 'exploration',
    description:
      'Endoscopie des bronches avec biopsies, aspiration et lavage broncho-alvéolaire : cancer bronchique, hémoptysie, corps étranger, infections (tuberculose, pneumocystose).',
    valeurs_normales:
      '- Arbre bronchique normal, sans bourgeon, sténose ni saignement\n- Prélèvements : histologie, bactériologie, recherche de BK',
  },
  {
    slug: 'complement-c3-c4',
    nom: 'Complément sérique (C3, C4)',
    type: 'biologie',
    description:
      'Dosage des fractions C3 et C4 du complément : orientation étiologique des glomérulonéphrites (post-infectieuse, lupus, cryoglobulinémie).',
    valeurs_normales:
      '- C3 0,9–1,8 g/L ; C4 0,1–0,4 g/L\n- C3 bas transitoire (< 8 semaines) dans la glomérulonéphrite post-infectieuse',
  },
  // --- Lot 36
  {
    slug: 'anticorps-antinucleaires',
    nom: 'Anticorps antinucléaires (et anti-ADN natif)',
    type: 'biologie',
    description:
      'Dépistage des maladies auto-immunes (lupus, connectivites) par immunofluorescence ; anticorps anti-ADN natif et anti-Sm spécifiques du lupus.',
    valeurs_normales:
      '- Négatifs ou titre < 1/80\n- Un titre faible isolé est fréquent et non spécifique (infections, âge) ; ne pas diagnostiquer un lupus sur ce seul résultat',
  },
  {
    slug: 'densitometrie-osseuse',
    nom: 'Ostéodensitométrie (DXA)',
    type: 'imagerie',
    description:
      'Mesure de la densité minérale osseuse au rachis lombaire et à la hanche : diagnostic de l’ostéoporose et suivi du traitement.',
    valeurs_normales:
      '- T-score ≥ −1 : normal ; entre −1 et −2,5 : ostéopénie ; ≤ −2,5 : ostéoporose\n- Peu disponible : la fracture de fragilité suffit au diagnostic clinique',
  },
  {
    slug: 'vitesse-sedimentation',
    nom: 'Vitesse de sédimentation (VS)',
    type: 'biologie',
    description:
      'Marqueur non spécifique d’inflammation : rhumatismes inflammatoires, infections, tuberculose, myélome, maladies auto-immunes.',
    valeurs_normales:
      '- < (âge/2) mm à la 1re heure chez l’homme, < (âge + 10)/2 chez la femme\n- Augmentée aussi par l’anémie, la grossesse, l’insuffisance rénale',
  },
  // --- Lot 37
  {
    slug: 'cholinesterase',
    nom: 'Activité cholinestérasique (pseudocholinestérase, acétylcholinestérase)',
    type: 'biologie',
    description:
      'Mesure de l’activité des cholinestérases plasmatique ou érythrocytaire : confirmation et suivi d’une intoxication aux organophosphorés ou aux carbamates.',
    valeurs_normales:
      '- Activité normale selon le laboratoire\n- Baisse > 50 % évocatrice d’intoxication ; ne pas attendre le résultat pour traiter',
  },
  // --- Lot 38
  {
    slug: 'prelevement-oculaire',
    nom: 'Prélèvement conjonctival (Gram, culture)',
    type: 'biologie',
    description:
      'Écouvillonnage des sécrétions conjonctivales avec coloration de Gram, culture et, si disponible, PCR Chlamydia et gonocoque : conjonctivite néonatale, conjonctivite purulente sévère.',
    valeurs_normales:
      '- Absence de germe pathogène\n- Diplocoques Gram négatif intracellulaires : gonocoque (urgence)',
  },
  // --- Lot 41
  {
    slug: 'test-de-la-sueur',
    nom: 'Test de la sueur',
    type: 'exploration',
    description:
      'Mesure de la concentration en chlorures de la sueur après stimulation par iontophorèse à la pilocarpine : diagnostic de la mucoviscidose.',
    valeurs_normales:
      '- Chlorures < 30 mmol/L : normal ; 30–59 : intermédiaire ; ≥ 60 mmol/L : mucoviscidose (à confirmer sur un second test)\n- Peu disponible : orienter vers un centre spécialisé',
  },
  {
    slug: 'pcr-cmv',
    nom: 'PCR cytomégalovirus (urine, salive)',
    type: 'biologie',
    description:
      'Recherche du génome du CMV dans les urines ou la salive du nouveau-né dans les 3 premières semaines de vie : diagnostic de l’infection congénitale à CMV.',
    valeurs_normales:
      '- Négative\n- Positive avant 21 jours de vie : infection congénitale ; après 3 semaines, impossible de distinguer d’une infection acquise',
  },
  // --- Lot 43
  {
    slug: 'anticorps-anti-transglutaminase',
    nom: 'Anticorps anti-transglutaminase IgA',
    type: 'biologie',
    description:
      'Dépistage sérologique de la maladie cœliaque, chez un patient consommant du gluten, avec dosage associé des IgA totales (un déficit en IgA donne un faux négatif).',
    valeurs_normales:
      '- Négatifs (seuil selon la trousse)\n- Positifs : maladie cœliaque probable ; confirmation par biopsie duodénale, sauf taux > 10 fois la normale chez l’enfant (centre spécialisé)',
  },
  // --- Lot 44
  {
    slug: 'catecholamines-urinaires',
    nom: 'Métabolites urinaires des catécholamines (VMA, HVA)',
    type: 'biologie',
    description:
      'Dosage des acides vanylmandélique (VMA) et homovanillique (HVA) dans les urines, rapporté à la créatininurie : diagnostic et suivi du neuroblastome.',
    valeurs_normales:
      '- Valeurs de référence selon l’âge (rapport à la créatinine urinaire)\n- Élevés dans plus de 90 % des neuroblastomes',
  },
  {
    slug: 'frottis-sanguin',
    nom: 'Frottis sanguin',
    type: 'biologie',
    description:
      'Examen au microscope d’un étalement de sang coloré (May-Grünwald-Giemsa) : morphologie des globules rouges (sphérocytes, schizocytes, cellules cibles, drépanocytes), des leucocytes (blastes) et des plaquettes ; recherche de parasites.',
    valeurs_normales:
      '- Morphologie normale, absence de blastes et de parasites\n- À interpréter avec la NFS par un biologiste',
  },
  {
    slug: 'phosphoremie',
    nom: 'Phosphorémie',
    type: 'biologie',
    description:
      'Dosage du phosphore sanguin : dépistage du syndrome de renutrition inappropriée, du syndrome de lyse tumorale et des troubles du métabolisme phosphocalcique.',
    valeurs_normales:
      '- Enfant : 1,3–2,1 mmol/L (selon l’âge) ; adulte : 0,8–1,45 mmol/L\n- Hypophosphatémie sévère < 0,3 mmol/L chez l’adulte : risque cardiaque et respiratoire',
  },
  // --- Lot 45
  {
    slug: 'cystographie-mictionnelle',
    nom: 'Cystographie rétrograde et mictionnelle',
    type: 'imagerie',
    description:
      'Opacification de la vessie par sonde urétrale avec clichés pendant la miction : recherche d’un reflux vésico-urétéral et de valves de l’urètre postérieur chez le garçon.',
    valeurs_normales:
      '- Vessie et urètre normaux, absence de reflux\n- Reflux classé de I à V ; réaliser à distance d’une infection urinaire, urines stériles, sous antibioprophylaxie',
  },
  {
    slug: 'age-osseux',
    nom: 'Âge osseux (radiographie de la main et du poignet gauches)',
    type: 'imagerie',
    description:
      'Estimation de la maturation osseuse par comparaison à un atlas (Greulich et Pyle) : exploration d’une petite taille, d’un retard pubertaire ou d’une puberté précoce.',
    valeurs_normales:
      '- Âge osseux proche de l’âge civil (± 2 ans)\n- Retardé : retard constitutionnel, hypothyroïdie, déficit en hormone de croissance, malnutrition ; avancé : puberté précoce, hyperplasie des surrénales, obésité',
  },
  {
    slug: 'gonadotrophines-lh-fsh',
    nom: 'Gonadotrophines (LH, FSH) et stéroïdes sexuels',
    type: 'biologie',
    description:
      'Dosage de LH, FSH, testostérone ou œstradiol : exploration de la puberté (précoce ou retardée), de l’hypogonadisme et de l’aménorrhée.',
    valeurs_normales:
      '- Valeurs selon l’âge et le stade pubertaire (laboratoire spécialisé)\n- LH/FSH élevées + stéroïdes bas : hypogonadisme périphérique (Turner, Klinefelter) ; LH/FSH basses : origine centrale ou retard constitutionnel',
  },
  {
    slug: '17-hydroxyprogesterone',
    nom: '17-hydroxyprogestérone',
    type: 'biologie',
    description:
      'Dosage sanguin de la 17-OH-progestérone : diagnostic de l’hyperplasie congénitale des surrénales par déficit en 21-hydroxylase (dépistage néonatal dans certains pays).',
    valeurs_normales:
      '- Valeurs de référence selon l’âge (élevées physiologiquement les premiers jours et chez le prématuré)\n- Très élevée : déficit en 21-hydroxylase',
  },
  {
    slug: 'caryotype',
    nom: 'Caryotype',
    type: 'biologie',
    description:
      'Étude des chromosomes sur lymphocytes sanguins : syndrome de Turner (petite taille, retard pubertaire de la fille), Klinefelter, ambiguïté sexuelle, trisomies.',
    valeurs_normales: '- 46,XX ou 46,XY\n- Laboratoire de génétique spécialisé (peu disponible)',
  },
  // --- Lot 48
  {
    slug: 'ammoniemie',
    nom: 'Ammoniémie',
    type: 'biologie',
    description:
      'Dosage de l’ammoniac sanguin (prélèvement sur glace, analyse rapide) : erreurs innées du cycle de l’urée, encéphalopathie hépatique, syndrome de Reye.',
    valeurs_normales:
      '- Nouveau-né < 110 µmol/L ; enfant et adulte < 50 µmol/L\n- > 150–200 µmol/L chez le nouveau-né : suspicion de maladie métabolique, urgence',
  },
  // --- Lot 49
  {
    slug: 'dosage-immunoglobulines',
    nom: 'Dosage pondéral des immunoglobulines (IgG, IgA, IgM)',
    type: 'biologie',
    description:
      'Mesure des immunoglobulines sériques : exploration des infections récidivantes (déficits immunitaires primitifs ou secondaires).',
    valeurs_normales:
      '- Valeurs de référence selon l’âge (laboratoire)\n- Très basses : agammaglobulinémie, déficit immunitaire commun variable ; IgA isolément indétectables : déficit en IgA ; élevées : infection chronique, VIH',
  },
  {
    slug: 'adn-vhb',
    nom: 'Charge virale du virus de l’hépatite B (ADN VHB)',
    type: 'biologie',
    description:
      'Quantification de l’ADN du VHB par PCR : décision de traitement de l’hépatite B chronique et prévention de la transmission mère-enfant.',
    valeurs_normales:
      '- Indétectable\n- Grossesse : ≥ 200 000 UI/mL → ténofovir à partir de 24–28 semaines (OMS 2024 : ténofovir recommandé pour toute femme AgHBs positive si charge virale indisponible)',
  },
  // --- Lot 50
  {
    slug: 'serologies-torch',
    nom: 'Sérologies toxoplasmose, rubéole, CMV (IgG, IgM)',
    type: 'biologie',
    description:
      'Recherche des anticorps IgG et IgM contre la toxoplasmose, la rubéole et le cytomégalovirus : statut immunitaire de la femme enceinte et diagnostic d’une infection récente.',
    valeurs_normales:
      '- IgG positives, IgM négatives : immunité ancienne\n- IgG négatives : femme non immunisée (prévention)\n- IgM positives : infection récente possible, à confirmer (avidité des IgG, second prélèvement à 2–3 semaines) dans un laboratoire de référence',
  },
  {
    slug: 'anticorps-antiphospholipides',
    nom: 'Anticorps antiphospholipides',
    type: 'biologie',
    description:
      'Anticoagulant circulant lupique, anticorps anticardiolipine et anti-bêta-2-glycoprotéine I : syndrome des antiphospholipides (thromboses, fausses couches répétées, pré-éclampsie précoce).',
    valeurs_normales: '- Négatifs\n- Positivité à confirmer sur un second prélèvement à 12 semaines',
  },
  // --- Lot 51
  {
    slug: 'acides-biliaires-seriques',
    nom: 'Acides biliaires sériques',
    type: 'biologie',
    description:
      'Dosage des acides biliaires totaux à jeun : diagnostic et suivi de la cholestase gravidique (le taux conditionne le risque fœtal).',
    valeurs_normales:
      '- < 10 µmol/L\n- ≥ 10 µmol/L avec prurit : cholestase gravidique ; ≥ 40 µmol/L : forme sévère ; ≥ 100 µmol/L : risque de mort fœtale élevé',
  },
  // --- Lot 53
  {
    slug: 'fibrinogene',
    nom: 'Fibrinogène',
    type: 'biologie',
    description:
      'Dosage du fibrinogène plasmatique : marqueur précoce de la coagulopathie de consommation (hémorragie du post-partum, hématome rétroplacentaire, embolie amniotique, CIVD).',
    valeurs_normales:
      '- 2–4 g/L hors grossesse ; 4–6 g/L au 3e trimestre\n- < 2 g/L pendant une hémorragie obstétricale : risque d’hémorragie sévère, substitution (cryoprécipité, plasma)',
  },
  {
    slug: 'prelevement-de-pus',
    nom: 'Prélèvement de pus (Gram, culture, antibiogramme)',
    type: 'biologie',
    description:
      'Prélèvement d’une collection ou d’une plaie infectée (abcès, infection de site opératoire) pour identification du germe et antibiogramme.',
    valeurs_normales:
      '- Stérile\n- Prélever avant les antibiotiques si possible, en profondeur (pas d’écouvillonnage superficiel)',
  },
  // --- Lot 54
  {
    slug: 'prolactinemie',
    nom: 'Prolactinémie',
    type: 'biologie',
    description:
      'Dosage de la prolactine sérique (à jeun, au calme, hors stress) : exploration des aménorrhées, de la galactorrhée et de l’infertilité.',
    valeurs_normales:
      '- Femme : < 25 ng/mL (hors grossesse et allaitement)\n- Élevée : médicaments (antipsychotiques, métoclopramide), hypothyroïdie, adénome hypophysaire (prolactinome) ; contrôler avant d’explorer',
  },
  {
    slug: 'amniocentese',
    nom: 'Amniocentèse',
    type: 'exploration',
    description:
      'Prélèvement de liquide amniotique par ponction transabdominale échoguidée (à partir de 15–16 semaines) : caryotype fœtal, PCR des infections fœtales (toxoplasmose, CMV).',
    valeurs_normales:
      '- Caryotype normal, PCR négatives\n- Risque de fausse couche ≈ 0,5 % ; centre de diagnostic prénatal ; immunoglobulines anti-D si rhésus négatif',
  },
  // --- Lot 55
  {
    slug: 'hysteroscopie',
    nom: 'Hystéroscopie',
    type: 'exploration',
    description:
      'Exploration endoscopique de la cavité utérine par le col : diagnostic et traitement des polypes, fibromes sous-muqueux, synéchies, hyperplasie de l’endomètre, biopsies dirigées.',
    valeurs_normales:
      '- Cavité utérine normale, endomètre régulier\n- Disponible en centre spécialisé ; à réaliser en dehors d’une infection et d’une grossesse',
  },
  // --- Lot 56
  {
    slug: 'hormone-antimullerienne',
    nom: 'Hormone antimüllérienne (AMH)',
    type: 'biologie',
    description:
      'Marqueur de la réserve ovarienne (nombre de follicules) : bilan d’infertilité, insuffisance ovarienne prématurée, choix de la stratégie d’assistance médicale à la procréation.',
    valeurs_normales:
      '- Valeurs selon l’âge et la technique (laboratoire spécialisé)\n- Très basse : réserve ovarienne diminuée ; élevée : syndrome des ovaires polykystiques',
  },
  {
    slug: 'ca-125',
    nom: 'CA 125',
    type: 'biologie',
    description:
      'Marqueur tumoral sérique utile dans l’évaluation d’une masse ovarienne suspecte (surtout après la ménopause) et le suivi des cancers de l’ovaire.',
    valeurs_normales:
      '- < 35 UI/mL\n- Élevé aussi dans l’endométriose, les fibromes, les infections pelviennes, la grossesse, la tuberculose péritonéale : peu spécifique avant la ménopause',
  },
  // --- Lot 57
  {
    slug: 'colposcopie',
    nom: 'Colposcopie',
    type: 'exploration',
    description:
      'Examen du col utérin à la loupe binoculaire après application d’acide acétique et de lugol : localisation et biopsie des lésions précancéreuses après un dépistage positif (IVA, HPV, frottis).',
    valeurs_normales:
      '- Zone de jonction visible, absence de lésion acidophile\n- Lésion : biopsie dirigée ; zone de jonction non visible : examen insuffisant',
  },
  // --- Lot 58
  {
    slug: 'anuscopie',
    nom: 'Anuscopie',
    type: 'exploration',
    description:
      'Examen du canal anal et du bas rectum à l’aide d’un anuscope : hémorroïdes, fissure, fistule, condylomes, tumeur ; complétée par une coloscopie en cas de rectorragies après 45–50 ans ou de signes d’alarme.',
    valeurs_normales:
      '- Canal anal normal\n- Réalisable en consultation, sans préparation ou après un petit lavement',
  },
  // --- Lot 59
  {
    slug: 'ace',
    nom: 'Antigène carcino-embryonnaire (ACE)',
    type: 'biologie',
    description:
      'Marqueur tumoral sérique utile au bilan initial et à la surveillance après traitement du cancer colorectal (pas pour le dépistage).',
    valeurs_normales:
      '- < 5 ng/mL (plus élevé chez le fumeur)\n- Élévation après chirurgie : récidive ou métastases à rechercher',
  },
  {
    slug: 'opacification-digestive',
    nom: 'Opacification digestive (transit, fistulographie)',
    type: 'imagerie',
    description:
      'Radiographies après ingestion ou injection d’un produit de contraste hydrosoluble : localisation d’une fistule, d’un obstacle, d’une fuite anastomotique, étude d’une sténose.',
    valeurs_normales:
      '- Transit normal, pas de fuite\n- Utiliser un produit hydrosoluble en cas de suspicion de perforation ou de fistule',
  },
  // --- Lot 60
  {
    slug: 'cytoponction-thyroidienne',
    nom: 'Cytoponction thyroïdienne',
    type: 'biologie',
    description:
      'Ponction à l’aiguille fine d’un nodule thyroïdien (idéalement échoguidée) pour examen cytologique, classé selon le système de Bethesda : orientation vers la surveillance ou la chirurgie.',
    valeurs_normales:
      '- Bethesda II (bénin) : surveillance\n- Bethesda V–VI (suspect, malin) : chirurgie ; III–IV : répéter ou discuter selon le contexte',
  },
  // --- Lot 61
  {
    slug: 'phosphatases-alcalines',
    nom: 'Phosphatases alcalines',
    type: 'biologie',
    description:
      'Enzyme d’origine osseuse et hépatique : élevée dans le rachitisme, l’ostéomalacie, les tumeurs et métastases osseuses (ostéosarcome), la maladie de Paget, la consolidation des fractures et les cholestases.',
    valeurs_normales:
      '- Adulte : 40–130 UI/L ; enfant en croissance : valeurs nettement plus élevées (normes selon l’âge)\n- Origine osseuse ou hépatique à préciser avec la GGT',
  },
  // --- Lot 62
  {
    slug: 'echo-doppler-arteriel',
    nom: 'Écho-Doppler artériel des membres',
    type: 'imagerie',
    description:
      'Exploration ultrasonore des artères des membres : localisation et étendue des sténoses et occlusions (artériopathie, ischémie aiguë, traumatisme vasculaire, faux anévrisme).',
    valeurs_normales:
      '- Flux triphasique, pas de sténose\n- Absence de flux en aval d’une occlusion ; ne doit pas retarder la revascularisation d’une ischémie aiguë grave',
  },
  // --- Lot 63
  {
    slug: 'cystoscopie',
    nom: 'Cystoscopie',
    type: 'exploration',
    description:
      'Exploration endoscopique de l’urètre et de la vessie : bilan d’une hématurie, diagnostic et biopsie (ou résection) des tumeurs vésicales, lésions bilharziennes, corps étrangers, sténoses.',
    valeurs_normales:
      '- Muqueuse vésicale normale\n- Réalisée sur urines stériles (ECBU préalable), sous anesthésie locale (fibroscope) ou au bloc',
  },
  {
    slug: 'cytologie-urinaire',
    nom: 'Cytologie urinaire',
    type: 'biologie',
    description:
      'Recherche de cellules tumorales dans les urines : bilan d’une hématurie, dépistage et suivi des tumeurs urothéliales de haut grade.',
    valeurs_normales:
      '- Absence de cellules suspectes\n- Peu sensible pour les tumeurs de bas grade ; une cytologie négative n’élimine pas un cancer',
  },
  // --- Lot 65
  {
    slug: 'nasofibroscopie',
    nom: 'Nasofibroscopie (endoscopie ORL)',
    type: 'exploration',
    description: 'Examen endoscopique des fosses nasales, du cavum, du pharynx et du larynx : sinusites, polypes, tumeurs ORL (biopsies), mobilité des cordes vocales, corps étrangers.',
    valeurs_normales: '- Muqueuses normales, cordes vocales mobiles\n- Réalisable en consultation sous anesthésie locale',
  },
  {
    slug: 'test-fluoresceine',
    nom: 'Test à la fluorescéine (lampe à fente)',
    type: 'exploration',
    description: 'Instillation de fluorescéine dans l’œil puis examen à la lumière bleue : mise en évidence des ulcérations et abrasions de la cornée (kératite, ulcère, dendrite herpétique, corps étranger).',
    valeurs_normales: '- Pas de prise de fluorescéine\n- Zone verte : désépithélialisation ; aspect dendritique : herpès',
  },
  // --- Lot 66
  {
    slug: 'refraction',
    nom: 'Mesure de la réfraction (skiascopie, réfractomètre)',
    type: 'exploration',
    description: 'Mesure objective (réfractomètre automatique, skiascopie, sous cycloplégie chez l’enfant) puis subjective (verres d’essai) de l’erreur de réfraction : myopie, hypermétropie, astigmatisme, presbytie ; prescription des lunettes.',
    valeurs_normales: '- Emmétropie : pas de correction nécessaire\n- Résultat exprimé en dioptries (sphère, cylindre, axe)',
  },
  {
    slug: 'echographie-oculaire',
    nom: 'Échographie oculaire (mode B)',
    type: 'imagerie',
    description: 'Échographie du globe et de l’orbite à travers les paupières : décollement de rétine, hémorragie du vitré, tumeur intraoculaire, corps étranger, lorsque le fond d’œil est impossible (cataracte, hémorragie).',
    valeurs_normales: '- Vitré vide d’échos, rétine à plat',
  },
  // --- Lot 67
  {
    slug: 'holter-ecg',
    nom: 'Holter ECG (enregistrement de 24 à 72 h)',
    type: 'exploration',
    description: 'Enregistrement continu de l’ECG en ambulatoire : recherche d’une fibrillation atriale paroxystique après un AVC ischémique ou un AIT, palpitations, syncopes.',
    valeurs_normales: '- Rythme sinusal, pas de trouble du rythme significatif\n- Fibrillation atriale > 30 s : anticoagulation à discuter après un AVC',
  },
  {
    slug: 'anca',
    nom: 'Anticorps anticytoplasme des polynucléaires (ANCA)',
    type: 'biologie',
    description: 'Recherche par immunofluorescence et ELISA (anti-PR3, anti-MPO) : vascularites des petits vaisseaux (granulomatose avec polyangéite, polyangéite microscopique, granulomatose éosinophilique).',
    valeurs_normales: '- Négatifs\n- c-ANCA anti-PR3 : granulomatose avec polyangéite ; p-ANCA anti-MPO : polyangéite microscopique',
  },
  {
    slug: 'angioscanner-cerebral',
    nom: 'Angioscanner des vaisseaux cervico-encéphaliques',
    type: 'imagerie',
    description: 'Scanner avec injection de produit de contraste iodé en phase artérielle et veineuse : sténoses et occlusions artérielles, dissections, anévrismes, vascularites, thromboses veineuses cérébrales (signe du delta vide).',
    valeurs_normales: '- Vaisseaux perméables, sans sténose\n- Sinus veineux opacifiés',
  },
  // --- Lot 68
  {
    slug: 'anticorps-anti-rach',
    nom: 'Anticorps anti-récepteurs de l’acétylcholine (et anti-MuSK)',
    type: 'biologie',
    description: 'Dosage sérique des anticorps dirigés contre les récepteurs de l’acétylcholine de la jonction neuromusculaire : diagnostic de la myasthénie auto-immune ; anticorps anti-MuSK si négatifs.',
    valeurs_normales: '- Négatifs\n- Positifs dans 85 % des myasthénies généralisées et 50 % des formes oculaires',
  },
  {
    slug: 'serologie-htlv-1',
    nom: 'Sérologie HTLV-1',
    type: 'biologie',
    description: 'Recherche d’anticorps anti-HTLV-1 dans le sang (ELISA confirmé par Western blot) et dans le LCR : paraparésie spastique tropicale, leucémie-lymphome T de l’adulte.',
    valeurs_normales: '- Négative\n- Positive dans le sang et le LCR : myélopathie associée au HTLV-1 probable',
  },
  {
    slug: 'epreuves-vestibulaires',
    nom: 'Épreuves vestibulaires (manœuvres et vidéonystagmographie)',
    type: 'exploration',
    description: 'Examen du nystagmus et des fonctions vestibulaires : manœuvre de Dix-Hallpike (vertige positionnel paroxystique bénin), test d’impulsion céphalique, épreuves caloriques et vidéonystagmographie (névrite vestibulaire, maladie de Ménière).',
    valeurs_normales: '- Pas de nystagmus spontané ni provoqué\n- Réponses vestibulaires symétriques',
  },
  // --- Lot 69
  {
    slug: 'anticorps-anti-aquaporine-4',
    nom: 'Anticorps anti-aquaporine 4 (et anti-MOG)',
    type: 'biologie',
    description: 'Recherche sérique (test cellulaire) des anticorps anti-aquaporine 4, marqueurs de la neuromyélite optique ; anticorps anti-MOG si négatifs.',
    valeurs_normales: '- Négatifs\n- Positifs : neuromyélite optique (spécificité > 99 %)',
  },
  // --- Lot 70
  {
    slug: 'pcr-hsv',
    nom: 'PCR herpès simplex (HSV-1 et HSV-2) dans le LCR',
    type: 'biologie',
    description: 'Amplification génique du virus herpès simplex dans le liquide cérébrospinal : diagnostic de l’encéphalite herpétique (peut être négative les 72 premières heures) ; recherche associée de VZV, CMV, entérovirus.',
    valeurs_normales: '- Négative\n- Positive : encéphalite herpétique (sensibilité > 95 % après le 3e jour)',
  },
  {
    slug: 'serologie-cysticercose',
    nom: 'Sérologie de la cysticercose (Western blot, EITB)',
    type: 'biologie',
    description: 'Recherche d’anticorps anti-Taenia solium dans le sérum (immunoblot) ou le LCR : appui au diagnostic de la neurocysticercose, à interpréter avec l’imagerie.',
    valeurs_normales: '- Négative\n- Moins sensible en cas de lésion unique ou calcifiée',
  },
  {
    slug: 'test-monofilament',
    nom: 'Test au monofilament et examen neurologique du pied',
    type: 'exploration',
    description: 'Évaluation de la sensibilité protectrice de la plante du pied avec un monofilament de 10 g, associée à la sensibilité vibratoire (diapason) et aux réflexes : dépistage de la neuropathie diabétique et lépreuse, risque de plaie.',
    valeurs_normales: '- Perception du monofilament en tous les points testés\n- Non-perception d’un point ou plus : pied à risque',
  },
  // --- Lot 71
  {
    slug: 'ceruloplasmine-cuivre',
    nom: 'Céruloplasmine et cuivre (sérique et urinaire des 24 h)',
    type: 'biologie',
    description: 'Dosage de la céruloplasmine sérique, du cuivre sérique et de la cuprurie des 24 heures : dépistage de la maladie de Wilson devant des mouvements anormaux, une hépatopathie ou des troubles psychiatriques avant 40 ans.',
    valeurs_normales: '- Céruloplasmine 0,2–0,4 g/L\n- Cuprurie < 40 µg/24 h\n- Maladie de Wilson : céruloplasmine basse, cuprurie > 100 µg/24 h',
  },
  // --- Lot 73
  {
    slug: 'testosteronemie',
    nom: 'Testostérone totale (dosage matinal)',
    type: 'biologie',
    description: 'Dosage sanguin de la testostérone totale, prélevé le matin à jeun, à contrôler si bas : hypogonadisme masculin (baisse de la libido, troubles de l’érection, infertilité), hyperandrogénie féminine.',
    valeurs_normales: '- Homme adulte : 3–10 ng/mL (10–35 nmol/L)\n- Femme : < 0,7 ng/mL',
  },
  // --- Lot 74
  {
    slug: 'depistage-urinaire-drogues',
    nom: 'Dépistage urinaire des drogues (tests rapides)',
    type: 'biologie',
    description: 'Tests immunochromatographiques rapides sur urine : cannabis (THC), opiacés et opioïdes (morphine, tramadol selon le test), cocaïne, amphétamines, benzodiazépines ; orientation diagnostique devant une intoxication, un trouble psychiatrique aigu ou le suivi d’un traitement de substitution.',
    valeurs_normales: '- Négatif\n- Cannabis détectable plusieurs jours (jusqu’à plusieurs semaines chez le consommateur régulier)\n- Résultat positif à confirmer si enjeu médico-légal',
  },
  // --- Lot 75
  {
    slug: 'evaluation-cognitive',
    nom: 'Évaluation cognitive (MoCA, MMSE, test de l’horloge)',
    type: 'exploration',
    description: 'Tests de dépistage des troubles cognitifs au cabinet : mémoire, orientation, attention, langage, fonctions exécutives et visuo-spatiales ; à adapter au niveau d’instruction et à la langue ; suivi de l’évolution.',
    valeurs_normales: '- MoCA ≥ 26/30 (ajouter 1 point si ≤ 12 ans de scolarité)\n- MMSE ≥ 24/30 (seuils à adapter au niveau d’études)',
  },
  // --- Lot 76
  {
    slug: 'anticorps-myosites',
    nom: 'Anticorps des myosites (anti-Jo-1, anti-Mi-2, anti-TIF1-γ, anti-HMGCR)',
    type: 'biologie',
    description: 'Recherche d’autoanticorps spécifiques ou associés aux myosites inflammatoires : orientation vers une dermatomyosite (anti-Mi-2, anti-TIF1-γ associé aux cancers), un syndrome des antisynthétases (anti-Jo-1, pneumopathie interstitielle) ou une myopathie nécrosante (anti-HMGCR, statines).',
    valeurs_normales: '- Négatifs\n- Interprétation avec la clinique, les CPK, l’EMG et la biopsie musculaire',
  },
  {
    slug: 'polysomnographie',
    nom: 'Polysomnographie et tests itératifs de latence d’endormissement',
    type: 'exploration',
    description: 'Enregistrement nocturne du sommeil (EEG, mouvements oculaires, tonus musculaire, respiration, oxymétrie) et, le lendemain, mesures répétées du délai d’endormissement : apnées du sommeil, narcolepsie, hypersomnies, parasomnies atypiques (centre spécialisé).',
    valeurs_normales: '- Index d’apnées-hypopnées < 5/h\n- Latence moyenne d’endormissement > 8 min, pas d’endormissement en sommeil paradoxal\n- Narcolepsie : latence ≤ 8 min et au moins 2 endormissements en sommeil paradoxal',
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
  // --- Lot 29
  ['Paralysie faciale', 'Faiblesse ou paralysie des muscles d’une moitié du visage.'],
  [
    'Troubles de la marche',
    'Difficulté à marcher : instabilité, ataxie, faiblesse ou raideur des membres inférieurs.',
  ],
  // --- Lot 30
  ['Humeur dépressive', 'Tristesse persistante, perte d’intérêt et de plaisir, sentiment de dévalorisation.'],
  ['Idées suicidaires', 'Pensées de mort ou de suicide, avec ou sans projet.'],
  [
    'Hallucinations',
    'Perceptions sans objet : entendre des voix, voir des choses que les autres ne voient pas.',
  ],
  ['Idées délirantes', 'Convictions fausses et inébranlables (persécution, grandeur, ensorcellement…).'],
  ['Anxiété', 'Inquiétude excessive, tension, peur, avec signes physiques (palpitations, sueurs).'],
  ['Agitation', 'Activité motrice excessive et désordonnée, souvent avec irritabilité ou agressivité.'],
  ['Rigidité musculaire', 'Raideur des muscles à la mobilisation passive.'],
  [
    'Lenteur des mouvements',
    'Ralentissement de l’initiation et de l’exécution des mouvements (bradykinésie).',
  ],
  // --- Lot 31
  ['Troubles de la mémoire', 'Oublis des faits récents, difficulté à retenir de nouvelles informations.'],
  ['Désorientation', 'Perte des repères dans le temps, l’espace ou vis-à-vis des personnes.'],
  ['Hyperactivité', 'Agitation motrice excessive, incapacité à rester en place, impulsivité.'],
  [
    'Troubles des interactions sociales',
    'Difficulté à communiquer et à établir des relations : peu de regard, isolement, jeu pauvre.',
  ],
  // --- Lot 32
  ['Prise de poids', 'Augmentation du poids corporel.'],
  ['Exophtalmie', 'Saillie anormale du globe oculaire hors de l’orbite.'],
  ['Frilosité', 'Sensibilité excessive au froid.'],
  // --- Lot 33
  ['Pyrosis', 'Brûlure rétrosternale ascendante, souvent après les repas ou en position couchée.'],
  ['Épigastralgies', 'Douleur ou brûlure du creux de l’estomac (épigastre).'],
  // --- Lot 34
  [
    'Purpura',
    'Taches rouges ou violacées de la peau ne s’effaçant pas à la pression (pétéchies, ecchymoses).',
  ],
  // --- Lot 35
  ['Myalgies', 'Douleurs musculaires, diffuses ou localisées (mollets).'],
  ['Rhinorrhée', 'Écoulement nasal clair ou purulent.'],
  // --- Lot 36
  [
    'Plaques érythémato-squameuses',
    'Plaques rouges recouvertes de squames, bien limitées (psoriasis, dermatophyties).',
  ],
  ['Lésions eczématiformes', 'Plaques rouges, prurigineuses, suintantes ou sèches, mal limitées (eczéma).'],
  ['Photosensibilité', 'Éruption ou aggravation cutanée après exposition au soleil.'],
  [
    'Douleur de l’épaule',
    'Douleur de l’épaule, mécanique ou nocturne, avec ou sans limitation des mouvements.',
  ],
  // --- Lot 37
  ['Comédons et pustules', 'Points noirs, microkystes, papules et pustules du visage et du dos (acné).'],
  ['Fasciculations', 'Contractions involontaires, brèves et visibles de faisceaux musculaires.'],
  // --- Lot 38
  [
    'Hyperthermie',
    'Élévation de la température corporelle au-delà de 40 °C par défaut de thermorégulation (chaleur, effort), sans dérèglement infectieux.',
  ],
  // --- Lot 40
  ['Pleurs excessifs', 'Pleurs prolongés ou inconsolables du nourrisson.'],
  ['Boiterie', 'Marche asymétrique, appui évité sur un membre inférieur.'],
  ['Tuméfaction parotidienne', 'Gonflement de la région parotidienne, en avant et au-dessous de l’oreille.'],
  // --- Lot 41
  [
    'Langue framboisée',
    'Langue rouge vif à papilles saillantes, après une phase saburrale (scarlatine, maladie de Kawasaki).',
  ],
  // --- Lot 42
  ['Constipation', 'Selles rares, dures ou difficiles à émettre.'],
  [
    'Régurgitations',
    'Remontées sans effort de lait ou d’aliments dans la bouche, fréquentes chez le nourrisson.',
  ],
  // --- Lot 43
  [
    'Selles décolorées',
    'Selles blanc mastic ou jaune pâle, traduisant l’absence de bile dans l’intestin (cholestase, atrésie des voies biliaires).',
  ],
  // --- Lot 44
  [
    'Leucocorie',
    'Reflet pupillaire blanc (« œil de chat »), visible à la lumière ou sur les photographies au flash : rétinoblastome jusqu’à preuve du contraire, cataracte congénitale.',
  ],
  [
    'Strabisme',
    'Défaut de parallélisme des axes visuels ; d’apparition récente chez l’enfant, il impose un fond d’œil (rétinoblastome).',
  ],
  [
    'Hémarthrose',
    'Épanchement de sang dans une articulation : articulation chaude, gonflée, douloureuse et bloquée (hémophilie).',
  ],
  [
    'Ecchymoses',
    'Taches bleutées sous-cutanées par extravasation de sang, spontanées ou après un traumatisme minime (troubles de l’hémostase, maltraitance).',
  ],
  // --- Lot 45
  [
    'Petite taille',
    'Taille inférieure à −2 DS (ou −2 Z-scores) pour l’âge et le sexe, ou ralentissement de la vitesse de croissance.',
  ],
  [
    'Retard pubertaire',
    'Absence de développement des seins après 13 ans chez la fille ou d’augmentation du volume testiculaire après 14 ans chez le garçon.',
  ],
  [
    'Puberté précoce',
    'Apparition des caractères sexuels secondaires avant 8 ans chez la fille et 9 ans chez le garçon.',
  ],
  [
    'Ambiguïté sexuelle',
    'Organes génitaux externes ne permettant pas d’attribuer le sexe à la naissance (clitoridomégalie, hypospadias avec cryptorchidie, fusion des bourrelets).',
  ],
  [
    'Anurie',
    'Absence ou quasi-absence d’urines (< 0,5 mL/kg/h chez l’enfant pendant plusieurs heures, < 100 mL/24 h chez l’adulte).',
  ],
  // --- Lot 46
  [
    'Macrocéphalie',
    'Périmètre crânien supérieur à +2 DS pour l’âge, ou augmentation trop rapide du périmètre crânien (hydrocéphalie, épanchement, macrocéphalie familiale).',
  ],
  [
    'Spasmes infantiles',
    'Contractions brèves et brusques en flexion (tête, tronc, bras), souvent en salves au réveil, chez le nourrisson (syndrome de West).',
  ],
  [
    'Régression des acquisitions',
    'Perte d’acquisitions motrices, du langage ou sociales déjà obtenues (encéphalopathie évolutive, syndrome de West, autisme).',
  ],
  // --- Lot 47
  [
    'Hypoacousie',
    'Baisse de l’audition, uni- ou bilatérale ; chez l’enfant, retard de langage, inattention, difficultés scolaires.',
  ],
  [
    'Ronflements',
    'Bruit respiratoire pendant le sommeil par obstruction partielle des voies aériennes supérieures ; avec pauses respiratoires, évoque un syndrome d’apnées obstructives (hypertrophie adéno-amygdalienne).',
  ],
  [
    'Tuméfaction rétro-auriculaire',
    'Gonflement inflammatoire derrière l’oreille, décollant le pavillon (mastoïdite, adénopathie).',
  ],
  [
    'Papules cutanées',
    'Petites élevures fermes de la peau (< 1 cm), isolées ou groupées (molluscum, verrues, prurigo, lichen).',
  ],
  // --- Lot 48
  [
    'Dysménorrhée',
    'Douleurs pelviennes survenant pendant les règles, parfois avec nausées, céphalées ou malaise ; primaire chez l’adolescente, secondaire (endométriose, infection) si elle apparaît tardivement.',
  ],
  [
    'Nystagmus',
    'Mouvements involontaires rythmiques des yeux ; chez le nourrisson, il évoque une baisse visuelle sévère (cataracte, albinisme, atteinte rétinienne).',
  ],
  [
    'Dysmorphie',
    'Particularités morphologiques du visage ou du corps (forme des yeux, des oreilles, des mains) évocatrices d’un syndrome génétique.',
  ],
  // --- Lot 49
  [
    'Nausées',
    'Envie de vomir, isolée ou précédant les vomissements (grossesse, migraine, troubles digestifs, médicaments).',
  ],
  [
    'Infections récidivantes',
    'Infections plus fréquentes, plus graves, plus prolongées ou à germes inhabituels que chez les enfants du même âge (déficit immunitaire).',
  ],
  [
    'Sifflements respiratoires',
    'Bruit aigu expiratoire (wheezing) témoignant d’une obstruction bronchique (asthme, bronchiolite).',
  ],
  // --- Lot 53
  [
    'Écoulement purulent d’une plaie',
    'Issue de pus par une plaie ou une cicatrice opératoire, avec rougeur, chaleur et douleur (infection du site opératoire).',
  ],
  [
    'Douleur périnéale',
    'Douleur du périnée (déchirure, épisiotomie, hématome, infection, abcès) ; une douleur intense et croissante après l’accouchement évoque un hématome.',
  ],
  // --- Lot 54
  [
    'Galactorrhée',
    'Écoulement de lait par le mamelon en dehors de la grossesse et de l’allaitement (hyperprolactinémie).',
  ],
  [
    'Diminution des mouvements fœtaux',
    'Perception par la femme enceinte d’une baisse ou d’un arrêt des mouvements du fœtus après 28 semaines : signe d’alerte imposant une évaluation le jour même.',
  ],
  [
    'Troubles du cycle menstruel',
    'Règles irrégulières, trop rares (spanioménorrhée), trop fréquentes ou trop abondantes.',
  ],
  // --- Lot 55
  [
    'Hirsutisme',
    'Pilosité excessive de type masculin chez la femme (visage, thorax, ligne ombilico-pubienne) : syndrome des ovaires polykystiques, hyperandrogénie.',
  ],
  [
    'Bouffées de chaleur',
    'Sensation brutale de chaleur du visage et du thorax avec rougeur et sueurs, typique de la ménopause et de la carence en œstrogènes.',
  ],
  [
    'Pesanteur pelvienne',
    'Sensation de poids ou de « boule » dans le vagin, majorée en position debout et en fin de journée (prolapsus génital).',
  ],
  [
    'Tuméfaction vulvaire',
    'Gonflement d’une grande lèvre ou de la vulve, douloureux ou non (kyste ou abcès de la glande de Bartholin, hématome).',
  ],
  [
    'Végétations génitales',
    'Excroissances verruqueuses de la vulve, du vagin, du pénis ou de la région anale (condylomes à HPV).',
  ],
  // --- Lot 58
  [
    'Écoulement mamelonnaire',
    'Écoulement par le mamelon en dehors de l’allaitement : laiteux (galactorrhée), séreux, verdâtre ou sanglant (à explorer s’il est unilatéral, spontané, sanglant).',
  ],
  [
    'Prolapsus anal',
    'Extériorisation par l’anus de tissu (hémorroïdes internes, muqueuse rectale), spontanément réductible ou non.',
  ],
  // --- Lot 62
  [
    'Tuméfaction scrotale',
    'Augmentation de volume d’une bourse, douloureuse ou non (hydrocèle, hernie, varicocèle, orchi-épididymite, tumeur, filariose).',
  ],
  [
    'Bourse vide',
    'Absence de testicule palpable dans la bourse (cryptorchidie, testicule rétractile, ectopie, anorchidie).',
  ],
  [
    'Membre froid et pâle',
    'Membre froid, pâle ou marbré, sans pouls, douloureux, avec troubles sensitifs ou moteurs : ischémie aiguë, urgence vasculaire.',
  ],
  // --- Lot 64
  [
    'Jambes lourdes',
    'Sensation de pesanteur et de fatigue des jambes, majorée en fin de journée, à la station debout et à la chaleur (insuffisance veineuse, varices).',
  ],
  [
    'Rétraction cicatricielle',
    'Cicatrice épaisse qui se raccourcit et limite les mouvements d’une articulation (brides après brûlure).',
  ],
  // --- Lot 65
  ['Acouphènes', 'Perception d’un bruit (sifflement, bourdonnement) sans source extérieure, souvent associée à une baisse de l’audition.'],
  // --- Lot 66
  ['Douleur dentaire', 'Douleur d’une dent, provoquée (froid, sucre, mastication) ou spontanée et pulsatile (carie profonde, abcès).'],
  ['Saignement des gencives', 'Gingivorragies au brossage ou spontanées (gingivite, parodontite, troubles de l’hémostase, scorbut, leucémie).'],
  ['Ulcérations buccales', 'Aphtes, ulcérations ou érosions de la muqueuse de la bouche, souvent douloureuses.'],
  ['Larmoiement', 'Écoulement excessif de larmes (irritation, corps étranger, kératite, obstruction des voies lacrymales).'],
  ['Malocclusion dentaire', 'Mauvais engrènement des dents à la fermeture de la bouche (fracture de la mâchoire, luxation, tumeur).'],
  // --- Lot 67
  ['Aphasie', 'Trouble du langage acquis par lésion cérébrale : difficulté à parler, à trouver les mots ou à comprendre (AVC de l’hémisphère gauche).'],
  ['Douleur de la plaie opératoire', 'Douleur au niveau de l’incision chirurgicale, attendue dans les premiers jours ; son aggravation fait rechercher une complication.'],
  // --- Lot 68
  ['Absences', 'Brèves suspensions de la conscience (quelques secondes) avec regard fixe et arrêt de l’activité, souvent pluriquotidiennes chez l’enfant.'],
  ['Diplopie', 'Vision double d’un objet unique (atteinte des muscles ou des nerfs oculomoteurs, myasthénie, hypertension intracrânienne).'],
  ['Paresthésies', 'Sensations anormales non douloureuses (fourmillements, picotements, engourdissement), souvent aux pieds et aux mains dans les neuropathies.'],
  // --- Lot 69
  ['Douleur faciale', 'Douleur du visage, en éclairs (névralgie du trijumeau), continue (sinusite, dent, zona) ou à la mastication.'],
  ['Crampes musculaires', 'Contractions involontaires, douloureuses et transitoires d’un muscle (neuropathies, SLA, troubles ioniques, effort).'],
  ['Dysarthrie', 'Trouble de l’articulation de la parole (voix pâteuse, mal articulée) par atteinte neurologique ou musculaire.'],
  ['Douleur radiculaire', 'Douleur suivant le trajet d’une racine nerveuse (sciatique, cruralgie, névralgie cervico-brachiale), souvent majorée par la toux et l’effort.'],
  // --- Lot 70
  ['Atrophie musculaire', 'Diminution visible du volume d’un muscle ou d’un groupe musculaire (atteinte du nerf, de la corne antérieure ou du muscle, immobilisation).'],
  ['Mains en griffe', 'Déformation des doigts en flexion par paralysie des muscles intrinsèques de la main (lèpre, lésion du nerf ulnaire ou médian).'],
  // --- Lot 71
  ['Postures anormales', 'Contractions musculaires prolongées entraînant des torsions ou des positions anormales du cou, du tronc ou des membres (dystonies).'],
  ['Impatiences des jambes', 'Besoin irrésistible de bouger les jambes, avec sensations désagréables, au repos et le soir, soulagé par le mouvement.'],
  ['Troubles de la concentration', 'Difficulté à maintenir l’attention sur une tâche, distractibilité, lenteur intellectuelle.'],
  ['Irritabilité', 'Tendance excessive à la colère, à l’agacement ou à l’impatience, inhabituelle pour la personne.'],
  ['Amnésie', 'Perte de la mémoire d’une période (autour d’un traumatisme, d’une crise) ou difficulté à mémoriser de nouvelles informations.'],
  // --- Lot 72
  ['Obsessions et compulsions', 'Pensées intrusives répétées et angoissantes (obsessions) et comportements ou rituels répétitifs destinés à les neutraliser (compulsions : lavage, vérification, comptage).'],
  ['Peurs excessives', 'Peur intense et disproportionnée d’un objet, d’une situation ou d’un lieu, entraînant un évitement.'],
  ['Plaintes somatiques multiples', 'Symptômes physiques nombreux et variés (douleurs, fatigue, troubles digestifs) sans explication médicale suffisante, source de détresse et de consultations répétées.'],
  ['Restriction alimentaire', 'Limitation volontaire et marquée des apports alimentaires, souvent liée à une peur de grossir ou à une perception déformée du corps.'],
  ['Crises de boulimie', 'Épisodes d’ingestion rapide de grandes quantités de nourriture avec sentiment de perte de contrôle, parfois suivis de vomissements provoqués.'],
  // --- Lot 73
  ['Troubles de l’érection', 'Difficulté persistante à obtenir ou maintenir une érection suffisante pour un rapport sexuel satisfaisant.'],
  ['Baisse de la libido', 'Diminution persistante du désir et de l’intérêt sexuels.'],
  ['Difficultés scolaires', 'Résultats scolaires insuffisants, redoublements, difficultés à lire, écrire ou calculer, absentéisme.'],
  ['Repli sur soi', 'Retrait des relations sociales et familiales, isolement, perte d’intérêt pour les activités habituelles.'],
  ['Automutilations', 'Lésions volontaires infligées à son propre corps (coupures, brûlures, coups), souvent pour soulager une détresse émotionnelle.'],
  ['États de transe ou de possession', 'Épisodes d’altération de la conscience et de l’identité, vécus comme une prise de contrôle par un esprit ou une force extérieure.'],
  // --- Lot 74
  ['Incontinence fécale', 'Émission involontaire de selles dans les vêtements ou en des lieux inappropriés, au-delà de l’âge de la propreté (encoprésie).'],
  ['Mutisme', 'Absence de parole chez une personne capable de parler, généralisée ou limitée à certaines situations.'],
  ['Angoisse de séparation', 'Anxiété excessive lors de la séparation d’avec les parents ou le domicile (pleurs, plaintes, refus de dormir seul ou d’aller à l’école).'],
  ['Comportements agressifs', 'Agressions physiques ou verbales répétées envers les personnes ou les animaux, destructions, colères violentes.'],
  ['Cauchemars et terreurs nocturnes', 'Rêves effrayants réveillant l’enfant (cauchemars) ou épisodes de cris et d’agitation en début de nuit sans réveil complet ni souvenir (terreurs nocturnes).'],
  ['Somnolence', 'Tendance anormale à s’endormir ou difficulté à rester éveillé pendant la journée.'],
  // --- Lot 75
  ['Euphorie', 'Sentiment intense et inapproprié de bien-être, d’excitation ou de toute-puissance (intoxication, manie).'],
  ['Désinhibition', 'Perte du contrôle des comportements sociaux : propos ou gestes inadaptés, familiarité excessive, impulsivité.'],
  ['Apathie', 'Perte de motivation et d’initiative, indifférence affective, réduction des activités spontanées.'],
  ['Stupeur', 'État d’immobilité et d’absence de réaction aux stimulations, sans perte de conscience vraie (catatonie, dépression sévère).'],
  // --- Lot 76
  ['Cataplexie', 'Perte brutale et brève du tonus musculaire, conscience conservée, déclenchée par une émotion (rire, surprise, colère), évocatrice de narcolepsie.'],
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
  // --- Lot 29
  {
    dci: 'Immunoglobulines humaines polyvalentes (IgIV)',
    slug: 'immunoglobulines-humaines-polyvalentes',
    classe: 'Immunoglobulines humaines normales',
    groupe: 'Immunologie',
    mecanisme:
      'Immunomodulation : neutralisation des auto-anticorps, blocage des récepteurs Fc, inhibition du complément.',
    indications:
      'Syndrome de Guillain-Barré, purpura thrombopénique immunologique, maladie de Kawasaki, déficits immunitaires primitifs.',
    posologie: 'Guillain-Barré : 0,4 g/kg/j IV pendant 5 jours (total 2 g/kg).',
    effets_indesirables:
      'Céphalées, fièvre, frissons, réactions à la perfusion, insuffisance rénale, thromboses, méningite aseptique.',
    precautions:
      'Perfusion lente, hydratation ; prudence en cas d’insuffisance rénale, de risque thrombotique ou de déficit en IgA ; coût élevé et disponibilité limitée.',
  },
  // --- Lot 30
  {
    dci: 'Lithium',
    slug: 'lithium',
    classe: 'Thymorégulateurs',
    groupe: 'Psychiatrie',
    mecanisme:
      'Action sur les voies de signalisation intracellulaires (inositol, GSK-3) : stabilisation de l’humeur, effet antisuicide.',
    indications: 'Trouble bipolaire : traitement de l’épisode maniaque et prévention des rechutes.',
    posologie: 'Adulte : 400 à 1 200 mg/j en 1 à 2 prises, adaptés à la lithémie (0,6–1,0 mmol/L).',
    effets_indesirables:
      'Tremblements, polyurie, prise de poids, hypothyroïdie, atteinte rénale ; intoxication (diarrhée, ataxie, confusion, convulsions).',
    precautions:
      'Lithémie, créatinine et TSH réguliers ; marge thérapeutique étroite ; interactions (AINS, diurétiques, IEC) ; éviter au 1er trimestre de la grossesse ; uniquement si surveillance biologique possible.',
  },
  {
    dci: 'Sertraline',
    slug: 'sertraline',
    classe: 'Inhibiteurs sélectifs de la recapture de la sérotonine (ISRS)',
    groupe: 'Psychiatrie',
    mecanisme: 'Inhibition de la recapture de la sérotonine.',
    indications:
      'Dépression, troubles anxieux, état de stress post-traumatique ; ISRS de choix pendant la grossesse et l’allaitement.',
    posologie:
      'Adulte : 50 mg/j, augmenter si besoin jusqu’à 200 mg/j ; poursuivre 6 à 12 mois après la rémission.',
    effets_indesirables:
      'Nausées, troubles digestifs, céphalées, insomnie, dysfonction sexuelle ; levée d’inhibition et idées suicidaires en début de traitement chez le sujet jeune.',
    precautions:
      'Surveillance du risque suicidaire en début de traitement ; virage maniaque chez le bipolaire ; arrêt progressif ; syndrome sérotoninergique avec d’autres sérotoninergiques.',
  },
  {
    dci: 'Fluphénazine',
    slug: 'fluphenazine',
    classe: 'Antipsychotiques de première génération (phénothiazines)',
    groupe: 'Psychiatrie',
    mecanisme: 'Antagonisme des récepteurs dopaminergiques D2.',
    indications:
      'Schizophrénie et troubles psychotiques chroniques : traitement d’entretien à action prolongée en cas de mauvaise observance.',
    posologie:
      'Décanoate : 12,5 à 25 mg IM toutes les 2 à 4 semaines (dose test de 12,5 mg), jusqu’à 100 mg selon la réponse.',
    effets_indesirables:
      'Syndromes extrapyramidaux (dystonie, parkinsonisme, akathisie), dyskinésies tardives, sédation, syndrome malin des neuroleptiques.',
    precautions:
      'Dose test initiale ; correcteur anticholinergique (trihexyphénidyle) si syndrome extrapyramidal ; prudence chez le sujet âgé et l’épileptique.',
  },
  {
    dci: 'Dantrolène',
    slug: 'dantrolene',
    classe: 'Myorelaxants à action directe',
    groupe: 'Anesthésie-réanimation',
    mecanisme:
      'Inhibition de la libération du calcium par le réticulum sarcoplasmique du muscle squelettique.',
    indications: 'Hyperthermie maligne peranesthésique ; syndrome malin des neuroleptiques sévère.',
    posologie: '1 à 2,5 mg/kg IV, à répéter jusqu’à 10 mg/kg/j selon la réponse.',
    effets_indesirables: 'Faiblesse musculaire, hépatotoxicité, phlébite au point d’injection.',
    precautions:
      'Disponibilité limitée ; surveillance hépatique ; associer le refroidissement et la réanimation.',
  },
  // --- Lot 31
  {
    dci: 'Méthylphénidate',
    slug: 'methylphenidate',
    classe: 'Psychostimulants',
    groupe: 'Psychiatrie',
    mecanisme: 'Inhibition de la recapture de la dopamine et de la noradrénaline.',
    indications:
      'Trouble déficit de l’attention avec hyperactivité (enfant ≥ 6 ans, adolescent, adulte), après échec ou en complément des mesures psychosociales.',
    posologie:
      'Enfant : 0,3 mg/kg/j en 1 à 2 prises (matin, midi), à augmenter progressivement, maximum 60 mg/j.',
    effets_indesirables:
      'Perte d’appétit, ralentissement de la croissance, insomnie, céphalées, douleurs abdominales, tachycardie, hypertension.',
    precautions:
      'Prescription et suivi spécialisés ; surveillance du poids, de la taille, de la tension ; risque de mésusage ; disponibilité limitée.',
  },
  {
    dci: 'Fomépizole',
    slug: 'fomepizole',
    classe: 'Antidotes (inhibiteurs de l’alcool déshydrogénase)',
    groupe: 'Toxicologie',
    mecanisme:
      'Inhibition de l’alcool déshydrogénase : bloque la transformation du méthanol et de l’éthylène glycol en métabolites toxiques.',
    indications: 'Intoxication au méthanol (alcool frelaté) et à l’éthylène glycol.',
    posologie:
      'Dose de charge 15 mg/kg IV, puis 10 mg/kg toutes les 12 heures (augmenter pendant la dialyse).',
    effets_indesirables: 'Céphalées, nausées, vertiges, réactions au point d’injection.',
    precautions:
      'Coût élevé, rarement disponible : l’éthanol per os ou IV est l’alternative ; associer hémodialyse et bicarbonate selon la gravité.',
  },
  {
    dci: 'Donépézil',
    slug: 'donepezil',
    classe: 'Inhibiteurs de l’acétylcholinestérase',
    groupe: 'Neurologie',
    mecanisme: 'Augmentation de l’acétylcholine cérébrale par inhibition de sa dégradation.',
    indications: 'Maladie d’Alzheimer légère à modérée (bénéfice symptomatique modeste).',
    posologie: '5 mg le soir pendant 4 à 6 semaines, puis 10 mg/j si bien toléré.',
    effets_indesirables: 'Nausées, diarrhée, bradycardie, syncopes, crampes, cauchemars.',
    precautions: 'ECG si bradycardie ou troubles de conduction ; réévaluer régulièrement le bénéfice.',
  },
  {
    dci: 'Naltrexone',
    slug: 'naltrexone',
    classe: 'Antagonistes des récepteurs opioïdes',
    groupe: 'Addictologie',
    mecanisme: 'Blocage des récepteurs opioïdes : réduction de l’envie et du plaisir lié à l’alcool.',
    indications:
      'Aide au maintien de l’abstinence ou à la réduction de la consommation dans la dépendance à l’alcool ; dépendance aux opioïdes après sevrage.',
    posologie: '50 mg/j per os pendant 3 à 6 mois, avec un accompagnement psychosocial.',
    effets_indesirables: 'Nausées, céphalées, vertiges, insomnie ; hépatotoxicité à forte dose.',
    precautions:
      'Contre-indiqué chez le patient sous opioïdes (sevrage brutal) et en cas d’hépatite aiguë ou d’insuffisance hépatique sévère.',
  },
  // --- Lot 32
  {
    dci: 'Carbimazole',
    slug: 'carbimazole',
    classe: 'Antithyroïdiens de synthèse',
    groupe: 'Endocrinologie',
    mecanisme:
      'Prodrogue du thiamazole : inhibition de la thyroperoxydase et de la synthèse des hormones thyroïdiennes.',
    indications:
      'Hyperthyroïdie (maladie de Basedow, goitre multinodulaire toxique, adénome toxique), préparation à la chirurgie ou à l’iode radioactif.',
    posologie:
      'Attaque : 20 à 40 mg/j (0,5 mg/kg/j) pendant 4 à 6 semaines, puis dose dégressive 5 à 15 mg/j ; durée totale 12 à 18 mois dans la maladie de Basedow.',
    effets_indesirables: 'Agranulocytose (rare, grave), éruptions, prurit, hépatite, arthralgies.',
    precautions:
      'Arrêt immédiat et NFS en cas de fièvre ou de mal de gorge ; éviter au 1er trimestre de la grossesse (préférer le propylthiouracile).',
  },
  {
    dci: 'Propylthiouracile',
    slug: 'propylthiouracile',
    classe: 'Antithyroïdiens de synthèse',
    groupe: 'Endocrinologie',
    mecanisme: 'Inhibition de la thyroperoxydase et de la conversion périphérique de T4 en T3.',
    indications: 'Hyperthyroïdie au 1er trimestre de la grossesse ; crise aiguë thyrotoxique.',
    posologie: 'Adulte : 300 à 450 mg/j en 3 prises ; crise thyrotoxique : 200 mg toutes les 4 heures.',
    effets_indesirables: 'Hépatotoxicité sévère, agranulocytose, éruptions.',
    precautions: 'Surveillance hépatique et NFS ; relais par carbimazole après le 1er trimestre.',
  },
  {
    dci: 'Fludrocortisone',
    slug: 'fludrocortisone',
    classe: 'Minéralocorticoïdes',
    groupe: 'Endocrinologie',
    mecanisme: 'Action minéralocorticoïde : rétention de sodium et excrétion de potassium.',
    indications:
      'Insuffisance surrénalienne primaire (maladie d’Addison), en association à l’hydrocortisone.',
    posologie: '50 à 100 µg/j per os, adaptés à la tension et à la kaliémie.',
    effets_indesirables: 'Œdèmes, HTA, hypokaliémie.',
    precautions:
      'Surveiller tension artérielle et kaliémie ; inutile en phase aiguë si hydrocortisone ≥ 50 mg/j.',
  },
  {
    dci: 'Flumazénil',
    slug: 'flumazenil',
    classe: 'Antidotes (antagonistes des benzodiazépines)',
    groupe: 'Toxicologie',
    mecanisme: 'Antagonisme compétitif des récepteurs aux benzodiazépines.',
    indications:
      'Intoxication isolée aux benzodiazépines avec dépression respiratoire ; réversion d’une sédation.',
    posologie:
      '0,2 mg IV en 15 secondes, puis 0,1 mg par minute jusqu’à réveil (maximum 1 mg) ; durée d’action courte (re-sédation).',
    effets_indesirables: 'Convulsions, agitation, syndrome de sevrage, troubles du rythme.',
    precautions:
      'Contre-indiqué en cas d’intoxication associée aux tricycliques, d’épilepsie traitée par benzodiazépines ou de dépendance ; surveillance prolongée.',
  },
  // --- Lot 33
  {
    dci: 'Rifaximine',
    slug: 'rifaximine',
    classe: 'Antibiotiques intestinaux non absorbés (rifamycines)',
    groupe: 'Gastro-entérologie',
    mecanisme: 'Antibiotique peu absorbé réduisant la flore intestinale productrice d’ammoniaque.',
    indications:
      'Prévention des récidives d’encéphalopathie hépatique, en association au lactulose ; diarrhée du voyageur non invasive.',
    posologie:
      'Encéphalopathie hépatique : 550 mg 2 fois par jour (ou 400 mg 3 fois par jour), au long cours.',
    effets_indesirables: 'Nausées, ballonnements, rarement colite à Clostridioides difficile.',
    precautions: 'Disponibilité et coût limités ; ne pas utiliser dans les diarrhées fébriles ou sanglantes.',
  },
  // --- Lot 34
  {
    dci: 'Facteur VIII de coagulation',
    slug: 'facteur-viii',
    classe: 'Facteurs de coagulation',
    groupe: 'Hématologie',
    mecanisme: 'Remplacement du facteur VIII déficitaire (concentré plasmatique ou recombinant).',
    indications: 'Hémophilie A : traitement des saignements et prophylaxie.',
    posologie:
      '1 UI/kg élève l’activité de 2 % : hémarthrose 20–40 UI/kg ; hémorragie grave ou chirurgie 50 UI/kg puis 25 UI/kg toutes les 8–12 h selon l’activité mesurée.',
    effets_indesirables: 'Apparition d’inhibiteurs (anticorps), réactions allergiques.',
    precautions:
      'Disponibilité limitée (programmes de dons humanitaires) ; à défaut, cryoprécipité ou plasma frais congelé.',
  },
  {
    dci: 'Facteur IX de coagulation',
    slug: 'facteur-ix',
    classe: 'Facteurs de coagulation',
    groupe: 'Hématologie',
    mecanisme: 'Remplacement du facteur IX déficitaire (concentré plasmatique ou recombinant).',
    indications: 'Hémophilie B : traitement des saignements et prophylaxie.',
    posologie:
      '1 UI/kg élève l’activité d’environ 1 % : hémarthrose 30–50 UI/kg ; hémorragie grave ou chirurgie 80–100 UI/kg puis selon l’activité mesurée (toutes les 12–24 h).',
    effets_indesirables: 'Inhibiteurs, réactions allergiques, thromboses (concentrés plasmatiques).',
    precautions: 'À défaut : plasma frais congelé (pas de cryoprécipité, qui ne contient pas de facteur IX).',
  },
  {
    dci: 'Desmopressine',
    slug: 'desmopressine',
    classe: 'Analogues de la vasopressine',
    groupe: 'Hématologie',
    mecanisme:
      'Libération du facteur VIII et du facteur Willebrand stockés dans l’endothélium ; effet antidiurétique.',
    indications:
      'Hémophilie A mineure et maladie de Willebrand de type 1 (saignements mineurs, gestes) ; diabète insipide ; énurésie.',
    posologie:
      'Hémostase : 0,3 µg/kg IV en 30 min (ou spray nasal), répétable à 12–24 h (tachyphylaxie après 2–3 doses).',
    effets_indesirables: 'Hyponatrémie (restreindre les boissons 24 h), céphalées, flush.',
    precautions:
      'Inefficace dans l’hémophilie B et l’hémophilie A sévère ; prudence chez l’enfant de moins de 2 ans et le coronarien.',
  },
  {
    dci: 'Diéthylcarbamazine',
    slug: 'diethylcarbamazine',
    classe: 'Antifilariens',
    groupe: 'Antiparasitaires',
    mecanisme: 'Action microfilaricide et partiellement macrofilaricide sur Wuchereria, Brugia et Loa loa.',
    indications: 'Filariose lymphatique (hors zones d’onchocercose) ; loase avec microfilarémie faible.',
    posologie:
      'Filariose lymphatique : 6 mg/kg/j pendant 12 jours, ou 6 mg/kg dose unique en traitement de masse (IDA, hors zones d’onchocercose et de loase). Loase : doses progressives jusqu’à 8–10 mg/kg/j pendant 21 jours, seulement si microfilarémie < 2 000 mf/mL.',
    effets_indesirables:
      'Fièvre, céphalées, prurit, réactions de Mazzotti ; encéphalopathie si forte microfilarémie à Loa loa.',
    precautions:
      'Contre-indiquée en cas d’onchocercose (aggravation oculaire) et de forte microfilarémie à Loa loa ; grossesse.',
  },
  {
    dci: 'Primaquine',
    slug: 'primaquine',
    classe: 'Antipaludiques (8-aminoquinoléines)',
    groupe: 'Antiparasitaires',
    mecanisme:
      'Action sur les hypnozoïtes hépatiques (P. vivax, P. ovale) et les gamétocytes de P. falciparum.',
    indications:
      'Cure radicale du paludisme à P. vivax ou ovale ; dose unique faible contre la transmission de P. falciparum ; pneumocystose (avec clindamycine).',
    posologie:
      'Gamétocytocide (P. falciparum) : 0,25 mg/kg dose unique ; cure radicale : 0,25–0,5 mg/kg/j pendant 14 jours (G6PD normal) ; pneumocystose : 30 mg base/j pendant 21 jours avec clindamycine.',
    effets_indesirables: 'Hémolyse en cas de déficit en G6PD, troubles digestifs, méthémoglobinémie.',
    precautions:
      'Tester le G6PD avant la cure radicale ; contre-indiquée pendant la grossesse et chez le nourrisson de moins de 6 mois (cure radicale).',
  },
  // --- Lot 35
  {
    dci: 'Oseltamivir',
    slug: 'oseltamivir',
    classe: 'Inhibiteurs de la neuraminidase',
    groupe: 'Antiviraux',
    mecanisme: 'Inhibition de la neuraminidase des virus grippaux A et B : bloque la libération des virions.',
    indications:
      'Grippe grave ou chez les patients à risque de complications (grossesse, enfant < 2 ans, sujet âgé, maladies chroniques, immunodépression) ; prophylaxie post-exposition selon les recommandations.',
    posologie:
      'Adulte : 75 mg 2 fois par jour pendant 5 jours. Enfant ≥ 1 an : ≤ 15 kg 30 mg ; 15–23 kg 45 mg ; 23–40 kg 60 mg ; > 40 kg 75 mg, 2 fois par jour 5 jours ; nourrisson < 1 an : 3 mg/kg 2 fois par jour.',
    effets_indesirables: 'Nausées, vomissements, céphalées ; rares troubles neuropsychiatriques.',
    precautions:
      'Débuter le plus tôt possible (idéalement < 48 h) ; adapter à la fonction rénale ; utilisable pendant la grossesse.',
  },
  // --- Lot 36
  {
    dci: 'Acide alendronique',
    slug: 'acide-alendronique',
    classe: 'Bisphosphonates',
    groupe: 'Rhumatologie',
    mecanisme: 'Inhibition de la résorption osseuse par les ostéoclastes.',
    indications:
      'Ostéoporose post-ménopausique, masculine et cortisonique ; prévention secondaire après une fracture de fragilité.',
    posologie:
      '70 mg une fois par semaine, à jeun, avec un grand verre d’eau, en restant debout ou assis 30 minutes ; durée 5 ans puis réévaluation.',
    effets_indesirables:
      'Œsophagite, douleurs digestives ; rares ostéonécroses de la mâchoire et fractures atypiques du fémur.',
    precautions:
      'Corriger la carence en vitamine D et en calcium avant ; contre-indiqué si DFG < 35 mL/min, troubles de la vidange œsophagienne ; soins dentaires préalables.',
  },
  {
    dci: 'Azathioprine',
    slug: 'azathioprine',
    classe: 'Immunosuppresseurs (antimétabolites)',
    groupe: 'Immunologie',
    mecanisme: 'Inhibition de la synthèse des purines et de la prolifération lymphocytaire.',
    indications:
      'Lupus (traitement d’entretien, épargne cortisonique), hépatite auto-immune, vascularites, maladies inflammatoires de l’intestin.',
    posologie: '1 à 2,5 mg/kg/j per os, en débutant à 50 mg/j avec augmentation progressive.',
    effets_indesirables:
      'Leucopénie, thrombopénie, hépatite, pancréatite, infections, lymphomes à long terme.',
    precautions:
      'NFS et bilan hépatique réguliers ; interaction majeure avec l’allopurinol (réduire la dose de 75 %) ; utilisable pendant la grossesse si nécessaire.',
  },
  {
    dci: 'Calcipotriol',
    slug: 'calcipotriol',
    classe: 'Analogues de la vitamine D (topiques)',
    groupe: 'Dermatologie',
    mecanisme: 'Freine la prolifération et favorise la différenciation des kératinocytes.',
    indications: 'Psoriasis en plaques, seul ou associé au bétaméthasone.',
    posologie: '1 à 2 applications par jour sur les plaques, maximum 100 g par semaine (adulte).',
    effets_indesirables: 'Irritation cutanée ; hypercalcémie si surdosage.',
    precautions: 'Éviter le visage et les plis ; ne pas dépasser la surface et les quantités recommandées.',
  },
  // --- Lot 37
  {
    dci: 'Valaciclovir',
    slug: 'valaciclovir',
    classe: 'Antiviraux (analogues nucléosidiques)',
    groupe: 'Antiviraux',
    mecanisme:
      'Prodrogue de l’aciclovir (meilleure biodisponibilité) : inhibition de l’ADN polymérase des herpèsvirus.',
    indications: 'Zona, herpès génital et labial (primo-infection, récurrences, traitement suppressif).',
    posologie:
      'Zona : 1 g 3 fois par jour pendant 7 jours ; herpès génital primo-infection 1 g 2 fois par jour 7–10 jours, récurrence 500 mg 2 fois par jour 3 jours ; traitement suppressif 500 mg/j.',
    effets_indesirables:
      'Céphalées, nausées ; neurotoxicité et insuffisance rénale en cas de surdosage chez l’insuffisant rénal.',
    precautions:
      'Adapter à la fonction rénale ; hydratation ; souvent moins disponible et plus coûteux que l’aciclovir.',
  },
  {
    dci: 'Peroxyde de benzoyle',
    slug: 'peroxyde-de-benzoyle',
    classe: 'Antiacnéiques topiques',
    groupe: 'Dermatologie',
    mecanisme: 'Action antibactérienne sur Cutibacterium acnes et légèrement comédolytique.',
    indications:
      'Acné inflammatoire légère à modérée, seul ou associé à un rétinoïde topique ou à un antibiotique.',
    posologie:
      'Gel à 2,5–5 % en couche mince 1 fois par jour le soir sur les zones atteintes, à augmenter selon la tolérance.',
    effets_indesirables: 'Irritation, sécheresse, décoloration des textiles et des cheveux.',
    precautions: 'Éviter les yeux et les muqueuses ; photoprotection ; utilisable pendant la grossesse.',
  },
  // --- Lot 38
  {
    dci: 'Poractant alfa',
    slug: 'poractant-alfa',
    classe: 'Surfactants pulmonaires',
    groupe: 'Néonatologie',
    mecanisme:
      'Surfactant d’origine porcine : abaisse la tension superficielle alvéolaire et prévient le collapsus des alvéoles.',
    indications: 'Maladie des membranes hyalines du prématuré (traitement curatif, parfois prophylactique).',
    posologie:
      '200 mg/kg (2,5 mL/kg) en instillation intratrachéale, puis 100 mg/kg à 12 h si besoin (maximum 400 mg/kg au total).',
    effets_indesirables:
      'Bradycardie et désaturation transitoires pendant l’instillation, hémorragie pulmonaire, pneumothorax.',
    precautions:
      'Réservé aux unités de néonatologie disposant d’oxygène, de CPAP ou de ventilation et d’un personnel formé ; technique INSURE ou LISA.',
  },
  {
    dci: 'Immunoglobulines anti-HBs',
    slug: 'immunoglobulines-anti-hbs',
    classe: 'Immunoglobulines spécifiques',
    groupe: 'Vaccins et sérums',
    mecanisme:
      'Anticorps spécifiques contre l’antigène de surface du virus de l’hépatite B : immunisation passive immédiate.',
    indications:
      'Nouveau-né de mère AgHBs positive (avec le vaccin dans les 12–24 h) ; exposition au sang chez un sujet non immunisé.',
    posologie:
      'Nouveau-né : 100 à 200 UI en IM (cuisse opposée au vaccin) dans les 12 heures suivant la naissance ; adulte exposé : 500 UI IM.',
    effets_indesirables: 'Douleur au point d’injection, rares réactions allergiques.',
    precautions:
      'Disponibilité limitée : la vaccination contre l’hépatite B à la naissance reste prioritaire et ne doit jamais être retardée.',
  },
  // --- Lot 41
  {
    dci: 'Valganciclovir',
    slug: 'valganciclovir',
    classe: 'Antiviraux (analogues nucléosidiques)',
    groupe: 'Antiviraux',
    mecanisme: 'Prodrogue du ganciclovir : inhibition de l’ADN polymérase du cytomégalovirus.',
    indications:
      'Infection congénitale symptomatique à CMV du nouveau-né (amélioration du pronostic auditif et neurologique) ; rétinite à CMV chez le patient VIH.',
    posologie:
      'Nouveau-né : 16 mg/kg per os 2 fois par jour pendant 6 mois, débuté dans le premier mois de vie (centre spécialisé).',
    effets_indesirables: 'Neutropénie (fréquente), thrombopénie, anémie, toxicité hépatique.',
    precautions:
      'NFS hebdomadaire puis mensuelle ; adapter à la fonction rénale ; peu disponible : traitement spécialisé.',
  },
  // --- Lot 43
  {
    dci: 'Acide ursodésoxycholique',
    slug: 'acide-ursodesoxycholique',
    classe: 'Acides biliaires',
    groupe: 'Hépato-gastro-entérologie',
    mecanisme:
      'Acide biliaire hydrophile qui augmente le flux biliaire et remplace les acides biliaires toxiques.',
    indications:
      'Cholestases chroniques (atrésie des voies biliaires après intervention de Kasai, cholangite biliaire primitive) ; dissolution de petits calculs cholestéroliques.',
    posologie: 'Enfant : 10–20 mg/kg/j en 2 à 3 prises. Adulte : 10–15 mg/kg/j.',
    effets_indesirables: 'Diarrhée, douleurs abdominales, prurit transitoire.',
    precautions:
      'Contre-indiqué en cas d’obstruction complète des voies biliaires ou de cholécystite aiguë ; peu disponible.',
  },
  // --- Lot 44
  {
    dci: 'Mercaptopurine',
    slug: 'mercaptopurine',
    classe: 'Antimétabolites (analogues des purines)',
    groupe: 'Oncologie',
    mecanisme: 'Analogue des purines qui inhibe la synthèse des acides nucléiques des cellules en division.',
    indications:
      'Leucémie aiguë lymphoblastique (traitement d’entretien) ; maladies inflammatoires chroniques de l’intestin.',
    posologie:
      'LAL, entretien : 50–75 mg/m²/j per os le soir, ajusté selon la numération (protocole du centre d’oncologie).',
    effets_indesirables: 'Myélosuppression, hépatotoxicité, mucite, pancréatite.',
    precautions:
      'NFS régulière ; réduire la dose avec l’allopurinol ; déficit en TPMT ; manipulation des cytotoxiques.',
  },
  {
    dci: 'Dactinomycine',
    slug: 'dactinomycine',
    classe: 'Antibiotiques cytotoxiques',
    groupe: 'Oncologie',
    mecanisme: 'Intercalation dans l’ADN et inhibition de la synthèse de l’ARN.',
    indications: 'Néphroblastome (tumeur de Wilms), rhabdomyosarcome, tumeurs trophoblastiques.',
    posologie: 'Néphroblastome : 45 µg/kg IV (maximum 2 mg) selon le protocole SIOP ou AHOP.',
    effets_indesirables:
      'Myélosuppression, nausées, mucite, maladie veino-occlusive hépatique, nécrose en cas d’extravasation.',
    precautions: 'Réservée aux centres d’oncologie pédiatrique ; vésicant.',
  },
  {
    dci: 'Carboplatine',
    slug: 'carboplatine',
    classe: 'Sels de platine',
    groupe: 'Oncologie',
    mecanisme: 'Agent alkylant formant des ponts dans l’ADN.',
    indications: 'Rétinoblastome, neuroblastome, tumeurs germinales, cancers de l’ovaire et du poumon.',
    posologie: 'Selon le protocole (dose calculée sur la surface corporelle ou la fonction rénale).',
    effets_indesirables:
      'Myélosuppression (thrombopénie), nausées, ototoxicité, néphrotoxicité moindre que le cisplatine.',
    precautions: 'Centres d’oncologie ; adapter à la fonction rénale ; audiogramme.',
  },
  {
    dci: 'Étoposide',
    slug: 'etoposide',
    classe: 'Inhibiteurs de la topo-isomérase II',
    groupe: 'Oncologie',
    mecanisme: 'Inhibition de la topo-isomérase II, cassures de l’ADN.',
    indications:
      'Rétinoblastome, neuroblastome, leucémies, lymphomes, tumeurs germinales, cancer du poumon à petites cellules.',
    posologie: 'Selon le protocole d’oncologie (IV ou per os).',
    effets_indesirables:
      'Myélosuppression, alopécie, mucite, hypotension si perfusion rapide, leucémies secondaires.',
    precautions: 'Centres d’oncologie ; perfusion lente.',
  },
  {
    dci: 'Déféroxamine',
    slug: 'deferoxamine',
    classe: 'Chélateurs du fer',
    groupe: 'Hématologie',
    mecanisme: 'Chélation du fer libre et du fer de la ferritine, éliminé dans les urines et la bile.',
    indications:
      'Surcharge en fer post-transfusionnelle (thalassémie, drépanocytose) ; intoxication aiguë au fer.',
    posologie:
      'Surcharge : 20–40 mg/kg/j en perfusion sous-cutanée lente de 8 à 12 h, 5 à 7 jours par semaine.',
    effets_indesirables:
      'Réactions au point d’injection, troubles visuels et auditifs, retard de croissance à forte dose, infections à Yersinia.',
    precautions:
      'Débuter quand la ferritine dépasse 1 000 µg/L ; contrôles ophtalmologiques et auditifs ; coûteux.',
  },
  {
    dci: 'Déférasirox',
    slug: 'deferasirox',
    classe: 'Chélateurs du fer',
    groupe: 'Hématologie',
    mecanisme: 'Chélateur oral du fer, éliminé dans les selles.',
    indications:
      'Surcharge en fer post-transfusionnelle chronique (thalassémie, drépanocytose) à partir de 2 ans.',
    posologie: '20–30 mg/kg/j per os en une prise (comprimés dispersibles ; dose ajustée sur la ferritine).',
    effets_indesirables: 'Troubles digestifs, éruption, élévation de la créatinine et des transaminases.',
    precautions: 'Surveillance mensuelle de la créatinine et des transaminases ; peu disponible.',
  },
  // --- Lot 45
  {
    dci: 'Triptoréline',
    slug: 'triptoreline',
    classe: 'Agonistes de la GnRH',
    groupe: 'Hormones et corticoïdes',
    mecanisme:
      'Agoniste de la GnRH qui, administré en continu, désensibilise l’hypophyse et supprime la sécrétion de LH, FSH et des stéroïdes sexuels.',
    indications:
      'Puberté précoce centrale ; cancer de la prostate ; endométriose, fibromes (préparation chirurgicale).',
    posologie:
      'Puberté précoce : 3 mg IM toutes les 4 semaines (forme mensuelle) ou 11,25 mg tous les 3 mois (endocrinologie pédiatrique).',
    effets_indesirables:
      'Réaction au point d’injection, céphalées, bouffées de chaleur, saignement de privation au début.',
    precautions: 'Prescription spécialisée ; surveillance clinique et de l’âge osseux.',
  },
  {
    dci: 'Somatropine',
    slug: 'somatropine',
    classe: 'Hormone de croissance recombinante',
    groupe: 'Hormones et corticoïdes',
    mecanisme:
      'Hormone de croissance humaine recombinante stimulant la production d’IGF-1 et la croissance du cartilage de conjugaison.',
    indications:
      'Déficit en hormone de croissance, syndrome de Turner, insuffisance rénale chronique de l’enfant, enfants nés petits pour l’âge gestationnel sans rattrapage.',
    posologie: '0,025–0,05 mg/kg/j en SC le soir (selon l’indication, endocrinologie pédiatrique).',
    effets_indesirables: 'Céphalées, hypertension intracrânienne bénigne, épiphysiolyse, hyperglycémie.',
    precautions: 'Très coûteuse et peu disponible ; contre-indiquée en cas de tumeur évolutive.',
  },
  // --- Lot 46
  {
    dci: 'Vigabatrin',
    slug: 'vigabatrin',
    classe: 'Antiépileptiques (inhibiteurs de la GABA-transaminase)',
    groupe: 'Neurologie',
    mecanisme:
      'Inhibition irréversible de la GABA-transaminase, augmentant la concentration cérébrale de GABA.',
    indications:
      'Spasmes infantiles (syndrome de West), en particulier dans la sclérose tubéreuse de Bourneville ; épilepsies focales réfractaires.',
    posologie:
      'Spasmes infantiles : 50 mg/kg/j en 2 prises, augmenté jusqu’à 100–150 mg/kg/j selon la réponse (neurologie pédiatrique).',
    effets_indesirables:
      'Rétrécissement concentrique irréversible du champ visuel (traitements prolongés), somnolence, irritabilité, prise de poids.',
    precautions:
      'Durée la plus courte possible ; surveillance ophtalmologique ; arrêt progressif ; peu disponible.',
  },
  // --- Lot 49
  {
    dci: 'Lamotrigine',
    slug: 'lamotrigine',
    classe: 'Antiépileptiques (bloqueurs des canaux sodiques)',
    groupe: 'Neurologie',
    mecanisme: 'Blocage des canaux sodiques voltage-dépendants et réduction de la libération de glutamate.',
    indications:
      'Épilepsies focales et généralisées, en particulier chez la femme en âge de procréer et pendant la grossesse (faible risque malformatif) ; trouble bipolaire (prévention des épisodes dépressifs).',
    posologie:
      'Adulte : 25 mg/j pendant 2 semaines, puis 50 mg/j pendant 2 semaines, puis augmentation progressive jusqu’à 100–200 mg/j en 1–2 prises (doses réduites de moitié avec le valproate, augmentées avec les inducteurs enzymatiques).',
    effets_indesirables:
      'Éruptions cutanées (dont syndrome de Stevens-Johnson, surtout si titration rapide ou association au valproate), vertiges, diplopie, céphalées.',
    precautions:
      'Titration lente obligatoire ; arrêt immédiat en cas d’éruption ; les taux baissent pendant la grossesse (ajustement) et avec les contraceptifs œstroprogestatifs.',
  },
  // --- Lot 50
  {
    dci: 'Spiramycine',
    slug: 'spiramycine',
    classe: 'Macrolides',
    groupe: 'Antibiotiques',
    mecanisme:
      'Inhibition de la synthèse protéique bactérienne ; concentration placentaire élevée limitant le passage de Toxoplasma gondii au fœtus.',
    indications:
      'Toxoplasmose acquise pendant la grossesse (prévention de la transmission fœtale) ; infections ORL et bronchopulmonaires.',
    posologie:
      'Toxoplasmose gravidique : 3 MUI per os 3 fois par jour (9 MUI/j) jusqu’à l’accouchement ou jusqu’au relais par pyriméthamine-sulfadiazine si infection fœtale prouvée.',
    effets_indesirables: 'Troubles digestifs, réactions cutanées, rares paresthésies.',
    precautions: 'Peu disponible ; n’a pas d’effet sur un fœtus déjà infecté (relais spécialisé).',
  },
  // --- Lot 59
  {
    dci: 'Oxaliplatine',
    slug: 'oxaliplatine',
    classe: 'Sels de platine',
    groupe: 'Oncologie',
    mecanisme: 'Agent alkylant formant des adduits avec l’ADN, bloquant la réplication et la transcription.',
    indications:
      'Cancer colorectal (adjuvant après chirurgie des stades III et métastatique, protocoles FOLFOX, CAPOX), cancers gastriques et pancréatiques.',
    posologie:
      'Selon le protocole d’oncologie (FOLFOX : 85 mg/m² IV toutes les 2 semaines ; CAPOX : 130 mg/m² toutes les 3 semaines).',
    effets_indesirables:
      'Neuropathie périphérique sensitive (aggravée par le froid), myélosuppression, nausées, diarrhée, réactions d’hypersensibilité.',
    precautions:
      'Réservé aux centres d’oncologie ; éviter le froid pendant et après la perfusion ; surveillance neurologique et de la NFS.',
  },
  // --- Lot 67
  {
    dci: 'Suxaméthonium',
    slug: 'suxamethonium',
    classe: 'Curare dépolarisant',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Agoniste des récepteurs nicotiniques de la plaque motrice, entraînant une dépolarisation prolongée (fasciculations) puis une paralysie musculaire brève.',
    indications: 'Intubation en séquence rapide (estomac plein, urgence, césarienne) : délai d’action de 60 s et durée de 5–10 min.',
    posologie: '1 mg/kg IV (1–1,5 mg/kg) après l’hypnotique ; enfant 1–2 mg/kg.',
    effets_indesirables: 'Hyperkaliémie, bradycardie, myalgies, hypertension intraoculaire, hyperthermie maligne, curarisation prolongée (déficit en pseudocholinestérase), anaphylaxie.',
    precautions: 'Contre-indiqué en cas d’hyperkaliémie, de brûlures ou de traumatismes étendus après 48 h, de myopathies, d’antécédent d’hyperthermie maligne ; conservation au froid.',
  },
  {
    dci: 'Rocuronium',
    slug: 'rocuronium',
    classe: 'Curare non dépolarisant (aminostéroïde)',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Antagoniste compétitif de l’acétylcholine au niveau des récepteurs nicotiniques de la plaque motrice.',
    indications: 'Curarisation pour l’intubation et la chirurgie ; alternative au suxaméthonium pour l’intubation en séquence rapide (1,2 mg/kg).',
    posologie: 'Intubation : 0,6 mg/kg IV (1–1,2 mg/kg en séquence rapide) ; entretien 0,1–0,2 mg/kg selon la surveillance.',
    effets_indesirables: 'Anaphylaxie, curarisation résiduelle, douleur à l’injection.',
    precautions: 'Ventilation obligatoire ; décurarisation par néostigmine (+ atropine) ou sugammadex ; surveillance de la curarisation.',
  },
  {
    dci: 'Atracurium',
    slug: 'atracurium',
    classe: 'Curare non dépolarisant (benzylisoquinoléine)',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Antagoniste compétitif de l’acétylcholine à la plaque motrice ; élimination indépendante du foie et du rein (voie de Hofmann).',
    indications: 'Curarisation au cours de l’anesthésie générale, notamment en cas d’insuffisance rénale ou hépatique.',
    posologie: '0,5 mg/kg IV pour l’intubation, puis 0,1–0,2 mg/kg selon la surveillance.',
    effets_indesirables: 'Libération d’histamine (rougeur, hypotension, bronchospasme), anaphylaxie, curarisation résiduelle.',
    precautions: 'Ventilation obligatoire ; conservation au froid ; décurarisation par néostigmine et atropine.',
  },
  // --- Lot 68
  {
    dci: 'Pyridostigmine',
    slug: 'pyridostigmine',
    classe: 'Anticholinestérasique',
    groupe: 'Neurologie',
    mecanisme: 'Inhibition réversible de l’acétylcholinestérase augmentant l’acétylcholine disponible à la jonction neuromusculaire.',
    indications: 'Traitement symptomatique de la myasthénie.',
    posologie: 'Adulte : 30–60 mg per os 3 à 4 fois par jour, à adapter (maximum habituel 360 mg/j) ; enfant 1 mg/kg par prise.',
    effets_indesirables: 'Crampes abdominales, diarrhée, hypersalivation, sueurs, fasciculations, bradycardie ; surdosage : crise cholinergique (faiblesse aggravée).',
    precautions: 'Prudence en cas d’asthme et de troubles du rythme ; distinguer crise myasthénique et crise cholinergique.',
  },
  {
    dci: 'Éthosuximide',
    slug: 'ethosuximide',
    classe: 'Antiépileptique (succinimide)',
    groupe: 'Neurologie',
    mecanisme: 'Blocage des canaux calciques de type T des neurones thalamiques, responsables des décharges des absences.',
    indications: 'Épilepsie-absences de l’enfant (traitement de première intention avec le valproate).',
    posologie: 'Enfant : 10–15 mg/kg/j en 2 prises, augmenté progressivement jusqu’à 20–40 mg/kg/j (maximum 1,5 g/j).',
    effets_indesirables: 'Troubles digestifs, somnolence, céphalées, hoquet, rares troubles hématologiques et réactions cutanées.',
    precautions: 'Inefficace sur les crises généralisées tonico-cloniques ; surveillance de la NFS.',
  },
  {
    dci: 'Topiramate',
    slug: 'topiramate',
    classe: 'Antiépileptique',
    groupe: 'Neurologie',
    mecanisme: 'Blocage des canaux sodiques, potentialisation du GABA, antagonisme des récepteurs AMPA du glutamate.',
    indications: 'Épilepsies focales et généralisées (en association, épilepsies pharmacorésistantes, syndrome de Lennox-Gastaut) ; prévention de la migraine.',
    posologie: 'Adulte : débuter à 25 mg/j, augmenter de 25–50 mg par semaine jusqu’à 100–200 mg/j en 2 prises ; enfant 5–9 mg/kg/j.',
    effets_indesirables: 'Troubles cognitifs et du langage, paresthésies, perte de poids, lithiase rénale, glaucome aigu, acidose métabolique.',
    precautions: 'Tératogène (fentes labio-palatines) ; diminue l’efficacité de la contraception orale ; hydratation suffisante.',
  },
  // --- Lot 69
  {
    dci: 'Oxcarbazépine',
    slug: 'oxcarbazepine',
    classe: 'Antiépileptique (carboxamide)',
    groupe: 'Neurologie',
    mecanisme: 'Blocage des canaux sodiques voltage-dépendants, stabilisant les membranes neuronales hyperexcitables.',
    indications: 'Névralgie du trijumeau (alternative à la carbamazépine, mieux tolérée) ; épilepsies focales.',
    posologie: 'Adulte : débuter à 150–300 mg 2 fois par jour, augmenter jusqu’à 600–1 200 mg/j (maximum 2 400 mg/j).',
    effets_indesirables: 'Hyponatrémie (fréquente), somnolence, vertiges, diplopie, éruptions cutanées (rares toxidermies graves).',
    precautions: 'Surveiller la natrémie (sujet âgé, diurétiques) ; inducteur enzymatique modéré (contraception orale, antirétroviraux).',
  },
  {
    dci: 'Riluzole',
    slug: 'riluzole',
    classe: 'Antiglutamatergique',
    groupe: 'Neurologie',
    mecanisme: 'Inhibition de la libération du glutamate et blocage des canaux sodiques, ralentissant la dégénérescence des motoneurones.',
    indications: 'Sclérose latérale amyotrophique (allongement modeste de la survie).',
    posologie: '50 mg per os 2 fois par jour, à distance des repas.',
    effets_indesirables: 'Élévation des transaminases, nausées, asthénie, neutropénie rare.',
    precautions: 'Surveillance des transaminases (mensuelle les 3 premiers mois) et de la NFS ; contre-indiqué en cas d’insuffisance hépatique.',
  },
  {
    dci: 'Antitoxine botulique',
    slug: 'antitoxine-botulique',
    classe: 'Immunsérum (antitoxine équine)',
    groupe: 'Vaccins et sérums',
    mecanisme: 'Neutralisation de la toxine botulique circulante non encore fixée aux terminaisons nerveuses.',
    indications: 'Botulisme alimentaire ou par blessure, le plus tôt possible après le diagnostic clinique (sans attendre la confirmation).',
    posologie: 'Selon le produit (antitoxine heptavalente) : un flacon IV, en perfusion lente, après test de tolérance selon le fabricant.',
    effets_indesirables: 'Réactions d’hypersensibilité immédiate (anaphylaxie), maladie sérique.',
    precautions: 'Disponibilité très limitée (stocks nationaux ou internationaux) ; adrénaline prête ; ne régresse pas une paralysie déjà installée.',
  },
  // --- Lot 70
  {
    dci: 'Sumatriptan',
    slug: 'sumatriptan',
    classe: 'Triptan (agoniste des récepteurs 5-HT1B/1D)',
    groupe: 'Neurologie',
    mecanisme: 'Vasoconstriction des vaisseaux méningés et inhibition de la libération des neuropeptides de l’inflammation neurogène.',
    indications: 'Crise de migraine ; crise d’algie vasculaire de la face (voie sous-cutanée ou nasale).',
    posologie: 'Migraine : 50–100 mg per os, renouvelable après 2 h (maximum 300 mg/j). Algie vasculaire : 6 mg en sous-cutané (maximum 2 injections par 24 h).',
    effets_indesirables: 'Sensations de chaleur, d’oppression thoracique, paresthésies, vertiges, somnolence.',
    precautions: 'Contre-indiqué en cas de coronaropathie, d’AVC, d’HTA non contrôlée, d’artériopathie ; ne pas associer aux dérivés de l’ergot.',
  },
  {
    dci: 'Vérapamil',
    slug: 'verapamil',
    classe: 'Inhibiteur calcique non dihydropyridinique',
    groupe: 'Cardiovasculaire',
    mecanisme: 'Blocage des canaux calciques de type L du myocarde, du tissu nodal et des muscles lisses vasculaires.',
    indications: 'Traitement de fond de l’algie vasculaire de la face ; tachycardies supraventriculaires ; angor ; HTA.',
    posologie: 'Algie vasculaire : 240 mg/j, augmentés progressivement par paliers (jusqu’à 480–720 mg/j) sous surveillance ECG.',
    effets_indesirables: 'Constipation, bradycardie, blocs auriculo-ventriculaires, hypotension, œdèmes des chevilles.',
    precautions: 'ECG avant et à chaque palier ; contre-indiqué en cas de bloc AV, d’insuffisance cardiaque ; prudence avec les bêtabloquants.',
  },
  // --- Lot 71
  {
    dci: 'Bipéridène',
    slug: 'biperidene',
    classe: 'Anticholinergique antiparkinsonien',
    groupe: 'Neurologie',
    mecanisme: 'Antagonisme des récepteurs muscariniques centraux, rétablissant l’équilibre dopamine-acétylcholine dans les noyaux gris centraux.',
    indications: 'Dystonie aiguë et syndromes parkinsoniens induits par les neuroleptiques (forme injectable en urgence) ; maladie de Parkinson.',
    posologie: 'Dystonie aiguë : 2,5–5 mg IM ou IV lente, renouvelable après 30 min ; relais oral 2–6 mg/j.',
    effets_indesirables: 'Sécheresse buccale, constipation, rétention urinaire, flou visuel, confusion et hallucinations (sujet âgé).',
    precautions: 'Contre-indiqué en cas de glaucome par fermeture de l’angle, d’adénome prostatique avec rétention ; éviter chez le sujet âgé (troubles cognitifs).',
  },
  {
    dci: 'Tétrabénazine',
    slug: 'tetrabenazine',
    classe: 'Inhibiteur du transporteur vésiculaire des monoamines (VMAT2)',
    groupe: 'Neurologie',
    mecanisme: 'Déplétion présynaptique en dopamine, réduisant les mouvements hyperkinétiques.',
    indications: 'Chorées (maladie de Huntington, chorées sévères), dyskinésies tardives, tics sévères.',
    posologie: '12,5 mg/j, augmentés progressivement par paliers de 12,5 mg jusqu’à 25–75 mg/j en 2–3 prises.',
    effets_indesirables: 'Dépression et idées suicidaires, somnolence, syndrome parkinsonien, akathisie, syndrome malin.',
    precautions: 'Contre-indiquée en cas de dépression non traitée ou d’idées suicidaires ; surveillance de l’humeur ; disponibilité limitée.',
  },
  {
    dci: 'Primidone',
    slug: 'primidone',
    classe: 'Antiépileptique (désoxybarbiturique)',
    groupe: 'Neurologie',
    mecanisme: 'Métabolisée en phénobarbital et phényléthylmalonamide ; réduit l’oscillation des circuits du tremblement.',
    indications: 'Tremblement essentiel (traitement de première intention avec le propranolol) ; épilepsies.',
    posologie: 'Tremblement : débuter à 25 mg le soir, augmenter lentement jusqu’à 50–250 mg/j.',
    effets_indesirables: 'Somnolence, vertiges, nausées et ataxie surtout au début, dépendance.',
    precautions: 'Débuter à très faible dose ; inducteur enzymatique (interactions, contraception orale, antirétroviraux) ; éviter chez la femme enceinte.',
  },
  {
    dci: 'Pramipexole',
    slug: 'pramipexole',
    classe: 'Agoniste dopaminergique non ergoté',
    groupe: 'Neurologie',
    mecanisme: 'Stimulation directe des récepteurs dopaminergiques D2 et D3.',
    indications: 'Syndrome des jambes sans repos modéré à sévère ; maladie de Parkinson.',
    posologie: 'Jambes sans repos : 0,088 mg (sel 0,125 mg) 2–3 h avant le coucher, augmenté si besoin jusqu’à 0,54 mg/j.',
    effets_indesirables: 'Nausées, somnolence et endormissements brutaux, hypotension orthostatique, troubles du contrôle des impulsions, phénomène d’augmentation.',
    precautions: 'Informer du risque d’accès de sommeil (conduite) et des troubles du comportement (jeu, achats) ; adapter à la fonction rénale.',
  },
  {
    dci: 'Toxine botulinique de type A',
    slug: 'toxine-botulinique-type-a',
    classe: 'Neurotoxine thérapeutique',
    groupe: 'Neurologie',
    mecanisme: 'Blocage de la libération d’acétylcholine à la jonction neuromusculaire, entraînant une paralysie locale et réversible du muscle injecté.',
    indications: 'Dystonies focales (torticolis spasmodique, blépharospasme), spasticité focale (après AVC, paralysie cérébrale), hypersialorrhée.',
    posologie: 'Injections intramusculaires ciblées selon le muscle et le produit, renouvelées tous les 3–4 mois, par un praticien formé.',
    effets_indesirables: 'Faiblesse excessive des muscles voisins, dysphagie (injections cervicales), ptosis, douleur au point d’injection.',
    precautions: 'Réservée aux centres spécialisés ; unités non interchangeables entre les produits ; contre-indiquée en cas de myasthénie.',
  },
  // --- Lot 72
  {
    dci: 'Hydroxyzine',
    slug: 'hydroxyzine',
    classe: 'Antihistaminique H1 sédatif (anxiolytique)',
    groupe: 'Psychiatrie',
    mecanisme: 'Antagonisme des récepteurs H1 centraux, effet sédatif et anxiolytique sans dépendance notable.',
    indications: 'Anxiété (traitement d’appoint de courte durée), prurit, prémédication.',
    posologie: 'Adulte : 25–50 mg jusqu’à 3 fois par jour (maximum 100 mg/j ; 50 mg/j chez le sujet âgé).',
    effets_indesirables: 'Somnolence, sécheresse buccale, effets anticholinergiques, allongement de l’intervalle QT.',
    precautions: 'Éviter chez le sujet âgé, en cas d’allongement du QT, de glaucome ou d’adénome prostatique ; pas d’alcool ni de conduite.',
  },
  {
    dci: 'Clomipramine',
    slug: 'clomipramine',
    classe: 'Antidépresseur tricyclique',
    groupe: 'Psychiatrie',
    mecanisme: 'Inhibition puissante de la recapture de la sérotonine et de la noradrénaline.',
    indications: 'Trouble obsessionnel compulsif (en cas d’échec des ISRS), dépression sévère, trouble panique.',
    posologie: 'Débuter à 25 mg/j, augmenter progressivement jusqu’à 100–250 mg/j selon la tolérance.',
    effets_indesirables: 'Effets anticholinergiques (sécheresse buccale, constipation, rétention, flou visuel), hypotension orthostatique, prise de poids, troubles du rythme, convulsions.',
    precautions: 'ECG chez le sujet de plus de 50 ans ou cardiaque ; toxicité grave en cas de surdosage (risque suicidaire : délivrance limitée) ; contre-indiqué après un infarctus récent.',
  },
  {
    dci: 'Zopiclone',
    slug: 'zopiclone',
    classe: 'Hypnotique apparenté aux benzodiazépines (cyclopyrrolone)',
    groupe: 'Psychiatrie',
    mecanisme: 'Modulation positive des récepteurs GABA-A, raccourcissant le délai d’endormissement.',
    indications: 'Insomnie occasionnelle ou transitoire sévère, sur une courte durée.',
    posologie: '3,75–7,5 mg au coucher (3,75 mg chez le sujet âgé), pendant 2–4 semaines au maximum.',
    effets_indesirables: 'Goût amer, somnolence résiduelle, troubles de la mémoire, comportements complexes pendant le sommeil, dépendance.',
    precautions: 'Durée la plus courte possible ; prudence chez le sujet âgé (chutes), en cas d’apnée du sommeil, d’insuffisance respiratoire ; pas d’alcool.',
  },
  {
    dci: 'Quétiapine',
    slug: 'quetiapine',
    classe: 'Antipsychotique atypique',
    groupe: 'Psychiatrie',
    mecanisme: 'Antagonisme des récepteurs dopaminergiques D2 (faible) et sérotoninergiques 5-HT2A, effet antihistaminique sédatif.',
    indications: 'Schizophrénie, trouble bipolaire (manie, dépression bipolaire) ; psychose chez le patient parkinsonien.',
    posologie: 'Schizophrénie : 50 mg/j le premier jour, augmentation progressive jusqu’à 300–750 mg/j ; doses plus faibles chez le sujet âgé.',
    effets_indesirables: 'Sédation, hypotension orthostatique, prise de poids, troubles métaboliques, allongement du QT ; peu d’effets extrapyramidaux.',
    precautions: 'Surveillance du poids, de la glycémie et des lipides ; prudence chez le sujet âgé dément (mortalité accrue).',
  },
  {
    dci: 'Mirtazapine',
    slug: 'mirtazapine',
    classe: 'Antidépresseur noradrénergique et sérotoninergique spécifique',
    groupe: 'Psychiatrie',
    mecanisme: 'Antagonisme des récepteurs α2 présynaptiques, 5-HT2, 5-HT3 et H1, augmentant la transmission noradrénergique et sérotoninergique.',
    indications: 'Dépression, notamment avec insomnie, anorexie ou amaigrissement ; dépression du sujet âgé.',
    posologie: '15 mg au coucher, augmentés à 30–45 mg/j.',
    effets_indesirables: 'Somnolence, augmentation de l’appétit et du poids, sécheresse buccale ; rares neutropénies.',
    precautions: 'Peu d’interactions et peu d’effets sexuels ; surveillance du poids ; NFS en cas de fièvre ou d’angine.',
  },
  // --- Lot 74
  {
    dci: 'Nicotine',
    slug: 'nicotine',
    classe: 'Substitut nicotinique',
    groupe: 'Addictologie',
    mecanisme: 'Apport de nicotine sans les produits toxiques de la fumée, réduisant les symptômes de sevrage et l’envie de fumer.',
    indications: 'Aide à l’arrêt du tabac (timbres transdermiques, gommes, pastilles, inhaleur).',
    posologie: 'Timbre 21 mg/24 h si plus de 20 cigarettes par jour (14 mg si 10–20), associé à des formes orales à la demande ; dégression sur 8–12 semaines.',
    effets_indesirables: 'Irritation cutanée (timbre), troubles du sommeil, nausées, hoquet, palpitations en cas de surdosage.',
    precautions: 'Utilisable chez le coronarien stable et la femme enceinte (préférable au tabac) ; adapter la dose aux signes de sous- ou surdosage.',
  },
  {
    dci: 'Varénicline',
    slug: 'varenicline',
    classe: 'Agoniste partiel des récepteurs nicotiniques α4β2',
    groupe: 'Addictologie',
    mecanisme: 'Stimulation partielle des récepteurs nicotiniques réduisant le manque, et blocage de l’effet de récompense de la nicotine.',
    indications: 'Aide à l’arrêt du tabac chez l’adulte (traitement le plus efficace en monothérapie).',
    posologie: '0,5 mg/j pendant 3 jours, puis 0,5 mg 2 fois par jour jusqu’au jour 7, puis 1 mg 2 fois par jour pendant 12 semaines ; arrêt du tabac entre le 8e et le 14e jour.',
    effets_indesirables: 'Nausées (fréquentes), rêves anormaux, insomnie, céphalées.',
    precautions: 'Surveiller l’humeur ; adapter à la fonction rénale ; disponibilité limitée.',
  },
  {
    dci: 'Méthadone',
    slug: 'methadone',
    classe: 'Agoniste opioïde de longue durée d’action',
    groupe: 'Addictologie',
    mecanisme: 'Agoniste des récepteurs μ de longue demi-vie, supprimant le manque et le besoin de consommer sans effet euphorique marqué aux doses stables.',
    indications: 'Traitement de substitution de la dépendance aux opioïdes (héroïne, tramadol, codéine).',
    posologie: 'Début 10–30 mg/j, augmentation prudente par paliers de 5–10 mg tous les 3–5 jours ; dose d’entretien habituelle 60–120 mg/j, prise supervisée au début.',
    effets_indesirables: 'Dépression respiratoire (surtout à l’induction et en association aux benzodiazépines ou à l’alcool), constipation, sueurs, allongement du QT.',
    precautions: 'Programme encadré, délivrance contrôlée ; ECG si doses élevées ou facteurs de risque ; naloxone disponible ; interactions (rifampicine, efavirenz diminuent les taux).',
  },
  {
    dci: 'Buprénorphine',
    slug: 'buprenorphine',
    classe: 'Agoniste partiel opioïde',
    groupe: 'Addictologie',
    mecanisme: 'Agoniste partiel des récepteurs μ à forte affinité avec effet plafond sur la dépression respiratoire.',
    indications: 'Traitement de substitution de la dépendance aux opioïdes.',
    posologie: 'Induction sublinguale 2–4 mg au moins 12–24 h après le dernier opioïde (signes de manque présents), puis 8–16 mg/j (maximum 24 mg/j).',
    effets_indesirables: 'Syndrome de manque précipité si induction trop précoce, constipation, céphalées, hépatotoxicité.',
    precautions: 'Plus sûre que la méthadone en cas de surdosage ; prudence avec benzodiazépines et alcool ; surveillance hépatique.',
  },
  // --- Lot 75
  {
    dci: 'Lorazépam',
    slug: 'lorazepam',
    classe: 'Benzodiazépine de demi-vie intermédiaire',
    groupe: 'Psychiatrie',
    mecanisme: 'Modulation positive des récepteurs GABA-A (anxiolytique, sédatif, anticonvulsivant, myorelaxant).',
    indications: 'Catatonie (traitement de première intention et test diagnostique), état de mal épileptique, anxiété aiguë, agitation, sevrage alcoolique chez l’insuffisant hépatique.',
    posologie: 'Catatonie : 1–2 mg IV, IM ou per os, renouvelé toutes les 4–8 h (jusqu’à 8–24 mg/j) ; état de mal : 0,1 mg/kg IV (maximum 4 mg par dose).',
    effets_indesirables: 'Sédation, dépression respiratoire (surtout associé aux opioïdes ou à l’alcool), confusion chez le sujet âgé, dépendance.',
    precautions: 'Surveillance respiratoire, flumazénil disponible ; durée limitée hors catatonie ; conservation au froid de la forme injectable.',
  },
  {
    dci: 'Mémantine',
    slug: 'memantine',
    classe: 'Antagoniste des récepteurs NMDA',
    groupe: 'Neurologie',
    mecanisme: 'Antagonisme non compétitif des récepteurs NMDA, limitant l’excitotoxicité glutamatergique.',
    indications: 'Démence de type Alzheimer modérée à sévère, seule ou associée à un inhibiteur de la cholinestérase.',
    posologie: '5 mg/j, augmentés de 5 mg par semaine jusqu’à 20 mg/j (10 mg/j si insuffisance rénale sévère).',
    effets_indesirables: 'Vertiges, céphalées, somnolence, constipation, confusion, hypertension.',
    precautions: 'Adapter à la fonction rénale ; bénéfice modeste à réévaluer ; disponibilité limitée.',
  },
  {
    dci: 'Rivastigmine',
    slug: 'rivastigmine',
    classe: 'Inhibiteur de la cholinestérase',
    groupe: 'Neurologie',
    mecanisme: 'Inhibition de l’acétylcholinestérase et de la butyrylcholinestérase, augmentant l’acétylcholine cérébrale.',
    indications: 'Démence de la maladie d’Alzheimer légère à modérée, démence à corps de Lewy et démence de la maladie de Parkinson.',
    posologie: 'Gélules : 1,5 mg 2 fois par jour, augmentés toutes les 2–4 semaines jusqu’à 3–6 mg 2 fois par jour ; timbre 4,6 puis 9,5 mg/24 h.',
    effets_indesirables: 'Nausées, vomissements, perte de poids, diarrhée, bradycardie, syncope, aggravation du tremblement.',
    precautions: 'Prudence en cas de bradycardie, de troubles de conduction, d’asthme, d’ulcère ; prise au cours des repas.',
  },
  // --- Lot 76
  {
    dci: 'Modafinil',
    slug: 'modafinil',
    classe: 'Psychostimulant non amphétaminique (éveillant)',
    groupe: 'Neurologie',
    mecanisme: 'Inhibition de la recapture de la dopamine et activation des systèmes d’éveil (histamine, orexine), favorisant la vigilance.',
    indications: 'Somnolence diurne excessive de la narcolepsie et des hypersomnies centrales.',
    posologie: '100–200 mg le matin, éventuellement 100 mg supplémentaires à midi (maximum 400 mg/j).',
    effets_indesirables: 'Céphalées, nervosité, insomnie, palpitations, perte d’appétit ; rares réactions cutanées graves.',
    precautions: 'Inducteur enzymatique (diminue l’efficacité de la contraception orale) ; contre-indiqué en cas d’HTA sévère ou d’arythmie ; prescription spécialisée.',
  },
];

module.exports = { specialites, examens, symptomes, molecules };
