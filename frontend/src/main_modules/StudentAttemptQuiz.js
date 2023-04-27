import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const check = (title, aa, rt) => {
  const date = new Date().toLocaleString("en-GB");
  const a = new Date(aa).toLocaleString("en-GB");

  console.log(title, date, a);

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
      console.log(minute2, minute);

      if (minute2 > minute) return true;
      console.log(minute2, rt, minute);
      if (minute2 + rt >= minute) return true;
    }
  }

  return false;
};
const check2 = (title, aa, rt) => {
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

  if (year2 > year) return true;

  if (month2 > month) return true;

  if (dt2 > dt) return true;

  if (hour2 > hour) return true;

  minute2 = Number(minute2);
  minute = Number(minute);
  rt = Number(rt);

  if (minute < minute2) return true;

  return false;
};

const StudentAttempQuiz = (props) => {
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/get-all-quiz", {})
      .then(function (res) {
        res.data.sort((a, b) =>
          new Date(a.startTime).toLocaleString() <
          new Date(b.startTime).toLocaleString()
            ? 1
            : -1
        );
        setData(res.data);

        return () => {};
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const handleClick = (id, title, startTime, runTime) => {
    if (check(title, startTime, runTime) == false) {
      alert("Closed");
      return;
    } else if (check2(title, startTime, runTime)) {
      alert("Quiz will start at" + new Date(startTime).toLocaleString());
      return;
    }
    alert("Quiz active");
    navigate("/quiz/" + id);

    console.log(id, title);
  };

  return (
    <>
      <div className="flex mt-10 sm:mt-0">
        <div
          className={`bg-gray-100 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "sm:ml-72" : "sm:ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tiles */}
            {data.map((details) => {
              const { createdAt, questions, runTime, startTime, title, _id } =
                details;

              const x = new Date(startTime).toLocaleString();
              console.log(x);

              return (
                <div className="w-full sm:w-fit" key={_id}>
                  <div
                    className="bg-blue-200 sm:w-60 sm:h-60 p-4 drop-shadow-xl rounded-md hover:cursor-pointer hover:ring ring-offset-2 ring-red-400"
                    onClick={() => {
                      handleClick(_id, title, startTime, runTime);
                    }}
                  >
                    <div className="mb-2">
                      <p className="text-xl italic">{title}</p>
                    </div>
                    {check(title, startTime, runTime) ? (
                      <button className="text-blue-500 font-bold">Open</button>
                    ) : (
                      <button className="text-red-500">Closed</button>
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
                        <span className="italic">({x.substring(11, 17)}) </span>
                      </p>
                    </div>
                  </div>
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
