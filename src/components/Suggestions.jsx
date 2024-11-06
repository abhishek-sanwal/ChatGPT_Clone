import { checkEqual } from "../gen-ai/gemini";
import messagePic from "../assets/message.svg";
import styles from "./Suggestions.module.css";
import { useChatContext } from "../context/ChatContext";

function Suggestions() {
  const { oldChats, dispatch, messages } = useChatContext();

  // Sets selected chat as current chat
  function handleClick(chat) {
    dispatch({ type: "setChat", payload: chat });
  }

  return (
    <div className={styles.suggestionsBox} role="button">
      {oldChats?.map((chat) => {
        return (
          <div
            className={styles.suggestion}
            key={crypto.randomUUID}
            role="button"
            onClick={() => handleClick(chat)}
          >
            <img src={messagePic} alt="" />
            <p>{chat[0]?.question}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;
