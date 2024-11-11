function MenuButton({ children, menuRef, handleClick }) {
  return (
    <button ref={menuRef} className="menu" onClick={() => handleClick()}>
      {children}
    </button>
  );
}

export default MenuButton;
