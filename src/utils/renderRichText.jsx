const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|!?\[[^\]]+\]\([^\)]+\))/g;

const renderInline = (text, keyPrefix) => {
  const parts = text.split(INLINE_PATTERN).filter(Boolean);

  return parts.map((part, index) => {
    const key = `${keyPrefix}-${index}`;

    if (/^!\[[^\]]+\]\([^\)]+\)$/.test(part)) {
      const match = part.match(/^!\[([^\]]+)\]\(([^\)]+)\)$/);
      return (
        <img
          key={key}
          className="rich-text-inline-image"
          src={match?.[2] || ''}
          alt={match?.[1] || ''}
        />
      );
    }

    if (/^\[[^\]]+\]\([^\)]+\)$/.test(part)) {
      const match = part.match(/^\[([^\]]+)\]\(([^\)]+)\)$/);
      return (
        <a
          key={key}
          href={match?.[2] || '#'}
          target="_blank"
          rel="noreferrer"
        >
          {match?.[1] || part}
        </a>
      );
    }

    if (/^\*\*[^*]+\*\*$/.test(part)) {
      return <strong key={key}>{part.slice(2, -2)}</strong>;
    }

    if (/^\*[^*]+\*$/.test(part)) {
      return <em key={key}>{part.slice(1, -1)}</em>;
    }

    if (/^`[^`]+`$/.test(part)) {
      return <code key={key}>{part.slice(1, -1)}</code>;
    }

    return <span key={key}>{part}</span>;
  });
};

const renderParagraph = (block, keyPrefix) => {
  const lines = block.split('\n');

  return (
    <p key={keyPrefix}>
      {lines.map((line, lineIndex) => (
        <span key={`${keyPrefix}-line-${lineIndex}`}>
          {renderInline(line, `${keyPrefix}-inline-${lineIndex}`)}
          {lineIndex < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </p>
  );
};

const renderBlock = (block, index) => {
  const key = `block-${index}`;
  const trimmed = block.trim();

  if (!trimmed) {
    return null;
  }

  const headingMatch = trimmed.match(/^(#{1,3})\s+(.+)$/);
  if (headingMatch) {
    const level = headingMatch[1].length;
    const Tag = `h${level + 1}`;
    return <Tag key={key}>{renderInline(headingMatch[2], `${key}-heading`)}</Tag>;
  }

  if (/^(-|\*)\s+/m.test(trimmed)) {
    const items = trimmed.split('\n').filter((line) => /^(-|\*)\s+/.test(line));
    if (items.length && items.length === trimmed.split('\n').length) {
      return (
        <ul key={key}>
          {items.map((item, itemIndex) => (
            <li key={`${key}-item-${itemIndex}`}>
              {renderInline(item.replace(/^(-|\*)\s+/, ''), `${key}-item-inline-${itemIndex}`)}
            </li>
          ))}
        </ul>
      );
    }
  }

  if (/^\d+\.\s+/m.test(trimmed)) {
    const items = trimmed.split('\n').filter((line) => /^\d+\.\s+/.test(line));
    if (items.length && items.length === trimmed.split('\n').length) {
      return (
        <ol key={key}>
          {items.map((item, itemIndex) => (
            <li key={`${key}-item-${itemIndex}`}>
              {renderInline(item.replace(/^\d+\.\s+/, ''), `${key}-item-inline-${itemIndex}`)}
            </li>
          ))}
        </ol>
      );
    }
  }

  if (/^>\s+/.test(trimmed)) {
    const quote = trimmed
      .split('\n')
      .map((line) => line.replace(/^>\s?/, ''))
      .join('\n');

    return <blockquote key={key}>{renderParagraph(quote, `${key}-quote`)}</blockquote>;
  }

  if (/^---+$/.test(trimmed)) {
    return <hr key={key} />;
  }

  if (/^!\[[^\]]+\]\([^\)]+\)$/.test(trimmed)) {
    return <div key={key}>{renderInline(trimmed, `${key}-image`)}</div>;
  }

  return renderParagraph(trimmed, key);
};

export const renderRichText = (content) => {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map(renderBlock);
};

export const editorSnippets = {
  heading: '## Titulo da secao',
  bold: '**texto em destaque**',
  list: '- Primeiro item\n- Segundo item\n- Terceiro item',
  orderedList: '1. Primeiro passo\n2. Segundo passo\n3. Terceiro passo',
  quote: '> Destaque uma citacao ou observacao importante',
  link: '[Texto do link](https://example.com)',
};
