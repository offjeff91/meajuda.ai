import { APP_COPY } from '../constants/copy';
import { KeysDoodle } from '../icons/KeysDoodle';

export function CtaBar() {
  return (
    <section className="share-bar" aria-labelledby="cta-heading">
      <KeysDoodle className="share-bar__doodle" />
      <div className="share-bar__text">
        <h2 id="cta-heading">{APP_COPY.cta.heading}</h2>
        <p>{APP_COPY.cta.body}</p>
      </div>
      <a
        className="share-bar__button"
        href="mailto:oi@meajud.ai?subject=Quero%20testar%20o%20Me%20Ajuda%C3%AD"
      >
        {APP_COPY.cta.button}
      </a>
    </section>
  );
}
