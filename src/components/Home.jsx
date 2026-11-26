import { homeStyles } from '../styles/homeStyles';
import { sharedStyles } from '../styles/sharedStyles';

export default function Home({ t, onNavigate }) {
  return (
    <section className="animate-tab-content" style={homeStyles.heroSection}>
      <div style={sharedStyles.badgeTag} className="code-font">
        {t.hero.badge}
      </div>

      <h1 style={homeStyles.heroTitle}>{t.hero.headline}</h1>

      <div className="code-font" style={homeStyles.heroRoleText}>
        &gt; {t.hero.role}
      </div>

      <p style={homeStyles.heroSubtitle}>{t.hero.subhead}</p>

      <div style={homeStyles.heroButtons}>
        <button className="btn-primary" onClick={() => onNavigate('projects')}>
          {t.hero.ctaProjects} &rarr;
        </button>
        <button className="btn-secondary" onClick={() => onNavigate('contact')}>
          {t.hero.ctaContact}
        </button>
      </div>
    </section>
  );
}
