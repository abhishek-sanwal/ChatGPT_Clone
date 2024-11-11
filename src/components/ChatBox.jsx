import Chats from "./Chats";
import styles from "./ChatBox.module.css";
function ChatBox() {
  return (
    <div
      className={styles.chatBox}
      aria-label="List of chats with questions and responses"
    >
      <Chats />
    </div>
  );
}

export default ChatBox;
