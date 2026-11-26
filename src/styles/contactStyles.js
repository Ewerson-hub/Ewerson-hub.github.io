// ==========================================
// ESTILOS DA SEÇÃO DE CONTATO
// ==========================================

export const contactStyles = {
  contactTwoColumnGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '28px',
    alignItems: 'start',
  },
  contactFormCard: {
    backgroundColor: '#1c1210',
    border: '1px solid #36231f',
    padding: '32px',
    borderRadius: '14px',
  },
  directChannelsCard: {
    backgroundColor: '#1c1210',
    border: '1px solid #36231f',
    padding: '32px',
    borderRadius: '14px',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '18px',
  },
  inputLabel: {
    display: 'block',
    fontSize: '13px',
    fontWeight: '600',
    color: '#c4b5b0',
    marginBottom: '6px',
  },
  inputField: {
    width: '100%',
    backgroundColor: '#120b0a',
    border: '1px solid #3a2622',
    borderRadius: '8px',
    padding: '14px',
    color: '#fff',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
  },
  channelIconBox: {
    fontSize: '20px',
    width: '42px',
    height: '42px',
    borderRadius: '8px',
    backgroundColor: '#1c1210',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #4a3531',
  },
  successMessageBox: {
    padding: '16px',
    backgroundColor: 'rgba(212, 163, 115, 0.15)',
    border: '1px solid #d4a373',
    borderRadius: '8px',
    color: '#d4a373',
    fontSize: '14px',
  },
};
