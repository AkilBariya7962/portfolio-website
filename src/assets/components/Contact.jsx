import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import logo from '../components/img/logo.png'
import '../css/Homepage.css'

const waveAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(15deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    mobilenumber: ''
  });
  const [status, setStatus] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const Handlereset = () => {
    setFormData({
      name: '',
      mobilenumber: '',
      message: '',
      email: '',
    })
  }

  const formspreeEndpoint = "https://formspree.io/f/xgvapeob";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsTyping(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsTyping(false);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Thank you for your message!');
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('There was an error submitting your form. Please try again later.');
    }
    Handlereset()
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', minHeight: '100vh', padding: 1, backgroundColor: '#edf9fe' }}>

      <Box sx={{ marginBottom: 4 }}>
        <img
          src={logo}
          alt="character"
          style={{
            width: '190px',
            height: '150px',
            marginTop: 90,
            animation: isTyping ? `${waveAnimation} 1s ease infinite` : 'none',
          }}
        />
      </Box>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: 400 }}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          sx={{ marginBottom: 2 }}
        />
        <TextField
          label="Mobile Number"
          type='number'
          variant="outlined"
          fullWidth
          margin="normal"
          name="mobilenumber"
          value={formData.mobilenumber}
          onChange={handleInputChange}
          required
          sx={{ marginBottom: 2 }}
        />



        <Button type="submit" variant="contained" className='cl' fullWidth sx={{ marginTop: 2 }}>
          Send Message
        </Button>
      </form>

      {status && (
        <Typography variant="h6" sx={{ marginTop: 3, color: '#4caf50' }}>
          {status}
        </Typography>
      )}
    </Box>
  );
};

export default Form;
