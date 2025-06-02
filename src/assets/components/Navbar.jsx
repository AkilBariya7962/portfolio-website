import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
  Slide,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Education", path: "/education" },
  { name: "About", path: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ background: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "flex-end", px: 3 }}>
          <Slide direction="down" in={true} timeout={700}>
            <IconButton
              onClick={toggleDrawer}
              sx={{
                backgroundColor: "#001C55",
                "&:hover": { backgroundColor: "#0A2472" },
                color: "#fff",
                p: 1.5,
                borderRadius: "12px",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Slide>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            background: "linear-gradient(135deg, #001C55, #0A2472)",
            color: "white",
            width: isMobile ? "100%" : "400px",
            pt: 6,
            px: 3,
            borderTopRightRadius: 40,
            borderBottomRightRadius: 40,
          },
        }}
      >
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", textAlign: "center" }}>
            𝔸𝕊 𝔹𝔸ℝ𝕀𝕐𝔸
          </Typography>
        </Box>

        <List>
          {navLinks.map((link, i) => (
            <ListItem
              key={i}
              component={Link}
              to={link.path}
              onClick={toggleDrawer}
              sx={{
                my: 2,
                borderRadius: 2,
                transition: "all 0.3s ease",
                backgroundColor:
                  location.pathname === link.path ? "rgba(255,255,255,0.15)" : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(255,255,255,0.2)",
                  pl: 3,
                },
              }}
            >
              <ListItemText
                primary={link.name}
                primaryTypographyProps={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
