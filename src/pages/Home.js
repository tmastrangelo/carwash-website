import React from 'react';
import { useNavigate } from 'react-router-dom';
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

function Home() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            Mobile Car Detailing
          </Typography>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/booking">Book Now</Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          height: '100vh',
          backgroundImage: 'url(https://images.squarespace-cdn.com/content/v1/5fbc309b53dd246a388c07f0/1687500861999-YKA9FX0TAQO9N7QG2A3O/car+detailing+columbus+ohio)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          color: '#fff',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        />
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Mobile Car Detailing
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Your trusted partner in keeping your vehicle clean and shining.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => navigate('/booking')}
            sx={{ marginTop: '20px' }}
          >
            Book Now
          </Button>
        </Box>
      </Box>
      <Container maxWidth="md" sx={{ marginTop: '20px' }}>
        <Grid container spacing={3} my={4}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#333' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" component="p">
                At Mobile Car Detailing, we pride ourselves on providing top-quality car cleaning services. Our team of professionals ensures that every vehicle leaves our premises looking brand new. We use the latest technology and eco-friendly products to deliver exceptional results.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: '20px', backgroundColor: '#333' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Contact Us
              </Typography>
              <Typography variant="body1" component="p">
                Have questions? Get in touch with us at (123) 456-7890 or visit us at 123 Carwash Lane, Clean City.
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

export default Home;