import { Link } from "react-router-dom";

function StudentAttemptQuiz(props) {
  return (
    <>
      <div className="flex">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tile */}
            <Link to="/quiz">
              <div className="bg-blue-200 w-60 h-60 p-4">
                <h3 className="text-xl my-3">Data Structure & Algorithm</h3>
                <div className="text-sm">
                  <p>
                    Maximum Marks: <span>20</span>
                  </p>
                  <p>
                    Time Alloted: <span>30</span> min
                  </p>
                </div>
              </div>
            </Link>

            <div className="bg-blue-200 w-60 h-60"></div>
            <div className="bg-blue-200 w-60 h-60"></div>
            <div className="bg-blue-200 w-60 h-60"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentAttemptQuiz;
