import addLogo from "../assets/add-30.png";
import styles from "./ActionButton.module.css";
import { useState } from "react";
function ActionButton() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      className={styles.btnContainer}
      onClick={() => setIsClicked(!isClicked)}
    >
      <img className={styles.btnImg} src={addLogo} alt="Add symbol" />
      <span>{isClicked ? "Loading..." : "New Chat"}</span>
    </button>
  );
}

export default ActionButton;
