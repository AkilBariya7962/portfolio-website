import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Avatar,
  Divider,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { School, MenuBook, WorkspacePremium } from '@mui/icons-material';

const EducationSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const educationData = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "KSV uni ",
      year: "2021 - 2024",
      description: " hold a Bachelor of Computer Applications (BCA) degree, which has provided me with a strong foundation in computer science and programming. This program covered a variety of essential subjects such as Web development, algorithms, database management systems (DBMS), software engineering, and web development. Through this course, I developed the analytical and problem-solving skills necessary to tackle real-world challenges in the tech industry.",
      icon: <School fontSize="large" />
    },
    {
      degree: "12th Grade (Senior Secondary)",
      institution: "The Modern Secondary and Higher Secondary School.....",
      description: "",
      year: "2021",
      icon: <MenuBook fontSize="large" />
    },
    {
      degree: "10th Grade (Secondary)",
      institution: "The Modern Secondary and Higher Secondary School...",
      year: "2019",
      icon: <MenuBook fontSize="large" />
    },
    {
      degree: "Certifications",
      institution: "Great learning and IBM",
      year: "2023",
      description: "Course Overview: I have completed a certification in cyberSecurity from IBM,and completed a certificate in front and development from great learning which provided me with a comprehensive understanding of HTML , CSS , JS. This certification helped me gain practical knowledge and skills that are highly relevant to my current work in the tech industry",
      icon: <WorkspacePremium fontSize="large" />
    }
  ];

  return (
    <Box sx={{
      backgroundColor: '#f9fbfe',
      py: 8,
      position: 'relative',
      overflow: 'hidden',
      marginTop: 5
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          textAlign: 'center',
          mb: 6,
          position: 'relative'
        }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: '#001c55',
              mb: 2,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                backgroundColor: '#001c55',
                borderRadius: 2
              }
            }}
          >
            Education
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: '#5a7184',
              maxWidth: 700,
              mx: 'auto',
              fontSize: '1.1rem'
            }}
          >
            My academic journey and professional certifications that have shaped my technical expertise.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {educationData.map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                boxShadow: '0 8px 24px rgba(0, 28, 85, 0.08)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(0, 28, 85, 0.12)'
                },
                borderLeft: '4px solid #001c55'
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: 3
                  }}>
                    <Avatar sx={{
                      bgcolor: '#e1f0fa',
                      color: '#001c55',
                      width: 56,
                      height: 56,
                      mr: 3
                    }}>
                      {item.icon}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#001c55'
                        }}
                      >
                        {item.degree}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          color: '#5a7184',
                          fontWeight: 500
                        }}
                      >
                        {item.institution}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      color: '#5a7184',
                      mb: 2,
                      fontSize: '0.95rem',
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <Typography
                      variant="caption"
                      sx={{
                        color: '#001c55',
                        fontWeight: 600,
                        fontSize: '0.9rem'
                      }}
                    >
                      {item.year}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EducationSection;