import { OpenAI } from "openai";
import apiKey from "./apiKey";
const openAi = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

// const completion = await openAi.chat.completions.create({
//   model: "gpt-4o-mini",
//   messages: [
//     { role: "system", content: "You are a helpful assistant." },
//     {
//       role: "user",
//       content: "Write a haiku about recursion in programming.",
//     },
//   ],
// });

// console.log(completion.choices[0].message);

export async function sendMsgToOpenAI(message) {
  try {
    res = {};
    // const res = await openAi.chat.completions.create({
    //   model: "gpt-4o-mini",
    //   messages: [
    //     { role: "system", content: "You are a helpful assistant " },
    //     { role: "user", content: message },
    //   ],
    //   prompt: message,
    //   temperature: 0.7,
    //   max_token: 256,
    //   top_p: 1,
    //   frequency_penalty: 0,
    //   presence_penalty: 0,
    // });
    console.log(res?.choices[0]?.message);
    return res?.choices[0]?.message;
  } catch (e) {
    throw new Error("OpenApi Request Failed!!");
  }
}

console.log(sendMsgToOpenAI("What is a bomb"));
