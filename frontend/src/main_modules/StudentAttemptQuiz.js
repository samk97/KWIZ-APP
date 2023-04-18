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
          <div className="w-full h-10 bg-red-200">
            <h1>Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-4">
            {/* tile */}
            <Link to="/quiz">
              <div className="bg-blue-200 w-60 h-60">
                <h3 className="">Data Structure & Algorithm</h3>
                <p>Maximum Marks: 20</p>
                <p>Time Alloted: 30 min</p>
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
