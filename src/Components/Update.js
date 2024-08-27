import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Grid, Snackbar, useMediaQuery, Alert, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const backgroundImage = require("../Image/dark-background-.png"); // Replace with your background image path

const Update = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const showAlertAndNavigate = (message, path) => {
    setAlertMessage(message);
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate(path);
    }, 2000); // Adjust the delay as needed
  };

  const goToForm = () => {
    showAlertAndNavigate('Navigating to Project Form...', "/projectform");
  }

  const goToContact = () => {
    showAlertAndNavigate('Navigating to Contact Form...', "/ContactData");
  }

  const goToProjectTable = () => {
    showAlertAndNavigate('Navigating to Project Table...', "/ProjectTable");
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: isXs ? '10px' : '20px', // Adjust padding for xs devices
      }}
    >
      <Box
        sx={{
          backgroundColor: '#252729',
          padding: isXs ? '20px' : '30px', // Adjust padding for xs devices
          borderRadius: '10px',
          width: '100%', // Make the container width 100% to handle grid layout properly
        }}
      >
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              onClick={goToForm} 
              sx={{
                bgcolor: '#252729',
                borderColor:"orange",
                color:"white",
                width: '100%',
                height: isXs ? '40px' : '60px', // Adjust height for xs devices
                fontSize: isXs ? '14px' : '16px', // Adjust font size for xs devices
                padding: isXs ? '8px' : '16px', // Adjust padding for xs devices
                ':hover': { bgcolor: '#343638', borderColor:"orange" },
              }}
            >
              Go to Project Form
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              onClick={goToContact} 
              sx={{
                bgcolor: '#252729',
                borderColor:"orange",
                color:"white",
                width: '100%',
                height: isXs ? '40px' : '60px', // Adjust height for xs devices
                fontSize: isXs ? '14px' : '16px', // Adjust font size for xs devices
                padding: isXs ? '8px' : '16px', // Adjust padding for xs devices
                ':hover': { bgcolor: '#343638', borderColor:"orange"  },
              }}
            >
              Go to Contact Form
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button 
              variant="outlined" 
              onClick={goToProjectTable} 
              sx={{
                bgcolor: '#252729',
                borderColor:"orange",
                color:"white",
                width: '100%',
                height: isXs ? '40px' : '60px', // Adjust height for xs devices
                fontSize: isXs ? '14px' : '16px', // Adjust font size for xs devices
                padding: isXs ? '8px' : '16px', // Adjust padding for xs devices
                ':hover': { bgcolor: '#343638', borderColor:"orange"  },
              }}
            >
              Go to Project Table
            </Button>
          </Grid>
        </Grid>
      </Box>
      
      {/* Snackbar with Alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="info" sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Update;
