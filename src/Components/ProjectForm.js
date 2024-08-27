import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Snackbar, Alert, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';

const backgroundImage = require("../Image/dark-background-.png"); // Replace with your background image path

const ProjectForm = () => {
  const [form, setForm] = useState({
    name: '',
    description: '',
    techStack: '',
    imageUrl: '',
    githubLink: '',
    testLink: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.post(`${window.location.origin}/api/projects`, form)
    axios.post('saurabh-website-api.vercel.app/api/projects', form)
      .then(response => {
        console.log('Project added:', response.data);
        setForm({
          name: '',
          description: '',
          techStack: '',
          imageUrl: '',
          githubLink: '',
          testLink: '',
        });
        setAlertMessage("Data Added Successfully...");
        setOpenSnackbar(true);
      })
      .catch(error => {
        console.error(error);
        setAlertMessage("Failed to Add Data...");
        setOpenSnackbar(true);
      });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: isXs ? '10px' : '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          width: '100%',
          margin: 'auto',
          padding: isXs ? '10px' : '20px',
          backgroundColor: '#252729',
          color: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
        }}
      >
        <Typography variant="h5" align="center" gutterBottom sx={{fontSize:isXs ? "15px" : "23px", color:"orange"}}>
          <span style={{color:"white"}}>Add New </span> Project
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Project Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
            required
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <TextField
            label="Tech Stack"
            name="techStack"
            value={form.techStack}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <TextField
            label="Image URL"
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <TextField
            label="GitHub Link"
            name="githubLink"
            value={form.githubLink}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <TextField
            label="Test Link (optional)"
            name="testLink"
            value={form.testLink}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ marginBottom: isXs ? '10px' : '20px' }}
          />
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button type="submit" variant="outlined" sx={{ width: '100%', color:"white", borderColor:"orange", ':hover': { bgcolor: '#343638',  borderColor:"orange" }, }}>
              Add Project
            </Button>
          </Box>
        </form>
      </Box>

      {/* Snackbar with Alert */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={alertMessage.includes("Failed") ? "error" : "success"} sx={{ width: '100%' }}>
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProjectForm;
