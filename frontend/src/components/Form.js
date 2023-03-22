function Form(props) {
  const formLabel = props.formLabel;
  const buttonLabel = props.buttonLabel;

  return (
    <>
      <div className="z-10 flex flex-col w-2/3 bg-white border-2 border-black border-opacity-30 rounded-2xl shadow-2xl shadow-stone-500 p-3">
        <h1 className="text-[40px] font-extrabold text-center">{formLabel}</h1>

        <form>{props.children}</form>
      </div>
    </>
  );
}

export default Form;
