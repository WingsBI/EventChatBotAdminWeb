import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Alert,
  CircularProgress,
} from '@mui/material';
import {
  Visibility,
  VisibilityOff,
  LoginOutlined,
} from '@mui/icons-material';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import api from '../../config/axiosConfig';

const SIDEBAR_BG = '#1a1f36';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError('Please enter your email and password.');
      return;
    }

    try {
      setLoading(true);
      const response = await api.post('/Auth/login', { email, password });
      const token = response.data?.token ?? response.data?.access_token ?? response.data;
      Cookies.set('auth_token', token, { expires: 7 });
      navigate('/');
    } catch (err: unknown) {
      const message =
        (err as { response?: { data?: { message?: string } } })?.response?.data?.message ||
        'Invalid email or password. Please try again.';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        fontFamily: '"Outfit", "Inter", sans-serif',
      }}
    >
      {/* ── Left branding panel ── */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          width: '50%',
          flexShrink: 0,
          backgroundColor: SIDEBAR_BG,
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* subtle radial glow behind logo */}
        <Box
          sx={{
            position: 'absolute',
            width: 420,
            height: 420,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <img
          src="/XpoPilot_logo.png"
          alt="Xpo-Pilot"
          style={{
            width: '82%',
            maxWidth: 540,
            position: 'relative',
            zIndex: 1,
            borderRadius: 12,
          }}
        />
      </Box>

      {/* ── Right form panel ── */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          position: 'relative',
          overflowY: 'auto',
        }}
      >
        {/* top-right brand label */}
        <Box
          sx={{
            position: 'absolute',
            top: 28,
            right: 36,
          }}
        >
          <Typography
            sx={{
              fontSize: 13,
              fontWeight: 500,
              color: '#94a3b8',
              letterSpacing: '0.02em',
              fontFamily: '"Outfit", "Inter", sans-serif',
            }}
          >
            Xpo-Pilot
          </Typography>
        </Box>

        {/* centered form */}
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 3, sm: 6 },
            py: 8,
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 440 }}>
            {/* heading */}
            <Typography
              sx={{
                fontSize: { xs: '1.5rem', sm: '1.65rem' },
                fontWeight: 700,
                color: '#1e293b',
                letterSpacing: '-0.02em',
                mb: 0.75,
                fontFamily: '"Outfit", "Inter", sans-serif',
              }}
            >
              Xpo-Pilot Administrator
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                color: '#64748b',
                mb: 4,
                fontFamily: '"Outfit", "Inter", sans-serif',
              }}
            >
              Sign in to access the admin dashboard
            </Typography>

            {/* error alert */}
            {error && (
              <Alert
                severity="error"
                sx={{ mb: 2.5, borderRadius: 2, fontSize: 13 }}
                onClose={() => setError(null)}
              >
                {error}
              </Alert>
            )}

            {/* form */}
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <TextField
                fullWidth
                label="Email address *"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                autoFocus
                disabled={loading}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    fontFamily: '"Outfit", "Inter", sans-serif',
                    '&:hover fieldset': { borderColor: '#6366f1' },
                    '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#6366f1' },
                }}
              />

              <TextField
                fullWidth
                label="Password *"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                disabled={loading}
                sx={{
                  mb: 3,
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 2,
                    fontFamily: '"Outfit", "Inter", sans-serif',
                    '&:hover fieldset': { borderColor: '#6366f1' },
                    '&.Mui-focused fieldset': { borderColor: '#6366f1' },
                  },
                  '& .MuiInputLabel-root.Mui-focused': { color: '#6366f1' },
                }}
                slotProps={{
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword((v) => !v)}
                          edge="end"
                          size="small"
                          disabled={loading}
                          aria-label={showPassword ? 'Hide password' : 'Show password'}
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ fontSize: 20, color: '#94a3b8' }} />
                          ) : (
                            <Visibility sx={{ fontSize: 20, color: '#94a3b8' }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                startIcon={
                  loading ? (
                    <CircularProgress size={18} sx={{ color: 'rgba(255,255,255,0.7)' }} />
                  ) : (
                    <LoginOutlined sx={{ fontSize: 20 }} />
                  )
                }
                sx={{
                  py: 1.6,
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                  borderRadius: 2,
                  backgroundColor: SIDEBAR_BG,
                  fontFamily: '"Outfit", "Inter", sans-serif',
                  boxShadow: '0 2px 8px rgba(26,31,54,0.25)',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#252b47',
                    boxShadow: '0 4px 16px rgba(26,31,54,0.35)',
                  },
                  '&:disabled': {
                    backgroundColor: '#475569',
                    color: 'rgba(255,255,255,0.6)',
                  },
                }}
              >
                {loading ? 'Signing in…' : 'Sign in'}
              </Button>
            </Box>

            {/* forgot password */}
            <Box sx={{ textAlign: 'center', mt: 3 }}>
              <Link
                href="#"
                underline="hover"
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: SIDEBAR_BG,
                  fontFamily: '"Outfit", "Inter", sans-serif',
                  '&:hover': { color: '#6366f1' },
                  transition: 'color 0.2s',
                }}
              >
                Forgot your password?
              </Link>
            </Box>
          </Box>
        </Box>

        {/* footer */}
        <Box
          sx={{
            pb: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: 12.5,
              color: '#94a3b8',
              fontFamily: '"Outfit", "Inter", sans-serif',
            }}
          >
            © 2026 Administrator. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
