import { contactStyles } from '../styles/contactStyles';
import { sharedStyles } from '../styles/sharedStyles';

export default function Contact({ t, lang, formSubmitted, onFormSubmit }) {
  return (
    <section className="animate-tab-content" style={sharedStyles.sectionContainer}>
      <div style={sharedStyles.badgeTag} className="code-font">
        {t.contact.badge}
      </div>
      <h1 style={sharedStyles.sectionTitle}>{t.contact.title}</h1>
      <p style={sharedStyles.sectionSubtitle}>{t.contact.subtitle}</p>

      <div style={contactStyles.contactTwoColumnGrid}>
        {/* COLUNA DA ESQUERDA: FORMULÁRIO INTERATIVO */}
        <div style={contactStyles.contactFormCard} className="interactive-card">
          <h3 className="code-font" style={{ color: '#d4a373', marginBottom: '18px', fontSize: '18px' }}>
            {t.contact.formTitle}
          </h3>

          {formSubmitted ? (
            <div style={contactStyles.successMessageBox} className="code-font">
              {lang === 'pt'
                ? 'Mensagem enviada com sucesso! Entrarei em contato em breve.'
                : 'Message sent successfully! I will reach out soon.'}
            </div>
          ) : (
            <form style={contactStyles.contactForm} onSubmit={onFormSubmit}>
              <div>
                <label style={contactStyles.inputLabel}>{t.contact.formName}</label>
                <input type="text" required placeholder={t.contact.formNameLabel} style={contactStyles.inputField} />
              </div>

              <div>
                <label style={contactStyles.inputLabel}>{t.contact.formEmail}</label>
                <input type="email" required placeholder={t.contact.formEmailLabel} style={contactStyles.inputField} />
              </div>

              <div>
                <label style={contactStyles.inputLabel}>{t.contact.formMessage}</label>
                <textarea rows="5" required placeholder={t.contact.formMessage} style={contactStyles.inputField} />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                {t.contact.sendBtn} &rarr;
              </button>
            </form>
          )}
        </div>

        {/* COLUNA DA DIREITA: CANAIS DIRETOS */}
        <div style={contactStyles.directChannelsCard} className="interactive-card">
          <h3 className="code-font" style={{ color: '#d4a373', marginBottom: '8px', fontSize: '18px' }}>
            {t.contact.directTitle}
          </h3>
          <p style={{ color: '#a3918a', fontSize: '14px', marginBottom: '24px' }}>
            {t.contact.directSub}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* LINK E-MAIL */}
            <a href="mailto:ewerson.silva@exemplo.com" className="direct-channel-item">
              <div style={contactStyles.channelIconBox}>✉️</div>
              <div style={{ flex: 1 }}>
                <span className="code-font" style={{ fontSize: '12px', color: '#d4a373', display: 'block' }}>
                  {t.contact.emailLabel}
                </span>
                <strong style={{ fontSize: '15px', color: '#fff' }}>ewerson.silva@exemplo.com</strong>
              </div>
            </a>

            {/* LINK LINKEDIN */}
            <a href="https://linkedin.com/in/ewerson-hub" target="_blank" rel="noreferrer" className="direct-channel-item">
              <div style={contactStyles.channelIconBox}>💼</div>
              <div style={{ flex: 1 }}>
                <span className="code-font" style={{ fontSize: '12px', color: '#d4a373', display: 'block' }}>
                  {t.contact.linkedinLabel}
                </span>
                <strong style={{ fontSize: '15px', color: '#fff' }}>linkedin.com/in/ewerson-hub</strong>
              </div>
            </a>

            {/* LINK GITHUB */}
            <a href="https://github.com/Ewerson-hub" target="_blank" rel="noreferrer" className="direct-channel-item">
              <div style={contactStyles.channelIconBox}>💻</div>
              <div style={{ flex: 1 }}>
                <span className="code-font" style={{ fontSize: '12px', color: '#d4a373', display: 'block' }}>
                  {t.contact.githubLabel}
                </span>
                <strong style={{ fontSize: '15px', color: '#fff' }}>github.com/Ewerson-hub</strong>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
