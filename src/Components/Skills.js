import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import techStack from '../Data/techStackData';

const Skills = () => {
  return (
    <Box sx={{ padding: '30px', borderRadius: '10px' }}>
      <Grid container spacing={4}>
        {techStack.map((tech, index) => (
          <Grid
            item
            xs={6} // Adjusting grid size for extra small devices
            sm={4} // Adjusting grid size for small devices
            md={3} // Adjusting grid size for medium devices
            key={index}
            sx={{
              '@keyframes slideIn': {
                '0%': { transform: 'translateX(-100%)' },
                '100%': { transform: 'translateX(0)' },
              },
              animation: `slideIn 0.5s ease-in-out ${index * 0.1}s`,
            }}
          >
            <Card
              elevation={5}
              sx={{
                backgroundColor:"whitesmoke" ,
                textAlign: 'center',
                padding: '5px',
                width: {
                  xs: '90px', // Width for extra small devices
                  sm: '90px', // Width for small devices
                  md: '120px', // Width for medium devices
                },
                height: {
                  xs: '90px', // Height for extra small devices
                  sm: '90px', // Height for small devices
                  md: '120px', // Height for medium devices
                },
                margin: '0 auto',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: '0.3s',
                },
                borderRadius:5,
              }}
            >
              <CardContent sx={{ padding: '10px'}}>
                <Box
                  component="img"
                  src={tech.img}
                  alt={tech.name}
                  sx={{
                    height: {
                      xs: '30px', // Image height for extra small devices
                      sm: '35px', // Image height for small devices
                      md: '40px', // Image height for medium devices
                    },
                    marginBottom: '10px',
                  }}
                />
                <Typography
                  variant="body2"
                  color="textPrimary"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%', // To ensure it takes up the full height of the container
                  }}
                >
                  {tech.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
