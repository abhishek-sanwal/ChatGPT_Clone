import { GoogleGenerativeAI } from '@google/generative-ai';
import apiKey from './apiKey';
const genAI = new GoogleGenerativeAI(apiKey);

// Pre-selected model
// Will add model config options in future versios
const model = genAI.getGenerativeModel({
  model: 'gemini-1.5-flash',
  generationConfig: {
    candidateCount: 1,
    stopSequences: ['/n'],
    maxOutputTokens: 500,
    temperature: 0.8,
  },
});

let chat;

// Only call when we want to start a new interactive chatting session
function startNewInteractiveChat() {
  // Starts a new Interactive chat
  chat = model.startChat({
    history: [
      {
        role: 'user',
        parts: [{ text: 'Hello' }],
      },
      {
        role: 'model',
        parts: [{ text: 'Great to meet you. What would you like to know?' }],
      },
    ],
  });

  return chat;
}

// Call Gemini to get response
async function sendMsgToGeminiAI({ question, startNewChat = true }) {
  try {
    // call startNew when either chat is not defined or new Interactive chat
    // session is required.
    chat = startNewChat || !chat ? startNewInteractiveChat() : chat;
    const res = await chat.sendMessage(question);
    return res?.response?.text();
  } catch (e) {
    console.log(e);
    return 'Unable to fetch. Some Server error ocurred.';
  }
}

// Function to check deep object equal.
function checkEqual(first, second) {
  const ok = Object.keys,
    tx = typeof first,
    ty = typeof second;
  return first && second && tx === 'object' && tx === ty
    ? ok(first).length === ok(second).length &&
        ok(first).every(key => deepEqual(first[key], second[key]))
    : first === second;
}

export { sendMsgToGeminiAI, startNewInteractiveChat, checkEqual };
