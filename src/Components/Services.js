import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';
import serviceData from '../Data/serviceData';
const backgroundImage = require('../Image/dark-background-.png');

const Services = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(' ') + '...'
      : text;
  };

  return (
    <Box
      sx={{
        padding: { xs: '10px', md: '20px' },
        maxWidth: '100%',
        backgroundImage: `url(${backgroundImage})`, // Background image for the entire component
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Page Name */}
      <Typography variant="h4" sx={{  color: 'white', textAlign: 'start', fontSize:{xs:"25px", md:"40px" }, marginBottom:{xs:"5px", md:"10px"} }}>
        Our <span style={{ color: 'orange' }}>Services</span>
      </Typography>
      <Typography
        variant="h6"
        align="start"
        gutterBottom
        sx={{
          fontSize: { xs: '9px', md: '12px' }, // Responsive font size
          marginBottom: { xs: '20px', md: '30px' },
          color: "gray",
        }}
      >
        <i>"Empowering businesses with tailored software solutions that reflect innovation, reliability, and a commitment to excellence."
        </i>
      </Typography>

      {/* Service Cards */}
      <Grid container spacing={4}>
        {serviceData.map((service, index) => (
          <Grid item xs={12} key={index}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: { xs: '5px', md: '10px' },
                backgroundColor: '#252729', // Background color for the card
                color: 'white',
                borderRadius: '10px',
                animation: 'slideIn 0.7s ease-in-out',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                '@keyframes slideIn': {
                  '0%': { transform: 'translateX(-100%)' },
                  '100%': { transform: 'translateX(0)' },
                },
              }}
            >
              {/* Icon at the Top */}
              
              
              {/* Card Content */}
              <CardContent sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  justifyContent: 'start',
                  color: 'orange',
                  marginRight: '20px',
                }}
              >
                <Box sx={{ fontSize: "1px" , marginBottom: '10px' }}>{service.icon}</Box> {/* Adjusted icon size */}
              </Box>
                <Typography variant="h6" sx={{ fontSize: { xs: '16px', md: '20px' }, marginBottom: '10px' }}>
                  {service.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: { xs: '12px', md: '14px' },
                    lineHeight: { xs: '1.5', md: '1.75' },
                    color: 'gray',
                  }}
                >
                  {expanded[index] ? service.description : truncateText(service.description, 50)}
                </Typography>
                <Typography
                  onClick={() => toggleExpand(index)}
                  sx={{ 
                    color: 'graytext', 
                    fontSize: { xs: '12px', md: '14px' }, 
                    marginTop: '10px', 
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {expanded[index] ? 'Show Less' : 'Show More'}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
