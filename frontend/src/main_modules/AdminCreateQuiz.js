import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

import ReactLoading from "react-loading";
function AdminCreateQuiz(props) {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState();
  const [flag,setFlag] = useState(false);
  const navigate = useNavigate();
  const url = process.env.REACT_APP_URL;

  const handleClick = async (e) => {
    setFlag(true);
    e.preventDefault();
    await axios
      .post(url + "/create-random-quiz", {
        number: value,
        time: time,
      })
      .then(function (res) {
        // console.log(res.data);
        const x = JSON.stringify(res.data);
        console.log(startTime);
        localStorage.setItem("quiz", x);
        localStorage.setItem("time", startTime);
        localStorage.setItem("runTime", time);
        navigate("/admin/preview");
      
      });
      setFlag(false);
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
          <div className="w-full bg-red-200 p-2 mb-3">
            <h1 className="text-xl font-bold text-gray-800">Create Quiz</h1>
          </div>

          {flag &&  <ReactLoading type="balls" color="#0000FF" 
        height={100} width={50} />}

          <div className="w-full rounded-xl border-2 border-gray-500 p-4">
            <form>
              {/* Selections area */}
              <div class="flex gap-5 flex-wrap">
                {/* Select Questions */}

                <div class="w-72">
                  <label
                    for="questions"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select Questions
                  </label>
                  <select
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    id="questions"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Select one</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                  </select>
                </div>

                {/* Select Duration */}
                <div class="w-72">
                  <label
                    for="time"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Duration
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    id="time"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  >
                    <option selected>Unlimited</option>
                    <option value="5">5 min</option>
                    <option value="10">10 min</option>
                    <option value="15">15 min</option>
                    <option value="25">25 min</option>
                    <option value="30">30 min</option>
                  </select>
                </div>

                {/* Date Time */}
                <div class="w-72">
                  <label
                    for="quizDate"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Date & Time:
                  </label>
                  <input
                    type="datetime-local"
                    onChange={(e) => {
                      setStartTime(e.target.value);
                    }}
                    value={startTime}
                    id="quizDate"
                    name="quizDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  ></input>
                </div>
              </div>

              {/* Button */}
              <div class="flex justify-center">
                <Button
                  buttonType="submit"
                  buttonLabel="Create Quiz"
                  buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center p-5 my-5"
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCreateQuiz;
