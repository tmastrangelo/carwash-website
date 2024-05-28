import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Grid, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#990000',
    },
    secondary: {
      main: '#cc0000',
    },
    background: {
      default: '#1a1a1a',
      paper: '#333',
    },
    text: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
});

function Services() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => window.location.href = '/'}
          >
            Mobile Car Detailing
            </Typography>
      <Button color="inherit" href="/services">Services</Button>
      <Button color="inherit" href="/booking">Book Now</Button>
    </Toolbar>
  </AppBar>
  <Container maxWidth="md" style={{ marginTop: '100px' }}>
    <Box textAlign="center" my={4}>
      <Typography variant="h2" component="h1" gutterBottom>
        Our Services
      </Typography>
    </Box>
    <Grid container spacing={3} my={4}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Basic Wash
          </Typography>
          <Typography variant="body1" component="p">
            Includes exterior hand wash, drying, and tire cleaning.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Deluxe Wash
          </Typography>
          <Typography variant="body1" component="p">
            Includes Basic Wash plus interior vacuuming and window cleaning.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Premium Wash
          </Typography>
          <Typography variant="body1" component="p">
            Includes Deluxe Wash plus waxing and interior detailing.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Eco Wash
          </Typography>
          <Typography variant="body1" component="p">
            Our environmentally friendly option using waterless cleaning technology.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
  <Box component="footer" py={3} textAlign="center" bgcolor="#990000" color="white">
    <Typography variant="body1">&copy; 2024 Mobile Car Detailing. All rights reserved.</Typography>
  </Box>
</ThemeProvider>
  );
}
export default Services;