import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { FiDownload } from "react-icons/fi";
import React from 'react';


const check = (title, aa, rt) => {
  const date = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });

  const a = aa;

 

  var year = date.substring(6, 10);
  var month = date.substring(3, 5);
  var dt = date.substring(0, 2);
  var hour = date.substring(12, 14);
  var minute = date.substring(15, 17);

  

  var year2 = a.substring(0, 4);
  var month2 = a.substring(5, 7);
  var dt2 = a.substring(8, 10);
  var hour2 = a.substring(11, 13);
  var minute2 = a.substring(14, 17);

  

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
      

      if (minute2 > minute) return true;
      
      if (minute2 + rt >= minute) return true;
    }
  }

  return false;
};
const check2 = (title, aa, rt) => {
  const date = new Date().toLocaleString("en-GB", { timeZone: "Asia/Kolkata" });
  const a = aa;


  var year = date.substring(6, 10);
  var month = date.substring(3, 5);
  var dt = date.substring(0, 2);
  var hour = date.substring(12, 14);
  var minute = date.substring(15, 17);

  var year2 = a.substring(0, 4);
  var month2 = a.substring(5, 7);
  var dt2 = a.substring(8, 10);
  var hour2 = a.substring(11, 13);
  var minute2 = a.substring(14, 17);

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

const AdminHistory = (props) => {
  const [flag, setFlag] = useState(true);
  let navigate = useNavigate();
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL;
  useEffect(() => {
    axios
      .post(url + "/get-all-quiz", {})
      .then(function (res) {
        res.data.sort((a, b) =>
          new Date(a.startTime).toLocaleString("en-GB", {
            timeZone: "Asia/Kolkata",
          }) <
          new Date(b.startTime).toLocaleString("en-GB", {
            timeZone: "Asia/Kolkata",
          })
            ? 1
            : -1
        );
        setData(res.data);
        setFlag(false);

        return () => {};
      })
      .catch(function (err) {
        alert(err.response.data.message);
      });
  }, []);

  const handleClick = (id, title, startTime, runTime) => {
    localStorage.setItem("quiz-history-start", startTime);
    localStorage.setItem("quiz-history-title", title);
    localStorage.setItem("quiz-runtime", runTime);
    localStorage.setItem("quiz-runtime", runTime);
    navigate(`/quiz-detail/${id}`);

    
  };

  const handleDownload = (id, title) => {
    axios
      .post(url + "/get-quiz-by-id", { id })
      .then(function (res) {
        localStorage.setItem("preview", JSON.stringify(res.data));
        navigate("/preview-quiz");
        return () => {};
      })
      .catch(function (err) {
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <div className="flex mt-10 sm:mt-0">
        <div
          className={`bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "sm:ml-72" : "sm:ml-16"
          } duration-200`}
        >
          {/* Heading */}
          <div className="flex justify-center w-full bg-blue-950 p-2 mb-3">
            <h1 className="text-xl font-bold text-white">Past Quizzes</h1>
          </div>
          {/* Tiles Container */}
          <div className="flex flex-wrap justify-start my-4 gap-5">
            {/* tiles */}

            {flag && (
              <ReactLoading
                type="balls"
                color="#0000FF"
                height={100}
                width={50}
              />
            )}

            {data.map((details) => {
              const { createdAt, questions, runTime, startTime, title, _id } =
                details;

              const x = startTime;

              return (
                <div className="w-full sm:w-fit" key={_id}>
                  <div
                    className="relative bg-gray-100 sm:w-60 sm:h-60 p-4 shadow-xl shadow-slate-700 rounded-md hover:cursor-pointer hover:ring ring-offset-2 hover:bg-cyan-200 ring-red-400"
                    onClick={() => {
                      handleClick(_id, title, startTime, runTime);
                    }}
                  >
                    <div className="mb-2">
                      <p className="text-xl italic">{title}</p>
                    </div>
                    {check(title, startTime, runTime) ? (
                      <>
                        <button className="text-blue-700 font-bold">
                          Open
                        </button>
                        <span className="animate-ping bg-blue-600 absolute top-1 right-1 h-4 w-4 rounded-full"></span>
                        <span className="bg-blue-600 absolute top-1 right-1 h-4 w-4 rounded-full border-white"></span>
                      </>
                    ) : (
                      <button className="text-red-600">Closed</button>
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
                  {/* <div className="text-sm">
                    <button
                      onClick={(e) => handleDownload(_id, title)}
                      class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex "
                    >
                      <svg
                        class="fill-current w-4 h-4 mr-2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                      </svg>{" "}
                    </button>
                  </div> */}
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
