import { StrictMode } from 'react';
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

function renderApp(path, apiOverrides = {}, user = null) {
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
    repo: { list: vi.fn(async () => []) },
    onSessionExpired: () => () => {},
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

describe('Accueil', () => {
  it('affiche l’identité, la recherche, les 7 accès rapides et les départements', async () => {
    renderApp('/');
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('MedRef RDC');
    expect(screen.getByText('par le Dr Ben Mingalu')).toBeInTheDocument();
    expect(screen.getAllByRole('search').length).toBeGreaterThan(0);
    const acces = screen.getByRole('region', { name: 'Accès rapides' });
    expect(within(acces).getAllByRole('link')).toHaveLength(7);
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
