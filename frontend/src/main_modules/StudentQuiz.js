import StudentQuestionArea from "../components/StudentQuestionArea";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function StudentQuiz() {
  const { id } = useParams();
  const [data, setData] = useState([]);

  console.log(id);
  let navigate = useNavigate();
  const state = useSelector((state) => ({ ...state }));
  console.log(state);
  const email = state.user.email;
  console.log(email);
  useEffect(() => {
    axios
      .post("http://localhost:4000/api/get-quiz", { id: id })
      .then(function (res) {
        console.log(res);
        setData(res.data);

        return () => {};
      })
      .catch(function (err) {
        console.log(err);
        alert(err.response.data.message);
        navigate("/dashboard");
      });
    console.log("ssssssssssssssss");
  }, []);

  console.log(data);

  return (
    <>
      {/* Wrapper div */}
      <div class="flex justify-center w-full h-screen">
        {/* left info area */}
        <div class=" hidden md:fixed md:top=0 md:left-0 w-[17rem] md:h-screen md:flex flex-col md:items-center md:bg-gray-200 md:border-r-2 md:border-gray-400">
          <div className="hidden md:flex md:w-full md:h-auto md:bg-emerald-700 p-2">
            <p class="w-full">{email}</p>
          </div>

          {/* Timer Area */}
          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Start Time:{" "}
              <sapn>{new Date(data.startTime).toLocaleString()}</sapn>
            </p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Run Time: <sapn>{data.runTime + " Minute"}</sapn>
            </p>
          </div>

          <div className="hidden md:flex md:w-full md:h-auto md:bg-blue-200 p-2">
            <p class="w-full">
              Total:{" "}
              <span>
                ={data && data.questions ? data.questions.length : "0"}
              </span>
            </p>
          </div>
        </div>

        {/* Quiz area */}
        <div class="md:ml-[17rem] md:w-full h-fit min-h-screen overlflow-y-scroll bg-gray-100 p-3">
          {data &&
            data.questions &&
            data.questions.map((res, num) => {
              return (
                <StudentQuestionArea
                  id={res}
                  number={num}
                ></StudentQuestionArea>
              );
            })}

          <div class="flex justify-center items-center my-10 mx-3 h-10">
            <button
              type="submit"
              class="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm min-w-[6rem] max-w-[8rem] w-1/6 px-5 py-2.5 m-3 my-5 text-center"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default StudentQuiz;
