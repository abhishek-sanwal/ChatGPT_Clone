function Button({ children, handleClick }) {
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
