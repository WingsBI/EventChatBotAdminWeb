import {
  Box, Card, CardContent, Typography, Grid, TextField, Button,
  Switch, FormControlLabel, Avatar, MenuItem,
} from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';

export default function Settings() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
      {/* Profile */}
      <Card sx={{ borderRadius: 1 }}>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>Profile Settings</Typography>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            <Avatar sx={{ width: 64, height: 64, bgcolor: 'primary.main', fontSize: '1.25rem', fontWeight: 700, borderRadius: 1.5 }}>RK</Avatar>
            <Grid container spacing={2} sx={{ flex: 1 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField label="Full Name" defaultValue="Rajesh Kumar" fullWidth size="small" sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField label="Email" defaultValue="rajesh@wingsbi.com" fullWidth size="small" type="email" sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField label="Organization" defaultValue="WingsBI Technology" fullWidth size="small" sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <TextField label="Role" defaultValue="Super Admin" fullWidth size="small" disabled sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }} />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card sx={{ borderRadius: 1 }}>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 700 }}>Notification Preferences</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <FormControlLabel control={<Switch defaultChecked size="small" />} label={<Typography variant="body2">Email notifications for system alerts</Typography>} />
            <FormControlLabel control={<Switch defaultChecked size="small" />} label={<Typography variant="body2">Post-event summary notifications</Typography>} />
            <FormControlLabel control={<Switch size="small" />} label={<Typography variant="body2">Weekly analytics digest</Typography>} />
            <FormControlLabel control={<Switch defaultChecked size="small" />} label={<Typography variant="body2">High unanswered query rate alerts</Typography>} />
          </Box>
        </CardContent>
      </Card>

      {/* System */}
      <Card sx={{ borderRadius: 1 }}>
        <CardContent sx={{ p: 2 }}>
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 700 }}>System Preferences</Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Default Language" defaultValue="English" fullWidth size="small" select sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }}>
                {['English', 'Hindi', 'French', 'German', 'Arabic', 'Spanish', 'Japanese'].map((l) => (
                  <MenuItem key={l} value={l} sx={{ fontSize: '0.85rem' }}>{l}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField label="Time Zone" defaultValue="Asia/Kolkata (IST)" fullWidth size="small" sx={{ '& .MuiInputBase-root': { borderRadius: 1.5 } }} />
            </Grid>
          </Grid>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
            <FormControlLabel control={<Switch defaultChecked size="small" />} label={<Typography variant="body2">Enable dark mode for dashboard</Typography>} />
            <FormControlLabel control={<Switch defaultChecked size="small" />} label={<Typography variant="body2">Auto-refresh analytics data</Typography>} />
          </Box>
        </CardContent>
      </Card>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="contained" size="small" startIcon={<SaveOutlinedIcon />} sx={{ textTransform: 'none', borderRadius: 1.5 }}>Save Settings</Button>
      </Box>
    </Box>
  );
}
