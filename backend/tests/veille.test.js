'use strict';

const {
  lireFlux,
  lireWordpress,
  lireOmsDon,
  lireNice,
  lireEsc,
  texte,
  collecter,
} = require('../src/services/veille/collecte');
const { trierSansModele, traiterParModele } = require('../src/services/veille/traitement');
const { executerVeille, cle } = require('../src/services/veille');
const { SOURCES } = require('../src/services/veille/sources');

const RSS = `<?xml version="1.0"?><rss version="2.0"><channel><title>OMS</title>
  <item><title>Flambée de choléra</title><link>https://www.who.int/fr/news/item/1</link>
    <description><![CDATA[<p>Hausse des cas &amp; des d&#233;c&egrave;s.</p>]]></description>
    <pubDate>Mon, 19 Oct 2026 10:00:00 GMT</pubDate></item>
  <item><title>Sans lien</title><link>pas-une-adresse</link></item>
</channel></rss>`;

const RDF = `<?xml version="1.0"?><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns="http://purl.org/rss/1.0/" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <item><title>Spinal Tuberculosis</title><link>https://www.nejm.org/doi/x</link><dc:date>2026-10-17</dc:date></item>
</rdf:RDF>`;

const ATOM = `<?xml version="1.0"?><feed xmlns="http://www.w3.org/2005/Atom">
  <entry><title>Guideline</title><link rel="alternate" href="https://example.org/g"/><summary>New</summary>
  <updated>2026-10-18T00:00:00Z</updated></entry></feed>`;

describe('veille : lecture des sources', () => {
  it('lit les flux RSS 2.0, RSS 1.0 (RDF) et Atom, en texte brut et entités décodées', () => {
    const rss = lireFlux(RSS, 'fr');
    expect(rss[0]).toEqual({
      url: 'https://www.who.int/fr/news/item/1',
      titre: 'Flambée de choléra',
      resume: 'Hausse des cas & des décès.',
      date: '2026-10-19',
      langue: 'fr',
    });
    expect(lireFlux(RDF, 'en')[0]).toMatchObject({ titre: 'Spinal Tuberculosis', date: '2026-10-17' });
    expect(lireFlux(ATOM, 'en')[0]).toMatchObject({ url: 'https://example.org/g', resume: 'New' });
  });

  it('ignore les éléments sans adresse http(s) et trie les plus récents d’abord', async () => {
    const items = await collecter({ type: 'rss', url: 'x', langue: 'fr' }, { charger: async () => RSS });
    expect(items).toHaveLength(1);
  });

  it('WordPress du ministère : lien vers le site public, résumé sans « […] »', () => {
    const source = SOURCES.find((s) => s.slug === 'ministere-sante');
    const [p] = lireWordpress(
      [
        {
          date: '2026-10-16T10:00:53',
          slug: 'ebola-en-rdc',
          link: 'https://administration.sante.gouv.cd/ebola-en-rdc/',
          title: { rendered: 'EBOLA EN RDC' },
          excerpt: { rendered: '<p>La riposte s&rsquo;organise [&hellip;]</p>' },
        },
      ],
      source,
    );
    expect(p.url).toBe('https://sante.gouv.cd/actualites/ebola-en-rdc');
    expect(p.resume).toBe('La riposte s’organise…');
  });

  it('OMS (bulletins d’épidémies), NICE et ESC', () => {
    expect(
      lireOmsDon({
        value: [
          {
            Title: 'Ebola - DRC',
            UrlName: '2026-DON619',
            Summary: '<p>Cases</p>',
            PublicationDate: '2026-10-08T10:00:00Z',
          },
        ],
      })[0],
    ).toMatchObject({
      url: 'https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON619',
      date: '2026-10-08',
    });
    const nice = `<script id="__NEXT_DATA__" type="application/json">${JSON.stringify({
      props: {
        pageProps: {
          results: {
            documents: [
              {
                title: 'Insulin efsitora',
                url: 'https://www.nice.org.uk/guidance/ta1',
                guidanceRef: 'TA1',
                niceGuidanceType: ['Technology appraisal guidance'],
                publicationDate: '2026-10-20T12:00:00',
              },
            ],
          },
        },
      },
    })}</script>`;
    expect(lireNice(nice)[0]).toMatchObject({
      titre: 'Insulin efsitora',
      resume: 'TA1 — Technology appraisal guidance',
    });
    const esc = `<h4 class="card-title mb-2 fs-5">New HF guidelines</h4>
      <a href="https://www.escardio.org/news/press/press-releases/hf/" class="stretched-link"></a>
      <div><small class="text-muted"> 28 Aug 2026 </small></div>`;
    expect(lireEsc(esc)[0]).toMatchObject({ titre: 'New HF guidelines', date: '2026-08-28' });
  });

  it('retire scripts et balises du texte', () => {
    expect(texte('<script>alert(1)</script><b>Choléra</b>  &nbsp; Kinshasa')).toBe('Choléra Kinshasa');
  });
});

describe('veille : tri et traduction', () => {
  it('sans clé API : garde l’épidémie, écarte l’hommage, repère la RDC', () => {
    const ebola = trierSansModele({
      titre: 'Ebola outbreak in the Democratic Republic of the Congo',
      resume: '',
    });
    expect(ebola).toMatchObject({ garder: true, type: 'alerte_sanitaire', zone: 'RDC', traduit: false });
    expect(trierSansModele({ titre: 'In memoriam: Dr X', resume: 'malaria' }).garder).toBe(false);
    expect(trierSansModele({ titre: 'Recall of falsified amoxicillin batch', resume: '' }).type).toBe(
      'pharmacovigilance',
    );
  });

  it('avec le modèle : réponse structurée, fiche inconnue ignorée, refus signalé', async () => {
    const create = jest.fn(async () => ({
      stop_reason: 'end_turn',
      content: [
        {
          type: 'text',
          text: JSON.stringify({
            actualites: [
              {
                id: 0,
                garder: true,
                type: 'alerte_sanitaire',
                titre_fr: 'Maladie à virus Ebola en RDC',
                resume_fr: '8 728 cas confirmés.',
                zone: 'Ituri, Nord-Kivu',
                pathologie: 'maladie-a-virus-ebola',
              },
              {
                id: 1,
                garder: false,
                type: 'information',
                titre_fr: 'X',
                resume_fr: '',
                zone: '',
                pathologie: 'inventee',
              },
            ],
          }),
        },
      ],
    }));
    const client = { beta: { messages: { create } } };
    const decisions = await traiterParModele(
      client,
      [
        { id: 0, source: 'OMS', titre: 'Ebola - DRC', resume: '8,728 confirmed cases', langue: 'en' },
        { id: 1, source: 'OMS', titre: 'Agreement', resume: '', langue: 'en' },
      ],
      { slugs: ['maladie-a-virus-ebola'] },
    );
    expect(decisions.get(0)).toMatchObject({
      garder: true,
      zone: 'Ituri, Nord-Kivu',
      pathologie: 'maladie-a-virus-ebola',
    });
    expect(decisions.get(1).pathologie).toBe('');
    const params = create.mock.calls[0][0];
    expect(params.model).toBe('claude-opus-5-5');
    expect(params.output_config.format.type).toBe('json_schema');
    expect(params.fallbacks).toBe('default');
    // Le texte relevé est transmis comme donnée, jamais dans les consignes
    expect(params.system[0].text).not.toMatch(/8,728/);
    expect(params.messages[0].content).toMatch(/8,728 confirmed cases/);

    create.mockResolvedValueOnce({ stop_reason: 'refusal', content: [] });
    await expect(traiterParModele(client, [{ id: 0, titre: 'x', resume: '' }])).rejects.toThrow(/refusé/);
  });
});

describe('veille : relève complète', () => {
  const source = { slug: 'oms-fr', nom: 'Organisation mondiale de la Santé', langue: 'fr', type: 'rss' };
  const aujourdhui = new Date().toISOString().slice(0, 10);

  function fausseBase(connus = []) {
    const inserts = [];
    const etats = [];
    const query = jest.fn(async (sql, params) => {
      if (/SELECT url_cle FROM actualites/.test(sql)) return connus.map((url_cle) => ({ url_cle }));
      if (/SELECT slug FROM pathologies/.test(sql)) return [{ slug: 'cholera' }];
      if (/SELECT id FROM pathologies WHERE slug/.test(sql)) return [{ id: 5 }];
      if (/INSERT IGNORE INTO actualites/.test(sql)) inserts.push(params);
      if (/INSERT INTO veille_sources/.test(sql)) etats.push(params);
      return [];
    });
    return { query, inserts, etats };
  }

  it('publie le médical, archive le reste, ignore le déjà connu, note l’état de la source', async () => {
    const items = [
      {
        url: 'https://who.int/a',
        titre: 'Flambée de choléra au Kasaï',
        resume: 'Hausse des cas',
        date: aujourdhui,
        langue: 'fr',
      },
      { url: 'https://who.int/b', titre: 'In memoriam: Dr X', resume: '', date: aujourdhui, langue: 'fr' },
      {
        url: 'https://who.int/c',
        titre: 'Déjà publiée : rougeole',
        resume: '',
        date: aujourdhui,
        langue: 'fr',
      },
      {
        url: 'https://who.int/d',
        titre: 'Paludisme : vieille nouvelle',
        resume: '',
        date: '2020-01-01',
        langue: 'fr',
      },
    ];
    const db = fausseBase([cle('https://who.int/c')]);
    const bilan = await executerVeille(db, {
      sources: [source],
      lire: async () => items,
      client: null,
      log: { log: () => {}, error: () => {} },
    });
    expect(bilan).toMatchObject({ sources: 1, nouveaux: 2, publies: 1, ecartes: 1, traduction: false });
    const [publiee, archivee] = db.inserts;
    // statut est le 10e paramètre ; la source et l'empreinte de l'adresse suivent
    expect(publiee[0]).toBe('alerte_sanitaire');
    expect(publiee[9]).toBe('publie');
    expect(publiee[11]).toBe(cle('https://who.int/a'));
    expect(publiee[8]).not.toBeNull(); // une alerte expire
    expect(archivee[9]).toBe('archive');
    expect(db.etats[0][0]).toBe('oms-fr');
  });

  it('une source en panne n’arrête pas les autres ; un lot non traité est repris plus tard', async () => {
    const db = fausseBase();
    const client = {
      beta: { messages: { create: jest.fn(async () => Promise.reject(new Error('surcharge'))) } },
    };
    const bilan = await executerVeille(db, {
      sources: [{ ...source, slug: 'panne' }, source],
      lire: async (s) => {
        if (s.slug === 'panne') throw new Error('HTTP 503');
        return [{ url: 'https://who.int/a', titre: 'Choléra', resume: '', date: aujourdhui, langue: 'en' }];
      },
      client,
      log: { log: () => {}, error: () => {} },
    });
    expect(bilan).toMatchObject({ sources: 1, erreurs: 1, publies: 0, ecartes: 0 });
    expect(db.inserts).toHaveLength(0);
    expect(db.etats.find((e) => e[0] === 'panne')[1]).toMatch(/503/);
  });
});

describe('veille : nettoyage des résumés', () => {
  const { nettoyerResume } = require('../src/services/veille/collecte');
  it('retire le titre répété, les adresses e-mail et les horodatages', () => {
    expect(
      nettoyerResume(
        'Vaccination à Kebbi auteur@who.int Mon, 19/10/2026 - 12:59 19 October 2026',
        'Vaccination à Kebbi',
      ),
    ).toBe('');
    expect(nettoyerResume('Hausse des cas en 2026 à Kinshasa.', 'Choléra')).toBe(
      'Hausse des cas en 2026 à Kinshasa.',
    );
  });
});

describe('veille : photos des articles', () => {
  const { imageDePage, completerImages } = require('../src/services/veille/images');

  it('retient la photo og:image de l’article, en adresse https absolue', () => {
    expect(
      imageDePage(
        '<meta content="/images/ebola-ituri.jpg" property="og:image">',
        'https://www.ecdc.europa.eu/en/news/ebola',
      ),
    ).toBe('https://www.ecdc.europa.eu/images/ebola-ituri.jpg');
    expect(
      imageDePage('<meta name="twitter:image" content="https://img.msf.org/a.jpg">', 'https://msf.org/x'),
    ).toBe('https://img.msf.org/a.jpg');
  });

  it('écarte logos, sceaux, images SVG et adresses non sécurisées', () => {
    const page = (src) => `<meta property="og:image" content="${src}">`;
    expect(
      imageDePage(page('/images/fallback/header-logos/h-logo-blue.svg'), 'https://www.who.int/'),
    ).toBeNull();
    expect(
      imageDePage(page('https://africacdc.org/uploads/Africa-CDC-SEAL-1024x586.png'), 'https://x.org'),
    ).toBeNull();
    expect(imageDePage(page('http://exemple.org/photo.jpg'), 'http://exemple.org')).toBeNull();
    expect(imageDePage('<p>sans balise</p>', 'https://x.org')).toBeNull();
  });

  it('ne consulte pas les sources sans photo et retire une image commune à plusieurs articles', async () => {
    const charger = jest.fn(async () => '<meta property="og:image" content="https://who.int/photo.jpg">');
    const maj = [];
    const db = {
      query: jest.fn(async (sql, params) => {
        if (/SELECT id, source_url/.test(sql))
          return [
            { id: 1, source_url: 'https://who.int/a', veille_source: 'oms-fr' },
            { id: 2, source_url: 'https://pubmed.ncbi.nlm.nih.gov/1/', veille_source: 'pubmed' },
          ];
        if (/GROUP BY veille_source, image_url/.test(sql)) return [];
        if (/UPDATE actualites SET image_url = \?, image_cherchee = 1/.test(sql)) maj.push(params);
        return [];
      }),
    };
    const bilan = await completerImages(db, {
      sources: [{ slug: 'pubmed', images: false }],
      verifier: async () => true,
      charger,
      log: { error: () => {} },
    });
    expect(charger).toHaveBeenCalledTimes(1);
    expect(bilan).toMatchObject({ examinees: 2, trouvees: 1 });
    expect(maj).toEqual(
      expect.arrayContaining([
        ['https://who.int/photo.jpg', 1],
        [null, 2],
      ]),
    );
  });
});

describe('veille : rubrique santé d’un média', () => {
  it('Radio Okapi : seuls les articles de la rubrique Santé sont retenus', async () => {
    const flux = `<rss version="2.0"><channel>
      <item><title>Ebola : 8e province touchée</title><link>https://www.radiookapi.net/2026/10/19/actualite/sante/ebola</link></item>
      <item><title>Match de football</title><link>https://www.radiookapi.net/2026/10/19/actualite/sport/match</link></item>
    </channel></rss>`;
    const source = SOURCES.find((s) => s.slug === 'radio-okapi');
    expect(source).toMatchObject({ langue: 'fr', type: 'rss' });
    const items = await collecter(source, { charger: async () => flux });
    expect(items.map((it) => it.titre)).toEqual(['Ebola : 8e province touchée']);
  });
});

describe('veille : retour du réseau', () => {
  const { surveillerConnexion, actualiserSiAncienne } = require('../src/services/veille');
  const silencieux = { log: () => {}, error: () => {} };

  it('relève les actualités seulement quand internet revient après une coupure', async () => {
    const etats = [true, false, false, true, true];
    const relever = jest.fn(async () => ({ statut: 'faite' }));
    const verifier = surveillerConnexion(
      {},
      { verifier: async () => etats.shift(), relever, log: silencieux },
    );
    const retours = [];
    for (let i = 0; i < 5; i += 1) retours.push(await verifier());
    // en ligne au départ, coupure, coupure, retour (relève), toujours en ligne
    expect(retours).toEqual([false, false, false, true, false]);
    expect(relever).toHaveBeenCalledTimes(1);
  });

  it('une relève récente n’est pas relancée', async () => {
    const db = { query: jest.fn(async () => []) };
    const options = { sources: [], client: null, photos: false, log: silencieux };
    const premiere = await actualiserSiAncienne(db, { ...options, ageMinutes: 15 });
    expect(premiere.statut).toBe('faite');
    const seconde = await actualiserSiAncienne(db, { ...options, ageMinutes: 15 });
    expect(seconde.statut).toBe('recente');
    // Plus tard que le délai : nouvelle relève
    const tard = await actualiserSiAncienne(db, {
      ...options,
      ageMinutes: 15,
      maintenant: Date.now() + 16 * 60000,
    });
    expect(tard.statut).toBe('faite');
  });
});

describe('veille : bulletins de l’OMS', () => {
  const { imageArticle } = require('../src/services/veille/images');

  it('la carte publiée dans l’article, pas le logo', () => {
    const html =
      '<img src="/images/logo.svg"><img sf-image-responsive="true" src="https://cdn.who.int/media/images/default-source/emergencies/disease-outbreak-news/carte-rdc.png">';
    expect(imageArticle(html, 'https://www.who.int/x', /\/emergencies\/disease-outbreak-news\//)).toBe(
      'https://cdn.who.int/media/images/default-source/emergencies/disease-outbreak-news/carte-rdc.png',
    );
    expect(imageArticle(html, 'https://www.who.int/x', null)).toBeNull();
  });
});

describe('veille : photo réellement disponible', () => {
  const { imageAccessible } = require('../src/services/veille/images');
  const reponse =
    (status, type, octets = []) =>
    async () => ({
      ok: status >= 200 && status < 300,
      status,
      headers: { get: () => type },
      arrayBuffer: async () => new Uint8Array(octets).buffer,
    });

  it('accepte une image déclarée, ou un JPEG envoyé sans type (Radio Okapi)', async () => {
    expect(await imageAccessible('https://x/a.jpg', reponse(200, 'image/jpeg'))).toBe(true);
    expect(
      await imageAccessible(
        'https://x/a.jfif',
        reponse(206, 'application/octet-stream', [0xff, 0xd8, 0xff, 0xe0]),
      ),
    ).toBe(true);
  });

  it('refuse une photo retirée (404) ou une page d’erreur', async () => {
    expect(await imageAccessible('https://x/a.jpg', reponse(404, 'application/xml'))).toBe(false);
    expect(await imageAccessible('https://x/a.jpg', reponse(200, 'text/html', [0x3c, 0x21, 0x44]))).toBe(
      false,
    );
  });
});
