'use strict';

/**
 * Sources officielles relevées par la veille automatique des actualités.
 *
 * Chaque source a un `type` de lecture :
 *   - rss       : flux RSS ou Atom publié par le site ;
 *   - wordpress : interface de données d'un site WordPress (/wp-json/wp/v2/posts) ;
 *   - oms-don   : interface des bulletins d'épidémies de l'OMS (Disease Outbreak News) ;
 *   - nice      : liste des publications de NICE (données intégrées à la page) ;
 *   - esc       : liste des communiqués de la Société européenne de cardiologie ;
 *   - pubmed    : interface E-utilities de PubMed (recommandations des sociétés savantes).
 *
 * `langue` est la langue des textes de la source ; tout ce qui n'est pas en français est traduit.
 * `max` limite le nombre d'actualités nouvelles retenues par relève (flux très abondants).
 * `officielle` : source institutionnelle (OMS, ministère…) — ses alertes passent en priorité.
 * `filtreUrl` : ne garder que les articles dont l'adresse correspond (rubrique santé d'un média).
 * `images: false` : la source n'associe pas de photo à ses articles (ou bloque la lecture des pages) ;
 * ses actualités s'affichent sans photo, sans tentative inutile.
 */
const SOURCES = [
  {
    slug: 'ministere-sante',
    nom: 'Ministère de la Santé publique, Hygiène et Prévoyance sociale (RDC)',
    type: 'wordpress',
    url: 'https://administration.sante.gouv.cd/wp-json/wp/v2/posts?per_page=10&_fields=date,link,slug,title,excerpt',
    // Les articles se lisent sur le site public, pas sur l'outil d'administration
    lienPublic: (p) => `https://sante.gouv.cd/actualites/${p.slug}`,
    langue: 'fr',
    officielle: true,
  },
  {
    slug: 'acorep',
    nom: 'ACOREP (Autorité congolaise de réglementation pharmaceutique)',
    type: 'rss',
    url: 'https://acorep.gouv.cd/feed/',
    langue: 'fr',
    officielle: true,
  },
  {
    slug: 'radio-okapi',
    nom: 'Radio Okapi',
    type: 'rss',
    // Flux général : seuls les articles de la rubrique Santé sont retenus
    url: 'https://www.radiookapi.net/feed',
    filtreUrl: /\/actualite\/sante\//,
    langue: 'fr',
    max: 6,
  },
  {
    slug: 'oms-epidemies',
    nom: 'OMS — bulletins d’épidémies',
    type: 'oms-don',
    url: 'https://www.who.int/api/news/diseaseoutbreaknews?sf_culture=en&$orderby=PublicationDateAndTime%20desc&$top=10',
    langue: 'en',
    officielle: true,
    images: false,
  },
  {
    slug: 'oms-fr',
    nom: 'Organisation mondiale de la Santé',
    type: 'rss',
    url: 'https://www.who.int/rss-feeds/news-french.xml',
    langue: 'fr',
    officielle: true,
  },
  {
    slug: 'oms-afrique',
    nom: 'OMS Afrique',
    type: 'rss',
    url: 'https://www.afro.who.int/rss/featured-news.xml',
    langue: 'en',
    officielle: true,
  },
  {
    slug: 'africa-cdc',
    nom: 'Africa CDC',
    type: 'rss',
    // Le flux principal est vide : les actualités sont publiées dans le flux « news-item »
    url: 'https://africacdc.org/news-item/feed/',
    langue: 'en',
    officielle: true,
  },
  {
    slug: 'ecdc',
    nom: 'ECDC (Centre européen de prévention et de contrôle des maladies)',
    type: 'rss',
    url: 'https://www.ecdc.europa.eu/en/taxonomy/term/1310/feed',
    langue: 'en',
    officielle: true,
  },
  {
    slug: 'msf',
    nom: 'Médecins Sans Frontières',
    type: 'rss',
    url: 'https://www.msf.org/rss/all',
    langue: 'en',
    max: 5,
  },
  {
    slug: 'nice',
    nom: 'NICE (recommandations britanniques)',
    type: 'nice',
    url: 'https://www.nice.org.uk/guidance/published',
    langue: 'en',
    max: 5,
    images: false,
  },
  {
    slug: 'esc',
    nom: 'Société européenne de cardiologie (ESC)',
    type: 'esc',
    url: 'https://www.escardio.org/news/press/press-releases/',
    langue: 'en',
    max: 5,
    images: false,
  },
  {
    slug: 'pubmed-recommandations',
    nom: 'PubMed — recommandations des sociétés savantes',
    type: 'pubmed',
    // Recommandations de pratique publiées dans les 7 derniers jours (toutes sociétés savantes)
    terme: '"practice guideline"[Publication Type] OR "guideline"[Publication Type]',
    jours: 7,
    langue: 'en',
    max: 8,
    images: false,
  },
  {
    slug: 'lancet',
    nom: 'The Lancet',
    type: 'rss',
    url: 'https://www.thelancet.com/rssfeed/lancet_current.xml',
    langue: 'en',
    max: 2,
    images: false,
  },
  {
    slug: 'nejm',
    nom: 'New England Journal of Medicine',
    type: 'rss',
    url: 'https://www.nejm.org/action/showFeed?jc=nejm&type=etoc&feed=rss',
    langue: 'en',
    max: 2,
    images: false,
  },
];

module.exports = { SOURCES };
