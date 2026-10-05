import { parseRichText } from '../../core/richText.js';

function Inline({ parts }) {
  return parts.map((p, i) => {
    if (p.type === 'strong') return <strong key={i}>{p.text}</strong>;
    if (p.type === 'em') return <em key={i}>{p.text}</em>;
    return <span key={i}>{p.text}</span>;
  });
}

/** Rendu React du markdown léger des fiches (aucun innerHTML). */
export function RichText({ text, headingLevel = 3 }) {
  const blocks = parseRichText(text);
  if (!blocks.length) return <p className="muted">Contenu à rédiger.</p>;
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
