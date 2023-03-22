function Button(props) {
  const buttonType = props.buttonType;
  const buttonLabel = props.buttonLabel;
  const buttonClassName = props.buttonClassName;
  return (
    <>
      <div className="flex justify-center">
        <button type={buttonType} className={buttonClassName}>
          {buttonLabel}
        </button>
      </div>
    </>
  );
}

export default Button;
