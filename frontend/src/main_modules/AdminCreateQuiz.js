import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
function AdminCreateQuiz(props) {
  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/api/create-random-quiz", {
        number: value,
        time: time,
      })
      .then(function (res) {
        // console.log(res.data);
        const x = JSON.stringify(res.data);
        localStorage.setItem("quiz", x);
        localStorage.setItem("time", startTime);
        localStorage.setItem("runTime", time);
        navigate("/admin/preview");
      });
  };

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
            <h1 className="text-xl font-bold text-gray-800">Create Quiz</h1>
          </div>

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
                    id="quizDate"
                    name="quizDate"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  ></input>
                </div>

                <div class="w-72">
                  <DateTimePicker
                    onChange={setStartTime}
                    value={startTime}
                    label="Date & time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2 w-full"
                    hourPlaceholder="hh"
                    minutePlaceholder="mm"
                    yearPlaceholder="yyyy"
                    monthPlaceholder="mm"
                    dayPlaceholder="dd"
                  />
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
