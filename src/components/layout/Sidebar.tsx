import { useLocation, useNavigate } from 'react-router-dom';
import {
  Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText,
  Typography, IconButton, Divider, Avatar, Tooltip, alpha,
} from '@mui/material';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import { SIDEBAR_BG } from '../../theme/theme';
import { getAuthUser, getInitials, getFullName, formatRole } from '../../utils/auth';

const DRAWER_WIDTH = 240;
const COLLAPSED_WIDTH = 72;

const navItems = [
  { label: 'Dashboard', icon: <DashboardOutlinedIcon />, path: '/' },
  { label: 'Events', icon: <EventOutlinedIcon />, path: '/events' },
  { label: 'Analytics', icon: <BarChartOutlinedIcon />, path: '/analytics' },
  { label: 'Users', icon: <PeopleOutlinedIcon />, path: '/users' },
  { label: 'Exports', icon: <FileDownloadOutlinedIcon />, path: '/exports' },
  { label: 'Settings', icon: <SettingsOutlinedIcon />, path: '/settings' },
];

interface SidebarProps {
  open: boolean;
  onToggle: () => void;
}

export default function Sidebar({ open, onToggle }: SidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const user = getAuthUser();
  const initials = user ? getInitials(user) : '?';
  const fullName = user ? getFullName(user) : 'Unknown';
  const role = user ? formatRole(user.rolename) : '';

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? DRAWER_WIDTH : COLLAPSED_WIDTH,
        flexShrink: 0,
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '& .MuiDrawer-paper': {
          width: open ? DRAWER_WIDTH : COLLAPSED_WIDTH,
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: SIDEBAR_BG,
          border: 'none',
          overflow: 'hidden',
        },
      }}
    >
      {/* Logo + Pin Button Row */}
      <Box 
        onClick={onToggle}
        sx={{ 
          display: 'flex', alignItems: 'center', px: 2, py: 1.5, gap: 1.5, 
          justifyContent: 'space-between', minHeight: 56, cursor: 'pointer',
          '&:hover .logo-bg': { transform: 'scale(1.05)' },
          transition: 'all 0.2s',
        }}
      >
        {/* BrandMark always visible */}
        <Box 
          className="logo-bg"
          sx={{
            width: 36, height: 36, borderRadius: '8px', flexShrink: 0,
            background: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <SmartToyOutlinedIcon sx={{ color: '#fff', fontSize: 20 }} />
        </Box>

        {open && (
          <Box sx={{ overflow: 'hidden', flex: 1 }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.2, whiteSpace: 'nowrap' }}>
              Xpo-Pilot
            </Typography>
            <Typography sx={{ color: alpha('#fff', 0.5), fontSize: '0.65rem', whiteSpace: 'nowrap' }}>
              Admin Portal
            </Typography>
          </Box>
        )}

        {/* Pin / Unpin Button */}
        <Tooltip title={open ? 'Collapse sidebar' : 'Expand sidebar'} placement="right">
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            size="small"
            sx={{
              flexShrink: 0,
              color: open ? alpha('#fff', 0.7) : alpha('#fff', 0.4),
              p: 0.75,
              borderRadius: 1.5,
              transition: 'all 0.2s',
              '&:hover': { color: '#fff', bgcolor: alpha('#fff', 0.08) },
              '& svg': {
                transform: open ? 'rotate(0deg)' : 'rotate(45deg)',
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                fontSize: 18,
              },
            }}
          >
            <PushPinOutlinedIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Divider sx={{ borderColor: alpha('#fff', 0.08), mx: 2 }} />

      {/* Nav Items */}
      <List sx={{ flex: 1, px: 1.5, py: 2 }}>
        {navItems.map((item) => {
          const active = isActive(item.path);
          return (
            <Tooltip key={item.path} title={!open ? item.label : ''} placement="right" arrow>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  borderRadius: 1,
                  mb: 0.25,
                  px: open ? 1.5 : 1,
                  py: 1,
                  justifyContent: open ? 'initial' : 'center',
                  backgroundColor: active ? alpha('#6366f1', 0.15) : 'transparent',
                  '&:hover': { backgroundColor: alpha('#6366f1', 0.1) },
                  transition: 'all 0.2s',
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: open ? 40 : 'unset',
                    justifyContent: 'center',
                    color: active ? '#818cf8' : alpha('#fff', 0.5),
                    transition: 'color 0.2s',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: active ? 600 : 500,
                      color: active ? '#ffffff' : alpha('#ffffff', 0.9),
                    }}
                  />
                )}
              </ListItemButton>
            </Tooltip>
          );
        })}
      </List>

      {/* User Account */}
      <Box sx={{ px: 2, pb: 2 }}>
        <Divider sx={{ borderColor: alpha('#fff', 0.08), mb: 2 }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Avatar sx={{ width: 36, height: 36, bgcolor: '#6366f1', fontSize: '0.85rem', fontWeight: 700, flexShrink: 0 }}>
            {initials}
          </Avatar>
          {open && (
            <Box sx={{ overflow: 'hidden' }}>
              <Typography sx={{ color: '#fff', fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                {fullName}
              </Typography>
              <Typography sx={{ color: alpha('#fff', 0.4), fontSize: '0.7rem', whiteSpace: 'nowrap' }}>
                {role}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Drawer>
  );
}

export { DRAWER_WIDTH, COLLAPSED_WIDTH };
