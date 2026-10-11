'use strict';

/**
 * Lot 11 (pédiatrie générale) — otite moyenne aiguë, angine et pharyngite de l'enfant,
 * maltraitance de l'enfant, manifestations postvaccinales indésirables, toux et difficultés
 * respiratoires de l'enfant (PCIME). Rédigé par IA (OMS, PCIME, AAP, NICE) : à valider.
 */

const PED = { departement: 'pediatrie', specialite: 'Pédiatrie générale' };

module.exports = [
  // =================================================================== OMA
  {
    ...PED,
    slug: 'otite-moyenne-aigue',
    nom: 'Otite moyenne aiguë',
    resume:
      'Infection de l’oreille moyenne du jeune enfant : otalgie, fièvre, tympan bombé ; amoxicilline 5 jours (10 jours avant 2 ans), mèche sèche si écoulement ; mastoïdite = urgence.',
    definition:
      'Inflammation aiguë infectieuse de l’oreille moyenne avec épanchement rétrotympanique ; la PCIME distingue l’infection aiguë de l’oreille (écoulement < 14 jours ou douleur), l’infection chronique (écoulement ≥ 14 jours) et la mastoïdite.',
    physiopathologie:
      '## Mécanismes\n- Rhinopharyngite virale, dysfonction de la trompe d’Eustache (courte et horizontale chez l’enfant)\n- Surinfection bactérienne : pneumocoque, *Haemophilus influenzae*, *Moraxella*\n- Perforation tympanique et otorrhée',
    diagnostic:
      '## Clinique\n- **Otalgie** (nourrisson : pleurs, se frotte l’oreille, troubles du sommeil), fièvre\n- Otorrhée purulente si perforation\n- Contexte de rhinopharyngite\n\n## Otoscopie\n- Tympan **rouge et bombé**, perte des reliefs\n\n## Signes de gravité\n- **Mastoïdite** : tuméfaction douloureuse derrière l’oreille, pavillon décollé\n- Signes méningés, paralysie faciale',
    examens: [
      ['confirmation', 'otoscopie', 'Tympan bombé et inflammatoire, otorrhée.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre en zone d’endémie.'],
      ['etiologique', 'tdr-vih', 'Otorrhée chronique, otites récidivantes.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['Otite externe', 'Douleur à la traction du pavillon, conduit inflammatoire, tympan normal.'],
      ['Otite séromuqueuse', 'Épanchement sans signe inflammatoire, baisse d’audition.'],
      ['Corps étranger', 'Visible à l’otoscopie.'],
      ['Douleur dentaire ou angine', 'Otalgie réflexe.'],
    ],
    etiologies:
      '## Germes\n- *Streptococcus pneumoniae*, *Haemophilus influenzae*, *Moraxella catarrhalis*\n\n## Facteurs\n- Âge 6 mois–2 ans, crèche, fumée de tabac ou de bois, biberon couché, malnutrition, VIH',
    principes: [
      [
        'Antibiothérapie',
        'Guérir et éviter les complications.',
        '- **Amoxicilline** 80–90 mg/kg/j en 2 ou 3 prises : 5 jours (≥ 2 ans), 10 jours (< 2 ans ou otorrhée)\n- Échec à 48–72 h : amoxicilline-acide clavulanique\n- Allergie : **azithromycine** 3 jours',
      ],
      [
        'Traitement symptomatique',
        'Soulager.',
        '- **Paracétamol** ou **ibuprofène**\n- Otorrhée : **assèchement par mèche** (coton propre) 3 fois par jour ; pas de gouttes huileuses ni d’objets dans l’oreille',
      ],
      [
        'Otite chronique',
        'Assécher l’oreille.',
        '- Mèches sèches quotidiennes, gouttes de quinolone (ciprofloxacine) si disponibles\n- Rechercher une tuberculose et le VIH ; avis ORL',
      ],
      [
        'Mastoïdite',
        'Urgence.',
        '- Hospitalisation, **ceftriaxone** IV ou ampicilline + cloxacilline, avis chirurgical',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', '80–90 mg/kg/j 5 à 10 jours'],
      ['acide-clavulanique', 'deuxieme', 'Associé à l’amoxicilline en cas d’échec'],
      ['azithromycine', 'alternative', 'Allergie'],
      ['paracetamol', 'premiere', 'Douleur, fièvre'],
      ['ibuprofene', 'alternative', 'Douleur'],
      ['ceftriaxone', 'premiere', 'Mastoïdite'],
      ['ciprofloxacine', 'adjuvant', 'Gouttes : otite chronique'],
    ],
    complications: [
      {
        nom: 'Mastoïdite',
        description: 'Extension à l’os mastoïdien.',
        traitement: '- Antibiotiques IV, drainage',
        clinique: '- Tuméfaction rétro-auriculaire, pavillon décollé',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Méningite',
        fiche: 'meningite-bacterienne',
        description: 'Diffusion.',
        traitement: '- Antibiotiques IV',
        clinique: '- Raideur de nuque, convulsions',
        paraclinique: '- LCR',
      },
      {
        nom: 'Otite chronique et surdité',
        description: 'Perforation persistante.',
        traitement: '- Assèchement, chirurgie',
        clinique: '- Otorrhée, baisse d’audition',
        paraclinique: '- Otoscopie',
      },
    ],
    evolution: '## Pronostic\n- Guérison en quelques jours ; récidives fréquentes chez le nourrisson',
    urgences: ['syndrome-meninge-febrile'],
    symptomes: [
      ['Otalgie', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Otorrhée', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Vomissements', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'AAP — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
    ],
    niveaux: {
      cs: ['- Amoxicilline, paracétamol, mèche sèche', '- Mastoïdite, signe de danger, otorrhée chronique'],
      hgr: ['- Antibiotiques IV, otoscopie', '- Mastoïdite à drainer'],
      tert: ['- ORL', ''],
    },
    alertes: { 'syndrome-meninge-febrile': 'Otite avec raideur de nuque, convulsions ou somnolence' },
    formes: [
      {
        nom: 'Otite moyenne aiguë purulente',
        type: 'commune',
        description: 'Otalgie fébrile.',
        terrain: '- Nourrisson, rhinopharyngite',
        fonctionnels: '- Pleurs, se tire l’oreille',
        generaux: '- Fièvre',
        physiques: '- Tympan rouge et bombé',
        paraclinique: '',
        etiologies: '- Pneumocoque, Haemophilus',
        syndromes: ['syndrome-infectieux'],
        examens: [['otoscopie', 'Diagnostic']],
      },
      {
        nom: 'Mastoïdite aiguë',
        type: 'gravite',
        description: 'Complication osseuse.',
        terrain: '- Otite négligée',
        fonctionnels: '- Douleur intense',
        generaux: '- Fièvre élevée',
        physiques: '- Tuméfaction rétro-auriculaire, pavillon décollé',
        paraclinique: '',
        etiologies: '',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Angine
  {
    ...PED,
    slug: 'angine-pharyngite-enfant',
    nom: 'Angine et pharyngite de l’enfant',
    resume:
      'Inflammation de la gorge, virale le plus souvent ; l’angine à streptocoque A (enfant > 3 ans) doit être traitée pour prévenir le rhumatisme articulaire aigu : benzathine pénicilline ou amoxicilline 10 jours (6 jours selon certains protocoles).',
    definition:
      'Inflammation aiguë du pharynx et des amygdales ; virale dans 60 à 80 % des cas, bactérienne surtout à *Streptococcus pyogenes* (groupe A), cause du rhumatisme articulaire aigu.',
    physiopathologie:
      '## Mécanismes\n- Virus (adénovirus, EBV, entérovirus) ou streptocoque A\n- Le streptocoque A expose à des complications suppurées (phlegmon) et non suppurées (RAA, glomérulonéphrite)',
    diagnostic:
      '## Clinique\n- Mal de gorge, odynophagie, fièvre, adénopathies cervicales sensibles\n- Amygdales rouges, exsudat\n- Toux, rhinorrhée, conjonctivite : plutôt virale\n- Fausses membranes adhérentes, enfant non vacciné : **diphtérie** (urgence)\n\n## PCIME\n- Angine streptococcique : ganglions cervicaux sensibles et augmentés + exsudat blanc sur la gorge\n\n## TDR streptocoque\n- Chez l’enfant > 3 ans si disponible ; positif = antibiotique',
    examens: [
      [
        'confirmation',
        'prelevement-de-gorge',
        'TDR streptocoque A ; recherche de diphtérie si fausses membranes.',
      ],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre.'],
      ['etiologique', 'nfs', 'Mononucléose (lymphocytose atypique).'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['diphterie', 'Fausses membranes grisâtres adhérentes, cou proconsulaire, enfant non vacciné.'],
      ['Mononucléose infectieuse', 'Adolescent, fausses membranes, splénomégalie, polyadénopathie.'],
      ['Herpangine, stomatite herpétique', 'Vésicules et ulcérations.'],
      ['Phlegmon péri-amygdalien', 'Trismus, voussure du voile, luette déviée.'],
    ],
    etiologies:
      '## Germes\n- Virus (majorité)\n- *Streptococcus pyogenes* (groupe A) : 20 à 40 % chez l’enfant d’âge scolaire\n- *Corynebacterium diphtheriae* (enfants non vaccinés)',
    principes: [
      [
        'Angine streptococcique (ou suspecte selon la PCIME)',
        'Guérir et prévenir le RAA.',
        '- **Benzathine benzylpénicilline** IM dose unique : 600 000 UI (< 30 kg), 1,2 MUI (≥ 30 kg)\n- Ou **amoxicilline** 50 mg/kg/j en 2 prises 6 à 10 jours (ou **phénoxyméthylpénicilline** 10 jours)\n- Allergie : **azithromycine** 3 à 5 jours ou érythromycine 10 jours',
      ],
      [
        'Angine virale',
        'Soulager sans antibiotique.',
        '- **Paracétamol** ou ibuprofène, boissons, alimentation tiède\n- Pas d’antibiotique',
      ],
      [
        'Complications et signes de gravité',
        'Orienter.',
        '- Phlegmon : drainage, antibiotiques IV\n- Fausses membranes : prise en charge de la diphtérie (isolement, antitoxine)\n- Difficulté à respirer ou à avaler : hospitalisation',
      ],
    ],
    molecules: [
      ['benzathine-benzylpenicilline', 'premiere', 'Dose unique IM'],
      ['amoxicilline', 'premiere', '6 à 10 jours'],
      ['phenoxymethylpenicilline', 'alternative', '10 jours'],
      ['azithromycine', 'alternative', 'Allergie'],
      ['erythromycine', 'alternative', 'Allergie'],
      ['paracetamol', 'premiere', 'Douleur, fièvre'],
    ],
    complications: [
      {
        nom: 'Rhumatisme articulaire aigu',
        fiche: 'rhumatisme-articulaire-aigu-adulte',
        description: '2 à 4 semaines après une angine streptococcique non traitée.',
        traitement: '- Prophylaxie secondaire',
        clinique: '- Polyarthrite, cardite',
        paraclinique: '- ASLO',
      },
      {
        nom: 'Glomérulonéphrite aiguë',
        fiche: 'syndrome-nephrotique-adulte',
        description: 'Post-streptococcique.',
        traitement: '- Symptomatique',
        clinique: '- Œdèmes, HTA, hématurie',
        paraclinique: '- Bandelette',
      },
      {
        nom: 'Phlegmon péri-amygdalien',
        description: 'Abcès.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Trismus, voix étouffée',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison en 3 à 7 jours ; le traitement des angines streptococciques prévient le RAA',
    urgences: [],
    symptomes: [
      ['Mal de gorge', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dysphagie', 'frequent'],
      ['Adénopathies', 'frequent'],
      ['Céphalées', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Guide clinique et thérapeutique',
      'AHA — recommandations de pratique clinique',
    ],
    niveaux: {
      cs: [
        '- Classification PCIME, benzathine pénicilline ou amoxicilline, antalgiques',
        '- Fausses membranes, phlegmon, détresse',
      ],
      hgr: ['- Drainage, prise en charge de la diphtérie', ''],
      tert: ['- ORL', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Angine érythémato-pultacée streptococcique',
        type: 'commune',
        description: 'Angine fébrile avec exsudat.',
        terrain: '- Enfant de 5 à 15 ans',
        fonctionnels: '- Mal de gorge, odynophagie',
        generaux: '- Fièvre',
        physiques: '- Amygdales rouges avec exsudat, adénopathies cervicales',
        paraclinique: '- TDR positif',
        etiologies: '- Streptocoque A',
        syndromes: ['syndrome-infectieux'],
        examens: [['prelevement-de-gorge', 'TDR']],
      },
      {
        nom: 'Pharyngite virale',
        type: 'etiologique',
        description: 'Avec signes rhinologiques.',
        terrain: '- Nourrisson, petit enfant',
        fonctionnels: '- Toux, rhinorrhée',
        generaux: '- Fièvre modérée',
        physiques: '- Pharynx rouge sans exsudat',
        paraclinique: '',
        etiologies: '- Adénovirus, entérovirus',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Maltraitance
  {
    ...PED,
    slug: 'maltraitance-enfant',
    nom: 'Maltraitance de l’enfant',
    resume:
      'Violences physiques, sexuelles, psychologiques et négligences : lésions inexpliquées ou d’âges différents, retard de recours, récit incohérent ; protéger l’enfant (hospitalisation), soigner, documenter, signaler ; prophylaxie post-exposition après violences sexuelles.',
    definition:
      'Toute forme de violence physique, sexuelle ou psychologique, de négligence ou d’exploitation infligée à un enfant de moins de 18 ans par un adulte ou une personne en position de responsabilité, portant atteinte à sa santé, sa survie ou son développement.',
    physiopathologie:
      '## Formes\n- Violences physiques (dont syndrome du bébé secoué)\n- Violences sexuelles (y compris en contexte de conflit armé)\n- Négligence (alimentation, soins, scolarité)\n- Violences psychologiques, travail des enfants, enfants accusés de sorcellerie, enfants associés aux groupes armés',
    diagnostic:
      '## Signes d’alerte\n- **Lésions inexpliquées**, multiples, d’âges différents, sur des zones non exposées (fesses, dos, oreilles), en forme d’objet ou de main\n- Brûlures « en chaussette » ou par cigarette, morsures\n- Fractures chez un nourrisson qui ne marche pas, fractures multiples\n- Nourrisson : convulsions, coma, hémorragies rétiniennes (bébé secoué)\n- **Récit incohérent** ou changeant, retard de consultation\n- Violences sexuelles : lésions génitales ou anales, IST, grossesse, troubles du comportement\n- Négligence : malnutrition, hygiène, retard de développement\n\n## Examen\n- Examen complet, dans le calme, en présence d’un tiers, avec consentement adapté à l’âge\n- Documenter précisément (schéma, photographies si autorisées)',
    examens: [
      [
        'premiere_intention',
        'radiographie-osseuse',
        'Fractures multiples d’âges différents (squelette complet < 2 ans).',
      ],
      ['gravite', 'scanner-cerebral', 'Nourrisson : hématome sous-dural (bébé secoué).'],
      ['gravite', 'fond-d-oeil', 'Hémorragies rétiniennes.'],
      ['premiere_intention', 'hemostase', 'Éliminer un trouble de la coagulation devant des ecchymoses.'],
      ['premiere_intention', 'nfs', 'Plaquettes.'],
      ['etiologique', 'tdr-vih', 'Violences sexuelles (et contrôles ultérieurs).'],
      ['etiologique', 'serologie-syphilis', 'Violences sexuelles.'],
      ['etiologique', 'beta-hcg', 'Adolescente.'],
    ],
    scores: [],
    differentiels: [
      ['Troubles de la coagulation', 'Hémophilie, purpura thrombopénique : bilan d’hémostase.'],
      ['Ostéogenèse imparfaite', 'Sclérotiques bleues, fragilité osseuse familiale.'],
      ['Pratiques traditionnelles (scarifications, ventouses)', 'Contexte culturel, lésions typiques.'],
      ['Taches mongoloïdes', 'Taches bleutées congénitales du sacrum, stables.'],
    ],
    etiologies:
      '## Facteurs de risque\n- Pauvreté, conflits armés, déplacements de population\n- Consommation d’alcool ou de drogues, violence conjugale\n- Enfant handicapé, prématuré, orphelin, accusé de sorcellerie\n- Isolement social',
    principes: [
      [
        'Protéger et soigner',
        'Mettre l’enfant en sécurité.',
        '- **Hospitaliser** si danger immédiat ou doute, même pour des lésions mineures\n- Traiter les lésions (fractures, brûlures, traumatisme crânien)\n- Attitude bienveillante, ne pas accuser, ne pas faire répéter le récit',
      ],
      [
        'Violences sexuelles (dans les 72 h)',
        'Prévenir les conséquences.',
        '- **Prophylaxie post-exposition du VIH** (ARV 28 jours) dans les 72 h\n- Prévention des IST (ceftriaxone, azithromycine, métronidazole selon l’âge)\n- Contraception d’urgence chez l’adolescente, vaccination contre l’hépatite B, antitétanique\n- Certificat médical, soutien psychologique',
      ],
      [
        'Signaler et accompagner',
        'Faire cesser la maltraitance.',
        '- Signalement aux services sociaux et à la justice selon la loi (loi portant protection de l’enfant)\n- Coordination avec les structures de prise en charge psychosociale et juridique\n- Suivi médical et psychologique de l’enfant et de la fratrie',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Douleur'],
      ['ceftriaxone', 'adjuvant', 'Prévention des IST après violence sexuelle'],
      ['azithromycine', 'adjuvant', 'Prévention des IST'],
      ['metronidazole', 'adjuvant', 'Prévention des IST (adolescente)'],
      ['dolutegravir', 'premiere', 'Prophylaxie post-exposition du VIH'],
      ['vaccin-hepatite-b', 'adjuvant', 'Après violence sexuelle'],
    ],
    complications: [
      {
        nom: 'Traumatisme crânien grave',
        fiche: 'traumatisme-cranien',
        description: 'Bébé secoué.',
        traitement: '- Neurochirurgie, réanimation',
        clinique: '- Convulsions, coma',
        paraclinique: '- Scanner',
      },
      {
        nom: 'Infection à VIH et IST',
        fiche: 'infection-vih',
        description: 'Violences sexuelles.',
        traitement: '- Prophylaxie, dépistage',
        clinique: '',
        paraclinique: '- Tests à 6 semaines et 3 mois',
      },
      {
        nom: 'Séquelles psychologiques',
        description: 'Stress post-traumatique, dépression, troubles du comportement.',
        traitement: '- Soutien psychosocial',
        clinique: '- Repli, cauchemars, échec scolaire',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Récidive fréquente sans protection ; séquelles physiques et psychologiques durables',
    urgences: ['traumatisme-cranien-grave-urgence'],
    symptomes: [
      ['Lésions traumatiques', 'tres_frequent'],
      ['Troubles du comportement', 'frequent'],
      ['Troubles du sommeil', 'frequent'],
      ['Retard de croissance', 'occasionnel'],
      ['Convulsions', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Nelson Textbook of Pediatrics',
    ],
    niveaux: {
      cs: ['- Repérer, soigner, protéger, PPE du VIH, orienter', '- Tout soupçon de maltraitance'],
      hgr: ['- Hospitalisation de protection, bilan, certificat, signalement', ''],
      tert: ['- Neurochirurgie, prise en charge spécialisée', ''],
    },
    alertes: {
      'traumatisme-cranien-grave-urgence':
        'Nourrisson avec convulsions, somnolence ou vomissements sans cause évidente (bébé secoué)',
    },
    formes: [
      {
        nom: 'Maltraitance physique',
        type: 'commune',
        description: 'Lésions inexpliquées.',
        terrain: '- Enfant de moins de 3 ans',
        fonctionnels: '- Pleurs, peur',
        generaux: '',
        physiques: '- Ecchymoses multiples, brûlures, fractures',
        paraclinique: '- Fractures d’âges différents',
        etiologies: '- Violences',
        syndromes: [],
      },
      {
        nom: 'Syndrome du bébé secoué',
        type: 'gravite',
        description: 'Traumatisme crânien non accidentel.',
        terrain: '- Nourrisson < 1 an',
        fonctionnels: '- Vomissements, irritabilité',
        generaux: '- Malaise',
        physiques: '- Convulsions, fontanelle bombée, coma',
        paraclinique: '- Hématome sous-dural, hémorragies rétiniennes',
        etiologies: '',
        syndromes: ['syndrome-d-hypertension-intracranienne'],
      },
    ],
  },

  // =================================================================== MAPI
  {
    ...PED,
    slug: 'manifestations-postvaccinales-indesirables',
    nom: 'Manifestations postvaccinales indésirables',
    resume:
      'Événement de santé après une vaccination (MAPI) : réactions locales et fièvre fréquentes et bénignes, anaphylaxie rare (adrénaline) ; notifier, investiguer les cas graves, maintenir la confiance vaccinale.',
    definition:
      'Toute manifestation médicale fâcheuse survenant après une vaccination, sans qu’un lien de causalité avec le vaccin soit nécessairement établi ; classée en réaction liée au vaccin, à une erreur de programme, à l’anxiété, ou coïncidente.',
    physiopathologie:
      '## Mécanismes\n- Réaction inflammatoire normale (douleur, fièvre)\n- Hypersensibilité (anaphylaxie, rarissime)\n- **Erreurs de programme** : technique d’injection, contamination (abcès, sepsis), mauvaise reconstitution\n- Réaction d’anxiété (syncope chez l’adolescent)\n- Coïncidence avec une autre maladie',
    diagnostic:
      '## Réactions fréquentes et bénignes\n- Douleur, rougeur, gonflement au point d’injection\n- Fièvre, irritabilité (pentavalent, pneumocoque)\n- Éruption modérée et fièvre 7 à 12 jours après le vaccin rougeole\n- BCG : nodule puis ulcération et cicatrice (normal)\n\n## Réactions graves (rares)\n- **Anaphylaxie** (dans les minutes)\n- Convulsions fébriles, épisode hypotonique-hyporéactif, pleurs persistants > 3 h\n- Abcès au point d’injection, BCGite\n- Paralysie après le vaccin polio oral (très rare)\n\n## Notification\n- Toute MAPI grave (décès, hospitalisation, regroupement de cas) : notification immédiate et investigation',
    examens: [
      ['premiere_intention', 'tdr-paludisme', 'Fièvre coïncidente.'],
      ['gravite', 'hemocultures', 'Abcès, sepsis (erreur de programme).'],
      ['etiologique', 'tdr-vih', 'BCGite disséminée.'],
    ],
    scores: [],
    differentiels: [
      ['fievre-enfant-pcime', 'Fièvre d’une autre cause (paludisme) coïncidant avec la vaccination.'],
      ['meningite-bacterienne', 'Convulsions fébriles persistantes, raideur de nuque.'],
      ['choc-anaphylactique', 'Réaction dans les minutes avec signes respiratoires ou circulatoires.'],
    ],
    etiologies:
      '## Causes\n- Propriétés du vaccin (réactions attendues)\n- Erreurs : non-respect de la chaîne du froid, aiguilles réutilisées, mauvais diluant, mauvaise voie\n- Anxiété liée à l’injection\n- Coïncidence (maladies fréquentes du nourrisson)',
    principes: [
      [
        'Réactions bénignes',
        'Rassurer et soulager.',
        '- **Paracétamol** si fièvre ou douleur, compresse fraîche, allaitement\n- Conseils aux parents ; poursuivre le calendrier vaccinal',
      ],
      [
        'Anaphylaxie',
        'Traitement immédiat.',
        '- **Adrénaline** 0,01 mg/kg IM (kit d’urgence obligatoire dans chaque séance de vaccination)\n- Oxygène, remplissage, surveillance ; contre-indication des doses ultérieures du même vaccin',
      ],
      [
        'Autres MAPI graves',
        'Soigner et investiguer.',
        '- Convulsions : diazépam, recherche d’une méningite\n- Abcès : drainage, antibiotiques (**cloxacilline**)\n- BCGite : avis spécialisé, recherche du VIH\n- **Notification** (fiche MAPI) et investigation par l’équipe du PEV',
      ],
      [
        'Communication',
        'Préserver la confiance.',
        '- Expliquer les bénéfices de la vaccination, répondre aux rumeurs, sécuriser les injections',
      ],
    ],
    molecules: [
      ['paracetamol', 'premiere', 'Fièvre, douleur'],
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie'],
      ['diazepam', 'adjuvant', 'Convulsions'],
      ['cloxacilline', 'adjuvant', 'Abcès au point d’injection'],
      ['chlorphenamine', 'adjuvant', 'Réaction allergique cutanée'],
    ],
    complications: [
      {
        nom: 'Choc anaphylactique',
        fiche: 'choc-anaphylactique',
        description: 'Rarissime.',
        traitement: '- Adrénaline IM',
        clinique: '- Malaise, détresse respiratoire',
        paraclinique: '',
      },
      {
        nom: 'Abcès et sepsis',
        description: 'Erreur d’asepsie.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Tuméfaction chaude, fièvre',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Baisse de la couverture vaccinale',
        description: 'Rumeurs après une MAPI.',
        traitement: '- Communication',
        clinique: '',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Excellent pour la quasi-totalité des MAPI ; les bénéfices des vaccins dépassent très largement les risques',
    urgences: [],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Éruption cutanée', 'occasionnel'],
      ['Convulsions', 'rare'],
      ['Hypotonie', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'UNICEF — santé et nutrition de l’enfant',
    ],
    niveaux: {
      cs: ['- Conseils, paracétamol, kit d’anaphylaxie, notification', '- MAPI grave'],
      hgr: ['- Prise en charge des MAPI graves, investigation', ''],
      tert: ['- Comité national d’experts des MAPI', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Réaction locale et fièvre',
        type: 'commune',
        description: 'Bénigne et transitoire.',
        terrain: '- Nourrisson après pentavalent',
        fonctionnels: '- Pleurs, irritabilité',
        generaux: '- Fièvre < 39 °C',
        physiques: '- Rougeur et gonflement au point d’injection',
        paraclinique: '',
        etiologies: '- Réaction vaccinale attendue',
        syndromes: [],
      },
      {
        nom: 'Anaphylaxie postvaccinale',
        type: 'gravite',
        description: 'Dans les minutes.',
        terrain: '- Tout vaccin (rarissime)',
        fonctionnels: '- Gêne respiratoire',
        generaux: '- Pâleur, hypotonie',
        physiques: '- Urticaire, sibilants, hypotension',
        paraclinique: '',
        etiologies: '',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Toux PCIME
  {
    ...PED,
    slug: 'toux-difficultes-respiratoires-enfant',
    nom: 'Toux et difficultés respiratoires de l’enfant (PCIME)',
    resume:
      'Démarche PCIME devant un enfant de 2 mois à 5 ans qui tousse : compter la fréquence respiratoire, chercher le tirage, le stridor, les sibilants et la SpO2 ; pneumonie = amoxicilline ; pneumonie grave = référer ; toux sans pneumonie = soins à domicile.',
    definition:
      'Évaluation standardisée de l’enfant présentant une toux ou des difficultés respiratoires, classant en pneumonie grave ou maladie très grave, pneumonie, ou toux/rhume sans pneumonie.',
    physiopathologie:
      '## Causes\n- Infections respiratoires hautes virales (majorité)\n- Pneumonie (pneumocoque, Hib, virus), bronchiolite\n- Asthme, corps étranger, coqueluche, tuberculose\n- Paludisme (polypnée par acidose), anémie sévère, insuffisance cardiaque',
    diagnostic:
      '## Évaluation\n- **Fréquence respiratoire** sur 1 minute, enfant calme :\n  - 2–11 mois : ≥ 50/min ; 12 mois–5 ans : ≥ 40/min = respiration rapide\n- **Tirage sous-costal**, **stridor** au repos, sibilants\n- **SpO2** (< 90 % = grave)\n- Signes généraux de danger\n\n## Classification\n- **Pneumonie grave ou maladie très grave** (rouge) : signe de danger, stridor au repos, SpO2 < 90 % → référer\n- **Pneumonie** (jaune) : respiration rapide et/ou tirage sous-costal → amoxicilline\n- **Pas de pneumonie : toux ou rhume** (vert) → soins à domicile\n- Toux > 14 jours : tuberculose, asthme, coqueluche',
    examens: [
      ['premiere_intention', 'oxymetrie-de-pouls', 'SpO2 < 90 % : pneumonie grave.'],
      ['premiere_intention', 'tdr-paludisme', 'Fièvre associée.'],
      ['deuxieme_intention', 'radiographie-thoracique', 'Pneumonie grave, échec, toux chronique.'],
      ['etiologique', 'xpert-mtb-rif', 'Toux > 2 semaines, contact tuberculeux.'],
      ['etiologique', 'tdr-vih', 'Pneumonies récidivantes.'],
    ],
    scores: ['dose-ponderale'],
    differentiels: [
      ['pneumonie-enfant', 'Classification « pneumonie » de la PCIME.'],
      ['asthme', 'Sibilants récidivants, réponse au salbutamol.'],
      ['coqueluche', 'Quintes, reprise inspiratoire, vomissements.'],
      ['paludisme-grave-enfant', 'Polypnée par acidose, TDR positif.'],
      ['Corps étranger inhalé', 'Début brutal, syndrome de pénétration.'],
    ],
    etiologies:
      '## Facteurs de risque de pneumonie\n- Malnutrition, absence d’allaitement exclusif, VIH\n- Fumée de bois ou de charbon dans l’habitat, promiscuité\n- Absence de vaccination (rougeole, coqueluche, Hib, pneumocoque)',
    principes: [
      [
        'Pneumonie grave ou maladie très grave',
        'Référer après la première dose.',
        '- **Oxygène** si SpO2 < 90 %\n- Première dose d’**ampicilline** (ou benzylpénicilline) + **gentamicine**, ou **ceftriaxone**\n- Transfert urgent, prévention de l’hypoglycémie',
      ],
      [
        'Pneumonie',
        'Traitement ambulatoire.',
        '- **Amoxicilline** 80–90 mg/kg/j en 2 prises **5 jours** (3 jours pour la respiration rapide isolée selon la PCIME)\n- Sibilants : salbutamol inhalé\n- Revoir à 3 jours',
      ],
      [
        'Toux ou rhume',
        'Soins à domicile.',
        '- Pas d’antibiotique ; adoucir la gorge (miel après 1 an), désobstruction nasale\n- Alimentation et allaitement poursuivis\n- Revenir si respiration rapide ou difficile',
      ],
      [
        'Prévention',
        'Réduire les pneumonies.',
        '- Vaccination (pentavalent, pneumocoque, rougeole), allaitement exclusif, réduction de la fumée domestique, lavage des mains',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Pneumonie'],
      ['ampicilline', 'premiere', 'Pneumonie grave (pré-transfert et hôpital)'],
      ['gentamicine', 'premiere', 'Pneumonie grave'],
      ['ceftriaxone', 'alternative', 'Pneumonie grave'],
      ['oxygene', 'premiere', 'SpO2 < 90 %'],
      ['salbutamol', 'adjuvant', 'Sibilants'],
      ['paracetamol', 'adjuvant', 'Fièvre'],
    ],
    complications: [
      {
        nom: 'Hypoxémie et insuffisance respiratoire',
        description: 'Pneumonie grave.',
        traitement: '- Oxygène',
        clinique: '- Tirage, cyanose',
        paraclinique: '- SpO2',
      },
      {
        nom: 'Pleurésie purulente',
        fiche: 'pleuresie',
        description: 'Staphylocoque, pneumocoque.',
        traitement: '- Drainage, antibiotiques',
        clinique: '- Fièvre persistante, matité',
        paraclinique: '- Radiographie',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Pneumonie bactériémique.',
        traitement: '- Antibiotiques IV',
        clinique: '- Léthargie',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution:
      '## Pronostic\n- La pneumonie reste la première cause infectieuse de décès de l’enfant ; mortalité faible si l’amoxicilline et l’oxygène sont disponibles à temps',
    urgences: [],
    symptomes: [
      ['Toux', 'tres_frequent'],
      ['Tachypnée', 'tres_frequent'],
      ['Fièvre', 'frequent'],
      ['Sibilants', 'occasionnel'],
      ['Dyspnée', 'frequent'],
      ['Cyanose', 'occasionnel'],
    ],
    sources: [
      "Prise en charge intégrée des maladies de l'enfant (PCIME) — tableaux de prise en charge",
      'Pocket book of hospital care for children (2e édition)',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Compter la FR, oxymétrie, amoxicilline, première dose et transfert des pneumonies graves',
        '- Classification rouge',
      ],
      hgr: ['- Oxygène, antibiotiques IV, radiographie', '- Insuffisance respiratoire'],
      tert: ['- Réanimation pédiatrique', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Pneumonie (classification jaune)',
        type: 'commune',
        description: 'Respiration rapide ou tirage.',
        terrain: '- Enfant de 2 mois à 5 ans',
        fonctionnels: '- Toux',
        generaux: '- Fièvre',
        physiques: '- FR augmentée, tirage sous-costal',
        paraclinique: '- SpO2 ≥ 90 %',
        etiologies: '- Pneumocoque, Hib, virus',
        syndromes: ['syndrome-de-condensation-pulmonaire'],
        examens: [['oxymetrie-de-pouls', 'Gravité']],
      },
      {
        nom: 'Pneumonie grave (classification rouge)',
        type: 'gravite',
        description: 'Signe de danger ou hypoxémie.',
        terrain: '- Malnutrition, VIH',
        fonctionnels: '- Ne peut pas boire',
        generaux: '- Léthargie',
        physiques: '- Stridor, cyanose, tirage marqué',
        paraclinique: '- SpO2 < 90 %',
        etiologies: '',
        syndromes: ['syndrome-de-detresse-respiratoire'],
      },
    ],
  },
];
