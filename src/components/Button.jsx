function Button({ children, styleClass, buttonRef, handleClick }) {
  return (
    <button ref={buttonRef} onClick={handleClick} className={styleClass}>
      {children}
    </button>
  );
}

export default Button;
