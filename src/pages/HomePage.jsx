import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('Button clicked'); // Verify click works
    navigate('/chat'); // Try with explicit string path
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
            <Typography variant="h3" gutterBottom>
              Practice Interviews. Powered by AI.
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Get instant feedback from an AI Interviewer. Hone your responses, improve your confidence.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">🎙️ Real-Time Speech Analysis</Typography>
                <Typography>
                  Upload or record answers, get instant transcript + feedback.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">🧠 AI-Powered Insights</Typography>
                <Typography>
                  Get detailed suggestions based on delivery, tone, and structure.
                </Typography>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
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