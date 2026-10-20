'use strict';

/**
 * Molécules du répertoire fourni par le Dr Mingalu (19 octobre 2026) — partie D :
 * gynécologie-obstétrique, oncologie, anesthésie-réanimation, hémostase. À valider.
 */
const PROGESTATIF = {
  groupe: 'Gynécologie-obstétrique',
  contre_indications:
    'Méningiome ou antécédent de méningiome, accident thromboembolique évolutif, cancer hormonodépendant, insuffisance hépatique sévère, grossesse.',
  effets_indesirables:
    'Saignements irréguliers, prise de poids, mastodynies, céphalées ; méningiome (risque lié à la dose et à la durée).',
  precautions:
    'Durée et dose minimales ; IRM cérébrale en cas de traitement prolongé ou de symptôme neurologique (alerte ANSM sur le risque de méningiome).',
};

module.exports = [
  {
    dci: 'Nomégestrol',
    slug: 'nomegestrol',
    classe: 'Progestatifs (norprégnanes)',
    ...PROGESTATIF,
    mecanisme: 'Progestatif de synthèse (acétate de nomégestrol), antigonadotrope à forte dose.',
    indications:
      'Troubles du cycle et ménorragies fonctionnelles, insuffisance lutéale, endométriose, mastopathies (selon l’AMM).',
    posologie: '5 mg/j, 10 à 20 jours par cycle selon l’indication.',
  },
  {
    dci: 'Chlormadinone',
    slug: 'chlormadinone',
    classe: 'Progestatifs (prégnanes)',
    ...PROGESTATIF,
    mecanisme: 'Progestatif de synthèse (acétate de chlormadinone), antigonadotrope et anti-androgénique.',
    indications: 'Troubles du cycle, ménorragies fonctionnelles, endométriose, mastopathies (selon l’AMM).',
    posologie: '5 à 10 mg/j, 10 à 20 jours par cycle selon l’indication.',
  },
  {
    dci: 'Sulprostone',
    slug: 'sulprostone',
    classe: 'Prostaglandines (analogue de la PGE2)',
    groupe: 'Gynécologie-obstétrique',
    mecanisme: 'Analogue de la prostaglandine E2 : puissante contraction du myomètre.',
    indications:
      'Hémorragie du post-partum par atonie utérine résistante à l’ocytocine (selon le protocole) ; interruption médicale de grossesse au 2e trimestre.',
    posologie:
      'Hémorragie du post-partum : 500 µg en perfusion IV à la seringue électrique sur 1 h (100 à 500 µg/h), maximum 1 500 µg en 24 h ; jamais en injection directe ni intramyométriale.',
    contre_indications:
      'Asthme, cardiopathie, antécédent coronarien, HTA sévère, insuffisance hépatique ou rénale sévère, antécédent thromboembolique.',
    effets_indesirables:
      'Hyperthermie, frissons, douleurs abdominales, nausées, vomissements, diarrhée ; spasme coronarien, troubles du rythme.',
    precautions:
      'Surveillance cardiovasculaire continue ; l’OMS recommande d’abord ocytocine, acide tranexamique et massage utérin, puis misoprostol ou ergométrine selon le protocole.',
  },
  {
    dci: 'Atosiban',
    slug: 'atosiban',
    classe: 'Antagonistes de l’ocytocine',
    groupe: 'Gynécologie-obstétrique',
    mecanisme: 'Antagoniste compétitif des récepteurs de l’ocytocine : diminue les contractions utérines.',
    indications:
      'Menace d’accouchement prématuré entre 24 et 33 SA révolues, pour permettre la corticothérapie anténatale ou le transfert.',
    posologie:
      'Bolus IV de 6,75 mg en 1 min, puis perfusion de 18 mg/h pendant 3 h, puis 6 mg/h ; durée totale de 48 h au plus.',
    contre_indications:
      'Moins de 24 SA ou plus de 33 SA, rupture des membranes après 30 SA, hémorragie, chorioamniotite, mort fœtale, placenta praevia, souffrance fœtale.',
    effets_indesirables:
      'Nausées, céphalées, vertiges, tachycardie, hypotension, réaction au point d’injection.',
    precautions:
      'Tocolyse limitée à 48 h ; la nifédipine est l’alternative de référence de l’OMS là où l’atosiban n’est pas disponible.',
  },
  {
    dci: 'Melphalan',
    slug: 'melphalan',
    classe: 'Alkylants (moutardes azotées)',
    groupe: 'Oncologie',
    mecanisme: 'Agent alkylant : liaisons croisées de l’ADN, cytotoxique.',
    indications:
      'Myélome multiple ; conditionnement des autogreffes (forte dose IV) ; certains cancers de l’ovaire.',
    posologie:
      'Myélome (per os, avec prednisone) : 0,15 à 0,25 mg/kg/j pendant 4 à 7 jours, toutes les 4 à 6 semaines ; adapter à la fonction rénale et à la numération.',
    contre_indications: 'Grossesse, allaitement, aplasie médullaire.',
    effets_indesirables:
      'Myélosuppression, nausées, vomissements, mucite, alopécie, infertilité, leucémies secondaires.',
    precautions:
      'NFS avant chaque cure ; centre spécialisé en oncohématologie ; manipulation des cytotoxiques.',
  },
  {
    dci: 'Cisatracurium',
    slug: 'cisatracurium',
    classe: 'Curares non dépolarisants',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Bloque les récepteurs nicotiniques de la plaque motrice ; élimination par voie de Hofmann.',
    indications:
      'Curarisation pour l’intubation et la chirurgie ; ventilation des patients en réanimation (SDRA sévère).',
    posologie:
      'Intubation : 0,15 mg/kg IV, entretien 0,03 mg/kg ; perfusion continue 1 à 3 µg/kg/min en réanimation.',
    contre_indications: 'Hypersensibilité ; absence de moyens de ventilation et de monitorage.',
    effets_indesirables: 'Bradycardie, hypotension rares ; peu d’histaminolibération.',
    precautions:
      'Élimination indépendante du rein et du foie ; monitorage de la curarisation ; décurarisation par néostigmine et atropine.',
  },
  {
    dci: 'Dobutamine',
    slug: 'dobutamine',
    classe: 'Inotropes (catécholamines β1)',
    groupe: 'Anesthésie et réanimation',
    mecanisme: 'Agoniste β1 surtout : augmente la contractilité et le débit cardiaque.',
    indications: 'Choc cardiogénique et bas débit cardiaque, après correction de l’hypovolémie.',
    posologie: '2,5 à 20 µg/kg/min IV à la seringue électrique, à adapter à la réponse hémodynamique.',
    contre_indications: 'Cardiomyopathie obstructive, hypovolémie non corrigée.',
    effets_indesirables: 'Tachycardie, arythmies, hypotension (vasodilatation), ischémie myocardique.',
    precautions: 'ECG continu et pression artérielle ; association à la noradrénaline si hypotension.',
  },
  {
    dci: 'Tinzaparine',
    slug: 'tinzaparine',
    classe: 'Héparines de bas poids moléculaire',
    groupe: 'Hémostase',
    mecanisme: 'Potentialise l’antithrombine : inhibition surtout du facteur Xa.',
    indications:
      'Prévention et traitement de la maladie thromboembolique veineuse (dont la thrombose associée au cancer).',
    posologie:
      'Prévention : 3 500 UI (risque modéré) à 4 500 UI (risque élevé) SC une fois par jour ; traitement : 175 UI/kg SC une fois par jour.',
    contre_indications:
      'Antécédent de thrombopénie induite par l’héparine, hémorragie active, endocardite infectieuse aiguë, insuffisance rénale sévère (traitement curatif).',
    effets_indesirables:
      'Hémorragies, hématomes au point d’injection, thrombopénie induite par l’héparine, hyperkaliémie.',
    precautions:
      'Plaquettes avant et pendant le traitement ; fonction rénale ; anti-Xa si poids extrême ou insuffisance rénale.',
  },
];
