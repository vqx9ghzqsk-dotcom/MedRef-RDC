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
  // Fiche de départ (sans référence de catalogue) : comprimés, suspension et suppositoires
  { nom: 'Doliprane', photo: '/medias/produits/sanofi/sanofi-doliprane-500-56ffc1c6.webp' },
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
];

module.exports = { PHOTOS, CATALOGUE, SOURCE };
