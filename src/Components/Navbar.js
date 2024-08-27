import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import { useNavigate, useLocation } from 'react-router-dom';

// Ensure correct paths to background and profile images
const bgImage = require('../Image/dark-background-.png');
const profileImage = require('../Image/saurabh profile.png');
const logoImage = require('../Image/wolf.png'); // Path to your logo image
// const logoImage = require('https://c8.alamy.com/comp/RC4EP9/3d-chrome-superhero-logo-with-letter-s-vector-illustration-glossy-superhero-logo-on-white-background-RC4EP9.jpg'); // Path to your logo image

// Navbar container with the background image added without covering
const NavbarContainer = styled(AppBar)(({ theme }) => ({
  borderBottom: '2px solid black',
  backgroundColor: '#1c1c1c',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'auto',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}));

// Wrapper for the content inside the navbar to keep it sharp
const NavbarContent = styled('div')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
}));

// Styling for the toolbar inside the navbar
const NavbarToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

// Container for logo and project name
const LogoSection = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor:"transparent",
}));

// Styling for the logo image
const LogoImage = styled('img')(({ theme }) => ({
  height: 60,
  marginRight: {xs:0, md:theme.spacing(1)},
}));

// Project name styling
const ProjectName = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: '#fff',
}));

// Navigation links for desktop view
const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

// Styling for active link
const NavButton = styled(Button)(({ theme, active }) => ({
  color: '#fff',
  borderBottom: active ? '2px solid orange' : 'none',
  '&:hover': {
    borderBottom: '2px solid orange',
  },
}));

// Drawer styling for mobile view
const DrawerPaper = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    width: 240,
    backgroundColor: '#1c1c1c',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
}));

// Styling for the text inside the drawer
const DrawerItemText = styled(ListItemText)(({ theme }) => ({
  color: '#fff',
}));

// Menu button styling for mobile view
const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    color: '#fff',
  },
}));

// Right section of the navbar containing profile avatar and nav links
const RightSection = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleNavigation = (path) => () => {
    navigate(path);
    setDrawerOpen(false); // Close drawer after navigation
  };

  const getButtonProps = (path) => ({
    active: location.pathname === path,
    onClick: () => navigate(path),
  });

  return (
    <NavbarContainer position="sticky">
      <NavbarContent>
        <NavbarToolbar>
          <LogoSection>
            <LogoImage src={logoImage} alt="Logo" />
            <ProjectName variant="h6">Saurabh<span style={{color:"orange"}}>-Works</span></ProjectName>
          </LogoSection>
          {isMobile ? (
            <>
              <MenuButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </MenuButton>
              <DrawerPaper
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
              >
                <div
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '16px' }}>
                    <Avatar alt="Profile Image" src={profileImage} onClick={() => navigate("/login")} />
                    <Typography variant='body2' sx={{display:"flex", alignItems:"center", justifyContent:"center", marginLeft:2, color:"white" }}>Saurabh-Works</Typography>  
                  </div>
                  <Divider sx={{ backgroundColor: 'white' }} />
                  <List>
                    <ListItem button onClick={handleNavigation("/")}>
                      <DrawerItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation("/about")}>
                      <DrawerItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation("/services")}>
                      <DrawerItemText primary="Services" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation("/projects")}>
                      <DrawerItemText primary="Projects" />
                    </ListItem>
                    <ListItem button onClick={handleNavigation("/contact")}>
                      <DrawerItemText primary="Contact" />
                    </ListItem>
                  </List>
                </div>
              </DrawerPaper>
            </>
          ) : (
            <RightSection>
              <NavLinks>
                <NavButton {...getButtonProps("/")} >Home</NavButton>
                <NavButton {...getButtonProps("/about")} >About</NavButton>
                <NavButton {...getButtonProps("/services")} >Services</NavButton>
                <NavButton {...getButtonProps("/projects")} >Projects</NavButton>
                <NavButton {...getButtonProps("/contact")} >Contact</NavButton>
              </NavLinks>
              <IconButton onClick={() => navigate("/login")}>
                <Avatar alt="Profile Image" src={profileImage} />
              </IconButton>
            </RightSection>
          )}
        </NavbarToolbar>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
