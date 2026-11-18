import { Link } from 'react-router-dom';
import { SearchBar } from '../components/SearchBar.jsx';

export function NotFoundPage() {
  return (
    <section className="narrow">
      <h1>Page introuvable</h1>
      <p>Cette adresse ne correspond à aucune page. Lancez une recherche ou revenez à l’accueil.</p>
      <SearchBar />
      <p>
        <Link to="/">Revenir à l’accueil</Link>
      </p>
    </section>
  );
}
