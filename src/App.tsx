import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import Cookies from 'js-cookie';
import { ThemeContextProvider } from './theme/ThemeContext';
import Shell from './components/layout/Shell';
import Dashboard from './pages/Dashboard/Dashboard';
import EventsList from './pages/Events/EventsList';
import EventDetail from './pages/Events/EventDetail';
import Analytics from './pages/Analytics/Analytics';
import Users from './pages/Users/Users';
import Exports from './pages/Exports/Exports';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';

function RequireAuth({ children }: { children: React.ReactNode }) {
  const token = Cookies.get('auth_token');
  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
}

export default function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            element={
              <RequireAuth>
                <Shell />
              </RequireAuth>
            }
          >
            <Route path="/" element={<Dashboard />} />
            <Route path="/events" element={<EventsList />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/exports" element={<Exports />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}
