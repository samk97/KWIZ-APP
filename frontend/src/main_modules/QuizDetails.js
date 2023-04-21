function QuizDetails(props) {
  const title = "Data Structure Quiz 1";
  const createdAt = "00/00/0000";
  const noOfQeustions = "123";
  const runTime = "10";
  const startTime = "00:00";
  const updatedAt = "00/00/0000";
  const id = "7343847jkwbeiqwy847343";
  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2 mb-3">
            <h1 className="text-xl font-bold text-gray-800">Quiz Details</h1>
          </div>

          <div className="w-full rounded-xl border-2 border-gray-500 p-4">
            <div className="flex justify-center">
              <p className="text-lg font-bold">
                Quiz Title: <span>{title}</span>
              </p>
            </div>
            <div className="bg-green-700 w-full h-[0.2rem] m-2"></div>
            <div className="flex flex-col items-center">
              <p>
                ID: <span>{id}</span>
              </p>

              <p>
                Created at: <span>{createdAt}</span>
              </p>

              <p>
                Total Questions: <span>{noOfQeustions}</span>
              </p>

              <p>
                Runtime: <span>{runTime}</span>
              </p>

              <p>
                Start Time: <span>{startTime}</span>
              </p>

              <p>
                Updated At: <span>{updatedAt}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizDetails;
