import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#001c55",
        color: (theme) => theme.palette.primary.contrastText,
        py: 1,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">


        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', my: 1 }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Made with ❤️ by Akil Bariya
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;