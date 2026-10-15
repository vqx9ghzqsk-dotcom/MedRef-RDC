import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/vitrine.css';

/**
 * Page de présentation affichée aux visiteurs non connectés (route « / »).
 * Volontairement statique : aucune donnée chargée, elle s'affiche instantanément
 * et hors ligne. Les contenus du référentiel apparaissent après connexion.
 */

const LIENS = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#contenu-ref', label: 'Contenu' },
  { href: '#terrain', label: 'Sur le terrain' },
  { href: '#sources', label: 'Sources' },
  { href: '#contact', label: 'Contact' },
];

const Icone = ({ children }) => (
  <svg
    viewBox="0 0 32 32"
    width="30"
    height="30"
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

const RUBRIQUES = [
  {
    titre: 'Pathologies',
    texte:
      'Des fiches par département et spécialité : définition, diagnostic, conduite à tenir et traitement.',
    icone: (
      <Icone>
        <path d="M9 4c0 6 14 6 14 12S9 22 9 28M23 4c0 6-14 6-14 12s14 6 14 12" />
        <path d="M11 9h10M11 23h10M12 16h8" />
      </Icone>
    ),
  },
  {
    titre: 'Urgences',
    texte: 'La conduite ABCDE et les signes de gravité, accessibles en quelques secondes.',
    icone: (
      <Icone>
        <path d="M16 4 3 27h26z" />
        <path d="M16 13v7M16 23.5v.5" />
      </Icone>
    ),
  },
  {
    titre: 'Médicaments',
    texte: 'Molécules, posologies et produits disponibles localement en RDC.',
    icone: (
      <Icone>
        <rect x="4" y="12" width="24" height="9" rx="4.5" transform="rotate(-35 16 16)" />
        <path d="m11.5 9.5 11 13" />
      </Icone>
    ),
  },
  {
    titre: 'Calculatrices',
    texte: 'Scores cliniques et calculs de doses, pour prescrire avec précision.',
    icone: (
      <Icone>
        <rect x="6" y="3" width="20" height="26" rx="3" />
        <path d="M10 9h12M11 15h2M15 15h2M19 15h2M11 20h2M15 20h2M19 20h2M11 25h2M15 25h6" />
      </Icone>
    ),
  },
  {
    titre: 'Examens',
    texte: 'Valeurs normales et aide à l’interprétation des examens complémentaires.',
    icone: (
      <Icone>
        <path d="M12 3v10L5 26a2 2 0 0 0 1.8 3h18.4A2 2 0 0 0 27 26l-7-13V3M10 3h12M9 20h14" />
      </Icone>
    ),
  },
  {
    titre: 'Sémiologie',
    texte: 'Signes, symptômes et syndromes expliqués, pour partir de ce que présente le patient.',
    icone: (
      <Icone>
        <path d="M8 4v8a6 6 0 0 0 12 0V4M14 18v4a5 5 0 0 0 10 0v-2" />
        <circle cx="24" cy="17" r="3" />
      </Icone>
    ),
  },
];

const ATOUTS = [
  {
    titre: 'Utilisable hors ligne',
    texte: 'Les fiches consultées ou téléchargées restent lisibles sans réseau.',
  },
  { titre: 'Léger, même en 3G', texte: 'Aucune police ni image lourde : l’essentiel s’affiche vite.' },
  {
    titre: 'En français, pour la RDC',
    texte: 'Des contenus pensés pour les réalités cliniques et les produits du pays.',
  },
  {
    titre: 'Sources citées',
    texte: 'Chaque information renvoie à ses références pour pouvoir être vérifiée.',
  },
];

const SOURCES = [
  'OMS et UNICEF',
  'Programmes nationaux de santé',
  'Paludisme',
  'VIH et IST',
  'Tuberculose',
  'Nutrition',
  'Liste nationale des médicaments essentiels',
  'Guides cliniques des hôpitaux généraux de référence',
];

function Marque() {
  return (
    <>
      <span className="v-marque" aria-hidden="true">
        <svg viewBox="0 0 32 32" width="30" height="30">
          <rect width="32" height="32" rx="8" fill="#2563eb" />
          <path d="M13 7h6v6h6v6h-6v6h-6v-6H7v-6h6z" fill="#fff" />
          <path
            d="M24.5 4.5l1 2.2 2.4.2-1.8 1.6.6 2.3-2.2-1.2-2.1 1.2.5-2.3-1.8-1.6 2.4-.2z"
            fill="#f7d618"
          />
        </svg>
      </span>
      <span className="v-marque-nom">MedRef RDC</span>
    </>
  );
}

/** Illustration du héros : appareil stylisé, croix médicale et tracé de pouls (SVG, 100 % local). */
function IllustrationHero() {
  return (
    <svg
      className="v-hero-illu"
      viewBox="0 0 520 420"
      role="img"
      aria-label="Illustration d’une fiche clinique sur écran, avec une croix médicale et un tracé de pouls"
    >
      <defs>
        <linearGradient id="vg1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" stopOpacity=".55" />
          <stop offset="1" stopColor="#1e3a8a" stopOpacity=".15" />
        </linearGradient>
        <linearGradient id="vg2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" stopOpacity=".22" />
          <stop offset="1" stopColor="#ffffff" stopOpacity=".06" />
        </linearGradient>
      </defs>
      <circle cx="270" cy="210" r="190" fill="url(#vg1)" />
      <circle
        cx="270"
        cy="210"
        r="140"
        fill="none"
        stroke="#93c5fd"
        strokeOpacity=".35"
        strokeDasharray="3 7"
      />
      <rect
        x="110"
        y="70"
        width="320"
        height="230"
        rx="22"
        fill="url(#vg2)"
        stroke="#bfdbfe"
        strokeOpacity=".5"
      />
      <rect x="132" y="92" width="120" height="14" rx="7" fill="#e0ecff" fillOpacity=".8" />
      <rect x="132" y="118" width="200" height="8" rx="4" fill="#e0ecff" fillOpacity=".4" />
      <rect x="132" y="136" width="170" height="8" rx="4" fill="#e0ecff" fillOpacity=".4" />
      <rect x="132" y="164" width="96" height="58" rx="12" fill="#2563eb" fillOpacity=".85" />
      <path d="M180 178h6v10h10v6h-10v10h-6v-10h-10v-6h10z" fill="#fff" />
      <rect
        x="240"
        y="164"
        width="96"
        height="58"
        rx="12"
        fill="#e0ecff"
        fillOpacity=".14"
        stroke="#bfdbfe"
        strokeOpacity=".4"
      />
      <rect
        x="348"
        y="164"
        width="64"
        height="58"
        rx="12"
        fill="#e0ecff"
        fillOpacity=".14"
        stroke="#bfdbfe"
        strokeOpacity=".4"
      />
      <path
        d="M132 262h50l12-26 16 48 14-34 10 12h176"
        fill="none"
        stroke="#7cbcff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="64"
        y="250"
        width="150"
        height="86"
        rx="16"
        fill="#0f2a63"
        fillOpacity=".85"
        stroke="#93c5fd"
        strokeOpacity=".5"
      />
      <circle cx="92" cy="278" r="9" fill="#f87171" />
      <path d="M92 273v6M92 282v.5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" />
      <rect x="110" y="272" width="80" height="7" rx="3.5" fill="#e0ecff" fillOpacity=".75" />
      <rect x="110" y="288" width="58" height="7" rx="3.5" fill="#e0ecff" fillOpacity=".4" />
      <rect x="80" y="310" width="110" height="7" rx="3.5" fill="#e0ecff" fillOpacity=".3" />
      <rect
        x="352"
        y="300"
        width="116"
        height="74"
        rx="16"
        fill="#0f2a63"
        fillOpacity=".85"
        stroke="#93c5fd"
        strokeOpacity=".5"
      />
      <path
        d="M372 325l8 8 16-18"
        fill="none"
        stroke="#6fd3a0"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="404" y="320" width="48" height="7" rx="3.5" fill="#e0ecff" fillOpacity=".7" />
      <rect x="404" y="336" width="34" height="7" rx="3.5" fill="#e0ecff" fillOpacity=".4" />
    </svg>
  );
}

export function VitrinePage() {
  const [ouvert, setOuvert] = useState(false);
  const fermer = () => setOuvert(false);

  return (
    <div className="vitrine">
      <a href="#accueil" className="v-skip">
        Aller au contenu
      </a>

      <header className="v-entete">
        <div className="v-nav">
          <a href="#accueil" className="v-brand" aria-label="MedRef RDC, accueil">
            <Marque />
          </a>
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
            <Link to="/connexion" className="v-btn v-btn-plein v-nav-cta" onClick={fermer}>
              Se connecter
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section id="accueil" className="v-hero">
          <div className="v-hero-texte">
            <p className="v-etiquette">Bibliothèque de référence clinique</p>
            <h1>
              La référence clinique <span>pensée pour la RDC</span>
            </h1>
            <p className="v-hero-lead">
              Pathologies, urgences, médicaments disponibles localement et protocoles nationaux pour décider
              plus vite et prescrire plus sûrement.
            </p>
            <div className="v-actions">
              <Link to="/connexion" className="v-btn v-btn-plein">
                Se connecter
              </Link>
              <Link to="/inscription" className="v-btn v-btn-contour">
                Créer un compte
              </Link>
            </div>
            <p className="v-hero-note">
              Gratuit pour les professionnels de santé · Conçu par le Dr Ben Mingalu
            </p>
          </div>
          <IllustrationHero />
        </section>

        <section id="apropos" className="v-section v-apropos">
          <div className="v-apropos-grille">
            <div>
              <p className="v-etiquette v-etiquette-claire">À propos /</p>
              <h2>Un outil de terrain, au service des soignants congolais</h2>
            </div>
            <div className="v-apropos-texte">
              <p>
                MedRef RDC rassemble au même endroit ce dont le clinicien a besoin au chevet du patient : les
                pathologies par spécialité, les urgences, les médicaments réellement disponibles dans le pays,
                les examens et les calculs de doses.
              </p>
            </div>
          </div>
        </section>

        <section id="contenu-ref" className="v-section">
          <p className="v-etiquette v-etiquette-claire v-centre">Ce que vous y trouvez /</p>
          <h2 className="v-centre">Tout le référentiel, relié entre lui</h2>
          <ul className="v-cartes">
            {RUBRIQUES.map((r) => (
              <li key={r.titre} className="v-carte">
                <span className="v-carte-icone">{r.icone}</span>
                <h3>{r.titre}</h3>
                <p>{r.texte}</p>
              </li>
            ))}
          </ul>
          <p className="v-centre v-acces">
            Le contenu complet est accessible après <Link to="/connexion">connexion</Link> ou{' '}
            <Link to="/inscription">inscription</Link>.
          </p>
        </section>

        <section id="terrain" className="v-bande">
          <h2 className="v-centre">Pensé pour les conditions réelles</h2>
          <ul className="v-atouts">
            {ATOUTS.map((a) => (
              <li key={a.titre}>
                <h3>{a.titre}</h3>
                <p>{a.texte}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="sources" className="v-section">
          <p className="v-etiquette v-etiquette-claire v-centre">Rigueur /</p>
          <h2 className="v-centre">Des sources que l’on peut vérifier</h2>
          <p className="v-centre v-intro">
            Les fiches renvoient aux références internationales et aux directives nationales de la RDC.
          </p>
          <ul className="v-pastilles">
            {SOURCES.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
      </main>

      <footer id="contact" className="v-pied">
        <div className="v-pied-grille">
          <div>
            <a href="#accueil" className="v-brand" aria-label="MedRef RDC, haut de page">
              <Marque />
            </a>
            <p>
              Bibliothèque de référence pour les professionnels de santé de la République démocratique du
              Congo.
            </p>
          </div>
          <nav aria-label="Liens du pied de page">
            <h3>Navigation</h3>
            <ul>
              {LIENS.slice(1, 5).map((l) => (
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
            <h3>Contact</h3>
            <p>
              Dr Ben Mingalu
              <br />
              <a href="mailto:bmingalu@gmail.com">bmingalu@gmail.com</a>
            </p>
          </div>
        </div>
        <p className="v-pied-bas">© {new Date().getFullYear()} MedRef RDC</p>
      </footer>
    </div>
  );
}
