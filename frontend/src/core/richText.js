/**
 * Analyse du markdown léger utilisé dans les fiches, en arbre de blocs neutres.
 * Le rendu (React web, React Native…) se fait ailleurs : aucun HTML n'est
 * produit ni injecté ici, donc aucun risque XSS.
 *
 *   "## Titre"  → { type: 'heading', text }
 *   "- item"    → { type: 'list', items: [inline[]] }
 *   texte       → { type: 'paragraph', inline }
 *   inline      → [{ type: 'text' | 'strong' | 'em', text }]
 */

export function parseInline(text) {
  const out = [];
  const re = /(\*\*([^*]+)\*\*|\*([^*]+)\*)/g;
  let last = 0;
  let m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push({ type: 'text', text: text.slice(last, m.index) });
    if (m[2] !== undefined) out.push({ type: 'strong', text: m[2] });
    else out.push({ type: 'em', text: m[3] });
    last = re.lastIndex;
  }
  if (last < text.length) out.push({ type: 'text', text: text.slice(last) });
  return out;
}

export function parseRichText(source) {
  if (!source) return [];
  const blocks = [];
  let paragraph = [];
  let list = null;

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'paragraph', inline: parseInline(paragraph.join(' ')) });
      paragraph = [];
    }
  };
  const flushList = () => {
    if (list) {
      blocks.push(list);
      list = null;
    }
  };

  for (const rawLine of String(source).split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
    } else if (line.startsWith('## ')) {
      flushParagraph();
      flushList();
      blocks.push({ type: 'heading', text: line.slice(3).trim() });
    } else if (line.startsWith('- ')) {
      flushParagraph();
      if (!list) list = { type: 'list', items: [] };
      list.items.push(parseInline(line.slice(2).trim()));
    } else {
      flushList();
      paragraph.push(line);
    }
  }
  flushParagraph();
  flushList();
  return blocks;
}
