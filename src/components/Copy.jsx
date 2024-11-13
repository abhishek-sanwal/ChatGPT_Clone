import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { FaCopy } from "react-icons/fa6";
import styles from "./Copy.module.css";
import { useState } from "react";

function Copy({ text }) {
  const [clicked, setClicked] = useState(false);

  async function handleClick() {
    if (clicked) {
      setClicked(false);
      return;
    }

    try {
      await navigator.clipboard.writeText(text).then(() => {
        console.log("Copied to clipboard");
        toast("Copied to clipboard");
      });
    } catch (e) {
      console.log(e);
    } finally {
      setClicked(true);
    }
  }

  return (
    <button className={styles.copy} title="Copy Response" onClick={handleClick}>
      <FaCopy />
      <ToastContainer containerId={crypto.randomUUID} />
    </button>
  );
}

export default Copy;
