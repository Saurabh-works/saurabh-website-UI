import React, { useState, useEffect } from 'react';
import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import axios from 'axios';

const backgroundImage = require("../Image/dark-background-.png"); // Replace with your background image path

const ContactData = () => {
  const [contacts, setContacts] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      // const response = await axios.get(`${window.location.origin}/api/contact`);
      const response = await axios.get('https://saurabh-website-api.vercel.app/api/contact');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      // await axios.delete(`${window.location.origin}/api/contact/${id}`);
      await axios.delete(`https://saurabh-website-api.vercel.app/api/contact/${id}`);
      fetchContacts(); // Refresh the list after deletion
      setSnackbarMessage('Contact deleted successfully!');
      setSnackbarSeverity('success');
      setOpenSnackbar(true);
    } catch (error) {
      console.error('Error deleting contact:', error);
      setSnackbarMessage('Failed to delete contact.');
      setSnackbarSeverity('error');
      setOpenSnackbar(true);
    }
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
        padding: { xs: '10px', sm: '20px', md: '30px' },
      }}
    >
      <Container>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontSize: { xs: '24px', md: '34px' }, // Responsive font size
            marginBottom: '20px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Contact <span style={{ color: 'orange' }}>Data</span>
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: '#252729' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Name</TableCell>
                <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Email</TableCell>
                <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Contact</TableCell>
                <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Inquiry</TableCell>
                <TableCell sx={{ color: 'orange', backgroundColor: '#252729', fontSize: '20px' }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact._id}>
                  <TableCell sx={{ color: 'white' }}>{contact.name}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.email}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.contact}</TableCell>
                  <TableCell sx={{ color: 'white' }}>{contact.inquiry}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      onClick={() => handleDelete(contact._id)}
                      sx={{
                        width: { xs: '100%', sm: 'auto' }, // Responsive width
                        marginTop: { xs: '10px', sm: '0' }, // Margin for small screens
                        color: 'orange',
                        borderColor: 'orange',
                        ':hover': { bgcolor: '#343638', borderColor:"orange"  },
                      }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbarSeverity}
            sx={{ width: '100%' }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default ContactData;
