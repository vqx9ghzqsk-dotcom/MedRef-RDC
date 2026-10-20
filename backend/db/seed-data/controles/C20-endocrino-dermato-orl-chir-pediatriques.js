'use strict';

/**
 * Contrôle de conformité — lot C20 : endocrinologie, dermatologie, ORL et ophtalmologie,
 * chirurgie pédiatriques (33 fiches). Ivermectine : précaution liée à la loase (guide MSF) ;
 * trois examens rattachés au mauvais élément du référentiel sont remplacés par le bon.
 */

const MSF = 'MSF — Guide clinique et thérapeutique (édition en ligne)';
const POCKET = 'OMS — Pocket book of hospital care for children (2e édition, 2013)';
const DISTRICT = 'OMS — Surgical care at the district hospital (2003)';

module.exports = {
  lot: 'C20',
  date: '2026-10-16',
  titre: 'Endocrinologie, dermatologie, ORL-ophtalmologie et chirurgie pédiatriques',
  fiches: [
    {
      slug: 'acidocetose-diabetique-enfant',
      protocoles: ['ISPAD — Clinical Practice Consensus Guidelines 2022 : diabetic ketoacidosis and hyperglycemic hyperosmolar state'],
      verifie:
        'Définition (pH < 7,3 ou bicarbonates < 18 mmol/L, cétonémie ≥ 3 mmol/L, sévère si pH < 7,1) ; NaCl 0,9 % 10 mL/kg (20 mL/kg si choc), déficit corrigé sur 48 h, glucose ajouté quand la glycémie < 2,5–3 g/L ; insuline IV 0,05–0,1 U/kg/h débutée 1 h après la réhydratation, sans bolus ; KCl 40 mmol/L ; pas de bicarbonate en routine ; œdème cérébral : mannitol 0,5–1 g/kg ou NaCl 3 %.',
    },
    {
      slug: 'anomalies-differenciation-sexuelle',
      protocoles: ['Lee et al. — Consensus statement on management of intersex disorders (Pediatrics 2006) et Global DSD Update (2016)'],
      verifie:
        'Ambiguïté sexuelle et découverte pubertaire ; perte de sel et hypoglycémie à rechercher d’abord (hyperplasie des surrénales) ; ne pas attribuer le sexe avant le bilan (caryotype, 17-OHP, ionogramme, échographie pelvienne) ; équipe multidisciplinaire, décision partagée avec la famille, gonadectomie si dysgénésie avec chromosome Y ; soutien psychologique.',
    },
    {
      slug: 'diabete-type-1-enfant',
      protocoles: ['ISPAD — Clinical Practice Consensus Guidelines 2022', 'ISPAD — Guidance for limited care settings'],
      verifie:
        'Syndrome cardinal, énurésie secondaire, révélation par acidocétose ; insuline 0,7–1 U/kg/j en basal-bolus ou 2 injections de mélange, conservation en pots de terre cuite ; éducation (glycémies 3–4 par jour, hypoglycémie, règles en cas de maladie) ; HbA1c < 7 % tous les 3 mois, TSH, albuminurie dès 11 ans ou après 2–5 ans d’évolution.',
    },
    {
      slug: 'hyperplasie-congenitale-des-surrenales',
      protocoles: ['Endocrine Society — Congenital adrenal hyperplasia due to steroid 21-hydroxylase deficiency (2018)'],
      verifie:
        'Ambiguïté de la fille, crise de perte de sel à J7–J21 (hyponatrémie, hyperkaliémie), 17-OHP ; crise : NaCl 0,9 % 10–20 mL/kg, glucose, hydrocortisone 50–100 mg/m² IV puis 50–100 mg/m²/j ; entretien : hydrocortisone 10–15 mg/m²/j en 3 prises, fludrocortisone 0,05–0,2 mg/j et sel chez le nourrisson ; doses doublées ou triplées en cas de stress, carte d’urgence.',
    },
    {
      slug: 'hypothyroidie-congenitale',
      protocoles: ['ESPE/ENDO-ERN — Congenital hypothyroidism: 2020–2021 consensus guidelines update (Thyroid 2021)'],
      verifie:
        'Signes néonataux discrets (ictère prolongé, hernie ombilicale, macroglossie, fontanelle large) ; TSH élevée, T4 libre basse ; lévothyroxine 10–15 µg/kg/j dès le diagnostic, sans attendre les examens, idéalement avant 2 semaines ; TSH et T4 libre à 2 et 4 semaines puis tous les 1–2 mois la première année ; réévaluation après 3 ans si glande en place ; sel iodé.',
    },
    {
      slug: 'petite-taille-enfant',
      protocoles: ['OMS — Normes de croissance de l’enfant (2006) et références 5–19 ans (2007)', 'Pediatric Endocrine Society — Guidelines for growth hormone treatment (2016)'],
      verifie:
        'Taille < −2 Z-scores, taille cible, vitesse de croissance ; causes nutritionnelles et chroniques en premier (malnutrition, drépanocytose, VIH, MRC, maladie cœliaque), variantes normales, hypothyroïdie, Turner (caryotype chez la fille) ; âge osseux ; traitement de la cause, somatropine en centre spécialisé.',
    },
    {
      slug: 'puberte-precoce',
      protocoles: ['Carel et al. — Consensus statement on the use of GnRH analogs in children (Pediatrics 2009)', 'Bangalore Krishna et al. — Update on GnRH analogs in central precocious puberty (Horm Res Paediatr 2019)'],
      verifie:
        'Seins avant 8 ans, testicules ≥ 4 mL avant 9 ans ; âge osseux, LH/FSH, échographie pelvienne, 17-OHP ; IRM chez tout garçon et toute fille < 6 ans ; triptoréline 3 mg toutes les 4 semaines ou 11,25 mg tous les 3 mois dans la forme centrale évolutive ; causes périphériques ; saignements génitaux : penser aux abus.',
    },
    {
      slug: 'retard-pubertaire',
      protocoles: ['Palmert et Dunkel — Delayed puberty (N Engl J Med 2012)', 'ESPE — Expert consensus on the diagnosis and management of delayed puberty (2023)'],
      verifie:
        'Absence de seins à 13 ans ou testicules < 4 mL à 14 ans ; retard simple (âge osseux retardé) ou fonctionnel (drépanocytose, VIH, malnutrition, MRC) ; LH/FSH, caryotype chez la fille (Turner) ; surveillance tous les 6 mois, testostérone à faible dose si retard simple très gênant, induction pubertaire progressive en cas d’hypogonadisme.',
    },
    {
      slug: 'dermatite-atopique-enfant',
      protocoles: ['EuroGuiDerm — Guideline on atopic eczema (EADV, 2022)', 'NICE — Atopic eczema in under 12s (CG57)'],
      verifie:
        'Topographie selon l’âge, formes papuleuses et troubles pigmentaires sur peau noire ; émollients quotidiens, savon doux ; dermocorticoïde une fois par jour en poussée (hydrocortisone au visage et chez le nourrisson, bétaméthasone sur le corps, pas de clobétasol) ; impétiginisation (acide fusidique, cloxacilline) ; eczéma herpétiforme : aciclovir urgent ; pas de dépigmentation.',
    },
    {
      slug: 'dermite-du-siege',
      protocoles: ['Blume-Peytavi et Kanti — Prevention and treatment of diaper dermatitis (Pediatr Dermatol 2018)'],
      verifie:
        'Dermite d’irritation respectant les plis, candidose atteignant les plis avec pustules satellites ; changes fréquents, eau tiède, fesses à l’air, pâte à l’oxyde de zinc ; nystatine, miconazole ou clotrimazole 7–14 jours ; hydrocortisone 1 % de courte durée ; penser à la négligence si résistance.',
    },
    {
      slug: 'gale-enfant',
      protocoles: [`${MSF} : gale`, 'IACS — Consensus criteria for the diagnosis of scabies (2020)'],
      verifie:
        'Topographie du nourrisson (paumes, plantes, visage, nodules) ; perméthrine 5 % dès 2 mois 8–12 h renouvelée à J7 ; benzoate de benzyle dilué selon l’âge (1 pour 3 avant 2 ans, 1 pour 1 de 2 à 12 ans) ; ivermectine 200 µg/kg à J1 et J7 au-delà de 15 kg ; traitement simultané des contacts, linge ; bandelette urinaire après impétiginisation.',
      corrige:
        'Ajout de la précaution liée à la loase avant l’ivermectine, comme dans la fiche « Gale » de l’adulte (guide MSF) : risque d’encéphalopathie grave si la microfilarémie de Loa loa est très élevée.',
      corrections: [
        {
          principe: 'Traitement de l’enfant',
          champ: 'details',
          remplacer: [
            '- **Ivermectine** 200 µg/kg à J1 et J7 au-delà de 15 kg',
            '- **Ivermectine** 200 µg/kg à J1 et J7 au-delà de 15 kg ; en zone d’endémie de la loase, rechercher un antécédent de loase (ver passant sous la conjonctive, œdèmes de Calabar) ou mesurer la microfilarémie de *Loa loa* si possible, sinon préférer le traitement local (risque d’encéphalopathie grave)',
          ],
        },
      ],
    },
    {
      slug: 'hemangiomes-infantiles',
      protocoles: ['AAP — Clinical practice guideline for the management of infantile hemangiomas (2019)'],
      verifie:
        'Histoire naturelle (croissance maximale vers 5 mois puis involution) ; hémangiomes à risque (périoculaires, lèvres, nez, région « barbe », ulcérés, segmentaires, multiples > 5 avec échographie hépatique) ; propranolol 2–3 mg/kg/j en 2 prises pendant les repas, débuté à 1 mg/kg/j, au moins 6 mois, suspendu en cas de jeûne ou de bronchospasme ; timolol local.',
    },
    {
      slug: 'impetigo',
      protocoles: [`${MSF} : impétigo`, 'IDSA — Practice guidelines for skin and soft tissue infections (2014)'],
      verifie:
        'Croûtes mélicériques, impétigo bulleux, signes de gravité (> 6 lésions, > 2 % de la surface, nouveau-né) ; soins antiseptiques, acide fusidique 5 jours si peu étendu ; cloxacilline 7 jours si étendu, azithromycine en cas d’allergie ; nouveau-né hospitalisé ; gale traitée ; bandelette urinaire à 2–3 semaines.',
    },
    {
      slug: 'molluscum-contagiosum',
      protocoles: ['NICE CKS — Molluscum contagiosum (2023)', 'OMS — Consolidated HIV guidelines (2021)'],
      verifie:
        'Papules ombiliquées, régression spontanée ; formes profuses ou géantes : test VIH ; abstention, curetage ou cryothérapie si gêne ; antirétroviraux en cas de VIH ; lésions génitales : IST chez l’adolescent, abus chez le jeune enfant.',
    },
    {
      slug: 'teigne-cuir-chevelu',
      protocoles: ['British Association of Dermatologists — Guidelines for the management of tinea capitis (2014)', `${MSF} : mycoses superficielles`],
      verifie:
        'Teigne tondante, kérion (ne pas inciser), favus ; traitement oral obligatoire : griséofulvine 20–25 mg/kg/j avec un repas gras 6 à 8 semaines, terbinafine 4 semaines pour Trichophyton ; shampoing au kétoconazole ; scolarité maintenue sous traitement ; examen de la fratrie.',
    },
    {
      slug: 'verrues',
      protocoles: ['British Association of Dermatologists — Guidelines for the management of cutaneous warts (2014)'],
      verifie:
        'Verrues vulgaires, plantaires, planes ; abstention (régression en 1 à 2 ans) ; acide salicylique 10–20 % après décapage, cryothérapie ; pas de traitement cicatriciel ; VIH si profuses ; condylomes de l’enfant : protection de l’enfance.',
    },
    {
      slug: 'cataracte-congenitale',
      protocoles: ['AAO — Pediatric Eye Evaluations Preferred Practice Pattern (2022)', 'Infant Aphakia Treatment Study (IATS) — résultats à 10 ans (2023)', 'OMS — Rubella vaccines: position paper (2020)'],
      verifie:
        'Leucocorie, reflet rouge absent, nystagmus ; fond d’œil pour éliminer le rétinoblastome ; recherche de la cause (rubéole, toxoplasmose, CMV, syphilis, galactosémie) ; chirurgie avant 6–8 semaines (unilatérale) ou 10 semaines (bilatérale), implant après 1–2 ans ; correction optique, occlusion ; vaccin RR, test du reflet rouge.',
      corrige:
        'Recherche des infections congénitales : l’examen « IgM rougeole » (sans rapport avec la cataracte congénitale) est remplacé par les sérologies toxoplasmose, rubéole, CMV.',
      corrections: [
        { retirer: 'examen', examen: 'serologie-rougeole', categorie: 'etiologique' },
        {
          ajouter: 'examen',
          examen: 'serologies-torch',
          categorie: 'etiologique',
          interpretation: 'Rubéole, toxoplasmose, CMV congénitaux (IgM chez le nourrisson), selon disponibilité.',
        },
      ],
    },
    {
      slug: 'conjonctivite-enfant',
      protocoles: [`${MSF} : conjonctivite et conjonctivite du nouveau-né`, 'OMS — Guidelines for the treatment of Neisseria gonorrhoeae and Chlamydia trachomatis (2016)'],
      verifie:
        'Formes bactérienne, virale, allergique, signes d’alerte (cornée, vision, xérophtalmie) ; tétracycline pommade 1 % 7 jours ; nouveau-né : ceftriaxone 50 mg/kg IM dose unique (maximum 125 mg), azithromycine 3 jours ou érythromycine 14 jours pour Chlamydia, traitement de la mère et du partenaire, prophylaxie par tétracycline ; vitamine A en cas de rougeole ou de malnutrition.',
      corrige:
        'Le prélèvement conjonctival du nouveau-né était rattaché à l’examen « prélèvement de gorge » : remplacé par le prélèvement conjonctival (Gram, culture).',
      corrections: [
        { retirer: 'examen', examen: 'prelevement-de-gorge', categorie: 'etiologique' },
        {
          ajouter: 'examen',
          examen: 'prelevement-oculaire',
          categorie: 'etiologique',
          interpretation: 'Chez le nouveau-né, si disponible : diplocoques Gram négatif (gonocoque), culture.',
        },
      ],
    },
    {
      slug: 'hypertrophie-adenoidienne',
      protocoles: ['AAO-HNS — Clinical practice guideline: tonsillectomy in children (2019)', 'AAP — Diagnosis and management of childhood obstructive sleep apnea syndrome (2012)'],
      verifie:
        'Obstruction nasale, ronflements, apnées, otite séromuqueuse avec surdité ; audiométrie, oxymétrie nocturne ; lavages et corticoïde nasal 6 à 12 semaines dans les formes modérées ; adéno-amygdalectomie si apnées, otites récidivantes ou séromuqueuse avec surdité ; préparation de l’enfant drépanocytaire.',
    },
    {
      slug: 'mastoidite',
      protocoles: [`${MSF} : otites`, POCKET],
      verifie:
        'Tuméfaction rétro-auriculaire, pavillon décollé, signes d’alarme intracrâniens ; scanner si disponible, PL après imagerie si signes focaux ; ceftriaxone 100 mg/kg/j IV + cloxacilline ou métronidazole, relais oral ; incision-drainage, mastoïdectomie si échec ou cholestéatome ; première dose avant le transfert.',
    },
    {
      slug: 'otite-moyenne-chronique',
      protocoles: ['OMS — Chronic suppurative otitis media: burden of illness and management options (2004)', `${MSF} : otite moyenne chronique suppurée`, 'PCIME (2019)'],
      verifie:
        'Otorrhée > 2 semaines avec perforation, cholestéatome et signes d’alarme ; méchage 3 fois par jour jusqu’à oreille sèche ; gouttes de ciprofloxacine 2 semaines, pas de gouttes aminosides en cas de perforation ; antibiotiques oraux seulement si complication ; dépistage de la surdité, test VIH.',
    },
    {
      slug: 'sinusite-enfant',
      protocoles: ['AAP — Clinical practice guideline for acute bacterial sinusitis in children (2013)', `${MSF} : sinusite aiguë`],
      verifie:
        'Trois présentations (> 10 jours, aggravation secondaire, début sévère ≥ 39 °C et rhinorrhée purulente ≥ 3 jours) ; pas de radiographie ; amoxicilline 80–90 mg/kg/j 10 jours, amoxicilline-acide clavulanique si échec à 72 h ; ethmoïdite : hospitalisation, ceftriaxone + cloxacilline si atteinte orbitaire, scanner, drainage d’un abcès. Macrolide en cas d’allergie conforme au guide MSF (érythromycine), malgré la résistance du pneumocoque soulignée par l’AAP.',
    },
    {
      slug: 'strabisme',
      protocoles: ['AAO — Esotropia and Exotropia Preferred Practice Pattern (2022)', 'PEDIG — Essais sur le traitement de l’amblyopie (occlusion, atropine)'],
      verifie:
        'Strabisme permanent après 4 mois anormal ; reflets cornéens, test de l’écran, réfraction sous cycloplégie, fond d’œil systématique (rétinoblastome, cataracte), imagerie si paralysie ; lunettes permanentes, occlusion ou atropine de l’œil sain avant 7–8 ans ; chirurgie si déviation persistante.',
    },
    {
      slug: 'trachome-enfant',
      protocoles: ['OMS — Simplified trachoma grading system (révision 2020)', 'OMS — Stratégie CHANCE (SAFE) et élimination du trachome'],
      verifie:
        'Classification simplifiée OMS (TF, TI, TS, TT, CO) ; azithromycine 20 mg/kg dose unique (maximum 1 g) en traitement de masse annuel si TF ≥ 5 % chez les 1–9 ans, tétracycline pommade 6 semaines ; propreté du visage, eau, latrines ; chirurgie du trichiasis.',
      corrige:
        'La PCR conjonctivale des enquêtes était rattachée à l’examen « prélèvement de gorge » : remplacée par le prélèvement conjonctival.',
      corrections: [
        { retirer: 'examen', examen: 'prelevement-de-gorge', categorie: 'etiologique' },
        {
          ajouter: 'examen',
          examen: 'prelevement-oculaire',
          categorie: 'etiologique',
          interpretation: 'PCR Chlamydia trachomatis pour les enquêtes, si disponible ; le diagnostic reste clinique (classification OMS).',
        },
      ],
    },
    {
      slug: 'appendicite-enfant',
      protocoles: ['WSES — Jerusalem guidelines for the diagnosis and treatment of acute appendicitis (2020)', DISTRICT],
      verifie:
        'Tableau trompeur avant 5 ans, score PAS, échographie (appendice > 6 mm) ; réanimation, ceftriaxone 50–80 mg/kg/j + métronidazole 10 mg/kg toutes les 8 h ; appendicectomie, antibioprophylaxie seule si simple, 3 à 5 jours si perforée ; plastron : antibiotiques puis appendicectomie différée.',
    },
    {
      slug: 'atresie-oesophage',
      protocoles: ['ERNICA — Consensus statement on the care of oesophageal atresia (2021)', DISTRICT],
      verifie:
        'Hydramnios, hypersalivation, sonde gastrique arrêtée vers 10 cm, radiographie (sonde enroulée, air digestif = fistule) ; ne pas alimenter, aspiration continue du cul-de-sac, proclive, glucose, température, ampicilline + gentamicine si inhalation, éviter la ventilation au masque ; ligature de la fistule et anastomose ; VACTERL.',
    },
    {
      slug: 'hernie-inguinale-enfant',
      protocoles: [DISTRICT, 'APSA — Inguinal hernia in infants and children (revue systématique 2023)'],
      verifie:
        'Pas de fermeture spontanée ; herniotomie dès le diagnostic, surtout avant 1 an et chez le prématuré ; hernie irréductible : réduction manuelle douce si < 12 h sans souffrance intestinale puis chirurgie dans les 24–48 h, sinon chirurgie en urgence ; ovaire hernié chez la fille.',
    },
    {
      slug: 'ingestion-corps-etrangers',
      protocoles: ['ESPGHAN — Position paper on foreign body ingestion in children (2021)', 'NASPGHAN — Management of ingested foreign bodies in children (2015)'],
      verifie:
        'Radiographies face et profil (double contour de la pile bouton) ; pile bouton œsophagienne : extraction en moins de 2 h, miel ou sucralfate après 1 an si ingestion < 12 h ; aimants multiples, objets pointus : endoscopie ; pièce œsophagienne asymptomatique : contrôle à 12–24 h ; prévention.',
    },
    {
      slug: 'invagination-intestinale-aigue',
      protocoles: ['OMS — Acute intussusception in infants and children: a global perspective (2002)', DISTRICT],
      verifie:
        'Crises de pleurs avec pâleur, vomissements, rectorragies tardives, boudin ; échographie de référence ; Ringer lactate 10–20 mL/kg, sonde gastrique ; lavement hydrostatique ou pneumatique sauf choc, péritonite, pneumopéritoine ; chirurgie si échec ou indisponibilité, résection si nécrose ; cause organique après 3 ans.',
    },
    {
      slug: 'laparoschisis-omphalocele',
      protocoles: ['Global PaedSurg Research Collaboration — Mortality from gastrointestinal congenital anomalies (Lancet 2021)', DISTRICT],
      verifie:
        'Distinction laparoschisis et omphalocèle, malformations associées ; viscères couverts d’un film plastique stérile, décubitus latéral droit, sonde gastrique, glucose 10 %, réchauffement, ampicilline + gentamicine, transfert ; fermeture primaire ou silo ; omphalocèle géante : épithélialisation (sulfadiazine argentique).',
    },
    {
      slug: 'maladie-de-hirschsprung',
      protocoles: ['ERNICA — Guidelines for the management of Hirschsprung’s disease (2020)', 'APSA — Guidelines for the diagnosis and management of Hirschsprung-associated enterocolitis (2017)'],
      verifie:
        'Méconium après 48 h, débâcle au toucher rectal, entérocolite ; lavement opaque, biopsie rectale ; nursing rectal (10–20 mL/kg), colostomie si échec ; entérocolite : réhydratation, lavements, métronidazole ± ampicilline + gentamicine ; abaissement colo-anal.',
    },
    {
      slug: 'malformations-anorectales',
      protocoles: ['Levitt et Peña — Anorectal malformations (Orphanet J Rare Dis 2007)', DISTRICT],
      verifie:
        'Examen de l’anus de tout nouveau-né, observation 24 h, cliché en décubitus ventral ; VACTERL ; anoplastie des formes basses, colostomie puis anorectoplastie sagittale postérieure à 1–6 mois des formes hautes ; dilatations, gestion des selles.',
    },
    {
      slug: 'stenose-hypertrophique-pylore',
      protocoles: [DISTRICT, POCKET],
      verifie:
        'Vomissements en jet non bilieux à 3–6 semaines, olive, échographie (muscle > 3–4 mm, canal > 15–17 mm), alcalose hypochlorémique hypokaliémique ; urgence médicale d’abord : NaCl 0,9 %, KCl après diurèse, chirurgie après correction (chlore > 100, bicarbonates < 30 mmol/L) ; pylorotomie extramuqueuse ; vomissements bilieux = malrotation.',
    },
  ],
};
