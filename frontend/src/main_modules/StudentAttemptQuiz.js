import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const check = (title, aa, rt) => {
  const date = new Date().toLocaleString();
  const a = new Date(aa).toLocaleString();

  console.log(title);

  var year = date.substring(6, 10);
  var month = date.substring(3, 5);
  var dt = date.substring(0, 2);
  var hour = date.substring(12, 14);
  var minute = date.substring(15, 17);

  var year2 = a.substring(6, 10);
  var month2 = a.substring(3, 5);
  var dt2 = a.substring(0, 2);
  var hour2 = a.substring(12, 14);
  var minute2 = a.substring(15, 17);

  if (year2 < year) return false;
  if (year > year2) return true;

  if (year == year2) {
    if (month2 < month) return false;
    if (month2 > month) return true;
    if (month == month2) {
      if (dt2 < dt) return false;
      if (dt2 > dt) return true;

      if (hour2 < hour) return false;
      if (hour2 > hour) return true;

      minute2 = Number(minute2);
      minute = Number(minute);
      rt = Number(rt);
      
      if(minute2 > minute) return true;
      console.log(minute2,rt,minute);
      if(minute2 + rt >= minute) return true;


    }
  }

  return false;
};

const StudentAttempQuiz = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/get-all-quiz", {})
      .then(function (res) {
        setData(res.data);

        const x = res.data.map((obj) => {
          obj.flag = "ff";
          return obj;
        });
        console.log(x);

        return () => {};
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

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
            <h1 className="text-xl font-bold text-gray-800">Past Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tiles */}
            {data.map((details) => {
              const { createdAt, questions, runTime, startTime, title, id } =
                details;

              const x = new Date(startTime).toLocaleString();
              console.log(x);

              return (
                <div key={id}>
                  <Link to="/quiz">
                    <div className="bg-blue-200 w-60 h-60 p-4 drop-shadow-xl rounded-md hover:cursor-pointer hover:ring ring-offset-2 ring-red-400">
                      <div className="mb-2">
                        <p className="text-xl italic">{title}</p>
                      </div>
                      {check(title, startTime, runTime) ? (
                        <button>Open</button>
                      ) : (
                        <button>Close</button>
                      )}
                      <div className="text-sm">
                        <p>
                          Created : <span>{createdAt.substring(0, 10)}</span>{" "}
                          <span className="italic">
                            ({createdAt.substring(11, 19)})
                          </span>
                        </p>
                        <p>
                          Total Questions: <span>{questions.length}</span>
                        </p>
                        <p>
                          Time Alloted: <span>{runTime} min</span>
                        </p>

                        <p>
                          Start Time: <span>{x.substring(0, 10)} </span>{" "}
                          <span className="italic">
                            ({x.substring(11, 17)}){" "}
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAttempQuiz;
