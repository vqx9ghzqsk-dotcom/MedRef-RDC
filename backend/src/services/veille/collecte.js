'use strict';

/**
 * Lecture des sources de la veille : chaque lecteur renvoie des éléments normalisés
 * { url, titre, resume, date (AAAA-MM-JJ), langue }. Seuls le titre, la date, le court
 * résumé que la source publie elle-même et le lien sont conservés : jamais l'article entier.
 */

const { XMLParser } = require('fast-xml-parser');

// Identité honnête, au format navigateur : certains sites refusent les robots anonymes
const AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) MedRefRDC-veille/1.0';
const DELAI_MS = 30000;
const TAILLE_MAX = 4 * 1024 * 1024;
const RESUME_MAX = 700;

const ENTITES = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  hellip: '…',
  rsquo: '’',
  lsquo: '‘',
  rdquo: '”',
  ldquo: '“',
  ndash: '–',
  mdash: '—',
  laquo: '«',
  raquo: '»',
  eacute: 'é',
  egrave: 'è',
  agrave: 'à',
  ccedil: 'ç',
};

/** Décode les entités HTML courantes et numériques. */
function decoder(t) {
  return String(t ?? '')
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(Number.parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, nom) => ENTITES[nom.toLowerCase()] ?? m);
}

/** Texte brut d'un fragment HTML : balises retirées, espaces réduits. */
function texte(html) {
  const brut = decoder(
    String(html ?? '')
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<[^>]+>/g, ' '),
  );
  return decoder(brut).replace(/\s+/g, ' ').trim();
}

const couper = (t, n = RESUME_MAX) => (t.length > n ? `${t.slice(0, n - 1).trimEnd()}…` : t);

/** Date AAAA-MM-JJ, ou null si illisible. */
function jour(d) {
  if (!d) return null;
  const date = new Date(String(d).trim());
  return Number.isNaN(date.getTime()) ? null : date.toISOString().slice(0, 10);
}

/** Valeur texte d'un nœud XML (chaîne, objet #text, CDATA). */
function valeur(v) {
  if (v == null) return '';
  if (Array.isArray(v)) return valeur(v[0]);
  if (typeof v === 'object') return valeur(v['#text'] ?? v.__cdata ?? '');
  return String(v);
}

async function telecharger(url, { json = false } = {}) {
  const res = await fetch(url, {
    headers: { 'User-Agent': AGENT, Accept: json ? 'application/json' : '*/*' },
    signal: AbortSignal.timeout(DELAI_MS),
    redirect: 'follow',
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const corps = await res.text();
  if (corps.length > TAILLE_MAX) throw new Error('réponse trop volumineuse');
  return json ? JSON.parse(corps) : corps;
}

// ------------------------------------------------------------------ lecteurs

/** Flux RSS 2.0 ou Atom. */
function lireFlux(xml, langue) {
  const doc = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@',
    cdataPropName: '__cdata',
  }).parse(xml);
  // RSS 2.0, RSS 1.0 (RDF : The Lancet, NEJM) ou Atom
  const rss = doc.rss?.channel?.item ?? doc['rdf:RDF']?.item;
  const atom = doc.feed?.entry;
  const items = [].concat(rss || atom || []);
  return items.map((it) => {
    const lien = Array.isArray(it.link)
      ? it.link.find((l) => !l['@rel'] || l['@rel'] === 'alternate')
      : it.link;
    const url = typeof lien === 'object' ? lien['@href'] || valeur(lien) : valeur(lien);
    return {
      url: url.trim(),
      titre: texte(valeur(it.title)),
      resume: couper(texte(valeur(it.description ?? it.summary ?? it.content))),
      date: jour(valeur(it.pubDate ?? it['dc:date'] ?? it.published ?? it.updated)),
      langue,
    };
  });
}

/** Articles d'un site WordPress (/wp-json/wp/v2/posts). */
function lireWordpress(posts, source) {
  return posts.map((p) => ({
    url: source.lienPublic ? source.lienPublic(p) : p.link,
    titre: texte(p.title?.rendered),
    resume: couper(texte(p.excerpt?.rendered).replace(/\s*\[…\]\s*$/, '…')),
    date: jour(p.date),
    langue: source.langue,
  }));
}

/** Bulletins d'épidémies de l'OMS. */
function lireOmsDon(data) {
  return (data.value || []).map((d) => ({
    url: `https://www.who.int/emergencies/disease-outbreak-news/item/${d.UrlName}`,
    titre: texte(d.OverrideTitle || d.Title),
    resume: couper(texte(d.Summary || d.Overview)),
    date: jour(d.PublicationDate),
    langue: 'en',
  }));
}

/** Publications de NICE : données JSON intégrées à la page. */
function lireNice(html) {
  const m = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
  if (!m) throw new Error('structure de la page NICE inconnue');
  const docs = JSON.parse(m[1])?.props?.pageProps?.results?.documents || [];
  return docs.map((d) => ({
    url: d.url,
    titre: texte(d.title),
    resume: [d.guidanceRef, ...(d.niceGuidanceType || [])].filter(Boolean).join(' — '),
    date: jour(d.publicationDate),
    langue: 'en',
  }));
}

/** Communiqués de presse de la Société européenne de cardiologie. */
function lireEsc(html) {
  const items = [];
  const carte =
    /<h4[^>]*card-title[^>]*>([\s\S]*?)<\/h4>\s*<a[^>]+href="([^"]+press-releases\/[^"]+)"[\s\S]*?<small[^>]*>([^<]+)<\/small>/g;
  for (const m of html.matchAll(carte)) {
    items.push({ url: m[2], titre: texte(m[1]), resume: '', date: jour(m[3]), langue: 'en' });
  }
  return items;
}

/** Recommandations récentes indexées par PubMed (E-utilities). */
async function lirePubmed(source, telechargerJson) {
  const base = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils';
  const recherche = await telechargerJson(
    `${base}/esearch.fcgi?db=pubmed&retmode=json&retmax=40&datetype=pdat&reldate=${source.jours}&tool=medref-rdc&term=${encodeURIComponent(source.terme)}`,
  );
  const ids = recherche?.esearchresult?.idlist || [];
  if (!ids.length) return [];
  const resume = await telechargerJson(
    `${base}/esummary.fcgi?db=pubmed&retmode=json&tool=medref-rdc&id=${ids.join(',')}`,
  );
  return ids
    .map((id) => resume?.result?.[id])
    .filter(Boolean)
    .map((r) => ({
      url: `https://pubmed.ncbi.nlm.nih.gov/${r.uid}/`,
      titre: texte(r.title),
      resume: `Recommandation publiée dans ${texte(r.fulljournalname || r.source)}.`,
      date: jour(r.sortpubdate || r.pubdate),
      langue: 'en',
    }));
}

/**
 * Résumé débarrassé de ce qui n'est pas du contenu : titre répété en tête, adresses e-mail,
 * horodatages de publication (« Mon, 19/10/2026 - 12:59 »).
 */
function nettoyerResume(resume, titre) {
  let r = String(resume || '');
  if (titre && r.startsWith(titre)) r = r.slice(titre.length);
  r = r
    .replace(/\S+@\S+\.[a-z]{2,}/gi, ' ')
    .replace(/\b(mon|tue|wed|thu|fri|sat|sun),?\s+\d{1,2}\/\d{1,2}\/\d{4}\s*-\s*\d{1,2}:\d{2}/gi, ' ')
    // Date de publication seule en fin de résumé (« 19 October 2026 »)
    .replace(/(^|\s)\d{1,2}\s+[a-zéû]+\s+\d{4}\s*$/i, '');
  return r.replace(/\s+/g, ' ').trim();
}

/** Lit une source et renvoie ses éléments valides, les plus récents d'abord. */
async function collecter(source, { charger = telecharger } = {}) {
  let items;
  if (source.type === 'rss') items = lireFlux(await charger(source.url), source.langue);
  else if (source.type === 'wordpress')
    items = lireWordpress(await charger(source.url, { json: true }), source);
  else if (source.type === 'oms-don') items = lireOmsDon(await charger(source.url, { json: true }));
  else if (source.type === 'nice') items = lireNice(await charger(source.url));
  else if (source.type === 'esc') items = lireEsc(await charger(source.url));
  else if (source.type === 'pubmed') items = await lirePubmed(source, (u) => charger(u, { json: true }));
  else throw new Error(`type de source inconnu : ${source.type}`);
  return items
    .filter((it) => /^https?:\/\//.test(it.url) && it.titre)
    .map((it) => ({ ...it, titre: couper(it.titre, 480), resume: nettoyerResume(it.resume, it.titre) }))
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

module.exports = {
  collecter,
  nettoyerResume,
  lireFlux,
  lireWordpress,
  lireOmsDon,
  lireNice,
  lireEsc,
  texte,
  jour,
  decoder,
  telecharger,
};
