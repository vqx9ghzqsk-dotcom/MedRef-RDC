import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth.jsx';

/** items : [{ label, to? }] — le dernier élément est la page courante. */
export function Breadcrumb({ items }) {
  // Connecté, le fil part de Mon espace ; le logo ramène toujours à la page d'accueil
  const { user } = useAuth();
  return (
    <nav aria-label="Fil d’Ariane" className="breadcrumb">
      <ol>
        <li>{user ? <Link to="/espace">Mon espace</Link> : <Link to="/">Accueil</Link>}</li>
        {items.map((item, i) => (
          <li key={i} aria-current={i === items.length - 1 ? 'page' : undefined}>
            {item.to && i < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
