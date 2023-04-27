import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const check = (aa) => {
  const date = new Date().toLocaleString("en-GB");
  const a = new Date(aa).toLocaleString("en-GB");
  console.log(date);
  console.log(a);
  const year = date.substring(6, 10);
  const month = date.substring(3, 5);
  const dt = date.substring(0, 2);
  const hour = date.substring(12, 14);
  const minute = date.substring(15, 17);

  const year2 = a.substring(6, 10);
  const month2 = a.substring(3, 5);
  const dt2 = a.substring(0, 2);
  const hour2 = a.substring(12, 14);
  const minute2 = a.substring(15, 17);

  console.log(dt, year, month, hour, minute);
  console.log(dt2, year2, month2, hour2, minute2);

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

      if (minute2 < minute) return false;
      if (minute2 > minute) return true;
    }
  }

  return true;
};

const AdminHistory = (props) => {
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL;
  useEffect(() => {
    axios
      .post(url + "/get-all-quiz", {})
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
          className={`bg-gray-100 w-full h-fit min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Past Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tile */}

            {data.map((details) => {
              const { createdAt, questions, runTime, startTime, title, id } =
                details;
              return (
                <div key={id}>
                  <Link to="/admin/quiz_details">
                    <div className="bg-blue-200 w-60 h-60 p-4 drop-shadow-xl rounded-md hover:cursor-pointer hover:ring ring-offset-2 ring-red-400">
                      <div className="mb-2">
                        <p className="text-xl italic">{title}</p>
                      </div>
                      {check(startTime) ? (
                        <button className="text-blue-500 font-bold">
                          Open
                        </button>
                      ) : (
                        <button className="text-red-400">Closed</button>
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
                          Start Time: <span>{startTime.substring(0, 10)} </span>{" "}
                          <span className="italic">
                            ({startTime.substring(11, 19)}){" "}
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

export default AdminHistory;
