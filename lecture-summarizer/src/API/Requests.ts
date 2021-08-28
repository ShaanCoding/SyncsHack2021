import axios from "axios";

// Get Keywords
let SERVER_URL = "http://localhost:5000";

export const fetchKeywords = async () => {
  const res = await axios.get(`${SERVER_URL}/keywords`);
  return res.data;
};

// Get Video List
export const fetchVideoList = async () => {
  const res = await axios.get(`${SERVER_URL}/videoList`);
  return res.data;
};

// Get Summarized Notes
export const fetchSummarizedNotes = async () => {
  const res = await axios.get(`${SERVER_URL}/summarizedNotes`);
  return res.data;
};

// Get Anki Deck
export const fetchAnkiDeck = async () => {
  const res = await axios.get(`${SERVER_URL}/ankiFlashCards`);
  return res.data;
};
