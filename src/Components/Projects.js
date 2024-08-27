import React, { useState, useEffect } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';
const bgImage = require('../Image/dark-background-.png');


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // axios.get(`${window.location.origin}/api/projects`)
    axios.get('https://saurabh-website-api.vercel.app/api/projects')
      .then(response => setProjects(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <Box sx={{ backgroundImage: `url(${bgImage})`, padding: { xs: '20px 10px', sm: '20px 20px', md:"20px 20px" } }}>
      <Typography
        variant="h4"
        align="start"
        gutterBottom
        sx={{
          fontSize: { xs: '25px', md: '34px' }, // Responsive font size
          color: "white",
        }}
      >
        My <span style={{ color: "orange" }}>Projects</span>
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
        <i>"Driven by passion, I design and develop innovative solutions that seamlessly blend functionality, creativity, and precision."
        </i>
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={project._id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ProjectCard = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const displayedDescription = showMore ? project.description : project.description.split(' ').slice(0, 10).join(' ') + '...';

  return (
    <Card sx={{
      bgcolor: "#252729",
      color: "white",
      height: { xs: 'auto', md: '400px' },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
      '&:hover': {
        transform: 'translateY(-10px)', // Move the card upwards
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Add shadow on hover
      },
    }}>

      <CardMedia
        component="img"
        image={project.imageUrl}
        alt={project.name}
        sx={{ height: { xs: '120px', sm: '140px', md: "160px" } }}
      />
      <CardContent sx={{ padding: { xs: '10px', sm: '16px' } }}>
        <Typography variant="h5" sx={{ fontSize: { xs: '16px', sm: '18px' } }}>{project.name}</Typography>
        <Typography variant="body2" color="gray" sx={{ fontSize: { xs: '12px', sm: '14px' } }}>
          {displayedDescription}
          <Button variant="text" onClick={toggleShowMore} sx={{ color: 'gray', padding: 0 }}>
            {showMore ? '...Show less' : 'Show more'}
          </Button>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '10px', fontSize: { xs: '12px', sm: '14px' } }}>
          Tech Stack: {Array.isArray(project.techStack) ? project.techStack.join(', ') : project.techStack}
        </Typography>
      </CardContent>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: { xs: '5px 10px', sm: '10px 15px' },
        marginTop: 'auto',
      }}>
        <Button href={project.githubLink} target="_blank" variant="outlined" color="secondary" sx={{
          color: 'orange',
          borderColor: 'orange',
          fontSize: { xs: '10px', sm: '12px' },
          '&:hover': {
            borderColor: '#e67e22',
            color: '#e67e22',
          }
        }}>GitHub</Button>
        {project.testLink && <Button href={project.testLink} target="_blank" variant="outlined" color="secondary" sx={{
          color: 'secondary',
          fontSize: { xs: '10px', sm: '12px' },
          '&:hover': {
            borderColor: '#8662c4',
            color: '#8662c4',
          }
        }}>Test</Button>}
      </Box>
    </Card>
  );
};

export default Projects;
