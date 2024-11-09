import { GoogleGenerativeAI } from "@google/generative-ai";
import apiKey from "./apiKey";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    candidateCount: 1,
    stopSequences: ["/n"],
    maxOutputTokens: 500,
    temperature: 0.8,
  },
});

let chat;

function startNewInteractiveChat() {
  // Starts a new Interactive chat
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  return chat;
}

async function sendMsgToGeminiAI({ question, startNewChat = true }) {
  try {
    chat = startNewChat || !chat ? startNewInteractiveChat() : chat;
    const res = await chat.sendMessage(question);
    return res?.response?.text();
  } catch (e) {
    console.log(e);
    return "Unable to fetch. Some Server error ocurred.";
  }
}

function checkEqual(first, second) {
  const ok = Object.keys,
    tx = typeof first,
    ty = typeof second;
  return first && second && tx === "object" && tx === ty
    ? ok(first).length === ok(second).length &&
        ok(first).every((key) => deepEqual(first[key], second[key]))
    : first === second;
}

export { sendMsgToGeminiAI, startNewInteractiveChat, checkEqual };
