import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/chat');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFFFFF',
          color: '#000000',
          boxShadow: 'none',
          py: 1
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Interview Practice AI
            </Typography>
            <Button
              variant="contained"
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
              Get Started
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#F8F8F8', py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 2 }}>
                Practice Interviews.<br />Powered by AI.
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Get instant feedback from an AI Interviewer. Hone your responses and improve your confidence.
              </Typography>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  px: 4,
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
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
            Key Features
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#FFFFFF', borderRadius: 2, height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>🎙️ Real-Time Speech Analysis</Typography>
                <Typography>
                  Our advanced speech recognition provides instant transcription and analysis of your responses, 
                  helping you identify areas for improvement in your delivery.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 3, backgroundColor: '#FFFFFF', borderRadius: 2, height: '100%' }}>
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>🧠 AI-Powered Insights</Typography>
                <Typography>
                  Receive detailed feedback on your tone, content structure, and communication skills, 
                  tailored to your specific industry and role.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Section */}
      <Box sx={{ backgroundColor: '#F8F8F8', py: 8 }}>
  <Container maxWidth="lg">
    <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
      How It Works
    </Typography>
    
    {/* Triangle Layout Container */}
    <Box sx={{ 
      position: 'relative',
      height: 400,  // Adjust based on your needs
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* Top Step (1) */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 300,
        p: 3
      }}>
        <Box sx={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          width: 50,
          height: 50,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 2,
          fontWeight: 'bold'
        }}>
          1
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Ask what you want to interview on
        </Typography>
        <Typography>
          You can tell us to ask any question you want
        </Typography>
      </Box>

      {/* Bottom Left Step (2) */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: '25%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 300,
        p: 3
      }}>
        <Box sx={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          width: 50,
          height: 50,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 2,
          fontWeight: 'bold'
        }}>
          2
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Practice Your Responses
        </Typography>
        <Typography>
          Answer questions using voice, simulating real interview conditions
        </Typography>
      </Box>

      {/* Bottom Right Step (3) */}
      <Box sx={{
        position: 'absolute',
        bottom: 0,
        left: '75%',
        transform: 'translateX(-50%)',
        textAlign: 'center',
        width: 300,
        p: 3
      }}>
        <Box sx={{
          backgroundColor: '#000000',
          color: '#FFFFFF',
          width: 50,
          height: 50,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mx: 'auto',
          mb: 2,
          fontWeight: 'bold'
        }}>
          3
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          Receive AI Feedback
        </Typography>
        <Typography>
          Get comprehensive analysis on your performance with actionable insights
        </Typography>
      </Box>
    </Box>
  </Container>
</Box>
      {/* CTA Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
              Ready to Ace Your Next Interview?
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#000000',
                color: '#FFFFFF',
                px: 6,
                '&:hover': {
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: '1px solid #000000',
                },
              }}
              onClick={handleClick}
            >
              Get Started for Free
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ backgroundColor: '#FFFFFF', py: 4, mt: 'auto' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Interview AI. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;