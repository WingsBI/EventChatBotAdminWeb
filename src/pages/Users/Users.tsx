import { useState } from 'react';
import {
  Box, Card, Typography, Button, Chip, Avatar, alpha,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField,
  Select, MenuItem, FormControl, InputLabel, IconButton, Tooltip,
} from '@mui/material';
import PersonAddRoundedIcon from '@mui/icons-material/PersonAddRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import BlockRoundedIcon from '@mui/icons-material/BlockRounded';
const users: any[] = [];

const roleColors: Record<string, { bg: string; text: string }> = {
  super_admin: { bg: 'rgba(99,102,241,0.1)', text: '#6366f1' },
  event_admin: { bg: 'rgba(16,185,129,0.1)', text: '#059669' },
  viewer: { bg: 'rgba(100,116,139,0.1)', text: '#64748b' },
};

const roleLabels: Record<string, string> = {
  super_admin: 'Super Admin',
  event_admin: 'Event Admin',
  viewer: 'Viewer',
};

export default function Users() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body2">{users.length} users total</Typography>
        <Button variant="contained" startIcon={<PersonAddRoundedIcon />} onClick={() => setDialogOpen(true)}>
          Invite User
        </Button>
      </Box>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Events</TableCell>
                <TableCell>Last Login</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                users.map((user) => (
                  <TableRow key={user.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                        <Avatar sx={{ width: 36, height: 36, bgcolor: alpha('#6366f1', 0.15), color: '#6366f1', fontSize: '0.8rem', fontWeight: 700 }}>
                          {user.name.split(' ').map((s:any) => s[0]).join('')}
                        </Avatar>
                        <Box>
                          <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>{user.name}</Typography>
                          <Typography variant="body2" sx={{ fontSize: '0.75rem' }}>{user.email}</Typography>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip label={roleLabels[user.role]} size="small"
                        sx={{ fontWeight: 700, fontSize: '0.7rem', bgcolor: roleColors[user.role]?.bg || '#eee', color: roleColors[user.role]?.text || '#333' }}
                      />
                    </TableCell>
                    <TableCell>
                      <Chip label={user.status === 'active' ? 'Active' : 'Inactive'} size="small"
                        sx={{
                          fontWeight: 600, fontSize: '0.7rem',
                          bgcolor: user.status === 'active' ? alpha('#10b981', 0.1) : alpha('#ef4444', 0.1),
                          color: user.status === 'active' ? '#059669' : '#dc2626',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {user.assignedEvents?.length || 0} event{(user.assignedEvents?.length || 0) !== 1 ? 's' : ''}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {user.lastLogin ? new Date(user.lastLogin).toLocaleDateString('en', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Never'}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Edit"><IconButton size="small"><EditRoundedIcon sx={{ fontSize: 18 }} /></IconButton></Tooltip>
                      <Tooltip title="Deactivate"><IconButton size="small"><BlockRoundedIcon sx={{ fontSize: 18 }} /></IconButton></Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Invite Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>Invite New User</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
          <TextField label="Full Name" fullWidth size="small" />
          <TextField label="Email Address" fullWidth size="small" type="email" />
          <FormControl size="small" fullWidth>
            <InputLabel>Role</InputLabel>
            <Select label="Role" defaultValue="event_admin">
              <MenuItem value="super_admin">Super Admin</MenuItem>
              <MenuItem value="event_admin">Event Admin</MenuItem>
              <MenuItem value="viewer">Viewer</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={() => setDialogOpen(false)} color="inherit">Cancel</Button>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>Send Invitation</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
