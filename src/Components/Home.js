import React from 'react';
import { styled } from '@mui/system';
import { Typography, Box, useTheme, useMediaQuery, shadows  } from '@mui/material';
import {ReactTyped} from 'react-typed';

const bgImage = require("../Image/dark-background-.png");
const profileImage = require("../Image/Saurabh_picture_1-removebg-preview.png");

const navbarHeight = 50;  // Adjust this to match your actual navbar height
const footerHeight = 20;  // Adjust this to match your actual footer height

const BackgroundContainer = styled(Box)(({ theme }) => ({
  height: `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`,  // Adjust height based on navbar and footer
  background: `url(${bgImage}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const Content = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: theme.spacing(4),
  // margin: '0 auto',
  maxWidth: '1400px',
  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
}));

const TextSection = styled(Box)(({ theme }) => ({
  width: '100%',
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  animation: 'fadeInUp 1s ease-out',
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    width: '50%',
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  animation: 'fadeInUp 1s ease-out',
  '@keyframes fadeInUp': {
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
  [theme.breakpoints.up('md')]: {
    width: '50%',
    marginRight: theme.spacing(30),
  },
}));

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 300,
  borderRadius: '8px',
  borderBottom:"1px solid orange",
  [theme.breakpoints.down('sm')]: {
    maxWidth: 200,
  },
}));

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <BackgroundContainer>
      <Content>
        <ImageSection>
          <Image src={profileImage} alt="Profile" />
        </ImageSection>
        <TextSection>
          <div style={{ color: 'white', marginTop: '10px', fontSize: isMobile ? "20px" : "30px" }}>
            <ReactTyped
              strings={['Software Developer...', 'MERN Stack Developer...', 'Web Designer...']}
              typeSpeed={50}
              backSpeed={25}
              backDelay={1000}
              loop
            />
          </div>
          <Typography variant="h2" color="white" gutterBottom sx={{ fontSize: isMobile ? 35 : 80 }}>
            Hey ! I'm <span style={{ color: 'orange' }}>Saurabh</span>
          </Typography>
          <Typography variant="h4" color="white" sx={{ fontSize: isMobile ? 20 : 40 }}>
            From Wagholi, Pune
          </Typography>
          <Typography variant="h4" color="gray" sx={{ fontSize: isMobile ? 10 : 20, marginTop:2, textAlign:"end" }}>
            ~ saurabhshindework@gmail.com
          </Typography>
        </TextSection>
      </Content>
    </BackgroundContainer>
  );
};

export default Home;
