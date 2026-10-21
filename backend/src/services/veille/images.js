'use strict';

/**
 * Photo d'illustration d'une actualité : l'image que la source associe elle-même à son article
 * (balises og:image / twitter:image, prévues pour les aperçus de partage). Seule son adresse est
 * conservée : la photo reste hébergée par la source, affichée avec son crédit et le lien vers
 * l'article. Les logos et images génériques sont écartés.
 */

const { telecharger, decoder } = require('./collecte');

const PARALLELE = 4;
const AGENT_IMAGE =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) MedRefRDC-veille/1.0';
const PAR_RELEVE = 40;
// Logos, sceaux, icônes et images par défaut : pas une photo de l'actualité
const GENERIQUE = /(logo|favicon|sprite|placeholder|default-share|fallback|seal|icon)[^/]*$|\.svg(\?|$)/i;

/** Adresse de la photo déclarée par la page d'un article, ou null. */
function imageDePage(html, adresse) {
  for (const balise of String(html).match(/<meta\b[^>]*>/gi) || []) {
    const nom = balise.match(/\b(?:property|name)\s*=\s*["']([^"']+)["']/i)?.[1]?.toLowerCase();
    if (
      !['og:image', 'og:image:url', 'og:image:secure_url', 'twitter:image', 'twitter:image:src'].includes(nom)
    )
      continue;
    const contenu = balise.match(/\bcontent\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!contenu) continue;
    try {
      const url = new URL(decoder(contenu).trim(), adresse);
      if (url.protocol === 'https:' && !GENERIQUE.test(url.pathname)) return url.href.slice(0, 500);
    } catch {
      // adresse illisible : balise suivante
    }
  }
  return null;
}

/**
 * Première image du corps de l'article dont l'adresse correspond au motif de la source (cartes et
 * courbes épidémiques des bulletins de l'OMS, qui n'ont pas d'image de partage).
 */
function imageArticle(html, adresse, motif) {
  if (!motif) return null;
  for (const m of String(html).matchAll(/<img\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi)) {
    try {
      const url = new URL(decoder(m[1]).trim(), adresse);
      if (url.protocol === 'https:' && motif.test(url.pathname) && !GENERIQUE.test(url.pathname))
        return url.href.slice(0, 500);
    } catch {
      // adresse illisible : image suivante
    }
  }
  return null;
}

/**
 * La photo existe-t-elle vraiment ? L'adresse doit renvoyer une image : on lit les premiers octets
 * (une photo retirée du site de la source renvoie 404 ou une page d'erreur ; certains sites, comme
 * Radio Okapi, envoient leurs JPEG sans type d'image déclaré).
 */
const SIGNATURES = [
  [0xff, 0xd8, 0xff], // JPEG (y compris .jfif)
  [0x89, 0x50, 0x4e, 0x47], // PNG
  [0x47, 0x49, 0x46, 0x38], // GIF
  [0x52, 0x49, 0x46, 0x46], // RIFF (WebP)
];

async function imageAccessible(url, charger = fetch) {
  try {
    const res = await charger(url, {
      headers: { 'User-Agent': AGENT_IMAGE, Range: 'bytes=0-63' },
      signal: AbortSignal.timeout(15000),
    });
    if (!res.ok) return false;
    if (/^image\//i.test(res.headers.get('content-type') || '')) return true;
    const debut = new Uint8Array(await res.arrayBuffer()).slice(0, 8);
    return SIGNATURES.some((sig) => sig.every((octet, i) => debut[i] === octet));
  } catch {
    return false;
  }
}

/**
 * Cherche la photo des actualités publiées qui n'en ont pas encore été pourvues (les plus
 * récentes d'abord). Une image reprise par plusieurs articles d'une même source est une image
 * générique : elle est retirée de tous.
 */
async function completerImages(
  db,
  { sources = [], charger = telecharger, verifier = imageAccessible, log = console } = {},
) {
  const sansImages = new Set(sources.filter((s) => s.images === false).map((s) => s.slug));
  const parSlug = new Map(sources.map((s) => [s.slug, s]));
  const lignes = await db.query(
    `SELECT id, source_url, veille_source FROM actualites
      WHERE statut = 'publie' AND image_cherchee = 0 AND source_url IS NOT NULL
      ORDER BY publie_le DESC, id DESC
      LIMIT ${PAR_RELEVE}`,
  );
  let trouvees = 0;
  const file = [...lignes];
  async function suivante() {
    for (let a = file.shift(); a; a = file.shift()) {
      let image = null;
      if (!sansImages.has(a.veille_source)) {
        try {
          const html = await charger(a.source_url);
          image =
            imageDePage(html, a.source_url) ||
            imageArticle(html, a.source_url, parSlug.get(a.veille_source)?.imageArticle);
          if (image && !(await verifier(image))) image = null;
        } catch (err) {
          log.error?.(`✖ Photo introuvable (${a.source_url}) : ${err.message}`);
        }
      }
      await db.query('UPDATE actualites SET image_url = ?, image_cherchee = 1 WHERE id = ?', [image, a.id]);
      if (image) trouvees += 1;
    }
  }
  await Promise.all(Array.from({ length: PARALLELE }, suivante));
  // Image commune à plusieurs articles d'une même source : générique, retirée
  const communes = await db.query(
    `SELECT veille_source, image_url FROM actualites
      WHERE image_url IS NOT NULL AND veille_source IS NOT NULL
      GROUP BY veille_source, image_url HAVING COUNT(*) > 1`,
  );
  for (const c of communes) {
    await db.query('UPDATE actualites SET image_url = NULL WHERE veille_source = ? AND image_url = ?', [
      c.veille_source,
      c.image_url,
    ]);
  }
  return { examinees: lignes.length, trouvees, generiques: communes.length };
}

module.exports = { imageDePage, imageArticle, imageAccessible, completerImages };
