import React from 'react';
import { styled, useTheme } from '@mui/system';
import { Box, Typography, IconButton, useMediaQuery } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const bgImage = require("../Image/dark-background-.png");


const FooterContainer = styled(Box)(({ theme }) => ({
  background: `url(${bgImage}) no-repeat center center fixed`,
  // backgroundSize: 'cover',
  color: 'white',
  position: 'relative',
  bottom: 0,
  width: '100%',
  textAlign: 'center',
  paddingBottom: "20px",
}));

const HorizontalLine = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight:20,
  marginLeft:20,
  [theme.breakpoints.down('sm')]: {
    marginRight:5,
    marginLeft:5,
  },
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    flex: 1,
    height: '1px',
    backgroundColor: 'white',
  },
  '&::before': {
    marginRight: theme.spacing(2),
  },
  '&::after': {
    marginLeft: theme.spacing(2),
  },
}));

const NavLinks = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  flexWrap: 'wrap',
  '& a': {
    color: 'white',
    textDecoration: 'none',
    margin: `0 ${theme.spacing(1)}`,
    '&:hover': {
      color:"orange",
      textDecoration: 'underline',
    },
  },
  [theme.breakpoints.down('xs')]: {
    marginLeft:1,
    marginRight:1,
  },
}));

const Footer = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <FooterContainer sx={{lineHeight:1}}>
      <HorizontalLine>
        <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white', fontSize: isXs ? 10 : isSm ? 20 : 24 }}>
          <InstagramIcon fontSize={isXs ? "small" : isSm ? "medium" : "large"} />
        </IconButton>
        <IconButton href="https://www.linkedin.com" target="_blank" sx={{ color: 'white', fontSize: isXs ? 10 : isSm ? 20 : 24 }}>
          <LinkedInIcon fontSize={isXs ? "small" : isSm ? "medium" : "large"} />
        </IconButton>
        <IconButton href="https://www.github.com" target="_blank" sx={{ color: 'white', fontSize: isXs ? 10 : isSm ? 20 : 24 }}>
          <GitHubIcon fontSize={isXs ? "small" : isSm ? "medium" : "large"} />
        </IconButton>
        <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white', fontSize: isXs ? 10 : isSm ? 20 : 24 }}>
          <TwitterIcon fontSize={isXs ? "small" : isSm ? "medium" : "large"} />
        </IconButton>
        <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white', fontSize: isXs ? 10 : isSm ? 20 : 24 }}>
          <FacebookIcon fontSize={isXs ? "small" : isSm ? "medium" : "large"} />
        </IconButton>
      </HorizontalLine>

      <Typography variant="h6" gutterBottom sx={{ fontSize: isXs ? 16 : isSm ? 20 : 24 }}>
        Saurabh <span style={{color:"orange"}}>Shinde</span>
      </Typography>

      <Typography variant="body2" sx={{ fontSize: isXs ? 12 : isSm ? 14 : 16 }}>
        &copy; 2024 <span style={{ color: 'red' }}>❤</span> All Rights Reserved
      </Typography>

      <NavLinks sx={{ fontSize: isXs ? 12 : isSm ? 14 : 20 }}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </NavLinks>
    </FooterContainer>
  );
};

export default Footer;
