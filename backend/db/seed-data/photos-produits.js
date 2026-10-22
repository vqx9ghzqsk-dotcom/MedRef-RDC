'use strict';

/**
 * Photos de produits fournies par le Dr Mingalu (document « IMG_3094.pdf », 20 octobre 2026).
 *
 * - PHOTOS : photos attribuées à des produits déjà en base (par référence de catalogue, ou par nom
 *   pour une fiche de départ sans référence). Une photo déjà présente n'est jamais remplacée.
 * - CATALOGUE : médicaments de ces photos absents de la base, créés avec la composition lue sur la
 *   boîte (présentation française) ; à rapprocher de l'AMM RDC et à relire.
 *
 * Non repris : Initiv (dispositif médical), Phytoxil (dispositif médical), Novanuit (complément
 * alimentaire), Influenzinum (homéopathie, capture d'écran d'un site marchand). Variantes de
 * présentation sans fiche propre non reprises : Aspégic nourrissons 100 mg et enfants 250 mg,
 * Maalox sachets, Doliprane 100 mg suppositoires et 1000 mg, flacon de Doliprane 2,4 %, Daflon 120 cp.
 */

const SOURCE = 'Photos de produits fournies par le Dr Mingalu (20 octobre 2026)';
const SOURCE_PRODUIT = `${SOURCE} — composition lue sur la boîte (présentation française) ; AMM RDC et présentation locale à vérifier.`;

const SOURCE_VIATRIS =
  'Photos de boîtes fournies par le Dr Mingalu (21 octobre 2026) — composition lue sur la boîte (présentation européenne) ; AMM RDC et présentation locale à vérifier.';

const PHOTOS = [
  { ref: 'repertoire-aspegic', photo: '/medias/produits/sanofi/sanofi-aspegic-05b713b3.webp' },
  { ref: 'repertoire-bronchokod', photo: '/medias/produits/sanofi/sanofi-bronchokod-2177d1bb.webp' },
  { ref: 'repertoire-dulcolax', photo: '/medias/produits/sanofi/sanofi-dulcolax-f6f7c925.webp' },
  { ref: 'repertoire-maalox', photo: '/medias/produits/sanofi/sanofi-maalox-27d47577.webp' },
  {
    ref: 'acorep:servier:daflon:diosmine',
    photo: '/medias/produits/servier/servier-daflon-500-902008e1.webp',
  },
  {
    ref: 'acorep:a-nattermann-cie-gmbh-nattermannallee:doliprane:paracetamol',
    photo: '/medias/produits/sanofi/sanofi-doliprane-suspension-2-4-6b1d6804.webp',
  },
  {
    ref: 'acorep:nattermann-cie-gmbh-nattermann-allee:toplexil:oxomemazine-benzoate-de-sodium-glycerol-acide-c:33f2ad7b569d',
    photo: '/medias/produits/sanofi/sanofi-toplexil-5cc600bb.webp',
  },
  // Socomol injectable (répertoire AMM) : boîte tirée de l'image « Famille Socomol » du Dr Mingalu
  // (21 octobre 2026), qui a aussi remplacé les photos de la gamme dans le catalogue PrincePharma
  {
    ref: 'acorep:prince-pharma:socomol:paracetamol',
    photo: '/medias/produits/princepharma/princepharma-socomol-injectable-b596b365.webp',
  },
  // Fiche de départ (sans référence de catalogue) : comprimés, suspension et suppositoires
  { nom: 'Doliprane', photo: '/medias/produits/sanofi/sanofi-doliprane-500-56ffc1c6.webp' },
  // Photos du document « les produits organon, viatris, pfizer, roche et sanofi » du Dr Mingalu
  // (21 octobre 2026), une photo par produit, rognée au cadre 4:3
  { nom: 'Cozaar', photo: '/medias/produits/organon/organon-cozaar-fd035f9d.webp' },
  { ref: 'repertoire-xanax', photo: '/medias/produits/viatris/viatris-xanax-3f5afdb7.webp' },
  {
    ref: 'acorep:viatris-mylan:duspatalin:mebeverine',
    photo: '/medias/produits/viatris/viatris-duspatalin-cbeb158d.webp',
  },
  { ref: 'repertoire-xalatan', photo: '/medias/produits/viatris/viatris-xalatan-55814545.webp' },
  { ref: 'repertoire-xalacom', photo: '/medias/produits/viatris/viatris-xalacom-b886a8b7.webp' },
  { ref: 'repertoire-mestinon', photo: '/medias/produits/viatris/viatris-mestinon-a8406b28.webp' },
  {
    ref: 'acorep:viatris-mylan:brufen:ibuprofene',
    photo: '/medias/produits/viatris/viatris-brufen-399153d1.webp',
  },
  {
    ref: 'acorep:viatris-mylan:xagulant:apixaban',
    photo: '/medias/produits/viatris/viatris-xagulant-41037a24.webp',
  },
  {
    ref: 'acorep:viatris-mylan:xafariv:rivaroxaban',
    photo: '/medias/produits/viatris/viatris-xafariv-fd88b5a7.webp',
  },
  {
    ref: 'acorep:viatris-mylan:tahor:atorvastatine',
    photo: '/medias/produits/viatris/viatris-tahor-918a2cfb.webp',
  },
  { nom: 'Lipitor', photo: '/medias/produits/viatris/viatris-lipitor-585d6b51.webp' },
  { nom: 'Amlor', photo: '/medias/produits/viatris/viatris-amlor-e87e70c4.webp' },
  { ref: 'repertoire-lyrica', photo: '/medias/produits/viatris/viatris-lyrica-4972f670.webp' },
  { ref: 'acorep:roche:avastin:bevacizumab', photo: '/medias/produits/roche/roche-avastin-01b36458.webp' },
  { ref: 'repertoire-herceptin', photo: '/medias/produits/roche/roche-herceptin-57052b9b.webp' },
  { ref: 'acorep:roche:mabthera:rituximab', photo: '/medias/produits/roche/roche-mabthera-9d12d95f.webp' },
  { nom: 'Gardénal', photo: '/medias/produits/sanofi/sanofi-gardenal-71a67343.webp' },
  {
    ref: 'acorep:sanofi:lactacyde-emulsion-lavante-douce:lactoserum-atmisat-acide-lactique-zerezol-tegosoft-li:a977f548f70e',
    photo: '/medias/produits/sanofi/sanofi-lactacyd-ac16b12f.webp',
  },
  {
    ref: 'acorep:sanofi:insulin-glargine-impact-solostar:insuline-glargine',
    photo: '/medias/produits/sanofi/sanofi-insulin-glargine-impact-solostar-6064b118.webp',
  },
  {
    ref: 'acorep:sanofi:glimepiride-metformin-hydrochloride-impact:glimepiride-chlorhydrate-de-metformine',
    photo: '/medias/produits/sanofi/sanofi-glimepiride-metformine-impact-ccea9a20.webp',
  },
  {
    ref: 'acorep:sanofi:glimepiride-impact:glimepiride',
    photo: '/medias/produits/sanofi/sanofi-glimepiride-impact-30197f3d.webp',
  },
  {
    ref: 'acorep:sanofi:fleming-enfant:amoxicilline-acide-clavulanique',
    photo: '/medias/produits/sanofi/sanofi-fleming-enfant-dbc90103.webp',
  },
  {
    ref: 'acorep:sanofi:fleming-nourrisson:amoxicilline-acide-clavulanique',
    photo: '/medias/produits/sanofi/sanofi-fleming-nourrisson-24d62dda.webp',
  },
  { ref: 'acorep:sanofi:amarel:glimepiride', photo: '/medias/produits/sanofi/sanofi-amarel-25580f83.webp' },
  { ref: 'repertoire-apidra', photo: '/medias/produits/sanofi/sanofi-apidra-effa6c03.webp' },
  { ref: 'repertoire-aprovel', photo: '/medias/produits/sanofi/sanofi-aprovel-7d33aa9e.webp' },
  { ref: 'repertoire-claforan', photo: '/medias/produits/sanofi/sanofi-claforan-4eadc2db.webp' },
  {
    ref: 'acorep:sanofi:clopidogrel-impact:clopidogrel-bisulfate',
    photo: '/medias/produits/sanofi/sanofi-clopidogrel-impact-8cab6e4b.webp',
  },
  { ref: 'repertoire-coaprovel', photo: '/medias/produits/sanofi/sanofi-coaprovel-b812effe.webp' },
  { ref: 'repertoire-cordarone', photo: '/medias/produits/sanofi/sanofi-cordarone-4d289549.webp' },
  { ref: 'acorep:sanofi:daonil:glibenclamide', photo: '/medias/produits/sanofi/sanofi-daonil-2c15f31c.webp' },
  {
    ref: 'repertoire-depakine-chrono',
    photo: '/medias/produits/sanofi/sanofi-depakine-chrono-d1bf6a90.webp',
  },
  {
    ref: 'acorep:sanofi:enoxaparin-sodium-impact:enoxaparine-sodique',
    photo: '/medias/produits/sanofi/sanofi-enoxaparin-impact-7f2acaa6.webp',
  },
  { nom: 'Exacyl', photo: '/medias/produits/sanofi/sanofi-exacyl-17ef2ce1.webp' },
  { nom: 'Flagyl', photo: '/medias/produits/sanofi/sanofi-flagyl-8db7dace.webp' },
  { nom: 'Kardégic', photo: '/medias/produits/sanofi/sanofi-kardegic-022deaea.webp' },
  { ref: 'repertoire-lasilix', photo: '/medias/produits/sanofi/sanofi-lasilix-9462d77a.webp' },
  { nom: 'Lasix', photo: '/medias/produits/sanofi/sanofi-lasix-0252a174.webp' },
  { ref: 'repertoire-lovenox', photo: '/medias/produits/sanofi/sanofi-lovenox-0004457d.webp' },
  {
    ref: 'acorep:sanofi:xatral-lp:chlorhydrate-d-alfuzosinene',
    photo: '/medias/produits/sanofi/sanofi-xatral-lp-6977cefe.webp',
  },
  {
    ref: 'acorep:sanofi:xatral:chlorhydrate-d-alfuzosinene',
    photo: '/medias/produits/sanofi/sanofi-xatral-af06f8e3.webp',
  },
  {
    ref: 'acorep:energia:cetafor:ceftriaxone',
    photo: '/medias/produits/dafra-pharma/dafra-pharma-cetafor-ceftriaxone-3d01a7eb.webp',
  },
  {
    ref: 'acorep:bilim:cetafor:ceftriaxone',
    photo: '/medias/produits/dafra-pharma/dafra-pharma-cetafor-ceftriaxone-3d01a7eb.webp',
  },
  { ref: 'acorep:pfizer:amlor:amlodipine', photo: '/medias/produits/pfizer/pfizer-amlor-a1a52890.webp' },
  { nom: 'Aldactone', photo: '/medias/produits/pfizer/pfizer-aldactone-ff7231aa.webp' },
  { ref: 'acorep:pfizer:celebrex:celecoxib', photo: '/medias/produits/pfizer/pfizer-celebrex-ea2d93a2.webp' },
  { ref: 'repertoire-dalacine', photo: '/medias/produits/pfizer/pfizer-dalacine-a1a94606.webp' },
  {
    ref: 'acorep:pfizer:depo-provera:acetate-de-medroxyprogesterone',
    photo: '/medias/produits/pfizer/pfizer-depo-provera-0f9af9c6.webp',
  },
  {
    ref: 'acorep:pfizer:diflucan:fluconazole',
    photo: '/medias/produits/pfizer/pfizer-diflucan-894d028a.webp',
  },
  { ref: 'repertoire-fasigyne', photo: '/medias/produits/pfizer/pfizer-fasigyne-5020d1ed.webp' },
  {
    ref: 'acorep:pfizer:lincocine:lincomycine',
    photo: '/medias/produits/pfizer/pfizer-lincocine-62cf2e45.webp',
  },
  {
    ref: 'acorep:pfizer:medrol:methylprednisolone',
    photo: '/medias/produits/pfizer/pfizer-medrol-24e5b052.webp',
  },
  { nom: 'Zithromax', photo: '/medias/produits/pfizer/pfizer-zithromax-9ba9877e.webp' },
  { ref: 'repertoire-diprosalic', photo: '/medias/produits/organon/organon-diprosalic-4d245f2a.webp' },
  // Organon : boîtes fournies par le Dr Mingalu (21 octobre 2026) à la place des étiquettes du catalogue ;
  // la photo est déjà posée par catalogues/organon.json, cette liste marque le produit « photo fournie »
  {
    ref: 'organon-asmanex-twisthaler-219ecfb5',
    photo: '/medias/produits/organon/organon-asmanex-twisthaler-eef7efee.webp',
  },
  {
    ref: 'organon-celestone-soluspan-d39ed53c',
    photo: '/medias/produits/organon/organon-celestone-soluspan-c59cb964.webp',
  },
  {
    ref: 'organon-clarinex-d-12-heures-60bc4c9b',
    photo: '/medias/produits/organon/organon-clarinex-d-12-heures-91028adf.webp',
  },
  { ref: 'organon-cozaar-42ad1e35', photo: '/medias/produits/organon/organon-cozaar-fd035f9d.webp' },
  { ref: 'organon-diprolene-1cc0d277', photo: '/medias/produits/organon/organon-diprolene-05aafb69.webp' },
  { ref: 'organon-dulera-5b3cc101', photo: '/medias/produits/organon/organon-dulera-dd222469.webp' },
  {
    ref: 'organon-fosamax-plus-d-2c4c8ce8',
    photo: '/medias/produits/organon/organon-fosamax-plus-d-d87d36eb.webp',
  },
  {
    ref: 'organon-ganirelix-acetate-278b22a6',
    photo: '/medias/produits/organon/organon-ganirelix-acetate-1c995c8c.webp',
  },
  { ref: 'organon-hyzaar-5524ea20', photo: '/medias/produits/organon/organon-hyzaar-6ed26bb9.webp' },
  { ref: 'organon-sinemet-09f53e45', photo: '/medias/produits/organon/organon-sinemet-a3ad2d60.webp' },
  { ref: 'organon-singulair-a746e6f8', photo: '/medias/produits/organon/organon-singulair-bf2cac26.webp' },
  { ref: 'organon-tofidence-6a131220', photo: '/medias/produits/organon/organon-tofidence-85172eb8.webp' },
  { ref: 'organon-vytorin-84db1693', photo: '/medias/produits/organon/organon-vytorin-6e921d85.webp' },
  { ref: 'organon-zetia-70bdbdb1', photo: '/medias/produits/organon/organon-zetia-88f598f0.webp' },
  { ref: 'organon-zocor-7bf3c8c0', photo: '/medias/produits/organon/organon-zocor-bc013e1e.webp' },
];

const P = (ref, nom, dci, forme, presentation, classe, photo) => ({
  ref: `photo-${ref}`,
  nom,
  dci,
  forme,
  presentation,
  classe,
  photo: `/medias/produits/sanofi/${photo}`,
  source: SOURCE_PRODUIT,
});

const CATALOGUE = [
  {
    firme: {
      nom: 'Sanofi',
      slug: 'sanofi',
      pays: 'France',
      site_web: null,
      source: SOURCE,
      ajoute_par_ia: false,
    },
    produits: [
      P(
        'ipraalox',
        'Ipraalox',
        'Pantoprazole',
        'Comprimé gastro-résistant',
        '20 mg, boîte de 14',
        'Inhibiteurs de la pompe à protons',
        'sanofi-ipraalox-fe19ac85.webp',
      ),
      P(
        'sorbitol-delalande',
        'Sorbitol Delalande',
        'Sorbitol',
        'Poudre pour solution buvable en sachet',
        '5 g, boîte de 20 sachets',
        'Laxatifs osmotiques',
        'sanofi-sorbitol-delalande-820dc4e6.webp',
      ),
      P(
        'doliprane-vitamine-c',
        'Doliprane Vitamine C',
        'Paracétamol + Acide ascorbique',
        'Comprimé',
        '500 mg / 150 mg, boîte de 16',
        'Antalgiques et antipyrétiques',
        'sanofi-doliprane-vitamine-c-e152d7db.webp',
      ),
      P(
        'maxilase',
        'Maxilase',
        'Alpha-amylase',
        'Comprimé enrobé',
        '3 000 U.CEIP, boîte de 30',
        'Anti-inflammatoires enzymatiques (maux de gorge)',
        'sanofi-maxilase-fdffd307.webp',
      ),
      P(
        'maxilase-sirop',
        'Maxilase sirop',
        'Alpha-amylase',
        'Sirop',
        '200 U.CEIP/ml, flacon de 200 ml',
        'Anti-inflammatoires enzymatiques (maux de gorge)',
        'sanofi-maxilase-sirop-504748a2.webp',
      ),
      P(
        'hexomedine',
        'Hexomédine',
        'Hexamidine',
        'Gel pour application locale',
        'Gel',
        'Antiseptiques cutanés',
        'sanofi-hexomedine-71da19b5.webp',
      ),
      P(
        'iprafeine',
        'Ipraféine',
        'Ibuprofène + Caféine',
        'Comprimé pelliculé',
        '400 mg / 100 mg, boîte de 12',
        'Antalgiques (AINS)',
        'sanofi-iprafeine-c3ff5471.webp',
      ),
      P(
        'doliprane-liquiz',
        'Doliprane Liquiz',
        'Paracétamol',
        'Suspension buvable en sachet',
        '200 mg, enfants de 11 à 25 kg',
        'Antalgiques et antipyrétiques',
        'sanofi-doliprane-liquiz-a4962bf6.webp',
      ),
      P(
        'magnevie-b6',
        'MagnéVie B6',
        'Magnésium + Pyridoxine',
        'Comprimé',
        'Boîte de 60',
        'Minéraux et vitamines',
        'sanofi-magnevie-b6-1d8abd63.webp',
      ),
      P(
        'lysopaine-ambroxol',
        'Lysopaïne maux de gorge ambroxol',
        'Ambroxol',
        'Pastille à sucer',
        '20 mg, boîte de 18, à partir de 12 ans',
        'Anesthésiques locaux (maux de gorge)',
        'sanofi-lysopaine-ambroxol-511587a3.webp',
      ),
      P(
        'allervi',
        'Allervi',
        'Fexofénadine',
        'Comprimé pelliculé',
        '120 mg, boîte de 7',
        'Antihistaminiques H1',
        'sanofi-allervi-b1b8e5d1.webp',
      ),
    ],
  },
  // Génériques Viatris dont le Dr Mingalu a fourni les boîtes (21 octobre 2026)
  {
    firme: {
      nom: 'Viatris',
      slug: 'viatris',
      pays: 'États-Unis',
      site_web: null,
      source: SOURCE_VIATRIS,
      ajoute_par_ia: false,
    },
    produits: [
      {
        ref: 'photo-pregabalin-viatris',
        nom: 'Pregabalin Viatris',
        dci: 'Prégabaline',
        forme: 'Gélule',
        presentation: '25, 50, 75, 150 et 300 mg',
        classe: 'Antiépileptiques et douleurs neuropathiques',
        photo: '/medias/produits/viatris/viatris-pregabalin-viatris-8bcd63ec.webp',
        source: SOURCE_VIATRIS,
      },
      {
        ref: 'photo-tixocortol-viatris',
        nom: 'Tixocortol Viatris',
        dci: 'Tixocortol',
        forme: 'Suspension nasale',
        presentation: '1 %, flacon',
        classe: 'Corticoïdes nasaux',
        photo: '/medias/produits/viatris/viatris-tixocortol-viatris-2dbae2e5.webp',
        source: SOURCE_VIATRIS,
      },
      {
        ref: 'photo-celecoxib-viatris',
        nom: 'Celecoxib Viatris',
        dci: 'Célécoxib',
        forme: 'Gélule',
        presentation: '200 mg, boîte de 30',
        classe: 'Anti-inflammatoires non stéroïdiens',
        photo: '/medias/produits/viatris/viatris-celecoxib-viatris-1c12440a.webp',
        source: SOURCE_VIATRIS,
      },
      {
        ref: 'photo-ibuprofen-viatris',
        nom: 'Ibuprofen Viatris',
        dci: 'Ibuprofène',
        forme: 'Comprimé pelliculé',
        presentation: '400 mg, boîte de 20',
        classe: 'Anti-inflammatoires non stéroïdiens',
        photo: '/medias/produits/viatris/viatris-ibuprofen-viatris-c2a6bb6f.webp',
        source: SOURCE_VIATRIS,
      },
    ],
  },
];

module.exports = { PHOTOS, CATALOGUE, SOURCE };
