import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";

import { FaCopy } from "react-icons/fa6";
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
    <button
      className="copy"
      title="Copy Response"
      style={{
        position: "absolute",
        right: "5px",
        top: "5px",
        color: "#fff",
      }}
      onClick={handleClick}
    >
      <FaCopy />
      <ToastContainer id={crypto.randomUUID} />
    </button>
  );
}

export default Copy;
