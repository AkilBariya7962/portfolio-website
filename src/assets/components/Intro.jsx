import React, { useEffect } from "react";
import { Box, Typography, Button, IconButton, Paper, useTheme } from "@mui/material";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

import developerImg from "./img/developer1.png";
import designImg from "./img/Site Stats-amico.png";
import communicationImg from "./img/Online world-pana.png";

const services = [
  {
    title: "Frontend Development",
    description: "I am a passionate and dedicated Front-End Developer with expertise in creating visually appealing and user-friendly websites. I specialize in HTML, CSS, JavaScript, and front-end frameworks like React. I build responsive, interactive, and efficient web applications.",
    img: developerImg,
    color: "#001c55"
  },
  {
    title: "UI/UX Design",
    description: "As a UI/UX Designer and Front-End Developer, I blend visual aesthetics with usability. I design intuitive, responsive, and engaging user interfaces to enhance user satisfaction and interaction.",
    img: designImg,
    color: "#0a2472"
  },
  {
    title: "Technical Communication",
    description: "With expertise in both development and communication, I simplify complex technical ideas for users. My focus is on clear documentation and intuitive user flows in every application.",
    img: communicationImg,
    color: "#0e6ba8"
  }
];

export default function ServicesShowcase() {
  const theme = useTheme();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Box sx={{
      background: "linear-gradient(to bottom, #f0f8ff, #e6f7ff)",
      py: { xs: 6, md: 10 },
      px: 2,
      mt: 8
    }}>

      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h3" sx={{
          fontWeight: 800,
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          background: "linear-gradient(to right, #1a365d, #0e6ba8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          What I Do
        </Typography>
        <Typography variant="subtitle1" sx={{
          maxWidth: 700,
          mx: "auto",
          mt: 2,
          color: "#4a5568"
        }}>
          I’m Akil Bariya, a passionate React.js developer who thrives on building modern, performant, and user-friendly web applications.
        </Typography>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {services.map((service, index) => (
          <Paper
            key={index}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            elevation={6}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: index % 2 === 0 ? "row" : "row-reverse" },
              alignItems: "center",
              mb: 6,
              p: 3,
              borderRadius: 4,
              background: `linear-gradient(145deg, ${service.color}10, white)`
            }}
          >
            <Box sx={{ width: { xs: '100%', sm: '50%' }, p: 2 }}>
              <Box sx={{
                height: { xs: 200, sm: 250, md: 300 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 3,
                backgroundColor: `${service.color}15`,
                overflow: "hidden"
              }}>
                <Box
                  component="img"
                  src={service.img}
                  alt={service.title}
                  sx={{
                    height: "100%",
                    width: "auto",
                    maxWidth: "90%",
                    objectFit: "contain",
                    transition: "transform 0.4s ease",
                    '&:hover': {
                      transform: "scale(1.05)"
                    }
                  }}
                />
              </Box>
            </Box>

            <Box sx={{ width: { xs: '100%', sm: '50%' }, textAlign: "justify", p: 2 }}>
              <Typography variant="h4" sx={{ color: service.color, fontWeight: 600, mb: 2 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{ color: "#4a5568", fontSize: "1rem", mb: 2 }}>
                {service.description}
              </Typography>
              <Button variant="contained" sx={{ backgroundColor: service.color, color: '#fff', '&:hover': { backgroundColor: '#000' } }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>

      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Connect with Me
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 3 }}>
          <IconButton href="https://github.com/akilbariya7962" target="_blank" sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
            <FaGithub size={28} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/akil-bariya-452a7725a/" target="_blank" sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
            <FaLinkedin size={28} color="#0077b5" />
          </IconButton>
          <IconButton href="/" target="_blank" sx={{ backgroundColor: "#fff", boxShadow: 3 }}>
            <FaTwitter size={28} color="#1da1f2" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
