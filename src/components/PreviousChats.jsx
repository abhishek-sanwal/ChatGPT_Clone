import { setChat, useChatContext } from "../context/ChatContext";

import messagePic from "../assets/message.svg";
import styles from "./PreviousChats.module.css";

function PreviousChats() {
  const { oldChats, dispatch } = useChatContext();

  return (
    <div className={styles.previousChatsBox} role="button">
      {oldChats?.map((chat) => {
        return (
          <div
            className={styles.previousChats}
            key={crypto.randomUUID}
            role="button"
            onClick={() => dispatch(setChat(chat))}
          >
            <img src={messagePic} alt="" />
            <p>{chat[0]?.question}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PreviousChats;
