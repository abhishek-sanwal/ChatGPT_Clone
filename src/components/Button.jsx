function Button({ children, handleClick }) {
  return (
    <button title="Ask Chatgpt" onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
