'use strict';

/**
 * Contrôle de conformité — lot C17 : pédiatrie générale et urgences pédiatriques (33 fiches).
 * Remplissage du choc : OMS ETAT (2016) et Surviving Sepsis Campaign pédiatrique (2020), essai FEAST ;
 * ivermectine : précaution loase (guide MSF), déjà retenue dans le lot C03.
 */

const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const PCIME = 'OMS/UNICEF — Prise en charge intégrée des maladies de l’enfant (PCIME, 2019)';
const ETAT = 'OMS — Updated guideline: paediatric emergency triage, assessment and treatment (ETAT, 2016)';
const SSC = 'Surviving Sepsis Campaign — International guidelines for septic shock in children (2020)';
const ERC = 'ERC — Paediatric life support guidelines (2021)';
const OMS_PALU = 'OMS — Guidelines for malaria (mise à jour 2023)';

module.exports = {
  lot: 'C17',
  date: '2026-10-16',
  titre: 'Pédiatrie générale et urgences pédiatriques',
  fiches: [
    {
      slug: 'adenopathies-enfant',
      protocoles: [POCKET, 'NICE — Suspected cancer: recognition and referral (NG12) : adénopathies de l’enfant'],
      verifie:
        'Signes d’alarme (> 2 cm, sus-claviculaire, dure, signes généraux, cytopénies) ; NFS, VIH, radiographie, cytoponction avec Xpert, biopsie ; adénite bactérienne : amoxicilline-acide clavulanique ou cloxacilline ; adénite post-BCG surveillée ; pas de corticoïdes avant le diagnostic.',
    },
    {
      slug: 'allergie-proteines-lait-vache',
      protocoles: ['ESPGHAN — Diagnosis and management of cow’s milk protein allergy in infants (2024)', 'WAO — DRACMA guideline (2024)'],
      verifie:
        'Formes immédiates et retardées ; éviction 2–4 semaines puis réintroduction (sauf anaphylaxie) ; allaitement poursuivi, éviction maternelle avec calcium et vitamine D si nécessaire ; hydrolysat poussé, acides aminés si échec, pas de lait de chèvre ni de laits végétaux non adaptés ; réintroduction tous les 6–12 mois.',
    },
    {
      slug: 'anaphylaxie-enfant',
      protocoles: ['WAO — Anaphylaxis guidance (2020)', 'Resuscitation Council UK — Emergency treatment of anaphylaxis (2021)'],
      verifie:
        'Diagnostic clinique ; adrénaline IM 0,01 mg/kg (max 0,5 mg) dans la cuisse, à répéter après 5 min ; position, oxygène, NaCl 20 mL/kg si hypotension, salbutamol ; antihistaminique et corticoïde après l’adrénaline ; surveillance 6–12 h, éviction, plan d’urgence, kit dans les lieux de vaccination.',
    },
    {
      slug: 'anemie-enfant',
      protocoles: [POCKET, 'OMS — Guideline: daily iron supplementation in infants and children (2016)', OMS_PALU],
      verifie:
        'Seuils selon l’âge, pâleur palmaire ; causes (paludisme, fer, helminthes, drépanocytose) ; transfusion si Hb < 4 g/dL ou < 6 g/dL avec signes de gravité, culot 10 mL/kg ; fer 3 mg/kg/j 3 mois après traitement du paludisme, acide folique, albendazole dès 1 an ; prévention.',
    },
    {
      slug: 'angine-pharyngite-enfant',
      protocoles: [PCIME, 'AHA — Prevention of rheumatic fever and diagnosis and treatment of acute streptococcal pharyngitis (2009)'],
      verifie:
        'Angine virale ou streptococcique (TDR après 3 ans), diphtérie si fausses membranes ; benzathine pénicilline dose unique (600 000 UI < 30 kg, 1,2 MUI au-delà) ou amoxicilline 50 mg/kg/j 6–10 jours, macrolide si allergie ; pas d’antibiotique pour l’angine virale ; phlegmon.',
    },
    {
      slug: 'boiterie-enfant',
      protocoles: [POCKET, 'ESPID — Bone and joint infections in children (2017)'],
      verifie:
        'Signes d’alarme (fièvre, impotence, douleurs nocturnes, maltraitance) ; NFS, CRP, radiographies, échographie de hanche, ponction si épanchement fébrile ; arthrite septique : lavage et antibiotiques IV (cloxacilline, ceftriaxone chez le drépanocytaire) ; synovite transitoire : ibuprofène et contrôle ; épiphysiolyse : décharge et chirurgie.',
    },
    {
      slug: 'carence-en-vitamine-a',
      protocoles: ['OMS — Guideline: vitamin A supplementation in infants and children 6–59 months (2011)', POCKET],
      verifie:
        'Classification de la xérophtalmie ; traitement à J1, J2 et J15 selon l’âge (50 000, 100 000, 200 000 UI), soins cornéens urgents ; rougeole et malnutrition ; supplémentation de 6 à 59 mois tous les 6 mois ; pas de fortes doses chez la femme enceinte.',
    },
    {
      slug: 'douleur-abdominale-enfant',
      protocoles: [POCKET],
      verifie:
        'Signes de gravité et urgences chirurgicales (appendicite, invagination, hernie, torsion), causes médicales (acidocétose, CVO, pneumonie, infection urinaire, paludisme) ; examen complet ; antalgie sans retarder le diagnostic ; douleurs fonctionnelles récurrentes.',
    },
    {
      slug: 'enuresie',
      protocoles: ['ICCS — Management of monosymptomatic nocturnal enuresis (2020)', 'NICE — Bedwetting in under 19s (CG111)'],
      verifie:
        'Énurésie primaire ou secondaire, signes urinaires, bandelette ; déculpabilisation, boissons le matin, calendrier ; alarme, desmopressine 120–240 µg (lyophilisat) ou 0,2–0,4 mg avec restriction hydrique 1 h avant et 8 h après ; causes organiques.',
    },
    {
      slug: 'fievre-enfant-pcime',
      protocoles: [PCIME, POCKET, OMS_PALU],
      verifie:
        'Signes généraux de danger, TDR systématique, recherche des foyers, classification rouge, jaune, verte ; première dose (artésunate, ceftriaxone ou ampicilline + gentamicine) avant transfert ; ACT si TDR positif ; pas d’antibiotique sans indication ; conseils à la mère ; fièvre > 7 jours : référer.',
    },
    {
      slug: 'fievre-prolongee-enfant',
      protocoles: [PCIME, POCKET],
      verifie:
        'Fièvre > 7 jours, bilan orienté (TDR, NFS, ECBU, hémocultures, VIH, radiographie, Xpert) avant tout traitement ; causes infectieuses et tumorales ; pas d’antipaludiques ni d’antibiotiques répétés à l’aveugle, pas de corticoïdes avant le diagnostic.',
    },
    {
      slug: 'maltraitance-enfant',
      protocoles: ['OMS — Responding to children and adolescents who have been sexually abused (2017)', 'OMS — Guidelines for HIV post-exposure prophylaxis (2024)'],
      verifie:
        'Signes d’alerte, bébé secoué, examen bienveillant et documenté ; squelette complet avant 2 ans, scanner, fond d’œil, hémostase ; hospitalisation de protection ; PPE dans les 72 h, prévention des IST, contraception d’urgence, vaccin hépatite B ; signalement selon la loi de protection de l’enfant.',
    },
    {
      slug: 'manifestations-postvaccinales-indesirables',
      protocoles: ['OMS — Global manual on surveillance of adverse events following immunization (2016, révisé 2023)'],
      verifie:
        'Réactions bénignes et graves, classification des causes ; paracétamol et conseils ; anaphylaxie : adrénaline 0,01 mg/kg IM, kit obligatoire ; abcès, BCGite ; notification et investigation ; communication.',
    },
    {
      slug: 'otite-moyenne-aigue',
      protocoles: [POCKET, 'AAP — Diagnosis and management of acute otitis media (2013)'],
      verifie:
        'Otoscopie (tympan bombé), mastoïdite ; amoxicilline 80–90 mg/kg/j, 5 jours après 2 ans et 10 jours avant 2 ans ou si otorrhée, amoxicilline-acide clavulanique si échec ; assèchement par mèche, quinolone locale dans l’otite chronique ; mastoïdite : ceftriaxone et avis chirurgical.',
    },
    {
      slug: 'parasitoses-intestinales-enfant',
      protocoles: ['OMS — Guideline: preventive chemotherapy to control soil-transmitted helminth infections (2017)', 'MSF — Guide clinique et thérapeutique : helminthiases, anguillulose et loase'],
      verifie:
        'Examen des selles répété, scotch-test ; albendazole 400 mg (200 mg de 12 à 23 mois) ou mébendazole 500 mg ; oxyures ; praziquantel ; giardiase et amibiase ; déparasitage tous les 6 mois ; occlusion à ascaris.',
      corrige:
        'Ivermectine de l’anguillulose : ajout du poids minimal (15 kg) et de la précaution liée à la loase, endémique dans une grande partie de la RDC (risque d’encéphalopathie grave si la microfilarémie de Loa loa est très élevée), comme dans la fiche « Gale ».',
      corrections: [
        {
          principe: 'Helminthiases',
          champ: 'details',
          remplacer: [
            '- Anguillulose : **ivermectine** 200 µg/kg',
            '- Anguillulose : **ivermectine** 200 µg/kg (enfant ≥ 15 kg) ; en zone d’endémie de la loase, rechercher un antécédent de loase ou mesurer la microfilarémie de *Loa loa* avant le traitement (risque d’encéphalopathie grave si elle est très élevée)',
          ],
        },
        { molecule: 'ivermectine', champ: 'contexte', remplacer: ['Anguillulose', 'Anguillulose (≥ 15 kg, précaution loase)'] },
      ],
    },
    {
      slug: 'pleurs-et-coliques-nourrisson',
      protocoles: ['Critères de Rome IV — Coliques du nourrisson (2016)', 'OMS — Prévention du syndrome du bébé secoué'],
      verifie:
        'Diagnostic d’élimination, signes d’alarme, examen complet déshabillé, courbe de poids ; rassurer, techniques d’apaisement, ne jamais secouer ; pas de médicaments ni de changements de lait répétés ; traiter une cause organique.',
    },
    {
      slug: 'rachitisme-carentiel',
      protocoles: ['Global consensus recommendations on prevention and management of nutritional rickets (2016)'],
      verifie:
        'Clinique, radiographie du poignet, phosphatases alcalines ; vitamine D 2 000 UI/j au moins 3 mois (3 000–6 000 UI/j après 1 an) ou dose de charge, puis entretien ; calcium 500 mg/j ; exposition solaire ; prévention 400 UI/j chez le nourrisson à risque.',
    },
    {
      slug: 'retard-developpement-psychomoteur',
      protocoles: ['OMS/UNICEF — Soins pour le développement de l’enfant (2012)', 'OMS — Nurturing care framework (2018)'],
      verifie:
        'Repères d’acquisition, toute régression est une alerte ; périmètre crânien, audition, vision ; bilan selon l’orientation (TSH, VIH, EEG, imagerie) ; stimulation précoce, rééducation, traitement des causes curables, scolarisation inclusive.',
    },
    {
      slug: 'retard-staturo-ponderal',
      protocoles: ['OMS — Normes de croissance de l’enfant (2006)', POCKET],
      verifie:
        'Courbes OMS, malnutrition aiguë associée, histoire alimentaire ; bilan orienté (VIH, tuberculose, drépanocytose, selles, TSH si petite taille isolée) ; soutien nutritionnel, micronutriments, déparasitage ; suivi mensuel.',
    },
    {
      slug: 'toux-difficultes-respiratoires-enfant',
      protocoles: [PCIME, POCKET],
      verifie:
        'Fréquence respiratoire sur 1 minute (≥ 50/min de 2 à 11 mois, ≥ 40/min de 12 mois à 5 ans), tirage, stridor, SpO2 ; classification rouge, jaune, verte ; amoxicilline 80–90 mg/kg/j en 2 prises 5 jours ; première dose et transfert des pneumonies graves ; pas d’antibiotique pour la toux simple.',
    },
    {
      slug: 'arret-cardiorespiratoire-enfant',
      protocoles: [ERC, 'AHA — Pediatric basic and advanced life support (2020)'],
      verifie:
        '5 insufflations initiales, compressions 15:2 à 100–120/min sur 1/3 du thorax ; voie IV ou intra-osseuse, adrénaline 10 µg/kg toutes les 3–5 min ; défibrillation 4 J/kg, amiodarone 5 mg/kg après le 3e choc ; causes réversibles ; soins post-réanimation.',
    },
    {
      slug: 'brulures-enfant',
      protocoles: ['OMS — Management of burns (soins chirurgicaux essentiels)', 'ISBI — Practice guidelines for burn care (2016)'],
      verifie:
        'Surface (paume = 1 %, Lund et Browder), profondeur, critères de gravité ; refroidissement 20 min à l’eau tiède ; Ringer lactate selon Parkland (3–4 mL/kg/% sur 24 h) plus entretien glucosé si > 10 %, diurèse ≥ 1 mL/kg/h ; antalgie, sulfadiazine argentique après 2 mois, prévention du tétanos ; prévention.',
    },
    {
      slug: 'choc-enfant',
      protocoles: [ETAT, SSC, 'FEAST — Maitland et al., Mortality after fluid bolus in African children with severe infection, N Engl J Med 2011'],
      verifie:
        'Triade ETAT (extrémités froides, TRC > 3 s, pouls faible et rapide), hypotension tardive ; oxygène, glucose 10 % 5 mL/kg ; plan C dans la déshydratation, 15 mL/kg en 1 h chez le malnutri sévère, transfusion dans l’anémie sévère, pas de remplissage massif du choc cardiogénique ; traitement de la cause, adrénaline ou noradrénaline si réfractaire.',
      corrige:
        'Le remplissage proposait 20 mL/kg rapidement, répétés jusqu’à 40–60 mL/kg, quelle que soit la cause : distinction faite entre le choc hypovolémique (remplissage rapide) et le choc septique en milieu sans réanimation, où l’OMS (ETAT 2016) et la Surviving Sepsis Campaign limitent les bolus (10–20 mL/kg, maximum 40 mL/kg) et les déconseillent sans choc avéré (essai FEAST), comme dans la fiche « Sepsis de l’enfant ».',
      corrections: [
        {
          principe: 'Remplissage selon la situation',
          champ: 'details',
          remplacer: [
            '- **Choc sans malnutrition sévère** : Ringer lactate ou NaCl 0,9 % **20 mL/kg** rapidement (10–20 mL/kg en milieu sans réanimation, réévaluation), à répéter jusqu’à 40–60 mL/kg si hypovolémie et pas de signes de surcharge',
            '- **Choc hypovolémique** (hémorragie, pertes digestives) sans malnutrition sévère : Ringer lactate ou NaCl 0,9 % **20 mL/kg** rapidement, à répéter selon la réponse en l’absence de surcharge ; transfusion si hémorragie\n- **Choc septique** en milieu sans réanimation : bolus de **10–20 mL/kg en 30–60 min** seulement si le choc est avéré (triade ETAT ou hypotension), réévaluation après chaque bolus, maximum 40 mL/kg ; sans choc avéré, pas de bolus rapide (essai FEAST)',
          ],
        },
      ],
    },
    {
      slug: 'coma-enfant',
      protocoles: [ETAT, POCKET],
      verifie:
        'AVPU ou Blantyre, pupilles, signes méningés ; position latérale, oxygène, glucose 10 % 5 mL/kg si glycémie < 2,5 mmol/L ; artésunate et ceftriaxone sans attendre, naloxone si opioïdes ; PL après stabilisation sans HTIC ; soins du comateux.',
    },
    {
      slug: 'deshydratation-severe-enfant',
      protocoles: [POCKET, 'OMS — The treatment of diarrhoea: a manual for physicians (2005)'],
      verifie:
        'Classification OMS (au moins 2 signes) ; plan C : Ringer lactate 100 mL/kg (< 12 mois 30 mL/kg en 1 h puis 70 mL/kg en 5 h ; ≥ 12 mois 30 mL/kg en 30 min puis 70 mL/kg en 2 h 30), SRO par sonde 20 mL/kg/h 6 h sans voie veineuse ; malnutrition : ReSoMal ; zinc.',
    },
    {
      slug: 'detresse-respiratoire-enfant',
      protocoles: [ETAT, POCKET],
      verifie:
        'Signes ETAT, orientation selon stridor, sibilants, crépitants ou respiration acidosique ; oxygène si SpO2 < 90 %, CPAP à bulles, ventilation si apnée ; traitement de la cause (antibiotiques, salbutamol, dexaméthasone et adrénaline nébulisée du croup, transfusion, artésunate).',
    },
    {
      slug: 'etat-de-mal-convulsif-enfant',
      protocoles: [POCKET, 'APLS/ERC — Algorithme de l’état de mal convulsif de l’enfant', 'ESETT — Kapur et al., N Engl J Med 2019'],
      verifie:
        'Glycémie, TDR ; diazépam 0,5 mg/kg intrarectal ou 0,3 mg/kg IV, ou midazolam buccal 0,3 mg/kg, 2 doses au maximum ; puis phénobarbital 20 mg/kg, phénytoïne 20 mg/kg ou lévétiracétam 40–60 mg/kg ; cause (neuropaludisme, méningite).',
    },
    {
      slug: 'hypoglycemie-enfant',
      protocoles: [POCKET, ETAT],
      verifie:
        'Seuil de 2,5 mmol/L (3 mmol/L chez le malnutri), glycémie systématique chez l’enfant grave ; glucose 10 % 5 mL/kg (2 mL/kg chez le nouveau-né), sucre sublingual sans voie veineuse ; alimentation ou perfusion d’entretien ; artésunate plutôt que quinine.',
    },
    {
      slug: 'intoxications-enfant',
      protocoles: ['OMS — Guidelines for poison control (1997)', 'EAPCCT/AACT — Position papers on gastrointestinal decontamination'],
      verifie:
        'Ne pas faire vomir ; pétrole : surveillance 6–24 h sans antibiotique systématique ; caustiques : endoscopie ; charbon activé 1 g/kg si adsorbable < 1 h ; N-acétylcystéine, atropine 0,02 mg/kg doublée des organophosphorés, naloxone, vitamine K1, déféroxamine ; prévention.',
    },
    {
      slug: 'morsures-de-serpent-enfant',
      protocoles: ['OMS — Guidelines for the prevention and clinical management of snakebite in Africa (2010)', 'MSF — Guide clinique et thérapeutique : morsures de serpent'],
      verifie:
        'Signes locaux, hémorragiques et neurotoxiques, 20WBCT répété toutes les 6 h ; immobilisation, pas de garrot ni d’incision ; sérum antivenimeux polyvalent à la même dose que l’adulte, adrénaline prête ; ventilation, néostigmine + atropine ; pas d’AINS ni d’IM si coagulopathie.',
    },
    {
      slug: 'noyade',
      protocoles: [ERC, 'OMS — Rapport mondial sur la prévention de la noyade (2014)'],
      verifie:
        '5 insufflations initiales puis RCP, ne pas « vider l’eau » ; oxygène, CPAP ou ventilation, réchauffement ; surveillance 6–8 h même asymptomatique ; pas d’antibiotiques systématiques ; prévention.',
    },
    {
      slug: 'polytraumatisme-enfant',
      protocoles: ['ATLS — Advanced trauma life support (10e édition, 2018)', 'RCPCH — Major trauma and the use of tranexamic acid in children (2012)'],
      verifie:
        'Examen primaire ABCDE avec protection cervicale, FAST ; Ringer lactate 10–20 mL/kg puis sang ; acide tranexamique 15 mg/kg puis 2 mg/kg/h dans les 3 h ; traitement non opératoire de la rate et du foie si stable ; antalgie ; transfert précoce.',
    },
    {
      slug: 'traumatisme-cranien-enfant',
      protocoles: ['PECARN — Règles de décision pour le scanner (Kuppermann, Lancet 2009)', 'Brain Trauma Foundation — Pediatric severe TBI guidelines (2019)'],
      verifie:
        'Glasgow pédiatrique, indications du scanner (PECARN) ; surveillance 4–6 h du traumatisme léger ; prévention de l’agression secondaire (SpO2 > 94 %, PA, glycémie, tête à 30°), mannitol 0,5–1 g/kg ou NaCl 3 %, anticonvulsivants ; neurochirurgie ; maltraitance du nourrisson.',
    },
  ],
};
