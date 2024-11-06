import { useEffect } from "react";

function Button({ children, handleClick, inputRef }) {
  return (
    <button
      style={{
        cursor: "pointer",
        backgroundColor: "inherit",
        border: "none",
      }}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
