import axios from 'axios';
const API_BASE_URL = 'http://localhost:5000/api';

export const sendPrompt = async (prompt) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/interview/generate-question`, { prompt });
        return response.data;
    } catch (error) {
        console.error("Error sending prompt:", error);
        throw new Error("Failed to send prompt");
    }
}

export const analyzeResponse = async (question, transcript) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/interview/analyze-response`, { question, transcript });
        return response.data.analysis;
    } catch (error) {
        console.error("Error analyzing response:", error);
        throw new Error("Failed to analyze response");
    }
}

export const formatRes = (response) => {
    return `Overall Assessment: ${response.overallAssessment || "No Overall Assessment"} \n
    Detailed Breakdown: \n
    Relevance (score: ${response.detailedBreakdown.relevance.score || "N/A"}): ${response.detailedBreakdown.relevance.comment || "N/A"} \n
    Depth (score: ${response.detailedBreakdown.depth.score || "N/A"}): ${response.detailedBreakdown.depth.comment || "N/A"} \n
    Engagement (score: ${response.detailedBreakdown.engagement.score || "N/A"}): ${response.detailedBreakdown.engagement.comment || "N/A"} \n
    Recommendation: ${response.recommendations.comment || "N/A"}
    `
}
export const transcribeaudio = async (audioBlob) => {
  try {
    const formData = new FormData();
    formData.append('audio', audioBlob, 'recording.webm'); // name must match backend route's `req.file` field

    const response = await axios.post(
      `${API_BASE_URL}/transcribe/transcribeAudio`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data; // expect a plain transcription string or { transcript: "..." }
  } catch (error) {
    console.error("Error transcribing audio:", error);
    throw new Error("Transcription error");
  }
};

export const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]); // get base64 string
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};
