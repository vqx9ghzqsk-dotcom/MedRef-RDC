import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useServices } from '../context/services.jsx';
import { TYPES_ACTUALITE } from '../../core/labels.js';
import { BandeauActualites } from '../components/BandeauActualites.jsx';
import '../../styles/vitrine.css';
import { dateLocale } from '../../core/dates.js';

/**
 * Page publique affichée aux visiteurs non connectés (route « / »), d'après la maquette
 * docs/maquettes/accueil-public.html : bandeau, en-tête en verre, héros avec carrousel
 * « à la une », actualités, contenus, chiffres réels, publics visés, appel à l'inscription.
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

/** « Dr Nom, spécialité » pour un médecin validateur, sinon le nom du compte. */
export const signataire = (f) => {
  if (!f?.valide_par) return '';
  const dr = /^medecin/.test(f.valide_par_profil || '') && !/^dr\.? /i.test(f.valide_par) ? 'Dr ' : '';
  return `${dr}${f.valide_par}${f.valide_par_specialite ? `, ${f.valide_par_specialite}` : ''}`;
};

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
  pharmacovigilance: 'v-actu-alerte',
  protocole: 'v-actu-protocole',
  innovation: 'v-actu-innovation',
  information: 'v-actu-info',
};

/** Cartes d'actualités : publications des administrateurs d'abord, puis nouveautés de la base. */
export function cartesActualites(accueil) {
  if (!accueil) return [];
  const cartes = [];
  for (const a of [...(accueil.alertes || []), ...(accueil.actualites || [])]) {
    cartes.push({
      cle: `actu-${a.id}`,
      classe: CLASSES_TYPE[a.type] || 'v-actu-info',
      etiquette: TYPES_ACTUALITE[a.type] || 'Actualité',
      titre: a.titre,
      lien: lienActualite(a),
      texte: a.resume,
      note: [a.zone, date(a.publie_le), a.traduction_auto ? 'traduit automatiquement' : null]
        .filter(Boolean)
        .join(' · '),
      source: { titre: a.source_titre, url: a.source_url },
    });
  }
  const t = accueil.totaux || {};
  const validees = accueil.fiches_validees || [];
  if (validees.length) {
    const f = validees[0];
    cartes.push({
      cle: 'fiches-validees',
      classe: 'v-actu-fiches',
      etiquette: 'Fiches validées',
      titre: f.nom,
      lien: `/pathologies/${f.slug}`,
      texte: `Validée le ${date(f.valide_le)}${f.valide_par ? ` par ${signataire(f)}` : ''}.`,
      liste: validees.slice(1, 5).map((x) => ({ nom: x.nom, lien: `/pathologies/${x.slug}` })),
      note: `${nombre(t.fiches_validees)} fiches validées sur ${nombre(t.fiches)}`,
    });
  } else if (t.fiches) {
    cartes.push({
      cle: 'fiches-relecture',
      classe: 'v-actu-fiches',
      etiquette: 'Fiches',
      titre: `${nombre(t.fiches)} fiches en relecture médicale`,
      texte: 'Chaque fiche validée apparaîtra ici avec sa date et le nom du médecin relecteur.',
      note: 'Mis à jour automatiquement',
    });
  }
  const produits = accueil.produits || [];
  if (produits.length) {
    const p = produits[0];
    const vus = new Set([p.nom_commercial]);
    const autres = produits.slice(1).filter((x) => !vus.has(x.nom_commercial) && vus.add(x.nom_commercial));
    cartes.push({
      cle: 'produits',
      classe: 'v-actu-produits',
      etiquette: 'Produits en photo',
      titre: [p.nom_commercial, p.operateur].filter(Boolean).join(' · '),
      lien: `/medicaments/${p.id}`,
      photo: p.photo_url,
      texte: court(p.dci, 90),
      liste: autres.slice(0, 3).map((x) => ({ nom: x.nom_commercial, lien: `/medicaments/${x.id}` })),
      note: 'Au catalogue des firmes',
    });
  }
  const majs = accueil.fiches_mises_a_jour || [];
  if (majs.length) {
    cartes.push({
      cle: 'mises-a-jour',
      classe: 'v-actu-maj',
      etiquette: 'Mises à jour',
      titre: 'Fiches mises à jour',
      liste: majs.slice(0, 4).map((f) => ({ nom: f.nom, lien: `/pathologies/${f.slug}` })),
      note: date(majs[0].updated_at),
    });
  }
  return cartes.slice(0, 5);
}

// ------------------------------------------------------------------ blocs

function Carrousel({ diapos }) {
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
        <Link to="/connexion" className="v-btn v-btn-plein">
          Se connecter
        </Link>
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

function Ecrans({ cote, totaux }) {
  if (cote === 'gauche') {
    return (
      <div className="v-ecrans" aria-hidden="true">
        <div className="v-ecran">
          <p className="v-ecran-titre">Fiche pathologie</p>
          <p className="v-ecran-gros">Paludisme grave</p>
          <p>Diagnostic · Traitement · Niveaux de soins</p>
          <div className="v-ecran-barre">
            <i style={{ width: '72%' }} />
          </div>
          <span className="v-ecran-tag">Relecture médicale</span>
        </div>
        <div className="v-ecran">
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
  'v-actu-protocole': <path d="M9 4h6v3H9zM7 5H5v16h14V5h-2M9 12h6M9 16h4" />,
  'v-actu-innovation': (
    <path d="M12 3v3M5.6 5.6l2.1 2.1M3 12h3M18.4 5.6l-2.1 2.1M21 12h-3M9 18h6M10 21h4M12 8a4 4 0 0 0-2 7.5V18h4v-2.5A4 4 0 0 0 12 8z" />
  ),
  'v-actu-produits': <path d="M4.5 12.5l8-8a4.2 4.2 0 0 1 6 6l-8 8a4.2 4.2 0 0 1-6-6zM8.5 8.5l7 7" />,
  'v-actu-fiches': <path d="M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h4" />,
  'v-actu-maj': <path d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4" />,
  'v-actu-info': <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 11v5M12 8h.01" />,
};

/** Grande icône décorative de la carte « à la une », selon le type d'actualité. */
function DecoActu({ classe }) {
  return (
    <svg
      className="v-actu-deco"
      viewBox="0 0 24 24"
      width="200"
      height="200"
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

function Actualites({ accueil, erreur }) {
  const cartes = cartesActualites(accueil);
  return (
    <section id="actualites" className="v-section">
      <h2 className="v-titre">Actualités</h2>
      <p className="v-sous-titre">
        Publiées avec leur source par les administrateurs, et nouveautés de MedRef RDC mises à jour
        automatiquement
      </p>
      {cartes.length > 0 ? (
        <ul className="v-actus" data-nombre={cartes.length}>
          {cartes.map((c, k) => (
            <li key={c.cle} className={`v-actu ${c.classe}${k === 0 ? ' v-actu-une' : ''}`}>
              {k === 0 && <DecoActu classe={c.classe} />}
              <span className="v-actu-type">{c.etiquette}</span>
              {c.photo && <img className="v-actu-photo" src={c.photo} alt="" loading="lazy" />}
              <h3>{c.lien ? <Link to={c.lien}>{c.titre}</Link> : c.titre}</h3>
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
              {(c.note || c.source) && (
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
            </li>
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
  const { api } = useServices();
  const [ouvert, setOuvert] = useState(false);
  const [accueil, setAccueil] = useState(null);
  const [erreur, setErreur] = useState(false);
  const fermer = () => setOuvert(false);

  useEffect(() => {
    let actif = true;
    if (typeof api.accueil !== 'function') return undefined;
    api
      .accueil()
      .then((d) => actif && setAccueil(d || null))
      .catch(() => actif && setErreur(true));
    return () => {
      actif = false;
    };
  }, [api]);

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
              <Link to="/inscription" className="v-btn v-btn-contour v-nav-cta" onClick={fermer}>
                Créer un compte
              </Link>
              <Link to="/connexion" className="v-btn v-btn-plein v-nav-cta" onClick={fermer}>
                Se connecter
              </Link>
            </nav>
            <Link to="/connexion" className="v-btn v-btn-plein v-nav-mobile">
              Se connecter
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
          <Ecrans cote="gauche" totaux={t} />
          <Carrousel diapos={diapos} />
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
