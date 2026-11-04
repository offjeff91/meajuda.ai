import { APP_COPY } from './constants/copy';
import { ExampleGrid } from './components/ExampleGrid';
import { FeatureGrid } from './components/FeatureGrid';
import { CtaBar } from './components/CtaBar';
import { FaqSection } from './components/FaqSection';
import { HouseDoodle } from './icons/HouseDoodle';
import { PlantDoodle } from './icons/PlantDoodle';

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__doodles" aria-hidden="true">
          <HouseDoodle className="hero__doodle hero__doodle--house" />
          <PlantDoodle className="hero__doodle hero__doodle--plant" />
        </div>
        <p className="hero__kicker">{APP_COPY.kicker}</p>
        <h1 className="hero__title">{APP_COPY.brand}</h1>
        <p className="hero__tagline">{APP_COPY.tagline}</p>
        <p className="hero__intro">{APP_COPY.intro}</p>
      </header>

      <main className="layout-stack">
        <ExampleGrid
          headingId="templates-heading"
          heading={APP_COPY.templates.heading}
          body={APP_COPY.templates.body}
          items={APP_COPY.templates.items}
        />
        <ExampleGrid
          headingId="profiles-heading"
          heading={APP_COPY.profiles.heading}
          body={APP_COPY.profiles.body}
          items={APP_COPY.profiles.items}
        />
        <FeatureGrid />
        <CtaBar />
        <FaqSection />
      </main>

      <footer className="footer">
        <p>{APP_COPY.footer}</p>
      </footer>
    </div>
  );
}
