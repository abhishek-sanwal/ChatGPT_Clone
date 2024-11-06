const message =
  "*ChatGPT may produce incorrect information about people, places, or facts";

const version = "August 10";

import Button from "./Button";
import send from "../assets/send.svg";
import { sendMsgToGeminiAI } from "../gen-ai/gemini";
import styles from "./ChatFooter.module.css";
import { useChatContext } from "../context/ChatContext";
import { useGlobalRefContext } from "../context/GlobalRefContext";
import { useState } from "react";

function ChatFooter() {
  // Local State
  const [question, setQuestion] = useState("");

  const { dispatch } = useChatContext();
  const { inputRef } = useGlobalRefContext();
  async function handleClick() {
    setQuestion("");

    // Add a temporary Loading
    dispatch({
      type: "addMessage",
      payload: {
        question,
        response: "",
      },
    });

    const response = await sendMsgToGeminiAI(question);
    console.log(response);

    // Add actual answer
    dispatch({
      type: "updateMessage",
      payload: {
        question,
        response,
      },
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
        <Button handleClick={handleClick}>
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
