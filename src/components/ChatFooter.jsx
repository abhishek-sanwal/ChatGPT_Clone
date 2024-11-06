const message =
  "*ChatGPT may produce incorrect information about people, places, or facts";

const version = "August 10";

import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import send from "../assets/send.svg";
import { sendMsgToGeminiAI } from "../gen-ai/gemini";
import styles from "./ChatFooter.module.css";

function ChatFooter({ onAddMessage, onUpdateMessage, inputRef }) {
  const [question, setQuestion] = useState("");
  async function handleClick() {
    setQuestion("");

    onAddMessage({
      question,
    });

    const response = await sendMsgToGeminiAI(question);
    onUpdateMessage({
      question,
      response,
    });
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
        <Button inputRef={inputRef} handleClick={handleClick}>
          <img className={styles.chatFooterImage} src={send} alt="Send" />
        </Button>
      </div>
      <p
        className={styles.footerMessage}
      >{`${message}. ChatGPT ${version} Version`}</p>
    </div>
  );
}

export default ChatFooter;
