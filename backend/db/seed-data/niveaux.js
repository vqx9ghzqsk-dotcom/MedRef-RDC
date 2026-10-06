'use strict';

/**
 * Prise en charge selon le niveau de la pyramide sanitaire de la RDC.
 *   cs   : centre de santé (infirmier titulaire, TDR, médicaments essentiels oraux et injectables de base)
 *   hgr  : hôpital général de référence de la zone de santé (médecin, laboratoire de base,
 *          radiographie/échographie, bloc opératoire, transfusion)
 *   tert : hôpital provincial ou universitaire (spécialistes, réanimation, scanner, dialyse, endoscopie)
 * Chaque niveau : [ce qu'on peut faire sur place, quand et comment transférer].
 *
 * Les moyens réels varient d'une structure à l'autre : adapter au plateau technique disponible.
 */

module.exports = {
  'paludisme-grave': {
    cs: [
      '- Reconnaître les signes de gravité, TDR\n- Glycémie capillaire si disponible ; sinon sucre per os ou glucosé si conscient\n- **Artésunate rectal (enfant < 6 ans) ou artésunate/artéméther IM en dose pré-transfert**\n- Diazépam intrarectal si convulsions, paracétamol, PLS',
      '- Transférer **tout** paludisme grave vers l’HGR après la dose pré-transfert\n- Accompagnement par un soignant, fiche de référence avec heure et dose administrées',
    ],
    hgr: [
      '- Artésunate IV/IM complet, relais par CTA\n- Glycémie, Hb, goutte épaisse, transfusion\n- Traitement des convulsions, de l’hypoglycémie, surveillance de la diurèse',
      '- Coma persistant au-delà de 48 h, détresse respiratoire nécessitant une ventilation\n- Insuffisance rénale nécessitant une dialyse\n- Choc réfractaire',
    ],
    tert: [
      '- Réanimation (ventilation, vasopresseurs), dialyse\n- Prise en charge des séquelles neurologiques',
      null,
    ],
  },
  'paludisme-simple': {
    cs: [
      '- TDR, CTA de 3 jours (artéméther-luméfantrine ou artésunate-amodiaquine), paracétamol\n- 1re dose sous observation, conseils, moustiquaire\n- Agents de santé communautaires (sites de soins communautaires) : même prise en charge chez l’enfant',
      '- Apparition d’un signe de danger ou de gravité → traiter comme un paludisme grave (dose pré-transfert)\n- Vomissements répétés empêchant la prise orale\n- Échec à J3 malgré une CTA bien prise',
    ],
    hgr: ['- Idem centre de santé ; microscopie (goutte épaisse) en cas d’échec', '- Rarement nécessaire'],
    tert: ['- Non concerné sauf complication', null],
  },
  'infection-vih': {
    cs: [
      '- Dépistage (algorithme national), conseil, annonce\n- Initiation et renouvellement du TARV (TLD) dans les sites intégrés, cotrimoxazole, TPT\n- Dépistage des symptômes de tuberculose, soutien à l’observance',
      '- Maladie à VIH avancée (CD4 < 200, stade 3–4) ou patient gravement malade\n- Suspicion d’infection opportuniste (méningite, tuberculose grave)\n- Charge virale ≥ 1 000 copies/mL persistante (échec)',
    ],
    hgr: [
      '- CD4, TB-LAM, Xpert, antigène cryptococcique\n- Prise en charge des infections opportunistes courantes\n- Gestion des échecs (2e ligne selon le PNLS)',
      '- Méningite cryptococcique compliquée, échec de 2e ligne (génotypage), cancers associés',
    ],
    tert: ['- Génotypage de résistance, 3e ligne, oncologie, réanimation', null],
  },
  'meningite-bacterienne': {
    cs: [
      '- Reconnaître le syndrome méningé et le purpura\n- **Ceftriaxone IM ou IV en 1re dose avant le transfert**\n- TDR paludisme, traitement des convulsions (diazépam), paracétamol',
      '- Transférer tout cas suspect vers l’HGR après la 1re dose\n- En épidémie : suivre le protocole OMS de prise en charge décentralisée',
    ],
    hgr: [
      '- Ponction lombaire et analyse du LCR, hémocultures\n- Ceftriaxone complète, dexaméthasone, traitement des convulsions\n- Notification au bureau central de la zone de santé',
      '- Coma, choc septique ou purpura fulminans\n- Suspicion d’empyème, d’abcès ou d’hydrocéphalie (besoin de scanner ou de neurochirurgie)',
    ],
    tert: [
      '- Réanimation, scanner, neurochirurgie (drainage, dérivation)\n- Audiométrie, rééducation des séquelles',
      null,
    ],
  },
  cholera: {
    cs: [
      '- Évaluer la déshydratation, SRO (plans A et B), zinc chez l’enfant\n- Point de réhydratation orale (PRO), notification immédiate, chloration',
      '- Déshydratation sévère (plan C) → centre ou unité de traitement du choléra (CTC/UTC) ou HGR\n- Si le transfert prend du temps : commencer la perfusion ou la sonde nasogastrique (SRO 20 mL/kg/h)',
    ],
    hgr: [
      '- CTC/UTC : plan C au Ringer lactate, antibiothérapie en dose unique, surveillance horaire\n- Confirmation (TDR, prélèvement pour culture) en début d’épidémie',
      '- Insuffisance rénale persistante après réhydratation (dialyse), complications chez la femme enceinte',
    ],
    tert: ['- Dialyse, réanimation', null],
  },
  'tuberculose-pulmonaire': {
    cs: [
      '- Dépistage des tousseurs, collecte et transport des crachats\n- Traitement directement observé (2RHZE/4RH), suivi du poids, recherche des effets indésirables\n- Dépistage des contacts, traitement préventif',
      '- Hémoptysie abondante, détresse respiratoire\n- Hépatite médicamenteuse, effets indésirables graves\n- Résistance à la rifampicine détectée',
    ],
    hgr: [
      '- Xpert MTB/RIF, radiographie, centre de diagnostic et de traitement (CDT)\n- Hospitalisation des formes graves, co-infection TB/VIH',
      '- Tuberculose RR/MR (centre de référence PNLT), formes extrapulmonaires complexes (méningite, péricardite constrictive)',
    ],
    tert: [
      '- Prise en charge de la tuberculose résistante, chirurgie thoracique, endoscopie bronchique',
      null,
    ],
  },
  asthme: {
    cs: [
      '- Crise légère à modérée : salbutamol en chambre d’inhalation, corticoïde oral, oxygène si disponible\n- Traitement de fond par corticoïde inhalé, éducation, technique d’inhalation',
      '- Crise grave (parle par mots, SpO2 < 92 %, silence auscultatoire, confusion) ou absence d’amélioration après 1 h\n- Transférer sous salbutamol et oxygène',
    ],
    hgr: [
      '- Nébulisations salbutamol + ipratropium, corticoïdes IV, sulfate de magnésium IV, oxygène\n- Radiographie, spirométrie ou DEP',
      '- Crise grave réfractaire, signes d’épuisement (besoin de ventilation)\n- Asthme sévère non contrôlé malgré le palier 4',
    ],
    tert: ['- Réanimation, consultation de pneumologie (asthme sévère, biothérapies)', null],
  },
  'hypertension-arterielle': {
    cs: [
      '- Mesure standardisée, confirmation, conseils hygiéno-diététiques\n- Traitement initial et renouvellement selon le protocole national (amlodipine, hydrochlorothiazide), suivi tensionnel',
      '- PA ≥ 180/110 avec signes d’atteinte d’organe (céphalées intenses, déficit, douleur thoracique, dyspnée)\n- HTA chez la femme enceinte, sujet jeune (< 30 ans), HTA non contrôlée sous 3 médicaments',
    ],
    hgr: [
      '- Bilan (créatinine, ionogramme, ECG, bandelette, échographie), bithérapie/trithérapie\n- Urgence hypertensive : traitement IV si disponible',
      '- Urgence hypertensive avec AVC, OAP ou dissection, HTA secondaire à explorer\n- Insuffisance rénale avancée',
    ],
    tert: ['- Cardiologie, néphrologie, explorations des HTA secondaires, soins intensifs', null],
  },
  'insuffisance-cardiaque': {
    cs: [
      '- Suspicion clinique, furosémide oral, conseils (sel, pesée)\n- Renouvellement du traitement de fond prescrit, surveillance poids/PA',
      '- Premier épisode (diagnostic et cause à établir)\n- Dyspnée de repos, OAP, PAS < 90 mmHg, syncope, douleur thoracique',
    ],
    hgr: [
      '- ECG, radiographie, échographie cardiaque si disponible\n- OAP : furosémide IV, oxygène ; introduction et titration des traitements de fond',
      '- Choc cardiogénique, valvulopathie chirurgicale, troubles du rythme graves, IC réfractaire',
    ],
    tert: [
      '- Cardiologie, soins intensifs, chirurgie valvulaire (centres spécialisés), stimulateur cardiaque',
      null,
    ],
  },
  'hepatite-b-chronique': {
    cs: [
      '- Dépistage de l’AgHBs (femmes enceintes, PVVIH, entourage), vaccination du nouveau-né dans les 24 h\n- Éducation (alcool, transmission), orientation',
      '- Tout porteur de l’AgHBs pour évaluation (ALAT, fibrose) et décision de traitement\n- Ictère, ascite, hémorragie digestive, confusion',
    ],
    hgr: [
      '- ALAT, NFS (score APRI), échographie ; initiation et suivi du ténofovir\n- Prévention de la transmission mère-enfant',
      '- Cirrhose décompensée, hémorragie digestive (endoscopie), suspicion de carcinome hépatocellulaire',
    ],
    tert: [
      '- Hépato-gastro-entérologie : endoscopie (ligature), élastométrie, ADN VHB, prise en charge du carcinome',
      null,
    ],
  },
  'insuffisance-renale-aigue': {
    cs: [
      '- Prévention : réhydratation des diarrhées, éviter AINS et plantes néphrotoxiques\n- Repérer l’oligurie chez le patient grave',
      '- Toute oligurie ou anurie persistante après réhydratation, œdèmes, dyspnée, confusion',
    ],
    hgr: [
      '- Créatinine, ionogramme, échographie (obstacle), sondage urinaire\n- Remplissage si hypovolémie, traitement médical de l’hyperkaliémie\n- Dialyse péritonéale si l’équipe est formée',
      '- Indication d’épuration extrarénale non disponible sur place (hyperkaliémie, acidose, OAP réfractaires)\n- Glomérulonéphrite rapidement progressive',
    ],
    tert: ['- Hémodialyse, néphrologie (biopsie rénale), réanimation', null],
  },
  'diabete-type-2': {
    cs: [
      '- Glycémie capillaire, éducation, metformine et sulfamide selon le protocole\n- Examen des pieds, suivi tensionnel et pondéral',
      '- Glycémie ≥ 3 g/L avec signes de déshydratation ou cétose, troubles de la conscience\n- Plaie du pied infectée, besoin d’insuline, femme enceinte diabétique',
    ],
    hgr: [
      '- HbA1c, créatinine, bilan lipidique, initiation de l’insuline\n- Acidocétose : réhydratation et insuline IV, surveillance\n- Soins du pied diabétique, chirurgie',
      '- Acidocétose sévère (pH < 7,0), coma hyperosmolaire, complications avancées (dialyse, rétinopathie proliférante)',
    ],
    tert: ['- Endocrinologie, ophtalmologie (laser), néphrologie, chirurgie vasculaire', null],
  },
  drepanocytose: {
    cs: [
      '- Dépistage néonatal par test rapide, éducation des familles\n- Pénicilline V, acide folique, vaccinations, prévention du paludisme\n- Crise douloureuse légère : paracétamol, hydratation',
      '- Fièvre ≥ 38,5 °C, douleur non soulagée, douleur thoracique, dyspnée\n- Pâleur brutale ou augmentation de la rate, déficit neurologique, priapisme',
    ],
    hgr: [
      '- Électrophorèse ou confirmation, NFS, transfusion simple\n- Antalgie par morphine, antibiothérapie, oxygène\n- Initiation et suivi de l’hydroxyurée',
      '- AVC (échange transfusionnel), syndrome thoracique aigu sévère, priapisme > 4 h\n- Besoin d’un Doppler transcrânien',
    ],
    tert: ['- Échanges transfusionnels, Doppler transcrânien, réanimation, chirurgie (ostéonécrose)', null],
  },
  'malnutrition-aigue-severe': {
    cs: [
      '- Dépistage (PB, œdèmes), test d’appétit\n- MAS non compliquée : unité nutritionnelle ambulatoire (UNTA) — ATPE, amoxicilline, suivi hebdomadaire',
      '- MAS compliquée (test d’appétit négatif, complication médicale, œdèmes +++), nourrisson < 6 mois\n- Absence de gain de poids après 3 semaines → unité nutritionnelle intensive (UNTI)',
    ],
    hgr: [
      '- UNTI : F-75, ReSoMal, antibiothérapie parentérale, prise en charge de l’hypoglycémie et de l’hypothermie\n- Transfusion, recherche de tuberculose et de VIH',
      '- Rarement : complications nécessitant une réanimation pédiatrique',
    ],
    tert: ['- Réanimation pédiatrique, pathologies sous-jacentes complexes', null],
  },
  'diarrhee-aigue-enfant': {
    cs: [
      '- Classer la déshydratation (PCIME), plans A et B (SRO), zinc\n- Plan C si le personnel est formé et le matériel disponible\n- Ciprofloxacine si dysenterie',
      '- Déshydratation sévère si le plan C ne peut pas être conduit sur place (commencer la sonde nasogastrique)\n- MAS associée, signe de danger, diarrhée persistante ≥ 14 jours, nourrisson < 2 mois',
    ],
    hgr: [
      '- Plan C au Ringer lactate, surveillance, ionogramme si disponible\n- Prise en charge de la malnutrition associée',
      '- Insuffisance rénale persistante, complications chirurgicales (invagination)',
    ],
    tert: ['- Réanimation pédiatrique, chirurgie pédiatrique', null],
  },
  'pneumonie-enfant': {
    cs: [
      '- Compter la FR, rechercher tirage et signes de danger, oxymétrie si disponible\n- Pneumonie non grave : amoxicilline orale, contrôle à 3 jours',
      '- Pneumonie grave (signe de danger, SpO2 < 90 %) : **1re dose d’antibiotique** (ampicilline ou amoxicilline) puis transfert\n- Échec à 72 h, nourrisson < 2 mois',
    ],
    hgr: [
      '- Oxygène, ampicilline + gentamicine, ceftriaxone en 2e ligne\n- Radiographie, ponction pleurale, CPAP à bulles si disponible',
      '- Détresse respiratoire malgré l’oxygène et la CPAP, empyème nécessitant une chirurgie',
    ],
    tert: ['- Réanimation pédiatrique, ventilation, chirurgie thoracique', null],
  },
  'sepsis-neonatal': {
    cs: [
      '- Reconnaître les 7 signes de danger, garder au chaud (peau à peau), allaiter\n- **1re dose d’ampicilline/amoxicilline + gentamicine** avant transfert\n- Schéma simplifié OMS (gentamicine IM + amoxicilline orale) si la famille refuse ou ne peut pas être transférée',
      '- Tout nouveau-né avec signe de danger → néonatologie de l’HGR\n- Transfert en méthode kangourou',
    ],
    hgr: [
      '- Ampicilline + gentamicine IV, oxygène, glucosé, photothérapie\n- Ponction lombaire, hémoculture si disponible',
      '- Détresse respiratoire nécessitant une ventilation, convulsions réfractaires, prématurité extrême',
    ],
    tert: ['- Réanimation néonatale (CPAP, ventilation), exsanguinotransfusion', null],
  },
  'pre-eclampsie-severe': {
    cs: [
      '- Mesure de la PA et bandelette urinaire à chaque CPN\n- **Dose de charge de sulfate de magnésium** (4 g IV + 10 g IM) et antihypertenseur oral (nifédipine) avant transfert',
      '- Toute pré-éclampsie sévère ou éclampsie → structure avec bloc opératoire\n- Transfert en décubitus latéral gauche, accompagnée',
    ],
    hgr: [
      '- Sulfate de magnésium (entretien), contrôle tensionnel, bilan, corticothérapie\n- Accouchement par voie basse ou césarienne, surveillance post-partum',
      '- HELLP grave, insuffisance rénale (dialyse), OAP sévère, AVC\n- Prématurité < 32 SA sans néonatologie sur place',
    ],
    tert: ['- Soins intensifs maternels, dialyse, néonatologie de niveau supérieur', null],
  },
  'hemorragie-post-partum': {
    cs: [
      '- **GATPA pour toutes**, sac collecteur gradué\n- Paquet E-MOTIVE : massage, ocytocine, acide tranexamique, perfusion, examen\n- Délivrance artificielle et révision utérine si personnel formé, compression bimanuelle',
      '- Saignement persistant après les mesures de 1re ligne, rétention placentaire non résolue, déchirure non suturable\n- Transfert avec compression aortique ou bimanuelle, ballonnet intra-utérin, combinaison anti-choc si disponible',
    ],
    hgr: [
      '- Transfusion, utérotoniques, ballonnet de tamponnement\n- Chirurgie : ligatures vasculaires, B-Lynch, hystérectomie d’hémostase',
      '- Coagulopathie grave, défaillance multiviscérale nécessitant une réanimation',
    ],
    tert: ['- Réanimation, produits sanguins, embolisation (si disponible)', null],
  },
  'grossesse-extra-uterine': {
    cs: [
      '- Test de grossesse urinaire devant toute douleur pelvienne ou métrorragie\n- Mise en condition : voie veineuse, remplissage',
      '- **Toute suspicion de GEU** → HGR (échographie, bloc)\n- Choc : transfert immédiat après mise en condition',
    ],
    hgr: [
      '- Échographie, β-hCG, laparotomie en urgence (salpingectomie)\n- Traitement médical par méthotrexate si critères et suivi possible',
      '- Formes atypiques (GEU cervicale, interstitielle), besoin de cœlioscopie',
    ],
    tert: ['- Cœlioscopie, prise en charge des formes rares', null],
  },
  'appendicite-aigue': {
    cs: [
      '- Suspicion clinique (score d’Alvarado), à jeun, voie veineuse, antalgie',
      '- Tout score ≥ 5 ou défense → HGR (avis chirurgical)\n- Péritonite : transfert urgent après 1re dose d’antibiotique',
    ],
    hgr: [
      '- Échographie, appendicectomie, antibiothérapie\n- Traitement antibiotique seul si chirurgie impossible (forme simple)',
      '- Complications nécessitant une réanimation, doute diagnostique nécessitant un scanner',
    ],
    tert: ['- Scanner, cœlioscopie, réanimation', null],
  },
  'occlusion-intestinale-aigue': {
    cs: [
      '- Reconnaître l’occlusion, examiner les orifices herniaires\n- À jeun, voie veineuse, réhydratation, sonde nasogastrique si disponible',
      '- **Toute occlusion** → HGR (chirurgie)\n- Hernie étranglée : transfert immédiat',
    ],
    hgr: [
      '- ASP, échographie, réanimation hydro-électrolytique\n- Chirurgie (hernie, brides, résection, stomie), détorsion du volvulus',
      '- Défaillances d’organes, besoin d’endoscopie (volvulus) ou de scanner',
    ],
    tert: ['- Scanner, endoscopie, réanimation, chirurgie digestive spécialisée', null],
  },
  'peritonite-aigue': {
    cs: [
      '- Reconnaître le ventre de bois et le sepsis\n- Voie veineuse, remplissage, **1re dose d’antibiotique** (ceftriaxone + métronidazole)',
      '- Transfert immédiat vers un bloc opératoire',
    ],
    hgr: [
      '- Réanimation, antibiothérapie, laparotomie (toilette, traitement de la cause)\n- Perforation typhique : résection ou suture iléale',
      '- Choc septique réfractaire, défaillance multiviscérale, péritonite postopératoire complexe',
    ],
    tert: ['- Réanimation, chirurgie digestive spécialisée, radiologie interventionnelle', null],
  },
  'traumatisme-cranien': {
    cs: [
      '- ABCDE, collier cervical, Glasgow et pupilles\n- TC léger sans facteur de risque : surveillance et consignes écrites',
      '- Glasgow < 15 persistant, perte de connaissance, vomissements répétés, convulsion, déficit, plaie craniocérébrale\n- Transfert allongé, rachis protégé, oxygène',
    ],
    hgr: [
      '- Stabilisation (oxygène, remplissage isotonique), surveillance neurologique horaire\n- Acide tranexamique, osmothérapie si engagement\n- Trous de trépan en sauvetage si chirurgien formé et transfert impossible',
      '- Glasgow ≤ 12, signes de localisation, aggravation → centre avec scanner et neurochirurgie',
    ],
    tert: ['- Scanner, neurochirurgie, réanimation neurochirurgicale, rééducation', null],
  },
  'etat-de-mal-epileptique': {
    cs: [
      '- PLS, glycémie capillaire, **diazépam intrarectal ou midazolam buccal/IM**\n- TDR paludisme, artésunate pré-transfert si positif',
      '- Crise persistante après une benzodiazépine, absence de réveil, fièvre → HGR',
    ],
    hgr: [
      '- 2e ligne (phénobarbital, lévétiracétam, valproate, phénytoïne), oxygène\n- Recherche et traitement de la cause (ponction lombaire, glycémie, ionogramme)',
      '- État de mal réfractaire (> 40 min) nécessitant une anesthésie et une ventilation',
    ],
    tert: ['- Réanimation, EEG, imagerie cérébrale', null],
  },
  epilepsie: {
    cs: [
      '- Diagnostic clinique (mhGAP), phénobarbital ou carbamazépine selon le protocole\n- Éducation, lutte contre la stigmatisation, renouvellement sans rupture',
      '- Première crise de l’adulte avec signes focaux, enfant < 2 ans, femme enceinte\n- Crises non contrôlées malgré un traitement bien pris, effets indésirables graves',
    ],
    hgr: [
      '- Bilan étiologique de base, adaptation du traitement, prise en charge des comorbidités',
      '- Épilepsie pharmacorésistante, besoin d’EEG ou d’imagerie cérébrale',
    ],
    tert: ['- Neurologie : EEG, scanner/IRM, avis neurochirurgical', null],
  },
  avc: {
    cs: [
      '- Reconnaître (FAST), noter l’heure de début, glycémie capillaire\n- PLS, rien par la bouche, ne pas baisser brutalement la PA',
      '- **Tout AVC suspect** → transfert immédiat vers un hôpital avec scanner (thrombolyse possible si < 4 h 30)',
    ],
    hgr: [
      '- Surveillance, aspirine si scanner disponible et hémorragie exclue (sinon selon avis), prévention des complications\n- Rééducation précoce',
      '- Début < 4 h 30 (thrombolyse), troubles de la conscience, hémorragie (avis neurochirurgical)',
    ],
    tert: ['- Scanner/IRM, thrombolyse, unité neurovasculaire, neurochirurgie', null],
  },
};
