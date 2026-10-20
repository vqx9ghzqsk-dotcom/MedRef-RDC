'use strict';

/**
 * Contrôle de conformité — lot C24 : ophtalmologie, ORL et chirurgie cervico-faciale,
 * stomatologie et chirurgie maxillo-faciale (28 fiches). Surdité brusque : AAO-HNS 2019 ;
 * deux prélèvements rattachés au mauvais examen du référentiel sont corrigés.
 */

const MSF = 'MSF — Guide clinique et thérapeutique (édition en ligne)';
const AAO = (theme) => `AAO — Preferred Practice Pattern : ${theme}`;
const OMS_ORAL = 'OMS — Oral health : Global strategy and action plan (2023) et soins bucco-dentaires de base';
const DISTRICT = 'OMS — Surgical care at the district hospital (2003)';

module.exports = {
  lot: 'C24',
  date: '2026-10-19',
  titre: 'Ophtalmologie, ORL et stomatologie',
  fiches: [
    {
      slug: 'baisse-brutale-acuite-visuelle',
      protocoles: [AAO('Retinal and ophthalmic artery occlusions (2019)'), AAO('Primary angle-closure disease (2020)')],
      verifie:
        'Œil rouge douloureux ou œil blanc indolore ; acuité visuelle, réflexe pupillaire, tension oculaire, fond d’œil, échographie oculaire ; glaucome aigu : acétazolamide 500 mg, timolol, pilocarpine, mannitol, puis iridotomie des deux yeux ; décollement de rétine opéré en urgence ; méthanol : éthanol ou fomépizole ; avis ophtalmologique le jour même, pas de collyre corticoïde ou anesthésiant sans diagnostic.',
    },
    {
      slug: 'cataracte',
      protocoles: [AAO('Cataract in the adult eye (2021)'), 'OMS — World report on vision (2019)'],
      verifie:
        'Baisse de vision progressive indolore, leucocorie ; acuité visuelle, tonométrie, fond d’œil ou échographie ; extraction extracapsulaire manuelle à petite incision (MSICS) avec implant, phacoémulsification en centre équipé ; collyres antibiotique et corticoïde 4 semaines ; cataracte congénitale bilatérale opérée avant 6–8 semaines ; endophtalmie.',
    },
    {
      slug: 'conjonctivites-adulte',
      protocoles: [AAO('Conjunctivitis (2023)'), `${MSF} : conjonctivite`],
      verifie:
        'Œil rouge avec acuité normale, sans douleur profonde ; signes d’alarme (kératite, uvéite, glaucome) ; lavages, hygiène ; tétracycline 1 % ou chloramphénicol 5–7 jours ; gonococcique : ceftriaxone IM et partenaire ; virale : évolution spontanée ; allergique : cromoglicate, olopatadine, kétotifène ; pas de corticoïde local sans examen.',
      corrige:
        'Le prélèvement conjonctival était rattaché à l’examen « prélèvement de gorge » : remplacé par le prélèvement conjonctival (Gram, culture).',
      corrections: [
        { retirer: 'examen', examen: 'prelevement-de-gorge', categorie: 'deuxieme_intention' },
        {
          ajouter: 'examen',
          examen: 'prelevement-oculaire',
          categorie: 'deuxieme_intention',
          interpretation: 'Gram, culture (gonocoque) si sécrétions purulentes abondantes ou forme sévère.',
        },
      ],
    },
    {
      slug: 'glaucome',
      protocoles: ['European Glaucoma Society — Terminology and guidelines for glaucoma (5e édition, 2020)', AAO('Primary open-angle glaucoma (2020)')],
      verifie:
        'Glaucome chronique silencieux, dépistage après 40 ans chez les sujets d’origine africaine ; tonométrie > 21 mmHg, excavation papillaire, champ visuel ; timolol 0,5 % 2 fois/j, latanoprost le soir, trabéculectomie ; crise aiguë : acétazolamide 500 mg puis 250 mg toutes les 6 h, mannitol 1–2 g/kg, timolol puis pilocarpine 2 %, iridotomie des deux yeux.',
    },
    {
      slug: 'keratite-ulcere-de-cornee',
      protocoles: [AAO('Bacterial keratitis (2018)'), 'Mycotic Ulcer Treatment Trial (MUTT) — natamycine dans la kératite fongique'],
      verifie:
        'Œil rouge douloureux, photophobie, infiltrat, hypopion ; fluorescéine, grattage (Gram, KOH, culture) ; jamais de corticoïde local ; moxifloxacine ou ofloxacine toutes les heures ou collyres fortifiés ; natamycine 5 % ; aciclovir pour l’herpès ; cycloplégique ; vitamine A chez l’enfant malnutri ou après rougeole.',
    },
    {
      slug: 'oeil-rouge-demarche',
      protocoles: [`${MSF} : ophtalmologie`, AAO('Conjunctivitis (2023)')],
      verifie:
        'Trois questions (baisse de vision, douleur, traumatisme), acuité visuelle, cercle périkératique, fluorescéine, pupille ; urgence si baisse de vision, douleur profonde, photophobie ou pupille anormale ; kératite : antibiotique local intensif, jamais de corticoïde ; uvéite et glaucome aigu ; vitamine A chez l’enfant malnutri.',
    },
    {
      slug: 'onchocercose-oculaire',
      protocoles: ['OMS — Guidelines for stopping mass drug administration and verifying elimination of human onchocerciasis (2016)', 'OMS/APOC — Traitement par ivermectine sous directive communautaire et zones de coendémie de la loase'],
      verifie:
        'Kératite ponctuée puis sclérosante, uvéite, choriorétinite, atrophie optique ; lampe à fente, biopsie cutanée exsangue ; ivermectine 150 µg/kg tous les 6–12 mois, doxycycline 100–200 mg/j 6 semaines ; recherche de la microfilarémie de Loa loa avant ivermectine en zone de coendémie ; pas d’ivermectine < 15 kg ni pendant la grossesse.',
    },
    {
      slug: 'pterygion',
      protocoles: ['Cochrane — Conjunctival autograft versus amniotic membrane transplantation for pterygium (2016)', AAO('Basic and Clinical Science Course : external disease and cornea')],
      verifie:
        'Repli fibrovasculaire nasal, astigmatisme ; néoplasie conjonctivale à éliminer chez le VIH (biopsie) ; protection solaire, larmes artificielles, anti-inflammatoire court ; exérèse avec autogreffe conjonctivale si progression vers l’axe visuel.',
    },
    {
      slug: 'retinopathies-diabetique-et-hypertensive',
      protocoles: ['ICO — Guidelines for diabetic eye care (2017)', 'ADA — Standards of care in diabetes (2024) : rétinopathie'],
      verifie:
        'Dépistage par fond d’œil au diagnostic du diabète de type 2 puis annuel, 5 ans après le diagnostic du type 1, pendant la grossesse ; stades non proliférant, proliférant, œdème maculaire ; rétinopathie hypertensive ; HbA1c < 7 %, tension < 130/80, statine ; photocoagulation, anti-VEGF, vitrectomie en centre spécialisé.',
    },
    {
      slug: 'trachome',
      protocoles: ['OMS — Simplified trachoma grading system (révision 2020)', 'OMS — Stratégie CHANCE (SAFE) et élimination du trachome'],
      verifie:
        'Classification simplifiée OMS ; chirurgie du trichiasis (rotation tarsale bilamellaire), épilation en attente ; azithromycine 20 mg/kg (maximum 1 g), distribution de masse si TF ≥ 5 % chez les 1–9 ans ; tétracycline 1 % 6 semaines ; propreté du visage et assainissement.',
    },
    {
      slug: 'traumatismes-oculaires',
      protocoles: [AAO('Basic and Clinical Science Course : ocular trauma'), `${MSF} : ophtalmologie`],
      verifie:
        'Acuité visuelle, inspection sans appui, fluorescéine, éversion palpébrale ; brûlure chimique : lavage au moins 30 min après tétracaïne ; plaie du globe : coque rigide, rien instillé, fluoroquinolone orale, tétanos, suture en urgence ; corps étranger superficiel, pas de collyre anesthésiant à domicile ; hyphéma : repos, pas d’AINS.',
    },
    {
      slug: 'troubles-de-la-refraction',
      protocoles: ['OMS — World report on vision (2019)', AAO('Pediatric eye evaluations (2022)')],
      verifie:
        'Trou sténopéique, réfraction sous cycloplégie chez l’enfant, fond d’œil si non corrigeable ; lunettes adaptées, lunettes de presbytie prêtes à porter ; dépistage avant 3–4 ans et à l’école, occlusion de l’amblyopie ; activités à l’extérieur contre la myopie.',
    },
    {
      slug: 'uveites',
      protocoles: ['SUN Working Group — Standardization of uveitis nomenclature', AAO('Basic and Clinical Science Course : uveitis and ocular inflammation')],
      verifie:
        'Uvéite antérieure (cercle périkératique, myosis, Tyndall) et postérieure ; bilan (syphilis, VIH, toxoplasmose, tuberculose) ; éliminer une kératite avant tout corticoïde ; collyre corticoïde et cycloplégique ; toxoplasmose : pyriméthamine + sulfadiazine + acide folinique ou cotrimoxazole ; CMV : ganciclovir et ARV.',
    },
    {
      slug: 'abces-peri-amygdalien',
      protocoles: ['Cochrane — Needle aspiration versus incision and drainage for the treatment of peritonsillar abscess (2016)', 'Galioto — Peritonsillar abscess (Am Fam Physician 2017)'],
      verifie:
        'Odynophagie unilatérale, trismus, luette déviée ; ponction ou incision-drainage sous anesthésie locale ; amoxicilline-acide clavulanique ou pénicilline G + métronidazole, 10 jours au total, clindamycine si allergie ; dexaméthasone dose unique ; amygdalectomie si récidive.',
      corrige:
        'La ponction de l’abcès était rattachée à la ponction d’un épanchement (plèvre, péritoine, péricarde) : remplacée par le prélèvement de pus.',
      corrections: [
        { retirer: 'examen', examen: 'ponction-epanchement', categorie: 'confirmation' },
        {
          ajouter: 'examen',
          examen: 'prelevement-de-pus',
          categorie: 'confirmation',
          interpretation: 'Ponction de l’abcès : pus (diagnostique et thérapeutique), Gram et culture si disponibles.',
        },
      ],
    },
    {
      slug: 'cancers-orl',
      protocoles: ['NCCN — Head and neck cancers (2024)', 'ESMO — Head and neck cancers clinical practice guidelines (2020)'],
      verifie:
        'Signes d’alerte persistant plus de 3 semaines ; nasofibroscopie, biopsie, scanner cervico-facial et thoracique, bilan dentaire ; chirurgie ou radiothérapie des formes localisées, radiochimiothérapie au cisplatine des formes avancées et du cavum ; trachéotomie, gastrostomie, soins palliatifs ; arrêt tabac-alcool.',
    },
    {
      slug: 'cellulite-cervico-faciale',
      protocoles: [`${MSF} : infections dentaires et cellulites`, DISTRICT],
      verifie:
        'Origine dentaire, angine de Ludwig ; voies aériennes en priorité ; amoxicilline-acide clavulanique IV ou ceftriaxone + métronidazole, clindamycine si allergie, 10–14 jours ; arrêt des AINS ; incision-drainage, extraction de la dent causale ; médiastinite.',
    },
    {
      slug: 'corps-etrangers-orl',
      protocoles: ['ESPGHAN — Position paper on foreign body ingestion in children (2021)', 'National Capital Poison Center — Button battery ingestion triage and treatment guideline'],
      verifie:
        'Rhinorrhée fétide unilatérale de l’enfant, double contour de la pile bouton ; extraction sous vision, insecte tué d’abord, « bisou de la mère » ; pile bouton œsophagienne : extraction immédiate, miel 10 mL toutes les 10 min après 1 an en attendant ; arête : extraction, endoscopie en moins de 24 h ; pas de vomissements provoqués.',
    },
    {
      slug: 'epistaxis',
      protocoles: ['AAO-HNS — Clinical practice guideline: nosebleed (epistaxis) (2020)'],
      verifie:
        'Assis, tête penchée en avant, compression bidigitale 10–15 min, vasoconstricteur ; méchage antérieur 24–48 h, tamponnement postérieur ; cautérisation d’un point visible ; acide tranexamique, correction de la coagulation ; HTA sévère traitée sans baisse brutale ; Ebola en contexte épidémique.',
    },
    {
      slug: 'otite-externe',
      protocoles: ['AAO-HNS — Clinical practice guideline: acute otitis externa (2014)'],
      verifie:
        'Douleur à la traction du pavillon, tympan normal ; nettoyage, mèche si conduit fermé ; gouttes de ciprofloxacine ou ofloxacine 7 jours, antalgiques, oreille au sec ; otomycose : clotrimazole 2–3 semaines ; otite nécrosante du diabétique : ciprofloxacine ou ceftazidime 6 semaines.',
    },
    {
      slug: 'sinusites-adulte',
      protocoles: ['IDSA — Clinical practice guideline for acute bacterial rhinosinusitis in children and adults (2012)', 'EPOS — European position paper on rhinosinusitis and nasal polyps (2020)'],
      verifie:
        'Bactérienne si > 10 jours, aggravation secondaire ou forme sévère ; signes d’alerte orbitaires et intracrâniens ; lavages, antalgiques ; amoxicilline 1 g 3 fois/j 5–7 jours, doxycycline ou céfuroxime si allergie ; origine dentaire ; complications : ceftriaxone + métronidazole, scanner ; chronique : corticoïde nasal.',
    },
    {
      slug: 'surdite',
      protocoles: ['AAO-HNS — Clinical practice guideline: sudden hearing loss (update, 2019)', 'OMS — World report on hearing (2021)'],
      verifie:
        'Transmission ou perception, dépistage néonatal, retard de langage ; otoscopie, diapason, audiométrie ; bouchon, otites, aérateurs ; surdité brusque : prednisolone 1 mg/kg/j 7–10 jours ; appareillage, implant cochléaire, langue des signes ; vaccinations, surveillance audiométrique sous ototoxiques.',
      corrige:
        'Délai des corticoïdes de la surdité brusque aligné sur l’AAO-HNS 2019 : le plus tôt possible, avec un bénéfice jusqu’à 2 semaines, et pas seulement dans les 72 h.',
      corrections: [
        {
          champ: 'diagnostic',
          remplacer: [
            '- Surdité brusque unilatérale : **urgence** (corticoïdes dans les 72 h)',
            '- Surdité brusque unilatérale : **urgence** (corticoïdes le plus tôt possible, au mieux dans les 72 h, jusqu’à 2 semaines après le début)',
          ],
        },
      ],
    },
    {
      slug: 'abces-cellulites-dentaires',
      protocoles: ['ADA — Evidence-based clinical practice guideline on antibiotic use for the urgent management of pulpal- and periapical-related dental pain and intraoral swelling (2019)', `${MSF} : infections dentaires`],
      verifie:
        'Abcès apical, péricoronarite, signes de gravité (trismus, dysphagie, dyspnée) ; drainage par la dent ou incision, extraction ; antibiotiques seulement si extension ou signes généraux : amoxicilline 1 g 3 fois/j 5–7 jours + métronidazole si cellulite, clindamycine si allergie ; pas d’antibiotiques seuls ; AINS courts avec le traitement de la cause.',
    },
    {
      slug: 'carie-dentaire',
      protocoles: [OMS_ORAL, 'OMS — Technique de restauration atraumatique (ART)'],
      verifie:
        'Douleur provoquée (carie dentinaire) ou spontanée (pulpite), abcès ; obturation, technique ART, pulpectomie ou extraction ; paracétamol, ibuprofène, pas d’antibiotique pour une pulpite ; brossage 2 fois par jour au dentifrice fluoré, réduction des sucres, pas de biberon sucré la nuit.',
    },
    {
      slug: 'fractures-de-la-mandibule',
      protocoles: ['AO CMF — Principes de traitement des fractures mandibulaires', DISTRICT],
      verifie:
        'Malocclusion, marche d’escalier, ecchymose du plancher, hypoesthésie labiale ; voies aériennes (fracture bilatérale parasymphysaire) ; panoramique, scanner ; blocage maxillo-mandibulaire 4–6 semaines (condyle 2–3 semaines) ou ostéosynthèse ; amoxicilline-acide clavulanique pour les fractures ouvertes en bouche, tétanos, ciseaux à portée.',
    },
    {
      slug: 'gingivites-et-parodontites',
      protocoles: ['EFP — Treatment of stage I–III periodontitis : S3 level clinical practice guideline (2020)', `${MSF} : gingivite ulcéro-nécrotique`],
      verifie:
        'Gingivite réversible, parodontite, gingivite ulcéro-nécrotique ; glycémie, VIH, NFS si gingivorragies ; brossage, détartrage, chlorhexidine 0,12 % 1–2 semaines ; surfaçage, équilibre du diabète ; forme nécrotique : métronidazole 7 jours, renutrition, surveillance du noma.',
    },
    {
      slug: 'stomatites',
      protocoles: [`${MSF} : stomatite`, 'OMS — Guidelines on the treatment of skin and oral HIV-associated conditions (2014)'],
      verifie:
        'Muguet, gingivostomatite herpétique, aphtes, Stevens-Johnson, déshydratation de l’enfant ; hygiène, antalgiques, hydratation ; nystatine ou miconazole 7–14 jours, fluconazole si sévère ; aciclovir dans les 72–96 h ; vitamine A en cas de rougeole ; test VIH devant des récidives.',
    },
    {
      slug: 'traumatismes-maxillo-faciaux',
      protocoles: ['ACS — Advanced Trauma Life Support (ATLS, 10e édition, 2018)', 'AO CMF — Principes de traitement des fractures faciales'],
      verifie:
        'Voies aériennes et hémorragie en priorité, rachis cervical ; examen de l’œil, de l’articulé, des nerfs ; scanner facial et cérébral ; parage et suture précoce, nerf facial et canal de Sténon ; drainage d’un hématome de cloison, réduction des os nasaux en 7–10 jours, canthotomie latérale d’un hématome rétrobulbaire ; tétanos, rage.',
    },
    {
      slug: 'tumeurs-des-maxillaires',
      protocoles: ['OMS — Classification of head and neck tumours (5e édition, 2022) : tumeurs odontogènes', 'OMS — Global Initiative for Childhood Cancer : lymphome de Burkitt'],
      verifie:
        'Améloblastome (image multiloculaire), kystes, Burkitt de l’enfant, signes de malignité ; panoramique, scanner, biopsie indispensable ; résection avec marges de l’améloblastome (l’énucléation récidive), énucléation ou marsupialisation des kystes ; Burkitt : cyclophosphamide en centre spécialisé.',
    },
  ],
};
