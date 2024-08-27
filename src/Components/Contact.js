import React, { useState } from 'react';
import { Box, Container, Paper, Typography, TextField, Button, Alert } from '@mui/material';
import { keyframes } from '@mui/system';
import axios from 'axios';

// Import background image
const backgroundImage = require('../Image/dark-background-.png');

// Animation for paragraphs
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    inquiry: ''
  });

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // const response = await axios.post(`${window.location.origin}/api/contact`, form);
      const response = await axios.post('https://saurabh-website-api.vercel.app/api/contact', form);
      if (response.status === 201) {
        setSuccess(true);
        handleClear();
        setTimeout(() => setSuccess(false), 3000); // Hide success message after 3 seconds
      }
    } catch (err) {
      setError('Failed to submit the form. Please try again.');
    }
  };

  const handleClear = () => {
    setForm({
      name: '',
      email: '',
      contact: '',
      inquiry: ''
    });
  };

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}
    >
      {success && (
        <Alert 
          severity="success" 
          sx={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: 'fit-content'
          }}
        >
          Form submitted successfully!
        </Alert>
      )}
      {error && (
        <Alert 
          severity="error" 
          sx={{
            position: 'fixed',
            top: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            width: 'fit-content'
          }}
        >
          {error}
        </Alert>
      )}
      <Container>
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: '#252729',
            color: 'white',
            maxWidth: '600px',
            margin: 'auto',
            animation: `${fadeIn} 1s ease-out`, // Apply fade-in animation
          }}
        >
          <Typography 
            variant="h4" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '25px', md: '34px' }, // Responsive font size
            }}
          >
            Contact <span style={{color:"orange"}}>Us</span>
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            gutterBottom
            sx={{
              fontSize: { xs: '9px', md: '12px' }, // Responsive font size
              marginBottom: '20px',
              color:"gray"
            }}
          >
            <i>"Get in touch to turn your ideas into reality"</i>
          </Typography>
          
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: 'black' } // Label color
              }}
              InputProps={{
                style: { color: 'white' }, // Default text color (white)
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'gray', // Border color on focus
                    },
                  },
                  '& .MuiInputBase-input': {
                    backgroundColor: '#252729', // Background color
                    color: 'white', // Default text color (white)
                  },
                  '&:focus-within .MuiInputBase-input': {
                    color: 'gray', // Text color on focus (gray)
                  }
                }
              }}
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: 'black' } // Label color
              }}
              InputProps={{
                style: { color: 'white' }, // Default text color (white)
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'gray', // Border color on focus
                    },
                  },
                  '& .MuiInputBase-input': {
                    backgroundColor: '#252729', // Background color
                    color: 'white', // Default text color (white)
                  },
                  '&:focus-within .MuiInputBase-input': {
                    color: 'gray', // Text color on focus (gray)
                  }
                }
              }}
              required
            />
            <TextField
              label="Contact"
              name="contact"
              type="tel"
              value={form.contact}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: 'black' } // Label color
              }}
              InputProps={{
                style: { color: 'white' }, // Default text color (white)
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'gray', // Border color on focus
                    },
                  },
                  '& .MuiInputBase-input': {
                    backgroundColor: '#252729', // Background color
                    color: 'white', // Default text color (white)
                  },
                  '&:focus-within .MuiInputBase-input': {
                    color: 'gray', // Text color on focus (gray)
                  }
                }
              }}
              required
            />
            <TextField
              label="Inquiry"
              name="inquiry"
              value={form.inquiry}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              color="primary"
              InputLabelProps={{
                style: { color: 'black' } // Label color
              }}
              InputProps={{
                style: { color: 'white' }, // Default text color (white)
                sx: {
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'white', // Border color
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: 'gray', // Border color on focus
                    },
                  },
                  '& .MuiInputBase-input': {
                    backgroundColor: '#252729', // Background color
                    color: 'white', // Default text color (white)
                  },
                  '&:focus-within .MuiInputBase-input': {
                    color: 'gray', // Text color on focus (gray)
                  }
                }
              }}
              multiline
              rows={4}
              required
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '20px',
              }}
            >
              <Button
                variant="outlined"
                type="submit"
                sx={{
                  color:"orange",
                  borderColor: "orange",
                  ":hover":{
                    backgroundColor:"#343638",
                    borderColor:"orange"
                  }
                }}
              >
                Submit
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClear}
              >
                Clear
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Contact;
