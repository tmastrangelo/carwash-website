import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Paper, TextField, MenuItem } from '@mui/material';
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

function Booking() {
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
      <Container maxWidth="sm" style={{ marginTop: '100px' }}>
        <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Book Your Appointment
          </Typography>
          <form>
            <TextField
              fullWidth
              label="Name"
              margin="normal"
              variant="outlined"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              variant="outlined"
              type="email"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              label="Phone"
              margin="normal"
              variant="outlined"
              type="tel"
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              select
              label="Select Service"
              margin="normal"
              variant="outlined"
              defaultValue=""
              InputLabelProps={{ style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            >
              <MenuItem value="basic">Basic Wash</MenuItem>
              <MenuItem value="deluxe">Deluxe Wash</MenuItem>
              <MenuItem value="premium">Premium Wash</MenuItem>
              <MenuItem value="eco">Eco Wash</MenuItem>
            </TextField>
            <TextField
              fullWidth
              label="Preferred Date"
              margin="normal"
              variant="outlined"
              type="date"
              InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <TextField
              fullWidth
              label="Preferred Time"
              margin="normal"
              variant="outlined"
              type="time"
              InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
            <Button
              variant="contained"
              color="secondary"
              size="large"
              type="submit"
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
      <Box component="footer" py={3} textAlign="center" bgcolor="#990000" color="white">
        <Typography variant="body1">&copy; 2024 Mobile Car Detailing. All rights reserved.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Booking;