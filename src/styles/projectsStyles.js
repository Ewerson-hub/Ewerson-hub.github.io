// ==========================================
// ESTILOS DA SEÇÃO DE PROJETOS
// ==========================================

export const projectsStyles = {
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '24px',
  },
  projectCard: {
    backgroundColor: '#1c1210',
    border: '1px solid #36231f',
    borderRadius: '14px',
    padding: '28px',
    display: 'flex',
    flexDirection: 'column',
  },
  categoryBadge: {
    color: '#d4a373',
    fontSize: '12px',
    fontWeight: '700',
    background: '#2b1f1d',
    border: '1px solid #4a3531',
    padding: '4px 10px',
    borderRadius: '4px',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardActions: {
    marginTop: 'auto',
    display: 'flex',
    gap: '12px',
  },
  miniTag: {
    backgroundColor: '#261815',
    color: '#d4a373',
    fontSize: '12px',
    padding: '4px 10px',
    borderRadius: '4px',
  },
};
