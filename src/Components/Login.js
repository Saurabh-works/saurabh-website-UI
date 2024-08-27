import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  Snackbar,
  Alert as MuiAlert,
  useMediaQuery,
  Avatar,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const backgroundImage = require("../Image/dark-background-.png");

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();

  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // const response = await axios.post(`${window.location.origin}/api/login`, { id, password });
      const response = await axios.post('saurabh-website-api.vercel.app/api/login', { id, password });
      if (response.data.success) {
        setAlert({ message: "Login Successful.. Welcome Saurabh...!", severity: "success" });
        setTimeout(() => {
          navigate("/update");
        }, 2000);
      } else {
        setAlert({ message: "Invalid credentials, please try again.", severity: "error" });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setAlert({ message: "An error occurred during login.", severity: "error" });
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

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
        padding: isXs ? '0 10px' : '0', // Horizontal padding for extra-small devices
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <Card
          sx={{
            width: isXs ? "100%" : isSm ? 300 : 350,
            bgcolor: '#252729',
            color: '#fff',
            borderRadius: 3,
            boxShadow: 3,
            padding: isXs ? '20px' : isSm ? '20px' : '30px',
            margin: isXs ? '10px' : 'auto', // Add margin for extra-small devices
          }}
        >
          <CardContent sx={{ textAlign: 'center' }}>
            <Avatar sx={{ margin: '0 auto', bgcolor: 'orange' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography 
              variant="h5" 
              sx={{ 
                marginTop: 2, 
                marginBottom: 3, 
                fontSize: isXs ? '20px' : isSm ? '22px' : '24px' 
              }}
            >
              Login
            </Typography>
            <form onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="ID"
                variant="filled"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
                sx={{
                  marginBottom: 2,
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  fontSize: isXs ? '10px' : '16px',
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="filled"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{
                  marginBottom: 2,
                  input: { color: '#fff' },
                  label: { color: '#bbb' },
                  fontSize: isXs ? '10px' : '16px',
                }}
              />
              <Button
                type="submit"
                variant="outlined" 
                color="secondary"
                fullWidth
                sx={{
                  bgcolor: '#252729',
                  color:"white",
                  borderColor: 'orange',
                  ':hover': { bgcolor: '#343638', borderColor:"orange" },
                  fontSize: isXs ? '10px' : '16px',
                  padding: isXs ? '6px' : '12px',
                }}
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {alert && (
        <Snackbar
          open={!!alert}
          autoHideDuration={8000}
          onClose={handleCloseAlert}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <MuiAlert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
            {alert.message}
          </MuiAlert>
        </Snackbar>
      )}
    </Box>
  );
};

export default Login;
