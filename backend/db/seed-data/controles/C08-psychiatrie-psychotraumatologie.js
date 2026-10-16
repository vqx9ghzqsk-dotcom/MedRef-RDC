'use strict';

/**
 * Contrôle de conformité — lot C08 : psychiatrie, psychotraumatologie et urgences
 * neuropsychiatriques (33 fiches).
 */

const MHGAP = 'OMS — mhGAP Intervention Guide 2.0 (2016) et lignes directrices mhGAP (mise à jour 2023)';
const OMS_STRESS = 'OMS — Guidelines for the management of conditions specifically related to stress (2013)';

module.exports = {
  lot: 'C08',
  date: '2026-10-16',
  titre: 'Psychiatrie, psychotraumatologie et urgences neuropsychiatriques',
  fiches: [
    {
      slug: 'depression',
      protocoles: [MHGAP, 'NICE — Depression in adults: treatment and management (NG222, 2022)'],
      verifie:
        'Critères (2 semaines), PHQ-9, risque suicidaire, antécédent maniaque, cause organique ; interventions psychosociales pour tous ; fluoxétine 20–60 mg, sertraline 50 mg, amitriptyline 75–150 mg (toxicité en surdosage) ; 9 à 12 mois après rémission ; grossesse : sertraline ; pas d’antidépresseur avant 12 ans, fluoxétine chez l’adolescent.',
    },
    {
      slug: 'dysfonctions-sexuelles',
      protocoles: [
        'EAU — Guidelines on sexual and reproductive health (2024)',
        'AUA — Erectile dysfunction guideline (2018)',
      ],
      verifie:
        'Entretien confidentiel, facteurs de risque cardiovasculaire (trouble de l’érection = marqueur), médicaments, hypogonadisme ; sildénafil 50 mg ou tadalafil 10–20 mg, contre-indiqués avec les dérivés nitrés ; éjaculation précoce ; dyspareunie ; mise en garde contre les aphrodisiaques non contrôlés.',
    },
    {
      slug: 'etat-de-stress-post-traumatique',
      protocoles: [OMS_STRESS, 'NICE — Post-traumatic stress disorder (NG116, 2018)'],
      verifie:
        'Reviviscences, évitement, hyperactivation au-delà d’un mois ; premiers secours psychologiques sans débriefing ni benzodiazépines ; TCC centrée sur le trauma ou EMDR, y compris par des intervenants formés ; ISRS si psychothérapie indisponible ou dépression associée.',
    },
    {
      slug: 'expressions-culturelles-de-la-detresse',
      protocoles: [MHGAP, 'DSM-5-TR — Entretien de formulation culturelle'],
      verifie:
        'Modèle explicatif, distinction croyance partagée / idée délirante et transe rituelle / dissociation subie ; recherche systématique d’une maladie (épilepsie, psychose, dépression, neuropaludisme, VIH, trypanosomiase) ; protection des enfants accusés de sorcellerie et des personnes enchaînées ; collaboration avec tradipraticiens et responsables religieux.',
    },
    {
      slug: 'insomnie',
      protocoles: [
        'ESRS — European guideline for the diagnosis and treatment of insomnia (2023)',
        'AASM — Pharmacologic treatment of chronic insomnia in adults (2017)',
      ],
      verifie:
        'Agenda du sommeil, causes (dépression, apnées, jambes sans repos, efavirenz) ; hygiène du sommeil ; TCC de l’insomnie en première ligne ; hypnotique bref (zopiclone ≤ 2–4 semaines), mélatonine après 55 ans ; benzodiazépines et antihistaminiques évités au long cours.',
    },
    {
      slug: 'phobies',
      protocoles: ['NICE — Social anxiety disorder: recognition, assessment and treatment (CG159)', MHGAP],
      verifie:
        'Phobies spécifiques, sociale, agoraphobie ; TCC avec exposition progressive, tension appliquée de la phobie du sang ; ISRS (sertraline, paroxétine) pour la phobie sociale ; propranolol ponctuel de l’anxiété de performance ; benzodiazépines ponctuelles seulement.',
    },
    {
      slug: 'psychose-puerperale',
      protocoles: ['NICE — Antenatal and postnatal mental health (CG192)', MHGAP],
      verifie:
        'Urgence des 2 premières semaines, causes organiques (sepsis, éclampsie, paludisme, thyroïde, thrombose veineuse cérébrale) ; hospitalisation, protection mère-enfant ; halopéridol ou olanzapine ; lithium déconseillé pendant l’allaitement, valproate évité ; prévention lors des grossesses suivantes.',
    },
    {
      slug: 'risque-suicidaire',
      protocoles: [MHGAP, 'OMS — Preventing suicide: a global imperative / LIVE LIFE (2021)'],
      verifie:
        'Question directe, risque imminent (projet, moyens) ; ne pas laisser seul, retirer les moyens ; prise en charge de la tentative (atropine des organophosphorés, charbon activé < 1 h, acétylcystéine) ; évaluation avant la sortie ; ISRS plutôt que tricycliques ; plan de sécurité, petites quantités, suivi rapproché ; restriction des pesticides.',
    },
    {
      slug: 'schizophrenie',
      protocoles: [MHGAP, 'NICE — Psychosis and schizophrenia in adults (CG178)'],
      verifie:
        'Symptômes positifs, négatifs, désorganisation ; élimination des causes organiques et toxiques (cannabis, VIH, trypanosomiase, syphilis) ; halopéridol, rispéridone, olanzapine ou chlorpromazine à dose progressive ; correcteur seulement si besoin ; forme retard ; au moins 12 mois après un premier épisode ; surveillance métabolique ; respect des droits (ni chaînes ni enfermement).',
    },
    {
      slug: 'syndrome-malin-des-neuroleptiques',
      protocoles: [
        'Gurrera et al. — International expert consensus on diagnostic criteria for neuroleptic malignant syndrome (2011)',
        MHGAP,
      ],
      verifie:
        'Fièvre, rigidité, confusion, dysautonomie, CPK ; élimination de la méningite et du neuropaludisme ; arrêt des antidopaminergiques, refroidissement, hydratation, benzodiazépines, dantrolène ou bromocriptine ; réintroduction prudente après 2 semaines ; dystonie, akathisie, syndrome sérotoninergique, intoxication au lithium.',
    },
    {
      slug: 'trouble-anxieux-generalise',
      protocoles: [MHGAP, 'NICE — Generalised anxiety disorder and panic disorder in adults (CG113)'],
      verifie:
        'Inquiétudes et symptômes physiques ≥ 6 mois, causes organiques (hyperthyroïdie, anémie, sevrage) ; psychoéducation, gestion du stress, TCC ; ISRS 6 à 12 mois ; benzodiazépine < 2–4 semaines seulement ; propranolol ponctuel.',
    },
    {
      slug: 'trouble-bipolaire',
      protocoles: [MHGAP, 'NICE — Bipolar disorder: assessment and management (CG185)'],
      verifie:
        'Épisode maniaque, recherche d’antécédents maniaques avant tout antidépresseur ; causes organiques ; halopéridol, olanzapine ou rispéridone ± diazépam, arrêt des antidépresseurs ; lithium (0,6–1,0 mmol/L) avec surveillance, valproate exclu chez la femme en âge de procréer ; antidépresseur jamais seul ; psychoéducation.',
    },
    {
      slug: 'trouble-delirant-persistant',
      protocoles: [MHGAP, 'NICE — Psychosis and schizophrenia in adults (CG178)'],
      verifie:
        'Délire non bizarre systématisé > 3 mois sans désorganisation ; distinction avec les croyances culturelles partagées ; causes organiques ; risque de violence (jalousie) ; alliance sans confrontation ; rispéridone ou halopéridol à faible dose.',
    },
    {
      slug: 'trouble-obsessionnel-compulsif',
      protocoles: ['NICE — Obsessive-compulsive disorder and body dysmorphic disorder (CG31)', MHGAP],
      verifie:
        'Obsessions et compulsions > 1 h par jour, dépression et risque suicidaire ; TCC par exposition avec prévention de la réponse ; ISRS à forte dose (sertraline jusqu’à 200 mg, fluoxétine jusqu’à 60 mg), délai 8–12 semaines, 1 à 2 ans ; clomipramine en cas d’échec.',
    },
    {
      slug: 'trouble-panique',
      protocoles: ['NICE — Generalised anxiety disorder and panic disorder in adults (CG113)', MHGAP],
      verifie:
        'Attaques de panique et anxiété anticipatoire, élimination d’une cause organique (ECG, glycémie, TSH) ; respiration lente sans sac en papier ; TCC ; ISRS à dose initiale faible, 6 à 12 mois après rémission ; benzodiazépines au long cours évitées.',
    },
    {
      slug: 'troubles-de-la-personnalite',
      protocoles: [
        'NICE — Borderline personality disorder: recognition and management (CG78)',
        'Cochrane — Pharmacological interventions for people with borderline personality disorder (2022)',
      ],
      verifie:
        'Troubles durables depuis l’adolescence, risque suicidaire et de violence, comorbidités ; relation cadrée ; psychothérapies structurées (thérapie comportementale dialectique, mentalisation) ; traitement des comorbidités ; plan de sécurité, prescriptions en petites quantités.',
      corrige:
        'Le valproate était proposé contre l’impulsivité : le NICE ne recommande aucun médicament pour le trouble de personnalité lui-même (efficacité non démontrée, Cochrane 2022), et le valproate est tératogène chez la femme en âge de procréer, population la plus concernée. Seule une sédation brève reste possible en situation de crise.',
      corrections: [
        {
          principe: 'Médicaments et crises',
          champ: 'details',
          remplacer: [
            '- Symptômes ciblés et courts : antipsychotique à faible dose (rispéridone, quétiapine) en crise, régulateur de l’humeur (valproate) pour l’impulsivité ; éviter les benzodiazépines',
            '- En crise seulement : antipsychotique à faible dose (rispéridone, quétiapine) pendant quelques jours, puis arrêt ; aucun médicament n’a d’efficacité démontrée sur le trouble lui-même (NICE) ; pas de valproate (tératogène chez la femme en âge de procréer) ; éviter les benzodiazépines',
          ],
        },
        {
          molecule: 'valproate-de-sodium-acide-valproique',
          champ: 'contexte',
          remplacer: ['Impulsivité, instabilité', 'Non recommandé (efficacité non démontrée, tératogène)'],
        },
      ],
    },
    {
      slug: 'troubles-dissociatifs-et-de-conversion',
      protocoles: [
        'OMS — CIM-11 : troubles dissociatifs, dont le trouble dissociatif neurologique symptomatique (6B60)',
        MHGAP,
      ],
      verifie:
        'Signes positifs (Hoover, distribution non anatomique), examen neurologique complet sans multiplier les examens ; violences et traumatismes ; annonce d’un trouble réel, involontaire et réversible ; kinésithérapie, psychothérapie ; épidémies scolaires ; éviter injections et hospitalisations prolongées.',
    },
    {
      slug: 'troubles-du-comportement-alimentaire',
      protocoles: [
        'NICE — Eating disorders: recognition and treatment (NG69)',
        'Royal College of Psychiatrists — Medical emergencies in eating disorders (MEED, 2022)',
      ],
      verifie:
        'Anorexie, boulimie, hyperphagie ; critères de gravité (IMC < 15, bradycardie, hypokaliémie) ; élimination du VIH, de la tuberculose et de l’hyperthyroïdie ; renutrition prudente avec phosphore et thiamine (syndrome de renutrition) ; thérapie familiale, TCC ; fluoxétine 60 mg dans la boulimie.',
    },
    {
      slug: 'troubles-psychiatriques-associes-au-vih',
      protocoles: [
        MHGAP,
        'OMS — Consolidated guidelines on HIV (intégration de la santé mentale, 2021)',
      ],
      verifie:
        'Dépistage de la dépression, de l’anxiété, de l’alcool et du risque suicidaire ; causes organiques des psychoses (infections opportunistes, efavirenz, isoniazide) ; sertraline, interactions des IP ; TARV efficace et remplacement de l’efavirenz ; antipsychotiques à faible dose ; soutien psychosocial.',
    },
    {
      slug: 'troubles-psychiatriques-d-origine-organique',
      protocoles: [MHGAP, 'NICE — Delirium (CG103)'],
      verifie:
        'Signes d’alerte (début brutal après 40 ans, confusion, hallucinations visuelles, fièvre, signes neurologiques) ; bilan ciblé (glycémie, goutte épaisse, VIH, syphilis, trypanosomiase, scanner, ponction lombaire) ; traitement de la cause ; halopéridol ou rispéridone à faible dose et courte durée.',
    },
    {
      slug: 'troubles-psychiques-de-l-epilepsie',
      protocoles: [
        'Kerr et al. — International consensus clinical practice statements for the treatment of neuropsychiatric conditions associated with epilepsy (2011)',
        MHGAP,
      ],
      verifie:
        'Dépression, anxiété, psychoses post-critiques et interictales, effets des antiépileptiques ; ISRS (peu d’effet sur le seuil épileptogène) ; antipsychotiques à faible dose, chlorpromazine et clozapine évitées, interactions avec la carbamazépine ; adaptation des antiépileptiques.',
    },
    {
      slug: 'troubles-psychiques-des-maladies-chroniques',
      protocoles: [MHGAP, 'NICE — Depression in adults with a chronic physical health problem (CG91)'],
      verifie:
        'Dépistage PHQ-2/PHQ-9 et GAD-7 dans les consultations de maladies chroniques ; causes contributives ; interventions psychologiques ; sertraline (cardiopathie, AVC, VIH), mirtazapine ; tricycliques évités en cas de cardiopathie ; soins intégrés.',
    },
    {
      slug: 'troubles-psychotiques-aigus',
      protocoles: [MHGAP, 'OMS — CIM-11 : trouble psychotique aigu et transitoire (6A23)'],
      verifie:
        'Début brutal, polymorphisme ; élimination prioritaire d’une cause organique (confusion = délirium) ; désescalade, halopéridol 5 mg IM ± prométhazine en cas d’agitation ; antipsychotique à faible dose quelques semaines puis arrêt progressif ; suivi d’au moins un an.',
    },
    {
      slug: 'troubles-somatoformes',
      protocoles: [MHGAP, 'OMS — CIM-11 : trouble de détresse corporelle (6C20)'],
      verifie:
        'Plaintes multiples durables, recherche de dépression, d’anxiété, de traumatisme et de violences ; examens raisonnés ; médecin référent et consultations programmées ; gestion du stress, activation, TCC ; amitriptyline faible dose ou fluoxétine si comorbidité ; pas d’injections ni de benzodiazépines.',
    },
    {
      slug: 'deuil-complique',
      protocoles: [OMS_STRESS, 'OMS — CIM-11 : trouble du deuil prolongé (6B42)'],
      verifie:
        'Critères et durée selon les normes culturelles ; dépression, ESPT, idées suicidaires ; soutien et facilitation des rites ; psychothérapie centrée sur le deuil ; sertraline si dépression ; benzodiazépines évitées.',
    },
    {
      slug: 'traumatismes-conflits-armes',
      protocoles: [
        'IASC — Guidelines on mental health and psychosocial support in emergency settings (2007)',
        'OMS — mhGAP Humanitarian Intervention Guide (2015)',
        'OMS — Problem Management Plus (PM+)',
      ],
      verifie:
        'Pyramide d’interventions IASC ; premiers secours psychologiques, interventions brèves (PM+, Self-Help Plus) ; troubles prioritaires mhGAP ; à éviter : débriefings imposés, benzodiazépines au long cours, étiquetage de réactions normales.',
    },
    {
      slug: 'trouble-de-l-adaptation',
      protocoles: [OMS_STRESS, MHGAP],
      verifie:
        'Réaction disproportionnée dans les 3 mois suivant un stress, distinction avec la dépression et l’ESPT, risque suicidaire ; interventions brèves (résolution de problèmes, gestion du stress) ; aide pratique ; anxiolytique ou hypnotique de quelques jours seulement ; réévaluation à 4–8 semaines.',
    },
    {
      slug: 'trouble-de-stress-aigu',
      protocoles: [OMS_STRESS, 'OMS — Premiers secours psychologiques : guide pour les acteurs de terrain (2011)'],
      verifie:
        'Symptômes de 3 jours à 1 mois ; premiers secours psychologiques, pas de débriefing imposé ; soins associés (PPE VIH < 72 h, contraception d’urgence < 120 h) ; réévaluation à 2–4 semaines, TCC centrée sur le trauma si persistance ; benzodiazépines évitées.',
    },
    {
      slug: 'violences-sexuelles-prise-en-charge-psychologique',
      protocoles: [
        'OMS — Clinical management of rape and intimate partner violence survivors (2020)',
        OMS_STRESS,
      ],
      verifie:
        'Accueil confidentiel, consentement à chaque étape ; délais (PPE < 72 h, lévonorgestrel < 120 h), traitement présomptif des IST, vaccinations ; premiers secours psychologiques ; TCC centrée sur le trauma, EMDR, ISRS ; risque suicidaire et sécurité ; orientation juridique avec consentement ; enfants.',
    },
    {
      slug: 'agitation-aigue',
      protocoles: [
        MHGAP,
        'Cochrane — Haloperidol plus promethazine for psychosis-induced aggression (2016)',
        'NICE — Violence and aggression: short-term management (NG10)',
      ],
      verifie:
        'Sécurité et désescalade ; cause médicale jusqu’à preuve du contraire (glycémie, SpO2, paludisme, sevrage, traumatisme) ; voie orale d’abord ; halopéridol 5 mg IM + prométhazine 25–50 mg IM ; diazépam si sevrage ou stimulants ; doses réduites chez le sujet âgé ; contention brève et surveillée, jamais de chaînes.',
    },
    {
      slug: 'catatonie',
      protocoles: [
        'British Association for Psychopharmacology — Evidence-based consensus guidelines for the management of catatonia (2023)',
      ],
      verifie:
        'Signes catatoniques, forme maligne ; test au lorazépam 1–2 mg ; causes médicales (encéphalite, état de mal non convulsif, neuropaludisme) ; lorazépam jusqu’à 8–24 mg/j ; ECT si échec ou forme maligne ; arrêt des antipsychotiques ; hydratation, HBPM.',
    },
    {
      slug: 'intoxication-aux-psychotropes',
      protocoles: [
        'OMS — IMAI district clinician manual (intoxications)',
        'AACT/EAPCCT — Position paper on single-dose activated charcoal (2005)',
      ],
      verifie:
        'Évaluation (produits, ECG, glycémie) ; charbon activé si < 1 h et voies aériennes protégées ; tricycliques : bicarbonate 1–2 mmol/kg si QRS > 100 ms, flumazénil évité ; benzodiazépines : flumazénil seulement en intoxication pure ; lithium : hydratation, dialyse ; évaluation du risque suicidaire avant la sortie.',
    },
    {
      slug: 'syndrome-serotoninergique',
      protocoles: [
        'Critères de Hunter — Hunter serotonin toxicity criteria (2003)',
        'Revue — The serotonin syndrome (NEJM 2005)',
      ],
      verifie:
        'Critères de Hunter, gravité (hyperthermie > 40 °C) ; arrêt des sérotoninergiques, benzodiazépines, hydratation, refroidissement ; cyproheptadine 12 mg puis 2 mg toutes les 2 h ; formes graves : sédation, curarisation non dépolarisante ; antipsychotiques évités.',
    },
  ],
};
