import { APP_COPY } from '../constants/copy';

export function TemplatesStrip() {
  return (
    <section className="templates" aria-labelledby="templates-heading">
      <h2 id="templates-heading">{APP_COPY.templates.heading}</h2>
      <p>{APP_COPY.templates.body}</p>
      <ul className="templates__list">
        {APP_COPY.templates.items.map((item) => (
          <li key={item.label} className="template-chip">
            <span aria-hidden="true">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}
