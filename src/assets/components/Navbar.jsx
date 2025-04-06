import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import home from '../components/img/logo.png';
import { Link, useLocation } from "react-router-dom";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Education", path: "/education" },
    { name: "About", path: "/about" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const appBarStyles = {
    backgroundColor: scrolled ? "#001c55" : "#edf9fe",
    color: scrolled ? "#ffffff" : "#0A2472",
    transition: "background-color 0.3s ease, color 0.3s ease",
    boxShadow: scrolled ? "0 2px 10px rgba(0, 0, 0, 0.15)" : "none",
    px: isMobile ? 0 : 5,
    py: 1,
  };

  return (
    <>
      <AppBar position="fixed" sx={appBarStyles}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: { xs: "20px", sm: "24px", md: "27px" },
              color: scrolled ? "#ffffff" : "#0A2472",
              textDecoration: "none",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            𝔸𝕊 𝔹𝔸ℝ𝕀𝕐𝔸
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {navLinks.map((link, index) => (
              <Button
                key={index}
                component={Link}
                to={link.path}
                sx={{
                  color:
                    location.pathname === link.path
                      ? scrolled ? "#ffffff" : "#0A2472"
                      : scrolled ? "#ffffff" : "#001C55",
                  mx: { xs: 0.5, sm: 1 },
                  fontSize: { xs: "13px", sm: "14px", md: "15px" },
                  fontWeight: location.pathname === link.path ? "bold" : "normal",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: scrolled ? "#e0e0e0" : "#0A2472",
                    fontWeight: "bold",
                  },
                }}
              >
                {link.name}
              </Button>
            ))}
          </Box>

          <IconButton
            edge="end"
            sx={{
              display: { xs: "block", md: "none" },
              color: scrolled ? "#ffffff" : "#001C55",
            }}
            aria-label="menu"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            boxShadow: "none",
            backgroundColor: "#edf9fe",
            width: 250,
          },
        }}
      >
        <Box sx={{ textAlign: "center", paddingTop: 2, paddingLeft: 3, paddingRight: 2 }}>
          <img
            src={home}
            alt="Logo"
            width="250"
            style={{ objectFit: "contain" }}
          />
        </Box>
        <List sx={{ paddingTop: 2 }}>
          {navLinks.map((link, index) => (
            <ListItem
              button
              key={index}
              component={Link}
              to={link.path}
              onClick={handleDrawerToggle}
              sx={{
                "&:hover": {
                  backgroundColor: "#e0f2fe",
                },
                backgroundColor: location.pathname === link.path ? "#e0f2fe" : "transparent",
              }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  color: "#001C55",
                  fontWeight: location.pathname === link.path ? "bold" : "medium",
                  fontSize: "16px",
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <IconButton
            component="a"
            href="/"
            target="_blank"
            sx={{ color: "#00acee", mx: 1 }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            component="a"
            href="/"
            target="_blank"
            sx={{ color: "#e4405f", mx: 1 }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/akil-bariya-452a7725a/"
            target="_blank"
            sx={{ color: "#0e76a8", mx: 1 }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
