'use strict';

/**
 * Opérateurs affichés dans MedRef RDC (choix du Dr Mingalu, 9 octobre 2026). Les autres
 * opérateurs et leurs produits restent en base mais sont masqués. Chaque entrée reconnaît
 * les écritures du nom rencontrées dans le répertoire des AMM (motif sur le nom normalisé).
 * `marques` (facultatif) : seules ces marques de la firme sont affichées, les autres sont masquées.
 */
const OPERATEURS_RETENUS = [
  // Firmes implantées en RDC (catalogues avec photos)
  { nom: 'Arauphar', motif: /^arauphar|^arau phar/ },
  { nom: 'Denk Pharma', motif: /^denk pharma/ },
  { nom: 'New Cesamex', motif: /^new cesamex/ },
  { nom: 'PrincePharma', motif: /^princepharma|^prince pharma$/ },
  { nom: 'Shalina Healthcare', motif: /^shalina/ },
  { nom: 'Unique Pharma', motif: /^unique pharma$/ },
  // Firmes internationales
  { nom: 'Organon', motif: /^organon/ },
  { nom: 'Sanofi', motif: /^sanofi/ },
  { nom: 'Novartis', motif: /^novartis/ },
  { nom: 'Viatris (Mylan)', motif: /^viatris|^mylan/ },
  { nom: 'Servier', motif: /^servier/ },
  { nom: 'GSK', motif: /^gsk$|^glaxo/ },
  { nom: 'Cipla', motif: /^cipla/ },
  { nom: 'Macleods', motif: /^macleods/ },
  { nom: 'Pfizer', motif: /^pfizer/ },
  { nom: 'Zydus Cadila', motif: /^zydus|^cadila/ },
  { nom: 'Emcure', motif: /^emcure/ },
  { nom: 'Pierre Fabre', motif: /^pierre fabre/ },
  { nom: 'Bayer', motif: /^bayer/ },
  { nom: 'Roche', motif: /^roche$|^f hoffmann la roche|^hoffmann la roche/ },
  { nom: 'Ipsen', motif: /^ipsen/ },
  { nom: 'Menarini', motif: /^menarini|^a menarini/ },
  { nom: 'Abbott', motif: /^abbott/ },
  { nom: 'MSD', motif: /^msd$|^merck sharp/ },
  { nom: 'Janssen (Johnson & Johnson)', motif: /^janssen/ },
  { nom: 'Sun Pharma', motif: /^sun pharma/ },
  { nom: 'Novo Nordisk', motif: /^novo nordisk/ },
  { nom: 'Sandoz', motif: /^sandoz/ },
  // Circuit national et référentiel MedRef (produits des protocoles, LNME, programmes)
  { nom: 'FEDECAME', motif: /^fedecame$/ },
  { nom: 'Générique multisource', motif: /^generique multisource$/ },
  { nom: 'UNICEF Supply Division', motif: /^unicef/ },
  { nom: 'Nutriset', motif: /^nutriset/ },
  // Firmes du répertoire de produits fourni par le Dr Mingalu (19 octobre 2026)
  { nom: 'AbbVie', motif: /^abbvie/ },
  { nom: 'Ajanta Pharma', motif: /^ajanta/ },
  { nom: 'Alcon', motif: /^alcon/ },
  { nom: 'Alfasigma', motif: /^alfasigma/ },
  { nom: 'Alliance Pharma', motif: /^alliance pharma/ },
  { nom: 'Aspen Pharmacare', motif: /^aspen/ },
  { nom: 'AstraZeneca', motif: /^astra ?zeneca/ },
  { nom: 'Baxter', motif: /^baxter/ },
  { nom: 'Bliss GVS Pharma', motif: /^bliss gvs/ },
  { nom: 'Boehringer Ingelheim', motif: /^boehringer/ },
  { nom: 'Bristol Myers Squibb', motif: /^bristol myers/ },
  { nom: 'Ceuta Healthcare', motif: /^ceuta/ },
  { nom: 'Chiesi', motif: /^chiesi/ },
  { nom: 'Cooper', motif: /^cooper$|^cooperation pharmaceutique/ },
  { nom: 'Dr. Falk Pharma', motif: /^dr falk|^falk pharma/ },
  { nom: 'Eli Lilly', motif: /^eli lilly|^lilly/ },
  { nom: 'Ethypharm', motif: /^ethypharm/ },
  { nom: 'Exeltis', motif: /^exeltis/ },
  { nom: 'Ferring', motif: /^ferring/ },
  { nom: 'Fosun Pharma', motif: /^fosun|^shan[g]?hai fosun/ },
  { nom: 'Fresenius Kabi', motif: /^fresenius/ },
  { nom: 'Galderma', motif: /^galderma/ },
  { nom: 'Grünenthal', motif: /^grunenthal/ },
  { nom: 'Guilin Pharmaceutical', motif: /^guilin pharmaceutical/ },
  { nom: 'Haleon', motif: /^haleon/ },
  { nom: 'HRA Pharma', motif: /^hra pharma/ },
  { nom: 'IBSA', motif: /^ibsa/ },
  { nom: 'Indivior', motif: /^indivior/ },
  { nom: 'Ipca', motif: /^ipca/ },
  { nom: 'KBN-Zhejiang (Holley)', motif: /^kbn zhejiang|^zhejiang holley/ },
  { nom: 'Kenvue', motif: /^kenvue/ },
  { nom: 'Kinpharm', motif: /^kin ?pharm/ },
  { nom: 'Kowa', motif: /^kowa/ },
  { nom: 'Laboratoires Expanscience', motif: /^laboratoires expanscience|^expanscience/ },
  { nom: 'Leo Pharma', motif: /^leo pharma/ },
  { nom: 'Lundbeck', motif: /^lundbeck|^h lundbeck/ },
  { nom: 'Mepha Pharma', motif: /^mepha/ },
  { nom: 'Merck KGaA', motif: /^merck kgaa/ },
  { nom: 'Mundipharma', motif: /^mundipharma/ },
  { nom: 'Norgine', motif: /^norgine/ },
  { nom: 'OM Pharma', motif: /^om pharma/ },
  { nom: 'Opella Healthcare', motif: /^opella/ },
  { nom: 'Otsuka', motif: /^otsuka/ },
  { nom: 'Pharmakina', motif: /^pharmakina/ },
  { nom: 'Phatkin', motif: /^(laboratoire )?phatkin/ },
  { nom: 'Reckitt', motif: /^reckitt/ },
  { nom: 'Romark Laboratories', motif: /^romark/ },
  { nom: 'Santen', motif: /^santen/ },
  { nom: 'Sinclair Pharma', motif: /^sinclair pharma/ },
  { nom: 'Stada', motif: /^stada/ },
  { nom: 'Symbiofar', motif: /^symbiofar/ },
  { nom: 'Takeda', motif: /^takeda/ },
  { nom: 'Teofarma', motif: /^teofarma/ },
  { nom: 'Teva', motif: /^teva/ },
  { nom: 'Theramex', motif: /^theramex/ },
  { nom: 'Torrent Pharma', motif: /^torrent/ },
  { nom: 'UCB', motif: /^ucb/ },
  { nom: 'UPSA', motif: /^upsa/ },
  { nom: 'Warner Chilcott', motif: /^warner chilcott/ },
  { nom: 'Zambon', motif: /^zambon/ },
  { nom: 'Zenufa Laboratories', motif: /^zenufa/ },
  // Filiale de Sanofi qui fabrique Doliprane suspension et Toplexil (photos fournies le 20 octobre 2026)
  { nom: 'Nattermann (Sanofi)', motif: /^(a )?nattermann/ },
  // Retenue le 21 octobre 2026 pour les seuls produits utiles aux fiches : Acupan (néfopam,
  // fiche « Douleur postopératoire ») ; Ultra-Levure (Saccharomyces boulardii) n'est cité par aucune fiche
  { nom: 'Biocodex', motif: /^biocodex$/, marques: ['Acupan'] },
  // Cetafor (ceftriaxone, Dafra Pharma) : photo fournie par le Dr Mingalu le 21 octobre 2026 ;
  // AMM au nom de ses deux importateurs
  { nom: 'Energia', motif: /^energia$/, marques: ['Cetafor'] },
  { nom: 'Bilim', motif: /^bilim$/, marques: ['Cetafor'] },
];

/**
 * Marques dont l'AMM est enregistrée au nom du fabricant, rattachées à leur titulaire
 * (vérifié sur organon.com : Aerius, Arcoxia, Diprosone et Nasonex sont des marques Organon ; marques
 * du répertoire : AMM enregistrées au nom de l’usine sous-traitante, firme selon le répertoire).
 */
const TITULAIRES = [
  { titulaire: 'Organon', marques: ['Aerius', 'Arcoxia', 'Diprosone', 'Nasonex'] },
  // Marques du répertoire du Dr Mingalu (19 octobre 2026) dont l’AMM est au nom d’un façonnier
  { titulaire: 'Sanofi', marques: ['Flagyl', 'Toplexil', 'Triatec', 'Oflocet'] },
  { titulaire: 'Novartis', marques: ['Tegretol'] },
  { titulaire: 'GSK', marques: ['Ventoline', 'Zinnat'] },
  { titulaire: 'Bayer', marques: ['Rennie'] },
  { titulaire: 'Teva', marques: ['Spasfon'] },
  { titulaire: 'HRA Pharma', marques: ['Norlevo'] },
];

module.exports = { OPERATEURS_RETENUS, TITULAIRES };
