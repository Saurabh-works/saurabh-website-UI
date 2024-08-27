import React, { useEffect } from 'react';
import { Box, Container, Paper, Typography, Button } from '@mui/material';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';
import { keyframes } from '@mui/system';

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

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop(); // Get the current route

  // Use useEffect to navigate to the default route on component mount
  useEffect(() => {
    if (currentPath === '' || currentPath === 'about') {
      navigate('education'); // Navigate to the "education" route by default
    }
  }, [navigate, currentPath]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px 0',
      }}
    >
      <Container>
        <Paper
          elevation={3}
          sx={{
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: "black",
            animation: `${fadeIn} 1s ease-out`, // Apply fade-in animation
          }}
        >
          <Typography 
            variant="h4" 
            align="start" 
            color={'white'} 
            gutterBottom
            sx={{
              fontSize: { xs: '25px', md: '34px' }, // Responsive font size
            }}
          >
              About <span style={{color:"orange"}}>Me</span>
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            color={'white'}
            sx={{
              fontSize: { xs: '13px', md: '16px' }, // Responsive font size
              animation: `${fadeIn} 1s ease-out`, // Apply fade-in animation
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
            }}
          >
            I'm Saurabh Shinde, a dedicated Software Developer with a strong focus on the MERN stack, React, JavaScript, and Java. I’m passionate about developing innovative and efficient software solutions that meet real-world needs. With a CGPA of 9.05 in Computer Engineering from JSPM's BSIOTR, I have a solid technical foundation complemented by hands-on experience.
          </Typography>
          <Typography 
            variant="body1" 
            paragraph 
            color={'white'}
            sx={{
              fontSize: { xs: '13px', md: '16px' }, // Responsive font size
              animation: `${fadeIn} 1s ease-out`, // Apply fade-in animation
              animationDelay: '0.3s',
              animationFillMode: 'forwards',
            }}
          >
            In addition to my technical expertise, I thrive in collaborative environments and am well-versed in version control, ensuring smooth and seamless project integration. I'm currently open to exciting opportunities in Software Engineering—whether it’s Frontend, Backend, or Full Stack roles. I’m also ready to take on projects and provide services in web development, Android development, and web design, eager to apply my skills to help businesses grow and succeed.
          </Typography>
        </Paper>
        
        <Box sx={{ marginTop: '20px', textAlign: 'center', marginBottom: "20px" }}>
          <Button 
            onClick={() => navigate('education')} 
            sx={{ 
              margin: { xs: "0 2px", md: '0 20px' }, 
              color: "white", 
              fontSize: { xs: '12px', md: '16px' }, // Responsive font size
              borderBottom: currentPath === 'education' ? '2px solid orange' : '2px solid transparent',
              '&:hover': { 
                borderBottom: '2px solid orange',
                transition: 'border-bottom 0.3s ease-in-out',
              } 
            }}
          >
            Education
          </Button>
          <Button 
            onClick={() => navigate('experience')} 
            sx={{ 
              margin: { xs: "0 2px", md: '0 20px' }, 
              color: "white", 
              fontSize: { xs: '12px', md: '16px' }, // Responsive font size
              borderBottom: currentPath === 'experience' ? '2px solid orange' : '2px solid transparent',
              '&:hover': { 
                borderBottom: '2px solid orange',
                transition: 'border-bottom 0.3s ease-in-out',
              } 
            }}
          >
            Experience
          </Button>
          <Button 
            onClick={() => navigate('skills')} 
            sx={{ 
              margin: { xs: "0 2px", md: '0 20px' }, 
              color: "white", 
              fontSize: { xs: '12px', md: '16px' }, // Responsive font size
              borderBottom: currentPath === 'skills' ? '2px solid orange' : '2px solid transparent',
              '&:hover': { 
                borderBottom: '2px solid orange',
                transition: 'border-bottom 0.3s ease-in-out',
              } 
            }}
          >
            Skills
          </Button>
        </Box>

        <Outlet />
      </Container>
    </Box>
  );
};

export default About;
