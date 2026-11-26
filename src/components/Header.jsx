import { headerStyles } from '../styles/headerStyles';

export default function Header({ t, lang, activeTab, onNavigate, onToggleLang }) {
  return (
    <header style={headerStyles.header}>
      <div style={headerStyles.logoGroup} onClick={() => onNavigate('home')}>
        <span className="code-font" style={headerStyles.logoBadge}>&gt;_</span>
        <div>
          <span style={{ fontWeight: '800', fontSize: '18px', color: '#f5ebe6', display: 'block', lineHeight: '1.2' }}>
            Ewerson Silva
          </span>
          <span className="code-font" style={{ fontSize: '11px', color: '#a3918a', display: 'block' }}>
            Analista de Sistemas
          </span>
        </div>
      </div>

      {/* NAVEGAÇÃO ENTRE ABAS */}
      <nav style={headerStyles.navLinks}>
        <span className={`nav-item ${activeTab === 'home' ? 'active' : ''}`} onClick={() => onNavigate('home')}>
          {t.nav.home}
        </span>
        <span className={`nav-item ${activeTab === 'about' ? 'active' : ''}`} onClick={() => onNavigate('about')}>
          {t.nav.about}
        </span>
        <span className={`nav-item ${activeTab === 'projects' ? 'active' : ''}`} onClick={() => onNavigate('projects')}>
          {t.nav.projects}
        </span>
        <span className={`nav-item ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => onNavigate('contact')}>
          {t.nav.contact}
        </span>
      </nav>

      {/* BOTÃO IDIOMA PT / EN */}
      <button
        onClick={onToggleLang}
        className="code-font"
        style={headerStyles.langToggleBtn}
        title="Alternar idioma / Switch language"
      >
        🌐 {lang.toUpperCase()}
      </button>
    </header>
  );
}
