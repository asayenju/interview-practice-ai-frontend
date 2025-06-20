import { sendPrompt, transcribeaudio, analyzeResponse, formatRes } from '../api/api';
import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  TextField,
  Typography,
  Box,
  AppBar,
  Toolbar,
  InputAdornment,
} from '@mui/material';
import { Send, Mic } from '@mui/icons-material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const ChatPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [showInitialMessage, setShowInitialMessage] = useState(true);
  const [activeRecordingId, setActiveRecordingId] = useState(null);
  const mediaRecorder = useRef(null);
  const audioChunks = useRef([]);

  const startRecording = async (responseId) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorder.current = new MediaRecorder(stream);

      audioChunks.current = [];
      mediaRecorder.current.ondataavailable = (e) => {
        audioChunks.current.push(e.data);
      };

      mediaRecorder.current.onstop = async () => {
        const blob = new Blob(audioChunks.current, { type: 'audio/webm' });
        try {
          const response = await transcribeaudio(blob);
          try {
          const result = await analyzeResponse(
            conversation.find(item => item.id === responseId).text,
            response.transcript
          );
          
          setConversation(prev => prev.map(item => {
            if (item.id === responseId) {
              return { 
                ...item, 
                transcript: response.transcript, 
                analysis: formatRes(result)
              };
            }
            return item;
          }));
          } catch (error) {
            console.log(error.response.status)
            if (error.response && error.response.status === 400) {
              alert("We couldn't hear your response. Please speak louder or more clearly.");
            } else {
              console.error("Other error:", error);
            }
          }
        } catch (err) {
          console.error("Transcription error:", err);
        }
      };

      mediaRecorder.current.start();
      setActiveRecordingId(responseId);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder.current) {
      mediaRecorder.current.stop();
      setActiveRecordingId(null);
    }
  };

  const handleSendMessage = async () => {
    if (!message.trim()) return;

    if (showInitialMessage) {
      setShowInitialMessage(false);
    }

    const userMessage = { 
      sender: 'user', 
      text: message,
      id: Date.now() // Add unique ID for each message
    };
    setConversation((prev) => [...prev, userMessage]);
    setMessage('');

    try {
      const response = await sendPrompt(message);
      const aiMessage = { 
        sender: 'ai', 
        text: response.question,
        id: Date.now() + 1, // Add unique ID for each response
        transcript: null, // Initialize transcript as null
        analysis: null
      };
      setConversation((prev) => [...prev, aiMessage]);
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* AppBar */}
      <AppBar
        position="static"
        color="default"
        sx={{
          borderBottom: '1px solid #1a1a1a',
          backgroundColor: '#fff',
        }}
      >
        <Toolbar>
          <Box
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            <Typography variant="h6" sx={{ color: '#000' }}>
              Interview Practice AI
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Chat Messages */}
      <Box sx={{ flexGrow: 1, overflowY: 'auto', p: 3 }}>
        {showInitialMessage && (
          <Box sx={{ backgroundColor: '#f9f9f9', mb: 2, p: 2 }}>
            <Typography variant="body1" sx={{ mb: 2, color: '#000' }}>
              👋 Hi! Ready for your mock interview?
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#000' }}>
              Tell me what specific questions you want to practice or generate questions for.
            </Typography>
            <Typography variant="body1" sx={{ mb: 1, color: '#000' }}>
              What role and company are you preparing for?
            </Typography>
          </Box>
        )}

        {conversation.map((msg) => (
          <Box
            key={msg.id} // Use the unique ID instead of index
            sx={{
              mb: 2,
              display: 'flex',
              justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                backgroundColor: msg.sender === 'user' ? '#FAF9F6' : '#000000',
                color: msg.sender === 'user' ? '#000' : '#fff',
                maxWidth: '70%',
                wordBreak: 'break-word',
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
              }}
            >
              <Typography variant="body1">
                {msg.text}
              </Typography>

              {msg.sender === 'ai' && (
                <>
                  <IconButton
                    onClick={() => {
                      if (activeRecordingId === msg.id) {
                        stopRecording();
                      } else {
                        startRecording(msg.id);
                      }
                    }}
                    sx={{
                      backgroundColor: '#fff',
                      borderRadius: '50%',
                      width: 36,
                      height: 36,
                      alignSelf: 'flex-start',
                      animation: activeRecordingId === msg.id ? 'pulse 1.5s infinite ease-in-out' : 'none',
                      '@keyframes pulse': {
                        '0%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0.7)' },
                        '70%': { boxShadow: '0 0 0 10px rgba(255,255,255, 0)' },
                        '100%': { boxShadow: '0 0 0 0 rgba(255,255,255, 0)' },
                      },
                      '&:hover': {
                        backgroundColor: '#f0f0f0',
                      },
                    }}
                  >
                    <FiberManualRecordIcon sx={{ 
                      color: activeRecordingId === msg.id ? 'red' : 'black', 
                      fontSize: 16 
                    }} />
                  </IconButton>
                  {msg.transcript && (
                    <Box sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      p: 1, 
                      borderRadius: 1 
                    }}>
                      <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
                        Your answer: {msg.transcript}
                      </Typography>
                    </Box>
                  )}
                  {msg.analysis && (
                    <Box sx={{ 
                      backgroundColor: 'rgba(255,255,255,0.1)', 
                      p: 1, 
                      borderRadius: 1,
                    }}>
                      <Typography variant="body2" sx={{ fontStyle: 'italic', whiteSpace: 'pre-line', fontSize: '15px' }}>
                        Analysis: {msg.analysis}
                      </Typography>
                    </Box>
                  )}

                </>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Message Input */}
      <Box
        sx={{
          px: 2,
          py: 1,
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
      >
        <TextField
          fullWidth
          placeholder="What role are you interviewing for and what do you want to practice?"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          variant="outlined"
          size="small"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
              e.preventDefault();
            }
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  sx={{
                    color: '#000',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                  }}
                >
                  <Send />
                </IconButton>
              </InputAdornment>
            ),
            sx: {
              '& fieldset': { borderColor: '#1a1a1a' },
              '&:hover fieldset': { borderColor: '#000' },
              color: '#000',
              '&.Mui-focused fieldset': { borderColor: '#000' },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default ChatPage;