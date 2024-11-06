import addLogo from "../assets/add-30.png";
import { checkEqual } from "../gen-ai/gemini";
import styles from "./ActionButton.module.css";
import { useChatContext } from "../context/ChatContext";

function ActionButton() {
  // Local State
  const { messages, dispatch, oldChats } = useChatContext();

  function handleClick() {
    // Add message to old chats

    const alreadyThere = messages.length > 0;
    console.log(alreadyThere);
    if (alreadyThere) dispatch({ type: "addChat", payload: messages });
  }

  return (
    <button className={styles.btnContainer} onClick={handleClick}>
      <img className={styles.btnImg} src={addLogo} alt="Add symbol" />
      <span>New Chat</span>
    </button>
  );
}

export default ActionButton;
