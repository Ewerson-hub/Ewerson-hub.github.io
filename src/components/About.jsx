import { aboutStyles } from '../styles/aboutStyles';
import { sharedStyles } from '../styles/sharedStyles';

export default function About({ t }) {
  return (
    <section className="animate-tab-content" style={sharedStyles.sectionContainer}>
      <div style={sharedStyles.badgeTag} className="code-font">
        {t.about.badge}
      </div>
      <h1 style={sharedStyles.sectionTitle}>{t.about.title}</h1>
      <p style={sharedStyles.sectionSubtitle}>{t.about.subtitle}</p>

      {/* BIO CONTAINER */}
      <div style={aboutStyles.aboutGrid}>
        <div style={aboutStyles.aboutTextCard} className="interactive-card">
          <h3 className="code-font" style={{ color: '#d4a373', marginBottom: '16px', fontSize: '18px' }}>
            {t.about.profileSummary}
          </h3>
          <p style={{ marginBottom: '16px', lineHeight: '1.7', color: '#e5dad6' }}>{t.about.text1}</p>
          <p style={{ lineHeight: '1.7', color: '#c4b5b0' }}>{t.about.text2}</p>
        </div>

        {/* EXPERTISE CARDS */}
        <div>
          <div style={aboutStyles.skillsCard} className="interactive-card">
          <h3 className="code-font" style={{ color: '#d4a373', marginBottom: '20px', fontSize: '18px' }}>
            {t.about.skillsTitle}
          </h3>

          {/* CATEGORIA 1: BACKEND */}
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '10px', color: '#f5ebe6' }}>
              ⚙️ {t.about.catBackend}
            </strong>
            <div style={sharedStyles.tagGroup}>
              <span style={sharedStyles.tag}>Node.js</span>
              <span style={sharedStyles.tag}>TypeScript</span>
              <span style={sharedStyles.tag}>Java</span>
              <span style={sharedStyles.tag}>Express</span>
              <span style={sharedStyles.tag}>CLI Tools</span>
            </div>
          </div>

          {/* CATEGORIA 2: FRONTEND */}
          <div style={{ marginBottom: '20px' }}>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '10px', color: '#f5ebe6' }}>
              💻 {t.about.catFrontend}
            </strong>
            <div style={sharedStyles.tagGroup}>
              <span style={sharedStyles.tag}>React</span>
              <span style={sharedStyles.tag}>JavaScript ES6+</span>
              <span style={sharedStyles.tag}>HTML5 / CSS3</span>
              <span style={sharedStyles.tag}>Chakra UI / Tailwind</span>
              <span style={sharedStyles.tag}>Handlebars</span>
            </div>
          </div>

          {/* CATEGORIA 3: BANCO DE DADOS & TOOLS */}
          <div>
            <strong style={{ display: 'block', fontSize: '14px', marginBottom: '10px', color: '#f5ebe6' }}>
              🗄️ {t.about.catDatabase}
            </strong>
            <div style={sharedStyles.tagGroup}>
              <span style={sharedStyles.tag}>MySQL</span>
              <span style={sharedStyles.tag}>MongoDB</span>
              <span style={sharedStyles.tag}>Linux / Bash</span>
              <span style={sharedStyles.tag}>Git / GitHub</span>
              <span style={sharedStyles.tag}>JWT / Auth</span>
            </div>
          </div>
        </div>
  
        <div style={aboutStyles.aboutTextCard} className="interactive-card container-custom">
          <h3 className="code-font" style={{ color: '#d4a373', marginBottom: '20px', fontSize: '18px' }}>
            {t.about.catMethodology.title}
          </h3>
          <div style={{ marginBottom: '20px' }}>
           
            <div style={sharedStyles.tagGroup}>
              <span style={sharedStyles.tag}>{t.about.catMethodology.firstLabel}</span>
              <span style={sharedStyles.tag}>{t.about.catMethodology.secondLabel}</span>
              <span style={sharedStyles.tag}>{t.about.catMethodology.thirdLabel}</span>
              <span style={sharedStyles.tag}>{t.about.catMethodology.fourtLabel}</span>

            </div>
          </div>
          
        </div>

        </div>
        

        
        
      </div>
    </section>
  );
}
