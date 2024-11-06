import Chats from "./Chats";
import styles from "./ChatBox.module.css";
function ChatBox() {
  return (
    <div className={styles.chatBox}>
      <Chats />
    </div>
  );
}

export default ChatBox;
