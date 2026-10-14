'use strict';

/**
 * Lot 69 (phase 2, neurologie) — névralgie du trijumeau, myélopathies, sclérose latérale
 * amyotrophique, myélite transverse, neuromyélite optique. Rédigé par IA (Harrison, OMS) : à valider.
 */

const NEU = { departement: 'neuropsychiatrie', specialite: 'Neurologie' };

module.exports = [
  // =================================================================== Névralgie du trijumeau
  {
    ...NEU,
    slug: 'nevralgie-du-trijumeau',
    nom: 'Névralgie du trijumeau',
    resume:
      'Douleur faciale paroxystique très intense, en décharges électriques de quelques secondes, dans le territoire d’une ou plusieurs branches du nerf trijumeau (V2 et V3 surtout), unilatérale, déclenchée par des stimulations banales (zone gâchette : parler, mâcher, se brosser les dents, toucher le visage, courant d’air), avec intervalles libres ; forme classique de l’adulte de plus de 50 ans (conflit vasculo-nerveux) ; forme secondaire à rechercher chez le sujet jeune, en cas de douleur de fond, de déficit sensitif ou bilatéral (sclérose en plaques, tumeur de l’angle ponto-cérébelleux, zona) ; carbamazépine en première intention (oxcarbazépine en alternative), souvent spectaculaire ; chirurgie (décompression vasculaire, thermocoagulation) si échec ; les antalgiques usuels sont inefficaces ; éviter les extractions dentaires inutiles.',
    definition:
      'Douleur neuropathique paroxystique brève et intense du territoire du nerf trijumeau, classique (idiopathique ou par conflit vasculo-nerveux) ou secondaire à une lésion identifiable.',
    physiopathologie:
      '## Mécanismes\n- **Classique** : compression de la racine du trijumeau par une boucle artérielle (artère cérébelleuse supérieure) → démyélinisation focale → décharges ectopiques\n- **Secondaire** : **sclérose en plaques** (plaque du tronc cérébral), **tumeur** de l’angle ponto-cérébelleux (méningiome, neurinome), malformation, **zona** (névralgie post-zostérienne, douleur continue)',
    diagnostic:
      '## Clinique\n- **Décharges électriques** de 1 s à 2 min, très intenses, unilatérales, dans V2 (joue, lèvre supérieure, dents du haut) ou V3 (menton, lèvre inférieure)\n- **Zone gâchette** et facteurs déclenchants (mastication, parole, brossage, toucher)\n- **Intervalle libre** entre les accès, examen neurologique **normal** (forme classique)\n- Retentissement : amaigrissement (peur de manger), dépression\n\n## Signes de forme secondaire\n- Sujet de moins de 40 ans, douleur de fond permanente, **hypoesthésie** faciale, abolition du réflexe cornéen, atteinte bilatérale, autres signes neurologiques\n\n## Examens\n- **IRM cérébrale** (angle ponto-cérébelleux, sclérose en plaques), conseillée chez tous si disponible\n- NFS, natrémie, bilan hépatique avant et sous carbamazépine',
    examens: [
      ['confirmation', 'irm-cerebrale', 'Conflit vasculo-nerveux, cause secondaire.'],
      ['premiere_intention', 'nfs', 'Avant et sous carbamazépine.'],
      ['premiere_intention', 'ionogramme', 'Hyponatrémie sous traitement.'],
      ['premiere_intention', 'bilan-hepatique', 'Tolérance.'],
    ],
    scores: [],
    differentiels: [
      ['carie-dentaire', 'Douleur dentaire provoquée par le froid et le sucre.'],
      ['sinusites-adulte', 'Douleur continue, rhinorrhée.'],
      ['zona', 'Douleur continue avec éruption ou cicatrices.'],
      ['cephalees-migraine', 'Céphalée pulsatile de plusieurs heures.'],
      ['Algie vasculaire de la face', 'Douleur orbitaire de 15–180 min avec larmoiement.'],
    ],
    etiologies:
      '## Causes\n- Conflit vasculo-nerveux, sclérose en plaques, tumeurs de l’angle ponto-cérébelleux, zona',
    principes: [
      [
        'Traitement médical',
        'Carbamazépine.',
        '- **Carbamazépine** 100–200 mg 2 fois par jour, augmentation progressive jusqu’à 600–1 200 mg/j (dose minimale efficace)\n- Alternative : **oxcarbazépine** ; ajout ou relais : baclofène, gabapentine, prégabaline, lamotrigine\n- Les antalgiques usuels (paracétamol, AINS, morphine) sont peu efficaces\n- Surveillance : NFS, natrémie, éruption (risque de syndrome de Stevens-Johnson)',
      ],
      [
        'Chirurgie',
        'Si échec ou intolérance.',
        '- **Décompression vasculaire microchirurgicale** (forme classique, sujet en bon état)\n- Techniques percutanées (thermocoagulation, compression par ballonnet), radiochirurgie',
      ],
      [
        'Mesures associées',
        'Éviter les erreurs.',
        '- Pas d’extractions dentaires « à l’aveugle »\n- Alimentation adaptée en crise, soutien psychologique, prise en charge de la dépression',
      ],
    ],
    molecules: [
      ['carbamazepine', 'premiere', 'Traitement de référence'],
      ['oxcarbazepine', 'alternative', 'Meilleure tolérance'],
      ['baclofene', 'adjuvant', 'Association'],
      ['gabapentine', 'alternative', 'Alternative'],
      ['pregabaline', 'alternative', 'Alternative'],
      ['lamotrigine', 'alternative', 'Association'],
      ['phenytoine', 'alternative', 'Crise douloureuse sévère (IV)'],
    ],
    complications: [
      {
        nom: 'Dénutrition',
        description: 'Peur de manger.',
        traitement: '- Contrôle de la douleur',
        clinique: '- Amaigrissement',
        paraclinique: '',
      },
      {
        nom: 'Dépression et suicide',
        fiche: 'depression',
        description: 'Douleur intense répétée.',
        traitement: '- Antidépresseurs, soutien',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Toxidermie à la carbamazépine',
        description: 'Stevens-Johnson.',
        traitement: '- Arrêt immédiat',
        clinique: '- Éruption, atteinte muqueuse',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution par périodes douloureuses entrecoupées de rémissions ; contrôle par la carbamazépine chez la majorité ; bons résultats de la décompression',
    urgences: [],
    symptomes: [
      ['Douleur faciale', 'tres_frequent'],
      ['Perte de poids', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Reconnaître, débuter la carbamazépine, éviter les extractions dentaires',
        '- Sujet jeune, déficit sensitif',
      ],
      hgr: ['- Ajustement, surveillance biologique', ''],
      tert: ['- IRM, neurochirurgie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Névralgie classique',
        type: 'commune',
        description: 'Conflit vasculo-nerveux.',
        terrain: '- Adulte de plus de 50 ans',
        fonctionnels: '- Décharges électriques, zone gâchette',
        generaux: '',
        physiques: '- Examen normal',
        paraclinique: '- IRM : conflit',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Névralgie secondaire',
        type: 'etiologique',
        description: 'Sclérose en plaques, tumeur.',
        terrain: '- Sujet jeune',
        fonctionnels: '- Douleur de fond',
        generaux: '',
        physiques: '- Hypoesthésie, réflexe cornéen aboli',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Myélopathies
  {
    ...NEU,
    slug: 'myelopathies',
    nom: 'Myélopathies',
    resume:
      'Atteintes de la moelle épinière, de causes très variées en RDC : compressives (mal de Pott, métastases, tumeurs, hernie discale cervicale, myélopathie cervicarthrosique, traumatismes, abcès épidural), inflammatoires (myélite transverse, neuromyélite optique, sclérose en plaques), infectieuses (HTLV-1, VIH, syphilis, schistosomiase, tuberculose, zona), carentielles et toxiques (carence en B12, konzo lié au manioc mal roui, lathyrisme), vasculaires (infarctus médullaire) ; tableau associant déficit moteur des membres (paraplégie ou tétraplégie), syndrome pyramidal, niveau sensitif, troubles sphinctériens ; une compression médullaire est une urgence (IRM, corticoïdes, chirurgie ou radiothérapie) ; traitement de la cause, prévention des escarres et des complications urinaires, rééducation.',
    definition:
      'Ensemble des affections de la moelle épinière, aiguës ou chroniques, compressives ou non compressives, responsables d’un syndrome médullaire.',
    physiopathologie:
      '## Compressives\n- **Mal de Pott**, **métastases** (sein, prostate, poumon, myélome), tumeurs intrarachidiennes, **hernie discale** et **cervicarthrose**, abcès épidural, hématome, **traumatismes**\n\n## Non compressives\n- **Inflammatoires** : myélite transverse, neuromyélite optique, sclérose en plaques, lupus\n- **Infectieuses** : **HTLV-1**, **VIH** (myélopathie vacuolaire), **syphilis**, **schistosomiase** (cône terminal), tuberculose, zona, polio\n- **Carentielles et toxiques** : **carence en B12** (sclérose combinée), **konzo** (cyanure du manioc), lathyrisme, carence en cuivre\n- **Vasculaires** : infarctus de l’artère spinale antérieure (chirurgie aortique, drépanocytose), malformations',
    diagnostic:
      '## Syndrome médullaire\n- **Déficit moteur** (paraparésie, tétraparésie), **syndrome pyramidal** (hyperréflexie, Babinski) — flasque à la phase aiguë\n- **Niveau sensitif**, troubles proprioceptifs\n- **Troubles sphinctériens** (rétention, incontinence, constipation)\n- Douleur rachidienne ou radiculaire (lésion compressive)\n\n## Examens\n- **IRM médullaire** en urgence si installation aiguë ou subaiguë (compression)\n- Radiographie du rachis (Pott, lyse métastatique), radiographie thoracique\n- **LCR** (inflammation, infection), **sérologies** (VIH, HTLV-1, syphilis, schistosomiase), **vitamine B12**, NFS, électrophorèse des protéines (myélome)',
    examens: [
      ['confirmation', 'irm-rachidienne', 'Compression, myélite.'],
      ['premiere_intention', 'radiographie-osseuse', 'Mal de Pott, métastases.'],
      ['deuxieme_intention', 'lcr', 'Inflammation, infection.'],
      ['etiologique', 'tdr-vih', 'Myélopathie à VIH.'],
      ['etiologique', 'serologie-htlv-1', 'HTLV-1.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'vitamine-b12-folates', 'Sclérose combinée.'],
      ['etiologique', 'electrophorese-proteines', 'Myélome.'],
      ['etiologique', 'radiographie-thoracique', 'Tuberculose, cancer.'],
    ],
    scores: [],
    differentiels: [
      ['syndrome-de-guillain-barre', 'Paralysie flasque aréflexique sans niveau sensitif.'],
      ['avc', 'Hémiplégie (lésion cérébrale).'],
      ['neuropathies-peripheriques', 'Atteinte distale sans syndrome pyramidal.'],
      ['syndrome-de-la-queue-de-cheval', 'Atteinte des racines lombo-sacrées (flasque).'],
    ],
    etiologies:
      '## Causes\n- Mal de Pott, métastases, hernie et cervicarthrose, traumatismes, myélites, HTLV-1, VIH, syphilis, schistosomiase, carence en B12, konzo, infarctus médullaire',
    principes: [
      [
        'Compression médullaire',
        'Urgence.',
        '- **Dexaméthasone** (10 mg IV puis 4 mg toutes les 6 h) si cause tumorale\n- **Chirurgie** de décompression ou **radiothérapie** (métastases), antituberculeux (Pott) ± chirurgie\n- Immobilisation si instabilité',
      ],
      [
        'Causes non compressives',
        'Traitement spécifique.',
        '- Myélite : **méthylprednisolone** IV ; syphilis : pénicilline G ; schistosomiase : praziquantel + corticoïdes ; carence en B12 : **cyanocobalamine** IM ; VIH : antirétroviraux ; konzo : alimentation, rouissage correct du manioc',
      ],
      [
        'Soins du blessé médullaire',
        'Prévenir les complications.',
        '- Prévention des **escarres** et des thromboses, sondage intermittent, rééducation vésicale et intestinale\n- **Spasticité** : baclofène ; kinésithérapie, aides techniques, réinsertion',
      ],
    ],
    molecules: [
      ['dexamethasone', 'premiere', 'Compression tumorale'],
      ['methylprednisolone', 'premiere', 'Myélite inflammatoire'],
      ['cyanocobalamine-vitamine-b12', 'premiere', 'Carence en B12'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Syphilis'],
      ['praziquantel', 'premiere', 'Schistosomiase médullaire'],
      ['baclofene', 'adjuvant', 'Spasticité'],
      ['enoxaparine', 'adjuvant', 'Prévention thromboembolique'],
    ],
    complications: [
      {
        nom: 'Escarres',
        fiche: 'escarres',
        description: 'Immobilité, anesthésie.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Infections urinaires et rétention',
        fiche: 'retention-aigue-urine',
        description: 'Vessie neurologique.',
        traitement: '- Sondages intermittents',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Thrombose veineuse',
        fiche: 'thrombose-veineuse-profonde',
        description: 'Paraplégie.',
        traitement: '- Anticoagulation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Paraplégie définitive',
        description: 'Retard de décompression.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Dépend de la cause et du délai ; une compression traitée avant la perte de la marche a un bien meilleur pronostic',
    urgences: [],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles sphinctériens', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Troubles de la marche', 'tres_frequent'],
      ['Douleur rachidienne', 'frequent'],
      ['Spasticité', 'frequent'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: [
        '- Reconnaître un syndrome médullaire, référer en urgence, sondage',
        '- Faiblesse des jambes récente, rétention',
      ],
      hgr: ['- Radiographie, corticoïdes, bilan des causes', ''],
      tert: ['- IRM, neurochirurgie, radiothérapie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Myélopathie compressive',
        type: 'commune',
        description: 'Pott, métastase.',
        terrain: '- Adulte',
        fonctionnels: '- Douleur rachidienne, faiblesse',
        generaux: '',
        physiques: '- Niveau sensitif',
        paraclinique: '- IRM, radiographie',
        etiologies: '',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Myélopathie carentielle ou toxique',
        type: 'etiologique',
        description: 'B12, konzo.',
        terrain: '- Malnutrition, manioc',
        fonctionnels: '- Troubles de la marche',
        generaux: '',
        physiques: '- Spasticité',
        paraclinique: '- Vitamine B12',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Myélopathie infectieuse',
        type: 'etiologique',
        description: 'HTLV-1, VIH, syphilis, schistosomiase.',
        terrain: '',
        fonctionnels: '- Troubles urinaires',
        generaux: '',
        physiques: '',
        paraclinique: '- Sérologies, LCR',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Sclérose latérale amyotrophique
  {
    ...NEU,
    slug: 'sclerose-laterale-amyotrophique',
    nom: 'Sclérose latérale amyotrophique',
    resume:
      'Maladie neurodégénérative des motoneurones centraux et périphériques de l’adulte (55–65 ans en moyenne) : faiblesse et amyotrophie progressives asymétriques débutant à une main ou un pied, fasciculations, crampes, associées paradoxalement à des réflexes vifs (syndrome pyramidal) ; forme bulbaire (dysarthrie, dysphagie, fausses routes, atteinte de la langue) ; sensibilité et sphincters préservés ; évolution vers l’insuffisance respiratoire en 2–5 ans ; diagnostic clinique et électromyographique après exclusion des causes curables (compression cervicale, neuropathie motrice multifocale, HTLV-1, VIH, syphilis, hyperthyroïdie) ; riluzole, prise en charge multidisciplinaire (nutrition, gastrostomie, ventilation non invasive, kinésithérapie, communication), soins palliatifs et directives anticipées.',
    definition:
      'Dégénérescence progressive des motoneurones du cortex moteur, du tronc cérébral et de la corne antérieure de la moelle, responsable d’une paralysie progressive.',
    physiopathologie:
      '## Mécanismes\n- Dégénérescence des **motoneurones centraux** (syndrome pyramidal) et **périphériques** (amyotrophie, fasciculations)\n- Excitotoxicité du glutamate, stress oxydatif, agrégats protéiques (TDP-43)\n- Formes familiales (10 %) : mutations génétiques (C9orf72, SOD1)\n\n## Évolution\n- Extension progressive aux muscles respiratoires et bulbaires',
    diagnostic:
      '## Clinique\n- **Faiblesse** et **amyotrophie** asymétriques (main, pied), **fasciculations**, **crampes**\n- **Réflexes vifs** dans des muscles amyotrophiés, Babinski\n- Forme **bulbaire** : **dysarthrie**, **dysphagie**, langue atrophique et fasciculante, rires et pleurs spasmodiques\n- **Sensibilité normale**, pas de troubles sphinctériens ni oculomoteurs\n- Signes respiratoires : dyspnée en décubitus, orthopnée, céphalées matinales\n\n## Examens\n- **Électromyogramme** : dénervation diffuse, conductions sensitives normales\n- **IRM cervicale** (éliminer une compression), CPK (modérément élevées)\n- Éliminer : VIH, HTLV-1, syphilis, TSH, calcémie, électrophorèse des protéines, vitamine B12\n- Spirométrie (capacité vitale)',
    examens: [
      ['confirmation', 'electromyogramme', 'Dénervation diffuse.'],
      ['premiere_intention', 'irm-rachidienne', 'Élimine une myélopathie cervicale.'],
      ['etiologique', 'cpk', 'Modérément élevées.'],
      ['etiologique', 'tsh', 'Hyperthyroïdie.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'serologie-htlv-1', 'HTLV-1.'],
      ['etiologique', 'electrophorese-proteines', 'Gammapathie.'],
      ['gravite', 'spirometrie', 'Capacité vitale.'],
      ['gravite', 'gaz-du-sang', 'Hypercapnie.'],
    ],
    scores: [],
    differentiels: [
      ['myelopathies', 'Myélopathie cervicarthrosique (troubles sensitifs).'],
      ['myasthenie', 'Faiblesse fluctuante, ptosis.'],
      ['neuropathies-peripheriques', 'Troubles sensitifs, aréflexie.'],
      ['poliomyelite-paralysies-flasques-aigues', 'Syndrome post-polio.'],
      ['hyperthyroidie-basedow', 'Amyotrophie, fasciculations, tremblements.'],
    ],
    etiologies: '## Causes\n- Sporadique (90 %), familiale (10 %)',
    principes: [
      ['Traitement spécifique', 'Ralentir.', '- **Riluzole** 50 mg 2 fois par jour (surveillance hépatique)'],
      [
        'Soins de support',
        'Multidisciplinaires.',
        '- **Nutrition** : textures adaptées, **gastrostomie** précoce si dysphagie et perte de poids > 10 %\n- **Respiration** : ventilation non invasive nocturne, kinésithérapie, désencombrement\n- **Symptômes** : crampes (baclofène), hypersalivation (amitriptyline, atropine en gouttes sublinguales), spasticité, douleur, dépression\n- Communication (tableaux, outils), aides techniques, kinésithérapie',
      ],
      [
        'Fin de vie',
        'Anticiper.',
        '- Annonce, **directives anticipées** (ventilation, gastrostomie), **soins palliatifs** (morphine pour la dyspnée, benzodiazépines pour l’anxiété)',
      ],
    ],
    molecules: [
      ['riluzole', 'premiere', 'Traitement spécifique'],
      ['baclofene', 'adjuvant', 'Crampes, spasticité'],
      ['amitriptyline', 'adjuvant', 'Hypersalivation, labilité émotionnelle'],
      ['morphine', 'adjuvant', 'Dyspnée en fin de vie'],
      ['midazolam', 'adjuvant', 'Anxiété, détresse terminale'],
      ['fluoxetine', 'alternative', 'Dépression'],
    ],
    complications: [
      {
        nom: 'Insuffisance respiratoire',
        description: 'Atteinte diaphragmatique.',
        traitement: '- Ventilation non invasive, soins palliatifs',
        clinique: '- Orthopnée',
        paraclinique: '- Capacité vitale',
      },
      {
        nom: 'Pneumopathie d’inhalation',
        fiche: 'pneumonie-communautaire-adulte',
        description: 'Fausses routes.',
        traitement: '- Antibiotiques',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Dénutrition',
        description: 'Dysphagie.',
        traitement: '- Gastrostomie',
        clinique: '- Amaigrissement',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Médiane de survie de 3 à 5 ans après les premiers symptômes ; formes plus lentes possibles',
    urgences: [],
    symptomes: [
      ['Faiblesse musculaire', 'tres_frequent'],
      ['Fasciculations', 'tres_frequent'],
      ['Crampes musculaires', 'frequent'],
      ['Dysarthrie', 'frequent'],
      ['Dysphagie', 'frequent'],
      ['Dyspnée', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Soins de support, soutien des familles, soins palliatifs', ''],
      hgr: ['- Nutrition, kinésithérapie', ''],
      tert: ['- EMG, IRM, riluzole, ventilation', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Forme spinale',
        type: 'commune',
        description: 'Début aux membres.',
        terrain: '- Adulte 55–65 ans',
        fonctionnels: '- Maladresse d’une main',
        generaux: '',
        physiques: '- Amyotrophie, fasciculations, réflexes vifs',
        paraclinique: '- EMG',
        etiologies: '',
        syndromes: ['syndrome-pyramidal'],
      },
      {
        nom: 'Forme bulbaire',
        type: 'gravite',
        description: 'Pronostic plus sombre.',
        terrain: '- Femme âgée',
        fonctionnels: '- Dysarthrie, dysphagie',
        generaux: '- Amaigrissement',
        physiques: '- Langue fasciculante',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Myélite transverse
  {
    ...NEU,
    slug: 'myelite-transverse',
    nom: 'Myélite transverse',
    resume:
      'Inflammation aiguë ou subaiguë de la moelle épinière sur toute sa largeur, installée en quelques heures à 3 semaines : faiblesse des deux jambes (parfois des quatre membres), niveau sensitif, troubles sphinctériens précoces (rétention), douleur dorsale ; causes : post-infectieuse ou post-vaccinale, virale directe (VIH, HTLV-1, VZV, HSV, CMV, entérovirus), schistosomiase, tuberculose, syphilis, maladies auto-immunes (neuromyélite optique, sclérose en plaques, lupus), idiopathique ; éliminer en urgence une compression médullaire par l’IRM ; LCR inflammatoire ; méthylprednisolone IV à forte dose, échanges plasmatiques si échec, traitement de la cause (praziquantel, aciclovir, antituberculeux) ; prévention des escarres, sondage, rééducation.',
    definition:
      'Atteinte inflammatoire aiguë bilatérale de la moelle épinière, responsable d’un déficit moteur, sensitif et sphinctérien sous un niveau lésionnel, en l’absence de compression.',
    physiopathologie:
      '## Causes\n- **Para-infectieuse** ou post-vaccinale (immunologique)\n- **Infectieuse directe** : **VIH**, **HTLV-1**, VZV, HSV, CMV, entérovirus, **schistosomiase** (Schistosoma mansoni, haematobium), **tuberculose**, **syphilis**, Mycoplasma\n- **Auto-immune** : **neuromyélite optique** (myélite longitudinale étendue ≥ 3 segments), **sclérose en plaques** (myélite partielle), lupus, Sjögren\n- **Idiopathique**',
    diagnostic:
      '## Clinique\n- Installation en heures à jours : **paraparésie** (flasque au début), **niveau sensitif**, **rétention urinaire**, constipation\n- Douleur dorsale ou en ceinture, paresthésies, fièvre (cause infectieuse)\n\n## Examens\n- **IRM médullaire en urgence** : élimine une compression, montre l’hypersignal (étendu ≥ 3 vertèbres : neuromyélite optique)\n- **LCR** : pléiocytose, protéines élevées, bandes oligoclonales ; recherche virale, VDRL, BK\n- **Sérologies** : VIH, HTLV-1, syphilis, schistosomiase (œufs dans les urines et les selles)\n- **Anticorps anti-aquaporine 4**, anticorps antinucléaires, IRM cérébrale, vitamine B12',
    examens: [
      ['confirmation', 'irm-rachidienne', 'Hypersignal, élimine une compression.'],
      ['confirmation', 'lcr', 'Inflammation.'],
      ['etiologique', 'tdr-vih', 'VIH.'],
      ['etiologique', 'serologie-htlv-1', 'HTLV-1.'],
      ['etiologique', 'serologie-syphilis', 'Syphilis.'],
      ['etiologique', 'anticorps-anti-aquaporine-4', 'Neuromyélite optique.'],
      ['etiologique', 'anticorps-antinucleaires', 'Lupus.'],
      ['etiologique', 'irm-cerebrale', 'Sclérose en plaques.'],
      ['etiologique', 'vitamine-b12-folates', 'Carence.'],
    ],
    scores: [],
    differentiels: [
      ['compression-medullaire', 'Compression à l’IRM.'],
      ['syndrome-de-guillain-barre', 'Pas de niveau sensitif, sphincters préservés.'],
      ['poliomyelite-paralysies-flasques-aigues', 'Paralysie flasque asymétrique sans troubles sensitifs.'],
      ['neuromyelite-optique', 'Myélite étendue avec névrite optique.'],
      ['Infarctus médullaire', 'Installation brutale en minutes.'],
    ],
    etiologies:
      '## Causes\n- Post-infectieuse, VIH, HTLV-1, virus herpès, schistosomiase, tuberculose, syphilis, neuromyélite optique, sclérose en plaques, lupus, idiopathique',
    principes: [
      [
        'Traitement anti-inflammatoire',
        'Rapide.',
        '- **Méthylprednisolone** 1 g IV par jour pendant 3–5 jours, puis relais oral selon la cause\n- Échec : **échanges plasmatiques**, cyclophosphamide (formes auto-immunes)',
      ],
      [
        'Traitement de la cause',
        'Ciblé.',
        '- Schistosomiase : **praziquantel** + corticoïdes\n- VZV, HSV : **aciclovir** IV\n- Tuberculose : antituberculeux ; syphilis : pénicilline G ; VIH : antirétroviraux\n- Neuromyélite optique : traitement de fond (azathioprine, rituximab)',
      ],
      [
        'Soins',
        'Prévenir.',
        '- Sondage vésical, prévention des escarres et des thromboses, rééducation précoce, baclofène',
      ],
    ],
    molecules: [
      ['methylprednisolone', 'premiere', 'Phase aiguë'],
      ['prednisolone', 'alternative', 'Relais oral'],
      ['praziquantel', 'premiere', 'Schistosomiase'],
      ['aciclovir', 'premiere', 'VZV, HSV'],
      ['cyclophosphamide', 'alternative', 'Formes auto-immunes sévères'],
      ['enoxaparine', 'adjuvant', 'Prévention thromboembolique'],
      ['baclofene', 'adjuvant', 'Spasticité'],
    ],
    complications: [
      {
        nom: 'Paraplégie séquellaire',
        description: 'Formes sévères.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Rétention urinaire et infections',
        fiche: 'retention-aigue-urine',
        description: 'Vessie neurologique.',
        traitement: '- Sondage',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Escarres',
        fiche: 'escarres',
        description: 'Immobilité.',
        traitement: '- Prévention',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Un tiers récupère bien, un tiers garde des séquelles modérées, un tiers des séquelles sévères',
    urgences: [],
    symptomes: [
      ['Déficit moteur', 'tres_frequent'],
      ['Troubles sphinctériens', 'tres_frequent'],
      ['Troubles sensitifs', 'tres_frequent'],
      ['Douleur rachidienne', 'frequent'],
      ['Paresthésies', 'frequent'],
      ['Fièvre', 'occasionnel'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Faiblesse rapide des jambes avec rétention : sondage, référence urgente', ''],
      hgr: ['- Corticoïdes, praziquantel, bilan', ''],
      tert: ['- IRM, LCR, échanges plasmatiques', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Myélite para-infectieuse',
        type: 'commune',
        description: 'Après une infection.',
        terrain: '- Enfant, adulte jeune',
        fonctionnels: '- Paraparésie aiguë',
        generaux: '',
        physiques: '- Niveau sensitif',
        paraclinique: '- IRM, LCR',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Myélite bilharzienne',
        type: 'etiologique',
        description: 'Cône terminal.',
        terrain: '- Zone d’endémie',
        fonctionnels: '- Douleurs lombaires, rétention',
        generaux: '',
        physiques: '',
        paraclinique: '- Œufs, sérologie',
        etiologies: '- Schistosoma',
        syndromes: [],
      },
      {
        nom: 'Myélite longitudinale étendue',
        type: 'gravite',
        description: 'Neuromyélite optique.',
        terrain: '- Femme jeune',
        fonctionnels: '- Tétraparésie possible',
        generaux: '',
        physiques: '',
        paraclinique: '- IRM ≥ 3 segments',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Neuromyélite optique
  {
    ...NEU,
    slug: 'neuromyelite-optique',
    nom: 'Neuromyélite optique',
    resume:
      'Maladie auto-immune inflammatoire du système nerveux central (anticorps anti-aquaporine 4), plus fréquente chez les personnes d’ascendance africaine que la sclérose en plaques, touchant surtout la femme : névrites optiques sévères (souvent bilatérales, avec perte de vision importante), myélites longitudinales étendues (≥ 3 segments vertébraux), syndrome de l’area postrema (hoquet et vomissements incoercibles), atteintes du tronc cérébral ; poussées sévères laissant des séquelles (cécité, paraplégie) ; diagnostic par l’IRM et les anticorps ; poussée : méthylprednisolone IV à forte dose, échanges plasmatiques précoces ; traitement de fond indispensable (azathioprine avec corticoïdes, rituximab) ; les traitements de la sclérose en plaques (interférons) peuvent l’aggraver.',
    definition:
      'Astrocytopathie auto-immune caractérisée par des névrites optiques et des myélites sévères, associée dans la majorité des cas aux anticorps anti-aquaporine 4.',
    physiopathologie:
      '## Mécanisme\n- Anticorps **anti-aquaporine 4** → atteinte des astrocytes (activation du complément) → démyélinisation et nécrose\n- Formes séronégatives : anticorps **anti-MOG** (pronostic plus favorable)\n- Associations : lupus, Sjögren, myasthénie\n\n## Cibles\n- **Nerfs optiques**, **moelle** (lésions étendues), **area postrema**, tronc cérébral, hypothalamus',
    diagnostic:
      '## Clinique\n- **Névrite optique** : baisse de vision sévère, douloureuse, uni- ou bilatérale\n- **Myélite** : paraparésie ou tétraparésie, niveau sensitif, troubles sphinctériens\n- **Hoquet et vomissements** incoercibles (area postrema)\n- Somnolence, troubles endocriniens (hypothalamus)\n\n## Examens\n- **Anticorps anti-aquaporine 4** (anti-MOG si négatifs)\n- **IRM médullaire** : lésion **≥ 3 segments** vertébraux ; IRM cérébrale et des nerfs optiques\n- **LCR** : pléiocytose parfois à polynucléaires, pas de bandes oligoclonales le plus souvent\n- Fond d’œil, acuité visuelle ; bilan auto-immun ; éliminer infections (VIH, syphilis, HTLV-1, tuberculose)',
    examens: [
      ['confirmation', 'anticorps-anti-aquaporine-4', 'Marqueur spécifique.'],
      ['confirmation', 'irm-rachidienne', 'Myélite longitudinale étendue.'],
      ['confirmation', 'irm-cerebrale', 'Nerfs optiques, area postrema.'],
      ['premiere_intention', 'lcr', 'Inflammation.'],
      ['premiere_intention', 'acuite-visuelle', 'Névrite optique.'],
      ['premiere_intention', 'fond-d-oeil', 'Œdème ou atrophie papillaire.'],
      ['etiologique', 'anticorps-antinucleaires', 'Lupus associé.'],
      ['etiologique', 'tdr-vih', 'Diagnostic différentiel.'],
    ],
    scores: [],
    differentiels: [
      ['sclerose-en-plaques', 'Lésions courtes, bandes oligoclonales.'],
      ['myelite-transverse', 'Myélite d’autre cause.'],
      ['baisse-brutale-acuite-visuelle', 'Autres causes de baisse de vision.'],
      ['paraparesie-spastique-tropicale', 'Myélopathie progressive à HTLV-1.'],
      ['lupus-erythemateux-systemique', 'Atteinte neurologique lupique.'],
    ],
    etiologies: '## Cause\n- Auto-immune (anti-aquaporine 4, anti-MOG)',
    principes: [
      [
        'Poussée',
        'Urgence.',
        '- **Méthylprednisolone** 1 g IV par jour pendant 5 jours\n- **Échanges plasmatiques** précoces si réponse insuffisante (5–7 séances)\n- Relais par prednisolone orale',
      ],
      [
        'Traitement de fond',
        'Prévenir les poussées.',
        '- **Azathioprine** 2–3 mg/kg/j avec corticoïdes à faible dose les premiers mois\n- **Rituximab** (efficace, utilisé en centre spécialisé), mycophénolate\n- **Éviter** interféron et autres traitements de la sclérose en plaques',
      ],
      [
        'Mesures associées',
        'Séquelles.',
        '- Rééducation, prise en charge de la malvoyance, de la spasticité, de la vessie\n- Prophylaxies sous immunosuppresseurs (ivermectine, cotrimoxazole), dépistage de la tuberculose et de l’hépatite B',
      ],
    ],
    molecules: [
      ['methylprednisolone', 'premiere', 'Poussée'],
      ['prednisolone', 'premiere', 'Relais, association'],
      ['azathioprine', 'premiere', 'Traitement de fond'],
      ['rituximab', 'alternative', 'Traitement de fond'],
      ['baclofene', 'adjuvant', 'Spasticité'],
      ['ivermectine', 'adjuvant', 'Prévention de l’anguillulose'],
      ['cotrimoxazole', 'adjuvant', 'Prévention de la pneumocystose'],
    ],
    complications: [
      {
        nom: 'Cécité',
        description: 'Névrites répétées.',
        traitement: '- Réadaptation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Paraplégie ou tétraplégie',
        fiche: 'myelopathies',
        description: 'Myélites sévères.',
        traitement: '- Rééducation',
        clinique: '',
        paraclinique: '',
      },
      {
        nom: 'Insuffisance respiratoire',
        description: 'Myélite cervicale haute.',
        traitement: '- Ventilation',
        clinique: '- Dyspnée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Évolution par poussées avec accumulation de séquelles sans traitement de fond ; nettement amélioré par l’immunosuppression',
    urgences: [],
    symptomes: [
      ['Troubles visuels', 'tres_frequent'],
      ['Déficit moteur', 'frequent'],
      ['Troubles sphinctériens', 'frequent'],
      ['Vomissements', 'occasionnel'],
      ['Douleur oculaire', 'frequent'],
    ],
    sources: ["Harrison's Principles of Internal Medicine", 'OMS — lignes directrices et publications'],
    niveaux: {
      cs: ['- Baisse de vision ou faiblesse aiguë : référer en urgence', ''],
      hgr: ['- Méthylprednisolone', ''],
      tert: ['- IRM, anticorps, échanges plasmatiques, traitement de fond', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Névrite optique sévère',
        type: 'commune',
        description: 'Souvent bilatérale.',
        terrain: '- Femme jeune',
        fonctionnels: '- Baisse de vision',
        generaux: '',
        physiques: '- Déficit pupillaire',
        paraclinique: '- IRM',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Myélite longitudinale étendue',
        type: 'gravite',
        description: 'Paraplégie.',
        terrain: '',
        fonctionnels: '- Faiblesse, rétention',
        generaux: '',
        physiques: '- Niveau sensitif',
        paraclinique: '- IRM ≥ 3 segments',
        etiologies: '',
        syndromes: [],
      },
      {
        nom: 'Syndrome de l’area postrema',
        type: 'topographique',
        description: 'Hoquet, vomissements.',
        terrain: '',
        fonctionnels: '- Vomissements incoercibles',
        generaux: '',
        physiques: '',
        paraclinique: '- IRM du tronc',
        etiologies: '',
        syndromes: [],
      },
    ],
  },
];
