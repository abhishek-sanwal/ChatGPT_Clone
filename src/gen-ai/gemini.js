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

// const chat = model.startChat({
//   history: [
//     {
//       role: "user",
//       parts: [{ text: "Hello" }],
//     },
//     {
//       role: "model",
//       parts: [{ text: "Great to meet you. What would you like to know?" }],
//     },
//   ],
// });
// let result = await chat.sendMessage("I have 2 dogs in my house.");
// console.log(result.response.text());
// result = await chat.sendMessage("How many paws are in my house?");
// console.log(result.response.text());

// chat = model.start_chat(
//   (history = [
//     { role: "user", parts: "Hello" },
//     { role: "model", parts: "Great to meet you. What would you like to know?" },
//   ])
// );
// response = chat.send_message("I have 2 dogs in my house.");
// print(response.text);
// response = chat.send_message("How many paws are in my house?");
// print(response.text);

export async function sendMsgToGeminiAI(prompt) {
  try {
    const res = await model.generateContent(prompt);
    return res?.response?.text();
  } catch (e) {
    console.log(e);
    throw new Error("GeminiApi Request Failed!!");
  }
}
