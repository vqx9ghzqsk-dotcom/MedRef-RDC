import { Link } from 'react-router-dom';

/** items : [{ label, to? }] — le dernier élément est la page courante. */
export function Breadcrumb({ items }) {
  return (
    <nav aria-label="Fil d’Ariane" className="breadcrumb">
      <ol>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        {items.map((item, i) => (
          <li key={i} aria-current={i === items.length - 1 ? 'page' : undefined}>
            {item.to && i < items.length - 1 ? <Link to={item.to}>{item.label}</Link> : item.label}
          </li>
        ))}
      </ol>
    </nav>
  );
}
