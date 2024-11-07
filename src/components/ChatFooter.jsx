const message =
  "*ChatGPT may produce incorrect information about people, places, or facts";

const version = "August 10";

import { addMessage, updateMessage } from "../context/ChatContext";
import { memo, useState } from "react";

import Button from "./Button";
import send from "../assets/send.svg";
import { sendMsgToGeminiAI } from "../gen-ai/gemini";
import styles from "./ChatFooter.module.css";
import { useChatContext } from "../context/ChatContext";
import { useGlobalRefContext } from "../context/GlobalRefContext";

function ChatFooter() {
  // Local State
  const [question, setQuestion] = useState("");

  // Global States
  const { messages, dispatch } = useChatContext();
  // Global ref
  const { inputRef } = useGlobalRefContext();

  // Function to get llm response
  async function handleClick() {
    if (!question.trim()) return;
    setQuestion("");

    dispatch(addMessage({ question, response: "" }));

    // New Interactive chat or not?
    const isFresh = messages.length === 0;
    const response = await sendMsgToGeminiAI(question, isFresh);

    // Add actual answer
    dispatch(
      updateMessage({
        question,
        response,
      })
    );
  }

  return (
    <div className={styles.footer}>
      <div className={styles.inputBoxWrapper}>
        <textarea
          ref={inputRef}
          rows={1}
          className={styles.inputBox}
          type="text"
          placeholder="Send a message"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <Button question={question} handleClick={handleClick}>
          <img className={styles.chatFooterImage} src={send} alt="Send" />
        </Button>
      </div>
      <p
        className={styles.footerMessage}
      >{`${message}. ChatGPT ${version} Version`}</p>
    </div>
  );
}

export default memo(ChatFooter);
