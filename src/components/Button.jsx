import clsx from 'clsx';

function Button({ onClick, isActive, children, type = 'button', className, ...rest }) {
  return (
    <button type={type} className={clsx({ active: isActive }, className)} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default Button;
