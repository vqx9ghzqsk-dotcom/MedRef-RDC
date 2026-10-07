'use strict';

/**
 * Syndromes : regroupements de signes cliniques ou biologiques. Chaque syndrome est
 * cliquable depuis la sémiologie des fiches et renvoie aux symptômes et aux autres
 * pathologies qui le présentent.
 *   { slug, nom, definition, elements (markdown), symptomes: [noms de symptomes] }
 * Contenu à valider par un médecin.
 */

module.exports = [
  {
    slug: 'syndrome-infectieux',
    nom: 'Syndrome infectieux',
    definition: 'Ensemble des signes généraux traduisant la réponse de l’organisme à une infection.',
    elements:
      '- Fièvre (> 38 °C) ou hypothermie (< 36 °C), frissons, sueurs\n- Tachycardie proportionnelle à la fièvre, polypnée\n- Asthénie, anorexie, courbatures\n- Biologie : hyperleucocytose à polynucléaires ou leucopénie, CRP élevée',
    symptomes: ['Fièvre', 'Asthénie', 'Anorexie', 'Hypothermie'],
  },
  {
    slug: 'syndrome-de-reponse-inflammatoire-systemique',
    nom: 'Syndrome de réponse inflammatoire systémique (SRIS)',
    definition:
      'Réponse inflammatoire généralisée définie par au moins deux critères ; associé à une infection, il oriente vers un sepsis.',
    elements:
      '- Température > 38 °C ou < 36 °C\n- Fréquence cardiaque > 90/min (adulte)\n- Fréquence respiratoire > 20/min ou PaCO₂ < 32 mmHg\n- Leucocytes > 12 000/mm³ ou < 4 000/mm³\n- Chez l’adulte, le qSOFA (FR ≥ 22/min, confusion, PAS ≤ 100 mmHg) est préféré au lit du malade',
    symptomes: ['Fièvre', 'Hypothermie', 'Tachypnée'],
  },
  {
    slug: 'syndrome-meninge',
    nom: 'Syndrome méningé',
    definition:
      'Ensemble des signes traduisant une irritation des méninges (infection, hémorragie méningée).',
    elements:
      '- **Signes fonctionnels** : céphalées intenses diffuses, vomissements faciles « en jet », photophobie (trépied méningitique), constipation\n- **Signes physiques** : raideur de nuque, signe de Kernig, signe de Brudzinski, attitude en « chien de fusil »\n- Chez le nourrisson : fontanelle antérieure bombée, hypotonie de la nuque, cri plaintif, refus de téter',
    symptomes: ['Céphalées', 'Vomissements', 'Raideur de nuque', 'Fièvre'],
  },
  {
    slug: 'syndrome-d-hypertension-intracranienne',
    nom: 'Syndrome d’hypertension intracrânienne (HTIC)',
    definition:
      'Ensemble des signes liés à l’augmentation de la pression à l’intérieur de la boîte crânienne.',
    elements:
      '- Céphalées matinales, rebelles aux antalgiques, aggravées par l’effort et la toux\n- Vomissements « en jet », soulageant les céphalées\n- Troubles visuels (éclipses), œdème papillaire au fond d’œil\n- Troubles de la conscience, bradycardie et HTA (réflexe de Cushing) annonçant l’engagement\n- Chez le nourrisson : bombement de la fontanelle, macrocrânie, regard « en coucher de soleil »',
    symptomes: ['Céphalées', 'Vomissements', 'Troubles visuels', 'Troubles de la conscience'],
  },
  {
    slug: 'syndrome-d-engagement-cerebral',
    nom: 'Syndrome d’engagement cérébral',
    definition:
      'Hernie d’une partie du cerveau à travers un orifice rigide sous l’effet de l’HTIC ; urgence neurochirurgicale.',
    elements:
      '- Engagement temporal : mydriase aréactive homolatérale, hémiplégie controlatérale, aggravation de la conscience\n- Engagement des amygdales cérébelleuses : torticolis, raideur de nuque, troubles respiratoires, bradycardie\n- Triade de Cushing : HTA, bradycardie, respiration irrégulière',
    symptomes: ['Troubles de la conscience', 'Déficit moteur'],
  },
  {
    slug: 'syndrome-confusionnel',
    nom: 'Syndrome confusionnel',
    definition:
      'Altération aiguë et fluctuante de la vigilance et des fonctions cognitives, souvent d’origine organique.',
    elements:
      '- Début brutal, fluctuation au cours de la journée, aggravation nocturne\n- Désorientation temporo-spatiale, troubles de l’attention et de la mémoire\n- Onirisme, agitation ou au contraire prostration\n- Toujours rechercher une cause : hypoglycémie, infection, troubles métaboliques, toxiques',
    symptomes: ['Troubles de la conscience'],
  },
  {
    slug: 'syndrome-pyramidal',
    nom: 'Syndrome pyramidal',
    definition:
      'Ensemble des signes traduisant une atteinte de la voie motrice principale (faisceau pyramidal).',
    elements:
      '- Déficit moteur à prédominance distale (hémiplégie, monoplégie)\n- Réflexes ostéotendineux vifs, diffusés, polycinétiques ; clonus\n- Signe de Babinski (extension lente du gros orteil)\n- Hypertonie spastique « en lame de canif » (tardive) ; flasque à la phase aiguë',
    symptomes: ['Déficit moteur', 'Troubles du langage'],
  },
  {
    slug: 'syndrome-anemique',
    nom: 'Syndrome anémique',
    definition: 'Signes liés à la baisse de l’hémoglobine et à l’hypoxie tissulaire qui en résulte.',
    elements:
      '- Pâleur cutanéo-muqueuse (conjonctives, paumes, ongles, lit unguéal)\n- Asthénie, dyspnée d’effort, palpitations, tachycardie\n- Céphalées, vertiges, acouphènes\n- Souffle systolique fonctionnel anorganique\n- Signes de mauvaise tolérance : dyspnée de repos, angor, signes d’insuffisance cardiaque, troubles de la conscience',
    symptomes: ['Pâleur', 'Asthénie', 'Dyspnée', 'Palpitations', 'Céphalées'],
  },
  {
    slug: 'syndrome-hemolytique',
    nom: 'Syndrome hémolytique',
    definition: 'Ensemble des signes traduisant une destruction excessive des globules rouges.',
    elements:
      '- Triade : pâleur, ictère (bilirubine libre), splénomégalie (hémolyse chronique)\n- Urines foncées « coca-cola » (hémoglobinurie) dans l’hémolyse intravasculaire\n- Biologie : anémie régénérative (réticulocytes élevés), LDH élevées, haptoglobine effondrée, bilirubine libre augmentée',
    symptomes: ['Pâleur', 'Ictère', 'Splénomégalie'],
  },
  {
    slug: 'syndrome-hemorragique',
    nom: 'Syndrome hémorragique',
    definition: 'Saignements anormaux par leur siège, leur abondance ou leur caractère spontané.',
    elements:
      '- Cutanéo-muqueux : purpura pétéchial ou ecchymotique, gingivorragies, épistaxis (hémostase primaire)\n- Hématomes profonds, hémarthroses (coagulation)\n- Saignements aux points de ponction, hématurie, hématémèse, méléna\n- Rechercher les signes de gravité : choc, saignement cérébral ou digestif',
    symptomes: ['Saignement vaginal', 'Hémoptysie'],
  },
  {
    slug: 'syndrome-de-choc',
    nom: 'État de choc',
    definition:
      'Insuffisance circulatoire aiguë avec hypoperfusion tissulaire ; urgence vitale quel que soit le mécanisme.',
    elements:
      '- Hypotension : PAS < 90 mmHg ou chute > 40 mmHg (adulte) ; tardive chez l’enfant\n- Tachycardie, pouls filant\n- Signes d’hypoperfusion : marbrures (genoux), extrémités froides, temps de recoloration cutanée > 3 s\n- Oligurie (< 0,5 mL/kg/h), troubles de la conscience, polypnée\n- Lactates > 2 mmol/L',
    symptomes: ['Troubles de la conscience', 'Oligurie', 'Tachypnée', 'Palpitations'],
  },
  {
    slug: 'syndrome-de-deshydratation-extracellulaire',
    nom: 'Syndrome de déshydratation extracellulaire',
    definition: 'Perte de sodium et d’eau du secteur extracellulaire (vasculaire et interstitiel).',
    elements:
      '- Pli cutané persistant (abdomen, face antérieure du thorax chez l’enfant)\n- Yeux enfoncés (énophtalmie), fontanelle déprimée chez le nourrisson\n- Tachycardie, hypotension orthostatique puis de décubitus, pouls faible\n- Oligurie, veines jugulaires plates\n- Perte de poids rapide ; hémoconcentration (hématocrite et protides élevés)',
    symptomes: ['Diarrhée', 'Vomissements', 'Oligurie'],
  },
  {
    slug: 'syndrome-de-deshydratation-intracellulaire',
    nom: 'Syndrome de déshydratation intracellulaire',
    definition: 'Perte d’eau des cellules par hypertonie plasmatique (hypernatrémie, hyperglycémie).',
    elements:
      '- Soif intense, sécheresse des muqueuses (face interne des joues)\n- Fièvre d’origine centrale, perte de poids\n- Troubles neurologiques : irritabilité, somnolence, convulsions, coma\n- Biologie : hypernatrémie, hyperosmolarité',
    symptomes: ['Troubles de la conscience', 'Convulsions', 'Fièvre'],
  },
  {
    slug: 'syndrome-choleriforme',
    nom: 'Syndrome cholériforme',
    definition:
      'Diarrhée aqueuse abondante d’origine sécrétoire (toxinique), sans sang ni fièvre importante.',
    elements:
      '- Selles liquides très fréquentes et abondantes, « eau de riz »\n- Vomissements\n- Absence habituelle de fièvre et de douleurs abdominales marquées\n- Déshydratation rapide, parfois en quelques heures',
    symptomes: ['Diarrhée', 'Vomissements'],
  },
  {
    slug: 'syndrome-dysenterique',
    nom: 'Syndrome dysentérique',
    definition: 'Diarrhée glairo-sanglante traduisant une atteinte invasive de la muqueuse colique.',
    elements:
      '- Selles nombreuses, peu abondantes, glaireuses et sanglantes (« crachats rectaux »)\n- Douleurs abdominales, épreintes (coliques) et ténesme (douleur rectale avec envie impérieuse)\n- Fièvre fréquente (shigellose)',
    symptomes: ['Diarrhée', 'Douleur abdominale', 'Fièvre'],
  },
  {
    slug: 'syndrome-de-condensation-pulmonaire',
    nom: 'Syndrome de condensation pulmonaire',
    definition:
      'Signes traduisant le remplacement de l’air alvéolaire par un exsudat ou un tissu (pneumonie).',
    elements:
      '- Matité à la percussion\n- Augmentation des vibrations vocales\n- Râles crépitants fins, en fin d’inspiration\n- Souffle tubaire (condensation étendue avec bronche perméable)\n- Radiographie : opacité alvéolaire systématisée avec bronchogramme aérien',
    symptomes: ['Toux', 'Dyspnée', 'Fièvre', 'Tachypnée', 'Douleur thoracique'],
  },
  {
    slug: 'syndrome-d-epanchement-pleural-liquidien',
    nom: 'Syndrome d’épanchement pleural liquidien',
    definition: 'Signes traduisant la présence de liquide dans la cavité pleurale.',
    elements:
      '- Matité déclive, franche, « hydrique »\n- Abolition des vibrations vocales et du murmure vésiculaire\n- Souffle pleurétique (doux, lointain, expiratoire) à la limite supérieure\n- Douleur thoracique majorée par l’inspiration, toux sèche au changement de position',
    symptomes: ['Douleur thoracique', 'Dyspnée', 'Toux'],
  },
  {
    slug: 'syndrome-bronchique-obstructif',
    nom: 'Syndrome bronchique obstructif',
    definition:
      'Signes traduisant une diminution du calibre des bronches (bronchospasme, sécrétions, œdème).',
    elements:
      '- Dyspnée expiratoire, freinage expiratoire, expiration prolongée\n- Sibilants diffus, bilatéraux ; « silence auscultatoire » dans les formes graves\n- Distension thoracique, hypersonorité\n- Débit expiratoire de pointe (DEP) et VEMS abaissés, réversibles sous bronchodilatateur dans l’asthme',
    symptomes: ['Dyspnée', 'Sibilants', 'Toux'],
  },
  {
    slug: 'syndrome-de-detresse-respiratoire',
    nom: 'Syndrome de détresse respiratoire',
    definition: 'Insuffisance respiratoire aiguë menaçant l’oxygénation ; urgence vitale.',
    elements:
      '- Polypnée (ou bradypnée d’épuisement), difficulté à parler ou à téter\n- Signes de lutte : tirage intercostal et sus-sternal, battement des ailes du nez, balancement thoraco-abdominal, entonnoir xiphoïdien, geignement expiratoire\n- Cyanose, SpO₂ < 90 % (< 92 % chez l’enfant)\n- Signes d’hypercapnie : sueurs, HTA, troubles de la conscience, astérixis',
    symptomes: ['Dyspnée', 'Tachypnée', 'Troubles de la conscience'],
  },
  {
    slug: 'syndrome-d-impregnation-tuberculeuse',
    nom: 'Syndrome d’imprégnation tuberculeuse',
    definition: 'Altération progressive de l’état général évocatrice d’une tuberculose évolutive.',
    elements:
      '- Fébricule ou fièvre vespérale (en fin de journée)\n- Sueurs nocturnes profuses\n- Asthénie, anorexie, amaigrissement (les « 3 A »)\n- Évolution sur plusieurs semaines',
    symptomes: ['Fièvre', 'Sueurs nocturnes', 'Perte de poids', 'Asthénie', 'Anorexie'],
  },
  {
    slug: 'syndrome-d-alteration-de-l-etat-general',
    nom: 'Altération de l’état général (AEG)',
    definition:
      'Association d’asthénie, d’anorexie et d’amaigrissement ; signe d’une maladie chronique évolutive.',
    elements:
      '- Asthénie (physique, psychique, sexuelle)\n- Anorexie (élective ou globale)\n- Amaigrissement : significatif si > 5 % du poids en 1 mois ou > 10 % en 6 mois',
    symptomes: ['Asthénie', 'Anorexie', 'Perte de poids'],
  },
  {
    slug: 'syndrome-oedemateux',
    nom: 'Syndrome œdémateux',
    definition: 'Accumulation de liquide dans le secteur interstitiel.',
    elements:
      '- Œdèmes blancs, mous, indolores, prenant le godet, déclives (chevilles, lombes chez l’alité)\n- Prise de poids\n- Formes diffuses : anasarque (épanchements des séreuses : ascite, épanchement pleural)\n- Orienter : cardiaque, rénal (protéinurie), hépatique, carentiel (hypoalbuminémie)',
    symptomes: ['Œdèmes'],
  },
  {
    slug: 'syndrome-d-insuffisance-cardiaque-gauche',
    nom: 'Syndrome d’insuffisance cardiaque gauche',
    definition: 'Signes de congestion pulmonaire liés à l’élévation des pressions dans les cavités gauches.',
    elements:
      '- Dyspnée d’effort puis de repos, orthopnée (nombre d’oreillers), dyspnée paroxystique nocturne\n- Toux de décubitus, expectoration mousseuse rosée (OAP)\n- Tachycardie, bruit de galop (B3), souffle d’insuffisance mitrale fonctionnelle\n- Râles crépitants aux bases, remontant vers les sommets dans l’OAP',
    symptomes: ['Dyspnée', 'Toux', 'Tachypnée', 'Palpitations'],
  },
  {
    slug: 'syndrome-d-insuffisance-cardiaque-droite',
    nom: 'Syndrome d’insuffisance cardiaque droite',
    definition: 'Signes de congestion systémique liés à l’élévation des pressions dans les cavités droites.',
    elements:
      '- Hépatalgie d’effort, hépatomégalie douloureuse\n- Turgescence jugulaire, reflux hépato-jugulaire\n- Œdèmes des membres inférieurs, ascite, anasarque\n- Souffle d’insuffisance tricuspidienne fonctionnelle (signe de Carvallo)',
    symptomes: ['Œdèmes', 'Douleur abdominale', 'Distension abdominale'],
  },
  {
    slug: 'syndrome-uremique',
    nom: 'Syndrome urémique',
    definition:
      'Manifestations cliniques de l’accumulation des déchets azotés lors d’une insuffisance rénale sévère.',
    elements:
      '- Digestifs : anorexie, nausées, vomissements, haleine urémique\n- Neurologiques : asthénie, troubles de la conscience, astérixis, convulsions\n- Péricardite (frottement péricardique), saignements (thrombopathie)\n- Prurit ; acidose (respiration ample de Kussmaul)',
    symptomes: ['Vomissements', 'Anorexie', 'Troubles de la conscience', 'Asthénie'],
  },
  {
    slug: 'syndrome-cardinal-diabetique',
    nom: 'Syndrome cardinal (polyuro-polydipsique)',
    definition: 'Tableau clinique de l’hyperglycémie importante et prolongée.',
    elements:
      '- Polyurie (> 3 L/24 h) et polydipsie compensatrice, nycturie, énurésie secondaire chez l’enfant\n- Polyphagie paradoxale\n- Amaigrissement malgré l’appétit conservé\n- Asthénie',
    symptomes: ['Polyurie-polydipsie', 'Perte de poids', 'Asthénie'],
  },
  {
    slug: 'syndrome-d-insuffisance-hepatocellulaire',
    nom: 'Syndrome d’insuffisance hépatocellulaire',
    definition: 'Signes de la défaillance des fonctions de synthèse et d’épuration du foie.',
    elements:
      '- Ictère, angiomes stellaires, érythrose palmaire, ongles blancs (leuconychie)\n- Syndrome hémorragique (baisse des facteurs de coagulation)\n- Encéphalopathie hépatique : astérixis, confusion, foetor hepaticus\n- Biologie : TP et facteur V abaissés, hypoalbuminémie',
    symptomes: ['Ictère', 'Troubles de la conscience', 'Asthénie'],
  },
  {
    slug: 'syndrome-d-hypertension-portale',
    nom: 'Syndrome d’hypertension portale',
    definition: 'Signes liés à l’augmentation de pression dans le système porte (cirrhose le plus souvent).',
    elements:
      '- Splénomégalie, circulation veineuse collatérale abdominale (« tête de méduse »)\n- Ascite\n- Varices œsophagiennes et risque d’hémorragie digestive (hématémèse, méléna)\n- Thrombopénie (hypersplénisme)',
    symptomes: ['Splénomégalie', 'Distension abdominale'],
  },
  {
    slug: 'syndrome-d-irritation-peritoneale',
    nom: 'Syndrome d’irritation péritonéale',
    definition: 'Signes traduisant l’inflammation du péritoine (péritonite), urgence chirurgicale.',
    elements:
      '- Douleur abdominale intense, d’aggravation progressive ou brutale\n- Défense puis contracture abdominale (« ventre de bois »), permanente, douloureuse, invincible\n- Douleur à la décompression (signe de Blumberg), cri de l’ombilic\n- Douleur au toucher rectal ou vaginal (cul-de-sac de Douglas)\n- Vomissements, iléus réflexe',
    symptomes: ['Douleur abdominale', 'Vomissements', 'Fièvre'],
  },
  {
    slug: 'syndrome-occlusif',
    nom: 'Syndrome occlusif',
    definition: 'Arrêt du transit intestinal par obstacle mécanique ou paralysie de l’intestin.',
    elements:
      '- Tétrade : douleur abdominale, vomissements, arrêt des matières et des gaz, météorisme abdominal\n- Ondes péristaltiques visibles (occlusion mécanique du grêle), bruits hydro-aériques\n- Silence auscultatoire (iléus paralytique, occlusion évoluée)\n- ASP : niveaux hydro-aériques',
    symptomes: [
      'Douleur abdominale',
      'Vomissements',
      'Arrêt des matières et des gaz',
      'Distension abdominale',
    ],
  },
  {
    slug: 'syndrome-d-hemorragie-interne',
    nom: 'Syndrome d’hémorragie interne',
    definition: 'Signes d’une perte sanguine non extériorisée (hémopéritoine, hémothorax…).',
    elements:
      '- Pâleur, soif, agitation ou lipothymie\n- Tachycardie, pouls filant, hypotension, état de choc\n- Douleur scapulaire (irritation diaphragmatique par l’hémopéritoine)\n- Abdomen sensible, matité des flancs, « cri du Douglas » au toucher vaginal',
    symptomes: ['Pâleur', 'Douleur abdominale', 'Troubles de la conscience'],
  },
  {
    slug: 'syndrome-vaso-occlusif',
    nom: 'Crise vaso-occlusive drépanocytaire',
    definition:
      'Occlusion de la microcirculation par les hématies falciformées, à l’origine de douleurs aiguës et d’infarctus tissulaires.',
    elements:
      '- Douleurs osseuses intenses (os longs, rachis, thorax), articulaires ou abdominales\n- Chez le nourrisson : syndrome pieds-mains (dactylite, tuméfaction douloureuse des mains et des pieds)\n- Facteurs déclenchants : froid, déshydratation, infection, effort, hypoxie\n- Signes de gravité : syndrome thoracique aigu, priapisme, déficit neurologique',
    symptomes: ['Douleurs osseuses', 'Fièvre', 'Douleur thoracique'],
  },
  {
    slug: 'syndrome-thoracique-aigu',
    nom: 'Syndrome thoracique aigu',
    definition:
      'Complication grave de la drépanocytose associant signes respiratoires et nouvel infiltrat pulmonaire.',
    elements:
      '- Douleur thoracique, fièvre, toux, dyspnée, tachypnée\n- Râles crépitants, syndrome de condensation\n- Hypoxémie (SpO₂ < 95 % ou baisse > 3 points)\n- Radiographie : nouvel infiltrat pulmonaire',
    symptomes: ['Douleur thoracique', 'Fièvre', 'Toux', 'Dyspnée', 'Tachypnée'],
  },
  {
    slug: 'syndrome-hellp',
    nom: 'Syndrome HELLP',
    definition:
      'Complication de la pré-éclampsie : hémolyse (H), cytolyse hépatique (EL), thrombopénie (LP).',
    elements:
      '- Barre épigastrique (douleur en barre de l’hypocondre droit ou de l’épigastre), nausées, vomissements\n- Hémolyse : schizocytes, LDH > 600 UI/L, haptoglobine effondrée, bilirubine augmentée\n- ASAT > 70 UI/L\n- Plaquettes < 100 000/mm³\n- Risques : hématome sous-capsulaire du foie, CIVD, décès maternel',
    symptomes: ['Douleur abdominale', 'Vomissements'],
  },
  {
    slug: 'syndrome-de-pre-eclampsie',
    nom: 'Syndrome pré-éclamptique',
    definition:
      'Association d’une HTA gravidique (après 20 SA) et d’une protéinurie significative ou d’une atteinte d’organe.',
    elements:
      '- PA ≥ 140/90 mmHg à deux reprises après 20 SA\n- Protéinurie ≥ 0,3 g/24 h (ou ≥ 2+ à la bandelette)\n- Œdèmes d’apparition brutale, prise de poids rapide (non obligatoires)\n- Signes neurosensoriels : céphalées, phosphènes, acouphènes, réflexes vifs',
    symptomes: ['Céphalées', 'Troubles visuels', 'Œdèmes'],
  },
  {
    slug: 'syndrome-convulsif',
    nom: 'Crise convulsive généralisée',
    definition: 'Décharge neuronale excessive et hypersynchrone avec manifestations motrices bilatérales.',
    elements:
      '- Phase tonique (contraction de tout le corps, apnée, cyanose, morsure latérale de langue)\n- Phase clonique (secousses rythmiques bilatérales)\n- Phase résolutive (stertor, coma post-critique, perte d’urines)\n- Confusion post-critique puis amnésie de la crise',
    symptomes: ['Convulsions', 'Troubles de la conscience'],
  },
  {
    slug: 'syndrome-de-malnutrition-oedemateuse',
    nom: 'Kwashiorkor (malnutrition œdémateuse)',
    definition: 'Malnutrition aiguë sévère avec œdèmes bilatéraux prenant le godet.',
    elements:
      '- Œdèmes bilatéraux des pieds, pouvant s’étendre aux jambes, aux mains et au visage\n- Apathie, irritabilité, anorexie\n- Lésions cutanées (dermatose « en peinture écaillée »), cheveux fins, roux, cassants\n- Hépatomégalie (stéatose)',
    symptomes: ['Œdèmes', 'Anorexie', 'Diarrhée'],
  },
  {
    slug: 'syndrome-de-retention-hydrosodee',
    nom: 'Syndrome de rétention hydrosodée',
    definition: 'Accumulation d’eau et de sel dans l’organisme (insuffisance cardiaque, rénale, hépatique).',
    elements:
      '- Prise de poids rapide\n- Œdèmes déclives, épanchements des séreuses\n- HTA (origine rénale), turgescence jugulaire (origine cardiaque)\n- Oligurie',
    symptomes: ['Œdèmes', 'Oligurie', 'Dyspnée'],
  },
];
