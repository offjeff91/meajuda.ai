type ExampleItem = {
  icon: string;
  label: string;
  example: string;
};

type ExampleGridProps = {
  heading: string;
  body: string;
  items: readonly ExampleItem[];
  headingId: string;
};

function slug(headingId: string, label: string) {
  return `${headingId}-${label
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')}`;
}

export function ExampleGrid({ heading, body, items, headingId }: ExampleGridProps) {
  return (
    <section className="example-grid" aria-labelledby={headingId}>
      <h2 id={headingId}>{heading}</h2>
      <p>{body}</p>

      <ul className="example-grid__chips">
        {items.map((item) => (
          <li key={item.label}>
            <a className="example-chip" href={`#${slug(headingId, item.label)}`}>
              <span aria-hidden="true">{item.icon}</span>
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      <ul className="example-grid__list">
        {items.map((item) => (
          <li key={item.label} id={slug(headingId, item.label)} className="example-card">
            <span className="example-card__icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.label}</h3>
            <p>{item.example}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
