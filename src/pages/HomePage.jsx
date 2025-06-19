import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Button clicked');
    navigate('/chat');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0, padding: 0 }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ maxWidth: '1200px', margin: '0 auto', width: '100%', px: { xs: 2, sm: 3 } }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Interview Practice AI
          </Typography>
          <Button
            sx={{
              backgroundColor: '#000000',
              color: '#FFFFFF',
              border: '1px solid #000000',
              '&:hover': {
                backgroundColor: '#FFFFFF',
                color: '#000000',
                border: '1px solid #000000',
              },
            }}
            onClick={handleClick}
          >
            Get Started
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container
        maxWidth={false}
        sx={{
          flexGrow: 1,
          px: { xs: 2, sm: 3, md: 4 },
          py: 6,
          width: '100%',
          margin: 0,
          backgroundColor: '#F8F8F8',
        }}
      >
        <Grid container justifyContent="center" sx={{ width: '100%', margin: 0 }}>
          <Grid item xs={12} md={10} lg={8}>
            {/* Hero Section */}
            <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Practice Interviews. Powered by AI.
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4 }}>
              Get instant feedback from an AI Interviewer. Hone your responses and improve your confidence 
              with our cutting-edge interview simulation platform.
            </Typography>

            {/* Features Section */}
            <Grid container spacing={4} sx={{ mt: 2, mb: 6 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  🎙️ Real-Time Speech Analysis
                </Typography>
                <Typography variant="body1">
                  Our advanced speech recognition technology provides instant transcription and analysis 
                  of your responses, helping you identify areas for improvement.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                  🧠 AI-Powered Insights
                </Typography>
                <Typography variant="body1">
                  Receive detailed feedback on your delivery, tone, and content structure, 
                  tailored to your specific industry and role.
                </Typography>
              </Grid>
            </Grid>

            {/* How It Works Section */}
            <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
              How It Works
            </Typography>
            
            <Grid container spacing={4} sx={{ mb: 6 }}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  1. Select Your Interview Type
                </Typography>
                <Typography variant="body1">
                  Choose from various interview formats including technical, behavioral, 
                  case studies, or customize your own scenario.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  2. Answer Interview Questions
                </Typography>
                <Typography variant="body1">
                  Respond to realistic interview questions either by speaking or typing 
                  your answers, simulating a real interview environment.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  3. Get Comprehensive Feedback
                </Typography>
                <Typography variant="body1">
                  Receive immediate, actionable feedback on your responses, including 
                  content quality, communication skills, and areas for improvement.
                </Typography>
              </Grid>
            </Grid>

            {/* CTA Section */}
            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '12px 24px',
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    border: '1px solid #000000',
                  },
                }}
                onClick={handleClick}
              >
                Start Practicing Now
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#F8F8F8',
          textAlign: 'center',
          padding: '2rem 1rem',
          marginTop: 'auto',
          width: '100%',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} Interview AI. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default HomePage;