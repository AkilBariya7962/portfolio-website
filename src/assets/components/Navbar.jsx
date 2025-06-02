import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const navItems = ['Home', 'Projects', 'Education', 'About'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Akil Bariya
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
        <IconButton href="https://github.com/akilbariya7962" target="_blank">
          <FaGithub />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/akil-bariya-452a7725a/" target="_blank">
          <FaLinkedin />
        </IconButton>
        <IconButton href="https://twitter.com/yourprofile" target="_blank">
          <FaTwitter />
        </IconButton>
        <IconButton href="https://instagram.com/yourprofile" target="_blank">
          <FaInstagram />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#001c55' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Akil Bariya
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Typography key={item} variant="button">
                  {item}
                </Typography>
              ))}
              <IconButton href="https://github.com/akilbariya7962" target="_blank" color="inherit">
                <FaGithub />
              </IconButton>
              <IconButton href="https://www.linkedin.com/in/akil-bariya-452a7725a/" target="_blank" color="inherit">
                <FaLinkedin />
              </IconButton>
              <IconButton href="https://twitter.com/yourprofile" target="_blank" color="inherit">
                <FaTwitter />
              </IconButton>
              <IconButton href="https://instagram.com/yourprofile" target="_blank" color="inherit">
                <FaInstagram />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
