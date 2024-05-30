import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Container, Paper, TextField, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import emailjs from 'emailjs-com';

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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_qma95bt', 'template_7o38blp', formData, 'GHI4nfR5XmjN31sUr')
      .then((result) => {
        console.log(result.text);
        alert("Your booking request has been sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred while sending your booking request. Please try again.");
      });
  };

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
            Sunshine Detailing
          </Typography>
          <Button color="inherit" href="/services">Services</Button>
          <Button color="inherit" href="/booking">Book Now</Button>
        </Toolbar>
      </AppBar>
      <Box className="background-image" style={{ backgroundImage: "url('https://example.com/booking-background.jpg')" }}>
        <Box className="background-overlay" />
        <Box className="content">
          <Container maxWidth="sm" style={{ marginTop: '100px' }}>
            <Paper elevation={3} style={{ padding: '20px', backgroundColor: '#333' }}>
              <Typography variant="h4" component="h1" gutterBottom>
                Request an Appointment
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  margin="normal"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  label="Phone"
                  margin="normal"
                  variant="outlined"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  InputLabelProps={{ style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  select
                  label="Select Service"
                  margin="normal"
                  variant="outlined"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true, style: { color: '#fff' } }}
                  InputProps={{ style: { color: '#fff' } }}
                />
                <TextField
                  fullWidth
                  label="Preferred Time"
                  margin="normal"
                  variant="outlined"
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
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
        </Box>
      </Box>
      <Box component="footer" py={3} textAlign="center" bgcolor="#990000" color="white">
        <Typography variant="body1">&copy; 2024 Sunshine Detailing. All rights reserved.</Typography>
      </Box>
    </ThemeProvider>
  );
}

export default Booking;