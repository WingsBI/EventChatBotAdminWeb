import { useState } from 'react';
import {
  Box, Card, Typography, Button, Chip, alpha,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Dialog, DialogTitle, DialogContent, DialogActions, TextField,
  Select, MenuItem, FormControl, InputLabel, IconButton, Tooltip,
} from '@mui/material';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DescriptionRoundedIcon from '@mui/icons-material/DescriptionRounded';
const exportRecords: any[] = [];

const typeLabels: Record<string, string> = {
  conversations: 'Conversation Logs',
  analytics: 'Analytics Summary',
  queries: 'User Queries',
  exhibitor: 'Exhibitor Report',
  unanswered: 'Unanswered Questions',
};

const formatIcons: Record<string, string> = {
  csv: '📊', excel: '📗', pdf: '📕',
};

export default function Exports() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="body2">{exportRecords.length} exports generated</Typography>
        <Button variant="contained" startIcon={<AddRoundedIcon />} onClick={() => setDialogOpen(true)}>
          New Export
        </Button>
      </Box>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Date Range</TableCell>
                <TableCell>Format</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Created</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {exportRecords.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={8} align="center" sx={{ py: 6 }}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600 }}>No Data Found</Typography>
                  </TableCell>
                </TableRow>
              ) : (
                exportRecords.map((exp) => (
                  <TableRow key={exp.id} hover>
                    <TableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <DescriptionRoundedIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
                        <Typography sx={{ fontWeight: 600, fontSize: '0.85rem' }}>{typeLabels[exp.type]}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell><Typography variant="body2">{exp.eventName}</Typography></TableCell>
                    <TableCell><Typography variant="body2">{exp.dateRange}</Typography></TableCell>
                    <TableCell>
                      <Chip label={`${formatIcons[exp.format]} ${exp.format.toUpperCase()}`} size="small" variant="outlined" sx={{ fontWeight: 600, fontSize: '0.7rem' }} />
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={exp.status.charAt(0).toUpperCase() + exp.status.slice(1)}
                        size="small"
                        sx={{
                          fontWeight: 600, fontSize: '0.7rem',
                          bgcolor: exp.status === 'completed' ? alpha('#10b981', 0.1) : exp.status === 'processing' ? alpha('#3b82f6', 0.1) : alpha('#ef4444', 0.1),
                          color: exp.status === 'completed' ? '#059669' : exp.status === 'processing' ? '#2563eb' : '#dc2626',
                        }}
                      />
                    </TableCell>
                    <TableCell><Typography variant="body2">{exp.fileSize}</Typography></TableCell>
                    <TableCell>
                      <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                        {new Date(exp.createdAt).toLocaleDateString('en', { month: 'short', day: 'numeric' })}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {exp.status === 'completed' && (
                        <Tooltip title="Download">
                          <IconButton size="small" color="primary"><DownloadRoundedIcon sx={{ fontSize: 18 }} /></IconButton>
                        </Tooltip>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* New Export Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="sm" fullWidth PaperProps={{ sx: { borderRadius: 3 } }}>
        <DialogTitle sx={{ fontWeight: 700 }}>Create New Export</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: '16px !important' }}>
          <FormControl size="small" fullWidth>
            <InputLabel>Export Type</InputLabel>
            <Select label="Export Type" defaultValue="conversations">
              <MenuItem value="conversations">Conversation Logs</MenuItem>
              <MenuItem value="analytics">Analytics Summary</MenuItem>
              <MenuItem value="queries">User Queries</MenuItem>
              <MenuItem value="exhibitor">Exhibitor Report</MenuItem>
              <MenuItem value="unanswered">Unanswered Questions</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>Format</InputLabel>
            <Select label="Format" defaultValue="csv">
              <MenuItem value="csv">CSV</MenuItem>
              <MenuItem value="excel">Excel</MenuItem>
              <MenuItem value="pdf">PDF</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" fullWidth>
            <InputLabel>Event</InputLabel>
            <Select label="Event" defaultValue="evt-001">
              <MenuItem value="evt-001">Gastech 2026</MenuItem>
              <MenuItem value="evt-004">Tech Connect Asia</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField label="Start Date" type="date" fullWidth size="small" InputLabelProps={{ shrink: true }} />
            <TextField label="End Date" type="date" fullWidth size="small" InputLabelProps={{ shrink: true }} />
          </Box>
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 3 }}>
          <Button onClick={() => setDialogOpen(false)} color="inherit">Cancel</Button>
          <Button variant="contained" onClick={() => setDialogOpen(false)}>Generate Export</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
