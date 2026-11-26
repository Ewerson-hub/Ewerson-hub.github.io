import { projectsStyles } from '../styles/projectsStyles';
import { sharedStyles } from '../styles/sharedStyles';
import { PROJECTS_DATA } from '../data/projects';

export default function Projects({ t, lang }) {
  return (
    <section className="animate-tab-content" style={sharedStyles.sectionContainer}>
      <div style={sharedStyles.badgeTag} className="code-font">
        {t.projects.badge}
      </div>
      <h1 style={sharedStyles.sectionTitle}>{t.projects.title}</h1>
      <p style={sharedStyles.sectionSubtitle}>{t.projects.subtitle}</p>

      <div style={projectsStyles.projectsGrid}>
        {PROJECTS_DATA.map((proj) => (
          <div key={proj.id} className="interactive-card" style={projectsStyles.projectCard}>
            <div style={projectsStyles.cardHeader}>
              <span className="code-font" style={projectsStyles.categoryBadge}>
                {proj.category}
              </span>
            </div>

            <h3 style={{ fontSize: '22px', color: '#fff', margin: '14px 0 10px 0', fontWeight: '700' }}>
              {proj.title[lang]}
            </h3>

            <p style={{ color: '#b5a49e', fontSize: '14px', lineHeight: '1.6', flexGrow: 1, marginBottom: '20px' }}>
              {proj.description[lang]}
            </p>

            <div style={{ ...sharedStyles.tagGroup, marginBottom: '20px' }}>
              {proj.tags.map((tag, idx) => (
                <span key={idx} className="code-font" style={projectsStyles.miniTag}>
                  #{tag}
                </span>
              ))}
            </div>

            <div style={projectsStyles.cardActions}>
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                style={{ padding: '9px 16px', fontSize: '13px' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                {t.projects.viewRepo}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
