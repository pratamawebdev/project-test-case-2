const Button = (props) => {
  const { type, classname, children, onClick } = props;
  return (
    <button type={type} className={`btn ${classname}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
