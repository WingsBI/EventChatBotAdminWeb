import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme, alpha } from '@mui/material/styles';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useThemeContext must be used within a ThemeContextProvider');
  return context;
};

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode');
    return (saved as ThemeMode) || 'light';
  });

  const toggleTheme = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', next);
      return next;
    });
  };

  const theme = useMemo(() => {
    const isDark = mode === 'dark';
    const PRIMARY = '#6366f1';
    const SECONDARY = '#10b981';

    return createTheme({
      palette: {
        mode,
        primary: { main: PRIMARY, light: '#818cf8', dark: '#4f46e5' },
        secondary: { main: SECONDARY, light: '#34d399', dark: '#059669' },
        background: {
          default: isDark ? '#0f172a' : '#f1f5f9',
          paper: isDark ? '#1e293b' : '#ffffff',
        },
        text: {
          primary: isDark ? '#ffffff' : '#1e293b',
          secondary: isDark ? '#cbd5e1' : '#64748b',
        },
        divider: isDark ? alpha('#94a3b8', 0.1) : alpha('#94a3b8', 0.2),
      },
      typography: {
        fontFamily: '"Outfit", "Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h4: { fontWeight: 700, fontSize: '1.5rem', letterSpacing: '-0.02em' },
        h5: { fontWeight: 700, fontSize: '1.25rem', letterSpacing: '-0.01em' },
        h6: { fontWeight: 600, fontSize: '1rem' },
        subtitle1: { fontWeight: 600, fontSize: '0.9rem' },
        subtitle2: { fontWeight: 500, fontSize: '0.8rem' },
        body2: { fontSize: '0.8rem' },
        button: { textTransform: 'none', fontWeight: 600 },
      },
      shape: { borderRadius: 8 },
      components: {
        MuiCssBaseline: {
          styleOverrides: `
            body {
              scrollbar-width: none;
              -ms-overflow-style: none;
              font-optical-sizing: auto;
            }
            body::-webkit-scrollbar {
              display: none;
            }
            * {
              scrollbar-width: none;
              -ms-overflow-style: none;
              font-optical-sizing: auto;
            }
            *::-webkit-scrollbar {
              display: none;
            }
          `,
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
              boxShadow: isDark ? '0 4px 6px -1px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
              border: `1px solid ${isDark ? 'rgba(148, 163, 184, 0.1)' : 'rgba(148, 163, 184, 0.1)'}`,
              backgroundImage: 'none',
            },
          },
        },
        MuiButton: {
          styleOverrides: {
            root: { borderRadius: 8, padding: '6px 16px', fontWeight: 600 },
          },
        },
        MuiTableCell: {
          styleOverrides: {
            head: { fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' },
          },
        },
      },
    });
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
