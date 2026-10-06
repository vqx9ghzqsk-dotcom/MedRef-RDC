'use strict';

/**
 * Formes cliniques, sémiologie systématisée et étiologies par forme — gynéco-obstétrique.
 * Format : voir semiologie/infectiologie.js. Contenu à valider par un médecin.
 */

module.exports = {
  // =================================================================== Pré-éclampsie
  'pre-eclampsie-severe': {
    urgences: {
      eclampsie:
        'Convulsions chez une femme enceinte ou accouchée, précédées de céphalées, phosphènes, barre épigastrique, réflexes vifs',
      'urgence-hypertensive': 'PA ≥ 160/110 mmHg avec céphalées, troubles visuels, barre épigastrique, oligurie',
    },
    formes: [
      {
        nom: 'Pré-éclampsie (forme commune)',
        type: 'commune',
        description: 'HTA ≥ 140/90 mmHg apparue après 20 SA, associée à une protéinurie ≥ 0,3 g/24 h ou à une atteinte d’organe.',
        terrain:
          '- Primigeste, âges extrêmes, grossesse gémellaire, antécédent de pré-éclampsie\n- HTA chronique, diabète, obésité, néphropathie, drépanocytose',
        fonctionnels: '- Souvent asymptomatique au début ; prise de poids rapide, gonflement des mains et du visage',
        generaux: '- État général conservé',
        physiques:
          '- PA ≥ 140/90 mmHg à deux mesures à 4 h d’intervalle\n- Œdèmes (visage, mains), non obligatoires\n- Hauteur utérine parfois inférieure au terme (retard de croissance)',
        paraclinique:
          '- Protéinurie à la bandelette ≥ ++ ou ≥ 0,3 g/24 h\n- Bilan : NFS-plaquettes, créatinine, ASAT/ALAT, LDH, uricémie\n- Échographie obstétricale et doppler : croissance fœtale',
        etiologies:
          '- Défaut d’invasion trophoblastique des artères utérines → ischémie placentaire → dysfonction endothéliale maternelle\n- Facteurs immunologiques et génétiques',
        syndromes: ['syndrome-de-pre-eclampsie'],
        examens: [
          ['proteinurie', '≥ 0,3 g/24 h : pré-éclampsie.'],
          ['echographie-obstetricale', 'Croissance fœtale, liquide amniotique, doppler.'],
        ],
      },
      {
        nom: 'Pré-éclampsie sévère',
        type: 'gravite',
        description: 'Pré-éclampsie avec au moins un critère de gravité maternel ou fœtal.',
        terrain: '- Pré-éclampsie non suivie, terme précoce (< 34 SA)',
        fonctionnels:
          '- **Signes neurosensoriels** : céphalées intenses, phosphènes, acouphènes, troubles visuels\n- Barre épigastrique (signe de Chaussier), nausées, vomissements\n- Dyspnée (OAP)',
        generaux: '- Agitation, oligurie',
        physiques:
          '- PA ≥ 160/110 mmHg\n- Réflexes ostéotendineux vifs, diffusés, polycinétiques\n- Œdèmes importants, signes d’OAP\n- Bruits du cœur fœtal anormaux',
        paraclinique:
          '- Protéinurie > 3 g/24 h ou créatinine > 90 µmol/L, oligurie < 500 mL/24 h\n- Plaquettes < 100 000/mm³, cytolyse hépatique (HELLP)\n- Retard de croissance intra-utérin, anomalies du doppler',
        etiologies: '- Mêmes mécanismes ; aggravation par l’absence de suivi prénatal',
        syndromes: ['syndrome-de-pre-eclampsie', 'syndrome-hellp'],
        examens: [
          ['nfs', 'Thrombopénie < 100 000/mm³ : gravité.'],
          ['bilan-hepatique', 'Cytolyse : HELLP.'],
          ['ldh', 'Hémolyse (HELLP).'],
        ],
      },
      {
        nom: 'Éclampsie',
        type: 'gravite',
        description: 'Crise convulsive généralisée chez une femme pré-éclamptique, avant, pendant ou après l’accouchement (jusqu’à 6 semaines).',
        terrain: '- Pré-éclampsie sévère non traitée ; parfois sans HTA marquée connue',
        fonctionnels: '- Prodromes : céphalées, phosphènes, barre épigastrique',
        generaux: '- Agitation ; puis coma post-critique',
        physiques:
          '- Crise tonico-clonique généralisée (invasion, phase tonique, phase clonique, coma)\n- Morsure de langue, perte d’urines\n- Risque d’hématome rétroplacentaire et de mort fœtale',
        paraclinique: '- Bilan de pré-éclampsie sévère ; scanner cérébral si signe de localisation ou crise atypique',
        etiologies:
          '- Encéphalopathie hypertensive, vasospasme cérébral\n- Diagnostic différentiel : neuropaludisme, méningite, épilepsie, hypoglycémie',
        syndromes: ['syndrome-convulsif'],
        examens: [['glycemie', 'Éliminer une hypoglycémie.']],
      },
      {
        nom: 'HELLP syndrome',
        type: 'paraclinique',
        description: 'Forme biologique grave : hémolyse, cytolyse hépatique, thrombopénie.',
        terrain: '- Pré-éclampsie, parfois sans HTA sévère, 3e trimestre ou post-partum',
        fonctionnels: '- Douleur épigastrique ou de l’hypocondre droit, nausées, vomissements',
        generaux: '- Malaise',
        physiques: '- Sensibilité de l’hypocondre droit ; signes hémorragiques',
        paraclinique:
          '- Schizocytes, LDH > 600 UI/L, bilirubine augmentée\n- ASAT > 70 UI/L\n- Plaquettes < 100 000/mm³',
        etiologies: '- Microangiopathie liée à la pré-éclampsie',
        syndromes: ['syndrome-hellp', 'syndrome-hemolytique'],
        examens: [['echographie-abdominale', 'Hématome sous-capsulaire du foie.']],
      },
    ],
  },

  // =================================================================== Hémorragie du post-partum
  'hemorragie-post-partum': {
    urgences: {
      'hemorragie-du-post-partum-urgence':
        'Saignement > 500 mL après l’accouchement, utérus mou, pâleur, tachycardie, index de choc ≥ 0,9, hypotension',
    },
    formes: [
      {
        nom: 'Hémorragie du post-partum immédiate par atonie utérine (forme commune)',
        type: 'commune',
        description: 'Perte sanguine ≥ 500 mL dans les 24 h suivant l’accouchement ; l’atonie en est la première cause.',
        terrain:
          '- Surdistension utérine (gémellaire, hydramnios, macrosomie), grande multiparité\n- Travail prolongé ou très rapide, ocytocine prolongée, chorioamnionite, anémie préalable',
        fonctionnels: '- Saignement vaginal abondant, continu ou par vagues, après la naissance',
        generaux: '- Pâleur, soif, tachycardie, puis hypotension et choc',
        physiques:
          '- **Utérus mou**, mal rétracté, au-dessus de l’ombilic (absence de globe de sécurité)\n- Massage utérin ramenant des caillots\n- Quantifier les pertes (sac de recueil gradué)',
        paraclinique: '- Hb, plaquettes, groupe-RAI, test de coagulation au lit (fibrinogène)',
        etiologies:
          '- Les « 4 T » : **Tonus** (atonie, 70 %), **Tissu** (rétention placentaire), **Trauma** (déchirures, rupture utérine), **Thrombine** (coagulopathie)',
        syndromes: ['syndrome-de-choc', 'syndrome-anemique'],
        examens: [
          ['groupage-rai', 'Préparer la transfusion immédiatement.'],
          ['test-de-coagulation-au-lit', 'Caillot absent à 7 min : coagulopathie.'],
        ],
      },
      {
        nom: 'Hémorragie par rétention placentaire',
        type: 'etiologique',
        description: 'Placenta non expulsé à 30 min ou délivrance incomplète.',
        terrain: '- Antécédent de césarienne ou de curetage (placenta accreta), prématurité',
        fonctionnels: '- Saignement persistant',
        generaux: '- Signes d’hypovolémie',
        physiques: '- Placenta incomplet à l’examen (cotylédon manquant), utérus mal rétracté',
        paraclinique: '- Échographie pelvienne si doute',
        etiologies: '- Placenta adhérent ou accreta, délivrance incomplète',
        syndromes: ['syndrome-de-choc'],
        examens: [['echographie-pelvienne', 'Rétention de débris placentaires.']],
      },
      {
        nom: 'Hémorragie par traumatisme de la filière génitale',
        type: 'etiologique',
        description: 'Saignement avec utérus bien rétracté : rechercher une déchirure ou une rupture utérine.',
        terrain: '- Accouchement instrumental, macrosomie, utérus cicatriciel, travail dystocique',
        fonctionnels: '- Saignement rouge, continu, malgré un utérus dur',
        generaux: '- Signes d’hypovolémie',
        physiques:
          '- Déchirures du périnée, du vagin ou du col à l’examen sous valves\n- Rupture utérine : douleur, perte de la présentation, choc',
        paraclinique: '- Hb, groupage',
        etiologies: '- Déchirures cervico-vaginales, hématome, rupture utérine, inversion utérine',
        syndromes: ['syndrome-d-hemorragie-interne'],
        examens: [],
      },
      {
        nom: 'Hémorragie par trouble de la coagulation',
        type: 'paraclinique',
        description: 'Saignement incoagulable, souvent associé à une CIVD.',
        terrain: '- Hématome rétroplacentaire, pré-éclampsie/HELLP, mort fœtale in utero, embolie amniotique, sepsis',
        fonctionnels: '- Sang qui ne coagule pas, saignements aux points de ponction',
        generaux: '- Choc',
        physiques: '- Saignements diffus, ecchymoses',
        paraclinique: '- Test de coagulation au lit : pas de caillot à 7 min\n- Fibrinogène < 2 g/L, plaquettes basses, TP bas',
        etiologies: '- CIVD obstétricale, coagulopathie de dilution (transfusion massive)',
        syndromes: ['syndrome-hemorragique'],
        examens: [['hemostase', 'CIVD : fibrinogène bas, TP bas, plaquettes basses.']],
      },
    ],
  },

  // =================================================================== Grossesse extra-utérine
  'grossesse-extra-uterine': {
    urgences: {
      'grossesse-extra-uterine-rompue':
        'Douleur pelvienne brutale, aménorrhée, malaise, douleur scapulaire, pâleur, pouls rapide, abdomen sensible, cri du Douglas',
    },
    formes: [
      {
        nom: 'GEU non rompue (forme commune)',
        type: 'commune',
        description: 'Implantation de l’œuf hors de la cavité utérine, le plus souvent tubaire, avant toute rupture.',
        terrain:
          '- Antécédent d’infection génitale (salpingite, IST), de GEU, de chirurgie tubaire\n- DIU, tabac, procréation médicalement assistée',
        fonctionnels:
          '- Triade : **aménorrhée** (ou retard de règles), **douleur pelvienne** latéralisée, **métrorragies** peu abondantes, noirâtres',
        generaux: '- État général conservé, hémodynamique stable',
        physiques:
          '- Toucher vaginal : utérus moins gros que l’âge de la grossesse, masse latéro-utérine sensible\n- Douleur provoquée d’un cul-de-sac vaginal',
        paraclinique:
          '- β-hCG positives ; utérus vide à l’échographie avec β-hCG au-dessus du seuil de visibilité (≈ 1 500 UI/L)\n- Masse latéro-utérine, épanchement dans le Douglas',
        etiologies:
          '- Altération tubaire : salpingite (chlamydia, gonocoque), chirurgie, endométriose\n- Localisations : ampullaire (la plus fréquente), isthmique, interstitielle, ovarienne, abdominale',
        syndromes: [],
        examens: [
          ['beta-hcg', 'Positives ; cinétique anormale (doublement insuffisant).'],
          ['echographie-pelvienne', 'Utérus vide, masse latéro-utérine, épanchement.'],
        ],
      },
      {
        nom: 'GEU rompue (hémopéritoine)',
        type: 'gravite',
        description: 'Rupture tubaire avec hémorragie intrapéritonéale : urgence chirurgicale vitale.',
        terrain: '- GEU méconnue, souvent entre 6 et 8 semaines d’aménorrhée',
        fonctionnels:
          '- Douleur pelvienne brutale, intense, en « coup de poignard »\n- Douleur scapulaire (irritation diaphragmatique)\n- Lipothymie, syncope',
        generaux: '- Pâleur, soif, pouls rapide et filant, hypotension, état de choc',
        physiques:
          '- Abdomen sensible, défense, matité des flancs\n- Toucher vaginal : cri du Douglas, Douglas bombé',
        paraclinique:
          '- Échographie : épanchement abondant dans le Douglas et l’espace de Morrison\n- Ponction du Douglas : sang incoagulable (si pas d’échographie)\n- Hb basse, groupage',
        etiologies: '- Rupture d’une GEU tubaire, surtout isthmique ou interstitielle',
        syndromes: ['syndrome-d-hemorragie-interne', 'syndrome-de-choc'],
        examens: [['groupage-rai', 'Transfusion et laparotomie en urgence.']],
      },
      {
        nom: 'Forme pseudo-abortive',
        type: 'evolutive',
        description: 'Métrorragies abondantes faisant évoquer une fausse couche ; utérus vide après « expulsion ».',
        terrain: '- Grossesse débutante mal datée',
        fonctionnels: '- Métrorragies importantes, douleurs pelviennes',
        generaux: '- Variable',
        physiques: '- Col fermé, pas de produit d’expulsion visible',
        paraclinique: '- β-hCG qui ne baissent pas après la « fausse couche » ; échographie de contrôle',
        etiologies: '- GEU tubaire avec décidua expulsée',
        syndromes: [],
        examens: [['beta-hcg', 'Cinétique : stagnation ou ascension.']],
      },
    ],
  },
};
