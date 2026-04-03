import { useState } from 'react';
import {
  AppBar as MuiAppBar, Toolbar, Typography, IconButton, Box,
  InputBase, Avatar, alpha, Menu, MenuItem, Divider, ListItemIcon,
} from '@mui/material';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useThemeContext } from '../../theme/ThemeContext';
import { getAuthUser, getInitials, getFullName, formatRole } from '../../utils/auth';

const breadcrumbMap: Record<string, string> = {
  '/': 'Dashboard',
  '/events': 'Events',
  '/analytics': 'Analytics',
  '/users': 'Users',
  '/exports': 'Exports',
  '/settings': 'Settings',
};

export default function AppBar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();

  // notifications menu
  const [notifAnchor, setNotifAnchor] = useState<null | HTMLElement>(null);
  const handleNotifOpen = (e: React.MouseEvent<HTMLElement>) => setNotifAnchor(e.currentTarget);
  const handleNotifClose = () => setNotifAnchor(null);

  // profile menu
  const [profileAnchor, setProfileAnchor] = useState<null | HTMLElement>(null);
  const handleProfileOpen = (e: React.MouseEvent<HTMLElement>) => setProfileAnchor(e.currentTarget);
  const handleProfileClose = () => setProfileAnchor(null);

  const handleLogout = () => {
    handleProfileClose();
    Cookies.remove('auth_token');
    Cookies.remove('token');
    Cookies.remove('user');
    navigate('/login');
  };

  const user = getAuthUser();
  const initials = user ? getInitials(user) : '?';
  const fullName = user ? getFullName(user) : 'Unknown';
  const email = user?.email ?? '';
  const role = user ? formatRole(user.rolename) : '';

  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPage = breadcrumbMap[location.pathname] || pathSegments[pathSegments.length - 1] || 'Dashboard';

  return (
    <MuiAppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: 'background.paper',
        borderBottom: '1px solid',
        borderColor: 'divider',
        color: 'text.primary',
        backgroundImage: 'none',
      }}
    >
      <Toolbar sx={{ gap: 2, minHeight: '64px !important' }}>
        {/* Breadcrumb replacement with simple title */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            {currentPage}
          </Typography>
        </Box>

        {/* Search */}
        <Box
          sx={{
            display: 'flex', alignItems: 'center', gap: 1,
            backgroundColor: (t) => alpha(t.palette.primary.main, 0.04),
            borderRadius: 2, px: 1.5, py: 0.5,
            border: '1px solid',
            borderColor: 'divider',
            width: 240,
            transition: 'all 0.2s',
            '&:focus-within': {
              borderColor: 'primary.main',
              width: 300,
              backgroundColor: 'background.paper',
              boxShadow: (t) => `0 0 0 3px ${alpha(t.palette.primary.main, 0.1)}`,
            },
          }}
        >
          <SearchRoundedIcon sx={{ color: 'text.secondary', fontSize: 20 }} />
          <InputBase placeholder="Search..." sx={{ fontSize: '0.85rem', flex: 1 }} />
        </Box>

        {/* Theme Toggle */}
        <IconButton 
          size="small" 
          onClick={toggleTheme}
          sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
        >
          {mode === 'light' ? <DarkModeRoundedIcon sx={{ fontSize: 20 }} /> : <LightModeRoundedIcon sx={{ fontSize: 20 }} />}
        </IconButton>

        {/* Notifications */}
        <IconButton
          size="small"
          onClick={handleNotifOpen}
          sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
        >
          <NotificationsRoundedIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Menu
          anchorEl={notifAnchor}
          open={Boolean(notifAnchor)}
          onClose={handleNotifClose}
          PaperProps={{
            sx: { mt: 1.5, width: 280, borderRadius: 2, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box sx={{ p: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Notifications</Typography>
          </Box>
          <MenuItem onClick={handleNotifClose} sx={{ py: 3, display: 'flex', justifyContent: 'center' }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>No new notifications</Typography>
          </MenuItem>
        </Menu>

        {/* Profile Avatar */}
        <Avatar
          onClick={handleProfileOpen}
          sx={{
            width: 36, height: 36, bgcolor: 'primary.main',
            fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
            transition: 'box-shadow 0.2s',
            '&:hover': { boxShadow: (t) => `0 0 0 3px ${alpha(t.palette.primary.main, 0.25)}` },
          }}
        >
          {initials}
        </Avatar>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileAnchor}
          open={Boolean(profileAnchor)}
          onClose={handleProfileClose}
          PaperProps={{
            sx: { mt: 1.5, width: 210, borderRadius: 2, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.12)' },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
          <Box sx={{ px: 2, py: 1.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, lineHeight: 1.3 }}>{fullName}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 12 }}>{email}</Typography>
            {role && (
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 11, mt: 0.25 }}>{role}</Typography>
            )}
          </Box>
          <Divider />
          <MenuItem onClick={handleProfileClose} sx={{ gap: 1.5, py: 1.2 }}>
            <ListItemIcon sx={{ minWidth: 'unset' }}>
              <PersonRoundedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 500 }}>Profile</Typography>
          </MenuItem>
          <Divider />
          <MenuItem
            onClick={handleLogout}
            sx={{ gap: 1.5, py: 1.2, color: 'error.main', '&:hover': { backgroundColor: 'error.light', color: 'error.dark' } }}
          >
            <ListItemIcon sx={{ minWidth: 'unset' }}>
              <LogoutRoundedIcon sx={{ fontSize: 18, color: 'inherit' }} />
            </ListItemIcon>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'inherit' }}>Logout</Typography>
          </MenuItem>
        </Menu>
      </Toolbar>
    </MuiAppBar>
  );
}
