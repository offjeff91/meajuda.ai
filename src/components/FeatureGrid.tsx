import { APP_COPY } from '../constants/copy';

export function FeatureGrid() {
  return (
    <section className="features" aria-labelledby="features-heading">
      <h2 id="features-heading">{APP_COPY.features.heading}</h2>
      <div className="features__grid">
        {APP_COPY.features.items.map((item) => (
          <article key={item.title} className="feature-card">
            <span className="feature-card__icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
