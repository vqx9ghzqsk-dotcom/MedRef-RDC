'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — médecine interne
 * (pneumologie, cardiologie, hépatologie, néphrologie, endocrinologie, hématologie).
 * Format : voir semiologie/infectiologie.js. Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== Asthme
  asthme: {
    urgences: {
      'crise-d-asthme-aigue-grave':
        'Parole impossible ou en mots isolés, tirage, cyanose, silence auscultatoire, SpO₂ < 92 %, DEP < 50 %, épuisement',
    },
    formes: [
      {
        nom: 'Crise d’asthme commune',
        type: 'commune',
        description: 'Épisode de dyspnée sifflante paroxystique, réversible spontanément ou sous bronchodilatateur.',
        terrain:
          '- Atopie personnelle ou familiale (rhinite, eczéma), asthme connu\n- Facteurs déclenchants : infection virale, allergènes (acariens, pollens, moisissures), fumée de bois ou de tabac, effort, froid, AINS, aspirine',
        fonctionnels:
          '- Dyspnée expiratoire sifflante, souvent nocturne ou au petit matin\n- Oppression thoracique\n- Toux sèche, parfois expectoration perlée en fin de crise',
        generaux: '- Apyrexie (sauf infection déclenchante)\n- Anxiété, tachycardie modérée',
        physiques:
          '- **Inspection** : polypnée, freinage expiratoire, expiration prolongée, distension thoracique\n- **Percussion** : hypersonorité\n- **Auscultation** : sibilants diffus et bilatéraux',
        paraclinique:
          '- DEP abaissé, amélioré de > 15–20 % après bronchodilatateur\n- Spirométrie à distance : trouble ventilatoire obstructif réversible',
        etiologies:
          '- **Asthme allergique** (extrinsèque) : acariens, pollens, phanères, moisissures\n- **Asthme non allergique** (intrinsèque) : infections virales, reflux gastro-œsophagien\n- **Asthme d’effort**, **asthme professionnel**, **asthme à l’aspirine** (triade de Widal)',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [
          ['debit-expiratoire-de-pointe', 'Quantifie la sévérité et suit la réponse au traitement.'],
          ['spirometrie', 'Confirme l’obstruction réversible à distance de la crise.'],
        ],
      },
      {
        nom: 'Asthme aigu grave',
        type: 'gravite',
        description: 'Crise inhabituelle par son intensité ou ne cédant pas au traitement : menace vitale.',
        terrain:
          '- Antécédent d’intubation pour asthme, hospitalisations répétées, asthme mal contrôlé, arrêt récent des corticoïdes, mauvaise observance',
        fonctionnels: '- Dyspnée intense, parole impossible ou phrases courtes, impossibilité de s’allonger',
        generaux: '- Sueurs, agitation puis somnolence (hypercapnie)\n- Tachycardie > 120/min, pouls paradoxal',
        physiques:
          '- Polypnée > 30/min, tirage, contraction des sterno-cléido-mastoïdiens\n- Cyanose\n- **Silence auscultatoire** (signe de gravité majeure)\n- Signes de menace d’arrêt : bradycardie, bradypnée, troubles de la conscience, balancement thoraco-abdominal',
        paraclinique: '- DEP < 50 % de la théorique (< 30 % : très grave), SpO₂ < 92 %\n- Gaz du sang : normo- ou hypercapnie (gravité)',
        etiologies: '- Mêmes facteurs déclenchants ; souvent asthme sous-traité',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-bronchique-obstructif'],
        examens: [
          ['oxymetrie-de-pouls', 'SpO₂ < 92 % : gravité.'],
          ['gaz-du-sang', 'PaCO₂ ≥ 45 mmHg : épuisement, menace d’arrêt.'],
        ],
      },
      {
        nom: 'Asthme de l’enfant',
        type: 'terrain',
        description: 'Maladie chronique la plus fréquente de l’enfant ; épisodes sifflants récidivants.',
        terrain: '- ≥ 3 épisodes de sifflements, atopie familiale, viroses',
        fonctionnels: '- Toux nocturne ou à l’effort, sifflements, gêne respiratoire',
        generaux: '- Apyrexie hors infection',
        physiques: '- Sibilants, tirage, battement des ailes du nez, difficultés à parler ou à téter (gravité)',
        paraclinique: '- DEP (à partir de 6 ans) ; radiographie si premier épisode ou fièvre',
        etiologies: '- Infections virales (rhinovirus, VRS), allergènes domestiques, fumée',
        syndromes: ['syndrome-bronchique-obstructif'],
        examens: [['radiographie-thoracique', 'Élimine un corps étranger, une pneumonie.']],
      },
    ],
  },

  // =================================================================== Hypertension artérielle
  'hypertension-arterielle': {
    urgences: {
      'urgence-hypertensive':
        'PA ≥ 180/110 mmHg avec céphalées intenses, troubles visuels, confusion, douleur thoracique, dyspnée ou oligurie',
      'avc-aigu': 'Déficit moteur brutal d’un côté, bouche déviée, trouble du langage, troubles de la conscience',
    },
    formes: [
      {
        nom: 'HTA essentielle (forme commune)',
        type: 'commune',
        description:
          'PA ≥ 140/90 mmHg au cabinet, confirmée à plusieurs consultations ou par automesure, sans cause retrouvée (≈ 90 % des cas).',
        terrain:
          '- Âge > 40 ans, antécédents familiaux, mélanodermie\n- Excès de sel, obésité, sédentarité, alcool, diabète, dyslipidémie',
        fonctionnels:
          '- Le plus souvent asymptomatique (« tueur silencieux »)\n- Céphalées occipitales matinales, vertiges, acouphènes, phosphènes, épistaxis',
        generaux: '- État général conservé',
        physiques:
          '- Mesure de la PA aux deux bras, au repos, brassard adapté ; tension en position debout\n- Rechercher le retentissement : souffle carotidien ou abdominal, pouls périphériques, signes d’insuffisance cardiaque, fond d’œil\n- IMC et tour de taille',
        paraclinique:
          '- Bilan initial : créatinine (DFG), ionogramme (kaliémie), glycémie, bilan lipidique, bandelette urinaire (protéinurie, hématurie), ECG (hypertrophie ventriculaire gauche)',
        etiologies:
          '- Multifactorielle : génétique, sel, poids, vieillissement artériel\n- Toujours éliminer une cause secondaire si HTA sévère, résistante ou du sujet jeune',
        syndromes: [],
        examens: [
          ['ecg', 'Hypertrophie ventriculaire gauche (Sokolow > 35 mm).'],
          ['creatinine', 'Atteinte rénale, choix du traitement.'],
          ['bandelette-urinaire', 'Protéinurie : atteinte rénale.'],
        ],
      },
      {
        nom: 'HTA secondaire',
        type: 'etiologique',
        description: 'HTA liée à une cause curable ; à suspecter devant une HTA sévère, résistante, d’apparition brutale ou avant 30 ans.',
        terrain: '- Sujet jeune, HTA résistante à une trithérapie, hypokaliémie spontanée',
        fonctionnels:
          '- Triade de Ménard (céphalées, sueurs, palpitations) : phéochromocytome\n- Ronflement, somnolence diurne : apnées du sommeil',
        generaux: '- Selon la cause : obésité facio-tronculaire (Cushing)',
        physiques:
          '- Souffle abdominal (sténose de l’artère rénale)\n- Abolition des pouls fémoraux (coarctation de l’aorte)\n- Gros reins palpables (polykystose)',
        paraclinique: '- Kaliémie, créatinine, bandelette urinaire, échographie rénale ; examens spécialisés selon l’orientation',
        etiologies:
          '- **Rénales** : néphropathies chroniques (glomérulopathies, néphropathie diabétique), polykystose\n- **Rénovasculaires** : sténose de l’artère rénale\n- **Endocriniennes** : hyperaldostéronisme primaire, phéochromocytome, syndrome de Cushing, dysthyroïdie\n- **Autres** : coarctation de l’aorte, apnées du sommeil, médicaments (AINS, corticoïdes, contraceptifs œstro-progestatifs), alcool',
        syndromes: [],
        examens: [
          ['ionogramme', 'Hypokaliémie : hyperaldostéronisme.'],
          ['echographie-renale', 'Taille et aspect des reins, polykystose.'],
        ],
      },
      {
        nom: 'HTA maligne et urgence hypertensive',
        type: 'gravite',
        description: 'PA très élevée (souvent ≥ 180/110 mmHg) avec atteinte aiguë d’un organe cible.',
        terrain: '- HTA non traitée ou arrêt du traitement',
        fonctionnels:
          '- Céphalées intenses, troubles visuels, confusion (encéphalopathie hypertensive)\n- Douleur thoracique, dyspnée (OAP)\n- Oligurie',
        generaux: '- Amaigrissement, soif (HTA maligne)',
        physiques:
          '- Fond d’œil : hémorragies, exsudats, œdème papillaire (stade III–IV)\n- Signes d’OAP, déficit neurologique, convulsions',
        paraclinique:
          '- Insuffisance rénale, protéinurie, hématurie\n- Anémie hémolytique mécanique (schizocytes) dans l’HTA maligne\n- ECG, troponine selon le tableau',
        etiologies: '- HTA essentielle négligée ; causes secondaires (rénale, phéochromocytome) ; éclampsie chez la femme enceinte',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
        examens: [['fond-d-oeil', 'Rétinopathie hypertensive stade III–IV : HTA maligne.']],
      },
    ],
  },

  // =================================================================== Insuffisance cardiaque
  'insuffisance-cardiaque': {
    urgences: {
      'oedeme-aigu-du-poumon':
        'Dyspnée brutale, orthopnée, expectoration mousseuse rosée, râles crépitants remontant aux sommets, cyanose, sueurs',
    },
    formes: [
      {
        nom: 'Insuffisance cardiaque gauche (forme commune)',
        type: 'commune',
        description: 'Défaillance du ventricule gauche avec congestion pulmonaire.',
        terrain:
          '- HTA, cardiopathie ischémique, valvulopathie (rhumatismale), cardiomyopathie, diabète, sujet âgé',
        fonctionnels:
          '- Dyspnée d’effort (classe NYHA I à IV), puis de repos\n- Orthopnée, dyspnée paroxystique nocturne\n- Toux de décubitus, asthénie',
        generaux: '- Tachycardie, sueurs lors des poussées',
        physiques:
          '- **Palpation** : choc de pointe dévié en bas et à gauche\n- **Auscultation cardiaque** : tachycardie, bruit de galop (B3), souffle d’insuffisance mitrale fonctionnelle\n- **Auscultation pulmonaire** : râles crépitants des bases, épanchement pleural',
        paraclinique:
          '- Radiographie : cardiomégalie (index cardio-thoracique > 0,5), redistribution vasculaire, lignes de Kerley\n- BNP ou NT-proBNP élevés\n- Échocardiographie : fraction d’éjection (FEVG) diminuée ou préservée',
        etiologies:
          '- Cardiopathie hypertensive (1re cause en Afrique), cardiopathie ischémique\n- Valvulopathies (rhumatisme articulaire aigu), cardiomyopathie dilatée, du péripartum\n- Facteurs de décompensation : écart de régime salé, arrêt du traitement, infection, arythmie (fibrillation atriale), anémie',
        syndromes: ['syndrome-d-insuffisance-cardiaque-gauche'],
        examens: [
          ['echocardiographie', 'Examen clé : FEVG, valvulopathie, pressions.'],
          ['bnp', 'Élevé : oriente vers une origine cardiaque de la dyspnée.'],
          ['radiographie-thoracique', 'Cardiomégalie, œdème interstitiel ou alvéolaire.'],
        ],
      },
      {
        nom: 'Insuffisance cardiaque droite',
        type: 'topographique',
        description: 'Défaillance du ventricule droit avec congestion systémique.',
        terrain:
          '- Évolution d’une insuffisance cardiaque gauche (insuffisance cardiaque globale)\n- Cœur pulmonaire chronique (BPCO, séquelles de tuberculose), embolie pulmonaire, péricardite constrictive, endomyocardiofibrose',
        fonctionnels: '- Hépatalgie d’effort, dyspnée, prise de poids',
        generaux: '- Asthénie',
        physiques:
          '- Turgescence jugulaire, reflux hépato-jugulaire\n- Hépatomégalie douloureuse, ferme\n- Œdèmes des membres inférieurs prenant le godet, ascite, épanchement pleural\n- Signe de Harzer, souffle d’insuffisance tricuspidienne',
        paraclinique: '- Échocardiographie : dilatation des cavités droites, pressions pulmonaires élevées\n- Cholestase et cytolyse modérées (foie cardiaque)',
        etiologies:
          '- Insuffisance cardiaque gauche évoluée\n- Hypertension pulmonaire (pathologie respiratoire chronique, embolie pulmonaire, drépanocytose)\n- Péricardite chronique constrictive (tuberculose), endomyocardiofibrose',
        syndromes: ['syndrome-d-insuffisance-cardiaque-droite', 'syndrome-oedemateux'],
        examens: [['echocardiographie', 'Cavités droites, pression artérielle pulmonaire, péricarde.']],
      },
      {
        nom: 'Œdème aigu du poumon cardiogénique',
        type: 'gravite',
        description: 'Inondation alvéolaire brutale par élévation de la pression capillaire pulmonaire.',
        terrain: '- Poussée hypertensive, SCA, arythmie, surcharge hydrosodée',
        fonctionnels: '- Dyspnée brutale, intense, orthopnée, toux avec expectoration mousseuse rosée',
        generaux: '- Angoisse, sueurs, tachycardie, HTA fréquente',
        physiques: '- Polypnée, cyanose\n- Râles crépitants bilatéraux remontant vers les sommets (« marée montante »)\n- Bruit de galop',
        paraclinique: '- Radiographie : opacités alvéolaires bilatérales péri-hilaires « en ailes de papillon »\n- ECG, troponine (rechercher un SCA)',
        etiologies: '- Poussée hypertensive, infarctus, valvulopathie, trouble du rythme, écart de régime',
        syndromes: ['syndrome-de-detresse-respiratoire', 'syndrome-d-insuffisance-cardiaque-gauche'],
        examens: [
          ['ecg', 'Rechercher un SCA ou un trouble du rythme.'],
          ['troponine', 'Élevée : origine ischémique possible.'],
        ],
      },
    ],
  },

  // =================================================================== Hépatite B chronique
  'hepatite-b-chronique': {
    formes: [
      {
        nom: 'Hépatite B chronique (forme commune)',
        type: 'commune',
        description: 'Persistance de l’AgHBs plus de 6 mois ; longtemps asymptomatique.',
        terrain:
          '- Transmission mère-enfant (principale en Afrique), dans l’enfance, sexuelle, sanguine\n- Entourage d’un porteur, absence de vaccination',
        fonctionnels: '- Souvent aucun ; asthénie, inconfort de l’hypocondre droit',
        generaux: '- État général conservé',
        physiques: '- Examen souvent normal ; hépatomégalie possible',
        paraclinique:
          '- AgHBs positif > 6 mois ; AgHBe, ADN viral B, ALAT pour définir la phase\n- Élastométrie (fibrose), échographie',
        etiologies:
          '- Virus de l’hépatite B ; rechercher une co-infection VHD (delta), VHC, VIH\n- Facteurs aggravants : alcool, aflatoxine, co-infections',
        syndromes: [],
        examens: [
          ['aghbs', 'Positif > 6 mois : hépatite chronique.'],
          ['marqueurs-vhb', 'AgHBe, ADN viral : phase de la maladie et indication du traitement.'],
          ['elastometrie-hepatique', 'Degré de fibrose.'],
        ],
      },
      {
        nom: 'Cirrhose virale B',
        type: 'evolutive',
        description: 'Stade évolué de fibrose, compensé puis décompensé.',
        terrain: '- Hépatite B chronique ancienne, alcool, co-infection delta',
        fonctionnels: '- Asthénie, augmentation du volume abdominal, hémorragie digestive',
        generaux: '- Amaigrissement, fonte musculaire',
        physiques:
          '- Foie dur à bord inférieur tranchant\n- Insuffisance hépatocellulaire : ictère, angiomes stellaires, érythrose palmaire, astérixis\n- Hypertension portale : splénomégalie, ascite, circulation veineuse collatérale',
        paraclinique: '- TP bas, albumine basse, thrombopénie\n- Échographie : foie dysmorphique, signes d’hypertension portale',
        etiologies: '- VHB évolutif ; facteurs : alcool, VHD, âge, sexe masculin',
        syndromes: ['syndrome-d-insuffisance-hepatocellulaire', 'syndrome-d-hypertension-portale'],
        examens: [['echographie-abdominale', 'Dysmorphie hépatique, ascite, nodule.']],
      },
      {
        nom: 'Carcinome hépatocellulaire sur hépatite B',
        type: 'evolutive',
        description: 'Cancer primitif du foie, possible même sans cirrhose dans l’hépatite B.',
        terrain: '- Homme > 40 ans, cirrhose, antécédents familiaux, aflatoxine',
        fonctionnels: '- Douleur de l’hypocondre droit, augmentation du volume abdominal',
        generaux: '- Amaigrissement rapide, fièvre',
        physiques: '- Hépatomégalie dure, irrégulière, parfois souffle hépatique ; ascite',
        paraclinique: '- Alpha-fœtoprotéine élevée\n- Échographie : nodule ou masse hépatique',
        etiologies: '- Hépatite B chronique, aflatoxines, alcool',
        syndromes: ['syndrome-d-alteration-de-l-etat-general'],
        examens: [
          ['alpha-foetoproteine', 'Élevée : argument en faveur d’un CHC.'],
          ['echographie-abdominale', 'Dépistage tous les 6 mois chez le patient à risque.'],
        ],
      },
    ],
  },

  // =================================================================== Insuffisance rénale aiguë
  'insuffisance-renale-aigue': {
    urgences: {
      'hyperkaliemie-menacante':
        'Faiblesse musculaire, paresthésies, bradycardie ou troubles du rythme, ondes T amples et pointues à l’ECG',
    },
    formes: [
      {
        nom: 'Insuffisance rénale aiguë fonctionnelle (prérénale)',
        type: 'commune',
        description: 'Baisse du débit de filtration par hypoperfusion rénale, réversible si la cause est corrigée rapidement.',
        terrain: '- Diarrhée, vomissements, hémorragie, choc, diurétiques, AINS, IEC, sujet âgé',
        fonctionnels: '- Soif, oligurie',
        generaux: '- Tachycardie, hypotension, perte de poids',
        physiques: '- Signes de déshydratation extracellulaire : pli cutané, yeux enfoncés, veines plates, hypotension orthostatique',
        paraclinique:
          '- Urée/créatinine plasmatiques élevées avec rapport urée/créatinine augmenté\n- Natriurèse < 20 mmol/L, urines concentrées',
        etiologies:
          '- Hypovolémie vraie : diarrhées (choléra), vomissements, hémorragies, brûlures\n- Hypovolémie relative : choc septique, insuffisance cardiaque, cirrhose\n- Médicaments : AINS, IEC/ARA2, diurétiques',
        syndromes: ['syndrome-de-deshydratation-extracellulaire'],
        examens: [
          ['creatinine', 'Élevée ; suivre la cinétique.'],
          ['ionogramme', 'Natrémie, kaliémie, bicarbonates.'],
        ],
      },
      {
        nom: 'Insuffisance rénale aiguë organique (rénale)',
        type: 'etiologique',
        description: 'Lésion du parenchyme rénal : tubules (nécrose tubulaire aiguë), glomérules, interstitium ou vaisseaux.',
        terrain: '- Choc prolongé, sepsis, paludisme grave, hémolyse, toxiques, produits de contraste, plantes médicinales',
        fonctionnels: '- Oligo-anurie ou diurèse conservée, urines foncées (hémoglobinurie)',
        generaux: '- Fièvre selon la cause',
        physiques:
          '- Œdèmes, HTA (glomérulonéphrite)\n- Signes de surcharge : crépitants, turgescence jugulaire\n- Syndrome urémique dans les formes évoluées',
        paraclinique:
          '- Bandelette : protéinurie, hématurie (glomérulaire)\n- Natriurèse > 40 mmol/L (nécrose tubulaire)\n- Hyperkaliémie, acidose métabolique',
        etiologies:
          '- **Nécrose tubulaire aiguë** : choc, sepsis, paludisme grave (hémoglobinurie), rhabdomyolyse, aminosides, produits de contraste\n- **Glomérulaire** : glomérulonéphrite post-streptococcique, lupus\n- **Interstitielle** : immuno-allergique (médicaments), pyélonéphrite\n- **Vasculaire** : HTA maligne, microangiopathie thrombotique, éclampsie/HELLP',
        syndromes: ['syndrome-uremique', 'syndrome-de-retention-hydrosodee'],
        examens: [
          ['bandelette-urinaire', 'Protéinurie et hématurie : atteinte glomérulaire.'],
          ['ecbu', 'Leucocyturie : pyélonéphrite, néphrite interstitielle.'],
        ],
      },
      {
        nom: 'Insuffisance rénale aiguë obstructive (postrénale)',
        type: 'etiologique',
        description: 'Obstacle sur les voies urinaires ; à éliminer en premier par l’échographie.',
        terrain: '- Homme âgé (prostate), lithiase, cancer pelvien (col utérin), schistosomose urinaire',
        fonctionnels: '- Anurie brutale, colique néphrétique, dysurie, rétention',
        generaux: '- Fièvre si infection associée (pyélonéphrite obstructive : urgence)',
        physiques: '- Globe vésical, gros rein palpable, douleur lombaire ; toucher rectal (prostate)',
        paraclinique: '- Échographie : dilatation des cavités pyélo-calicielles',
        etiologies:
          '- Hypertrophie ou cancer de la prostate, lithiase, cancer du col utérin envahissant les uretères, schistosomose, ligature urétérale',
        syndromes: [],
        examens: [['echographie-renale', 'Dilatation des cavités : obstacle à lever en urgence.']],
      },
    ],
  },

  // =================================================================== Diabète de type 2
  'diabete-type-2': {
    urgences: {
      'acidocetose-diabetique-urgence':
        'Polyurie-polydipsie, vomissements, douleurs abdominales, respiration de Kussmaul, haleine cétonique, troubles de la conscience',
    },
    formes: [
      {
        nom: 'Diabète de type 2 (forme commune)',
        type: 'commune',
        description: 'Hyperglycémie chronique par insulinorésistance et déficit relatif de sécrétion d’insuline ; souvent découvert fortuitement.',
        terrain:
          '- Âge > 40 ans, surpoids, obésité abdominale, sédentarité\n- Antécédents familiaux, diabète gestationnel, HTA, dyslipidémie',
        fonctionnels:
          '- Souvent asymptomatique\n- Syndrome cardinal : polyurie, polydipsie, polyphagie, amaigrissement\n- Infections récidivantes (cutanées, urinaires, génitales), prurit vulvaire',
        generaux: '- Asthénie ; surpoids habituel',
        physiques:
          '- IMC, tour de taille, PA\n- Examen des pieds : sensibilité (monofilament), pouls, plaies\n- Fond d’œil',
        paraclinique:
          '- Glycémie à jeun ≥ 1,26 g/L (7 mmol/L) à deux reprises, ou ≥ 2 g/L à tout moment avec symptômes\n- HbA1c ≥ 6,5 % ; bilan lipidique, créatinine, microalbuminurie',
        etiologies:
          '- Insulinorésistance (obésité, sédentarité) et déficit de l’insulinosécrétion, prédisposition génétique\n- Diabètes secondaires à éliminer : pancréatite chronique, corticoïdes, endocrinopathies',
        syndromes: ['syndrome-cardinal-diabetique'],
        examens: [
          ['glycemie', 'Diagnostic : ≥ 1,26 g/L à jeun à deux reprises.'],
          ['hba1c', 'Diagnostic (≥ 6,5 %) et suivi tous les 3 mois.'],
          ['microalbuminurie', 'Dépistage annuel de la néphropathie.'],
        ],
      },
      {
        nom: 'Décompensation hyperglycémique (acidocétose, hyperosmolarité)',
        type: 'gravite',
        description:
          'Acidocétose (déficit en insuline, souvent type 1 ou diabète cétosique africain) ou état hyperosmolaire (type 2 du sujet âgé).',
        terrain:
          '- Infection, arrêt du traitement, corticoïdes, déshydratation ; sujet âgé (hyperosmolarité)\n- Diabète « cétosique » de l’adulte africain',
        fonctionnels: '- Polyurie-polydipsie majeure, nausées, vomissements, douleurs abdominales',
        generaux: '- Asthénie, déshydratation globale, hypothermie ou fièvre (infection)',
        physiques:
          '- Respiration de Kussmaul, haleine cétonique (acidocétose)\n- Déshydratation extra- et intracellulaire\n- Troubles de la conscience jusqu’au coma',
        paraclinique:
          '- Acidocétose : glycémie > 2,5 g/L, cétonémie > 3 mmol/L (ou cétonurie ≥ ++), pH < 7,30, bicarbonates < 15 mmol/L\n- Hyperosmolarité : glycémie souvent > 6 g/L, osmolarité > 320 mOsm/kg, sans cétose importante',
        etiologies:
          '- Infection (pneumonie, infection urinaire, paludisme, pied diabétique), arrêt de l’insuline, découverte du diabète, corticoïdes, infarctus',
        syndromes: ['syndrome-de-deshydratation-intracellulaire', 'syndrome-de-deshydratation-extracellulaire'],
        examens: [
          ['cetonemie', 'Cétonémie > 3 mmol/L : acidocétose.'],
          ['ionogramme', 'Kaliémie, bicarbonates, trou anionique.'],
        ],
      },
      {
        nom: 'Diabète compliqué (complications chroniques)',
        type: 'evolutive',
        description: 'Atteintes micro- et macrovasculaires d’un diabète ancien ou mal équilibré.',
        terrain: '- Diabète ancien, mal équilibré, HTA, tabac',
        fonctionnels:
          '- Baisse de l’acuité visuelle (rétinopathie)\n- Paresthésies, brûlures nocturnes des pieds (neuropathie)\n- Claudication intermittente, angor, troubles érectiles',
        generaux: '- Variable',
        physiques:
          '- Pied diabétique : mal perforant plantaire, plaie, gangrène, abolition des pouls\n- Hypoesthésie « en chaussettes », abolition des réflexes achilléens',
        paraclinique: '- Microalbuminurie puis protéinurie, DFG abaissé\n- Fond d’œil : rétinopathie',
        etiologies: '- Hyperglycémie chronique, HTA, dyslipidémie, tabac',
        syndromes: [],
        examens: [['fond-d-oeil', 'Dépistage annuel de la rétinopathie.']],
      },
    ],
  },

  // =================================================================== Drépanocytose
  drepanocytose: {
    urgences: {
      'crise-drepanocytaire-grave':
        'Douleurs osseuses intenses, douleur thoracique avec dyspnée, pâleur brutale avec grosse rate, déficit neurologique, priapisme, fièvre',
    },
    formes: [
      {
        nom: 'Drépanocytose homozygote SS : forme commune',
        type: 'commune',
        description:
          'Anémie hémolytique chronique émaillée de crises vaso-occlusives et d’infections, dès le 6e mois de vie.',
        terrain:
          '- Deux parents porteurs du gène S (AS) ; RDC parmi les pays les plus touchés\n- Symptômes à partir de 3–6 mois (chute de l’hémoglobine fœtale)',
        fonctionnels:
          '- Crises douloureuses osseuses (os longs, rachis, thorax)\n- Douleurs abdominales, asthénie, dyspnée d’effort',
        generaux: '- Fièvre lors des infections ou des crises\n- Retard staturo-pondéral, retard pubertaire',
        physiques:
          '- **Syndrome hémolytique chronique** : pâleur, subictère conjonctival\n- Splénomégalie chez le jeune enfant (disparaît ensuite : asplénie fonctionnelle)\n- Dysmorphie crânio-faciale (bosses frontales), souffle systolique fonctionnel\n- Ulcères de jambe (adulte)',
        paraclinique:
          '- Hb 6–9 g/dL, réticulocytes élevés, drépanocytes au frottis\n- Électrophorèse : HbS > 80 %, HbA absente\n- Bilirubine libre et LDH élevées',
        etiologies:
          '- Mutation du gène de la β-globine (HbS), transmission autosomique récessive\n- Facteurs déclenchants des crises : froid, déshydratation, infection, fièvre, effort, altitude, stress',
        syndromes: ['syndrome-hemolytique', 'syndrome-anemique', 'syndrome-vaso-occlusif'],
        examens: [
          ['electrophorese-hb', 'Diagnostic de certitude : HbS majoritaire.'],
          ['test-rapide-drepanocytose', 'Dépistage néonatal et au point de soins.'],
          ['reticulocytes', 'Élevés (hémolyse) ; effondrés dans l’érythroblastopénie.'],
        ],
      },
      {
        nom: 'Syndrome thoracique aigu',
        type: 'gravite',
        description: 'Complication pulmonaire grave, première cause de décès chez l’adulte drépanocytaire.',
        terrain: '- Crise vaso-occlusive, chirurgie abdominale, infection respiratoire, opioïdes',
        fonctionnels: '- Douleur thoracique, toux, dyspnée',
        generaux: '- Fièvre, tachycardie',
        physiques: '- Polypnée, râles crépitants, syndrome de condensation, hypoxie',
        paraclinique: '- Radiographie : nouvel infiltrat pulmonaire\n- SpO₂ abaissée, chute de l’hémoglobine',
        etiologies: '- Infection (pneumocoque, germes atypiques), embolie graisseuse, vaso-occlusion pulmonaire',
        syndromes: ['syndrome-thoracique-aigu', 'syndrome-de-detresse-respiratoire'],
        examens: [['radiographie-thoracique', 'Nouvel infiltrat : syndrome thoracique aigu.']],
      },
      {
        nom: 'Crises anémiques aiguës (séquestration splénique, érythroblastopénie)',
        type: 'gravite',
        description: 'Aggravation brutale de l’anémie, menace vitale chez l’enfant.',
        terrain: '- Enfant de moins de 5 ans (séquestration) ; infection à parvovirus B19 (érythroblastopénie)',
        fonctionnels: '- Fatigue brutale, douleur de l’hypocondre gauche',
        generaux: '- Tachycardie, signes de choc possibles',
        physiques: '- Pâleur intense, splénomégalie brutalement augmentée (séquestration), polypnée',
        paraclinique:
          '- Chute de l’Hb > 2 g/dL par rapport au taux de base\n- Réticulocytes élevés (séquestration) ou effondrés (érythroblastopénie)',
        etiologies: '- Séquestration de sang dans la rate ; parvovirus B19 ; paludisme associé',
        syndromes: ['syndrome-anemique'],
        examens: [['nfs', 'Hb à comparer au taux de base de l’enfant.']],
      },
      {
        nom: 'Accident vasculaire cérébral drépanocytaire',
        type: 'gravite',
        description: 'Vasculopathie cérébrale, surtout chez l’enfant de 2 à 16 ans ; prévenue par le doppler transcrânien.',
        terrain: '- Enfant SS, vitesses élevées au doppler transcrânien, anémie profonde',
        fonctionnels: '- Céphalées, troubles du langage',
        generaux: '- Fièvre possible',
        physiques: '- Hémiplégie, aphasie, convulsions, troubles de la conscience',
        paraclinique: '- Scanner ou IRM cérébrale ; doppler transcrânien en prévention',
        etiologies: '- Sténose des grosses artères cérébrales (vasculopathie drépanocytaire)',
        syndromes: ['syndrome-pyramidal'],
        examens: [['doppler-transcranien', 'Vitesses > 200 cm/s : risque élevé, programme transfusionnel.']],
      },
    ],
  },
};
