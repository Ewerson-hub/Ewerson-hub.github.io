import { footerStyles } from '../styles/footerStyles';

export default function Footer({ t }) {
  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.footerInner}>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '12px' }}>
          <a href="https://github.com/Ewerson-hub" target="_blank" rel="noreferrer" style={{ color: '#d4a373', textDecoration: 'none' }}>
            GitHub
          </a>
          <span style={{ color: '#4a3531' }}>•</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: '#d4a373', textDecoration: 'none' }}>
            LinkedIn
          </a>
        </div>
        <span className="code-font" style={{ fontSize: '13px', color: '#a3918a' }}>
          © 2026 {t.footer}
        </span>
      </div>
    </footer>
  );
}
