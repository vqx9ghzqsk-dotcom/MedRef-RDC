/**
 * Parcours guidés officiels : PCIME (enfant de 2 mois à 5 ans), PCIMA (malnutrition aiguë) et
 * saignement pendant la grossesse. Questions oui/non, classification par couleur (rouge :
 * urgence/référence, jaune : traitement spécifique, vert : soins à domicile) et conduite.
 * Repris des tableaux PCIME de l'OMS et du protocole PCIMA (PRONANUT) ; À VALIDER par le Dr Mingalu.
 * Chaque question peut cocher un signe de l'examen (`signe`) pour nourrir la démarche.
 */

const oui = (r, id) => r[id] === true;
const compte = (r, ids) => ids.filter((id) => oui(r, id)).length;

export const PARCOURS = [
  {
    id: 'pcime',
    nom: 'PCIME : enfant de 2 mois à 5 ans',
    public: (p) => p.mois !== null && p.mois >= 2 && p.mois < 60,
    groupes: [
      {
        titre: 'Signes généraux de danger',
        questions: [
          { id: 'boire', libelle: 'Incapable de boire ou de téter', signe: 'Refus de téter' },
          { id: 'vomit', libelle: 'Vomit tout ce qu’il consomme', signe: 'Vomissements' },
          {
            id: 'convulse',
            libelle: 'A convulsé pendant cette maladie ou convulse maintenant',
            signe: 'Convulsions',
          },
          { id: 'lethargie', libelle: 'Léthargique ou inconscient', signe: 'Troubles de la conscience' },
        ],
      },
      {
        titre: 'Toux ou difficulté respiratoire',
        questions: [
          { id: 'toux', libelle: 'Toux ou difficulté à respirer', signe: 'Toux' },
          {
            id: 'rapide',
            libelle: 'Respiration rapide (≥ 50/min de 2 à 11 mois, ≥ 40/min de 1 à 5 ans)',
            signe: 'Tachypnée',
            si: 'toux',
          },
          { id: 'tirage', libelle: 'Tirage sous-costal ou stridor chez un enfant calme', si: 'toux' },
        ],
      },
      {
        titre: 'Diarrhée',
        questions: [
          { id: 'diarrhee', libelle: 'Diarrhée', signe: 'Diarrhée' },
          { id: 'sang', libelle: 'Sang dans les selles', signe: 'Diarrhée sanglante', si: 'diarrhee' },
          { id: 'quatorze', libelle: 'Depuis 14 jours ou plus', si: 'diarrhee' },
          { id: 'yeux', libelle: 'Yeux enfoncés', si: 'diarrhee' },
          {
            id: 'pliTresLent',
            libelle: 'Pli cutané persistant très lentement (plus de 2 s)',
            si: 'diarrhee',
          },
          { id: 'pliLent', libelle: 'Pli cutané persistant lentement', si: 'diarrhee' },
          { id: 'agite', libelle: 'Agité, irritable', signe: 'Irritabilité', si: 'diarrhee' },
          { id: 'avide', libelle: 'Boit avidement, assoiffé', si: 'diarrhee' },
        ],
      },
      {
        titre: 'Fièvre (zone de paludisme)',
        questions: [
          { id: 'fievre', libelle: 'Fièvre (antécédent, chaud au toucher ou ≥ 37,5 °C)', signe: 'Fièvre' },
          { id: 'nuque', libelle: 'Raideur de nuque', signe: 'Raideur de nuque', si: 'fievre' },
          { id: 'tdr', libelle: 'TDR paludisme positif', si: 'fievre' },
          { id: 'tdrFait', libelle: 'TDR fait', si: 'fievre' },
        ],
      },
      {
        titre: 'Malnutrition',
        questions: [
          { id: 'oedemes', libelle: 'Œdèmes prenant le godet des deux pieds', signe: 'Œdèmes' },
          { id: 'pbRouge', libelle: 'Périmètre brachial < 115 mm (6-59 mois)' },
          { id: 'pbJaune', libelle: 'Périmètre brachial de 115 à 124 mm' },
        ],
      },
    ],
    classer(r) {
      const c = [];
      const danger = compte(r, ['boire', 'vomit', 'convulse', 'lethargie']) > 0;
      if (danger) {
        c.push({
          couleur: 'rouge',
          titre: 'Signe général de danger',
          actions: [
            'Traitement pré-référence urgent (selon la classification)',
            'Référer d’urgence à l’hôpital',
          ],
        });
      }
      if (oui(r, 'toux')) {
        if (oui(r, 'tirage') || danger) {
          c.push({
            couleur: 'rouge',
            titre: 'Pneumonie grave ou maladie très grave',
            actions: [
              'Première dose d’antibiotique (ampicilline + gentamicine ou ceftriaxone)',
              'Oxygène si disponible',
              'Référer d’urgence',
            ],
            fiche: 'pneumonie-enfant',
          });
        } else if (oui(r, 'rapide')) {
          c.push({
            couleur: 'jaune',
            titre: 'Pneumonie',
            actions: [
              'Amoxicilline orale 5 jours (40 mg/kg 2 fois par jour)',
              'Soulager la toux',
              'Revoir dans 3 jours',
            ],
            fiche: 'pneumonie-enfant',
          });
        } else {
          c.push({
            couleur: 'vert',
            titre: 'Toux ou rhume, pas de pneumonie',
            actions: [
              'Soulager la toux par un remède inoffensif',
              'Revenir si la respiration devient rapide ou difficile',
              'Revoir dans 5 jours si pas d’amélioration',
            ],
          });
        }
      }
      if (oui(r, 'diarrhee')) {
        const severe = compte(r, ['lethargie', 'yeux', 'boire', 'pliTresLent']) >= 2;
        const evidente = compte(r, ['agite', 'yeux', 'avide', 'pliLent']) >= 2;
        if (severe) {
          c.push({
            couleur: 'rouge',
            titre: 'Déshydratation sévère',
            actions: [
              'Plan C : réhydratation intraveineuse rapide (Ringer lactate)',
              'Si impossible : SRO par sonde et référer',
            ],
            fiche: 'deshydratation-severe-enfant',
          });
        } else if (evidente) {
          c.push({
            couleur: 'jaune',
            titre: 'Signes évidents de déshydratation',
            actions: [
              'Plan B : SRO 75 mL/kg en 4 heures au centre',
              'Zinc 10 jours',
              'Réévaluer après 4 heures',
            ],
            fiche: 'diarrhee-aigue-enfant',
          });
        } else {
          c.push({
            couleur: 'vert',
            titre: 'Pas de déshydratation',
            actions: [
              'Plan A : SRO et liquides à domicile, zinc 10 jours',
              'Continuer l’alimentation',
              'Revoir dans 5 jours si pas d’amélioration',
            ],
            fiche: 'diarrhee-aigue-enfant',
          });
        }
        if (oui(r, 'quatorze')) {
          c.push({
            couleur: severe || evidente ? 'rouge' : 'jaune',
            titre: severe || evidente ? 'Diarrhée persistante sévère' : 'Diarrhée persistante',
            actions:
              severe || evidente
                ? ['Traiter la déshydratation puis référer']
                : ['Conseils d’alimentation, vitamine A, zinc', 'Revoir dans 5 jours'],
            fiche: 'diarrhee-persistante-enfant',
          });
        }
        if (oui(r, 'sang')) {
          c.push({
            couleur: 'jaune',
            titre: 'Dysenterie',
            actions: ['Ciprofloxacine 3 jours (15 mg/kg 2 fois par jour)', 'Revoir dans 2 jours'],
            fiche: 'dysenterie-enfant',
          });
        }
      }
      if (oui(r, 'fievre')) {
        if (danger || oui(r, 'nuque')) {
          c.push({
            couleur: 'rouge',
            titre: 'Maladie fébrile très grave',
            actions: [
              'Artésunate (IM ou rectal) et première dose d’antibiotique',
              'Prévenir l’hypoglycémie',
              'Paracétamol si ≥ 38,5 °C',
              'Référer d’urgence',
            ],
            fiche: 'paludisme-grave-enfant',
          });
        } else if (oui(r, 'tdr')) {
          c.push({
            couleur: 'jaune',
            titre: 'Paludisme',
            actions: [
              'Combinaison à base d’artémisinine (ex. artéméther-luméfantrine) 3 jours',
              'Paracétamol si fièvre',
              'Revoir dans 3 jours si la fièvre persiste',
            ],
            fiche: 'paludisme-simple-enfant',
          });
        } else if (oui(r, 'tdrFait')) {
          c.push({
            couleur: 'vert',
            titre: 'Fièvre sans paludisme',
            actions: [
              'Rechercher une autre cause (otite, angine, infection urinaire…)',
              'Revoir dans 2 jours si la fièvre persiste',
            ],
          });
        } else {
          c.push({
            couleur: 'jaune',
            titre: 'Fièvre : faire le TDR paludisme',
            actions: ['TDR avant tout antipaludique'],
          });
        }
      }
      if (oui(r, 'oedemes') || oui(r, 'pbRouge')) {
        c.push({
          couleur: danger ? 'rouge' : 'jaune',
          titre: danger ? 'Malnutrition aiguë sévère compliquée' : 'Malnutrition aiguë sévère',
          actions: danger
            ? ['Hospitalisation (UNTI) : F-75, prévention de l’hypoglycémie et de l’hypothermie']
            : ['Test d’appétit ; si réussi : ATPE en ambulatoire (UNTA)', 'Amoxicilline 7 jours'],
          fiche: 'malnutrition-aigue-severe',
        });
      } else if (oui(r, 'pbJaune')) {
        c.push({
          couleur: 'jaune',
          titre: 'Malnutrition aiguë modérée',
          actions: ['Supplémentation (UNS)', 'Conseils d’alimentation', 'Revoir dans 30 jours'],
          fiche: 'malnutrition-aigue-moderee',
        });
      }
      return c;
    },
  },
  {
    id: 'pcima',
    nom: 'PCIMA : malnutrition aiguë',
    public: (p) => p.mois === null || p.mois >= 6,
    groupes: [
      {
        titre: 'Critères anthropométriques et œdèmes',
        questions: [
          { id: 'oedemes', libelle: 'Œdèmes bilatéraux prenant le godet', signe: 'Œdèmes' },
          { id: 'severe', libelle: 'PB < 115 mm (6-59 mois) ou poids/taille < −3 z-score' },
          { id: 'moderee', libelle: 'PB de 115 à 124 mm ou poids/taille de −3 à −2 z-score' },
        ],
      },
      {
        titre: 'Complications',
        questions: [
          { id: 'appetit', libelle: 'Test d’appétit à l’ATPE échoué', signe: 'Anorexie' },
          {
            id: 'complication',
            libelle:
              'Complication médicale (fièvre élevée, hypothermie, déshydratation, détresse, léthargie)',
          },
          { id: 'oedemesSeveres', libelle: 'Œdèmes généralisés (+++) ou marasme-kwashiorkor' },
        ],
      },
    ],
    classer(r) {
      if (oui(r, 'oedemes') || oui(r, 'severe')) {
        const complique = compte(r, ['appetit', 'complication', 'oedemesSeveres']) > 0;
        return [
          complique
            ? {
                couleur: 'rouge',
                titre: 'Malnutrition aiguë sévère avec complications',
                actions: [
                  'Unité nutritionnelle thérapeutique intensive (hospitalisation)',
                  'Lait F-75, prévenir hypoglycémie et hypothermie',
                  'Antibiotique systématique ; pas de perfusion sauf choc',
                ],
                fiche: 'malnutrition-aigue-severe',
              }
            : {
                couleur: 'jaune',
                titre: 'Malnutrition aiguë sévère sans complication',
                actions: [
                  'UNTA : ATPE selon le poids, suivi hebdomadaire',
                  'Amoxicilline 7 jours, déparasitage, vaccination rougeole',
                ],
                fiche: 'malnutrition-aigue-severe',
              },
        ];
      }
      if (oui(r, 'moderee')) {
        return [
          {
            couleur: 'jaune',
            titre: 'Malnutrition aiguë modérée',
            actions: [
              'Unité nutritionnelle de supplémentation (aliment de supplémentation prêt à l’emploi)',
              'Suivi toutes les 2 semaines',
            ],
            fiche: 'malnutrition-aigue-moderee',
          },
        ];
      }
      return [
        {
          couleur: 'vert',
          titre: 'Pas de malnutrition aiguë',
          actions: ['Conseils nutritionnels, suivi de la croissance'],
        },
      ];
    },
  },
  {
    id: 'saignement-grossesse',
    nom: 'Saignement pendant la grossesse',
    public: (p) => p.enceinte,
    groupes: [
      {
        titre: 'Gravité',
        questions: [
          {
            id: 'choc',
            libelle: 'Signes de choc (pouls rapide et faible, PAS < 90, pâleur, sueurs, confusion)',
            signe: 'Hypotension',
          },
          { id: 'abondant', libelle: 'Saignement abondant', signe: 'Saignement vaginal' },
        ],
      },
      {
        titre: 'Terme et caractéristiques',
        questions: [
          { id: 'avant22', libelle: 'Grossesse de moins de 22 semaines' },
          { id: 'douleur', libelle: 'Douleur abdominale ou pelvienne', signe: 'Douleur abdominale' },
          { id: 'colOuvert', libelle: 'Col ouvert ou débris ovulaires', si: 'avant22' },
          { id: 'uterusDur', libelle: 'Utérus dur, douloureux en permanence (« de bois »)' },
        ],
      },
    ],
    classer(r) {
      const c = [];
      if (oui(r, 'choc')) {
        c.push({
          couleur: 'rouge',
          titre: 'Choc hémorragique',
          actions: [
            'Deux voies veineuses, remplissage, groupage et sang',
            'Oxygène, position, surveillance',
            'Référer ou opérer en urgence',
          ],
          fiche: 'choc-hemorragique-obstetrical',
        });
      }
      if (oui(r, 'avant22')) {
        if (oui(r, 'colOuvert')) {
          c.push({
            couleur: oui(r, 'abondant') ? 'rouge' : 'jaune',
            titre: 'Avortement en cours ou incomplet',
            actions: ['Évacuation utérine (AMIU ou misoprostol)', 'Antibiotique si signes d’infection'],
            fiche: 'avortement-incomplet-soins-apres-avortement',
          });
        } else if (oui(r, 'douleur')) {
          c.push({
            couleur: 'rouge',
            titre: 'Grossesse extra-utérine à éliminer',
            actions: ['β-hCG et échographie ; pas d’attente si choc', 'Laparotomie en urgence si rupture'],
            fiche: 'grossesse-extra-uterine',
          });
        } else {
          c.push({
            couleur: 'jaune',
            titre: 'Menace d’avortement',
            actions: ['Échographie, repos relatif', 'Revenir si saignement abondant ou douleur'],
            fiche: 'saignements-premier-trimestre',
          });
        }
      } else if (oui(r, 'uterusDur') || oui(r, 'douleur')) {
        c.push({
          couleur: 'rouge',
          titre: 'Hématome rétroplacentaire probable',
          actions: [
            'Pas de toucher vaginal avant échographie',
            'Bilan de coagulation, sang',
            'Évacuation utérine en urgence',
          ],
          fiche: 'hematome-retroplacentaire',
        });
      } else {
        c.push({
          couleur: 'rouge',
          titre: 'Placenta prævia probable (saignement indolore)',
          actions: [
            'Pas de toucher vaginal',
            'Échographie, voie veineuse, groupage',
            'Référer vers un hôpital avec bloc opératoire',
          ],
          fiche: 'placenta-praevia',
        });
      }
      return c;
    },
  },
];

/** Profil pour savoir quels parcours proposer. */
export function profilParcours(cas, mois) {
  return {
    mois: mois === undefined ? null : mois,
    enceinte: cas.grossesse === true && cas.periode !== 'post-partum',
  };
}

/** Questions visibles d'un parcours (celles qui dépendent d'une autre réponse n'apparaissent qu'après un « oui »). */
export function questionsVisibles(def, reponses = {}) {
  return def.groupes
    .map((g) => ({ ...g, questions: g.questions.filter((q) => !q.si || reponses[q.si] === true) }))
    .filter((g) => g.questions.length);
}

/** Signes à reporter dans l'examen : { nom du signe: 'present' | 'absent' } d'après les réponses. */
export function signesDuParcours(def, reponses = {}) {
  const signes = {};
  for (const q of def.groupes.flatMap((g) => g.questions)) {
    if (!q.signe || reponses[q.id] === undefined) continue;
    if (reponses[q.id] === true) signes[q.signe] = 'present';
    else if (!signes[q.signe]) signes[q.signe] = 'absent';
  }
  return signes;
}
