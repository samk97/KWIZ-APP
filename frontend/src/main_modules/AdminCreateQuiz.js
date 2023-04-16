import Button from "../components/Button";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function AdminCreateQuiz(props) {


  const [value, setValue] = useState(0);
  const [time, setTime] = useState(0);
  const navigate = useNavigate();

  const handleClick = async  (e) =>{
    e.preventDefault();
    console.log(value + time);
    console.log("a");
    await axios.post('http://localhost:4000/api/create-random-quiz',{ number : value,time : time  }).then(function(res){
      console.log(res);
      localStorage.setItem("quiz",res.data);
      navigate("/preview");
    })
  }


  return (
    <>
      <div className="flex">
        <div
          className={`bg-extremeBlue w-full h-vh min-h-screen overlflow-y-scroll p-5 ${
            props.open ? "ml-72" : "ml-16"
          } duration-200`}
        >
          {/* Select area */}
          <div class="flex gap-5">
            {/* Select Questions */}
            <div class="w-6/12">
              <label
                for="questions"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Questions
              </label>
              <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id="questions"
                class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Select one</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="25">25</option>
                <option value="30">30</option>
               
              </select>
            </div>

            {/* Time */}
            <div class="w-6/12">
              <label
                for="time"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Time
              </label>
              <select
                value={time}
                onChange={(e)=>setTime(e.target.value)}
                id="time"
                class="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Unlimited</option>
                <option value="5">5 min</option>
                <option value="10">10 min</option>
                <option value="15">15 min</option>
                <option value="25">25 min</option>
                <option value="30">30 min</option>

              </select>
            </div>
          </div>

          {/* Button */}
          <div class="flex justify-start">
            <Button
              buttonType="submit"
              buttonLabel="Create Quiz"
              buttonClassName="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm py-2.5 text-center p-5 my-3"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminCreateQuiz;
