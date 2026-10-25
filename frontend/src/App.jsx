import { Route, Routes } from 'react-router-dom';
import { Layout } from './ui/components/Layout.jsx';
import { HomePage } from './ui/pages/HomePage.jsx';
import {
  LoginPage,
  MotDePasseOubliePage,
  RegisterPage,
  ReinitialiserMotDePassePage,
} from './ui/pages/AuthPages.jsx';
import { DepartementPage, SpecialitePage } from './ui/pages/CataloguePages.jsx';
import { PathologiePage } from './ui/pages/PathologiePage.jsx';
import { UrgencePage, UrgencesPage } from './ui/pages/UrgencesPages.jsx';
import { SymptomePage, SymptomesPage } from './ui/pages/SymptomesPages.jsx';
import { ScorePage, ScoresPage } from './ui/pages/ScoresPages.jsx';
import { MedicamentPage, MedicamentsPage } from './ui/pages/MedicamentsPages.jsx';
import { MoleculePage, MoleculesPage } from './ui/pages/MoleculesPages.jsx';
import { ExamenPage, ExamensPage } from './ui/pages/ExamensPages.jsx';
import { SourcesPage } from './ui/pages/SourcesPage.jsx';
import {
  AdminHomePage,
  AdminMedicamentPage,
  AdminMoleculePage,
  AdminPathologiePage,
  AdminSyndromePage,
  AdminTermePage,
} from './ui/pages/AdminPages.jsx';
import { RecherchePage } from './ui/pages/RecherchePage.jsx';
import { DiagnosticPage } from './ui/pages/DiagnosticPage.jsx';
import { OrdonnancePage, PrescriptionsPage } from './ui/pages/PrescriptionsPage.jsx';
import { AvisFormPage, AvisPage, MesAvisPage } from './ui/pages/AvisPages.jsx';
import { NotFoundPage } from './ui/pages/NotFoundPage.jsx';
import { HorsLignePage } from './ui/pages/HorsLignePage.jsx';
import { ActualitesPage } from './ui/pages/ActualitesPage.jsx';
import { ComptePage } from './ui/pages/ComptePage.jsx';
import { GlossairePage, SyndromePage, SyndromesPage } from './ui/pages/SemiologiePages.jsx';

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
        <Route path="specialites/:slug" element={<SpecialitePage />} />
        <Route path="pathologies/:slug" element={<PathologiePage />} />
        <Route path="urgences" element={<UrgencesPage />} />
        <Route path="urgences/:slug" element={<UrgencePage />} />
        <Route path="diagnostic" element={<DiagnosticPage />} />
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
