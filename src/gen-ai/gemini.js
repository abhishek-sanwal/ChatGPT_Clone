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

async function sendMsgToGeminiAI(prompt, isFresh = false) {
  try {
    chat = isFresh ? startNewInteractiveChat() : chat;
    const res = await chat.sendMessage(prompt);
    return res?.response?.text();
  } catch (e) {
    console.log(e);
    throw new Error("GeminiApi Request Failed!!. Please request again");
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
