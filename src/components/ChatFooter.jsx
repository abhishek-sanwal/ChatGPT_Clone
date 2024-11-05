const message =
  "*ChatGPT may produce incorrect information about people, places, or facts";

const version = "August 10";

import send from "../assets/send.svg";
import { sendMsgToOpenAI } from "./openAi";
import styles from "./ChatFooter.module.css";
import { useState } from "react";
function ChatFooter({ messages, onAddMessage }) {
  const [height, setHeight] = useState("auto");
  const [question, setQuestion] = useState("");

  function handleChange(e) {
    const maxHeight = e.target.getAttribute("data-height");
    setHeight(
      `${Math.min(
        e.target.scrollHeight,
        e.target.getAttribute("data-height")
      )}px`
    );
  }

  async function handleClick(message) {
    const response = sendMsgToOpenAI(message);
    console.log(response);

    onAddMessage({
      question,
      response,
    });
  }

  return (
    <div className={styles.footer}>
      <div className={styles.inputBoxWrapper}>
        <textarea
          data-height="350"
          style={{
            height: `${height}`,
          }}
          rows={1}
          className={styles.inputBox}
          type="text"
          placeholder="Send a message"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleClick}>
          <img className={styles.chatFooterImage} src={send} alt="Send" />
        </button>
      </div>
      <p
        className={styles.footerMessage}
      >{`${message}. ChatGPT ${version} Version`}</p>
    </div>
  );
}

export default ChatFooter;
