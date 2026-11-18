import { parseRichText } from '../../core/richText.js';
import { decouper } from '../../core/glossaire.js';
import { useGlossaire } from '../context/glossaire.jsx';
import { Terme } from './Terme.jsx';

/**
 * Découpe chaque morceau de texte en texte simple et termes du glossaire.
 * Calcul pur, fait en une passe par rendu : la première occurrence de chaque terme
 * est signalée (un rendu répété, en mode strict de React, donne le même résultat).
 */
function avecTermes(blocks, index) {
  const dejaVus = new Set();
  const decoupe = (parts) =>
    parts.map((p) => ({ ...p, morceaux: index ? decouper(p.text, index, dejaVus) : null }));
  return blocks.map((b) => {
    if (b.type === 'list') return { ...b, items: b.items.map(decoupe) };
    if (b.type === 'paragraph') return { ...b, inline: decoupe(b.inline) };
    return b;
  });
}

function Contenu({ part }) {
  if (!part.morceaux) return part.text;
  return part.morceaux.map((m, i) =>
    m.type === 'terme' ? <Terme key={i} texte={m.texte} terme={m.terme} /> : m.texte,
  );
}

function Inline({ parts }) {
  return parts.map((p, i) => {
    if (p.type === 'strong') {
      return (
        <strong key={i}>
          <Contenu part={p} />
        </strong>
      );
    }
    if (p.type === 'em') {
      return (
        <em key={i}>
          <Contenu part={p} />
        </em>
      );
    }
    return (
      <span key={i}>
        <Contenu part={p} />
      </span>
    );
  });
}

/**
 * Rendu React du markdown léger des fiches (aucun innerHTML).
 * `glossaire` : met en évidence la première occurrence de chaque terme sémiologique.
 */
export function RichText({ text, headingLevel = 3, glossaire = false, vide = 'Contenu à rédiger.' }) {
  const indexGlossaire = useGlossaire();
  const parsed = parseRichText(text);
  if (!parsed.length) return vide ? <p className="muted">{vide}</p> : null;
  const blocks = avecTermes(parsed, glossaire ? indexGlossaire : null);
  const H = `h${headingLevel}`;
  return (
    <div className="rich-text">
      {blocks.map((b, i) => {
        if (b.type === 'heading') return <H key={i}>{b.text}</H>;
        if (b.type === 'list') {
          return (
            <ul key={i}>
              {b.items.map((item, j) => (
                <li key={j}>
                  <Inline parts={item} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i}>
            <Inline parts={b.inline} />
          </p>
        );
      })}
    </div>
  );
}
