function Link(props) {
  const linkLabel = props.linkLabel;
  return (
    <>
      <div className="px-3">
        <a href="#" className="text-blue-500">
          {linkLabel}
        </a>
      </div>
    </>
  );
}

export default Link;
