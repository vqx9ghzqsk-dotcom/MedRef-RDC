import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SearchBar({ initial = '', size = 'normal', autoFocus = false }) {
  const [q, setQ] = useState(initial);
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    const term = q.trim();
    if (term.length >= 2) navigate(`/recherche?q=${encodeURIComponent(term)}`);
  };

  return (
    <form role="search" className={`search search-${size}`} onSubmit={submit}>
      <label htmlFor={`search-${size}`} className="visually-hidden">
        Rechercher une pathologie, un médicament, un symptôme
      </label>
      <input
        id={`search-${size}`}
        type="search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Pathologie, médicament, symptôme, urgence…"
        autoComplete="off"
        enterKeyHint="search"
        minLength={2}
        autoFocus={autoFocus}
      />
      <button type="submit" className="btn btn-primary">
        Rechercher
      </button>
    </form>
  );
}
