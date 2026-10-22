import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { useAuth } from '../context/auth.jsx';
import { useActualisationAuRetour } from '../hooks/useActualisationAuRetour.js';
import { accueilHorsLigne } from '../../core/offline/actualitesHorsLigne.js';
import { TYPES_ACTUALITE } from '../../core/labels.js';
import { BandeauActualites } from '../components/BandeauActualites.jsx';
import '../../styles/vitrine.css';
import { dateLocale } from '../../core/dates.js';

/**
 * Page d'accueil (route « / »), pour tous, connectés ou non, d'après la maquette
 * docs/maquettes/accueil-public.html : bandeau, en-tête en verre, héros avec carrousel
 * « à la une », actualités, contenus, chiffres réels, publics visés, appel à l'inscription.
 *
 * Connecté, l'en-tête montre le nom, « Mon espace » et « Se déconnecter » au lieu de l'inscription.
 * C'est la seule page où paraissent les alertes sanitaires (fil défilant, carrousel, cartes).
 *
 * Les actualités et les chiffres viennent de GET /api/accueil (publiques, mises en cache
 * hors ligne). Sans réponse, la page reste complète avec ses textes fixes : rien n'est inventé.
 */

const LIENS = [
  { href: '#actualites', label: 'Actualités' },
  { href: '#contenu-ref', label: 'Ce qu’on y trouve' },
  { href: '#pour-qui', label: 'Pour qui' },
  { href: '#contact', label: 'Contact' },
];

const nombre = (n) => Number(n || 0).toLocaleString('fr-FR');
const date = (d) => (d ? dateLocale(d).toLocaleDateString('fr-FR', { dateStyle: 'medium' }) : '');
const court = (t, n) => (t && t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);

/** Page de la fiche ou de la molécule liée à une actualité publiée, si elle en a une. */
const lienActualite = (a) =>
  a.pathologie_slug
    ? `/pathologies/${a.pathologie_slug}`
    : a.molecule_slug
      ? `/molecules/${a.molecule_slug}`
      : null;

const Icone = ({ children, taille = 26 }) => (
  <svg
    viewBox="0 0 24 24"
    width={taille}
    height={taille}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

function Marque({ sousTitre = true }) {
  return (
    <>
      <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true" className="v-marque">
        <rect width="32" height="32" rx="8" fill="#2f80d8" />
        <path d="M13 7h6v6h6v6h-6v6h-6v-6H7v-6h6z" fill="#fff" />
        <path d="M24.5 4.5l1 2.2 2.4.2-1.8 1.6.6 2.3-2.2-1.2-2.1 1.2.5-2.3-1.8-1.6 2.4-.2z" fill="#f7d618" />
      </svg>
      <span className="v-marque-nom">
        MedRef RDC
        {sousTitre && <small>Référence clinique</small>}
      </span>
    </>
  );
}

// ------------------------------------------------------------------ données

/** Diapositives « à la une » : le slogan, puis la première alerte publiée, puis les nouveautés. */
function diapositives(accueil) {
  const t = accueil?.totaux || {};
  const liste = [
    {
      cle: 'slogan',
      etiquette: 'Actualités · protocoles · produits · fiches',
      titre: (
        <>
          La santé en RDC,
          <br />
          la référence clinique au même endroit
        </>
      ),
      texte:
        'Alertes sanitaires, protocoles nationaux, nouveaux produits autorisés et fiches relues par des médecins.',
    },
  ];
  const alerte = accueil?.alertes?.[0];
  if (alerte) {
    liste.push({
      cle: `alerte-${alerte.id}`,
      etiquette: [TYPES_ACTUALITE[alerte.type], alerte.zone, date(alerte.publie_le)]
        .filter(Boolean)
        .join(' · '),
      titre: alerte.titre,
      texte: court(alerte.resume, 180),
      source: alerte.source_titre,
    });
  }
  liste.push({
    cle: 'ordonnance',
    etiquette: 'Nouveau',
    titre: 'L’ordonnance guidée par les fiches',
    texte:
      'Diagnostic, bilans et traitements de la fiche, dose calculée au poids, durée choisie dans la fiche pharmacologique.',
  });
  if (t.amm) {
    liste.push({
      cle: 'amm',
      etiquette: 'Répertoire',
      titre: `${nombre(t.amm)} autorisations ACOREP au répertoire`,
      texte: `${nombre(t.produits)} produits consultables, avec leurs molécules, leurs firmes et leurs photos.`,
    });
  }
  return liste;
}

const CLASSES_TYPE = {
  alerte_sanitaire: 'v-actu-alerte',
  pharmacovigilance: 'v-actu-pharmaco',
  protocole: 'v-actu-protocole',
  innovation: 'v-actu-innovation',
  information: 'v-actu-info',
};

/** Rubriques de la section Actualités, dans l'ordre d'affichage. */
const RUBRIQUES = [
  { type: 'alerte_sanitaire', titre: 'Alertes sanitaires' },
  { type: 'pharmacovigilance', titre: 'Pharmacovigilance et retraits de lots' },
  { type: 'protocole', titre: 'Protocoles et recommandations' },
  { type: 'innovation', titre: 'Innovations' },
  { type: 'information', titre: 'Informations' },
];

/** Carte d'une actualité publiée (veille automatique ou administrateurs). */
function carteActualite(a) {
  return {
    cle: `actu-${a.id}`,
    classe: CLASSES_TYPE[a.type] || 'v-actu-info',
    etiquette:
      [a.zone, date(a.publie_le)].filter(Boolean).join(' · ') || TYPES_ACTUALITE[a.type] || 'Actualité',
    titre: a.titre,
    lien: lienActualite(a),
    texte: a.resume,
    note: a.traduction_auto ? 'traduit automatiquement' : '',
    source: { titre: a.source_titre, url: a.source_url },
    // Photo que la source publie pour cet article, avec son crédit (jamais d'image sans rapport)
    image: a.image_url || null,
    legende: a.image_url ? `Photo : ${a.source_titre}` : '',
  };
}

/**
 * Cartes de produits pour l'accueil, une par produit avec sa photo (marques en double écartées) :
 * les nouveaux produits (ajoutés ces derniers jours) et des produits de la base tirés au hasard.
 */
function cartesProduits(liste, etiquette) {
  const vus = new Set();
  return (liste || [])
    .filter((p) => p.photo_url && !vus.has(p.nom_commercial) && vus.add(p.nom_commercial))
    .map((p) => ({
      cle: `produit-${p.id}`,
      classe: 'v-actu-produits',
      etiquette,
      titre: [p.nom_commercial, p.operateur].filter(Boolean).join(' · '),
      lien: `/medicaments/${p.id}`,
      image: p.photo_url,
      contenir: true,
      texte: court(p.dci, 90),
      note: 'Au catalogue des firmes',
    }));
}

/**
 * Rubriques de la section Actualités : une par type d'actualité publiée (vides omises), puis
 * les nouveautés de MedRef RDC. Chaque rubrique fait défiler ses cartes toute seule.
 */
export function rubriquesActualites(accueil) {
  if (!accueil) return [];
  const toutes = [...(accueil.alertes || []), ...(accueil.actualites || [])].sort(
    (x, y) => String(y.publie_le || '').localeCompare(String(x.publie_le || '')) || y.id - x.id,
  );
  const rubriques = RUBRIQUES.map((r) => ({
    cle: r.type,
    titre: r.titre,
    classe: CLASSES_TYPE[r.type],
    cartes: toutes.filter((a) => a.type === r.type).map(carteActualite),
  })).filter((r) => r.cartes.length);
  const rubriquesProduits = [
    {
      cle: 'medref',
      titre: 'Nouveaux produits en photo',
      cartes: cartesProduits(accueil.produits, 'Nouveau produit'),
    },
    {
      cle: 'decouverte',
      titre: 'À découvrir dans la base',
      cartes: cartesProduits(accueil.produits_decouverte, 'Produit de la base'),
    },
  ];
  for (const r of rubriquesProduits) if (r.cartes.length) rubriques.push({ ...r, classe: 'v-actu-fiches' });
  return rubriques;
}

// ------------------------------------------------------------------ blocs

function Carrousel({ diapos, connecte }) {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  const n = diapos.length;
  const courante = diapos[Math.min(i, n - 1)];

  useEffect(() => {
    const reduit = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (pause || reduit || n < 2) return undefined;
    const minuterie = setInterval(() => setI((x) => (x + 1) % n), 7000);
    return () => clearInterval(minuterie);
  }, [pause, n]);

  return (
    <div
      className="v-diapo"
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      onFocus={() => setPause(true)}
      onBlur={() => setPause(false)}
    >
      <p className="v-pastille">{courante.etiquette}</p>
      <div key={courante.cle} className="v-diapo-texte">
        <h1>{courante.titre}</h1>
        <p>{courante.texte}</p>
        {courante.source && <p className="v-diapo-source">Source : {courante.source}</p>}
      </div>
      <div className="v-actions">
        {connecte ? (
          <Link to="/espace" className="v-btn v-btn-plein">
            Ouvrir mon espace
          </Link>
        ) : (
          <Link to="/connexion" className="v-btn v-btn-plein">
            Se connecter
          </Link>
        )}
        <a href="#actualites" className="v-btn v-btn-contour">
          Lire les actualités
        </a>
      </div>
      {n > 1 && (
        <div className="v-points" role="group" aria-label="Actualités à la une">
          {diapos.map((d, k) => (
            <button
              key={d.cle}
              type="button"
              className={k === i ? 'is-actif' : undefined}
              aria-label={`À la une ${k + 1} sur ${n}`}
              aria-pressed={k === i}
              onClick={() => setI(k)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const RACCOURCIS_FICHE = [
  ['diagnostic', 'Diagnostic'],
  ['therapeutique', 'Traitement'],
  ['niveaux', 'Niveaux de soins'],
];

/** Première idée du résumé (avant les deux-points ou le point-virgule), pour une carte courte. */
const accroche = (resume) =>
  court(
    String(resume || '')
      .split(/\s:\s|;/)[0]
      .trim(),
    130,
  );

/** « validée par Dr Nom » pour un médecin, sinon le nom du compte. */
const validateur = (f) =>
  f.valide_par
    ? `${/^medecin/.test(f.valide_par_profil || '') && !/^dr\.? /i.test(f.valide_par) ? 'Dr ' : ''}${f.valide_par}`
    : '';

/**
 * Fiche du jour : une vraie fiche, différente chaque jour (choisie par le serveur parmi les fiches
 * validées), avec son résumé, des raccourcis vers ses onglets, son statut de validation et
 * l'avancement réel de la relecture de l'ensemble des fiches.
 */
function FicheDuJour({ fiche, totaux }) {
  const pct = totaux?.fiches ? Math.round((100 * (totaux.fiches_validees || 0)) / totaux.fiches) : null;
  if (!fiche) {
    return (
      <div className="v-ecran" aria-hidden="true">
        <p className="v-ecran-titre">Fiche pathologie</p>
        <p className="v-ecran-gros">Paludisme grave</p>
        <p>Diagnostic · Traitement · Niveaux de soins</p>
      </div>
    );
  }
  const lien = `/pathologies/${fiche.slug}`;
  const validee = fiche.statut === 'valide';
  return (
    <section className="v-ecran v-ecran-fiche" aria-label="Fiche du jour">
      <p className="v-ecran-titre">Fiche du jour{fiche.specialite ? ` · ${fiche.specialite}` : ''}</p>
      <Link to={lien} className="v-ecran-gros v-ecran-lien">
        {fiche.nom}
      </Link>
      {fiche.resume && <p className="v-ecran-resume">{accroche(fiche.resume)}</p>}
      <p className="v-ecran-onglets">
        {RACCOURCIS_FICHE.map(([onglet, libelle]) => (
          <Link key={onglet} to={`${lien}?onglet=${onglet}`}>
            {libelle}
          </Link>
        ))}
      </p>
      <span className={`v-ecran-tag${validee ? ' v-ecran-tag-ok' : ''}`}>
        {validee ? `Validée${fiche.valide_par ? ` par ${validateur(fiche)}` : ''}` : 'En relecture médicale'}
      </span>
      {pct !== null && (
        <div className="v-ecran-avancement">
          <div
            className="v-ecran-barre"
            role="progressbar"
            aria-label="Fiches validées par un médecin"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={pct}
          >
            <i style={{ width: `${pct}%` }} />
          </div>
          <p>
            {nombre(totaux.fiches_validees)} fiches validées sur {nombre(totaux.fiches)}
          </p>
        </div>
      )}
    </section>
  );
}

function Ecrans({ cote, totaux, fiche }) {
  if (cote === 'gauche') {
    return (
      <div className="v-ecrans">
        <FicheDuJour fiche={fiche} totaux={totaux} />
        <div className="v-ecran" aria-hidden="true">
          <p className="v-ecran-titre">Hors ligne</p>
          <p className="v-ecran-gros">
            {totaux?.fiches ? `${nombre(totaux.fiches)} fiches` : 'Toutes les fiches'}
          </p>
          <p>téléchargées sur le téléphone, lisibles sans réseau</p>
        </div>
      </div>
    );
  }
  return (
    <div className="v-ecrans v-ecrans-droite" aria-hidden="true">
      <div className="v-ecran">
        <p className="v-ecran-titre">Calcul de dose</p>
        <p className="v-ecran-gros">Artésunate IV</p>
        <p>Enfant de 4 ans, 15 kg</p>
        <p className="v-ecran-calc">
          <span>3 mg/kg × 15 kg</span>
          <b>45 mg</b>
        </p>
        <p className="v-ecran-calc">
          <span>Flacon de 60 mg</span>
          <b>0,75 flacon</b>
        </p>
      </div>
      <div className="v-ecran">
        <p className="v-ecran-titre">Avis entre pairs</p>
        <p className="v-ecran-gros">Avis sourcé et examiné</p>
        <p>Votes « pertinent et sourcé », puis relecture médicale</p>
        <span className="v-ecran-tag v-ecran-tag-ok">Publié après modération</span>
      </div>
    </div>
  );
}

const DECOS = {
  'v-actu-alerte': <path d="M12 3l9 16H3zM12 10v4M12 17h.01" />,
  'v-actu-pharmaco': <path d="M4.5 12.5l8-8a4.2 4.2 0 0 1 6 6l-8 8a4.2 4.2 0 0 1-6-6zM8.5 8.5l7 7" />,
  'v-actu-protocole': <path d="M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4" />,
  'v-actu-innovation': (
    <path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M18.4 5.6l-2.1 2.1M21 12h-3M9 18h6M10 21h4M12 8a4 4 0 0 0-2 7.5V18h4v-2.5A4 4 0 0 0 12 8z" />
  ),
  'v-actu-fiches': <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h4" />,
  'v-actu-info': <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01" />,
};

/** Grande icône décorative d'une rubrique, selon son type. */
function DecoActu({ classe }) {
  return (
    <svg
      className="v-actu-deco"
      viewBox="0 0 24 24"
      width="170"
      height="170"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {DECOS[classe] || DECOS['v-actu-info']}
    </svg>
  );
}

/**
 * Photo d'une carte, en arrière-plan de son texte sous un voile sombre : la photo que la source
 * associe à son article (hébergée chez elle, avec son crédit). Sans photo, la carte garde la
 * couleur de sa rubrique — jamais une image sans rapport. Les photos de produits, sur fond
 * blanc, restent en vignette à côté du texte.
 */
function FondPhoto({ c }) {
  const [echec, setEchec] = useState(false);
  if (!c.image || c.contenir || echec) return null;
  return (
    <figure className="v-fond-photo">
      <img src={c.image} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setEchec(true)} />
      {c.legende && <figcaption>{c.legende}</figcaption>}
    </figure>
  );
}

/** Contenu d'une carte d'actualité dans sa rubrique : photo en arrière-plan, texte par-dessus. */
function Carte({ c }) {
  return (
    <>
      <FondPhoto c={c} />
      <div className="v-carte-texte">
        {c.image && c.contenir && (
          <img className="v-actu-photo" src={c.image} alt="" loading="lazy" referrerPolicy="no-referrer" />
        )}
        <CarteTexte c={c} />
      </div>
    </>
  );
}

function CarteTexte({ c }) {
  return (
    <>
      <p className="v-carte-quand">{c.etiquette}</p>
      <h4>{c.lien ? <Link to={c.lien}>{c.titre}</Link> : c.titre}</h4>
      {c.texte && <p className="v-actu-texte">{c.texte}</p>}
      {c.liste?.length > 0 && (
        <ul className="v-actu-liste">
          {c.liste.map((x) => (
            <li key={x.lien}>
              <Link to={x.lien}>{x.nom}</Link>
            </li>
          ))}
        </ul>
      )}
      {(c.note || c.source?.titre) && (
        <p className="v-actu-note">
          {c.source?.titre && (
            <>
              Source :{' '}
              {c.source.url ? (
                <a href={c.source.url} target="_blank" rel="noopener noreferrer">
                  {c.source.titre}
                </a>
              ) : (
                c.source.titre
              )}
              {c.note && ' · '}
            </>
          )}
          {c.note}
        </p>
      )}
    </>
  );
}

/**
 * Rubrique qui fait défiler ses cartes toute seule (une toutes les 8 secondes, décalée d'une
 * rubrique à l'autre). Pause au survol et au clavier ; boutons précédente / suivante ;
 * pas de défilement automatique si l'utilisateur a demandé moins d'animations.
 */
function Rubrique({ r, rang }) {
  const [i, setI] = useState(0);
  const [pause, setPause] = useState(false);
  const n = r.cartes.length;
  const k = Math.min(i, n - 1);
  const duree = 8 + rang * 1.3;

  useEffect(() => {
    const reduit = globalThis.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (pause || reduit || n < 2) return undefined;
    const minuterie = setInterval(() => setI((x) => (x + 1) % n), duree * 1000);
    return () => clearInterval(minuterie);
  }, [pause, n, duree]);

  const aller = (pas) => setI((x) => (x + pas + n) % n);
  const titreId = `rubrique-${r.cle}`;
  return (
    <li
      className={`v-actu v-rubrique ${r.classe}`}
      aria-labelledby={titreId}
      onMouseEnter={() => setPause(true)}
      onMouseLeave={() => setPause(false)}
      onFocus={() => setPause(true)}
      onBlur={() => setPause(false)}
    >
      <DecoActu classe={r.classe} />
      <div className="v-rubrique-tete">
        <h3 id={titreId} className="v-rubrique-titre">
          {r.titre}
        </h3>
        {n > 1 && (
          <div className="v-rubrique-nav">
            <button type="button" onClick={() => aller(-1)} aria-label={`${r.titre} : actualité précédente`}>
              ‹
            </button>
            <span>
              {k + 1} / {n}
            </span>
            <button type="button" onClick={() => aller(1)} aria-label={`${r.titre} : actualité suivante`}>
              ›
            </button>
          </div>
        )}
      </div>
      <div className="v-rubrique-corps">
        {r.cartes.map((c, x) => (
          <article
            key={c.cle}
            className={`v-rubrique-carte${c.image && !c.contenir ? ' avec-photo' : ''}`}
            hidden={x !== k}
          >
            <Carte c={c} />
          </article>
        ))}
      </div>
      {n > 1 && (
        <div className="v-rubrique-barre" aria-hidden="true">
          <i key={k} className={pause ? 'is-pause' : undefined} style={{ animationDuration: `${duree}s` }} />
        </div>
      )}
    </li>
  );
}

function Actualites({ accueil, erreur }) {
  const rubriques = rubriquesActualites(accueil);
  return (
    <section id="actualites" className="v-section">
      <h2 className="v-titre">Actualités</h2>
      <p className="v-sous-titre">
        Relevées automatiquement sur les sources officielles ou publiées par les administrateurs, chacune avec
        sa source ; chaque rubrique défile toute seule
      </p>
      {accueil?.hors_ligne && (
        <p className="v-hors-ligne" role="status">
          Hors connexion : actualités téléchargées le {date(accueil.hors_ligne.telecharge_le)}. Chacune reste
          lisible {accueil.hors_ligne.conservation_jours || 30} jours après sa publication, puis est effacée
          de l’appareil.
        </p>
      )}
      {rubriques.length > 0 ? (
        <ul className="v-rubriques" data-impair={rubriques.length % 2 === 1 ? '' : undefined}>
          {rubriques.map((r, rang) => (
            <Rubrique key={r.cle} r={r} rang={rang} />
          ))}
        </ul>
      ) : (
        <p className="v-vide">
          {erreur
            ? 'Les actualités s’afficheront au retour de la connexion.'
            : accueil
              ? 'Aucune actualité pour le moment.'
              : 'Chargement des actualités…'}
        </p>
      )}
      <p className="v-actus-tout">
        <Link to="/actualites" className="v-btn v-btn-contour-sombre">
          Toutes les actualités
        </Link>
      </p>
    </section>
  );
}

const CONTENUS = [
  {
    titre: 'Pathologies',
    texte: (t) => (t.fiches ? `${nombre(t.fiches)} fiches, 5 départements` : 'Fiches par département'),
    icone: (
      <Icone>
        <path d="M6 4v6a6 6 0 0 0 12 0V4" />
        <path d="M12 16v2a3 3 0 0 0 6 0v-2" />
        <circle cx="18" cy="14" r="2" />
      </Icone>
    ),
  },
  {
    titre: 'Urgences',
    texte: () => 'Conduite ABCDE, signes de gravité',
    icone: (
      <Icone>
        <path d="M3 12h4l3-8 4 16 3-8h4" />
      </Icone>
    ),
  },
  {
    titre: 'Médicaments',
    texte: (t) => (t.molecules ? `${nombre(t.molecules)} molécules, posologies` : 'Molécules et posologies'),
    icone: (
      <Icone>
        <rect x="3" y="9" width="18" height="7" rx="3.5" transform="rotate(-35 12 12.5)" />
        <path d="M9.5 8.5l5 7" />
      </Icone>
    ),
  },
  {
    titre: 'Ordonnance',
    texte: () => 'Dose au poids, durées de la fiche',
    icone: (
      <Icone>
        <path d="M7 3h7l5 5v13H7z" />
        <path d="M14 3v5h5M10 13h6M10 17h4" />
      </Icone>
    ),
  },
  {
    titre: 'Avis entre pairs',
    texte: () => 'Sourcés, examinés, modérés',
    icone: (
      <Icone>
        <path d="M4 5h11v8H8l-4 3z" />
        <path d="M15 9h5v8l-3-2h-6v-2" />
      </Icone>
    ),
  },
];

const PROFILS_VITRINE = [
  {
    titre: 'Médecins',
    texte: 'Généralistes et spécialistes',
    icone: <path d="M6 4v6a6 6 0 0 0 12 0V4M12 16v2a3 3 0 0 0 6 0v-2" />,
  },
  {
    titre: 'Infirmiers, sages-femmes',
    texte: 'Contenu adapté au centre de santé',
    icone: <path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.5-7 10-7 10z" />,
  },
  {
    titre: 'Pharmaciens',
    texte: 'Molécules, produits, interactions',
    icone: <path d="M9 3h6v4l3 3v11H6V10l3-3zM9 14h6M12 11v6" />,
  },
  {
    titre: 'Étudiants, internes',
    texte: 'Consultation et formation',
    icone: <path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5" />,
  },
];

const ATOUTS = [
  'Fiches téléchargées sur le téléphone, lisibles hors connexion',
  'Ordonnances rédigées sans réseau, envoyées au retour de la connexion',
  'Niveaux de soins : centre de santé, hôpital général, hôpital tertiaire',
  'Sources : OMS et programmes nationaux, citées sur chaque fiche',
];

// ------------------------------------------------------------------ page

export function VitrinePage() {
  const { api, actualitesHorsLigne } = useServices();
  const { user, logout } = useAuth();
  const [ouvert, setOuvert] = useState(false);
  const [accueil, setAccueil] = useState(null);
  const [erreur, setErreur] = useState(false);
  const fermer = () => setOuvert(false);

  const monte = useRef(true);
  const charger = useCallback(() => {
    if (typeof api.accueil !== 'function') return;
    // Sans réseau : actualités gardées sur l'appareil (jusqu'à leur expiration)
    const gardees = async () => {
      if (!actualitesHorsLigne) return null;
      const [liste, etat] = await Promise.all([actualitesHorsLigne.lister(), actualitesHorsLigne.etat()]);
      return liste.length ? accueilHorsLigne(liste, etat) : null;
    };
    const horsReseau = typeof navigator !== 'undefined' && navigator.onLine === false;
    const source = horsReseau
      ? gardees().then((d) => {
          if (!d) throw new Error('hors ligne');
          return d;
        })
      : api.accueil().catch((err) =>
          gardees().then((d) => {
            if (!d) throw err;
            return d;
          }),
        );
    source
      .then((d) => {
        if (!monte.current) return;
        setAccueil(d || null);
        setErreur(false);
      })
      .catch(() => monte.current && setErreur(true));
  }, [api, actualitesHorsLigne]);

  useEffect(() => {
    monte.current = true;
    charger();
    return () => {
      monte.current = false;
    };
  }, [charger]);

  // Retour d'internet : actualités rechargées, puis relevées sur les sources officielles
  useActualisationAuRetour(charger);

  const diapos = useMemo(() => diapositives(accueil), [accueil]);
  const t = accueil?.totaux;

  return (
    <div className="vitrine">
      <a href="#actualites" className="v-skip">
        Aller au contenu
      </a>

      <div className="v-bandeau">
        <div className="v-bandeau-in">
          <span>La référence clinique des professionnels de santé de la RDC</span>
          <span>Conçue par le Dr Ben Mingalu · utilisable sans réseau</span>
        </div>
      </div>

      <header className="v-heros">
        <div className="v-entete">
          <div className="v-nav">
            <a href="#actualites" className="v-brand" aria-label="MedRef RDC, actualités">
              <Marque />
            </a>
            <nav
              id="v-menu"
              aria-label="Navigation principale"
              className={`v-liens${ouvert ? ' is-ouvert' : ''}`}
            >
              {LIENS.map((l) => (
                <a key={l.href} href={l.href} onClick={fermer}>
                  {l.label}
                </a>
              ))}
              {user ? (
                <>
                  <span className="v-nav-nom" title={user.email}>
                    {user.nom}
                  </span>
                  <button
                    type="button"
                    className="v-btn v-btn-contour v-nav-cta"
                    onClick={() => {
                      fermer();
                      logout();
                    }}
                  >
                    Se déconnecter
                  </button>
                  <Link to="/espace" className="v-btn v-btn-plein v-nav-cta" onClick={fermer}>
                    Mon espace
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/inscription" className="v-btn v-btn-contour v-nav-cta" onClick={fermer}>
                    Créer un compte
                  </Link>
                  <Link to="/connexion" className="v-btn v-btn-plein v-nav-cta" onClick={fermer}>
                    Se connecter
                  </Link>
                </>
              )}
            </nav>
            <Link to={user ? '/espace' : '/connexion'} className="v-btn v-btn-plein v-nav-mobile">
              {user ? 'Mon espace' : 'Se connecter'}
            </Link>
            <button
              type="button"
              className="v-burger"
              aria-expanded={ouvert}
              aria-controls="v-menu"
              onClick={() => setOuvert((o) => !o)}
            >
              <span className="v-sr">Menu</span>
              <span aria-hidden="true" className="v-burger-barres" />
            </button>
          </div>
        </div>

        <div className="v-heros-corps">
          <Ecrans cote="gauche" totaux={t} fiche={accueil?.fiche_du_jour} />
          <Carrousel diapos={diapos} connecte={Boolean(user)} />
          <Ecrans cote="droite" totaux={t} />
        </div>
      </header>

      {accueil && (
        <div className="v-fil">
          <BandeauActualites actualites={[...(accueil.alertes || []), ...(accueil.actualites || [])]} />
        </div>
      )}

      <main>
        <Actualites accueil={accueil} erreur={erreur} />

        <section id="contenu-ref" className="v-section v-section-serree">
          <h2 className="v-titre">Ce que vous trouverez</h2>
          <p className="v-sous-titre">Après connexion, selon votre profil professionnel</p>
          <ul className="v-cartes">
            {CONTENUS.map((c) => (
              <li key={c.titre} className="v-carte">
                <span className="v-carte-icone">{c.icone}</span>
                <h3>{c.titre}</h3>
                <p>{c.texte(t || {})}</p>
              </li>
            ))}
          </ul>
        </section>

        {t && (
          <section className="v-chiffres" aria-label="MedRef RDC en chiffres">
            <ul>
              <li>
                <b>{nombre(t.fiches)}</b>
                <span>fiches de pathologies</span>
              </li>
              <li>
                <b>{nombre(t.molecules)}</b>
                <span>molécules</span>
              </li>
              <li>
                <b>{nombre(t.produits)}</b>
                <span>produits consultables</span>
              </li>
              <li>
                <b>{nombre(t.amm)}</b>
                <span>AMM ACOREP</span>
              </li>
              <li>
                <b>26</b>
                <span>provinces couvertes</span>
              </li>
            </ul>
          </section>
        )}

        <section id="pour-qui" className="v-section v-deux">
          <div>
            <h2 className="v-titre v-gauche">Pour qui ?</h2>
            <p className="v-texte">
              Pour les professionnels de santé. Votre numéro d’ordre est vérifié par un administrateur pour
              imprimer des ordonnances à en-tête et donner des avis.
            </p>
            <ul className="v-profils">
              {PROFILS_VITRINE.map((p) => (
                <li key={p.titre}>
                  <span className="v-profil-icone">
                    <Icone taille={20}>{p.icone}</Icone>
                  </span>
                  <span>
                    <b>{p.titre}</b>
                    <span>{p.texte}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="v-carte-rdc">
            <h3>Partout en RDC, même sans réseau</h3>
            <ul>
              {ATOUTS.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="v-appel" aria-labelledby="v-appel-titre">
          <div className="v-appel-in">
            {user ? (
              <>
                <h2 id="v-appel-titre">Reprendre votre travail</h2>
                <p>Recherche, fiches, ordonnances et suivi de votre compte dans votre espace.</p>
                <div className="v-actions v-actions-centre">
                  <Link to="/espace" className="v-btn v-btn-plein">
                    Ouvrir mon espace
                  </Link>
                </div>
              </>
            ) : (
              <>
                <h2 id="v-appel-titre">Rejoignez les soignants de MedRef RDC</h2>
                <p>Inscription gratuite, réservée aux professionnels et étudiants en santé.</p>
                <div className="v-actions v-actions-centre">
                  <Link to="/inscription" className="v-btn v-btn-plein">
                    Créer un compte
                  </Link>
                  <Link to="/connexion" className="v-btn v-btn-contour">
                    J’ai déjà un compte
                  </Link>
                </div>
              </>
            )}
          </div>
        </section>
      </main>

      <footer id="contact" className="v-pied">
        <div className="v-pied-grille">
          <div>
            <a href="#actualites" className="v-brand" aria-label="MedRef RDC, haut de page">
              <Marque sousTitre={false} />
            </a>
            <p>
              Bibliothèque de référence pour les professionnels de santé de la République démocratique du
              Congo. Elle ne remplace pas le jugement clinique.
            </p>
          </div>
          <nav aria-label="Liens du pied de page">
            <h3>Navigation</h3>
            <ul>
              {LIENS.slice(0, 3).map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
              <li>
                <Link to="/hors-ligne">Utiliser sans connexion</Link>
              </li>
            </ul>
          </nav>
          <div>
            <h3>Compte</h3>
            {user ? (
              <ul>
                <li>
                  <Link to="/espace">Mon espace</Link>
                </li>
                <li>
                  <Link to="/compte">Mon compte</Link>
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <Link to="/connexion">Se connecter</Link>
                </li>
                <li>
                  <Link to="/inscription">Créer un compte</Link>
                </li>
                <li>
                  <Link to="/mot-de-passe-oublie">Mot de passe oublié</Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              Dr Ben Mingalu
              <br />
              <a href="mailto:bmingalu@gmail.com">bmingalu@gmail.com</a>
            </p>
          </div>
        </div>
        <p className="v-pied-bas">
          © {new Date().getFullYear()} MedRef RDC · Aide à la décision : la responsabilité reste celle du
          soignant
        </p>
      </footer>
    </div>
  );
}
