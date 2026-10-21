'use strict';

/**
 * Produits du « Répertoire général des produits pharmaceutiques et laboratoires (RDC) »
 * fourni par le Dr Mingalu le 19 octobre 2026, absents de MedRef : marques sans AMM ACOREP
 * enregistrée (les 59 marques du document qui ont une AMM et les 10 déjà présentes ne sont
 * pas reprises ; génériques sans marque, gammes, dispositifs et cosmétiques écartés).
 *
 * Noms commerciaux et firmes du document, firmes corrigées quand l’attribution était fausse
 * (Stromectol et Tienam : MSD ; Artefan : Ajanta ; Skenan : Ethypharm…). Pas de photo ni de
 * texte repris d’un site : les fiches sont celles des molécules liées. Sans AMM ni photo, le
 * produit reste masqué ; la photo ajoutée par le Dr Mingalu dans l’administration l’affiche
 * (`ajoute_par_ia` à 0), si sa firme fait partie des opérateurs retenus.
 */

const { slugify } = require('../../src/utils/slugify');

const SOURCE = 'Répertoire général des produits pharmaceutiques fourni par le Dr Mingalu (19 octobre 2026)';
const SOURCE_PRODUIT = `${SOURCE} — sur le marché en RDC selon le Dr Mingalu, absent du répertoire des AMM ACOREP importé (numéro d’AMM à compléter) ; firme et composition à vérifier sur la notice.`;

const P = (nom, dci, firme, pays, classe, presentation = null) => ({
  nom,
  dci,
  firme,
  pays,
  classe,
  presentation,
});
const PALU = 'Antipaludiques et antiparasitaires';
const ATB = 'Antibactériens, antifongiques et antituberculeux';
const ANTALG = 'Analgésie, anti-inflammatoires et rhumatologie';
const GASTRO = 'Gastro-entérologie';
const CARDIO = 'Cardiologie, métabolisme et endocrinologie';
const PNEUMO = 'Pneumologie, ORL, ophtalmologie et allergologie';
const NEURO = 'Neurologie, psychiatrie et addictologie';
const DERMATO = 'Dermatologie, gynécologie et pédiatrie';
const ONCO = 'Oncologie, anesthésie et réanimation';

const PRODUITS = [
  P('Artefan', 'Artéméther + Luméfantrine', 'Ajanta Pharma', 'Inde', PALU),
  P('Malact', 'Artésunate + Amodiaquine', 'New Cesamex', 'RDC', PALU),
  P('Plasmotrim', 'Artésunate', 'Mepha Pharma', 'Suisse', PALU),
  P(
    'Quinimax',
    'Quinine',
    'Sanofi',
    'France',
    PALU,
    'Alcaloïdes du quinquina : quinine, quinidine, cinchonine, cinchonidine',
  ),
  P('Halfan', 'Halofantrine', 'GSK', 'Royaume-Uni', PALU),
  P('Daraprim', 'Pyriméthamine', 'GSK', 'Royaume-Uni', PALU),
  P('Metronal', 'Métronidazole', 'Zenufa Laboratories', 'RDC', PALU),
  P('Secnol', 'Secnidazole', 'Symbiofar', 'France', PALU),
  P('Fasigyne', 'Tinidazole', 'Pfizer', 'États-Unis', PALU),
  P('Zentel', 'Albendazole', 'GSK', 'Royaume-Uni', PALU),
  P('Vermox', 'Mébendazole', 'Janssen', 'Belgique', PALU),
  P('Stromectol', 'Ivermectine', 'MSD', 'États-Unis', PALU),
  P('Alinia', 'Nitazoxanide', 'Romark Laboratories', 'États-Unis', PALU),

  P('Amoxil', 'Amoxicilline', 'GSK', 'Royaume-Uni', ATB),
  P('Claforan', 'Céfotaxime', 'Sanofi', 'France', ATB),
  P('Fortum', 'Ceftazidime', 'GSK', 'Royaume-Uni', ATB),
  P('Avelox', 'Moxifloxacine', 'Bayer', 'Allemagne', ATB),
  P('Izilox', 'Moxifloxacine', 'Bayer', 'Allemagne', ATB),
  P('Dalacine', 'Clindamycine', 'Pfizer', 'États-Unis', ATB),
  P('Bactrim', 'Sulfaméthoxazole + Triméthoprime', 'Roche', 'Suisse', ATB),
  P('Erythrocin', 'Érythromycine', 'Abbott', 'États-Unis', ATB),
  P('Tienam', 'Imipénème-cilastatine', 'MSD', 'États-Unis', ATB),
  P('Meronem', 'Méropénème', 'Pfizer', 'États-Unis', ATB),
  P('Vancocin', 'Vancomycine', 'Eli Lilly', 'États-Unis', ATB),
  P('Targocid', 'Téicoplanine', 'Sanofi', 'France', ATB),
  P('Pipracil', 'Pipéracilline', 'Pfizer', 'États-Unis', ATB),
  P('Tazocin', 'Pipéracilline + Tazobactam', 'Pfizer', 'États-Unis', ATB),
  P('Tygacil', 'Tigécycline', 'Pfizer', 'États-Unis', ATB),
  P('Cubicin', 'Daptomycine', 'MSD', 'États-Unis', ATB),
  P('Vfend', 'Voriconazole', 'Pfizer', 'États-Unis', ATB),
  P('Noxafil', 'Posaconazole', 'MSD', 'États-Unis', ATB),
  P('Fungizone', 'Amphotéricine B', 'Bristol Myers Squibb', 'États-Unis', ATB),
  P('Cancidas', 'Caspofungine', 'MSD', 'États-Unis', ATB),
  P('Rifater', 'Rifampicine + Isoniazide + Pyrazinamide', 'Sanofi', 'France', ATB),
  P('Rifinah', 'Rifampicine + Isoniazide', 'Sanofi', 'France', ATB),

  P('Dafalgan', 'Paracétamol', 'UPSA SAS', 'France', ANTALG),
  P('Paracétamol Zenufa', 'Paracétamol', 'Zenufa Laboratories', 'RDC', ANTALG),
  P('Aspegic', 'Acide acétylsalicylique', 'Sanofi', 'France', ANTALG, 'Acétylsalicylate de DL-lysine'),
  P('Nurofen', 'Ibuprofène', 'Reckitt', 'Royaume-Uni', ANTALG),
  P('Advil', 'Ibuprofène', 'Haleon', 'Royaume-Uni', ANTALG),
  P('Apranax', 'Naproxène', 'Alfasigma', 'Italie', ANTALG),
  P('Voltaren', 'Diclofénac', 'Novartis', 'Suisse', ANTALG),
  P('Cataflam', 'Diclofénac', 'Novartis', 'Suisse', ANTALG),
  P(
    'Flector Tissugel',
    'Diclofénac',
    'IBSA',
    'Suisse',
    ANTALG,
    'Diclofénac épolamine, emplâtre médicamenteux',
  ),
  P('Zerodol-P', 'Acéclofénac + Paracétamol', 'Ipca', 'Inde', ANTALG),
  P('Topalgic', 'Tramadol', 'Sanofi', 'France', ANTALG),
  P('Tramal', 'Tramadol', 'Grünenthal', 'Allemagne', ANTALG),
  P('Ixprim', 'Tramadol + Paracétamol', 'Grünenthal', 'Allemagne', ANTALG),
  P('Zaldiar', 'Tramadol + Paracétamol', 'Grünenthal', 'Allemagne', ANTALG),
  P('Lyrica', 'Prégabaline', 'Viatris', 'États-Unis', ANTALG),
  P('Skenan', 'Morphine', 'Ethypharm', 'France', ANTALG),
  P('Moscontin', 'Morphine', 'Mundipharma', 'Royaume-Uni', ANTALG),
  P('Piascledine 300', 'Insaponifiables d’avocat et de soja', 'Laboratoires Expanscience', 'France', ANTALG),
  P('Chondrosulf', 'Chondroïtine sulfate', 'IBSA', 'Suisse', ANTALG),
  P('Aclasta', 'Acide zolédronique', 'Novartis', 'Suisse', ANTALG),
  P('Actonel', 'Risédronate', 'Warner Chilcott', 'États-Unis', ANTALG),
  P('Zyloric', 'Allopurinol', 'Aspen Pharmacare', 'Afrique du Sud', ANTALG),
  P('Adenuric', 'Fébuxostat', 'Menarini', 'Italie', ANTALG),

  P('Imodium', 'Lopéramide', 'Janssen', 'Belgique', GASTRO),
  P('Imodium Lingual', 'Lopéramide', 'Janssen', 'Belgique', GASTRO),
  P('Dulcolax', 'Bisacodyl', 'Sanofi', 'France', GASTRO),
  P('Contalax', 'Bisacodyl', 'Sanofi', 'France', GASTRO),
  P('Transipeg', 'Macrogol', 'Bayer', 'Allemagne', GASTRO),
  P('Mopral', 'Oméprazole', 'AstraZeneca', 'Royaume-Uni', GASTRO),
  P('MopralPro', 'Oméprazole', 'AstraZeneca', 'Royaume-Uni', GASTRO),
  P('Inexium', 'Ésoméprazole', 'AstraZeneca', 'Royaume-Uni', GASTRO),
  P('Pantoprazole Denk', 'Pantoprazole', 'Denk Pharma', 'Allemagne', GASTRO),
  P('Eupantol', 'Pantoprazole', 'Takeda', 'Japon', GASTRO),
  P('Gaviscon', 'Alginate de sodium + Bicarbonate de sodium', 'Reckitt', 'Royaume-Uni', GASTRO),
  P('Maalox', 'Hydroxyde d’aluminium + Hydroxyde de magnésium', 'Sanofi', 'France', GASTRO),
  P('Spasfon Lyoc', 'Phloroglucinol', 'Teva', 'Israël', GASTRO),
  P('Motilium', 'Dompéridone', 'Janssen', 'Belgique', GASTRO),
  P('Vogalib', 'Métopimazine', 'Sanofi', 'France', GASTRO),
  P('Nautamine', 'Diphénhydramine', 'Cooper', 'France', GASTRO),
  P('Creon', 'Pancréatine', 'Abbott', 'États-Unis', GASTRO),
  P('Ursofalk', 'Acide ursodésoxycholique', 'Dr. Falk Pharma', 'Allemagne', GASTRO),
  P('Delursan', 'Acide ursodésoxycholique', 'Sanofi', 'France', GASTRO),
  P('Bedelix', 'Montmorillonite beidellitique', 'Ipsen', 'France', GASTRO),
  P('Normacol', 'Gomme de sterculia', 'Norgine', 'Royaume-Uni', GASTRO),
  P('Fortrans', 'Macrogol 4000', 'Ipsen', 'France', GASTRO),

  P('Aprovel', 'Irbésartan', 'Sanofi', 'France', CARDIO),
  P('Coaprovel', 'Irbésartan + Hydrochlorothiazide', 'Sanofi', 'France', CARDIO),
  P('Micardis', 'Telmisartan', 'Boehringer Ingelheim', 'Allemagne', CARDIO),
  P('Lasilix', 'Furosémide', 'Sanofi', 'France', CARDIO),
  P('Natrilix LP', 'Indapamide', 'Servier', 'France', CARDIO),
  P('Aldomet', 'Méthyldopa', 'Aspen Pharmacare', 'Afrique du Sud', CARDIO),
  P('Tenormine', 'Aténolol', 'AstraZeneca', 'Royaume-Uni', CARDIO),
  P('Cordarone', 'Amiodarone', 'Sanofi', 'France', CARDIO),
  P('Plavix', 'Clopidogrel', 'Sanofi', 'France', CARDIO),
  P('Sintrom', 'Acénocoumarol', 'Novartis', 'Suisse', CARDIO),
  P('Eliquis', 'Apixaban', 'Bristol Myers Squibb', 'États-Unis', CARDIO),
  P('Jardiance', 'Empagliflozine', 'Boehringer Ingelheim', 'Allemagne', CARDIO),
  P('Januvia', 'Sitagliptine', 'MSD', 'États-Unis', CARDIO),
  P('Janumet', 'Sitagliptine + Metformine', 'MSD', 'États-Unis', CARDIO),
  P('Apidra', 'Insuline glulisine', 'Sanofi', 'France', CARDIO),
  P('NovoRapid', 'Insuline asparte', 'Novo Nordisk', 'Danemark', CARDIO),
  P('Humalog', 'Insuline lispro', 'Eli Lilly', 'États-Unis', CARDIO),
  P('Victoza', 'Liraglutide', 'Novo Nordisk', 'Danemark', CARDIO),
  P('Ozempic', 'Sémaglutide', 'Novo Nordisk', 'Danemark', CARDIO),
  P('Trulicity', 'Dulaglutide', 'Eli Lilly', 'États-Unis', CARDIO),
  P('Crestor', 'Rosuvastatine', 'AstraZeneca', 'Royaume-Uni', CARDIO),
  P('Levothyrox', 'Lévothyroxine', 'Merck KGaA', 'Allemagne', CARDIO),
  P('Neomercazole', 'Carbimazole', 'Kowa', 'Japon', CARDIO),

  P('Bricanyl', 'Terbutaline', 'AstraZeneca', 'Royaume-Uni', PNEUMO),
  P('Spiriva', 'Tiotropium', 'Boehringer Ingelheim', 'Allemagne', PNEUMO),
  P('Zyrtec', 'Cétirizine', 'UCB', 'Belgique', PNEUMO),
  P('Actifed Rhume', 'Pseudoéphédrine + Triprolidine + Paracétamol', 'Kenvue', 'États-Unis', PNEUMO),
  P('Fervex', 'Paracétamol + Phéniramine + Acide ascorbique', 'UPSA SAS', 'France', PNEUMO),
  P('Lysopaïne', 'Chlorure de cétylpyridinium + Lysozyme', 'Boehringer Ingelheim', 'Allemagne', PNEUMO),
  P('Strepsils', 'Amylmétacrésol + Alcool dichlorobenzylique', 'Reckitt', 'Royaume-Uni', PNEUMO),
  P('Colludol', 'Hexamidine + Lidocaïne', 'Ceuta Healthcare', 'Royaume-Uni', PNEUMO),
  P('Bronchokod', 'Carbocistéine', 'Sanofi', 'France', PNEUMO),
  P('Clarix', 'Carbocistéine', 'Cooper', 'France', PNEUMO),
  P('Fluimucil', 'Acétylcystéine', 'Zambon', 'Italie', PNEUMO),
  P('Mucomyst', 'Acétylcystéine', 'Sanofi', 'France', PNEUMO),
  P('Pivalone', 'Tixocortol', 'Viatris', 'États-Unis', PNEUMO),
  P('Tobradex', 'Tobramycine + Dexaméthasone', 'Alcon', 'Suisse', PNEUMO),
  P('Maxitrol', 'Dexaméthasone + Néomycine + Polymyxine B', 'Alcon', 'Suisse', PNEUMO),
  P('Ciloxan', 'Ciprofloxacine', 'Alcon', 'Suisse', PNEUMO),
  P('Vigamox', 'Moxifloxacine', 'Alcon', 'Suisse', PNEUMO),
  P('Xalatan', 'Latanoprost', 'Viatris', 'États-Unis', PNEUMO),
  P('Xalacom', 'Latanoprost + Timolol', 'Viatris', 'États-Unis', PNEUMO),
  P('Alphagan', 'Brimonidine', 'AbbVie', 'États-Unis', PNEUMO),
  P('Lumigan', 'Bimatoprost', 'AbbVie', 'États-Unis', PNEUMO),
  P('Cosopt', 'Dorzolamide + Timolol', 'Santen', 'Japon', PNEUMO),

  P(
    'Depakine Chrono',
    'Acide valproïque',
    'Sanofi',
    'France',
    NEURO,
    'Valproate de sodium + acide valproïque, comprimés à libération prolongée',
  ),
  P('Xanax', 'Alprazolam', 'Viatris', 'États-Unis', NEURO),
  P('Stilnox', 'Zolpidem', 'Sanofi', 'France', NEURO),
  P('Rivotril', 'Clonazépam', 'Roche', 'Suisse', NEURO),
  P('Laroxyl', 'Amitriptyline', 'Teofarma', 'Italie', NEURO),
  P('Seroplex', 'Escitalopram', 'Lundbeck', 'Danemark', NEURO),
  P('Lexapro', 'Escitalopram', 'Lundbeck', 'Danemark', NEURO),
  P('Prozac', 'Fluoxétine', 'Eli Lilly', 'États-Unis', NEURO),
  P('Haldol', 'Halopéridol', 'Janssen', 'Belgique', NEURO),
  P('Seroquel', 'Quétiapine', 'AstraZeneca', 'Royaume-Uni', NEURO),
  P('Zyprexa', 'Olanzapine', 'Eli Lilly', 'États-Unis', NEURO),
  P('Risperdal', 'Rispéridone', 'Janssen', 'Belgique', NEURO),
  P('Abilify', 'Aripiprazole', 'Otsuka', 'Japon', NEURO),
  P('Modopar', 'Lévodopa + Bensérazide', 'Roche', 'Suisse', NEURO),
  P('Artane', 'Trihexyphénidyle', 'Pfizer', 'États-Unis', NEURO),
  P('Mestinon', 'Pyridostigmine', 'Viatris', 'États-Unis', NEURO),
  P('Nootropyl', 'Piracétam', 'UCB', 'Belgique', NEURO),
  P('Subutex', 'Buprénorphine', 'Indivior', 'Royaume-Uni', NEURO),
  P('Nicorette', 'Nicotine', 'Kenvue', 'États-Unis', NEURO),
  P('Nicotinell', 'Nicotine', 'Haleon', 'Royaume-Uni', NEURO),

  P('Biafine', 'Trolamine', 'Kenvue', 'États-Unis', DERMATO),
  P('Locoid', 'Hydrocortisone', 'Leo Pharma', 'Danemark', DERMATO, 'Butyrate d’hydrocortisone, usage cutané'),
  P('Dermovate', 'Clobétasol', 'GSK', 'Royaume-Uni', DERMATO),
  P('Daivobet', 'Calcipotriol + Bétaméthasone', 'Leo Pharma', 'Danemark', DERMATO),
  P('Diprosalic', 'Bétaméthasone + Acide salicylique', 'Organon', 'États-Unis', DERMATO),
  P('Elocom', 'Mométasone', 'Organon', 'États-Unis', DERMATO),
  P('Fucidine', 'Acide fusidique', 'Leo Pharma', 'Danemark', DERMATO),
  P('Rozex', 'Métronidazole', 'Galderma', 'Suisse', DERMATO),
  P('Differine', 'Adapalène', 'Galderma', 'Suisse', DERMATO),
  P('Roaccutane', 'Isotrétinoïne', 'Roche', 'Suisse', DERMATO),
  P('Curacné', 'Isotrétinoïne', 'Pierre Fabre', 'France', DERMATO),
  P('Flammazine', 'Sulfadiazine argentique', 'Sinclair Pharma', 'Royaume-Uni', DERMATO),
  P('Gyno-Pevaryl', 'Éconazole', 'Janssen', 'Belgique', DERMATO),
  P('Ketoderm', 'Kétoconazole', 'Janssen', 'Belgique', DERMATO),
  P('Nizoral', 'Kétoconazole', 'Janssen', 'Belgique', DERMATO),
  P('Lutényl', 'Nomégestrol', 'Theramex', 'Monaco', DERMATO),
  P('Lutéran', 'Chlormadinone', 'Theramex', 'Monaco', DERMATO),
  P('Androcur', 'Cyprotérone', 'Bayer', 'Allemagne', DERMATO),
  P('EllaOne', 'Ulipristal', 'HRA Pharma', 'France', DERMATO),
  P('Nalador', 'Sulprostone', 'Bayer', 'Allemagne', DERMATO),
  P('Cytotec', 'Misoprostol', 'Pfizer', 'États-Unis', DERMATO),
  P('Syntocinon', 'Oxytocine', 'Novartis', 'Suisse', DERMATO),
  P('Tractocile', 'Atosiban', 'Ferring', 'Suisse', DERMATO),
  P('Parlodel', 'Bromocriptine', 'Novartis', 'Suisse', DERMATO),
  P('Adiaril', 'SRO', 'Stada', 'Allemagne', DERMATO),
  P('Pedialyte', 'SRO', 'Abbott', 'États-Unis', DERMATO),
  P('Plumpy’Sup', 'Aliment de supplémentation prêt à l’emploi', 'Nutriset', 'France', DERMATO),
  P('Polysilane', 'Siméticone', 'UPSA SAS', 'France', DERMATO),
  P('Infacol', 'Siméticone', 'Alliance Pharma', 'Royaume-Uni', DERMATO),

  P('Endoxan', 'Cyclophosphamide', 'Baxter', 'États-Unis', ONCO),
  P('Adriamycine', 'Doxorubicine', 'Pfizer', 'États-Unis', ONCO),
  P('Alkeran', 'Melphalan', 'Aspen Pharmacare', 'Afrique du Sud', ONCO),
  P('Herceptin', 'Trastuzumab', 'Roche', 'Suisse', ONCO),
  P('Casodex', 'Bicalutamide', 'AstraZeneca', 'Royaume-Uni', ONCO),
  P('Nolvadex', 'Tamoxifène', 'AstraZeneca', 'Royaume-Uni', ONCO),
  P('Hydrea', 'Hydroxycarbamide', 'Bristol Myers Squibb', 'États-Unis', ONCO),
  P('Xylocaïne', 'Lidocaïne', 'Aspen Pharmacare', 'Afrique du Sud', ONCO),
  P('Marcaine', 'Bupivacaïne', 'Aspen Pharmacare', 'Afrique du Sud', ONCO),
  P('Forane', 'Isoflurane', 'AbbVie', 'États-Unis', ONCO),
  P('Diprivan', 'Propofol', 'Aspen Pharmacare', 'Afrique du Sud', ONCO),
  P('Tracrium', 'Atracurium', 'GSK', 'Royaume-Uni', ONCO),
  P('Esmeron', 'Rocuronium', 'Organon', 'États-Unis', ONCO),
  P('Nimbex', 'Cisatracurium', 'AbbVie', 'États-Unis', ONCO),
  P('Hypnovel', 'Midazolam', 'Roche', 'Suisse', ONCO),
  P('Dobutrex', 'Dobutamine', 'Eli Lilly', 'États-Unis', ONCO),
  P('Levophed', 'Noradrénaline', 'Pfizer', 'États-Unis', ONCO),
  P('Lovenox', 'Énoxaparine', 'Sanofi', 'France', ONCO),
  P('Innohep', 'Tinzaparine', 'Leo Pharma', 'Danemark', ONCO),
  P('Dicynone', 'Étamsylate', 'OM Pharma', 'Suisse', ONCO),
];

/** Regroupement par firme, au format des catalogues ({ firme, produits }). */
const parFirme = new Map();
for (const p of PRODUITS) {
  if (!parFirme.has(p.firme)) {
    parFirme.set(p.firme, {
      firme: {
        nom: p.firme,
        slug: slugify(p.firme),
        pays: p.pays,
        site_web: null,
        source: SOURCE,
        ajoute_par_ia: false,
      },
      produits: [],
    });
  }
  parFirme.get(p.firme).produits.push({
    ref: `repertoire-${slugify(p.nom)}`,
    nom: p.nom,
    dci: p.dci,
    presentation: p.presentation,
    classe: p.classe,
    source: SOURCE_PRODUIT,
  });
}

module.exports = [...parFirme.values()];
