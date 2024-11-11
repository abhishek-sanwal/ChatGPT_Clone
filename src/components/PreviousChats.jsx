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
            key={chat[0].question}
            role="button"
            onClick={() => dispatch(setChat(chat))}
          >
            <img src={messagePic} alt="" />
            <p>
              {/* Only Display First 25 Characters */}
              {chat[0]?.question.length > 25
                ? `${chat[0]?.question.slice(0, 20)}...`
                : chat[0]?.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default PreviousChats;
