import React from 'react';
import { Container, Grid, Typography, Box, Button, Card, CardMedia, CardContent, CardActions, useMediaQuery, useTheme, Chip } from '@mui/material';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Project Overview: This e-commerce web application is a fully-functional online shopping platform built using React.js for the frontend, offering a rich and seamless user experience. Customers can browse products, add them to their shopping cart, securely complete checkout, and track their orders.",
    image: "https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688501.jpg?t=st=1743852196~exp=1743855796~hmac=7fa7f412d850598c12081fa4539f37c467dcfb2e81d30e69af7e811eff887bfd&w=1800",
    link: "https://github.com/akilbariya7962",
    tags: ["Html", "Tailwind", "API integration", "other featured"]
  },
  {
    title: "Portfolio Website",
    description: "This is a personal portfolio website built to showcase my skills, projects, and experience as a web developer. The site is designed to be clean, modern, and fully responsive, making it accessible on both desktop and mobile devices.",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",

    link: "https://github.com/akilbariya7962",
    tags: ["ReactJS", "Store Data", "MUI"]
  },
  {
    title: "Tour Management App",
    description: "This is a fully responsive, dynamic travel website built to provide users with a seamless experience for discovering and booking tours, adventures, and experiences worldwide. The website offers a variety of packages.",
    image: "https://img.freepik.com/premium-photo/png-young-couple-hiking-traveling-together-border-transparent-background_53876-943356.jpg?w=1800",

    link: "https://github.com/akilbariya7962",
    tags: ["React", "Redux Toolkit", "Redux", "Tailwind CSS", "Typescript"]
  },
];

const ProjectSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box sx={{
      backgroundColor: '#edf9fe',
      padding: { xs: '40px 0', md: '80px 0' },
      position: 'relative',
      overflow: 'hidden',
      marginTop: 10
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              fontWeight: '700',
              color: '#001c55',
              fontSize: { xs: '2rem', md: '2.5rem' },
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: '#001c55',
                borderRadius: '2px'
              }
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#5a7184',
              maxWidth: '700px',
              margin: '0 auto',
              fontSize: { xs: '1rem', md: '1.1rem' },
              mt: 3
            }}
          >
            Here's a selection of my recent work. Each project represents unique challenges and creative solutions.
          </Typography>
        </Box>
        {!isSmallScreen && (
          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            {projects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: '0 10px 30px -5px rgba(0, 28, 85, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px -5px rgba(0, 28, 85, 0.2)',
                    },
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 28, 85, 0.1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      backgroundColor: '#001c55',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      objectFit: 'cover',
                      width: '100%',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        fontWeight: '700',
                        color: '#001c55',
                        mb: 2
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        color: '#5a7184',
                        mb: 3,
                        fontSize: '0.95rem',
                        lineHeight: '1.6'
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: '#e1f0fa',
                            color: '#001c55',
                            fontWeight: '500',
                            fontSize: '0.7rem',
                            borderRadius: '4px',
                            '& .MuiChip-label': {
                              px: 1.2,
                              py: 0.5
                            }
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'flex-end', p: 3, pt: 0 }}>
                    <Button
                      variant="contained"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        fontWeight: '600',
                        borderRadius: '6px',
                        px: 3,
                        py: 1,
                        backgroundColor: '#001c55',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#00308a',
                          boxShadow: '0 4px 12px rgba(0, 28, 85, 0.2)'
                        }
                      }}
                    >
                      View Project
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        {isSmallScreen && (
          <Grid container spacing={3}>
            {projects.map((project, index) => (
              <Grid item xs={12} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    boxShadow: '0 5px 15px -5px rgba(0, 28, 85, 0.1)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 20px -5px rgba(0, 28, 85, 0.15)'
                    },
                    backgroundColor: 'white',
                    border: '1px solid rgba(0, 28, 85, 0.1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '3px',
                      height: '100%',
                      backgroundColor: '#001c55',
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="180"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 2 }}>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: '700',
                        color: '#001c55',
                        mb: 1
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#5a7184',
                        mb: 2,
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}
                    >
                      {project.description.length > 150
                        ? `${project.description.substring(0, 150)}...`
                        : project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: '#e1f0fa',
                            color: '#001c55',
                            fontWeight: '500',
                            fontSize: '0.65rem',
                            borderRadius: '4px',
                            '& .MuiChip-label': {
                              px: 1,
                              py: 0.25
                            }
                          }}
                        />
                      ))}
                      {project.tags.length > 3 && (
                        <Chip
                          label={`+${project.tags.length - 3}`}
                          size="small"
                          sx={{
                            backgroundColor: '#f0f4f8',
                            color: '#5a7184',
                            fontWeight: '500',
                            fontSize: '0.65rem',
                            borderRadius: '4px',
                            '& .MuiChip-label': {
                              px: 1,
                              py: 0.25
                            }
                          }}
                        />
                      )}
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: 'center', pb: 2, px: 2 }}>
                    <Button
                      size="small"
                      variant="outlined"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        textTransform: 'none',
                        fontWeight: '600',
                        borderRadius: '6px',
                        px: 2.5,
                        py: 0.75,
                        color: '#001c55',
                        borderColor: '#001c55',
                        '&:hover': {
                          backgroundColor: '#e1f0fa',
                          borderColor: '#001c55'
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}

      </Container>
    </Box>
  );
};

export default ProjectSection;