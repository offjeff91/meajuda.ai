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

export function ExampleGrid({ heading, body, items, headingId }: ExampleGridProps) {
  return (
    <section className="example-grid" aria-labelledby={headingId}>
      <h2 id={headingId}>{heading}</h2>
      <p>{body}</p>
      <ul className="example-grid__list">
        {items.map((item) => (
          <li key={item.label}>
            <a
              className="example-card"
              href={`mailto:oi@meajud.ai?subject=${encodeURIComponent(
                `Quero testar o Me Ajudaí (${item.label})`
              )}`}
            >
              <span className="example-card__icon" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.label}</h3>
              <p>{item.example}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
