function Button({ clickHandler, isActive, children }) {
  return (
    <button type="button" className={`toggle-button${isActive ? ' active' : ''}`} onClick={clickHandler}>
      {children}
    </button>
  );
}

export default Button;
