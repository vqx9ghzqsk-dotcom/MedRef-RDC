import { StrictMode } from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { AppRoutes } from '../src/App.jsx';
import { ServicesProvider } from '../src/ui/context/services.jsx';
import { AuthProvider } from '../src/ui/context/auth.jsx';
import { CalculatorForm } from '../src/ui/components/CalculatorForm.jsx';

const fiche = {
  id: 1,
  nom: 'Paludisme grave',
  slug: 'paludisme-grave',
  resume: 'Urgence vitale.',
  onglets: {
    definition: {
      definition: 'Accès palustre **grave**.',
      physiopathologie: '- Séquestration',
      formes: [
        { id: 20, nom: 'Forme commune de l’adulte', type: 'commune', description: null },
        { id: 21, nom: 'Neuropaludisme', type: 'gravite', description: 'Coma persistant.' },
      ],
    },
    diagnostic: {
      clinique: '## Critères de gravité\n- Coma',
      examens: [
        {
          id: 7,
          nom: 'TDR paludisme',
          slug: 'tdr-paludisme',
          type: 'biologie',
          categorie: 'confirmation',
          interpretation: 'Positif : confirme.',
          valeurs_normales: '- Négatif',
        },
        {
          id: 8,
          nom: 'Radiographie thoracique',
          slug: 'radiographie-thoracique',
          type: 'imagerie',
          categorie: 'gravite',
          interpretation: 'OAP',
          valeurs_normales: null,
        },
      ],
      scores: [
        { id: 4, nom: 'Score de Glasgow', slug: 'glasgow', code: 'glasgow', interpretation: '≤ 8 coma' },
      ],
      differentiels: [
        {
          id: 1,
          nom: 'Méningite bactérienne aiguë',
          elements_distinctifs: 'LCR trouble',
          fiche: { slug: 'meningite-bacterienne' },
        },
        { id: 2, nom: 'Fièvre typhoïde', elements_distinctifs: 'Hémocultures', fiche: null },
      ],
      formes: [
        {
          id: 20,
          nom: 'Forme commune de l’adulte',
          type: 'commune',
          terrain: '- Zone d’endémie',
          signes_fonctionnels: '- Céphalées intenses',
          signes_generaux: null,
          signes_physiques: '- **Raideur de nuque** absente, signe de Kernig négatif',
          paraclinique: null,
          syndromes: [{ slug: 'syndrome-infectieux', nom: 'Syndrome infectieux' }],
          examens: [
            { slug: 'goutte-epaisse', nom: 'Goutte épaisse', type: 'biologie', interpretation: 'Positive' },
          ],
        },
        {
          id: 21,
          nom: 'Neuropaludisme',
          type: 'gravite',
          terrain: null,
          signes_fonctionnels: null,
          signes_generaux: null,
          signes_physiques: '- Coma calme',
          paraclinique: null,
          syndromes: [],
          examens: [],
        },
      ],
    },
    etiologies: {
      texte: 'P. falciparum',
      formes: [{ id: 21, nom: 'Neuropaludisme', type: 'gravite', etiologies: '- Séquestration cérébrale' }],
    },
    therapeutique: {
      principes: [
        {
          id: 1,
          ordre: 1,
          titre: 'Traitement parentéral',
          objectif: 'Réduire la parasitémie',
          details: '- Artésunate IV',
          grade_force: 'forte',
          grade_detail: 'certitude des preuves élevée',
          grade_source: 'OMS',
        },
      ],
      notes: null,
      molecules: [
        {
          id: 3,
          dci: 'Artésunate',
          slug: 'artesunate',
          ligne: 'premiere',
          contexte: 'IV ou IM',
          classe: 'Antipaludiques',
          produits: [
            {
              id: 11,
              nom_commercial: 'Artesun 60 mg',
              operateur: 'Fosun Pharma',
              association: false,
              disponible_rdc: true,
            },
            {
              id: 12,
              nom_commercial: 'ASAQ Winthrop',
              operateur: 'Sanofi',
              composition: 'Artésunate + Amodiaquine',
              association: true,
              disponible_rdc: true,
            },
          ],
        },
      ],
      complications: [
        {
          id: 5,
          nom: 'Insuffisance rénale aiguë',
          traitement: '- Dialyse si besoin',
          fiche: { slug: 'insuffisance-renale-aigue' },
        },
      ],
    },
    niveaux: [
      {
        niveau: 'centre_sante',
        prise_en_charge: '- Artésunate rectal avant transfert',
        criteres_transfert: '- Tout paludisme grave',
      },
      { niveau: 'hopital_tertiaire', prise_en_charge: '- Réanimation, dialyse', criteres_transfert: null },
    ],
    evolution: {
      texte: 'Favorable si traité tôt',
      complications: [
        {
          id: 5,
          nom: 'Insuffisance rénale aiguë',
          surveillance_clinique: '- Diurèse horaire',
          surveillance_paraclinique: '- Créatinine quotidienne',
          fiche: { slug: 'insuffisance-renale-aigue' },
        },
      ],
    },
  },
  validation: { statut: 'a_valider', valide_le: null, valide_par: null },
  departement: { id: 1, nom: 'Médecine interne', slug: 'medecine-interne' },
  specialite: { id: 2, nom: 'Infectiologie', slug: 'mi-infectiologie' },
  urgences: [
    {
      id: 1,
      nom: 'Paludisme grave',
      slug: 'paludisme-grave-urgence',
      categorie: 'medicale',
      signes_alerte: 'Troubles de la conscience, convulsions répétées',
    },
  ],
  symptomes: [{ id: 1, nom: 'Fièvre', slug: 'fievre', frequence: 'tres_frequent' }],
  molecules: [{ id: 3, dci: 'Artésunate', slug: 'artesunate', ligne: 'premiere' }],
  scores: [{ id: 4, nom: 'Score de Glasgow', slug: 'glasgow', code: 'glasgow' }],
  sources: [{ id: 5, titre: 'WHO guidelines for malaria', niveau: 1, url: null }],
};

function renderApp(path, apiOverrides = {}, user = null, autresServices = {}) {
  const api = {
    departements: vi.fn(async () => [
      {
        id: 1,
        nom: 'Pédiatrie',
        slug: 'pediatrie',
        icone: '👶',
        description: 'Enfants',
        nb_specialites: 5,
        nb_pathologies: 1,
      },
    ]),
    pathologie: vi.fn(async () => fiche),
    me: vi.fn(async () => user),
    prescriptions: vi.fn(async () => []),
    syncPrescriptions: vi.fn(async () => ({ results: [], data: [] })),
    suggestionsProduits: vi.fn(async () => ({ produits: [], molecules: [] })),
    medicamentDomaines: vi.fn(async () => ({ groupes: [], formes: [], enfant: 0, firmes: [] })),
    ...apiOverrides,
  };
  const services = {
    api,
    tokenStore: {
      getToken: () => (user ? 'jeton' : null),
      getUser: () => user,
      save: vi.fn(),
      setUser: vi.fn(),
      clear: vi.fn(),
    },
    repo: {
      list: vi.fn(async () => []),
      pending: vi.fn(async () => []),
      applyServerState: vi.fn(async () => {}),
    },
    onSessionExpired: () => () => {},
    ...autresServices,
  };
  // Mode strict, comme dans main.jsx : chaque rendu est doublé et révèle les effets de bord
  render(
    <StrictMode>
      <ServicesProvider services={services}>
        <AuthProvider>
          <MemoryRouter initialEntries={[path]}>
            <AppRoutes />
          </MemoryRouter>
        </AuthProvider>
      </ServicesProvider>
    </StrictMode>,
  );
  return api;
}

const MEDECIN = { id: 7, nom: 'Dr Test', email: 'dr@test.cd', role: 'medecin' };

describe('Accueil', () => {
  it('visiteur : page publique avec connexion et inscription, sans données cliniques', () => {
    const api = renderApp('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'la référence clinique au même endroit',
    );
    expect(screen.getAllByRole('link', { name: 'Se connecter' })[0]).toHaveAttribute('href', '/connexion');
    expect(screen.getAllByRole('link', { name: 'Créer un compte' })[0]).toHaveAttribute(
      'href',
      '/inscription',
    );
    expect(screen.getByRole('heading', { name: 'Actualités' })).toBeInTheDocument();
    expect(screen.queryByRole('region', { name: 'Accès rapides' })).toBeNull();
    expect(api.departements).not.toHaveBeenCalled();
  });

  it('visiteur : actualités publiées avec leur source, nouveautés et chiffres réels', async () => {
    const user = userEvent.setup();
    renderApp('/', {
      accueil: vi.fn(async () => ({
        alertes: [
          {
            id: 1,
            type: 'alerte_sanitaire',
            titre: 'Épidémie de choléra',
            resume: 'Cas confirmés.',
            zone: 'Kinshasa',
            source_titre: 'Ministère de la Santé',
            source_url: 'https://example.org/communique',
            publie_le: '2026-10-14',
          },
        ],
        actualites: [],
        produits: [
          {
            id: 9,
            nom_commercial: 'Aerius',
            dci: 'Desloratadine',
            operateur: 'Organon',
            photo_url: '/m/a.webp',
          },
          {
            id: 10,
            nom_commercial: 'Xyzall',
            dci: 'Lévocétirizine',
            operateur: 'UCB',
            photo_url: '/m/x.webp',
          },
          { id: 11, nom_commercial: 'Sans photo', dci: 'X', operateur: 'Y' },
        ],
        fiches_validees: [],
        fiches_mises_a_jour: [],
        totaux: { fiches: 792, fiches_validees: 0, produits: 1799, amm: 6352, molecules: 702 },
      })),
    });
    expect(await screen.findByRole('heading', { name: 'Épidémie de choléra' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Ministère de la Santé' })).toHaveAttribute(
      'href',
      'https://example.org/communique',
    );
    // Une rubrique par type d'actualité, puis les produits en photo (un produit par carte)
    expect(screen.getByRole('heading', { name: 'Alertes sanitaires' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Aerius · Organon' })).toBeInTheDocument();
    // La carte suivante de la rubrique s'affiche avec la flèche (ou toute seule après quelques secondes)
    expect(screen.queryByRole('heading', { name: 'Xyzall · UCB' })).toBeNull();
    await user.click(screen.getByRole('button', { name: 'Nouveaux produits en photo : actualité suivante' }));
    expect(screen.getByRole('heading', { name: 'Xyzall · UCB' })).toBeInTheDocument();
    // Un produit sans photo n'a pas de carte sur l'accueil
    expect(
      screen.getByText((_, el) => el?.tagName === 'SPAN' && /^2\s*\/\s*2$/.test(el.textContent.trim())),
    ).toBeInTheDocument();
    const chiffres = screen.getByRole('region', { name: 'MedRef RDC en chiffres' });
    expect(within(chiffres).getByText('6 352')).toBeInTheDocument();
    // Le carrousel « à la une » propose l'alerte publiée
    expect(screen.getAllByRole('button', { name: /À la une/ }).length).toBeGreaterThan(2);
  });

  it('visiteur : seules les nouveautés avec photo sur l’accueil, cartes reliées aux produits, lien vers l’archive', async () => {
    const user = userEvent.setup();
    renderApp('/', {
      accueil: vi.fn(async () => ({
        alertes: [],
        actualites: [],
        produits: [
          {
            id: 9,
            nom_commercial: 'Aerius',
            dci: 'Desloratadine',
            operateur: 'Organon',
            photo_url: '/medias/a.webp',
          },
          {
            id: 10,
            nom_commercial: 'Xyzall',
            dci: 'Lévocétirizine',
            operateur: 'UCB',
            photo_url: '/medias/x.webp',
          },
        ],
        fiches_validees: [
          {
            nom: 'Paludisme grave',
            slug: 'paludisme-grave',
            valide_le: '2026-10-16',
            valide_par: 'Kabasele',
            valide_par_profil: 'medecin_specialiste',
            valide_par_specialite: 'Pédiatrie',
          },
          { nom: 'Rougeole', slug: 'rougeole', valide_le: '2026-10-16', valide_par: 'Kabasele' },
        ],
        fiches_mises_a_jour: [{ nom: 'Choléra', slug: 'cholera', updated_at: '2026-10-19' }],
        produits_decouverte: [
          {
            id: 20,
            nom_commercial: 'Coartem',
            dci: 'Artéméther + luméfantrine',
            operateur: 'Novartis',
            photo_url: '/m/c.webp',
          },
          { id: 21, nom_commercial: 'Sans photo', dci: 'X', operateur: 'Y' },
        ],
        totaux: { fiches: 792, fiches_validees: 2 },
      })),
    });
    expect(await screen.findByRole('link', { name: 'Aerius · Organon' })).toHaveAttribute(
      'href',
      '/medicaments/9',
    );
    await user.click(screen.getByRole('button', { name: 'Nouveaux produits en photo : actualité suivante' }));
    expect(screen.getByRole('link', { name: 'Xyzall · UCB' })).toHaveAttribute('href', '/medicaments/10');
    // Produits de la base tirés au hasard par le serveur : rubrique à part, photo obligatoire
    expect(screen.getByRole('heading', { name: 'À découvrir dans la base' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Coartem · Novartis' })).toHaveAttribute(
      'href',
      '/medicaments/20',
    );
    expect(screen.queryByText('Sans photo · Y')).toBeNull();
    // Fiches validées et mises à jour : sans photo possible, présentées dans Mon espace
    expect(screen.queryByRole('link', { name: 'Paludisme grave' })).toBeNull();
    expect(screen.queryByRole('link', { name: 'Choléra' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Toutes les actualités' })).toHaveAttribute(
      'href',
      '/actualites',
    );
  });

  it('visiteur : fil d’actualités défilant, traduit, avec lien vers la source', async () => {
    renderApp('/', {
      accueil: vi.fn(async () => ({
        alertes: [],
        actualites: [
          {
            id: 7,
            type: 'protocole',
            titre: 'Nouvelles recommandations sur l’insuffisance cardiaque',
            titre_original: 'New heart failure guidelines',
            langue_originale: 'en',
            traduction_auto: 1,
            source_titre: 'Société européenne de cardiologie (ESC)',
            source_url: 'https://www.escardio.org/hf',
            publie_le: '2026-10-20',
          },
        ],
        produits: [],
        fiches_validees: [],
        fiches_mises_a_jour: [],
        totaux: {},
      })),
    });
    const fil = await screen.findByRole('region', { name: /Fil d’actualités/ });
    // La copie qui assure le défilement continu est cachée des lecteurs d'écran
    const liens = within(fil).getAllByRole('link', { name: /insuffisance cardiaque/ });
    expect(liens).toHaveLength(1);
    expect(liens[0]).toHaveAttribute('href', 'https://www.escardio.org/hf');
    expect(liens[0]).toHaveAttribute('title', expect.stringMatching(/Traduit automatiquement de l’anglais/));
    expect(within(fil).getByRole('link', { name: 'Toutes les actualités' })).toHaveAttribute(
      'href',
      '/actualites',
    );
  });

  it('sans réseau : l’accueil affiche les actualités gardées sur l’appareil, avec leur date de téléchargement', async () => {
    const enLigne = vi.spyOn(navigator, 'onLine', 'get').mockReturnValue(false);
    const accueil = vi.fn(async () => ({}));
    const actualitesHorsLigne = {
      lister: vi.fn(async () => [
        {
          id: 3,
          type: 'alerte_sanitaire',
          titre: 'Choléra à Ufamandu',
          resume: 'Recrudescence des cas.',
          source_titre: 'Radio Okapi',
          image_url: 'https://photos.radiookapi.net/a.jpg',
          origine: 'veille',
          publie_le: '2026-10-20',
        },
      ]),
      etat: vi.fn(async () => ({ telecharge_le: '2026-10-21', conservation_jours: 30, actualites: 1 })),
      synchroniser: vi.fn(),
    };
    try {
      renderApp('/', { accueil }, null, { actualitesHorsLigne });
      expect(await screen.findByRole('heading', { name: 'Choléra à Ufamandu' })).toBeInTheDocument();
      expect(screen.getByRole('status', { name: '' })).toHaveTextContent(
        /Hors connexion : actualités téléchargées le/,
      );
      expect(screen.getByText(/30 jours après sa publication/)).toBeInTheDocument();
      expect(accueil).not.toHaveBeenCalled();
      // Pas de téléchargement tenté sans réseau
      expect(actualitesHorsLigne.synchroniser).not.toHaveBeenCalled();
    } finally {
      enLigne.mockRestore();
    }
  });

  it('calcul de dose du jour : vraie posologie, dose au poids, par prise, lien vers la molécule', async () => {
    renderApp('/', {
      accueil: vi.fn(async () => ({
        alertes: [],
        actualites: [],
        produits: [],
        fiches_validees: [],
        fiches_mises_a_jour: [],
        calcul_du_jour: {
          dci: 'Paracétamol',
          slug: 'paracetamol',
          dose_par_kg: 15,
          dose_max: 1000,
          dose_base: 'par_prise',
          unite: 'mg',
          frequence: 'Toutes les 6 heures',
          prises_par_jour: 4,
          structure_a_valider: 1,
          poids_exemple: 15,
        },
        totaux: {},
      })),
    });
    const carte = await screen.findByRole('region', { name: 'Calcul de dose du jour' });
    expect(within(carte).getByRole('link', { name: 'Paracétamol' })).toHaveAttribute(
      'href',
      '/molecules/paracetamol',
    );
    expect(within(carte).getByText('15 mg/kg × 15 kg')).toBeInTheDocument();
    expect(within(carte).getByText('225 mg')).toBeInTheDocument();
    expect(within(carte).getByText('900 mg')).toBeInTheDocument();
    expect(within(carte).getByRole('link', { name: 'Calculer pour un autre poids' })).toHaveAttribute(
      'href',
      '/molecules/paracetamol',
    );
    expect(within(carte).getByText('Posologie en relecture médicale')).toBeInTheDocument();
  });

  it('fiche du jour : vraie fiche cliquable, raccourcis vers ses onglets, validation et avancement réel', async () => {
    renderApp('/', {
      accueil: vi.fn(async () => ({
        alertes: [],
        actualites: [],
        produits: [],
        fiches_validees: [],
        fiches_mises_a_jour: [],
        fiche_du_jour: {
          nom: 'Paludisme grave',
          slug: 'paludisme-grave',
          specialite: 'Infectiologie',
          resume: 'Paludisme avec signe de gravité : urgence ; artésunate IV',
          statut: 'valide',
          valide_par: 'Kabasele',
          valide_par_profil: 'medecin_specialiste',
        },
        totaux: { fiches: 792, fiches_validees: 770 },
      })),
    });
    const carte = await screen.findByRole('region', { name: 'Fiche du jour' });
    expect(within(carte).getByRole('link', { name: 'Paludisme grave' })).toHaveAttribute(
      'href',
      '/pathologies/paludisme-grave',
    );
    expect(within(carte).getByText('Paludisme avec signe de gravité')).toBeInTheDocument();
    expect(within(carte).getByRole('link', { name: 'Traitement' })).toHaveAttribute(
      'href',
      '/pathologies/paludisme-grave?onglet=therapeutique',
    );
    expect(within(carte).getByText('Validée par Dr Kabasele')).toBeInTheDocument();
    expect(within(carte).getByRole('progressbar')).toHaveAttribute('aria-valuenow', '97');
    expect(within(carte).getByText('770 fiches validées sur 792')).toBeInTheDocument();
  });

  it('retour d’internet : actualités rechargées, relève demandée au serveur, puis rechargées encore', async () => {
    const accueil = vi.fn(async () => ({
      alertes: [],
      actualites: [],
      produits: [],
      fiches_validees: [],
      fiches_mises_a_jour: [],
      totaux: { fiches: 792 },
    }));
    const actualiserActualites = vi.fn(async () => ({ statut: 'faite', publiees: 2 }));
    renderApp('/', { accueil, actualiserActualites });
    await screen.findByRole('heading', { name: 'Actualités' });
    await waitFor(() => expect(accueil).toHaveBeenCalled());
    const avant = accueil.mock.calls.length;
    expect(actualiserActualites).not.toHaveBeenCalled();
    window.dispatchEvent(new Event('online'));
    await waitFor(() => expect(actualiserActualites).toHaveBeenCalledTimes(1));
    // aussitôt, puis une fois la relève terminée
    await waitFor(() => expect(accueil).toHaveBeenCalledTimes(avant + 2));
  });

  it('archive des actualités : filtres par type et province, source et fiche liées', async () => {
    const actualites = vi.fn(async () => ({
      data: [
        {
          id: 4,
          type: 'alerte_sanitaire',
          titre: 'Mpox au Sud-Kivu',
          resume: 'Cas confirmés.',
          zone: 'Sud-Kivu',
          publie_le: '2026-10-10',
          expiree: true,
          source_titre: 'OMS',
          source_url: 'https://www.who.int/',
          pathologie_slug: 'mpox',
          pathologie_nom: 'Mpox',
        },
      ],
      page: 1,
      par_page: 20,
      total: 1,
    }));
    renderApp('/actualites', { actualites });
    expect(await screen.findByRole('heading', { name: 'Mpox au Sud-Kivu' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'OMS' })).toHaveAttribute('href', 'https://www.who.int/');
    expect(screen.getByRole('link', { name: 'Mpox' })).toHaveAttribute('href', '/pathologies/mpox');
    expect(screen.getByText('Terminée')).toBeInTheDocument();
    await userEvent.selectOptions(screen.getByLabelText('Province'), 'Ituri');
    await waitFor(() => expect(actualites).toHaveBeenLastCalledWith({ type: '', zone: 'Ituri', page: 1 }));
  });

  it('affiche l’identité, la recherche, les 8 accès rapides (dont l’aide au diagnostic) et les départements', async () => {
    renderApp('/espace', {}, MEDECIN);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MedRef RDC');
    expect(screen.getByText('par le Dr Ben Mingalu')).toBeInTheDocument();
    expect(screen.getAllByRole('search').length).toBeGreaterThan(0);
    const acces = screen.getByRole('region', { name: 'Accès rapides' });
    expect(within(acces).getAllByRole('link')).toHaveLength(8);
    expect(within(acces).getByRole('link', { name: /Aide au diagnostic/ })).toHaveAttribute(
      'href',
      '/diagnostic',
    );
    expect(
      within(screen.getByRole('navigation', { name: 'Navigation mobile' })).getAllByRole('link'),
    ).toHaveLength(4);
    expect(await screen.findByRole('link', { name: /Pédiatrie/ })).toHaveAttribute(
      'href',
      '/departements/pediatrie',
    );
    expect(screen.getByRole('link', { name: 'bmingalu@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:bmingalu@gmail.com',
    );
  });

  it('synchronise les prescriptions gardées dès l’ouverture de l’espace', async () => {
    const prescriptions = vi.fn(async () => []);
    renderApp('/espace', { prescriptions }, MEDECIN);
    await waitFor(() => expect(prescriptions).toHaveBeenCalledTimes(1));
  });
});

describe('Fiche pathologie', () => {
  it('affiche les 5 onglets, les urgences associées et les blocs liés', async () => {
    renderApp('/pathologies/paludisme-grave');
    expect(await screen.findByRole('heading', { level: 1, name: 'Paludisme grave' })).toBeInTheDocument();
    const tabs = screen.getAllByRole('tab');
    expect(tabs.map((t) => t.textContent)).toEqual([
      'Définition',
      'Diagnostic',
      'Étiologies',
      'Thérapeutique',
      'Niveaux de soins',
      'Évolution',
    ]);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('grave').tagName).toBe('STRONG');

    // Bandeau : les signes d'alerte, puis l'urgence entre parenthèses
    const urgences = screen.getByRole('complementary', { name: /Urgences associées/ });
    expect(urgences).toHaveTextContent('Troubles de la conscience, convulsions répétées (Paludisme grave)');
    expect(within(urgences).getByRole('link')).toHaveAttribute('href', '/urgences/paludisme-grave-urgence');
    expect(screen.getByRole('link', { name: /Fièvre/ })).toHaveAttribute('href', '/symptomes/fievre');
    expect(screen.getByRole('link', { name: /Artésunate/ })).toHaveAttribute('href', '/molecules/artesunate');
    expect(screen.getByRole('link', { name: 'Score de Glasgow' })).toHaveAttribute('href', '/scores/glasgow');
    expect(screen.getByText('WHO guidelines for malaria')).toBeInTheDocument();
  });

  it('liste les formes cliniques et affiche la sémiologie systématisée de chaque forme', async () => {
    const glossaire = vi.fn(async () => [
      {
        terme: 'Signe de Kernig',
        slug: 'signe-de-kernig',
        variantes: ['Kernig'],
        definition: 'Impossibilité d’étendre la jambe, cuisse fléchie.',
        syndrome: { slug: 'syndrome-meninge', nom: 'Syndrome méningé' },
      },
      { terme: 'Raideur de nuque', slug: 'raideur-de-nuque', variantes: [], definition: 'Signe méningé.' },
    ]);
    const user = userEvent.setup();
    renderApp('/pathologies/paludisme-grave', { glossaire });
    const formes = await screen.findByRole('heading', { name: 'Formes cliniques' });
    expect(formes.parentElement).toHaveTextContent('Neuropaludisme');
    expect(formes.parentElement).toHaveTextContent('Forme grave');

    await user.click(screen.getByRole('tab', { name: 'Diagnostic' }));
    expect(screen.getByRole('heading', { name: 'Sémiologie par forme clinique' })).toBeInTheDocument();
    // Première forme ouverte, rubriques dans l'ordre de l'examen clinique
    const commune = screen.getByText('Forme commune de l’adulte').closest('details');
    expect(commune).toHaveAttribute('open');
    expect(
      within(commune)
        .getAllByRole('heading')
        .map((h) => h.textContent),
    ).toEqual([
      'Terrain et circonstances de découverte',
      'Signes fonctionnels',
      'Signes physiques',
      'Regroupement syndromique',
      'Examens de confirmation',
    ]);
    expect(within(commune).getByRole('link', { name: 'Syndrome infectieux' })).toHaveAttribute(
      'href',
      '/syndromes/syndrome-infectieux',
    );
    expect(within(commune).getByRole('link', { name: 'Goutte épaisse' })).toHaveAttribute(
      'href',
      '/examens/goutte-epaisse',
    );
    expect(screen.getByText('Neuropaludisme').closest('details')).not.toHaveAttribute('open');

    // Termes du glossaire : définition au toucher, avec lien vers le syndrome
    const kernig = await within(commune).findByRole('button', { name: 'signe de Kernig' });
    await user.click(kernig);
    const bulle = screen.getByRole('tooltip');
    expect(bulle).toHaveTextContent('Impossibilité d’étendre la jambe');
    expect(within(bulle).getByRole('link', { name: 'Syndrome méningé' })).toHaveAttribute(
      'href',
      '/syndromes/syndrome-meninge',
    );
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('tooltip')).toBeNull();
    expect(within(commune).getByRole('button', { name: 'Raideur de nuque' })).toBeInTheDocument();

    await user.click(screen.getByRole('tab', { name: 'Étiologies' }));
    expect(screen.getByRole('heading', { name: 'Étiologies selon la forme clinique' })).toBeInTheDocument();
    expect(screen.getByText('Séquestration cérébrale')).toBeInTheDocument();
  });

  it('change d’onglet au clic et au clavier', async () => {
    const user = userEvent.setup();
    renderApp('/pathologies/paludisme-grave');
    await screen.findByRole('tab', { name: 'Diagnostic' });
    await user.click(screen.getByRole('tab', { name: 'Diagnostic' }));
    expect(screen.getByRole('tab', { name: 'Diagnostic' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: 'Critères de gravité' })).toBeInTheDocument();
    await user.keyboard('{ArrowRight}');
    expect(screen.getByRole('tab', { name: 'Étiologies' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Étiologies' })).toHaveFocus();
  });

  it('structure le diagnostic : bilan par type et catégorie, scores, différentiels ouvrables', async () => {
    renderApp('/pathologies/paludisme-grave?onglet=diagnostic');
    expect(await screen.findByRole('heading', { name: 'Bilan — biologie' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Bilan — imagerie' })).toBeInTheDocument();
    expect(screen.getByText('Confirmation')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'TDR paludisme' })).toHaveAttribute(
      'href',
      '/examens/tdr-paludisme',
    );
    expect(screen.getByText('Positif : confirme.')).toBeInTheDocument();
    expect(screen.getByText('Valeurs normales')).toBeInTheDocument();
    expect(screen.getByText('≤ 8 coma')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Méningite bactérienne aiguë' })).toHaveAttribute(
      'href',
      '/pathologies/meningite-bacterienne',
    );
    // Différentiel sans fiche : libellé simple, pas de lien
    expect(screen.queryByRole('link', { name: 'Fièvre typhoïde' })).toBeNull();
    expect(screen.getByText('Fièvre typhoïde')).toBeInTheDocument();
  });

  it('thérapeutique : principes, molécules avec produits en vignettes, complications', async () => {
    const user = userEvent.setup();
    const medicament = vi.fn(async () => ({
      id: 12,
      nom_commercial: 'ASAQ Winthrop',
      operateur: 'Sanofi',
      dci: 'Artésunate + Amodiaquine',
      photo_url: '/medias/produits/sanofi/asaq.webp',
      presentation: 'Comprimés',
      mecanisme: 'Association de deux schizonticides.',
      sources_text: 'Catalogue Sanofi — à vérifier sur la notice (RCP).',
      association: true,
      composition: [{ id: 1, dci: 'Artésunate', slug: 'artesunate' }],
      autres_produits: [],
    }));
    renderApp('/pathologies/paludisme-grave?onglet=therapeutique', { medicament });
    expect(await screen.findByRole('heading', { name: 'Principes de prise en charge' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Traitement parentéral' })).toHaveAttribute(
      'href',
      '#principe-1',
    );
    expect(screen.getByText('Produits disponibles (1 seul, 1 en association)')).toBeInTheDocument();
    // Vignette → fiche du produit en panneau latéral, sans quitter la pathologie
    await user.click(screen.getByRole('button', { name: /ASAQ Winthrop/ }));
    const panneau = await screen.findByRole('dialog', { name: 'ASAQ Winthrop' });
    expect(medicament).toHaveBeenCalledWith(12);
    expect(within(panneau).getByText('Association de deux schizonticides.')).toBeInTheDocument();
    expect(within(panneau).getByRole('img', { name: 'Conditionnement de ASAQ Winthrop' })).toHaveAttribute(
      'src',
      '/medias/produits/sanofi/asaq.webp',
    );
    expect(within(panneau).getByRole('link', { name: 'Artésunate' })).toHaveAttribute(
      'href',
      '/molecules/artesunate',
    );
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Traitement des complications' })).toBeInTheDocument();
    expect(screen.getByText('Dialyse si besoin')).toBeInTheDocument();
  });

  it('évolution : surveillance clinique et paraclinique de chaque complication', async () => {
    renderApp('/pathologies/paludisme-grave?onglet=evolution');
    expect(
      await screen.findByRole('heading', { name: 'Surveillance des complications' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Diurèse horaire')).toBeInTheDocument();
    expect(screen.getByText('Créatinine quotidienne')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Voir la fiche' })).toHaveAttribute(
      'href',
      '/pathologies/insuffisance-renale-aigue',
    );
  });

  it('affiche un message clair si la fiche n’existe pas', async () => {
    renderApp('/pathologies/inconnue', {
      pathologie: vi.fn(async () => {
        throw Object.assign(new Error('Pathologie introuvable'), { status: 404 });
      }),
    });
    expect(await screen.findByText('Cette page n’existe pas ou a été déplacée.')).toBeInTheDocument();
  });
});

describe('Niveaux de soins, grades et validation', () => {
  it('affiche ce qu’on fait sur place et quand transférer, par niveau', async () => {
    renderApp('/pathologies/paludisme-grave?onglet=niveaux');
    expect(await screen.findByRole('heading', { name: /Centre de santé/ })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Hôpital provincial/ })).toBeInTheDocument();
    expect(screen.getByText('Artésunate rectal avant transfert')).toBeInTheDocument();
    expect(screen.getAllByRole('heading', { name: 'Quand transférer' })).toHaveLength(1);
    expect(screen.getByText('Tout paludisme grave')).toBeInTheDocument();
  });

  it('affiche le grade à côté du principe et le statut de validation de la fiche', async () => {
    renderApp('/pathologies/paludisme-grave?onglet=therapeutique');
    expect(
      await screen.findByText(/Recommandation forte · certitude des preuves élevée/),
    ).toBeInTheDocument();
    expect(screen.getByText(/OMS —/)).toBeInTheDocument();
    expect(screen.getByRole('note')).toHaveTextContent('en attente de validation médicale');
  });

  it('indique la validation par un médecin', async () => {
    renderApp('/pathologies/paludisme-grave', {
      pathologie: vi.fn(async () => ({
        ...fiche,
        validation: { statut: 'valide', valide_le: '2026-10-01 10:00:00', valide_par: 'Dr Mingalu' },
      })),
    });
    expect(await screen.findByRole('note')).toHaveTextContent('Fiche validée par Dr Mingalu le 01/10/2026');
  });

  it('signale une fiche dont la date de révision est dépassée', async () => {
    renderApp('/pathologies/paludisme-grave', {
      pathologie: vi.fn(async () => ({
        ...fiche,
        validation: {
          statut: 'valide',
          valide_le: '2024-01-15 10:00:00',
          valide_par: 'Dr Mingalu',
          revision_le: '2026-01-15',
          a_revoir: true,
        },
      })),
    });
    const note = await screen.findByRole('note');
    expect(note).toHaveTextContent('révision en retard');
    expect(note).toHaveTextContent('15/01/2026');
  });
});

describe('Robustesse de l’interface', () => {
  it('remplace une page qui plante par un message clair et signale l’erreur au serveur', async () => {
    const erreur = vi.spyOn(console, 'error').mockImplementation(() => {});
    const signalerErreur = vi.fn(async () => ({ reference: 'ab12cd34ef56' }));
    renderApp('/pathologies/paludisme-grave', {
      // Données corrompues : la page plante au rendu
      pathologie: vi.fn(async () => ({ ...fiche, onglets: null })),
      signalerErreur,
    });
    expect(
      await screen.findByRole('heading', { name: 'Une erreur est survenue sur cette page' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Recharger la page' })).toBeInTheDocument();
    expect(signalerErreur).toHaveBeenCalledWith(
      expect.objectContaining({ message: expect.any(String), pile: expect.any(String) }),
    );
    expect(await screen.findByText('ab12cd34ef56')).toBeInTheDocument();
    // Le reste de l'application (en-tête, navigation) reste utilisable
    expect(screen.getByRole('navigation', { name: 'Navigation principale' })).toBeInTheDocument();
    erreur.mockRestore();
  });

  it('change le mot de passe depuis « Mon compte » et affiche les erreurs par champ', async () => {
    const user = userEvent.setup();
    const medecin = { id: 7, nom: 'Dr Test', email: 'dr@test.cd', role: 'medecin' };
    const changePassword = vi
      .fn()
      .mockRejectedValueOnce(
        Object.assign(new Error('Données invalides'), {
          details: { actuel: 'Mot de passe actuel incorrect' },
        }),
      )
      .mockResolvedValueOnce({ token: 'nouveau', user: medecin });
    renderApp('/compte', { changePassword }, medecin);
    expect(await screen.findByText('Médecin relecteur')).toBeInTheDocument();
    await user.type(screen.getByLabelText('Mot de passe actuel'), 'faux');
    await user.type(screen.getByLabelText('Nouveau mot de passe'), 'Artesunate-2026');
    await user.type(screen.getByLabelText('Confirmer le nouveau mot de passe'), 'Artesunate-2026');
    await user.click(screen.getByRole('button', { name: 'Changer le mot de passe' }));
    expect(await screen.findByText('Mot de passe actuel incorrect')).toBeInTheDocument();

    await user.clear(screen.getByLabelText('Mot de passe actuel'));
    await user.type(screen.getByLabelText('Mot de passe actuel'), 'Quinine-2026');
    await user.click(screen.getByRole('button', { name: 'Changer le mot de passe' }));
    expect(await screen.findByRole('status')).toHaveTextContent('Mot de passe modifié');
    expect(changePassword).toHaveBeenLastCalledWith({ actuel: 'Quinine-2026', nouveau: 'Artesunate-2026' });
  });
});

describe('Posologies et calcul de dose', () => {
  const molecule = {
    id: 1,
    dci: 'Paracétamol',
    slug: 'paracetamol',
    classe: 'Antalgiques',
    produits: [],
    pathologies: [],
    posologies: [
      { id: 1, population: 'adulte', dose_texte: '1 g', dose_par_kg: null, dose_max: null, unite: 'mg' },
      { id: 2, population: 'enfant', dose_texte: '15 mg/kg', dose_par_kg: 15, dose_max: 1000, unite: 'mg' },
      { id: 3, population: 'grossesse', dose_texte: 'Posologie adulte', securite: 'autorise', unite: 'mg' },
    ],
  };

  it('sépare les populations et calcule la dose selon le poids', async () => {
    const user = userEvent.setup();
    renderApp('/molecules/paracetamol', { molecule: vi.fn(async () => molecule) });
    const enfant = await screen.findByRole('button', { name: 'Enfant' });
    expect(enfant).toHaveAttribute('aria-pressed', 'true');
    await user.type(screen.getByLabelText('Poids du patient'), '20');
    expect(screen.getByRole('status')).toHaveTextContent('Pour 20 kg : 300 mg');
    expect(screen.queryByRole('alert')).toBeNull();
    await user.clear(screen.getByLabelText('Poids du patient'));
    await user.type(screen.getByLabelText('Poids du patient'), '90');
    expect(screen.getByRole('status')).toHaveTextContent('1 000 mg');
    // Garde-fous : poids incohérent pour un enfant et dose plafonnée
    const alertes = screen.getAllByRole('alert').map((a) => a.textContent);
    expect(alertes).toEqual(
      expect.arrayContaining([
        expect.stringMatching(/Au-delà de 50 kg/),
        expect.stringMatching(/Dose plafonnée.*1\s350 mg/),
      ]),
    );

    await user.click(screen.getByRole('button', { name: 'Grossesse' }));
    expect(screen.getByText('Autorisé')).toBeInTheDocument();
    expect(screen.queryByLabelText('Poids du patient')).toBeNull();
  });
});

describe('Administration', () => {
  it('demande une connexion, puis refuse un compte sans rôle éditeur', async () => {
    renderApp('/admin');
    expect(await screen.findByText(/Connectez-vous avec un compte administrateur/)).toBeInTheDocument();
  });

  it('refuse un compte « user »', async () => {
    renderApp('/admin', {}, { id: 1, nom: 'Lecteur', email: 'l@x.cd', role: 'user' });
    expect(await screen.findByText(/Accès réservé aux administrateurs/)).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: 'Administration' })).toBeNull();
  });

  it('onglet « Aide au diagnostic » : calibration et signalements à traiter', async () => {
    const user = userEvent.setup();
    const adminTraiterSignalementDiagnostic = vi.fn(async () => ({}));
    const adminCalibrationDiagnostic = vi.fn(async () => ({
      total: 10,
      premier: 7,
      trois: 9,
      absent: 1,
      fiches: [{ nom: 'Paludisme grave', slug: 'paludisme-grave', total: 4, premier: 2, absent: 0 }],
      signalements: [{ id: 5, type: 'hypothese_manquante', message: 'GEU absente', statut: 'nouveau' }],
    }));
    renderApp(
      '/admin?onglet=diagnostic',
      {
        adminResume: vi.fn(async () => ({
          statuts: {},
          pathologies: [],
          molecules: [],
          medicaments: [],
          modifications: [],
        })),
        adminCalibrationDiagnostic,
        adminTraiterSignalementDiagnostic,
      },
      { id: 1, nom: 'Dr', email: 'd@x.cd', role: 'medecin' },
    );
    expect(await screen.findByText(/bon diagnostic en 1re position/)).toHaveTextContent('70 %');
    expect(screen.getByRole('link', { name: 'Paludisme grave' })).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Marquer traité' }));
    expect(adminTraiterSignalementDiagnostic).toHaveBeenCalledWith(5);
  });

  it('affiche le tableau de bord et le lien de menu pour un administrateur', async () => {
    const adminResume = vi.fn(async () => ({
      statuts: { brouillon: 0, a_valider: 1, valide: 1 },
      pathologies: [
        {
          id: 3,
          nom: 'Paludisme grave',
          specialite: 'Infectiologie',
          departement: 'Médecine interne',
          statut: 'a_valider',
        },
        {
          id: 4,
          nom: 'Asthme',
          specialite: 'Pneumologie',
          departement: 'Médecine interne',
          statut: 'valide',
          valide_par: 'Dr X',
          valide_le: '2026-10-01 10:00:00',
        },
      ],
      molecules: [],
      medicaments: [],
      modifications: [],
    }));
    const user = userEvent.setup();
    renderApp('/admin', { adminResume }, { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'admin' });
    expect(await screen.findByRole('link', { name: 'Paludisme grave' })).toHaveAttribute(
      'href',
      '/admin/pathologies/3',
    );
    expect(screen.getByRole('link', { name: 'Administration' })).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Statut'), 'valide');
    expect(screen.queryByRole('link', { name: 'Paludisme grave' })).toBeNull();
    expect(screen.getByRole('link', { name: 'Asthme' })).toBeInTheDocument();
  });

  it('valide en groupe les fiches « à valider » sélectionnées, après confirmation de relecture', async () => {
    const fiche = (id, nom, statut) => ({
      id,
      nom,
      specialite: 'Infectiologie',
      departement: 'Médecine interne',
      statut,
    });
    const adminResume = vi.fn(async () => ({
      statuts: { brouillon: 0, a_valider: 2, valide: 1 },
      pathologies: [
        fiche(3, 'Paludisme grave', 'a_valider'),
        fiche(5, 'Typhoïde', 'a_valider'),
        fiche(4, 'Asthme', 'valide'),
      ],
      molecules: [],
      medicaments: [],
      modifications: [],
    }));
    const adminValiderPathologies = vi.fn(async () => ({
      ok: true,
      validees: [
        { id: 3, nom: 'Paludisme grave' },
        { id: 5, nom: 'Typhoïde' },
      ],
      ignorees: [],
    }));
    const user = userEvent.setup();
    renderApp(
      '/admin',
      { adminResume, adminValiderPathologies },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'admin' },
    );
    await screen.findByRole('link', { name: 'Paludisme grave' });
    // Une fiche déjà validée n'est pas sélectionnable
    expect(screen.queryByLabelText('Sélectionner Asthme')).toBeNull();
    await user.click(screen.getByLabelText('Sélectionner toutes les fiches « à valider » affichées'));
    const bouton = screen.getByRole('button', { name: 'Valider la sélection (2)' });
    expect(bouton).toBeDisabled();
    await user.click(screen.getByLabelText(/J’ai relu ces 2 fiche\(s\)/));
    const chargements = adminResume.mock.calls.length;
    await user.click(bouton);
    expect(adminValiderPathologies).toHaveBeenCalledWith([3, 5], true);
    expect(await screen.findByText('2 fiche(s) validée(s).')).toBeInTheDocument();
    // La liste est rechargée après la validation
    expect(adminResume.mock.calls.length).toBeGreaterThan(chargements);
  });

  it('édite une fiche validée : elle repasse « à valider » et l’enregistrement envoie les collections', async () => {
    const adminPathologie = vi.fn(async () => ({
      id: 3,
      nom: 'Paludisme grave',
      slug: 'paludisme-grave',
      resume: 'Urgence',
      definition: 'def',
      statut: 'valide',
      valide_par: 'Dr X',
      valide_le: '2026-10-01 10:00:00',
      principes: [
        {
          titre: 'Artésunate',
          objectif: '',
          details: '',
          grade_force: 'forte',
          grade_detail: '',
          grade_source: 'OMS',
        },
      ],
      complications: [],
      niveaux: [
        { niveau: 'centre_sante', prise_en_charge: 'A', criteres_transfert: 'B' },
        { niveau: 'hopital_general', prise_en_charge: null, criteres_transfert: null },
        { niveau: 'hopital_tertiaire', prise_en_charge: null, criteres_transfert: null },
      ],
      examens: [],
      differentiels: [],
      options: { examens: [], pathologies: [] },
      historique: [],
    }));
    const adminSavePathologie = vi.fn(async () => ({ ok: true }));
    const user = userEvent.setup();
    renderApp(
      '/admin/pathologies/3',
      { adminPathologie, adminSavePathologie },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'admin' },
    );
    const resume = await screen.findByLabelText('Résumé');
    await user.type(resume, ' corrigé');
    expect(screen.getByText(/La fiche repassera « À valider »/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: '+ Ajouter un principe' }));
    await user.click(screen.getByRole('button', { name: 'Enregistrer' }));
    // Le nouveau principe sans titre est envoyé : c'est l'API qui renvoie l'erreur par champ
    expect(adminSavePathologie).toHaveBeenCalledWith(
      '3',
      expect.objectContaining({
        resume: 'Urgence corrigé',
        statut: 'a_valider',
        principes: expect.any(Array),
      }),
    );
    const payload = adminSavePathologie.mock.calls[0][1];
    expect(payload.principes).toHaveLength(2);
    expect(payload).not.toHaveProperty('options');
    expect(payload).not.toHaveProperty('historique');
  });

  it('affiche le rapport du contrôle de conformité en tête de la fiche, sans l’envoyer à l’enregistrement', async () => {
    const adminPathologie = vi.fn(async () => ({
      id: 3,
      nom: 'Peste',
      slug: 'peste',
      resume: 'Zoonose',
      statut: 'a_valider',
      principes: [],
      complications: [],
      niveaux: [],
      examens: [],
      differentiels: [],
      options: { examens: [], pathologies: [] },
      historique: [],
      controle: {
        lot: 'C01',
        controle_le: '2026-10-16',
        protocoles:
          'OMS — WHO guidelines for plague management (2021)\nMSF — Guide clinique et thérapeutique',
        verifie: 'Gentamicine 5 mg/kg/j ; isolement 48 h.',
        corrige: 'Durée de 10 à 14 jours ; association pour les formes sévères.',
        a_arbitrer: null,
        nb_corrections: 1,
      },
    }));
    const adminSavePathologie = vi.fn(async () => ({ ok: true }));
    const user = userEvent.setup();
    renderApp(
      '/admin/pathologies/3',
      { adminPathologie, adminSavePathologie },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'medecin' },
    );
    const rapport = await screen.findByRole('region', { name: 'Contrôle de conformité aux protocoles' });
    expect(within(rapport).getByText(/il ne vaut pas validation/)).toBeInTheDocument();
    expect(
      within(rapport).getByText('OMS — WHO guidelines for plague management (2021)'),
    ).toBeInTheDocument();
    expect(within(rapport).getByText(/Durée de 10 à 14 jours/)).toBeInTheDocument();
    await user.type(screen.getByLabelText('Résumé'), ' corrigé');
    await user.click(screen.getByRole('button', { name: 'Enregistrer' }));
    expect(adminSavePathologie.mock.calls[0][1]).not.toHaveProperty('controle');
  });

  it('affiche les erreurs par champ renvoyées par l’API', async () => {
    const adminMedicament = vi.fn(async () => ({
      id: 4,
      nom_commercial: 'Coartem',
      dci: 'Artéméther + Luméfantrine',
      operateur: 'Novartis',
      disponible_rdc: true,
      prix_indicatif_cdf: null,
      historique: [],
    }));
    const adminSaveMedicament = vi.fn(async () => {
      throw Object.assign(new Error('Données invalides'), {
        status: 400,
        details: { prix_indicatif_cdf: 'Nombre entre 0 et 10000000000 attendu' },
      });
    });
    const user = userEvent.setup();
    renderApp(
      '/admin/medicaments/4',
      { adminMedicament, adminSaveMedicament },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'medecin' },
    );
    await user.type(await screen.findByLabelText('Prix indicatif'), '-3');
    await user.click(screen.getByRole('button', { name: 'Enregistrer' }));
    expect(await screen.findByText('Nombre entre 0 et 10000000000 attendu')).toBeInTheDocument();
    expect(screen.getByLabelText('Prix indicatif')).toHaveAttribute('aria-invalid', 'true');
  });
});

describe('CalculatorForm', () => {
  it('calcule l’IMC et affiche l’interprétation', async () => {
    const user = userEvent.setup();
    render(<CalculatorForm code="imc" />);
    await user.type(screen.getByLabelText(/Poids/), '70');
    await user.type(screen.getByLabelText(/Taille/), '175');
    await user.click(screen.getByRole('button', { name: 'Calculer' }));
    expect(screen.getByText('22,9')).toBeInTheDocument();
    expect(screen.getByText('Corpulence normale')).toBeInTheDocument();
  });

  it('indique le champ manquant', async () => {
    const user = userEvent.setup();
    render(<CalculatorForm code="imc" />);
    await user.click(screen.getByRole('button', { name: 'Calculer' }));
    expect(screen.getByRole('alert')).toHaveTextContent('Renseignez « Poids »');
  });
});

describe('Produits des firmes sur la fiche molécule', () => {
  const produit = (id, nom, operateur, extra = {}) => ({
    id,
    nom_commercial: nom,
    operateur,
    photo_url: `/medias/produits/test/${id}.webp`,
    forme_categorie: 'Comprimé',
    association: false,
    pediatrique: false,
    disponible_rdc: false,
    ...extra,
  });
  const molecule = {
    id: 1,
    dci: 'Paracétamol',
    slug: 'paracetamol',
    classe: 'Antalgiques',
    pathologies: [],
    posologies: [],
    produits: [
      produit(1, 'Amidol 500', 'Shalina Healthcare'),
      produit(2, 'Amidol sirop', 'Shalina Healthcare', {
        forme_categorie: 'Sirop, suspension, solution buvable',
        pediatrique: true,
      }),
      produit(3, 'Dologan Denk', 'Denk Pharma', {
        association: true,
        composition: 'Paracétamol + Ibuprofène + Caféine',
      }),
    ],
  };

  it('présente les photos, seule puis en association, avec filtres et fiche en panneau', async () => {
    const user = userEvent.setup();
    const medicament = vi.fn(async (id) => ({
      ...molecule.produits.find((p) => p.id === id),
      dci: 'Paracétamol',
      composition: [],
      autres_produits: [],
    }));
    renderApp('/molecules/paracetamol', { molecule: vi.fn(async () => molecule), medicament });
    const galerie = (await screen.findByRole('heading', { name: 'Produits disponibles chez les firmes' }))
      .parentElement;
    expect(within(galerie).getByRole('status')).toHaveTextContent('3 produits de 2 firmes');
    expect(within(galerie).getByRole('region', { name: 'Paracétamol seule' })).toHaveTextContent(
      'Amidol 500',
    );
    const assoc = within(galerie).getByRole('region', { name: 'Paracétamol en association' });
    expect(assoc).toHaveTextContent('Paracétamol + Ibuprofène + Caféine');
    // Vignettes chargées à la demande
    const img = within(galerie).getByAltText('Conditionnement de Amidol 500');
    expect(img).toHaveAttribute('src', '/medias/produits/test/1-mini.webp');
    expect(img).toHaveAttribute('loading', 'lazy');

    await user.selectOptions(within(galerie).getByLabelText('Firme'), 'Denk Pharma');
    expect(within(galerie).getByRole('status')).toHaveTextContent('1 produit de 1 firme');
    await user.click(within(galerie).getByRole('button', { name: 'Tout afficher' }));
    await user.click(within(galerie).getByLabelText(/Adaptés à/));
    expect(within(galerie).getByRole('status')).toHaveTextContent('1 produit');
    expect(within(galerie).getByText('Amidol sirop')).toBeInTheDocument();

    await user.click(within(galerie).getByRole('button', { name: 'Amidol sirop' }));
    const panneau = await screen.findByRole('dialog', { name: 'Amidol sirop' });
    // Rendu dans <body> : le flou de la zone de contenu ne doit pas en faire le repère du panneau fixe
    expect(panneau.closest('.panneau-fond').parentElement).toBe(document.body);
    expect(medicament).toHaveBeenCalledWith(2);
    expect(within(panneau).getByText('Adapté à l’enfant')).toBeInTheDocument();
    await user.click(within(panneau).getByRole('button', { name: 'Fermer' }));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('fusionne identification, données du produit et fiche de la molécule, avec la provenance', async () => {
    const medicament = vi.fn(async () => ({
      ...produit(1, 'Amidol 500', 'Shalina Healthcare'),
      dci: 'Paracétamol',
      forme: 'Comprimé',
      presentation: 'Boîte de 100',
      indication: 'Douleurs et fièvre.',
      contre_indications: 'Insuffisance hépatique sévère.',
      composition: [
        {
          id: 1,
          dci: 'Paracétamol',
          slug: 'paracetamol',
          dosage: '500 mg',
          mecanisme: 'Inhibition centrale des COX.',
          indications: 'Douleurs et fièvre.',
          contre_indications: 'Hypersensibilité au paracétamol.',
          posologies: [{ id: 9, population: 'adulte', dose_texte: '1 g toutes les 6 h', voie: 'Orale' }],
          fiches_externes: [
            {
              source: 'ACOREP',
              nom: 'Paracétamol',
              mecanisme: 'Inhibition centrale des COX.',
              precautions: 'Hépatotoxicité en cas de surdosage.',
              a_valider: true,
            },
          ],
        },
      ],
      amm: true,
      autorisations: [
        {
          id: 1,
          source: 'ACOREP',
          marque: 'Amidol',
          dosage: '500 mg',
          forme: 'Co.',
          provenance: 'Inde',
          numero: 'MS 1234/2022',
        },
      ],
      pathologies: [],
      autres_produits: [],
    }));
    renderApp('/medicaments/1', { medicament });
    await screen.findByRole('heading', { name: 'Amidol 500', level: 1 });
    // Trois anciennes sections réunies en deux blocs d'une même fiche
    expect(screen.getByRole('heading', { name: 'Identification' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Pharmacologie' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /Utilisation de ce produit/ })).toBeNull();

    const rubrique = (nom) => screen.getByRole('heading', { name: nom }).closest('.pharmaco-row');
    // Texte identique du produit et de la molécule : affiché une seule fois
    expect(within(rubrique('Indications')).getAllByText('Douleurs et fièvre.')).toHaveLength(1);
    // Textes différents : les deux, avec leur provenance
    const ci = rubrique('Contre-indications');
    expect(ci).toHaveTextContent('Catalogue Shalina Healthcare');
    expect(ci).toHaveTextContent('Insuffisance hépatique sévère.');
    expect(ci).toHaveTextContent('Hypersensibilité au paracétamol.');
    expect(rubrique('Mécanisme d’action')).toHaveTextContent('Inhibition centrale des COX.');
    expect(within(rubrique('Posologie')).getByText('1 g toutes les 6 h')).toBeInTheDocument();
    // Fiche ACOREP : seulement ce qu’elle apporte de nouveau, signalée « à valider »
    expect(within(rubrique('Mécanisme d’action')).getAllByText('Inhibition centrale des COX.')).toHaveLength(
      1,
    );
    expect(rubrique('Précautions')).toHaveTextContent('Fiche ACOREP — Paracétamol, à valider');
    // Autorisation de mise sur le marché
    expect(screen.getByText('AMM RDC')).toBeInTheDocument();
    const amm = screen.getByRole('table');
    expect(within(amm).getByText('MS 1234/2022')).toBeInTheDocument();
    expect(within(amm).getByText('Inde')).toBeInTheDocument();
  });

  it('signale une fiche molécule importée à valider et affiche la fiche externe différente', async () => {
    const molecule = vi.fn(async (slug) => ({
      id: 5,
      dci: slug === 'atropine' ? 'Atropine' : 'Paracétamol',
      slug,
      classe: 'Anticholinergiques',
      groupe_therapeutique: 'Anesthésie et réanimation',
      fiche_a_valider: slug === 'atropine',
      fiche_source: slug === 'atropine' ? 'ACOREP — fiche rédigée par IA' : null,
      mecanisme: 'Antagoniste muscarinique.',
      precautions: 'Glaucome.',
      fiches_externes: [
        {
          source: 'ACOREP',
          nom: 'X',
          mecanisme: slug === 'atropine' ? 'Antagoniste muscarinique.' : 'Autre texte.',
          a_valider: true,
        },
      ],
      posologies: [],
      pathologies: [],
      produits: [],
    }));
    renderApp('/molecules/atropine', { molecule });
    await screen.findByRole('heading', { name: 'Atropine', level: 1 });
    expect(screen.getByRole('note')).toHaveTextContent(/à relire et valider par un médecin/);
    expect(screen.getByText('Glaucome.')).toBeInTheDocument();
    // Même texte que la fiche : pas de doublon
    expect(screen.queryByRole('heading', { name: 'Fiche ACOREP' })).toBeNull();
  });
});

describe('Liste des médicaments', () => {
  it('montre les médicaments autorisés en RDC, recherche par nom et invite à affiner', async () => {
    const user = userEvent.setup();
    const medicaments = vi.fn(async (filtres) => ({
      data: [
        {
          id: 1,
          nom_commercial: 'Amidol 500',
          dci: 'Paracétamol',
          nature: 'medicament',
          amm: true,
          pediatrique: true,
          groupe: 'Antalgiques et anti-inflammatoires',
        },
      ],
      total: filtres.q ? 1 : 3995,
      limite: 300,
    }));
    const medicamentFiltres = vi.fn(async () => ({ operateurs: [], classes: [], molecules: [] }));
    renderApp('/medicaments', { medicaments, medicamentFiltres });
    expect(
      await screen.findByText(
        '3995 produits : les 300 premiers sont affichés, affinez avec la recherche ou les filtres',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText(/médicaments autorisés en RDC/)).toBeInTheDocument();
    // Groupés par domaine thérapeutique ; plus de filtre « Nature » (médicaments seuls)
    expect(screen.getByRole('heading', { name: 'Antalgiques et anti-inflammatoires' })).toBeInTheDocument();
    expect(screen.getByText('Enfant', { selector: '.tag' })).toBeInTheDocument();
    expect(screen.queryByLabelText('Nature')).toBeNull();

    await user.type(screen.getByLabelText('Chercher un produit ou une molécule'), 'amidol{Enter}');
    await waitFor(() =>
      expect(medicaments).toHaveBeenLastCalledWith(expect.objectContaining({ q: 'amidol' })),
    );
    expect(await screen.findByText('1 produit')).toBeInTheDocument();
  });

  it('ouvre la fiche pharmacologique en panneau partout où un produit est mentionné', async () => {
    const user = userEvent.setup();
    const fiche = {
      id: 7,
      nom_commercial: 'Amidol 500',
      dci: 'Paracétamol',
      operateur: 'Shalina Healthcare',
      composition: [{ id: 1, dci: 'Paracétamol', slug: 'paracetamol', indications: 'Fièvre et douleur.' }],
      autres_produits: [],
      pathologies: [],
    };
    const medicament = vi.fn(async () => fiche);
    const medicaments = vi.fn(async () => ({
      data: [{ id: 7, nom_commercial: 'Amidol 500', dci: 'Paracétamol', nature: 'medicament' }],
      total: 1,
      limite: 300,
    }));
    const medicamentFiltres = vi.fn(async () => ({ operateurs: [], classes: [], molecules: [] }));
    const recherche = vi.fn(async () => ({
      total: 1,
      data: { medicaments: [{ id: 7, nom_commercial: 'Amidol 500', dci: 'Paracétamol' }] },
    }));
    renderApp('/medicaments', { medicament, medicaments, medicamentFiltres, recherche });

    // Depuis la liste : un vrai lien vers la page, qui ouvre la fiche en panneau
    const lien = await screen.findByRole('link', { name: /Amidol 500/ });
    expect(lien).toHaveAttribute('href', '/medicaments/7');
    await user.click(lien);
    const panneau = await screen.findByRole('dialog', { name: 'Amidol 500' });
    expect(within(panneau).getByText('Fièvre et douleur.')).toBeInTheDocument();
    expect(medicament).toHaveBeenCalledWith(7);
    await user.click(within(panneau).getByRole('button', { name: 'Fermer' }));
    expect(screen.queryByRole('dialog')).toBeNull();
  });

  it('ouvre aussi la fiche en panneau depuis les résultats de recherche', async () => {
    const user = userEvent.setup();
    const medicament = vi.fn(async () => ({
      id: 7,
      nom_commercial: 'Amidol 500',
      dci: 'Paracétamol',
      composition: [],
      autres_produits: [],
      pathologies: [],
    }));
    const recherche = vi.fn(async () => ({
      total: 1,
      data: { medicaments: [{ id: 7, nom_commercial: 'Amidol 500', dci: 'Paracétamol' }] },
    }));
    renderApp('/recherche?q=amidol', { medicament, recherche });
    await user.click(await screen.findByRole('link', { name: /Paracétamol \(Amidol 500\)/ }));
    expect(await screen.findByRole('dialog', { name: 'Amidol 500' })).toBeInTheDocument();
  });
});

describe('Accès aux produits depuis le bouton Médicaments', () => {
  it('l’accueil garde une seule barre de recherche, sans recherche de produits à part', async () => {
    renderApp('/espace', {}, MEDECIN);
    await screen.findByText('Accès rapides');
    expect(screen.queryByRole('combobox')).toBeNull();
  });

  it('page Médicaments : suggère produits et molécules dès 2 lettres, au clavier, et ouvre la fiche', async () => {
    const user = userEvent.setup();
    const suggestionsProduits = vi.fn(async () => ({
      produits: [
        {
          id: 9,
          nom_commercial: 'Coartem',
          dci: 'Artéméther + Luméfantrine',
          forme_categorie: 'Comprimé',
          operateur: 'Novartis',
          amm: true,
        },
      ],
      molecules: [
        {
          id: 3,
          dci: 'Artéméther',
          slug: 'artemether',
          groupe_therapeutique: 'Antipaludiques',
          nb_produits: 132,
        },
      ],
    }));
    const medicament = vi.fn(async () => ({
      id: 9,
      nom_commercial: 'Coartem',
      dci: 'Artéméther + Luméfantrine',
      composition: [],
      autres_produits: [],
      pathologies: [],
    }));
    const medicaments = vi.fn(async () => ({ data: [], total: 0, limite: 300 }));
    const medicamentFiltres = vi.fn(async () => ({ operateurs: [], classes: [], molecules: [] }));
    renderApp('/medicaments', { suggestionsProduits, medicament, medicaments, medicamentFiltres });
    const champ = await screen.findByRole('combobox', { name: 'Chercher un produit ou une molécule' });
    await user.type(champ, 'c');
    expect(suggestionsProduits).not.toHaveBeenCalled();
    await user.type(champ, 'oa');
    const liste = await screen.findByRole('listbox', { name: 'Suggestions' });
    expect(suggestionsProduits).toHaveBeenLastCalledWith('coa');
    expect(within(liste).getAllByRole('option')).toHaveLength(2);
    expect(within(liste).getByText('Molécule · Antipaludiques · 132 produits')).toBeInTheDocument();

    await user.keyboard('{ArrowDown}');
    expect(within(liste).getAllByRole('option')[0]).toHaveAttribute('aria-selected', 'true');
    await user.keyboard('{Enter}');
    expect(await screen.findByRole('dialog', { name: 'Coartem' })).toBeInTheDocument();
    expect(medicament).toHaveBeenCalledWith(9);
  });

  it('propose des entrées par domaine, forme et firme qui filtrent la liste', async () => {
    const user = userEvent.setup();
    const medicaments = vi.fn(async () => ({ data: [], total: 0, limite: 300 }));
    const medicamentDomaines = vi.fn(async () => ({
      groupes: [{ nom: 'Antipaludiques', n: 272 }],
      formes: [{ nom: 'Sirop, suspension, solution buvable', n: 855 }],
      enfant: 1065,
      firmes: [{ id: 5, nom: 'Shalina Healthcare', n: 258 }],
    }));
    const medicamentFiltres = vi.fn(async () => ({
      operateurs: [{ id: 5, nom: 'Shalina Healthcare' }],
      classes: [],
      molecules: [],
    }));
    renderApp('/medicaments', { medicaments, medicamentDomaines, medicamentFiltres });
    await user.click(await screen.findByRole('button', { name: /Antipaludiques\s*272/ }));
    await waitFor(() =>
      expect(medicaments).toHaveBeenLastCalledWith(expect.objectContaining({ groupe: 'Antipaludiques' })),
    );
    // Le filtre choisi apparaît en pastille, retirable
    expect(screen.getByRole('button', { name: 'Retirer le filtre Antipaludiques' })).toBeInTheDocument();
    // Le bloc des domaines se replie pour laisser voir les résultats ; on le rouvre
    await user.click(screen.getByText('Changer de domaine, de forme ou de firme'));
    await user.click(await screen.findByRole('button', { name: /Adaptés à l’enfant\s*1\s065/ }));
    await waitFor(() =>
      expect(medicaments).toHaveBeenLastCalledWith(
        expect.objectContaining({ groupe: 'Antipaludiques', enfant: '1' }),
      ),
    );
    await user.click(screen.getByRole('button', { name: 'Retirer le filtre Antipaludiques' }));
    await waitFor(() =>
      expect(medicaments).toHaveBeenLastCalledWith(expect.objectContaining({ groupe: '' })),
    );
  });
});
describe('Comptes : profils, vérification, mot de passe oublié (lot A)', () => {
  it('inscription : le profil est demandé, la spécialité seulement pour le spécialiste', async () => {
    const user = userEvent.setup();
    const register = vi.fn(async () => ({
      token: 'jeton',
      user: { id: 9, nom: 'Dr Kabila', email: 'k@x.cd', role: 'user', profil: 'medecin_specialiste' },
    }));
    renderApp('/inscription', { register });
    await user.type(await screen.findByLabelText('Nom complet'), 'Dr Kabila');
    await user.type(screen.getByLabelText('Adresse e-mail'), 'k@x.cd');
    await user.type(screen.getByLabelText('Mot de passe'), 'Artesunate-2026');
    expect(screen.queryByLabelText('Spécialité')).toBeNull();
    await user.selectOptions(screen.getByLabelText('Profil professionnel'), 'medecin_specialiste');
    await user.type(screen.getByLabelText('Spécialité'), 'Pédiatrie');
    await user.click(screen.getByRole('button', { name: 'Créer mon compte' }));
    expect(register).toHaveBeenCalledWith(
      expect.objectContaining({ profil: 'medecin_specialiste', specialite_exercee: 'Pédiatrie' }),
    );
  });

  it('mot de passe oublié : lien depuis la connexion et message neutre', async () => {
    const user = userEvent.setup();
    const motDePasseOublie = vi.fn(async () => ({
      ok: true,
      message: 'Si un compte existe pour cette adresse…',
    }));
    renderApp('/connexion', { motDePasseOublie });
    await user.click(await screen.findByRole('link', { name: 'Mot de passe oublié ?' }));
    await user.type(await screen.findByLabelText('Adresse e-mail'), 'a@b.cd');
    await user.click(screen.getByRole('button', { name: 'Demander un lien' }));
    expect(motDePasseOublie).toHaveBeenCalledWith('a@b.cd');
    expect(await screen.findByRole('status')).toHaveTextContent('Si un compte existe');
  });

  it('réinitialisation : vérifie la confirmation puis envoie le jeton du lien', async () => {
    const user = userEvent.setup();
    const reinitialiserMotDePasse = vi.fn(async () => ({ ok: true }));
    renderApp('/reinitialiser-mot-de-passe?jeton=abc123', { reinitialiserMotDePasse });
    await user.type(await screen.findByLabelText('Nouveau mot de passe'), 'Artesunate-2026');
    await user.type(screen.getByLabelText('Confirmer le mot de passe'), 'Autre-2026x');
    await user.click(screen.getByRole('button', { name: 'Enregistrer le mot de passe' }));
    expect(await screen.findByText('Les deux saisies diffèrent')).toBeInTheDocument();
    expect(reinitialiserMotDePasse).not.toHaveBeenCalled();
    await user.clear(screen.getByLabelText('Confirmer le mot de passe'));
    await user.type(screen.getByLabelText('Confirmer le mot de passe'), 'Artesunate-2026');
    await user.click(screen.getByRole('button', { name: 'Enregistrer le mot de passe' }));
    expect(reinitialiserMotDePasse).toHaveBeenCalledWith('abc123', 'Artesunate-2026');
    expect(await screen.findByRole('status')).toHaveTextContent('Mot de passe modifié');
  });

  it('« Mon compte » : demande de vérification avec l’ordre déduit du profil', async () => {
    const user = userEvent.setup();
    const medecin = {
      id: 7,
      nom: 'Dr Test',
      email: 'dr@test.cd',
      role: 'user',
      profil: 'medecin_generaliste',
      verification: 'non_demandee',
    };
    const demanderVerification = vi.fn(async (payload) => ({
      ...medecin,
      ...payload,
      verification: 'en_attente',
    }));
    renderApp('/compte', { demanderVerification }, medecin);
    expect(await screen.findByLabelText('Ordre professionnel')).toHaveValue('Ordre des médecins');
    await user.type(screen.getByLabelText('Numéro d’inscription à l’ordre'), 'CNOM/12345');
    await user.click(screen.getByRole('button', { name: 'Demander la vérification' }));
    expect(demanderVerification).toHaveBeenCalledWith({
      ordre_professionnel: 'medecins',
      numero_ordre: 'CNOM/12345',
    });
    expect(await screen.findByText(/Demande en attente de vérification/)).toBeInTheDocument();
  });

  it('administration : l’onglet Comptes est réservé aux administrateurs et vérifie un compte', async () => {
    const user = userEvent.setup();
    const resume = {
      statuts: { brouillon: 0, a_valider: 0, valide: 0 },
      pathologies: [],
      molecules: [],
      medicaments: [],
      modifications: [],
    };
    const adminComptes = vi.fn(async () => ({
      comptes: [
        {
          id: 3,
          nom: 'Dr B',
          email: 'b@c.cd',
          profil: 'pharmacien',
          ordre_professionnel: 'pharmaciens',
          numero_ordre: 'P-77',
          verification: 'en_attente',
          created_at: '2026-10-10 10:00:00',
        },
      ],
      demandes_reinitialisation: [],
    }));
    const adminDecisionVerification = vi.fn(async () => ({ ok: true }));
    renderApp(
      '/admin',
      { adminResume: vi.fn(async () => resume), adminComptes, adminDecisionVerification },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'admin' },
    );
    await user.click(await screen.findByRole('button', { name: 'Comptes' }));
    expect(await screen.findByText('n° P-77')).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Vérifier' }));
    expect(adminDecisionVerification).toHaveBeenCalledWith(3, 'verifie', '');
  });

  it('administration : pas d’onglet Comptes pour un relecteur « medecin »', async () => {
    const resume = {
      statuts: { brouillon: 0, a_valider: 0, valide: 0 },
      pathologies: [],
      molecules: [],
      medicaments: [],
      modifications: [],
    };
    renderApp(
      '/admin',
      { adminResume: vi.fn(async () => resume) },
      { id: 2, nom: 'Dr R', email: 'r@x.cd', role: 'medecin' },
    );
    expect(await screen.findByRole('button', { name: 'Historique' })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Comptes' })).toBeNull();
  });
});

describe('Posologies structurées et présentations (lot B)', () => {
  const molecule = {
    id: 12,
    dci: 'Paracétamol',
    slug: 'paracetamol',
    fiche_source: null,
    fiche_a_valider: false,
    historique: [],
    posologies: [
      {
        population: 'enfant',
        indication: 'Fièvre',
        voie: 'orale',
        dose_texte: '15 mg/kg toutes les 6 h',
        dose_par_kg: 15,
        dose_max: 1000,
        dose_base: 'par_prise',
        unite: 'mg',
        frequence: 'Toutes les 6 h',
        frequence_type: 'intervalle',
        prises_par_jour: 4,
        intervalle_heures: 6,
        duree: '3 jours',
        durees: [{ min: 3, max: null, unite: 'jours', contexte: null, defaut: true }],
        securite: null,
        remarque: null,
        structure_a_valider: true,
      },
    ],
    presentations: [
      {
        forme: 'suspension_buvable',
        voie: 'orale',
        quantite: 120,
        unite: 'mg',
        par_quantite: 5,
        par_unite: 'ml',
        secable: false,
        conditionnement_quantite: null,
        conditionnement_unite: null,
        libelle: 'Solution ou suspension buvable 120 mg/5 mL',
        source: 'Catalogue des firmes : déclarée par 5 produits',
        a_valider: true,
      },
    ],
  };

  it('affiche la structure « à valider » et envoie la validation avec les présentations', async () => {
    const user = userEvent.setup();
    const adminSaveMolecule = vi.fn(async () => ({ ok: true, inchange: false }));
    renderApp(
      '/admin/molecules/12',
      {
        adminMolecule: vi.fn(async () => molecule),
        adminSaveMolecule,
        adminProduitsMolecule: vi.fn(async () => ({ lies: [], suggestions: [] })),
      },
      { id: 1, nom: 'Admin', email: 'a@x.cd', role: 'admin' },
    );
    expect(await screen.findByText('Calcul automatique (fiche de prescription)')).toBeInTheDocument();
    expect(screen.getByLabelText('Intervalle entre les prises')).toHaveValue('6');
    expect(screen.getByText('Source : Catalogue des firmes : déclarée par 5 produits')).toBeInTheDocument();
    await user.click(screen.getByLabelText(/Structure relue et validée par un médecin/));
    await user.click(screen.getByLabelText(/Présentation vérifiée/));
    await user.click(screen.getByRole('button', { name: /Enregistrer/ }));
    const payload = adminSaveMolecule.mock.calls[0][1];
    expect(payload.posologies[0]).toMatchObject({ structure_a_valider: false, frequence_type: 'intervalle' });
    expect(payload.presentations[0]).toMatchObject({ quantite: 120, par_quantite: 5, a_valider: false });
  });
});

describe('Ordonnance guidée (lot C)', () => {
  const artesunate = {
    id: 3,
    dci: 'Artésunate',
    slug: 'artesunate',
    classe: 'Antipaludiques',
    interactions: null,
    posologies: [
      {
        population: 'enfant',
        indication: 'Paludisme grave',
        voie: 'IV ou IM',
        dose_texte: '3 mg/kg à H0, H12, H24',
        dose_par_kg: 3,
        dose_par_m2: null,
        dose_max: null,
        dose_base: 'par_prise',
        unite: 'mg',
        frequence: 'H0, H12, H24 puis toutes les 24 h',
        frequence_type: 'schema',
        durees: [
          { min: 24, max: null, unite: 'heures', contexte: 'Au moins, puis relais oral', defaut: true },
        ],
        securite: 'autorise',
        structure_a_valider: true,
      },
    ],
    presentations: [
      {
        forme: 'injectable',
        voie: 'injectable',
        quantite: 60,
        unite: 'mg',
        par_quantite: 1,
        par_unite: 'flacon',
        libelle: 'Flacon 60 mg',
      },
    ],
  };

  it('calcule la dose au poids depuis la fiche et propose les bilans du diagnostic', async () => {
    const user = userEvent.setup();
    try {
      globalThis.localStorage?.removeItem('medref.ordonnance.brouillon');
    } catch {
      /* rien */
    }
    renderApp('/prescriptions?pathologie=paludisme-grave', {
      pathologies: vi.fn(async () => [
        { nom: 'Paludisme grave', slug: 'paludisme-grave', statut: 'a_valider' },
      ]),
      molecules: vi.fn(async () => [{ dci: 'Artésunate', slug: 'artesunate', classe: 'Antipaludiques' }]),
      molecule: vi.fn(async () => artesunate),
    });
    expect(await screen.findByRole('link', { name: 'Paludisme grave' })).toBeInTheDocument();
    expect(screen.getByText(/Contenu non encore validé par un médecin/)).toBeInTheDocument();
    expect(screen.getByLabelText('TDR paludisme')).toBeInTheDocument();
    await user.type(screen.getByLabelText('Âge'), '4');
    await user.type(screen.getByLabelText(/^Poids/), '15');
    await user.click(screen.getByRole('button', { name: 'Ajouter Artésunate' }));
    expect(await screen.findByText(/3 mg\/kg × 15 kg = 45 mg par prise/)).toBeInTheDocument();
    expect(screen.getByText(/0,75 flacon/)).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: 'Durée' })).toHaveDisplayValue(
      /24 h \(Au moins, puis relais oral\)/,
    );
  });

  it('reprend le plan préparé dans l’aide au diagnostic : patient et molécules cochées', async () => {
    try {
      globalThis.localStorage?.removeItem('medref.ordonnance.brouillon');
    } catch {
      /* rien */
    }
    sessionStorage.setItem(
      'medref.ordonnance.depuisDiagnostic',
      JSON.stringify({
        diagnostic: 'Paludisme grave',
        molecules: [{ slug: 'artesunate', dci: 'Artésunate', ligne: 'premiere' }],
        patient: { age: { valeur: '4', unite: 'ans' }, poids: '15', insuffisance_renale: false },
      }),
    );
    renderApp('/prescriptions?pathologie=paludisme-grave', {
      pathologies: vi.fn(async () => [
        { nom: 'Paludisme grave', slug: 'paludisme-grave', statut: 'a_valider' },
      ]),
      molecules: vi.fn(async () => [{ dci: 'Artésunate', slug: 'artesunate', classe: 'Antipaludiques' }]),
      molecule: vi.fn(async () => artesunate),
    });
    expect(await screen.findByText(/3 mg\/kg × 15 kg = 45 mg par prise/)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Poids/)).toHaveValue('15');
    expect(sessionStorage.getItem('medref.ordonnance.depuisDiagnostic')).toBeNull();
  });
});

describe('Accueil personnalisé (lot D)', () => {
  it('Mon espace masque les blocs personnels et les nouveautés, mais garde les repères et les alertes', async () => {
    renderApp(
      '/espace',
      {
        accueil: vi.fn(async () => ({
          alertes: [
            {
              id: 1,
              type: 'alerte_sanitaire',
              titre: 'Épidémie de choléra',
              resume: 'Cas confirmés.',
              zone: 'Kinshasa',
              source_titre: 'Ministère de la Santé',
              source_url: 'https://example.org/communique',
              publie_le: '2026-10-14',
            },
          ],
          actualites: [],
          produits: [{ id: 9, nom_commercial: 'Aerius', dci: 'Desloratadine', operateur: 'Organon' }],
          fiches_validees: [],
          fiches_mises_a_jour: [
            { nom: 'Rougeole', slug: 'rougeole', statut: 'a_valider', updated_at: '2026-10-13' },
          ],
          totaux: { fiches: 792, produits: 1799, amm: 6352, molecules: 702 },
        })),
      },
      { id: 7, nom: 'Admin', role: 'admin', email: 'a@b.cd' },
    );
    const reperes = await screen.findByRole('region', { name: 'Dans votre bibliothèque' });
    expect(within(reperes).getByText('792')).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Pour vous' })).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Nouveautés' })).toBeNull();
    expect(screen.queryByRole('heading', { name: 'Produits ajoutés au catalogue' })).toBeNull();
    expect(screen.queryByText('Aerius')).toBeNull();
    expect(screen.queryByText('Rougeole')).toBeNull();
    // Aucune alerte dans l'espace : seulement la pastille qui renvoie vers l'accueil
    expect(screen.queryByRole('heading', { name: 'Alertes sanitaires' })).toBeNull();
    expect(screen.queryByText('Épidémie de choléra')).toBeNull();
    expect(screen.queryByRole('region', { name: /Fil d’actualités/ })).toBeNull();
    expect(await screen.findByRole('link', { name: /1 alerte en cours/ })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: /retour à l’accueil/ })).toHaveAttribute('href', '/');
  });
});

describe('Accueil et Mon espace', () => {
  it('connecté, l’accueil reste accessible avec « Mon espace » et « Se déconnecter »', async () => {
    renderApp('/', {}, MEDECIN);
    expect(await screen.findByRole('heading', { name: 'Actualités' })).toBeInTheDocument();
    const entete = screen.getByRole('navigation', { name: 'Navigation principale' });
    expect(within(entete).getByRole('link', { name: 'Mon espace' })).toHaveAttribute('href', '/espace');
    expect(within(entete).getByRole('button', { name: 'Se déconnecter' })).toBeInTheDocument();
    expect(within(entete).queryByRole('link', { name: 'Créer un compte' })).toBeNull();
    expect(screen.getAllByRole('link', { name: 'Ouvrir mon espace' })[0]).toHaveAttribute('href', '/espace');
  });

  it('sans compte, Mon espace mène à la connexion', async () => {
    renderApp('/espace');
    expect(await screen.findByRole('heading', { name: 'Connexion' })).toBeInTheDocument();
  });
});

describe('Avis sur les produits et les traitements (lot E)', () => {
  const verifie = {
    id: 7,
    nom: 'Dr K',
    role: 'user',
    email: 'k@medref.cd',
    profil: 'medecin_generaliste',
    verification: 'verifie',
  };

  it('formulaire : rappel de pharmacovigilance pour un produit suspect et envoi structuré', async () => {
    const user = userEvent.setup();
    const creerAvis = vi.fn(async () => ({ id: 42 }));
    renderApp(
      '/avis/nouveau?cible_type=produit&cible=9&nom=Aerius',
      {
        creerAvis,
        pharmacovigilance: vi.fn(async () => ({ contact: null })),
        avis: vi.fn(async () => ({
          id: 42,
          titre: 'Comprimés friables',
          type: 'qualite',
          statut: 'soumis',
          cible: { type: 'produit', id: 9, nom: 'Aerius' },
          sources: [],
          photos: [],
          commentaires: [],
          votes: 0,
          droits: {},
          liens_interets: 'Aucun',
          description: 'x',
          nb_patients: null,
        })),
      },
      verifie,
    );
    expect(await screen.findByRole('heading', { name: 'Donner un avis argumenté' })).toBeInTheDocument();
    await user.selectOptions(screen.getByLabelText('Type d’avis *'), 'qualite');
    expect(
      await screen.findByText(/ne remplace pas la notification de pharmacovigilance/),
    ).toBeInTheDocument();
    expect(screen.getByText(/coordonnées officielles n’ont pas encore été renseignées/)).toBeInTheDocument();
    await user.type(screen.getByLabelText('Titre *'), 'Comprimés friables');
    await user.type(screen.getByLabelText('Description factuelle *'), 'Lot de 30 boîtes.');
    await user.type(screen.getByLabelText('Numéro de lot'), 'AB123');
    await user.type(screen.getByLabelText('Déclaration de liens d’intérêts *'), 'Aucun');
    await user.click(screen.getByRole('checkbox', { name: /Je certifie/ }));
    await user.click(screen.getByRole('button', { name: 'Soumettre pour examen' }));
    await waitFor(() => expect(creerAvis).toHaveBeenCalled());
    expect(creerAvis.mock.calls[0][0]).toMatchObject({
      cible_type: 'produit',
      cible: '9',
      type: 'qualite',
      numero_lot: 'AB123',
      engagement: true,
      liens_interets: 'Aucun',
    });
  });

  it('un compte non vérifié ne peut pas donner d’avis', async () => {
    renderApp(
      '/avis/nouveau?cible_type=produit&cible=9&nom=Aerius',
      {},
      { ...verifie, verification: 'en_attente' },
    );
    expect(await screen.findByText(/réservés aux médecins, pharmaciens/)).toBeInTheDocument();
  });

  it('examen par un pair : vote « pertinent et sourcé » et commentaire, sans modifier l’avis', async () => {
    const user = userEvent.setup();
    const voterAvis = vi.fn(async () => ({ a_vote: true, votes: 1 }));
    renderApp(
      '/avis/42',
      {
        voterAvis,
        avis: vi.fn(async () => ({
          id: 42,
          titre: 'Données de tolérance',
          type: 'tolerance',
          grave: false,
          statut: 'soumis',
          cible: { type: 'molecule', slug: 'artesunate', nom: 'Artésunate' },
          description: 'Observation.',
          nb_patients: 12,
          sources: [{ type: 'etude', titre: 'Étude X', url: 'https://example.org' }],
          photos: [],
          commentaires: [],
          votes: 0,
          a_vote: false,
          liens_interets: 'Aucun',
          droits: { examiner: true, signaler: true, modifier: false, retirer: false, moderer: false },
        })),
      },
      verifie,
    );
    expect(await screen.findByRole('heading', { name: 'Données de tolérance' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Étude X' })).toHaveAttribute('href', 'https://example.org');
    expect(screen.queryByRole('link', { name: 'Compléter mon avis' })).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Élément pertinent et sourcé' }));
    expect(voterAvis).toHaveBeenCalledWith(42);
    expect(screen.getByLabelText(/Votre commentaire/)).toBeInTheDocument();
  });
});

describe('Aide au diagnostic', () => {
  const donneesDiag = {
    symptomes: [
      { id: 1, nom: 'Fièvre', slug: 'fievre' },
      { id: 2, nom: 'Convulsions', slug: 'convulsions' },
      { id: 3, nom: 'Toux', slug: 'toux' },
      { id: 4, nom: 'Raideur de nuque', slug: 'raideur-de-nuque' },
    ],
    examens: [{ id: 10, slug: 'tdr-paludisme', nom: 'TDR paludisme' }],
    pathologies: [
      {
        id: 1,
        slug: 'paludisme-grave',
        nom: 'Paludisme grave',
        specialite: 'Infectiologie',
        validee: true,
        urgence: true,
        public: { ages: null, sexe: null, obstetrique: false },
        tests: { 10: 'c' },
      },
      {
        id: 2,
        slug: 'meningite',
        nom: 'Méningite bactérienne',
        specialite: 'Neuro-infectiologie',
        validee: false,
        urgence: true,
        public: { ages: null, sexe: null, obstetrique: false },
        tests: {},
      },
    ],
    liens: [
      [1, 1, 3],
      [1, 2, 2],
      [2, 1, 3],
      [2, 2, 1],
      [2, 4, 2],
    ],
    syndromes: [],
    molecules: [
      { id: 3, dci: 'Artésunate', slug: 'artesunate', classe_id: 1, classe: 'Antipaludiques', lnme: true },
      { id: 9, dci: 'Amoxicilline', slug: 'amoxicilline', classe_id: 2, classe: 'Pénicillines' },
    ],
    appareils: [
      { id: 'general', nom: 'Signes généraux', symptomes: [1] },
      { id: 'neuro', nom: 'Neurologique', symptomes: [2, 4] },
      { id: 'cardio-respiratoire', nom: 'Cœur et poumons', symptomes: [3] },
    ],
    physiques: [4],
    terrains: [{ id: 'vih', groupe: 'Médicaux', libelle: 'Infection à VIH', motif: 'meningite' }],
    contextes: [],
  };

  beforeEach(() => {
    sessionStorage.clear();
    localStorage.removeItem('medref.diagnostic.niveau');
    localStorage.removeItem('medref.diagnostic.lieu');
  });

  it('la saisie survit au départ de la page (touche retour, passage par une fiche)', async () => {
    const user = userEvent.setup();
    const api = { diagnosticDonnees: vi.fn(async () => donneesDiag) };
    renderApp('/diagnostic', api, MEDECIN);
    await user.click(await screen.findByRole('button', { name: 'Adulte' }));
    await user.type(screen.getByLabelText('Plainte principale'), 'conv{Enter}');
    // On quitte l'outil puis on y revient : le cas est toujours là
    cleanup();
    renderApp('/diagnostic', api, MEDECIN);
    expect(await screen.findByRole('button', { name: 'Adulte' })).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Convulsions', { selector: 'b' })).toBeInTheDocument();
    // L'étape est dans l'adresse : ouvrir directement l'examen clinique
    cleanup();
    renderApp('/diagnostic?etape=examen', api, MEDECIN);
    expect(await screen.findByRole('button', { name: '3 · Examen clinique' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    // « Nouveau cas » efface la saisie
    await user.click(screen.getByRole('button', { name: 'Nouveau cas' }));
    expect(sessionStorage.getItem('medref.diagnostic.cas')).toBeNull();
  });

  it('mode urgence : triage ABCDE avec conduite immédiate, puis retour à la démarche', async () => {
    const user = userEvent.setup();
    const api = { diagnosticDonnees: vi.fn(async () => donneesDiag) };
    renderApp('/diagnostic', api, MEDECIN);
    await user.click(await screen.findByRole('button', { name: 'Patient en détresse ? Triage ABCDE' }));
    const triage = screen.getByRole('region', { name: "Triage d'urgence ABCDE" });
    await user.click(within(triage).getByRole('checkbox', { name: /Convulsions en cours/ }));
    expect(within(triage).getByText(/diazépam intrarectal/)).toBeInTheDocument();
    expect(within(triage).getByRole('status')).toHaveTextContent('URGENCE');
    // La synthèse affiche la conduite ; le signe coché compte à l'examen
    expect(screen.getByRole('alert')).toHaveTextContent('Triage : urgence');
    expect(screen.getByRole('alert')).toHaveTextContent('Convulsions');
    await user.click(within(triage).getByRole('button', { name: 'Triage fait : continuer la démarche' }));
    expect(screen.queryByRole('region', { name: "Triage d'urgence ABCDE" })).not.toBeInTheDocument();
  });

  it('scores guidés : Glasgow item par item, total et interprétation', async () => {
    const user = userEvent.setup();
    const api = { diagnosticDonnees: vi.fn(async () => donneesDiag) };
    renderApp('/diagnostic', api, MEDECIN);
    await user.click(await screen.findByRole('button', { name: 'Adulte' }));
    await user.click(screen.getByRole('button', { name: '3 · Examen clinique' }));
    await user.click(screen.getByRole('button', { name: 'Glasgow' }));
    const form = screen.getByRole('group', { name: 'Glasgow' });
    expect(within(form).getByRole('status')).toHaveTextContent('Répondez à chaque item');
    await user.click(within(form).getByRole('button', { name: 'À la douleur' }));
    await user.click(within(form).getByRole('button', { name: 'Sons incompréhensibles' }));
    await user.click(within(form).getByRole('button', { name: 'Évitement' }));
    expect(within(form).getByRole('status')).toHaveTextContent('Total 8 : coma');
    expect(screen.getByRole('button', { name: 'Glasgow : 8' })).toBeInTheDocument();
  });

  it('diagnostic retenu enregistré sans donnée du patient, signalement en un clic', async () => {
    const user = userEvent.setup();
    const diagnosticRetenu = vi.fn(async () => ({ enregistre: true }));
    const diagnosticSignalement = vi.fn(async () => ({ enregistre: true }));
    const api = {
      diagnosticDonnees: vi.fn(async () => donneesDiag),
      diagnosticRetenu,
      diagnosticSignalement,
    };
    renderApp('/diagnostic', api, MEDECIN);
    await user.click(await screen.findByRole('button', { name: 'Adulte' }));
    await user.type(screen.getByLabelText('Plainte principale'), 'conv{Enter}');
    const bloc = (await screen.findByRole('heading', { name: 'Diagnostic retenu' })).closest('div');
    await user.selectOptions(within(bloc).getByRole('combobox', { name: 'Diagnostic retenu' }), 'meningite');
    await user.click(within(bloc).getByRole('button', { name: 'Enregistrer' }));
    expect(diagnosticRetenu).toHaveBeenCalledWith(
      expect.objectContaining({
        pathologie: 'meningite',
        tranche: 'adulte',
        nbHypotheses: expect.any(Number),
      }),
    );
    expect(Object.keys(diagnosticRetenu.mock.calls[0][0])).not.toContain('signes');
    expect(await within(bloc).findByText(/diagnostic retenu enregistré/)).toBeInTheDocument();
    await user.click(within(bloc).getByRole('button', { name: 'Signaler une erreur' }));
    await user.type(within(bloc).getByLabelText(/Décrivez le problème/), 'La fiche manque un signe');
    await user.click(within(bloc).getByRole('button', { name: 'Envoyer le signalement' }));
    expect(diagnosticSignalement).toHaveBeenCalledWith({
      type: 'hypothese_manquante',
      pathologie: 'meningite',
      message: 'La fiche manque un signe',
    });
  });

  it('parcours PCIME : classification par couleur et réponses reportées dans l’examen', async () => {
    const user = userEvent.setup();
    const api = { diagnosticDonnees: vi.fn(async () => donneesDiag) };
    renderApp('/diagnostic', api, MEDECIN);
    await screen.findByRole('button', { name: 'Adulte' });
    await user.type(screen.getByLabelText('Âge'), '2');
    await user.click(screen.getByRole('button', { name: 'PCIME : enfant de 2 mois à 5 ans' }));
    const parcours = screen.getByRole('region', { name: 'PCIME : enfant de 2 mois à 5 ans' });
    await user.click(within(parcours).getByRole('button', { name: 'Toux ou difficulté à respirer : Oui' }));
    await user.click(within(parcours).getByRole('button', { name: /Respiration rapide.* : Oui/ }));
    expect(within(parcours).getByRole('list', { name: 'Classification' })).toHaveTextContent('Pneumonie');
    expect(within(parcours).getByRole('list', { name: 'Classification' })).toHaveTextContent(
      'Amoxicilline orale 5 jours',
    );
    await user.click(within(parcours).getByRole('button', { name: 'Reporter les réponses dans l’examen' }));
    const cas = JSON.parse(sessionStorage.getItem('medref.diagnostic.cas'));
    expect(cas.signes['3']).toBe('present');
  });

  it('mode apprentissage : proposer un diagnostic puis voir la correction et le raisonnement', async () => {
    const user = userEvent.setup();
    const exercices = [
      { id: 1, age: 'adulte', motif: 'Convulsions', presents: ['Fièvre'], attendu: ['paludisme-grave'] },
      { id: 2, age: 'adulte', motif: 'Toux', presents: ['Fièvre'], attendu: ['meningite'] },
    ];
    const api = {
      diagnosticDonnees: vi.fn(async () => donneesDiag),
      diagnosticApprentissage: vi.fn(async () => exercices),
    };
    renderApp('/diagnostic/apprentissage', api, MEDECIN);
    expect(await screen.findByText(/Cas 1 sur 2/)).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Présentation du cas' })).toHaveTextContent(
      'Motif : Convulsions',
    );
    await user.type(screen.getByLabelText('Chercher une fiche'), 'palu');
    await user.click(screen.getByRole('button', { name: 'Paludisme grave' }));
    await user.click(screen.getByRole('button', { name: 'Corriger' }));
    const correction = screen.getByRole('region', { name: 'Correction' });
    expect(correction).toHaveTextContent('Bonne réponse');
    expect(correction).toHaveTextContent('Le raisonnement de l’outil');
    expect(screen.getByText(/score de la séance : 1\/1/)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: 'Cas suivant' }));
    expect(screen.getByText(/Cas 2 sur 2/)).toBeInTheDocument();
  });

  it('réservée aux comptes connectés', async () => {
    renderApp('/diagnostic');
    expect(await screen.findByText(/réservé aux professionnels de santé/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Connectez-vous' })).toHaveAttribute('href', '/connexion');
  });

  it('suit la démarche : motif, terrain, examen (présent, absent, constantes), hypothèses, traitement', async () => {
    const user = userEvent.setup();
    const molecule = vi.fn(async () => ({
      posologies: [
        {
          population: 'adulte',
          indication: 'Paludisme grave',
          dose_par_kg: 2.4,
          unite: 'mg',
          dose_texte: '2,4 mg/kg',
        },
      ],
      interactions: null,
      grossesse_allaitement: null,
    }));
    renderApp('/diagnostic', { diagnosticDonnees: vi.fn(async () => donneesDiag), molecule }, MEDECIN);
    // Lieu de soins (préférence gardée sur l'appareil)
    await user.click(await screen.findByRole('button', { name: 'Centre de santé' }));
    expect(localStorage.getItem('medref.diagnostic.niveau')).toBe('centre_sante');
    // 1. Motif et histoire
    await user.click(await screen.findByRole('button', { name: 'Adulte' }));
    await user.type(screen.getByLabelText('Poids (kg)'), '50');
    await user.type(screen.getByLabelText('Plainte principale'), 'conv{Enter}');
    expect(screen.getByText('Convulsions', { selector: 'b' })).toBeInTheDocument();
    // 2. Terrain : allergie déclarée à une autre molécule de la même classe que le traitement
    await user.click(screen.getByRole('button', { name: '2 · Terrain' }));
    await user.click(screen.getByRole('button', { name: 'Infection à VIH' }));
    // 3. Examen : constantes (fièvre déduite) et raideur de nuque absente
    await user.click(screen.getByRole('button', { name: '3 · Examen clinique' }));
    await user.type(screen.getByLabelText(/Température/), '39,4');
    expect(screen.getByRole('alert')).toHaveTextContent('Convulsions');
    await user.click(screen.getByText('Neurologique'));
    // (le même signe est aussi proposé dans « À explorer maintenant »)
    const neuro = screen.getByText('Neurologique').closest('details');
    await user.click(within(neuro).getByRole('button', { name: 'Raideur de nuque : absent' }));
    // Hypothèses : la méningite recule malgré le terrain ; le paludisme passe en tête
    const hypotheses = screen
      .getAllByRole('listitem')
      .filter((li) => li.classList.contains('diag-hypothese'));
    expect(hypotheses[0]).toHaveTextContent('Paludisme grave');
    const meningite = hypotheses.find((h) => h.textContent.includes('Méningite'));
    expect(meningite).toHaveTextContent('Contre : Raideur de nuque absent');
    expect(meningite).toHaveTextContent('Terrain et épidémiologie : Infection à VIH');
    // Observation imprimable
    const observation = screen.getByRole('region', { name: 'Observation' });
    expect(observation).toHaveTextContent('Convulsions');
    expect(observation).toHaveTextContent('Température 39,4 °C');
    expect(observation).toHaveTextContent('Raideur de nuque');
    // Traitement : dose au poids
    await user.click(within(hypotheses[0]).getByRole('button', { name: 'Traitement et produits' }));
    const traitement = await screen.findByRole('region', { name: /Paludisme grave : traitement/ });
    expect(await within(traitement).findByText('120 mg par prise')).toBeInTheDocument();
    expect(within(traitement).getByText('À votre niveau : Centre de santé')).toBeInTheDocument();
    // Plan de traitement : 1re ligne cochée, LNME signalée ; le plan part vers l'ordonnance sans passer par l'adresse
    expect(within(traitement).getByText('LNME')).toBeInTheDocument();
    expect(within(traitement).getByRole('checkbox', { name: 'Prescrire Artésunate' })).toBeChecked();
    // L'ordonnance reprend le plan aussitôt (et l'efface) : on lit ce qui a été écrit
    const ecrit = vi.spyOn(Storage.prototype, 'setItem');
    await user.click(within(traitement).getByRole('button', { name: 'Préparer l’ordonnance (1 molécule)' }));
    const appel = ecrit.mock.calls.find(([cle]) => cle === 'medref.ordonnance.depuisDiagnostic');
    ecrit.mockRestore();
    const plan = JSON.parse(appel[1]);
    expect(plan.diagnostic).toBe('Paludisme grave');
    expect(plan.molecules.map((m) => m.slug)).toEqual(['artesunate']);
    expect(plan.patient.poids).toBe('50');
  });
});
