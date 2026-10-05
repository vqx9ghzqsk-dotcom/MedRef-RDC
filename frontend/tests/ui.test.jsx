import { describe, expect, it, vi } from 'vitest';
import { render, screen, within } from '@testing-library/react';
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
    definition: { definition: 'Accès palustre **grave**.', physiopathologie: '- Séquestration' },
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
    },
    etiologies: 'P. falciparum',
    therapeutique: {
      principes: [
        {
          id: 1,
          ordre: 1,
          titre: 'Traitement parentéral',
          objectif: 'Réduire la parasitémie',
          details: '- Artésunate IV',
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
  departement: { id: 1, nom: 'Médecine interne', slug: 'medecine-interne' },
  specialite: { id: 2, nom: 'Infectiologie', slug: 'mi-infectiologie' },
  urgences: [{ id: 1, nom: 'Paludisme grave', slug: 'paludisme-grave-urgence', categorie: 'medicale' }],
  symptomes: [{ id: 1, nom: 'Fièvre', slug: 'fievre', frequence: 'tres_frequent' }],
  molecules: [{ id: 3, dci: 'Artésunate', slug: 'artesunate', ligne: 'premiere' }],
  scores: [{ id: 4, nom: 'Score de Glasgow', slug: 'glasgow', code: 'glasgow' }],
  sources: [{ id: 5, titre: 'WHO guidelines for malaria', niveau: 1, url: null }],
};

function renderApp(path, apiOverrides = {}) {
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
    me: vi.fn(),
    ...apiOverrides,
  };
  const services = {
    api,
    tokenStore: {
      getToken: () => null,
      getUser: () => null,
      save: vi.fn(),
      setUser: vi.fn(),
      clear: vi.fn(),
    },
    repo: { list: vi.fn(async () => []) },
    onSessionExpired: () => () => {},
  };
  render(
    <ServicesProvider services={services}>
      <AuthProvider>
        <MemoryRouter initialEntries={[path]}>
          <AppRoutes />
        </MemoryRouter>
      </AuthProvider>
    </ServicesProvider>,
  );
  return api;
}

describe('Accueil', () => {
  it('affiche l’identité, la recherche, les 6 accès rapides et les départements', async () => {
    renderApp('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MedRef RDC');
    expect(screen.getByText('par le Dr Ben Mingalu')).toBeInTheDocument();
    expect(screen.getAllByRole('search').length).toBeGreaterThan(0);
    const acces = screen.getByRole('region', { name: 'Accès rapides' });
    expect(within(acces).getAllByRole('link')).toHaveLength(6);
    expect(await screen.findByRole('link', { name: /Pédiatrie/ })).toHaveAttribute(
      'href',
      '/departements/pediatrie',
    );
    expect(screen.getByRole('link', { name: 'bmingalu@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:bmingalu@gmail.com',
    );
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
      'Évolution',
    ]);
    expect(tabs[0]).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText('grave').tagName).toBe('STRONG');

    const urgences = screen.getByRole('complementary', { name: 'Urgences associées' });
    expect(within(urgences).getByRole('link')).toHaveAttribute('href', '/urgences/paludisme-grave-urgence');
    expect(screen.getByRole('link', { name: /Fièvre/ })).toHaveAttribute('href', '/symptomes/fievre');
    expect(screen.getByRole('link', { name: /Artésunate/ })).toHaveAttribute('href', '/molecules/artesunate');
    expect(screen.getByRole('link', { name: 'Score de Glasgow' })).toHaveAttribute('href', '/scores/glasgow');
    expect(screen.getByText('WHO guidelines for malaria')).toBeInTheDocument();
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

  it('thérapeutique : principes, molécules avec produits par opérateur, complications', async () => {
    renderApp('/pathologies/paludisme-grave?onglet=therapeutique');
    expect(await screen.findByRole('heading', { name: 'Principes de prise en charge' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Traitement parentéral' })).toHaveAttribute(
      'href',
      '#principe-1',
    );
    expect(screen.getByText('Produits par opérateur (1 seul, 1 en association)')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'ASAQ Winthrop' })).toHaveAttribute('href', '/medicaments/12');
    expect(screen.getByText('Association : Artésunate + Amodiaquine')).toBeInTheDocument();
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
