import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import internshipData from '../Data/internshipData';

const Experience = () => {
  return (
    <Box sx={{ padding: { xs: '10px', md: '20px' }, borderRadius: '10px' }}>
      {internshipData.map((internship, index) => (
        <Box
          key={index}
          sx={{
            marginBottom: { xs: '15px', md: '20px' },
            padding: { xs: '20px', md: '30px' },
            backgroundColor: '#252729',
            borderRadius: '10px',
            position: 'relative',
            overflow: 'hidden',
            animation: 'slideIn 1s ease-in-out',
            '@keyframes slideIn': {
              '0%': { transform: 'translateX(-100%)' },
              '100%': { transform: 'translateX(0)' },
            },
          }}
        >
          
          <Typography variant="h5" color="white" sx={{ fontSize: { xs: '18px', md: '24px' } }}>
            {internship.title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{
              position: { xs: 'relative', md: 'absolute' },
              top: { md: '30px' },
              right: { md: '20px' },
              marginTop: { xs: '10px', md: '0' },
              color: 'gray',
              // padding: '2px 5px',
              padding :{md: "2px, 5px", xs:"1px, 2px"},
              fontSize:{xs: "10px", sm:"15px"},
              borderBottom:{xs:"none" , sm:'1px solid orange'},
              borderRadius: '5px',
              textAlign: { xs: 'left', md: 'unset' },
            }}
          >
            {internship.duration}
          </Typography>
          <Typography
            variant="h6"
            color="textSecondary"
            sx={{
              fontSize: { xs: '16px', md: '20px' },
              marginBottom: { xs: '5px', md: '10px' },
            }}
          >
            {internship.company}, {internship.location}
          </Typography>
          <Divider
            sx={{
              backgroundColor: 'white',
              marginY: '10px',
              width: '50%',
              display: { xs: 'none', md: 'block' },
            }}
          />
          <ul style={{ paddingLeft: '15px' }}>
            {internship.responsibilities.map((responsibility, i) => (
              <li key={i} style={{ color: 'gray', fontSize: { xs: '14px', md: '16px' } }}>
                {responsibility}
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default Experience;
