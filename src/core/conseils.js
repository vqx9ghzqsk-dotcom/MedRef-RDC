/**
 * Conseils au patient, consignes de retour et réévaluation pour l'hypothèse retenue, en français
 * simple, avec un pictogramme par consigne. Règles sur le nom de la fiche (sans accents) ;
 * les signes de danger de l'enfant suivent la PCIME. Rédigé par Claude, À VALIDER par le Dr Mingalu.
 */

const sansAccents = (s) =>
  String(s || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase();

/** Signes de danger : revenir immédiatement (PCIME pour l'enfant de moins de 5 ans). */
const DANGER_ENFANT = [
  ['🍼', 'Ne peut plus boire ni téter'],
  ['🤮', 'Vomit tout ce qu’il prend'],
  ['⚡', 'Convulsions'],
  ['😴', 'Difficile à réveiller, très mou'],
  ['🫁', 'Respire vite ou difficilement'],
  ['🌡️', 'Fièvre qui persiste après 2 jours de traitement'],
];
const DANGER_ADULTE = [
  ['🌡️', 'Fièvre qui persiste après 48 à 72 h de traitement'],
  ['🫁', 'Essoufflement ou douleur dans la poitrine'],
  ['😵', 'Confusion, somnolence inhabituelle, convulsions'],
  ['🩸', 'Saignement inhabituel'],
  ['🤮', 'Vomissements empêchant de prendre les médicaments'],
];

/** Règles par famille de fiches : motif sur le nom, conseils, consignes de retour, réévaluation. */
const REGLES = [
  {
    motif: /paludisme|neuropaludisme/,
    conseils: [
      ['💊', 'Prendre tout le traitement, même si la fièvre baisse'],
      ['🛏️', 'Dormir sous moustiquaire imprégnée, toute la famille'],
      ['💧', 'Boire beaucoup ; baisser la fièvre (paracétamol, linge mouillé)'],
    ],
    revenir: [['🟡', 'Yeux jaunes ou urines foncées']],
    reevaluation: 'Revoir au 3e jour si la fièvre persiste (contrôle par TDR ou goutte épaisse).',
  },
  {
    motif: /diarrhee|cholera|dysenterie|shigell|deshydrat/,
    conseils: [
      ['💧', 'SRO après chaque selle ; continuer à boire et à allaiter'],
      ['💊', 'Zinc pendant 10 jours chez l’enfant'],
      ['🍲', 'Continuer à manger, par petits repas'],
      ['🧼', 'Se laver les mains au savon ; eau bouillie ou chlorée'],
    ],
    revenir: [
      ['🩸', 'Sang dans les selles'],
      ['🥵', 'Soif intense, yeux creux, ne urine plus'],
    ],
    reevaluation:
      'Revoir dans 5 jours si la diarrhée persiste (chez l’enfant : contrôle en 2 jours si sang dans les selles).',
  },
  {
    motif: /pneumon|toux|bronch|grippe|covid/,
    conseils: [
      ['💊', 'Prendre l’antibiotique jusqu’au bout, aux heures prévues'],
      ['💧', 'Boire souvent ; dégager le nez (sérum physiologique)'],
      ['🔥', 'Éviter la fumée (tabac, feu de bois dans la maison)'],
    ],
    revenir: [['🫁', 'Tirage sous les côtes, lèvres bleues']],
    reevaluation: 'Revoir dans 2 à 3 jours (réévaluation de l’antibiotique).',
  },
  {
    motif: /tuberculose/,
    conseils: [
      ['💊', 'Prendre le traitement chaque jour, sans interruption, pendant toute la durée prévue'],
      ['😷', 'Tousser dans le coude ; aérer la maison'],
      ['👨‍👩‍👧', 'Faire dépister les personnes vivant sous le même toit'],
      ['🩺', 'Faire le test VIH'],
    ],
    revenir: [['🟡', 'Yeux jaunes, vomissements, éruption (effets du traitement)']],
    reevaluation: 'Contrôle des crachats selon le programme (PNLT) ; revoir chaque mois.',
  },
  {
    motif: /vih/,
    conseils: [
      ['💊', 'Prendre les ARV chaque jour à la même heure, à vie'],
      ['🛡️', 'Préservatif ; dépister le ou la partenaire et les enfants'],
      ['🍲', 'Bien manger ; signaler toute toux ou fièvre'],
    ],
    revenir: [],
    reevaluation: 'Revoir dans 2 à 4 semaines au début, puis selon le programme (charge virale).',
  },
  {
    motif: /(^|[^a-z])ist([^a-z]|$)|sexuellement|syphilis|uretr|cervicite|genitales basses|genitale haute/,
    conseils: [
      ['💊', 'Prendre tout le traitement'],
      ['👥', 'Traiter aussi le ou les partenaires'],
      ['🛡️', 'Préservatif ; pas de rapports avant la fin du traitement'],
      ['🩺', 'Faire le test VIH et la syphilis'],
    ],
    revenir: [['🌡️', 'Fièvre ou douleur du bas-ventre']],
    reevaluation: 'Revoir dans 7 jours si les signes persistent.',
  },
  {
    motif: /hypertension|(^|[^a-z])hta([^a-z]|$)/,
    conseils: [
      ['🧂', 'Moins de sel ; moins d’alcool ; arrêter le tabac'],
      ['🚶', 'Marcher 30 minutes par jour ; perdre du poids si besoin'],
      ['💊', 'Prendre le traitement tous les jours, même sans symptôme'],
    ],
    revenir: [['🧠', 'Mal de tête violent, trouble de la vue, faiblesse d’un côté du corps']],
    reevaluation: 'Revoir dans 2 à 4 semaines pour contrôler la tension.',
  },
  {
    motif: /diabete|hypoglyc|acidocet/,
    conseils: [
      ['🍚', 'Repas réguliers, moins de sucre et de boissons sucrées'],
      ['🦶', 'Regarder ses pieds chaque jour'],
      ['🍬', 'Toujours avoir du sucre sur soi (hypoglycémie)'],
    ],
    revenir: [
      ['💧', 'Soif intense, urines abondantes, vomissements'],
      ['😵', 'Sueurs, tremblements, malaise (hypoglycémie)'],
    ],
    reevaluation: 'Revoir dans 2 à 4 semaines (glycémies notées).',
  },
  {
    motif: /malnutrition|kwashiorkor|marasme/,
    conseils: [
      ['🥜', 'Donner l’ATPE selon la quantité prescrite, avant les autres repas'],
      ['🤱', 'Continuer l’allaitement'],
      ['💧', 'Eau potable à volonté avec l’ATPE'],
    ],
    revenir: [['🦶', 'Gonflement des pieds ou du visage, refus de l’ATPE']],
    reevaluation: 'Revoir chaque semaine (poids, périmètre brachial).',
  },
  {
    motif: /grossesse|gravid|eclampsie|placenta|accouchement|post-partum|puerper/,
    conseils: [
      ['🤰', 'Suivre les consultations prénatales ; moustiquaire imprégnée'],
      ['💊', 'Fer et acide folique selon la prescription'],
    ],
    revenir: [
      ['🩸', 'Saignement vaginal'],
      ['🧠', 'Mal de tête violent, trouble de la vue, convulsions'],
      ['👶', 'Le bébé bouge moins ; perte de liquide'],
      ['🌡️', 'Fièvre ou pertes malodorantes'],
    ],
    reevaluation: 'Revoir selon le terme et la gravité ; au plus tard à la prochaine consultation prénatale.',
  },
  {
    motif: /plaie|morsure|brulure|abces|cellulite|erysipele|pyodermite|impetigo/,
    conseils: [
      ['🧼', 'Garder la plaie propre et sèche ; changer le pansement'],
      ['💉', 'Vérifier la vaccination antitétanique'],
    ],
    revenir: [['🔴', 'Rougeur qui s’étend, pus, fièvre']],
    reevaluation: 'Revoir dans 48 h pour le pansement.',
  },
  {
    motif: /urinaire|pyelonephr|cystite/,
    conseils: [
      ['💧', 'Boire beaucoup d’eau'],
      ['💊', 'Prendre tout le traitement'],
    ],
    revenir: [['🌡️', 'Fièvre, frissons, douleur du dos']],
    reevaluation: 'Revoir dans 48 à 72 h si les signes persistent.',
  },
  {
    motif: /anemie|drepanocyt/,
    conseils: [
      ['🥩', 'Aliments riches en fer (haricots, feuilles vertes, viande, poisson)'],
      ['💧', 'Boire beaucoup ; éviter le froid et l’effort intense (drépanocytose)'],
      ['🛏️', 'Moustiquaire imprégnée'],
    ],
    revenir: [['😮‍💨', 'Essoufflement, grande fatigue, douleur intense']],
    reevaluation: 'Revoir dans 2 à 4 semaines (hémoglobine).',
  },
];

/**
 * Conseils, consignes de retour et réévaluation pour une fiche et un patient.
 * Renvoie { conseils: [[picto, texte]], revenir: [[picto, texte]], reevaluation }.
 */
export function conseilsPatient(fiche, cas = {}) {
  const nom = sansAccents(fiche?.nom);
  const mois =
    cas.ageValeur && cas.ageUnite
      ? Number(String(cas.ageValeur).replace(',', '.')) * { jours: 1 / 30, mois: 1, ans: 12 }[cas.ageUnite]
      : null;
  const petitEnfant = mois !== null && !Number.isNaN(mois) ? mois < 60 : ['nn', 'petit'].includes(cas.age);
  const regles = REGLES.filter((r) => r.motif.test(nom));
  const dedoublonner = (liste) => liste.filter(([, t], i) => liste.findIndex(([, u]) => u === t) === i);
  return {
    conseils: dedoublonner(regles.flatMap((r) => r.conseils)),
    revenir: dedoublonner([
      ...(petitEnfant ? DANGER_ENFANT : DANGER_ADULTE),
      ...regles.flatMap((r) => r.revenir),
    ]),
    reevaluation:
      regles[0]?.reevaluation ||
      (fiche?.urgence
        ? 'Surveillance rapprochée : réévaluer dans les heures qui suivent.'
        : 'Revoir dans 48 à 72 h si les signes ne s’améliorent pas.'),
  };
}
