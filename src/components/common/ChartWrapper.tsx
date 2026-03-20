import { useState } from 'react';
import { Card, Box, Typography, IconButton, Dialog, DialogContent, alpha } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

interface ChartWrapperProps {
  title: string | React.ReactNode;
  subtitle?: React.ReactNode;
  data?: any[] | null;
  children: React.ReactNode;
  height?: number | string;
  disableEmptyState?: boolean;
}

export default function ChartWrapper({ title, subtitle, data, children, height = 280, disableEmptyState = false }: ChartWrapperProps) {
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const isEmpty = !disableEmptyState && (!data || data.length === 0);

  const renderContent = (isFull: boolean) => (
    <Box sx={{ p: isFull ? 3 : 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: isFull ? 4 : 2 }}>
        <Box>
          <Typography variant="h6" sx={{ mb: 0.25, fontWeight: 700, color: 'text.primary', fontSize: isFull ? '1.5rem' : '0.9rem' }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', fontSize: isFull ? '1rem' : '0.75rem' }}>
              {subtitle as any}
            </Typography>
          )}
        </Box>
        <IconButton size="large" onClick={() => setIsFullScreen(!isFull)} sx={{ mt: -0.5, mr: -0.5 }}>
          {isFull ? <FullscreenExitIcon /> : <FullscreenIcon fontSize="small" />}
        </IconButton>
      </Box>
      <Box sx={{ flexGrow: 1, position: 'relative', minHeight: isFull ? 0 : height }}>
        {isEmpty ? (
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            bgcolor: (t) => alpha(t.palette.divider, 0.04), 
            borderRadius: 1 
          }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, fontSize: isFull ? '1.25rem' : '0.875rem' }}>
              No Data Found
            </Typography>
          </Box>
        ) : (
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}>
            {/* If fullscreen, we only want to render children inside the Dialog, otherwise inside the Card */}
            {(isFull === isFullScreen) ? children : null}
          </Box>
        )}
      </Box>
    </Box>
  );

  return (
    <>
      <Card sx={{ borderRadius: 1, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {renderContent(false)}
      </Card>
      
      <Dialog 
        open={isFullScreen} 
        onClose={() => setIsFullScreen(false)}
        maxWidth="xl"
        fullWidth
        PaperProps={{
          sx: {
            height: '90vh',
            borderRadius: 3,
            p: 1,
            display: 'flex',
            flexDirection: 'column'
          }
        }}
      >
        <DialogContent sx={{ p: 0, flexGrow: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {renderContent(true)}
        </DialogContent>
      </Dialog>
    </>
  );
}
