import React from "react";
import { Box, Typography, Button, useTheme, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';  // Corrected imports
import developerImg from "./img/developer1.png";
import designImg from "./img/Site Stats-amico.png";
import communicationImg from "./img/Online world-pana.png";

const services = [
  {
    title: "Frontend Development",
    description: "I am a passionate and dedicated Front-End Developer with expertise in creating visually appealing and user-friendly websites. I specialize in HTML, CSS, JavaScript, and various front-end frameworks like React and Angular. I am committed to building responsive, interactive, and efficient web applications that provide an excellent user experience.",
    img: developerImg,
    color: "#001c55"
  },
  {
    title: "UI/UX Design",
    description: "I am a Front-End Developer and UI/UX Designer with a passion for creating seamless and visually stunning user interfaces. With a strong foundation in design principles, I specialize in both the development and the design of intuitive, responsive, and user-friendly websites and applications. I aim to bridge the gap between beautiful design and technical functionality, ensuring a great user experience across all platforms.",
    img: designImg,
    color: "#0a2472"
  },
  {
    title: "Technical Communication",
    description: "I am a Front-End Developer, UI/UX Designer, and Technical Communicator. With a strong background in both technical and design fields, I aim to create websites and applications that are not only visually appealing but also clear, intuitive, and easy to understand for users. I am also skilled in technical communication, bridging the gap between complex technical concepts and non-technical audiences to ensure clarity in documentation and user instructions.",
    img: communicationImg,
    color: "#0e6ba8"
  }
];

export default function ServicesShowcase() {
  const theme = useTheme();

  return (
    <Box sx={{
      background: "linear-gradient(to bottom, #edf9fe 0%, #edf9fe 100%)",
      py: { xs: 6, md: 10 },
      px: 2,
      marginTop: 8
    }}>
      <Box sx={{
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
        mb: { xs: 4, md: 8 }
      }}>
        <Typography variant="h3" sx={{
          fontWeight: 700,
          mb: 2,
          color: "#1a365d",
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }
        }}>
          What I Do
        </Typography>
        <Typography variant="subtitle1" sx={{
          maxWidth: 700,
          margin: "0 auto",
          color: "#4a5568",
          fontSize: { xs: '1rem', md: '1.1rem' }
        }}>
          I’m Akil Bariya, a passionate React.js developer who thrives on building modern, performant, and user-friendly web applications. I believe in writing clean, maintainable code that stands the test of time.
        </Typography>
      </Box>

      <Box sx={{
        maxWidth: 1200,
        margin: "0 auto",
        px: { xs: 1, sm: 2, md: 4 }
      }}>
        {services.map((service, index) => (
          <Box key={index} sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: index % 2 === 0 ? "row" : "row-reverse"
            },
            alignItems: "center",
            mb: { xs: 6, md: 8 },
            gap: { xs: 3, md: 6 }
          }}>
            <Box sx={{
              width: { xs: '100%', sm: '50%' },
              p: { xs: 1, sm: 2, md: 4 },
              order: { xs: 1, sm: 'unset' }
            }}>
              <Box sx={{
                height: { xs: 200, sm: 250, md: 300 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: `linear-gradient(135deg, #edf9fe 0%, #edf9fe 100%)`,
                borderRadius: 4,
                // border: 3
                // boxShadow: 3
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
                    transition: "transform 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                />
              </Box>
            </Box>
            <Box sx={{
              width: { xs: '100%', sm: '50%' },
              p: { xs: 2, sm: 3, md: 4 },
              textAlign: { xs: 'justify', sm: index % 2 === 0 ? 'justify' : 'justify' }
            }}>
              <Typography variant="h4" sx={{
                mb: 2,
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                color: service.color
              }}>
                {service.title}
              </Typography>
              <Typography variant="body1" sx={{
                mb: 3,
                fontSize: { xs: '0.9rem', md: '1rem' },
                color: "#4a5568"
              }}>
                {service.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{
        textAlign: "center",
        mt: 4
      }}>
        <Typography variant="h6" sx={{ mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
          Connect with Me
        </Typography>
        <Box sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3
        }}>
          <IconButton href="https://github.com/akilbariya7962" target="_blank" sx={{ color: "#333" }}>
            <FaGithub size={30} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/akil-bariya-452a7725a/" target="_blank" sx={{ color: "#0077b5" }}>
            <FaLinkedin size={30} />
          </IconButton>
          <IconButton href="/" target="_blank" sx={{ color: "#1da1f2" }}>
            <FaTwitter size={30} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
