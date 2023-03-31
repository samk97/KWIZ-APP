function AdminCreateQuiz(props) {
  return (
    <>
      <div className="flex">
        <div
          className={`bg-extremeBlue w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          <div className="w-10 h-10 m-3 bg-amber-900"></div>
          <div className="w-10 h-10 m-3 bg-amber-950"></div>
          <div className="w-10 h-10 m-3 bg-skyBlue"></div>
        </div>
      </div>
    </>
  );
}

export default AdminCreateQuiz;
