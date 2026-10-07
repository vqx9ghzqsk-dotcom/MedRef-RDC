'use strict';

/**
 * Glossaire sémiologique : la définition s'affiche au survol (ou au toucher) du
 * terme dans les rubriques de sémiologie. `variantes` : autres formes reconnues
 * dans le texte (pluriel, synonyme) ; `syndrome` : slug du syndrome associé.
 * Contenu à valider par un médecin.
 */

const t = (terme, definition, extra = {}) => ({ terme, definition, ...extra });

module.exports = [
  // ------------------------------------------------------------------ Signes généraux
  t('Fébricule', 'Fièvre modérée, entre 37,5 et 38 °C.', { variantes: ['fébricule vespéral'] }),
  t(
    'Fièvre vespérale',
    'Fièvre qui apparaît ou s’accentue en fin de journée ; évoque notamment la tuberculose.',
  ),
  t(
    'Fièvre en plateau',
    'Fièvre restant élevée de façon continue, avec des variations de moins de 1 °C sur 24 h (typhoïde).',
  ),
  t(
    'Fièvre intermittente',
    'Accès fébriles séparés par des périodes d’apyrexie ; tierce ou quarte dans le paludisme.',
    {
      variantes: ['fièvre tierce', 'fièvre quarte'],
    },
  ),
  t(
    'Accès palustre',
    'Succession frisson–chaleur–sueurs, liée à l’éclatement synchrone des hématies parasitées.',
    {
      variantes: ['accès pernicieux'],
    },
  ),
  t(
    'Frissons',
    'Contractions musculaires involontaires accompagnant l’ascension thermique ; évoquent une bactériémie.',
    {
      variantes: ['frisson'],
    },
  ),
  t('Asthénie', 'Fatigue persistante, non améliorée par le repos.'),
  t('Anorexie', 'Perte de l’appétit (à ne pas confondre avec l’anorexie mentale).'),
  t(
    'Prostration',
    'Faiblesse extrême : incapacité à s’asseoir, à se tenir debout, à boire ou à téter sans aide ; critère de gravité du paludisme.',
  ),
  t('Cachexie', 'Amaigrissement extrême avec fonte musculaire et adipeuse.'),
  t('Altération de l’état général', 'Association d’asthénie, d’anorexie et d’amaigrissement.', {
    variantes: ['AEG'],
    syndrome: 'syndrome-d-alteration-de-l-etat-general',
  }),
  t(
    'Hypothermie',
    'Température centrale inférieure à 36 °C (35,5 °C chez le nouveau-né) ; signe de gravité en cas d’infection.',
  ),
  t(
    'Marbrures',
    'Taches violacées en mailles sur la peau (genoux d’abord) traduisant une hypoperfusion ; signe de choc.',
    {
      syndrome: 'syndrome-de-choc',
    },
  ),
  t(
    'Temps de recoloration cutanée',
    'Temps de retour de la couleur après pression d’un ongle ou de la peau ; anormal au-delà de 3 s.',
    {
      variantes: ['TRC'],
    },
  ),
  t(
    'Pli cutané persistant',
    'Pli de peau pincé qui s’efface lentement (> 2 s) ; signe de déshydratation extracellulaire.',
    {
      variantes: ['pli cutané'],
      syndrome: 'syndrome-de-deshydratation-extracellulaire',
    },
  ),
  t('Énophtalmie', 'Enfoncement des globes oculaires dans les orbites ; signe de déshydratation.', {
    variantes: ['yeux enfoncés'],
  }),
  t(
    'Cyanose',
    'Coloration bleutée de la peau et des muqueuses (lèvres, ongles) par excès d’hémoglobine désoxygénée.',
  ),
  t(
    'Pâleur cutanéo-muqueuse',
    'Décoloration de la peau et des muqueuses (conjonctives, paumes, lit unguéal) ; signe d’anémie.',
    {
      variantes: ['pâleur palmaire', 'pâleur conjonctivale'],
      syndrome: 'syndrome-anemique',
    },
  ),
  t('Ictère', 'Coloration jaune de la peau et des conjonctives due à l’excès de bilirubine.', {
    variantes: ['subictère', 'ictère conjonctival'],
  }),
  t(
    'Purpura',
    'Taches rouges ou violacées ne s’effaçant pas à la vitropression, liées à du sang extravasé dans le derme.',
    {
      variantes: ['purpura fulminans', 'pétéchies', 'purpura pétéchial'],
    },
  ),
  t(
    'Vitropression',
    'Pression d’une lame de verre transparente sur une lésion cutanée : le purpura ne s’efface pas, un érythème s’efface.',
  ),
  t('Œdème prenant le godet', 'Œdème mou qui garde l’empreinte du doigt après pression (signe du godet).', {
    variantes: ['signe du godet', 'godet'],
    syndrome: 'syndrome-oedemateux',
  }),
  t('Anasarque', 'Œdème généralisé associant œdèmes sous-cutanés diffus et épanchements des séreuses.'),
  t(
    'Hippocratisme digital',
    'Bombement des ongles « en verre de montre » et élargissement des extrémités des doigts ; insuffisance respiratoire chronique, cardiopathie cyanogène.',
  ),
  t(
    'Adénopathie',
    'Ganglion lymphatique augmenté de volume (> 1 cm), à décrire : siège, taille, consistance, sensibilité, mobilité.',
    {
      variantes: ['adénopathies', 'polyadénopathie'],
    },
  ),
  t('Muguet', 'Candidose de la bouche : dépôts blanchâtres, crémeux, se détachant au grattage.'),
  t(
    'Leucoplasie chevelue',
    'Plaques blanches striées, non détachables, des bords latéraux de la langue ; évocatrice d’immunodépression (VIH).',
  ),

  // ------------------------------------------------------------------ Respiratoire
  t(
    'Polypnée',
    'Respiration rapide et superficielle ; fréquence respiratoire au-dessus de la normale pour l’âge.',
    {
      variantes: ['tachypnée'],
    },
  ),
  t(
    'Bradypnée',
    'Respiration anormalement lente ; signe d’épuisement respiratoire ou de dépression centrale.',
  ),
  t(
    'Orthopnée',
    'Dyspnée en position couchée, soulagée par la position assise ; mesurée en nombre d’oreillers.',
    {
      syndrome: 'syndrome-d-insuffisance-cardiaque-gauche',
    },
  ),
  t(
    'Dyspnée paroxystique nocturne',
    'Crise d’étouffement réveillant le malade la nuit et l’obligeant à s’asseoir ; insuffisance cardiaque gauche.',
  ),
  t(
    'Dyspnée expiratoire',
    'Difficulté à expirer avec expiration prolongée et sifflante ; obstruction bronchique (asthme).',
    {
      syndrome: 'syndrome-bronchique-obstructif',
    },
  ),
  t(
    'Tirage',
    'Dépression inspiratoire des espaces intercostaux, du creux sus-sternal ou sous la cage thoracique ; signe de lutte respiratoire.',
    {
      variantes: ['tirage intercostal', 'tirage sous-costal', 'tirage sus-sternal'],
      syndrome: 'syndrome-de-detresse-respiratoire',
    },
  ),
  t(
    'Battement des ailes du nez',
    'Dilatation des narines à chaque inspiration ; signe de lutte respiratoire, surtout chez l’enfant.',
  ),
  t(
    'Geignement expiratoire',
    'Bruit plaintif en fin d’expiration (expiration contre glotte fermée) ; détresse respiratoire du nourrisson.',
    {
      variantes: ['geignement'],
    },
  ),
  t(
    'Balancement thoraco-abdominal',
    'Mouvements paradoxaux du thorax et de l’abdomen ; signe d’épuisement respiratoire.',
  ),
  t(
    'Respiration de Kussmaul',
    'Respiration ample, profonde et rapide, compensant une acidose métabolique (acidocétose, paludisme grave, urémie).',
    {
      variantes: ['respiration acidosique', 'Kussmaul'],
    },
  ),
  t(
    'Murmure vésiculaire',
    'Bruit respiratoire normal entendu à l’auscultation du poumon ; diminué ou aboli en cas d’épanchement ou de condensation.',
  ),
  t(
    'Râles crépitants',
    'Bruits fins, secs, en fin d’inspiration, comparés au froissement de cheveux ; alvéolite (pneumonie, OAP).',
    {
      variantes: ['crépitants'],
    },
  ),
  t(
    'Râles sous-crépitants',
    'Bruits humides, bulleux, aux deux temps respiratoires ; sécrétions bronchiques.',
    {
      variantes: ['ronchi'],
    },
  ),
  t(
    'Sibilants',
    'Bruits continus aigus, sifflants, surtout expiratoires ; rétrécissement des bronches (asthme).',
    {
      variantes: ['sibilances'],
      syndrome: 'syndrome-bronchique-obstructif',
    },
  ),
  t(
    'Silence auscultatoire',
    'Absence de bruit respiratoire à l’auscultation ; dans l’asthme, signe de gravité extrême (bronches quasi fermées).',
  ),
  t(
    'Souffle tubaire',
    'Souffle intense, rude, inspiratoire, au centre d’une zone de condensation pulmonaire.',
    {
      syndrome: 'syndrome-de-condensation-pulmonaire',
    },
  ),
  t(
    'Souffle pleurétique',
    'Souffle doux, lointain, expiratoire, perçu à la limite supérieure d’un épanchement pleural.',
  ),
  t(
    'Matité',
    'Son sourd à la percussion, traduisant une zone dense (condensation) ou liquidienne (épanchement).',
    {
      variantes: ['matité déclive'],
    },
  ),
  t(
    'Vibrations vocales',
    'Vibrations perçues par la main posée sur le thorax quand le malade parle ; augmentées dans la condensation, abolies dans l’épanchement.',
  ),
  t(
    'Hémoptysie',
    'Rejet par la bouche de sang provenant des voies respiratoires sous-glottiques, lors d’un effort de toux.',
  ),
  t(
    'Expectoration',
    'Rejet par la toux de sécrétions bronchiques ; à décrire : muqueuse, purulente, mousseuse, sanglante.',
    {
      variantes: ['expectorations', 'crachats'],
    },
  ),

  // ------------------------------------------------------------------ Cardio-vasculaire
  t(
    'Bruit de galop',
    'Troisième ou quatrième bruit cardiaque surajouté, donnant un rythme à trois temps ; insuffisance cardiaque.',
    {
      variantes: ['galop'],
    },
  ),
  t(
    'Turgescence jugulaire',
    'Distension des veines jugulaires en position demi-assise à 45° ; élévation de la pression veineuse (cœur droit).',
    {
      variantes: ['turgescence des jugulaires'],
      syndrome: 'syndrome-d-insuffisance-cardiaque-droite',
    },
  ),
  t(
    'Reflux hépato-jugulaire',
    'Turgescence jugulaire apparaissant ou s’accentuant lors d’une pression sur le foie ; insuffisance cardiaque droite.',
  ),
  t(
    'Hépatalgie',
    'Douleur de l’hypocondre droit liée à la distension de la capsule du foie (foie cardiaque, hépatite).',
  ),
  t('Pouls filant', 'Pouls rapide, faible et difficile à percevoir ; état de choc.'),
  t(
    'Tachycardie',
    'Fréquence cardiaque au-dessus de la normale pour l’âge (> 100/min chez l’adulte au repos).',
  ),
  t('Bradycardie', 'Fréquence cardiaque en dessous de la normale pour l’âge (< 60/min chez l’adulte).'),
  t(
    'Souffle systolique',
    'Bruit anormal entendu entre B1 et B2 ; fonctionnel (anémie, fièvre) ou lésionnel (valvulopathie).',
    {
      variantes: ['souffle anorganique'],
    },
  ),
  t(
    'Réflexe de Cushing',
    'Association HTA, bradycardie et troubles respiratoires traduisant une HTIC grave, menace d’engagement.',
    {
      variantes: ['triade de Cushing'],
      syndrome: 'syndrome-d-engagement-cerebral',
    },
  ),
  t(
    'Index de choc',
    'Rapport fréquence cardiaque / pression artérielle systolique ; ≥ 1 évoque une hypovolémie grave (≥ 0,9 en obstétrique).',
  ),

  // ------------------------------------------------------------------ Digestif
  t(
    'Défense abdominale',
    'Contraction réflexe de la paroi abdominale provoquée par la palpation, que l’on peut vaincre doucement.',
    {
      variantes: ['défense'],
      syndrome: 'syndrome-d-irritation-peritoneale',
    },
  ),
  t(
    'Contracture abdominale',
    'Contraction permanente, douloureuse et invincible de la paroi (« ventre de bois ») ; péritonite.',
    {
      variantes: ['ventre de bois', 'contracture'],
      syndrome: 'syndrome-d-irritation-peritoneale',
    },
  ),
  t(
    'Signe de Blumberg',
    'Douleur vive à la décompression brutale de l’abdomen après une palpation profonde ; irritation péritonéale.',
    {
      variantes: ['Blumberg'],
    },
  ),
  t(
    'Point de McBurney',
    'Point situé au tiers externe de la ligne ombilic–épine iliaque antéro-supérieure droite ; douleur provoquée dans l’appendicite.',
    {
      variantes: ['McBurney'],
    },
  ),
  t(
    'Signe de Rovsing',
    'Douleur en fosse iliaque droite provoquée par la pression de la fosse iliaque gauche ; appendicite.',
    {
      variantes: ['Rovsing'],
    },
  ),
  t(
    'Signe du psoas',
    'Douleur de la fosse iliaque droite à la flexion contrariée de la cuisse ; appendice rétro-cæcal.',
    {
      variantes: ['psoïtis'],
    },
  ),
  t('Cri de l’ombilic', 'Douleur vive à la palpation de l’ombilic ; irritation péritonéale chez l’enfant.'),
  t(
    'Cri du Douglas',
    'Douleur vive au toucher rectal ou vaginal en appuyant sur le cul-de-sac de Douglas ; épanchement ou inflammation pelvienne.',
    {
      variantes: ['douleur au toucher rectal', 'Douglas bombé'],
    },
  ),
  t('Météorisme', 'Distension de l’abdomen par des gaz, avec tympanisme à la percussion.', {
    variantes: ['météorisme abdominal', 'tympanisme'],
  }),
  t(
    'Ondes péristaltiques',
    'Mouvements visibles de l’intestin sous la paroi, en amont d’un obstacle ; occlusion mécanique.',
  ),
  t(
    'Bruits hydro-aériques',
    'Gargouillements entendus à l’auscultation de l’abdomen ; augmentés en amont d’un obstacle, absents dans l’iléus.',
  ),
  t('Iléus', 'Arrêt du transit par paralysie de l’intestin (iléus paralytique ou réflexe).', {
    variantes: ['iléus réflexe', 'iléus paralytique'],
  }),
  t(
    'Épreintes',
    'Coliques intestinales douloureuses précédant l’émission des selles ; syndrome dysentérique.',
    {
      syndrome: 'syndrome-dysenterique',
    },
  ),
  t(
    'Ténesme',
    'Douleur rectale avec envie impérieuse et répétée d’aller à la selle ; syndrome dysentérique.',
    {
      syndrome: 'syndrome-dysenterique',
    },
  ),
  t(
    'Selles « eau de riz »',
    'Selles liquides, blanchâtres, très abondantes, sans odeur fécale ; caractéristiques du choléra.',
    {
      variantes: ['eau de riz'],
      syndrome: 'syndrome-choleriforme',
    },
  ),
  t('Hématémèse', 'Vomissement de sang rouge ou noirâtre provenant du tube digestif haut.'),
  t(
    'Méléna',
    'Émission de selles noires, poisseuses et nauséabondes (sang digéré) ; hémorragie digestive haute.',
  ),
  t(
    'Hépatomégalie',
    'Augmentation du volume du foie ; flèche hépatique > 12 cm chez l’adulte, débord sous le rebord costal.',
  ),
  t(
    'Splénomégalie',
    'Augmentation du volume de la rate, palpable sous le rebord costal gauche ; classée de I à V (Hackett).',
    {
      variantes: ['classification de Hackett', 'Hackett'],
    },
  ),
  t(
    'Ascite',
    'Épanchement liquidien dans la cavité péritonéale : matité déclive des flancs, mobile, signe du flot.',
  ),
  t(
    'Circulation veineuse collatérale',
    'Veines superficielles abdominales dilatées et visibles ; hypertension portale ou obstacle cave.',
    {
      syndrome: 'syndrome-d-hypertension-portale',
    },
  ),
  t(
    'Angiomes stellaires',
    'Petites lésions vasculaires rouges en « araignée » (thorax, visage) ; insuffisance hépatocellulaire.',
    {
      syndrome: 'syndrome-d-insuffisance-hepatocellulaire',
    },
  ),
  t('Érythrose palmaire', 'Rougeur des éminences thénar et hypothénar ; insuffisance hépatocellulaire.'),
  t(
    'Astérixis',
    'Tremblement en « battement d’ailes » des mains bras tendus, doigts écartés ; encéphalopathie hépatique ou urémique, hypercapnie.',
    {
      variantes: ['flapping tremor'],
    },
  ),

  // ------------------------------------------------------------------ Neurologique
  t(
    'Raideur de nuque',
    'Résistance douloureuse et invincible à la flexion passive de la tête ; signe méningé.',
    {
      variantes: ['raideur méningée'],
      syndrome: 'syndrome-meninge',
    },
  ),
  t(
    'Signe de Kernig',
    'Impossibilité d’étendre complètement la jambe quand la cuisse est fléchie à 90° (ou flexion des genoux en asseyant le malade) ; signe méningé.',
    {
      variantes: ['Kernig'],
      syndrome: 'syndrome-meninge',
    },
  ),
  t(
    'Signe de Brudzinski',
    'Flexion involontaire des membres inférieurs lors de la flexion forcée de la nuque ; signe méningé.',
    {
      variantes: ['Brudzinski'],
      syndrome: 'syndrome-meninge',
    },
  ),
  t('Photophobie', 'Gêne ou douleur provoquée par la lumière ; syndrome méningé, migraine.'),
  t(
    'Vomissements en jet',
    'Vomissements brutaux, sans effort, non précédés de nausées ; hypertension intracrânienne.',
    {
      variantes: ['vomissements « en jet »'],
      syndrome: 'syndrome-d-hypertension-intracranienne',
    },
  ),
  t(
    'Fontanelle bombée',
    'Fontanelle antérieure tendue et saillante chez le nourrisson calme ; méningite, HTIC.',
    {
      variantes: ['bombement de la fontanelle'],
    },
  ),
  t('Fontanelle déprimée', 'Fontanelle antérieure creusée ; déshydratation du nourrisson.'),
  t('Œdème papillaire', 'Gonflement de la papille optique au fond d’œil ; hypertension intracrânienne.', {
    syndrome: 'syndrome-d-hypertension-intracranienne',
  }),
  t(
    'Score de Glasgow',
    'Évaluation de la conscience de 3 à 15 (ouverture des yeux, réponse verbale, réponse motrice) ; ≤ 8 = coma grave.',
    {
      variantes: ['Glasgow'],
    },
  ),
  t('Score de Blantyre', 'Échelle de coma de l’enfant (0 à 5) adaptée au paludisme ; < 3 = neuropaludisme.', {
    variantes: ['Blantyre'],
  }),
  t(
    'Coma',
    'Altération profonde et durable de la conscience, sans ouverture des yeux ni réponse adaptée aux stimulations.',
    {
      variantes: ['coma post-critique'],
    },
  ),
  t(
    'Obnubilation',
    'Ralentissement des réponses avec somnolence ; premier degré d’altération de la conscience.',
  ),
  t('Hémiplégie', 'Paralysie d’une moitié du corps (membres supérieur et inférieur du même côté).', {
    variantes: ['hémiparésie'],
    syndrome: 'syndrome-pyramidal',
  }),
  t(
    'Signe de Babinski',
    'Extension lente et majestueuse du gros orteil à la stimulation de la plante du pied ; atteinte pyramidale.',
    {
      variantes: ['Babinski'],
      syndrome: 'syndrome-pyramidal',
    },
  ),
  t(
    'Aphasie',
    'Trouble du langage par atteinte de l’hémisphère dominant : expression (Broca) ou compréhension (Wernicke).',
  ),
  t('Dysarthrie', 'Trouble de l’articulation de la parole, sans trouble du langage.'),
  t(
    'Hémianopsie latérale homonyme',
    'Perte de la moitié du champ visuel du même côté pour les deux yeux ; atteinte des voies optiques rétro-chiasmatiques.',
    {
      variantes: ['hémianopsie'],
    },
  ),
  t(
    'Mydriase aréactive',
    'Pupille dilatée qui ne se contracte pas à la lumière ; unilatérale, elle évoque un engagement temporal.',
    {
      variantes: ['anisocorie', 'mydriase'],
      syndrome: 'syndrome-d-engagement-cerebral',
    },
  ),
  t(
    'Opisthotonos',
    'Hyperextension de la nuque et du dos (corps arqué en arrière) ; méningite grave, tétanos, neuropaludisme.',
  ),
  t(
    'Aura',
    'Sensation subjective (visuelle, sensitive, digestive) qui précède une crise d’épilepsie et correspond à son début focal.',
  ),
  t(
    'Morsure latérale de langue',
    'Morsure du bord de la langue au cours d’une crise tonico-clonique ; très évocatrice d’une crise d’épilepsie.',
  ),
  t('Confusion post-critique', 'Désorientation transitoire suivant une crise d’épilepsie généralisée.', {
    variantes: ['phase post-critique'],
  }),
  t(
    'Intervalle libre',
    'Période de conscience normale entre le traumatisme et l’aggravation secondaire ; hématome extradural.',
  ),
  t('Otorrhée', 'Écoulement par l’oreille ; de LCR (otoliquorrhée) après fracture de la base du crâne.', {
    variantes: ['otorragie', 'otoliquorrhée', 'rhinorrhée'],
  }),
  t(
    'Ecchymose périorbitaire',
    'Hématome autour des deux yeux (« yeux de raton laveur ») ; fracture de l’étage antérieur de la base du crâne.',
    {
      variantes: ['yeux de raton laveur'],
    },
  ),

  // ------------------------------------------------------------------ Uro-néphro, métabolique
  t(
    'Oligurie',
    'Diurèse inférieure à 400 mL/24 h chez l’adulte (< 0,5 mL/kg/h ; < 1 mL/kg/h chez l’enfant).',
    {
      variantes: ['oligo-anurie'],
    },
  ),
  t('Anurie', 'Diurèse inférieure à 100 mL/24 h ; rechercher d’abord un globe vésical.'),
  t(
    'Globe vésical',
    'Vessie distendue, palpable et mate au-dessus du pubis ; rétention d’urine (cause d’« anurie » obstructive).',
  ),
  t(
    'Hématurie',
    'Présence de sang dans les urines, visible (macroscopique) ou à la bandelette (microscopique).',
  ),
  t(
    'Hémoglobinurie',
    'Présence d’hémoglobine libre dans les urines, foncées « coca-cola » ; hémolyse intravasculaire.',
    {
      variantes: ['urines coca-cola', 'urines « coca-cola »'],
      syndrome: 'syndrome-hemolytique',
    },
  ),
  t('Polyurie', 'Diurèse supérieure à 3 L/24 h chez l’adulte.', {
    variantes: ['polyuro-polydipsie', 'polydipsie'],
    syndrome: 'syndrome-cardinal-diabetique',
  }),
  t('Haleine cétonique', 'Odeur de pomme reinette de l’haleine due à l’acétone ; acidocétose.', {
    variantes: ['odeur acétonique'],
  }),
  t(
    'Énurésie secondaire',
    'Reprise d’une incontinence urinaire nocturne chez un enfant auparavant propre ; peut révéler un diabète.',
  ),

  // ------------------------------------------------------------------ Gynéco-obstétrique
  t(
    'Barre épigastrique',
    'Douleur épigastrique ou de l’hypocondre droit en barre, chez la femme enceinte ; signe de gravité de la pré-éclampsie (signe de Chaussier).',
    {
      variantes: ['signe de Chaussier'],
      syndrome: 'syndrome-hellp',
    },
  ),
  t(
    'Phosphènes',
    'Perception de points lumineux ou d’éclairs ; signe neurosensoriel de la pré-éclampsie sévère.',
  ),
  t('Acouphènes', 'Perception de bruits (bourdonnements, sifflements) sans source extérieure.'),
  t(
    'Hauteur utérine',
    'Distance symphyse pubienne–fond utérin en cm ; reflète l’âge gestationnel et la croissance fœtale.',
  ),
  t('Métrorragies', 'Saignements d’origine utérine en dehors des règles.', { variantes: ['métrorragie'] }),
  t(
    'Globe de sécurité',
    'Utérus rétracté, dur et bien palpable sous l’ombilic après la délivrance ; son absence (utérus mou) évoque une atonie utérine.',
  ),
  t(
    'Atonie utérine',
    'Défaut de rétraction de l’utérus après l’accouchement ; première cause d’hémorragie du post-partum.',
    {
      variantes: ['utérus mou'],
    },
  ),
  t(
    'Masse latéro-utérine',
    'Masse palpée à côté de l’utérus au toucher vaginal ; doit faire évoquer une grossesse extra-utérine.',
  ),

  // ------------------------------------------------------------------ Pédiatrie, nutrition
  t(
    'Périmètre brachial',
    'Circonférence du bras gauche à mi-hauteur (PB, MUAC) ; < 115 mm entre 6 et 59 mois = malnutrition aiguë sévère.',
    {
      variantes: ['PB', 'MUAC'],
    },
  ),
  t(
    'Rapport poids/taille',
    'Indicateur de maigreur exprimé en z-score (P/T) ; < −3 z-score = malnutrition aiguë sévère.',
    {
      variantes: ['poids/taille', 'P/T'],
    },
  ),
  t('Kwashiorkor', 'Forme œdémateuse de la malnutrition aiguë sévère.', {
    syndrome: 'syndrome-de-malnutrition-oedemateuse',
  }),
  t(
    'Marasme',
    'Forme non œdémateuse de la malnutrition aiguë sévère, avec fonte musculaire et adipeuse majeure (aspect de « vieillard »).',
  ),
  t(
    'Dermatose du kwashiorkor',
    'Lésions cutanées hyperpigmentées puis desquamantes « en peinture écaillée ».',
    {
      variantes: ['peinture écaillée'],
    },
  ),
  t(
    'Test de l’appétit',
    'Prise d’ATPE observée ; un enfant qui ne mange pas a une malnutrition compliquée relevant de l’hospitalisation.',
  ),
  t(
    'Dactylite',
    'Tuméfaction douloureuse des mains et des pieds (syndrome pieds-mains) ; première manifestation fréquente de la drépanocytose chez le nourrisson.',
    {
      variantes: ['syndrome pieds-mains'],
      syndrome: 'syndrome-vaso-occlusif',
    },
  ),
  t(
    'Priapisme',
    'Érection prolongée, douloureuse, non liée à une stimulation ; complication de la drépanocytose, urgence urologique.',
  ),
  t(
    'Séquestration splénique',
    'Augmentation brutale du volume de la rate avec chute de l’hémoglobine ; urgence vitale du jeune enfant drépanocytaire.',
  ),
  t(
    'Refus de téter',
    'Incapacité ou refus du nouveau-né ou du nourrisson de s’alimenter au sein ; signe de danger.',
    {
      variantes: ['tète mal'],
    },
  ),
  t(
    'Signes de danger',
    'Signes PCIME imposant une référence urgente : incapacité à boire ou téter, vomit tout, convulsions, léthargie ou inconscience.',
    {
      variantes: ['signes généraux de danger'],
    },
  ),
  t(
    'Léthargie',
    'Somnolence anormale : l’enfant est difficile à réveiller et ne s’intéresse pas à ce qui l’entoure.',
    {
      variantes: ['léthargique'],
    },
  ),
];
