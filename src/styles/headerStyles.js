// ==========================================
// ESTILOS DO HEADER / NAVEGAÇÃO
// ==========================================

export const headerStyles = {
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 8%',
    backgroundColor: 'rgba(18, 11, 10, 0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid #36231f',
  },
  logoGroup: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoBadge: {
    color: '#120b0a',
    backgroundColor: '#d4a373',
    padding: '6px 10px',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '18px',
  },
  navLinks: {
    display: 'flex',
    gap: '8px',
  },
  langToggleBtn: {
    backgroundColor: '#2b1f1d',
    color: '#d4a373',
    border: '1px solid #4a3531',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '700',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
  },
};
