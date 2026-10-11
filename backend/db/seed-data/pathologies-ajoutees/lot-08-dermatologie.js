'use strict';

/**
 * Lot 8 (dermatologie) — gale, dermatophyties et pityriasis versicolor, pyodermites,
 * érysipèle et cellulite, urticaire et angio-œdème, toxidermies graves.
 * Rédigé par IA (OMS, MSF, IDSA, EAACI, BAD) : à valider.
 */

const DERMATO = { departement: 'medecine-interne', specialite: 'Dermatologie' };

module.exports = [
  // =================================================================== Gale
  {
    ...DERMATO,
    slug: 'gale',
    nom: 'Gale',
    resume:
      'Ectoparasitose très contagieuse à Sarcoptes scabiei : prurit nocturne familial, sillons interdigitaux ; perméthrine ou benzoate de benzyle, ivermectine, traitement simultané de tout l’entourage et du linge.',
    definition:
      'Infestation cutanée par l’acarien *Sarcoptes scabiei* var. *hominis*, transmise par contact cutané prolongé (familial, sexuel) et plus rarement par le linge ; maladie tropicale négligée prioritaire pour l’OMS.',
    physiopathologie:
      '## Mécanismes\n- La femelle creuse des sillons dans la couche cornée et y pond\n- Réaction d’hypersensibilité retardée : prurit 3 à 6 semaines après une première infestation (1 à 3 jours en cas de réinfestation)\n- Grattage : surinfection à streptocoque et staphylocoque, glomérulonéphrite post-streptococcique',
    diagnostic:
      '## Clinique\n- **Prurit à recrudescence nocturne**, souvent **familial ou collectif**\n- **Sillons** (espaces interdigitaux, poignets), vésicules perlées, nodules (organes génitaux masculins, aisselles)\n- Topographie : mains, poignets, coudes, aisselles, ceinture, fesses, seins, organes génitaux ; respecte le visage et le dos (sauf nourrisson)\n- Lésions de grattage, impétiginisation\n\n## Gale profuse ou hyperkératosique (croûteuse)\n- Immunodéprimé (VIH), sujet âgé : croûtes épaisses, peu de prurit, extrêmement contagieuse\n\n## Diagnostic\n- Clinique (critères IACS) ; dermoscopie ou grattage d’un sillon si disponible',
    examens: [
      ['etiologique', 'tdr-vih', 'Gale profuse ou croûteuse.'],
      [
        'gravite',
        'bandelette-urinaire',
        'Hématurie, protéinurie après impétiginisation (glomérulonéphrite).',
      ],
    ],
    scores: [],
    differentiels: [
      ['Prurigo du VIH', 'Papules prurigineuses des membres, sans sillons ni atteinte familiale.'],
      ['Eczéma', 'Plaques érythémato-vésiculeuses, terrain atopique.'],
      ['Piqûres d’insectes, punaises de lit', 'Lésions sur zones découvertes, contexte.'],
      ['Onchocercose cutanée', 'Gale filarienne, zone d’endémie.'],
    ],
    etiologies:
      '## Facteurs\n- Promiscuité, collectivités (camps de déplacés, prisons, internats)\n- Pauvreté, manque d’eau\n- Immunodépression (gale croûteuse)',
    principes: [
      [
        'Traitement de tous les contacts le même jour',
        'Interrompre la transmission.',
        '- Traiter le patient **et tout l’entourage proche**, même sans symptômes\n- Linge et literie : lavage à 60 °C ou isolement dans un sac fermé 72 h',
      ],
      [
        'Traitement local',
        'Tuer le parasite.',
        '- **Perméthrine 5 %** crème sur tout le corps (du cou aux pieds ; visage et cuir chevelu chez le nourrisson), laisser 8 à 12 h, à renouveler à J7\n- Ou **benzoate de benzyle** 25 % (dilué chez l’enfant), 24 h, à renouveler\n- Ongles coupés, application sous les ongles',
      ],
      [
        'Traitement oral',
        'Formes étendues, collectives, croûteuses.',
        '- **Ivermectine** 200 µg/kg en dose unique à renouveler à J7–14 (non recommandée < 15 kg et chez la femme enceinte)\n- Gale croûteuse : ivermectine répétée (J1, J2, J8 ± J9, J15) + traitement local + kératolytique ; isolement\n- Traitement de masse dans les collectivités',
      ],
      [
        'Symptômes et surinfection',
        'Soulager et traiter.',
        '- Antihistaminique (**cétirizine**) ; le prurit peut persister 2 à 4 semaines\n- Impétiginisation : antiseptique, **cloxacilline** ou amoxicilline per os si étendue',
      ],
    ],
    molecules: [
      ['permethrine', 'premiere', 'Crème 5 %, J1 et J7'],
      ['benzoate-de-benzyle', 'premiere', 'Alternative locale'],
      ['ivermectine', 'premiere', 'Formes étendues, collectives, croûteuses'],
      ['cetirizine', 'adjuvant', 'Prurit'],
      ['cloxacilline', 'adjuvant', 'Impétiginisation étendue'],
      ['acide-salicylique', 'adjuvant', 'Kératolytique (gale croûteuse)'],
    ],
    complications: [
      {
        nom: 'Impétiginisation',
        fiche: 'pyodermites',
        description: 'Surinfection streptococcique ou staphylococcique.',
        traitement: '- Antiseptiques, antibiotiques',
        clinique: '- Croûtes mélicériques',
        paraclinique: '',
      },
      {
        nom: 'Glomérulonéphrite post-streptococcique',
        fiche: 'syndrome-nephrotique-adulte',
        description: 'Après pyodermite streptococcique.',
        traitement: '- Symptomatique',
        clinique: '- Œdèmes, HTA, urines rouges',
        paraclinique: '- Bandelette, créatinine',
      },
      {
        nom: 'Eczématisation',
        description: 'Traitements irritants.',
        traitement: '- Émollients, dermocorticoïde court',
        clinique: '- Plaques suintantes',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison si tous les contacts sont traités simultanément ; réinfestations fréquentes sinon',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Troubles du sommeil', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'WHO Model List of Essential Medicines',
    ],
    niveaux: {
      cs: [
        '- Diagnostic clinique, traitement du patient et des contacts, conseils sur le linge',
        '- Gale croûteuse, échec',
      ],
      hgr: ['- Gale croûteuse (isolement, ivermectine), complications', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Gale commune',
        type: 'commune',
        description: 'Prurit nocturne et sillons.',
        terrain: '- Famille, collectivité',
        fonctionnels: '- Prurit nocturne',
        generaux: '',
        physiques: '- Sillons interdigitaux, vésicules perlées, nodules génitaux',
        paraclinique: '- Diagnostic clinique',
        etiologies: '- Sarcoptes scabiei',
        syndromes: [],
      },
      {
        nom: 'Gale croûteuse (hyperkératosique)',
        type: 'terrain',
        description: 'Forme très contagieuse de l’immunodéprimé.',
        terrain: '- PVVIH, sujet âgé, corticothérapie',
        fonctionnels: '- Prurit faible ou absent',
        generaux: '',
        physiques: '- Croûtes épaisses des mains, des pieds, du tronc',
        paraclinique: '- Très nombreux acariens',
        etiologies: '- Immunodépression',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Dermatophyties
  {
    ...DERMATO,
    slug: 'dermatophyties-et-pityriasis-versicolor',
    nom: 'Dermatophyties et pityriasis versicolor',
    resume:
      'Mycoses superficielles très fréquentes : teignes du cuir chevelu de l’enfant (griséofulvine), dermatophyties de la peau (antifongique local), pityriasis versicolor (kétoconazole local).',
    definition:
      'Infections fongiques de la couche cornée, des cheveux et des ongles par des dermatophytes (*Trichophyton*, *Microsporum*, *Epidermophyton*) ; le pityriasis versicolor est dû à une levure lipophile commensale, *Malassezia*.',
    physiopathologie:
      '## Mécanismes\n- Dermatophytes : kératinophiles, transmission interhumaine, animale ou tellurique\n- Malassezia : levure de la flore normale, prolifère sous l’effet de la chaleur, de l’humidité et du sébum',
    diagnostic:
      '## Teigne du cuir chevelu (enfant)\n- Plaques d’alopécie squameuses, cheveux cassés ; kérion (forme inflammatoire suppurée)\n\n## Dermatophytie de la peau glabre (« herpès circiné »)\n- Lésion annulaire à bordure vésiculo-squameuse active, centre clair, prurit\n- Intertrigo (pied d’athlète, plis inguinaux)\n\n## Onychomycose\n- Ongle épaissi, jaunâtre, friable\n\n## Pityriasis versicolor\n- Macules hypo- ou hyperpigmentées, finement squameuses (signe du copeau), tronc et cou, adulte jeune\n\n## Confirmation\n- Examen mycologique (direct + culture) si doute ou avant un traitement oral prolongé',
    examens: [
      [
        'confirmation',
        'examen-mycologique',
        'Filaments (dermatophytes), levures en « spaghetti et boulettes » (Malassezia).',
      ],
      ['etiologique', 'tdr-vih', 'Formes étendues ou récidivantes.'],
      ['etiologique', 'glycemie', 'Intertrigos récidivants (diabète).'],
      ['pretherapeutique', 'bilan-hepatique', 'Traitement oral prolongé (terbinafine, itraconazole).'],
    ],
    scores: [],
    differentiels: [
      ['lepre', 'Macule hypopigmentée **anesthésique**, sans squames.'],
      ['Vitiligo', 'Macules achromiques sans squames.'],
      ['Eczéma nummulaire', 'Plaques arrondies suintantes sans bordure active.'],
      ['Psoriasis', 'Plaques épaisses, squames argentées, coudes et genoux.'],
      ['Pelade', 'Alopécie en plaques sans squames.'],
    ],
    etiologies:
      '## Facteurs\n- Chaleur, humidité, promiscuité, coiffeurs (matériel non désinfecté)\n- Contact avec des animaux (chats, chiens)\n- Diabète, immunodépression, corticothérapie',
    principes: [
      [
        'Teignes du cuir chevelu',
        'Traitement oral obligatoire.',
        '- **Griséofulvine** 20–25 mg/kg/j (enfant) pendant 6 à 8 semaines, au cours d’un repas gras\n- Ou **terbinafine** 4 semaines (Trichophyton)\n- Associer un antifongique local (kétoconazole shampoing), rasage déconseillé, désinfection des peignes\n- Dépister la fratrie',
      ],
      [
        'Dermatophyties de la peau glabre et des plis',
        'Traitement local.',
        '- **Clotrimazole**, **miconazole** ou terbinafine crème 2 à 4 semaines\n- Pommade de Whitfield (acide benzoïque + **acide salicylique**) : option économique\n- Formes étendues : griséofulvine ou terbinafine orale',
      ],
      [
        'Pityriasis versicolor',
        'Traitement local.',
        '- **Kétoconazole** 2 % gel moussant en application unique ou quotidienne 3 jours\n- Formes étendues ou récidivantes : **fluconazole** 300 mg/semaine 2 semaines ou **itraconazole**\n- Les taches dépigmentées persistent plusieurs semaines après la guérison',
      ],
      [
        'Onychomycoses',
        'Traitement long.',
        '- Terbinafine orale 3 mois (mains : 6 semaines) ; formes limitées : vernis antifongique',
      ],
    ],
    molecules: [
      ['griseofulvine', 'premiere', 'Teigne de l’enfant'],
      ['terbinafine', 'alternative', 'Teigne à Trichophyton, onychomycose'],
      ['clotrimazole', 'premiere', 'Dermatophytie cutanée'],
      ['miconazole-nitrate', 'alternative', 'Dermatophytie cutanée'],
      ['ketoconazole', 'premiere', 'Pityriasis versicolor (local)'],
      ['fluconazole', 'alternative', 'Pityriasis versicolor étendu'],
      ['itraconazole', 'alternative', 'Formes étendues'],
      ['acide-salicylique', 'adjuvant', 'Pommade de Whitfield'],
    ],
    complications: [
      {
        nom: 'Kérion et alopécie cicatricielle',
        description: 'Teigne inflammatoire.',
        traitement: '- Griséofulvine, soins locaux',
        clinique: '- Placard suppuré',
        paraclinique: '',
      },
      {
        nom: 'Surinfection bactérienne',
        fiche: 'erysipele-et-cellulite',
        description: 'Intertrigo du pied : porte d’entrée.',
        traitement: '- Antifongique, antibiotique si érysipèle',
        clinique: '- Placard inflammatoire de jambe',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison sous traitement ; récidives fréquentes (pityriasis versicolor, intertrigos)',
    urgences: [],
    symptomes: [
      ['Prurit', 'frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Taches cutanées hypopigmentées', 'frequent'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
      'Liste nationale des médicaments essentiels (LNME)',
    ],
    niveaux: {
      cs: [
        '- Diagnostic clinique, antifongiques locaux, griséofulvine pour les teignes',
        '- Formes étendues, échec, doute avec la lèpre',
      ],
      hgr: ['- Examen mycologique, traitements oraux', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Teigne tondante de l’enfant',
        type: 'commune',
        description: 'Plaques d’alopécie squameuses.',
        terrain: '- Enfant d’âge scolaire',
        fonctionnels: '- Prurit modéré',
        generaux: '',
        physiques: '- Plaques squameuses, cheveux cassés courts',
        paraclinique: '- Examen mycologique positif',
        etiologies: '- Trichophyton, Microsporum',
        syndromes: [],
        examens: [['examen-mycologique', 'Confirmation']],
      },
      {
        nom: 'Pityriasis versicolor',
        type: 'etiologique',
        description: 'Macules squameuses du tronc.',
        terrain: '- Adulte jeune, climat chaud et humide',
        fonctionnels: '- Gêne esthétique',
        generaux: '',
        physiques: '- Macules hypo- ou hyperpigmentées, signe du copeau',
        paraclinique: '- Levures et filaments courts',
        etiologies: '- Malassezia',
        syndromes: [],
      },
    ],
  },

  // =================================================================== Pyodermites
  {
    ...DERMATO,
    slug: 'pyodermites',
    nom: 'Pyodermites (impétigo, furoncles)',
    resume:
      'Infections bactériennes superficielles à staphylocoque et streptocoque : impétigo (croûtes mélicériques), folliculites, furoncles, abcès ; soins antiseptiques, antibiotique local ou oral selon l’étendue, incision des abcès.',
    definition:
      'Infections cutanées bactériennes primitives ou secondaires (impétiginisation d’une dermatose : gale, eczéma, varicelle) dues surtout à *Staphylococcus aureus* et *Streptococcus pyogenes*.',
    physiopathologie:
      '## Mécanismes\n- Impétigo : infection épidermique très contagieuse (auto- et hétéro-inoculation)\n- Folliculite et furoncle : infection du follicule pilo-sébacé par S. aureus (toxine de Panton-Valentine pour les furonculoses récidivantes)\n- Abcès : collection dermique',
    diagnostic:
      '## Impétigo\n- Vésicules ou bulles fragiles, puis **croûtes jaunâtres mélicériques**, péri-orificielles (enfant)\n- Ecthyma : ulcération creusante des jambes\n\n## Folliculite et furoncle\n- Papule ou pustule centrée par un poil ; furoncle : nodule inflammatoire douloureux avec bourbillon\n- Anthrax : agglomérat de furoncles (diabétique)\n\n## Gravité\n- Fièvre, lésions étendues, furoncle du visage (staphylococcie maligne de la face), immunodépression',
    examens: [
      ['etiologique', 'glycemie', 'Furonculose récidivante, anthrax : diabète.'],
      ['etiologique', 'tdr-vih', 'Récidives, formes étendues.'],
      ['gravite', 'bandelette-urinaire', 'Glomérulonéphrite post-streptococcique (2 à 3 semaines après).'],
      ['gravite', 'hemocultures', 'Fièvre, staphylococcie maligne de la face.'],
      ['premiere_intention', 'nfs', 'Formes graves.'],
    ],
    scores: [],
    differentiels: [
      ['Herpès', 'Vésicules groupées en bouquet, récidives au même endroit.'],
      ['gale', 'Impétiginisation d’une gale : chercher les sillons.'],
      ['ulcere-de-buruli', 'Nodule indolore puis ulcère à bords décollés.'],
      ['Pemphigus, toxidermie bulleuse', 'Bulles étendues, atteinte muqueuse.'],
    ],
    etiologies:
      '## Germes\n- *Staphylococcus aureus*, *Streptococcus pyogenes*\n\n## Facteurs\n- Chaleur, humidité, promiscuité, hygiène insuffisante\n- Dermatoses prurigineuses (gale), malnutrition, diabète, VIH',
    principes: [
      [
        'Soins locaux',
        'Base du traitement.',
        '- Lavage à l’eau et au savon, ramollissement des croûtes, antiseptique (**chlorhexidine**, **povidone iodée**, permanganate de potassium dilué)\n- Ongles courts, linge personnel, éviction scolaire courte',
      ],
      [
        'Impétigo',
        'Guérir et prévenir la contagion.',
        '- Peu étendu : **acide fusidique** crème 2 à 3 fois par jour 5 jours\n- Étendu (> 2 % de la surface, > 6 lésions) ou ecthyma : **cloxacilline** ou **amoxicilline-acide clavulanique** 7 jours ; allergie : **clindamycine**',
      ],
      [
        'Furoncles et abcès',
        'Drainer.',
        '- Furoncle : soins antiseptiques, **ne pas manipuler** (surtout au visage)\n- Abcès : **incision et drainage**\n- Antibiotique si fièvre, cellulite autour, terrain fragile, visage : cloxacilline ou clindamycine\n- Furonculose récidivante : décolonisation (chlorhexidine, mupirocine nasale), hygiène, recherche de diabète',
      ],
      ['Traiter la dermatose sous-jacente', 'Éviter les récidives.', '- Gale, eczéma, pédiculose'],
    ],
    molecules: [
      ['acide-fusidique', 'premiere', 'Impétigo peu étendu'],
      ['cloxacilline', 'premiere', 'Formes étendues, furoncle compliqué'],
      ['flucloxacilline', 'alternative', 'Staphylocoque'],
      ['amoxicilline', 'alternative', 'Associée à l’acide clavulanique'],
      ['acide-clavulanique', 'alternative', 'Associé à l’amoxicilline'],
      ['clindamycine', 'alternative', 'Allergie aux bêtalactamines'],
      ['chlorhexidine-gluconate', 'premiere', 'Antiseptique'],
      ['povidone-iodee', 'alternative', 'Antiseptique'],
    ],
    complications: [
      {
        nom: 'Glomérulonéphrite aiguë post-streptococcique',
        fiche: 'syndrome-nephrotique-adulte',
        description: '2 à 3 semaines après un impétigo.',
        traitement: '- Restriction sodée, diurétiques, antihypertenseurs',
        clinique: '- Œdèmes, HTA, urines « coca »',
        paraclinique: '- Hématurie, protéinurie',
      },
      {
        nom: 'Staphylococcie maligne de la face',
        description: 'Manipulation d’un furoncle du visage : thrombophlébite.',
        traitement: '- Antibiotiques IV, hospitalisation',
        clinique: '- Œdème facial, fièvre',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Cellulite et sepsis',
        fiche: 'erysipele-et-cellulite',
        description: 'Diffusion.',
        traitement: '- Antibiotiques IV',
        clinique: '- Placard extensif, fièvre',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Guérison rapide sans cicatrice (impétigo) ; récidives liées au terrain et à l’hygiène',
    urgences: [],
    symptomes: [
      ['Éruption cutanée', 'tres_frequent'],
      ['Prurit', 'frequent'],
      ['Fièvre', 'occasionnel'],
      ['Adénopathies', 'occasionnel'],
    ],
    sources: [
      'Guide clinique et thérapeutique',
      'IDSA — recommandations de pratique clinique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Soins antiseptiques, acide fusidique, cloxacilline, incision des petits abcès',
        '- Fièvre, furoncle du visage, formes étendues',
      ],
      hgr: ['- Antibiotiques IV, drainage chirurgical', ''],
      tert: ['- Dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Impétigo de l’enfant',
        type: 'commune',
        description: 'Croûtes mélicériques péri-orificielles.',
        terrain: '- Enfant, collectivité',
        fonctionnels: '- Prurit modéré',
        generaux: '',
        physiques: '- Croûtes jaunâtres autour de la bouche et du nez',
        paraclinique: '',
        etiologies: '- S. aureus, S. pyogenes',
        syndromes: [],
      },
      {
        nom: 'Furoncle et anthrax',
        type: 'etiologique',
        description: 'Infection folliculaire profonde.',
        terrain: '- Adulte, diabète',
        fonctionnels: '- Douleur',
        generaux: '- Fièvre (anthrax)',
        physiques: '- Nodule rouge chaud avec bourbillon',
        paraclinique: '- Glycémie',
        etiologies: '- S. aureus',
        syndromes: ['syndrome-infectieux'],
      },
    ],
  },

  // =================================================================== Érysipèle
  {
    ...DERMATO,
    slug: 'erysipele-et-cellulite',
    nom: 'Érysipèle et cellulite',
    resume:
      'Dermohypodermite bactérienne aiguë, surtout de la jambe : placard rouge, chaud, œdémateux, fièvre ; amoxicilline (ou pénicilline) 7 jours, traiter la porte d’entrée ; urgence chirurgicale si fasciite nécrosante.',
    definition:
      'Infection aiguë non nécrosante du derme et de l’hypoderme, due principalement au streptocoque bêta-hémolytique (érysipèle), parfois au staphylocoque (cellulite) ; la fasciite nécrosante est une forme nécrosante grave.',
    physiopathologie:
      '## Mécanismes\n- Pénétration bactérienne par une **porte d’entrée** (intertrigo, plaie, ulcère, piqûre)\n- Diffusion lymphatique dans le derme\n- Facteurs : lymphœdème, insuffisance veineuse, obésité, diabète',
    diagnostic:
      '## Clinique\n- Début brutal : **fièvre**, frissons, puis **placard érythémateux, chaud, œdémateux, douloureux**, bien limité, de la jambe (90 %)\n- Adénopathie inguinale, traînée de lymphangite\n- Porte d’entrée : intertrigo interorteil, plaie, ulcère\n\n## Signes de gravité (fasciite nécrosante : urgence chirurgicale)\n- Douleur intense disproportionnée, nécrose, bulles hémorragiques, hypoesthésie, crépitation, extension rapide, choc',
    examens: [
      ['premiere_intention', 'nfs', 'Hyperleucocytose.'],
      ['premiere_intention', 'crp', 'Élevée.'],
      ['premiere_intention', 'glycemie', 'Diabète.'],
      ['gravite', 'hemocultures', 'Formes sévères.'],
      ['gravite', 'creatinine', 'Sepsis.'],
      ['gravite', 'lactates', 'Fasciite nécrosante, choc.'],
      ['etiologique', 'echo-doppler-veineux', 'Doute avec une thrombose veineuse.'],
    ],
    scores: ['qsofa'],
    differentiels: [
      ['thrombose-veineuse-profonde', 'Œdème sans placard rouge ni fièvre élevée : écho-Doppler.'],
      ['Dermite de stase', 'Bilatérale, chronique, sans fièvre.'],
      ['goutte', 'Arthrite du gros orteil ou de la cheville.'],
      ['pied-diabetique', 'Plaie du pied, neuropathie.'],
      ['Envenimation, piqûre', 'Contexte.'],
    ],
    etiologies:
      '## Germes\n- *Streptococcus pyogenes* et autres streptocoques bêta-hémolytiques\n- *S. aureus* (cellulites autour d’une plaie ou d’un abcès)\n\n## Facteurs\n- Lymphœdème (filariose, post-opératoire), insuffisance veineuse, obésité\n- Intertrigo, plaies, ulcères, diabète',
    principes: [
      [
        'Antibiothérapie',
        'Guérir l’infection streptococcique.',
        '- **Amoxicilline** 50 mg/kg/j (1 g 3 fois par jour) 7 jours\n- Forme sévère : **benzylpénicilline** IV ou amoxicilline IV, relais oral\n- Allergie : **clindamycine**\n- Suspicion de staphylocoque : cloxacilline ou amoxicilline-acide clavulanique',
      ],
      [
        'Mesures associées',
        'Accélérer la guérison.',
        '- Repos, membre surélevé, antalgiques (**pas d’AINS** : risque de fasciite)\n- Traiter la porte d’entrée (intertrigo : antifongique)\n- Anticoagulation préventive si alitement',
      ],
      [
        'Fasciite nécrosante',
        'Urgence vitale.',
        '- **Chirurgie de débridement en urgence**\n- Antibiotiques IV larges (ceftriaxone + clindamycine + métronidazole)\n- Réanimation',
      ],
      [
        'Prévention des récidives',
        'Réduire les facteurs.',
        '- Traitement des intertrigos, contention, perte de poids\n- Récidives fréquentes : **benzathine pénicilline** 2,4 MUI toutes les 2 à 3 semaines',
      ],
    ],
    molecules: [
      ['amoxicilline', 'premiere', 'Érysipèle 7 jours'],
      ['benzylpenicilline-penicilline-g', 'premiere', 'Forme sévère, IV'],
      ['clindamycine', 'alternative', 'Allergie, fasciite nécrosante'],
      ['cloxacilline', 'alternative', 'Staphylocoque'],
      ['benzathine-benzylpenicilline', 'adjuvant', 'Prévention des récidives'],
      ['ceftriaxone', 'deuxieme', 'Fasciite nécrosante'],
      ['paracetamol', 'adjuvant', 'Fièvre, douleur'],
      ['enoxaparine', 'adjuvant', 'Alitement'],
    ],
    complications: [
      {
        nom: 'Fasciite nécrosante',
        description: 'Infection nécrosante profonde.',
        traitement: '- Chirurgie urgente, antibiotiques, réanimation',
        clinique: '- Douleur intense, nécrose, crépitation, choc',
        paraclinique: '- Lactates',
      },
      {
        nom: 'Abcès',
        description: 'Collection sous-cutanée.',
        traitement: '- Drainage',
        clinique: '- Fluctuation',
        paraclinique: '- Échographie',
      },
      {
        nom: 'Récidive et lymphœdème',
        description: 'Cercle vicieux.',
        traitement: '- Prévention, contention',
        clinique: '- Jambe grosse',
        paraclinique: '',
      },
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Bactériémie.',
        traitement: '- Antibiotiques IV',
        clinique: '- Hypotension',
        paraclinique: '- Hémocultures',
      },
    ],
    evolution: '## Pronostic\n- Apyrexie en 48–72 h ; récidive dans 20 % des cas',
    urgences: ['choc-septique'],
    symptomes: [
      ['Fièvre', 'tres_frequent'],
      ['Frissons', 'frequent'],
      ['Œdème d’un membre', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Adénopathies', 'frequent'],
    ],
    sources: [
      'IDSA — recommandations de pratique clinique',
      'Guide clinique et thérapeutique',
      'OMS — lignes directrices et publications',
    ],
    niveaux: {
      cs: [
        '- Amoxicilline orale, repos, traitement de l’intertrigo',
        '- Signes de gravité, échec à 72 h, diabète',
      ],
      hgr: ['- Antibiotiques IV, hospitalisation', '- Fasciite nécrosante'],
      tert: ['- Chirurgie, réanimation', ''],
    },
    alertes: {
      'choc-septique': 'Placard de jambe avec douleur intense, nécrose, bulles hémorragiques ou hypotension',
    },
    formes: [
      {
        nom: 'Érysipèle de jambe',
        type: 'commune',
        description: 'Placard inflammatoire fébrile.',
        terrain: '- Adulte, obésité, intertrigo',
        fonctionnels: '- Douleur de jambe',
        generaux: '- Fièvre, frissons',
        physiques: '- Placard rouge, chaud, bien limité, adénopathie inguinale',
        paraclinique: '- Hyperleucocytose',
        etiologies: '- Streptocoque',
        syndromes: ['syndrome-infectieux'],
      },
      {
        nom: 'Fasciite nécrosante',
        type: 'gravite',
        description: 'Dermohypodermite bactérienne nécrosante.',
        terrain: '- Diabète, AINS, immunodépression',
        fonctionnels: '- Douleur intense',
        generaux: '- Choc',
        physiques: '- Nécrose, bulles hémorragiques, crépitation, hypoesthésie',
        paraclinique: '- Lactates élevés',
        etiologies: '- Streptocoque A, polymicrobienne',
        syndromes: ['syndrome-de-choc'],
      },
    ],
  },

  // =================================================================== Urticaire
  {
    ...DERMATO,
    slug: 'urticaire-et-angio-oedeme',
    nom: 'Urticaire et angio-œdème',
    resume:
      'Papules œdémateuses prurigineuses fugaces ; angio-œdème = œdème profond du visage ou des muqueuses ; antihistaminiques H1 ; adrénaline IM si atteinte respiratoire ou choc (anaphylaxie).',
    definition:
      'Urticaire : éruption de papules œdémateuses érythémateuses, prurigineuses, fugaces (< 24 h chacune) et migratrices ; angio-œdème : œdème du derme profond et de l’hypoderme (visage, lèvres, langue, larynx) ; aiguë si < 6 semaines, chronique au-delà.',
    physiopathologie:
      '## Mécanismes\n- Dégranulation des mastocytes : libération d’histamine\n- Allergique (IgE : aliments, médicaments, piqûres d’hyménoptères) ou non allergique (infections, AINS, physique)\n- Angio-œdème bradykinique (IEC, héréditaire) : sans urticaire, ne répond pas aux antihistaminiques',
    diagnostic:
      '## Clinique\n- Papules ou plaques œdémateuses, rosées, prurigineuses, à contours changeants, disparaissant sans trace en quelques heures\n- Angio-œdème : gonflement ferme des paupières, des lèvres, de la langue\n\n## Signes d’anaphylaxie (urgence)\n- Dysphonie, gêne à la déglutition, stridor, dyspnée, sibilants\n- Hypotension, malaise, troubles digestifs\n\n## Enquête\n- Aliments, médicaments (pénicillines, AINS, IEC), piqûre, infection récente, chronologie',
    examens: [
      ['premiere_intention', 'nfs', 'Éosinophilie (parasitoses) ; urticaire chronique.'],
      ['etiologique', 'examen-parasitologique-selles', 'Urticaire chronique : helminthiases.'],
      ['etiologique', 'tsh', 'Urticaire chronique : thyroïdite.'],
      ['etiologique', 'crp', 'Urticaire chronique.'],
    ],
    scores: [],
    differentiels: [
      ['Anaphylaxie', 'Urticaire avec atteinte respiratoire ou circulatoire : adrénaline.'],
      [
        'Angio-œdème bradykinique (IEC, héréditaire)',
        'Sans urticaire ni prurit, pas de réponse aux antihistaminiques.',
      ],
      ['Érythème polymorphe', 'Lésions en cocarde fixes.'],
      ['toxidermies-graves', 'Lésions fixes, décollement, atteinte muqueuse, fièvre.'],
    ],
    etiologies:
      '## Urticaire aiguë\n- Infections virales (enfant), médicaments (bêtalactamines, AINS), aliments (arachide, fruits de mer, œufs), piqûres\n\n## Urticaire chronique\n- Spontanée (auto-immune) dans la majorité, physique (pression, froid, dermographisme)\n- Parasitoses, thyroïdite',
    principes: [
      [
        'Anaphylaxie et angio-œdème laryngé',
        'Sauver la vie.',
        '- **Adrénaline** 0,5 mg IM (0,01 mg/kg chez l’enfant) à la face externe de la cuisse, à répéter après 5 min\n- Position allongée (assise si dyspnée), **oxygène**, remplissage par NaCl 0,9 %\n- Salbutamol si bronchospasme ; puis antihistaminique et corticoïde\n- Surveillance 6 à 24 h ; trousse d’adrénaline et éviction de l’allergène',
      ],
      [
        'Urticaire aiguë',
        'Soulager.',
        '- **Antihistaminique H1** non sédatif : **cétirizine** 10 mg/j, **loratadine** ou **desloratadine**\n- Éviction de la cause ; courte corticothérapie si forme sévère',
      ],
      [
        'Urticaire chronique',
        'Contrôler les poussées.',
        '- Antihistaminique H1 quotidien au long cours, jusqu’à 4 fois la dose standard\n- Avis spécialisé si échec (omalizumab)',
      ],
      [
        'Angio-œdème bradykinique',
        'Traitement spécifique.',
        '- Arrêt définitif des IEC ; antihistaminiques et corticoïdes inefficaces ; acide tranexamique ou traitements spécifiques en centre spécialisé',
      ],
    ],
    molecules: [
      ['adrenaline-epinephrine', 'premiere', 'Anaphylaxie, angio-œdème laryngé'],
      ['cetirizine', 'premiere', 'Urticaire'],
      ['loratadine', 'alternative', 'Urticaire'],
      ['desloratadine', 'alternative', 'Urticaire'],
      ['chlorphenamine', 'alternative', 'Injectable'],
      ['prednisolone', 'adjuvant', 'Formes sévères, courte durée'],
      ['hydrocortisone', 'adjuvant', 'Anaphylaxie, après l’adrénaline'],
      ['salbutamol', 'adjuvant', 'Bronchospasme'],
      ['chlorure-de-sodium-0-9', 'adjuvant', 'Remplissage'],
    ],
    complications: [
      {
        nom: 'Choc anaphylactique',
        description: 'Réaction systémique.',
        traitement: '- Adrénaline IM, remplissage',
        clinique: '- Hypotension, malaise',
        paraclinique: '',
      },
      {
        nom: 'Œdème laryngé',
        description: 'Asphyxie.',
        traitement: '- Adrénaline, intubation ou cricothyrotomie',
        clinique: '- Stridor, dysphonie',
        paraclinique: '',
      },
    ],
    evolution:
      '## Pronostic\n- Urticaire aiguë : guérison en quelques jours ; urticaire chronique : rémission spontanée en 2 à 5 ans dans la moitié des cas',
    urgences: [],
    symptomes: [
      ['Prurit', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Œdème du visage', 'frequent'],
      ['Dyspnée', 'occasionnel'],
      ['Hypotension', 'rare'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'British National Formulary (BNF / BNF for Children)',
    ],
    niveaux: {
      cs: [
        '- Antihistaminiques, adrénaline IM en cas d’anaphylaxie, éviction',
        '- Anaphylaxie, angio-œdème laryngé, urticaire chronique',
      ],
      hgr: ['- Prise en charge de l’anaphylaxie, surveillance', ''],
      tert: ['- Allergologie, dermatologie', ''],
    },
    alertes: {},
    formes: [
      {
        nom: 'Urticaire aiguë superficielle',
        type: 'commune',
        description: 'Papules fugaces prurigineuses.',
        terrain: '- Tout âge',
        fonctionnels: '- Prurit',
        generaux: '',
        physiques: '- Plaques œdémateuses migratrices',
        paraclinique: '',
        etiologies: '- Infection virale, médicament, aliment',
        syndromes: [],
      },
      {
        nom: 'Anaphylaxie avec angio-œdème',
        type: 'gravite',
        description: 'Réaction systémique.',
        terrain: '- Allergie connue, piqûre, médicament injectable',
        fonctionnels: '- Dyspnée, dysphagie',
        generaux: '- Malaise, hypotension',
        physiques: '- Œdème des lèvres et de la langue, sibilants, stridor',
        paraclinique: '',
        etiologies: '- Allergène',
        syndromes: ['syndrome-de-choc', 'syndrome-de-detresse-respiratoire'],
      },
    ],
  },

  // =================================================================== Toxidermies graves
  {
    ...DERMATO,
    slug: 'toxidermies-graves',
    nom: 'Toxidermies graves (syndrome de Stevens-Johnson, Lyell)',
    resume:
      'Réactions médicamenteuses graves (cotrimoxazole, névirapine, carbamazépine, allopurinol, antipaludiques sulfamidés) : décollement cutané et érosions muqueuses ; arrêt immédiat du médicament, soins type brûlés, hospitalisation.',
    definition:
      'Nécrolyse épidermique d’origine médicamenteuse : syndrome de Stevens-Johnson (décollement < 10 % de la surface corporelle), syndrome de Lyell ou nécrolyse épidermique toxique (> 30 %), formes de chevauchement entre les deux ; le DRESS associe éruption, fièvre, éosinophilie et atteinte viscérale.',
    physiopathologie:
      '## Mécanismes\n- Réaction immunitaire cytotoxique (lymphocytes T CD8) contre les kératinocytes\n- Apoptose massive de l’épiderme, décollement\n- Délai typique de 4 à 28 jours après l’introduction du médicament\n- Risque accru chez les PVVIH',
    diagnostic:
      '## Clinique\n- Prodromes : fièvre, malaise, brûlures oculaires, odynophagie\n- Macules purpuriques, cocardes atypiques, **bulles et décollements** (signe de Nikolsky)\n- **Érosions muqueuses** (bouche, yeux, organes génitaux)\n- Évaluer la surface décollée et les défaillances\n\n## Enquête médicamenteuse\n- Tous les médicaments introduits dans les 2 mois, y compris l’automédication et les plantes\n\n## Gravité (SCORTEN)\n- Âge > 40 ans, cancer, FC > 120, décollement > 10 %, urée, bicarbonates, glycémie élevés',
    examens: [
      ['premiere_intention', 'nfs', 'Lymphopénie, éosinophilie (DRESS).'],
      ['premiere_intention', 'ionogramme', 'Déshydratation, bicarbonates (SCORTEN).'],
      ['premiere_intention', 'uree', 'SCORTEN.'],
      ['premiere_intention', 'glycemie', 'SCORTEN.'],
      ['premiere_intention', 'creatinine', 'Atteinte rénale.'],
      ['premiere_intention', 'bilan-hepatique', 'Hépatite (DRESS).'],
      ['gravite', 'hemocultures', 'Sepsis (première cause de décès).'],
      [
        'deuxieme_intention',
        'biopsie-histologie',
        'Nécrose épidermique, élimine d’autres dermatoses bulleuses.',
      ],
      ['etiologique', 'tdr-vih', 'Terrain à risque.'],
    ],
    scores: [],
    differentiels: [
      ['Érythème polymorphe', 'Cocardes typiques des extrémités, herpès récent, peu de décollement.'],
      [
        'Staphylococcie cutanée (épidermolyse staphylococcique)',
        'Enfant, décollement superficiel, muqueuses respectées.',
      ],
      ['Pemphigus, pemphigoïde', 'Évolution chronique, immunofluorescence.'],
      ['Brûlures', 'Contexte.'],
    ],
    etiologies:
      '## Médicaments les plus en cause\n- **Sulfamides** : cotrimoxazole, sulfadoxine-pyriméthamine\n- **Névirapine** (et autres anti-infectieux)\n- **Antiépileptiques** : carbamazépine, phénytoïne, phénobarbital, lamotrigine\n- **Allopurinol**\n- AINS (oxicams), certaines bêtalactamines, antituberculeux (DRESS)',
    principes: [
      [
        'Arrêt immédiat',
        'Supprimer la cause.',
        '- **Arrêter tous les médicaments suspects** et non indispensables\n- Ne jamais réintroduire ; carte d’allergie, déclaration de pharmacovigilance',
      ],
      [
        'Soins de type « grand brûlé »',
        'Prévenir les complications.',
        '- Hospitalisation (centre spécialisé si décollement étendu)\n- Réchauffement, apports hydriques et nutritionnels, prévention des escarres\n- Soins cutanés stériles, pansements non adhésifs, pas de bulles percées inutilement\n- Soins oculaires quotidiens (ophtalmologue), bains de bouche\n- Antalgie (paracétamol, **morphine**)',
      ],
      [
        'Prévention et traitement des infections',
        'Éviter le sepsis.',
        '- Asepsie, pas d’antibiotique systématique\n- Antibiotiques adaptés si infection documentée ou sepsis',
      ],
      [
        'Traitements spécifiques',
        'Discutés.',
        '- Corticoïdes, ciclosporine ou immunoglobulines : non consensuels, en centre spécialisé\n- DRESS : corticoïdes généraux (prednisolone) si atteinte viscérale',
      ],
    ],
    molecules: [
      ['morphine', 'premiere', 'Douleur'],
      ['paracetamol', 'premiere', 'Fièvre, douleur'],
      ['chlorure-de-sodium-0-9', 'premiere', 'Réhydratation'],
      ['chlorhexidine-gluconate', 'adjuvant', 'Antisepsie cutanée'],
      ['prednisolone', 'alternative', 'DRESS avec atteinte viscérale'],
      ['enoxaparine', 'adjuvant', 'Prévention thrombotique'],
    ],
    complications: [
      {
        nom: 'Sepsis',
        fiche: 'sepsis-et-choc-septique',
        description: 'Perte de la barrière cutanée.',
        traitement: '- Antibiotiques',
        clinique: '- Fièvre, hypotension',
        paraclinique: '- Hémocultures',
      },
      {
        nom: 'Séquelles oculaires',
        description: 'Synéchies, cécité.',
        traitement: '- Soins ophtalmologiques précoces',
        clinique: '- Photophobie, baisse de vision',
        paraclinique: '',
      },
      {
        nom: 'Déshydratation et insuffisance rénale',
        fiche: 'insuffisance-renale-aigue',
        description: 'Pertes cutanées.',
        traitement: '- Réhydratation',
        clinique: '- Oligurie',
        paraclinique: '- Créatinine',
      },
      {
        nom: 'Atteinte respiratoire',
        description: 'Décollement bronchique.',
        traitement: '- Réanimation',
        clinique: '- Dyspnée',
        paraclinique: '- SpO2',
      },
    ],
    evolution:
      '## Pronostic\n- Mortalité 5 à 10 % (Stevens-Johnson) et 30 % ou plus (Lyell) ; séquelles oculaires et cutanées fréquentes',
    urgences: ['choc-septique'],
    symptomes: [
      ['Bulles cutanées', 'tres_frequent'],
      ['Éruption cutanée', 'tres_frequent'],
      ['Fièvre', 'tres_frequent'],
      ['Dysphagie', 'frequent'],
      ['Troubles visuels', 'frequent'],
    ],
    sources: [
      'OMS — lignes directrices et publications',
      'Guide clinique et thérapeutique',
      'Consolidated guidelines on HIV prevention, testing, treatment, service delivery and monitoring',
    ],
    niveaux: {
      cs: [
        '- Arrêt du médicament suspect, transfert urgent',
        '- Toute éruption bulleuse ou atteinte muqueuse sous médicament',
      ],
      hgr: [
        '- Hospitalisation, soins de brûlé, réhydratation, soins oculaires',
        '- Décollement > 10 %, défaillances',
      ],
      tert: ['- Centre de brûlés, réanimation, ophtalmologie', ''],
    },
    alertes: { 'choc-septique': 'Toxidermie bulleuse avec fièvre, hypotension ou confusion' },
    formes: [
      {
        nom: 'Syndrome de Stevens-Johnson',
        type: 'commune',
        description: 'Décollement < 10 % avec atteinte muqueuse.',
        terrain: '- PVVIH sous cotrimoxazole ou névirapine',
        fonctionnels: '- Brûlures buccales et oculaires',
        generaux: '- Fièvre',
        physiques: '- Érosions muqueuses, bulles, cocardes atypiques',
        paraclinique: '',
        etiologies: '- Sulfamides, névirapine, antiépileptiques',
        syndromes: [],
      },
      {
        nom: 'Syndrome de Lyell',
        type: 'gravite',
        description: 'Décollement > 30 %.',
        terrain: '- Exposition médicamenteuse récente',
        fonctionnels: '- Douleur cutanée intense',
        generaux: '- Fièvre, déshydratation, hypotension',
        physiques: '- Décollement en « linge mouillé », Nikolsky positif',
        paraclinique: '- SCORTEN élevé',
        etiologies: '- Médicament',
        syndromes: ['syndrome-de-choc', 'syndrome-infectieux'],
      },
    ],
  },
];
