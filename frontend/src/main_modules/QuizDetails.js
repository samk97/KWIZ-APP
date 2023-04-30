import StudentQuestionArea from "../components/StudentQuestionArea";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ReactLoading from "react-loading";

function StudentQuiz() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const url = process.env.REACT_APP_URL;
  var score = 0;

  let navigate = useNavigate();
  const state = useSelector((state) => ({ ...state }));

  const email = state.user.email;
  var result = { email: email, answer: [] };
  const [flag, setFlag] = useState(true);

  const startTime = localStorage.getItem("quiz-history-start");
  const title = localStorage.getItem("quiz-history-title");
  const runTime = localStorage.getItem("quiz-runtime");
  const questions = localStorage.getItem("quiz-questions");

  useEffect(() => {
    axios
      .post(url + "/get-leaderboard-by-id", { id: id })
      .then(function (res) {
        setData(res.data);
        console.log(res.data);

        return () => { };
      })
      .catch(function (err) {
        console.log(err);
        alert(err.response.data.message);
        navigate("/dashboard");
      });
    setFlag(false);
  }, []);

  



  console.log(data);

  return (
    <>
      {/* Wrapper div */}
      <div class="flex justify-center w-full h-screen">
        {/* left info area */}
        <div class=" hidden md:fixed md:top=0 md:left-0 w-[17rem] md:h-screen md:flex flex-col md:items-center md:bg-gray-200 md:border-r-2 md:border-gray-400">
          <div className="hidden md:flex md:w-full md:h-auto md:bg-emerald-700 p-2">
            <p class="w-full">{title}</p>
          </div>

          {/* Timer Area */}
          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Start Time:{" "}
              <sapn>{startTime}</sapn>
            </p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Run Time: <sapn>{runTime + " Minute"}</sapn>
            </p>
          </div>

          {flag && <ReactLoading type="balls" color="#0000FF"
            height={100} width={50} />}

        </div>

        {/* Quiz area */}

        <div class="md:ml-[17rem] md:w-full h-fit min-h-screen overlflow-y-scroll bg-gray-100 p-3">
          <div className="w-full bg-red-200 p-2">
            <h1 className="text-xl font-bold text-gray-800">Rankings</h1>
          </div>

          <div className="w-full my-3 shadow-slate-800">
            <fieldset className="flex justify-center bg-gradient-to-r from-cyan-400 to-blue-300 border-2 border-gray-700 rounded-2xl shadow-slate-800 shadow-xl p-3">
              <legend className="text-center text-2xl text-purple-950 font-extrabold border-2 bg-yellow-400 border-gray-700 rounded-2xl p-3">
                <h1>LEADERBOARD</h1>
              </legend>

              {/* if no tiles to show */}
              {data.length === 0 ? (
                <div className="w-full flex justify-center h-screen">
                <div className="w-fit h-fit opacity-20 text-2xl font-bold mt-10">
                  <span>No Quizzes Available</span>
                </div>
              </div>
              ) : (
                ""
              )}

              {/* Ranking part */}

              <div className="w-[90%] sm:w-[70%] flex flex-col">
                {/* Single rank + name tab */}
                {data && data.map((e, id) => {
                  return (
                    <div className="flex items-center bg-gradient-to-r from-green-300 to-emerald-500 shadow-slate-800 shadow-xl border-2 border-gray-700 rounded-3xl p-1 m-2">
                      {/* Ranking position */}
                      <div className="flex justify-center rounded-full items-center bg-blue-700 w-11 min-w-fit h-10 min-h-fit m-2 p-2">
                        <p className="text-white text-xl font-bold">{id + 1}</p>
                      </div>
                      {/* Name Section */}
                      <div className="flex justify-start items-center w-full m-2">
                        <p className="text-lg">{e.email}</p>
                      </div>
                      <div className="flex justify-start items-center w-full m-2">
                        <p className="text-lg">{"Score : " + e.score}</p>
                      </div>
                    </div>
                  )
                })}



              </div>
            </fieldset>
          </div>
        </div>


      </div>
    </>
  );
}

export default StudentQuiz;
