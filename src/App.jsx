import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { TRANSLATIONS } from './data/translations';

export default function App() {
  const [lang, setLang] = useState('pt');
  const [activeTab, setActiveTab] = useState('home');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const t = TRANSLATIONS[lang];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  const toggleLang = () => setLang(lang === 'pt' ? 'en' : 'pt');

  return (
    <div style={appStyles.appContainer}>
      {/* BACKGROUND DE TEXTURA TERMINAL */}
      <div style={appStyles.terminalBgOverlay} />

      <Header
        t={t}
        lang={lang}
        activeTab={activeTab}
        onNavigate={setActiveTab}
        onToggleLang={toggleLang}
      />

      {/* ÁREA DE CONTEÚDO PRINCIPAL */}
      <main style={appStyles.mainContent}>
        {activeTab === 'home' && <Home t={t} onNavigate={setActiveTab} />}

        {activeTab === 'about' && <About t={t} />}

        {activeTab === 'projects' && <Projects t={t} lang={lang} />}

        {activeTab === 'contact' && (
          <Contact
            t={t}
            lang={lang}
            formSubmitted={formSubmitted}
            onFormSubmit={handleFormSubmit}
          />
        )}
      </main>

      <Footer t={t} />
    </div>
  );
}

// ==========================================
// ESTILOS INLINE
// ==========================================
const appStyles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    backgroundColor: '#120b0a',
    color: '#e5dad6',
  },
  terminalBgOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `radial-gradient(circle at 50% 30%, rgba(54, 35, 31, 0.45) 0%, rgba(18, 11, 10, 0.98) 100%)`,
    zIndex: 0,
    pointerEvents: 'none',
  },
  mainContent: {
    flex: 1,
    zIndex: 1,
    maxWidth: '1120px',
    width: '100%',
    margin: '0 auto',
    padding: '40px 24px 80px 24px',
  },
};
