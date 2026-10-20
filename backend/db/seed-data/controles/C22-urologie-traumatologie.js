'use strict';

/**
 * Contrôle de conformité — lot C22 : urologie et traumatologie (33 fiches). Recommandations
 * de l’EAU pour l’urologie ; traumatologie : ATLS, BOAST, CICR. Traitement de masse de la
 * filariose aligné sur la fiche « Filariose lymphatique » (coendémie onchocercose et loase).
 */

const ATLS = 'ACS — Advanced Trauma Life Support (ATLS, 10e édition, 2018)';
const BOAST = 'BOA/BAPRAS — BOAST 4 : open fractures (2017)';
const AAOS = 'AAOS — Clinical practice guidelines (fractures)';
const CICR = 'CICR — La chirurgie de guerre (vol. 1 et 2)';
const DISTRICT = 'OMS — Surgical care at the district hospital (2003)';
const EAU = (theme) => `EAU — Guidelines (2024) : ${theme}`;

module.exports = {
  lot: 'C22',
  date: '2026-10-19',
  titre: 'Urologie et traumatologie',
  fiches: [
    {
      slug: 'cancer-de-la-prostate',
      protocoles: [EAU('prostate cancer')],
      verifie:
        'Toucher rectal, PSA, biopsies (Gleason/ISUP), bilan osseux ; localisé : surveillance active, prostatectomie ou radiothérapie ; métastatique : orchidectomie bilatérale ou goséréline avec bicalutamide les premières semaines, abiratérone, docétaxel ; compression médullaire : dexaméthasone, castration en urgence, radiothérapie.',
    },
    {
      slug: 'cancer-de-la-vessie',
      protocoles: [EAU('non-muscle-invasive and muscle-invasive bladder cancer'), 'OMS — Guideline on control and elimination of human schistosomiasis (2022)'],
      verifie:
        'Carcinome épidermoïde bilharzien et urothélial ; hématurie indolore explorée (échographie, cystoscopie, cytologie, œufs de schistosomes) ; résection transurétrale et instillations de BCG ; cystectomie avec chimiothérapie néoadjuvante cisplatine-gemcitabine, ou radiochimiothérapie ; praziquantel en prévention.',
    },
    {
      slug: 'cryptorchidie',
      protocoles: [EAU('paediatric urology'), 'AUA — Evaluation and treatment of cryptorchidism (2014, révision 2018)'],
      verifie:
        'Descente spontanée possible jusqu’à 6 mois, testicule rétractile ; bilatéral non palpable ou avec hypospadias : caryotype et 17-OHP ; orchidopexie entre 6 et 18 mois, cœlioscopie si non palpable ; pas d’hCG en routine ; autopalpation à l’adolescence.',
    },
    {
      slug: 'hematurie-demarche',
      protocoles: ['AUA/SUFU — Microhematuria guideline (2020)', 'OMS — Guideline on control and elimination of human schistosomiasis (2022)'],
      verifie:
        'Chronologie, fausses hématuries ; bandelette, ECBU, œufs de schistosomes, protéinurie, créatinine, échographie ; praziquantel 40 mg/kg, cystoscopie si persistance ou après 40 ans ; rétention sur caillots : sonde à double courant ; hématurie sous anticoagulant explorée.',
      corrige:
        'Seuil de l’hématurie microscopique du résumé aligné sur la définition de la fiche (≥ 10 hématies/µL, et non ≥ 5/mm³).',
      corrections: [
        {
          champ: 'resume',
          remplacer: ['(≥ 5 hématies/mm³)', '(≥ 10 hématies/µL)'],
        },
      ],
    },
    {
      slug: 'hydrocele',
      protocoles: [EAU('paediatric urology'), 'OMS — Alternative mass drug administration regimens to eliminate lymphatic filariasis (2017)'],
      verifie:
        'Masse rénitente transilluminable, testicule non palpable séparément ; échographie scrotale ; enfant : surveillance jusqu’à 1–2 ans puis ligature du canal ; adulte : résection ou éversion de la vaginale, ponction déconseillée ; filariose : chirurgie des hydrocèles, soins du lymphœdème.',
      corrige:
        'Traitement de masse de la filariose aligné sur la fiche « Filariose lymphatique » : la diéthylcarbamazine (schéma IDA) est réservée aux zones sans onchocercose ni loase, fréquentes en RDC (risque de réactions graves) ; l’ivermectine n’est pas utilisée en zone de loase.',
      corrections: [
        {
          principe: 'Filariose',
          champ: 'details',
          remplacer: [
            '- **Traitement de masse** (ivermectine + diéthylcarbamazine + albendazole selon les zones)',
            '- **Traitement de masse** selon le programme national et la coendémie : albendazole 2 fois par an en zone de loase, ivermectine + albendazole en zone d’onchocercose, ivermectine + diéthylcarbamazine + albendazole seulement là où il n’y a ni onchocercose ni loase',
          ],
        },
        {
          molecule: 'diethylcarbamazine',
          champ: 'contexte',
          remplacer: [
            'Filariose lymphatique',
            'Filariose lymphatique (jamais en zone d’onchocercose ni de loase)',
          ],
        },
        {
          molecule: 'ivermectine',
          champ: 'contexte',
          remplacer: [
            'Filariose (traitement de masse)',
            'Filariose (traitement de masse, pas en zone de coendémie de la loase)',
          ],
        },
      ],
    },
    {
      slug: 'hypertrophie-benigne-prostate',
      protocoles: [EAU('management of non-neurogenic male LUTS')],
      verifie:
        'Symptômes obstructifs et irritatifs, IPSS, toucher rectal, PSA, échographie ; mesures hygiéno-diététiques ; tamsulosine 0,4 mg/j ou alfuzosine 10 mg/j ; dutastéride si prostate > 40 mL (PSA divisé par 2) ; chirurgie (adénomectomie, RTUP) si rétention récidivante, insuffisance rénale, calculs, infections ou échec.',
    },
    {
      slug: 'hypospadias',
      protocoles: [EAU('paediatric urology')],
      verifie:
        'Méat ventral, prépuce en tablier, courbure ; pas de circoncision ; formes postérieures ou avec cryptorchidie : caryotype et 17-OHP ; urétroplastie entre 6 et 18 mois ; fistule et sténose.',
    },
    {
      slug: 'lithiase-urinaire-colique-nephretique',
      protocoles: [EAU('urolithiasis')],
      verifie:
        'Signes de gravité (fièvre, anurie, rein unique) ; échographie, scanner sans injection ; AINS (diclofénac, kétoprofène) en première intention, morphine si insuffisant ; tamsulosine pour les calculs < 10 mm ; colique compliquée : drainage (sonde JJ, néphrostomie) + ceftriaxone ; lithiase urique : alcalinisation, allopurinol.',
      corrige:
        'Apports hydriques de prévention alignés sur l’EAU (2,5–3 L/j pour une diurèse de 2–2,5 L/j).',
      corrections: [
        {
          principe: 'Traitement du calcul et prévention',
          champ: 'details',
          remplacer: [
            '- **Boire > 2 L/j**, réduire le sel et les protéines animales',
            '- **Boire 2,5–3 L/j** (diurèse de 2–2,5 L/j), réduire le sel et les protéines animales',
          ],
        },
      ],
    },
    {
      slug: 'orchi-epididymite',
      protocoles: ['OMS — Recommendations for the treatment of Neisseria gonorrhoeae, Chlamydia trachomatis… (2024)', 'IUSTI — European guideline on the management of epididymo-orchitis (2016)'],
      verifie:
        'Douleur progressive, Prehn, réflexe crémastérien présent ; torsion à éliminer ; ECBU, prélèvement urétral, Doppler ; < 35 ans : ceftriaxone 1 g IM + doxycycline 100 mg 2 fois par jour 10–14 jours, partenaire ; > 35 ans : fluoroquinolone 10–14 jours ; repos, suspensoir, AINS.',
    },
    {
      slug: 'phimosis-paraphimosis',
      protocoles: [EAU('paediatric urology'), 'OMS — Manual for male circumcision under local anaesthesia (2009)'],
      verifie:
        'Phimosis physiologique de l’enfant (ne pas décalotter de force) ; dermocorticoïde 2 fois par jour 4–6 semaines, circoncision si échec ; paraphimosis : bloc pénien sans adrénaline, compression de l’œdème, réduction manuelle, incision dorsale si échec ; circoncision médicale dans de bonnes conditions.',
    },
    {
      slug: 'priapisme',
      protocoles: ['AUA/SMSNA — Guideline on the diagnosis and management of priapism (2022)', 'NHLBI — Evidence-based management of sickle cell disease (2014)'],
      verifie:
        'Érection > 4 h, gaz du sang caverneux ; hydratation, antalgie ; aspiration des corps caverneux et phényléphrine diluée intracaverneuse, shunt si échec ; transfusion d’échange non recommandée en première intention ; hydroxyurée, consultation avant 2 h.',
    },
    {
      slug: 'retention-aigue-urine',
      protocoles: [EAU('management of non-neurogenic male LUTS')],
      verifie:
        'Globe vésical, toucher rectal, examen du méat ; sonde urétrale sans forcer, cathéter sus-pubien si rétrécissement ou prostatite ; vidange progressive non obligatoire ; alpha-bloquant 2–3 jours avant l’ablation de la sonde ; PSA à distance.',
    },
    {
      slug: 'retrecissement-uretral',
      protocoles: ['AUA — Urethral stricture guideline (2023)', EAU('urethral strictures')],
      verifie:
        'Jet filiforme, sondage impossible ; urétrographie rétrograde et mictionnelle ; ne pas forcer, cathéter sus-pubien ; dilatations transitoires, urétrotomie interne des sténoses courtes, urétroplastie des longues, récidivantes ou post-traumatiques ; traitement des urétrites.',
    },
    {
      slug: 'torsion-du-testicule',
      protocoles: [EAU('paediatric urology')],
      verifie:
        'Douleur brutale, testicule ascensionné, réflexe crémastérien aboli ; aucun examen ne retarde l’exploration ; détorsion manuelle « en ouvrant le livre » en attente ; orchidopexie ou orchidectomie, orchidopexie controlatérale ; sauvetage avant 6 h.',
    },
    {
      slug: 'traumatismes-urologiques',
      protocoles: [EAU('urological trauma'), ATLS],
      verifie:
        'Sang au méat, hématome périnéal, prostate ascensionnée ; scanner injecté avec temps tardif, urétrographie, cystographie ; rein : traitement conservateur si stable ; sang au méat : pas de sonde, cystostomie, réparation différée ; vessie : sonde 10–14 jours si extrapéritonéale, suture si intrapéritonéale ; fracture de la verge : chirurgie urgente.',
    },
    {
      slug: 'tumeurs-du-rein',
      protocoles: [EAU('renal cell carcinoma')],
      verifie:
        'Découverte fortuite, triade tardive, syndromes paranéoplasiques ; échographie, scanner thoraco-abdomino-pelvien ; néphrectomie élargie ou partielle ; formes métastatiques : thérapies ciblées et immunothérapie ; kyste simple : abstention ; angiomyolipome volumineux : embolisation.',
    },
    {
      slug: 'varicocele',
      protocoles: [EAU('sexual and reproductive health : varicocele'), EAU('paediatric urology')],
      verifie:
        'Examen debout et Valsalva, grades ; varicocèle droite ou récente : échographie rénale ; indications : infertilité avec anomalies du sperme, hypotrophie ou douleur de l’adolescent ; ligature (microchirurgicale si possible) ou embolisation.',
    },
    {
      slug: 'amputations-traumatiques',
      protocoles: [ATLS, CICR],
      verifie:
        'Garrot artériel avec l’heure, réanimation, acide tranexamique, antitétanique, céfazoline ± métronidazole ; segment dans une compresse humide, sac étanche sur eau glacée sans contact direct ; réimplantation < 6 h (membre) ou < 12 h (doigt refroidi) ; moignon de longueur maximale, fermeture différée, douleur fantôme, appareillage.',
    },
    {
      slug: 'entorse-de-la-cheville',
      protocoles: ['Règles d’Ottawa de la cheville et du pied (Stiell)', 'KNGF — Clinical practice guideline for ankle sprain (Vuurberg et al., Br J Sports Med 2018)'],
      verifie:
        'Règles d’Ottawa ; RICE, AINS quelques jours ; appui précoce, orthèse ou botte de marche 3–6 semaines dans les formes graves, pas d’immobilisation stricte prolongée ; rééducation proprioceptive ; ligamentoplastie de l’instabilité chronique.',
    },
    {
      slug: 'fracture-extremite-inferieure-radius',
      protocoles: ['AAOS — Management of distal radius fractures (2020)'],
      verifie:
        'Colles, fracture de l’enfant (motte de beurre), fracture articulaire ; nerf médian ; plâtre 4–6 semaines (attelle 3 semaines en motte de beurre) ; réduction sous anesthésie de l’hématome ou bloc, brochage ou plaque si instable ; contrôle à J7–J10 ; ostéoporose de la femme âgée.',
    },
    {
      slug: 'fracture-diaphyse-femorale',
      protocoles: [AAOS, 'AAOS — Treatment of pediatric diaphyseal femur fractures (2020)', 'SIGN Fracture Care International — enclouage verrouillé'],
      verifie:
        'Choc, embolie graisseuse, radiographie du fémur entier avec hanche et genou ; bloc ilio-fascial, traction provisoire ; enclouage centromédullaire verrouillé dans les 24–48 h, fixateur externe du polytraumatisé ; enfant : Bryant < 2 ans, plâtre pelvi-pédieux, broches élastiques après 5 ans ; maltraitance du nourrisson ; thromboprophylaxie.',
    },
    {
      slug: 'fracture-du-bassin',
      protocoles: [ATLS, 'WSES — Pelvic trauma classification and guidelines (2017)'],
      verifie:
        'Haute énergie avec choc, faible énergie du sujet âgé ; une seule manœuvre de compression ; ceinture pelvienne ou drap au niveau des grands trochanters, acide tranexamique, transfusion, fixateur externe, packing pré-péritonéal ; sang au méat : cystostomie ; fracture ouverte : colostomie.',
    },
    {
      slug: 'fracture-col-du-femur',
      protocoles: ['NICE — Hip fracture: management (CG124, mise à jour 2023)', 'AAOS — Management of hip fractures in older adults (2021)'],
      verifie:
        'Membre raccourci en rotation externe ; bloc iliofascial, énoxaparine ; chirurgie dans les 48 h : vissage des fractures non déplacées et du sujet jeune, prothèse des fractures déplacées du sujet âgé ; lever à J1, thromboprophylaxie 4–5 semaines ; ostéoporose, drépanocytose du sujet jeune.',
    },
    {
      slug: 'fracture-supracondylienne-humerus-enfant',
      protocoles: ['AAOS — Management of pediatric supracondylar humerus fractures (2011)', 'BOAST 11 — Supracondylar fractures in the humerus in children (2020)'],
      verifie:
        'Classification de Gartland, examen vasculaire et nerveux ; main froide sans pouls : réduction urgente ; Gartland I : plâtre 3 semaines ; II–III : réduction et embrochage percutané ; surveillance horaire du syndrome des loges, pas de plâtre circulaire serré.',
    },
    {
      slug: 'fractures-de-jambe',
      protocoles: [BOAST, AAOS],
      verifie:
        'Classification de Gustilo, pouls et syndrome des loges ; fracture ouverte : antibiotiques dans l’heure (céfazoline ± gentamicine), antitétanique, parage dans les 24 h, fixateur externe ; fermée : plâtre cruro-pédieux puis botte de Sarmiento, ou enclouage (SIGN) ; aponévrotomie urgente.',
      corrige:
        'Le Doppler artériel (pouls absents) était rattaché à l’écho-Doppler veineux : remplacé par l’écho-Doppler artériel des membres.',
      corrections: [
        { retirer: 'examen', examen: 'echo-doppler-veineux', categorie: 'gravite' },
        {
          ajouter: 'examen',
          examen: 'echo-doppler-arteriel',
          categorie: 'gravite',
          interpretation: 'Si pouls absents : lésion artérielle (sans retarder l’exploration chirurgicale).',
        },
      ],
    },
    {
      slug: 'fractures-avant-bras',
      protocoles: [AAOS, 'AO Foundation — Principes de l’ostéosynthèse des fractures diaphysaires de l’avant-bras'],
      verifie:
        'Monteggia et Galeazzi, radiographies avec coude et poignet ; enfant : réduction et plâtre brachio-antébrachio-palmaire 6 semaines, contrôle à J7–J10, broches élastiques si instable ; adulte : plaques pour les fractures déplacées des deux os ; syndrome des loges.',
    },
    {
      slug: 'fractures-ouvertes',
      protocoles: [BOAST, 'EAST — Practice management guidelines for prophylactic antibiotic use in open fractures (2011)'],
      verifie:
        'Classification de Gustilo-Anderson ; céfazoline 2 g dans l’heure, gentamicine pour les types III, métronidazole ou pénicilline si souillure tellurique, 24–72 h ; tétanos ; parage dans les 24 h, fixateur externe, pas de fermeture primaire des plaies contaminées, couverture à J3–J7.',
    },
    {
      slug: 'luxation-epaule',
      protocoles: ['BESS/BOA — Patient care pathway for traumatic anterior shoulder instability (2015)', 'Cochrane — Méthodes de réduction des luxations antérieures de l’épaule'],
      verifie:
        'Épaulette, nerf axillaire, radiographies avant et après réduction ; luxation postérieure (épilepsie, électrocution) ; réduction sous antalgie ou sédation (Milch, Kocher, traction-contre-traction) ; immobilisation 2–3 semaines, rééducation ; stabilisation chirurgicale des récidives.',
    },
    {
      slug: 'luxation-de-la-hanche',
      protocoles: [ATLS, AAOS],
      verifie:
        'Luxation postérieure (flexion, adduction, rotation interne), nerf sciatique ; réduction sous anesthésie générale ou sédation profonde dans les 6 h (Allis, Bigelow) ; contrôle radiographique et scanner ; chirurgie si fracture du cotyle instable ou irréductible ; surveillance de la nécrose.',
    },
    {
      slug: 'plaies-de-la-main',
      protocoles: ['BSSH — Standards of care in hand trauma (Hand Trauma Committee)', 'IDSA — Practice guidelines for skin and soft tissue infections (2014) : morsures'],
      verifie:
        'Examen des tendons, nerfs et vaisseaux avant l’anesthésie ; exploration au bloc avec garrot ; suture tendineuse et nerveuse idéalement < 24 h ; morsures non suturées, amoxicilline-acide clavulanique 5–7 jours ; immobilisation en position de fonction, rééducation précoce ; tétanos.',
    },
    {
      slug: 'plaies-par-arme-a-feu',
      protocoles: [CICR, ATLS],
      verifie:
        'Triage, xABCDE, garrot, acide tranexamique ; parage large, pas de fermeture primaire, fermeture différée à J4–J5 ; fixateur externe, pas d’ostéosynthèse interne en urgence ; projectiles retirés seulement s’ils sont accessibles ou dangereux ; pénicilline ± métronidazole, gentamicine si fracture ou abdomen ; tétanos.',
    },
    {
      slug: 'polytraumatise',
      protocoles: [ATLS, 'Rossaint et al. — European guideline on management of major bleeding and coagulopathy following trauma (2023)'],
      verifie:
        'xABCDE et examen secondaire ; garrot, ceinture pelvienne, intra-osseuse ; PAS 80–90 sauf traumatisme crânien ; transfusion précoce, acide tranexamique 1 g en 10 min puis 1 g en 8 h dans les 3 h ; exsufflation, drainage thoracique ; damage control ; thromboprophylaxie dès que possible.',
    },
    {
      slug: 'syndrome-des-loges',
      protocoles: ['BOAST 10 — Diagnosis and management of compartment syndrome of the limbs (2016)', DISTRICT],
      verifie:
        'Douleur disproportionnée et à l’étirement passif, pouls longtemps conservé ; ouvrir plâtre et pansements, membre à hauteur du cœur ; fasciotomie de toutes les loges en urgence (< 6 h), plaies laissées ouvertes ; rhabdomyolyse : diurèse ≥ 200 mL/h, traitement de l’hyperkaliémie.',
    },
  ],
};
