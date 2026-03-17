import { createTheme, alpha } from '@mui/material/styles';

const SIDEBAR_BG = '#1a1f36';
const PRIMARY = '#6366f1';
const SECONDARY = '#10b981';

const theme = createTheme({
  palette: {
    primary: { main: PRIMARY, light: '#818cf8', dark: '#4f46e5' },
    secondary: { main: SECONDARY, light: '#34d399', dark: '#059669' },
    background: { default: '#f1f5f9', paper: '#ffffff' },
    text: { primary: '#1e293b', secondary: '#64748b' },
    error: { main: '#ef4444' },
    warning: { main: '#f59e0b' },
    success: { main: '#10b981' },
    info: { main: '#3b82f6' },
    divider: alpha('#94a3b8', 0.2),
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: { fontWeight: 700, fontSize: '1.75rem', letterSpacing: '-0.02em' },
    h5: { fontWeight: 700, fontSize: '1.35rem', letterSpacing: '-0.01em' },
    h6: { fontWeight: 600, fontSize: '1.1rem' },
    subtitle1: { fontWeight: 600, fontSize: '0.95rem' },
    subtitle2: { fontWeight: 500, fontSize: '0.85rem', color: '#64748b' },
    body2: { fontSize: '0.85rem', color: '#64748b' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          transition: 'box-shadow 0.2s ease, transform 0.2s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 10, padding: '8px 20px', fontWeight: 600 },
        containedPrimary: {
          background: `linear-gradient(135deg, ${PRIMARY} 0%, #818cf8 100%)`,
          boxShadow: `0 2px 8px ${alpha(PRIMARY, 0.35)}`,
          '&:hover': {
            background: `linear-gradient(135deg, #4f46e5 0%, ${PRIMARY} 100%)`,
            boxShadow: `0 4px 12px ${alpha(PRIMARY, 0.45)}`,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 600, borderRadius: 8 },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: { fontWeight: 700, color: '#64748b', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
  },
});

export { SIDEBAR_BG, PRIMARY, SECONDARY };
export default theme;
