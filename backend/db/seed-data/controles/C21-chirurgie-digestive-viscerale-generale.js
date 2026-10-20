'use strict';

/**
 * Contrôle de conformité — lot C21 : chirurgie digestive, viscérale, générale et urgences
 * chirurgicales (37 fiches). Parois : recommandations de l’European Hernia Society (éventration
 * médiane 2023, hernies ventrales primitives 2020) ; rage : schéma OMS 2018 de la fiche « Rage ».
 */

const DISTRICT = 'OMS — Surgical care at the district hospital (2003)';
const WSES_IAI = 'WSES — Management of intra-abdominal infections (2017)';
const TOKYO = 'Tokyo Guidelines 2018 (TG18) — cholangite et cholécystite aiguës';
const ATLS = 'ACS — Advanced Trauma Life Support (ATLS, 10e édition, 2018)';
const IDSA_SSTI = 'IDSA — Practice guidelines for skin and soft tissue infections (2014)';

module.exports = {
  lot: 'C21',
  date: '2026-10-19',
  titre: 'Chirurgie digestive, viscérale, générale et urgences chirurgicales',
  fiches: [
    {
      slug: 'abces-marge-anale',
      protocoles: ['ASCRS — Clinical practice guideline for the management of anorectal abscess, fistula-in-ano and rectovaginal fistula (2022)'],
      verifie:
        'Douleur pulsatile, abcès profonds sans tuméfaction, gangrène de Fournier ; incision-drainage en urgence sans attendre la fluctuation ; antibiotiques seulement si cellulite, diabète, immunodépression ou signes systémiques ; recherche de fistule, diabète, VIH, Crohn.',
    },
    {
      slug: 'angiocholite',
      protocoles: [TOKYO],
      verifie:
        'Triade de Charcot, pentade de Reynolds ; échographie, bilan hépatique, hémocultures ; ceftriaxone 2 g/j + métronidazole 500 mg toutes les 8 h, pipéracilline-tazobactam dans les formes graves, 4–7 jours après le drainage ; drainage biliaire urgent (< 24 h) si grave ou sans amélioration en 24–48 h ; cholécystectomie à distance ; ascaridiose biliaire.',
    },
    {
      slug: 'appendicite-aigue',
      protocoles: ['WSES — Jerusalem guidelines for the diagnosis and treatment of acute appendicitis (2020)', 'Salminen et al. — Five-year follow-up of antibiotic therapy for uncomplicated acute appendicitis in the APPAC trial (JAMA 2018)'],
      verifie:
        'Formes topographiques et terrains trompeurs ; β-hCG, échographie (enfant, femme) ou scanner (adulte) ; antalgie morphinique dès l’admission ; appendicectomie en moins de 24 h ; antibioprophylaxie unique si simple, 3–5 jours si compliquée ; plastron : antibiotiques puis appendicectomie différée, abcès drainé.',
      corrige:
        'Taux de récidive après traitement antibiotique seul aligné sur l’essai APPAC (≈ 40 % à 5 ans, et non 30 %).',
      corrections: [
        {
          principe: 'Traitement non opératoire sélectif',
          champ: 'details',
          remplacer: [
            '(risque de récidive ≈ 30 % à 5 ans)',
            '(risque de récidive ≈ 40 % à 5 ans dans l’essai APPAC)',
          ],
        },
      ],
    },
    {
      slug: 'cancer-colorectal-chirurgie',
      protocoles: ['ESMO — Localised colon cancer (2020) et rectal cancer (2017) clinical practice guidelines', 'IDEA — Durée de la chimiothérapie adjuvante du cancer du côlon de stade III (3 ou 6 mois)'],
      verifie:
        'Coloscopie complète avec biopsies, scanner thoraco-abdomino-pelvien, ACE, IRM pelvienne pour le rectum ; colectomie avec curage ; radiochimiothérapie préopératoire puis exérèse totale du mésorectum ; urgences : stomie ou Hartmann ; FOLFOX ou CAPOX 3–6 mois au stade III ; surveillance.',
    },
    {
      slug: 'cholecystite-lithiase-biliaire',
      protocoles: [TOKYO, 'WSES — Guidelines on acute calculous cholecystitis (2020)'],
      verifie:
        'Colique hépatique, cholécystite (Murphy), angiocholite ; échographie ; ceftriaxone + métronidazole ; cholécystectomie précoce (72 h à 7 jours), drainage percutané si état précaire ; drainage biliaire urgent de l’angiocholite grave ; lithiase pigmentaire du drépanocytaire.',
    },
    {
      slug: 'eventration',
      protocoles: ['EHS — Midline incisional hernia guidelines (Sanders et al., Br J Surg 2023)', 'EHS/AHS — Guideline for closure of abdominal wall incisions (2022)'],
      verifie:
        'Facteurs de risque, étranglement ; échographie pariétale, scanner des grandes éventrations ; préparation (poids, tabac, diabète, nutrition) ; fermeture pariétale continue au fil lent en prévention ; étranglement ou éviscération : chirurgie urgente.',
      corrige:
        'Choix de la technique aligné sur l’EHS 2023 : plaque recommandée pour toute éventration médiane (recommandation forte), et non seulement au-delà de 2–3 cm ; suture simple à défaut de plaque.',
      corrections: [
        {
          principe: 'Chirurgie',
          champ: 'details',
          remplacer: [
            '- Petit défect : **suture**\n- Défect > 2–3 cm ou récidive : **plaque** (prothèse), technique adaptée',
            '- **Plaque** (prothèse) recommandée pour toute éventration, même petite (EHS 2023 : récidives bien plus fréquentes après suture seule), technique adaptée ; suture simple seulement à défaut de plaque',
          ],
        },
      ],
    },
    {
      slug: 'fissure-fistule-anales',
      protocoles: ['ASCRS — Clinical practice guidelines for the management of anal fissures (2023)', 'ASCRS — Anorectal abscess, fistula-in-ano (2022)'],
      verifie:
        'Fissure postérieure, fistule après abcès, lésions atypiques (Crohn, tuberculose, VIH) ; fibres, macrogol, bains de siège ; trinitrine 0,4 % ou diltiazem 2 % 6–8 semaines ; sphinctérotomie latérale interne si chronique ; fistulotomie des fistules basses, séton des fistules hautes.',
    },
    {
      slug: 'hemorroides',
      protocoles: ['ASCRS — Clinical practice guidelines for the management of hemorrhoids (2018)', 'ESCP — European Society of Coloproctology guideline for haemorrhoidal disease (2020)'],
      verifie:
        'Rectorragies, prolapsus, thrombose externe ; coloscopie si âge > 45–50 ans, anémie ou troubles du transit ; fibres, eau, laxatifs, veinotoniques en cure courte ; ligature élastique des grades II–III ; hémorroïdectomie des grades III–IV ; incision de la thrombose externe de moins de 72 h.',
    },
    {
      slug: 'hernie-etranglee',
      protocoles: ['WSES — Guidelines for emergency repair of complicated abdominal wall hernias (2017)', DISTRICT],
      verifie:
        'Hernie douloureuse irréductible, orifices herniaires examinés devant toute occlusion ; réanimation, sonde gastrique, ceftriaxone + métronidazole ; pas de réduction forcée ; kélotomie, évaluation de la vitalité, résection-anastomose si nécrose ; prothèse si pas de contamination.',
    },
    {
      slug: 'hernie-inguinale-adulte',
      protocoles: ['HerniaSurge — International guidelines for groin hernia management (2018)', 'Löfgren et al. — Mesh versus suture repair with low-cost mesh in Uganda (N Engl J Med 2016)'],
      verifie:
        'Hernie impulsive et réductible, causes favorisantes ; cure programmée par Lichtenstein (filet de moustiquaire stérilisé validé), anesthésie locale ou rachianesthésie ; traitement de la toux, de la constipation, du prostatisme ; étranglement : urgence.',
    },
    {
      slug: 'hernie-ombilicale-ligne-blanche',
      protocoles: ['EHS/AHS — Guidelines for treatment of primary ventral hernias (Henriksen et al., Br J Surg 2020)', DISTRICT],
      verifie:
        'Enfant : abstention jusqu’à 4–5 ans, pas de pièce ni de bandage, chirurgie si collet > 1,5–2 cm ou persistance ; adulte : chirurgie si symptomatique, contrôle de l’ascite du cirrhotique ; étranglement : chirurgie urgente.',
      corrige:
        'Seuil de la plaque aligné sur l’EHS/AHS 2020 : plaque dès que le collet atteint 1 cm (suture seulement en dessous).',
      corrections: [
        {
          principe: 'Adulte',
          champ: 'details',
          remplacer: [
            '- **Herniorraphie** (petite hernie) ou **plaque** (collet > 1–2 cm, récidive), programmée si symptomatique',
            '- **Herniorraphie** si collet < 1 cm ; **plaque** dès 1 cm ou en cas de récidive (EHS/AHS 2020), programmée si symptomatique',
          ],
        },
      ],
    },
    {
      slug: 'occlusion-intestinale-aigue',
      protocoles: ['WSES — Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (2017)', 'ASCRS — Clinical practice guidelines for the management of colonic volvulus (2016)'],
      verifie:
        'Grêle ou côlon, iléus paralytique, strangulation ; ASP, scanner de référence, lactates ; réhydratation, sonde gastrique ; bride sans gravité : traitement non opératoire jusqu’à 72 h avec opacification hydrosoluble ; hernie étranglée opérée en urgence ; volvulus : détorsion endoscopique puis sigmoïdectomie.',
    },
    {
      slug: 'occlusion-sur-bride',
      protocoles: ['WSES — Bologna guidelines for diagnosis and management of adhesive small bowel obstruction (2017)'],
      verifie:
        'Antécédent de laparotomie, signes de strangulation (douleur continue, fièvre, défense, lactates) ; sonde gastrique, réhydratation, potassium ; chirurgie urgente si strangulation ; sinon surveillance 48–72 h et opacification aux hydrosolubles ; résolution sans chirurgie dans 70 % des cas.',
    },
    {
      slug: 'perforation-ulcere-gastroduodenal',
      protocoles: ['WSES — Guidelines on perforated and bleeding peptic ulcer (2020)'],
      verifie:
        'Douleur en coup de poignard, contracture, pneumopéritoine ; réanimation, sonde gastrique, oméprazole IV, ceftriaxone + métronidazole ; suture avec épiplooplastie et lavage, biopsie d’un ulcère gastrique ; IPP 8 semaines, éradication d’H. pylori, arrêt des AINS.',
    },
    {
      slug: 'perforation-typhique-ileon',
      protocoles: ['OMS — Typhoid vaccines: position paper (2018)', DISTRICT],
      verifie:
        'Douleur abdominale chez un patient fébrile depuis 1 à 3 semaines ; réanimation, ceftriaxone + métronidazole ; laparotomie précoce, excision-suture ou résection iléale, iléostomie si contamination majeure, examen de tout l’iléon ; antibiotiques 10–14 jours ; vaccin conjugué.',
    },
    {
      slug: 'stenose-pylore-adulte',
      protocoles: ['ASGE — The role of endoscopy in the management of gastric outlet obstruction (2021)', DISTRICT],
      verifie:
        'Vomissements tardifs, clapotage, alcalose hypochlorémique hypokaliémique ; fibroscopie avec biopsies ; aspiration, NaCl 0,9 % + KCl, IPP, renutrition ; éradication d’H. pylori, dilatation au ballonnet, gastro-entérostomie ou antrectomie ; gastrectomie si cancer résécable.',
    },
    {
      slug: 'volvulus-du-sigmoide',
      protocoles: ['ASCRS — Clinical practice guidelines for the management of colonic volvulus (2016)', DISTRICT],
      verifie:
        'Distension asymétrique, image en grain de café ; détorsion endoscopique ou par sonde rectale laissée 24–48 h, puis sigmoïdectomie pendant la même hospitalisation (récidive > 50 %) ; nécrose : Hartmann, ceftriaxone + métronidazole.',
    },
    {
      slug: 'fistules-digestives',
      protocoles: ['ESPEN — Guideline on chronic intestinal failure : fistules entéro-cutanées (2016)', 'Approche SNAP (Sepsis, Nutrition, Anatomie, Plan) des fistules entéro-cutanées'],
      verifie:
        'Débit faible (< 200 mL/j) ou élevé (> 500 mL/j) ; drainage des collections, compensation des pertes, nutrition entérale ou parentérale, IPP et octréotide des hauts débits ; protection cutanée ; fermeture spontanée dans 30–70 % en 4–6 semaines ; chirurgie différée (≥ 3 mois).',
    },
    {
      slug: 'goitre-nodules-thyroidiens-chirurgie',
      protocoles: ['ATA — Management guidelines for adult patients with thyroid nodules and differentiated thyroid cancer (2015)', 'ATA — Guidelines for diagnosis and management of hyperthyroidism (2016)'],
      verifie:
        'Indications (compression, plongeant, nodule suspect, hyperthyroïdie non contrôlée) ; TSH, échographie TI-RADS, cytoponction, laryngoscopie ; euthyroïdie préalable, Lugol 7–10 jours avant chirurgie du Basedow ; thyroïdectomie totale ou lobo-isthmectomie ; hématome compressif : réouverture immédiate ; calcémie à 24–48 h, lévothyroxine.',
    },
    {
      slug: 'infection-du-site-operatoire',
      protocoles: ['OMS — Global guidelines for the prevention of surgical site infection (2e édition, 2018)', 'CDC — Guideline for the prevention of surgical site infection (2017)'],
      verifie:
        'Définition (30 jours, 90 si implant), superficielle, profonde, organe ; ouverture et drainage, antibiotiques seulement si cellulite ou signes systémiques ; reprise si collection profonde ; prévention : céfazoline 2 g dans les 60 min avant l’incision sans prolongation, chlorhexidine alcoolique, pas de rasage, normothermie, liste de contrôle OMS.',
    },
    {
      slug: 'pancreatite-aigue-grave-chirurgie',
      protocoles: ['IAP/APA — Evidence-based guidelines for the management of acute pancreatitis (2013)', 'WSES — Guidelines for the management of severe acute pancreatitis (2019)'],
      verifie:
        'Traitement médical d’abord, nutrition entérale précoce, pas d’antibiotiques prophylactiques ; nécrose infectée : carbapénème puis approche progressive (drainage, nécrosectomie mini-invasive), idéalement après 4 semaines ; compartiment abdominal ; cholécystectomie pendant la même hospitalisation des formes légères.',
    },
    {
      slug: 'peritonite-postoperatoire',
      protocoles: [WSES_IAI, 'Sawyer et al. — STOP-IT : trial of short-course antimicrobial therapy for intraabdominal infection (N Engl J Med 2015)'],
      verifie:
        'Patient qui ne va pas bien après J3 ; scanner, lactates, prélèvements ; réanimation, carbapénème ± vancomycine, fluconazole si facteurs de risque ; reprise précoce avec contrôle de la source, stomie plutôt qu’une nouvelle anastomose ; antibiotiques 4–7 jours après contrôle de la source.',
    },
    {
      slug: 'plaie-abdominale-penetrante',
      protocoles: [ATLS, 'EAST — Practice management guideline for selective nonoperative management of penetrating abdominal trauma (2010)'],
      verifie:
        'ABCDE, recherche de toutes les plaies, FAST ; transfusion, acide tranexamique, ne pas retirer l’objet, éviscération couverte ; laparotomie si choc, péritonite, éviscération, plaie par balle ; arme blanche chez le patient stable : exploration locale et examens répétés ; ceftriaxone + métronidazole, tétanos.',
    },
    {
      slug: 'rupture-de-la-rate',
      protocoles: ['WSES — Splenic trauma: WSES classification and guidelines for adult and pediatric patients (2017)', 'CDC/ACIP — Meningococcal vaccination, recommendations of the ACIP (MMWR 2020) : asplénie'],
      verifie:
        'Signe de Kehr, rupture sur rate palustre ou en deux temps ; FAST, scanner si stable ; instable : transfusion, acide tranexamique dans les 3 h, splénectomie ; stable : traitement non opératoire, embolisation ; vaccins idéalement 14 jours après la chirurgie, antibioprophylaxie, prévention du paludisme.',
      corrige:
        'Vaccination méningococcique de l’aspléniste précisée : un vaccin conjugué ACWY est nécessaire, le vaccin méningococcique A conjugué (sérogroupe A seul) ne suffit pas.',
      corrections: [
        {
          principe: 'Après splénectomie',
          champ: 'details',
          remplacer: [
            '- **Vaccins** : pneumocoque, méningocoque, Haemophilus influenzae b',
            '- **Vaccins** : pneumocoque, méningocoque (vaccin conjugué ACWY ; le vaccin A seul ne suffit pas), Haemophilus influenzae b',
          ],
        },
        {
          molecule: 'vaccin-meningococcique-a-conjugue',
          champ: 'contexte',
          remplacer: [
            'Après splénectomie',
            'Après splénectomie : sérogroupe A seulement, préférer un vaccin conjugué ACWY si disponible',
          ],
        },
      ],
    },
    {
      slug: 'traumatisme-abdominal-ferme',
      protocoles: [ATLS, 'WSES — Liver and splenic trauma guidelines (2017, 2020)'],
      verifie:
        'ABCDE, index de choc, marque de ceinture ; FAST, Hb répétée, scanner si stable ; remplissage modéré, transfusion précoce, acide tranexamique dans les 3 h ; instable avec FAST positive : laparotomie ; stable : traitement non opératoire, examens répétés (perforation retardée).',
    },
    {
      slug: 'abces-phlegmons-parties-molles',
      protocoles: [IDSA_SSTI, 'MSF — Guide clinique et thérapeutique : abcès cutané'],
      verifie:
        'Abcès, phlegmon des gaines de la main (urgence) ; incision-drainage large ; cloxacilline 1 g 3–4 fois par jour 5–10 jours si cellulite, fièvre, terrain fragile, visage ou main, clindamycine si allergie ou SARM ; prévention des abcès d’injection.',
    },
    {
      slug: 'fasciite-necrosante',
      protocoles: [IDSA_SSTI, 'WSES/SIS-E — Consensus on the management of skin and soft-tissue infections (2018)'],
      verifie:
        'Douleur disproportionnée, bulles, crépitation, choc ; exploration chirurgicale sans retarder pour l’imagerie ; débridement large répété toutes les 24–48 h ; pénicilline G ou ceftriaxone + clindamycine + métronidazole ; réanimation, pas d’AINS.',
    },
    {
      slug: 'gangrene-de-fournier',
      protocoles: [IDSA_SSTI, 'WSES/SIS-E — Consensus on the management of skin and soft-tissue infections (2018)'],
      verifie:
        'Douleur scrotale ou périnéale disproportionnée, nécrose, crépitation, testicules épargnés ; débridement large répété, cystostomie ou colostomie selon l’atteinte ; pipéracilline-tazobactam (ou imipénème) + clindamycine, ou ceftriaxone + métronidazole + clindamycine, vancomycine si SARM ; glycémie, tétanos.',
    },
    {
      slug: 'lipomes-kystes-sebaces',
      protocoles: ['ESMO — Soft tissue and visceral sarcomas clinical practice guideline (2021) : masse des parties molles suspecte'],
      verifie:
        'Lipome et kyste épidermoïde ; signes d’alerte du sarcome (> 5 cm, profond, dur, croissance) : imagerie et biopsie avant exérèse ; exérèse complète sous anesthésie locale, paroi du kyste en totalité ; kyste infecté : drainage puis exérèse à 4–6 semaines.',
    },
    {
      slug: 'morsures-animales',
      protocoles: ['OMS — Rabies vaccines: position paper (2018)', IDSA_SSTI],
      verifie:
        'Catégories d’exposition OMS I à III, observation de l’animal 10 jours ; lavage 15 minutes à l’eau et au savon ; pas de suture primaire sauf au visage ; immunoglobulines infiltrées en catégorie III ; amoxicilline-acide clavulanique 3–5 jours en prophylaxie, doxycycline + métronidazole si allergie ; tétanos.',
      corrige:
        'Schéma vaccinal antirabique aligné sur l’OMS 2018 et la fiche « Rage » : 3 visites (J0, J3, J7) en intradermique seulement ; la voie IM demande une dose de plus (J14–J28).',
      corrections: [
        {
          principe: 'Prophylaxie de la rage',
          champ: 'details',
          remplacer: [
            '(schéma OMS : J0, J3, J7 intradermique ou IM selon le schéma national)',
            '(schéma OMS : intradermique en 2 sites à J0, J3, J7, ou IM à J0, J3, J7 et J14–J28, selon le schéma national)',
          ],
        },
      ],
    },
    {
      slug: 'plaies-et-sutures',
      protocoles: ['OMS — Surgical care at the district hospital (2003) : plaies', 'OMS — Tetanus vaccines: position paper (2017)'],
      verifie:
        'Recherche des lésions tendineuses, nerveuses, vasculaires ; lidocaïne 1 % (maximum 3–4,5 mg/kg sans adrénaline) ; lavage abondant, parage ; suture primaire avant 6–12 h (24 h au visage), suture différée des plaies souillées, morsures et plaies par balle ; ablation des fils selon le siège ; tétanos ; antibiotiques seulement si plaie à risque.',
    },
    {
      slug: 'pyomyosite-tropicale',
      protocoles: [IDSA_SSTI, 'MSF — Guide clinique et thérapeutique : pyomyosite'],
      verifie:
        'Douleur musculaire profonde, induration ligneuse, psoas ; échographie et ponction ; drainage chirurgical ou écho-guidé ; cloxacilline 2 g toutes les 6 h (enfant 50 mg/kg) puis relais oral, 2–3 semaines au total ; clindamycine si allergie ou SARM, ceftriaxone ajoutée chez l’immunodéprimé.',
    },
    {
      slug: 'ulceres-chroniques-de-jambe',
      protocoles: ['ESVS — Clinical practice guidelines on the management of chronic venous disease (2022)', 'OMS — Ulcère de Buruli : traitement antibiotique (rifampicine + clarithromycine, 2017)'],
      verifie:
        'Orientation étiologique (veineux, artériel, drépanocytaire, tropical, Buruli, Marjolin) ; IPS avant compression, biopsie des bords si atypique ; soins locaux, antibiotiques seulement si infection ; compression si IPS > 0,8 ; Buruli : rifampicine + clarithromycine 8 semaines ; nutrition, greffe.',
    },
    {
      slug: 'abdomen-aigu-demarche',
      protocoles: ['Cochrane — Analgesia in patients with acute abdominal pain (Manterola et al., 2011)', DISTRICT],
      verifie:
        'Signes de gravité, β-hCG chez toute femme en âge de procréer, glycémie, TDR paludisme, bandelette, ECG ; échographie et ASP ; antalgie morphinique sans attendre ; chirurgie si péritonite, ischémie, hémorragie interne ou choc ; réévaluation toutes les 2 à 4 h en cas de doute ; causes médicales.',
    },
    {
      slug: 'choc-hemorragique-traumatique',
      protocoles: [ATLS, 'Rossaint et al. — European guideline on management of major bleeding and coagulopathy following trauma (6e édition, 2023)', 'CRASH-2 — Acide tranexamique dans les 3 h'],
      verifie:
        'Classes ATLS, index de choc ≥ 1 ; garrot, ceinture pelvienne, damage control ; PAS 80–90 mmHg (> 110 si traumatisme crânien), cristalloïdes ≤ 1 L, sang total ou 1:1:1 ; acide tranexamique 1 g en 10 min puis 1 g en 8 h dans les 3 h ; calcium, réchauffement.',
    },
    {
      slug: 'ischemie-aigue-de-membre',
      protocoles: ['ESVS — Clinical practice guidelines on the management of acute limb ischaemia (2020)'],
      verifie:
        'Les « 6 P », classification de Rutherford ; héparine non fractionnée 5 000 UI ou 80 UI/kg puis perfusion, membre déclive non réchauffé ; embolectomie au Fogarty, thrombolyse ou pontage, aponévrotomie ; syndrome de revascularisation ; amputation si non viable ; anticoagulation au long cours de l’embolie.',
    },
    {
      slug: 'peritonite-aigue',
      protocoles: [WSES_IAI, 'Surviving Sepsis Campaign — International guidelines (2021)'],
      verifie:
        'Contracture, formes asthéniques ; pneumopéritoine absent dans 20–30 % ; réanimation ; ceftriaxone + métronidazole ou amoxicilline-acide clavulanique ± gentamicine, ≈ 4 jours après contrôle de la source ; laparotomie dans les 6 h, damage control si instable ; perforation typhique, ulcère, péritonite primaire.',
    },
  ],
};
