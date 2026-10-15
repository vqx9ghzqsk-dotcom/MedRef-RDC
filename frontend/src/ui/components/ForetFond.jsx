/**
 * Décor commun : forêt équatoriale et okapi dessinés en SVG (aucune image à
 * télécharger). Utilisé par la fenêtre de connexion et, en fond fixe, par
 * toute l'application.
 */

// Troncs : [x, largeur, plan] — 0 = lointain, 1 = intermédiaire, 2 = premier plan
const TRONCS = [
  [40, 38, 0],
  [250, 44, 0],
  [520, 40, 0],
  [720, 46, 0],
  [930, 40, 0],
  [1130, 44, 0],
  [1310, 38, 0],
  [140, 58, 1],
  [430, 66, 1],
  [650, 54, 1],
  [990, 62, 1],
  [1220, 58, 1],
  [-20, 120, 2],
  [330, 84, 2],
  [840, 78, 2],
  [1360, 130, 2],
];
const COULEURS_TRONC = ['#8fb0de', '#5b86c4', '#16407f'];

// Feuillage : [x, y, rayon]
const FEUILLES = Array.from({ length: 17 }, (_, i) => [
  i * 90 - 20,
  18 + ((i * 37) % 46),
  70 + ((i * 53) % 46),
]);
const FEUILLES_AVANT = Array.from({ length: 12 }, (_, i) => [
  i * 130 + 30,
  54 + ((i * 29) % 40),
  60 + ((i * 41) % 40),
]);

// Herbe : ligne en dents de scie
const herbe = (y, haut, pas, decal) => {
  let d = `M-10 ${y + 60} L-10 ${y}`;
  for (let x = -10, i = 0; x <= 1450; x += pas, i += 1) {
    d += ` L${x + pas / 2} ${y - haut - ((i * decal) % 14)} L${x + pas} ${y}`;
  }
  return `${d} L1450 ${y + 60} Z`;
};

export function Foret({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="af-ciel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7fa6dc" />
          <stop offset="0.6" stopColor="#c3d8f2" />
          <stop offset="1" stopColor="#dfeaf8" />
        </linearGradient>
        <linearGradient id="af-brume" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dfeaf8" stopOpacity="0" />
          <stop offset="1" stopColor="#dfeaf8" stopOpacity="0.85" />
        </linearGradient>
      </defs>
      <rect width="1440" height="900" fill="url(#af-ciel)" />

      {TRONCS.filter((t) => t[2] === 0).map(([x, w]) => (
        <rect key={`a${x}`} x={x} y="0" width={w} height="900" fill={COULEURS_TRONC[0]} opacity="0.55" />
      ))}
      <rect y="560" width="1440" height="340" fill="url(#af-brume)" />
      {TRONCS.filter((t) => t[2] === 1).map(([x, w]) => (
        <rect key={`b${x}`} x={x} y="0" width={w} height="900" fill={COULEURS_TRONC[1]} opacity="0.85" />
      ))}
      <path d={herbe(800, 26, 34, 5)} fill="#5b86c4" />
      {TRONCS.filter((t) => t[2] === 2).map(([x, w]) => (
        <rect key={`c${x}`} x={x} y="0" width={w} height="900" fill={COULEURS_TRONC[2]} />
      ))}

      <g fill="#1d4a8c">
        {FEUILLES_AVANT.map(([x, y, r]) => (
          <circle key={`fa${x}`} cx={x} cy={y} r={r} />
        ))}
      </g>
      <g fill="#0f2d5e">
        {FEUILLES.map(([x, y, r]) => (
          <circle key={`fb${x}`} cx={x} cy={y - 24} r={r} />
        ))}
      </g>

      {/* Okapi (silhouette) */}
      <g transform="translate(-24 402) scale(1.5)">
        <g fill="#0b1b3f">
          <path d="M78 128C100 104 178 98 228 116C256 126 268 150 260 178C254 200 228 208 190 207C150 206 104 208 84 195C64 182 62 150 78 128Z" />
          <path d="M84 130L60 86L82 78L114 118Z" />
          <g transform="translate(10 26)">
            <path d="M40 58C46 42 70 36 88 40C98 44 94 58 82 64C66 70 48 68 40 58Z" />
            <path d="M44 56C30 58 16 68 14 76C20 80 34 76 46 68Z" />
            <path d="M80 44L106 28C110 36 102 50 86 56Z" />
            <path d="M70 40L90 20C96 28 90 42 76 48Z" />
            <rect x="62" y="26" width="4" height="14" rx="2" />
            <rect x="74" y="24" width="4" height="14" rx="2" />
          </g>
          <path d="M258 140C274 150 278 178 270 200L264 198C268 178 264 156 254 146Z" />
          <path d="M92 196L110 196L107 290L95 290Z" />
          <path d="M113 198L128 198L123 290L113 290Z" />
          <path d="M212 196L236 196L232 290L219 290Z" />
          <path d="M238 192L256 190L247 290L236 290Z" />
        </g>
        <g fill="#7fa8dc" opacity="0.85">
          <path d="M214 148L262 140L262 148L214 156Z" />
          <path d="M212 166L262 158L262 166L213 174Z" />
          <path d="M213 184L259 178L258 186L213 192Z" />
          <rect x="220" y="226" width="13" height="5" />
          <rect x="220" y="244" width="12" height="5" />
          <rect x="219" y="262" width="12" height="5" />
          <rect x="238" y="226" width="14" height="5" />
          <rect x="237" y="244" width="13" height="5" />
          <rect x="236" y="262" width="12" height="5" />
          <rect x="95" y="232" width="13" height="5" />
          <rect x="95" y="250" width="12" height="5" />
          <rect x="95" y="268" width="12" height="5" />
          <rect x="114" y="232" width="12" height="5" />
          <rect x="114" y="250" width="11" height="5" />
          <rect x="113" y="268" width="11" height="5" />
        </g>
      </g>

      <path d={herbe(860, 34, 22, 7)} fill="#16407f" />
      <path d={herbe(900, 30, 30, 3)} fill="#0b2a5c" />
    </svg>
  );
}
