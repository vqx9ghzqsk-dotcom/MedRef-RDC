import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loading } from './ui/components/Status.jsx';
import { Layout } from './ui/components/Layout.jsx';
import { HomePage } from './ui/pages/HomePage.jsx';
import {
  LoginPage,
  MotDePasseOubliePage,
  RegisterPage,
  ReinitialiserMotDePassePage,
} from './ui/pages/AuthPages.jsx';
import {
  DepartementPage,
  OrganisationGroupePage,
  OrganisationSectionPage,
  SpecialitePage,
} from './ui/pages/CataloguePages.jsx';
import { PathologiePage } from './ui/pages/PathologiePage.jsx';
import { UrgencePage, UrgencesPage } from './ui/pages/UrgencesPages.jsx';
import { SymptomePage, SymptomesPage } from './ui/pages/SymptomesPages.jsx';
import { ScorePage, ScoresPage } from './ui/pages/ScoresPages.jsx';
import { MedicamentPage, MedicamentsPage } from './ui/pages/MedicamentsPages.jsx';
import { MoleculePage, MoleculesPage } from './ui/pages/MoleculesPages.jsx';
import { ExamenPage, ExamensPage } from './ui/pages/ExamensPages.jsx';
import { SourcesPage } from './ui/pages/SourcesPage.jsx';
import { RecherchePage } from './ui/pages/RecherchePage.jsx';
import { AvisFormPage, AvisPage, MesAvisPage } from './ui/pages/AvisPages.jsx';
import { NotFoundPage } from './ui/pages/NotFoundPage.jsx';
import { HorsLignePage } from './ui/pages/HorsLignePage.jsx';
import { ActualitesPage } from './ui/pages/ActualitesPage.jsx';
import { ComptePage } from './ui/pages/ComptePage.jsx';
import { GlossairePage, SyndromePage, SyndromesPage } from './ui/pages/SemiologiePages.jsx';

// Pages lourdes chargées à la demande : premier affichage plus rapide sur les téléphones modestes
const aLaDemande = (charger, nom) => {
  const Page = lazy(() => charger().then((m) => ({ default: m[nom] })));
  return function PageALaDemande() {
    return (
      <Suspense fallback={<Loading />}>
        <Page />
      </Suspense>
    );
  };
};
const admin = () => import('./ui/pages/AdminPages.jsx');
const prescriptions = () => import('./ui/pages/PrescriptionsPage.jsx');
const DiagnosticPage = aLaDemande(() => import('./ui/pages/DiagnosticPage.jsx'), 'DiagnosticPage');
const ApprentissagePage = aLaDemande(() => import('./ui/pages/ApprentissagePage.jsx'), 'ApprentissagePage');
const PrescriptionsPage = aLaDemande(prescriptions, 'PrescriptionsPage');
const OrdonnancePage = aLaDemande(prescriptions, 'OrdonnancePage');
const AdminHomePage = aLaDemande(admin, 'AdminHomePage');
const AdminPathologiePage = aLaDemande(admin, 'AdminPathologiePage');
const AdminMoleculePage = aLaDemande(admin, 'AdminMoleculePage');
const AdminMedicamentPage = aLaDemande(admin, 'AdminMedicamentPage');
const AdminTermePage = aLaDemande(admin, 'AdminTermePage');
const AdminSyndromePage = aLaDemande(admin, 'AdminSyndromePage');

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* « / » : page d'accueil pour tous (rendue par Layout) ; l'espace de travail est sur /espace */}
        <Route index element={null} />
        <Route path="espace" element={<HomePage />} />
        <Route path="connexion" element={<LoginPage />} />
        <Route path="inscription" element={<RegisterPage />} />
        <Route path="mot-de-passe-oublie" element={<MotDePasseOubliePage />} />
        <Route path="reinitialiser-mot-de-passe" element={<ReinitialiserMotDePassePage />} />
        <Route path="departements/:slug" element={<DepartementPage />} />
        <Route
          path="organisation/:departementSlug/:sectionSlug/:groupSlug"
          element={<OrganisationGroupePage />}
        />
        <Route path="organisation/:departementSlug/:sectionSlug" element={<OrganisationSectionPage />} />
        <Route path="specialites/:slug" element={<SpecialitePage />} />
        <Route path="pathologies/:slug" element={<PathologiePage />} />
        <Route path="urgences" element={<UrgencesPage />} />
        <Route path="urgences/:slug" element={<UrgencePage />} />
        <Route path="diagnostic" element={<DiagnosticPage />} />
        <Route path="diagnostic/apprentissage" element={<ApprentissagePage />} />
        <Route path="symptomes" element={<SymptomesPage />} />
        <Route path="symptomes/:slug" element={<SymptomePage />} />
        <Route path="scores" element={<ScoresPage />} />
        <Route path="scores/:slug" element={<ScorePage />} />
        <Route path="medicaments" element={<MedicamentsPage />} />
        <Route path="medicaments/:id" element={<MedicamentPage />} />
        <Route path="molecules" element={<MoleculesPage />} />
        <Route path="molecules/:slug" element={<MoleculePage />} />
        <Route path="examens" element={<ExamensPage />} />
        <Route path="examens/:slug" element={<ExamenPage />} />
        <Route path="sources" element={<SourcesPage />} />
        <Route path="glossaire" element={<GlossairePage />} />
        <Route path="syndromes" element={<SyndromesPage />} />
        <Route path="syndromes/:slug" element={<SyndromePage />} />
        <Route path="recherche" element={<RecherchePage />} />
        <Route path="prescriptions" element={<PrescriptionsPage />} />
        <Route path="prescriptions/:id" element={<OrdonnancePage />} />
        <Route path="avis" element={<MesAvisPage />} />
        <Route path="avis/nouveau" element={<AvisFormPage />} />
        <Route path="avis/:id" element={<AvisPage />} />
        <Route path="avis/:id/modifier" element={<AvisFormPage />} />
        <Route path="actualites" element={<ActualitesPage />} />
        <Route path="hors-ligne" element={<HorsLignePage />} />
        <Route path="compte" element={<ComptePage />} />
        <Route path="admin" element={<AdminHomePage />} />
        <Route path="admin/pathologies/:id" element={<AdminPathologiePage />} />
        <Route path="admin/molecules/:id" element={<AdminMoleculePage />} />
        <Route path="admin/medicaments/:id" element={<AdminMedicamentPage />} />
        <Route path="admin/glossaire/:id" element={<AdminTermePage />} />
        <Route path="admin/syndromes/:id" element={<AdminSyndromePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
